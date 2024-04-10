let currentPlayer = 'circle';

const selectBtn = (evt) => {
  evt.target.disabled = true;
  const currentPlayerIcon = document.querySelector('.player img');
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    evt.target.classList.add('button-hra__cross');
    currentPlayerIcon.src = 'icons/cross.svg';
  } else {
    currentPlayer = 'circle';
    evt.target.classList.add('button-hra__circle');
    currentPlayerIcon.src = 'icons/circle.svg';
  }
};
document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectBtn);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectBtn);
