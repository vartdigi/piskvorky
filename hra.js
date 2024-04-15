import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

//ADD CLASS FOR BUTTONS
let currentPlayer = 'circle';
const buttons = document.querySelectorAll('button');

//SELECT BUTTONS
const selectBtn = (evt) => {
  const index = Array.from(buttons).indexOf(evt.target);
  const currentPlayerIcon = document.querySelector('.player img');

  if (buttonsArray[index] === '_') {
    evt.target.disabled = true;
    if (currentPlayer === 'circle') {
      currentPlayer = 'cross';
      evt.target.classList.add('button-hra__cross');
      currentPlayerIcon.src = 'icons/circle.svg';
      buttonsArray[index] = 'x';
    } else {
      currentPlayer = 'circle';
      evt.target.classList.add('button-hra__circle');
      currentPlayerIcon.src = 'icons/cross.svg';
      buttonsArray[index] = 'o';
    }
  }
};

//ARRAY

const buttonsArray = Array.from(buttons).map((item) => {
  if (item.classList.contains('button-hra__cross')) {
    return 'x';
  } else if (item.classList.contains('button-hra__circle')) {
    return 'o';
  } else {
    return '_';
  }
});

//WINNER
const vraceniViteze = () => {
  const vitez = findWinner(buttonsArray);
  if (vitez === 'o' || vitez === 'x') {
    alert(`HURA!!Vyhrál hráč "${vitez}"!`);
    location.reload();
  } else if (vitez === 'tie') {
    alert('Hra skončila nerozhodná.');
  }

  setTimeout(vraceniViteze, 500);
};

//USE "selectBtn" FUNCTION FOR ALL BUTTONS

buttons.forEach((button) => {
  button.addEventListener('click', selectBtn);
});

//CONFIRMATION

const confirmAction = (message) => confirm(message);
document.querySelector('.icon-button1').addEventListener('click', (event) => {
  if (!confirmAction('Jste si jisti, že chcete restartovat hru?')) {
    event.preventDefault();
  }
});
document.querySelector('.icon-button2').addEventListener('click', (event) => {
  if (
    !confirmAction(
      'Jste si jisti, že chcete ukončit hru a přejít na hlavní stránku?',
    )
  ) {
    event.preventDefault();
  }
});
vraceniViteze();
