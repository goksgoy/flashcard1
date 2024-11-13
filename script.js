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
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button
    document.getElementById("show-meaning").disabled = false;
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button after showing the meaning
    document.getElementById("show-meaning").disabled = true;
  }
  