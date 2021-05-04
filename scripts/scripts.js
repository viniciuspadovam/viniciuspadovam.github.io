// Liks
const academicLink = document
  .querySelector('#academicFormationLink')
  .addEventListener('click', () => {
    toggleClass(academicCard);
  });
const techLink = document
  .querySelector('#techLink')
  .addEventListener('click', () => {
    toggleClass(techCard);
  });
const languagesLink = document
  .querySelector('#languagesLink')
  .addEventListener('click', () => {
    toggleClass(languagesCard);
  });
const contactLink = document.querySelector('#contactLink');

// Cards
const genericCard = document.querySelectorAll('.card');
const academicCard = document.querySelector('#academicFormation');
const techCard = document.querySelector('#tech');
const languagesCard = document.querySelector('#languages');

// Function to see the cards
function toggleClass(card) {
  genericCard.forEach(i => {
    i.classList.add('disable');
  });
  card.classList.toggle('disable');
}

// Modal
const modal = document.querySelector('#myModal');
const btnCloseModal = document.querySelector('.close');

contactLink.addEventListener('click', () => {
  modal.style.display = 'block';
});

btnCloseModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) {
    setTimeout(() => {
      modal.style.display = 'none';
    }, 150);
  }
});
