










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

const ISDEBUG = true;

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
    }, 500);

  }, 300);
}


const onload = () => {
  const loading = document.querySelector('.loading');
  const textElement = document.querySelector('.loading-text');
  const styleSheet = document.styleSheets[document.styleSheets.length - 1];

  const typeFromView = (index) => {
    const [char, borderLength] = typingCharacters[index];
    textElement.textContent = char;

    if (borderLength == null) {
      styleSheet.insertRule(`.loading .loading-text-area .loading-text::before {width: 0px;}`, styleSheet.cssRules.length);    
      return;
    }
    const startPosition = char.length - borderLength - 1;
    styleSheet.insertRule(`.loading .loading-text-area .loading-text::before {width: ${borderLength + 1}rem; left: ${startPosition}rem}`, styleSheet.cssRules.length);    
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

document.querySelector('#watchTwitter').addEventListener('click', (e) => {
  document.querySelector('.twitter-timeline').classList.add('show');
})



if (!ISDEBUG) {
  const loading = document.querySelector('.loading');
  loading.classList.add('is-hide');
} else {
  onload();
}

