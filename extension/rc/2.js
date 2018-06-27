webpackJsonp([2],{

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['account', 'contact', 'lead', 'opportunity', 'systemUser', 'rcContact']);


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Chiama con {brand}',
  smsTitle: 'SMS con {brand}'
};

// @key: @#@"c2dTitle"@#@ @source: @#@"Call with {brand}"@#@
// @key: @#@"smsTitle"@#@ @source: @#@"SMS with {brand}"@#@

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  signInErrorMsg: 'Per procedere, accedi all\'account per il quale hai autorizzato l\'accesso da {brand} per Google.'
};

// @key: @#@"signInErrorMsg"@#@ @source: @#@"To proceed, please log in the account that you have authorized {brand} for Google to access."@#@

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteMeetingContent: '{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}',
  password: 'Password'
};

// @key: @#@"inviteMeetingContent"@#@ @source: @#@"{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}"@#@
// @key: @#@"password"@#@ @source: @#@"Password"@#@

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _authMessages$interna;

var _authMessages = __webpack_require__(924);

var _authMessages2 = _interopRequireDefault(_authMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Accesso non riuscito a causa di errori interni. Riprova più tardi.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Accesso negato. Contatta il supporto.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Sessione scaduta. Effettua l\'accesso.'), _authMessages$interna);

// @key: @#@"[authMessages.internalError]"@#@ @source: @#@"Login failed due to internal errors. Please try again later."@#@
// @key: @#@"[authMessages.accessDenied]"@#@ @source: @#@"Access denied. Please contact support."@#@
// @key: @#@"[authMessages.sessionExpired]"@#@ @source: @#@"Session expired. Please sign in."@#@


/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callErrors$noToNumbe;

var _callErrors = __webpack_require__(765);

var _callErrors2 = _interopRequireDefault(_callErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Immetti un numero di telefono valido.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Imposta {areaCodeLink} per utilizzare i numeri di telefono locali a 7 cifre.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Le chiamate di emergenza o a servizi speciali non sono supportate.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Connessione non riuscita. Riprova più tardi.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Impossibile connettersi a causa di errori interni. Riprova più tardi.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'Il numero interno non esiste.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Impossibile connettersi a causa di problemi di rete. Riprova più tardi.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Dal tuo interno è possibile effettuare chiamate con l\'app per il desktop.\n    Per passare ad altre opzioni di chiamata\n    contatta l\'amministratore dell\'account per un aggiornamento.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'prefisso'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'Chiamate di emergenza non supportate.'), _callErrors$noToNumbe);

// @key: @#@"[callErrors.noToNumber]"@#@ @source: @#@"Please enter a valid phone number."@#@
// @key: @#@"[callErrors.noAreaCode]"@#@ @source: @#@"Please set {areaCodeLink} to use 7-digit local phone numbers."@#@
// @key: @#@"[callErrors.specialNumber]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported."@#@
// @key: @#@"[callErrors.connectFailed]"@#@ @source: @#@"Connection failed. Please try again later."@#@
// @key: @#@"[callErrors.internalError]"@#@ @source: @#@"Cannot connect due to internal errors. Please try again later."@#@
// @key: @#@"[callErrors.notAnExtension]"@#@ @source: @#@"The extension number does not exist."@#@
// @key: @#@"[callErrors.networkError]"@#@ @source: @#@"Cannot connect due to network issues. Please try again later."@#@
// @key: @#@"[callErrors.noInternational]"@#@ @source: @#@"You don't have permissions to make international calls. Please contact your {brand} account administrator for an upgrade."@#@
// @key: @#@"[callErrors.noRingoutEnable]"@#@ @source: @#@"Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options\n    please contact your account administrator for an upgrade."@#@
// @key: @#@"areaCode"@#@ @source: @#@"area code"@#@
// @key: @#@"telus911"@#@ @source: @#@"Emergency dialing is not supported."@#@


/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callingSettingsMessa;

var _callingSettingsMessages = __webpack_require__(925);

var _callingSettingsMessages2 = _interopRequireDefault(_callingSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Impostazioni salvate correttamente.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Impostazioni salvate correttamente. Assicurati che {brand} per il desktop sia installato nel computer.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Nella sezione Chiamata specifica come desideri effettuare la chiamata.\n    Se lo desideri, rendici nota la tua posizione specificando il paese e il prefisso (se disponibile) nella sezione Regione, in modo da poter effettuare chiamate locali con l\'app.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Nella sezione Chiamata specifica come desideri effettuare la chiamata.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Le tue autorizzazioni sono state modificate di recente. Vai a {link} per verificare le opzioni di chiamata.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'Le informazioni sul numero di telefono sono state modificate di recente. Vai a {link} per verificare le opzioni di chiamata.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Impostazioni > Chiamata'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Le tue autorizzazioni sono state modificate e non consentono di effettuare chiamate con il browser. Per maggiori dettagli contatta l\'amministratore del tuo account.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Le chiamate a servizi di emergenza o speciali non sono supportate. In caso di emergenza, usa la linea fissa convenzionale o un telefono wireless per chiamare un servizio di emergenza.'), _callingSettingsMessa);

// @key: @#@"[callingSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[callingSettingsMessages.saveSuccessWithSoftphone]"@#@ @source: @#@"Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer."@#@
// @key: @#@"[callingSettingsMessages.permissionChanged]"@#@ @source: @#@"Your permissions have been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"[callingSettingsMessages.phoneNumberChanged]"@#@ @source: @#@"Your phone number information has been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"link"@#@ @source: @#@"Settings > Calling"@#@
// @key: @#@"[callingSettingsMessages.webphonePermissionRemoved]"@#@ @source: @#@"Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator."@#@
// @key: @#@"[callingSettingsMessages.emergencyCallingNotAvailable]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number."@#@


/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _region$regionSetting;

var _regionSettingsMessages = __webpack_require__(927);

var _regionSettingsMessages2 = _interopRequireDefault(_regionSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_region$regionSetting = {
  region: 'Regione'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Impostazioni salvate correttamente.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'La regione precedente non è più supportata per l\'account.\n    Verifica la nuova {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'impostazioni regione'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Inserisci un prefisso valido.'), _region$regionSetting);

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"[regionSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[regionSettingsMessages.dialingPlansChanged]"@#@ @source: @#@"The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}."@#@
// @key: @#@"regionSettings"@#@ @source: @#@"region settings"@#@
// @key: @#@"[regionSettingsMessages.areaCodeInvalid]"@#@ @source: @#@"Please enter a valid area code."@#@


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageSenderMessage;

var _messageSenderMessages = __webpack_require__(766);

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Invio completato.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Errore durante l\'invio del messaggio.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Errore di convalida numero di telefono.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Immetti il testo da inviare.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'Non disponi dell\'autorizzazione per inviare il messaggio.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'Devi selezionare uno dei numeri di telefono per inviare il messaggio'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Numero di telefono non valido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Immetti un numero di destinazione valido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Testo troppo lungo, limite di 1000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Imposta {areaCodeLink} per utilizzare i numeri di telefono locali a 7 cifre.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Le chiamate di emergenza o a servizi speciali non sono supportate.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Connessione non riuscita. Riprova più tardi.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Impossibile connettersi a causa di errori interni. Riprova più tardi.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'Il numero interno non esiste.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Impossibile connettersi a causa di problemi di rete. Riprova più tardi.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'Non sei autorizzato a inviare messaggi a destinatari esterni all\'organizzazione. Contatta l\'amministratore dell\'account RingCentral per un aggiornamento.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Impossibile inviare a un numero interno con il numero di telefono principale. Per inviare a un numero interno, immetti il numero interno.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'L\'invio di SMS a un numero di telefono internazionale non è supportato.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'prefisso'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Immetti un numero di telefono valido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noInternalSMSPermission, 'Non disponi delle autorizzazioni per inviare messaggi. Contatta l\'amministratore dell\'account RingCentral per un aggiornamento.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sending, 'Invio messaggio in corso... l\'operazione potrebbe richiedere un paio di minuti.'), _messageSenderMessage);

// @key: @#@"[messageSenderMessages.sendSuccess]"@#@ @source: @#@"Send Success."@#@
// @key: @#@"[messageSenderMessages.sendError]"@#@ @source: @#@"Something wrong happened when send message."@#@
// @key: @#@"[messageSenderMessages.numberValidateError]"@#@ @source: @#@"Phone Number Validate Error."@#@
// @key: @#@"[messageSenderMessages.textEmpty]"@#@ @source: @#@"Please enter the text to be sent."@#@
// @key: @#@"[messageSenderMessages.noPermission]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[messageSenderMessages.senderEmpty]"@#@ @source: @#@"You must select a number from your phone numbers to send"@#@
// @key: @#@"[messageSenderMessages.noToNumber]"@#@ @source: @#@"Invalid phone number."@#@
// @key: @#@"[messageSenderMessages.recipientsEmpty]"@#@ @source: @#@"Please enter a valid receiver number."@#@
// @key: @#@"[messageSenderMessages.textTooLong]"@#@ @source: @#@"Text is too long, 1000 Limited"@#@
// @key: @#@"[messageSenderMessages.recipientNumberInvalids]"@#@ @source: @#@"Please enter a valid phone number."@#@
// @key: @#@"[messageSenderMessages.noAreaCode]"@#@ @source: @#@"Please set {areaCodeLink} to use 7-digit local phone numbers."@#@
// @key: @#@"[messageSenderMessages.specialNumber]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported."@#@
// @key: @#@"[messageSenderMessages.connectFailed]"@#@ @source: @#@"Connection failed. Please try again later."@#@
// @key: @#@"[messageSenderMessages.internalError]"@#@ @source: @#@"Cannot connect due to internal errors. Please try again later."@#@
// @key: @#@"[messageSenderMessages.notAnExtension]"@#@ @source: @#@"The extension number does not exist."@#@
// @key: @#@"[messageSenderMessages.networkError]"@#@ @source: @#@"Cannot connect due to network issues. Please try again later."@#@
// @key: @#@"[messageSenderMessages.senderNumberInvalid]"@#@ @source: @#@"You don't have permission to send messages to recipients outside of your organization. Please contact your RingCentral account administrator for upgrade."@#@
// @key: @#@"[messageSenderMessages.notSmsToExtension]"@#@ @source: @#@"Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number."@#@
// @key: @#@"[messageSenderMessages.internationalSMSNotSupported]"@#@ @source: @#@"Sending SMS to international phone number is not supported."@#@
// @key: @#@"[messageSenderMessages.noInternalSMSPermission]"@#@ @source: @#@"You don't have permission to send messages. Please contact your RingCentral account administrator for upgrade."@#@
// @key: @#@"areaCode"@#@ @source: @#@"area code"@#@
// @key: @#@"[messageSenderMessages.sending]"@#@ @source: @#@"Message being sent…It may take a couple of minutes to complete."@#@


/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Limite richiesta superato. L\'app riprenderà tra {ttl} secondi.'
};

// @key: @#@"rateExceeded"@#@ @source: @#@"Request limit exceeded. App will resume in {ttl} seconds."@#@


/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _connectivityMonitorMessages = __webpack_require__(926);

var _connectivityMonitorMessages2 = _interopRequireDefault(_connectivityMonitorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'Connessione di rete persa.');

// @key: @#@"[connectivityMonitorMessages.disconnected]"@#@ @source: @#@"Network connection is lost."@#@


/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _webphoneErrors$conne;

var _webphoneErrors = __webpack_require__(928);

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Invio eseguito.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Le chiamate da browser sono supportate solo in Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'È possibile registrare fino a 5 telefoni web.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'Con questo interno non è attualmente consentito effettuare chiamate in uscita con il browser. Contatta il rappresentante dell\'account per un aggiornamento'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'Non disponi dell\'autorizzazione per inviare il messaggio.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Telefono web registrato.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'Impossibile inviare la chiamata alla segreteria telefonica a causa di un errore interno'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'Impossibile disattivare l\'audio della chiamata in questo momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'Impossibile mettere in attesa la chiamata in questo momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'Impossibile commutare la chiamata. Riprova più tardi.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'Non è possibile registrare la chiamata in questo momento. Codice errore: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'La funzione di registrazione chiamata non è disponibile nel tuo account. Contatta l\'amministratore del tuo account.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'Impossibile trasferire la chiamata. Riprova più tardi.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'webphoneUnavailable', '{error}. Riconnessione al server in corso. Se l\'errore persiste, segnala il problema all\'assistenza {brandName}.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'errorCode', 'Codice errore interno: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'occurs', 'Si è verificato un errore interno'), _webphoneErrors$conne);

// @key: @#@"[webphoneErrors.connectFailed]"@#@ @source: @#@"Connect with web phone server failed."@#@
// @key: @#@"[webphoneErrors.connected]"@#@ @source: @#@"Web phone registered."@#@
// @key: @#@"[webphoneErrors.browserNotSupported]"@#@ @source: @#@"Calling with browser is only supported on Chrome."@#@
// @key: @#@"[webphoneErrors.webphoneCountOverLimit]"@#@ @source: @#@"A maximum of 5 web phones could be registered."@#@
// @key: @#@"[webphoneErrors.notOutboundCallWithoutDL]"@#@ @source: @#@"Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade."@#@
// @key: @#@"[webphoneErrors.getSipProvisionError]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[webphoneErrors.toVoiceMailError]"@#@ @source: @#@"Cannot send call to voicemail due to internal error"@#@
// @key: @#@"[webphoneErrors.muteError]"@#@ @source: @#@"Call cannot be muted at the moment."@#@
// @key: @#@"[webphoneErrors.holdError]"@#@ @source: @#@"Call cannot be hold at the moment."@#@
// @key: @#@"[webphoneErrors.flipError]"@#@ @source: @#@"Cannot flip the call. Please try again later."@#@
// @key: @#@"[webphoneErrors.recordError]"@#@ @source: @#@"You cannot record the call at the moment. Error code: {errorCode}"@#@
// @key: @#@"[webphoneErrors.recordDisabled]"@#@ @source: @#@"Sorry, your account does not have the feature to record a call. Please contact your account administrator."@#@
// @key: @#@"[webphoneErrors.transferError]"@#@ @source: @#@"Cannot transfer the call. Please try again later."@#@
// @key: @#@"webphoneUnavailable"@#@ @source: @#@"{error}. We are reconnecting to server. If the error persists, please report this error to {brandName} Support."@#@
// @key: @#@"errorCode"@#@ @source: @#@"Internal error code: {errorCode}"@#@
// @key: @#@"occurs"@#@ @source: @#@"Internal error occurs"@#@


/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageStoreErrors = __webpack_require__(930);

var _messageStoreErrors2 = _interopRequireDefault(_messageStoreErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _messageStoreErrors2.default.deleteFailed, 'Impossibile eliminare il messaggio vocale a causa di un errore del server.');

// @key: @#@"[messageStoreErrors.deleteFailed]"@#@ @source: @#@"Cannot delete the voicemail due to internal server error."@#@


/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _meetingStatus$emptyT;

var _meetingStatus = __webpack_require__(767);

var _meetingStatus2 = _interopRequireDefault(_meetingStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_meetingStatus$emptyT = {}, (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.emptyTopic, 'Specifica l\'argomento della riunione.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.noPassword, 'Fornisci la password della riunione.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.scheduledSuccess, 'La riunione è programmata.'), _meetingStatus$emptyT);

// @key: @#@"[meetingStatus.emptyTopic]"@#@ @source: @#@"Please enter meeting topic."@#@
// @key: @#@"[meetingStatus.noPassword]"@#@ @source: @#@"Please provide meeting password."@#@
// @key: @#@"[meetingStatus.scheduledSuccess]"@#@ @source: @#@"Meeting is scheduled."@#@


/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _audioSettingsErrors = __webpack_require__(933);

var _audioSettingsErrors2 = _interopRequireDefault(_audioSettingsErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _audioSettingsErrors2.default.userMediaPermission, 'Autorizza {brandName} per Google ad accedere al tuo audio.');

// @key: @#@"[audioSettingsErrors.userMediaPermission]"@#@ @source: @#@"Please grant {brandName} for Google to access your audio."@#@


/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _permissionsMessages = __webpack_require__(929);

var _permissionsMessages2 = _interopRequireDefault(_permissionsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'La tua versione non supporta l\'integrazione {application}. Contatta il rappresentante dell\'account per aggiornare la versione {brand}.');

// @key: @#@"[permissionMessages.invalidTier]"@#@ @source: @#@"Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition."@#@
// @key: @#@"[permissionMessages.insufficientPrivilege]"@#@ @source: @#@"Insufficient privilege. Please contact your account representative for an upgrade."@#@


/***/ }),

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messages = __webpack_require__(932);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _messages2.default.requireAditionalNumbers, 'Seleziona i numeri di accesso aggiuntivi.');

// @key: @#@"[messages.requireAditionalNumbers]"@#@ @source: @#@"Please select the additional dial-in numbers."@#@


/***/ }),

/***/ 1285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Accedi',
  version: 'Versione'
};

// @key: @#@"loginButton"@#@ @source: @#@"Sign In"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@


/***/ }),

/***/ 1297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$callingOptions;

var _callingOptions = __webpack_require__(374);

var _callingOptions2 = _interopRequireDefault(_callingOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$callingOptions = {
  title: 'Chiamata'
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} per il desktop'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'Il mio telefono {brand}'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Altro telefono'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Telefono personalizzato'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Effettua chiamate con'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Chiamami prima alla mia postazione, poi connetti il gruppo chiamato'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'La mia postazione'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Chiedimi di comporre 1 prima di connettere la chiamata'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Browser'), (0, _defineProperty3.default)(_title$callingOptions, 'save', 'Salva'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser + 'Tooltip', 'Usa questa opzione per effettuare e ricevere chiamate usando il microfono e l\'altoparlante del computer.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone + 'Tooltip', 'Usa questa opzione per effettuare e ricevere chiamate usando l\'app {brand} per desktop.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip', 'Usa questa opzione per effettuare chiamate usando il tuo telefono {brand}.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip1', 'Per la chiamata effettuata, squillerà prima il tuo telefono {brand} e poi quello della persona chiamata.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip', 'Usa questa opzione per effettuare chiamate con i tuoi altri telefoni, ad esempio quello di casa o un cellulare che hai aggiunto al tuo interno {brand}.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip1', 'Per la chiamata effettuata, squillerà prima questo telefono e poi quello della persona chiamata.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip', 'Usa questa opzione per effettuare chiamate con qualsiasi telefono inserendo un numero di telefono valido nel campo qui sotto.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip1', 'Per la chiamata effettuata, squillerà prima questo telefono e poi quello della persona chiamata.'), _title$callingOptions);

// @key: @#@"title"@#@ @source: @#@"Calling"@#@
// @key: @#@"[callingOptions.softphone]"@#@ @source: @#@"{brand} for Desktop"@#@
// @key: @#@"[callingOptions.myphone]"@#@ @source: @#@"My {brand} Phone"@#@
// @key: @#@"[callingOptions.otherphone]"@#@ @source: @#@"Other Phone"@#@
// @key: @#@"[callingOptions.customphone]"@#@ @source: @#@"Custom Phone"@#@
// @key: @#@"[callingOptions.browser]"@#@ @source: @#@"Browser"@#@
// @key: @#@"makeCallsWith"@#@ @source: @#@"Make my calls with"@#@
// @key: @#@"ringoutHint"@#@ @source: @#@"Ring me at my location first, then connect the called party"@#@
// @key: @#@"myLocationLabel"@#@ @source: @#@"My Location"@#@
// @key: @#@"press1ToStartCallLabel"@#@ @source: @#@"Prompt me to dial 1 before connecting the call"@#@
// @key: @#@"[`${callingOptions.browser}Tooltip`]"@#@ @source: @#@"Use this option to make and receive calls using your computer’s microphone and speaker."@#@
// @key: @#@"[`${callingOptions.softphone}Tooltip`]"@#@ @source: @#@"Use this option to make and receive calls using your {brand} for Desktop app."@#@
// @key: @#@"[`${callingOptions.myphone}Tooltip`]"@#@ @source: @#@"Use this option to make calls using your {brand} phone."@#@
// @key: @#@"[`${callingOptions.myphone}Tooltip1`]"@#@ @source: @#@"For the call you make, your {brand} phone will ring first then the party you called."@#@
// @key: @#@"[`${callingOptions.otherphone}Tooltip`]"@#@ @source: @#@"Use this option to make calls using your other phones such as home or cell phones that you have added in your {brand} Extension."@#@
// @key: @#@"[`${callingOptions.otherphone}Tooltip1`]"@#@ @source: @#@"For the call you make, this phone will ring first then the party you called."@#@
// @key: @#@"[`${callingOptions.customphone}Tooltip`]"@#@ @source: @#@"Use this option to make calls using any phone of your choice by entering a valid phone number in the field below."@#@
// @key: @#@"[`${callingOptions.customphone}Tooltip1`]"@#@ @source: @#@"For the call you make, this phone will ring first then the party you called."@#@


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _map = __webpack_require__(94);

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.prefixEnum = prefixEnum;

var _HashMap2 = __webpack_require__(130);

var _HashMap3 = _interopRequireDefault(_HashMap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @class
 * @description helper class for creating redux action definition maps
 */

var Enum = function (_HashMap) {
  (0, _inherits3.default)(Enum, _HashMap);

  /**
   * @constructor
   * @param {String[]} actions - list of action strings
   * @extends HashMap
   */
  function Enum() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _classCallCheck3.default)(this, Enum);

    var definition = {};
    values.forEach(function (value) {
      definition[value] = prefix !== '' ? prefix + '-' + value : value;
    });
    return (0, _possibleConstructorReturn3.default)(this, (Enum.__proto__ || (0, _getPrototypeOf2.default)(Enum)).call(this, definition));
  }

  return Enum;
}(_HashMap3.default);

exports.default = Enum;

var prefixCache = new _map2.default();

/**
 * @function
 * @description helper function to return a prefixed action definition maps
 */
function prefixEnum(_ref) {
  var enumMap = _ref.enumMap,
      prefix = _ref.prefix,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? enumMap : _ref$base;

  if (!prefix || prefix === '') return base;

  if (!prefixCache.has(prefix)) {
    prefixCache.set(prefix, new _map2.default());
  }

  var cache = prefixCache.get(prefix);

  if (!cache.has(base)) {
    var definition = {};
    for (var type in base) {
      /* istanbul ignore else */
      if (hasOwnProperty.call(base, type)) {
        definition[type] = prefix + '-' + base[type];
      }
    }
    cache.set(base, new _HashMap3.default(definition));
  }
  return cache.get(base);
}


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty = __webpack_require__(115);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _freeze = __webpack_require__(810);

var _freeze2 = _interopRequireDefault(_freeze);

var _map = __webpack_require__(94);

var _map2 = _interopRequireDefault(_map);

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(289);

var _symbol2 = _interopRequireDefault(_symbol);

exports.defaultGetFunction = defaultGetFunction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sDefinition = (0, _symbol2.default)('definition');
var sValueMap = (0, _symbol2.default)('valueMap');

function defaultGetFunction(item) {
  return item;
}

/**
 * @class HashMap
 * @description Simple hash map class
 */

var HashMap = function () {
  /**
   * @constructor
   * @param {Object} definition
   */
  function HashMap(definition) {
    var _this = this;

    (0, _classCallCheck3.default)(this, HashMap);

    this[sDefinition] = (0, _assign2.default)({}, definition);
    this[sValueMap] = new _map2.default();

    var _loop = function _loop(key) {
      /* istanbul ignore else */
      if (Object.prototype.hasOwnProperty.call(definition, key)) {
        (0, _defineProperty2.default)(_this, key, {
          get: function get() {
            return this[sDefinition][key];
          },

          enumerable: true
        });
        _this[sValueMap].set(_this[sDefinition][key], key);
      }
    };

    for (var key in definition) {
      _loop(key);
    }
    (0, _freeze2.default)(this);
  }

  (0, _createClass3.default)(HashMap, null, [{
    key: 'getKey',
    value: function getKey(map, value) {
      return map[sValueMap].get(value);
    }
  }, {
    key: 'hasValue',
    value: function hasValue(map, value) {
      return map[sValueMap].has(value);
    }
  }, {
    key: 'fromSet',
    value: function fromSet(_ref) {
      var set = _ref.set,
          _ref$getKey = _ref.getKey,
          getKey = _ref$getKey === undefined ? defaultGetFunction : _ref$getKey,
          _ref$getValue = _ref.getValue,
          getValue = _ref$getValue === undefined ? defaultGetFunction : _ref$getValue;

      var definition = {};
      [].concat((0, _toConsumableArray3.default)(set)).forEach(function (item) {
        var key = getKey(item);
        var value = getValue(item);
        if (typeof key !== 'undefined' && key !== null && key !== '') {
          definition[key] = value;
        }
      });
      return new HashMap(definition);
    }
  }]);
  return HashMap;
}();

exports.default = HashMap;


/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Salva'
};

// @key: @#@"save"@#@ @source: @#@"Save"@#@


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(807), __esModule: true };

/***/ }),

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Regione',
  NAOnlyMessage: 'Imposta il prefisso. Verrà usato per le chiamate locali.',
  MultiWithNAMessage: 'Imposta i prefissi locale e internazionale. Verranno utilizzati per la formattazione dei numeri di telefono e le chiamate locali.',
  MultiWithoutNAMessage: 'Seleziona il paese in cui ti trovi. Verrà utilizzato per la formattazione dei numeri di telefono e le chiamate locali.',
  country: 'Paese',
  areaCode: 'Prefisso',
  areaCodePlaceholder: 'Inserisci prefisso',
  save: 'Salva'
};

// @key: @#@"title"@#@ @source: @#@"Region"@#@
// @key: @#@"NAOnlyMessage"@#@ @source: @#@"Please set your area code. This will be used for local dialing."@#@
// @key: @#@"MultiWithNAMessage"@#@ @source: @#@"Please set the country and area code for your region. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"MultiWithoutNAMessage"@#@ @source: @#@"Please select the country you locate in. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"country"@#@ @source: @#@"Country"@#@
// @key: @#@"areaCode"@#@ @source: @#@"Area Code"@#@
// @key: @#@"areaCodePlaceholder"@#@ @source: @#@"Enter Area Code"@#@


/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  419: 'America Latina',
  AR: 'Argentina',
  AT: 'Austria',
  BH: 'Bahrain',
  BR: 'Brasile',
  BG: 'Bulgaria',
  CA: 'Canada',
  CL: 'Cile',
  CN: 'Cina',
  HR: 'Croazia',
  CY: 'Cipro',
  CZ: 'Repubblica Ceca',
  DK: 'Danimarca',
  DO: 'Repubblica Dominicana',
  EE: 'Estonia',
  FI: 'Finlandia',
  FR: 'Francia',
  DE: 'Germania',
  HK: 'Hong Kong',
  HU: 'Ungheria',
  IE: 'Irlanda',
  IL: 'Israele',
  IN: 'India',
  IT: 'Italia',
  JP: 'Giappone',
  LV: 'Lettonia',
  LT: 'Lituania',
  LU: 'Lussemburgo',
  MY: 'Malesia',
  MX: 'Messico',
  NL: 'Paesi Bassi',
  NO: 'Norvegia',
  PA: 'Panama',
  PH: 'Filippine',
  PL: 'Polonia',
  PT: 'Portogallo',
  RO: 'Romania',
  SK: 'Slovacchia',
  SI: 'Slovenia',
  ES: 'Spagna',
  SE: 'Svezia',
  CH: 'Svizzera',
  TR: 'Turchia',
  GB: 'Regno Unito',
  AU: 'Australia',
  GE: 'Georgia',
  ID: 'Indonesia',
  KE: 'Kenya',
  NG: 'Nigeria',
  PK: 'Pakistan',
  ZA: 'Sudafrica',
  KR: 'Corea del Sud',
  SG: 'Singapore',
  TW: 'Taiwan',
  UA: 'Ucraina',
  US: 'Stati Uniti',
  VN: 'Vietnam',
  BE: 'Belgio',
  BJ: 'Benin',
  SV: 'El Salvador',
  GH: 'Ghana',
  GR: 'Grecia',
  GN: 'Guinea',
  NZ: 'Nuova Zelanda',
  PE: 'Perù',
  PR: 'Porto Rico'
};

// @key: @#@"419"@#@ @source: @#@"Latin America"@#@
// @key: @#@"AR"@#@ @source: @#@"Argentina"@#@
// @key: @#@"AT"@#@ @source: @#@"Austria"@#@
// @key: @#@"BH"@#@ @source: @#@"Bahrain"@#@
// @key: @#@"BR"@#@ @source: @#@"Brazil"@#@
// @key: @#@"BG"@#@ @source: @#@"Bulgaria"@#@
// @key: @#@"CA"@#@ @source: @#@"Canada"@#@
// @key: @#@"CL"@#@ @source: @#@"Chile"@#@
// @key: @#@"CN"@#@ @source: @#@"China"@#@
// @key: @#@"HR"@#@ @source: @#@"Croatia"@#@
// @key: @#@"CY"@#@ @source: @#@"Cyprus"@#@
// @key: @#@"CZ"@#@ @source: @#@"Czech Republic"@#@
// @key: @#@"DK"@#@ @source: @#@"Denmark"@#@
// @key: @#@"DO"@#@ @source: @#@"Dominican Republic"@#@
// @key: @#@"EE"@#@ @source: @#@"Estonia"@#@
// @key: @#@"FI"@#@ @source: @#@"Finland"@#@
// @key: @#@"FR"@#@ @source: @#@"France"@#@
// @key: @#@"DE"@#@ @source: @#@"Germany"@#@
// @key: @#@"HK"@#@ @source: @#@"Hong Kong"@#@
// @key: @#@"HU"@#@ @source: @#@"Hungary"@#@
// @key: @#@"IE"@#@ @source: @#@"Ireland"@#@
// @key: @#@"IL"@#@ @source: @#@"Israel"@#@
// @key: @#@"IN"@#@ @source: @#@"India"@#@
// @key: @#@"IT"@#@ @source: @#@"Italy"@#@
// @key: @#@"JP"@#@ @source: @#@"Japan"@#@
// @key: @#@"LV"@#@ @source: @#@"Latvia"@#@
// @key: @#@"LT"@#@ @source: @#@"Lithuania"@#@
// @key: @#@"LU"@#@ @source: @#@"Luxembourg"@#@
// @key: @#@"MY"@#@ @source: @#@"Malaysia"@#@
// @key: @#@"MX"@#@ @source: @#@"Mexico"@#@
// @key: @#@"NL"@#@ @source: @#@"Netherlands"@#@
// @key: @#@"NO"@#@ @source: @#@"Norway"@#@
// @key: @#@"PA"@#@ @source: @#@"Panama"@#@
// @key: @#@"PH"@#@ @source: @#@"Philippines"@#@
// @key: @#@"PL"@#@ @source: @#@"Poland"@#@
// @key: @#@"PT"@#@ @source: @#@"Portugal"@#@
// @key: @#@"RO"@#@ @source: @#@"Romania"@#@
// @key: @#@"SK"@#@ @source: @#@"Slovakia"@#@
// @key: @#@"SI"@#@ @source: @#@"Slovenia"@#@
// @key: @#@"ES"@#@ @source: @#@"Spain"@#@
// @key: @#@"SE"@#@ @source: @#@"Sweden"@#@
// @key: @#@"CH"@#@ @source: @#@"Switzerland"@#@
// @key: @#@"TR"@#@ @source: @#@"Turkey"@#@
// @key: @#@"GB"@#@ @source: @#@"United Kingdom"@#@
// @key: @#@"AU"@#@ @source: @#@"Australia"@#@
// @key: @#@"GE"@#@ @source: @#@"Georgia"@#@
// @key: @#@"ID"@#@ @source: @#@"Indonesia"@#@
// @key: @#@"KE"@#@ @source: @#@"Kenya"@#@
// @key: @#@"NG"@#@ @source: @#@"Nigeria"@#@
// @key: @#@"PK"@#@ @source: @#@"Pakistan"@#@
// @key: @#@"ZA"@#@ @source: @#@"South Africa"@#@
// @key: @#@"KR"@#@ @source: @#@"South Korea"@#@
// @key: @#@"SG"@#@ @source: @#@"Singapore"@#@
// @key: @#@"TW"@#@ @source: @#@"Taiwan"@#@
// @key: @#@"UA"@#@ @source: @#@"Ukraine"@#@
// @key: @#@"US"@#@ @source: @#@"United States"@#@
// @key: @#@"VN"@#@ @source: @#@"Vietnam"@#@
// @key: @#@"BE"@#@ @source: @#@"Belgium"@#@
// @key: @#@"BJ"@#@ @source: @#@"Benin"@#@
// @key: @#@"SV"@#@ @source: @#@"El Salvador"@#@
// @key: @#@"GH"@#@ @source: @#@"Ghana"@#@
// @key: @#@"GR"@#@ @source: @#@"Greece"@#@
// @key: @#@"GN"@#@ @source: @#@"Guinea"@#@
// @key: @#@"NZ"@#@ @source: @#@"New Zealand"@#@
// @key: @#@"PE"@#@ @source: @#@"Peru"@#@
// @key: @#@"PR"@#@ @source: @#@"Puerto Rico"@#@


