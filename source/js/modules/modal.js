const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const closeButton = document.querySelector('.modal__button');

const openModal = () => {
  modal.classList.add('modal--opened');
};

const closeModal = () => {
  modal.classList.remove('modal--opened');
};

const initModal = () => {
  if (modal) {
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    });
  }
};

export {initModal, openModal};
