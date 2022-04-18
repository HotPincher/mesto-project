/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _scripts_renderCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/renderCard.js */ \"./src/scripts/renderCard.js\");\n/* harmony import */ var _scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/popup.js */ \"./src/scripts/popup.js\");\n/* harmony import */ var _scripts_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/api.js */ \"./src/scripts/api.js\");\n/* harmony import */ var _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/data.js */ \"./src/scripts/data.js\");\n/* harmony import */ var _scripts_formHandlers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/formHandlers.js */ \"./src/scripts/formHandlers.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileEditButton.addEventListener('click', function () {\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.activatePopup)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAccountEditModifier);\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.disableSubmit)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAccountEditModifier);\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAccountEditModifier.querySelector('.credentials__submit-button').innerText = \"Сохранить\";\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.resetPopup)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileEditFormCredentials);\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileEditFormInitialValue1.setAttribute('value', _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.currentAccountName.textContent);\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileEditFormInitialValue2.setAttribute('value', _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.currentAccountProfession.textContent);\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileEditFormCredentials.addEventListener('submit', function () {\n  (0,_scripts_formHandlers_js__WEBPACK_IMPORTED_MODULE_5__.changeProfileCredentials)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileEditFormCredentials);\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.avatarEditButton.addEventListener('mouseover', function (evt) {\n  evt.target.closest('.profile__avatar-swapper').classList.add('profile__avatar-swapper_active');\n  document.querySelector('.profile__avatar-swapper-icon').classList.add('profile__avatar-swapper-icon_active');\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.avatarEditButton.addEventListener('mouseout', function (evt) {\n  evt.target.closest('.profile__avatar-swapper').classList.remove('profile__avatar-swapper_active');\n  document.querySelector('.profile__avatar-swapper-icon').classList.remove('profile__avatar-swapper-icon_active');\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.avatarEditButton.addEventListener('click', function () {\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.activatePopup)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAvatarEditModifier);\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.disableSubmit)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAvatarEditModifier);\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAvatarEditModifier.querySelector('.credentials__submit-button').innerText = \"Сохранить\";\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.resetPopup)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileAvatarEditFormCredentials);\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileAvatarEditFormCredentials.addEventListener('submit', function () {\n  (0,_scripts_formHandlers_js__WEBPACK_IMPORTED_MODULE_5__.handleAvatarForm)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileAvatarEditFormCredentials);\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.newCardCreatorButton.addEventListener('click', function () {\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.activatePopup)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAccountNewCardModifier);\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.disableSubmit)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAccountNewCardModifier);\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupAccountNewCardModifier.querySelector('.credentials__submit-button').innerText = \"Создать\";\n  (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.resetPopup)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileNewCardFormCredentials);\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.profileNewCardFormCredentials.addEventListener('submit', function () {\n  var currentInputPlace = _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.newCardPlace.value;\n  var currentInputUrl = _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.newCardUrl.value;\n  (0,_scripts_formHandlers_js__WEBPACK_IMPORTED_MODULE_5__.createNewCardCredentials)(currentInputUrl, currentInputPlace);\n});\n_scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.popupRemovers.forEach(function (popup) {\n  popup.addEventListener('mousedown', function (evt) {\n    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {\n      (0,_scripts_popup_js__WEBPACK_IMPORTED_MODULE_2__.removePopup)(popup);\n    }\n  });\n});\n(0,_scripts_api_js__WEBPACK_IMPORTED_MODULE_3__.acquireAllData)().then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n      data = _ref2[0],\n      cards = _ref2[1];\n\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.avatarImage.src = data.avatar;\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.currentAccountName.textContent = data.name;\n  _scripts_data_js__WEBPACK_IMPORTED_MODULE_4__.currentAccountProfession.textContent = data.about;\n  cards.forEach(function (card) {\n    var userId = data._id;\n    var ownerId = card.owner._id;\n    var elementId = card._id;\n    var ownerIdLikes = [];\n    var like = card.likes;\n    var likeLength = like.length;\n    like.forEach(function (element) {\n      ownerIdLikes.push(element._id);\n    });\n    (0,_scripts_renderCard_js__WEBPACK_IMPORTED_MODULE_1__.addCard)(card.link, card.name, likeLength, userId, ownerId, elementId, ownerIdLikes);\n  });\n}).catch(function (err) {\n  console.log('Ошибка: ', err);\n});\n\n//# sourceURL=webpack://mesto/./src/index.js?");

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"acquireAllData\": () => (/* binding */ acquireAllData),\n/* harmony export */   \"acquireUserData\": () => (/* binding */ acquireUserData),\n/* harmony export */   \"changeProfileData\": () => (/* binding */ changeProfileData),\n/* harmony export */   \"createCardElement\": () => (/* binding */ createCardElement),\n/* harmony export */   \"createLikeElement\": () => (/* binding */ createLikeElement),\n/* harmony export */   \"editAvatar\": () => (/* binding */ editAvatar),\n/* harmony export */   \"loadCards\": () => (/* binding */ loadCards),\n/* harmony export */   \"removeCardElement\": () => (/* binding */ removeCardElement),\n/* harmony export */   \"removeLikeElement\": () => (/* binding */ removeLikeElement),\n/* harmony export */   \"validateResponce\": () => (/* binding */ validateResponce)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n\n\nvar validateResponce = function validateResponce(res) {\n  return res.ok ? res.json() : Promise.reject(\"\\u041F\\u0440\\u043E\\u043C\\u0438\\u0441\\u0430 \\u043D\\u0435 \\u0431\\u0443\\u0434\\u0435\\u0442 \".concat(res.status));\n};\n\nvar acquireUserData = function acquireUserData() {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/users/me\"), {\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers\n  }).then(validateResponce);\n};\n\nvar loadCards = function loadCards() {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/cards\"), {\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers\n  }).then(validateResponce);\n};\n\nvar changeProfileData = function changeProfileData(pendingInputValue1, pendingInputValue2) {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers,\n    body: JSON.stringify({\n      name: pendingInputValue1,\n      about: pendingInputValue2\n    })\n  }).then(validateResponce);\n};\n\nvar editAvatar = function editAvatar(newAvatar) {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers,\n    body: JSON.stringify({\n      avatar: newAvatar\n    })\n  }).then(validateResponce);\n};\n\nvar createCardElement = function createCardElement(cardLink, cardTitle) {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers,\n    body: JSON.stringify({\n      name: cardTitle,\n      link: cardLink\n    })\n  }).then(validateResponce);\n};\n\nvar removeCardElement = function removeCardElement(elementId) {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/cards/\").concat(elementId), {\n    method: 'DELETE',\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers\n  }).then(validateResponce);\n};\n\nvar createLikeElement = function createLikeElement(elementId, cardLikeCounter) {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/cards/likes/\").concat(elementId), {\n    method: 'PUT',\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers\n  }).then(validateResponce).then(function (data) {\n    cardLikeCounter.textContent = data.likes.length;\n  });\n};\n\nvar removeLikeElement = function removeLikeElement(elementId, cardLikeCounter) {\n  return fetch(\"\".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.baseUrl, \"/cards/likes/\").concat(elementId), {\n    method: 'DELETE',\n    headers: _data_js__WEBPACK_IMPORTED_MODULE_0__.serverConfig.headers\n  }).then(validateResponce).then(function (data) {\n    cardLikeCounter.textContent = data.likes.length;\n  });\n};\n\nvar acquireAllData = function acquireAllData() {\n  return Promise.all([acquireUserData(), loadCards()]);\n};\n\n\n\n//# sourceURL=webpack://mesto/./src/scripts/api.js?");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarEditButton\": () => (/* binding */ avatarEditButton),\n/* harmony export */   \"avatarImage\": () => (/* binding */ avatarImage),\n/* harmony export */   \"avatarUrl\": () => (/* binding */ avatarUrl),\n/* harmony export */   \"bigPicturePopup\": () => (/* binding */ bigPicturePopup),\n/* harmony export */   \"bigPicturePopupImage\": () => (/* binding */ bigPicturePopupImage),\n/* harmony export */   \"bigPicturePopupSpan\": () => (/* binding */ bigPicturePopupSpan),\n/* harmony export */   \"cardContainer\": () => (/* binding */ cardContainer),\n/* harmony export */   \"cardFromTemplate\": () => (/* binding */ cardFromTemplate),\n/* harmony export */   \"currentAccountName\": () => (/* binding */ currentAccountName),\n/* harmony export */   \"currentAccountProfession\": () => (/* binding */ currentAccountProfession),\n/* harmony export */   \"newCardCreatorButton\": () => (/* binding */ newCardCreatorButton),\n/* harmony export */   \"newCardPlace\": () => (/* binding */ newCardPlace),\n/* harmony export */   \"newCardUrl\": () => (/* binding */ newCardUrl),\n/* harmony export */   \"popupAccountEditModifier\": () => (/* binding */ popupAccountEditModifier),\n/* harmony export */   \"popupAccountNewCardModifier\": () => (/* binding */ popupAccountNewCardModifier),\n/* harmony export */   \"popupAvatarEditModifier\": () => (/* binding */ popupAvatarEditModifier),\n/* harmony export */   \"popupRemovers\": () => (/* binding */ popupRemovers),\n/* harmony export */   \"profileAvatarEditFormCredentials\": () => (/* binding */ profileAvatarEditFormCredentials),\n/* harmony export */   \"profileEditButton\": () => (/* binding */ profileEditButton),\n/* harmony export */   \"profileEditFormCredentials\": () => (/* binding */ profileEditFormCredentials),\n/* harmony export */   \"profileEditFormInitialValue1\": () => (/* binding */ profileEditFormInitialValue1),\n/* harmony export */   \"profileEditFormInitialValue2\": () => (/* binding */ profileEditFormInitialValue2),\n/* harmony export */   \"profileNewCardFormCredentials\": () => (/* binding */ profileNewCardFormCredentials),\n/* harmony export */   \"serverConfig\": () => (/* binding */ serverConfig),\n/* harmony export */   \"validationSettings\": () => (/* binding */ validationSettings)\n/* harmony export */ });\nvar serverConfig = {\n  baseUrl: \"https://nomoreparties.co/v1/plus-cohort-8\",\n  headers: {\n    \"Authorization\": \"46fd1b2f-0142-4390-8d44-7cfab5387a15\",\n    \"Content-Type\": \"application/json\"\n  }\n}; // PAGE LAYOUT\n\nvar currentAccountName = document.querySelector('.profile__title');\nvar currentAccountProfession = document.querySelector('.profile__subtitle'); // BUTTONS\n\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar avatarEditButton = document.querySelector('.profile__avatar-swapper');\nvar newCardCreatorButton = document.querySelector('.profile__add-button'); // POPUPS\n\nvar popupRemovers = document.querySelectorAll('.popup'); // EDITING PROFILE POPUP\n\nvar popupAccountEditModifier = document.querySelector('#profileEditPopup'); // EDITING AVATAR\n\nvar popupAvatarEditModifier = document.querySelector('#avatarEditPopup');\nvar avatarImage = document.querySelector('.profile__avatar-overlay'); // NEW CARD POPUP\n\nvar popupAccountNewCardModifier = document.querySelector('#newCardPopup'); // ADDING A NEW CARD\n\nvar cardContainer = document.querySelector('.elements');\nvar cardFromTemplate = document.querySelector('#elements__item-template').content.querySelector('.elements__item'); // BIG PICTURE POPUP\n\nvar bigPicturePopup = document.querySelector('#big-picture-popup');\nvar bigPicturePopupImage = bigPicturePopup.querySelector('.big-picture__image');\nvar bigPicturePopupSpan = bigPicturePopup.querySelector('.big-picture__tag'); // FORMS\n\nvar profileEditFormCredentials = document.forms['profile-edit'];\nvar profileNewCardFormCredentials = document.forms['card-edit'];\nvar profileAvatarEditFormCredentials = document.forms['avatar-edit'];\nvar profileEditFormInitialValue1 = profileEditFormCredentials.querySelector('#name-input');\nvar profileEditFormInitialValue2 = profileEditFormCredentials.querySelector('#description-input');\nvar newCardPlace = document.querySelector('#place-input');\nvar newCardUrl = document.querySelector('#url-input');\nvar avatarUrl = document.querySelector('#avatar-input'); // FORM VALIDATION OBJECT\n\nvar validationSettings = {\n  formSelector: '.credentials',\n  inputSelector: '.credentials__user-input',\n  submitButtonSelector: '.credentials__submit-button',\n  inactiveButtonClass: 'credentials__submit-button_disabled',\n  inputErrorClass: 'credentials__user-input_invalid',\n  inputErrorHiddenClass: 'credentials__input-error_hidden'\n};\n\n\n//# sourceURL=webpack://mesto/./src/scripts/data.js?");