/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneTypes$business$;

var _phoneTypes = __webpack_require__(3218);

var _phoneTypes2 = _interopRequireDefault(_phoneTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Telefono azienda'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Interno'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Numero casa'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Telefono cellulare'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Telefono'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Tipo di telefono sconosciuto'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.company, 'Numero aziendale'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.direct, 'Numero diretto'), _phoneTypes$business$);

// @key: @#@"[phoneTypes.business]"@#@ @source: @#@"Business Phone"@#@
// @key: @#@"[phoneTypes.extension]"@#@ @source: @#@"Extension Number"@#@
// @key: @#@"[phoneTypes.home]"@#@ @source: @#@"Home Number"@#@
// @key: @#@"[phoneTypes.mobile]"@#@ @source: @#@"Mobile Phone"@#@
// @key: @#@"[phoneTypes.phone]"@#@ @source: @#@"Phone"@#@
// @key: @#@"[phoneTypes.unknown]"@#@ @source: @#@"Unknown Phone Type"@#@
// @key: @#@"[phoneTypes.company]"@#@ @source: @#@"Company Number"@#@
// @key: @#@"[phoneTypes.direct]"@#@ @source: @#@"Direct Number"@#@


/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneSources$account;

var _phoneSources = __webpack_require__(1084);

var _phoneSources2 = _interopRequireDefault(_phoneSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Account'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contatto'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Opportunità'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'Utente di sistema'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), _phoneSources$account);

// @key: @#@"[phoneSources.account]"@#@ @source: @#@"Account"@#@
// @key: @#@"[phoneSources.contact]"@#@ @source: @#@"Contact"@#@
// @key: @#@"[phoneSources.rcContact]"@#@ @source: @#@"{brand}"@#@
// @key: @#@"[phoneSources.lead]"@#@ @source: @#@"Lead"@#@
// @key: @#@"[phoneSources.opportunity]"@#@ @source: @#@"Opportunity"@#@
// @key: @#@"[phoneSources.systemUser]"@#@ @source: @#@"System User"@#@


/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'A',
  enterNameOrNumber: 'Inserisci il nome o il numero'
};

// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Name or Number"@#@


/***/ }),

/***/ 1381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Diretto',
  MainCompanyNumber: 'Principale',
  CompanyNumber: 'Società',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Bloccato',
  from: 'Da',
  AdditionalCompanyNumber: 'Azienda',
  ForwardedCompanyNumber: 'Inoltrato'
};

// @key: @#@"DirectNumber"@#@ @source: @#@"Direct"@#@
// @key: @#@"MainCompanyNumber"@#@ @source: @#@"Main"@#@
// @key: @#@"CompanyNumber"@#@ @source: @#@"Company"@#@
// @key: @#@"CompanyFaxNumber"@#@ @source: @#@"Fax"@#@
// @key: @#@"Blocked"@#@ @source: @#@"Blocked"@#@
// @key: @#@"AdditionalCompanyNumber"@#@ @source: @#@"Company"@#@
// @key: @#@"ForwardedCompanyNumber"@#@ @source: @#@"Forwarded"@#@
// @key: @#@"from"@#@ @source: @#@"From"@#@


/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'Da',
  to: 'A',
  enterNameOrNumber: 'Immetti il numero o il nome...',
  typeMessage: 'Digita il messaggio...',
  send: 'Invia'
};

// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@
// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Connessione...',
  logCall: 'Registra chiamata',
  editLog: 'Modifica registro',
  select: 'Seleziona un record corrispondente',
  OnHold: 'In attesa',
  Ringing: 'Chiamata in corso',
  CallConnected: 'Chiamata connessa',
  unknownUser: 'Utente sconosciuto',
  unknownNumber: 'Anonimo',
  unavailable: 'Non disponibile',
  viewDetails: 'Visualizza dettagli'
};

// @key: @#@"logging"@#@ @source: @#@"Logging..."@#@
// @key: @#@"logCall"@#@ @source: @#@"Log Call"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"select"@#@ @source: @#@"Select a matching record"@#@
// @key: @#@"OnHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"Ringing"@#@ @source: @#@"Ringing"@#@
// @key: @#@"CallConnected"@#@ @source: @#@"Call Connected"@#@
// @key: @#@"unknownUser"@#@ @source: @#@"Unknown User"@#@
// @key: @#@"unknownNumber"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"unavailable"@#@ @source: @#@"Unavailable"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@


/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  typeMessage: 'Digita il messaggio...',
  send: 'Invia'
};

// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'Nuova conferenza',
  dialInNumber: 'Numero con accesso esterno',
  host: 'Moderatore',
  participants: 'Partecipanti',
  internationalParticipants: 'Partecipanti internazionali',
  internationalNumbersHeader: 'Seleziona numeri con accesso esterno internazionali',
  search: 'Cerca...',
  inviteWithText: 'Invita con testo',
  inviteText: 'Accedi alla conferenza {brandName}.\r\n\nNumeri di accesso: {formattedDialInNumber} \r\n{additionalNumbersSection} \r\nAccesso partecipante: {participantCode} \r\n\nServe un numero di accesso internazionale? Visita {dialInNumbersLinks} \r\n\nQuesta conferenza telefonica è offerta dal servizio di conferenza {brandName}.',
  hostAccess: 'Accesso moderatore',
  participantsAccess: 'Accesso partecipanti',
  addinalDialInNumbers: 'Numeri di accesso aggiuntivi',
  selectNumbers: 'Seleziona numeri',
  enableJoinBeforeHost: 'Consenti ingresso prima del moderatore',
  conferenceCommands: 'Comandi conferenza',
  inviteWithGCalendar: 'Invita con Google Calendar',
  joinAsHost: 'Avvia conferenza',
  internationalNumber: 'Numeri di accesso internazionali:'
};

// @key: @#@"newConference"@#@ @source: @#@"New Conference"@#@
// @key: @#@"dialInNumber"@#@ @source: @#@"Dial-in Number"@#@
// @key: @#@"hostAccess"@#@ @source: @#@"Host Access"@#@
// @key: @#@"participantsAccess"@#@ @source: @#@"Participants Access"@#@
// @key: @#@"addinalDialInNumbers"@#@ @source: @#@"Additional Dial-in Numbers"@#@
// @key: @#@"selectNumbers"@#@ @source: @#@"Select Numbers"@#@
// @key: @#@"enableJoinBeforeHost"@#@ @source: @#@"Enable join before Host"@#@
// @key: @#@"conferenceCommands"@#@ @source: @#@"Conference Commands"@#@
// @key: @#@"inviteWithGCalendar"@#@ @source: @#@"Invite with Google Calendar"@#@
// @key: @#@"inviteWithText"@#@ @source: @#@"Invite with Text"@#@
// @key: @#@"joinAsHost"@#@ @source: @#@"Launch Conference"@#@
// @key: @#@"internationalNumber"@#@ @source: @#@"International Dial-in Numbers:"@#@
// @key: @#@"inviteText"@#@ @source: @#@"Please join the {brandName} conference.\n\nDial-In Numbers: {formattedDialInNumber} \n{additionalNumbersSection} \nParticipant Access: {participantCode} \n\nNeed an international dial-in phone number? Please visit {dialInNumbersLinks} \n\nThis conference call is brought to you by {brandName} Conferencing."@#@


/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Comandi conferenza',
  starSharp2Title: 'Numero chiamanti',
  starSharp2Body: 'Tieni il conto di quante persone partecipano alla chiamata',
  starSharp3Title: 'Abbandona conferenza',
  starSharp3Body: 'Consente al moderatore di riagganciare e chiudere la chiamata',
  starSharp4Title: 'Menu',
  starSharp4Body: 'Consente di ascoltare l\'elenco dei comandi di composizione a toni',
  starSharp5Title: 'Imposta modalità di ascolto',
  starSharp5Body: '1 pressione: Disattiva audio chiamanti - I chiamanti possono riattivare l\'audio con *, #, 6\r\n2 pressioni: Disattiva audio chiamanti - Solo ascolto. Nessuna opzione di riattivazione audio\r\n3 pressioni: Riattiva audio chiamanti - Riapre la linea',
  starSharp6Title: 'Disattiva audio linea moderatore',
  starSharp6Body: 'Premi una volta per DISATTIVARE L\'AUDIO\r\nPremi nuovamente per RIATTIVARE L\'AUDIO',
  starSharp7Title: 'Proteggi chiamata',
  starSharp7Body: 'Premi una volta per BLOCCARE tutti i chiamanti\r\nPremi nuovamente per APRIRE la chiamata',
  starSharp8Title: 'Ricevi un segnale acustico quando le persone entrano o escono dalla chiamata',
  starSharp8Body: '1 pressione: Disattiva l\'audio\r\n2 pressioni: Tono entrata attivo, tono uscita inattivo\r\n3 pressioni: Tono entrata inattivo, tono uscita attivo\r\n4 pressioni: Attiva l\'audio',
  star9Title: 'Registra la conferenza',
  star9Body: 'Premi una volta per AVVIARE la registrazione\r\nPremi nuovamente per INTERROMPERE la registrazione'
};

// @key: @#@"title"@#@ @source: @#@"Conference Commands"@#@
// @key: @#@"starSharp2Title"@#@ @source: @#@"Caller Count"@#@
// @key: @#@"starSharp2Body"@#@ @source: @#@"Keep track of how many people are on the call"@#@
// @key: @#@"starSharp3Title"@#@ @source: @#@"Leave Conference"@#@
// @key: @#@"starSharp3Body"@#@ @source: @#@"Lets the host hang up and end the call"@#@
// @key: @#@"starSharp4Title"@#@ @source: @#@"Menu"@#@
// @key: @#@"starSharp4Body"@#@ @source: @#@"Listen to the list of touchtone commands"@#@
// @key: @#@"starSharp5Title"@#@ @source: @#@"Set Listening Modes"@#@
// @key: @#@"starSharp5Body"@#@ @source: @#@"Press 1x: Mute callers - Callers can unmute with  *, #, 6\nPress 2x: Mute callers - Listen only. No unmuting option\nPress 3x: Unmute callers - Opens the line again"@#@
// @key: @#@"starSharp6Title"@#@ @source: @#@"Mute Host Line"@#@
// @key: @#@"starSharp6Body"@#@ @source: @#@"Press once to MUTE\nPress again to UNMUTE"@#@
// @key: @#@"starSharp7Title"@#@ @source: @#@"Secure the Call"@#@
// @key: @#@"starSharp7Body"@#@ @source: @#@"Press once to BLOCK all callers\nPress again to OPEN the call"@#@
// @key: @#@"starSharp8Title"@#@ @source: @#@"Hear sound when people Enter or Exit call"@#@
// @key: @#@"starSharp8Body"@#@ @source: @#@"Press 1x: Turns OFF sound\nPress 2x: Enter tone is ON Exit tone is OFF\nPress 3x: Enter tone is OFF Exit tone is ON\nPress 4x: Turns ON sound"@#@
// @key: @#@"star9Title"@#@ @source: @#@"Record your conference"@#@
// @key: @#@"star9Body"@#@ @source: @#@"Press once to START recording\nPress again to STOP recording"@#@


/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Account',
  contact: 'Contatto',
  lead: 'Lead',
  chooseEntity: 'Seleziona il tipo di entità',
  create: 'Crea'
};

// @key: @#@"account"@#@ @source: @#@"Account"@#@
// @key: @#@"contact"@#@ @source: @#@"Contact"@#@
// @key: @#@"lead"@#@ @source: @#@"Lead"@#@
// @key: @#@"chooseEntity"@#@ @source: @#@"Please select entity type"@#@
// @key: @#@"create"@#@ @source: @#@"Create"@#@


/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  sureToDeleteVoiceMail: 'Eliminare questo messaggio vocale?',
  doNotAskAgain: 'Non chiedermelo più'
};

// @key: @#@"sureToDeleteVoiceMail"@#@ @source: @#@"Are you sure you want to delete this voicemail?"@#@
// @key: @#@"doNotAskAgain"@#@ @source: @#@"Don't ask me again"@#@


/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  download: 'Scarica',
  play: 'Riproduci',
  pause: 'Pausa'
};

// @key: @#@"download"@#@ @source: @#@"Download"@#@
// @key: @#@"play"@#@ @source: @#@"Play"@#@
// @key: @#@"pause"@#@ @source: @#@"Pause"@#@


/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _addLog$editLog$viewD;

var _messageTypes = __webpack_require__(359);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_addLog$editLog$viewD = {
  addLog: 'Registro',
  editLog: 'Modifica registro',
  viewDetails: 'Visualizza dettagli',
  addEntity: 'Crea nuovo',
  call: 'Chiama',
  conversation: 'Conversazione',
  groupConversation: 'Conversazione di gruppo',
  text: 'SMS',
  voiceMessage: 'Messaggio vocale'
}, (0, _defineProperty3.default)(_addLog$editLog$viewD, _messageTypes2.default.voiceMail, 'Segreteria telefonica'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'mark', 'Contrassegna come non letto'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'unmark', 'Contrassegna come letto'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'delete', 'Elimina'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxSent', 'Fax inviato'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxReceived', 'Fax ricevuto'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'pages', 'pagine'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'preview', 'Visualizza'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'download', 'Scarica'), _addLog$editLog$viewD);

// @key: @#@"addLog"@#@ @source: @#@"Log"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@
// @key: @#@"addEntity"@#@ @source: @#@"Create New"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"conversation"@#@ @source: @#@"Conversation"@#@
// @key: @#@"groupConversation"@#@ @source: @#@"Group Conversation"@#@
// @key: @#@"voiceMessage"@#@ @source: @#@"Voice message"@#@
// @key: @#@"[messageTypes.voiceMail]"@#@ @source: @#@"Voice Mail"@#@
// @key: @#@"mark"@#@ @source: @#@"Mark as Unread"@#@
// @key: @#@"unmark"@#@ @source: @#@"Mark as Read"@#@
// @key: @#@"delete"@#@ @source: @#@"Delete"@#@
// @key: @#@"faxSent"@#@ @source: @#@"Fax sent"@#@
// @key: @#@"faxReceived"@#@ @source: @#@"Fax received"@#@
// @key: @#@"pages"@#@ @source: @#@"pages"@#@
// @key: @#@"preview"@#@ @source: @#@"View"@#@
// @key: @#@"download"@#@ @source: @#@"Download"@#@


/***/ }),

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$search$noMessa;

var _messageTypes = __webpack_require__(359);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$search$noMessa = {
  title: 'Messaggi',
  search: 'Cerca...',
  noMessages: 'Nessun messaggio',
  noSearchResults: 'Nessun record corrispondente',
  composeText: 'Componi messaggio'
}, (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.all, 'Tutti'), (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.voiceMail, 'Voce'), (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.text, 'SMS'), (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.fax, 'Fax'), _title$search$noMessa);

// @key: @#@"title"@#@ @source: @#@"Messages"@#@
// @key: @#@"search"@#@ @source: @#@"Search..."@#@
// @key: @#@"composeText"@#@ @source: @#@"Compose Text"@#@
// @key: @#@"noMessages"@#@ @source: @#@"No Messages"@#@
// @key: @#@"noSearchResults"@#@ @source: @#@"No matching records found"@#@
// @key: @#@"[messageTypes.all]"@#@ @source: @#@"All"@#@
// @key: @#@"[messageTypes.voiceMail]"@#@ @source: @#@"Voice"@#@
// @key: @#@"[messageTypes.text]"@#@ @source: @#@"Text"@#@
// @key: @#@"[messageTypes.fax]"@#@ @source: @#@"Fax"@#@


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Connessione...',
  logCall: 'Registra chiamata',
  editLog: 'Modifica registro',
  select: 'Seleziona un record corrispondente',
  OnHold: 'In attesa',
  Ringing: 'Squillo',
  CallConnected: 'Chiamata connessa',
  unknownUser: 'Utente sconosciuto',
  unknownNumber: 'Anonimo',
  unavailable: 'Non disponibile',
  viewDetails: 'Visualizza dettagli',
  addEntity: 'Crea nuovo',
  addLog: 'Registro',
  text: 'SMS',
  call: 'Chiama',
  addContact: 'Aggiungi contatto',
  missedCall: 'Perse',
  inboundCall: 'In entrata',
  outboundCall: 'In uscita',
  from: 'Da',
  to: 'A',
  hangup: 'Riaggancia',
  accept: 'Accetta',
  toVoicemail: 'Invia alla segreteria telefonica'
};

// @key: @#@"logging"@#@ @source: @#@"Logging..."@#@
// @key: @#@"logCall"@#@ @source: @#@"Log Call"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"select"@#@ @source: @#@"Select a matching record"@#@
// @key: @#@"OnHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"Ringing"@#@ @source: @#@"Ringing"@#@
// @key: @#@"CallConnected"@#@ @source: @#@"Call Connected"@#@
// @key: @#@"unknownUser"@#@ @source: @#@"Unknown User"@#@
// @key: @#@"unknownNumber"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"unavailable"@#@ @source: @#@"Unavailable"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@
// @key: @#@"addEntity"@#@ @source: @#@"Create New"@#@
// @key: @#@"addLog"@#@ @source: @#@"Log"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"addContact"@#@ @source: @#@"Add Contact"@#@
// @key: @#@"missedCall"@#@ @source: @#@"Missed"@#@
// @key: @#@"inboundCall"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outboundCall"@#@ @source: @#@"Outbound"@#@
// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"hangup"@#@ @source: @#@"Hangup"@#@
// @key: @#@"accept"@#@ @source: @#@"Accept"@#@
// @key: @#@"toVoicemail"@#@ @source: @#@"Send to Voicemail"@#@


/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'Nessuna chiamata attiva',
  currentCall: 'Chiamata corrente',
  ringCall: 'Squillo chiamata',
  onHoldCall: 'Chiamata in attesa',
  otherDeviceCall: 'Chiamate in corso sugli altri miei dispositivi'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"currentCall"@#@ @source: @#@"Current Call"@#@
// @key: @#@"ringCall"@#@ @source: @#@"Ringing Call"@#@
// @key: @#@"onHoldCall"@#@ @source: @#@"Call on Hold"@#@
// @key: @#@"otherDeviceCall"@#@ @source: @#@"Ongoing calls on my other devices"@#@


/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Connessione...',
  logCall: 'Registra chiamata',
  editLog: 'Modifica registro',
  select: 'Seleziona un record corrispondente',
  OnHold: 'In attesa',
  Ringing: 'Chiamata in corso',
  CallConnected: 'Chiamata connessa',
  unknownUser: 'Utente sconosciuto',
  unknownNumber: 'Anonimo',
  unavailable: 'Non disponibile',
  viewDetails: 'Visualizza dettagli',
  addEntity: 'Crea nuovo',
  addLog: 'Registro',
  text: 'SMS',
  call: 'Chiama',
  missedCall: 'Perse',
  inboundCall: 'In entrata',
  outboundCall: 'In uscita'
};

// @key: @#@"logging"@#@ @source: @#@"Logging..."@#@
// @key: @#@"logCall"@#@ @source: @#@"Log Call"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"select"@#@ @source: @#@"Select a matching record"@#@
// @key: @#@"OnHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"Ringing"@#@ @source: @#@"Ringing"@#@
// @key: @#@"CallConnected"@#@ @source: @#@"Call Connected"@#@
// @key: @#@"unknownUser"@#@ @source: @#@"Unknown User"@#@
// @key: @#@"unknownNumber"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"unavailable"@#@ @source: @#@"Unavailable"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@
// @key: @#@"addEntity"@#@ @source: @#@"Create New"@#@
// @key: @#@"addLog"@#@ @source: @#@"Log"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"missedCall"@#@ @source: @#@"Missed"@#@
// @key: @#@"inboundCall"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outboundCall"@#@ @source: @#@"Outbound"@#@


/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'Nessuna chiamata attiva',
  noRecords: 'Nessun risultato trovato.'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"noRecords"@#@ @source: @#@"No results found."@#@


/***/ }),

/***/ 1561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Cronologia'
};

// @key: @#@"title"@#@ @source: @#@"History"@#@


/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Inoltra',
  cancel: 'Annulla',
  customNumber: 'Numero personalizzato'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"customNumber"@#@ @source: @#@"Custom number"@#@


/***/ }),

/***/ 1585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Annulla',
  reply: 'Rispondi',
  onMyWay: 'Sto arrivando',
  customMessage: 'Messaggio personalizzato',
  callMeBackIn: 'Richiamami tra',
  willCallYouBackIn: 'Ti richiamo tra',
  min: 'min.',
  hours: 'ore',
  days: 'giorni'
};

// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"onMyWay"@#@ @source: @#@"On my way"@#@
// @key: @#@"customMessage"@#@ @source: @#@"Custom Message"@#@
// @key: @#@"callMeBackIn"@#@ @source: @#@"Call me back in"@#@
// @key: @#@"willCallYouBackIn"@#@ @source: @#@"Will call you back in"@#@
// @key: @#@"min"@#@ @source: @#@"min."@#@
// @key: @#@"hours"@#@ @source: @#@"hours"@#@
// @key: @#@"days"@#@ @source: @#@"days"@#@


/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Inoltra',
  reply: 'Rispondi',
  ignore: 'Ignora',
  toVoicemail: 'Alla segreteria',
  answer: 'Rispondi',
  answerAndEnd: 'Rispondi e termina',
  answerAndHold: 'Rispondi e attesa'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@
// @key: @#@"toVoicemail"@#@ @source: @#@"To Voicemail"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"answerAndEnd"@#@ @source: @#@"Answer & End"@#@
// @key: @#@"answerAndHold"@#@ @source: @#@"Answer & Hold"@#@


/***/ }),

/***/ 1609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Sconosciuto',
  anonymous: 'Anonimo',
  activeCall: 'Chiamata attiva'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  hide: 'Nascondi',
  end: 'Fine',
  keypad: 'Tastierino'
};

// @key: @#@"hide"@#@ @source: @#@"Hide"@#@
// @key: @#@"end"@#@ @source: @#@"End"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@


/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unmute: 'Riattiva audio',
  mute: 'No audio',
  keypad: 'Tastierino',
  hold: 'Attesa',
  onHold: 'In attesa',
  park: 'Parcheggia',
  stopRecord: 'Interrompi',
  record: 'Registra',
  add: 'Aggiungi',
  transfer: 'Trasferisci',
  flip: 'Commuta'
};

// @key: @#@"unmute"@#@ @source: @#@"Unmute"@#@
// @key: @#@"mute"@#@ @source: @#@"Mute"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@
// @key: @#@"hold"@#@ @source: @#@"Hold"@#@
// @key: @#@"onHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"park"@#@ @source: @#@"Park"@#@
// @key: @#@"stopRecord"@#@ @source: @#@"Stop"@#@
// @key: @#@"record"@#@ @source: @#@"Record"@#@
// @key: @#@"add"@#@ @source: @#@"Add"@#@
// @key: @#@"transfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@


/***/ }),

/***/ 1645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Home: 'Casa',
  Mobile: 'Cellulare',
  Work: 'Lavoro'
};

// @key: @#@"Home"@#@ @source: @#@"Home"@#@
// @key: @#@"Mobile"@#@ @source: @#@"Mobile"@#@
// @key: @#@"Work"@#@ @source: @#@"Work"@#@


/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flipHeader: 'Commuta chiamata su...',
  flip: 'Commuta',
  complete: 'Completa commutazione'
};

// @key: @#@"flipHeader"@#@ @source: @#@"Flip Call to..."@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@
// @key: @#@"complete"@#@ @source: @#@"Complete Flip"@#@


/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'A:',
  transferTo: 'Trasferisci a',
  blindTransfer: 'Trasferisci',
  enterNameOrNumber: 'Inserisci numero'
};

// @key: @#@"to"@#@ @source: @#@"To:"@#@
// @key: @#@"transferTo"@#@ @source: @#@"Transfer to"@#@
// @key: @#@"blindTransfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number"@#@


/***/ }),

/***/ 1681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Sconosciuto',
  anonymous: 'Anonimo',
  activeCalls: 'Chiamate attive'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCalls"@#@ @source: @#@"Active Calls"@#@


/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Chiamata attiva'
};

// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'Nessun record trovato.'
};

// @key: @#@"noContacts"@#@ @source: @#@"No records found."@#@


/***/ }),

/***/ 1717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Cerca...'
};

// @key: @#@"searchPlaceholder"@#@ @source: @#@"Search..."@#@


/***/ }),

/***/ 1729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  all: 'Tutti',
  company: 'Azienda',
  personal: 'Personale'
};

// @key: @#@"all"@#@ @source: @#@"All"@#@
// @key: @#@"company"@#@ @source: @#@"Company"@#@
// @key: @#@"personal"@#@ @source: @#@"Personal"@#@


/***/ }),

/***/ 1741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extensionLabel$direc;

var _presenceStatus = __webpack_require__(923);

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = __webpack_require__(387);

var _dndStatus2 = _interopRequireDefault(_dndStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_extensionLabel$direc = {
  extensionLabel: 'Int.',
  directLabel: 'Diretto',
  emailLabel: 'E-mail',
  call: 'Chiamata',
  text: 'SMS'
}, (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.available, 'Disponibile'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy, 'Occupato'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.offline, 'Invisibile'), (0, _defineProperty3.default)(_extensionLabel$direc, _dndStatus2.default.doNotAcceptAnyCalls, 'Non disturbare'), _extensionLabel$direc);

// @key: @#@"extensionLabel"@#@ @source: @#@"Ext."@#@
// @key: @#@"directLabel"@#@ @source: @#@"Direct"@#@
// @key: @#@"emailLabel"@#@ @source: @#@"Email"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[presenceStatus.busy]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@


/***/ }),

/***/ 1753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Dettagli contatto'
};

// @key: @#@"contactDetails"@#@ @source: @#@"Contact Details"@#@


/***/ }),

/***/ 1765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Audio',
  dialButtonVolume: 'Volume pulsante di chiamata',
  ringtoneVolume: 'Volume suoneria',
  callVolume: 'Volume chiamata',
  muteCalls: 'Disattiva audio chiamate',
  outputDevice: 'Dispositivo di uscita',
  inputDevice: 'Dispositivo di ingresso',
  micPermission: 'Autorizzazione microfono'
};

// @key: @#@"title"@#@ @source: @#@"Audio"@#@
// @key: @#@"dialButtonVolume"@#@ @source: @#@"Dial Button Volume"@#@
// @key: @#@"ringtoneVolume"@#@ @source: @#@"Ringtone Volume"@#@
// @key: @#@"callVolume"@#@ @source: @#@"Call Volume"@#@
// @key: @#@"muteCalls"@#@ @source: @#@"Mute Calls"@#@
// @key: @#@"outputDevice"@#@ @source: @#@"Output Device"@#@
// @key: @#@"inputDevice"@#@ @source: @#@"Input Device"@#@
// @key: @#@"micPermission"@#@ @source: @#@"Microphone Permission"@#@


/***/ }),

/***/ 1777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  topic: 'Argomento',
  when: 'Quando',
  duration: 'Durata',
  recurringMeeting: 'Riunione ricorrente',
  recurringDescribe: 'Ricorda di verificare la ricorrenza o la ripetizione dell\'invito sul calendario ai tuoi partecipanti.',
  video: 'Video',
  videoDescribe: 'Quando si accede a una riunione',
  host: 'Moderatore',
  participants: 'Partecipante',
  audioOptions: 'Opzioni audio',
  voIPOnly: 'Solo VoIP',
  both: 'Entrambi',
  meetingOptions: 'Opzioni riunione',
  requirePassword: 'Richiedi password riunione',
  password: 'Password',
  enableJoinBeforeHost: 'Consenti ingresso prima del moderatore',
  telephonyOnly: 'Solo telefonia'
};

// @key: @#@"topic"@#@ @source: @#@"Topic"@#@
// @key: @#@"when"@#@ @source: @#@"When"@#@
// @key: @#@"duration"@#@ @source: @#@"Duration"@#@
// @key: @#@"recurringMeeting"@#@ @source: @#@"Recurring Meeting"@#@
// @key: @#@"recurringDescribe"@#@ @source: @#@"Please remember to check recurrence or repeat in your calendar invitation to your attendees."@#@
// @key: @#@"video"@#@ @source: @#@"Video"@#@
// @key: @#@"videoDescribe"@#@ @source: @#@"When joining a meeting"@#@
// @key: @#@"host"@#@ @source: @#@"Host"@#@
// @key: @#@"participants"@#@ @source: @#@"Participant"@#@
// @key: @#@"audioOptions"@#@ @source: @#@"Audio Options"@#@
// @key: @#@"voIPOnly"@#@ @source: @#@"VoIP Only"@#@
// @key: @#@"both"@#@ @source: @#@"Both"@#@
// @key: @#@"meetingOptions"@#@ @source: @#@"Meeting Options"@#@
// @key: @#@"requirePassword"@#@ @source: @#@"Require meeting password"@#@
// @key: @#@"password"@#@ @source: @#@"Password"@#@
// @key: @#@"enableJoinBeforeHost"@#@ @source: @#@"Enable join before host"@#@
// @key: @#@"telephonyOnly"@#@ @source: @#@"Telephony Only"@#@


/***/ }),

/***/ 1789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  start: 'Visita guidata rapida',
  skip: 'Salta',
  next: 'Avanti',
  finish: 'Termina'
};

// @key: @#@"start"@#@ @source: @#@"Take a Quick Tour"@#@
// @key: @#@"skip"@#@ @source: @#@"Skip"@#@
// @key: @#@"next"@#@ @source: @#@"Next"@#@
// @key: @#@"finish"@#@ @source: @#@"Finish"@#@


/***/ }),

/***/ 1801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  google: 'Google'
};

// @key: @#@"google"@#@ @source: @#@"Google"@#@

/***/ }),

/***/ 1813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  schedule: 'Programmazione',
  prompt: 'Autorizza RingCentral ad accedere alle informazioni del tuo account.'
};

