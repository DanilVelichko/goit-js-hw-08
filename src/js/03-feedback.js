import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const localParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
const inputObject = {email: '', message: '',};
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

formOutput();

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log(inputObject);
    localStorage.removeItem(STORAGE_KEY);
}

function onEmailInput(e) {
    inputObject.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputObject));
  }

function onTextareaInput(e) {
      inputObject.message = e.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(inputObject));
}

function formOutput() {
    if (localParse) {
        refs.email.value = localParse.email;
        refs.textarea.value = localParse.message;
    }
}
