

class Validator {
  /**
   * 
   * @param {{selector: string, type: string, error: string, rule: (any) => boolean; elements: Element[]}[]} rules 
   */
  constructor(rules) {

    rules.forEach(rule => {
      const elements = document.querySelectorAll(rule.selector);
      rule.elements = [...elements];
    });
    this.rules = rules;

    this.initRule();
  }


  submitValidation() {
    const hasError = this.rules.map(rule => {
      return this.checkValidation(rule);
    });

    return hasError.some(x =>x);
  }

  initRule() {
    this.rules.forEach(rule => {
      rule.elements.forEach(element => {
        element.addEventListener('change', () => {
          this.checkValidation(rule);
        });
      })
    });
  }

  checkValidation(rule) {
    if (rule.type === 'input') {
      const element = rule.elements[0];
      const hasError = rule.rule(element.value);
      return this.errorCallbackByInput(element, hasError, rule.error);

    } else if (rule.type === 'radio') {
      const hasChecked = rule.elements.some(x => x.checked);

      return this.visibleErrorMessage(!hasChecked, rule.error);
    }

    else if (rule.type === 'checkbox') {
      const hasChecked = rule.elements.some(x => x.checked);

      return this.visibleErrorMessage(!hasChecked, rule.error);
    }
    return false;
  }


  errorCallbackByInput(element, hasError, errorSelector) {
    hasError ? element.classList.add('is-error') : element.classList.remove('is-error');
    return this.visibleErrorMessage(hasError, errorSelector);
  }


  visibleErrorMessage(hasError, errorSelector) {
    if (hasError) {
      document.querySelector(errorSelector).classList.add('is-error');
    } else {
      document.querySelector(errorSelector).classList.remove('is-error');
    }
    return hasError;
  }
}


