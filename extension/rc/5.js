webpackJsonp([5],{

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

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Llamar con {brand}',
  smsTitle: 'Enviar SMS con {brand}'
};

// @key: @#@"c2dTitle"@#@ @source: @#@"Call with {brand}"@#@
// @key: @#@"smsTitle"@#@ @source: @#@"SMS with {brand}"@#@

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  signInErrorMsg: 'Para continuar, inicie sesión en la cuenta para la que ha proporcionado permiso de acceso a {brand} de Google.'
};

// @key: @#@"signInErrorMsg"@#@ @source: @#@"To proceed, please log in the account that you have authorized {brand} for Google to access."@#@

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteMeetingContent: '{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}',
  password: 'Contraseña'
};

// @key: @#@"inviteMeetingContent"@#@ @source: @#@"{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}"@#@
// @key: @#@"password"@#@ @source: @#@"Password"@#@

/***/ }),

/***/ 1127:
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

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Se ha producido un fallo en el inicio de sesión debido a un error interno. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Acceso denegado. Póngase en contacto con el servicio de atención al cliente.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'La sesión ha expirado. Inicie sesión.'), _authMessages$interna);

// @key: @#@"[authMessages.internalError]"@#@ @source: @#@"Login failed due to internal errors. Please try again later."@#@
// @key: @#@"[authMessages.accessDenied]"@#@ @source: @#@"Access denied. Please contact support."@#@
// @key: @#@"[authMessages.sessionExpired]"@#@ @source: @#@"Session expired. Please sign in."@#@


/***/ }),

/***/ 1139:
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

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Introduzca un número de teléfono válido.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Defina el {areaCodeLink} para utilizar números de teléfono locales de 7 dígitos.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'No es posible llamar a emergencias o a números de servicios especiales.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Error de conexión. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Se ha producido un fallo en la conexión. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'El número de extensión no existe.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'No se puede conectar debido a errores de red. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Su extensión puede hacer llamadas con la app de escritorio.\n    Si desea acceder a otras opciones\n    póngase en contacto con el administrador de su cuenta para la actualización.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'código de área'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'No se pueden hacer llamadas de emergencia.'), _callErrors$noToNumbe);

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

/***/ 1151:
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

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'La configuración se guardó correctamente.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'La configuración se guardó correctamente. Asegúrese de que tiene {brand} para escritorio instalado en su equipo.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Seleccione cómo quiere realizar su llamada en la sección Llamadas. Sería conveniente que nos dijera cuál es su ubicación a través del código de país y de área (si fuera posible) en la sección Región, para poder utilizar una marcación local con la aplicación.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Seleccione cómo quiere realizar su llamada en la sección Llamadas.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Sus permisos han cambiado recientemente. Vaya a {link} para comprobar sus opciones de llamadas.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'La información de su número de teléfono ha cambiado recientemente. Vaya a {link} para comprobar sus opciones de llamadas.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Configuración > Llamadas'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Sus permisos han cambiado y ya no puede hacer llamadas con el navegador. Póngase en contacto con el administrador de su cuenta para obtener información detallada.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'No es posible llamar a emergencias o a números de servicios especiales. Ante una emergencia, use la línea fija o el teléfono móvil para llamar a un número de emergencias.'), _callingSettingsMessa);

// @key: @#@"[callingSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[callingSettingsMessages.saveSuccessWithSoftphone]"@#@ @source: @#@"Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer."@#@
// @key: @#@"[callingSettingsMessages.permissionChanged]"@#@ @source: @#@"Your permissions have been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"[callingSettingsMessages.phoneNumberChanged]"@#@ @source: @#@"Your phone number information has been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"link"@#@ @source: @#@"Settings > Calling"@#@
// @key: @#@"[callingSettingsMessages.webphonePermissionRemoved]"@#@ @source: @#@"Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator."@#@
// @key: @#@"[callingSettingsMessages.emergencyCallingNotAvailable]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number."@#@


/***/ }),

/***/ 1163:
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
  region: 'Región'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'La configuración se guardó correctamente.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'Su cuenta ya no es compatible con la región anterior.\n    Compruebe su nueva {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'configuración de región'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Introduzca un código de área válido.'), _region$regionSetting);

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"[regionSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[regionSettingsMessages.dialingPlansChanged]"@#@ @source: @#@"The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}."@#@
// @key: @#@"regionSettings"@#@ @source: @#@"region settings"@#@
// @key: @#@"[regionSettingsMessages.areaCodeInvalid]"@#@ @source: @#@"Please enter a valid area code."@#@


/***/ }),

/***/ 1175:
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

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Enviar éxito.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Ha ocurrido un error al enviar el mensaje.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Error al validar el número de teléfono.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Escriba el mensaje que desea enviar.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'No tiene permiso para enviar este mensaje.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'Debe seleccionar un número desde su teléfono para enviar el mensaje'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Número de teléfono no válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Introduzca un número válido de destinatario.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'El mensaje es demasiado largo. El número máximo de caracteres permitidos es 1000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Defina el {areaCodeLink} para utilizar números de teléfono locales de 7 dígitos.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'No es posible llamar a emergencias ni a números de servicios especiales.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Error de conexión. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Se ha producido un fallo en la conexión. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'El número de extensión no existe.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'No se puede conectar debido a errores de red. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'No tiene permiso para enviar mensajes a destinatarios que no pertenecen a su organización. Póngase en contacto con el administrador de su cuenta de RingCentral para conseguir una actualización.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'No se puede enviar a un número de extensión desde un número de teléfono principal. Si quiere enviar un mensaje a un número de extensión, escriba solo dicho número.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'No es posible enviar SMS a números de teléfono internacionales.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'código de área'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Introduzca un número de teléfono válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noInternalSMSPermission, 'No tiene permiso para enviar mensajes. Póngase en contacto con el administrador de su cuenta de RingCentral para conseguir una actualización.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sending, 'Enviando mensaje... Esto puede tardar algunos minutos.'), _messageSenderMessage);

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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Límite de solicitudes sobrepasado. La aplicación se cerrará en {ttl} segundos.'
};

// @key: @#@"rateExceeded"@#@ @source: @#@"Request limit exceeded. App will resume in {ttl} seconds."@#@


/***/ }),

/***/ 1199:
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

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'Se ha perdido la conexión de la red.');

// @key: @#@"[connectivityMonitorMessages.disconnected]"@#@ @source: @#@"Network connection is lost."@#@


/***/ }),

/***/ 1211:
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

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Envío correcto.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Las llamadas con el navegador solo se permiten en Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'Se han podido registrar 5 teléfonos web en total.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'En este momento, su extensión no puede realizar llamadas salientes con el navegador. Póngase en contacto con su representante de cuentas para acceder a una actualización.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'No tiene permiso para enviar este mensaje.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Teléfono web registrado.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'No se puede enviar la llamada al buzón de voz debido a un error interno'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'No se puede silenciar la llamada en este momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'No se puede poner la llamada en espera en este momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'No se puede hacer flip en la llamada. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'No puede grabar la llamada en este momento. Código de error: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'Su cuenta no incluye la función para grabar llamadas. Póngase en contacto con el administrador de su cuenta.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'No se puede transferir la llamada. Vuelva a intentarlo más tarde.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'webphoneUnavailable', '{error}. Estamos volviendo a conectar con el servidor. Si el error persiste, póngase en contacto con el servicio técnico de {brandName}.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'errorCode', 'Código de error interno: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'occurs', 'Se ha producido un error interno'), _webphoneErrors$conne);

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

/***/ 1223:
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

exports.default = (0, _defineProperty3.default)({}, _messageStoreErrors2.default.deleteFailed, 'No se puede eliminar el mensaje de voz a causa de un error del servidor interno.');

// @key: @#@"[messageStoreErrors.deleteFailed]"@#@ @source: @#@"Cannot delete the voicemail due to internal server error."@#@


/***/ }),

/***/ 1235:
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

exports.default = (_meetingStatus$emptyT = {}, (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.emptyTopic, 'Escriba el tema de la reunión.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.noPassword, 'Indique la contraseña de la reunión.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.scheduledSuccess, 'La reunión se ha programado.'), _meetingStatus$emptyT);

// @key: @#@"[meetingStatus.emptyTopic]"@#@ @source: @#@"Please enter meeting topic."@#@
// @key: @#@"[meetingStatus.noPassword]"@#@ @source: @#@"Please provide meeting password."@#@
// @key: @#@"[meetingStatus.scheduledSuccess]"@#@ @source: @#@"Meeting is scheduled."@#@


/***/ }),

/***/ 1246:
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

exports.default = (0, _defineProperty3.default)({}, _audioSettingsErrors2.default.userMediaPermission, 'Conceda acceso al audio a {brandName} para Google.');

// @key: @#@"[audioSettingsErrors.userMediaPermission]"@#@ @source: @#@"Please grant {brandName} for Google to access your audio."@#@


/***/ }),

/***/ 1258:
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

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Esta edición no admite la integración con {application}. Llame a su representante de cuentas para actualizar su edición de {brand}.');

// @key: @#@"[permissionMessages.invalidTier]"@#@ @source: @#@"Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition."@#@
// @key: @#@"[permissionMessages.insufficientPrivilege]"@#@ @source: @#@"Insufficient privilege. Please contact your account representative for an upgrade."@#@


/***/ }),

/***/ 1270:
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

exports.default = (0, _defineProperty3.default)({}, _messages2.default.requireAditionalNumbers, 'Seleccione los números de marcación adicionales');

// @key: @#@"[messages.requireAditionalNumbers]"@#@ @source: @#@"Please select the additional dial-in numbers."@#@


/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Iniciar sesión',
  version: 'Versión'
};

// @key: @#@"loginButton"@#@ @source: @#@"Sign In"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@


/***/ }),

/***/ 1294:
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
  title: 'Llamadas'
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} para escritorio'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'Mi teléfono {brand} '), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Otro teléfono'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Personalizar teléfono'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Realizar mis llamadas con'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Llamar primero a mi ubicación y conectar después con la parte que llama'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'Mi ubicación'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Avisarme de que marque\xA01 para conectar la llamada'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Navegador'), (0, _defineProperty3.default)(_title$callingOptions, 'save', 'Guardar'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser + 'Tooltip', 'Utilice esta opción para hacer y recibir llamadas con el micrófono y los altavoces de su equipo.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone + 'Tooltip', 'Utilice esta opción para hacer y recibir llamadas con su teléfono {brand} para la aplicación de escritorio.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip', 'Use esta opción para hacer llamadas usando su teléfono {brand}.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip1', 'En la llamada que realice, primero sonará su teléfono {brand} y luego el de la persona a la que llama.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip', 'Utilice esta opción para realizar llamadas desde el resto de los teléfonos que ha añadido a su extensión {brand}, como el de su casa o el móvil.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip1', 'En la llamada que realice, este teléfono sonará primero y luego el de la persona a la que llama.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip', 'Use esta opción para realizar llamadas usando el teléfono de su preferencia, introduciendo un número de teléfono válido en el campo que aparece a continuación.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip1', 'En la llamada que realice, este teléfono sonará primero y luego el de la persona a la que llama.'), _title$callingOptions);

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

/***/ 1306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Guardar'
};

// @key: @#@"save"@#@ @source: @#@"Save"@#@


/***/ }),

/***/ 1318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Región',
  NAOnlyMessage: 'Defina su código de área. Se utilizará para la marcación local.',
  MultiWithNAMessage: 'Defina el país y código de área para su región. Se utilizará para la marcación local y el formato de número de teléfono.',
  MultiWithoutNAMessage: 'Seleccioné el país en el que se encuentra. Esto se utilizará para la marcación local y el formato de número de teléfono.',
  country: 'País',
  areaCode: 'Código de área',
  areaCodePlaceholder: 'Introducir código de área',
  save: 'Guardar'
};

// @key: @#@"title"@#@ @source: @#@"Region"@#@
// @key: @#@"NAOnlyMessage"@#@ @source: @#@"Please set your area code. This will be used for local dialing."@#@
// @key: @#@"MultiWithNAMessage"@#@ @source: @#@"Please set the country and area code for your region. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"MultiWithoutNAMessage"@#@ @source: @#@"Please select the country you locate in. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"country"@#@ @source: @#@"Country"@#@
// @key: @#@"areaCode"@#@ @source: @#@"Area Code"@#@
// @key: @#@"areaCodePlaceholder"@#@ @source: @#@"Enter Area Code"@#@


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(807), __esModule: true };

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  419: 'Latinoamérica',
  AR: 'Argentina',
  AT: 'Austria',
  BH: 'Baréin',
  BR: 'Brasil',
  BG: 'Bulgaria',
  CA: 'Canadá',
  CL: 'Chile',
  CN: 'China',
  HR: 'Croacia',
  CY: 'Chipre',
  CZ: 'República Checa',
  DK: 'Dinamarca',
  DO: 'República Dominicana',
  EE: 'Estonia',
  FI: 'Finlandia',
  FR: 'Francia',
  DE: 'Alemania',
  HK: 'Hong Kong',
  HU: 'Hungría',
  IE: 'Irlanda',
  IL: 'Israel',
  IN: 'India',
  IT: 'Italia',
  JP: 'Japón',
  LV: 'Letonia',
  LT: 'Lituania',
  LU: 'Luxemburgo',
  MY: 'Malasia',
  MX: 'México',
  NL: 'Países Bajos',
  NO: 'Noruega',
  PA: 'Panamá',
  PH: 'Filipinas',
  PL: 'Polonia',
  PT: 'Portugal',
  RO: 'Rumanía',
  SK: 'Eslovaquia',
  SI: 'Eslovenia',
  ES: 'España',
  SE: 'Suecia',
  CH: 'Suiza',
  TR: 'Turquía',
  GB: 'Reino Unido',
  AU: 'Australia',
  GE: 'Georgia',
  ID: 'Indonesia',
  KE: 'Kenia',
  NG: 'Nigeria',
  PK: 'Pakistán',
  ZA: 'Sudáfrica',
  KR: 'Corea del Sur',
  SG: 'Singapur',
  TW: 'Taiwán',
  UA: 'Ucrania',
  US: 'Estados Unidos',
  VN: 'Vietnam',
  BE: 'Bélgica',
  BJ: 'Benín',
  SV: 'El Salvador',
  GH: 'Ghana',
  GR: 'Grecia',
  GN: 'Guinea',
  NZ: 'Nueva Zelanda',
  PE: 'Perú',
  PR: 'Puerto Rico'
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

/***/ 1342:
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

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Teléfono del trabajo'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Número de extensión'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Número de casa'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Teléfono móvil'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Teléfono'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Tipo de teléfono desconocido'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.company, 'Número de la compañía'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.direct, 'Número directo'), _phoneTypes$business$);

// @key: @#@"[phoneTypes.business]"@#@ @source: @#@"Business Phone"@#@
// @key: @#@"[phoneTypes.extension]"@#@ @source: @#@"Extension Number"@#@
// @key: @#@"[phoneTypes.home]"@#@ @source: @#@"Home Number"@#@
// @key: @#@"[phoneTypes.mobile]"@#@ @source: @#@"Mobile Phone"@#@
// @key: @#@"[phoneTypes.phone]"@#@ @source: @#@"Phone"@#@
// @key: @#@"[phoneTypes.unknown]"@#@ @source: @#@"Unknown Phone Type"@#@
// @key: @#@"[phoneTypes.company]"@#@ @source: @#@"Company Number"@#@
// @key: @#@"[phoneTypes.direct]"@#@ @source: @#@"Direct Number"@#@


/***/ }),

/***/ 1354:
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

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Cuenta'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contacto'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Posible cliente'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Candidato a posible cliente'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'Usuario del sistema'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), _phoneSources$account);

// @key: @#@"[phoneSources.account]"@#@ @source: @#@"Account"@#@
// @key: @#@"[phoneSources.contact]"@#@ @source: @#@"Contact"@#@
// @key: @#@"[phoneSources.rcContact]"@#@ @source: @#@"{brand}"@#@
// @key: @#@"[phoneSources.lead]"@#@ @source: @#@"Lead"@#@
// @key: @#@"[phoneSources.opportunity]"@#@ @source: @#@"Opportunity"@#@
// @key: @#@"[phoneSources.systemUser]"@#@ @source: @#@"System User"@#@


/***/ }),

/***/ 1366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'A',
  enterNameOrNumber: 'Escribir nombre o número'
};

// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Name or Number"@#@


/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Directo',
  MainCompanyNumber: 'Principal',
  CompanyNumber: 'Compañía',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Bloqueado',
  from: 'De',
  AdditionalCompanyNumber: 'Compañía',
  ForwardedCompanyNumber: 'Desviado'
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

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'De',
  to: 'A',
  enterNameOrNumber: 'Introducir número o nombre...',
  typeMessage: 'Escribir mensaje...',
  send: 'Enviar'
};

// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@
// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Iniciando sesión...',
  logCall: 'Registrar llamada',
  editLog: 'Editar registro',
  select: 'Seleccionar una grabación que coincida',
  OnHold: 'En espera',
  Ringing: 'Llamando',
  CallConnected: 'Llamada conectada',
  unknownUser: 'Usuario desconocido',
  unknownNumber: 'Anónimo',
  unavailable: 'No disponible',
  viewDetails: 'Ver detalles'
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

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  typeMessage: 'Escribir mensaje...',
  send: 'Enviar'
};

// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'Nueva conferencia',
  dialInNumber: 'Número de marcación',
  host: 'Organizador',
  participants: 'Participantes',
  internationalParticipants: 'Participantes internacionales',
  internationalNumbersHeader: 'Seleccionar números de marcación internacionales',
  search: 'Buscar...',
  inviteWithText: 'Invitar con mensaje',
  inviteText: 'Únase a la conferencia de {brandName}.\r\n\nNúmeros de marcación: {formattedDialInNumber} \r\n{additionalNumbersSection} \r\nAcceso de participante: {participantCode} \r\n\n\xBFNecesita un número de marcación internacional? Visite {dialInNumbersLinks} \r\n\nEsta llamada de conferencia es posible gracias a Conferencias de {brandName}.',
  hostAccess: 'Acceso de host',
  participantsAccess: 'Acceso de participantes',
  addinalDialInNumbers: 'Números de marcación adicionales',
  selectNumbers: 'Seleccionar números',
  enableJoinBeforeHost: 'Permitir unirse antes que el host',
  conferenceCommands: 'Comandos de conferencia',
  inviteWithGCalendar: 'Invitar con Google Calendar',
  joinAsHost: 'Iniciar conferencia',
  internationalNumber: 'Números de marcación internacionales:'
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

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Comandos de conferencia',
  starSharp2Title: 'Recuento de personas que llaman',
  starSharp2Body: 'Lleve un control del número de personas que hay en una llamada.',
  starSharp3Title: 'Abandonar conferencia',
  starSharp3Body: 'Permite al host colgar y finalizar la llamada.',
  starSharp4Title: 'Menú',
  starSharp4Body: 'Escuche la lista de comandos de tonos de marcado',
  starSharp5Title: 'Establecer modos de escucha',
  starSharp5Body: 'Pulse 1\xA0vez: Silenciar a las personas que llaman - Estas personas pueden reactivar el audio con * # 6\r\nPulse 2\xA0veces: Silenciar a las personas que llaman - Solo podrán escuchar. No existe opción de activación del audio.\r\nPulse 3\xA0veces: Reactivar audio de personas que llaman - La línea vuelve a estar abierta',
  starSharp6Title: 'Silenciar línea de host',
  starSharp6Body: 'Pulse una vez para SILENCIAR.\r\nVuelva a pulsar para REACTIVAR AUDIO.',
  starSharp7Title: 'Proteger la llamada',
  starSharp7Body: 'Pulse una vez para BLOQUEAR a todas las personas que llaman.\r\nVuelva a pulsar para ABRIR la llamada.',
  starSharp8Title: 'Escuchar un sonido cuando alguien entre o salga de una llamada',
  starSharp8Body: 'Pulse 1\xA0vez: Se DESACTIVA el sonido.\r\nPulse 2\xA0veces: Se ACTIVA el tono de entrada y se DESACTIVA el tono de salida\r\nPulse 3\xA0veces: Se DESACTIVA el tono de entrada y se ACTIVA el tono de salida\r\nPulse 4\xA0veces: el sonido está ACTIVADO.',
  star9Title: 'Grabar la conferencia',
  star9Body: 'Pulse una vez para EMPEZAR a grabar.\r\nPulse nuevamente para DEJAR de grabar.'
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

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Cuenta',
  contact: 'Contacto',
  lead: 'Posible cliente',
  chooseEntity: 'Seleccione un tipo de entidad',
  create: 'Crear'
};

// @key: @#@"account"@#@ @source: @#@"Account"@#@
// @key: @#@"contact"@#@ @source: @#@"Contact"@#@
// @key: @#@"lead"@#@ @source: @#@"Lead"@#@
// @key: @#@"chooseEntity"@#@ @source: @#@"Please select entity type"@#@
// @key: @#@"create"@#@ @source: @#@"Create"@#@


/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  sureToDeleteVoiceMail: '\xBFSeguro que desea eliminar este mensaje de voz?',
  doNotAskAgain: 'No volver a preguntar'
};

// @key: @#@"sureToDeleteVoiceMail"@#@ @source: @#@"Are you sure you want to delete this voicemail?"@#@
// @key: @#@"doNotAskAgain"@#@ @source: @#@"Don't ask me again"@#@


/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  download: 'Descargar',
  play: 'Reproducir',
  pause: 'Pausar'
};

// @key: @#@"download"@#@ @source: @#@"Download"@#@
// @key: @#@"play"@#@ @source: @#@"Play"@#@
// @key: @#@"pause"@#@ @source: @#@"Pause"@#@


/***/ }),

/***/ 1486:
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
  editLog: 'Editar registro',
  viewDetails: 'Ver detalles',
  addEntity: 'Crear nuevo',
  call: 'Llamar',
  conversation: 'Conversación',
  groupConversation: 'Conversación grupal',
  text: 'Texto',
  voiceMessage: 'Mensaje de voz'
}, (0, _defineProperty3.default)(_addLog$editLog$viewD, _messageTypes2.default.voiceMail, 'Mensaje de buzón de voz'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'mark', 'Marcar como no leído'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'unmark', 'Marcar como leído'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'delete', 'Eliminar'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxSent', 'Fax enviado'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxReceived', 'Fax recibido'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'pages', 'páginas'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'preview', 'Ver'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'download', 'Descargar'), _addLog$editLog$viewD);

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

/***/ 1498:
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
  title: 'Mensajes',
  search: 'Buscar...',
  noMessages: 'Sin mensajes',
  noSearchResults: 'No se han encontrado registros que coincidan',
  composeText: 'Redactar mensaje'
}, (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.all, 'Todo'), (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.voiceMail, 'Voz'), (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.text, 'Texto'), (0, _defineProperty3.default)(_title$search$noMessa, _messageTypes2.default.fax, 'Fax'), _title$search$noMessa);

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

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Iniciando sesión...',
  logCall: 'Registrar llamada',
  editLog: 'Editar registro',
  select: 'Seleccionar una grabación que coincida',
  OnHold: 'En espera',
  Ringing: 'Llamando',
  CallConnected: 'Llamada conectada',
  unknownUser: 'Usuario desconocido',
  unknownNumber: 'Anónimo',
  unavailable: 'No disponible',
  viewDetails: 'Ver detalles',
  addEntity: 'Crear nuevo',
  addLog: 'Registro',
  text: 'Texto',
  call: 'Llamar',
  addContact: 'Añadir contacto',
  missedCall: 'Perdida',
  inboundCall: 'Entrante',
  outboundCall: 'Saliente',
  from: 'De',
  to: 'Para',
  hangup: 'Colgar',
  accept: 'Aceptar',
  toVoicemail: 'Enviar al buzón de voz'
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

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No hay llamadas activas',
  currentCall: 'Llamada actual',
  ringCall: 'Llamada sonando',
  onHoldCall: 'Llamada en espera',
  otherDeviceCall: 'Llamadas en curso en mis otros dispositivos'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"currentCall"@#@ @source: @#@"Current Call"@#@
// @key: @#@"ringCall"@#@ @source: @#@"Ringing Call"@#@
// @key: @#@"onHoldCall"@#@ @source: @#@"Call on Hold"@#@
// @key: @#@"otherDeviceCall"@#@ @source: @#@"Ongoing calls on my other devices"@#@


/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Iniciando sesión...',
  logCall: 'Registrar llamada',
  editLog: 'Editar registro',
  select: 'Seleccionar una grabación que coincida',
  OnHold: 'En espera',
  Ringing: 'Llamando',
  CallConnected: 'Llamada conectada',
  unknownUser: 'Usuario desconocido',
  unknownNumber: 'Anónimo',
  unavailable: 'No disponible',
  viewDetails: 'Ver detalles',
  addEntity: 'Crear nuevo',
  addLog: 'Registro',
  text: 'Texto',
  call: 'Llamar',
  missedCall: 'Perdida',
  inboundCall: 'Entrante',
  outboundCall: 'Saliente'
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

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No hay llamadas activas',
  noRecords: 'No hay resultados.'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"noRecords"@#@ @source: @#@"No results found."@#@


/***/ }),

/***/ 1558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Historial'
};

// @key: @#@"title"@#@ @source: @#@"History"@#@


/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Desviar',
  cancel: 'Cancelar',
  customNumber: 'Número personalizado'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"customNumber"@#@ @source: @#@"Custom number"@#@


/***/ }),

/***/ 1582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancelar',
  reply: 'Responder',
  onMyWay: 'En camino',
  customMessage: 'Mensaje personalizado',
  callMeBackIn: 'Devuélvame la llamada en',
  willCallYouBackIn: 'Le devolveré la llamada en',
  min: 'minutos',
  hours: 'horas',
  days: 'días'
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

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Desviar',
  reply: 'Responder',
  ignore: 'Ignorar',
  toVoicemail: 'A buzón de voz',
  answer: 'Responder',
  answerAndEnd: 'Atender y salir',
  answerAndHold: 'Atender y retener'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@
// @key: @#@"toVoicemail"@#@ @source: @#@"To Voicemail"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"answerAndEnd"@#@ @source: @#@"Answer & End"@#@
// @key: @#@"answerAndHold"@#@ @source: @#@"Answer & Hold"@#@


/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Desconocido',
  anonymous: 'Anónimo',
  activeCall: 'Llamada activa'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  hide: 'Ocultar',
  end: 'Finalizar',
  keypad: 'Teclado'
};

// @key: @#@"hide"@#@ @source: @#@"Hide"@#@
// @key: @#@"end"@#@ @source: @#@"End"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@


/***/ }),

