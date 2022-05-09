import { validationSettings } from "./data.js"

const resetPopup = (formElement) => {
  formElement.reset()
  formElement.querySelectorAll(validationSettings.inputSelector).forEach(item => {
    if (item.classList.contains(validationSettings.inputErrorClass)) {
      item.classList.remove(validationSettings.inputErrorClass)
    }
  })
  formElement.querySelectorAll(validationSettings.inputErrorSelector).forEach(item => {
    item.classList.add(validationSettings.inputErrorHiddenClass)
    item.textContent = " "
  })
}

const showInputError = (formSet, credentialsInput, errorMessage, config) => {
  const errorElement = formSet.querySelector(`.${credentialsInput.id}-error`)
  credentialsInput.classList.add(config.inputErrorClass)
  errorElement.classList.remove(config.inputErrorHiddenClass)
  errorElement.textContent = errorMessage
}

const hideInputError = (formSet, credentialsInput, config) => {
  const errorElement = formSet.querySelector(`.${credentialsInput.id}-error`)
  credentialsInput.classList.remove(config.inputErrorClass)
  errorElement.classList.add(config.inputErrorHiddenClass)
  errorElement.textContent = " "
}

const validateForm = (formSet, credentialsInput, config) => {
  if (!credentialsInput.validity.valid) {
    showInputError(formSet, credentialsInput, credentialsInput.validationMessage, config)
  } else {
    hideInputError(formSet, credentialsInput, config)
  }
}

const checkValidity = (inputList) => {
  return inputList.some(credentialsInput => {
    return !credentialsInput.validity.valid
  })
}

const toggleSubmit = (inputList, buttonElement, config) => {
  if (checkValidity(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'true')
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass)
    buttonElement.removeAttribute('disabled', 'true')
  }
}

const disableSubmit = (submitElement) => {
  const button = submitElement.querySelector('.credentials__submit-button')
  button.classList.add('credentials__submit-button_disabled')
  button.setAttribute('disabled', 'true')
}

const setEventListener = (formSet, config) => {
  const inputItems = Array.from(formSet.querySelectorAll(config.inputSelector))
  const buttonElement = formSet.querySelector(config.submitButtonSelector)
  toggleSubmit(inputItems, buttonElement, config)
  inputItems.forEach(credentialsInput => {
    credentialsInput.addEventListener('input', () => {
      validateForm(formSet, credentialsInput, config)
      toggleSubmit(inputItems, buttonElement, config)
    })
  })
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formSet => {
    formSet.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formSet, config);
  });

}
enableValidation(validationSettings)

export { enableValidation, disableSubmit, resetPopup }