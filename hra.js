import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

//ADD CLASS FOR BUTTONS
let currentPlayer = 'circle';

//SELECT BUTTONS
const selectBtn = (evt) => {
  evt.target.disabled = true;
  if (currentPlayer === 'circle') {
    evt.target.classList.add('button-hra__cross');
    currentPlayer = 'cross';
    document.getElementById('current-player').src = 'icons/circle.svg';
  } else {
    evt.target.classList.add('button-hra__circle');
    currentPlayer = 'circle';

    document.getElementById('current-player').src = 'icons/cross.svg';
  }

  //ARRAY
  const buttonsArray = Array.from(buttons);
  const buttonsArraySymbols = buttonsArray.map((item) => {
    if (item.classList.contains('button-hra__cross')) {
      return 'x';
    } else if (item.classList.contains('button-hra__circle')) {
      return 'o';
    } else {
      return '_';
    }
  });

  //WINNER

  const vitez = findWinner(buttonsArraySymbols);

  const alertM = () => {
    alert(`HURA!!Vyhrál hráč "${vitez}"!`);
    location.reload();
  };
  if (vitez === 'o' || vitez === 'x') {
    setTimeout(alertM, 250);
  } else if (vitez === 'tie') {
    setTimeout(() => {
      alert('Hra skončila nerozhodná.');
      location.reload();
    }, 250);
  }
  if (currentPlayer === 'cross') {
    const response = fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: buttonsArraySymbols,
          player: 'x',
        }),
      },
    );

    response
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const index = data.position.x + data.position.y * 10;
        buttons[index].click();
      });
  }
};

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

//USE "selectBtn" FUNCTION FOR ALL BUTTONS

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', selectBtn);
});
