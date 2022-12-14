import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const localParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
const inputObject = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput), 500);

formOutput();

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();

    console.log(inputObject);

    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput (e) {
    inputObject[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputObject));
    console.log(e.target.name, e.target.value);
};


function formOutput() {
    if (localParse) {
        inputObject.email = localParse.email; // Reload text value from LocalStorage to Obj
        inputObject.message = localParse.message;

        refs.email.value = localParse.email; // reload text value from LocalStor to form input 
        refs.textarea.value = localParse.message;
    }
}
