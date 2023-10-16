import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.getElementsByName('email'),
  message: document.getElementsByName('message'),
};
const formData = {};

getFormValue();

refs.form.addEventListener('input', throttle(saveInput, 500));
window.onload = loadInput();

function saveInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function loadInput(event) {
//    event.preventDefault();
    if (refs.email.value !== '' || refs.message.value !== '') {
        console.log(`${refs.email.value}`);
        console.log(`${refs.message.value}`);
//       event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state')
    }

 };

function getFormValue() {
    const savedFormMessage = localStorage.getItem('feedback-form-state');
    const formValues = JSON.parse(savedFormMessage)
    
    if (formValues) {

        const { email, message } = formValues;
        if ( message && email) {
        refs.message.value = message;
        refs.email.value = email;
        }

        else if (message) {
            refs.message.value = message;
    }
        else if (email) {
        refs.email.value = email;
        }
       
   }
   
}

