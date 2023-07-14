const submitButton = document.querySelector('#submitButton');
const form = document.querySelector('#contactForm');

const onSubmit = (e) => {
  const hasError = validator.submitValidation();

  console.log(`[log] submit run is ${!hasError}`);

  if (hasError) {
    e.preventDefault();
    return false;
  }
  submitButton.disabled = true;
  document.contactForm.submit();

  window.location = './contact-complete.html'
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

submitButton.addEventListener('click', onSubmit);

const validator = new Validator(validationRules);