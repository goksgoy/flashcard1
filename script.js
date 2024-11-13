// Vocabulary List: You can add more words and meanings
const vocabulary = [
    { word: "Serendipity", meaning: "The occurrence of events by chance in a happy or beneficial way." },
    { word: "Euphoria", meaning: "A feeling or state of intense excitement and happiness." },
    { word: "Ephemeral", meaning: "Lasting for a very short time." },
    { word: "Cacophony", meaning: "A harsh, discordant mixture of sounds." },
    { word: "Limerence", meaning: "The state of being infatuated or obsessed with another person." }
  ];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function showWord() {
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
    document.getElementById("show-word").disabled = true;
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("next-vocabulary").disabled = false;
  }
  
  function showMeaning() {
    document.getElementById("word").textContent = currentVocabulary.meaning;
    document.getElementById("show-meaning").disabled = true;
  }
  
  function nextVocabulary() {
    document.getElementById("show-word").disabled = false;
    document.getElementById("show-meaning").disabled = true;
    document.getElementById("next-vocabulary").disabled = true;
    document.getElementById("word").textContent = "Click 'Show Word' to start!";
  }
  