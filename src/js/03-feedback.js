import throttle from 'lodash.throttle';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const STORAGE_KEY = 'feedback-form-state';
const localParse = load(STORAGE_KEY);
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
    save(STORAGE_KEY, inputObject);
    
};

function formOutput() {
    if (localParse) {
        inputObject.email = localParse.email; // Reload text value from LocalStorage to Obj
        inputObject.message = localParse.message;

        refs.email.value = localParse.email; // reload text value from LocalStor to form input 
        refs.textarea.value = localParse.message;
    }
}


