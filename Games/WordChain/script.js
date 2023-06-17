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
  clearInterval(timer);
  previousWord = '';
  wordList.innerHTML = '';
  document.getElementById('input-word').value = '';
  message.textContent = '';
  score = 0;
  time = 0;
  timetext.innerHTML = time;
  initialiseTimer(time);
  //document.getElementById('word-list').style.display = 'none';
}

const buttonGroup = document.getElementById("button-group");
const buttonGroupPressed = e => {
  // element.display.style = 'none';
  const isButton = e.target.nodeName === 'BUTTON';

  if (!isButton) {
    return
  }

  elementvalue = e.target.id;
  if (elementvalue == "1") {
    ans = 1;
  }
  else if (elementvalue == "2") {
    ans = 2;
  }
  else if (elementvalue == "3") {
    ans = 3;
  }
}