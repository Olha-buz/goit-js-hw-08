import throttle from "lodash.throttle";


form = document.querySelector('.feedback-form');
email = form.querySelector('email');
message = form.querySelector('message');
let formData = {};

function saveInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function loadInput(event) {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
 };

function getFormValue() {
      try {
    const data = localStorage.getItem('feedback-form-state');
    if (data) {
    formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, value]) => {
            form.elements[key].value = value;
        });
      }
      } catch (error) {
          console.log(error.message);
      } 
};

form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', loadInput);
getFormValue();