/***/ }),

/***/ "./src/scripts/formHandlers.js":
/*!*************************************!*\
  !*** ./src/scripts/formHandlers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProfileCredentials\": () => (/* binding */ changeProfileCredentials),\n/* harmony export */   \"createNewCardCredentials\": () => (/* binding */ createNewCardCredentials),\n/* harmony export */   \"handleAvatarForm\": () => (/* binding */ handleAvatarForm)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/scripts/api.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/scripts/popup.js\");\n/* harmony import */ var _renderCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderCard.js */ \"./src/scripts/renderCard.js\");\n\n\n\n\n\nvar handleAvatarForm = function handleAvatarForm() {\n  var newAvatar = _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarUrl.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.editAvatar)(newAvatar).then(function () {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.avatarImage.src = newAvatar;\n  }).then(function () {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.popupAvatarEditModifier.querySelector('.credentials__submit-button').innerText = \"Сохранение...\";\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.removePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupAvatarEditModifier);\n  }).catch(function (err) {\n    console.log('Ошибка: ', err);\n  });\n};\n\nvar changeProfileCredentials = function changeProfileCredentials() {\n  var pendingInputValue1 = _data_js__WEBPACK_IMPORTED_MODULE_0__.profileEditFormInitialValue1.value;\n  var pendingInputValue2 = _data_js__WEBPACK_IMPORTED_MODULE_0__.profileEditFormInitialValue2.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.changeProfileData)(pendingInputValue1, pendingInputValue2).then(function () {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.currentAccountName.textContent = pendingInputValue1;\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.currentAccountProfession.textContent = pendingInputValue2;\n  }).then(function () {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.popupAccountEditModifier.querySelector('.credentials__submit-button').innerText = \"Сохранение...\";\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.removePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupAccountEditModifier);\n  }).catch(function (err) {\n    console.log('Ошибка: ', err);\n  });\n};\n\nvar createNewCardCredentials = function createNewCardCredentials(cardLink, cardTitle) {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.createCardElement)(cardLink, cardTitle).then(function (data) {\n    var userId = data._id;\n    var ownerId = data.owner._id;\n    var elementId = data._id;\n    var ownerIdLikes = [];\n    var like = data.likes;\n    var likeLength = like.length;\n    like.forEach(function (element) {\n      ownerIdLikes.push(element._id);\n    });\n    (0,_renderCard_js__WEBPACK_IMPORTED_MODULE_3__.addCard)(cardLink, cardTitle, likeLength, userId, ownerId, elementId, ownerIdLikes);\n  }).then(function () {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.popupAccountNewCardModifier.querySelector('.credentials__submit-button').innerText = \"Сохранение...\";\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.removePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.popupAccountNewCardModifier);\n  }).catch(function (err) {\n    console.log('Ошибка: ', err);\n  });\n};\n\n\n\n//# sourceURL=webpack://mesto/./src/scripts/formHandlers.js?");

