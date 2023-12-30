
class GameSetting {
  constructor(mode) {
    this.mode = mode;
    /** 'wait' | 'ready'| 'play'*/
    this.state = 'wait'
    this.chars = [
      {
        id: 'a',
        char: 'あ',
        text: '会いたくない、こんな格好じゃカメラOFF',
        imageSrc: './lib/img/it-karuta/computer_kurayami_man.png',
        description: 'スーツの下でも疑った方がいい',
        hasLink: false
      },
      {
        id: 'i',
        char: 'い',
        text: 'インフラは、水や電気とサーバーと',
        imageSrc: './lib/img/it-karuta/system_integration.png',
        description: 'インフラエンジニアの皆さん、いつもありがとう！',
        hasLink: false
      },
      {
        id: 'u',
        char: 'う',
        text: 'Web会議、話がまとまらず待ちぼうけ',
        imageSrc: './lib/img/it-karuta/net_enjou_business.png',
        description: '企画や要件でケンカをする光景がたまに…',
        hasLink: false
      },
      {
        id: 'e',
        char: 'え',
        text: '絵空事、恋と未来と要件定義',
        imageSrc: './lib/img/it-karuta/kodomo_kids_fukidashi.png',
        description: '予算とご利用は計画的に💛',
        hasLink: false
      },
      {
        id: 'o',
        char: 'お',
        text: 'おちついて、焦って進捗よくならない',
        imageSrc: './lib/img/it-karuta/shimekiri_report_schoolgirl.png',
        description: 'タスクの優先順位から見直そう！',
        hasLink: false
      },
      {
        id: 'ka',
        char: 'か',
        text: 'かっこいい、命名規則は厨二病',
        imageSrc: './lib/img/it-karuta/kids_chuunibyou_girl.png',
        description: 'destoryを予約語に採用した人は絶対界隈の人だと思う',
        hasLink: false
      },
      {
        id: 'ki',
        char: 'き',
        text: '切り取りの、使いどころはほどほどに。',
        imageSrc: './lib/img/it-karuta/copy_and_paste.png',
        description: 'コピペは使いどころをミスると生産性Down',
        hasLink: false
      },
      {
        id: 'ku',
        char: 'く',
        text: 'クイズじゃない、アプリに正解ありゃしない。',
        imageSrc: './lib/img/it-karuta/animal_quiz_neko_maru.png',
        description: 'だからこそ難しい！',
        hasLink: false
      },
      {
        id: 'ke',
        char: 'け',
        text: '経験は　必ず役にたつからね。',
        imageSrc: './lib/img/it-karuta/super_businessman.png',
        description: 'あなたが苦労した数年後、こうなっているよ！',
        hasLink: false
      },
      {
        id: 'ko',
        char: 'こ',
        text: 'こわいよね、リリース前と本番障害',
        imageSrc: './lib/img/it-karuta/computer_error_bluescreen.png',
        description: '眠れない夜',
        hasLink: false
      },
      {
        id: 'sa',
        char: 'さ',
        text: '残業は身体と心を壊します。',
        imageSrc: './lib/img/it-karuta/isogashii_man.png',
        description: '休息はちゃんと取りましょうね…',
        hasLink: false
      },
      {
        id: 'shi',
        char: 'し',
        text: '消防士、冬と開発いてほしい。',
        imageSrc: './lib/img/it-karuta/shouboushi_housui.png',
        description: '火事と喧嘩は江戸の花じゃないのよ！！',
        hasLink: false
      },
      {
        id: 'su',
        char: 'す',
        text: 'スライドを、全部読んだら疲れるよ',
        imageSrc: './lib/img/it-karuta/whiteboard_memo_woman2.png',
        description: '文字を全追いせずに、要点をかいつまんで話そう',
        hasLink: false
      },
      {
        id: 'se',
        char: 'せ',
        text: '設計書、君を信じていいんだね？',
        imageSrc: './lib/img/it-karuta/document_sekkeisyo.png',
        description: 'これ私が作ったやつだ！？',
        hasLink: false
      },
      {
        id: 'so',
        char: 'そ',
        text: 'ソースにね、秘伝のタレは入れちゃダメ。',
        imageSrc: './lib/img/it-karuta/cooking_sauce.png',
        description: '読みやすいコードがいいコード！',
        hasLink: false
      },
      {
        id: 'ta',
        char: 'た',
        text: '多言語化、思った以上に大変です。',
        imageSrc: './lib/img/it-karuta/world_people_circle.png',
        description: '翻訳がちゃんと掛かるかのテストがね…',
        hasLink: false
      },
      {
        id: 'chi',
        char: 'ち',
        text: '地図アプリ、自作で作るの大変じゃ。',
        description: 'Googleさま、一生ついていきます！',
        imageSrc: './lib/img/it-karuta/smartphone_map_app_man.png',
        hasLink: false
      },
      {
        id: 'tsu',
        char: 'つ',
        text: 'つよつよの、ITエンジニア　目指してる',
        description: '目指すべき道、それは最強の2文字',
        imageSrc: './lib/img/it-karuta/business_man_macho.png',
        hasLink: false
      },
      {
        id: 'te',
        char: 'て',
        text: '手作業を、らくらく自動化しませんか？',
        description: 'ご相談からお待ちしています！こちらまでどうぞ！👇👇👇👇',
        imageSrc: './lib/img/it-karuta/ai_computer_sousa_robot.png',
        hasLink: true
      },
      {
        id: 'to',
        char: 'と',
        text: '問い合わせ、それは分からん調査します。',
        imageSrc: './lib/img/it-karuta/kaisya_phone_isogashii_man.png',
        description: '即断即決したいのはやまやまだけど、影響調査がね…',
        hasLink: false
      },
      {
        id: 'na',
        char: 'な',
        text: 'ナイスガイ、バグを直してモテモテに。（IT企業限定）',
        imageSrc: './lib/img/it-karuta/motemote_ikemen.png',
        description: '涙拭けよ',
        hasLink: false
      },
      {
        id: 'ni',
        char: 'に',
        text: '二進数、パターン網羅に役立つよ',
        imageSrc: './lib/img/it-karuta/bg_digital_pattern_green.jpg',
        description: '勉強しないなんて勿体ない！基礎大事！',
        hasLink: false
      },
      {
        id: 'nu',
        char: 'ぬ',
        text: 'ぬるぽかな？インスタンスを作りましょ。',
        imageSrc: './lib/img/it-karuta/douga_haishin_youtuber.png',
        description: 'newしてない事があったりなかったり',
        hasLink: false
      },
      {
        id: 'ne',
        char: 'ね',
        text: '猫ちゃんが、乗ってて進捗遅れます。',
        imageSrc: './lib/img/it-karuta/shigoto_zaitaku_cat_woman.png',
        description: '言い訳じゃないのよこれマジで',
        hasLink: false
      },
      {
        id: 'no',
        char: 'の',
        text: '飲みにいく、共通言語がバラバラに',
        imageSrc: './lib/img/it-karuta/yopparai_sakeguse_warui_businesswoman.png',
        description: '何言ってるか分からない人たまにいる',
        hasLink: false
      },
      {
        id: 'ha',
        char: 'は',
        text: 'ハイになる、徹夜と業後とキックオフ',
        imageSrc: './lib/img/it-karuta/yaruki_moeru_man.png',
        description: '目覚めた際の進捗は聞かないで',
        hasLink: false
      },
      {
        id: 'hi',
        char: 'ひ',
        text: 'ひらめいた、迷った時間を返してよ。',
        imageSrc: './lib/img/it-karuta/hirameki_man.png',
        description: '昨日の数時間が今日の数分で解けることもあるさ',
        hasLink: false
      },
      {
        id: 'hu',
        char: 'ふ',
        text: '不具合は、われらの予想を裏切るよ。',
        imageSrc: './lib/img/it-karuta/game_gamen_bug.png',
        description: '何でこんな事起きるのﾔﾀﾞｰ',
        hasLink: false
      },
      {
        id: 'he',
        char: 'へ',
        text: '屁理屈は、いつかはバレるぞやめようね。',
        imageSrc: './lib/img/it-karuta/sagishi_woman.png',
        description: 'ちゃんとミスは報告しましょう',
        hasLink: false
      },
      {
        id: 'ho',
        char: 'ほ',
        text: '褒められる、作ったアプリが高評価',
        imageSrc: './lib/img/it-karuta/sensei_homeru.png',
        description: 'それだけの為に頑張れる',
        hasLink: false
      },
      {
        id: 'ma',
        char: 'ま',
        text: 'マジっすか？言ってることが違います。',
        imageSrc: './lib/img/it-karuta/internet_god.png',
        description: '神は我々の知らない所で法律を変えるのだ',
        hasLink: false
      },
      {
        id: 'mi',
        char: 'み',
        text: '見えちゃダメ、パスワードと秘密鍵',
        imageSrc: './lib/img/it-karuta/computer_password.png',
        description: 'APIキーとか鍵情報は管理方法も気を付けて！',
        hasLink: false
      },
      {
        id: 'mu',
        char: 'む',
        text: 'ムダなもの、一から全部見直しを。',
        imageSrc: './lib/img/it-karuta/cost_cut_sakugen_samurai.png',
        description: 'ムダなものの定義からやります！こちらまで👇👇👇👇',
        hasLink: true
      },
      {
        id: 'me',
        char: 'め',
        text: 'めんどくさい、あなたの業務、お任せを。',
        imageSrc: './lib/img/it-karuta/darui_man.png',
        description: '大なり小なりお任せあれ～詳しくはこちらまで👇👇👇👇',
        hasLink: true
      },
      {
        id: 'mo',
        char: 'も',
        text: 'もうだめだ、誰でも最初は陥るよ。',
        imageSrc: './lib/img/it-karuta/slump_bad_man_study.png',
        description: '皆苦労した道だから、大丈夫大丈夫！',
        hasLink: false
      },
      {
        id: 'ya',
        char: 'や',
        text: 'ややこしい、仕様は\'シンプル\'心掛け',
        imageSrc: './lib/img/it-karuta/presentation_slide_fukuzatsu.png',
        description: 'Simple is Best!!!',
        hasLink: false
      },
      {
        id: 'yu',
        char: 'ゆ',
        text: 'ユーチューブ、動画は真偽を見極めろ',
        imageSrc: './lib/img/it-karuta/game_jikkyou.png',
        description: '相反する意見もちゃんと聞いて自分で判断しよう！',
        hasLink: false
      },
      {
        id: 'yo',
        char: 'よ',
        text: '余裕がない、優先度低はやれません。',
        imageSrc: './lib/img/it-karuta/pose_enryo_man.png',
        description: 'あるある。優先度低のタスクが気付いたら消えてる',
        hasLink: false
      },
      {
        id: 'ra',
        char: 'ら',
        text: '楽をする、とても重要。いいことだ。',
        imageSrc: './lib/img/it-karuta/kaisya_shigoto_music_man.png',
        description: '楽＝皆幸せ！その環境づくりをお手伝いします！詳しくは👇',
        hasLink: true
      },
      {
        id: 'ri',
        char: 'り',
        text: 'リファレンス、ちゃんと読まずにエラー出る',
        imageSrc: './lib/img/it-karuta/file_icon_text_doc.png',
        description: 'コメント含めて整理してから実装した方がよき',
        hasLink: false
      },
      {
        id: 'ru',
        char: 'る',
        text: 'るびーをね、開発したのは日本人',
        imageSrc: './lib/img/it-karuta/yubiwa_ruby.png',
        description: 'Rubyを開発したまつもとゆきひろさん！天才！',
        hasLink: false
      },
      {
        id: 're',
        char: 'れ',
        text: 'レイヤーの、OSIをしっかり覚えよう',
        imageSrc: './lib/img/it-karuta/cosplay_camera.png',
        description: 'OSI参照モデルはネットワークの基礎知識！',
        hasLink: false
      },
      {
        id: 'ro',
        char: 'ろ',
        text: 'ロックだね、本番環境直いじり',
        imageSrc: './lib/img/it-karuta/music_punk_rocker.png',
        description: '絶対に褒められない行為です',
        hasLink: false
      },
      {
        id: 'wa',
        char: 'わ',
        text: '忘れてた、業務の合間の事務作業',
        imageSrc: './lib/img/it-karuta/jikan_tobu_woman.png',
        description: '管理側にとっては重要な作業なんだけどね…',
        hasLink: false
      }
    ];
    this.gamePanels = [];
    this.quizzes = [];
    this.readyCount = 10;
    this.readyIntervalId = 0;
    this.quizInterval = 0;
    this.secondQuizInterval = 0;
    this.quizIndex = 0;
    this.quiz = {};
    this.cpuTimer = 10000;
    this.cpuTimerId = 0;

    this.answered = [];
    this.actionId = '';

    this.dialog = {
      content: document.getElementById('answerDialog'),
      answer: document.getElementById('answerResult'),
      char: document.getElementById('answerChar'),
      image: document.getElementById('answerImage'),
      text: document.getElementById('answerText'),
      description: document.getElementById('answerDescription'),
      obgLink: document.querySelector('.obg-link'),
    };

    this.init();
  }

