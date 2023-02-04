import {openModal} from './modal.js';

const form = document.querySelector('.calc__form');
const giveValue = form.querySelector('input[name="give"]');
const giveCurrency = form.querySelector('select[name="give-currency"]');
const takeValue = form.querySelector('input[name="take"]');
const takeCurrency = form.querySelector('select[name="take-currency"]');
const modalText = document.querySelector('.modal__text');

const initForm = () => {
  if (form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // const message = `Вы хотите приобрести asdf`;
      const message = `Вы хотите приобрести ${takeValue.value} ${takeCurrency.value} за ${giveValue.value} ${giveCurrency.value}`;
      modalText.textContent = message;
      openModal();
    });
  }
};

export {initForm};