/***/ }),

/***/ "./src/scripts/popup.js":
/*!******************************!*\
  !*** ./src/scripts/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activatePopup\": () => (/* binding */ activatePopup),\n/* harmony export */   \"disableSubmit\": () => (/* binding */ disableSubmit),\n/* harmony export */   \"removePopup\": () => (/* binding */ removePopup),\n/* harmony export */   \"removePopupByEsc\": () => (/* binding */ removePopupByEsc),\n/* harmony export */   \"resetPopup\": () => (/* binding */ resetPopup)\n/* harmony export */ });\n/* harmony import */ var _validateForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm.js */ \"./src/scripts/validateForm.js\");\n\n\nvar activatePopup = function activatePopup(popup) {\n  popup.classList.remove('popup_closed');\n  popup.classList.add('popup_opened');\n  document.addEventListener('keydown', removePopupByEsc);\n};\n\nvar removePopup = function removePopup(popup) {\n  popup.classList.add('popup_closed');\n  popup.classList.remove('popup_opened');\n  document.removeEventListener('keydown', removePopupByEsc);\n};\n\nvar removePopupByEsc = function removePopupByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_opened');\n    removePopup(openedPopup);\n  }\n};\n\nvar resetPopup = function resetPopup(formElement) {\n  formElement.reset();\n  formElement.querySelectorAll('.credentials__user-input').forEach(function (item) {\n    if (item.classList.contains('credentials__user-input_invalid')) {\n      item.classList.remove('credentials__user-input_invalid');\n    }\n  });\n  formElement.querySelectorAll('.credentials__input-error').forEach(function (item) {\n    item.classList.add('credentials__input-error_hidden');\n    item.textContent = \" \";\n  });\n};\n\nvar disableSubmit = function disableSubmit(submitElement) {\n  submitElement.querySelector('.credentials__submit-button').classList.add('credentials__submit-button_disabled');\n  submitElement.querySelector('.credentials__submit-button').setAttribute('disabled', 'true');\n};\n\n\n\n//# sourceURL=webpack://mesto/./src/scripts/popup.js?");