  init() {
    this.initGameCards();
    this.gamePanels = this.shuffle();
  }

  setGameMode(mode) {
    this.mode = mode;
  }

  shuffle() {
    const clones = [...this.chars];

    for (let i = clones.length - 1; i >= 0; i--) {
      const num = Math.floor(Math.random() * (i + 1));

      const storage = clones[i];
      clones[i] = clones[num];
      clones[num] = { ...storage, isRead: false };
    }
    return clones;
  }

  showDisplays() {
    const imageArea = document.getElementById('images');
    this.gamePanels.forEach(x => {
      const div = document.createElement('div');
      div.classList.add('image-container', 'image-event');
      div.setAttribute('data-char', x.char);
      div.id = x.id;

      div.append(x.image);
      imageArea.append(div);
    })

    const selectors = Array.from(document.querySelectorAll('.image-event'));
    selectors.forEach(x => {
      x.addEventListener('click', e => {
        e.preventDefault();

        if (this.state !== 'play') {
          return;
        }

        this.onAnswer('myself', e.currentTarget.id);
      });
    })
  }

  onAnswer(user, answerId) {
    clearTimeout(this.cpuTimerId);
    clearInterval(this.quizInterval);
    clearInterval(this.secondQuizInterval);

    const isMySelf = user === 'myself'; 
    const isCorrect = isMySelf && answerId === this.quiz.id;

    const answerType =  isCorrect ? 'correct' : 
      isMySelf ? 'fail' : 'cpuAnswer';

    this.actionId = answerId;

    this.answered.push({
      ...this.quiz, ...{ answer: isCorrect, answerType, },
    });

    const answerCard = document.getElementById(this.quiz.id);
    answerCard.classList.add('answered');

    this.dialog.image.src = this.quiz.imageSrc;
    this.dialog.char.textContent = this.quiz.char;
    this.dialog.text.textContent = this.quiz.text;
    this.dialog.description.textContent = this.quiz.description;
    this.dialog.answer.textContent = 
      isCorrect ? '正解' :
        isMySelf ? '不正解' : 'CPUが回答しました。';
    this.dialog.answer.classList.add(isCorrect ? 'success': 'fail');
    if (this.quiz.hasLink) {
      this.dialog.obgLink.classList.remove('is-hide')
    }
    
    this.dialog.content.showModal();
  }