/***/ 1630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unmute: 'Reactivar audio',
  mute: 'Silenciar',
  keypad: 'Teclado',
  hold: 'Retener',
  onHold: 'En espera',
  park: 'Aparcar',
  stopRecord: 'Detener',
  record: 'Grabar',
  add: 'Agregar',
  transfer: 'Transferir',
  flip: 'Traspasar'
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

/***/ 1642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Home: 'Casa',
  Mobile: 'Móvil',
  Work: 'Trabajo'
};

// @key: @#@"Home"@#@ @source: @#@"Home"@#@
// @key: @#@"Mobile"@#@ @source: @#@"Mobile"@#@
// @key: @#@"Work"@#@ @source: @#@"Work"@#@


/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flipHeader: 'Hacer flip en la llamada a...',
  flip: 'Traspasar',
  complete: 'Completar traspaso'
};

// @key: @#@"flipHeader"@#@ @source: @#@"Flip Call to..."@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@
// @key: @#@"complete"@#@ @source: @#@"Complete Flip"@#@


/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'Para:',
  transferTo: 'Transferir a',
  blindTransfer: 'Transferir',
  enterNameOrNumber: 'Introducir número'
};

// @key: @#@"to"@#@ @source: @#@"To:"@#@
// @key: @#@"transferTo"@#@ @source: @#@"Transfer to"@#@
// @key: @#@"blindTransfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number"@#@


/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Desconocido',
  anonymous: 'Anónimo',
  activeCalls: 'Llamadas activas'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCalls"@#@ @source: @#@"Active Calls"@#@


/***/ }),

/***/ 1690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Llamada activa'
};

// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'No se han encontrado registros.'
};

// @key: @#@"noContacts"@#@ @source: @#@"No records found."@#@


/***/ }),

/***/ 1714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Buscar...'
};

// @key: @#@"searchPlaceholder"@#@ @source: @#@"Search..."@#@


/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  all: 'Todos',
  company: 'Compañía',
  personal: 'Personal'
};

// @key: @#@"all"@#@ @source: @#@"All"@#@
// @key: @#@"company"@#@ @source: @#@"Company"@#@
// @key: @#@"personal"@#@ @source: @#@"Personal"@#@


/***/ }),

/***/ 1738:
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
  extensionLabel: 'Ext.',
  directLabel: 'Directo',
  emailLabel: 'Correo electrónico',
  call: 'Llamar',
  text: 'Texto'
}, (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.available, 'Disponible'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy, 'Ocupado'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_extensionLabel$direc, _dndStatus2.default.doNotAcceptAnyCalls, 'No molestar'), _extensionLabel$direc);

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

/***/ 1750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Detalles de contacto'
};

// @key: @#@"contactDetails"@#@ @source: @#@"Contact Details"@#@


/***/ }),

/***/ 1762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Audio',
  dialButtonVolume: 'Volumen del botón "Marcar"',
  ringtoneVolume: 'Volumen del tono de llamada',
  callVolume: 'Volumen de llamadas',
  muteCalls: 'Silenciar llamadas',
  outputDevice: 'Dispositivo de salida',
  inputDevice: 'Dispositivo de entrada',
  micPermission: 'Permiso para el micrófono'
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

/***/ 1774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  topic: 'Tema',
  when: 'Cuándo',
  duration: 'Duración',
  recurringMeeting: 'Reunión periódica',
  recurringDescribe: 'Recuerde comprobar la periodicidad o repetición en la invitación de calendario enviada a los asistentes.',
  video: 'Vídeo',
  videoDescribe: 'Al unirse a una reunión',
  host: 'Host',
  participants: 'Participante',
  audioOptions: 'Opciones de audio',
  voIPOnly: 'Solo VoIP',
  both: 'Ambos',
  meetingOptions: 'Opciones de reunión',
  requirePassword: 'Es necesaria la contraseña de reunión',
  password: 'Contraseña',
  enableJoinBeforeHost: 'Permitir unirse antes que el host',
  telephonyOnly: 'Solo telefonía'
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

/***/ 1786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  start: 'Realizar una visita rápida',
  skip: 'Saltar',
  next: 'Siguiente',
  finish: 'Finalizar'
};

// @key: @#@"start"@#@ @source: @#@"Take a Quick Tour"@#@
// @key: @#@"skip"@#@ @source: @#@"Skip"@#@
// @key: @#@"next"@#@ @source: @#@"Next"@#@
// @key: @#@"finish"@#@ @source: @#@"Finish"@#@


/***/ }),

/***/ 1798:
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

/***/ 1810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  schedule: 'Programar',
  prompt: 'Autorice a RingCentral a acceder a la información de cuenta.'
};

// @key: @#@"schedule"@#@ @source: @#@"Schedule"@#@
// @key: @#@"prompt"@#@ @source: @#@"Please authorize RingCentral to access your account information."@#@


/***/ }),

/***/ 1822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invitar con Google Calendar'
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

/***/ 1834:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invitar con Google Calendar'
};

// @key: @#@"inviteWithCalendar"@#@ @source: @#@"Invite with Google Calendar"@#@

/***/ }),

/***/ 1846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  authorize: 'Autorizar',
  prompt: 'Autorice a {brand} a acceder a la información de cuenta de Google.'
};

// @key: @#@"authorize"@#@ @source: @#@"Authorize"@#@
// @key: @#@"prompt"@#@ @source: @#@"Please authorize {brand} to access your Google account information."@#@

/***/ }),

/***/ 1858:
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

exports.default = (_authorizationError$a = {}, (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.accountLoggedOut, 'Hemos visto que ha cerrado sesión en su cuenta de Google {accountEmail}. Para continuar, haga clic aquí {clickHereLink} para iniciar sesión en su cuenta de Google.'), (0, _defineProperty3.default)(_authorizationError$a, 'clickHere', 'haga clic aquí'), (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.notAuthorized, 'Hemos visto que no ha autorizado a {brand} de Google para acceder a su cuenta de Google. Haga clic aquí {clickHereLink} para proporcionar la autorización.'), _authorizationError$a);

// @key: @#@"[authorizationError.accountLoggedOut]"@#@ @source: @#@"We noticed you have logged out your Google account {accountEmail}. To continue please {clickHereLink} to login your Google account."@#@
// @key: @#@"clickHere"@#@ @source: @#@"click here"@#@
// @key: @#@"[authorizationError.notAuthorized]"@#@ @source: @#@"We noticed you haven't authorized {brand} for Google to access your Google account. Please {clickHereLink} to authorize."@#@

/***/ }),

/***/ 1870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No se han encontrado registros.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@


/***/ }),

/***/ 1882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No se han encontrado registros.',
  inBound: 'Entrante',
  outBound: 'Saliente',
  missed: 'Llamada perdida'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@
// @key: @#@"inBound"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outBound"@#@ @source: @#@"Outbound"@#@
// @key: @#@"missed"@#@ @source: @#@"Missed Call"@#@


/***/ }),

/***/ 1894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  recentActivities: 'Actividades recientes',
  text: 'Texto',
  fax: 'Fax',
  voicemail: 'Buzón de voz',
  call: 'Llamar',
  gmail: 'Gmail'
};

// @key: @#@"recentActivities"@#@ @source: @#@"Recent Activities"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"fax"@#@ @source: @#@"Fax"@#@
// @key: @#@"voicemail"@#@ @source: @#@"Voicemail"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"gmail"@#@ @source: @#@"Gmail"@#@

/***/ }),

/***/ 1906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No se han encontrado registros.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@

/***/ }),

/***/ 1918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dialpadLabel: 'Teclado de marcación',
  callsLabel: 'Llamadas',
  historyLabel: 'Historial',
  messagesLabel: 'Mensajes',
  moreMenuLabel: 'Menú Más',
  contactsLabel: 'Contactos',
  meetingLabel: 'Programar una reunión',
  conferenceLabel: 'Programar una conferencia',
  hangoutsLabel: 'Iniciar Hangouts',
  hangoutsTitle: 'Iniciar Hangout con Conferencias',
  settingsLabel: 'Configuración'
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

/***/ 1930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Modo fuera de línea'
};

// @key: @#@"offlineMode"@#@ @source: @#@"Offline Mode"@#@


/***/ }),

/***/ 1941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  webphoneUnavailable: 'El teléfono web no está disponible'
};

// @key: @#@"webphoneUnavailable"@#@ @source: @#@"Web Phone Unavailable"@#@


/***/ }),

/***/ 1953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'Contrato de licencia de usuario final',
  serviceTerms: 'Condiciones de servicio'
};

// @key: @#@"eula"@#@ @source: @#@"End User License Agreement"@#@
// @key: @#@"serviceTerms"@#@ @source: @#@"Service Terms"@#@


/***/ }),

/***/ 1965:
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

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Disponible'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy, 'Ocupado'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_presenceStatus$avail, _dndStatus2.default.doNotAcceptAnyCalls, 'No molestar'), _presenceStatus$avail);

// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.busy]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@


/***/ }),

/***/ 1977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Estado',
  acceptQueueCalls: 'Aceptar llamadas en cola'
};

// @key: @#@"status"@#@ @source: @#@"Status"@#@
// @key: @#@"acceptQueueCalls"@#@ @source: @#@"Accept call queue calls"@#@


/***/ }),

/***/ 1989:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'Inglés',
  ja: 'Japonés',
  fr: 'Francés',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  pt: 'Portugués'
};

// @key: @#@"en"@#@ @source: @#@"English"@#@
// @key: @#@"ja"@#@ @source: @#@"Japanese"@#@
// @key: @#@"fr"@#@ @source: @#@"French"@#@
// @key: @#@"de"@#@ @source: @#@"Deutsch"@#@
// @key: @#@"es"@#@ @source: @#@"Spanish"@#@
// @key: @#@"it"@#@ @source: @#@"Italian"@#@
// @key: @#@"pt"@#@ @source: @#@"Portuguese"@#@


/***/ }),

/***/ 2001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Región',
  calling: 'Llamadas',
  logout: 'Cerrar sesión',
  version: 'Versión',
  settings: 'Configuración',
  clickToDial: 'Haga clic para marcar',
  autoCreateLog: 'Crear registro de llamadas automáticamente',
  clickToSMS: 'Haga clic para enviar SMS',
  clickToDialSMS: 'Haga clic para marcar/enviar SMS',
  autoCreateSMSLog: 'Crear registro de SMS automáticamente',
  autoLogCalls: 'Registrar llamadas automáticamente',
  autoLogSMS: 'Registrar SMS automáticamente',
  audio: 'Audio',
  language: 'Idioma',
  feedback: 'Comentarios',
  userGuide: 'Novedades'
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

/***/ 2013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Autorizar',
  authorized: 'Cancelar la autorización',
  unauthorizedTitle: 'Cuenta autorizada',
  tooltip: 'Ha autorizado a RingCentral para que Google acceda a su cuenta '
};

// @key: @#@"unauthorized"@#@ @source: @#@"Authorize"@#@
// @key: @#@"authorized"@#@ @source: @#@"Unauthorize"@#@
// @key: @#@"unauthorizedTitle"@#@ @source: @#@"Authorized Account"@#@
// @key: @#@"tooltip"@#@ @source: @#@"You have authorized RingCentral for Google to access your account "@#@

/***/ }),

/***/ 2025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addMeeting: 'Agregar reunión',
  addMeetingTitle: 'Agregar reunión de {brand}',
  meetingSettingsTitle: 'Reuniones de {brand} - Configuración',
  when: 'Cuándo',
  recurringMeeting: 'Reunión periódica',
  recurringMeetingPrompt: 'Recuerde comprobar la periodicidad o repetición en la invitación de calendario enviada a los asistentes.',
  video: 'Vídeo (al unirse a una reunión)',
  host: 'Host:',
  on: 'activado',
  off: 'desactivado',
  participant: 'Participante:',
  audioOptions: 'Opciones de audio',
  telephone: 'Solo telefonía',
  voip: 'Solo VoIP',
  both: 'Ambos',
  meetingOptions: 'Opciones de reunión',
  requirePassword: 'Es necesaria la contraseña de reunión',
  joinBeforeHost: 'Permitir unirse antes que el host',
  doNotShowAgain: 'Guardar y no mostrar de nuevo',
  schedule: 'Programar'
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

