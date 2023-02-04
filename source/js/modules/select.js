const nativeSelects = document.querySelectorAll('.calc__select');
const customSelects = document.querySelectorAll('.calc__currency-list');

const openSelect = (select) => {
  select.classList.toggle('calc__currency-list--opened');
};

const initSelect = () => {
  if (nativeSelects && customSelects) {
    for (let i = 0; i < nativeSelects.length; i++) {
      nativeSelects[i].classList.remove('calc__select--nojs');
      customSelects[i].classList.remove('calc__currency-list--nojs');

      customSelects[i].addEventListener('click', () => openSelect(customSelects[i]));

      const buttons = customSelects[i].children;
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', () => {
          for (let k = 0; k < buttons.length; k++) {
            buttons[k].classList.remove('calc__currency-item--selected');
          }
          buttons[j].classList.add('calc__currency-item--selected');
          nativeSelects[i].value = buttons[j].dataset.value;
        });
      }
    }
  }
};

export {initSelect};