  startReadyTimer() {
    this.quizzes = this.shuffle();

    const readyCount = document.getElementById('readyCount');
    this.state = 'ready';
    
    this.readyIntervalId = setInterval(() => {
      this.readyCount = this.readyCount - 1;
      readyCount.innerText = this.readyCount;

      if (this.readyCount === 0) {
        clearInterval(this.readyIntervalId);
        this.state = 'play';
        this.playGame();
      }
    }, 1000);
  }

  hideReady() {
    if (this.state !== 'play') {
      throw new Error('play error');
    }
    ['#forceStart', '#readyCount', '.guide'].forEach(selector => {
      document.querySelector(selector).classList.add('is-hide');
    });
    document.getElementById('text').classList.remove('is-hide');    
  }

  gameFinish() {
    const dialog = document.getElementById('gameResult');
    dialog.showModal();

    const total = this.answered.length;
    const answerLength = this.answered.filter(x => x.answer).length;

    document.getElementById('answerLength').textContent = total;
    document.getElementById('successCount').textContent = answerLength;
    document.getElementById('correct').textContent = answerLength;
    document.getElementById('fail').textContent = this.answered.filter(x => x.answerType === 'fail').length;
    document.getElementById('cpuAnswer').textContent = this.answered.filter(x => x.answerType === 'cpuAnswer').length;

    const baseUrl = 'https://twitter.com/intent/tweet';
    const text = `ITかるたの結果は${total}問中 ${answerLength}問正解だよ！\n次もチャレンジしてね！`;
    const queryParamObj = {
      text,
      url: 'https://cocoa-ocr.github.io/cocoa-profile/it-karuta',
      hashtags: 'OCR,ココアちゃん,ITかるた',
      via: 'obg_ocr',
    }
    const query = Object.keys(queryParamObj).map(key => 
      encodeURI(`${key}=${queryParamObj[key]}`)
    ).join('&');
  
    document.getElementById('shareLink').href = `${baseUrl}?${query}`;
  }