/***/ }),

/***/ "./src/scripts/renderCard.js":
/*!***********************************!*\
  !*** ./src/scripts/renderCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n/* harmony import */ var _images_no_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/no-image.jpg */ \"./src/images/no-image.jpg\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/scripts/popup.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/scripts/api.js\");\n\n\n\n\n\nvar renderElementCard = function renderElementCard(cardLink, cardTitle, likes, userId, ownerId, elementId, ownerIdLikes) {\n  var cardCreator = _data_js__WEBPACK_IMPORTED_MODULE_0__.cardFromTemplate.cloneNode(true);\n  var cardCreatorTextElement = cardCreator.querySelector('.elements__heading');\n  var cardCreatorImageElement = cardCreator.querySelector('.elements__image');\n  var cardLikeToggler = cardCreator.querySelector('.elements__like-button');\n  var cardLikeCounter = cardCreator.querySelector('.elements__like-counter');\n  var cardRemover = cardCreator.querySelector('#elements__delete-button-template');\n  cardCreatorImageElement.src = cardLink;\n  cardCreatorImageElement.alt = cardTitle;\n  cardCreatorImageElement.dataset.id = elementId;\n  cardCreatorTextElement.textContent = cardTitle;\n  cardLikeCounter.textContent = likes;\n\n  cardCreatorImageElement.onerror = function () {\n    cardCreatorImageElement.src = _images_no_image_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  };\n\n  cardCreatorImageElement.addEventListener('click', function () {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.bigPicturePopupImage.src = cardLink;\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.bigPicturePopupImage.alt = cardTitle;\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.bigPicturePopupSpan.textContent = cardTitle;\n\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.bigPicturePopupImage.onerror = function () {\n      _data_js__WEBPACK_IMPORTED_MODULE_0__.bigPicturePopupImage.src = _images_no_image_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    };\n\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.activatePopup)(_data_js__WEBPACK_IMPORTED_MODULE_0__.bigPicturePopup);\n  });\n\n  var postLike = function postLike(evt, cardLikeCounter, elementId) {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.createLikeElement)(elementId, cardLikeCounter).then(function () {\n      evt.target.classList.add('elements__like-button_active');\n    }).catch(function (err) {\n      console.log('Ошибка: ', err);\n    });\n  };\n\n  var dislike = function dislike(evt, cardLikeCounter, elementId) {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.removeLikeElement)(elementId, cardLikeCounter).then(function () {\n      evt.target.classList.remove('elements__like-button_active');\n    }).catch(function (err) {\n      console.log('Ошибка: ', err);\n    });\n  };\n\n  if (userId === ownerId) {\n    cardRemover.addEventListener('click', function (evt) {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.removeCardElement)(elementId).then(function () {\n        evt.target.closest('.elements__item').remove();\n      }).catch(function (err) {\n        console.log('Ошибка: ', err);\n      });\n    });\n  } else {\n    cardRemover.remove();\n  }\n\n  cardLikeToggler.addEventListener('click', function (evt) {\n    if (cardLikeToggler.classList.contains('elements__like-button_active')) {\n      dislike(evt, cardLikeCounter, elementId);\n    } else {\n      postLike(evt, cardLikeCounter, elementId);\n    }\n  });\n\n  if (ownerIdLikes.indexOf(userId) !== -1) {\n    cardLikeToggler.classList.add('elements__like-button_active');\n  }\n\n  return cardCreator;\n};\n\nvar addCard = function addCard(cardLink, cardTitle, likes, elementId, ownerIdLikes, userId, ownerId) {\n  var cardCaller = renderElementCard(cardLink, cardTitle, likes, elementId, ownerIdLikes, userId, ownerId);\n  _data_js__WEBPACK_IMPORTED_MODULE_0__.cardContainer.append(cardCaller);\n};\n\n\n\n//# sourceURL=webpack://mesto/./src/scripts/renderCard.js?");