// @key: @#@"schedule"@#@ @source: @#@"Schedule"@#@
// @key: @#@"prompt"@#@ @source: @#@"Please authorize RingCentral to access your account information."@#@


/***/ }),

/***/ 1825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invita con Google Calendar'
};

// @key: @#@"inviteWithCalendar"@#@ @source: @#@"Invite with Google Calendar"@#@

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(115);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 1837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invita con Google Calendar'
};

// @key: @#@"inviteWithCalendar"@#@ @source: @#@"Invite with Google Calendar"@#@

/***/ }),

/***/ 1849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  authorize: 'Autorizza',
  prompt: 'Autorizza {brand} ad accedere alle informazioni del tuo account Google.'
};

// @key: @#@"authorize"@#@ @source: @#@"Authorize"@#@
// @key: @#@"prompt"@#@ @source: @#@"Please authorize {brand} to access your Google account information."@#@

/***/ }),

/***/ 1861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _authorizationError$a;

var _authorizationError = __webpack_require__(931);

var _authorizationError2 = _interopRequireDefault(_authorizationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_authorizationError$a = {}, (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.accountLoggedOut, 'Abbiamo notato che ti sei disconnesso dal tuo account Google {accountEmail}. Per continuare, {clickHereLink} per accedere al tuo account Google.'), (0, _defineProperty3.default)(_authorizationError$a, 'clickHere', 'fai clic qui'), (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.notAuthorized, 'Abbiamo notato che non hai autorizzato {brand} per Google ad accedere al tuo account Google. Per autorizzare, {clickHereLink}.'), _authorizationError$a);

// @key: @#@"[authorizationError.accountLoggedOut]"@#@ @source: @#@"We noticed you have logged out your Google account {accountEmail}. To continue please {clickHereLink} to login your Google account."@#@
// @key: @#@"clickHere"@#@ @source: @#@"click here"@#@
// @key: @#@"[authorizationError.notAuthorized]"@#@ @source: @#@"We noticed you haven't authorized {brand} for Google to access your Google account. Please {clickHereLink} to authorize."@#@

/***/ }),

/***/ 1873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nessun record corrispondente.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@


/***/ }),

/***/ 1885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nessun record corrispondente.',
  inBound: 'In entrata',
  outBound: 'In uscita',
  missed: 'Chiamata persa'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@
// @key: @#@"inBound"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outBound"@#@ @source: @#@"Outbound"@#@
// @key: @#@"missed"@#@ @source: @#@"Missed Call"@#@


/***/ }),

/***/ 1897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  recentActivities: 'Attività recenti',
  text: 'SMS',
  fax: 'Fax',
  voicemail: 'Messaggio vocale',
  call: 'Chiama',
  gmail: 'Gmail'
};

// @key: @#@"recentActivities"@#@ @source: @#@"Recent Activities"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"fax"@#@ @source: @#@"Fax"@#@
// @key: @#@"voicemail"@#@ @source: @#@"Voicemail"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"gmail"@#@ @source: @#@"Gmail"@#@

/***/ }),

/***/ 1909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nessun record corrispondente.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@

/***/ }),

/***/ 1921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dialpadLabel: 'Tastiera del telefono',
  callsLabel: 'Chiamate',
  historyLabel: 'Cronologia',
  messagesLabel: 'Messaggi',
  moreMenuLabel: 'Menu Altro',
  contactsLabel: 'Contatti',
  meetingLabel: 'Programma riunione',
  conferenceLabel: 'Programma conferenza',
  hangoutsLabel: 'Avvia Hangouts',
  hangoutsTitle: 'Avvia Hangouts con il servizio di conferenza',
  settingsLabel: 'Impostazioni'
};

// @key: @#@"dialpadLabel"@#@ @source: @#@"Dial Pad"@#@
// @key: @#@"callsLabel"@#@ @source: @#@"Calls"@#@
// @key: @#@"historyLabel"@#@ @source: @#@"History"@#@
// @key: @#@"messagesLabel"@#@ @source: @#@"Messages"@#@
// @key: @#@"moreMenuLabel"@#@ @source: @#@"More Menu"@#@
// @key: @#@"contactsLabel"@#@ @source: @#@"Contacts"@#@
// @key: @#@"meetingLabel"@#@ @source: @#@"Schedule Meeting"@#@
// @key: @#@"conferenceLabel"@#@ @source: @#@"Schedule Conference"@#@
// @key: @#@"hangoutsLabel"@#@ @source: @#@"Start Hangouts"@#@
// @key: @#@"hangoutsTitle"@#@ @source: @#@"Start Hangouts with Conferencing"@#@
// @key: @#@"settingsLabel"@#@ @source: @#@"Settings"@#@

/***/ }),

/***/ 1933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Modalità offline'
};

// @key: @#@"offlineMode"@#@ @source: @#@"Offline Mode"@#@


/***/ }),

/***/ 1944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  webphoneUnavailable: 'Telefono web non disponibile'
};

// @key: @#@"webphoneUnavailable"@#@ @source: @#@"Web Phone Unavailable"@#@


/***/ }),

/***/ 1956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'Contratto di licenza dell\'utente finale',
  serviceTerms: 'Termini di servizio'
};

// @key: @#@"eula"@#@ @source: @#@"End User License Agreement"@#@
// @key: @#@"serviceTerms"@#@ @source: @#@"Service Terms"@#@


/***/ }),

/***/ 1968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _presenceStatus$avail;

var _presenceStatus = __webpack_require__(923);

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = __webpack_require__(387);

var _dndStatus2 = _interopRequireDefault(_dndStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Disponibile'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy, 'Occupato'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisibile'), (0, _defineProperty3.default)(_presenceStatus$avail, _dndStatus2.default.doNotAcceptAnyCalls, 'Non disturbare'), _presenceStatus$avail);

// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.busy]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@


/***/ }),

/***/ 1980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Stato',
  acceptQueueCalls: 'Accetta chiamate in coda'
};

// @key: @#@"status"@#@ @source: @#@"Status"@#@
// @key: @#@"acceptQueueCalls"@#@ @source: @#@"Accept call queue calls"@#@


/***/ }),

/***/ 1992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'Inglese',
  ja: 'Giapponese',
  fr: 'Francese',
  de: 'Deutsch',
  es: 'Spagnolo',
  it: 'Italiano',
  pt: 'Portoghese'
};

// @key: @#@"en"@#@ @source: @#@"English"@#@
// @key: @#@"ja"@#@ @source: @#@"Japanese"@#@
// @key: @#@"fr"@#@ @source: @#@"French"@#@
// @key: @#@"de"@#@ @source: @#@"Deutsch"@#@
// @key: @#@"es"@#@ @source: @#@"Spanish"@#@
// @key: @#@"it"@#@ @source: @#@"Italian"@#@
// @key: @#@"pt"@#@ @source: @#@"Portuguese"@#@


/***/ }),

/***/ 2004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Regione',
  calling: 'Chiamata',
  logout: 'Esci',
  version: 'Versione',
  settings: 'Impostazioni',
  clickToDial: 'Fai clic per comporre',
  autoCreateLog: 'Crea automaticamente registro chiamate',
  clickToSMS: 'Fai clic per inviare un SMS',
  clickToDialSMS: 'Fai clic per comporre/inviare un SMS',
  autoCreateSMSLog: 'Crea automaticamente registro SMS',
  autoLogCalls: 'Registra automaticamente le chiamate',
  autoLogSMS: 'Registra automaticamente gli SMS',
  audio: 'Audio',
  language: 'Lingua',
  feedback: 'Feedback',
  userGuide: 'Novità'
};

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"calling"@#@ @source: @#@"Calling"@#@
// @key: @#@"logout"@#@ @source: @#@"Logout"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@
// @key: @#@"settings"@#@ @source: @#@"Settings"@#@
// @key: @#@"clickToDial"@#@ @source: @#@"Click to Dial"@#@
// @key: @#@"autoCreateLog"@#@ @source: @#@"Auto-create Call Log"@#@
// @key: @#@"autoCreateSMSLog"@#@ @source: @#@"Auto-create SMS Log"@#@
// @key: @#@"autoLogCalls"@#@ @source: @#@"Auto log calls"@#@
// @key: @#@"autoLogSMS"@#@ @source: @#@"Auto log SMS"@#@
// @key: @#@"clickToSMS"@#@ @source: @#@"Click to SMS"@#@
// @key: @#@"clickToDialSMS"@#@ @source: @#@"Click to Dial/SMS"@#@
// @key: @#@"audio"@#@ @source: @#@"Audio"@#@
// @key: @#@"language"@#@ @source: @#@"Language"@#@
// @key: @#@"feedback"@#@ @source: @#@"Feedback"@#@
// @key: @#@"userGuide"@#@ @source: @#@"What's New"@#@


/***/ }),

/***/ 2016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Autorizza',
  authorized: 'Annulla autorizzazione',
  unauthorizedTitle: 'Account autorizzato',
  tooltip: 'Hai autorizzato RingCentral per Google ad accedere al tuo account '
};

// @key: @#@"unauthorized"@#@ @source: @#@"Authorize"@#@
// @key: @#@"authorized"@#@ @source: @#@"Unauthorize"@#@
// @key: @#@"unauthorizedTitle"@#@ @source: @#@"Authorized Account"@#@
// @key: @#@"tooltip"@#@ @source: @#@"You have authorized RingCentral for Google to access your account "@#@

/***/ }),

/***/ 2028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addMeeting: 'Aggiungi riunione',
  addMeetingTitle: 'Aggiungi riunione {brand}',
  meetingSettingsTitle: '{brand} Meetings - Impostazioni',
  when: 'Quando',
  recurringMeeting: 'Riunione ricorrente',
  recurringMeetingPrompt: 'Ricorda di verificare la ricorrenza o la ripetizione dell\'invito sul calendario ai tuoi partecipanti.',
  video: 'Video (quando si accede a una riunione)',
  host: 'Moderatore:',
  on: 'sì',
  off: 'no',
  participant: 'Partecipante:',
  audioOptions: 'Opzioni audio',
  telephone: 'Solo telefonia',
  voip: 'Solo VoIP',
  both: 'Entrambi',
  meetingOptions: 'Opzioni riunione',
  requirePassword: 'Richiedi password riunione',
  joinBeforeHost: 'Consenti ingresso prima del moderatore',
  doNotShowAgain: 'Salva e non mostrare più',
  schedule: 'Programmazione'
};

// @key: @#@"addMeeting"@#@ @source: @#@"Add Meeting"@#@
// @key: @#@"addMeetingTitle"@#@ @source: @#@"Add {brand} Meeting"@#@
// @key: @#@"meetingSettingsTitle"@#@ @source: @#@"{brand} Meetings - Settings"@#@
// @key: @#@"when"@#@ @source: @#@"When"@#@
// @key: @#@"recurringMeeting"@#@ @source: @#@"Recurring Meeting"@#@
// @key: @#@"recurringMeetingPrompt"@#@ @source: @#@"Please remember to check recurrence or repeat in your calendar invitation to your attendees."@#@
// @key: @#@"video"@#@ @source: @#@"Video(when joining a meeting)"@#@
// @key: @#@"host"@#@ @source: @#@"Host:"@#@
// @key: @#@"on"@#@ @source: @#@"on"@#@
// @key: @#@"off"@#@ @source: @#@"off"@#@
// @key: @#@"participant"@#@ @source: @#@"Participant:"@#@
// @key: @#@"audioOptions"@#@ @source: @#@"Audio Options"@#@
// @key: @#@"telephone"@#@ @source: @#@"Telephony Only"@#@
// @key: @#@"voip"@#@ @source: @#@"VoIP Only"@#@
// @key: @#@"both"@#@ @source: @#@"Both"@#@
// @key: @#@"meetingOptions"@#@ @source: @#@"Meeting Options"@#@
// @key: @#@"requirePassword"@#@ @source: @#@"Require meeting password"@#@
// @key: @#@"joinBeforeHost"@#@ @source: @#@"Enable join before host"@#@
// @key: @#@"doNotShowAgain"@#@ @source: @#@"Save and do not show again"@#@
// @key: @#@"schedule"@#@ @source: @#@"Schedule"@#@

/***/ }),

/***/ 2040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _incomingCall$answer$;

var _messageTypes = __webpack_require__(359);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_incomingCall$answer$ = {
  incomingCall: 'Chiamata in entrata da:',
  answer: 'Rispondi',
  ignore: 'Ignora',
  inboundMessage: 'Nuovo {messageType} da {from}'
}, (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.fax, 'fax'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.voiceMail, 'messaggio vocale'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.text, 'messaggio di testo'), _incomingCall$answer$);

// @key: @#@"incomingCall"@#@ @source: @#@"Incoming Call From:"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@
// @key: @#@"inboundMessage"@#@ @source: @#@"New {messageType} from {from}"@#@
// @key: @#@"anonymousCaller"@#@ @source: @#@"anonymous person"@#@
// @key: @#@"[messageTypes.fax]"@#@ @source: @#@"fax"@#@
// @key: @#@"[messageTypes.voiceMail]"@#@ @source: @#@"voicemail"@#@
// @key: @#@"[messageTypes.text]"@#@ @source: @#@"text message"@#@

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(132);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 3218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['business', 'extension', 'home', 'mobile', 'phone', 'unknown', 'company', 'direct']);


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HashMap = __webpack_require__(130);

var _HashMap2 = _interopRequireDefault(_HashMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _HashMap2.default({
  all: 'All',
  fax: 'Fax',
  sms: 'SMS',
  voiceMail: 'VoiceMail',
  pager: 'Pager',
  text: 'Text'
});


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['softphone', // desktop
'myphone', // ringout branding rc..
'otherphone', // ringout
'customphone', // ringout
'browser'], 'callingOptions');


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HashMap = __webpack_require__(130);

var _HashMap2 = _interopRequireDefault(_HashMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _HashMap2.default({
  takeAllCalls: 'TakeAllCalls',
  doNotAcceptAnyCalls: 'DoNotAcceptAnyCalls',
  doNotAcceptDepartmentCalls: 'DoNotAcceptDepartmentCalls',
  takeDepartmentCallsOnly: 'TakeDepartmentCallsOnly'
});


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['noToNumber', 'noAreaCode', 'specialNumber', 'connectFailed', 'internalError', 'notAnExtension', 'networkError', 'noRingoutEnable'], 'callErrors');


/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['sendSuccess', 'sendError', 'numberValidateError', 'textEmpty', 'textTooLong', 'noPermission', 'senderEmpty', 'noToNumber', 'recipientsEmpty', 'recipientNumberInvalids', 'senderNumberInvalid', 'noAreaCode', 'specialNumber', 'internalError', 'notAnExtension', 'networkError', 'notSmsToExtension', 'internationalSMSNotSupported', 'noInternalSMSPermission', 'sending'], 'message-sender-msg');


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['invalidMeetingInfo', 'emptyTopic', 'noPassword', 'durationIncorrect', 'scheduledSuccess'], 'meetingStatus');


/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(175);
__webpack_require__(97);
__webpack_require__(113);
__webpack_require__(805);
__webpack_require__(806);
module.exports = __webpack_require__(25).Map;

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(363);

// 23.1 Map Objects
module.exports = __webpack_require__(364)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(42);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(365)('Map')});

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
__webpack_require__(808);
module.exports = __webpack_require__(25).Array.from;

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(65)
  , $export        = __webpack_require__(42)
  , toObject       = __webpack_require__(90)
  , call           = __webpack_require__(360)
  , isArrayIter    = __webpack_require__(361)
  , toLength       = __webpack_require__(116)
  , createProperty = __webpack_require__(809)
  , getIterFn      = __webpack_require__(221);

$export($export.S + $export.F * !__webpack_require__(362)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(49)
  , createDesc      = __webpack_require__(98);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(811), __esModule: true };

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(812);
module.exports = __webpack_require__(25).Object.freeze;

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(53)
  , meta     = __webpack_require__(176).onFreeze;

__webpack_require__(184)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Annulla',
  confirm: 'Conferma'
};

// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"confirm"@#@ @source: @#@"Confirm"@#@


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HashMap = __webpack_require__(130);

var _HashMap2 = _interopRequireDefault(_HashMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _HashMap2.default({
  offline: 'Offline',
  busy: 'Busy',
  available: 'Available'
});


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['emptyPassword', 'emptyUsername', 'sessionExpired', 'beforeLogoutError', 'loginError', 'logoutError', 'accessDenied', 'internalError'], 'authMessages');


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['saveSuccess', 'saveSuccessWithSoftphone', 'permissionChanged', 'phoneNumberChanged', 'webphonePermissionRemoved', 'emergencyCallingNotAvailable'], 'callingSettingsMessages');


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['disconnected'], 'connectivityMonitorMessage');


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['saveSuccess', 'dialingPlansChanged', 'areaCodeInvalid'], 'regionSettingsMessages');


/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['connectFailed', 'connected', 'browserNotSupported', 'webphoneCountOverLimit', 'webphoneForbidden', 'notOutboundCallWithoutDL', 'notWebphonePermission', 'getSipProvisionError', 'toVoiceMailError', 'checkDLError', 'forwardError', 'muteError', 'holdError', 'flipError', 'recordError', 'recordDisabled', 'transferError', 'requestTimeout', 'serverTimeout', 'internalServerError', 'sipProvisionError', 'unknownError'], 'webphone');


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['invalidTier'], 'permissionsMessages');


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['deleteFailed', 'readFailed', 'unreadFailed'], 'messageStore');


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['accountLoggedOut', 'notAuthorized'], 'authorizationError');

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['requireAditionalNumbers'], 'conference-msg');