  speechCard() {
    this.quiz = this.quizzes[this.quizIndex];
    if (this.quiz == null) {
      return this.gameFinish();
    }

    let count = 0;
    const textElement = document.getElementById('text');

    const getText = () => {
      const text = this.quiz.text.substring(0, count);
      const char = this.quiz.text.substring(count, count + 1);
      textElement.innerText = text;
      count = count + 1;

      return {text, char};
    }
    
    this.quizInterval = setInterval(() => {
      const {text, char} = getText();

      // 句読点はリズムを変えたい。
      if (char === '　' || char === '、') {
        clearInterval(this.quizInterval);
        setTimeout(() => {
          this.secondQuizInterval = setInterval(() => {
            const {text, char} = getText();
            if (text.length === this.quiz.text.length) {
              clearInterval(this.quizInterval);
              clearInterval(this.secondQuizInterval);
            }
          }, 200);
        }, 1000);
      }
    }, 200);

    this.cpuTimerId = setTimeout(() => {
      this.onAnswer('enemy', this.quiz.id);
    }, this.cpuTimer);
  }

  playGame() {
    this.hideReady();
    this.speechCard();
  }

  resetCard() {
    const {answer, char, content, text, description, image, obgLink} = this.dialog;
    const textElement = document.getElementById('text');
    content.close();
    textElement.textContent = '';
  
    answer.textContent = '';
    answer.classList.remove('success', 'fail');
  
    text.textContent = '';
    char.textContent = '';
    description.textContent = '';
    image.src = '';
    obgLink.classList.add('is-hide');
  
    this.quizIndex = this.quizIndex + 1;
    this.speechCard();
  }

  forceStart() {
    const readyCount = document.getElementById('readyCount');

    clearInterval(this.readyIntervalId);
    this.readyCount = 0;
    readyCount.innerText = '0';
    this.state = 'play';
    this.playGame();
  }
  

  initGameCards() {
    this.chars.forEach(x => {
      const imageElement = document.createElement('img');
      imageElement.src = x.imageSrc;
      imageElement.classList.add('karuta');

      x.image = imageElement;
    });
  }
}
// create Qr code
// const qrcodeButton = document.getElementById('createQrCode');
// qrcodeButton.addEventListener('click', (e) => {

// })

const startCPU = document.getElementById('startCPU');
startCPU.addEventListener('click', () => {
  gameSetting.setGameMode('cpu');

  gameSetting.showDisplays();
  document.querySelector('.it-karuta-control-panel').classList.remove('is-hide');

  startCPU.classList.add('is-hide');
  gameSetting.startReadyTimer();
});

const forceStart = document.getElementById('forceStart');
forceStart.addEventListener('click', (e) => {
  gameSetting.forceStart();
});

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', e => {
  gameSetting.resetCard();
});

const retryButton = document.getElementById('retry');
retryButton.addEventListener('click', e => {
  window.location.reload();
})


let gameSetting = new GameSetting();