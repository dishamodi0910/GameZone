let previousWord = '';
const wordList = document.getElementById('word-list');
const message = document.getElementById('message');

function playTurn() {
  const inputWord = document.getElementById('input-word').value;
  
  if (inputWord === '') {
    message.textContent = 'Please enter a word.';
    return;
  }
  
  if (previousWord === '') {
    previousWord = inputWord;
    addWordToList(inputWord);
    document.getElementById('input-word').value = '';
    message.textContent = '';
  } else {
    const lastChar = previousWord.charAt(previousWord.length - 1);
    const firstChar = inputWord.charAt(0);
    
    if (lastChar.toLowerCase() === firstChar.toLowerCase()) {
      previousWord = inputWord;
      addWordToList(inputWord);
      document.getElementById('input-word').value = '';
      message.textContent = '';
    } else {
      message.textContent = 'Invalid word. Please enter a word starting with the letter "' + lastChar.toUpperCase() + '".';
    }
  }
}

function addWordToList(word) {
  const listItem = document.createElement('li');
  listItem.textContent = word;
  wordList.appendChild(listItem);
}
