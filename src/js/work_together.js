import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.together-form');
const sendBtn = document.querySelector('.form-btn');
const closeModalBtn = document.querySelector('.pop-up-close-btn');
const emailInp = document.querySelector('.form-input-name');
const msgInp = document.querySelector('.input-textarea');
const modalEl = document.querySelector('.backdrop');
const InvalidEl = document.querySelector('.together-invalid-email')
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
const userData = {
    "email": "",
    "comment": ""
};
// Отримання даних

const userMail = (event) => {
    userData.email = event.target.value;
    InvalidEl.classList.add('d-none')
    emailInp.classList.remove('form-input-name-error')
}
emailInp.addEventListener('input', userMail);


const blurEmailInp = () => {
    if (userData.email === '') {
        return
    }
    if (!emailInp.checkValidity()) {
        InvalidEl.classList.remove('d-none')
        emailInp.classList.add('form-input-name-error')
    }
}
emailInp.addEventListener('blur', blurEmailInp)

const userMsg = (event) => {
    userData.comment = event.target.value;
};
msgInp.addEventListener('input', userMsg);

// Пост на сервер

const sendData = async () => axios.post(BASE_URL, userData);

const emailInput = document.getElementById('user-email');
const emailIcon = document.querySelector('.email-correct-icon');
const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

// Функція для перевірки валідності email
const validateEmail = () => {
  if (emailPattern.test(emailInput.value)) {
    emailIcon.classList.remove('d-none');
  } else {
    emailIcon.classList.add('d-none'); 
  }
};

emailInput.addEventListener('input', validateEmail);

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim() === '') {
    emailIcon.classList.add('d-none');
  }
});

// Перевірка стану поля при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  validateEmail(); 
});

const sendForm = async (event) => {
    event.preventDefault();
    if (!emailInp.checkValidity()) {
        InvalidEl.classList.remove('d-none')
        emailInp.classList.add('form-input-name-error')
        return
    }

    if (userData.comment === '' || userData.email === '') {
        iziToast.error({
            message: 'All fields must be completed!',
            position: 'topRight',
            maxWidth: '300px',
        });
        return
    }
    sendData(BASE_URL, userData)
    try {
        modalEl.classList.add('is-open')
    }
    catch (error) {
        iziToast.error({
            message: 'Ops! Something went wrong. Please try again!',
            position: 'topRight',
            maxWidth: '300px',
        })
    }
    event.currentTarget.reset();
    userData.comment = '';
    userData.email = '';
}
formEl.addEventListener('submit', sendForm);



// Закриття поп-ап

const closeModal = (event) => {
    modalEl.classList.remove('is-open')
}
closeModalBtn.addEventListener('click', closeModal);

const closeModalBack = (event) => {
    if (event.target === modalEl) {
        modalEl.classList.remove('is-open')
    }
}
modalEl.addEventListener('click', closeModalBack)

document.addEventListener("keydown", event => {
  if (event.key === 'Escape') {
    modalEl.classList.remove('is-open')
  }
});