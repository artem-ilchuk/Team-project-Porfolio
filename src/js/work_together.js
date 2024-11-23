import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector('.together-form');
const emailInput = document.getElementById('user-email');
const emailIcon = document.querySelector('.email-correct-icon');
const msgInput = document.querySelector('.input-textarea');
const invalidMsg = document.querySelector('.together-invalid-email');
const modalEl = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.pop-up-close-btn');
const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

// Валідація email
const validateEmail = () => {
  if (emailPattern.test(emailInput.value)) {
    emailIcon.classList.remove('d-none');
    invalidMsg.classList.add('d-none');
    emailInput.classList.remove('form-input-name-error');
  } else {
    emailIcon.classList.add('d-none');
  }
};

// Очищення форми та іконки після успішного відправлення
const resetFormAndIcon = () => {
  emailInput.value = "";
  msgInput.value = "";
  emailIcon.classList.add('d-none');
  invalidMsg.classList.add('d-none');
  emailInput.classList.remove('form-input-name-error');
};





// Відправлення форми
const sendForm = async (event) => {
  event.preventDefault();


  if (!emailPattern.test(emailInput.value)) {
    invalidMsg.classList.remove('d-none');
    emailInput.classList.add('form-input-name-error');
    return;
  }


  if (msgInput.value.trim() === "") {
    iziToast.error({
      message: 'All fields must be completed!',
      position: 'topRight',
      maxWidth: '300px',
    });
    return;
  }




// Оновлення userData
  const userData = {
    email: emailInput.value.trim(),
    comment: msgInput.value.trim(),
  };

  try {

    await axios.post(BASE_URL, userData);

    modalEl.classList.add('is-open');

    resetFormAndIcon();
  } catch (error) {
    iziToast.error({
      message: 'Ops! Something went wrong. Please try again!',
      position: 'topRight',
      maxWidth: '300px',
    });
  }
};





// Закриття поп-ап
const closeModal = () => {
  modalEl.classList.remove('is-open');
};


emailInput.addEventListener('input', validateEmail);
formEl.addEventListener('submit', sendForm);
closeModalBtn.addEventListener('click', closeModal);
modalEl.addEventListener('click', (event) => {
  if (event.target === modalEl) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

// Скидання форми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', resetFormAndIcon);