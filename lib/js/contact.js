let isSubmit = false;
const submitButton = document.querySelector('#submit');

const onSubmit = () => {

  const hasError = validator.submitValidation();
  if (hasError) {
    return;
  }
  submitButton.disabled = true;
  isSubmit = true;  
}

const hasRequiredError = value => value === '' || value == null;

const validationRules = [{
  selector: '#name',
  type: 'input',
  error: '#nameError',
  rule: hasRequiredError,
}, {
  selector: '#email',
  type: 'input',
  error: '#emailError',
  rule: hasRequiredError,
}, {
  selector: 'input[name="entry.2130155710"]',
  type: 'radio',
  error: '#typeError',
}, {
  selector: '#privacyPolicy',
  type: 'checkbox',
  error: '#privacyPolicyError',
},{
  selector: '#contact',
  type: 'input',
  error: '#contactError',
  rule: hasRequiredError,
}];

// validationRules.forEach(rule => {
//   const element = document.querySelector(rule.selector);
//   rule.element = element;
// });




// validationRules.forEach(rule => {
//   const element = document.querySelector(rule.selector);
//   element.addEventListener('change', (e) => {
//     const hasError = rule.rule(e.target.value);
//     if (hasError) {
//       element.classList.add('is-error');
//       document.querySelector(rule.error).classList.add('is-error');
//     } else {
//       element.classList.remove('is-error');
//       document.querySelector(rule.error).classList.remove('is-error');
//     }
//   })
// })



// document.querySelector('#privacyPolicy').addEventListener('change', (e) => {
//   if (e.target.checked) {
//     submitButton.disabled = false;
//   } else {
//     submitButton.disabled = true;
//   }
// });

submitButton.addEventListener('submit', onSubmit);
submitButton.addEventListener('click', onSubmit);


document.querySelector('#hiddenFrame').addEventListener('load', (e) => {
  if(isSubmit){
    window.location='./contact-complete.html';
  }
})

const validator = new Validator(validationRules);