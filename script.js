// Vocabulary List: You can add more words and meanings
const vocabulary = [
    { word: "説明", meaning: "せつめい" },
    { word: "書く", meaning: "かく" },
    { word: "筆者", meaning: "ひっしゃ" },
    { word: "入学式", meaning: "にゅうがくしき" },
    { word: "世界", meaning: "せかい" },
    { word: "昔", meaning: "むかし" },
    { word: "友達", meaning: "ともだち" },{ word: "赤い", meaning: "あかい" },{ word: "抱く", meaning: "だく" },{ word: "泣く", meaning: "なく" },
    { word: "続ける", meaning: "つづける" },{ word: "寝る", meaning: "ねる" },{ word: "建物", meaning: "たてもの" },{ word: "辞める", meaning: "やめる" },
    { word: "試験", meaning: "しけん" },{ word: "混む", meaning: "こむ" },{ word: "遅れる", meaning: "おくれる" },{ word: "間違う", meaning: "まちがう" },
    { word: "洗濯", meaning: "せんたく" },{ word: "鳥", meaning: "とり" },{ word: "鳴く", meaning: "なく" },{ word: "彼", meaning: "かれ" },
    { word: "砂", meaning: "すな" },{ word: "星", meaning: "ほし" },{ word: "住む", meaning: "すむ" },{ word: "春", meaning: "はる" },
    { word: "暖かい", meaning: "あたたかい" },{ word: "洋服", meaning: "ようふく" },{ word: "着る", meaning: "きる" },{ word: "小学校", meaning: "しょうがっこう" },
    { word: "料理", meaning: "りょうり" },{ word: "油", meaning: "あぶら" },{ word: "冬", meaning: "ふゆ" },{ word: "逃げる", meaning: "にげる" },
    { word: "黒い", meaning: "くろい" },{ word: "無理", meaning: "むり" },{ word: "育つ", meaning: "そだつ" },{ word: "手帳", meaning: "てちょう" },
    { word: "困る", meaning: "こまる" },{ word: "貯金", meaning: "ちょきん" },{ word: "目的", meaning: "もくてき" },{ word: "最近", meaning: "さいきん" },
    { word: "窓", meaning: "まど" },{ word: "健康", meaning: "けんこう" },{ word: "野菜", meaning: "やさい" },{ word: "留守", meaning: "るす" },
    { word: "製品", meaning: "せいひん" },{ word: "以内", meaning: "いない" },{ word: "直す", meaning: "なおす" },{ word: "皆様", meaning: "みなさま" },
    { word: "存知", meaning: "ぞんじ" },{ word: "内容", meaning: "ないよう" },{ word: "変わる", meaning: "かわる" },{ word: "授業料", meaning: "じゅぎょうりょう" },
    { word: "値上がり", meaning: "ねあがり" },{ word: "吸う", meaning: "すう" },{ word: "合格", meaning: "ごうかく" },{ word: "望む", meaning: "のぞむ" },
    { word: "病気", meaning: "びょうき" },{ word: "治す", meaning: "なおす" },{ word: "罹る", meaning: "かかる" },{ word: "場合", meaning: "ばあい" },
    { word: "連絡", meaning: "れんらく" },{ word: "次", meaning: "つぎ" },{ word: "修正", meaning: "しゅうせい" },{ word: "発売", meaning: "はつばい" },
    { word: "雪", meaning: "ゆき" },{ word: "転ぶ", meaning: "ころぶ" },{ word: "注意", meaning: "ちゅうい" },{ word: "意向形", meaning: "いこうけい" },
    { word: "会社", meaning: "かいしゃ" },{ word: "吠える", meaning: "ほえる" },{ word: "乗る", meaning: "のる" },{ word: "閉める", meaning: "しめる" },
    { word: "動作", meaning: "どうさ" },{ word: "靴", meaning: "くつ" },{ word: "噛む", meaning: "かむ" },{ word: "風呂", meaning: "ふろ" },
    { word: "熱", meaning: "ねつ" },{ word: "弟", meaning: "おとうと" },{ word: "誕生", meaning: "たんじょう" },{ word: "悪い", meaning: "わるい" },
    { word: "減る", meaning: "へる" },{ word: "金魚", meaning: "きんぎょ" },{ word: "間に合う", meaning: "まにあう" },{ word: "準備", meaning: "じゅんび" },
    { word: "折り紙", meaning: "おりがみ" },{ word: "折る", meaning: "おる" },{ word: "習う", meaning: "ならう" },{ word: "向こう", meaning: "むこう" },
    { word: "輸出", meaning: "ゆしゅつ" },{ word: "安い", meaning: "やすい" },{ word: "安売り", meaning: "やすうり" },{ word: "空く", meaning: "あく" },
    { word: "店", meaning: "みせ" },{ word: "客", meaning: "きゃく" },{ word: "女性", meaning: "じょせい" },{ word: "息子", meaning: "むすこ" },
    { word: "遊ぶ", meaning: "あそぶ" },{ word: "知る", meaning: "しる" },{ word: "勉強", meaning: "べんきょう" },{ word: "忙しい", meaning: "いそがしい" },
    { word: "昼", meaning: "ひる" },{ word: "時間", meaning: "じかん" },{ word: "読む", meaning: "よむ" },{ word: "漢字", meaning: "かんじ" },
    { word: "働く", meaning: "はたらく" },{ word: "体", meaning: "からだ" },{ word: "壊す", meaning: "こわす" },{ word: "難しい", meaning: "むずかしい" },
    { word: "家族", meaning: "かぞく" },{ word: "関する", meaning: "かんする" },{ word: "問題", meaning: "もんだい" },{ word: "意見", meaning: "いけん" },
    { word: "関係", meaning: "かんけい" },{ word: "農業", meaning: "のうぎょう" },{ word: "論文", meaning: "ろんぶん" },{ word: "文化", meaning: "ぶんか" },
    { word: "受験", meaning: "じゅけん" },{ word: "天気予報", meaning: "てんきよほう" },{ word: "晴れる", meaning: "はれる" },{ word: "地震", meaning: "じしん" },
    { word: "速報", meaning: "そくほう" },{ word: "震度", meaning: "しんど" },{ word: "努力", meaning: "どりょく" },{ word: "克服", meaning: "こくふく" },
    { word: "考える", meaning: "かんがえる" },{ word: "台風", meaning: "たいふう" },{ word: "屋根", meaning: "やね" },{ word: "飛ばす", meaning: "とばす" },
    { word: "解決", meaning: "かいけつ" },{ word: "雑誌", meaning: "ざっし" },{ word: "新聞", meaning: "しんぶん" },{ word: "記事", meaning: "きじ" },
    { word: "伝える", meaning: "つたえる" },{ word: "市民", meaning: "しみん" },{ word: "町", meaning: "まち" },{ word: "被害者", meaning: "ひがいしゃ" },
    { word: "被害", meaning: "ひがい" },{ word: "広い", meaning: "ひろい" },{ word: "歴史", meaning: "れきし" },{ word: "暑い", meaning: "あつい" },
    { word: "甘い", meaning: "あまい" },{ word: "同じ", meaning: "おなじ" },{ word: "持つ", meaning: "もつ" },{ word: "待つ", meaning: "まつ" },
    { word: "命", meaning: "いのち" },{ word: "大切", meaning: "たいせつ" },{ word: "教える", meaning: "おしえる" },{ word: "悲しい", meaning: "かなしい" },
    { word: "弱い", meaning: "よわい" },{ word: "痛い", meaning: "いたい" },{ word: "真剣", meaning: "しんけん" },{ word: "戦争", meaning: "せんそう" },
    { word: "終わる", meaning: "おわる" },{ word: "苦しい", meaning: "くるしい" },{ word: "状態", meaning: "じょうたい" },{ word: "質問", meaning: "しつもん" },
    { word: "入院", meaning: "にゅういん" },{ word: "事実", meaning: "じじつ" },{ word: "国語", meaning: "こくご" },{ word: "愛情", meaning: "あいじょう" },
    { word: "会員", meaning: "かいいん" },{ word: "楽器", meaning: "がっき" },{ word: "無料", meaning: "むりょう" },{ word: "野球", meaning: "やきゅう" },
    { word: "盛ん", meaning: "さかん" },{ word: "短い", meaning: "みじかい" },{ word: "各駅", meaning: "かくえき" },{ word: "停車", meaning: "ていしゃ" },
    { word: "図書館", meaning: "としょかん" },{ word: "返す", meaning: "かえす" },{ word: "帰国", meaning: "きこく" },{ word: "驚く", meaning: "おどろく" },
    { word: "遅刻", meaning: "ちこく" },{ word: "禁煙", meaning: "きんえん" },{ word: "日本的", meaning: "にほんてき" },{ word: "興味", meaning: "きょうみ" },
    { word: "冗談", meaning: "じょうだん" },{ word: "年中無休", meaning: "ねんじゅうむきゅう" },{ word: "畳む", meaning: "たたむ" },{ word: "掃除", meaning: "そうじ" },
    { word: "走る", meaning: "はしる" },{ word: "涼しい", meaning: "すずしい" },{ word: "寒い", meaning: "さむい" },{ word: "京都", meaning: "きょうと" },
    { word: "お寺", meaning: "おてら" },{ word: "有名", meaning: "ゆうめい" },{ word: "夏", meaning: "なつ" },{ word: "果物", meaning: "くだもの" },
    { word: "重末", meaning: "じゅうまつ" },{ word: "旅行", meaning: "りょこう" },{ word: "温泉", meaning: "おんせん" },{ word: "庭", meaning: "にわ" },
    
  ];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").disabled = true;
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").disabled = false;
  }
  
