const userAgentData = navigator.userAgentData;
const IS_SMARTPHONE = window.innerWidth < 767;
const IS_SNOWING = false;
const ISDEBUG = false;

const nextDeployDate = new Date(2023, 4 - 1, 1);

/**Loading Characters */
const typingCharacters = [
  ['ｓ',0],
  ['す', 0],
  ['すー',1],
  ['すーｐ', 2],
  ['すーぱ',2],
  ['すーぱー', 3],
  ['スーパー', null],
  ['スーパーｐ', 0],
  ['スーパーぷ', 0],
  ['スーパーぷｒ',1],
  ['スーパーぷろ', 1],
  ['スーパーぷろｇ', 2],
  ['スーパーぷろぐ', 2],
  ['スーパーぷろぐｒ', 3],
  ['スーパーぷろぐら', 3],
  ['スーパーぷろぐらｍ', 4],
  ['スーパーぷろぐらま', 4],
  ['スーパーぷろぐらまー', 5],
  ['スーパープログラマー', null],
  ['スーパープログラマーｋ', 0],
  ['スーパープログラマーこ', 0],
  ['スーパープログラマーこｋ', 1],
  ['スーパープログラマーここ', 1],
  ['スーパープログラマーここあ', 2],
  ['スーパープログラマーココア', null],
  ['スーパープログラマーココアｃ',0],
  ['スーパープログラマーココアｃｈ', 1],
  ['スーパープログラマーココアちゃ',1],
  ['スーパープログラマーココアちゃｎ', 2],
  ['スーパープログラマーココアちゃん', null],
];

const isNeedHide = () => {
  if (nextDeployDate == null) {
    return false;
  }
  return nextDeployDate.getTime() > new Date().getTime();
}


const onLoadEnd = () => {
  const loading = document.querySelector('.loading');
  const styleSheet = document.styleSheets[document.styleSheets.length - 1];
  const deleteIndex = [];
  [...styleSheet.rules].forEach((x, i) => {
    if (x.selectorText === '.loading .loading-text-area .loading-text::before') deleteIndex.push(i);
  });


  setTimeout(() => {
    deleteIndex.reverse().forEach(x => {
      styleSheet.deleteRule(x);
    })

    loading.classList.add('is-hide-effect');
    setTimeout(() => {
      loading.classList.add('is-hide');
      loading.classList.remove('is-hide-effect');

      lazyImageLoad();
    }, 500);

  }, 300);
}

/**Show Loading Display on View. */
const showLoading = () => {
  const textElement = document.querySelector('.loading-text');
  const styleSheet = document.styleSheets[document.styleSheets.length - 1];

  const typeFromView = (index) => {
    const [char, borderLength] = typingCharacters[index];
    textElement.textContent = char;

    if (borderLength == null) {
      styleSheet.insertRule(`.loading .loading-text-area .loading-text::before {width: 0px;}`, styleSheet.cssRules.length);    
      return;
    }
    const startPosition = (char.length - borderLength - 1) * 1.625;
    styleSheet.insertRule(`.loading .loading-text-area .loading-text::before {width: ${(borderLength + 1)  * 1.625}rem; left: ${startPosition * 1.625}rem}`, styleSheet.cssRules.length);    
  }

  let current = 0;
  const intervalId = setInterval(() => {

    if (current === typingCharacters.length - 1) {
      clearInterval(intervalId);
      onLoadEnd();
    }
    typeFromView(current);
    current = current + 1;
  }, 50);
}

/** Lazy loading Image */
const lazyImageLoad = async () => {
  const lazyImages = [...document.querySelectorAll('.lazy-image.loading-image')];

  const promises = lazyImages.map((img, i) => new Promise((resolve) => {
    const { src, hidden } = img.dataset;

    if (hidden != null && isNeedHide()) {
      return;
    }
    img.setAttribute('src', src);
    img.classList.remove('loading-image');

    resolve();
  }));

  await Promise.all(promises);
}

/**scroll moving Specific Element */
const moveToElement = (element) => {
  const rect = element.getBoundingClientRect();
  const top = rect.top + window.pageYOffset;
  document.documentElement.scrollTop = top;
}

const gaTag = (arguments) => {
  dataLayer.push(arguments);
}

const readGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  
  gaTag('js', new Date());
  gaTag('config', 'G-39J5QCTR20');
}


/**Watch Twitter Button Event */
document.querySelector('#watchTwitter').addEventListener('click', (e) => {
  document.querySelector('.twitter-timeline').classList.add('show');
});

/**Click Image */
[...document.querySelectorAll('.lazy-image')].forEach(lazyImage => {

  // if smartphone device is full size rendering (not bind events)
  if (IS_SMARTPHONE) {
    const caption = document.getElementById('galleryCaption');
    caption.innerText = '';
    return;
  }

  lazyImage.addEventListener('click', (e) => {
    const {src, author} = e.target.dataset;
    const preview = document.querySelector('.preview-image');
    preview.innerHTML = '';
    const image = new Image();

    image.onload = (({target}) => {

      if (author != null) {
        target.dataset.author = author;
        target.title = `イラスト作成：${author}さま`;
      }
      target.classList.add('previewing-image');

      target.style.width = '100%';
      preview.appendChild(target);
      document.querySelector('.image-select-area').style.maxHeight = `${target.offsetHeight}px`;

      // scroll Window
      moveToElement(document.getElementById('galleryTopPosition'));
    });
    image.src = src;
  });
});


window.addEventListener('load', () => {
  if (ISDEBUG) {
    const loading = document.querySelector('.loading');
    loading.classList.add('is-hide');
    lazyImageLoad();
  } else {
    showLoading();
  }

  // snowing
  if (IS_SNOWING) {
    const snowBalls = document.querySelector('.snow-balls');
    snowBalls.classList.add('snowing');
  }

  // deloyMode
  if (isNeedHide()) {
    document.querySelector('.new-contents-area').classList.add('is-hide');
  }
});
readGoogleAnalytics();
