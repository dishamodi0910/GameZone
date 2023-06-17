let previousWord = '';
const wordList = document.getElementById('word-list');
const message = document.getElementById('message');
let score = 0;
const time = 10;
const timetext = document.querySelector('#time');
let timer;
const initialiseTimer = (time) => {
  timer = setInterval(() => {
    if(time == 0){
      clearInterval(timer);
      message.textContent = `Game Over! Your score is ${score}.`;
    } 
    if (time > 0) {
      time--;
      timetext.innerHTML = time;
      //document.getElementsByClassName('container')[0].style.display = 'block'
    }
  }, 1000);
}
function playTurn() {
  const inputWord = document.getElementById('input-word').value;
  clearInterval(timer);
  initialiseTimer(time);
  timetext.innerHTML = time;
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
      score++;
      previousWord = inputWord;
      addWordToList(inputWord);
      document.getElementById('input-word').value = '';
      message.textContent = '';
    } else {
      clearInterval(timer)
      message.textContent = `Game Over! Your score is ${score}.`;
    }
  }
}

function addWordToList(word) {
  const listItem = document.createElement('li');
  listItem.textContent = word;
  wordList.appendChild(listItem);
}

function restart(){
  timetext.innerHTML = 10;
  clearInterval(timer);
  previousWord = '';
  wordList.innerHTML = '';
  document.getElementById('input-word').value = '';
  message.textContent = '';
  score = 0;
  time = 10;
 
  //initialiseTimer(time);
  //document.getElementById('word-list').style.display = 'none';
}
