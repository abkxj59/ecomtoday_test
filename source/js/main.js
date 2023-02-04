import {initSelect} from './modules/select.js';
import {initForm} from './modules/form.js';
import {initModal} from './modules/modal.js';

// // ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initSelect();
    initForm();
    initModal();
  });
});