/***/ 2037:
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
  incomingCall: 'Llamada entrante de:',
  answer: 'Responder',
  ignore: 'Ignorar',
  inboundMessage: 'Nuevo {messageType} de {from}'
}, (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.fax, 'fax'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.voiceMail, 'buzón de voz'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.text, 'mensaje de texto'), _incomingCall$answer$);

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

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancelar',
  confirm: 'Confirmar'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVDYWxlbmRhci9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1dGhBbGVydC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NBbGVydC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VTZW5kZXJBbGVydC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVN0b3JlQWxlcnQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BdWRpb1NldHRpbmdzQWxlcnQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25mZXJlbmNlQWxlcnQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vbGliL0VudW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9IYXNoTWFwL2luZGV4LmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc1BhbmVsL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL2VzLUVTLmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZUNvbW1hbmRzL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRW50aXR5TW9kYWwvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3Rpb25NZW51TGlzdC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1ZvaWNlbWFpbFBsYXllci9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZXNQYW5lbC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxJdGVtL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbHNQYW5lbC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxJdGVtL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbExpc3QvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb3J3YXJkRm9ybS9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbmNvbWluZ0NhbGxQYWQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9JbmNvbWluZ0NhbGxQYWdlL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbERpYWxQYWQvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmFkaW9CdG5Hcm91cC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQmFkZ2VDb250YWluZXIvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TGlzdC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RzVmlldy9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGV0YWlscy9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3REZXRhaWxzVmlldy9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lZXRpbmdQYW5lbC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1VzZXJHdWlkZS9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nU2NoZWR1bGVCdXR0b24vaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nSW52aXRlQnV0dG9uL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6YXRpb25BbGVydC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQmFkZ2UvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdWxhL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vZXMtRVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9lcy1FUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy9lbnVtcy9waG9uZVR5cGVzLmpzIiwid2VicGFjazovLy9lbnVtcy9tZXNzYWdlVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdPcHRpb25zLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVldGluZy9tZWV0aW5nU3RhdHVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Nb2RhbC9pMThuL2VzLUVTLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0F1dGgvYXV0aE1lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9NZXNzYWdlU3RvcmUvbWVzc2FnZVN0b3JlRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9BdWRpb1NldHRpbmdzL2F1ZGlvU2V0dGluZ3NFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanMiXSwibmFtZXMiOlsiYzJkVGl0bGUiLCJzbXNUaXRsZSIsInNpZ25JbkVycm9yTXNnIiwiaW52aXRlTWVldGluZ0NvbnRlbnQiLCJwYXNzd29yZCIsImludGVybmFsRXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJzZXNzaW9uRXhwaXJlZCIsIm5vVG9OdW1iZXIiLCJub0FyZWFDb2RlIiwic3BlY2lhbE51bWJlciIsImNvbm5lY3RGYWlsZWQiLCJub3RBbkV4dGVuc2lvbiIsIm5ldHdvcmtFcnJvciIsIm5vUmluZ291dEVuYWJsZSIsInNhdmVTdWNjZXNzIiwic2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lIiwiZmlyc3RMb2dpbiIsImZpcnN0TG9naW5PdGhlciIsInBlcm1pc3Npb25DaGFuZ2VkIiwicGhvbmVOdW1iZXJDaGFuZ2VkIiwid2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZCIsImVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUiLCJyZWdpb24iLCJkaWFsaW5nUGxhbnNDaGFuZ2VkIiwiYXJlYUNvZGVJbnZhbGlkIiwic2VuZFN1Y2Nlc3MiLCJzZW5kRXJyb3IiLCJudW1iZXJWYWxpZGF0ZUVycm9yIiwidGV4dEVtcHR5Iiwibm9QZXJtaXNzaW9uIiwic2VuZGVyRW1wdHkiLCJyZWNpcGllbnRzRW1wdHkiLCJ0ZXh0VG9vTG9uZyIsInNlbmRlck51bWJlckludmFsaWQiLCJub3RTbXNUb0V4dGVuc2lvbiIsImludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQiLCJyZWNpcGllbnROdW1iZXJJbnZhbGlkcyIsIm5vSW50ZXJuYWxTTVNQZXJtaXNzaW9uIiwic2VuZGluZyIsInJhdGVFeGNlZWRlZCIsImRpc2Nvbm5lY3RlZCIsImJyb3dzZXJOb3RTdXBwb3J0ZWQiLCJ3ZWJwaG9uZUNvdW50T3ZlckxpbWl0Iiwibm90T3V0Ym91bmRDYWxsV2l0aG91dERMIiwiZ2V0U2lwUHJvdmlzaW9uRXJyb3IiLCJjb25uZWN0ZWQiLCJ0b1ZvaWNlTWFpbEVycm9yIiwibXV0ZUVycm9yIiwiaG9sZEVycm9yIiwiZmxpcEVycm9yIiwicmVjb3JkRXJyb3IiLCJyZWNvcmREaXNhYmxlZCIsInRyYW5zZmVyRXJyb3IiLCJkZWxldGVGYWlsZWQiLCJlbXB0eVRvcGljIiwibm9QYXNzd29yZCIsInNjaGVkdWxlZFN1Y2Nlc3MiLCJ1c2VyTWVkaWFQZXJtaXNzaW9uIiwiaW52YWxpZFRpZXIiLCJyZXF1aXJlQWRpdGlvbmFsTnVtYmVycyIsImxvZ2luQnV0dG9uIiwidmVyc2lvbiIsInRpdGxlIiwic29mdHBob25lIiwibXlwaG9uZSIsIm90aGVycGhvbmUiLCJjdXN0b21waG9uZSIsImJyb3dzZXIiLCJwcmVmaXhFbnVtIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJFbnVtIiwidmFsdWVzIiwicHJlZml4IiwiZGVmaW5pdGlvbiIsImZvckVhY2giLCJ2YWx1ZSIsInByZWZpeENhY2hlIiwiZW51bU1hcCIsImJhc2UiLCJoYXMiLCJzZXQiLCJjYWNoZSIsImdldCIsInR5cGUiLCJkZWZhdWx0R2V0RnVuY3Rpb24iLCJzRGVmaW5pdGlvbiIsInNWYWx1ZU1hcCIsIml0ZW0iLCJIYXNoTWFwIiwia2V5IiwiZW51bWVyYWJsZSIsIm1hcCIsImdldEtleSIsImdldFZhbHVlIiwic2F2ZSIsIk5BT25seU1lc3NhZ2UiLCJNdWx0aVdpdGhOQU1lc3NhZ2UiLCJNdWx0aVdpdGhvdXROQU1lc3NhZ2UiLCJjb3VudHJ5IiwiYXJlYUNvZGUiLCJhcmVhQ29kZVBsYWNlaG9sZGVyIiwiQVIiLCJBVCIsIkJIIiwiQlIiLCJCRyIsIkNBIiwiQ0wiLCJDTiIsIkhSIiwiQ1kiLCJDWiIsIkRLIiwiRE8iLCJFRSIsIkZJIiwiRlIiLCJERSIsIkhLIiwiSFUiLCJJRSIsIklMIiwiSU4iLCJJVCIsIkpQIiwiTFYiLCJMVCIsIkxVIiwiTVkiLCJNWCIsIk5MIiwiTk8iLCJQQSIsIlBIIiwiUEwiLCJQVCIsIlJPIiwiU0siLCJTSSIsIkVTIiwiU0UiLCJDSCIsIlRSIiwiR0IiLCJBVSIsIkdFIiwiSUQiLCJLRSIsIk5HIiwiUEsiLCJaQSIsIktSIiwiU0ciLCJUVyIsIlVBIiwiVVMiLCJWTiIsIkJFIiwiQkoiLCJTViIsIkdIIiwiR1IiLCJHTiIsIk5aIiwiUEUiLCJQUiIsImJ1c2luZXNzIiwiZXh0ZW5zaW9uIiwiaG9tZSIsIm1vYmlsZSIsInBob25lIiwidW5rbm93biIsImNvbXBhbnkiLCJkaXJlY3QiLCJhY2NvdW50IiwiY29udGFjdCIsImxlYWQiLCJvcHBvcnR1bml0eSIsInN5c3RlbVVzZXIiLCJyY0NvbnRhY3QiLCJ0byIsImVudGVyTmFtZU9yTnVtYmVyIiwiRGlyZWN0TnVtYmVyIiwiTWFpbkNvbXBhbnlOdW1iZXIiLCJDb21wYW55TnVtYmVyIiwiQ29tcGFueUZheE51bWJlciIsIkJsb2NrZWQiLCJmcm9tIiwiQWRkaXRpb25hbENvbXBhbnlOdW1iZXIiLCJGb3J3YXJkZWRDb21wYW55TnVtYmVyIiwidHlwZU1lc3NhZ2UiLCJzZW5kIiwibG9nZ2luZyIsImxvZ0NhbGwiLCJlZGl0TG9nIiwic2VsZWN0IiwiT25Ib2xkIiwiUmluZ2luZyIsIkNhbGxDb25uZWN0ZWQiLCJ1bmtub3duVXNlciIsInVua25vd25OdW1iZXIiLCJ1bmF2YWlsYWJsZSIsInZpZXdEZXRhaWxzIiwibmV3Q29uZmVyZW5jZSIsImRpYWxJbk51bWJlciIsImhvc3QiLCJwYXJ0aWNpcGFudHMiLCJpbnRlcm5hdGlvbmFsUGFydGljaXBhbnRzIiwiaW50ZXJuYXRpb25hbE51bWJlcnNIZWFkZXIiLCJzZWFyY2giLCJpbnZpdGVXaXRoVGV4dCIsImludml0ZVRleHQiLCJob3N0QWNjZXNzIiwicGFydGljaXBhbnRzQWNjZXNzIiwiYWRkaW5hbERpYWxJbk51bWJlcnMiLCJzZWxlY3ROdW1iZXJzIiwiZW5hYmxlSm9pbkJlZm9yZUhvc3QiLCJjb25mZXJlbmNlQ29tbWFuZHMiLCJpbnZpdGVXaXRoR0NhbGVuZGFyIiwiam9pbkFzSG9zdCIsImludGVybmF0aW9uYWxOdW1iZXIiLCJzdGFyU2hhcnAyVGl0bGUiLCJzdGFyU2hhcnAyQm9keSIsInN0YXJTaGFycDNUaXRsZSIsInN0YXJTaGFycDNCb2R5Iiwic3RhclNoYXJwNFRpdGxlIiwic3RhclNoYXJwNEJvZHkiLCJzdGFyU2hhcnA1VGl0bGUiLCJzdGFyU2hhcnA1Qm9keSIsInN0YXJTaGFycDZUaXRsZSIsInN0YXJTaGFycDZCb2R5Iiwic3RhclNoYXJwN1RpdGxlIiwic3RhclNoYXJwN0JvZHkiLCJzdGFyU2hhcnA4VGl0bGUiLCJzdGFyU2hhcnA4Qm9keSIsInN0YXI5VGl0bGUiLCJzdGFyOUJvZHkiLCJjaG9vc2VFbnRpdHkiLCJjcmVhdGUiLCJzdXJlVG9EZWxldGVWb2ljZU1haWwiLCJkb05vdEFza0FnYWluIiwiZG93bmxvYWQiLCJwbGF5IiwicGF1c2UiLCJhZGRMb2ciLCJhZGRFbnRpdHkiLCJjYWxsIiwiY29udmVyc2F0aW9uIiwiZ3JvdXBDb252ZXJzYXRpb24iLCJ0ZXh0Iiwidm9pY2VNZXNzYWdlIiwidm9pY2VNYWlsIiwibm9NZXNzYWdlcyIsIm5vU2VhcmNoUmVzdWx0cyIsImNvbXBvc2VUZXh0IiwiYWxsIiwiZmF4IiwiYWRkQ29udGFjdCIsIm1pc3NlZENhbGwiLCJpbmJvdW5kQ2FsbCIsIm91dGJvdW5kQ2FsbCIsImhhbmd1cCIsImFjY2VwdCIsInRvVm9pY2VtYWlsIiwibm9BY3RpdmVDYWxscyIsImN1cnJlbnRDYWxsIiwicmluZ0NhbGwiLCJvbkhvbGRDYWxsIiwib3RoZXJEZXZpY2VDYWxsIiwibm9SZWNvcmRzIiwiZm9yd2FyZCIsImNhbmNlbCIsImN1c3RvbU51bWJlciIsInJlcGx5Iiwib25NeVdheSIsImN1c3RvbU1lc3NhZ2UiLCJjYWxsTWVCYWNrSW4iLCJ3aWxsQ2FsbFlvdUJhY2tJbiIsIm1pbiIsImhvdXJzIiwiZGF5cyIsImlnbm9yZSIsImFuc3dlciIsImFuc3dlckFuZEVuZCIsImFuc3dlckFuZEhvbGQiLCJhbm9ueW1vdXMiLCJhY3RpdmVDYWxsIiwiaGlkZSIsImVuZCIsImtleXBhZCIsInVubXV0ZSIsIm11dGUiLCJob2xkIiwib25Ib2xkIiwicGFyayIsInN0b3BSZWNvcmQiLCJyZWNvcmQiLCJhZGQiLCJ0cmFuc2ZlciIsImZsaXAiLCJIb21lIiwiTW9iaWxlIiwiV29yayIsImZsaXBIZWFkZXIiLCJjb21wbGV0ZSIsInRyYW5zZmVyVG8iLCJibGluZFRyYW5zZmVyIiwiYWN0aXZlQ2FsbHMiLCJub0NvbnRhY3RzIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJwZXJzb25hbCIsImV4dGVuc2lvbkxhYmVsIiwiZGlyZWN0TGFiZWwiLCJlbWFpbExhYmVsIiwiYXZhaWxhYmxlIiwiYnVzeSIsIm9mZmxpbmUiLCJkb05vdEFjY2VwdEFueUNhbGxzIiwiY29udGFjdERldGFpbHMiLCJkaWFsQnV0dG9uVm9sdW1lIiwicmluZ3RvbmVWb2x1bWUiLCJjYWxsVm9sdW1lIiwibXV0ZUNhbGxzIiwib3V0cHV0RGV2aWNlIiwiaW5wdXREZXZpY2UiLCJtaWNQZXJtaXNzaW9uIiwidG9waWMiLCJ3aGVuIiwiZHVyYXRpb24iLCJyZWN1cnJpbmdNZWV0aW5nIiwicmVjdXJyaW5nRGVzY3JpYmUiLCJ2aWRlbyIsInZpZGVvRGVzY3JpYmUiLCJhdWRpb09wdGlvbnMiLCJ2b0lQT25seSIsImJvdGgiLCJtZWV0aW5nT3B0aW9ucyIsInJlcXVpcmVQYXNzd29yZCIsInRlbGVwaG9ueU9ubHkiLCJzdGFydCIsInNraXAiLCJuZXh0IiwiZmluaXNoIiwiZ29vZ2xlIiwic2NoZWR1bGUiLCJwcm9tcHQiLCJpbnZpdGVXaXRoQ2FsZW5kYXIiLCJhdXRob3JpemUiLCJhY2NvdW50TG9nZ2VkT3V0Iiwibm90QXV0aG9yaXplZCIsImluQm91bmQiLCJvdXRCb3VuZCIsIm1pc3NlZCIsInJlY2VudEFjdGl2aXRpZXMiLCJ2b2ljZW1haWwiLCJnbWFpbCIsImRpYWxwYWRMYWJlbCIsImNhbGxzTGFiZWwiLCJoaXN0b3J5TGFiZWwiLCJtZXNzYWdlc0xhYmVsIiwibW9yZU1lbnVMYWJlbCIsImNvbnRhY3RzTGFiZWwiLCJtZWV0aW5nTGFiZWwiLCJjb25mZXJlbmNlTGFiZWwiLCJoYW5nb3V0c0xhYmVsIiwiaGFuZ291dHNUaXRsZSIsInNldHRpbmdzTGFiZWwiLCJvZmZsaW5lTW9kZSIsIndlYnBob25lVW5hdmFpbGFibGUiLCJldWxhIiwic2VydmljZVRlcm1zIiwic3RhdHVzIiwiYWNjZXB0UXVldWVDYWxscyIsImVuIiwiamEiLCJmciIsImRlIiwiZXMiLCJpdCIsInB0IiwiY2FsbGluZyIsImxvZ291dCIsInNldHRpbmdzIiwiY2xpY2tUb0RpYWwiLCJhdXRvQ3JlYXRlTG9nIiwiY2xpY2tUb1NNUyIsImNsaWNrVG9EaWFsU01TIiwiYXV0b0NyZWF0ZVNNU0xvZyIsImF1dG9Mb2dDYWxscyIsImF1dG9Mb2dTTVMiLCJhdWRpbyIsImxhbmd1YWdlIiwiZmVlZGJhY2siLCJ1c2VyR3VpZGUiLCJ1bmF1dGhvcml6ZWQiLCJhdXRob3JpemVkIiwidW5hdXRob3JpemVkVGl0bGUiLCJ0b29sdGlwIiwiYWRkTWVldGluZyIsImFkZE1lZXRpbmdUaXRsZSIsIm1lZXRpbmdTZXR0aW5nc1RpdGxlIiwicmVjdXJyaW5nTWVldGluZ1Byb21wdCIsIm9uIiwib2ZmIiwicGFydGljaXBhbnQiLCJ0ZWxlcGhvbmUiLCJ2b2lwIiwiam9pbkJlZm9yZUhvc3QiLCJkb05vdFNob3dBZ2FpbiIsImluY29taW5nQ2FsbCIsImluYm91bmRNZXNzYWdlIiwic21zIiwicGFnZXIiLCJ0YWtlQWxsQ2FsbHMiLCJkb05vdEFjY2VwdERlcGFydG1lbnRDYWxscyIsInRha2VEZXBhcnRtZW50Q2FsbHNPbmx5IiwiY29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixTQURzQixFQUV0QixTQUZzQixFQUd0QixNQUhzQixFQUl0QixhQUpzQixFQUt0QixZQUxzQixFQU10QixXQU5zQixDQUFULEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0ZBO0FBQ2JBLFlBQVUsb0JBREc7QUFFYkMsWUFBVTtBQUZHLEM7O0FBS2Y7QUFDQSwyRDs7Ozs7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Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsY0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsY0FIc0IsQ0FBVCxFQUlaLGNBSlksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixrQkFEc0IsRUFFdEIsZUFGc0IsQ0FBVCxFQUdaLG9CQUhZLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0Qix5QkFEc0IsQ0FBVCxFQUVaLGdCQUZZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIscUJBRHNCLENBQVQsRUFFWixlQUZZLEM7Ozs7Ozs7O0FDRmYsa0JBQWtCLHlEIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW51bSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXHJcbiAgJ2FjY291bnQnLFxyXG4gICdjb250YWN0JyxcclxuICAnbGVhZCcsXHJcbiAgJ29wcG9ydHVuaXR5JyxcclxuICAnc3lzdGVtVXNlcicsXHJcbiAgJ3JjQ29udGFjdCcsXHJcbl0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjMmRUaXRsZTogJ0xsYW1hciBjb24ge2JyYW5kfScsXG4gIHNtc1RpdGxlOiAnRW52aWFyIFNNUyBjb24ge2JyYW5kfScsXG59O1xyXG5cbi8vIEBrZXk6IEAjQFwiYzJkVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgd2l0aCB7YnJhbmR9XCJAI0Bcbi8vIEBrZXk6IEAjQFwic21zVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlNNUyB3aXRoIHticmFuZH1cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvQ2hyb21lQWRhcHRlci9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzaWduSW5FcnJvck1zZzogJ1BhcmEgY29udGludWFyLCBpbmljaWUgc2VzacOzbiBlbiBsYSBjdWVudGEgcGFyYSBsYSBxdWUgaGEgcHJvcG9yY2lvbmFkbyBwZXJtaXNvIGRlIGFjY2VzbyBhIHticmFuZH0gZGUgR29vZ2xlLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInNpZ25JbkVycm9yTXNnXCJAI0AgQHNvdXJjZTogQCNAXCJUbyBwcm9jZWVkLCBwbGVhc2UgbG9nIGluIHRoZSBhY2NvdW50IHRoYXQgeW91IGhhdmUgYXV0aG9yaXplZCB7YnJhbmR9IGZvciBHb29nbGUgdG8gYWNjZXNzLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW52aXRlTWVldGluZ0NvbnRlbnQ6ICd7YWNjb3VudE5hbWV9IGlzIGludml0aW5nIHlvdSB0byBhIHticmFuZE5hbWV9IG1lZXRpbmcuXFxuXFxuSm9pbiBmcm9tIFBDLCBNYWMsIGlPUyBvciBBbmRyb2lkOiB7am9pblVyaX17cGFzc3dvcmRUcGx9XFxuXFxuT3IgaVBob25lIG9uZS10YXA6XFxuICAgICB7bW9iaWxlRGlhbGluZ051bWJlclRwbH1cXG5cXG5PciBUZWxlcGhvbmU6XFxuICAgICBEaWFsOntwaG9uZURpYWxpbmdOdW1iZXJUcGx9XFxuICAgICBNZWV0aW5nIElEOiB7bWVldGluZ0lkfVxcbiAgICAgSW50ZXJuYXRpb25hbCBudW1iZXJzIGF2YWlsYWJsZToge3RlbGVjb25mZXJlbmNlfScsXG4gIHBhc3N3b3JkOiAnQ29udHJhc2XDsWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJpbnZpdGVNZWV0aW5nQ29udGVudFwiQCNAIEBzb3VyY2U6IEAjQFwie2FjY291bnROYW1lfSBpcyBpbnZpdGluZyB5b3UgdG8gYSB7YnJhbmROYW1lfSBtZWV0aW5nLlxcblxcbkpvaW4gZnJvbSBQQywgTWFjLCBpT1Mgb3IgQW5kcm9pZDoge2pvaW5Vcml9e3Bhc3N3b3JkVHBsfVxcblxcbk9yIGlQaG9uZSBvbmUtdGFwOlxcbiAgICAge21vYmlsZURpYWxpbmdOdW1iZXJUcGx9XFxuXFxuT3IgVGVsZXBob25lOlxcbiAgICAgRGlhbDp7cGhvbmVEaWFsaW5nTnVtYmVyVHBsfVxcbiAgICAgTWVldGluZyBJRDoge21lZXRpbmdJZH1cXG4gICAgIEludGVybmF0aW9uYWwgbnVtYmVycyBhdmFpbGFibGU6IHt0ZWxlY29uZmVyZW5jZX1cIkAjQFxuLy8gQGtleTogQCNAXCJwYXNzd29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUGFzc3dvcmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQ2FsZW5kYXIvaTE4bi9lcy1FUy5qcyIsImltcG9ydCBhdXRoTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhNZXNzYWdlcy5pbnRlcm5hbEVycm9yXTogJ1NlIGhhIHByb2R1Y2lkbyB1biBmYWxsbyBlbiBlbCBpbmljaW8gZGUgc2VzacOzbiBkZWJpZG8gYSB1biBlcnJvciBpbnRlcm5vLiBWdWVsdmEgYSBpbnRlbnRhcmxvIG3DoXMgdGFyZGUuJyxcbiAgW2F1dGhNZXNzYWdlcy5hY2Nlc3NEZW5pZWRdOiAnQWNjZXNvIGRlbmVnYWRvLiBQw7NuZ2FzZSBlbiBjb250YWN0byBjb24gZWwgc2VydmljaW8gZGUgYXRlbmNpw7NuIGFsIGNsaWVudGUuJyxcbiAgW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF06ICdMYSBzZXNpw7NuIGhhIGV4cGlyYWRvLiBJbmljaWUgc2VzacOzbi4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dpbiBmYWlsZWQgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF1cIkAjQCBAc291cmNlOiBAI0BcIkFjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNlc3Npb24gZXhwaXJlZC4gUGxlYXNlIHNpZ24gaW4uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1dGhBbGVydC9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IGNhbGxFcnJvcnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjYWxsRXJyb3JzLm5vVG9OdW1iZXJdOiAnSW50cm9kdXpjYSB1biBuw7ptZXJvIGRlIHRlbMOpZm9ubyB2w6FsaWRvLicsXG4gIFtjYWxsRXJyb3JzLm5vQXJlYUNvZGVdOiAnRGVmaW5hIGVsIHthcmVhQ29kZUxpbmt9IHBhcmEgdXRpbGl6YXIgbsO6bWVyb3MgZGUgdGVsw6lmb25vIGxvY2FsZXMgZGUgNyBkw61naXRvcy4nLFxuICBbY2FsbEVycm9ycy5zcGVjaWFsTnVtYmVyXTogJ05vIGVzIHBvc2libGUgbGxhbWFyIGEgZW1lcmdlbmNpYXMgbyBhIG7Dum1lcm9zIGRlIHNlcnZpY2lvcyBlc3BlY2lhbGVzLicsXG4gIFtjYWxsRXJyb3JzLmNvbm5lY3RGYWlsZWRdOiAnRXJyb3IgZGUgY29uZXhpw7NuLiBWdWVsdmEgYSBpbnRlbnRhcmxvIG3DoXMgdGFyZGUuJyxcbiAgW2NhbGxFcnJvcnMuaW50ZXJuYWxFcnJvcl06ICdTZSBoYSBwcm9kdWNpZG8gdW4gZmFsbG8gZW4gbGEgY29uZXhpw7NuLiBWdWVsdmEgYSBpbnRlbnRhcmxvIG3DoXMgdGFyZGUuJyxcbiAgW2NhbGxFcnJvcnMubm90QW5FeHRlbnNpb25dOiAnRWwgbsO6bWVybyBkZSBleHRlbnNpw7NuIG5vIGV4aXN0ZS4nLFxuICBbY2FsbEVycm9ycy5uZXR3b3JrRXJyb3JdOiAnTm8gc2UgcHVlZGUgY29uZWN0YXIgZGViaWRvIGEgZXJyb3JlcyBkZSByZWQuIFZ1ZWx2YSBhIGludGVudGFybG8gbcOhcyB0YXJkZS4nLFxuICBbY2FsbEVycm9ycy5ub1JpbmdvdXRFbmFibGVdOiAnU3UgZXh0ZW5zacOzbiBwdWVkZSBoYWNlciBsbGFtYWRhcyBjb24gbGEgYXBwIGRlIGVzY3JpdG9yaW8uXFxuICAgIFNpIGRlc2VhIGFjY2VkZXIgYSBvdHJhcyBvcGNpb25lc1xcbiAgICBww7NuZ2FzZSBlbiBjb250YWN0byBjb24gZWwgYWRtaW5pc3RyYWRvciBkZSBzdSBjdWVudGEgcGFyYSBsYSBhY3R1YWxpemFjacOzbi4nLFxuICBhcmVhQ29kZTogJ2PDs2RpZ28gZGUgw6FyZWEnLFxuICB0ZWx1czkxMTogJ05vIHNlIHB1ZWRlbiBoYWNlciBsbGFtYWRhcyBkZSBlbWVyZ2VuY2lhLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vVG9OdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm9BcmVhQ29kZV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5zcGVjaWFsTnVtYmVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5jb25uZWN0RmFpbGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMuaW50ZXJuYWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm90QW5FeHRlbnNpb25dXCJAI0AgQHNvdXJjZTogQCNAXCJUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5uZXR3b3JrRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm9JbnRlcm5hdGlvbmFsXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbnMgdG8gbWFrZSBpbnRlcm5hdGlvbmFsIGNhbGxzLiBQbGVhc2UgY29udGFjdCB5b3VyIHticmFuZH0gYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vUmluZ291dEVuYWJsZV1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgZXh0ZW5zaW9uIGlzIGFsbG93ZWQgdG8gbWFrZSBjYWxscyB3aXRoIGRlc2t0b3AgYXBwLlxcbiAgICBJZiB5b3Ugd2lzaCB0byBzd2l0Y2ggdG8gb3RoZXIgY2FsbGluZyBvcHRpb25zXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLlwiQCNAXG4vLyBAa2V5OiBAI0BcImFyZWFDb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJhcmVhIGNvZGVcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZWx1czkxMVwiQCNAIEBzb3VyY2U6IEAjQFwiRW1lcmdlbmN5IGRpYWxpbmcgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbEFsZXJ0L2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc106ICdMYSBjb25maWd1cmFjacOzbiBzZSBndWFyZMOzIGNvcnJlY3RhbWVudGUuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZV06ICdMYSBjb25maWd1cmFjacOzbiBzZSBndWFyZMOzIGNvcnJlY3RhbWVudGUuIEFzZWfDunJlc2UgZGUgcXVlIHRpZW5lIHticmFuZH0gcGFyYSBlc2NyaXRvcmlvIGluc3RhbGFkbyBlbiBzdSBlcXVpcG8uJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmZpcnN0TG9naW5dOiAnU2VsZWNjaW9uZSBjw7NtbyBxdWllcmUgcmVhbGl6YXIgc3UgbGxhbWFkYSBlbiBsYSBzZWNjacOzbiBMbGFtYWRhcy4gU2Vyw61hIGNvbnZlbmllbnRlIHF1ZSBub3MgZGlqZXJhIGN1w6FsIGVzIHN1IHViaWNhY2nDs24gYSB0cmF2w6lzIGRlbCBjw7NkaWdvIGRlIHBhw61zIHkgZGUgw6FyZWEgKHNpIGZ1ZXJhIHBvc2libGUpIGVuIGxhIHNlY2Npw7NuIFJlZ2nDs24sIHBhcmEgcG9kZXIgdXRpbGl6YXIgdW5hIG1hcmNhY2nDs24gbG9jYWwgY29uIGxhIGFwbGljYWNpw7NuLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5maXJzdExvZ2luT3RoZXJdOiAnU2VsZWNjaW9uZSBjw7NtbyBxdWllcmUgcmVhbGl6YXIgc3UgbGxhbWFkYSBlbiBsYSBzZWNjacOzbiBMbGFtYWRhcy4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGVybWlzc2lvbkNoYW5nZWRdOiAnU3VzIHBlcm1pc29zIGhhbiBjYW1iaWFkbyByZWNpZW50ZW1lbnRlLiBWYXlhIGEge2xpbmt9IHBhcmEgY29tcHJvYmFyIHN1cyBvcGNpb25lcyBkZSBsbGFtYWRhcy4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGhvbmVOdW1iZXJDaGFuZ2VkXTogJ0xhIGluZm9ybWFjacOzbiBkZSBzdSBuw7ptZXJvIGRlIHRlbMOpZm9ubyBoYSBjYW1iaWFkbyByZWNpZW50ZW1lbnRlLiBWYXlhIGEge2xpbmt9IHBhcmEgY29tcHJvYmFyIHN1cyBvcGNpb25lcyBkZSBsbGFtYWRhcy4nLFxuICBsaW5rOiAnQ29uZmlndXJhY2nDs24gPiBMbGFtYWRhcycsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy53ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkXTogJ1N1cyBwZXJtaXNvcyBoYW4gY2FtYmlhZG8geSB5YSBubyBwdWVkZSBoYWNlciBsbGFtYWRhcyBjb24gZWwgbmF2ZWdhZG9yLiBQw7NuZ2FzZSBlbiBjb250YWN0byBjb24gZWwgYWRtaW5pc3RyYWRvciBkZSBzdSBjdWVudGEgcGFyYSBvYnRlbmVyIGluZm9ybWFjacOzbiBkZXRhbGxhZGEuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGVdOiAnTm8gZXMgcG9zaWJsZSBsbGFtYXIgYSBlbWVyZ2VuY2lhcyBvIGEgbsO6bWVyb3MgZGUgc2VydmljaW9zIGVzcGVjaWFsZXMuIEFudGUgdW5hIGVtZXJnZW5jaWEsIHVzZSBsYSBsw61uZWEgZmlqYSBvIGVsIHRlbMOpZm9ubyBtw7N2aWwgcGFyYSBsbGFtYXIgYSB1biBuw7ptZXJvIGRlIGVtZXJnZW5jaWFzLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBoYXZlIHticmFuZH0gZm9yIERlc2t0b3AgaW5zdGFsbGVkIGluIHlvdXIgY29tcHV0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBlcm1pc3Npb25DaGFuZ2VkXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGhvbmVOdW1iZXJDaGFuZ2VkXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBwaG9uZSBudW1iZXIgaW5mb3JtYXRpb24gaGFzIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy5cIkAjQFxuLy8gQGtleTogQCNAXCJsaW5rXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyA+IENhbGxpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZF1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgcGVybWlzc2lvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgYW5kIHlvdSBjYW5ub3QgbWFrZSBjYWxscyB3aXRoIEJyb3dzZXIuIEZvciBkZXRhaWxzIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5lbWVyZ2VuY3lDYWxsaW5nTm90QXZhaWxhYmxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4gSW4gYW4gZW1lcmdlbmN5LCB1c2UgeW91ciB0cmFkaXRpb25hbCB3aXJlbGluZSBvciB3aXJlbGVzcyBwaG9uZSB0byBjYWxsIGFuIGVtZXJnZW5jeSBudW1iZXIuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1JlZ2lvblNldHRpbmdzL3JlZ2lvblNldHRpbmdzTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlZ2lvbjogJ1JlZ2nDs24nLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc106ICdMYSBjb25maWd1cmFjacOzbiBzZSBndWFyZMOzIGNvcnJlY3RhbWVudGUuJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuZGlhbGluZ1BsYW5zQ2hhbmdlZF06ICdTdSBjdWVudGEgeWEgbm8gZXMgY29tcGF0aWJsZSBjb24gbGEgcmVnacOzbiBhbnRlcmlvci5cXG4gICAgQ29tcHJ1ZWJlIHN1IG51ZXZhIHtyZWdpb25TZXR0aW5nc0xpbmt9LicsXG4gIHJlZ2lvblNldHRpbmdzOiAnY29uZmlndXJhY2nDs24gZGUgcmVnacOzbicsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmFyZWFDb2RlSW52YWxpZF06ICdJbnRyb2R1emNhIHVuIGPDs2RpZ28gZGUgw6FyZWEgdsOhbGlkby4nLFxufTtcblxuLy8gQGtleTogQCNAXCJyZWdpb25cIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcIltyZWdpb25TZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmRpYWxpbmdQbGFuc0NoYW5nZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJUaGUgcHJldmlvdXMgcmVnaW9uIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgZm9yIHlvdXIgYWNjb3VudC5cXG4gICAgUGxlYXNlIHZlcmlmeSB5b3VyIG5ldyB7cmVnaW9uU2V0dGluZ3NMaW5rfS5cIkAjQFxuLy8gQGtleTogQCNAXCJyZWdpb25TZXR0aW5nc1wiQCNAIEBzb3VyY2U6IEAjQFwicmVnaW9uIHNldHRpbmdzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuYXJlYUNvZGVJbnZhbGlkXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYXJlYSBjb2RlLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgbWVzc2FnZVNlbmRlck1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZFN1Y2Nlc3NdOiAnRW52aWFyIMOpeGl0by4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRFcnJvcl06ICdIYSBvY3VycmlkbyB1biBlcnJvciBhbCBlbnZpYXIgZWwgbWVuc2FqZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdOiAnRXJyb3IgYWwgdmFsaWRhciBlbCBuw7ptZXJvIGRlIHRlbMOpZm9uby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRFbXB0eV06ICdFc2NyaWJhIGVsIG1lbnNhamUgcXVlIGRlc2VhIGVudmlhci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vUGVybWlzc2lvbl06ICdObyB0aWVuZSBwZXJtaXNvIHBhcmEgZW52aWFyIGVzdGUgbWVuc2FqZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRlckVtcHR5XTogJ0RlYmUgc2VsZWNjaW9uYXIgdW4gbsO6bWVybyBkZXNkZSBzdSB0ZWzDqWZvbm8gcGFyYSBlbnZpYXIgZWwgbWVuc2FqZScsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl06ICdOw7ptZXJvIGRlIHRlbMOpZm9ubyBubyB2w6FsaWRvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50c0VtcHR5XTogJ0ludHJvZHV6Y2EgdW4gbsO6bWVybyB2w6FsaWRvIGRlIGRlc3RpbmF0YXJpby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRUb29Mb25nXTogJ0VsIG1lbnNhamUgZXMgZGVtYXNpYWRvIGxhcmdvLiBFbCBuw7ptZXJvIG3DoXhpbW8gZGUgY2FyYWN0ZXJlcyBwZXJtaXRpZG9zIGVzIDEwMDAnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vQXJlYUNvZGVdOiAnRGVmaW5hIGVsIHthcmVhQ29kZUxpbmt9IHBhcmEgdXRpbGl6YXIgbsO6bWVyb3MgZGUgdGVsw6lmb25vIGxvY2FsZXMgZGUgNyBkw61naXRvcy4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdOiAnTm8gZXMgcG9zaWJsZSBsbGFtYXIgYSBlbWVyZ2VuY2lhcyBuaSBhIG7Dum1lcm9zIGRlIHNlcnZpY2lvcyBlc3BlY2lhbGVzLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF06ICdFcnJvciBkZSBjb25leGnDs24uIFZ1ZWx2YSBhIGludGVudGFybG8gbcOhcyB0YXJkZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmludGVybmFsRXJyb3JdOiAnU2UgaGEgcHJvZHVjaWRvIHVuIGZhbGxvIGVuIGxhIGNvbmV4acOzbi4gVnVlbHZhIGEgaW50ZW50YXJsbyBtw6FzIHRhcmRlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90QW5FeHRlbnNpb25dOiAnRWwgbsO6bWVybyBkZSBleHRlbnNpw7NuIG5vIGV4aXN0ZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5ldHdvcmtFcnJvcl06ICdObyBzZSBwdWVkZSBjb25lY3RhciBkZWJpZG8gYSBlcnJvcmVzIGRlIHJlZC4gVnVlbHZhIGEgaW50ZW50YXJsbyBtw6FzIHRhcmRlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyTnVtYmVySW52YWxpZF06ICdObyB0aWVuZSBwZXJtaXNvIHBhcmEgZW52aWFyIG1lbnNhamVzIGEgZGVzdGluYXRhcmlvcyBxdWUgbm8gcGVydGVuZWNlbiBhIHN1IG9yZ2FuaXphY2nDs24uIFDDs25nYXNlIGVuIGNvbnRhY3RvIGNvbiBlbCBhZG1pbmlzdHJhZG9yIGRlIHN1IGN1ZW50YSBkZSBSaW5nQ2VudHJhbCBwYXJhIGNvbnNlZ3VpciB1bmEgYWN0dWFsaXphY2nDs24uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RTbXNUb0V4dGVuc2lvbl06ICdObyBzZSBwdWVkZSBlbnZpYXIgYSB1biBuw7ptZXJvIGRlIGV4dGVuc2nDs24gZGVzZGUgdW4gbsO6bWVybyBkZSB0ZWzDqWZvbm8gcHJpbmNpcGFsLiBTaSBxdWllcmUgZW52aWFyIHVuIG1lbnNhamUgYSB1biBuw7ptZXJvIGRlIGV4dGVuc2nDs24sIGVzY3JpYmEgc29sbyBkaWNobyBuw7ptZXJvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZF06ICdObyBlcyBwb3NpYmxlIGVudmlhciBTTVMgYSBuw7ptZXJvcyBkZSB0ZWzDqWZvbm8gaW50ZXJuYWNpb25hbGVzLicsXG4gIGFyZWFDb2RlOiAnY8OzZGlnbyBkZSDDoXJlYScsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50TnVtYmVySW52YWxpZHNdOiAnSW50cm9kdXpjYSB1biBuw7ptZXJvIGRlIHRlbMOpZm9ubyB2w6FsaWRvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9JbnRlcm5hbFNNU1Blcm1pc3Npb25dOiAnTm8gdGllbmUgcGVybWlzbyBwYXJhIGVudmlhciBtZW5zYWplcy4gUMOzbmdhc2UgZW4gY29udGFjdG8gY29uIGVsIGFkbWluaXN0cmFkb3IgZGUgc3UgY3VlbnRhIGRlIFJpbmdDZW50cmFsIHBhcmEgY29uc2VndWlyIHVuYSBhY3R1YWxpemFjacOzbi4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRpbmddOiAnRW52aWFuZG8gbWVuc2FqZS4uLiBFc3RvIHB1ZWRlIHRhcmRhciBhbGd1bm9zIG1pbnV0b3MuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIlNlbmQgU3VjY2Vzcy5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIlNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGVuIHNlbmQgbWVzc2FnZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJQaG9uZSBOdW1iZXIgVmFsaWRhdGUgRXJyb3IuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0RW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gYmUgc2VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vUGVybWlzc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIG5vIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyRW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgbXVzdCBzZWxlY3QgYSBudW1iZXIgZnJvbSB5b3VyIHBob25lIG51bWJlcnMgdG8gc2VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIkludmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50c0VtcHR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVjZWl2ZXIgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dFRvb0xvbmddXCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0IGlzIHRvbyBsb25nLCAxMDAwIExpbWl0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudE51bWJlckludmFsaWRzXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9BcmVhQ29kZV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbm5lY3Rpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RBbkV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIlRoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubmV0d29ya0Vycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIG5ldHdvcmsgaXNzdWVzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyTnVtYmVySW52YWxpZF1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlcyB0byByZWNpcGllbnRzIG91dHNpZGUgb2YgeW91ciBvcmdhbml6YXRpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgUmluZ0NlbnRyYWwgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciB1cGdyYWRlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90U21zVG9FeHRlbnNpb25dXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3Qgc2VuZCBUbyBhIGV4dGVuc2lvbiBudW1iZXIgd2l0aCBtYWluIHBob25lIG51bWJlci4gSWYgeW91IHdhbnQgdG8gc2VudCB0byBhIGV4dGVuc2lvbiBOdW1iZXIsIHBsZWFzZSBqdXN0IGVudGVyIGV4dGVuc2lvbiBOdW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZGluZyBTTVMgdG8gaW50ZXJuYXRpb25hbCBwaG9uZSBudW1iZXIgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vSW50ZXJuYWxTTVNQZXJtaXNzaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2VzLiBQbGVhc2UgY29udGFjdCB5b3VyIFJpbmdDZW50cmFsIGFjY291bnQgYWRtaW5pc3RyYXRvciBmb3IgdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiYXJlYSBjb2RlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kaW5nXVwiQCNAIEBzb3VyY2U6IEAjQFwiTWVzc2FnZSBiZWluZyBzZW504oCmSXQgbWF5IHRha2UgYSBjb3VwbGUgb2YgbWludXRlcyB0byBjb21wbGV0ZS5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJhdGVFeGNlZWRlZDogJ0zDrW1pdGUgZGUgc29saWNpdHVkZXMgc29icmVwYXNhZG8uIExhIGFwbGljYWNpw7NuIHNlIGNlcnJhcsOhIGVuIHt0dGx9IHNlZ3VuZG9zLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInJhdGVFeGNlZWRlZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4gQXBwIHdpbGwgcmVzdW1lIGluIHt0dGx9IHNlY29uZHMuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29ubmVjdGl2aXR5TW9uaXRvci9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMuZGlzY29ubmVjdGVkXTogJ1NlIGhhIHBlcmRpZG8gbGEgY29uZXhpw7NuIGRlIGxhIHJlZC4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmRpc2Nvbm5lY3RlZF1cIkAjQCBAc291cmNlOiBAI0BcIk5ldHdvcmsgY29ubmVjdGlvbiBpcyBsb3N0LlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IHdlYnBob25lRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvV2VicGhvbmUvd2VicGhvbmVFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFt3ZWJwaG9uZUVycm9ycy5jb25uZWN0RmFpbGVkXTogJ0VudsOtbyBjb3JyZWN0by4nLFxuICBbd2VicGhvbmVFcnJvcnMuYnJvd3Nlck5vdFN1cHBvcnRlZF06ICdMYXMgbGxhbWFkYXMgY29uIGVsIG5hdmVnYWRvciBzb2xvIHNlIHBlcm1pdGVuIGVuIENocm9tZS4nLFxuICBbd2VicGhvbmVFcnJvcnMud2VicGhvbmVDb3VudE92ZXJMaW1pdF06ICdTZSBoYW4gcG9kaWRvIHJlZ2lzdHJhciA1IHRlbMOpZm9ub3Mgd2ViIGVuIHRvdGFsLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5ub3RPdXRib3VuZENhbGxXaXRob3V0RExdOiAnRW4gZXN0ZSBtb21lbnRvLCBzdSBleHRlbnNpw7NuIG5vIHB1ZWRlIHJlYWxpemFyIGxsYW1hZGFzIHNhbGllbnRlcyBjb24gZWwgbmF2ZWdhZG9yLiBQw7NuZ2FzZSBlbiBjb250YWN0byBjb24gc3UgcmVwcmVzZW50YW50ZSBkZSBjdWVudGFzIHBhcmEgYWNjZWRlciBhIHVuYSBhY3R1YWxpemFjacOzbi4nLFxuICBbd2VicGhvbmVFcnJvcnMuZ2V0U2lwUHJvdmlzaW9uRXJyb3JdOiAnTm8gdGllbmUgcGVybWlzbyBwYXJhIGVudmlhciBlc3RlIG1lbnNhamUuJyxcbiAgW3dlYnBob25lRXJyb3JzLmNvbm5lY3RlZF06ICdUZWzDqWZvbm8gd2ViIHJlZ2lzdHJhZG8uJyxcbiAgW3dlYnBob25lRXJyb3JzLnRvVm9pY2VNYWlsRXJyb3JdOiAnTm8gc2UgcHVlZGUgZW52aWFyIGxhIGxsYW1hZGEgYWwgYnV6w7NuIGRlIHZveiBkZWJpZG8gYSB1biBlcnJvciBpbnRlcm5vJyxcbiAgW3dlYnBob25lRXJyb3JzLm11dGVFcnJvcl06ICdObyBzZSBwdWVkZSBzaWxlbmNpYXIgbGEgbGxhbWFkYSBlbiBlc3RlIG1vbWVudG8uJyxcbiAgW3dlYnBob25lRXJyb3JzLmhvbGRFcnJvcl06ICdObyBzZSBwdWVkZSBwb25lciBsYSBsbGFtYWRhIGVuIGVzcGVyYSBlbiBlc3RlIG1vbWVudG8uJyxcbiAgW3dlYnBob25lRXJyb3JzLmZsaXBFcnJvcl06ICdObyBzZSBwdWVkZSBoYWNlciBmbGlwIGVuIGxhIGxsYW1hZGEuIFZ1ZWx2YSBhIGludGVudGFybG8gbcOhcyB0YXJkZS4nLFxuICBbd2VicGhvbmVFcnJvcnMucmVjb3JkRXJyb3JdOiAnTm8gcHVlZGUgZ3JhYmFyIGxhIGxsYW1hZGEgZW4gZXN0ZSBtb21lbnRvLiBDw7NkaWdvIGRlIGVycm9yOiB7ZXJyb3JDb2RlfScsXG4gIFt3ZWJwaG9uZUVycm9ycy5yZWNvcmREaXNhYmxlZF06ICdTdSBjdWVudGEgbm8gaW5jbHV5ZSBsYSBmdW5jacOzbiBwYXJhIGdyYWJhciBsbGFtYWRhcy4gUMOzbmdhc2UgZW4gY29udGFjdG8gY29uIGVsIGFkbWluaXN0cmFkb3IgZGUgc3UgY3VlbnRhLicsXG4gIFt3ZWJwaG9uZUVycm9ycy50cmFuc2ZlckVycm9yXTogJ05vIHNlIHB1ZWRlIHRyYW5zZmVyaXIgbGEgbGxhbWFkYS4gVnVlbHZhIGEgaW50ZW50YXJsbyBtw6FzIHRhcmRlLicsXG4gIHdlYnBob25lVW5hdmFpbGFibGU6ICd7ZXJyb3J9LiBFc3RhbW9zIHZvbHZpZW5kbyBhIGNvbmVjdGFyIGNvbiBlbCBzZXJ2aWRvci4gU2kgZWwgZXJyb3IgcGVyc2lzdGUsIHDDs25nYXNlIGVuIGNvbnRhY3RvIGNvbiBlbCBzZXJ2aWNpbyB0w6ljbmljbyBkZSB7YnJhbmROYW1lfS4nLFxuICBlcnJvckNvZGU6ICdDw7NkaWdvIGRlIGVycm9yIGludGVybm86IHtlcnJvckNvZGV9JyxcbiAgb2NjdXJzOiAnU2UgaGEgcHJvZHVjaWRvIHVuIGVycm9yIGludGVybm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuY29ubmVjdEZhaWxlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbm5lY3Qgd2l0aCB3ZWIgcGhvbmUgc2VydmVyIGZhaWxlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuY29ubmVjdGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiV2ViIHBob25lIHJlZ2lzdGVyZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmJyb3dzZXJOb3RTdXBwb3J0ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsaW5nIHdpdGggYnJvd3NlciBpcyBvbmx5IHN1cHBvcnRlZCBvbiBDaHJvbWUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLndlYnBob25lQ291bnRPdmVyTGltaXRdXCJAI0AgQHNvdXJjZTogQCNAXCJBIG1heGltdW0gb2YgNSB3ZWIgcGhvbmVzIGNvdWxkIGJlIHJlZ2lzdGVyZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLm5vdE91dGJvdW5kQ2FsbFdpdGhvdXRETF1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgZXh0ZW5zaW9uIGlzIG5vdCBhbGxvd2VkIHRvIG1ha2Ugb3V0Ym91bmQgY2FsbHMgd2l0aCBicm93c2VyIGN1cnJlbnRseSwgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIGZvciBhbiB1cGdyYWRlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5nZXRTaXBQcm92aXNpb25FcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIG5vIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy50b1ZvaWNlTWFpbEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IHNlbmQgY2FsbCB0byB2b2ljZW1haWwgZHVlIHRvIGludGVybmFsIGVycm9yXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLm11dGVFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgY2Fubm90IGJlIG11dGVkIGF0IHRoZSBtb21lbnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmhvbGRFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgY2Fubm90IGJlIGhvbGQgYXQgdGhlIG1vbWVudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuZmxpcEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGZsaXAgdGhlIGNhbGwuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLnJlY29yZEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGNhbm5vdCByZWNvcmQgdGhlIGNhbGwgYXQgdGhlIG1vbWVudC4gRXJyb3IgY29kZToge2Vycm9yQ29kZX1cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMucmVjb3JkRGlzYWJsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJTb3JyeSwgeW91ciBhY2NvdW50IGRvZXMgbm90IGhhdmUgdGhlIGZlYXR1cmUgdG8gcmVjb3JkIGEgY2FsbC4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLnRyYW5zZmVyRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgdHJhbnNmZXIgdGhlIGNhbGwuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwid2VicGhvbmVVbmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwie2Vycm9yfS4gV2UgYXJlIHJlY29ubmVjdGluZyB0byBzZXJ2ZXIuIElmIHRoZSBlcnJvciBwZXJzaXN0cywgcGxlYXNlIHJlcG9ydCB0aGlzIGVycm9yIHRvIHticmFuZE5hbWV9IFN1cHBvcnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZXJyb3JDb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJJbnRlcm5hbCBlcnJvciBjb2RlOiB7ZXJyb3JDb2RlfVwiQCNAXG4vLyBAa2V5OiBAI0BcIm9jY3Vyc1wiQCNAIEBzb3VyY2U6IEAjQFwiSW50ZXJuYWwgZXJyb3Igb2NjdXJzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1dlYnBob25lQWxlcnQvaTE4bi9lcy1FUy5qcyIsImltcG9ydCBtZXNzYWdlU3RvcmVFcnJvcnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZXNzYWdlU3RvcmUvbWVzc2FnZVN0b3JlRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbbWVzc2FnZVN0b3JlRXJyb3JzLmRlbGV0ZUZhaWxlZF06ICdObyBzZSBwdWVkZSBlbGltaW5hciBlbCBtZW5zYWplIGRlIHZveiBhIGNhdXNhIGRlIHVuIGVycm9yIGRlbCBzZXJ2aWRvciBpbnRlcm5vLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU3RvcmVFcnJvcnMuZGVsZXRlRmFpbGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGRlbGV0ZSB0aGUgdm9pY2VtYWlsIGR1ZSB0byBpbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VTdG9yZUFsZXJ0L2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgbWVldGluZ1N0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL01lZXRpbmcvbWVldGluZ1N0YXR1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lZXRpbmdTdGF0dXMuZW1wdHlUb3BpY106ICdFc2NyaWJhIGVsIHRlbWEgZGUgbGEgcmV1bmnDs24uJyxcbiAgW21lZXRpbmdTdGF0dXMubm9QYXNzd29yZF06ICdJbmRpcXVlIGxhIGNvbnRyYXNlw7FhIGRlIGxhIHJldW5pw7NuLicsXG4gIFttZWV0aW5nU3RhdHVzLnNjaGVkdWxlZFN1Y2Nlc3NdOiAnTGEgcmV1bmnDs24gc2UgaGEgcHJvZ3JhbWFkby4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbbWVldGluZ1N0YXR1cy5lbXB0eVRvcGljXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIG1lZXRpbmcgdG9waWMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lZXRpbmdTdGF0dXMubm9QYXNzd29yZF1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBwcm92aWRlIG1lZXRpbmcgcGFzc3dvcmQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lZXRpbmdTdGF0dXMuc2NoZWR1bGVkU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIk1lZXRpbmcgaXMgc2NoZWR1bGVkLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9lcy1FUy5qcyIsImltcG9ydCBhdWRpb1NldHRpbmdzRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQXVkaW9TZXR0aW5ncy9hdWRpb1NldHRpbmdzRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbYXVkaW9TZXR0aW5nc0Vycm9ycy51c2VyTWVkaWFQZXJtaXNzaW9uXTogJ0NvbmNlZGEgYWNjZXNvIGFsIGF1ZGlvIGEge2JyYW5kTmFtZX0gcGFyYSBHb29nbGUuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2F1ZGlvU2V0dGluZ3NFcnJvcnMudXNlck1lZGlhUGVybWlzc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBncmFudCB7YnJhbmROYW1lfSBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIGF1ZGlvLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BdWRpb1NldHRpbmdzQWxlcnQvaTE4bi9lcy1FUy5qcyIsImltcG9ydCBwZXJtaXNzaW9uTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9Sb2xlc0FuZFBlcm1pc3Npb25zL3Blcm1pc3Npb25zTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwZXJtaXNzaW9uTWVzc2FnZXMuaW52YWxpZFRpZXJdOiAnRXN0YSBlZGljacOzbiBubyBhZG1pdGUgbGEgaW50ZWdyYWNpw7NuIGNvbiB7YXBwbGljYXRpb259LiBMbGFtZSBhIHN1IHJlcHJlc2VudGFudGUgZGUgY3VlbnRhcyBwYXJhIGFjdHVhbGl6YXIgc3UgZWRpY2nDs24gZGUge2JyYW5kfS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGVybWlzc2lvbk1lc3NhZ2VzLmludmFsaWRUaWVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBlZGl0aW9uIGRvZXMgbm90IHN1cHBvcnQge2FwcGxpY2F0aW9ufSBpbnRlZ3JhdGlvbi4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIHRvIHVwZ3JhZGUgeW91ciB7YnJhbmR9IGVkaXRpb24uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Blcm1pc3Npb25NZXNzYWdlcy5pbnN1ZmZpY2llbnRQcml2aWxlZ2VdXCJAI0AgQHNvdXJjZTogQCNAXCJJbnN1ZmZpY2llbnQgcHJpdmlsZWdlLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JvbGVzQW5kUGVybWlzc2lvbnNBbGVydC9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VzLnJlcXVpcmVBZGl0aW9uYWxOdW1iZXJzXTogJ1NlbGVjY2lvbmUgbG9zIG7Dum1lcm9zIGRlIG1hcmNhY2nDs24gYWRpY2lvbmFsZXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJbbWVzc2FnZXMucmVxdWlyZUFkaXRpb25hbE51bWJlcnNdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2VsZWN0IHRoZSBhZGRpdGlvbmFsIGRpYWwtaW4gbnVtYmVycy5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29uZmVyZW5jZUFsZXJ0L2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2luQnV0dG9uOiAnSW5pY2lhciBzZXNpw7NuJyxcbiAgdmVyc2lvbjogJ1ZlcnNpw7NuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9naW5CdXR0b25cIkAjQCBAc291cmNlOiBAI0BcIlNpZ24gSW5cIkAjQFxuLy8gQGtleTogQCNAXCJ2ZXJzaW9uXCJAI0AgQHNvdXJjZTogQCNAXCJWZXJzaW9uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0xvZ2luUGFuZWwvaTE4bi9lcy1FUy5qcyIsImltcG9ydCBjYWxsaW5nT3B0aW9ucyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdMbGFtYWRhcycsXG4gIFtjYWxsaW5nT3B0aW9ucy5zb2Z0cGhvbmVdOiAne2JyYW5kfSBwYXJhIGVzY3JpdG9yaW8nLFxuICBbY2FsbGluZ09wdGlvbnMubXlwaG9uZV06ICdNaSB0ZWzDqWZvbm8ge2JyYW5kfSAnLFxuICBbY2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZV06ICdPdHJvIHRlbMOpZm9ubycsXG4gIFtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZV06ICdQZXJzb25hbGl6YXIgdGVsw6lmb25vJyxcbiAgbWFrZUNhbGxzV2l0aDogJ1JlYWxpemFyIG1pcyBsbGFtYWRhcyBjb24nLFxuICByaW5nb3V0SGludDogJ0xsYW1hciBwcmltZXJvIGEgbWkgdWJpY2FjacOzbiB5IGNvbmVjdGFyIGRlc3B1w6lzIGNvbiBsYSBwYXJ0ZSBxdWUgbGxhbWEnLFxuICBteUxvY2F0aW9uTGFiZWw6ICdNaSB1YmljYWNpw7NuJyxcbiAgcHJlc3MxVG9TdGFydENhbGxMYWJlbDogJ0F2aXNhcm1lIGRlIHF1ZSBtYXJxdWVcXHhBMDEgcGFyYSBjb25lY3RhciBsYSBsbGFtYWRhJyxcbiAgW2NhbGxpbmdPcHRpb25zLmJyb3dzZXJdOiAnTmF2ZWdhZG9yJyxcbiAgc2F2ZTogJ0d1YXJkYXInLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF06ICdVdGlsaWNlIGVzdGEgb3BjacOzbiBwYXJhIGhhY2VyIHkgcmVjaWJpciBsbGFtYWRhcyBjb24gZWwgbWljcsOzZm9ubyB5IGxvcyBhbHRhdm9jZXMgZGUgc3UgZXF1aXBvLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5zb2Z0cGhvbmV9VG9vbHRpcGBdOiAnVXRpbGljZSBlc3RhIG9wY2nDs24gcGFyYSBoYWNlciB5IHJlY2liaXIgbGxhbWFkYXMgY29uIHN1IHRlbMOpZm9ubyB7YnJhbmR9IHBhcmEgbGEgYXBsaWNhY2nDs24gZGUgZXNjcml0b3Jpby4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcGNpw7NuIHBhcmEgaGFjZXIgbGxhbWFkYXMgdXNhbmRvIHN1IHRlbMOpZm9ubyB7YnJhbmR9LicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5teXBob25lfVRvb2x0aXAxYF06ICdFbiBsYSBsbGFtYWRhIHF1ZSByZWFsaWNlLCBwcmltZXJvIHNvbmFyw6Egc3UgdGVsw6lmb25vIHticmFuZH0geSBsdWVnbyBlbCBkZSBsYSBwZXJzb25hIGEgbGEgcXVlIGxsYW1hLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXBgXTogJ1V0aWxpY2UgZXN0YSBvcGNpw7NuIHBhcmEgcmVhbGl6YXIgbGxhbWFkYXMgZGVzZGUgZWwgcmVzdG8gZGUgbG9zIHRlbMOpZm9ub3MgcXVlIGhhIGHDsWFkaWRvIGEgc3UgZXh0ZW5zacOzbiB7YnJhbmR9LCBjb21vIGVsIGRlIHN1IGNhc2EgbyBlbCBtw7N2aWwuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcDFgXTogJ0VuIGxhIGxsYW1hZGEgcXVlIHJlYWxpY2UsIGVzdGUgdGVsw6lmb25vIHNvbmFyw6EgcHJpbWVybyB5IGx1ZWdvIGVsIGRlIGxhIHBlcnNvbmEgYSBsYSBxdWUgbGxhbWEuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lfVRvb2x0aXBgXTogJ1VzZSBlc3RhIG9wY2nDs24gcGFyYSByZWFsaXphciBsbGFtYWRhcyB1c2FuZG8gZWwgdGVsw6lmb25vIGRlIHN1IHByZWZlcmVuY2lhLCBpbnRyb2R1Y2llbmRvIHVuIG7Dum1lcm8gZGUgdGVsw6lmb25vIHbDoWxpZG8gZW4gZWwgY2FtcG8gcXVlIGFwYXJlY2UgYSBjb250aW51YWNpw7NuLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdOiAnRW4gbGEgbGxhbWFkYSBxdWUgcmVhbGljZSwgZXN0ZSB0ZWzDqWZvbm8gc29uYXLDoSBwcmltZXJvIHkgbHVlZ28gZWwgZGUgbGEgcGVyc29uYSBhIGxhIHF1ZSBsbGFtYS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nT3B0aW9ucy5zb2Z0cGhvbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJ7YnJhbmR9IGZvciBEZXNrdG9wXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLm15cGhvbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJNeSB7YnJhbmR9IFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJPdGhlciBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIkN1c3RvbSBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nT3B0aW9ucy5icm93c2VyXVwiQCNAIEBzb3VyY2U6IEAjQFwiQnJvd3NlclwiQCNAXG4vLyBAa2V5OiBAI0BcIm1ha2VDYWxsc1dpdGhcIkAjQCBAc291cmNlOiBAI0BcIk1ha2UgbXkgY2FsbHMgd2l0aFwiQCNAXG4vLyBAa2V5OiBAI0BcInJpbmdvdXRIaW50XCJAI0AgQHNvdXJjZTogQCNAXCJSaW5nIG1lIGF0IG15IGxvY2F0aW9uIGZpcnN0LCB0aGVuIGNvbm5lY3QgdGhlIGNhbGxlZCBwYXJ0eVwiQCNAXG4vLyBAa2V5OiBAI0BcIm15TG9jYXRpb25MYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiTXkgTG9jYXRpb25cIkAjQFxuLy8gQGtleTogQCNAXCJwcmVzczFUb1N0YXJ0Q2FsbExhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJQcm9tcHQgbWUgdG8gZGlhbCAxIGJlZm9yZSBjb25uZWN0aW5nIHRoZSBjYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLmJyb3dzZXJ9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBhbmQgcmVjZWl2ZSBjYWxscyB1c2luZyB5b3VyIGNvbXB1dGVy4oCZcyBtaWNyb3Bob25lIGFuZCBzcGVha2VyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5zb2Z0cGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBhbmQgcmVjZWl2ZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gZm9yIERlc2t0b3AgYXBwLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5teXBob25lfVRvb2x0aXBgXVwiQCNAIEBzb3VyY2U6IEAjQFwiVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgeW91ciB7YnJhbmR9IHBob25lLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5teXBob25lfVRvb2x0aXAxYF1cIkAjQCBAc291cmNlOiBAI0BcIkZvciB0aGUgY2FsbCB5b3UgbWFrZSwgeW91ciB7YnJhbmR9IHBob25lIHdpbGwgcmluZyBmaXJzdCB0aGVuIHRoZSBwYXJ0eSB5b3UgY2FsbGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXBgXVwiQCNAIEBzb3VyY2U6IEAjQFwiVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgeW91ciBvdGhlciBwaG9uZXMgc3VjaCBhcyBob21lIG9yIGNlbGwgcGhvbmVzIHRoYXQgeW91IGhhdmUgYWRkZWQgaW4geW91ciB7YnJhbmR9IEV4dGVuc2lvbi5cIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZX1Ub29sdGlwMWBdXCJAI0AgQHNvdXJjZTogQCNAXCJGb3IgdGhlIGNhbGwgeW91IG1ha2UsIHRoaXMgcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lfVRvb2x0aXBgXVwiQCNAIEBzb3VyY2U6IEAjQFwiVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgYW55IHBob25lIG9mIHlvdXIgY2hvaWNlIGJ5IGVudGVyaW5nIGEgdmFsaWQgcGhvbmUgbnVtYmVyIGluIHRoZSBmaWVsZCBiZWxvdy5cIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcDFgXVwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB0aGlzIHBob25lIHdpbGwgcmluZyBmaXJzdCB0aGVuIHRoZSBwYXJ0eSB5b3UgY2FsbGVkLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NQYW5lbC9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSAnLi4vSGFzaE1hcCc7XG5cbmNvbnN0IHsgaGFzT3duUHJvcGVydHkgfSA9IE9iamVjdC5wcm90b3R5cGU7XG4vKipcbiAqIEBjbGFzc1xuICogQGRlc2NyaXB0aW9uIGhlbHBlciBjbGFzcyBmb3IgY3JlYXRpbmcgcmVkdXggYWN0aW9uIGRlZmluaXRpb24gbWFwc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnVtIGV4dGVuZHMgSGFzaE1hcCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmdbXX0gYWN0aW9ucyAtIGxpc3Qgb2YgYWN0aW9uIHN0cmluZ3NcbiAgICogQGV4dGVuZHMgSGFzaE1hcFxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzID0gW10sIHByZWZpeCA9ICcnKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHt9O1xuICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgZGVmaW5pdGlvblt2YWx1ZV0gPSBwcmVmaXggIT09ICcnID8gYCR7cHJlZml4fS0ke3ZhbHVlfWAgOiB2YWx1ZTtcbiAgICB9KTtcbiAgICBzdXBlcihkZWZpbml0aW9uKTtcbiAgfVxufVxuY29uc3QgcHJlZml4Q2FjaGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAZGVzY3JpcHRpb24gaGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBhIHByZWZpeGVkIGFjdGlvbiBkZWZpbml0aW9uIG1hcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEVudW0oeyBlbnVtTWFwLCBwcmVmaXgsIGJhc2UgPSBlbnVtTWFwIH0pIHtcbiAgaWYgKCFwcmVmaXggfHwgcHJlZml4ID09PSAnJykgcmV0dXJuIGJhc2U7XG5cbiAgaWYgKCFwcmVmaXhDYWNoZS5oYXMocHJlZml4KSkge1xuICAgIHByZWZpeENhY2hlLnNldChwcmVmaXgsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBjb25zdCBjYWNoZSA9IHByZWZpeENhY2hlLmdldChwcmVmaXgpO1xuXG4gIGlmICghY2FjaGUuaGFzKGJhc2UpKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHt9O1xuICAgIGZvciAoY29uc3QgdHlwZSBpbiBiYXNlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGJhc2U6Omhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgIGRlZmluaXRpb25bdHlwZV0gPSBgJHtwcmVmaXh9LSR7YmFzZVt0eXBlXX1gO1xuICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5zZXQoYmFzZSwgbmV3IEhhc2hNYXAoZGVmaW5pdGlvbikpO1xuICB9XG4gIHJldHVybiBjYWNoZS5nZXQoYmFzZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL0VudW0vaW5kZXguanMiLCJjb25zdCBzRGVmaW5pdGlvbiA9IFN5bWJvbCgnZGVmaW5pdGlvbicpO1xyXG5jb25zdCBzVmFsdWVNYXAgPSBTeW1ib2woJ3ZhbHVlTWFwJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEdldEZ1bmN0aW9uKGl0ZW0pIHtcclxuICByZXR1cm4gaXRlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBIYXNoTWFwXHJcbiAqIEBkZXNjcmlwdGlvbiBTaW1wbGUgaGFzaCBtYXAgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2hNYXAge1xyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZpbml0aW9uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZGVmaW5pdGlvbikge1xyXG4gICAgdGhpc1tzRGVmaW5pdGlvbl0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZpbml0aW9uKTtcclxuICAgIHRoaXNbc1ZhbHVlTWFwXSA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWZpbml0aW9uKSB7XHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgIGlmIChkZWZpbml0aW9uOjpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XHJcbiAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3NEZWZpbml0aW9uXVtrZXldO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc1tzVmFsdWVNYXBdLnNldCh0aGlzW3NEZWZpbml0aW9uXVtrZXldLCBrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0S2V5KG1hcCwgdmFsdWUpIHtcclxuICAgIHJldHVybiBtYXBbc1ZhbHVlTWFwXS5nZXQodmFsdWUpO1xyXG4gIH1cclxuICBzdGF0aWMgaGFzVmFsdWUobWFwLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG1hcFtzVmFsdWVNYXBdLmhhcyh2YWx1ZSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBmcm9tU2V0KHsgc2V0LCBnZXRLZXkgPSBkZWZhdWx0R2V0RnVuY3Rpb24sIGdldFZhbHVlID0gZGVmYXVsdEdldEZ1bmN0aW9uIH0pIHtcclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7fTtcclxuICAgIFsuLi5zZXRdLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gZ2V0S2V5KGl0ZW0pO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGl0ZW0pO1xyXG4gICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3VuZGVmaW5lZCcgJiYga2V5ICE9PSBudWxsICYmIGtleSAhPT0gJycpIHtcclxuICAgICAgICBkZWZpbml0aW9uW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3IEhhc2hNYXAoZGVmaW5pdGlvbik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvSGFzaE1hcC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2F2ZTogJ0d1YXJkYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJzYXZlXCJAI0AgQHNvdXJjZTogQCNAXCJTYXZlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdSZWdpw7NuJyxcbiAgTkFPbmx5TWVzc2FnZTogJ0RlZmluYSBzdSBjw7NkaWdvIGRlIMOhcmVhLiBTZSB1dGlsaXphcsOhIHBhcmEgbGEgbWFyY2FjacOzbiBsb2NhbC4nLFxuICBNdWx0aVdpdGhOQU1lc3NhZ2U6ICdEZWZpbmEgZWwgcGHDrXMgeSBjw7NkaWdvIGRlIMOhcmVhIHBhcmEgc3UgcmVnacOzbi4gU2UgdXRpbGl6YXLDoSBwYXJhIGxhIG1hcmNhY2nDs24gbG9jYWwgeSBlbCBmb3JtYXRvIGRlIG7Dum1lcm8gZGUgdGVsw6lmb25vLicsXG4gIE11bHRpV2l0aG91dE5BTWVzc2FnZTogJ1NlbGVjY2lvbsOpIGVsIHBhw61zIGVuIGVsIHF1ZSBzZSBlbmN1ZW50cmEuIEVzdG8gc2UgdXRpbGl6YXLDoSBwYXJhIGxhIG1hcmNhY2nDs24gbG9jYWwgeSBlbCBmb3JtYXRvIGRlIG7Dum1lcm8gZGUgdGVsw6lmb25vLicsXG4gIGNvdW50cnk6ICdQYcOtcycsXG4gIGFyZWFDb2RlOiAnQ8OzZGlnbyBkZSDDoXJlYScsXG4gIGFyZWFDb2RlUGxhY2Vob2xkZXI6ICdJbnRyb2R1Y2lyIGPDs2RpZ28gZGUgw6FyZWEnLFxuICBzYXZlOiAnR3VhcmRhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJSZWdpb25cIkAjQFxuLy8gQGtleTogQCNAXCJOQU9ubHlNZXNzYWdlXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2V0IHlvdXIgYXJlYSBjb2RlLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGluZy5cIkAjQFxuLy8gQGtleTogQCNAXCJNdWx0aVdpdGhOQU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQgdGhlIGNvdW50cnkgYW5kIGFyZWEgY29kZSBmb3IgeW91ciByZWdpb24uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy5cIkAjQFxuLy8gQGtleTogQCNAXCJNdWx0aVdpdGhvdXROQU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgdGhlIGNvdW50cnkgeW91IGxvY2F0ZSBpbi4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLlwiQCNAXG4vLyBAa2V5OiBAI0BcImNvdW50cnlcIkAjQCBAc291cmNlOiBAI0BcIkNvdW50cnlcIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiQXJlYSBDb2RlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVQbGFjZWhvbGRlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgQXJlYSBDb2RlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlZ2lvblNldHRpbmdzUGFuZWwvaTE4bi9lcy1FUy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiLCJleHBvcnQgZGVmYXVsdCB7XG4gIDQxOTogJ0xhdGlub2Ftw6lyaWNhJyxcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBVDogJ0F1c3RyaWEnLFxuICBCSDogJ0JhcsOpaW4nLFxuICBCUjogJ0JyYXNpbCcsXG4gIEJHOiAnQnVsZ2FyaWEnLFxuICBDQTogJ0NhbmFkw6EnLFxuICBDTDogJ0NoaWxlJyxcbiAgQ046ICdDaGluYScsXG4gIEhSOiAnQ3JvYWNpYScsXG4gIENZOiAnQ2hpcHJlJyxcbiAgQ1o6ICdSZXDDumJsaWNhIENoZWNhJyxcbiAgREs6ICdEaW5hbWFyY2EnLFxuICBETzogJ1JlcMO6YmxpY2EgRG9taW5pY2FuYScsXG4gIEVFOiAnRXN0b25pYScsXG4gIEZJOiAnRmlubGFuZGlhJyxcbiAgRlI6ICdGcmFuY2lhJyxcbiAgREU6ICdBbGVtYW5pYScsXG4gIEhLOiAnSG9uZyBLb25nJyxcbiAgSFU6ICdIdW5ncsOtYScsXG4gIElFOiAnSXJsYW5kYScsXG4gIElMOiAnSXNyYWVsJyxcbiAgSU46ICdJbmRpYScsXG4gIElUOiAnSXRhbGlhJyxcbiAgSlA6ICdKYXDDs24nLFxuICBMVjogJ0xldG9uaWEnLFxuICBMVDogJ0xpdHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJ1cmdvJyxcbiAgTVk6ICdNYWxhc2lhJyxcbiAgTVg6ICdNw6l4aWNvJyxcbiAgTkw6ICdQYcOtc2VzIEJham9zJyxcbiAgTk86ICdOb3J1ZWdhJyxcbiAgUEE6ICdQYW5hbcOhJyxcbiAgUEg6ICdGaWxpcGluYXMnLFxuICBQTDogJ1BvbG9uaWEnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUk86ICdSdW1hbsOtYScsXG4gIFNLOiAnRXNsb3ZhcXVpYScsXG4gIFNJOiAnRXNsb3ZlbmlhJyxcbiAgRVM6ICdFc3Bhw7FhJyxcbiAgU0U6ICdTdWVjaWEnLFxuICBDSDogJ1N1aXphJyxcbiAgVFI6ICdUdXJxdcOtYScsXG4gIEdCOiAnUmVpbm8gVW5pZG8nLFxuICBBVTogJ0F1c3RyYWxpYScsXG4gIEdFOiAnR2VvcmdpYScsXG4gIElEOiAnSW5kb25lc2lhJyxcbiAgS0U6ICdLZW5pYScsXG4gIE5HOiAnTmlnZXJpYScsXG4gIFBLOiAnUGFraXN0w6FuJyxcbiAgWkE6ICdTdWTDoWZyaWNhJyxcbiAgS1I6ICdDb3JlYSBkZWwgU3VyJyxcbiAgU0c6ICdTaW5nYXB1cicsXG4gIFRXOiAnVGFpd8OhbicsXG4gIFVBOiAnVWNyYW5pYScsXG4gIFVTOiAnRXN0YWRvcyBVbmlkb3MnLFxuICBWTjogJ1ZpZXRuYW0nLFxuICBCRTogJ0LDqWxnaWNhJyxcbiAgQko6ICdCZW7DrW4nLFxuICBTVjogJ0VsIFNhbHZhZG9yJyxcbiAgR0g6ICdHaGFuYScsXG4gIEdSOiAnR3JlY2lhJyxcbiAgR046ICdHdWluZWEnLFxuICBOWjogJ051ZXZhIFplbGFuZGEnLFxuICBQRTogJ1BlcsO6JyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIjQxOVwiQCNAIEBzb3VyY2U6IEAjQFwiTGF0aW4gQW1lcmljYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkFSXCJAI0AgQHNvdXJjZTogQCNAXCJBcmdlbnRpbmFcIkAjQFxuLy8gQGtleTogQCNAXCJBVFwiQCNAIEBzb3VyY2U6IEAjQFwiQXVzdHJpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkJIXCJAI0AgQHNvdXJjZTogQCNAXCJCYWhyYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQlJcIkAjQCBAc291cmNlOiBAI0BcIkJyYXppbFwiQCNAXG4vLyBAa2V5OiBAI0BcIkJHXCJAI0AgQHNvdXJjZTogQCNAXCJCdWxnYXJpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNBXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5hZGFcIkAjQFxuLy8gQGtleTogQCNAXCJDTFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2hpbGVcIkAjQFxuLy8gQGtleTogQCNAXCJDTlwiQCNAIEBzb3VyY2U6IEAjQFwiQ2hpbmFcIkAjQFxuLy8gQGtleTogQCNAXCJIUlwiQCNAIEBzb3VyY2U6IEAjQFwiQ3JvYXRpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNZXCJAI0AgQHNvdXJjZTogQCNAXCJDeXBydXNcIkAjQFxuLy8gQGtleTogQCNAXCJDWlwiQCNAIEBzb3VyY2U6IEAjQFwiQ3plY2ggUmVwdWJsaWNcIkAjQFxuLy8gQGtleTogQCNAXCJES1wiQCNAIEBzb3VyY2U6IEAjQFwiRGVubWFya1wiQCNAXG4vLyBAa2V5OiBAI0BcIkRPXCJAI0AgQHNvdXJjZTogQCNAXCJEb21pbmljYW4gUmVwdWJsaWNcIkAjQFxuLy8gQGtleTogQCNAXCJFRVwiQCNAIEBzb3VyY2U6IEAjQFwiRXN0b25pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkZJXCJAI0AgQHNvdXJjZTogQCNAXCJGaW5sYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRlJcIkAjQCBAc291cmNlOiBAI0BcIkZyYW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcIkRFXCJAI0AgQHNvdXJjZTogQCNAXCJHZXJtYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwiSEtcIkAjQCBAc291cmNlOiBAI0BcIkhvbmcgS29uZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIkhVXCJAI0AgQHNvdXJjZTogQCNAXCJIdW5nYXJ5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiSUVcIkAjQCBAc291cmNlOiBAI0BcIklyZWxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJJTFwiQCNAIEBzb3VyY2U6IEAjQFwiSXNyYWVsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSU5cIkAjQCBAc291cmNlOiBAI0BcIkluZGlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSVRcIkAjQCBAc291cmNlOiBAI0BcIkl0YWx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiSlBcIkAjQCBAc291cmNlOiBAI0BcIkphcGFuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTFZcIkAjQCBAc291cmNlOiBAI0BcIkxhdHZpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkxUXCJAI0AgQHNvdXJjZTogQCNAXCJMaXRodWFuaWFcIkAjQFxuLy8gQGtleTogQCNAXCJMVVwiQCNAIEBzb3VyY2U6IEAjQFwiTHV4ZW1ib3VyZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIk1ZXCJAI0AgQHNvdXJjZTogQCNAXCJNYWxheXNpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIk1YXCJAI0AgQHNvdXJjZTogQCNAXCJNZXhpY29cIkAjQFxuLy8gQGtleTogQCNAXCJOTFwiQCNAIEBzb3VyY2U6IEAjQFwiTmV0aGVybGFuZHNcIkAjQFxuLy8gQGtleTogQCNAXCJOT1wiQCNAIEBzb3VyY2U6IEAjQFwiTm9yd2F5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiUEFcIkAjQCBAc291cmNlOiBAI0BcIlBhbmFtYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBIXCJAI0AgQHNvdXJjZTogQCNAXCJQaGlsaXBwaW5lc1wiQCNAXG4vLyBAa2V5OiBAI0BcIlBMXCJAI0AgQHNvdXJjZTogQCNAXCJQb2xhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJQVFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9ydHVnYWxcIkAjQFxuLy8gQGtleTogQCNAXCJST1wiQCNAIEBzb3VyY2U6IEAjQFwiUm9tYW5pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlNLXCJAI0AgQHNvdXJjZTogQCNAXCJTbG92YWtpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlNJXCJAI0AgQHNvdXJjZTogQCNAXCJTbG92ZW5pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkVTXCJAI0AgQHNvdXJjZTogQCNAXCJTcGFpblwiQCNAXG4vLyBAa2V5OiBAI0BcIlNFXCJAI0AgQHNvdXJjZTogQCNAXCJTd2VkZW5cIkAjQFxuLy8gQGtleTogQCNAXCJDSFwiQCNAIEBzb3VyY2U6IEAjQFwiU3dpdHplcmxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJUUlwiQCNAIEBzb3VyY2U6IEAjQFwiVHVya2V5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiR0JcIkAjQCBAc291cmNlOiBAI0BcIlVuaXRlZCBLaW5nZG9tXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQVVcIkAjQCBAc291cmNlOiBAI0BcIkF1c3RyYWxpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdFXCJAI0AgQHNvdXJjZTogQCNAXCJHZW9yZ2lhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSURcIkAjQCBAc291cmNlOiBAI0BcIkluZG9uZXNpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIktFXCJAI0AgQHNvdXJjZTogQCNAXCJLZW55YVwiQCNAXG4vLyBAa2V5OiBAI0BcIk5HXCJAI0AgQHNvdXJjZTogQCNAXCJOaWdlcmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUEtcIkAjQCBAc291cmNlOiBAI0BcIlBha2lzdGFuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiWkFcIkAjQCBAc291cmNlOiBAI0BcIlNvdXRoIEFmcmljYVwiQCNAXG4vLyBAa2V5OiBAI0BcIktSXCJAI0AgQHNvdXJjZTogQCNAXCJTb3V0aCBLb3JlYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlNHXCJAI0AgQHNvdXJjZTogQCNAXCJTaW5nYXBvcmVcIkAjQFxuLy8gQGtleTogQCNAXCJUV1wiQCNAIEBzb3VyY2U6IEAjQFwiVGFpd2FuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVUFcIkAjQCBAc291cmNlOiBAI0BcIlVrcmFpbmVcIkAjQFxuLy8gQGtleTogQCNAXCJVU1wiQCNAIEBzb3VyY2U6IEAjQFwiVW5pdGVkIFN0YXRlc1wiQCNAXG4vLyBAa2V5OiBAI0BcIlZOXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV0bmFtXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQkVcIkAjQCBAc291cmNlOiBAI0BcIkJlbGdpdW1cIkAjQFxuLy8gQGtleTogQCNAXCJCSlwiQCNAIEBzb3VyY2U6IEAjQFwiQmVuaW5cIkAjQFxuLy8gQGtleTogQCNAXCJTVlwiQCNAIEBzb3VyY2U6IEAjQFwiRWwgU2FsdmFkb3JcIkAjQFxuLy8gQGtleTogQCNAXCJHSFwiQCNAIEBzb3VyY2U6IEAjQFwiR2hhbmFcIkAjQFxuLy8gQGtleTogQCNAXCJHUlwiQCNAIEBzb3VyY2U6IEAjQFwiR3JlZWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR05cIkAjQCBAc291cmNlOiBAI0BcIkd1aW5lYVwiQCNAXG4vLyBAa2V5OiBAI0BcIk5aXCJAI0AgQHNvdXJjZTogQCNAXCJOZXcgWmVhbGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlBFXCJAI0AgQHNvdXJjZTogQCNAXCJQZXJ1XCJAI0Bcbi8vIEBrZXk6IEAjQFwiUFJcIkAjQCBAc291cmNlOiBAI0BcIlB1ZXJ0byBSaWNvXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY291bnRyeU5hbWVzL2VzLUVTLmpzIiwiaW1wb3J0IHBob25lVHlwZXMgZnJvbSAnLi4vLi4vZW51bXMvcGhvbmVUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3Bob25lVHlwZXMuYnVzaW5lc3NdOiAnVGVsw6lmb25vIGRlbCB0cmFiYWpvJyxcbiAgW3Bob25lVHlwZXMuZXh0ZW5zaW9uXTogJ07Dum1lcm8gZGUgZXh0ZW5zacOzbicsXG4gIFtwaG9uZVR5cGVzLmhvbWVdOiAnTsO6bWVybyBkZSBjYXNhJyxcbiAgW3Bob25lVHlwZXMubW9iaWxlXTogJ1RlbMOpZm9ubyBtw7N2aWwnLFxuICBbcGhvbmVUeXBlcy5waG9uZV06ICdUZWzDqWZvbm8nLFxuICBbcGhvbmVUeXBlcy51bmtub3duXTogJ1RpcG8gZGUgdGVsw6lmb25vIGRlc2Nvbm9jaWRvJyxcbiAgW3Bob25lVHlwZXMuY29tcGFueV06ICdOw7ptZXJvIGRlIGxhIGNvbXBhw7HDrWEnLFxuICBbcGhvbmVUeXBlcy5kaXJlY3RdOiAnTsO6bWVybyBkaXJlY3RvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuYnVzaW5lc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJCdXNpbmVzcyBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIkV4dGVuc2lvbiBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5ob21lXVwiQCNAIEBzb3VyY2U6IEAjQFwiSG9tZSBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5tb2JpbGVdXCJAI0AgQHNvdXJjZTogQCNAXCJNb2JpbGUgUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5waG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIlBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMudW5rbm93bl1cIkAjQCBAc291cmNlOiBAI0BcIlVua25vd24gUGhvbmUgVHlwZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmNvbXBhbnldXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55IE51bWJlclwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmRpcmVjdF1cIkAjQCBAc291cmNlOiBAI0BcIkRpcmVjdCBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9waG9uZVR5cGVOYW1lcy9lcy1FUy5qcyIsImltcG9ydCBwaG9uZVNvdXJjZXMgZnJvbSAnLi4vLi4vZW51bXMvcGhvbmVTb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGhvbmVTb3VyY2VzLmFjY291bnRdOiAnQ3VlbnRhJyxcbiAgW3Bob25lU291cmNlcy5jb250YWN0XTogJ0NvbnRhY3RvJyxcbiAgW3Bob25lU291cmNlcy5sZWFkXTogJ1Bvc2libGUgY2xpZW50ZScsXG4gIFtwaG9uZVNvdXJjZXMub3Bwb3J0dW5pdHldOiAnQ2FuZGlkYXRvIGEgcG9zaWJsZSBjbGllbnRlJyxcbiAgW3Bob25lU291cmNlcy5zeXN0ZW1Vc2VyXTogJ1VzdWFyaW8gZGVsIHNpc3RlbWEnLFxuICBbcGhvbmVTb3VyY2VzLnJjQ29udGFjdF06ICd7YnJhbmR9Jyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5hY2NvdW50XVwiQCNAIEBzb3VyY2U6IEAjQFwiQWNjb3VudFwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMuY29udGFjdF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbnRhY3RcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLnJjQ29udGFjdF1cIkAjQCBAc291cmNlOiBAI0BcInticmFuZH1cIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLmxlYWRdXCJAI0AgQHNvdXJjZTogQCNAXCJMZWFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5vcHBvcnR1bml0eV1cIkAjQCBAc291cmNlOiBAI0BcIk9wcG9ydHVuaXR5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5zeXN0ZW1Vc2VyXVwiQCNAIEBzb3VyY2U6IEAjQFwiU3lzdGVtIFVzZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9waG9uZVNvdXJjZU5hbWVzL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ0EnLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0VzY3JpYmlyIG5vbWJyZSBvIG7Dum1lcm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG9cIkAjQFxuLy8gQGtleTogQCNAXCJlbnRlck5hbWVPck51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgTmFtZSBvciBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjaXBpZW50c0lucHV0L2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIERpcmVjdE51bWJlcjogJ0RpcmVjdG8nLFxuICBNYWluQ29tcGFueU51bWJlcjogJ1ByaW5jaXBhbCcsXG4gIENvbXBhbnlOdW1iZXI6ICdDb21wYcOxw61hJyxcbiAgQ29tcGFueUZheE51bWJlcjogJ0ZheCcsXG4gIEJsb2NrZWQ6ICdCbG9xdWVhZG8nLFxuICBmcm9tOiAnRGUnLFxuICBBZGRpdGlvbmFsQ29tcGFueU51bWJlcjogJ0NvbXBhw7HDrWEnLFxuICBGb3J3YXJkZWRDb21wYW55TnVtYmVyOiAnRGVzdmlhZG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJEaXJlY3ROdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkRpcmVjdFwiQCNAXG4vLyBAa2V5OiBAI0BcIk1haW5Db21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJNYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNvbXBhbnlGYXhOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkZheFwiQCNAXG4vLyBAa2V5OiBAI0BcIkJsb2NrZWRcIkAjQCBAc291cmNlOiBAI0BcIkJsb2NrZWRcIkAjQFxuLy8gQGtleTogQCNAXCJBZGRpdGlvbmFsQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcIkZvcndhcmRlZENvbXBhbnlOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkZvcndhcmRlZFwiQCNAXG4vLyBAa2V5OiBAI0BcImZyb21cIkAjQCBAc291cmNlOiBAI0BcIkZyb21cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRnJvbUZpZWxkL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZyb206ICdEZScsXG4gIHRvOiAnQScsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnSW50cm9kdWNpciBuw7ptZXJvIG8gbm9tYnJlLi4uJyxcbiAgdHlwZU1lc3NhZ2U6ICdFc2NyaWJpciBtZW5zYWplLi4uJyxcbiAgc2VuZDogJ0VudmlhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImZyb21cIkAjQCBAc291cmNlOiBAI0BcIkZyb21cIkAjQFxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG9cIkAjQFxuLy8gQGtleTogQCNAXCJlbnRlck5hbWVPck51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgTnVtYmVyIG9yIE5hbWUuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJ0eXBlTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiVHlwZSBtZXNzYWdlLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VuZFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db21wb3NlVGV4dFBhbmVsL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2dpbmc6ICdJbmljaWFuZG8gc2VzacOzbi4uLicsXG4gIGxvZ0NhbGw6ICdSZWdpc3RyYXIgbGxhbWFkYScsXG4gIGVkaXRMb2c6ICdFZGl0YXIgcmVnaXN0cm8nLFxuICBzZWxlY3Q6ICdTZWxlY2Npb25hciB1bmEgZ3JhYmFjacOzbiBxdWUgY29pbmNpZGEnLFxuICBPbkhvbGQ6ICdFbiBlc3BlcmEnLFxuICBSaW5naW5nOiAnTGxhbWFuZG8nLFxuICBDYWxsQ29ubmVjdGVkOiAnTGxhbWFkYSBjb25lY3RhZGEnLFxuICB1bmtub3duVXNlcjogJ1VzdWFyaW8gZGVzY29ub2NpZG8nLFxuICB1bmtub3duTnVtYmVyOiAnQW7Ds25pbW8nLFxuICB1bmF2YWlsYWJsZTogJ05vIGRpc3BvbmlibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZlciBkZXRhbGxlcycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2dpbmdcIkAjQCBAc291cmNlOiBAI0BcIkxvZ2dpbmcuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJsb2dDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJMb2cgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImVkaXRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkVkaXQgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VsZWN0XCJAI0AgQHNvdXJjZTogQCNAXCJTZWxlY3QgYSBtYXRjaGluZyByZWNvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJPbkhvbGRcIkAjQCBAc291cmNlOiBAI0BcIk9uIEhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJSaW5naW5nXCJAI0AgQHNvdXJjZTogQCNAXCJSaW5naW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ2FsbENvbm5lY3RlZFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBDb25uZWN0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duVXNlclwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93biBVc2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93bk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdmFpbGFibGVcIkAjQCBAc291cmNlOiBAI0BcIlVuYXZhaWxhYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlld0RldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIlZpZXcgRGV0YWlsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlTWVzc2FnZTogJ0VzY3JpYmlyIG1lbnNhamUuLi4nLFxuICBzZW5kOiAnRW52aWFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidHlwZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlR5cGUgbWVzc2FnZS4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlbmRcIkAjQCBAc291cmNlOiBAI0BcIlNlbmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udmVyc2F0aW9uUGFuZWwvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmV3Q29uZmVyZW5jZTogJ051ZXZhIGNvbmZlcmVuY2lhJyxcbiAgZGlhbEluTnVtYmVyOiAnTsO6bWVybyBkZSBtYXJjYWNpw7NuJyxcbiAgaG9zdDogJ09yZ2FuaXphZG9yJyxcbiAgcGFydGljaXBhbnRzOiAnUGFydGljaXBhbnRlcycsXG4gIGludGVybmF0aW9uYWxQYXJ0aWNpcGFudHM6ICdQYXJ0aWNpcGFudGVzIGludGVybmFjaW9uYWxlcycsXG4gIGludGVybmF0aW9uYWxOdW1iZXJzSGVhZGVyOiAnU2VsZWNjaW9uYXIgbsO6bWVyb3MgZGUgbWFyY2FjacOzbiBpbnRlcm5hY2lvbmFsZXMnLFxuICBzZWFyY2g6ICdCdXNjYXIuLi4nLFxuICBpbnZpdGVXaXRoVGV4dDogJ0ludml0YXIgY29uIG1lbnNhamUnLFxuICBpbnZpdGVUZXh0OiAnw5puYXNlIGEgbGEgY29uZmVyZW5jaWEgZGUge2JyYW5kTmFtZX0uXFxyXFxuXFxuTsO6bWVyb3MgZGUgbWFyY2FjacOzbjoge2Zvcm1hdHRlZERpYWxJbk51bWJlcn0gXFxyXFxue2FkZGl0aW9uYWxOdW1iZXJzU2VjdGlvbn0gXFxyXFxuQWNjZXNvIGRlIHBhcnRpY2lwYW50ZToge3BhcnRpY2lwYW50Q29kZX0gXFxyXFxuXFxuXFx4QkZOZWNlc2l0YSB1biBuw7ptZXJvIGRlIG1hcmNhY2nDs24gaW50ZXJuYWNpb25hbD8gVmlzaXRlIHtkaWFsSW5OdW1iZXJzTGlua3N9IFxcclxcblxcbkVzdGEgbGxhbWFkYSBkZSBjb25mZXJlbmNpYSBlcyBwb3NpYmxlIGdyYWNpYXMgYSBDb25mZXJlbmNpYXMgZGUge2JyYW5kTmFtZX0uJyxcbiAgaG9zdEFjY2VzczogJ0FjY2VzbyBkZSBob3N0JyxcbiAgcGFydGljaXBhbnRzQWNjZXNzOiAnQWNjZXNvIGRlIHBhcnRpY2lwYW50ZXMnLFxuICBhZGRpbmFsRGlhbEluTnVtYmVyczogJ07Dum1lcm9zIGRlIG1hcmNhY2nDs24gYWRpY2lvbmFsZXMnLFxuICBzZWxlY3ROdW1iZXJzOiAnU2VsZWNjaW9uYXIgbsO6bWVyb3MnLFxuICBlbmFibGVKb2luQmVmb3JlSG9zdDogJ1Blcm1pdGlyIHVuaXJzZSBhbnRlcyBxdWUgZWwgaG9zdCcsXG4gIGNvbmZlcmVuY2VDb21tYW5kczogJ0NvbWFuZG9zIGRlIGNvbmZlcmVuY2lhJyxcbiAgaW52aXRlV2l0aEdDYWxlbmRhcjogJ0ludml0YXIgY29uIEdvb2dsZSBDYWxlbmRhcicsXG4gIGpvaW5Bc0hvc3Q6ICdJbmljaWFyIGNvbmZlcmVuY2lhJyxcbiAgaW50ZXJuYXRpb25hbE51bWJlcjogJ07Dum1lcm9zIGRlIG1hcmNhY2nDs24gaW50ZXJuYWNpb25hbGVzOicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5ld0NvbmZlcmVuY2VcIkAjQCBAc291cmNlOiBAI0BcIk5ldyBDb25mZXJlbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGlhbEluTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsLWluIE51bWJlclwiQCNAXG4vLyBAa2V5OiBAI0BcImhvc3RBY2Nlc3NcIkAjQCBAc291cmNlOiBAI0BcIkhvc3QgQWNjZXNzXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFydGljaXBhbnRzQWNjZXNzXCJAI0AgQHNvdXJjZTogQCNAXCJQYXJ0aWNpcGFudHMgQWNjZXNzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkaW5hbERpYWxJbk51bWJlcnNcIkAjQCBAc291cmNlOiBAI0BcIkFkZGl0aW9uYWwgRGlhbC1pbiBOdW1iZXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VsZWN0TnVtYmVyc1wiQCNAIEBzb3VyY2U6IEAjQFwiU2VsZWN0IE51bWJlcnNcIkAjQFxuLy8gQGtleTogQCNAXCJlbmFibGVKb2luQmVmb3JlSG9zdFwiQCNAIEBzb3VyY2U6IEAjQFwiRW5hYmxlIGpvaW4gYmVmb3JlIEhvc3RcIkAjQFxuLy8gQGtleTogQCNAXCJjb25mZXJlbmNlQ29tbWFuZHNcIkAjQCBAc291cmNlOiBAI0BcIkNvbmZlcmVuY2UgQ29tbWFuZHNcIkAjQFxuLy8gQGtleTogQCNAXCJpbnZpdGVXaXRoR0NhbGVuZGFyXCJAI0AgQHNvdXJjZTogQCNAXCJJbnZpdGUgd2l0aCBHb29nbGUgQ2FsZW5kYXJcIkAjQFxuLy8gQGtleTogQCNAXCJpbnZpdGVXaXRoVGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXRlIHdpdGggVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImpvaW5Bc0hvc3RcIkAjQCBAc291cmNlOiBAI0BcIkxhdW5jaCBDb25mZXJlbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW50ZXJuYXRpb25hbE51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiSW50ZXJuYXRpb25hbCBEaWFsLWluIE51bWJlcnM6XCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW52aXRlVGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGpvaW4gdGhlIHticmFuZE5hbWV9IGNvbmZlcmVuY2UuXFxuXFxuRGlhbC1JbiBOdW1iZXJzOiB7Zm9ybWF0dGVkRGlhbEluTnVtYmVyfSBcXG57YWRkaXRpb25hbE51bWJlcnNTZWN0aW9ufSBcXG5QYXJ0aWNpcGFudCBBY2Nlc3M6IHtwYXJ0aWNpcGFudENvZGV9IFxcblxcbk5lZWQgYW4gaW50ZXJuYXRpb25hbCBkaWFsLWluIHBob25lIG51bWJlcj8gUGxlYXNlIHZpc2l0IHtkaWFsSW5OdW1iZXJzTGlua3N9IFxcblxcblRoaXMgY29uZmVyZW5jZSBjYWxsIGlzIGJyb3VnaHQgdG8geW91IGJ5IHticmFuZE5hbWV9IENvbmZlcmVuY2luZy5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnQ29tYW5kb3MgZGUgY29uZmVyZW5jaWEnLFxuICBzdGFyU2hhcnAyVGl0bGU6ICdSZWN1ZW50byBkZSBwZXJzb25hcyBxdWUgbGxhbWFuJyxcbiAgc3RhclNoYXJwMkJvZHk6ICdMbGV2ZSB1biBjb250cm9sIGRlbCBuw7ptZXJvIGRlIHBlcnNvbmFzIHF1ZSBoYXkgZW4gdW5hIGxsYW1hZGEuJyxcbiAgc3RhclNoYXJwM1RpdGxlOiAnQWJhbmRvbmFyIGNvbmZlcmVuY2lhJyxcbiAgc3RhclNoYXJwM0JvZHk6ICdQZXJtaXRlIGFsIGhvc3QgY29sZ2FyIHkgZmluYWxpemFyIGxhIGxsYW1hZGEuJyxcbiAgc3RhclNoYXJwNFRpdGxlOiAnTWVuw7onLFxuICBzdGFyU2hhcnA0Qm9keTogJ0VzY3VjaGUgbGEgbGlzdGEgZGUgY29tYW5kb3MgZGUgdG9ub3MgZGUgbWFyY2FkbycsXG4gIHN0YXJTaGFycDVUaXRsZTogJ0VzdGFibGVjZXIgbW9kb3MgZGUgZXNjdWNoYScsXG4gIHN0YXJTaGFycDVCb2R5OiAnUHVsc2UgMVxceEEwdmV6OiBTaWxlbmNpYXIgYSBsYXMgcGVyc29uYXMgcXVlIGxsYW1hbiAtIEVzdGFzIHBlcnNvbmFzIHB1ZWRlbiByZWFjdGl2YXIgZWwgYXVkaW8gY29uICogIyA2XFxyXFxuUHVsc2UgMlxceEEwdmVjZXM6IFNpbGVuY2lhciBhIGxhcyBwZXJzb25hcyBxdWUgbGxhbWFuIC0gU29sbyBwb2Ryw6FuIGVzY3VjaGFyLiBObyBleGlzdGUgb3BjacOzbiBkZSBhY3RpdmFjacOzbiBkZWwgYXVkaW8uXFxyXFxuUHVsc2UgM1xceEEwdmVjZXM6IFJlYWN0aXZhciBhdWRpbyBkZSBwZXJzb25hcyBxdWUgbGxhbWFuIC0gTGEgbMOtbmVhIHZ1ZWx2ZSBhIGVzdGFyIGFiaWVydGEnLFxuICBzdGFyU2hhcnA2VGl0bGU6ICdTaWxlbmNpYXIgbMOtbmVhIGRlIGhvc3QnLFxuICBzdGFyU2hhcnA2Qm9keTogJ1B1bHNlIHVuYSB2ZXogcGFyYSBTSUxFTkNJQVIuXFxyXFxuVnVlbHZhIGEgcHVsc2FyIHBhcmEgUkVBQ1RJVkFSIEFVRElPLicsXG4gIHN0YXJTaGFycDdUaXRsZTogJ1Byb3RlZ2VyIGxhIGxsYW1hZGEnLFxuICBzdGFyU2hhcnA3Qm9keTogJ1B1bHNlIHVuYSB2ZXogcGFyYSBCTE9RVUVBUiBhIHRvZGFzIGxhcyBwZXJzb25hcyBxdWUgbGxhbWFuLlxcclxcblZ1ZWx2YSBhIHB1bHNhciBwYXJhIEFCUklSIGxhIGxsYW1hZGEuJyxcbiAgc3RhclNoYXJwOFRpdGxlOiAnRXNjdWNoYXIgdW4gc29uaWRvIGN1YW5kbyBhbGd1aWVuIGVudHJlIG8gc2FsZ2EgZGUgdW5hIGxsYW1hZGEnLFxuICBzdGFyU2hhcnA4Qm9keTogJ1B1bHNlIDFcXHhBMHZlejogU2UgREVTQUNUSVZBIGVsIHNvbmlkby5cXHJcXG5QdWxzZSAyXFx4QTB2ZWNlczogU2UgQUNUSVZBIGVsIHRvbm8gZGUgZW50cmFkYSB5IHNlIERFU0FDVElWQSBlbCB0b25vIGRlIHNhbGlkYVxcclxcblB1bHNlIDNcXHhBMHZlY2VzOiBTZSBERVNBQ1RJVkEgZWwgdG9ubyBkZSBlbnRyYWRhIHkgc2UgQUNUSVZBIGVsIHRvbm8gZGUgc2FsaWRhXFxyXFxuUHVsc2UgNFxceEEwdmVjZXM6IGVsIHNvbmlkbyBlc3TDoSBBQ1RJVkFETy4nLFxuICBzdGFyOVRpdGxlOiAnR3JhYmFyIGxhIGNvbmZlcmVuY2lhJyxcbiAgc3RhcjlCb2R5OiAnUHVsc2UgdW5hIHZleiBwYXJhIEVNUEVaQVIgYSBncmFiYXIuXFxyXFxuUHVsc2UgbnVldmFtZW50ZSBwYXJhIERFSkFSIGRlIGdyYWJhci4nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29uZmVyZW5jZSBDb21tYW5kc1wiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDJUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbGVyIENvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwMkJvZHlcIkAjQCBAc291cmNlOiBAI0BcIktlZXAgdHJhY2sgb2YgaG93IG1hbnkgcGVvcGxlIGFyZSBvbiB0aGUgY2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDNUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTGVhdmUgQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDNCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJMZXRzIHRoZSBob3N0IGhhbmcgdXAgYW5kIGVuZCB0aGUgY2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDRUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTWVudVwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDRCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJMaXN0ZW4gdG8gdGhlIGxpc3Qgb2YgdG91Y2h0b25lIGNvbW1hbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNVRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJTZXQgTGlzdGVuaW5nIE1vZGVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNUJvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIDF4OiBNdXRlIGNhbGxlcnMgLSBDYWxsZXJzIGNhbiB1bm11dGUgd2l0aCAgKiwgIywgNlxcblByZXNzIDJ4OiBNdXRlIGNhbGxlcnMgLSBMaXN0ZW4gb25seS4gTm8gdW5tdXRpbmcgb3B0aW9uXFxuUHJlc3MgM3g6IFVubXV0ZSBjYWxsZXJzIC0gT3BlbnMgdGhlIGxpbmUgYWdhaW5cIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA2VGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIk11dGUgSG9zdCBMaW5lXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNkJvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIG9uY2UgdG8gTVVURVxcblByZXNzIGFnYWluIHRvIFVOTVVURVwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDdUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU2VjdXJlIHRoZSBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwN0JvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIG9uY2UgdG8gQkxPQ0sgYWxsIGNhbGxlcnNcXG5QcmVzcyBhZ2FpbiB0byBPUEVOIHRoZSBjYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwOFRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJIZWFyIHNvdW5kIHdoZW4gcGVvcGxlIEVudGVyIG9yIEV4aXQgY2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDhCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJQcmVzcyAxeDogVHVybnMgT0ZGIHNvdW5kXFxuUHJlc3MgMng6IEVudGVyIHRvbmUgaXMgT04gRXhpdCB0b25lIGlzIE9GRlxcblByZXNzIDN4OiBFbnRlciB0b25lIGlzIE9GRiBFeGl0IHRvbmUgaXMgT05cXG5QcmVzcyA0eDogVHVybnMgT04gc291bmRcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyOVRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNvcmQgeW91ciBjb25mZXJlbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhcjlCb2R5XCJAI0AgQHNvdXJjZTogQCNAXCJQcmVzcyBvbmNlIHRvIFNUQVJUIHJlY29yZGluZ1xcblByZXNzIGFnYWluIHRvIFNUT1AgcmVjb3JkaW5nXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VDb21tYW5kcy9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY2NvdW50OiAnQ3VlbnRhJyxcbiAgY29udGFjdDogJ0NvbnRhY3RvJyxcbiAgbGVhZDogJ1Bvc2libGUgY2xpZW50ZScsXG4gIGNob29zZUVudGl0eTogJ1NlbGVjY2lvbmUgdW4gdGlwbyBkZSBlbnRpZGFkJyxcbiAgY3JlYXRlOiAnQ3JlYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJhY2NvdW50XCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29udGFjdFwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcImxlYWRcIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJjaG9vc2VFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgZW50aXR5IHR5cGVcIkAjQFxuLy8gQGtleTogQCNAXCJjcmVhdGVcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdXJlVG9EZWxldGVWb2ljZU1haWw6ICdcXHhCRlNlZ3VybyBxdWUgZGVzZWEgZWxpbWluYXIgZXN0ZSBtZW5zYWplIGRlIHZvej8nLFxuICBkb05vdEFza0FnYWluOiAnTm8gdm9sdmVyIGEgcHJlZ3VudGFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic3VyZVRvRGVsZXRlVm9pY2VNYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdm9pY2VtYWlsP1wiQCNAXG4vLyBAa2V5OiBAI0BcImRvTm90QXNrQWdhaW5cIkAjQCBAc291cmNlOiBAI0BcIkRvbid0IGFzayBtZSBhZ2FpblwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3Rpb25NZW51TGlzdC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkb3dubG9hZDogJ0Rlc2NhcmdhcicsXG4gIHBsYXk6ICdSZXByb2R1Y2lyJyxcbiAgcGF1c2U6ICdQYXVzYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJkb3dubG9hZFwiQCNAIEBzb3VyY2U6IEAjQFwiRG93bmxvYWRcIkAjQFxuLy8gQGtleTogQCNAXCJwbGF5XCJAI0AgQHNvdXJjZTogQCNAXCJQbGF5XCJAI0Bcbi8vIEBrZXk6IEAjQFwicGF1c2VcIkAjQCBAc291cmNlOiBAI0BcIlBhdXNlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1ZvaWNlbWFpbFBsYXllci9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IG1lc3NhZ2VUeXBlcyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9lbnVtcy9tZXNzYWdlVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZExvZzogJ1JlZ2lzdHJvJyxcbiAgZWRpdExvZzogJ0VkaXRhciByZWdpc3RybycsXG4gIHZpZXdEZXRhaWxzOiAnVmVyIGRldGFsbGVzJyxcbiAgYWRkRW50aXR5OiAnQ3JlYXIgbnVldm8nLFxuICBjYWxsOiAnTGxhbWFyJyxcbiAgY29udmVyc2F0aW9uOiAnQ29udmVyc2FjacOzbicsXG4gIGdyb3VwQ29udmVyc2F0aW9uOiAnQ29udmVyc2FjacOzbiBncnVwYWwnLFxuICB0ZXh0OiAnVGV4dG8nLFxuICB2b2ljZU1lc3NhZ2U6ICdNZW5zYWplIGRlIHZveicsXG4gIFttZXNzYWdlVHlwZXMudm9pY2VNYWlsXTogJ01lbnNhamUgZGUgYnV6w7NuIGRlIHZveicsXG4gIG1hcms6ICdNYXJjYXIgY29tbyBubyBsZcOtZG8nLFxuICB1bm1hcms6ICdNYXJjYXIgY29tbyBsZcOtZG8nLFxuICBkZWxldGU6ICdFbGltaW5hcicsXG4gIGZheFNlbnQ6ICdGYXggZW52aWFkbycsXG4gIGZheFJlY2VpdmVkOiAnRmF4IHJlY2liaWRvJyxcbiAgcGFnZXM6ICdww6FnaW5hcycsXG4gIHByZXZpZXc6ICdWZXInLFxuICBkb3dubG9hZDogJ0Rlc2NhcmdhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFkZExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJjb252ZXJzYXRpb25cIkAjQCBAc291cmNlOiBAI0BcIkNvbnZlcnNhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcImdyb3VwQ29udmVyc2F0aW9uXCJAI0AgQHNvdXJjZTogQCNAXCJHcm91cCBDb252ZXJzYXRpb25cIkAjQFxuLy8gQGtleTogQCNAXCJ2b2ljZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlIG1lc3NhZ2VcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlIE1haWxcIkAjQFxuLy8gQGtleTogQCNAXCJtYXJrXCJAI0AgQHNvdXJjZTogQCNAXCJNYXJrIGFzIFVucmVhZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVubWFya1wiQCNAIEBzb3VyY2U6IEAjQFwiTWFyayBhcyBSZWFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGVsZXRlXCJAI0AgQHNvdXJjZTogQCNAXCJEZWxldGVcIkAjQFxuLy8gQGtleTogQCNAXCJmYXhTZW50XCJAI0AgQHNvdXJjZTogQCNAXCJGYXggc2VudFwiQCNAXG4vLyBAa2V5OiBAI0BcImZheFJlY2VpdmVkXCJAI0AgQHNvdXJjZTogQCNAXCJGYXggcmVjZWl2ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJwYWdlc1wiQCNAIEBzb3VyY2U6IEAjQFwicGFnZXNcIkAjQFxuLy8gQGtleTogQCNAXCJwcmV2aWV3XCJAI0AgQHNvdXJjZTogQCNAXCJWaWV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZG93bmxvYWRcIkAjQCBAc291cmNlOiBAI0BcIkRvd25sb2FkXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgbWVzc2FnZVR5cGVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2VudW1zL21lc3NhZ2VUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdNZW5zYWplcycsXG4gIHNlYXJjaDogJ0J1c2Nhci4uLicsXG4gIG5vTWVzc2FnZXM6ICdTaW4gbWVuc2FqZXMnLFxuICBub1NlYXJjaFJlc3VsdHM6ICdObyBzZSBoYW4gZW5jb250cmFkbyByZWdpc3Ryb3MgcXVlIGNvaW5jaWRhbicsXG4gIGNvbXBvc2VUZXh0OiAnUmVkYWN0YXIgbWVuc2FqZScsXG4gIFttZXNzYWdlVHlwZXMuYWxsXTogJ1RvZG8nLFxuICBbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF06ICdWb3onLFxuICBbbWVzc2FnZVR5cGVzLnRleHRdOiAnVGV4dG8nLFxuICBbbWVzc2FnZVR5cGVzLmZheF06ICdGYXgnLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTWVzc2FnZXNcIkAjQFxuLy8gQGtleTogQCNAXCJzZWFyY2hcIkAjQCBAc291cmNlOiBAI0BcIlNlYXJjaC4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbXBvc2VUZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJDb21wb3NlIFRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJub01lc3NhZ2VzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBNZXNzYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcIm5vU2VhcmNoUmVzdWx0c1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMuYWxsXVwiQCNAIEBzb3VyY2U6IEAjQFwiQWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy52b2ljZU1haWxdXCJAI0AgQHNvdXJjZTogQCNAXCJWb2ljZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudGV4dF1cIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLmZheF1cIkAjQCBAc291cmNlOiBAI0BcIkZheFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZXNzYWdlc1BhbmVsL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2dpbmc6ICdJbmljaWFuZG8gc2VzacOzbi4uLicsXG4gIGxvZ0NhbGw6ICdSZWdpc3RyYXIgbGxhbWFkYScsXG4gIGVkaXRMb2c6ICdFZGl0YXIgcmVnaXN0cm8nLFxuICBzZWxlY3Q6ICdTZWxlY2Npb25hciB1bmEgZ3JhYmFjacOzbiBxdWUgY29pbmNpZGEnLFxuICBPbkhvbGQ6ICdFbiBlc3BlcmEnLFxuICBSaW5naW5nOiAnTGxhbWFuZG8nLFxuICBDYWxsQ29ubmVjdGVkOiAnTGxhbWFkYSBjb25lY3RhZGEnLFxuICB1bmtub3duVXNlcjogJ1VzdWFyaW8gZGVzY29ub2NpZG8nLFxuICB1bmtub3duTnVtYmVyOiAnQW7Ds25pbW8nLFxuICB1bmF2YWlsYWJsZTogJ05vIGRpc3BvbmlibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZlciBkZXRhbGxlcycsXG4gIGFkZEVudGl0eTogJ0NyZWFyIG51ZXZvJyxcbiAgYWRkTG9nOiAnUmVnaXN0cm8nLFxuICB0ZXh0OiAnVGV4dG8nLFxuICBjYWxsOiAnTGxhbWFyJyxcbiAgYWRkQ29udGFjdDogJ0HDsWFkaXIgY29udGFjdG8nLFxuICBtaXNzZWRDYWxsOiAnUGVyZGlkYScsXG4gIGluYm91bmRDYWxsOiAnRW50cmFudGUnLFxuICBvdXRib3VuZENhbGw6ICdTYWxpZW50ZScsXG4gIGZyb206ICdEZScsXG4gIHRvOiAnUGFyYScsXG4gIGhhbmd1cDogJ0NvbGdhcicsXG4gIGFjY2VwdDogJ0FjZXB0YXInLFxuICB0b1ZvaWNlbWFpbDogJ0VudmlhciBhbCBidXrDs24gZGUgdm96Jyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImFkZENvbnRhY3RcIkAjQCBAc291cmNlOiBAI0BcIkFkZCBDb250YWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwibWlzc2VkQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTWlzc2VkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluYm91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk91dGJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJvbVwiQCNAIEBzb3VyY2U6IEAjQFwiRnJvbVwiQCNAXG4vLyBAa2V5OiBAI0BcInRvXCJAI0AgQHNvdXJjZTogQCNAXCJUb1wiQCNAXG4vLyBAa2V5OiBAI0BcImhhbmd1cFwiQCNAIEBzb3VyY2U6IEAjQFwiSGFuZ3VwXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWNjZXB0XCJAI0AgQHNvdXJjZTogQCNAXCJBY2NlcHRcIkAjQFxuLy8gQGtleTogQCNAXCJ0b1ZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZCB0byBWb2ljZW1haWxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbEl0ZW0vaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9BY3RpdmVDYWxsczogJ05vIGhheSBsbGFtYWRhcyBhY3RpdmFzJyxcbiAgY3VycmVudENhbGw6ICdMbGFtYWRhIGFjdHVhbCcsXG4gIHJpbmdDYWxsOiAnTGxhbWFkYSBzb25hbmRvJyxcbiAgb25Ib2xkQ2FsbDogJ0xsYW1hZGEgZW4gZXNwZXJhJyxcbiAgb3RoZXJEZXZpY2VDYWxsOiAnTGxhbWFkYXMgZW4gY3Vyc28gZW4gbWlzIG90cm9zIGRpc3Bvc2l0aXZvcycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vQWN0aXZlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIGFjdGl2ZSBjYWxsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImN1cnJlbnRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDdXJyZW50IENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJyaW5nQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ2luZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwib25Ib2xkQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBvbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3RoZXJEZXZpY2VDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJPbmdvaW5nIGNhbGxzIG9uIG15IG90aGVyIGRldmljZXNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbHNQYW5lbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnSW5pY2lhbmRvIHNlc2nDs24uLi4nLFxuICBsb2dDYWxsOiAnUmVnaXN0cmFyIGxsYW1hZGEnLFxuICBlZGl0TG9nOiAnRWRpdGFyIHJlZ2lzdHJvJyxcbiAgc2VsZWN0OiAnU2VsZWNjaW9uYXIgdW5hIGdyYWJhY2nDs24gcXVlIGNvaW5jaWRhJyxcbiAgT25Ib2xkOiAnRW4gZXNwZXJhJyxcbiAgUmluZ2luZzogJ0xsYW1hbmRvJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0xsYW1hZGEgY29uZWN0YWRhJyxcbiAgdW5rbm93blVzZXI6ICdVc3VhcmlvIGRlc2Nvbm9jaWRvJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fuw7NuaW1vJyxcbiAgdW5hdmFpbGFibGU6ICdObyBkaXNwb25pYmxlJyxcbiAgdmlld0RldGFpbHM6ICdWZXIgZGV0YWxsZXMnLFxuICBhZGRFbnRpdHk6ICdDcmVhciBudWV2bycsXG4gIGFkZExvZzogJ1JlZ2lzdHJvJyxcbiAgdGV4dDogJ1RleHRvJyxcbiAgY2FsbDogJ0xsYW1hcicsXG4gIG1pc3NlZENhbGw6ICdQZXJkaWRhJyxcbiAgaW5ib3VuZENhbGw6ICdFbnRyYW50ZScsXG4gIG91dGJvdW5kQ2FsbDogJ1NhbGllbnRlJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1pc3NlZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk1pc3NlZFwiQCNAXG4vLyBAa2V5OiBAI0BcImluYm91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJJbmJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0Ym91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJPdXRib3VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0FjdGl2ZUNhbGxzOiAnTm8gaGF5IGxsYW1hZGFzIGFjdGl2YXMnLFxuICBub1JlY29yZHM6ICdObyBoYXkgcmVzdWx0YWRvcy4nLFxufTtcblxuLy8gQGtleTogQCNAXCJub0FjdGl2ZUNhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBhY3RpdmUgY2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJub1JlY29yZHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIHJlc3VsdHMgZm91bmQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxMaXN0L2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnSGlzdG9yaWFsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkhpc3RvcnlcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvQ2FsbEhpc3RvcnlQYWdlL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvcndhcmQ6ICdEZXN2aWFyJyxcbiAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICBjdXN0b21OdW1iZXI6ICdOw7ptZXJvIHBlcnNvbmFsaXphZG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJmb3J3YXJkXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FuY2VsXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5jZWxcIkAjQFxuLy8gQGtleTogQCNAXCJjdXN0b21OdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkN1c3RvbSBudW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRm9yd2FyZEZvcm0vaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICByZXBseTogJ1Jlc3BvbmRlcicsXG4gIG9uTXlXYXk6ICdFbiBjYW1pbm8nLFxuICBjdXN0b21NZXNzYWdlOiAnTWVuc2FqZSBwZXJzb25hbGl6YWRvJyxcbiAgY2FsbE1lQmFja0luOiAnRGV2dcOpbHZhbWUgbGEgbGxhbWFkYSBlbicsXG4gIHdpbGxDYWxsWW91QmFja0luOiAnTGUgZGV2b2x2ZXLDqSBsYSBsbGFtYWRhIGVuJyxcbiAgbWluOiAnbWludXRvcycsXG4gIGhvdXJzOiAnaG9yYXMnLFxuICBkYXlzOiAnZMOtYXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJjYW5jZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbmNlbFwiQCNAXG4vLyBAa2V5OiBAI0BcInJlcGx5XCJAI0AgQHNvdXJjZTogQCNAXCJSZXBseVwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uTXlXYXlcIkAjQCBAc291cmNlOiBAI0BcIk9uIG15IHdheVwiQCNAXG4vLyBAa2V5OiBAI0BcImN1c3RvbU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIkN1c3RvbSBNZXNzYWdlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbE1lQmFja0luXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIG1lIGJhY2sgaW5cIkAjQFxuLy8gQGtleTogQCNAXCJ3aWxsQ2FsbFlvdUJhY2tJblwiQCNAIEBzb3VyY2U6IEAjQFwiV2lsbCBjYWxsIHlvdSBiYWNrIGluXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWluXCJAI0AgQHNvdXJjZTogQCNAXCJtaW4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG91cnNcIkAjQCBAc291cmNlOiBAI0BcImhvdXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGF5c1wiQCNAIEBzb3VyY2U6IEAjQFwiZGF5c1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZXBseVdpdGhNZXNzYWdlL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvcndhcmQ6ICdEZXN2aWFyJyxcbiAgcmVwbHk6ICdSZXNwb25kZXInLFxuICBpZ25vcmU6ICdJZ25vcmFyJyxcbiAgdG9Wb2ljZW1haWw6ICdBIGJ1esOzbiBkZSB2b3onLFxuICBhbnN3ZXI6ICdSZXNwb25kZXInLFxuICBhbnN3ZXJBbmRFbmQ6ICdBdGVuZGVyIHkgc2FsaXInLFxuICBhbnN3ZXJBbmRIb2xkOiAnQXRlbmRlciB5IHJldGVuZXInLFxufTtcblxuLy8gQGtleTogQCNAXCJmb3J3YXJkXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVwbHlcIkAjQCBAc291cmNlOiBAI0BcIlJlcGx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiaWdub3JlXCJAI0AgQHNvdXJjZTogQCNAXCJJZ25vcmVcIkAjQFxuLy8gQGtleTogQCNAXCJ0b1ZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVG8gVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5zd2VyXCJAI0AgQHNvdXJjZTogQCNAXCJBbnN3ZXJcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJBbmRFbmRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEVuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImFuc3dlckFuZEhvbGRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEhvbGRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvSW5jb21pbmdDYWxsUGFkL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVua25vd246ICdEZXNjb25vY2lkbycsXG4gIGFub255bW91czogJ0Fuw7NuaW1vJyxcbiAgYWN0aXZlQ2FsbDogJ0xsYW1hZGEgYWN0aXZhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5rbm93blwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93blwiQCNAXG4vLyBAa2V5OiBAI0BcImFub255bW91c1wiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvSW5jb21pbmdDYWxsUGFnZS9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBoaWRlOiAnT2N1bHRhcicsXG4gIGVuZDogJ0ZpbmFsaXphcicsXG4gIGtleXBhZDogJ1RlY2xhZG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJoaWRlXCJAI0AgQHNvdXJjZTogQCNAXCJIaWRlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW5kXCJAI0AgQHNvdXJjZTogQCNAXCJFbmRcIkAjQFxuLy8gQGtleTogQCNAXCJrZXlwYWRcIkAjQCBAc291cmNlOiBAI0BcIktleXBhZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsRGlhbFBhZC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bm11dGU6ICdSZWFjdGl2YXIgYXVkaW8nLFxuICBtdXRlOiAnU2lsZW5jaWFyJyxcbiAga2V5cGFkOiAnVGVjbGFkbycsXG4gIGhvbGQ6ICdSZXRlbmVyJyxcbiAgb25Ib2xkOiAnRW4gZXNwZXJhJyxcbiAgcGFyazogJ0FwYXJjYXInLFxuICBzdG9wUmVjb3JkOiAnRGV0ZW5lcicsXG4gIHJlY29yZDogJ0dyYWJhcicsXG4gIGFkZDogJ0FncmVnYXInLFxuICB0cmFuc2ZlcjogJ1RyYW5zZmVyaXInLFxuICBmbGlwOiAnVHJhc3Bhc2FyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5tdXRlXCJAI0AgQHNvdXJjZTogQCNAXCJVbm11dGVcIkAjQFxuLy8gQGtleTogQCNAXCJtdXRlXCJAI0AgQHNvdXJjZTogQCNAXCJNdXRlXCJAI0Bcbi8vIEBrZXk6IEAjQFwia2V5cGFkXCJAI0AgQHNvdXJjZTogQCNAXCJLZXlwYWRcIkAjQFxuLy8gQGtleTogQCNAXCJob2xkXCJAI0AgQHNvdXJjZTogQCNAXCJIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwib25Ib2xkXCJAI0AgQHNvdXJjZTogQCNAXCJPbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFya1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFya1wiQCNAXG4vLyBAa2V5OiBAI0BcInN0b3BSZWNvcmRcIkAjQCBAc291cmNlOiBAI0BcIlN0b3BcIkAjQFxuLy8gQGtleTogQCNAXCJyZWNvcmRcIkAjQCBAc291cmNlOiBAI0BcIlJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcImFkZFwiQCNAIEBzb3VyY2U6IEAjQFwiQWRkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidHJhbnNmZXJcIkAjQCBAc291cmNlOiBAI0BcIlRyYW5zZmVyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmxpcFwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIEhvbWU6ICdDYXNhJyxcbiAgTW9iaWxlOiAnTcOzdmlsJyxcbiAgV29yazogJ1RyYWJham8nLFxufTtcblxuLy8gQGtleTogQCNAXCJIb21lXCJAI0AgQHNvdXJjZTogQCNAXCJIb21lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTW9iaWxlXCJAI0AgQHNvdXJjZTogQCNAXCJNb2JpbGVcIkAjQFxuLy8gQGtleTogQCNAXCJXb3JrXCJAI0AgQHNvdXJjZTogQCNAXCJXb3JrXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JhZGlvQnRuR3JvdXAvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZmxpcEhlYWRlcjogJ0hhY2VyIGZsaXAgZW4gbGEgbGxhbWFkYSBhLi4uJyxcbiAgZmxpcDogJ1RyYXNwYXNhcicsXG4gIGNvbXBsZXRlOiAnQ29tcGxldGFyIHRyYXNwYXNvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZmxpcEhlYWRlclwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcCBDYWxsIHRvLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmxpcFwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbXBsZXRlXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wbGV0ZSBGbGlwXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ1BhcmE6JyxcbiAgdHJhbnNmZXJUbzogJ1RyYW5zZmVyaXIgYScsXG4gIGJsaW5kVHJhbnNmZXI6ICdUcmFuc2ZlcmlyJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdJbnRyb2R1Y2lyIG7Dum1lcm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG86XCJAI0Bcbi8vIEBrZXk6IEAjQFwidHJhbnNmZXJUb1wiQCNAIEBzb3VyY2U6IEAjQFwiVHJhbnNmZXIgdG9cIkAjQFxuLy8gQGtleTogQCNAXCJibGluZFRyYW5zZmVyXCJAI0AgQHNvdXJjZTogQCNAXCJUcmFuc2ZlclwiQCNAXG4vLyBAa2V5OiBAI0BcImVudGVyTmFtZU9yTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJFbnRlciBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVHJhbnNmZXJQYW5lbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmtub3duOiAnRGVzY29ub2NpZG8nLFxuICBhbm9ueW1vdXM6ICdBbsOzbmltbycsXG4gIGFjdGl2ZUNhbGxzOiAnTGxhbWFkYXMgYWN0aXZhcycsXG59O1xuXG4vLyBAa2V5OiBAI0BcInVua25vd25cIkAjQCBAc291cmNlOiBAI0BcIlVua25vd25cIkAjQFxuLy8gQGtleTogQCNAXCJhbm9ueW1vdXNcIkAjQCBAc291cmNlOiBAI0BcIkFub255bW91c1wiQCNAXG4vLyBAa2V5OiBAI0BcImFjdGl2ZUNhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJBY3RpdmUgQ2FsbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvQ2FsbEN0cmxQYWdlL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFjdGl2ZUNhbGw6ICdMbGFtYWRhIGFjdGl2YScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFjdGl2ZUNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkFjdGl2ZSBDYWxsXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxCYWRnZUNvbnRhaW5lci9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0NvbnRhY3RzOiAnTm8gc2UgaGFuIGVuY29udHJhZG8gcmVnaXN0cm9zLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vQ29udGFjdHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIHJlY29yZHMgZm91bmQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3RMaXN0L2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNlYXJjaFBsYWNlaG9sZGVyOiAnQnVzY2FyLi4uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic2VhcmNoUGxhY2Vob2xkZXJcIkAjQCBAc291cmNlOiBAI0BcIlNlYXJjaC4uLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0c1ZpZXcvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsOiAnVG9kb3MnLFxuICBjb21wYW55OiAnQ29tcGHDscOtYScsXG4gIHBlcnNvbmFsOiAnUGVyc29uYWwnLFxufTtcblxuLy8gQGtleTogQCNAXCJhbGxcIkAjQCBAc291cmNlOiBAI0BcIkFsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbXBhbnlcIkAjQCBAc291cmNlOiBAI0BcIkNvbXBhbnlcIkAjQFxuLy8gQGtleTogQCNAXCJwZXJzb25hbFwiQCNAIEBzb3VyY2U6IEAjQFwiUGVyc29uYWxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdFNvdXJjZUZpbHRlci9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IHByZXNlbmNlU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvcHJlc2VuY2VTdGF0dXMnO1xuaW1wb3J0IGRuZFN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZXh0ZW5zaW9uTGFiZWw6ICdFeHQuJyxcbiAgZGlyZWN0TGFiZWw6ICdEaXJlY3RvJyxcbiAgZW1haWxMYWJlbDogJ0NvcnJlbyBlbGVjdHLDs25pY28nLFxuICBjYWxsOiAnTGxhbWFyJyxcbiAgdGV4dDogJ1RleHRvJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV06ICdEaXNwb25pYmxlJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3ldOiAnT2N1cGFkbycsXG4gIFtwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXTogJ0ludmlzaWJsZScsXG4gIFtkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc106ICdObyBtb2xlc3RhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImV4dGVuc2lvbkxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJFeHQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGlyZWN0TGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIkRpcmVjdFwiQCNAXG4vLyBAa2V5OiBAI0BcImVtYWlsTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIkVtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMuYXZhaWxhYmxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiQXZhaWxhYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLm9mZmxpbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJJbnZpc2libGVcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMuYnVzeV1cIkAjQCBAc291cmNlOiBAI0BcIkJ1c3lcIkAjQFxuLy8gQGtleTogQCNAXCJbZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdXCJAI0AgQHNvdXJjZTogQCNAXCJEbyBub3QgRGlzdHVyYlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGV0YWlscy9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWN0RGV0YWlsczogJ0RldGFsbGVzIGRlIGNvbnRhY3RvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiY29udGFjdERldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIkNvbnRhY3QgRGV0YWlsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGV0YWlsc1ZpZXcvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdBdWRpbycsXG4gIGRpYWxCdXR0b25Wb2x1bWU6ICdWb2x1bWVuIGRlbCBib3TDs24gXCJNYXJjYXJcIicsXG4gIHJpbmd0b25lVm9sdW1lOiAnVm9sdW1lbiBkZWwgdG9ubyBkZSBsbGFtYWRhJyxcbiAgY2FsbFZvbHVtZTogJ1ZvbHVtZW4gZGUgbGxhbWFkYXMnLFxuICBtdXRlQ2FsbHM6ICdTaWxlbmNpYXIgbGxhbWFkYXMnLFxuICBvdXRwdXREZXZpY2U6ICdEaXNwb3NpdGl2byBkZSBzYWxpZGEnLFxuICBpbnB1dERldmljZTogJ0Rpc3Bvc2l0aXZvIGRlIGVudHJhZGEnLFxuICBtaWNQZXJtaXNzaW9uOiAnUGVybWlzbyBwYXJhIGVsIG1pY3LDs2Zvbm8nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW9cIkAjQFxuLy8gQGtleTogQCNAXCJkaWFsQnV0dG9uVm9sdW1lXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsIEJ1dHRvbiBWb2x1bWVcIkAjQFxuLy8gQGtleTogQCNAXCJyaW5ndG9uZVZvbHVtZVwiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ3RvbmUgVm9sdW1lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFZvbHVtZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBWb2x1bWVcIkAjQFxuLy8gQGtleTogQCNAXCJtdXRlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIk11dGUgQ2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRwdXREZXZpY2VcIkAjQCBAc291cmNlOiBAI0BcIk91dHB1dCBEZXZpY2VcIkAjQFxuLy8gQGtleTogQCNAXCJpbnB1dERldmljZVwiQCNAIEBzb3VyY2U6IEAjQFwiSW5wdXQgRGV2aWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWljUGVybWlzc2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiTWljcm9waG9uZSBQZXJtaXNzaW9uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0b3BpYzogJ1RlbWEnLFxuICB3aGVuOiAnQ3XDoW5kbycsXG4gIGR1cmF0aW9uOiAnRHVyYWNpw7NuJyxcbiAgcmVjdXJyaW5nTWVldGluZzogJ1JldW5pw7NuIHBlcmnDs2RpY2EnLFxuICByZWN1cnJpbmdEZXNjcmliZTogJ1JlY3VlcmRlIGNvbXByb2JhciBsYSBwZXJpb2RpY2lkYWQgbyByZXBldGljacOzbiBlbiBsYSBpbnZpdGFjacOzbiBkZSBjYWxlbmRhcmlvIGVudmlhZGEgYSBsb3MgYXNpc3RlbnRlcy4nLFxuICB2aWRlbzogJ1bDrWRlbycsXG4gIHZpZGVvRGVzY3JpYmU6ICdBbCB1bmlyc2UgYSB1bmEgcmV1bmnDs24nLFxuICBob3N0OiAnSG9zdCcsXG4gIHBhcnRpY2lwYW50czogJ1BhcnRpY2lwYW50ZScsXG4gIGF1ZGlvT3B0aW9uczogJ09wY2lvbmVzIGRlIGF1ZGlvJyxcbiAgdm9JUE9ubHk6ICdTb2xvIFZvSVAnLFxuICBib3RoOiAnQW1ib3MnLFxuICBtZWV0aW5nT3B0aW9uczogJ09wY2lvbmVzIGRlIHJldW5pw7NuJyxcbiAgcmVxdWlyZVBhc3N3b3JkOiAnRXMgbmVjZXNhcmlhIGxhIGNvbnRyYXNlw7FhIGRlIHJldW5pw7NuJyxcbiAgcGFzc3dvcmQ6ICdDb250cmFzZcOxYScsXG4gIGVuYWJsZUpvaW5CZWZvcmVIb3N0OiAnUGVybWl0aXIgdW5pcnNlIGFudGVzIHF1ZSBlbCBob3N0JyxcbiAgdGVsZXBob255T25seTogJ1NvbG8gdGVsZWZvbsOtYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRvcGljXCJAI0AgQHNvdXJjZTogQCNAXCJUb3BpY1wiQCNAXG4vLyBAa2V5OiBAI0BcIndoZW5cIkAjQCBAc291cmNlOiBAI0BcIldoZW5cIkAjQFxuLy8gQGtleTogQCNAXCJkdXJhdGlvblwiQCNAIEBzb3VyY2U6IEAjQFwiRHVyYXRpb25cIkAjQFxuLy8gQGtleTogQCNAXCJyZWN1cnJpbmdNZWV0aW5nXCJAI0AgQHNvdXJjZTogQCNAXCJSZWN1cnJpbmcgTWVldGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInJlY3VycmluZ0Rlc2NyaWJlXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgcmVtZW1iZXIgdG8gY2hlY2sgcmVjdXJyZW5jZSBvciByZXBlYXQgaW4geW91ciBjYWxlbmRhciBpbnZpdGF0aW9uIHRvIHlvdXIgYXR0ZW5kZWVzLlwiQCNAXG4vLyBAa2V5OiBAI0BcInZpZGVvXCJAI0AgQHNvdXJjZTogQCNAXCJWaWRlb1wiQCNAXG4vLyBAa2V5OiBAI0BcInZpZGVvRGVzY3JpYmVcIkAjQCBAc291cmNlOiBAI0BcIldoZW4gam9pbmluZyBhIG1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJob3N0XCJAI0AgQHNvdXJjZTogQCNAXCJIb3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFydGljaXBhbnRzXCJAI0AgQHNvdXJjZTogQCNAXCJQYXJ0aWNpcGFudFwiQCNAXG4vLyBAa2V5OiBAI0BcImF1ZGlvT3B0aW9uc1wiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW8gT3B0aW9uc1wiQCNAXG4vLyBAa2V5OiBAI0BcInZvSVBPbmx5XCJAI0AgQHNvdXJjZTogQCNAXCJWb0lQIE9ubHlcIkAjQFxuLy8gQGtleTogQCNAXCJib3RoXCJAI0AgQHNvdXJjZTogQCNAXCJCb3RoXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWVldGluZ09wdGlvbnNcIkAjQCBAc291cmNlOiBAI0BcIk1lZXRpbmcgT3B0aW9uc1wiQCNAXG4vLyBAa2V5OiBAI0BcInJlcXVpcmVQYXNzd29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVxdWlyZSBtZWV0aW5nIHBhc3N3b3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFzc3dvcmRcIkAjQCBAc291cmNlOiBAI0BcIlBhc3N3b3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW5hYmxlSm9pbkJlZm9yZUhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkVuYWJsZSBqb2luIGJlZm9yZSBob3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwidGVsZXBob255T25seVwiQCNAIEBzb3VyY2U6IEAjQFwiVGVsZXBob255IE9ubHlcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVldGluZ1BhbmVsL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN0YXJ0OiAnUmVhbGl6YXIgdW5hIHZpc2l0YSByw6FwaWRhJyxcbiAgc2tpcDogJ1NhbHRhcicsXG4gIG5leHQ6ICdTaWd1aWVudGUnLFxuICBmaW5pc2g6ICdGaW5hbGl6YXInLFxufTtcblxuLy8gQGtleTogQCNAXCJzdGFydFwiQCNAIEBzb3VyY2U6IEAjQFwiVGFrZSBhIFF1aWNrIFRvdXJcIkAjQFxuLy8gQGtleTogQCNAXCJza2lwXCJAI0AgQHNvdXJjZTogQCNAXCJTa2lwXCJAI0Bcbi8vIEBrZXk6IEAjQFwibmV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiTmV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImZpbmlzaFwiQCNAIEBzb3VyY2U6IEAjQFwiRmluaXNoXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1VzZXJHdWlkZS9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBnb29nbGU6ICdHb29nbGUnLFxufTtcblxuLy8gQGtleTogQCNAXCJnb29nbGVcIkAjQCBAc291cmNlOiBAI0BcIkdvb2dsZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVkdWxlOiAnUHJvZ3JhbWFyJyxcbiAgcHJvbXB0OiAnQXV0b3JpY2UgYSBSaW5nQ2VudHJhbCBhIGFjY2VkZXIgYSBsYSBpbmZvcm1hY2nDs24gZGUgY3VlbnRhLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInNjaGVkdWxlXCJAI0AgQHNvdXJjZTogQCNAXCJTY2hlZHVsZVwiQCNAXG4vLyBAa2V5OiBAI0BcInByb21wdFwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGF1dGhvcml6ZSBSaW5nQ2VudHJhbCB0byBhY2Nlc3MgeW91ciBhY2NvdW50IGluZm9ybWF0aW9uLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZWV0aW5nU2NoZWR1bGVCdXR0b24vaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW52aXRlV2l0aENhbGVuZGFyOiAnSW52aXRhciBjb24gR29vZ2xlIENhbGVuZGFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiaW52aXRlV2l0aENhbGVuZGFyXCJAI0AgQHNvdXJjZTogQCNAXCJJbnZpdGUgd2l0aCBHb29nbGUgQ2FsZW5kYXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0ludml0ZUJ1dHRvbi9pMThuL2VzLUVTLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbnZpdGVXaXRoQ2FsZW5kYXI6ICdJbnZpdGFyIGNvbiBHb29nbGUgQ2FsZW5kYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJpbnZpdGVXaXRoQ2FsZW5kYXJcIkAjQCBAc291cmNlOiBAI0BcIkludml0ZSB3aXRoIEdvb2dsZSBDYWxlbmRhclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGhvcml6ZTogJ0F1dG9yaXphcicsXG4gIHByb21wdDogJ0F1dG9yaWNlIGEge2JyYW5kfSBhIGFjY2VkZXIgYSBsYSBpbmZvcm1hY2nDs24gZGUgY3VlbnRhIGRlIEdvb2dsZS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJhdXRob3JpemVcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZVwiQCNAXG4vLyBAa2V5OiBAI0BcInByb21wdFwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGF1dGhvcml6ZSB7YnJhbmR9IHRvIGFjY2VzcyB5b3VyIEdvb2dsZSBhY2NvdW50IGluZm9ybWF0aW9uLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nQXV0aG9yaXplQnV0dG9uL2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgYXV0aG9yaXphdGlvbkVycm9yIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2F1dGhvcml6YXRpb25FcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhvcml6YXRpb25FcnJvci5hY2NvdW50TG9nZ2VkT3V0XTogJ0hlbW9zIHZpc3RvIHF1ZSBoYSBjZXJyYWRvIHNlc2nDs24gZW4gc3UgY3VlbnRhIGRlIEdvb2dsZSB7YWNjb3VudEVtYWlsfS4gUGFyYSBjb250aW51YXIsIGhhZ2EgY2xpYyBhcXXDrSB7Y2xpY2tIZXJlTGlua30gcGFyYSBpbmljaWFyIHNlc2nDs24gZW4gc3UgY3VlbnRhIGRlIEdvb2dsZS4nLFxuICBjbGlja0hlcmU6ICdoYWdhIGNsaWMgYXF1w60nLFxuICBbYXV0aG9yaXphdGlvbkVycm9yLm5vdEF1dGhvcml6ZWRdOiAnSGVtb3MgdmlzdG8gcXVlIG5vIGhhIGF1dG9yaXphZG8gYSB7YnJhbmR9IGRlIEdvb2dsZSBwYXJhIGFjY2VkZXIgYSBzdSBjdWVudGEgZGUgR29vZ2xlLiBIYWdhIGNsaWMgYXF1w60ge2NsaWNrSGVyZUxpbmt9IHBhcmEgcHJvcG9yY2lvbmFyIGxhIGF1dG9yaXphY2nDs24uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2F1dGhvcml6YXRpb25FcnJvci5hY2NvdW50TG9nZ2VkT3V0XVwiQCNAIEBzb3VyY2U6IEAjQFwiV2Ugbm90aWNlZCB5b3UgaGF2ZSBsb2dnZWQgb3V0IHlvdXIgR29vZ2xlIGFjY291bnQge2FjY291bnRFbWFpbH0uIFRvIGNvbnRpbnVlIHBsZWFzZSB7Y2xpY2tIZXJlTGlua30gdG8gbG9naW4geW91ciBHb29nbGUgYWNjb3VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja0hlcmVcIkAjQCBAc291cmNlOiBAI0BcImNsaWNrIGhlcmVcIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aG9yaXphdGlvbkVycm9yLm5vdEF1dGhvcml6ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJXZSBub3RpY2VkIHlvdSBoYXZlbid0IGF1dGhvcml6ZWQge2JyYW5kfSBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIEdvb2dsZSBhY2NvdW50LiBQbGVhc2Uge2NsaWNrSGVyZUxpbmt9IHRvIGF1dGhvcml6ZS5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbkFsZXJ0L2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vUmVjb3JkczogJ05vIHNlIGhhbiBlbmNvbnRyYWRvIHJlZ2lzdHJvcy4nLFxufTtcblxuLy8gQGtleTogQCNAXCJub1JlY29yZHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIHJlY2VudCByZWNvcmRzIGZvdW5kLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eU1lc3NhZ2VzL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vUmVjb3JkczogJ05vIHNlIGhhbiBlbmNvbnRyYWRvIHJlZ2lzdHJvcy4nLFxuICBpbkJvdW5kOiAnRW50cmFudGUnLFxuICBvdXRCb3VuZDogJ1NhbGllbnRlJyxcbiAgbWlzc2VkOiAnTGxhbWFkYSBwZXJkaWRhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZWNlbnQgcmVjb3JkcyBmb3VuZC5cIkAjQFxuLy8gQGtleTogQCNAXCJpbkJvdW5kXCJAI0AgQHNvdXJjZTogQCNAXCJJbmJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0Qm91bmRcIkAjQCBAc291cmNlOiBAI0BcIk91dGJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWlzc2VkXCJAI0AgQHNvdXJjZTogQCNAXCJNaXNzZWQgQ2FsbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vZXMtRVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlY2VudEFjdGl2aXRpZXM6ICdBY3RpdmlkYWRlcyByZWNpZW50ZXMnLFxuICB0ZXh0OiAnVGV4dG8nLFxuICBmYXg6ICdGYXgnLFxuICB2b2ljZW1haWw6ICdCdXrDs24gZGUgdm96JyxcbiAgY2FsbDogJ0xsYW1hcicsXG4gIGdtYWlsOiAnR21haWwnLFxufTtcblxuLy8gQGtleTogQCNAXCJyZWNlbnRBY3Rpdml0aWVzXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNlbnQgQWN0aXZpdGllc1wiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJmYXhcIkAjQCBAc291cmNlOiBAI0BcIkZheFwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImdtYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJHbWFpbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWNlbnRBY3Rpdml0eUNvbnRhaW5lci9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdObyBzZSBoYW4gZW5jb250cmFkbyByZWdpc3Ryb3MuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZWNlbnQgcmVjb3JkcyBmb3VuZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUmVjZW50QWN0aXZpdHlFbWFpbHMvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGlhbHBhZExhYmVsOiAnVGVjbGFkbyBkZSBtYXJjYWNpw7NuJyxcbiAgY2FsbHNMYWJlbDogJ0xsYW1hZGFzJyxcbiAgaGlzdG9yeUxhYmVsOiAnSGlzdG9yaWFsJyxcbiAgbWVzc2FnZXNMYWJlbDogJ01lbnNhamVzJyxcbiAgbW9yZU1lbnVMYWJlbDogJ01lbsO6IE3DoXMnLFxuICBjb250YWN0c0xhYmVsOiAnQ29udGFjdG9zJyxcbiAgbWVldGluZ0xhYmVsOiAnUHJvZ3JhbWFyIHVuYSByZXVuacOzbicsXG4gIGNvbmZlcmVuY2VMYWJlbDogJ1Byb2dyYW1hciB1bmEgY29uZmVyZW5jaWEnLFxuICBoYW5nb3V0c0xhYmVsOiAnSW5pY2lhciBIYW5nb3V0cycsXG4gIGhhbmdvdXRzVGl0bGU6ICdJbmljaWFyIEhhbmdvdXQgY29uIENvbmZlcmVuY2lhcycsXG4gIHNldHRpbmdzTGFiZWw6ICdDb25maWd1cmFjacOzbicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImRpYWxwYWRMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbCBQYWRcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsc0xhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImhpc3RvcnlMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiSGlzdG9yeVwiQCNAXG4vLyBAa2V5OiBAI0BcIm1lc3NhZ2VzTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIk1lc3NhZ2VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibW9yZU1lbnVMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiTW9yZSBNZW51XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29udGFjdHNMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdHNcIkAjQFxuLy8gQGtleTogQCNAXCJtZWV0aW5nTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlNjaGVkdWxlIE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJjb25mZXJlbmNlTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlNjaGVkdWxlIENvbmZlcmVuY2VcIkAjQFxuLy8gQGtleTogQCNAXCJoYW5nb3V0c0xhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJTdGFydCBIYW5nb3V0c1wiQCNAXG4vLyBAa2V5OiBAI0BcImhhbmdvdXRzVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlN0YXJ0IEhhbmdvdXRzIHdpdGggQ29uZmVyZW5jaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2V0dGluZ3NMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3NcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFpblZpZXcvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgb2ZmbGluZU1vZGU6ICdNb2RvIGZ1ZXJhIGRlIGzDrW5lYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm9mZmxpbmVNb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJPZmZsaW5lIE1vZGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB3ZWJwaG9uZVVuYXZhaWxhYmxlOiAnRWwgdGVsw6lmb25vIHdlYiBubyBlc3TDoSBkaXNwb25pYmxlJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwid2VicGhvbmVVbmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiV2ViIFBob25lIFVuYXZhaWxhYmxlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1dlYnBob25lQmFkZ2UvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZXVsYTogJ0NvbnRyYXRvIGRlIGxpY2VuY2lhIGRlIHVzdWFyaW8gZmluYWwnLFxuICBzZXJ2aWNlVGVybXM6ICdDb25kaWNpb25lcyBkZSBzZXJ2aWNpbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImV1bGFcIkAjQCBAc291cmNlOiBAI0BcIkVuZCBVc2VyIExpY2Vuc2UgQWdyZWVtZW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VydmljZVRlcm1zXCJAI0AgQHNvdXJjZTogQCNAXCJTZXJ2aWNlIFRlcm1zXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0V1bGEvaTE4bi9lcy1FUy5qcyIsImltcG9ydCBwcmVzZW5jZVN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzJztcbmltcG9ydCBkbmRTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9kbmRTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdOiAnRGlzcG9uaWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXN5XTogJ09jdXBhZG8nLFxuICBbcHJlc2VuY2VTdGF0dXMub2ZmbGluZV06ICdJbnZpc2libGUnLFxuICBbZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdOiAnTm8gbW9sZXN0YXInLFxufTtcblxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMuYXZhaWxhYmxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiQXZhaWxhYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmJ1c3ldXCJAI0AgQHNvdXJjZTogQCNAXCJCdXN5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLm9mZmxpbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJJbnZpc2libGVcIkAjQFxuLy8gQGtleTogQCNAXCJbZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdXCJAI0AgQHNvdXJjZTogQCNAXCJEbyBub3QgRGlzdHVyYlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9QcmVzZW5jZUl0ZW0vaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdHVzOiAnRXN0YWRvJyxcbiAgYWNjZXB0UXVldWVDYWxsczogJ0FjZXB0YXIgbGxhbWFkYXMgZW4gY29sYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInN0YXR1c1wiQCNAIEBzb3VyY2U6IEAjQFwiU3RhdHVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWNjZXB0UXVldWVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQWNjZXB0IGNhbGwgcXVldWUgY2FsbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbjogJ0luZ2zDqXMnLFxuICBqYTogJ0phcG9uw6lzJyxcbiAgZnI6ICdGcmFuY8OpcycsXG4gIGRlOiAnRGV1dHNjaCcsXG4gIGVzOiAnRXNwYcOxb2wnLFxuICBpdDogJ0l0YWxpYW5vJyxcbiAgcHQ6ICdQb3J0dWd1w6lzJyxcbn07XHJcblxuLy8gQGtleTogQCNAXCJlblwiQCNAIEBzb3VyY2U6IEAjQFwiRW5nbGlzaFwiQCNAXG4vLyBAa2V5OiBAI0BcImphXCJAI0AgQHNvdXJjZTogQCNAXCJKYXBhbmVzZVwiQCNAXG4vLyBAa2V5OiBAI0BcImZyXCJAI0AgQHNvdXJjZTogQCNAXCJGcmVuY2hcIkAjQFxuLy8gQGtleTogQCNAXCJkZVwiQCNAIEBzb3VyY2U6IEAjQFwiRGV1dHNjaFwiQCNAXG4vLyBAa2V5OiBAI0BcImVzXCJAI0AgQHNvdXJjZTogQCNAXCJTcGFuaXNoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaXRcIkAjQCBAc291cmNlOiBAI0BcIkl0YWxpYW5cIkAjQFxuLy8gQGtleTogQCNAXCJwdFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9ydHVndWVzZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Mb2NhbGVQaWNrZXIvaTE4bi9lcy1FUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVnaW9uOiAnUmVnacOzbicsXG4gIGNhbGxpbmc6ICdMbGFtYWRhcycsXG4gIGxvZ291dDogJ0NlcnJhciBzZXNpw7NuJyxcbiAgdmVyc2lvbjogJ1ZlcnNpw7NuJyxcbiAgc2V0dGluZ3M6ICdDb25maWd1cmFjacOzbicsXG4gIGNsaWNrVG9EaWFsOiAnSGFnYSBjbGljIHBhcmEgbWFyY2FyJyxcbiAgYXV0b0NyZWF0ZUxvZzogJ0NyZWFyIHJlZ2lzdHJvIGRlIGxsYW1hZGFzIGF1dG9tw6F0aWNhbWVudGUnLFxuICBjbGlja1RvU01TOiAnSGFnYSBjbGljIHBhcmEgZW52aWFyIFNNUycsXG4gIGNsaWNrVG9EaWFsU01TOiAnSGFnYSBjbGljIHBhcmEgbWFyY2FyL2VudmlhciBTTVMnLFxuICBhdXRvQ3JlYXRlU01TTG9nOiAnQ3JlYXIgcmVnaXN0cm8gZGUgU01TIGF1dG9tw6F0aWNhbWVudGUnLFxuICBhdXRvTG9nQ2FsbHM6ICdSZWdpc3RyYXIgbGxhbWFkYXMgYXV0b23DoXRpY2FtZW50ZScsXG4gIGF1dG9Mb2dTTVM6ICdSZWdpc3RyYXIgU01TIGF1dG9tw6F0aWNhbWVudGUnLFxuICBhdWRpbzogJ0F1ZGlvJyxcbiAgbGFuZ3VhZ2U6ICdJZGlvbWEnLFxuICBmZWVkYmFjazogJ0NvbWVudGFyaW9zJyxcbiAgdXNlckd1aWRlOiAnTm92ZWRhZGVzJyxcbn07XG5cblxuLy8gQGtleTogQCNAXCJyZWdpb25cIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxpbmdcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJsb2dvdXRcIkAjQCBAc291cmNlOiBAI0BcIkxvZ291dFwiQCNAXG4vLyBAa2V5OiBAI0BcInZlcnNpb25cIkAjQCBAc291cmNlOiBAI0BcIlZlcnNpb25cIkAjQFxuLy8gQGtleTogQCNAXCJzZXR0aW5nc1wiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3NcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvRGlhbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gRGlhbFwiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9DcmVhdGVMb2dcIkAjQCBAc291cmNlOiBAI0BcIkF1dG8tY3JlYXRlIENhbGwgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0b0NyZWF0ZVNNU0xvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0by1jcmVhdGUgU01TIExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9Mb2dDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0byBsb2cgY2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRvTG9nU01TXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRvIGxvZyBTTVNcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvU01TXCJAI0AgQHNvdXJjZTogQCNAXCJDbGljayB0byBTTVNcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvRGlhbFNNU1wiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gRGlhbC9TTVNcIkAjQFxuLy8gQGtleTogQCNAXCJhdWRpb1wiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW9cIkAjQFxuLy8gQGtleTogQCNAXCJsYW5ndWFnZVwiQCNAIEBzb3VyY2U6IEAjQFwiTGFuZ3VhZ2VcIkAjQFxuLy8gQGtleTogQCNAXCJmZWVkYmFja1wiQCNAIEBzb3VyY2U6IEAjQFwiRmVlZGJhY2tcIkAjQFxuLy8gQGtleTogQCNAXCJ1c2VyR3VpZGVcIkAjQCBAc291cmNlOiBAI0BcIldoYXQncyBOZXdcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvU2V0dGluZ3NQYW5lbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmF1dGhvcml6ZWQ6ICdBdXRvcml6YXInLFxuICBhdXRob3JpemVkOiAnQ2FuY2VsYXIgbGEgYXV0b3JpemFjacOzbicsXG4gIHVuYXV0aG9yaXplZFRpdGxlOiAnQ3VlbnRhIGF1dG9yaXphZGEnLFxuICB0b29sdGlwOiAnSGEgYXV0b3JpemFkbyBhIFJpbmdDZW50cmFsIHBhcmEgcXVlIEdvb2dsZSBhY2NlZGEgYSBzdSBjdWVudGEgJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5hdXRob3JpemVkXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRob3JpemVcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRob3JpemVkXCJAI0AgQHNvdXJjZTogQCNAXCJVbmF1dGhvcml6ZVwiQCNAXG4vLyBAa2V5OiBAI0BcInVuYXV0aG9yaXplZFRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRob3JpemVkIEFjY291bnRcIkAjQFxuLy8gQGtleTogQCNAXCJ0b29sdGlwXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgaGF2ZSBhdXRob3JpemVkIFJpbmdDZW50cmFsIGZvciBHb29nbGUgdG8gYWNjZXNzIHlvdXIgYWNjb3VudCBcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aG9yaXplU2V0dGluZ3NQYW5lbC9pMThuL2VzLUVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhZGRNZWV0aW5nOiAnQWdyZWdhciByZXVuacOzbicsXG4gIGFkZE1lZXRpbmdUaXRsZTogJ0FncmVnYXIgcmV1bmnDs24gZGUge2JyYW5kfScsXG4gIG1lZXRpbmdTZXR0aW5nc1RpdGxlOiAnUmV1bmlvbmVzIGRlIHticmFuZH0gLSBDb25maWd1cmFjacOzbicsXG4gIHdoZW46ICdDdcOhbmRvJyxcbiAgcmVjdXJyaW5nTWVldGluZzogJ1JldW5pw7NuIHBlcmnDs2RpY2EnLFxuICByZWN1cnJpbmdNZWV0aW5nUHJvbXB0OiAnUmVjdWVyZGUgY29tcHJvYmFyIGxhIHBlcmlvZGljaWRhZCBvIHJlcGV0aWNpw7NuIGVuIGxhIGludml0YWNpw7NuIGRlIGNhbGVuZGFyaW8gZW52aWFkYSBhIGxvcyBhc2lzdGVudGVzLicsXG4gIHZpZGVvOiAnVsOtZGVvIChhbCB1bmlyc2UgYSB1bmEgcmV1bmnDs24pJyxcbiAgaG9zdDogJ0hvc3Q6JyxcbiAgb246ICdhY3RpdmFkbycsXG4gIG9mZjogJ2Rlc2FjdGl2YWRvJyxcbiAgcGFydGljaXBhbnQ6ICdQYXJ0aWNpcGFudGU6JyxcbiAgYXVkaW9PcHRpb25zOiAnT3BjaW9uZXMgZGUgYXVkaW8nLFxuICB0ZWxlcGhvbmU6ICdTb2xvIHRlbGVmb27DrWEnLFxuICB2b2lwOiAnU29sbyBWb0lQJyxcbiAgYm90aDogJ0FtYm9zJyxcbiAgbWVldGluZ09wdGlvbnM6ICdPcGNpb25lcyBkZSByZXVuacOzbicsXG4gIHJlcXVpcmVQYXNzd29yZDogJ0VzIG5lY2VzYXJpYSBsYSBjb250cmFzZcOxYSBkZSByZXVuacOzbicsXG4gIGpvaW5CZWZvcmVIb3N0OiAnUGVybWl0aXIgdW5pcnNlIGFudGVzIHF1ZSBlbCBob3N0JyxcbiAgZG9Ob3RTaG93QWdhaW46ICdHdWFyZGFyIHkgbm8gbW9zdHJhciBkZSBudWV2bycsXG4gIHNjaGVkdWxlOiAnUHJvZ3JhbWFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWRkTWVldGluZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQWRkIE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRNZWV0aW5nVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkFkZCB7YnJhbmR9IE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJtZWV0aW5nU2V0dGluZ3NUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwie2JyYW5kfSBNZWV0aW5ncyAtIFNldHRpbmdzXCJAI0Bcbi8vIEBrZXk6IEAjQFwid2hlblwiQCNAIEBzb3VyY2U6IEAjQFwiV2hlblwiQCNAXG4vLyBAa2V5OiBAI0BcInJlY3VycmluZ01lZXRpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJlY3VycmluZyBNZWV0aW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjdXJyaW5nTWVldGluZ1Byb21wdFwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHJlbWVtYmVyIHRvIGNoZWNrIHJlY3VycmVuY2Ugb3IgcmVwZWF0IGluIHlvdXIgY2FsZW5kYXIgaW52aXRhdGlvbiB0byB5b3VyIGF0dGVuZGVlcy5cIkAjQFxuLy8gQGtleTogQCNAXCJ2aWRlb1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlkZW8od2hlbiBqb2luaW5nIGEgbWVldGluZylcIkAjQFxuLy8gQGtleTogQCNAXCJob3N0XCJAI0AgQHNvdXJjZTogQCNAXCJIb3N0OlwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uXCJAI0AgQHNvdXJjZTogQCNAXCJvblwiQCNAXG4vLyBAa2V5OiBAI0BcIm9mZlwiQCNAIEBzb3VyY2U6IEAjQFwib2ZmXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFydGljaXBhbnRcIkAjQCBAc291cmNlOiBAI0BcIlBhcnRpY2lwYW50OlwiQCNAXG4vLyBAa2V5OiBAI0BcImF1ZGlvT3B0aW9uc1wiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW8gT3B0aW9uc1wiQCNAXG4vLyBAa2V5OiBAI0BcInRlbGVwaG9uZVwiQCNAIEBzb3VyY2U6IEAjQFwiVGVsZXBob255IE9ubHlcIkAjQFxuLy8gQGtleTogQCNAXCJ2b2lwXCJAI0AgQHNvdXJjZTogQCNAXCJWb0lQIE9ubHlcIkAjQFxuLy8gQGtleTogQCNAXCJib3RoXCJAI0AgQHNvdXJjZTogQCNAXCJCb3RoXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWVldGluZ09wdGlvbnNcIkAjQCBAc291cmNlOiBAI0BcIk1lZXRpbmcgT3B0aW9uc1wiQCNAXG4vLyBAa2V5OiBAI0BcInJlcXVpcmVQYXNzd29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVxdWlyZSBtZWV0aW5nIHBhc3N3b3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiam9pbkJlZm9yZUhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkVuYWJsZSBqb2luIGJlZm9yZSBob3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZG9Ob3RTaG93QWdhaW5cIkAjQCBAc291cmNlOiBAI0BcIlNhdmUgYW5kIGRvIG5vdCBzaG93IGFnYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2NoZWR1bGVcIkAjQCBAc291cmNlOiBAI0BcIlNjaGVkdWxlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9pMThuL2VzLUVTLmpzIiwiaW1wb3J0IG1lc3NhZ2VUeXBlcyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9lbnVtcy9tZXNzYWdlVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluY29taW5nQ2FsbDogJ0xsYW1hZGEgZW50cmFudGUgZGU6JyxcbiAgYW5zd2VyOiAnUmVzcG9uZGVyJyxcbiAgaWdub3JlOiAnSWdub3JhcicsXG4gIGluYm91bmRNZXNzYWdlOiAnTnVldm8ge21lc3NhZ2VUeXBlfSBkZSB7ZnJvbX0nLFxuICBbbWVzc2FnZVR5cGVzLmZheF06ICdmYXgnLFxuICBbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF06ICdidXrDs24gZGUgdm96JyxcbiAgW21lc3NhZ2VUeXBlcy50ZXh0XTogJ21lbnNhamUgZGUgdGV4dG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJpbmNvbWluZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluY29taW5nIENhbGwgRnJvbTpcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlclwiQCNAXG4vLyBAa2V5OiBAI0BcImlnbm9yZVwiQCNAIEBzb3VyY2U6IEAjQFwiSWdub3JlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZE1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIk5ldyB7bWVzc2FnZVR5cGV9IGZyb20ge2Zyb219XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzQ2FsbGVyXCJAI0AgQHNvdXJjZTogQCNAXCJhbm9ueW1vdXMgcGVyc29uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy5mYXhdXCJAI0AgQHNvdXJjZTogQCNAXCJmYXhcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcInZvaWNlbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudGV4dF1cIkAjQCBAc291cmNlOiBAI0BcInRleHQgbWVzc2FnZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL2VzLUVTLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICdidXNpbmVzcycsXHJcbiAgJ2V4dGVuc2lvbicsXHJcbiAgJ2hvbWUnLFxyXG4gICdtb2JpbGUnLFxyXG4gICdwaG9uZScsXHJcbiAgJ3Vua25vd24nLFxyXG4gICdjb21wYW55JyxcclxuICAnZGlyZWN0JyxcclxuXSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlbnVtcy9waG9uZVR5cGVzLmpzIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSAnLi4vbGliL0hhc2hNYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xyXG4gIGFsbDogJ0FsbCcsXHJcbiAgZmF4OiAnRmF4JyxcclxuICBzbXM6ICdTTVMnLFxyXG4gIHZvaWNlTWFpbDogJ1ZvaWNlTWFpbCcsXHJcbiAgcGFnZXI6ICdQYWdlcicsXHJcbiAgdGV4dDogJ1RleHQnLFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVudW1zL21lc3NhZ2VUeXBlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc29mdHBob25lJywgLy8gZGVza3RvcFxuICAnbXlwaG9uZScsIC8vIHJpbmdvdXQgYnJhbmRpbmcgcmMuLlxuICAnb3RoZXJwaG9uZScsIC8vIHJpbmdvdXRcbiAgJ2N1c3RvbXBob25lJywgLy8gcmluZ291dFxuICAnYnJvd3NlcicsIC8vIHdlYnBob25lXG5dLCAnY2FsbGluZ09wdGlvbnMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucy5qcyIsImltcG9ydCBIYXNoTWFwIGZyb20gJy4uLy4uL2xpYi9IYXNoTWFwJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xuICB0YWtlQWxsQ2FsbHM6ICdUYWtlQWxsQ2FsbHMnLFxuICBkb05vdEFjY2VwdEFueUNhbGxzOiAnRG9Ob3RBY2NlcHRBbnlDYWxscycsXG4gIGRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzOiAnRG9Ob3RBY2NlcHREZXBhcnRtZW50Q2FsbHMnLFxuICB0YWtlRGVwYXJ0bWVudENhbGxzT25seTogJ1Rha2VEZXBhcnRtZW50Q2FsbHNPbmx5Jyxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdub1RvTnVtYmVyJyxcbiAgJ25vQXJlYUNvZGUnLFxuICAnc3BlY2lhbE51bWJlcicsXG4gICdjb25uZWN0RmFpbGVkJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vUmluZ291dEVuYWJsZScsXG5dLCAnY2FsbEVycm9ycycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQ2FsbC9jYWxsRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzZW5kU3VjY2VzcycsXG4gICdzZW5kRXJyb3InLFxuICAnbnVtYmVyVmFsaWRhdGVFcnJvcicsXG4gICd0ZXh0RW1wdHknLFxuICAndGV4dFRvb0xvbmcnLFxuICAnbm9QZXJtaXNzaW9uJyxcbiAgJ3NlbmRlckVtcHR5JyxcbiAgJ25vVG9OdW1iZXInLFxuICAncmVjaXBpZW50c0VtcHR5JyxcbiAgJ3JlY2lwaWVudE51bWJlckludmFsaWRzJyxcbiAgJ3NlbmRlck51bWJlckludmFsaWQnLFxuICAnbm9BcmVhQ29kZScsXG4gICdzcGVjaWFsTnVtYmVyJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vdFNtc1RvRXh0ZW5zaW9uJyxcbiAgJ2ludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQnLFxuICAnbm9JbnRlcm5hbFNNU1Blcm1pc3Npb24nLFxuICAnc2VuZGluZydcbl0sICdtZXNzYWdlLXNlbmRlci1tc2cnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lc3NhZ2VTZW5kZXIvbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkTWVldGluZ0luZm8nLFxuICAnZW1wdHlUb3BpYycsXG4gICdub1Bhc3N3b3JkJyxcbiAgJ2R1cmF0aW9uSW5jb3JyZWN0JyxcbiAgJ3NjaGVkdWxlZFN1Y2Nlc3MnLFxuXSwgJ21lZXRpbmdTdGF0dXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lZXRpbmcvbWVldGluZ1N0YXR1cy5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmZyZWV6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICBjb25maXJtOiAnQ29uZmlybWFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiY2FuY2VsXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5jZWxcIkAjQFxuLy8gQGtleTogQCNAXCJjb25maXJtXCJAI0AgQHNvdXJjZTogQCNAXCJDb25maXJtXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01vZGFsL2kxOG4vZXMtRVMuanMiLCJpbXBvcnQgSGFzaE1hcCBmcm9tICcuLi8uLi9saWIvSGFzaE1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIYXNoTWFwKHtcbiAgb2ZmbGluZTogJ09mZmxpbmUnLFxuICBidXN5OiAnQnVzeScsXG4gIGF2YWlsYWJsZTogJ0F2YWlsYWJsZScsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdlbXB0eVBhc3N3b3JkJyxcbiAgJ2VtcHR5VXNlcm5hbWUnLFxuICAnc2Vzc2lvbkV4cGlyZWQnLFxuICAnYmVmb3JlTG9nb3V0RXJyb3InLFxuICAnbG9naW5FcnJvcicsXG4gICdsb2dvdXRFcnJvcicsXG4gICdhY2Nlc3NEZW5pZWQnLFxuICAnaW50ZXJuYWxFcnJvcicsXG5dLCAnYXV0aE1lc3NhZ2VzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc2F2ZVN1Y2Nlc3MnLFxuICAnc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lJyxcbiAgJ3Blcm1pc3Npb25DaGFuZ2VkJyxcbiAgJ3Bob25lTnVtYmVyQ2hhbmdlZCcsXG4gICd3ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkJyxcbiAgJ2VtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUnLFxuXSwgJ2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuanMiLCJpbXBvcnQgRW51bSBmcm9tICcuLi8uLi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ2Rpc2Nvbm5lY3RlZCcsXG5dLCAnY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2UnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0Nvbm5lY3Rpdml0eU1vbml0b3IvY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzYXZlU3VjY2VzcycsXG4gICdkaWFsaW5nUGxhbnNDaGFuZ2VkJyxcbiAgJ2FyZWFDb2RlSW52YWxpZCcsXG5dLCAncmVnaW9uU2V0dGluZ3NNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUmVnaW9uU2V0dGluZ3MvcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnY29ubmVjdEZhaWxlZCcsXG4gICdjb25uZWN0ZWQnLFxuICAnYnJvd3Nlck5vdFN1cHBvcnRlZCcsXG4gICd3ZWJwaG9uZUNvdW50T3ZlckxpbWl0JyxcbiAgJ3dlYnBob25lRm9yYmlkZGVuJyxcbiAgJ25vdE91dGJvdW5kQ2FsbFdpdGhvdXRETCcsXG4gICdub3RXZWJwaG9uZVBlcm1pc3Npb24nLFxuICAnZ2V0U2lwUHJvdmlzaW9uRXJyb3InLFxuICAndG9Wb2ljZU1haWxFcnJvcicsXG4gICdjaGVja0RMRXJyb3InLFxuICAnZm9yd2FyZEVycm9yJyxcbiAgJ211dGVFcnJvcicsXG4gICdob2xkRXJyb3InLFxuICAnZmxpcEVycm9yJyxcbiAgJ3JlY29yZEVycm9yJyxcbiAgJ3JlY29yZERpc2FibGVkJyxcbiAgJ3RyYW5zZmVyRXJyb3InLFxuICAncmVxdWVzdFRpbWVvdXQnLFxuICAnc2VydmVyVGltZW91dCcsXG4gICdpbnRlcm5hbFNlcnZlckVycm9yJyxcbiAgJ3NpcFByb3Zpc2lvbkVycm9yJyxcbiAgJ3Vua25vd25FcnJvcicsXG5dLCAnd2VicGhvbmUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkVGllcicsXG5dLCAncGVybWlzc2lvbnNNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdkZWxldGVGYWlsZWQnLFxuICAncmVhZEZhaWxlZCcsXG4gICd1bnJlYWRGYWlsZWQnLFxuXSwgJ21lc3NhZ2VTdG9yZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvTWVzc2FnZVN0b3JlL21lc3NhZ2VTdG9yZUVycm9ycy5qcyIsImltcG9ydCBFbnVtIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnYWNjb3VudExvZ2dlZE91dCcsXG4gICdub3RBdXRob3JpemVkJ1xuXSwgJ2F1dGhvcml6YXRpb25FcnJvcicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2F1dGhvcml6YXRpb25FcnJvci5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAncmVxdWlyZUFkaXRpb25hbE51bWJlcnMnLFxuXSwgJ2NvbmZlcmVuY2UtbXNnJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9Db25mZXJlbmNlL21lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICd1c2VyTWVkaWFQZXJtaXNzaW9uJyxcclxuXSwgJ2F1ZGlvU2V0dGluZ3MnKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQXVkaW9TZXR0aW5ncy9hdWRpb1NldHRpbmdzRXJyb3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSJdLCJzb3VyY2VSb290IjoiIn0=