// Vocabulary List: You can add more words and meanings
const vocabulary = [
    { word: "説明", meaning: "せつめい" },
    { word: "書く", meaning: "かく" },
    { word: "筆者", meaning: "ひっしゃ" },
    { word: "入学式", meaning: "にゅうがくしき" },
    { word: "世界", meaning: "せかい" },
    { word: "昔", meaning: "むかし" },
    { word: "友達", meaning: "ともだち" },{ word: "赤い", meaning: "あかい" },{ word: "抱く", meaning: "だく" },{ word: "泣く", meaning: "なく" },
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
  
