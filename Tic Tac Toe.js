const squares = document.querySelectorAll('.button');
const status = document.querySelector('.result');
let currentPlayer = 'X';

function handleDraw() {
  status.textContent = 'Draw!';
}


function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function handleClick() {
  if (this.textContent !== '') {
    return;
  }
  this.textContent = currentPlayer;
  checkForWin();
  switchPlayer();
}

function handleWin() {
  status.textContent = `Player ${currentPlayer} wins!`;
  for (const square of squares) {
    square.removeEventListener('click', handleClick);
  }
}
function checkForWin() {
  for (let i = 0; i < 9; i += 3) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 1].textContent === currentPlayer &&
        squares[i + 2].textContent === currentPlayer) {
      return handleWin();
    }
  }
  for (let i = 0; i < 3; i++) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 3].textContent === currentPlayer &&
        squares[i + 6].textContent === currentPlayer) {
      return handleWin();
    }
  }
  if (squares[0].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) {
    return handleWin();
  }
  if (squares[2].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[6].textContent === currentPlayer) {
    return handleWin();
  }
  if (Array.from(squares).every(square => square.textContent !== '')) {
    return handleDraw();
  }
}

for (const square of squares) {
  square.addEventListener('click', handleClick);
}