/***/ }),

/***/ "./src/scripts/validateForm.js":
/*!*************************************!*\
  !*** ./src/scripts/validateForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableValidation\": () => (/* binding */ enableValidation)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/scripts/data.js\");\n\n\nvar showInputError = function showInputError(formSet, credentialsInput, errorMessage, config) {\n  var errorElement = formSet.querySelector(\".\".concat(credentialsInput.id, \"-error\"));\n  credentialsInput.classList.add(config.inputErrorClass);\n  errorElement.classList.remove(config.inputErrorHiddenClass);\n  errorElement.textContent = errorMessage;\n};\n\nvar hideInputError = function hideInputError(formSet, credentialsInput, config) {\n  var errorElement = formSet.querySelector(\".\".concat(credentialsInput.id, \"-error\"));\n  credentialsInput.classList.remove(config.inputErrorClass);\n  errorElement.classList.add(config.inputErrorHiddenClass);\n  errorElement.textContent = \" \";\n};\n\nvar validateForm = function validateForm(formSet, credentialsInput, config) {\n  if (!credentialsInput.validity.valid) {\n    showInputError(formSet, credentialsInput, credentialsInput.validationMessage, config);\n  } else {\n    hideInputError(formSet, credentialsInput, config);\n  }\n};\n\nvar checkValidity = function checkValidity(inputList) {\n  return inputList.some(function (credentialsInput) {\n    return !credentialsInput.validity.valid;\n  });\n};\n\nvar toggleSubmit = function toggleSubmit(inputList, buttonElement, config) {\n  if (checkValidity(inputList)) {\n    buttonElement.classList.add(config.inactiveButtonClass);\n    buttonElement.setAttribute('disabled', 'true');\n  } else {\n    buttonElement.classList.remove(config.inactiveButtonClass);\n    buttonElement.removeAttribute('disabled', 'true');\n  }\n};\n\nvar setEventListener = function setEventListener(formSet, config) {\n  var inputItems = Array.from(formSet.querySelectorAll(config.inputSelector));\n  var buttonElement = formSet.querySelector(config.submitButtonSelector);\n  toggleSubmit(inputItems, buttonElement, config);\n  inputItems.forEach(function (credentialsInput) {\n    credentialsInput.addEventListener('input', function () {\n      validateForm(formSet, credentialsInput, config);\n      toggleSubmit(inputItems, buttonElement, config);\n    });\n  });\n};\n\nvar enableValidation = function enableValidation(config) {\n  var formList = Array.from(document.querySelectorAll(config.formSelector));\n  formList.forEach(function (formSet) {\n    formSet.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListener(formSet, config);\n  });\n};\n\nenableValidation(_data_js__WEBPACK_IMPORTED_MODULE_0__.validationSettings);\n\n\n//# sourceURL=webpack://mesto/./src/scripts/validateForm.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/styles/index.css?");

/***/ }),

/***/ "./src/images/no-image.jpg":
/*!*********************************!*\
  !*** ./src/images/no-image.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a775bd64913c4f650c6.jpg\";\n\n//# sourceURL=webpack://mesto/./src/images/no-image.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;