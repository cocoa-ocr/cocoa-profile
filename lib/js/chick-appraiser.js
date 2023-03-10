

const components = {
  gameTitle: document.querySelector('.game-title'),
  count: document.querySelector('.count'),
  remaingCount: document.querySelector('.remaing-count'),
  timer: document.querySelector('#timer'),
  questionText: document.querySelector('#question-text'),
  isChick: document.querySelector('#isChick'),
  isNotChick: document.querySelector('#isNotChick'),
  questionCount: document.querySelector('#question-count'),
  answerCount: document.querySelector('#answer-count'),
  answerRate: document.querySelector('#answer-rate'),
  gameStart: document.querySelector('#gameStart'),
  shareLink: document.querySelector('#share-link'),
  answerText: document.querySelector('#answer-text'),
  chickCocoa: document.querySelector('#chick-cocoa'),
}

const params = {
  result: [],
  currentQuestion: null,
  state: 'before', // before | starting | end;
}

/**get chick or decoy */
const getChick = () => {
  const patterns = [
    { text: 'ひよこ', answer: true, rate: 50 },
    { text: 'ひよご', answer: false, rate: 4.5 },
    { text: 'ひょこ', answer: false, rate: 5 },
    { text: 'ひょご', answer: false, rate: 4.5 },
    { text: 'びよこ', answer: false, rate: 4.5 },
    { text: 'びよご', answer: false, rate: 4.5 },
    { text: 'びょこ', answer: false, rate: 4.5 },
    { text: 'びょご', answer: false, rate: 4.5 },
    { text: 'ぴよこ', answer: false, rate: 4.5 },
    { text: 'ぴよご', answer: false, rate: 4.5 },
    { text: 'ぴょこ', answer: false, rate: 4.5 },
    { text: 'ぴょご', answer: false, rate: 4.5 },    
  ];

  const random = Math.floor((Math.random() * 100 + 1) * 10) / 10;
  let currentRate = 0;
  const chick = patterns.find((x, i) => {
    currentRate = currentRate + x.rate;
    return random < currentRate;
  });
  return chick || patterns[0];
}

const moveToElement = (element) => {
  const rect = element.getBoundingClientRect();
  const top = rect.top + window.pageYOffset;
  document.documentElement.scrollTop = top;
}

const renderShereLink = () => {
  const {shareLink} = components;
  const {questionCount, answerCount} = calculationResult();
  const baseUrl = 'https://twitter.com/intent/tweet';
  const text = `ひよこ鑑定士ゲームの結果は${questionCount}問中 ${answerCount}問正解だよ！\n次もチャレンジしてね！`;
  const queryParamObj = {
    text,
    url: 'https://cocoa-ocr.github.io/cocoa-profile/chick-appraiser.html',
    hashtags: 'OCR,ココアちゃん,ひよこ鑑定士ゲーム',
    via: 'obg_ocr',
  }
  const query = Object.keys(queryParamObj).map(key => 
    encodeURI(`${key}=${queryParamObj[key]}`)
  ).join('&');

  shareLink.href = `${baseUrl}?${query}`;
}

const calculationResult = () => {
  const questionCount = params.result.length;
  const answerCount = params.result.filter(x =>x.answer === x.userAnswer).length;
  const answerRate = Math.floor(answerCount / questionCount * 100) || 0;

  return {
    questionCount,
    answerCount,
    answerRate,
  }
}


/** render game result form finished */
const renderGameResult = () => {
  const { answerCount, answerRate, questionCount,
    timer, remaingCount, questionText, gameStart, chickCocoa,
    answerText
  } = components;

  remaingCount.classList.add('is-hide');
  questionText.textContent = 'ゲーム終了、お疲れ様でした。';
  document.querySelector('.result-area').classList.remove('is-hide');
  document.querySelector('.game-button-in-window').classList.add('is-hide');

  const answerResult = calculationResult();
  
  questionCount.textContent = answerResult.questionCount;
  answerCount.textContent = answerResult.answerCount;
  answerRate.textContent = answerResult.answerRate;

  answerText.classList.remove('is-hide');
  if (answerResult.answerRate >= 80) {
    chickCocoa.classList.add('success');
    answerText.innerHTML = '<p>転職先見つけたり！</p>'
  } else if (answerResult.answerRate >= 41) {
    answerText.innerHTML = '<p>まぁまぁだが。</p>'
  }else {
    chickCocoa.classList.add('fail');
    answerText.innerHTML = '<p>エンジニアに戻ろう...</p>'
  }

  renderShereLink();
  
  params.state = 'end';
  gameStart.disabled = false;
  timer.textContent = '30';
}

/**Timer Count Down */
const countDownByStart = () => {
  const {count, remaingCount, isChick, isNotChick} = components;

  const id = setInterval(() => {
    const current = parseInt(count.textContent, 10);
    count.textContent = current - 1;

    if (current - 1 === 0) {
      clearInterval(id);
      isChick.disabled = false;
      isNotChick.disabled = false;

      count.classList.add('is-hide');
      count.textContent = '3';

      remaingCount.classList.remove('is-hide');
      
      startGameTimer();
      renderChickOrDecoy();
      params.state = 'starting';
    }
  }, 1000);
}

const renderChickOrDecoy = (answer = false) => {
  const { questionText, answerText } = components;
  const chick = getChick();
  params.currentQuestion = chick;
  questionText.textContent = chick.text;

  // display tooltip
  if (params.state === 'starting') {
    answerText.classList.remove('is-hide');
    setTimeout(() => {
      answerText.classList.add('is-hide');
    }, 300);
  }

  const innerHtml = answer ? 
    `<p>うーん！</p><p>これはひよこ！</p>` : `<p>ニセモノだ！</p>`;
  answerText.innerHTML = innerHtml;
}

const startGameTimer = () => {
  const {timer} = components;
  const id = setInterval(() => {
    const current = parseInt(timer.textContent, 10);
    timer.textContent = current - 1;

    if (current - 1 === 0) {
      clearInterval(id);
      renderGameResult();
    }
  }, 1000);
}

const answerButtonCommon = (e, answer) => {
  e.preventDefault();
  if (params.currentQuestion == null) {
    return;
  }
  params.result.push({...params.currentQuestion, ...{userAnswer: answer}});
  params.currentQuestion = null;
  renderChickOrDecoy(answer);
}

components.isChick.addEventListener('click', (e) => {
  answerButtonCommon(e, true);

})
components.isNotChick.addEventListener('click', (e) => {
  answerButtonCommon(e, false);
})


components.gameStart.addEventListener('click', (e) => {
  const { gameTitle, count, questionText, chickCocoa, answerText, isChick, isNotChick } = components;
  isChick.disabled = true;
  isNotChick.disabled = true;
  params.state = 'before';
  questionText.textContent = '';
  chickCocoa.classList.remove('fail', 'success');
  answerText.classList.add('is-hide');
  components.gameStart.disabled = true;
  moveToElement(document.getElementById('game-area-position'));
  gameTitle.classList.add('is-hide');
  count.classList.remove('is-hide');
  document.querySelector('.game-button-in-window').classList.remove('is-hide');
  document.querySelector('.result-area').classList.add('is-hide')
  countDownByStart();
});