/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['userMediaPermission'], 'audioSettings');


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(804), __esModule: true };

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVDYWxlbmRhci9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1dGhBbGVydC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NBbGVydC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VTZW5kZXJBbGVydC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVN0b3JlQWxlcnQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BdWRpb1NldHRpbmdzQWxlcnQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25mZXJlbmNlQWxlcnQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vbGliL0VudW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9IYXNoTWFwL2luZGV4LmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL2l0LUlULmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZUNvbW1hbmRzL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRW50aXR5TW9kYWwvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3Rpb25NZW51TGlzdC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1ZvaWNlbWFpbFBsYXllci9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZXNQYW5lbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxJdGVtL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbHNQYW5lbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxJdGVtL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbExpc3QvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb3J3YXJkRm9ybS9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbmNvbWluZ0NhbGxQYWQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9JbmNvbWluZ0NhbGxQYWdlL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbERpYWxQYWQvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmFkaW9CdG5Hcm91cC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQmFkZ2VDb250YWluZXIvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TGlzdC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RzVmlldy9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGV0YWlscy9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3REZXRhaWxzVmlldy9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lZXRpbmdQYW5lbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1VzZXJHdWlkZS9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nU2NoZWR1bGVCdXR0b24vaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nSW52aXRlQnV0dG9uL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6YXRpb25BbGVydC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQmFkZ2UvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdWxhL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vaXQtSVQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9pdC1JVC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy9lbnVtcy9waG9uZVR5cGVzLmpzIiwid2VicGFjazovLy9lbnVtcy9tZXNzYWdlVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdPcHRpb25zLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVldGluZy9tZWV0aW5nU3RhdHVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Nb2RhbC9pMThuL2l0LUlULmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0F1dGgvYXV0aE1lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9NZXNzYWdlU3RvcmUvbWVzc2FnZVN0b3JlRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9BdWRpb1NldHRpbmdzL2F1ZGlvU2V0dGluZ3NFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanMiXSwibmFtZXMiOlsiYzJkVGl0bGUiLCJzbXNUaXRsZSIsInNpZ25JbkVycm9yTXNnIiwiaW52aXRlTWVldGluZ0NvbnRlbnQiLCJwYXNzd29yZCIsImludGVybmFsRXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJzZXNzaW9uRXhwaXJlZCIsIm5vVG9OdW1iZXIiLCJub0FyZWFDb2RlIiwic3BlY2lhbE51bWJlciIsImNvbm5lY3RGYWlsZWQiLCJub3RBbkV4dGVuc2lvbiIsIm5ldHdvcmtFcnJvciIsIm5vUmluZ291dEVuYWJsZSIsInNhdmVTdWNjZXNzIiwic2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lIiwiZmlyc3RMb2dpbiIsImZpcnN0TG9naW5PdGhlciIsInBlcm1pc3Npb25DaGFuZ2VkIiwicGhvbmVOdW1iZXJDaGFuZ2VkIiwid2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZCIsImVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUiLCJyZWdpb24iLCJkaWFsaW5nUGxhbnNDaGFuZ2VkIiwiYXJlYUNvZGVJbnZhbGlkIiwic2VuZFN1Y2Nlc3MiLCJzZW5kRXJyb3IiLCJudW1iZXJWYWxpZGF0ZUVycm9yIiwidGV4dEVtcHR5Iiwibm9QZXJtaXNzaW9uIiwic2VuZGVyRW1wdHkiLCJyZWNpcGllbnRzRW1wdHkiLCJ0ZXh0VG9vTG9uZyIsInNlbmRlck51bWJlckludmFsaWQiLCJub3RTbXNUb0V4dGVuc2lvbiIsImludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQiLCJyZWNpcGllbnROdW1iZXJJbnZhbGlkcyIsIm5vSW50ZXJuYWxTTVNQZXJtaXNzaW9uIiwic2VuZGluZyIsInJhdGVFeGNlZWRlZCIsImRpc2Nvbm5lY3RlZCIsImJyb3dzZXJOb3RTdXBwb3J0ZWQiLCJ3ZWJwaG9uZUNvdW50T3ZlckxpbWl0Iiwibm90T3V0Ym91bmRDYWxsV2l0aG91dERMIiwiZ2V0U2lwUHJvdmlzaW9uRXJyb3IiLCJjb25uZWN0ZWQiLCJ0b1ZvaWNlTWFpbEVycm9yIiwibXV0ZUVycm9yIiwiaG9sZEVycm9yIiwiZmxpcEVycm9yIiwicmVjb3JkRXJyb3IiLCJyZWNvcmREaXNhYmxlZCIsInRyYW5zZmVyRXJyb3IiLCJkZWxldGVGYWlsZWQiLCJlbXB0eVRvcGljIiwibm9QYXNzd29yZCIsInNjaGVkdWxlZFN1Y2Nlc3MiLCJ1c2VyTWVkaWFQZXJtaXNzaW9uIiwiaW52YWxpZFRpZXIiLCJyZXF1aXJlQWRpdGlvbmFsTnVtYmVycyIsImxvZ2luQnV0dG9uIiwidmVyc2lvbiIsInRpdGxlIiwic29mdHBob25lIiwibXlwaG9uZSIsIm90aGVycGhvbmUiLCJjdXN0b21waG9uZSIsImJyb3dzZXIiLCJwcmVmaXhFbnVtIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJFbnVtIiwidmFsdWVzIiwicHJlZml4IiwiZGVmaW5pdGlvbiIsImZvckVhY2giLCJ2YWx1ZSIsInByZWZpeENhY2hlIiwiZW51bU1hcCIsImJhc2UiLCJoYXMiLCJzZXQiLCJjYWNoZSIsImdldCIsInR5cGUiLCJkZWZhdWx0R2V0RnVuY3Rpb24iLCJzRGVmaW5pdGlvbiIsInNWYWx1ZU1hcCIsIml0ZW0iLCJIYXNoTWFwIiwia2V5IiwiZW51bWVyYWJsZSIsIm1hcCIsImdldEtleSIsImdldFZhbHVlIiwic2F2ZSIsIk5BT25seU1lc3NhZ2UiLCJNdWx0aVdpdGhOQU1lc3NhZ2UiLCJNdWx0aVdpdGhvdXROQU1lc3NhZ2UiLCJjb3VudHJ5IiwiYXJlYUNvZGUiLCJhcmVhQ29kZVBsYWNlaG9sZGVyIiwiQVIiLCJBVCIsIkJIIiwiQlIiLCJCRyIsIkNBIiwiQ0wiLCJDTiIsIkhSIiwiQ1kiLCJDWiIsIkRLIiwiRE8iLCJFRSIsIkZJIiwiRlIiLCJERSIsIkhLIiwiSFUiLCJJRSIsIklMIiwiSU4iLCJJVCIsIkpQIiwiTFYiLCJMVCIsIkxVIiwiTVkiLCJNWCIsIk5MIiwiTk8iLCJQQSIsIlBIIiwiUEwiLCJQVCIsIlJPIiwiU0siLCJTSSIsIkVTIiwiU0UiLCJDSCIsIlRSIiwiR0IiLCJBVSIsIkdFIiwiSUQiLCJLRSIsIk5HIiwiUEsiLCJaQSIsIktSIiwiU0ciLCJUVyIsIlVBIiwiVVMiLCJWTiIsIkJFIiwiQkoiLCJTViIsIkdIIiwiR1IiLCJHTiIsIk5aIiwiUEUiLCJQUiIsImJ1c2luZXNzIiwiZXh0ZW5zaW9uIiwiaG9tZSIsIm1vYmlsZSIsInBob25lIiwidW5rbm93biIsImNvbXBhbnkiLCJkaXJlY3QiLCJhY2NvdW50IiwiY29udGFjdCIsImxlYWQiLCJvcHBvcnR1bml0eSIsInN5c3RlbVVzZXIiLCJyY0NvbnRhY3QiLCJ0byIsImVudGVyTmFtZU9yTnVtYmVyIiwiRGlyZWN0TnVtYmVyIiwiTWFpbkNvbXBhbnlOdW1iZXIiLCJDb21wYW55TnVtYmVyIiwiQ29tcGFueUZheE51bWJlciIsIkJsb2NrZWQiLCJmcm9tIiwiQWRkaXRpb25hbENvbXBhbnlOdW1iZXIiLCJGb3J3YXJkZWRDb21wYW55TnVtYmVyIiwidHlwZU1lc3NhZ2UiLCJzZW5kIiwibG9nZ2luZyIsImxvZ0NhbGwiLCJlZGl0TG9nIiwic2VsZWN0IiwiT25Ib2xkIiwiUmluZ2luZyIsIkNhbGxDb25uZWN0ZWQiLCJ1bmtub3duVXNlciIsInVua25vd25OdW1iZXIiLCJ1bmF2YWlsYWJsZSIsInZpZXdEZXRhaWxzIiwibmV3Q29uZmVyZW5jZSIsImRpYWxJbk51bWJlciIsImhvc3QiLCJwYXJ0aWNpcGFudHMiLCJpbnRlcm5hdGlvbmFsUGFydGljaXBhbnRzIiwiaW50ZXJuYXRpb25hbE51bWJlcnNIZWFkZXIiLCJzZWFyY2giLCJpbnZpdGVXaXRoVGV4dCIsImludml0ZVRleHQiLCJob3N0QWNjZXNzIiwicGFydGljaXBhbnRzQWNjZXNzIiwiYWRkaW5hbERpYWxJbk51bWJlcnMiLCJzZWxlY3ROdW1iZXJzIiwiZW5hYmxlSm9pbkJlZm9yZUhvc3QiLCJjb25mZXJlbmNlQ29tbWFuZHMiLCJpbnZpdGVXaXRoR0NhbGVuZGFyIiwiam9pbkFzSG9zdCIsImludGVybmF0aW9uYWxOdW1iZXIiLCJzdGFyU2hhcnAyVGl0bGUiLCJzdGFyU2hhcnAyQm9keSIsInN0YXJTaGFycDNUaXRsZSIsInN0YXJTaGFycDNCb2R5Iiwic3RhclNoYXJwNFRpdGxlIiwic3RhclNoYXJwNEJvZHkiLCJzdGFyU2hhcnA1VGl0bGUiLCJzdGFyU2hhcnA1Qm9keSIsInN0YXJTaGFycDZUaXRsZSIsInN0YXJTaGFycDZCb2R5Iiwic3RhclNoYXJwN1RpdGxlIiwic3RhclNoYXJwN0JvZHkiLCJzdGFyU2hhcnA4VGl0bGUiLCJzdGFyU2hhcnA4Qm9keSIsInN0YXI5VGl0bGUiLCJzdGFyOUJvZHkiLCJjaG9vc2VFbnRpdHkiLCJjcmVhdGUiLCJzdXJlVG9EZWxldGVWb2ljZU1haWwiLCJkb05vdEFza0FnYWluIiwiZG93bmxvYWQiLCJwbGF5IiwicGF1c2UiLCJhZGRMb2ciLCJhZGRFbnRpdHkiLCJjYWxsIiwiY29udmVyc2F0aW9uIiwiZ3JvdXBDb252ZXJzYXRpb24iLCJ0ZXh0Iiwidm9pY2VNZXNzYWdlIiwidm9pY2VNYWlsIiwibm9NZXNzYWdlcyIsIm5vU2VhcmNoUmVzdWx0cyIsImNvbXBvc2VUZXh0IiwiYWxsIiwiZmF4IiwiYWRkQ29udGFjdCIsIm1pc3NlZENhbGwiLCJpbmJvdW5kQ2FsbCIsIm91dGJvdW5kQ2FsbCIsImhhbmd1cCIsImFjY2VwdCIsInRvVm9pY2VtYWlsIiwibm9BY3RpdmVDYWxscyIsImN1cnJlbnRDYWxsIiwicmluZ0NhbGwiLCJvbkhvbGRDYWxsIiwib3RoZXJEZXZpY2VDYWxsIiwibm9SZWNvcmRzIiwiZm9yd2FyZCIsImNhbmNlbCIsImN1c3RvbU51bWJlciIsInJlcGx5Iiwib25NeVdheSIsImN1c3RvbU1lc3NhZ2UiLCJjYWxsTWVCYWNrSW4iLCJ3aWxsQ2FsbFlvdUJhY2tJbiIsIm1pbiIsImhvdXJzIiwiZGF5cyIsImlnbm9yZSIsImFuc3dlciIsImFuc3dlckFuZEVuZCIsImFuc3dlckFuZEhvbGQiLCJhbm9ueW1vdXMiLCJhY3RpdmVDYWxsIiwiaGlkZSIsImVuZCIsImtleXBhZCIsInVubXV0ZSIsIm11dGUiLCJob2xkIiwib25Ib2xkIiwicGFyayIsInN0b3BSZWNvcmQiLCJyZWNvcmQiLCJhZGQiLCJ0cmFuc2ZlciIsImZsaXAiLCJIb21lIiwiTW9iaWxlIiwiV29yayIsImZsaXBIZWFkZXIiLCJjb21wbGV0ZSIsInRyYW5zZmVyVG8iLCJibGluZFRyYW5zZmVyIiwiYWN0aXZlQ2FsbHMiLCJub0NvbnRhY3RzIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJwZXJzb25hbCIsImV4dGVuc2lvbkxhYmVsIiwiZGlyZWN0TGFiZWwiLCJlbWFpbExhYmVsIiwiYXZhaWxhYmxlIiwiYnVzeSIsIm9mZmxpbmUiLCJkb05vdEFjY2VwdEFueUNhbGxzIiwiY29udGFjdERldGFpbHMiLCJkaWFsQnV0dG9uVm9sdW1lIiwicmluZ3RvbmVWb2x1bWUiLCJjYWxsVm9sdW1lIiwibXV0ZUNhbGxzIiwib3V0cHV0RGV2aWNlIiwiaW5wdXREZXZpY2UiLCJtaWNQZXJtaXNzaW9uIiwidG9waWMiLCJ3aGVuIiwiZHVyYXRpb24iLCJyZWN1cnJpbmdNZWV0aW5nIiwicmVjdXJyaW5nRGVzY3JpYmUiLCJ2aWRlbyIsInZpZGVvRGVzY3JpYmUiLCJhdWRpb09wdGlvbnMiLCJ2b0lQT25seSIsImJvdGgiLCJtZWV0aW5nT3B0aW9ucyIsInJlcXVpcmVQYXNzd29yZCIsInRlbGVwaG9ueU9ubHkiLCJzdGFydCIsInNraXAiLCJuZXh0IiwiZmluaXNoIiwiZ29vZ2xlIiwic2NoZWR1bGUiLCJwcm9tcHQiLCJpbnZpdGVXaXRoQ2FsZW5kYXIiLCJhdXRob3JpemUiLCJhY2NvdW50TG9nZ2VkT3V0Iiwibm90QXV0aG9yaXplZCIsImluQm91bmQiLCJvdXRCb3VuZCIsIm1pc3NlZCIsInJlY2VudEFjdGl2aXRpZXMiLCJ2b2ljZW1haWwiLCJnbWFpbCIsImRpYWxwYWRMYWJlbCIsImNhbGxzTGFiZWwiLCJoaXN0b3J5TGFiZWwiLCJtZXNzYWdlc0xhYmVsIiwibW9yZU1lbnVMYWJlbCIsImNvbnRhY3RzTGFiZWwiLCJtZWV0aW5nTGFiZWwiLCJjb25mZXJlbmNlTGFiZWwiLCJoYW5nb3V0c0xhYmVsIiwiaGFuZ291dHNUaXRsZSIsInNldHRpbmdzTGFiZWwiLCJvZmZsaW5lTW9kZSIsIndlYnBob25lVW5hdmFpbGFibGUiLCJldWxhIiwic2VydmljZVRlcm1zIiwic3RhdHVzIiwiYWNjZXB0UXVldWVDYWxscyIsImVuIiwiamEiLCJmciIsImRlIiwiZXMiLCJpdCIsInB0IiwiY2FsbGluZyIsImxvZ291dCIsInNldHRpbmdzIiwiY2xpY2tUb0RpYWwiLCJhdXRvQ3JlYXRlTG9nIiwiY2xpY2tUb1NNUyIsImNsaWNrVG9EaWFsU01TIiwiYXV0b0NyZWF0ZVNNU0xvZyIsImF1dG9Mb2dDYWxscyIsImF1dG9Mb2dTTVMiLCJhdWRpbyIsImxhbmd1YWdlIiwiZmVlZGJhY2siLCJ1c2VyR3VpZGUiLCJ1bmF1dGhvcml6ZWQiLCJhdXRob3JpemVkIiwidW5hdXRob3JpemVkVGl0bGUiLCJ0b29sdGlwIiwiYWRkTWVldGluZyIsImFkZE1lZXRpbmdUaXRsZSIsIm1lZXRpbmdTZXR0aW5nc1RpdGxlIiwicmVjdXJyaW5nTWVldGluZ1Byb21wdCIsIm9uIiwib2ZmIiwicGFydGljaXBhbnQiLCJ0ZWxlcGhvbmUiLCJ2b2lwIiwiam9pbkJlZm9yZUhvc3QiLCJkb05vdFNob3dBZ2FpbiIsImluY29taW5nQ2FsbCIsImluYm91bmRNZXNzYWdlIiwic21zIiwicGFnZXIiLCJ0YWtlQWxsQ2FsbHMiLCJkb05vdEFjY2VwdERlcGFydG1lbnRDYWxscyIsInRha2VEZXBhcnRtZW50Q2FsbHNPbmx5IiwiY29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixTQURzQixFQUV0QixTQUZzQixFQUd0QixNQUhzQixFQUl0QixhQUpzQixFQUt0QixZQUxzQixFQU10QixXQU5zQixDQUFULEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0ZBO0FBQ2JBLFlBQVUsb0JBREc7QUFFYkMsWUFBVTtBQUZHLEM7O0FBS2Y7QUFDQSwyRDs7Ozs7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QXlCYkMsTUFBSSxVQXpCUztBQTBCYkMsTUFBSSxVQTFCUztBQTJCYkMsTUFBSSxVQTNCUztBQTRCYkMsTUFBSSxhQTVCUztBQTZCYkMsTUFBSSxTQTdCUztBQThCYkMsTUFBSSxTQTlCUztBQStCYkMsTUFBSSxhQS9CUztBQWdDYkMsTUFBSSxVQWhDUztBQWlDYkMsTUFBSSxRQWpDUztBQWtDYkMsTUFBSSxXQWxDUztBQW1DYkMsTUFBSSxTQW5DUztBQW9DYkMsTUFBSSxZQXBDUztBQXFDYkMsTUFBSSxTQXJDUztBQXNDYkMsTUFBSSxZQXRDUztBQXVDYkMsTUFBSSxVQXZDUztBQXdDYkMsTUFBSSxRQXhDUztBQXlDYkMsTUFBSSxRQXpDUztBQTBDYkMsTUFBSSxVQTFDUztBQTJDYkMsTUFBSSxTQTNDUztBQTRDYkMsTUFBSSxhQTVDUztBQTZDYkMsTUFBSSxXQTdDUztBQThDYkMsTUFBSSxTQTlDUztBQStDYkMsTUFBSSxXQS9DUztBQWdEYkMsTUFBSSxPQWhEUztBQWlEYkMsTUFBSSxTQWpEUztBQWtEYkMsTUFBSSxVQWxEUztBQW1EYkMsTUFBSSxXQW5EUztBQW9EYkMsTUFBSSxlQXBEUztBQXFEYkMsTUFBSSxXQXJEUztBQXNEYkMsTUFBSSxRQXREUztBQXVEYkMsTUFBSSxTQXZEUztBQXdEYkMsTUFBSSxhQXhEUztBQXlEYkMsTUFBSSxTQXpEUztBQTBEYkMsTUFBSSxRQTFEUztBQTJEYkMsTUFBSSxPQTNEUztBQTREYkMsTUFBSSxhQTVEUztBQTZEYkMsTUFBSSxPQTdEUztBQThEYkMsTUFBSSxRQTlEUztBQStEYkMsTUFBSSxRQS9EUztBQWdFYkMsTUFBSSxlQWhFUztBQWlFYkMsTUFBSSxNQWpFUztBQWtFYkMsTUFBSTtBQWxFUyxDOztBQXFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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WSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlLG1CQUFTLENBQ3RCLGNBRHNCLEVBRXRCLFlBRnNCLEVBR3RCLGNBSHNCLENBQVQsRUFJWixjQUpZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsa0JBRHNCLEVBRXRCLGVBRnNCLENBQVQsRUFHWixvQkFIWSxDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIseUJBRHNCLENBQVQsRUFFWixnQkFGWSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlLG1CQUFTLENBQ3RCLHFCQURzQixDQUFULEVBRVosZUFGWSxDOzs7Ozs7OztBQ0ZmLGtCQUFrQix5RCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICdhY2NvdW50JyxcclxuICAnY29udGFjdCcsXHJcbiAgJ2xlYWQnLFxyXG4gICdvcHBvcnR1bml0eScsXHJcbiAgJ3N5c3RlbVVzZXInLFxyXG4gICdyY0NvbnRhY3QnLFxyXG5dKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVudW1zL3Bob25lU291cmNlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYzJkVGl0bGU6ICdDaGlhbWEgY29uIHticmFuZH0nLFxuICBzbXNUaXRsZTogJ1NNUyBjb24ge2JyYW5kfScsXG59O1xyXG5cbi8vIEBrZXk6IEAjQFwiYzJkVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgd2l0aCB7YnJhbmR9XCJAI0Bcbi8vIEBrZXk6IEAjQFwic21zVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlNNUyB3aXRoIHticmFuZH1cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvQ2hyb21lQWRhcHRlci9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzaWduSW5FcnJvck1zZzogJ1BlciBwcm9jZWRlcmUsIGFjY2VkaSBhbGxcXCdhY2NvdW50IHBlciBpbCBxdWFsZSBoYWkgYXV0b3JpenphdG8gbFxcJ2FjY2Vzc28gZGEge2JyYW5kfSBwZXIgR29vZ2xlLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInNpZ25JbkVycm9yTXNnXCJAI0AgQHNvdXJjZTogQCNAXCJUbyBwcm9jZWVkLCBwbGVhc2UgbG9nIGluIHRoZSBhY2NvdW50IHRoYXQgeW91IGhhdmUgYXV0aG9yaXplZCB7YnJhbmR9IGZvciBHb29nbGUgdG8gYWNjZXNzLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW52aXRlTWVldGluZ0NvbnRlbnQ6ICd7YWNjb3VudE5hbWV9IGlzIGludml0aW5nIHlvdSB0byBhIHticmFuZE5hbWV9IG1lZXRpbmcuXFxuXFxuSm9pbiBmcm9tIFBDLCBNYWMsIGlPUyBvciBBbmRyb2lkOiB7am9pblVyaX17cGFzc3dvcmRUcGx9XFxuXFxuT3IgaVBob25lIG9uZS10YXA6XFxuICAgICB7bW9iaWxlRGlhbGluZ051bWJlclRwbH1cXG5cXG5PciBUZWxlcGhvbmU6XFxuICAgICBEaWFsOntwaG9uZURpYWxpbmdOdW1iZXJUcGx9XFxuICAgICBNZWV0aW5nIElEOiB7bWVldGluZ0lkfVxcbiAgICAgSW50ZXJuYXRpb25hbCBudW1iZXJzIGF2YWlsYWJsZToge3RlbGVjb25mZXJlbmNlfScsXG4gIHBhc3N3b3JkOiAnUGFzc3dvcmQnLFxufTtcblxuLy8gQGtleTogQCNAXCJpbnZpdGVNZWV0aW5nQ29udGVudFwiQCNAIEBzb3VyY2U6IEAjQFwie2FjY291bnROYW1lfSBpcyBpbnZpdGluZyB5b3UgdG8gYSB7YnJhbmROYW1lfSBtZWV0aW5nLlxcblxcbkpvaW4gZnJvbSBQQywgTWFjLCBpT1Mgb3IgQW5kcm9pZDoge2pvaW5Vcml9e3Bhc3N3b3JkVHBsfVxcblxcbk9yIGlQaG9uZSBvbmUtdGFwOlxcbiAgICAge21vYmlsZURpYWxpbmdOdW1iZXJUcGx9XFxuXFxuT3IgVGVsZXBob25lOlxcbiAgICAgRGlhbDp7cGhvbmVEaWFsaW5nTnVtYmVyVHBsfVxcbiAgICAgTWVldGluZyBJRDoge21lZXRpbmdJZH1cXG4gICAgIEludGVybmF0aW9uYWwgbnVtYmVycyBhdmFpbGFibGU6IHt0ZWxlY29uZmVyZW5jZX1cIkAjQFxuLy8gQGtleTogQCNAXCJwYXNzd29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUGFzc3dvcmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQ2FsZW5kYXIvaTE4bi9pdC1JVC5qcyIsImltcG9ydCBhdXRoTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhNZXNzYWdlcy5pbnRlcm5hbEVycm9yXTogJ0FjY2Vzc28gbm9uIHJpdXNjaXRvIGEgY2F1c2EgZGkgZXJyb3JpIGludGVybmkuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICBbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF06ICdBY2Nlc3NvIG5lZ2F0by4gQ29udGF0dGEgaWwgc3VwcG9ydG8uJyxcbiAgW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF06ICdTZXNzaW9uZSBzY2FkdXRhLiBFZmZldHR1YSBsXFwnYWNjZXNzby4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dpbiBmYWlsZWQgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF1cIkAjQCBAc291cmNlOiBAI0BcIkFjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNlc3Npb24gZXhwaXJlZC4gUGxlYXNlIHNpZ24gaW4uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1dGhBbGVydC9pMThuL2l0LUlULmpzIiwiaW1wb3J0IGNhbGxFcnJvcnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjYWxsRXJyb3JzLm5vVG9OdW1iZXJdOiAnSW1tZXR0aSB1biBudW1lcm8gZGkgdGVsZWZvbm8gdmFsaWRvLicsXG4gIFtjYWxsRXJyb3JzLm5vQXJlYUNvZGVdOiAnSW1wb3N0YSB7YXJlYUNvZGVMaW5rfSBwZXIgdXRpbGl6emFyZSBpIG51bWVyaSBkaSB0ZWxlZm9ubyBsb2NhbGkgYSA3IGNpZnJlLicsXG4gIFtjYWxsRXJyb3JzLnNwZWNpYWxOdW1iZXJdOiAnTGUgY2hpYW1hdGUgZGkgZW1lcmdlbnphIG8gYSBzZXJ2aXppIHNwZWNpYWxpIG5vbiBzb25vIHN1cHBvcnRhdGUuJyxcbiAgW2NhbGxFcnJvcnMuY29ubmVjdEZhaWxlZF06ICdDb25uZXNzaW9uZSBub24gcml1c2NpdGEuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICBbY2FsbEVycm9ycy5pbnRlcm5hbEVycm9yXTogJ0ltcG9zc2liaWxlIGNvbm5ldHRlcnNpIGEgY2F1c2EgZGkgZXJyb3JpIGludGVybmkuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICBbY2FsbEVycm9ycy5ub3RBbkV4dGVuc2lvbl06ICdJbCBudW1lcm8gaW50ZXJubyBub24gZXNpc3RlLicsXG4gIFtjYWxsRXJyb3JzLm5ldHdvcmtFcnJvcl06ICdJbXBvc3NpYmlsZSBjb25uZXR0ZXJzaSBhIGNhdXNhIGRpIHByb2JsZW1pIGRpIHJldGUuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICBbY2FsbEVycm9ycy5ub1JpbmdvdXRFbmFibGVdOiAnRGFsIHR1byBpbnRlcm5vIMOoIHBvc3NpYmlsZSBlZmZldHR1YXJlIGNoaWFtYXRlIGNvbiBsXFwnYXBwIHBlciBpbCBkZXNrdG9wLlxcbiAgICBQZXIgcGFzc2FyZSBhZCBhbHRyZSBvcHppb25pIGRpIGNoaWFtYXRhXFxuICAgIGNvbnRhdHRhIGxcXCdhbW1pbmlzdHJhdG9yZSBkZWxsXFwnYWNjb3VudCBwZXIgdW4gYWdnaW9ybmFtZW50by4nLFxuICBhcmVhQ29kZTogJ3ByZWZpc3NvJyxcbiAgdGVsdXM5MTE6ICdDaGlhbWF0ZSBkaSBlbWVyZ2VuemEgbm9uIHN1cHBvcnRhdGUuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm9Ub051bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHBob25lIG51bWJlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5ub0FyZWFDb2RlXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNldCB7YXJlYUNvZGVMaW5rfSB0byB1c2UgNy1kaWdpdCBsb2NhbCBwaG9uZSBudW1iZXJzLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLnNwZWNpYWxOdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLmNvbm5lY3RGYWlsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5pbnRlcm5hbEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5ub3RBbkV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIlRoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5ldHdvcmtFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5ub0ludGVybmF0aW9uYWxdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9ucyB0byBtYWtlIGludGVybmF0aW9uYWwgY2FsbHMuIFBsZWFzZSBjb250YWN0IHlvdXIge2JyYW5kfSBhY2NvdW50IGFkbWluaXN0cmF0b3IgZm9yIGFuIHVwZ3JhZGUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm9SaW5nb3V0RW5hYmxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBleHRlbnNpb24gaXMgYWxsb3dlZCB0byBtYWtlIGNhbGxzIHdpdGggZGVza3RvcCBhcHAuXFxuICAgIElmIHlvdSB3aXNoIHRvIHN3aXRjaCB0byBvdGhlciBjYWxsaW5nIG9wdGlvbnNcXG4gICAgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IgZm9yIGFuIHVwZ3JhZGUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVcIkAjQCBAc291cmNlOiBAI0BcImFyZWEgY29kZVwiQCNAXG4vLyBAa2V5OiBAI0BcInRlbHVzOTExXCJAI0AgQHNvdXJjZTogQCNAXCJFbWVyZ2VuY3kgZGlhbGluZyBpcyBub3Qgc3VwcG9ydGVkLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsQWxlcnQvaTE4bi9pdC1JVC5qcyIsImltcG9ydCBjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXTogJ0ltcG9zdGF6aW9uaSBzYWx2YXRlIGNvcnJldHRhbWVudGUuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZV06ICdJbXBvc3Rhemlvbmkgc2FsdmF0ZSBjb3JyZXR0YW1lbnRlLiBBc3NpY3VyYXRpIGNoZSB7YnJhbmR9IHBlciBpbCBkZXNrdG9wIHNpYSBpbnN0YWxsYXRvIG5lbCBjb21wdXRlci4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbl06ICdOZWxsYSBzZXppb25lIENoaWFtYXRhIHNwZWNpZmljYSBjb21lIGRlc2lkZXJpIGVmZmV0dHVhcmUgbGEgY2hpYW1hdGEuXFxuICAgIFNlIGxvIGRlc2lkZXJpLCByZW5kaWNpIG5vdGEgbGEgdHVhIHBvc2l6aW9uZSBzcGVjaWZpY2FuZG8gaWwgcGFlc2UgZSBpbCBwcmVmaXNzbyAoc2UgZGlzcG9uaWJpbGUpIG5lbGxhIHNlemlvbmUgUmVnaW9uZSwgaW4gbW9kbyBkYSBwb3RlciBlZmZldHR1YXJlIGNoaWFtYXRlIGxvY2FsaSBjb24gbFxcJ2FwcC4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbk90aGVyXTogJ05lbGxhIHNlemlvbmUgQ2hpYW1hdGEgc3BlY2lmaWNhIGNvbWUgZGVzaWRlcmkgZWZmZXR0dWFyZSBsYSBjaGlhbWF0YS4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGVybWlzc2lvbkNoYW5nZWRdOiAnTGUgdHVlIGF1dG9yaXp6YXppb25pIHNvbm8gc3RhdGUgbW9kaWZpY2F0ZSBkaSByZWNlbnRlLiBWYWkgYSB7bGlua30gcGVyIHZlcmlmaWNhcmUgbGUgb3B6aW9uaSBkaSBjaGlhbWF0YS4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGhvbmVOdW1iZXJDaGFuZ2VkXTogJ0xlIGluZm9ybWF6aW9uaSBzdWwgbnVtZXJvIGRpIHRlbGVmb25vIHNvbm8gc3RhdGUgbW9kaWZpY2F0ZSBkaSByZWNlbnRlLiBWYWkgYSB7bGlua30gcGVyIHZlcmlmaWNhcmUgbGUgb3B6aW9uaSBkaSBjaGlhbWF0YS4nLFxuICBsaW5rOiAnSW1wb3N0YXppb25pID4gQ2hpYW1hdGEnLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZF06ICdMZSB0dWUgYXV0b3Jpenphemlvbmkgc29ubyBzdGF0ZSBtb2RpZmljYXRlIGUgbm9uIGNvbnNlbnRvbm8gZGkgZWZmZXR0dWFyZSBjaGlhbWF0ZSBjb24gaWwgYnJvd3Nlci4gUGVyIG1hZ2dpb3JpIGRldHRhZ2xpIGNvbnRhdHRhIGxcXCdhbW1pbmlzdHJhdG9yZSBkZWwgdHVvIGFjY291bnQuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGVdOiAnTGUgY2hpYW1hdGUgYSBzZXJ2aXppIGRpIGVtZXJnZW56YSBvIHNwZWNpYWxpIG5vbiBzb25vIHN1cHBvcnRhdGUuIEluIGNhc28gZGkgZW1lcmdlbnphLCB1c2EgbGEgbGluZWEgZmlzc2EgY29udmVuemlvbmFsZSBvIHVuIHRlbGVmb25vIHdpcmVsZXNzIHBlciBjaGlhbWFyZSB1biBzZXJ2aXppbyBkaSBlbWVyZ2VuemEuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc1dpdGhTb2Z0cGhvbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBtYWtlIHN1cmUgeW91IGhhdmUge2JyYW5kfSBmb3IgRGVza3RvcCBpbnN0YWxsZWQgaW4geW91ciBjb21wdXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGVybWlzc2lvbkNoYW5nZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5waG9uZU51bWJlckNoYW5nZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIHBob25lIG51bWJlciBpbmZvcm1hdGlvbiBoYXMgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxpbmtcIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzID4gQ2FsbGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy53ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBhbmQgeW91IGNhbm5vdCBtYWtlIGNhbGxzIHdpdGggQnJvd3Nlci4gRm9yIGRldGFpbHMgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGVdXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLiBJbiBhbiBlbWVyZ2VuY3ksIHVzZSB5b3VyIHRyYWRpdGlvbmFsIHdpcmVsaW5lIG9yIHdpcmVsZXNzIHBob25lIHRvIGNhbGwgYW4gZW1lcmdlbmN5IG51bWJlci5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzQWxlcnQvaTE4bi9pdC1JVC5qcyIsImltcG9ydCByZWdpb25TZXR0aW5nc01lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUmVnaW9uU2V0dGluZ3MvcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVnaW9uOiAnUmVnaW9uZScsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXTogJ0ltcG9zdGF6aW9uaSBzYWx2YXRlIGNvcnJldHRhbWVudGUuJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuZGlhbGluZ1BsYW5zQ2hhbmdlZF06ICdMYSByZWdpb25lIHByZWNlZGVudGUgbm9uIMOoIHBpw7kgc3VwcG9ydGF0YSBwZXIgbFxcJ2FjY291bnQuXFxuICAgIFZlcmlmaWNhIGxhIG51b3ZhIHtyZWdpb25TZXR0aW5nc0xpbmt9LicsXG4gIHJlZ2lvblNldHRpbmdzOiAnaW1wb3N0YXppb25pIHJlZ2lvbmUnLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5hcmVhQ29kZUludmFsaWRdOiAnSW5zZXJpc2NpIHVuIHByZWZpc3NvIHZhbGlkby4nLFxufTtcblxuLy8gQGtleTogQCNAXCJyZWdpb25cIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcIltyZWdpb25TZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmRpYWxpbmdQbGFuc0NoYW5nZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJUaGUgcHJldmlvdXMgcmVnaW9uIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgZm9yIHlvdXIgYWNjb3VudC5cXG4gICAgUGxlYXNlIHZlcmlmeSB5b3VyIG5ldyB7cmVnaW9uU2V0dGluZ3NMaW5rfS5cIkAjQFxuLy8gQGtleTogQCNAXCJyZWdpb25TZXR0aW5nc1wiQCNAIEBzb3VyY2U6IEAjQFwicmVnaW9uIHNldHRpbmdzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuYXJlYUNvZGVJbnZhbGlkXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYXJlYSBjb2RlLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vaXQtSVQuanMiLCJpbXBvcnQgbWVzc2FnZVNlbmRlck1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZFN1Y2Nlc3NdOiAnSW52aW8gY29tcGxldGF0by4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRFcnJvcl06ICdFcnJvcmUgZHVyYW50ZSBsXFwnaW52aW8gZGVsIG1lc3NhZ2dpby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdOiAnRXJyb3JlIGRpIGNvbnZhbGlkYSBudW1lcm8gZGkgdGVsZWZvbm8uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0RW1wdHldOiAnSW1tZXR0aSBpbCB0ZXN0byBkYSBpbnZpYXJlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9QZXJtaXNzaW9uXTogJ05vbiBkaXNwb25pIGRlbGxcXCdhdXRvcml6emF6aW9uZSBwZXIgaW52aWFyZSBpbCBtZXNzYWdnaW8uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJFbXB0eV06ICdEZXZpIHNlbGV6aW9uYXJlIHVubyBkZWkgbnVtZXJpIGRpIHRlbGVmb25vIHBlciBpbnZpYXJlIGlsIG1lc3NhZ2dpbycsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl06ICdOdW1lcm8gZGkgdGVsZWZvbm8gbm9uIHZhbGlkby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudHNFbXB0eV06ICdJbW1ldHRpIHVuIG51bWVybyBkaSBkZXN0aW5hemlvbmUgdmFsaWRvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dFRvb0xvbmddOiAnVGVzdG8gdHJvcHBvIGx1bmdvLCBsaW1pdGUgZGkgMTAwMCcsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9BcmVhQ29kZV06ICdJbXBvc3RhIHthcmVhQ29kZUxpbmt9IHBlciB1dGlsaXp6YXJlIGkgbnVtZXJpIGRpIHRlbGVmb25vIGxvY2FsaSBhIDcgY2lmcmUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zcGVjaWFsTnVtYmVyXTogJ0xlIGNoaWFtYXRlIGRpIGVtZXJnZW56YSBvIGEgc2Vydml6aSBzcGVjaWFsaSBub24gc29ubyBzdXBwb3J0YXRlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF06ICdDb25uZXNzaW9uZSBub24gcml1c2NpdGEuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmludGVybmFsRXJyb3JdOiAnSW1wb3NzaWJpbGUgY29ubmV0dGVyc2kgYSBjYXVzYSBkaSBlcnJvcmkgaW50ZXJuaS4gUmlwcm92YSBwacO5IHRhcmRpLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90QW5FeHRlbnNpb25dOiAnSWwgbnVtZXJvIGludGVybm8gbm9uIGVzaXN0ZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5ldHdvcmtFcnJvcl06ICdJbXBvc3NpYmlsZSBjb25uZXR0ZXJzaSBhIGNhdXNhIGRpIHByb2JsZW1pIGRpIHJldGUuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRlck51bWJlckludmFsaWRdOiAnTm9uIHNlaSBhdXRvcml6emF0byBhIGludmlhcmUgbWVzc2FnZ2kgYSBkZXN0aW5hdGFyaSBlc3Rlcm5pIGFsbFxcJ29yZ2FuaXp6YXppb25lLiBDb250YXR0YSBsXFwnYW1taW5pc3RyYXRvcmUgZGVsbFxcJ2FjY291bnQgUmluZ0NlbnRyYWwgcGVyIHVuIGFnZ2lvcm5hbWVudG8uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RTbXNUb0V4dGVuc2lvbl06ICdJbXBvc3NpYmlsZSBpbnZpYXJlIGEgdW4gbnVtZXJvIGludGVybm8gY29uIGlsIG51bWVybyBkaSB0ZWxlZm9ubyBwcmluY2lwYWxlLiBQZXIgaW52aWFyZSBhIHVuIG51bWVybyBpbnRlcm5vLCBpbW1ldHRpIGlsIG51bWVybyBpbnRlcm5vLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZF06ICdMXFwnaW52aW8gZGkgU01TIGEgdW4gbnVtZXJvIGRpIHRlbGVmb25vIGludGVybmF6aW9uYWxlIG5vbiDDqCBzdXBwb3J0YXRvLicsXG4gIGFyZWFDb2RlOiAncHJlZmlzc28nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudE51bWJlckludmFsaWRzXTogJ0ltbWV0dGkgdW4gbnVtZXJvIGRpIHRlbGVmb25vIHZhbGlkby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vSW50ZXJuYWxTTVNQZXJtaXNzaW9uXTogJ05vbiBkaXNwb25pIGRlbGxlIGF1dG9yaXp6YXppb25pIHBlciBpbnZpYXJlIG1lc3NhZ2dpLiBDb250YXR0YSBsXFwnYW1taW5pc3RyYXRvcmUgZGVsbFxcJ2FjY291bnQgUmluZ0NlbnRyYWwgcGVyIHVuIGFnZ2lvcm5hbWVudG8uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kaW5nXTogJ0ludmlvIG1lc3NhZ2dpbyBpbiBjb3Jzby4uLiBsXFwnb3BlcmF6aW9uZSBwb3RyZWJiZSByaWNoaWVkZXJlIHVuIHBhaW8gZGkgbWludXRpLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZFN1Y2Nlc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJTZW5kIFN1Y2Nlc3MuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgd2hlbiBzZW5kIG1lc3NhZ2UuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5udW1iZXJWYWxpZGF0ZUVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGhvbmUgTnVtYmVyIFZhbGlkYXRlIEVycm9yLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dEVtcHR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIHRoZSB0ZXh0IHRvIGJlIHNlbnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub1Blcm1pc3Npb25dXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgaGF2ZSBubyBwZXJtaXNzaW9uIHRvIHNlbmQgbWVzc2FnZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRlckVtcHR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IG11c3Qgc2VsZWN0IGEgbnVtYmVyIGZyb20geW91ciBwaG9uZSBudW1iZXJzIHRvIHNlbmRcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vVG9OdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJJbnZhbGlkIHBob25lIG51bWJlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudHNFbXB0eV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHJlY2VpdmVyIG51bWJlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRUb29Mb25nXVwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dCBpcyB0b28gbG9uZywgMTAwMCBMaW1pdGVkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5yZWNpcGllbnROdW1iZXJJbnZhbGlkc11cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHBob25lIG51bWJlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vQXJlYUNvZGVdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zcGVjaWFsTnVtYmVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmNvbm5lY3RGYWlsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90QW5FeHRlbnNpb25dXCJAI0AgQHNvdXJjZTogQCNAXCJUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5ldHdvcmtFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRlck51bWJlckludmFsaWRdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHNlbmQgbWVzc2FnZXMgdG8gcmVjaXBpZW50cyBvdXRzaWRlIG9mIHlvdXIgb3JnYW5pemF0aW9uLiBQbGVhc2UgY29udGFjdCB5b3VyIFJpbmdDZW50cmFsIGFjY291bnQgYWRtaW5pc3RyYXRvciBmb3IgdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vdFNtc1RvRXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IHNlbmQgVG8gYSBleHRlbnNpb24gbnVtYmVyIHdpdGggbWFpbiBwaG9uZSBudW1iZXIuIElmIHlvdSB3YW50IHRvIHNlbnQgdG8gYSBleHRlbnNpb24gTnVtYmVyLCBwbGVhc2UganVzdCBlbnRlciBleHRlbnNpb24gTnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNlbmRpbmcgU01TIHRvIGludGVybmF0aW9uYWwgcGhvbmUgbnVtYmVyIGlzIG5vdCBzdXBwb3J0ZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub0ludGVybmFsU01TUGVybWlzc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlcy4gUGxlYXNlIGNvbnRhY3QgeW91ciBSaW5nQ2VudHJhbCBhY2NvdW50IGFkbWluaXN0cmF0b3IgZm9yIHVwZ3JhZGUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVcIkAjQCBAc291cmNlOiBAI0BcImFyZWEgY29kZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGluZ11cIkAjQCBAc291cmNlOiBAI0BcIk1lc3NhZ2UgYmVpbmcgc2VudOKApkl0IG1heSB0YWtlIGEgY291cGxlIG9mIG1pbnV0ZXMgdG8gY29tcGxldGUuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VTZW5kZXJBbGVydC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByYXRlRXhjZWVkZWQ6ICdMaW1pdGUgcmljaGllc3RhIHN1cGVyYXRvLiBMXFwnYXBwIHJpcHJlbmRlcsOgIHRyYSB7dHRsfSBzZWNvbmRpLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInJhdGVFeGNlZWRlZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4gQXBwIHdpbGwgcmVzdW1lIGluIHt0dGx9IHNlY29uZHMuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vaXQtSVQuanMiLCJpbXBvcnQgY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29ubmVjdGl2aXR5TW9uaXRvci9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMuZGlzY29ubmVjdGVkXTogJ0Nvbm5lc3Npb25lIGRpIHJldGUgcGVyc2EuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5kaXNjb25uZWN0ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJOZXR3b3JrIGNvbm5lY3Rpb24gaXMgbG9zdC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9pdC1JVC5qcyIsImltcG9ydCB3ZWJwaG9uZUVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbd2VicGhvbmVFcnJvcnMuY29ubmVjdEZhaWxlZF06ICdJbnZpbyBlc2VndWl0by4nLFxuICBbd2VicGhvbmVFcnJvcnMuYnJvd3Nlck5vdFN1cHBvcnRlZF06ICdMZSBjaGlhbWF0ZSBkYSBicm93c2VyIHNvbm8gc3VwcG9ydGF0ZSBzb2xvIGluIENocm9tZS4nLFxuICBbd2VicGhvbmVFcnJvcnMud2VicGhvbmVDb3VudE92ZXJMaW1pdF06ICfDiCBwb3NzaWJpbGUgcmVnaXN0cmFyZSBmaW5vIGEgNSB0ZWxlZm9uaSB3ZWIuJyxcbiAgW3dlYnBob25lRXJyb3JzLm5vdE91dGJvdW5kQ2FsbFdpdGhvdXRETF06ICdDb24gcXVlc3RvIGludGVybm8gbm9uIMOoIGF0dHVhbG1lbnRlIGNvbnNlbnRpdG8gZWZmZXR0dWFyZSBjaGlhbWF0ZSBpbiB1c2NpdGEgY29uIGlsIGJyb3dzZXIuIENvbnRhdHRhIGlsIHJhcHByZXNlbnRhbnRlIGRlbGxcXCdhY2NvdW50IHBlciB1biBhZ2dpb3JuYW1lbnRvJyxcbiAgW3dlYnBob25lRXJyb3JzLmdldFNpcFByb3Zpc2lvbkVycm9yXTogJ05vbiBkaXNwb25pIGRlbGxcXCdhdXRvcml6emF6aW9uZSBwZXIgaW52aWFyZSBpbCBtZXNzYWdnaW8uJyxcbiAgW3dlYnBob25lRXJyb3JzLmNvbm5lY3RlZF06ICdUZWxlZm9ubyB3ZWIgcmVnaXN0cmF0by4nLFxuICBbd2VicGhvbmVFcnJvcnMudG9Wb2ljZU1haWxFcnJvcl06ICdJbXBvc3NpYmlsZSBpbnZpYXJlIGxhIGNoaWFtYXRhIGFsbGEgc2VncmV0ZXJpYSB0ZWxlZm9uaWNhIGEgY2F1c2EgZGkgdW4gZXJyb3JlIGludGVybm8nLFxuICBbd2VicGhvbmVFcnJvcnMubXV0ZUVycm9yXTogJ0ltcG9zc2liaWxlIGRpc2F0dGl2YXJlIGxcXCdhdWRpbyBkZWxsYSBjaGlhbWF0YSBpbiBxdWVzdG8gbW9tZW50by4nLFxuICBbd2VicGhvbmVFcnJvcnMuaG9sZEVycm9yXTogJ0ltcG9zc2liaWxlIG1ldHRlcmUgaW4gYXR0ZXNhIGxhIGNoaWFtYXRhIGluIHF1ZXN0byBtb21lbnRvLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5mbGlwRXJyb3JdOiAnSW1wb3NzaWJpbGUgY29tbXV0YXJlIGxhIGNoaWFtYXRhLiBSaXByb3ZhIHBpw7kgdGFyZGkuJyxcbiAgW3dlYnBob25lRXJyb3JzLnJlY29yZEVycm9yXTogJ05vbiDDqCBwb3NzaWJpbGUgcmVnaXN0cmFyZSBsYSBjaGlhbWF0YSBpbiBxdWVzdG8gbW9tZW50by4gQ29kaWNlIGVycm9yZToge2Vycm9yQ29kZX0nLFxuICBbd2VicGhvbmVFcnJvcnMucmVjb3JkRGlzYWJsZWRdOiAnTGEgZnVuemlvbmUgZGkgcmVnaXN0cmF6aW9uZSBjaGlhbWF0YSBub24gw6ggZGlzcG9uaWJpbGUgbmVsIHR1byBhY2NvdW50LiBDb250YXR0YSBsXFwnYW1taW5pc3RyYXRvcmUgZGVsIHR1byBhY2NvdW50LicsXG4gIFt3ZWJwaG9uZUVycm9ycy50cmFuc2ZlckVycm9yXTogJ0ltcG9zc2liaWxlIHRyYXNmZXJpcmUgbGEgY2hpYW1hdGEuIFJpcHJvdmEgcGnDuSB0YXJkaS4nLFxuICB3ZWJwaG9uZVVuYXZhaWxhYmxlOiAne2Vycm9yfS4gUmljb25uZXNzaW9uZSBhbCBzZXJ2ZXIgaW4gY29yc28uIFNlIGxcXCdlcnJvcmUgcGVyc2lzdGUsIHNlZ25hbGEgaWwgcHJvYmxlbWEgYWxsXFwnYXNzaXN0ZW56YSB7YnJhbmROYW1lfS4nLFxuICBlcnJvckNvZGU6ICdDb2RpY2UgZXJyb3JlIGludGVybm86IHtlcnJvckNvZGV9JyxcbiAgb2NjdXJzOiAnU2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUgaW50ZXJubycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5jb25uZWN0RmFpbGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29ubmVjdCB3aXRoIHdlYiBwaG9uZSBzZXJ2ZXIgZmFpbGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5jb25uZWN0ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJXZWIgcGhvbmUgcmVnaXN0ZXJlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuYnJvd3Nlck5vdFN1cHBvcnRlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNhbGxpbmcgd2l0aCBicm93c2VyIGlzIG9ubHkgc3VwcG9ydGVkIG9uIENocm9tZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMud2VicGhvbmVDb3VudE92ZXJMaW1pdF1cIkAjQCBAc291cmNlOiBAI0BcIkEgbWF4aW11bSBvZiA1IHdlYiBwaG9uZXMgY291bGQgYmUgcmVnaXN0ZXJlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMubm90T3V0Ym91bmRDYWxsV2l0aG91dERMXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBleHRlbnNpb24gaXMgbm90IGFsbG93ZWQgdG8gbWFrZSBvdXRib3VuZCBjYWxscyB3aXRoIGJyb3dzZXIgY3VycmVudGx5LCBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmdldFNpcFByb3Zpc2lvbkVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2UuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLnRvVm9pY2VNYWlsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3Qgc2VuZCBjYWxsIHRvIHZvaWNlbWFpbCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JcIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMubXV0ZUVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBjYW5ub3QgYmUgbXV0ZWQgYXQgdGhlIG1vbWVudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuaG9sZEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBjYW5ub3QgYmUgaG9sZCBhdCB0aGUgbW9tZW50LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5mbGlwRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgZmxpcCB0aGUgY2FsbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMucmVjb3JkRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgY2Fubm90IHJlY29yZCB0aGUgY2FsbCBhdCB0aGUgbW9tZW50LiBFcnJvciBjb2RlOiB7ZXJyb3JDb2RlfVwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5yZWNvcmREaXNhYmxlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNvcnJ5LCB5b3VyIGFjY291bnQgZG9lcyBub3QgaGF2ZSB0aGUgZmVhdHVyZSB0byByZWNvcmQgYSBjYWxsLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMudHJhbnNmZXJFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCB0cmFuc2ZlciB0aGUgY2FsbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJ3ZWJwaG9uZVVuYXZhaWxhYmxlXCJAI0AgQHNvdXJjZTogQCNAXCJ7ZXJyb3J9LiBXZSBhcmUgcmVjb25uZWN0aW5nIHRvIHNlcnZlci4gSWYgdGhlIGVycm9yIHBlcnNpc3RzLCBwbGVhc2UgcmVwb3J0IHRoaXMgZXJyb3IgdG8ge2JyYW5kTmFtZX0gU3VwcG9ydC5cIkAjQFxuLy8gQGtleTogQCNAXCJlcnJvckNvZGVcIkAjQCBAc291cmNlOiBAI0BcIkludGVybmFsIGVycm9yIGNvZGU6IHtlcnJvckNvZGV9XCJAI0Bcbi8vIEBrZXk6IEAjQFwib2NjdXJzXCJAI0AgQHNvdXJjZTogQCNAXCJJbnRlcm5hbCBlcnJvciBvY2N1cnNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvV2VicGhvbmVBbGVydC9pMThuL2l0LUlULmpzIiwiaW1wb3J0IG1lc3NhZ2VTdG9yZUVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL01lc3NhZ2VTdG9yZS9tZXNzYWdlU3RvcmVFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFttZXNzYWdlU3RvcmVFcnJvcnMuZGVsZXRlRmFpbGVkXTogJ0ltcG9zc2liaWxlIGVsaW1pbmFyZSBpbCBtZXNzYWdnaW8gdm9jYWxlIGEgY2F1c2EgZGkgdW4gZXJyb3JlIGRlbCBzZXJ2ZXIuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTdG9yZUVycm9ycy5kZWxldGVGYWlsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgZGVsZXRlIHRoZSB2b2ljZW1haWwgZHVlIHRvIGludGVybmFsIHNlcnZlciBlcnJvci5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZVN0b3JlQWxlcnQvaTE4bi9pdC1JVC5qcyIsImltcG9ydCBtZWV0aW5nU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVldGluZy9tZWV0aW5nU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbbWVldGluZ1N0YXR1cy5lbXB0eVRvcGljXTogJ1NwZWNpZmljYSBsXFwnYXJnb21lbnRvIGRlbGxhIHJpdW5pb25lLicsXG4gIFttZWV0aW5nU3RhdHVzLm5vUGFzc3dvcmRdOiAnRm9ybmlzY2kgbGEgcGFzc3dvcmQgZGVsbGEgcml1bmlvbmUuJyxcbiAgW21lZXRpbmdTdGF0dXMuc2NoZWR1bGVkU3VjY2Vzc106ICdMYSByaXVuaW9uZSDDqCBwcm9ncmFtbWF0YS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbbWVldGluZ1N0YXR1cy5lbXB0eVRvcGljXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIG1lZXRpbmcgdG9waWMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lZXRpbmdTdGF0dXMubm9QYXNzd29yZF1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBwcm92aWRlIG1lZXRpbmcgcGFzc3dvcmQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lZXRpbmdTdGF0dXMuc2NoZWR1bGVkU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIk1lZXRpbmcgaXMgc2NoZWR1bGVkLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9pdC1JVC5qcyIsImltcG9ydCBhdWRpb1NldHRpbmdzRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQXVkaW9TZXR0aW5ncy9hdWRpb1NldHRpbmdzRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbYXVkaW9TZXR0aW5nc0Vycm9ycy51c2VyTWVkaWFQZXJtaXNzaW9uXTogJ0F1dG9yaXp6YSB7YnJhbmROYW1lfSBwZXIgR29vZ2xlIGFkIGFjY2VkZXJlIGFsIHR1byBhdWRpby4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbYXVkaW9TZXR0aW5nc0Vycm9ycy51c2VyTWVkaWFQZXJtaXNzaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGdyYW50IHticmFuZE5hbWV9IGZvciBHb29nbGUgdG8gYWNjZXNzIHlvdXIgYXVkaW8uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NBbGVydC9pMThuL2l0LUlULmpzIiwiaW1wb3J0IHBlcm1pc3Npb25NZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3Blcm1pc3Npb25NZXNzYWdlcy5pbnZhbGlkVGllcl06ICdMYSB0dWEgdmVyc2lvbmUgbm9uIHN1cHBvcnRhIGxcXCdpbnRlZ3JhemlvbmUge2FwcGxpY2F0aW9ufS4gQ29udGF0dGEgaWwgcmFwcHJlc2VudGFudGUgZGVsbFxcJ2FjY291bnQgcGVyIGFnZ2lvcm5hcmUgbGEgdmVyc2lvbmUge2JyYW5kfS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGVybWlzc2lvbk1lc3NhZ2VzLmludmFsaWRUaWVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBlZGl0aW9uIGRvZXMgbm90IHN1cHBvcnQge2FwcGxpY2F0aW9ufSBpbnRlZ3JhdGlvbi4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIHRvIHVwZ3JhZGUgeW91ciB7YnJhbmR9IGVkaXRpb24uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Blcm1pc3Npb25NZXNzYWdlcy5pbnN1ZmZpY2llbnRQcml2aWxlZ2VdXCJAI0AgQHNvdXJjZTogQCNAXCJJbnN1ZmZpY2llbnQgcHJpdmlsZWdlLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JvbGVzQW5kUGVybWlzc2lvbnNBbGVydC9pMThuL2l0LUlULmpzIiwiaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VzLnJlcXVpcmVBZGl0aW9uYWxOdW1iZXJzXTogJ1NlbGV6aW9uYSBpIG51bWVyaSBkaSBhY2Nlc3NvIGFnZ2l1bnRpdmkuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VzLnJlcXVpcmVBZGl0aW9uYWxOdW1iZXJzXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNlbGVjdCB0aGUgYWRkaXRpb25hbCBkaWFsLWluIG51bWJlcnMuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VBbGVydC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dpbkJ1dHRvbjogJ0FjY2VkaScsXG4gIHZlcnNpb246ICdWZXJzaW9uZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2luQnV0dG9uXCJAI0AgQHNvdXJjZTogQCNAXCJTaWduIEluXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmVyc2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiVmVyc2lvblwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vaXQtSVQuanMiLCJpbXBvcnQgY2FsbGluZ09wdGlvbnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ09wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnQ2hpYW1hdGEnLFxuICBbY2FsbGluZ09wdGlvbnMuc29mdHBob25lXTogJ3ticmFuZH0gcGVyIGlsIGRlc2t0b3AnLFxuICBbY2FsbGluZ09wdGlvbnMubXlwaG9uZV06ICdJbCBtaW8gdGVsZWZvbm8ge2JyYW5kfScsXG4gIFtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lXTogJ0FsdHJvIHRlbGVmb25vJyxcbiAgW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXTogJ1RlbGVmb25vIHBlcnNvbmFsaXp6YXRvJyxcbiAgbWFrZUNhbGxzV2l0aDogJ0VmZmV0dHVhIGNoaWFtYXRlIGNvbicsXG4gIHJpbmdvdXRIaW50OiAnQ2hpYW1hbWkgcHJpbWEgYWxsYSBtaWEgcG9zdGF6aW9uZSwgcG9pIGNvbm5ldHRpIGlsIGdydXBwbyBjaGlhbWF0bycsXG4gIG15TG9jYXRpb25MYWJlbDogJ0xhIG1pYSBwb3N0YXppb25lJyxcbiAgcHJlc3MxVG9TdGFydENhbGxMYWJlbDogJ0NoaWVkaW1pIGRpIGNvbXBvcnJlIDEgcHJpbWEgZGkgY29ubmV0dGVyZSBsYSBjaGlhbWF0YScsXG4gIFtjYWxsaW5nT3B0aW9ucy5icm93c2VyXTogJ0Jyb3dzZXInLFxuICBzYXZlOiAnU2FsdmEnLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF06ICdVc2EgcXVlc3RhIG9wemlvbmUgcGVyIGVmZmV0dHVhcmUgZSByaWNldmVyZSBjaGlhbWF0ZSB1c2FuZG8gaWwgbWljcm9mb25vIGUgbFxcJ2FsdG9wYXJsYW50ZSBkZWwgY29tcHV0ZXIuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZX1Ub29sdGlwYF06ICdVc2EgcXVlc3RhIG9wemlvbmUgcGVyIGVmZmV0dHVhcmUgZSByaWNldmVyZSBjaGlhbWF0ZSB1c2FuZG8gbFxcJ2FwcCB7YnJhbmR9IHBlciBkZXNrdG9wLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5teXBob25lfVRvb2x0aXBgXTogJ1VzYSBxdWVzdGEgb3B6aW9uZSBwZXIgZWZmZXR0dWFyZSBjaGlhbWF0ZSB1c2FuZG8gaWwgdHVvIHRlbGVmb25vIHticmFuZH0uJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXTogJ1BlciBsYSBjaGlhbWF0YSBlZmZldHR1YXRhLCBzcXVpbGxlcsOgIHByaW1hIGlsIHR1byB0ZWxlZm9ubyB7YnJhbmR9IGUgcG9pIHF1ZWxsbyBkZWxsYSBwZXJzb25hIGNoaWFtYXRhLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXBgXTogJ1VzYSBxdWVzdGEgb3B6aW9uZSBwZXIgZWZmZXR0dWFyZSBjaGlhbWF0ZSBjb24gaSB0dW9pIGFsdHJpIHRlbGVmb25pLCBhZCBlc2VtcGlvIHF1ZWxsbyBkaSBjYXNhIG8gdW4gY2VsbHVsYXJlIGNoZSBoYWkgYWdnaXVudG8gYWwgdHVvIGludGVybm8ge2JyYW5kfS4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZX1Ub29sdGlwMWBdOiAnUGVyIGxhIGNoaWFtYXRhIGVmZmV0dHVhdGEsIHNxdWlsbGVyw6AgcHJpbWEgcXVlc3RvIHRlbGVmb25vIGUgcG9pIHF1ZWxsbyBkZWxsYSBwZXJzb25hIGNoaWFtYXRhLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwYF06ICdVc2EgcXVlc3RhIG9wemlvbmUgcGVyIGVmZmV0dHVhcmUgY2hpYW1hdGUgY29uIHF1YWxzaWFzaSB0ZWxlZm9ubyBpbnNlcmVuZG8gdW4gbnVtZXJvIGRpIHRlbGVmb25vIHZhbGlkbyBuZWwgY2FtcG8gcXVpIHNvdHRvLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdOiAnUGVyIGxhIGNoaWFtYXRhIGVmZmV0dHVhdGEsIHNxdWlsbGVyw6AgcHJpbWEgcXVlc3RvIHRlbGVmb25vIGUgcG9pIHF1ZWxsbyBkZWxsYSBwZXJzb25hIGNoaWFtYXRhLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcInticmFuZH0gZm9yIERlc2t0b3BcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMubXlwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk15IHticmFuZH0gUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk90aGVyIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmJyb3dzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJCcm93c2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWFrZUNhbGxzV2l0aFwiQCNAIEBzb3VyY2U6IEAjQFwiTWFrZSBteSBjYWxscyB3aXRoXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ291dEhpbnRcIkAjQCBAc291cmNlOiBAI0BcIlJpbmcgbWUgYXQgbXkgbG9jYXRpb24gZmlyc3QsIHRoZW4gY29ubmVjdCB0aGUgY2FsbGVkIHBhcnR5XCJAI0Bcbi8vIEBrZXk6IEAjQFwibXlMb2NhdGlvbkxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJNeSBMb2NhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInByZXNzMVRvU3RhcnRDYWxsTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlByb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIgY29tcHV0ZXLigJlzIG1pY3JvcGhvbmUgYW5kIHNwZWFrZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZX1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIge2JyYW5kfSBmb3IgRGVza3RvcCBhcHAuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gcGhvbmUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXVwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB5b3VyIHticmFuZH0gcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIG90aGVyIHBob25lcyBzdWNoIGFzIGhvbWUgb3IgY2VsbCBwaG9uZXMgdGhhdCB5b3UgaGF2ZSBhZGRlZCBpbiB5b3VyIHticmFuZH0gRXh0ZW5zaW9uLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXAxYF1cIkAjQCBAc291cmNlOiBAI0BcIkZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgeW91IGNhbGxlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyBhbnkgcGhvbmUgb2YgeW91ciBjaG9pY2UgYnkgZW50ZXJpbmcgYSB2YWxpZCBwaG9uZSBudW1iZXIgaW4gdGhlIGZpZWxkIGJlbG93LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdXCJAI0AgQHNvdXJjZTogQCNAXCJGb3IgdGhlIGNhbGwgeW91IG1ha2UsIHRoaXMgcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc1BhbmVsL2kxOG4vaXQtSVQuanMiLCJpbXBvcnQgSGFzaE1hcCBmcm9tICcuLi9IYXNoTWFwJztcblxuY29uc3QgeyBoYXNPd25Qcm9wZXJ0eSB9ID0gT2JqZWN0LnByb3RvdHlwZTtcbi8qKlxuICogQGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gaGVscGVyIGNsYXNzIGZvciBjcmVhdGluZyByZWR1eCBhY3Rpb24gZGVmaW5pdGlvbiBtYXBzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudW0gZXh0ZW5kcyBIYXNoTWFwIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBhY3Rpb25zIC0gbGlzdCBvZiBhY3Rpb24gc3RyaW5nc1xuICAgKiBAZXh0ZW5kcyBIYXNoTWFwXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbXSwgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBkZWZpbml0aW9uW3ZhbHVlXSA9IHByZWZpeCAhPT0gJycgPyBgJHtwcmVmaXh9LSR7dmFsdWV9YCA6IHZhbHVlO1xuICAgIH0pO1xuICAgIHN1cGVyKGRlZmluaXRpb24pO1xuICB9XG59XG5jb25zdCBwcmVmaXhDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBoZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIGEgcHJlZml4ZWQgYWN0aW9uIGRlZmluaXRpb24gbWFwc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4RW51bSh7IGVudW1NYXAsIHByZWZpeCwgYmFzZSA9IGVudW1NYXAgfSkge1xuICBpZiAoIXByZWZpeCB8fCBwcmVmaXggPT09ICcnKSByZXR1cm4gYmFzZTtcblxuICBpZiAoIXByZWZpeENhY2hlLmhhcyhwcmVmaXgpKSB7XG4gICAgcHJlZml4Q2FjaGUuc2V0KHByZWZpeCwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hlID0gcHJlZml4Q2FjaGUuZ2V0KHByZWZpeCk7XG5cbiAgaWYgKCFjYWNoZS5oYXMoYmFzZSkpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG4gICAgZm9yIChjb25zdCB0eXBlIGluIGJhc2UpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoYmFzZTo6aGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgZGVmaW5pdGlvblt0eXBlXSA9IGAke3ByZWZpeH0tJHtiYXNlW3R5cGVdfWA7XG4gICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnNldChiYXNlLCBuZXcgSGFzaE1hcChkZWZpbml0aW9uKSk7XG4gIH1cbiAgcmV0dXJuIGNhY2hlLmdldChiYXNlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvRW51bS9pbmRleC5qcyIsImNvbnN0IHNEZWZpbml0aW9uID0gU3ltYm9sKCdkZWZpbml0aW9uJyk7XHJcbmNvbnN0IHNWYWx1ZU1hcCA9IFN5bWJvbCgndmFsdWVNYXAnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0R2V0RnVuY3Rpb24oaXRlbSkge1xyXG4gIHJldHVybiBpdGVtO1xyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIEhhc2hNYXBcclxuICogQGRlc2NyaXB0aW9uIFNpbXBsZSBoYXNoIG1hcCBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzaE1hcCB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb25cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkZWZpbml0aW9uKSB7XHJcbiAgICB0aGlzW3NEZWZpbml0aW9uXSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmluaXRpb24pO1xyXG4gICAgdGhpc1tzVmFsdWVNYXBdID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmluaXRpb24pIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKGRlZmluaXRpb246Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbc0RlZmluaXRpb25dW2tleV07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzW3NWYWx1ZU1hcF0uc2V0KHRoaXNbc0RlZmluaXRpb25dW2tleV0sIGtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRLZXkobWFwLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG1hcFtzVmFsdWVNYXBdLmdldCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBoYXNWYWx1ZShtYXAsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbWFwW3NWYWx1ZU1hcF0uaGFzKHZhbHVlKTtcclxuICB9XHJcbiAgc3RhdGljIGZyb21TZXQoeyBzZXQsIGdldEtleSA9IGRlZmF1bHRHZXRGdW5jdGlvbiwgZ2V0VmFsdWUgPSBkZWZhdWx0R2V0RnVuY3Rpb24gfSkge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHt9O1xyXG4gICAgWy4uLnNldF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBnZXRLZXkoaXRlbSk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoaXRlbSk7XHJcbiAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJyAmJiBrZXkgIT09IG51bGwgJiYga2V5ICE9PSAnJykge1xyXG4gICAgICAgIGRlZmluaXRpb25ba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgSGFzaE1hcChkZWZpbml0aW9uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9IYXNoTWFwL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzYXZlOiAnU2FsdmEnLFxufTtcblxuLy8gQGtleTogQCNAXCJzYXZlXCJAI0AgQHNvdXJjZTogQCNAXCJTYXZlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9pdC1JVC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnUmVnaW9uZScsXG4gIE5BT25seU1lc3NhZ2U6ICdJbXBvc3RhIGlsIHByZWZpc3NvLiBWZXJyw6AgdXNhdG8gcGVyIGxlIGNoaWFtYXRlIGxvY2FsaS4nLFxuICBNdWx0aVdpdGhOQU1lc3NhZ2U6ICdJbXBvc3RhIGkgcHJlZmlzc2kgbG9jYWxlIGUgaW50ZXJuYXppb25hbGUuIFZlcnJhbm5vIHV0aWxpenphdGkgcGVyIGxhIGZvcm1hdHRhemlvbmUgZGVpIG51bWVyaSBkaSB0ZWxlZm9ubyBlIGxlIGNoaWFtYXRlIGxvY2FsaS4nLFxuICBNdWx0aVdpdGhvdXROQU1lc3NhZ2U6ICdTZWxlemlvbmEgaWwgcGFlc2UgaW4gY3VpIHRpIHRyb3ZpLiBWZXJyw6AgdXRpbGl6emF0byBwZXIgbGEgZm9ybWF0dGF6aW9uZSBkZWkgbnVtZXJpIGRpIHRlbGVmb25vIGUgbGUgY2hpYW1hdGUgbG9jYWxpLicsXG4gIGNvdW50cnk6ICdQYWVzZScsXG4gIGFyZWFDb2RlOiAnUHJlZmlzc28nLFxuICBhcmVhQ29kZVBsYWNlaG9sZGVyOiAnSW5zZXJpc2NpIHByZWZpc3NvJyxcbiAgc2F2ZTogJ1NhbHZhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcIk5BT25seU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQgeW91ciBhcmVhIGNvZGUuIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nLlwiQCNAXG4vLyBAa2V5OiBAI0BcIk11bHRpV2l0aE5BTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNldCB0aGUgY291bnRyeSBhbmQgYXJlYSBjb2RlIGZvciB5b3VyIHJlZ2lvbi4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLlwiQCNAXG4vLyBAa2V5OiBAI0BcIk11bHRpV2l0aG91dE5BTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNlbGVjdCB0aGUgY291bnRyeSB5b3UgbG9jYXRlIGluLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGluZyBhbmQgcGhvbmUgbnVtYmVyIGZvcm1hdHRpbmcuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY291bnRyeVwiQCNAIEBzb3VyY2U6IEAjQFwiQ291bnRyeVwiQCNAXG4vLyBAa2V5OiBAI0BcImFyZWFDb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJBcmVhIENvZGVcIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVBsYWNlaG9sZGVyXCJAI0AgQHNvdXJjZTogQCNAXCJFbnRlciBBcmVhIENvZGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICA0MTk6ICdBbWVyaWNhIExhdGluYScsXG4gIEFSOiAnQXJnZW50aW5hJyxcbiAgQVQ6ICdBdXN0cmlhJyxcbiAgQkg6ICdCYWhyYWluJyxcbiAgQlI6ICdCcmFzaWxlJyxcbiAgQkc6ICdCdWxnYXJpYScsXG4gIENBOiAnQ2FuYWRhJyxcbiAgQ0w6ICdDaWxlJyxcbiAgQ046ICdDaW5hJyxcbiAgSFI6ICdDcm9hemlhJyxcbiAgQ1k6ICdDaXBybycsXG4gIENaOiAnUmVwdWJibGljYSBDZWNhJyxcbiAgREs6ICdEYW5pbWFyY2EnLFxuICBETzogJ1JlcHViYmxpY2EgRG9taW5pY2FuYScsXG4gIEVFOiAnRXN0b25pYScsXG4gIEZJOiAnRmlubGFuZGlhJyxcbiAgRlI6ICdGcmFuY2lhJyxcbiAgREU6ICdHZXJtYW5pYScsXG4gIEhLOiAnSG9uZyBLb25nJyxcbiAgSFU6ICdVbmdoZXJpYScsXG4gIElFOiAnSXJsYW5kYScsXG4gIElMOiAnSXNyYWVsZScsXG4gIElOOiAnSW5kaWEnLFxuICBJVDogJ0l0YWxpYScsXG4gIEpQOiAnR2lhcHBvbmUnLFxuICBMVjogJ0xldHRvbmlhJyxcbiAgTFQ6ICdMaXR1YW5pYScsXG4gIExVOiAnTHVzc2VtYnVyZ28nLFxuICBNWTogJ01hbGVzaWEnLFxuICBNWDogJ01lc3NpY28nLFxuICBOTDogJ1BhZXNpIEJhc3NpJyxcbiAgTk86ICdOb3J2ZWdpYScsXG4gIFBBOiAnUGFuYW1hJyxcbiAgUEg6ICdGaWxpcHBpbmUnLFxuICBQTDogJ1BvbG9uaWEnLFxuICBQVDogJ1BvcnRvZ2FsbG8nLFxuICBSTzogJ1JvbWFuaWEnLFxuICBTSzogJ1Nsb3ZhY2NoaWEnLFxuICBTSTogJ1Nsb3ZlbmlhJyxcbiAgRVM6ICdTcGFnbmEnLFxuICBTRTogJ1N2ZXppYScsXG4gIENIOiAnU3ZpenplcmEnLFxuICBUUjogJ1R1cmNoaWEnLFxuICBHQjogJ1JlZ25vIFVuaXRvJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBHRTogJ0dlb3JnaWEnLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIEtFOiAnS2VueWEnLFxuICBORzogJ05pZ2VyaWEnLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgWkE6ICdTdWRhZnJpY2EnLFxuICBLUjogJ0NvcmVhIGRlbCBTdWQnLFxuICBTRzogJ1NpbmdhcG9yZScsXG4gIFRXOiAnVGFpd2FuJyxcbiAgVUE6ICdVY3JhaW5hJyxcbiAgVVM6ICdTdGF0aSBVbml0aScsXG4gIFZOOiAnVmlldG5hbScsXG4gIEJFOiAnQmVsZ2lvJyxcbiAgQko6ICdCZW5pbicsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHSDogJ0doYW5hJyxcbiAgR1I6ICdHcmVjaWEnLFxuICBHTjogJ0d1aW5lYScsXG4gIE5aOiAnTnVvdmEgWmVsYW5kYScsXG4gIFBFOiAnUGVyw7knLFxuICBQUjogJ1BvcnRvIFJpY28nLFxufTtcblxuLy8gQGtleTogQCNAXCI0MTlcIkAjQCBAc291cmNlOiBAI0BcIkxhdGluIEFtZXJpY2FcIkAjQFxuLy8gQGtleTogQCNAXCJBUlwiQCNAIEBzb3VyY2U6IEAjQFwiQXJnZW50aW5hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQVRcIkAjQCBAc291cmNlOiBAI0BcIkF1c3RyaWFcIkAjQFxuLy8gQGtleTogQCNAXCJCSFwiQCNAIEBzb3VyY2U6IEAjQFwiQmFocmFpblwiQCNAXG4vLyBAa2V5OiBAI0BcIkJSXCJAI0AgQHNvdXJjZTogQCNAXCJCcmF6aWxcIkAjQFxuLy8gQGtleTogQCNAXCJCR1wiQCNAIEBzb3VyY2U6IEAjQFwiQnVsZ2FyaWFcIkAjQFxuLy8gQGtleTogQCNAXCJDQVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FuYWRhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ0xcIkAjQCBAc291cmNlOiBAI0BcIkNoaWxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ05cIkAjQCBAc291cmNlOiBAI0BcIkNoaW5hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSFJcIkAjQCBAc291cmNlOiBAI0BcIkNyb2F0aWFcIkAjQFxuLy8gQGtleTogQCNAXCJDWVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3lwcnVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ1pcIkAjQCBAc291cmNlOiBAI0BcIkN6ZWNoIFJlcHVibGljXCJAI0Bcbi8vIEBrZXk6IEAjQFwiREtcIkAjQCBAc291cmNlOiBAI0BcIkRlbm1hcmtcIkAjQFxuLy8gQGtleTogQCNAXCJET1wiQCNAIEBzb3VyY2U6IEAjQFwiRG9taW5pY2FuIFJlcHVibGljXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRUVcIkAjQCBAc291cmNlOiBAI0BcIkVzdG9uaWFcIkAjQFxuLy8gQGtleTogQCNAXCJGSVwiQCNAIEBzb3VyY2U6IEAjQFwiRmlubGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIkZSXCJAI0AgQHNvdXJjZTogQCNAXCJGcmFuY2VcIkAjQFxuLy8gQGtleTogQCNAXCJERVwiQCNAIEBzb3VyY2U6IEAjQFwiR2VybWFueVwiQCNAXG4vLyBAa2V5OiBAI0BcIkhLXCJAI0AgQHNvdXJjZTogQCNAXCJIb25nIEtvbmdcIkAjQFxuLy8gQGtleTogQCNAXCJIVVwiQCNAIEBzb3VyY2U6IEAjQFwiSHVuZ2FyeVwiQCNAXG4vLyBAa2V5OiBAI0BcIklFXCJAI0AgQHNvdXJjZTogQCNAXCJJcmVsYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSUxcIkAjQCBAc291cmNlOiBAI0BcIklzcmFlbFwiQCNAXG4vLyBAa2V5OiBAI0BcIklOXCJAI0AgQHNvdXJjZTogQCNAXCJJbmRpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIklUXCJAI0AgQHNvdXJjZTogQCNAXCJJdGFseVwiQCNAXG4vLyBAa2V5OiBAI0BcIkpQXCJAI0AgQHNvdXJjZTogQCNAXCJKYXBhblwiQCNAXG4vLyBAa2V5OiBAI0BcIkxWXCJAI0AgQHNvdXJjZTogQCNAXCJMYXR2aWFcIkAjQFxuLy8gQGtleTogQCNAXCJMVFwiQCNAIEBzb3VyY2U6IEAjQFwiTGl0aHVhbmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTFVcIkAjQCBAc291cmNlOiBAI0BcIkx1eGVtYm91cmdcIkAjQFxuLy8gQGtleTogQCNAXCJNWVwiQCNAIEBzb3VyY2U6IEAjQFwiTWFsYXlzaWFcIkAjQFxuLy8gQGtleTogQCNAXCJNWFwiQCNAIEBzb3VyY2U6IEAjQFwiTWV4aWNvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTkxcIkAjQCBAc291cmNlOiBAI0BcIk5ldGhlcmxhbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTk9cIkAjQCBAc291cmNlOiBAI0BcIk5vcndheVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBBXCJAI0AgQHNvdXJjZTogQCNAXCJQYW5hbWFcIkAjQFxuLy8gQGtleTogQCNAXCJQSFwiQCNAIEBzb3VyY2U6IEAjQFwiUGhpbGlwcGluZXNcIkAjQFxuLy8gQGtleTogQCNAXCJQTFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9sYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUFRcIkAjQCBAc291cmNlOiBAI0BcIlBvcnR1Z2FsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUk9cIkAjQCBAc291cmNlOiBAI0BcIlJvbWFuaWFcIkAjQFxuLy8gQGtleTogQCNAXCJTS1wiQCNAIEBzb3VyY2U6IEAjQFwiU2xvdmFraWFcIkAjQFxuLy8gQGtleTogQCNAXCJTSVwiQCNAIEBzb3VyY2U6IEAjQFwiU2xvdmVuaWFcIkAjQFxuLy8gQGtleTogQCNAXCJFU1wiQCNAIEBzb3VyY2U6IEAjQFwiU3BhaW5cIkAjQFxuLy8gQGtleTogQCNAXCJTRVwiQCNAIEBzb3VyY2U6IEAjQFwiU3dlZGVuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ0hcIkAjQCBAc291cmNlOiBAI0BcIlN3aXR6ZXJsYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVFJcIkAjQCBAc291cmNlOiBAI0BcIlR1cmtleVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdCXCJAI0AgQHNvdXJjZTogQCNAXCJVbml0ZWQgS2luZ2RvbVwiQCNAXG4vLyBAa2V5OiBAI0BcIkFVXCJAI0AgQHNvdXJjZTogQCNAXCJBdXN0cmFsaWFcIkAjQFxuLy8gQGtleTogQCNAXCJHRVwiQCNAIEBzb3VyY2U6IEAjQFwiR2VvcmdpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIklEXCJAI0AgQHNvdXJjZTogQCNAXCJJbmRvbmVzaWFcIkAjQFxuLy8gQGtleTogQCNAXCJLRVwiQCNAIEBzb3VyY2U6IEAjQFwiS2VueWFcIkAjQFxuLy8gQGtleTogQCNAXCJOR1wiQCNAIEBzb3VyY2U6IEAjQFwiTmlnZXJpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBLXCJAI0AgQHNvdXJjZTogQCNAXCJQYWtpc3RhblwiQCNAXG4vLyBAa2V5OiBAI0BcIlpBXCJAI0AgQHNvdXJjZTogQCNAXCJTb3V0aCBBZnJpY2FcIkAjQFxuLy8gQGtleTogQCNAXCJLUlwiQCNAIEBzb3VyY2U6IEAjQFwiU291dGggS29yZWFcIkAjQFxuLy8gQGtleTogQCNAXCJTR1wiQCNAIEBzb3VyY2U6IEAjQFwiU2luZ2Fwb3JlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVFdcIkAjQCBAc291cmNlOiBAI0BcIlRhaXdhblwiQCNAXG4vLyBAa2V5OiBAI0BcIlVBXCJAI0AgQHNvdXJjZTogQCNAXCJVa3JhaW5lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVVNcIkAjQCBAc291cmNlOiBAI0BcIlVuaXRlZCBTdGF0ZXNcIkAjQFxuLy8gQGtleTogQCNAXCJWTlwiQCNAIEBzb3VyY2U6IEAjQFwiVmlldG5hbVwiQCNAXG4vLyBAa2V5OiBAI0BcIkJFXCJAI0AgQHNvdXJjZTogQCNAXCJCZWxnaXVtXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQkpcIkAjQCBAc291cmNlOiBAI0BcIkJlbmluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiU1ZcIkAjQCBAc291cmNlOiBAI0BcIkVsIFNhbHZhZG9yXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR0hcIkAjQCBAc291cmNlOiBAI0BcIkdoYW5hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR1JcIkAjQCBAc291cmNlOiBAI0BcIkdyZWVjZVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdOXCJAI0AgQHNvdXJjZTogQCNAXCJHdWluZWFcIkAjQFxuLy8gQGtleTogQCNAXCJOWlwiQCNAIEBzb3VyY2U6IEAjQFwiTmV3IFplYWxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJQRVwiQCNAIEBzb3VyY2U6IEAjQFwiUGVydVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBSXCJAI0AgQHNvdXJjZTogQCNAXCJQdWVydG8gUmljb1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2NvdW50cnlOYW1lcy9pdC1JVC5qcyIsImltcG9ydCBwaG9uZVR5cGVzIGZyb20gJy4uLy4uL2VudW1zL3Bob25lVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwaG9uZVR5cGVzLmJ1c2luZXNzXTogJ1RlbGVmb25vIGF6aWVuZGEnLFxuICBbcGhvbmVUeXBlcy5leHRlbnNpb25dOiAnSW50ZXJubycsXG4gIFtwaG9uZVR5cGVzLmhvbWVdOiAnTnVtZXJvIGNhc2EnLFxuICBbcGhvbmVUeXBlcy5tb2JpbGVdOiAnVGVsZWZvbm8gY2VsbHVsYXJlJyxcbiAgW3Bob25lVHlwZXMucGhvbmVdOiAnVGVsZWZvbm8nLFxuICBbcGhvbmVUeXBlcy51bmtub3duXTogJ1RpcG8gZGkgdGVsZWZvbm8gc2Nvbm9zY2l1dG8nLFxuICBbcGhvbmVUeXBlcy5jb21wYW55XTogJ051bWVybyBhemllbmRhbGUnLFxuICBbcGhvbmVUeXBlcy5kaXJlY3RdOiAnTnVtZXJvIGRpcmV0dG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5idXNpbmVzc11cIkAjQCBAc291cmNlOiBAI0BcIkJ1c2luZXNzIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuZXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiRXh0ZW5zaW9uIE51bWJlclwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmhvbWVdXCJAI0AgQHNvdXJjZTogQCNAXCJIb21lIE51bWJlclwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLm1vYmlsZV1cIkAjQCBAc291cmNlOiBAI0BcIk1vYmlsZSBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLnBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy51bmtub3duXVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93biBQaG9uZSBUeXBlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuY29tcGFueV1cIkAjQCBAc291cmNlOiBAI0BcIkNvbXBhbnkgTnVtYmVyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuZGlyZWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlyZWN0IE51bWJlclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lVHlwZU5hbWVzL2l0LUlULmpzIiwiaW1wb3J0IHBob25lU291cmNlcyBmcm9tICcuLi8uLi9lbnVtcy9waG9uZVNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwaG9uZVNvdXJjZXMuYWNjb3VudF06ICdBY2NvdW50JyxcbiAgW3Bob25lU291cmNlcy5jb250YWN0XTogJ0NvbnRhdHRvJyxcbiAgW3Bob25lU291cmNlcy5sZWFkXTogJ0xlYWQnLFxuICBbcGhvbmVTb3VyY2VzLm9wcG9ydHVuaXR5XTogJ09wcG9ydHVuaXTDoCcsXG4gIFtwaG9uZVNvdXJjZXMuc3lzdGVtVXNlcl06ICdVdGVudGUgZGkgc2lzdGVtYScsXG4gIFtwaG9uZVNvdXJjZXMucmNDb250YWN0XTogJ3ticmFuZH0nLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLmFjY291bnRdXCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5jb250YWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMucmNDb250YWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwie2JyYW5kfVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMubGVhZF1cIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLm9wcG9ydHVuaXR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiT3Bwb3J0dW5pdHlcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLnN5c3RlbVVzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJTeXN0ZW0gVXNlclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lU291cmNlTmFtZXMvaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvOiAnQScsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnSW5zZXJpc2NpIGlsIG5vbWUgbyBpbCBudW1lcm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG9cIkAjQFxuLy8gQGtleTogQCNAXCJlbnRlck5hbWVPck51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgTmFtZSBvciBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjaXBpZW50c0lucHV0L2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIERpcmVjdE51bWJlcjogJ0RpcmV0dG8nLFxuICBNYWluQ29tcGFueU51bWJlcjogJ1ByaW5jaXBhbGUnLFxuICBDb21wYW55TnVtYmVyOiAnU29jaWV0w6AnLFxuICBDb21wYW55RmF4TnVtYmVyOiAnRmF4JyxcbiAgQmxvY2tlZDogJ0Jsb2NjYXRvJyxcbiAgZnJvbTogJ0RhJyxcbiAgQWRkaXRpb25hbENvbXBhbnlOdW1iZXI6ICdBemllbmRhJyxcbiAgRm9yd2FyZGVkQ29tcGFueU51bWJlcjogJ0lub2x0cmF0bycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIkRpcmVjdE51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRGlyZWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiTWFpbkNvbXBhbnlOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIk1haW5cIkAjQFxuLy8gQGtleTogQCNAXCJDb21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ29tcGFueUZheE51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRmF4XCJAI0Bcbi8vIEBrZXk6IEAjQFwiQmxvY2tlZFwiQCNAIEBzb3VyY2U6IEAjQFwiQmxvY2tlZFwiQCNAXG4vLyBAa2V5OiBAI0BcIkFkZGl0aW9uYWxDb21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwiRm9yd2FyZGVkQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yd2FyZGVkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJvbVwiQCNAIEBzb3VyY2U6IEAjQFwiRnJvbVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Gcm9tRmllbGQvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZnJvbTogJ0RhJyxcbiAgdG86ICdBJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdJbW1ldHRpIGlsIG51bWVybyBvIGlsIG5vbWUuLi4nLFxuICB0eXBlTWVzc2FnZTogJ0RpZ2l0YSBpbCBtZXNzYWdnaW8uLi4nLFxuICBzZW5kOiAnSW52aWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJmcm9tXCJAI0AgQHNvdXJjZTogQCNAXCJGcm9tXCJAI0Bcbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW50ZXJOYW1lT3JOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkVudGVyIE51bWJlciBvciBOYW1lLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwidHlwZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlR5cGUgbWVzc2FnZS4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlbmRcIkAjQCBAc291cmNlOiBAI0BcIlNlbmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29tcG9zZVRleHRQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnQ29ubmVzc2lvbmUuLi4nLFxuICBsb2dDYWxsOiAnUmVnaXN0cmEgY2hpYW1hdGEnLFxuICBlZGl0TG9nOiAnTW9kaWZpY2EgcmVnaXN0cm8nLFxuICBzZWxlY3Q6ICdTZWxlemlvbmEgdW4gcmVjb3JkIGNvcnJpc3BvbmRlbnRlJyxcbiAgT25Ib2xkOiAnSW4gYXR0ZXNhJyxcbiAgUmluZ2luZzogJ0NoaWFtYXRhIGluIGNvcnNvJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NoaWFtYXRhIGNvbm5lc3NhJyxcbiAgdW5rbm93blVzZXI6ICdVdGVudGUgc2Nvbm9zY2l1dG8nLFxuICB1bmtub3duTnVtYmVyOiAnQW5vbmltbycsXG4gIHVuYXZhaWxhYmxlOiAnTm9uIGRpc3BvbmliaWxlJyxcbiAgdmlld0RldGFpbHM6ICdWaXN1YWxpenphIGRldHRhZ2xpJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3REaXNwbGF5L2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVNZXNzYWdlOiAnRGlnaXRhIGlsIG1lc3NhZ2dpby4uLicsXG4gIHNlbmQ6ICdJbnZpYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInR5cGVNZXNzYWdlXCJAI0AgQHNvdXJjZTogQCNAXCJUeXBlIG1lc3NhZ2UuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJzZW5kXCJAI0AgQHNvdXJjZTogQCNAXCJTZW5kXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5ld0NvbmZlcmVuY2U6ICdOdW92YSBjb25mZXJlbnphJyxcbiAgZGlhbEluTnVtYmVyOiAnTnVtZXJvIGNvbiBhY2Nlc3NvIGVzdGVybm8nLFxuICBob3N0OiAnTW9kZXJhdG9yZScsXG4gIHBhcnRpY2lwYW50czogJ1BhcnRlY2lwYW50aScsXG4gIGludGVybmF0aW9uYWxQYXJ0aWNpcGFudHM6ICdQYXJ0ZWNpcGFudGkgaW50ZXJuYXppb25hbGknLFxuICBpbnRlcm5hdGlvbmFsTnVtYmVyc0hlYWRlcjogJ1NlbGV6aW9uYSBudW1lcmkgY29uIGFjY2Vzc28gZXN0ZXJubyBpbnRlcm5hemlvbmFsaScsXG4gIHNlYXJjaDogJ0NlcmNhLi4uJyxcbiAgaW52aXRlV2l0aFRleHQ6ICdJbnZpdGEgY29uIHRlc3RvJyxcbiAgaW52aXRlVGV4dDogJ0FjY2VkaSBhbGxhIGNvbmZlcmVuemEge2JyYW5kTmFtZX0uXFxyXFxuXFxuTnVtZXJpIGRpIGFjY2Vzc286IHtmb3JtYXR0ZWREaWFsSW5OdW1iZXJ9IFxcclxcbnthZGRpdGlvbmFsTnVtYmVyc1NlY3Rpb259IFxcclxcbkFjY2Vzc28gcGFydGVjaXBhbnRlOiB7cGFydGljaXBhbnRDb2RlfSBcXHJcXG5cXG5TZXJ2ZSB1biBudW1lcm8gZGkgYWNjZXNzbyBpbnRlcm5hemlvbmFsZT8gVmlzaXRhIHtkaWFsSW5OdW1iZXJzTGlua3N9IFxcclxcblxcblF1ZXN0YSBjb25mZXJlbnphIHRlbGVmb25pY2Egw6ggb2ZmZXJ0YSBkYWwgc2Vydml6aW8gZGkgY29uZmVyZW56YSB7YnJhbmROYW1lfS4nLFxuICBob3N0QWNjZXNzOiAnQWNjZXNzbyBtb2RlcmF0b3JlJyxcbiAgcGFydGljaXBhbnRzQWNjZXNzOiAnQWNjZXNzbyBwYXJ0ZWNpcGFudGknLFxuICBhZGRpbmFsRGlhbEluTnVtYmVyczogJ051bWVyaSBkaSBhY2Nlc3NvIGFnZ2l1bnRpdmknLFxuICBzZWxlY3ROdW1iZXJzOiAnU2VsZXppb25hIG51bWVyaScsXG4gIGVuYWJsZUpvaW5CZWZvcmVIb3N0OiAnQ29uc2VudGkgaW5ncmVzc28gcHJpbWEgZGVsIG1vZGVyYXRvcmUnLFxuICBjb25mZXJlbmNlQ29tbWFuZHM6ICdDb21hbmRpIGNvbmZlcmVuemEnLFxuICBpbnZpdGVXaXRoR0NhbGVuZGFyOiAnSW52aXRhIGNvbiBHb29nbGUgQ2FsZW5kYXInLFxuICBqb2luQXNIb3N0OiAnQXZ2aWEgY29uZmVyZW56YScsXG4gIGludGVybmF0aW9uYWxOdW1iZXI6ICdOdW1lcmkgZGkgYWNjZXNzbyBpbnRlcm5hemlvbmFsaTonLFxufTtcblxuLy8gQGtleTogQCNAXCJuZXdDb25mZXJlbmNlXCJAI0AgQHNvdXJjZTogQCNAXCJOZXcgQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcImRpYWxJbk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbC1pbiBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJob3N0QWNjZXNzXCJAI0AgQHNvdXJjZTogQCNAXCJIb3N0IEFjY2Vzc1wiQCNAXG4vLyBAa2V5OiBAI0BcInBhcnRpY2lwYW50c0FjY2Vzc1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFydGljaXBhbnRzIEFjY2Vzc1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZGluYWxEaWFsSW5OdW1iZXJzXCJAI0AgQHNvdXJjZTogQCNAXCJBZGRpdGlvbmFsIERpYWwtaW4gTnVtYmVyc1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlbGVjdE51bWJlcnNcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBOdW1iZXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW5hYmxlSm9pbkJlZm9yZUhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkVuYWJsZSBqb2luIGJlZm9yZSBIb3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29uZmVyZW5jZUNvbW1hbmRzXCJAI0AgQHNvdXJjZTogQCNAXCJDb25mZXJlbmNlIENvbW1hbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW52aXRlV2l0aEdDYWxlbmRhclwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXRlIHdpdGggR29vZ2xlIENhbGVuZGFyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW52aXRlV2l0aFRleHRcIkAjQCBAc291cmNlOiBAI0BcIkludml0ZSB3aXRoIFRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJqb2luQXNIb3N0XCJAI0AgQHNvdXJjZTogQCNAXCJMYXVuY2ggQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcImludGVybmF0aW9uYWxOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkludGVybmF0aW9uYWwgRGlhbC1pbiBOdW1iZXJzOlwiQCNAXG4vLyBAa2V5OiBAI0BcImludml0ZVRleHRcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBqb2luIHRoZSB7YnJhbmROYW1lfSBjb25mZXJlbmNlLlxcblxcbkRpYWwtSW4gTnVtYmVyczoge2Zvcm1hdHRlZERpYWxJbk51bWJlcn0gXFxue2FkZGl0aW9uYWxOdW1iZXJzU2VjdGlvbn0gXFxuUGFydGljaXBhbnQgQWNjZXNzOiB7cGFydGljaXBhbnRDb2RlfSBcXG5cXG5OZWVkIGFuIGludGVybmF0aW9uYWwgZGlhbC1pbiBwaG9uZSBudW1iZXI/IFBsZWFzZSB2aXNpdCB7ZGlhbEluTnVtYmVyc0xpbmtzfSBcXG5cXG5UaGlzIGNvbmZlcmVuY2UgY2FsbCBpcyBicm91Z2h0IHRvIHlvdSBieSB7YnJhbmROYW1lfSBDb25mZXJlbmNpbmcuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0NvbWFuZGkgY29uZmVyZW56YScsXG4gIHN0YXJTaGFycDJUaXRsZTogJ051bWVybyBjaGlhbWFudGknLFxuICBzdGFyU2hhcnAyQm9keTogJ1RpZW5pIGlsIGNvbnRvIGRpIHF1YW50ZSBwZXJzb25lIHBhcnRlY2lwYW5vIGFsbGEgY2hpYW1hdGEnLFxuICBzdGFyU2hhcnAzVGl0bGU6ICdBYmJhbmRvbmEgY29uZmVyZW56YScsXG4gIHN0YXJTaGFycDNCb2R5OiAnQ29uc2VudGUgYWwgbW9kZXJhdG9yZSBkaSByaWFnZ2FuY2lhcmUgZSBjaGl1ZGVyZSBsYSBjaGlhbWF0YScsXG4gIHN0YXJTaGFycDRUaXRsZTogJ01lbnUnLFxuICBzdGFyU2hhcnA0Qm9keTogJ0NvbnNlbnRlIGRpIGFzY29sdGFyZSBsXFwnZWxlbmNvIGRlaSBjb21hbmRpIGRpIGNvbXBvc2l6aW9uZSBhIHRvbmknLFxuICBzdGFyU2hhcnA1VGl0bGU6ICdJbXBvc3RhIG1vZGFsaXTDoCBkaSBhc2NvbHRvJyxcbiAgc3RhclNoYXJwNUJvZHk6ICcxIHByZXNzaW9uZTogRGlzYXR0aXZhIGF1ZGlvIGNoaWFtYW50aSAtIEkgY2hpYW1hbnRpIHBvc3Nvbm8gcmlhdHRpdmFyZSBsXFwnYXVkaW8gY29uICosICMsIDZcXHJcXG4yIHByZXNzaW9uaTogRGlzYXR0aXZhIGF1ZGlvIGNoaWFtYW50aSAtIFNvbG8gYXNjb2x0by4gTmVzc3VuYSBvcHppb25lIGRpIHJpYXR0aXZhemlvbmUgYXVkaW9cXHJcXG4zIHByZXNzaW9uaTogUmlhdHRpdmEgYXVkaW8gY2hpYW1hbnRpIC0gUmlhcHJlIGxhIGxpbmVhJyxcbiAgc3RhclNoYXJwNlRpdGxlOiAnRGlzYXR0aXZhIGF1ZGlvIGxpbmVhIG1vZGVyYXRvcmUnLFxuICBzdGFyU2hhcnA2Qm9keTogJ1ByZW1pIHVuYSB2b2x0YSBwZXIgRElTQVRUSVZBUkUgTFxcJ0FVRElPXFxyXFxuUHJlbWkgbnVvdmFtZW50ZSBwZXIgUklBVFRJVkFSRSBMXFwnQVVESU8nLFxuICBzdGFyU2hhcnA3VGl0bGU6ICdQcm90ZWdnaSBjaGlhbWF0YScsXG4gIHN0YXJTaGFycDdCb2R5OiAnUHJlbWkgdW5hIHZvbHRhIHBlciBCTE9DQ0FSRSB0dXR0aSBpIGNoaWFtYW50aVxcclxcblByZW1pIG51b3ZhbWVudGUgcGVyIEFQUklSRSBsYSBjaGlhbWF0YScsXG4gIHN0YXJTaGFycDhUaXRsZTogJ1JpY2V2aSB1biBzZWduYWxlIGFjdXN0aWNvIHF1YW5kbyBsZSBwZXJzb25lIGVudHJhbm8gbyBlc2Nvbm8gZGFsbGEgY2hpYW1hdGEnLFxuICBzdGFyU2hhcnA4Qm9keTogJzEgcHJlc3Npb25lOiBEaXNhdHRpdmEgbFxcJ2F1ZGlvXFxyXFxuMiBwcmVzc2lvbmk6IFRvbm8gZW50cmF0YSBhdHRpdm8sIHRvbm8gdXNjaXRhIGluYXR0aXZvXFxyXFxuMyBwcmVzc2lvbmk6IFRvbm8gZW50cmF0YSBpbmF0dGl2bywgdG9ubyB1c2NpdGEgYXR0aXZvXFxyXFxuNCBwcmVzc2lvbmk6IEF0dGl2YSBsXFwnYXVkaW8nLFxuICBzdGFyOVRpdGxlOiAnUmVnaXN0cmEgbGEgY29uZmVyZW56YScsXG4gIHN0YXI5Qm9keTogJ1ByZW1pIHVuYSB2b2x0YSBwZXIgQVZWSUFSRSBsYSByZWdpc3RyYXppb25lXFxyXFxuUHJlbWkgbnVvdmFtZW50ZSBwZXIgSU5URVJST01QRVJFIGxhIHJlZ2lzdHJhemlvbmUnLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29uZmVyZW5jZSBDb21tYW5kc1wiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDJUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbGVyIENvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwMkJvZHlcIkAjQCBAc291cmNlOiBAI0BcIktlZXAgdHJhY2sgb2YgaG93IG1hbnkgcGVvcGxlIGFyZSBvbiB0aGUgY2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDNUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTGVhdmUgQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDNCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJMZXRzIHRoZSBob3N0IGhhbmcgdXAgYW5kIGVuZCB0aGUgY2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDRUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTWVudVwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDRCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJMaXN0ZW4gdG8gdGhlIGxpc3Qgb2YgdG91Y2h0b25lIGNvbW1hbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNVRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJTZXQgTGlzdGVuaW5nIE1vZGVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNUJvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIDF4OiBNdXRlIGNhbGxlcnMgLSBDYWxsZXJzIGNhbiB1bm11dGUgd2l0aCAgKiwgIywgNlxcblByZXNzIDJ4OiBNdXRlIGNhbGxlcnMgLSBMaXN0ZW4gb25seS4gTm8gdW5tdXRpbmcgb3B0aW9uXFxuUHJlc3MgM3g6IFVubXV0ZSBjYWxsZXJzIC0gT3BlbnMgdGhlIGxpbmUgYWdhaW5cIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA2VGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIk11dGUgSG9zdCBMaW5lXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNkJvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIG9uY2UgdG8gTVVURVxcblByZXNzIGFnYWluIHRvIFVOTVVURVwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDdUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU2VjdXJlIHRoZSBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwN0JvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIG9uY2UgdG8gQkxPQ0sgYWxsIGNhbGxlcnNcXG5QcmVzcyBhZ2FpbiB0byBPUEVOIHRoZSBjYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwOFRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJIZWFyIHNvdW5kIHdoZW4gcGVvcGxlIEVudGVyIG9yIEV4aXQgY2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDhCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJQcmVzcyAxeDogVHVybnMgT0ZGIHNvdW5kXFxuUHJlc3MgMng6IEVudGVyIHRvbmUgaXMgT04gRXhpdCB0b25lIGlzIE9GRlxcblByZXNzIDN4OiBFbnRlciB0b25lIGlzIE9GRiBFeGl0IHRvbmUgaXMgT05cXG5QcmVzcyA0eDogVHVybnMgT04gc291bmRcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyOVRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNvcmQgeW91ciBjb25mZXJlbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhcjlCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJQcmVzcyBvbmNlIHRvIFNUQVJUIHJlY29yZGluZ1xcblByZXNzIGFnYWluIHRvIFNUT1AgcmVjb3JkaW5nXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VDb21tYW5kcy9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY2NvdW50OiAnQWNjb3VudCcsXG4gIGNvbnRhY3Q6ICdDb250YXR0bycsXG4gIGxlYWQ6ICdMZWFkJyxcbiAgY2hvb3NlRW50aXR5OiAnU2VsZXppb25hIGlsIHRpcG8gZGkgZW50aXTDoCcsXG4gIGNyZWF0ZTogJ0NyZWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJhY2NvdW50XCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29udGFjdFwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcImxlYWRcIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJjaG9vc2VFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgZW50aXR5IHR5cGVcIkAjQFxuLy8gQGtleTogQCNAXCJjcmVhdGVcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdXJlVG9EZWxldGVWb2ljZU1haWw6ICdFbGltaW5hcmUgcXVlc3RvIG1lc3NhZ2dpbyB2b2NhbGU/JyxcbiAgZG9Ob3RBc2tBZ2FpbjogJ05vbiBjaGllZGVybWVsbyBwacO5Jyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic3VyZVRvRGVsZXRlVm9pY2VNYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdm9pY2VtYWlsP1wiQCNAXG4vLyBAa2V5OiBAI0BcImRvTm90QXNrQWdhaW5cIkAjQCBAc291cmNlOiBAI0BcIkRvbid0IGFzayBtZSBhZ2FpblwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3Rpb25NZW51TGlzdC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkb3dubG9hZDogJ1NjYXJpY2EnLFxuICBwbGF5OiAnUmlwcm9kdWNpJyxcbiAgcGF1c2U6ICdQYXVzYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImRvd25sb2FkXCJAI0AgQHNvdXJjZTogQCNAXCJEb3dubG9hZFwiQCNAXG4vLyBAa2V5OiBAI0BcInBsYXlcIkAjQCBAc291cmNlOiBAI0BcIlBsYXlcIkAjQFxuLy8gQGtleTogQCNAXCJwYXVzZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGF1c2VcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVm9pY2VtYWlsUGxheWVyL2kxOG4vaXQtSVQuanMiLCJpbXBvcnQgbWVzc2FnZVR5cGVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2VudW1zL21lc3NhZ2VUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkTG9nOiAnUmVnaXN0cm8nLFxuICBlZGl0TG9nOiAnTW9kaWZpY2EgcmVnaXN0cm8nLFxuICB2aWV3RGV0YWlsczogJ1Zpc3VhbGl6emEgZGV0dGFnbGknLFxuICBhZGRFbnRpdHk6ICdDcmVhIG51b3ZvJyxcbiAgY2FsbDogJ0NoaWFtYScsXG4gIGNvbnZlcnNhdGlvbjogJ0NvbnZlcnNhemlvbmUnLFxuICBncm91cENvbnZlcnNhdGlvbjogJ0NvbnZlcnNhemlvbmUgZGkgZ3J1cHBvJyxcbiAgdGV4dDogJ1NNUycsXG4gIHZvaWNlTWVzc2FnZTogJ01lc3NhZ2dpbyB2b2NhbGUnLFxuICBbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF06ICdTZWdyZXRlcmlhIHRlbGVmb25pY2EnLFxuICBtYXJrOiAnQ29udHJhc3NlZ25hIGNvbWUgbm9uIGxldHRvJyxcbiAgdW5tYXJrOiAnQ29udHJhc3NlZ25hIGNvbWUgbGV0dG8nLFxuICBkZWxldGU6ICdFbGltaW5hJyxcbiAgZmF4U2VudDogJ0ZheCBpbnZpYXRvJyxcbiAgZmF4UmVjZWl2ZWQ6ICdGYXggcmljZXZ1dG8nLFxuICBwYWdlczogJ3BhZ2luZScsXG4gIHByZXZpZXc6ICdWaXN1YWxpenphJyxcbiAgZG93bmxvYWQ6ICdTY2FyaWNhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJlZGl0TG9nXCJAI0AgQHNvdXJjZTogQCNAXCJFZGl0IExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInZpZXdEZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV3IERldGFpbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZSBOZXdcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwidGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbnZlcnNhdGlvblwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udmVyc2F0aW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZ3JvdXBDb252ZXJzYXRpb25cIkAjQCBAc291cmNlOiBAI0BcIkdyb3VwIENvbnZlcnNhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaWNlTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2UgbWVzc2FnZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudm9pY2VNYWlsXVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2UgTWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1hcmtcIkAjQCBAc291cmNlOiBAI0BcIk1hcmsgYXMgVW5yZWFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5tYXJrXCJAI0AgQHNvdXJjZTogQCNAXCJNYXJrIGFzIFJlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJkZWxldGVcIkAjQCBAc291cmNlOiBAI0BcIkRlbGV0ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImZheFNlbnRcIkAjQCBAc291cmNlOiBAI0BcIkZheCBzZW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmF4UmVjZWl2ZWRcIkAjQCBAc291cmNlOiBAI0BcIkZheCByZWNlaXZlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhZ2VzXCJAI0AgQHNvdXJjZTogQCNAXCJwYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcInByZXZpZXdcIkAjQCBAc291cmNlOiBAI0BcIlZpZXdcIkAjQFxuLy8gQGtleTogQCNAXCJkb3dubG9hZFwiQCNAIEBzb3VyY2U6IEAjQFwiRG93bmxvYWRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZUl0ZW0vaTE4bi9pdC1JVC5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ01lc3NhZ2dpJyxcbiAgc2VhcmNoOiAnQ2VyY2EuLi4nLFxuICBub01lc3NhZ2VzOiAnTmVzc3VuIG1lc3NhZ2dpbycsXG4gIG5vU2VhcmNoUmVzdWx0czogJ05lc3N1biByZWNvcmQgY29ycmlzcG9uZGVudGUnLFxuICBjb21wb3NlVGV4dDogJ0NvbXBvbmkgbWVzc2FnZ2lvJyxcbiAgW21lc3NhZ2VUeXBlcy5hbGxdOiAnVHV0dGknLFxuICBbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF06ICdWb2NlJyxcbiAgW21lc3NhZ2VUeXBlcy50ZXh0XTogJ1NNUycsXG4gIFttZXNzYWdlVHlwZXMuZmF4XTogJ0ZheCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJNZXNzYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlYXJjaFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VhcmNoLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29tcG9zZVRleHRcIkAjQCBAc291cmNlOiBAI0BcIkNvbXBvc2UgVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcIm5vTWVzc2FnZXNcIkAjQCBAc291cmNlOiBAI0BcIk5vIE1lc3NhZ2VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibm9TZWFyY2hSZXN1bHRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBtYXRjaGluZyByZWNvcmRzIGZvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy5hbGxdXCJAI0AgQHNvdXJjZTogQCNAXCJBbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy50ZXh0XVwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMuZmF4XVwiQCNAIEBzb3VyY2U6IEAjQFwiRmF4XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VzUGFuZWwvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ0Nvbm5lc3Npb25lLi4uJyxcbiAgbG9nQ2FsbDogJ1JlZ2lzdHJhIGNoaWFtYXRhJyxcbiAgZWRpdExvZzogJ01vZGlmaWNhIHJlZ2lzdHJvJyxcbiAgc2VsZWN0OiAnU2VsZXppb25hIHVuIHJlY29yZCBjb3JyaXNwb25kZW50ZScsXG4gIE9uSG9sZDogJ0luIGF0dGVzYScsXG4gIFJpbmdpbmc6ICdTcXVpbGxvJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NoaWFtYXRhIGNvbm5lc3NhJyxcbiAgdW5rbm93blVzZXI6ICdVdGVudGUgc2Nvbm9zY2l1dG8nLFxuICB1bmtub3duTnVtYmVyOiAnQW5vbmltbycsXG4gIHVuYXZhaWxhYmxlOiAnTm9uIGRpc3BvbmliaWxlJyxcbiAgdmlld0RldGFpbHM6ICdWaXN1YWxpenphIGRldHRhZ2xpJyxcbiAgYWRkRW50aXR5OiAnQ3JlYSBudW92bycsXG4gIGFkZExvZzogJ1JlZ2lzdHJvJyxcbiAgdGV4dDogJ1NNUycsXG4gIGNhbGw6ICdDaGlhbWEnLFxuICBhZGRDb250YWN0OiAnQWdnaXVuZ2kgY29udGF0dG8nLFxuICBtaXNzZWRDYWxsOiAnUGVyc2UnLFxuICBpbmJvdW5kQ2FsbDogJ0luIGVudHJhdGEnLFxuICBvdXRib3VuZENhbGw6ICdJbiB1c2NpdGEnLFxuICBmcm9tOiAnRGEnLFxuICB0bzogJ0EnLFxuICBoYW5ndXA6ICdSaWFnZ2FuY2lhJyxcbiAgYWNjZXB0OiAnQWNjZXR0YScsXG4gIHRvVm9pY2VtYWlsOiAnSW52aWEgYWxsYSBzZWdyZXRlcmlhIHRlbGVmb25pY2EnLFxufTtcblxuLy8gQGtleTogQCNAXCJsb2dnaW5nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dnaW5nLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwibG9nQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTG9nIENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJlZGl0TG9nXCJAI0AgQHNvdXJjZTogQCNAXCJFZGl0IExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlbGVjdFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiT25Ib2xkXCJAI0AgQHNvdXJjZTogQCNAXCJPbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUmluZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ2luZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIkNhbGxDb25uZWN0ZWRcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgQ29ubmVjdGVkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93blVzZXJcIkAjQCBAc291cmNlOiBAI0BcIlVua25vd24gVXNlclwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25OdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkFub255bW91c1wiQCNAXG4vLyBAa2V5OiBAI0BcInVuYXZhaWxhYmxlXCJAI0AgQHNvdXJjZTogQCNAXCJVbmF2YWlsYWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcInZpZXdEZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV3IERldGFpbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZSBOZXdcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkxvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkQ29udGFjdFwiQCNAIEBzb3VyY2U6IEAjQFwiQWRkIENvbnRhY3RcIkAjQFxuLy8gQGtleTogQCNAXCJtaXNzZWRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJNaXNzZWRcIkAjQFxuLy8gQGtleTogQCNAXCJpbmJvdW5kQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiSW5ib3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm91dGJvdW5kQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiT3V0Ym91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJmcm9tXCJAI0AgQHNvdXJjZTogQCNAXCJGcm9tXCJAI0Bcbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaGFuZ3VwXCJAI0AgQHNvdXJjZTogQCNAXCJIYW5ndXBcIkAjQFxuLy8gQGtleTogQCNAXCJhY2NlcHRcIkAjQCBAc291cmNlOiBAI0BcIkFjY2VwdFwiQCNAXG4vLyBAa2V5OiBAI0BcInRvVm9pY2VtYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJTZW5kIHRvIFZvaWNlbWFpbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsSXRlbS9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0FjdGl2ZUNhbGxzOiAnTmVzc3VuYSBjaGlhbWF0YSBhdHRpdmEnLFxuICBjdXJyZW50Q2FsbDogJ0NoaWFtYXRhIGNvcnJlbnRlJyxcbiAgcmluZ0NhbGw6ICdTcXVpbGxvIGNoaWFtYXRhJyxcbiAgb25Ib2xkQ2FsbDogJ0NoaWFtYXRhIGluIGF0dGVzYScsXG4gIG90aGVyRGV2aWNlQ2FsbDogJ0NoaWFtYXRlIGluIGNvcnNvIHN1Z2xpIGFsdHJpIG1pZWkgZGlzcG9zaXRpdmknLFxufTtcblxuLy8gQGtleTogQCNAXCJub0FjdGl2ZUNhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBhY3RpdmUgY2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJjdXJyZW50Q2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VycmVudCBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmcgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uSG9sZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgb24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm90aGVyRGV2aWNlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiT25nb2luZyBjYWxscyBvbiBteSBvdGhlciBkZXZpY2VzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxzUGFuZWwvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ0Nvbm5lc3Npb25lLi4uJyxcbiAgbG9nQ2FsbDogJ1JlZ2lzdHJhIGNoaWFtYXRhJyxcbiAgZWRpdExvZzogJ01vZGlmaWNhIHJlZ2lzdHJvJyxcbiAgc2VsZWN0OiAnU2VsZXppb25hIHVuIHJlY29yZCBjb3JyaXNwb25kZW50ZScsXG4gIE9uSG9sZDogJ0luIGF0dGVzYScsXG4gIFJpbmdpbmc6ICdDaGlhbWF0YSBpbiBjb3JzbycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDaGlhbWF0YSBjb25uZXNzYScsXG4gIHVua25vd25Vc2VyOiAnVXRlbnRlIHNjb25vc2NpdXRvJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub25pbW8nLFxuICB1bmF2YWlsYWJsZTogJ05vbiBkaXNwb25pYmlsZScsXG4gIHZpZXdEZXRhaWxzOiAnVmlzdWFsaXp6YSBkZXR0YWdsaScsXG4gIGFkZEVudGl0eTogJ0NyZWEgbnVvdm8nLFxuICBhZGRMb2c6ICdSZWdpc3RybycsXG4gIHRleHQ6ICdTTVMnLFxuICBjYWxsOiAnQ2hpYW1hJyxcbiAgbWlzc2VkQ2FsbDogJ1BlcnNlJyxcbiAgaW5ib3VuZENhbGw6ICdJbiBlbnRyYXRhJyxcbiAgb3V0Ym91bmRDYWxsOiAnSW4gdXNjaXRhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1pc3NlZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk1pc3NlZFwiQCNAXG4vLyBAa2V5OiBAI0BcImluYm91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJJbmJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0Ym91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJPdXRib3VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0FjdGl2ZUNhbGxzOiAnTmVzc3VuYSBjaGlhbWF0YSBhdHRpdmEnLFxuICBub1JlY29yZHM6ICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9BY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gYWN0aXZlIGNhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZXN1bHRzIGZvdW5kLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0Nyb25vbG9naWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiSGlzdG9yeVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0lub2x0cmEnLFxuICBjYW5jZWw6ICdBbm51bGxhJyxcbiAgY3VzdG9tTnVtYmVyOiAnTnVtZXJvIHBlcnNvbmFsaXp6YXRvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZm9yd2FyZFwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yd2FyZFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbmNlbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FuY2VsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY3VzdG9tTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJDdXN0b20gbnVtYmVyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZvcndhcmRGb3JtL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNhbmNlbDogJ0FubnVsbGEnLFxuICByZXBseTogJ1Jpc3BvbmRpJyxcbiAgb25NeVdheTogJ1N0byBhcnJpdmFuZG8nLFxuICBjdXN0b21NZXNzYWdlOiAnTWVzc2FnZ2lvIHBlcnNvbmFsaXp6YXRvJyxcbiAgY2FsbE1lQmFja0luOiAnUmljaGlhbWFtaSB0cmEnLFxuICB3aWxsQ2FsbFlvdUJhY2tJbjogJ1RpIHJpY2hpYW1vIHRyYScsXG4gIG1pbjogJ21pbi4nLFxuICBob3VyczogJ29yZScsXG4gIGRheXM6ICdnaW9ybmknLFxufTtcblxuLy8gQGtleTogQCNAXCJjYW5jZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbmNlbFwiQCNAXG4vLyBAa2V5OiBAI0BcInJlcGx5XCJAI0AgQHNvdXJjZTogQCNAXCJSZXBseVwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uTXlXYXlcIkAjQCBAc291cmNlOiBAI0BcIk9uIG15IHdheVwiQCNAXG4vLyBAa2V5OiBAI0BcImN1c3RvbU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIkN1c3RvbSBNZXNzYWdlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbE1lQmFja0luXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIG1lIGJhY2sgaW5cIkAjQFxuLy8gQGtleTogQCNAXCJ3aWxsQ2FsbFlvdUJhY2tJblwiQCNAIEBzb3VyY2U6IEAjQFwiV2lsbCBjYWxsIHlvdSBiYWNrIGluXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWluXCJAI0AgQHNvdXJjZTogQCNAXCJtaW4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG91cnNcIkAjQCBAc291cmNlOiBAI0BcImhvdXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGF5c1wiQCNAIEBzb3VyY2U6IEAjQFwiZGF5c1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZXBseVdpdGhNZXNzYWdlL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvcndhcmQ6ICdJbm9sdHJhJyxcbiAgcmVwbHk6ICdSaXNwb25kaScsXG4gIGlnbm9yZTogJ0lnbm9yYScsXG4gIHRvVm9pY2VtYWlsOiAnQWxsYSBzZWdyZXRlcmlhJyxcbiAgYW5zd2VyOiAnUmlzcG9uZGknLFxuICBhbnN3ZXJBbmRFbmQ6ICdSaXNwb25kaSBlIHRlcm1pbmEnLFxuICBhbnN3ZXJBbmRIb2xkOiAnUmlzcG9uZGkgZSBhdHRlc2EnLFxufTtcblxuLy8gQGtleTogQCNAXCJmb3J3YXJkXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVwbHlcIkAjQCBAc291cmNlOiBAI0BcIlJlcGx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiaWdub3JlXCJAI0AgQHNvdXJjZTogQCNAXCJJZ25vcmVcIkAjQFxuLy8gQGtleTogQCNAXCJ0b1ZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVG8gVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5zd2VyXCJAI0AgQHNvdXJjZTogQCNAXCJBbnN3ZXJcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJBbmRFbmRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEVuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImFuc3dlckFuZEhvbGRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEhvbGRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvSW5jb21pbmdDYWxsUGFkL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVua25vd246ICdTY29ub3NjaXV0bycsXG4gIGFub255bW91czogJ0Fub25pbW8nLFxuICBhY3RpdmVDYWxsOiAnQ2hpYW1hdGEgYXR0aXZhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5rbm93blwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93blwiQCNAXG4vLyBAa2V5OiBAI0BcImFub255bW91c1wiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvSW5jb21pbmdDYWxsUGFnZS9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBoaWRlOiAnTmFzY29uZGknLFxuICBlbmQ6ICdGaW5lJyxcbiAga2V5cGFkOiAnVGFzdGllcmlubycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImhpZGVcIkAjQCBAc291cmNlOiBAI0BcIkhpZGVcIkAjQFxuLy8gQGtleTogQCNAXCJlbmRcIkAjQCBAc291cmNlOiBAI0BcIkVuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImtleXBhZFwiQCNAIEBzb3VyY2U6IEAjQFwiS2V5cGFkXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxEaWFsUGFkL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVubXV0ZTogJ1JpYXR0aXZhIGF1ZGlvJyxcbiAgbXV0ZTogJ05vIGF1ZGlvJyxcbiAga2V5cGFkOiAnVGFzdGllcmlubycsXG4gIGhvbGQ6ICdBdHRlc2EnLFxuICBvbkhvbGQ6ICdJbiBhdHRlc2EnLFxuICBwYXJrOiAnUGFyY2hlZ2dpYScsXG4gIHN0b3BSZWNvcmQ6ICdJbnRlcnJvbXBpJyxcbiAgcmVjb3JkOiAnUmVnaXN0cmEnLFxuICBhZGQ6ICdBZ2dpdW5naScsXG4gIHRyYW5zZmVyOiAnVHJhc2ZlcmlzY2knLFxuICBmbGlwOiAnQ29tbXV0YScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInVubXV0ZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5tdXRlXCJAI0Bcbi8vIEBrZXk6IEAjQFwibXV0ZVwiQCNAIEBzb3VyY2U6IEAjQFwiTXV0ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImtleXBhZFwiQCNAIEBzb3VyY2U6IEAjQFwiS2V5cGFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhcmtcIkAjQCBAc291cmNlOiBAI0BcIlBhcmtcIkAjQFxuLy8gQGtleTogQCNAXCJzdG9wUmVjb3JkXCJAI0AgQHNvdXJjZTogQCNAXCJTdG9wXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjb3JkXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRcIkAjQCBAc291cmNlOiBAI0BcIkFkZFwiQCNAXG4vLyBAa2V5OiBAI0BcInRyYW5zZmVyXCJAI0AgQHNvdXJjZTogQCNAXCJUcmFuc2ZlclwiQCNAXG4vLyBAa2V5OiBAI0BcImZsaXBcIkAjQCBAc291cmNlOiBAI0BcIkZsaXBcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbFBhZC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBIb21lOiAnQ2FzYScsXG4gIE1vYmlsZTogJ0NlbGx1bGFyZScsXG4gIFdvcms6ICdMYXZvcm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJIb21lXCJAI0AgQHNvdXJjZTogQCNAXCJIb21lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTW9iaWxlXCJAI0AgQHNvdXJjZTogQCNAXCJNb2JpbGVcIkAjQFxuLy8gQGtleTogQCNAXCJXb3JrXCJAI0AgQHNvdXJjZTogQCNAXCJXb3JrXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JhZGlvQnRuR3JvdXAvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZmxpcEhlYWRlcjogJ0NvbW11dGEgY2hpYW1hdGEgc3UuLi4nLFxuICBmbGlwOiAnQ29tbXV0YScsXG4gIGNvbXBsZXRlOiAnQ29tcGxldGEgY29tbXV0YXppb25lJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZmxpcEhlYWRlclwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcCBDYWxsIHRvLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmxpcFwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbXBsZXRlXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wbGV0ZSBGbGlwXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ0E6JyxcbiAgdHJhbnNmZXJUbzogJ1RyYXNmZXJpc2NpIGEnLFxuICBibGluZFRyYW5zZmVyOiAnVHJhc2ZlcmlzY2knLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0luc2VyaXNjaSBudW1lcm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG86XCJAI0Bcbi8vIEBrZXk6IEAjQFwidHJhbnNmZXJUb1wiQCNAIEBzb3VyY2U6IEAjQFwiVHJhbnNmZXIgdG9cIkAjQFxuLy8gQGtleTogQCNAXCJibGluZFRyYW5zZmVyXCJAI0AgQHNvdXJjZTogQCNAXCJUcmFuc2ZlclwiQCNAXG4vLyBAa2V5OiBAI0BcImVudGVyTmFtZU9yTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJFbnRlciBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVHJhbnNmZXJQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmtub3duOiAnU2Nvbm9zY2l1dG8nLFxuICBhbm9ueW1vdXM6ICdBbm9uaW1vJyxcbiAgYWN0aXZlQ2FsbHM6ICdDaGlhbWF0ZSBhdHRpdmUnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmtub3duXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJhY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxDdHJsUGFnZS9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVDYWxsOiAnQ2hpYW1hdGEgYXR0aXZhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvQ2FsbEJhZGdlQ29udGFpbmVyL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vQ29udGFjdHM6ICdOZXNzdW4gcmVjb3JkIHRyb3ZhdG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9Db250YWN0c1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjb3JkcyBmb3VuZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdExpc3QvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2VhcmNoUGxhY2Vob2xkZXI6ICdDZXJjYS4uLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInNlYXJjaFBsYWNlaG9sZGVyXCJAI0AgQHNvdXJjZTogQCNAXCJTZWFyY2guLi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdHNWaWV3L2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFsbDogJ1R1dHRpJyxcbiAgY29tcGFueTogJ0F6aWVuZGEnLFxuICBwZXJzb25hbDogJ1BlcnNvbmFsZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29tcGFueVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcInBlcnNvbmFsXCJAI0AgQHNvdXJjZTogQCNAXCJQZXJzb25hbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vaXQtSVQuanMiLCJpbXBvcnQgcHJlc2VuY2VTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9wcmVzZW5jZVN0YXR1cyc7XG5pbXBvcnQgZG5kU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBleHRlbnNpb25MYWJlbDogJ0ludC4nLFxuICBkaXJlY3RMYWJlbDogJ0RpcmV0dG8nLFxuICBlbWFpbExhYmVsOiAnRS1tYWlsJyxcbiAgY2FsbDogJ0NoaWFtYXRhJyxcbiAgdGV4dDogJ1NNUycsXG4gIFtwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdOiAnRGlzcG9uaWJpbGUnLFxuICBbcHJlc2VuY2VTdGF0dXMuYnVzeV06ICdPY2N1cGF0bycsXG4gIFtwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXTogJ0ludmlzaWJpbGUnLFxuICBbZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdOiAnTm9uIGRpc3R1cmJhcmUnLFxufTtcblxuLy8gQGtleTogQCNAXCJleHRlbnNpb25MYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiRXh0LlwiQCNAXG4vLyBAa2V5OiBAI0BcImRpcmVjdExhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJEaXJlY3RcIkAjQFxuLy8gQGtleTogQCNAXCJlbWFpbExhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJFbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV1cIkAjQCBAc291cmNlOiBAI0BcIkF2YWlsYWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXVwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXNpYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmJ1c3ldXCJAI0AgQHNvdXJjZTogQCNAXCJCdXN5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2RuZFN0YXR1cy5kb05vdEFjY2VwdEFueUNhbGxzXVwiQCNAIEBzb3VyY2U6IEAjQFwiRG8gbm90IERpc3R1cmJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERldGFpbHMvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFjdERldGFpbHM6ICdEZXR0YWdsaSBjb250YXR0bycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImNvbnRhY3REZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJDb250YWN0IERldGFpbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERldGFpbHNWaWV3L2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnQXVkaW8nLFxuICBkaWFsQnV0dG9uVm9sdW1lOiAnVm9sdW1lIHB1bHNhbnRlIGRpIGNoaWFtYXRhJyxcbiAgcmluZ3RvbmVWb2x1bWU6ICdWb2x1bWUgc3VvbmVyaWEnLFxuICBjYWxsVm9sdW1lOiAnVm9sdW1lIGNoaWFtYXRhJyxcbiAgbXV0ZUNhbGxzOiAnRGlzYXR0aXZhIGF1ZGlvIGNoaWFtYXRlJyxcbiAgb3V0cHV0RGV2aWNlOiAnRGlzcG9zaXRpdm8gZGkgdXNjaXRhJyxcbiAgaW5wdXREZXZpY2U6ICdEaXNwb3NpdGl2byBkaSBpbmdyZXNzbycsXG4gIG1pY1Blcm1pc3Npb246ICdBdXRvcml6emF6aW9uZSBtaWNyb2Zvbm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW9cIkAjQFxuLy8gQGtleTogQCNAXCJkaWFsQnV0dG9uVm9sdW1lXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsIEJ1dHRvbiBWb2x1bWVcIkAjQFxuLy8gQGtleTogQCNAXCJyaW5ndG9uZVZvbHVtZVwiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ3RvbmUgVm9sdW1lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFZvbHVtZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBWb2x1bWVcIkAjQFxuLy8gQGtleTogQCNAXCJtdXRlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIk11dGUgQ2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRwdXREZXZpY2VcIkAjQCBAc291cmNlOiBAI0BcIk91dHB1dCBEZXZpY2VcIkAjQFxuLy8gQGtleTogQCNAXCJpbnB1dERldmljZVwiQCNAIEBzb3VyY2U6IEAjQFwiSW5wdXQgRGV2aWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWljUGVybWlzc2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiTWljcm9waG9uZSBQZXJtaXNzaW9uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0b3BpYzogJ0FyZ29tZW50bycsXG4gIHdoZW46ICdRdWFuZG8nLFxuICBkdXJhdGlvbjogJ0R1cmF0YScsXG4gIHJlY3VycmluZ01lZXRpbmc6ICdSaXVuaW9uZSByaWNvcnJlbnRlJyxcbiAgcmVjdXJyaW5nRGVzY3JpYmU6ICdSaWNvcmRhIGRpIHZlcmlmaWNhcmUgbGEgcmljb3JyZW56YSBvIGxhIHJpcGV0aXppb25lIGRlbGxcXCdpbnZpdG8gc3VsIGNhbGVuZGFyaW8gYWkgdHVvaSBwYXJ0ZWNpcGFudGkuJyxcbiAgdmlkZW86ICdWaWRlbycsXG4gIHZpZGVvRGVzY3JpYmU6ICdRdWFuZG8gc2kgYWNjZWRlIGEgdW5hIHJpdW5pb25lJyxcbiAgaG9zdDogJ01vZGVyYXRvcmUnLFxuICBwYXJ0aWNpcGFudHM6ICdQYXJ0ZWNpcGFudGUnLFxuICBhdWRpb09wdGlvbnM6ICdPcHppb25pIGF1ZGlvJyxcbiAgdm9JUE9ubHk6ICdTb2xvIFZvSVAnLFxuICBib3RoOiAnRW50cmFtYmknLFxuICBtZWV0aW5nT3B0aW9uczogJ09wemlvbmkgcml1bmlvbmUnLFxuICByZXF1aXJlUGFzc3dvcmQ6ICdSaWNoaWVkaSBwYXNzd29yZCByaXVuaW9uZScsXG4gIHBhc3N3b3JkOiAnUGFzc3dvcmQnLFxuICBlbmFibGVKb2luQmVmb3JlSG9zdDogJ0NvbnNlbnRpIGluZ3Jlc3NvIHByaW1hIGRlbCBtb2RlcmF0b3JlJyxcbiAgdGVsZXBob255T25seTogJ1NvbG8gdGVsZWZvbmlhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidG9waWNcIkAjQCBAc291cmNlOiBAI0BcIlRvcGljXCJAI0Bcbi8vIEBrZXk6IEAjQFwid2hlblwiQCNAIEBzb3VyY2U6IEAjQFwiV2hlblwiQCNAXG4vLyBAa2V5OiBAI0BcImR1cmF0aW9uXCJAI0AgQHNvdXJjZTogQCNAXCJEdXJhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInJlY3VycmluZ01lZXRpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJlY3VycmluZyBNZWV0aW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjdXJyaW5nRGVzY3JpYmVcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSByZW1lbWJlciB0byBjaGVjayByZWN1cnJlbmNlIG9yIHJlcGVhdCBpbiB5b3VyIGNhbGVuZGFyIGludml0YXRpb24gdG8geW91ciBhdHRlbmRlZXMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlkZW9cIkAjQCBAc291cmNlOiBAI0BcIlZpZGVvXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlkZW9EZXNjcmliZVwiQCNAIEBzb3VyY2U6IEAjQFwiV2hlbiBqb2luaW5nIGEgbWVldGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkhvc3RcIkAjQFxuLy8gQGtleTogQCNAXCJwYXJ0aWNpcGFudHNcIkAjQCBAc291cmNlOiBAI0BcIlBhcnRpY2lwYW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXVkaW9PcHRpb25zXCJAI0AgQHNvdXJjZTogQCNAXCJBdWRpbyBPcHRpb25zXCJAI0Bcbi8vIEBrZXk6IEAjQFwidm9JUE9ubHlcIkAjQCBAc291cmNlOiBAI0BcIlZvSVAgT25seVwiQCNAXG4vLyBAa2V5OiBAI0BcImJvdGhcIkAjQCBAc291cmNlOiBAI0BcIkJvdGhcIkAjQFxuLy8gQGtleTogQCNAXCJtZWV0aW5nT3B0aW9uc1wiQCNAIEBzb3VyY2U6IEAjQFwiTWVldGluZyBPcHRpb25zXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVxdWlyZVBhc3N3b3JkXCJAI0AgQHNvdXJjZTogQCNAXCJSZXF1aXJlIG1lZXRpbmcgcGFzc3dvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJwYXNzd29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUGFzc3dvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJlbmFibGVKb2luQmVmb3JlSG9zdFwiQCNAIEBzb3VyY2U6IEAjQFwiRW5hYmxlIGpvaW4gYmVmb3JlIGhvc3RcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZWxlcGhvbnlPbmx5XCJAI0AgQHNvdXJjZTogQCNAXCJUZWxlcGhvbnkgT25seVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZWV0aW5nUGFuZWwvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhcnQ6ICdWaXNpdGEgZ3VpZGF0YSByYXBpZGEnLFxuICBza2lwOiAnU2FsdGEnLFxuICBuZXh0OiAnQXZhbnRpJyxcbiAgZmluaXNoOiAnVGVybWluYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInN0YXJ0XCJAI0AgQHNvdXJjZTogQCNAXCJUYWtlIGEgUXVpY2sgVG91clwiQCNAXG4vLyBAa2V5OiBAI0BcInNraXBcIkAjQCBAc291cmNlOiBAI0BcIlNraXBcIkAjQFxuLy8gQGtleTogQCNAXCJuZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJOZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmluaXNoXCJAI0AgQHNvdXJjZTogQCNAXCJGaW5pc2hcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVXNlckd1aWRlL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGdvb2dsZTogJ0dvb2dsZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImdvb2dsZVwiQCNAIEBzb3VyY2U6IEAjQFwiR29vZ2xlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2NoZWR1bGU6ICdQcm9ncmFtbWF6aW9uZScsXG4gIHByb21wdDogJ0F1dG9yaXp6YSBSaW5nQ2VudHJhbCBhZCBhY2NlZGVyZSBhbGxlIGluZm9ybWF6aW9uaSBkZWwgdHVvIGFjY291bnQuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic2NoZWR1bGVcIkAjQCBAc291cmNlOiBAI0BcIlNjaGVkdWxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwicHJvbXB0XCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgYXV0aG9yaXplIFJpbmdDZW50cmFsIHRvIGFjY2VzcyB5b3VyIGFjY291bnQgaW5mb3JtYXRpb24uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lZXRpbmdTY2hlZHVsZUJ1dHRvbi9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbnZpdGVXaXRoQ2FsZW5kYXI6ICdJbnZpdGEgY29uIEdvb2dsZSBDYWxlbmRhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImludml0ZVdpdGhDYWxlbmRhclwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXRlIHdpdGggR29vZ2xlIENhbGVuZGFyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01lZXRpbmdJbnZpdGVCdXR0b24vaTE4bi9pdC1JVC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW52aXRlV2l0aENhbGVuZGFyOiAnSW52aXRhIGNvbiBHb29nbGUgQ2FsZW5kYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJpbnZpdGVXaXRoQ2FsZW5kYXJcIkAjQCBAc291cmNlOiBAI0BcIkludml0ZSB3aXRoIEdvb2dsZSBDYWxlbmRhclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGhvcml6ZTogJ0F1dG9yaXp6YScsXG4gIHByb21wdDogJ0F1dG9yaXp6YSB7YnJhbmR9IGFkIGFjY2VkZXJlIGFsbGUgaW5mb3JtYXppb25pIGRlbCB0dW8gYWNjb3VudCBHb29nbGUuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYXV0aG9yaXplXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRob3JpemVcIkAjQFxuLy8gQGtleTogQCNAXCJwcm9tcHRcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBhdXRob3JpemUge2JyYW5kfSB0byBhY2Nlc3MgeW91ciBHb29nbGUgYWNjb3VudCBpbmZvcm1hdGlvbi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL2l0LUlULmpzIiwiaW1wb3J0IGF1dGhvcml6YXRpb25FcnJvciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFthdXRob3JpemF0aW9uRXJyb3IuYWNjb3VudExvZ2dlZE91dF06ICdBYmJpYW1vIG5vdGF0byBjaGUgdGkgc2VpIGRpc2Nvbm5lc3NvIGRhbCB0dW8gYWNjb3VudCBHb29nbGUge2FjY291bnRFbWFpbH0uIFBlciBjb250aW51YXJlLCB7Y2xpY2tIZXJlTGlua30gcGVyIGFjY2VkZXJlIGFsIHR1byBhY2NvdW50IEdvb2dsZS4nLFxuICBjbGlja0hlcmU6ICdmYWkgY2xpYyBxdWknLFxuICBbYXV0aG9yaXphdGlvbkVycm9yLm5vdEF1dGhvcml6ZWRdOiAnQWJiaWFtbyBub3RhdG8gY2hlIG5vbiBoYWkgYXV0b3JpenphdG8ge2JyYW5kfSBwZXIgR29vZ2xlIGFkIGFjY2VkZXJlIGFsIHR1byBhY2NvdW50IEdvb2dsZS4gUGVyIGF1dG9yaXp6YXJlLCB7Y2xpY2tIZXJlTGlua30uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2F1dGhvcml6YXRpb25FcnJvci5hY2NvdW50TG9nZ2VkT3V0XVwiQCNAIEBzb3VyY2U6IEAjQFwiV2Ugbm90aWNlZCB5b3UgaGF2ZSBsb2dnZWQgb3V0IHlvdXIgR29vZ2xlIGFjY291bnQge2FjY291bnRFbWFpbH0uIFRvIGNvbnRpbnVlIHBsZWFzZSB7Y2xpY2tIZXJlTGlua30gdG8gbG9naW4geW91ciBHb29nbGUgYWNjb3VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja0hlcmVcIkAjQCBAc291cmNlOiBAI0BcImNsaWNrIGhlcmVcIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aG9yaXphdGlvbkVycm9yLm5vdEF1dGhvcml6ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJXZSBub3RpY2VkIHlvdSBoYXZlbid0IGF1dGhvcml6ZWQge2JyYW5kfSBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIEdvb2dsZSBhY2NvdW50LiBQbGVhc2Uge2NsaWNrSGVyZUxpbmt9IHRvIGF1dGhvcml6ZS5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbkFsZXJ0L2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vUmVjb3JkczogJ05lc3N1biByZWNvcmQgY29ycmlzcG9uZGVudGUuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZWNlbnQgcmVjb3JkcyBmb3VuZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjZW50QWN0aXZpdHlNZXNzYWdlcy9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdOZXNzdW4gcmVjb3JkIGNvcnJpc3BvbmRlbnRlLicsXG4gIGluQm91bmQ6ICdJbiBlbnRyYXRhJyxcbiAgb3V0Qm91bmQ6ICdJbiB1c2NpdGEnLFxuICBtaXNzZWQ6ICdDaGlhbWF0YSBwZXJzYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vUmVjb3Jkc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjZW50IHJlY29yZHMgZm91bmQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5Cb3VuZFwiQCNAIEBzb3VyY2U6IEAjQFwiSW5ib3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm91dEJvdW5kXCJAI0AgQHNvdXJjZTogQCNAXCJPdXRib3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1pc3NlZFwiQCNAIEBzb3VyY2U6IEAjQFwiTWlzc2VkIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjZW50QWN0aXZpdHlDYWxscy9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWNlbnRBY3Rpdml0aWVzOiAnQXR0aXZpdMOgIHJlY2VudGknLFxuICB0ZXh0OiAnU01TJyxcbiAgZmF4OiAnRmF4JyxcbiAgdm9pY2VtYWlsOiAnTWVzc2FnZ2lvIHZvY2FsZScsXG4gIGNhbGw6ICdDaGlhbWEnLFxuICBnbWFpbDogJ0dtYWlsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwicmVjZW50QWN0aXZpdGllc1wiQCNAIEBzb3VyY2U6IEAjQFwiUmVjZW50IEFjdGl2aXRpZXNcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmF4XCJAI0AgQHNvdXJjZTogQCNAXCJGYXhcIkAjQFxuLy8gQGtleTogQCNAXCJ2b2ljZW1haWxcIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJnbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiR21haWxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTmVzc3VuIHJlY29yZCBjb3JyaXNwb25kZW50ZS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJub1JlY29yZHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIHJlY2VudCByZWNvcmRzIGZvdW5kLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaWFscGFkTGFiZWw6ICdUYXN0aWVyYSBkZWwgdGVsZWZvbm8nLFxuICBjYWxsc0xhYmVsOiAnQ2hpYW1hdGUnLFxuICBoaXN0b3J5TGFiZWw6ICdDcm9ub2xvZ2lhJyxcbiAgbWVzc2FnZXNMYWJlbDogJ01lc3NhZ2dpJyxcbiAgbW9yZU1lbnVMYWJlbDogJ01lbnUgQWx0cm8nLFxuICBjb250YWN0c0xhYmVsOiAnQ29udGF0dGknLFxuICBtZWV0aW5nTGFiZWw6ICdQcm9ncmFtbWEgcml1bmlvbmUnLFxuICBjb25mZXJlbmNlTGFiZWw6ICdQcm9ncmFtbWEgY29uZmVyZW56YScsXG4gIGhhbmdvdXRzTGFiZWw6ICdBdnZpYSBIYW5nb3V0cycsXG4gIGhhbmdvdXRzVGl0bGU6ICdBdnZpYSBIYW5nb3V0cyBjb24gaWwgc2Vydml6aW8gZGkgY29uZmVyZW56YScsXG4gIHNldHRpbmdzTGFiZWw6ICdJbXBvc3RhemlvbmknLFxufTtcblxuLy8gQGtleTogQCNAXCJkaWFscGFkTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIkRpYWwgUGFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbHNMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJoaXN0b3J5TGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIkhpc3RvcnlcIkAjQFxuLy8gQGtleTogQCNAXCJtZXNzYWdlc0xhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJNZXNzYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcIm1vcmVNZW51TGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIk1vcmUgTWVudVwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbnRhY3RzTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIkNvbnRhY3RzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWVldGluZ0xhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJTY2hlZHVsZSBNZWV0aW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29uZmVyZW5jZUxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJTY2hlZHVsZSBDb25mZXJlbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaGFuZ291dHNMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiU3RhcnQgSGFuZ291dHNcIkAjQFxuLy8gQGtleTogQCNAXCJoYW5nb3V0c1RpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJTdGFydCBIYW5nb3V0cyB3aXRoIENvbmZlcmVuY2luZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInNldHRpbmdzTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9mZmxpbmVNb2RlOiAnTW9kYWxpdMOgIG9mZmxpbmUnLFxufTtcblxuLy8gQGtleTogQCNAXCJvZmZsaW5lTW9kZVwiQCNAIEBzb3VyY2U6IEAjQFwiT2ZmbGluZSBNb2RlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL09mZmxpbmVNb2RlQmFkZ2UvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgd2VicGhvbmVVbmF2YWlsYWJsZTogJ1RlbGVmb25vIHdlYiBub24gZGlzcG9uaWJpbGUnLFxufTtcblxuLy8gQGtleTogQCNAXCJ3ZWJwaG9uZVVuYXZhaWxhYmxlXCJAI0AgQHNvdXJjZTogQCNAXCJXZWIgUGhvbmUgVW5hdmFpbGFibGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvV2VicGhvbmVCYWRnZS9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBldWxhOiAnQ29udHJhdHRvIGRpIGxpY2VuemEgZGVsbFxcJ3V0ZW50ZSBmaW5hbGUnLFxuICBzZXJ2aWNlVGVybXM6ICdUZXJtaW5pIGRpIHNlcnZpemlvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZXVsYVwiQCNAIEBzb3VyY2U6IEAjQFwiRW5kIFVzZXIgTGljZW5zZSBBZ3JlZW1lbnRcIkAjQFxuLy8gQGtleTogQCNAXCJzZXJ2aWNlVGVybXNcIkAjQCBAc291cmNlOiBAI0BcIlNlcnZpY2UgVGVybXNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRXVsYS9pMThuL2l0LUlULmpzIiwiaW1wb3J0IHByZXNlbmNlU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvcHJlc2VuY2VTdGF0dXMnO1xuaW1wb3J0IGRuZFN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV06ICdEaXNwb25pYmlsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXN5XTogJ09jY3VwYXRvJyxcbiAgW3ByZXNlbmNlU3RhdHVzLm9mZmxpbmVdOiAnSW52aXNpYmlsZScsXG4gIFtkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc106ICdOb24gZGlzdHVyYmFyZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdXCJAI0AgQHNvdXJjZTogQCNAXCJBdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMuYnVzeV1cIkAjQCBAc291cmNlOiBAI0BcIkJ1c3lcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMub2ZmbGluZV1cIkAjQCBAc291cmNlOiBAI0BcIkludmlzaWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc11cIkAjQCBAc291cmNlOiBAI0BcIkRvIG5vdCBEaXN0dXJiXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1ByZXNlbmNlSXRlbS9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0dXM6ICdTdGF0bycsXG4gIGFjY2VwdFF1ZXVlQ2FsbHM6ICdBY2NldHRhIGNoaWFtYXRlIGluIGNvZGEnLFxufTtcblxuLy8gQGtleTogQCNAXCJzdGF0dXNcIkAjQCBAc291cmNlOiBAI0BcIlN0YXR1c1wiQCNAXG4vLyBAa2V5OiBAI0BcImFjY2VwdFF1ZXVlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIkFjY2VwdCBjYWxsIHF1ZXVlIGNhbGxzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1ByZXNlbmNlU2V0dGluZ1NlY3Rpb24vaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW46ICdJbmdsZXNlJyxcbiAgamE6ICdHaWFwcG9uZXNlJyxcbiAgZnI6ICdGcmFuY2VzZScsXG4gIGRlOiAnRGV1dHNjaCcsXG4gIGVzOiAnU3BhZ25vbG8nLFxuICBpdDogJ0l0YWxpYW5vJyxcbiAgcHQ6ICdQb3J0b2doZXNlJyxcbn07XHJcblxuLy8gQGtleTogQCNAXCJlblwiQCNAIEBzb3VyY2U6IEAjQFwiRW5nbGlzaFwiQCNAXG4vLyBAa2V5OiBAI0BcImphXCJAI0AgQHNvdXJjZTogQCNAXCJKYXBhbmVzZVwiQCNAXG4vLyBAa2V5OiBAI0BcImZyXCJAI0AgQHNvdXJjZTogQCNAXCJGcmVuY2hcIkAjQFxuLy8gQGtleTogQCNAXCJkZVwiQCNAIEBzb3VyY2U6IEAjQFwiRGV1dHNjaFwiQCNAXG4vLyBAa2V5OiBAI0BcImVzXCJAI0AgQHNvdXJjZTogQCNAXCJTcGFuaXNoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaXRcIkAjQCBAc291cmNlOiBAI0BcIkl0YWxpYW5cIkAjQFxuLy8gQGtleTogQCNAXCJwdFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9ydHVndWVzZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Mb2NhbGVQaWNrZXIvaTE4bi9pdC1JVC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVnaW9uOiAnUmVnaW9uZScsXG4gIGNhbGxpbmc6ICdDaGlhbWF0YScsXG4gIGxvZ291dDogJ0VzY2knLFxuICB2ZXJzaW9uOiAnVmVyc2lvbmUnLFxuICBzZXR0aW5nczogJ0ltcG9zdGF6aW9uaScsXG4gIGNsaWNrVG9EaWFsOiAnRmFpIGNsaWMgcGVyIGNvbXBvcnJlJyxcbiAgYXV0b0NyZWF0ZUxvZzogJ0NyZWEgYXV0b21hdGljYW1lbnRlIHJlZ2lzdHJvIGNoaWFtYXRlJyxcbiAgY2xpY2tUb1NNUzogJ0ZhaSBjbGljIHBlciBpbnZpYXJlIHVuIFNNUycsXG4gIGNsaWNrVG9EaWFsU01TOiAnRmFpIGNsaWMgcGVyIGNvbXBvcnJlL2ludmlhcmUgdW4gU01TJyxcbiAgYXV0b0NyZWF0ZVNNU0xvZzogJ0NyZWEgYXV0b21hdGljYW1lbnRlIHJlZ2lzdHJvIFNNUycsXG4gIGF1dG9Mb2dDYWxsczogJ1JlZ2lzdHJhIGF1dG9tYXRpY2FtZW50ZSBsZSBjaGlhbWF0ZScsXG4gIGF1dG9Mb2dTTVM6ICdSZWdpc3RyYSBhdXRvbWF0aWNhbWVudGUgZ2xpIFNNUycsXG4gIGF1ZGlvOiAnQXVkaW8nLFxuICBsYW5ndWFnZTogJ0xpbmd1YScsXG4gIGZlZWRiYWNrOiAnRmVlZGJhY2snLFxuICB1c2VyR3VpZGU6ICdOb3ZpdMOgJyxcbn07XG5cblxuLy8gQGtleTogQCNAXCJyZWdpb25cIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxpbmdcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJsb2dvdXRcIkAjQCBAc291cmNlOiBAI0BcIkxvZ291dFwiQCNAXG4vLyBAa2V5OiBAI0BcInZlcnNpb25cIkAjQCBAc291cmNlOiBAI0BcIlZlcnNpb25cIkAjQFxuLy8gQGtleTogQCNAXCJzZXR0aW5nc1wiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3NcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvRGlhbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gRGlhbFwiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9DcmVhdGVMb2dcIkAjQCBAc291cmNlOiBAI0BcIkF1dG8tY3JlYXRlIENhbGwgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0b0NyZWF0ZVNNU0xvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0by1jcmVhdGUgU01TIExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9Mb2dDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0byBsb2cgY2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRvTG9nU01TXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRvIGxvZyBTTVNcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvU01TXCJAI0AgQHNvdXJjZTogQCNAXCJDbGljayB0byBTTVNcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvRGlhbFNNU1wiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gRGlhbC9TTVNcIkAjQFxuLy8gQGtleTogQCNAXCJhdWRpb1wiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW9cIkAjQFxuLy8gQGtleTogQCNAXCJsYW5ndWFnZVwiQCNAIEBzb3VyY2U6IEAjQFwiTGFuZ3VhZ2VcIkAjQFxuLy8gQGtleTogQCNAXCJmZWVkYmFja1wiQCNAIEBzb3VyY2U6IEAjQFwiRmVlZGJhY2tcIkAjQFxuLy8gQGtleTogQCNAXCJ1c2VyR3VpZGVcIkAjQCBAc291cmNlOiBAI0BcIldoYXQncyBOZXdcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvU2V0dGluZ3NQYW5lbC9pMThuL2l0LUlULmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmF1dGhvcml6ZWQ6ICdBdXRvcml6emEnLFxuICBhdXRob3JpemVkOiAnQW5udWxsYSBhdXRvcml6emF6aW9uZScsXG4gIHVuYXV0aG9yaXplZFRpdGxlOiAnQWNjb3VudCBhdXRvcml6emF0bycsXG4gIHRvb2x0aXA6ICdIYWkgYXV0b3JpenphdG8gUmluZ0NlbnRyYWwgcGVyIEdvb2dsZSBhZCBhY2NlZGVyZSBhbCB0dW8gYWNjb3VudCAnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmF1dGhvcml6ZWRcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImF1dGhvcml6ZWRcIkAjQCBAc291cmNlOiBAI0BcIlVuYXV0aG9yaXplXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdXRob3JpemVkVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZWQgQWNjb3VudFwiQCNAXG4vLyBAa2V5OiBAI0BcInRvb2x0aXBcIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIGF1dGhvcml6ZWQgUmluZ0NlbnRyYWwgZm9yIEdvb2dsZSB0byBhY2Nlc3MgeW91ciBhY2NvdW50IFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vaXQtSVQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFkZE1lZXRpbmc6ICdBZ2dpdW5naSByaXVuaW9uZScsXG4gIGFkZE1lZXRpbmdUaXRsZTogJ0FnZ2l1bmdpIHJpdW5pb25lIHticmFuZH0nLFxuICBtZWV0aW5nU2V0dGluZ3NUaXRsZTogJ3ticmFuZH0gTWVldGluZ3MgLSBJbXBvc3RhemlvbmknLFxuICB3aGVuOiAnUXVhbmRvJyxcbiAgcmVjdXJyaW5nTWVldGluZzogJ1JpdW5pb25lIHJpY29ycmVudGUnLFxuICByZWN1cnJpbmdNZWV0aW5nUHJvbXB0OiAnUmljb3JkYSBkaSB2ZXJpZmljYXJlIGxhIHJpY29ycmVuemEgbyBsYSByaXBldGl6aW9uZSBkZWxsXFwnaW52aXRvIHN1bCBjYWxlbmRhcmlvIGFpIHR1b2kgcGFydGVjaXBhbnRpLicsXG4gIHZpZGVvOiAnVmlkZW8gKHF1YW5kbyBzaSBhY2NlZGUgYSB1bmEgcml1bmlvbmUpJyxcbiAgaG9zdDogJ01vZGVyYXRvcmU6JyxcbiAgb246ICdzw6wnLFxuICBvZmY6ICdubycsXG4gIHBhcnRpY2lwYW50OiAnUGFydGVjaXBhbnRlOicsXG4gIGF1ZGlvT3B0aW9uczogJ09wemlvbmkgYXVkaW8nLFxuICB0ZWxlcGhvbmU6ICdTb2xvIHRlbGVmb25pYScsXG4gIHZvaXA6ICdTb2xvIFZvSVAnLFxuICBib3RoOiAnRW50cmFtYmknLFxuICBtZWV0aW5nT3B0aW9uczogJ09wemlvbmkgcml1bmlvbmUnLFxuICByZXF1aXJlUGFzc3dvcmQ6ICdSaWNoaWVkaSBwYXNzd29yZCByaXVuaW9uZScsXG4gIGpvaW5CZWZvcmVIb3N0OiAnQ29uc2VudGkgaW5ncmVzc28gcHJpbWEgZGVsIG1vZGVyYXRvcmUnLFxuICBkb05vdFNob3dBZ2FpbjogJ1NhbHZhIGUgbm9uIG1vc3RyYXJlIHBpw7knLFxuICBzY2hlZHVsZTogJ1Byb2dyYW1tYXppb25lJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWRkTWVldGluZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQWRkIE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRNZWV0aW5nVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkFkZCB7YnJhbmR9IE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJtZWV0aW5nU2V0dGluZ3NUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwie2JyYW5kfSBNZWV0aW5ncyAtIFNldHRpbmdzXCJAI0Bcbi8vIEBrZXk6IEAjQFwid2hlblwiQCNAIEBzb3VyY2U6IEAjQFwiV2hlblwiQCNAXG4vLyBAa2V5OiBAI0BcInJlY3VycmluZ01lZXRpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJlY3VycmluZyBNZWV0aW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjdXJyaW5nTWVldGluZ1Byb21wdFwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHJlbWVtYmVyIHRvIGNoZWNrIHJlY3VycmVuY2Ugb3IgcmVwZWF0IGluIHlvdXIgY2FsZW5kYXIgaW52aXRhdGlvbiB0byB5b3VyIGF0dGVuZGVlcy5cIkAjQFxuLy8gQGtleTogQCNAXCJ2aWRlb1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlkZW8od2hlbiBqb2luaW5nIGEgbWVldGluZylcIkAjQFxuLy8gQGtleTogQCNAXCJob3N0XCJAI0AgQHNvdXJjZTogQCNAXCJIb3N0OlwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uXCJAI0AgQHNvdXJjZTogQCNAXCJvblwiQCNAXG4vLyBAa2V5OiBAI0BcIm9mZlwiQCNAIEBzb3VyY2U6IEAjQFwib2ZmXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFydGljaXBhbnRcIkAjQCBAc291cmNlOiBAI0BcIlBhcnRpY2lwYW50OlwiQCNAXG4vLyBAa2V5OiBAI0BcImF1ZGlvT3B0aW9uc1wiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW8gT3B0aW9uc1wiQCNAXG4vLyBAa2V5OiBAI0BcInRlbGVwaG9uZVwiQCNAIEBzb3VyY2U6IEAjQFwiVGVsZXBob255IE9ubHlcIkAjQFxuLy8gQGtleTogQCNAXCJ2b2lwXCJAI0AgQHNvdXJjZTogQCNAXCJWb0lQIE9ubHlcIkAjQFxuLy8gQGtleTogQCNAXCJib3RoXCJAI0AgQHNvdXJjZTogQCNAXCJCb3RoXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWVldGluZ09wdGlvbnNcIkAjQCBAc291cmNlOiBAI0BcIk1lZXRpbmcgT3B0aW9uc1wiQCNAXG4vLyBAa2V5OiBAI0BcInJlcXVpcmVQYXNzd29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVxdWlyZSBtZWV0aW5nIHBhc3N3b3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiam9pbkJlZm9yZUhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkVuYWJsZSBqb2luIGJlZm9yZSBob3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZG9Ob3RTaG93QWdhaW5cIkAjQCBAc291cmNlOiBAI0BcIlNhdmUgYW5kIGRvIG5vdCBzaG93IGFnYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2NoZWR1bGVcIkAjQCBAc291cmNlOiBAI0BcIlNjaGVkdWxlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9pMThuL2l0LUlULmpzIiwiaW1wb3J0IG1lc3NhZ2VUeXBlcyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9lbnVtcy9tZXNzYWdlVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluY29taW5nQ2FsbDogJ0NoaWFtYXRhIGluIGVudHJhdGEgZGE6JyxcbiAgYW5zd2VyOiAnUmlzcG9uZGknLFxuICBpZ25vcmU6ICdJZ25vcmEnLFxuICBpbmJvdW5kTWVzc2FnZTogJ051b3ZvIHttZXNzYWdlVHlwZX0gZGEge2Zyb219JyxcbiAgW21lc3NhZ2VUeXBlcy5mYXhdOiAnZmF4JyxcbiAgW21lc3NhZ2VUeXBlcy52b2ljZU1haWxdOiAnbWVzc2FnZ2lvIHZvY2FsZScsXG4gIFttZXNzYWdlVHlwZXMudGV4dF06ICdtZXNzYWdnaW8gZGkgdGVzdG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJpbmNvbWluZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluY29taW5nIENhbGwgRnJvbTpcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlclwiQCNAXG4vLyBAa2V5OiBAI0BcImlnbm9yZVwiQCNAIEBzb3VyY2U6IEAjQFwiSWdub3JlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZE1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIk5ldyB7bWVzc2FnZVR5cGV9IGZyb20ge2Zyb219XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzQ2FsbGVyXCJAI0AgQHNvdXJjZTogQCNAXCJhbm9ueW1vdXMgcGVyc29uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy5mYXhdXCJAI0AgQHNvdXJjZTogQCNAXCJmYXhcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcInZvaWNlbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudGV4dF1cIkAjQCBAc291cmNlOiBAI0BcInRleHQgbWVzc2FnZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL2l0LUlULmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICdidXNpbmVzcycsXHJcbiAgJ2V4dGVuc2lvbicsXHJcbiAgJ2hvbWUnLFxyXG4gICdtb2JpbGUnLFxyXG4gICdwaG9uZScsXHJcbiAgJ3Vua25vd24nLFxyXG4gICdjb21wYW55JyxcclxuICAnZGlyZWN0JyxcclxuXSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlbnVtcy9waG9uZVR5cGVzLmpzIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSAnLi4vbGliL0hhc2hNYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xyXG4gIGFsbDogJ0FsbCcsXHJcbiAgZmF4OiAnRmF4JyxcclxuICBzbXM6ICdTTVMnLFxyXG4gIHZvaWNlTWFpbDogJ1ZvaWNlTWFpbCcsXHJcbiAgcGFnZXI6ICdQYWdlcicsXHJcbiAgdGV4dDogJ1RleHQnLFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVudW1zL21lc3NhZ2VUeXBlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc29mdHBob25lJywgLy8gZGVza3RvcFxuICAnbXlwaG9uZScsIC8vIHJpbmdvdXQgYnJhbmRpbmcgcmMuLlxuICAnb3RoZXJwaG9uZScsIC8vIHJpbmdvdXRcbiAgJ2N1c3RvbXBob25lJywgLy8gcmluZ291dFxuICAnYnJvd3NlcicsIC8vIHdlYnBob25lXG5dLCAnY2FsbGluZ09wdGlvbnMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucy5qcyIsImltcG9ydCBIYXNoTWFwIGZyb20gJy4uLy4uL2xpYi9IYXNoTWFwJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xuICB0YWtlQWxsQ2FsbHM6ICdUYWtlQWxsQ2FsbHMnLFxuICBkb05vdEFjY2VwdEFueUNhbGxzOiAnRG9Ob3RBY2NlcHRBbnlDYWxscycsXG4gIGRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzOiAnRG9Ob3RBY2NlcHREZXBhcnRtZW50Q2FsbHMnLFxuICB0YWtlRGVwYXJ0bWVudENhbGxzT25seTogJ1Rha2VEZXBhcnRtZW50Q2FsbHNPbmx5Jyxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdub1RvTnVtYmVyJyxcbiAgJ25vQXJlYUNvZGUnLFxuICAnc3BlY2lhbE51bWJlcicsXG4gICdjb25uZWN0RmFpbGVkJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vUmluZ291dEVuYWJsZScsXG5dLCAnY2FsbEVycm9ycycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQ2FsbC9jYWxsRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzZW5kU3VjY2VzcycsXG4gICdzZW5kRXJyb3InLFxuICAnbnVtYmVyVmFsaWRhdGVFcnJvcicsXG4gICd0ZXh0RW1wdHknLFxuICAndGV4dFRvb0xvbmcnLFxuICAnbm9QZXJtaXNzaW9uJyxcbiAgJ3NlbmRlckVtcHR5JyxcbiAgJ25vVG9OdW1iZXInLFxuICAncmVjaXBpZW50c0VtcHR5JyxcbiAgJ3JlY2lwaWVudE51bWJlckludmFsaWRzJyxcbiAgJ3NlbmRlck51bWJlckludmFsaWQnLFxuICAnbm9BcmVhQ29kZScsXG4gICdzcGVjaWFsTnVtYmVyJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vdFNtc1RvRXh0ZW5zaW9uJyxcbiAgJ2ludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQnLFxuICAnbm9JbnRlcm5hbFNNU1Blcm1pc3Npb24nLFxuICAnc2VuZGluZydcbl0sICdtZXNzYWdlLXNlbmRlci1tc2cnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lc3NhZ2VTZW5kZXIvbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkTWVldGluZ0luZm8nLFxuICAnZW1wdHlUb3BpYycsXG4gICdub1Bhc3N3b3JkJyxcbiAgJ2R1cmF0aW9uSW5jb3JyZWN0JyxcbiAgJ3NjaGVkdWxlZFN1Y2Nlc3MnLFxuXSwgJ21lZXRpbmdTdGF0dXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lZXRpbmcvbWVldGluZ1N0YXR1cy5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmZyZWV6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQW5udWxsYScsXG4gIGNvbmZpcm06ICdDb25mZXJtYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImNhbmNlbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FuY2VsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29uZmlybVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29uZmlybVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Nb2RhbC9pMThuL2l0LUlULmpzIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSAnLi4vLi4vbGliL0hhc2hNYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgSGFzaE1hcCh7XG4gIG9mZmxpbmU6ICdPZmZsaW5lJyxcbiAgYnVzeTogJ0J1c3knLFxuICBhdmFpbGFibGU6ICdBdmFpbGFibGUnLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9QcmVzZW5jZS9wcmVzZW5jZVN0YXR1cy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnZW1wdHlQYXNzd29yZCcsXG4gICdlbXB0eVVzZXJuYW1lJyxcbiAgJ3Nlc3Npb25FeHBpcmVkJyxcbiAgJ2JlZm9yZUxvZ291dEVycm9yJyxcbiAgJ2xvZ2luRXJyb3InLFxuICAnbG9nb3V0RXJyb3InLFxuICAnYWNjZXNzRGVuaWVkJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuXSwgJ2F1dGhNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQXV0aC9hdXRoTWVzc2FnZXMuanMiLCJpbXBvcnQgRW51bSBmcm9tICcuLi8uLi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ3NhdmVTdWNjZXNzJyxcbiAgJ3NhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZScsXG4gICdwZXJtaXNzaW9uQ2hhbmdlZCcsXG4gICdwaG9uZU51bWJlckNoYW5nZWQnLFxuICAnd2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZCcsXG4gICdlbWVyZ2VuY3lDYWxsaW5nTm90QXZhaWxhYmxlJyxcbl0sICdjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdkaXNjb25uZWN0ZWQnLFxuXSwgJ2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc2F2ZVN1Y2Nlc3MnLFxuICAnZGlhbGluZ1BsYW5zQ2hhbmdlZCcsXG4gICdhcmVhQ29kZUludmFsaWQnLFxuXSwgJ3JlZ2lvblNldHRpbmdzTWVzc2FnZXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1JlZ2lvblNldHRpbmdzL3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuanMiLCJpbXBvcnQgRW51bSBmcm9tICcuLi8uLi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ2Nvbm5lY3RGYWlsZWQnLFxuICAnY29ubmVjdGVkJyxcbiAgJ2Jyb3dzZXJOb3RTdXBwb3J0ZWQnLFxuICAnd2VicGhvbmVDb3VudE92ZXJMaW1pdCcsXG4gICd3ZWJwaG9uZUZvcmJpZGRlbicsXG4gICdub3RPdXRib3VuZENhbGxXaXRob3V0REwnLFxuICAnbm90V2VicGhvbmVQZXJtaXNzaW9uJyxcbiAgJ2dldFNpcFByb3Zpc2lvbkVycm9yJyxcbiAgJ3RvVm9pY2VNYWlsRXJyb3InLFxuICAnY2hlY2tETEVycm9yJyxcbiAgJ2ZvcndhcmRFcnJvcicsXG4gICdtdXRlRXJyb3InLFxuICAnaG9sZEVycm9yJyxcbiAgJ2ZsaXBFcnJvcicsXG4gICdyZWNvcmRFcnJvcicsXG4gICdyZWNvcmREaXNhYmxlZCcsXG4gICd0cmFuc2ZlckVycm9yJyxcbiAgJ3JlcXVlc3RUaW1lb3V0JyxcbiAgJ3NlcnZlclRpbWVvdXQnLFxuICAnaW50ZXJuYWxTZXJ2ZXJFcnJvcicsXG4gICdzaXBQcm92aXNpb25FcnJvcicsXG4gICd1bmtub3duRXJyb3InLFxuXSwgJ3dlYnBob25lJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9XZWJwaG9uZS93ZWJwaG9uZUVycm9ycy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnaW52YWxpZFRpZXInLFxuXSwgJ3Blcm1pc3Npb25zTWVzc2FnZXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnZGVsZXRlRmFpbGVkJyxcbiAgJ3JlYWRGYWlsZWQnLFxuICAndW5yZWFkRmFpbGVkJyxcbl0sICdtZXNzYWdlU3RvcmUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lc3NhZ2VTdG9yZS9tZXNzYWdlU3RvcmVFcnJvcnMuanMiLCJpbXBvcnQgRW51bSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ2FjY291bnRMb2dnZWRPdXQnLFxuICAnbm90QXV0aG9yaXplZCdcbl0sICdhdXRob3JpemF0aW9uRXJyb3InKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3IuanMiLCJpbXBvcnQgRW51bSBmcm9tICcuLi8uLi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ3JlcXVpcmVBZGl0aW9uYWxOdW1iZXJzJyxcbl0sICdjb25mZXJlbmNlLW1zZycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcclxuICAndXNlck1lZGlhUGVybWlzc2lvbicsXHJcbl0sICdhdWRpb1NldHRpbmdzJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0F1ZGlvU2V0dGluZ3MvYXVkaW9TZXR0aW5nc0Vycm9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiXSwic291cmNlUm9vdCI6IiJ9