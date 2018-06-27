webpackJsonp([0],{

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

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Chamar com {brand}',
  smsTitle: 'SMS com {brand}'
};

// @key: @#@"c2dTitle"@#@ @source: @#@"Call with {brand}"@#@
// @key: @#@"smsTitle"@#@ @source: @#@"SMS with {brand}"@#@

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  signInErrorMsg: 'Para prosseguir, faça o login na conta que você permitiu o acesso por parte de {brand}.'
};

// @key: @#@"signInErrorMsg"@#@ @source: @#@"To proceed, please log in the account that you have authorized {brand} for Google to access."@#@

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteMeetingContent: '{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}',
  password: 'Senha'
};

// @key: @#@"inviteMeetingContent"@#@ @source: @#@"{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}"@#@
// @key: @#@"password"@#@ @source: @#@"Password"@#@

/***/ }),

/***/ 1132:
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

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Falha de login devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Acesso negado. Entre em contato com o Suporte.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Sessão expirada. Conecte-se.'), _authMessages$interna);

// @key: @#@"[authMessages.internalError]"@#@ @source: @#@"Login failed due to internal errors. Please try again later."@#@
// @key: @#@"[authMessages.accessDenied]"@#@ @source: @#@"Access denied. Please contact support."@#@
// @key: @#@"[authMessages.sessionExpired]"@#@ @source: @#@"Session expired. Please sign in."@#@


/***/ }),

/***/ 1144:
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

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Insira um número de telefone válido.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Defina o {areaCodeLink} para usar números de telefone locais de sete dígitos.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Não há suporte de discagem para números de emergência ou serviço especiais.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Falha de conexão. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Não é possível conectar devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'O número de ramal não existe.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Não é possível conectar devido a erros de rede. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'O ramal pode fazer chamadas com o aplicativo de desktop.\n    Se você deseja alternar para outras opções de chamada,\n    entre em contato com o administrador da conta para fazer um upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'código de área'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'Não há suporte para a discagem de emergência.'), _callErrors$noToNumbe);

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

/***/ 1156:
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

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Configurações salvas com sucesso.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Configurações salvas com sucesso. Verifique se o {brand} para Desktop está instalado no computador.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Selecione como você deseja fazer a chamada na seção Chamadas. Informe sua localização ao especificar o código de país e área (se disponível) na seção Região para fazer chamadas locais com o aplicativo.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Selecione como você deseja fazer a chamada na seção Chamadas.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Suas permissões foram alteradas recentemente. Acesse o {link} para verificar as opções de Chamada.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'As informações de números de telefone foram alteradas recentemente. Acesse o {link} para verificar as opções de Chamada.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Configurações > Chamada'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Suas permissões foram alteradas e não é possível fazer chamadas com o Navegador. Para obter mais detalhes, entre em contato com o administrador da conta.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Não há suporte de discagem para números de emergência ou serviço especiais. Em uma emergência, use seu telefone fixo tradicional ou sem fio para fazer uma chamada para um número de emergência.'), _callingSettingsMessa);

// @key: @#@"[callingSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[callingSettingsMessages.saveSuccessWithSoftphone]"@#@ @source: @#@"Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer."@#@
// @key: @#@"[callingSettingsMessages.permissionChanged]"@#@ @source: @#@"Your permissions have been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"[callingSettingsMessages.phoneNumberChanged]"@#@ @source: @#@"Your phone number information has been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"link"@#@ @source: @#@"Settings > Calling"@#@
// @key: @#@"[callingSettingsMessages.webphonePermissionRemoved]"@#@ @source: @#@"Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator."@#@
// @key: @#@"[callingSettingsMessages.emergencyCallingNotAvailable]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number."@#@


/***/ }),

/***/ 1168:
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
  region: 'Região'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Configurações salvas com sucesso.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'A região anterior não é mais suportada para sua conta.\n    Verifique as novas {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'configurações de região'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Insira um código de área válido.'), _region$regionSetting);

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"[regionSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[regionSettingsMessages.dialingPlansChanged]"@#@ @source: @#@"The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}."@#@
// @key: @#@"regionSettings"@#@ @source: @#@"region settings"@#@
// @key: @#@"[regionSettingsMessages.areaCodeInvalid]"@#@ @source: @#@"Please enter a valid area code."@#@


/***/ }),

/***/ 1180:
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

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Enviado com sucesso.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Erro ao enviar a mensagem.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Erro de validação do número de telefone.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Insira o texto para envio.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'Você não tem permissão para enviar mensagens.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'Você deve selecionar um número de telefone para enviar'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Número de telefone inválido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Insira um número de recebimento válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'O texto é muito longo. Limitado a 1000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Defina o {areaCodeLink} para usar números de telefone locais de sete dígitos.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Não há suporte de discagem para números de emergência ou serviço especiais.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Falha de conexão. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Não é possível conectar devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'O número de ramal não existe.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Não é possível conectar devido a erros de rede. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'Você não tem permissão para enviar mensagens para destinatários de fora da sua organização. Entre em contato com o administrador da conta da RingCentral para fazer o upgrade.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Não é possível enviar para um número de ramal com o número de telefone principal. Se você deseja enviar para um Número de ramal, insira um Número de ramal.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Não há suporte para o envio de SMS para um número de telefone internacional.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'código de área'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Insira um número de telefone válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noInternalSMSPermission, 'Você não tem permissão para enviar mensagens. Entre em contato com o administrador da conta da RingCentral para fazer o upgrade.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sending, 'Enviando mensagem... O processo pode levar alguns minutos para ser concluído.'), _messageSenderMessage);

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

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Limite de solicitações excedido. O aplicativo continuará em {ttl} segundos.'
};

// @key: @#@"rateExceeded"@#@ @source: @#@"Request limit exceeded. App will resume in {ttl} seconds."@#@


/***/ }),

/***/ 1204:
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

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'A conexão de rede foi perdida.');

// @key: @#@"[connectivityMonitorMessages.disconnected]"@#@ @source: @#@"Network connection is lost."@#@


/***/ }),

/***/ 1216:
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

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Falha ao conectar ao servidor de telefone da Web.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Telefone da Web registrado.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Há suporte para ligação com o navegador somente no Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'É possível registrar no máximo cinco telefones Web.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'No momento, o ramal não pode fazer chamadas de saída com o navegador. Entre em contato com o representante da conta para fazer um upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'Você não tem permissão para enviar mensagens.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'Não é possível enviar chamadas para caixa postal devido a um erro interno'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'Não é possível deixar a chamada sem som no momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'Não é possível colocar a chamada em espera no momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'Não é possível transferir a chamada. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'Não é possível gravar a chamada no momento. Código de erro: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'Sua conta não tem o recurso de gravação de chamadas. Entre em contato com o administrador da conta.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'Não é possível transferir a chamada. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'webphoneUnavailable', '{error}. Estamos nos reconectando ao servidor. Se o erro continuar, reporte esse erro ao Suporte de {brandName}.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'errorCode', 'Código de erro interno: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'occurs', 'Há um erro interno'), _webphoneErrors$conne);

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

/***/ 1228:
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

exports.default = (0, _defineProperty3.default)({}, _messageStoreErrors2.default.deleteFailed, 'Não é possível excluir a caixa postal devido a um erro interno de servidor.');

// @key: @#@"[messageStoreErrors.deleteFailed]"@#@ @source: @#@"Cannot delete the voicemail due to internal server error."@#@


/***/ }),

/***/ 1240:
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

exports.default = (_meetingStatus$emptyT = {}, (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.emptyTopic, 'Insira um tópico de reunião.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.noPassword, 'Forneça uma senha para a reunião.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.scheduledSuccess, 'A reunião está agendada.'), _meetingStatus$emptyT);

// @key: @#@"[meetingStatus.emptyTopic]"@#@ @source: @#@"Please enter meeting topic."@#@
// @key: @#@"[meetingStatus.noPassword]"@#@ @source: @#@"Please provide meeting password."@#@
// @key: @#@"[meetingStatus.scheduledSuccess]"@#@ @source: @#@"Meeting is scheduled."@#@


/***/ }),

/***/ 1251:
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

exports.default = (0, _defineProperty3.default)({}, _audioSettingsErrors2.default.userMediaPermission, 'Conceda a {brandName} para Google o acesso ao áudio.');

// @key: @#@"[audioSettingsErrors.userMediaPermission]"@#@ @source: @#@"Please grant {brandName} for Google to access your audio."@#@


/***/ }),

/***/ 1263:
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

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Sua edição não oferece suporte à integração com {application}. Entre em contato com o representante da conta para fazer upgrade da edição do {brand}.');

// @key: @#@"[permissionMessages.invalidTier]"@#@ @source: @#@"Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition."@#@
// @key: @#@"[permissionMessages.insufficientPrivilege]"@#@ @source: @#@"Insufficient privilege. Please contact your account representative for an upgrade."@#@


/***/ }),

/***/ 1275:
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

exports.default = (0, _defineProperty3.default)({}, _messages2.default.requireAditionalNumbers, 'Selecione os números de discagem adicionais.');

// @key: @#@"[messages.requireAditionalNumbers]"@#@ @source: @#@"Please select the additional dial-in numbers."@#@


/***/ }),

/***/ 1287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Entrar',
  version: 'Versão'
};

// @key: @#@"loginButton"@#@ @source: @#@"Sign In"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@


/***/ }),

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$save$callingOp;

var _callingOptions = __webpack_require__(374);

var _callingOptions2 = _interopRequireDefault(_callingOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$save$callingOp = {
  title: 'Chamadas',
  save: 'Salvar'
}, (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.softphone, '{brand} para Desktop'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.myphone, 'Meu telefone {brand}'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.otherphone, 'Outro telefone'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.customphone, 'Telefone personalizado'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.browser, 'Navegador'), (0, _defineProperty3.default)(_title$save$callingOp, 'makeCallsWith', 'Fazer minhas chamadas com'), (0, _defineProperty3.default)(_title$save$callingOp, 'ringoutHint', 'Ligar para meu local primeiro e, em seguida, conectar ao destinatário da chamada'), (0, _defineProperty3.default)(_title$save$callingOp, 'myLocationLabel', 'Meu local'), (0, _defineProperty3.default)(_title$save$callingOp, 'press1ToStartCallLabel', 'Solicitar discar 1 antes de conectar a chamada'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.browser + 'Tooltip', 'Use esta opção para fazer e receber chamadas usando o microfone e o alto-falante do computador.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.softphone + 'Tooltip', 'Use esta opção para fazer e receber chamadas usando o aplicativo {brand} para Desktop.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.myphone + 'Tooltip', 'Use esta opção para fazer chamadas usando o telefone {brand}.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.myphone + 'Tooltip1', 'Para a chamada efetuada, o telefone {brand} toca primeiro e, em seguida, a parte de destino.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.otherphone + 'Tooltip', 'Use esta opção para fazer chamadas usando outros telefones, como o residencial ou celular, adicionado no Ramal do {brand}.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.otherphone + 'Tooltip1', 'Para a chamada efetuada, o telefone toca primeiro e, em seguida, a parte de destino.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.customphone + 'Tooltip', 'Use esta opção para fazer chamadas usando qualquer telefone de sua escolha ao inserir um número de telefone válido no campo abaixo.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.customphone + 'Tooltip1', 'Para a chamada efetuada, o telefone toca primeiro e, em seguida, a parte de destino.'), _title$save$callingOp);

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

/***/ 1311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Salvar'
};

// @key: @#@"save"@#@ @source: @#@"Save"@#@


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(807), __esModule: true };

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Salvar',
  title: 'Região',
  NAOnlyMessage: 'Defina seu código de área. Ele será usado para discagem local.',
  MultiWithNAMessage: 'Defina o país e o código de área da sua região. Isso será usado para discagem local e a formatação de número de telefone.',
  MultiWithoutNAMessage: 'Selecione o país onde você está localizado. Isso será usado para discagem local e para a formação de número de telefone.',
  country: 'País',
  areaCode: 'Código de área',
  areaCodePlaceholder: 'Inserir código de área'
};

// @key: @#@"title"@#@ @source: @#@"Region"@#@
// @key: @#@"NAOnlyMessage"@#@ @source: @#@"Please set your area code. This will be used for local dialing."@#@
// @key: @#@"MultiWithNAMessage"@#@ @source: @#@"Please set the country and area code for your region. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"MultiWithoutNAMessage"@#@ @source: @#@"Please select the country you locate in. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"country"@#@ @source: @#@"Country"@#@
// @key: @#@"areaCode"@#@ @source: @#@"Area Code"@#@
// @key: @#@"areaCodePlaceholder"@#@ @source: @#@"Enter Area Code"@#@


/***/ }),

/***/ 1335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  419: 'América Latina',
  AR: 'Argentina',
  AT: 'Áustria',
  BH: 'Bahrain',
  BR: 'Brasil',
  BG: 'Bulgária',
  CA: 'Canadá',
  CL: 'Chile',
  CN: 'China',
  HR: 'Croácia',
  CY: 'Chipre',
  CZ: 'República Tcheca',
  DK: 'Dinamarca',
  DO: 'República Dominicana',
  EE: 'Estônia',
  FI: 'Finlândia',
  FR: 'França',
  DE: 'Alemanha',
  HK: 'Hong Kong',
  HU: 'Hungria',
  IE: 'Irlanda',
  IL: 'Israel',
  IN: 'Índia',
  IT: 'Itália',
  JP: 'Japão',
  LV: 'Látvia',
  LT: 'Lituânia',
  LU: 'Luxemburgo',
  MY: 'Malásia',
  MX: 'México',
  NL: 'Holanda',
  NO: 'Noruega',
  PA: 'Panamá',
  PH: 'Filipinas',
  PL: 'Polônia',
  PT: 'Portugal',
  RO: 'Romênia',
  SK: 'Eslováquia',
  SI: 'Eslovênia',
  ES: 'Espanha',
  SE: 'Suécia',
  CH: 'Suíça',
  TR: 'Turquia',
  GB: 'Reino Unido',
  AU: 'Austrália',
  GE: 'Geórgia',
  ID: 'Indonésia',
  KE: 'Quênia',
  NG: 'Nigéria',
  PK: 'Paquistão',
  ZA: 'África do Sul',
  KR: 'Coreia do Sul',
  SG: 'Cingapura',
  TW: 'Taiwan',
  UA: 'Ucrânia',
  US: 'Estados Unidos',
  VN: 'Vietnã',
  BE: 'Bélgica',
  BJ: 'Benin',
  SV: 'El Salvador',
  GH: 'Gana',
  GR: 'Grécia',
  GN: 'Guiné',
  NZ: 'Nova Zelândia',
  PE: 'Peru',
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

/***/ 1347:
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

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Telefone comercial'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Número do ramal'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Número da casa'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Telefone celular'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Telefone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Tipo de telefone desconhecido'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.company, 'Número da empresa'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.direct, 'Número direto'), _phoneTypes$business$);

// @key: @#@"[phoneTypes.business]"@#@ @source: @#@"Business Phone"@#@
// @key: @#@"[phoneTypes.extension]"@#@ @source: @#@"Extension Number"@#@
// @key: @#@"[phoneTypes.home]"@#@ @source: @#@"Home Number"@#@
// @key: @#@"[phoneTypes.mobile]"@#@ @source: @#@"Mobile Phone"@#@
// @key: @#@"[phoneTypes.phone]"@#@ @source: @#@"Phone"@#@
// @key: @#@"[phoneTypes.unknown]"@#@ @source: @#@"Unknown Phone Type"@#@
// @key: @#@"[phoneTypes.company]"@#@ @source: @#@"Company Number"@#@
// @key: @#@"[phoneTypes.direct]"@#@ @source: @#@"Direct Number"@#@


/***/ }),

/***/ 1359:
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

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Conta'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contato'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Oportunidade'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'Usuário do sistema'), _phoneSources$account);

// @key: @#@"[phoneSources.account]"@#@ @source: @#@"Account"@#@
// @key: @#@"[phoneSources.contact]"@#@ @source: @#@"Contact"@#@
// @key: @#@"[phoneSources.rcContact]"@#@ @source: @#@"{brand}"@#@
// @key: @#@"[phoneSources.lead]"@#@ @source: @#@"Lead"@#@
// @key: @#@"[phoneSources.opportunity]"@#@ @source: @#@"Opportunity"@#@
// @key: @#@"[phoneSources.systemUser]"@#@ @source: @#@"System User"@#@


/***/ }),

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'Para',
  enterNameOrNumber: 'Inserir o nome ou o número'
};

// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Name or Number"@#@


/***/ }),

/***/ 1383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Direto',
  MainCompanyNumber: 'Principal',
  CompanyNumber: 'Empresa',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Bloqueado',
  AdditionalCompanyNumber: 'Empresa',
  ForwardedCompanyNumber: 'Encaminhado',
  from: 'De'
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

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'De',
  to: 'Para',
  enterNameOrNumber: 'Insira o número ou o nome...',
  typeMessage: 'Digite a mensagem...',
  send: 'Enviar'
};

// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@
// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Registrando...',
  logCall: 'Registrar chamada',
  editLog: 'Editar log',
  select: 'Selecionar um registro correspondente',
  OnHold: 'Em espera',
  Ringing: 'Toque',
  CallConnected: 'Chamada conectada',
  unknownUser: 'Usuário desconhecido',
  unknownNumber: 'Anônimo',
  unavailable: 'Indisponível',
  viewDetails: 'Exibir detalhes'
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

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  typeMessage: 'Digite a mensagem...',
  send: 'Enviar'
};

// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'Nova conferência',
  dialInNumber: 'Número de discagem',
  host: 'Organizador',
  participants: 'Participantes',
  internationalParticipants: 'Participantes internacionais',
  internationalNumbersHeader: 'Selecionar os números de discagem internacionais',
  search: 'Pesquisar...',
  inviteWithText: 'Convidar com texto',
  inviteText: 'Participe da conferência {brandName}.\r\n\nNúmeros de discagem: {formattedDialInNumber} \r\n{additionalNumbersSection} \r\nAcesso de participante: {participantCode} \r\n\nPrecisa de um número de telefone com discagem internacional? Acesse {dialInNumbersLinks} \r\n\nEsta chamada em conferência é possibilitada pelo Sistema de conferência {brandName}.',
  hostAccess: 'Acesso do organizador',
  participantsAccess: 'Acesso de participante',
  addinalDialInNumbers: 'Números de discagem adicionais',
  selectNumbers: 'Selecionar números',
  enableJoinBeforeHost: 'Ativar participação antes de organizar',
  conferenceCommands: 'Comandos de conferência',
  inviteWithGCalendar: 'Convidar com o Google Calendar',
  joinAsHost: 'Iniciar conferência',
  internationalNumber: 'Números de discagem internacional:'
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

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Comandos de conferência',
  starSharp2Title: 'Contagem de autor da chamada',
  starSharp2Body: 'Monitorar quantas pessoas estão na chamada',
  starSharp3Title: 'Deixar conferência',
  starSharp3Body: 'Permitir que o organizador desligue e finalize a chamada',
  starSharp4Title: 'Menu',
  starSharp4Body: 'Ouvir a lista de comandos por tom de toque',
  starSharp5Title: 'Definir modos de escuta',
  starSharp5Body: 'Pressione 1x: Colocar autores de chamadas no mudo - Os autores de chamadas podem desativar o modo mudo com  *, #, 6\r\nPressione 2x: Colocar autores de chamadas no mudo - Apenas escuta. Sem opção de desativar mudo\r\nPressione 3x: Desativar mudo dos autores de chamadas - Reabre a linha',
  starSharp6Title: 'Colocar a linha do organizador no mudo',
  starSharp6Body: 'Pressione uma vez para COLOCAR NO MUDO\r\nPressione novamente para DESATIVAR MUDO',
  starSharp7Title: 'Proteger a chamada',
  starSharp7Body: 'Pressione uma vez para BLOQUEAR todos os autores de chamadas\r\nPressione novamente para ABRIR a chamada',
  starSharp8Title: 'Ouvir um som quando alguém Entrar ou Sair da chamada',
  starSharp8Body: 'Pressione 1x: DESATIVA o som\r\nPressione 2x: Inserir tom está ATIVADO Sair do tom está DESATIVADO\r\nPressione 3x: Inserir tom está DESATIVADO Sair do tom está ATIVADO\r\nPressione 4x: ATIVA o som',
  star9Title: 'Gravar sua conferência',
  star9Body: 'Pressione uma vez para COMEÇAR a gravação\r\nPressione novamente para PARAR a gravação'
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

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Conta',
  contact: 'Contato',
  lead: 'Lead',
  chooseEntity: 'Selecione o tipo de entidade',
  create: 'Criar'
};

// @key: @#@"account"@#@ @source: @#@"Account"@#@
// @key: @#@"contact"@#@ @source: @#@"Contact"@#@
// @key: @#@"lead"@#@ @source: @#@"Lead"@#@
// @key: @#@"chooseEntity"@#@ @source: @#@"Please select entity type"@#@
// @key: @#@"create"@#@ @source: @#@"Create"@#@


/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  sureToDeleteVoiceMail: 'Tem certeza de que deseja excluir esta caixa postal?',
  doNotAskAgain: 'Não perguntar novamente'
};

// @key: @#@"sureToDeleteVoiceMail"@#@ @source: @#@"Are you sure you want to delete this voicemail?"@#@
// @key: @#@"doNotAskAgain"@#@ @source: @#@"Don't ask me again"@#@


/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  download: 'Baixar',
  play: 'Reproduzir',
  pause: 'Pausar'
};

// @key: @#@"download"@#@ @source: @#@"Download"@#@
// @key: @#@"play"@#@ @source: @#@"Play"@#@
// @key: @#@"pause"@#@ @source: @#@"Pause"@#@


/***/ }),

/***/ 1491:
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
  addLog: 'Log',
  editLog: 'Editar log',
  viewDetails: 'Exibir detalhes',
  addEntity: 'Criar novo',
  call: 'Chamada',
  conversation: 'Conversa',
  groupConversation: 'Conversa em grupo',
  text: 'Texto',
  voiceMessage: 'Mensagens de voz'
}, (0, _defineProperty3.default)(_addLog$editLog$viewD, _messageTypes2.default.voiceMail, 'Correio de voz'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'mark', 'Marcar como não lido'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'unmark', 'Marcar como lido'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'delete', 'Excluir'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxSent', 'Fax enviado'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxReceived', 'Fax recebido'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'pages', 'páginas'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'preview', 'Exibir'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'download', 'Baixar'), _addLog$editLog$viewD);

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

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _search$noMessages$no;

var _messageTypes = __webpack_require__(359);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_search$noMessages$no = {
  search: 'Pesquisar...',
  noMessages: 'Nenhuma mensagem',
  noSearchResults: 'Nenhum registro correspondente encontrado',
  title: 'Mensagens',
  composeText: 'Criar texto'
}, (0, _defineProperty3.default)(_search$noMessages$no, _messageTypes2.default.all, 'Tudo'), (0, _defineProperty3.default)(_search$noMessages$no, _messageTypes2.default.voiceMail, 'Voz'), (0, _defineProperty3.default)(_search$noMessages$no, _messageTypes2.default.text, 'Texto'), (0, _defineProperty3.default)(_search$noMessages$no, _messageTypes2.default.fax, 'Fax'), _search$noMessages$no);

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

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Registrando...',
  logCall: 'Registrar chamada',
  editLog: 'Editar log',
  select: 'Selecionar um registro correspondente',
  OnHold: 'Em espera',
  Ringing: 'Toque',
  CallConnected: 'Chamada conectada',
  unknownUser: 'Usuário desconhecido',
  unknownNumber: 'Anônimo',
  unavailable: 'Indisponível',
  viewDetails: 'Exibir detalhes',
  addEntity: 'Criar novo',
  addLog: 'Log',
  text: 'Texto',
  call: 'Chamada',
  addContact: 'Adicionar contato',
  missedCall: 'Perdidas',
  inboundCall: 'Entrada',
  outboundCall: 'Saída',
  from: 'De',
  to: 'Para',
  hangup: 'Desligar',
  accept: 'Aceitar',
  toVoicemail: 'Enviar para caixa postal'
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

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'Sem chamadas ativas',
  currentCall: 'Chamada atual',
  ringCall: 'Chamada sonora',
  onHoldCall: 'Chamada em espera',
  otherDeviceCall: 'Chamadas em andamento nos meus outros dispositivos'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"currentCall"@#@ @source: @#@"Current Call"@#@
// @key: @#@"ringCall"@#@ @source: @#@"Ringing Call"@#@
// @key: @#@"onHoldCall"@#@ @source: @#@"Call on Hold"@#@
// @key: @#@"otherDeviceCall"@#@ @source: @#@"Ongoing calls on my other devices"@#@


/***/ }),

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Registrando...',
  logCall: 'Registrar chamada',
  editLog: 'Editar log',
  select: 'Selecionar um registro correspondente',
  OnHold: 'Em espera',
  Ringing: 'Toque',
  CallConnected: 'Chamada conectada',
  unknownUser: 'Usuário desconhecido',
  unknownNumber: 'Anônimo',
  unavailable: 'Indisponível',
  viewDetails: 'Exibir detalhes',
  addEntity: 'Criar novo',
  addLog: 'Log',
  text: 'Texto',
  call: 'Chamada',
  missedCall: 'Perdidas',
  inboundCall: 'Entrada',
  outboundCall: 'Saída'
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

/***/ 1551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'Sem chamadas ativas',
  noRecords: 'Nenhum resultado encontrado.'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"noRecords"@#@ @source: @#@"No results found."@#@


/***/ }),

/***/ 1563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Histórico'
};

// @key: @#@"title"@#@ @source: @#@"History"@#@


/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Encaminhar',
  cancel: 'Cancelar',
  customNumber: 'Número personalizado'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"customNumber"@#@ @source: @#@"Custom number"@#@


/***/ }),

/***/ 1587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancelar',
  reply: 'Responder',
  onMyWay: 'Estou a caminho',
  customMessage: 'Mensagem personalizada',
  callMeBackIn: 'Ligue de novo em',
  willCallYouBackIn: 'Você pode ligar de novo em',
  min: 'min.',
  hours: 'horas',
  days: 'dias'
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

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Encaminhar',
  reply: 'Responder',
  ignore: 'Ignorar',
  toVoicemail: 'Para caixa postal',
  answer: 'Responder',
  answerAndEnd: 'Atender e enc.',
  answerAndHold: 'Atender e espera'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@
// @key: @#@"toVoicemail"@#@ @source: @#@"To Voicemail"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"answerAndEnd"@#@ @source: @#@"Answer & End"@#@
// @key: @#@"answerAndHold"@#@ @source: @#@"Answer & Hold"@#@


/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Desconhecido',
  anonymous: 'Anônimo',
  activeCall: 'Chamada ativa'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  hide: 'Ocultar',
  end: 'Fim',
  keypad: 'Teclado numérico'
};

// @key: @#@"hide"@#@ @source: @#@"Hide"@#@
// @key: @#@"end"@#@ @source: @#@"End"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@


/***/ }),

/***/ 1635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unmute: 'Desativar mudo',
  mute: 'Ativar mudo',
  keypad: 'Teclado numérico',
  hold: 'Aguardar',
  onHold: 'Em espera',
  park: 'Estacionar',
  stopRecord: 'Parar',
  record: 'Gravar',
  add: 'Adicionar',
  transfer: 'Transferência',
  flip: 'Transferir'
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

/***/ 1647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Home: 'Página principal',
  Mobile: 'Dispositivo móvel',
  Work: 'Trabalho'
};

// @key: @#@"Home"@#@ @source: @#@"Home"@#@
// @key: @#@"Mobile"@#@ @source: @#@"Mobile"@#@
// @key: @#@"Work"@#@ @source: @#@"Work"@#@


/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flipHeader: 'Transferir chamada para...',
  flip: 'Transferir',
  complete: 'Transferência concluída'
};

// @key: @#@"flipHeader"@#@ @source: @#@"Flip Call to..."@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@
// @key: @#@"complete"@#@ @source: @#@"Complete Flip"@#@


/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'Para:',
  transferTo: 'Transferir para',
  blindTransfer: 'Transferência',
  enterNameOrNumber: 'Inserir número'
};

// @key: @#@"to"@#@ @source: @#@"To:"@#@
// @key: @#@"transferTo"@#@ @source: @#@"Transfer to"@#@
// @key: @#@"blindTransfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number"@#@


/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Desconhecido',
  anonymous: 'Anônimo',
  activeCalls: 'Chamadas ativas'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCalls"@#@ @source: @#@"Active Calls"@#@


/***/ }),

/***/ 1695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Chamada ativa'
};

// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'Nenhum registro encontrado.'
};

// @key: @#@"noContacts"@#@ @source: @#@"No records found."@#@


/***/ }),

/***/ 1719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Pesquisar...'
};

// @key: @#@"searchPlaceholder"@#@ @source: @#@"Search..."@#@


/***/ }),

/***/ 1731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  all: 'Todos',
  company: 'Empresa',
  personal: 'Pessoal'
};

// @key: @#@"all"@#@ @source: @#@"All"@#@
// @key: @#@"company"@#@ @source: @#@"Company"@#@
// @key: @#@"personal"@#@ @source: @#@"Personal"@#@


/***/ }),

/***/ 1743:
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
  extensionLabel: 'Ramal',
  directLabel: 'Direto',
  emailLabel: 'Email',
  call: 'Chamada',
  text: 'Texto'
}, (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.available, 'Disponível'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy, 'Ocupado'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.offline, 'Invisível'), (0, _defineProperty3.default)(_extensionLabel$direc, _dndStatus2.default.doNotAcceptAnyCalls, 'Não perturbe'), _extensionLabel$direc);

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

/***/ 1755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Detalhes de contato'
};

// @key: @#@"contactDetails"@#@ @source: @#@"Contact Details"@#@


/***/ }),

/***/ 1767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Áudio',
  dialButtonVolume: 'Volume do botão de discagem',
  ringtoneVolume: 'Volume do toque',
  callVolume: 'Volume da chamada',
  muteCalls: 'Colocar chamadas no mudo',
  outputDevice: 'Dispositivo de saída',
  inputDevice: 'Dispositivo de entrada',
  micPermission: 'Permissão de microfone'
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

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  topic: 'Tópico',
  when: 'Quando',
  duration: 'Duração',
  recurringMeeting: 'Reunião recorrente',
  recurringDescribe: 'Lembre-se de verificar a recorrência ou repetir no convite de calendário para os participantes.',
  video: 'Vídeo',
  videoDescribe: 'Ao participar de uma reunião',
  host: 'Organizador',
  participants: 'Participante',
  audioOptions: 'Opções de áudio',
  voIPOnly: 'Somente VoIP',
  both: 'Ambos',
  meetingOptions: 'Opções de reunião',
  requirePassword: 'Exigir senha da reunião',
  password: 'Senha',
  enableJoinBeforeHost: 'Ativar participação antes de organizar',
  telephonyOnly: 'Somente telefonia'
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

/***/ 1791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  start: 'Faça um rápido tour',
  skip: 'Ignorar',
  next: 'Próximo',
  finish: 'Finalizar'
};

// @key: @#@"start"@#@ @source: @#@"Take a Quick Tour"@#@
// @key: @#@"skip"@#@ @source: @#@"Skip"@#@
// @key: @#@"next"@#@ @source: @#@"Next"@#@
// @key: @#@"finish"@#@ @source: @#@"Finish"@#@


/***/ }),

/***/ 1803:
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

/***/ 1815:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  schedule: 'Agendar',
  prompt: 'Autorize a RingCentral a acessar as informações da sua conta.'
};

// @key: @#@"schedule"@#@ @source: @#@"Schedule"@#@
// @key: @#@"prompt"@#@ @source: @#@"Please authorize RingCentral to access your account information."@#@


/***/ }),

/***/ 1827:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Convidar com o Google Calendar'
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

/***/ 1839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Convidar com o Google Calendar'
};

// @key: @#@"inviteWithCalendar"@#@ @source: @#@"Invite with Google Calendar"@#@

/***/ }),

/***/ 1851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  authorize: 'Autorizar',
  prompt: 'Permita que {brand} acesse as informações da sua conta do Google.'
};

// @key: @#@"authorize"@#@ @source: @#@"Authorize"@#@
// @key: @#@"prompt"@#@ @source: @#@"Please authorize {brand} to access your Google account information."@#@

/***/ }),

/***/ 1863:
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

exports.default = (_authorizationError$a = {}, (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.accountLoggedOut, 'Percebemos que você saiu da sua conta do Google {accountEmail}. Para continuar, {clickHereLink} faça o login na sua conta do Google.'), (0, _defineProperty3.default)(_authorizationError$a, 'clickHere', 'clique aqui'), (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.notAuthorized, 'Percebemos que você não autorizou que {brand} acesse sua conta do Google. {clickHereLink} para autorizar.'), _authorizationError$a);

// @key: @#@"[authorizationError.accountLoggedOut]"@#@ @source: @#@"We noticed you have logged out your Google account {accountEmail}. To continue please {clickHereLink} to login your Google account."@#@
// @key: @#@"clickHere"@#@ @source: @#@"click here"@#@
// @key: @#@"[authorizationError.notAuthorized]"@#@ @source: @#@"We noticed you haven't authorized {brand} for Google to access your Google account. Please {clickHereLink} to authorize."@#@

/***/ }),

/***/ 1875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nenhum registro recente encontrado.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@


/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nenhum registro recente encontrado.',
  inBound: 'Entrada',
  outBound: 'Saída',
  missed: 'Chamada perdida'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@
// @key: @#@"inBound"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outBound"@#@ @source: @#@"Outbound"@#@
// @key: @#@"missed"@#@ @source: @#@"Missed Call"@#@


/***/ }),

/***/ 1899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  recentActivities: 'Atividades recentes',
  text: 'Texto',
  fax: 'Fax',
  voicemail: 'Caixa postal',
  call: 'Chamada',
  gmail: 'Gmail'
};

// @key: @#@"recentActivities"@#@ @source: @#@"Recent Activities"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"fax"@#@ @source: @#@"Fax"@#@
// @key: @#@"voicemail"@#@ @source: @#@"Voicemail"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"gmail"@#@ @source: @#@"Gmail"@#@

/***/ }),

/***/ 1911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nenhum registro recente encontrado.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@

/***/ }),

/***/ 1923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dialpadLabel: 'Teclado de discagem',
  callsLabel: 'Chamadas',
  historyLabel: 'Histórico',
  messagesLabel: 'Mensagens',
  moreMenuLabel: 'Menu Mais',
  contactsLabel: 'Contatos',
  meetingLabel: 'Agendar reuniões',
  conferenceLabel: 'Agendar conferência',
  hangoutsLabel: 'Iniciar Hangouts',
  hangoutsTitle: 'Iniciar Hangouts com sistema de conferência',
  settingsLabel: 'Configurações'
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

/***/ 1935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Modo offline'
};

// @key: @#@"offlineMode"@#@ @source: @#@"Offline Mode"@#@


/***/ }),

/***/ 1946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  webphoneUnavailable: 'Telefone da Web indisponível'
};

// @key: @#@"webphoneUnavailable"@#@ @source: @#@"Web Phone Unavailable"@#@


/***/ }),

/***/ 1958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'Contrato de licença do usuário final',
  serviceTerms: 'Termos de serviço'
};

// @key: @#@"eula"@#@ @source: @#@"End User License Agreement"@#@
// @key: @#@"serviceTerms"@#@ @source: @#@"Service Terms"@#@


/***/ }),

/***/ 1970:
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

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Disponível'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy, 'Ocupado'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisível'), (0, _defineProperty3.default)(_presenceStatus$avail, _dndStatus2.default.doNotAcceptAnyCalls, 'Não perturbe'), _presenceStatus$avail);

// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.busy]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@


/***/ }),

/***/ 1982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Status',
  acceptQueueCalls: 'Aceitar chamadas em fila'
};

// @key: @#@"status"@#@ @source: @#@"Status"@#@
// @key: @#@"acceptQueueCalls"@#@ @source: @#@"Accept call queue calls"@#@


/***/ }),

/***/ 1994:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'English',
  ja: 'Japanese',
  fr: 'Francês',
  de: 'Deutsch',
  es: 'Espanhol',
  it: 'Italiano',
  pt: 'Português'
};

// @key: @#@"en"@#@ @source: @#@"English"@#@
// @key: @#@"ja"@#@ @source: @#@"Japanese"@#@
// @key: @#@"fr"@#@ @source: @#@"French"@#@
// @key: @#@"de"@#@ @source: @#@"Deutsch"@#@
// @key: @#@"es"@#@ @source: @#@"Spanish"@#@
// @key: @#@"it"@#@ @source: @#@"Italian"@#@
// @key: @#@"pt"@#@ @source: @#@"Portuguese"@#@


/***/ }),

/***/ 2006:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Região',
  calling: 'Chamadas',
  logout: 'Logout',
  version: 'Versão',
  settings: 'Configurações',
  clickToDial: 'Clique para discar',
  autoCreateLog: 'Criar log de chamadas automaticamente',
  autoCreateSMSLog: 'Criar log de SMS automaticamente',
  autoLogCalls: 'Registrar chamadas automaticamente',
  autoLogSMS: 'Registrar SMS automaticamente',
  clickToSMS: 'Clicar para enviar mensagem de texto',
  clickToDialSMS: 'Clique para discar/enviar mensagem de texto',
  audio: 'Áudio',
  language: 'Idioma',
  feedback: 'Comentários',
  userGuide: 'Novidades'
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

/***/ 2018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Autorizar',
  authorized: 'Cancelar autorização',
  unauthorizedTitle: 'Conta autorizada',
  tooltip: 'Você autorizou o RingCentral for Google a acessar sua conta '
};

// @key: @#@"unauthorized"@#@ @source: @#@"Authorize"@#@
// @key: @#@"authorized"@#@ @source: @#@"Unauthorize"@#@
// @key: @#@"unauthorizedTitle"@#@ @source: @#@"Authorized Account"@#@
// @key: @#@"tooltip"@#@ @source: @#@"You have authorized RingCentral for Google to access your account "@#@

/***/ }),

/***/ 2030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addMeeting: 'Adicionar reunião',
  addMeetingTitle: 'Adicionar {brand} reunião',
  meetingSettingsTitle: '{brand} Meetings - Configurações',
  when: 'Quando',
  recurringMeeting: 'Reunião recorrente',
  recurringMeetingPrompt: 'Lembre-se de verificar a recorrência ou repetir no convite de calendário para os participantes.',
  video: 'Vídeo (ao entrar em uma reunião)',
  host: 'Organizador:',
  on: 'ativado',
  off: 'desativado',
  participant: 'Participante:',
  audioOptions: 'Opções de áudio',
  telephone: 'Somente telefonia',
  voip: 'Somente VoIP',
  both: 'Ambos',
  meetingOptions: 'Opções de reunião',
  requirePassword: 'Exigir senha da reunião',
  joinBeforeHost: 'Ativar participação antes de organizar',
  doNotShowAgain: 'Salvar e não mostrar novamente',
  schedule: 'Agendar'
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

/***/ 2042:
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
  incomingCall: 'Chamada recebida de:',
  answer: 'Responder',
  ignore: 'Ignorar',
  inboundMessage: 'Nova {messageType} de {from}'
}, (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.fax, 'fax'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.voiceMail, 'correio de voz'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.text, 'mensagem de texto'), _incomingCall$answer$);

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

/***/ 824:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVDYWxlbmRhci9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1dGhBbGVydC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NBbGVydC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VTZW5kZXJBbGVydC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVN0b3JlQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BdWRpb1NldHRpbmdzQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25mZXJlbmNlQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vbGliL0VudW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9IYXNoTWFwL2luZGV4LmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL3B0LUJSLmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZUNvbW1hbmRzL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRW50aXR5TW9kYWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3Rpb25NZW51TGlzdC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1ZvaWNlbWFpbFBsYXllci9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZXNQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxJdGVtL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbHNQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxJdGVtL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbExpc3QvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb3J3YXJkRm9ybS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbmNvbWluZ0NhbGxQYWQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9JbmNvbWluZ0NhbGxQYWdlL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbERpYWxQYWQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmFkaW9CdG5Hcm91cC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQmFkZ2VDb250YWluZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TGlzdC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RzVmlldy9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGV0YWlscy9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3REZXRhaWxzVmlldy9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lZXRpbmdQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1VzZXJHdWlkZS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nU2NoZWR1bGVCdXR0b24vaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nSW52aXRlQnV0dG9uL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6YXRpb25BbGVydC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQmFkZ2UvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdWxhL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy9lbnVtcy9waG9uZVR5cGVzLmpzIiwid2VicGFjazovLy9lbnVtcy9tZXNzYWdlVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdPcHRpb25zLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVldGluZy9tZWV0aW5nU3RhdHVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Nb2RhbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0F1dGgvYXV0aE1lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9NZXNzYWdlU3RvcmUvbWVzc2FnZVN0b3JlRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9BdWRpb1NldHRpbmdzL2F1ZGlvU2V0dGluZ3NFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanMiXSwibmFtZXMiOlsiYzJkVGl0bGUiLCJzbXNUaXRsZSIsInNpZ25JbkVycm9yTXNnIiwiaW52aXRlTWVldGluZ0NvbnRlbnQiLCJwYXNzd29yZCIsImludGVybmFsRXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJzZXNzaW9uRXhwaXJlZCIsIm5vVG9OdW1iZXIiLCJub0FyZWFDb2RlIiwic3BlY2lhbE51bWJlciIsImNvbm5lY3RGYWlsZWQiLCJub3RBbkV4dGVuc2lvbiIsIm5ldHdvcmtFcnJvciIsIm5vUmluZ291dEVuYWJsZSIsInNhdmVTdWNjZXNzIiwic2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lIiwiZmlyc3RMb2dpbiIsImZpcnN0TG9naW5PdGhlciIsInBlcm1pc3Npb25DaGFuZ2VkIiwicGhvbmVOdW1iZXJDaGFuZ2VkIiwid2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZCIsImVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUiLCJyZWdpb24iLCJkaWFsaW5nUGxhbnNDaGFuZ2VkIiwiYXJlYUNvZGVJbnZhbGlkIiwic2VuZFN1Y2Nlc3MiLCJzZW5kRXJyb3IiLCJudW1iZXJWYWxpZGF0ZUVycm9yIiwidGV4dEVtcHR5Iiwibm9QZXJtaXNzaW9uIiwic2VuZGVyRW1wdHkiLCJyZWNpcGllbnRzRW1wdHkiLCJ0ZXh0VG9vTG9uZyIsInNlbmRlck51bWJlckludmFsaWQiLCJub3RTbXNUb0V4dGVuc2lvbiIsImludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQiLCJyZWNpcGllbnROdW1iZXJJbnZhbGlkcyIsIm5vSW50ZXJuYWxTTVNQZXJtaXNzaW9uIiwic2VuZGluZyIsInJhdGVFeGNlZWRlZCIsImRpc2Nvbm5lY3RlZCIsImNvbm5lY3RlZCIsImJyb3dzZXJOb3RTdXBwb3J0ZWQiLCJ3ZWJwaG9uZUNvdW50T3ZlckxpbWl0Iiwibm90T3V0Ym91bmRDYWxsV2l0aG91dERMIiwiZ2V0U2lwUHJvdmlzaW9uRXJyb3IiLCJ0b1ZvaWNlTWFpbEVycm9yIiwibXV0ZUVycm9yIiwiaG9sZEVycm9yIiwiZmxpcEVycm9yIiwicmVjb3JkRXJyb3IiLCJyZWNvcmREaXNhYmxlZCIsInRyYW5zZmVyRXJyb3IiLCJkZWxldGVGYWlsZWQiLCJlbXB0eVRvcGljIiwibm9QYXNzd29yZCIsInNjaGVkdWxlZFN1Y2Nlc3MiLCJ1c2VyTWVkaWFQZXJtaXNzaW9uIiwiaW52YWxpZFRpZXIiLCJyZXF1aXJlQWRpdGlvbmFsTnVtYmVycyIsImxvZ2luQnV0dG9uIiwidmVyc2lvbiIsInRpdGxlIiwic2F2ZSIsInNvZnRwaG9uZSIsIm15cGhvbmUiLCJvdGhlcnBob25lIiwiY3VzdG9tcGhvbmUiLCJicm93c2VyIiwicHJlZml4RW51bSIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiRW51bSIsInZhbHVlcyIsInByZWZpeCIsImRlZmluaXRpb24iLCJmb3JFYWNoIiwidmFsdWUiLCJwcmVmaXhDYWNoZSIsImVudW1NYXAiLCJiYXNlIiwiaGFzIiwic2V0IiwiY2FjaGUiLCJnZXQiLCJ0eXBlIiwiZGVmYXVsdEdldEZ1bmN0aW9uIiwic0RlZmluaXRpb24iLCJzVmFsdWVNYXAiLCJpdGVtIiwiSGFzaE1hcCIsImtleSIsImVudW1lcmFibGUiLCJtYXAiLCJnZXRLZXkiLCJnZXRWYWx1ZSIsIk5BT25seU1lc3NhZ2UiLCJNdWx0aVdpdGhOQU1lc3NhZ2UiLCJNdWx0aVdpdGhvdXROQU1lc3NhZ2UiLCJjb3VudHJ5IiwiYXJlYUNvZGUiLCJhcmVhQ29kZVBsYWNlaG9sZGVyIiwiQVIiLCJBVCIsIkJIIiwiQlIiLCJCRyIsIkNBIiwiQ0wiLCJDTiIsIkhSIiwiQ1kiLCJDWiIsIkRLIiwiRE8iLCJFRSIsIkZJIiwiRlIiLCJERSIsIkhLIiwiSFUiLCJJRSIsIklMIiwiSU4iLCJJVCIsIkpQIiwiTFYiLCJMVCIsIkxVIiwiTVkiLCJNWCIsIk5MIiwiTk8iLCJQQSIsIlBIIiwiUEwiLCJQVCIsIlJPIiwiU0siLCJTSSIsIkVTIiwiU0UiLCJDSCIsIlRSIiwiR0IiLCJBVSIsIkdFIiwiSUQiLCJLRSIsIk5HIiwiUEsiLCJaQSIsIktSIiwiU0ciLCJUVyIsIlVBIiwiVVMiLCJWTiIsIkJFIiwiQkoiLCJTViIsIkdIIiwiR1IiLCJHTiIsIk5aIiwiUEUiLCJQUiIsImJ1c2luZXNzIiwiZXh0ZW5zaW9uIiwiaG9tZSIsIm1vYmlsZSIsInBob25lIiwidW5rbm93biIsImNvbXBhbnkiLCJkaXJlY3QiLCJhY2NvdW50IiwiY29udGFjdCIsInJjQ29udGFjdCIsImxlYWQiLCJvcHBvcnR1bml0eSIsInN5c3RlbVVzZXIiLCJ0byIsImVudGVyTmFtZU9yTnVtYmVyIiwiRGlyZWN0TnVtYmVyIiwiTWFpbkNvbXBhbnlOdW1iZXIiLCJDb21wYW55TnVtYmVyIiwiQ29tcGFueUZheE51bWJlciIsIkJsb2NrZWQiLCJBZGRpdGlvbmFsQ29tcGFueU51bWJlciIsIkZvcndhcmRlZENvbXBhbnlOdW1iZXIiLCJmcm9tIiwidHlwZU1lc3NhZ2UiLCJzZW5kIiwibG9nZ2luZyIsImxvZ0NhbGwiLCJlZGl0TG9nIiwic2VsZWN0IiwiT25Ib2xkIiwiUmluZ2luZyIsIkNhbGxDb25uZWN0ZWQiLCJ1bmtub3duVXNlciIsInVua25vd25OdW1iZXIiLCJ1bmF2YWlsYWJsZSIsInZpZXdEZXRhaWxzIiwibmV3Q29uZmVyZW5jZSIsImRpYWxJbk51bWJlciIsImhvc3QiLCJwYXJ0aWNpcGFudHMiLCJpbnRlcm5hdGlvbmFsUGFydGljaXBhbnRzIiwiaW50ZXJuYXRpb25hbE51bWJlcnNIZWFkZXIiLCJzZWFyY2giLCJpbnZpdGVXaXRoVGV4dCIsImludml0ZVRleHQiLCJob3N0QWNjZXNzIiwicGFydGljaXBhbnRzQWNjZXNzIiwiYWRkaW5hbERpYWxJbk51bWJlcnMiLCJzZWxlY3ROdW1iZXJzIiwiZW5hYmxlSm9pbkJlZm9yZUhvc3QiLCJjb25mZXJlbmNlQ29tbWFuZHMiLCJpbnZpdGVXaXRoR0NhbGVuZGFyIiwiam9pbkFzSG9zdCIsImludGVybmF0aW9uYWxOdW1iZXIiLCJzdGFyU2hhcnAyVGl0bGUiLCJzdGFyU2hhcnAyQm9keSIsInN0YXJTaGFycDNUaXRsZSIsInN0YXJTaGFycDNCb2R5Iiwic3RhclNoYXJwNFRpdGxlIiwic3RhclNoYXJwNEJvZHkiLCJzdGFyU2hhcnA1VGl0bGUiLCJzdGFyU2hhcnA1Qm9keSIsInN0YXJTaGFycDZUaXRsZSIsInN0YXJTaGFycDZCb2R5Iiwic3RhclNoYXJwN1RpdGxlIiwic3RhclNoYXJwN0JvZHkiLCJzdGFyU2hhcnA4VGl0bGUiLCJzdGFyU2hhcnA4Qm9keSIsInN0YXI5VGl0bGUiLCJzdGFyOUJvZHkiLCJjaG9vc2VFbnRpdHkiLCJjcmVhdGUiLCJzdXJlVG9EZWxldGVWb2ljZU1haWwiLCJkb05vdEFza0FnYWluIiwiZG93bmxvYWQiLCJwbGF5IiwicGF1c2UiLCJhZGRMb2ciLCJhZGRFbnRpdHkiLCJjYWxsIiwiY29udmVyc2F0aW9uIiwiZ3JvdXBDb252ZXJzYXRpb24iLCJ0ZXh0Iiwidm9pY2VNZXNzYWdlIiwidm9pY2VNYWlsIiwibm9NZXNzYWdlcyIsIm5vU2VhcmNoUmVzdWx0cyIsImNvbXBvc2VUZXh0IiwiYWxsIiwiZmF4IiwiYWRkQ29udGFjdCIsIm1pc3NlZENhbGwiLCJpbmJvdW5kQ2FsbCIsIm91dGJvdW5kQ2FsbCIsImhhbmd1cCIsImFjY2VwdCIsInRvVm9pY2VtYWlsIiwibm9BY3RpdmVDYWxscyIsImN1cnJlbnRDYWxsIiwicmluZ0NhbGwiLCJvbkhvbGRDYWxsIiwib3RoZXJEZXZpY2VDYWxsIiwibm9SZWNvcmRzIiwiZm9yd2FyZCIsImNhbmNlbCIsImN1c3RvbU51bWJlciIsInJlcGx5Iiwib25NeVdheSIsImN1c3RvbU1lc3NhZ2UiLCJjYWxsTWVCYWNrSW4iLCJ3aWxsQ2FsbFlvdUJhY2tJbiIsIm1pbiIsImhvdXJzIiwiZGF5cyIsImlnbm9yZSIsImFuc3dlciIsImFuc3dlckFuZEVuZCIsImFuc3dlckFuZEhvbGQiLCJhbm9ueW1vdXMiLCJhY3RpdmVDYWxsIiwiaGlkZSIsImVuZCIsImtleXBhZCIsInVubXV0ZSIsIm11dGUiLCJob2xkIiwib25Ib2xkIiwicGFyayIsInN0b3BSZWNvcmQiLCJyZWNvcmQiLCJhZGQiLCJ0cmFuc2ZlciIsImZsaXAiLCJIb21lIiwiTW9iaWxlIiwiV29yayIsImZsaXBIZWFkZXIiLCJjb21wbGV0ZSIsInRyYW5zZmVyVG8iLCJibGluZFRyYW5zZmVyIiwiYWN0aXZlQ2FsbHMiLCJub0NvbnRhY3RzIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJwZXJzb25hbCIsImV4dGVuc2lvbkxhYmVsIiwiZGlyZWN0TGFiZWwiLCJlbWFpbExhYmVsIiwiYXZhaWxhYmxlIiwiYnVzeSIsIm9mZmxpbmUiLCJkb05vdEFjY2VwdEFueUNhbGxzIiwiY29udGFjdERldGFpbHMiLCJkaWFsQnV0dG9uVm9sdW1lIiwicmluZ3RvbmVWb2x1bWUiLCJjYWxsVm9sdW1lIiwibXV0ZUNhbGxzIiwib3V0cHV0RGV2aWNlIiwiaW5wdXREZXZpY2UiLCJtaWNQZXJtaXNzaW9uIiwidG9waWMiLCJ3aGVuIiwiZHVyYXRpb24iLCJyZWN1cnJpbmdNZWV0aW5nIiwicmVjdXJyaW5nRGVzY3JpYmUiLCJ2aWRlbyIsInZpZGVvRGVzY3JpYmUiLCJhdWRpb09wdGlvbnMiLCJ2b0lQT25seSIsImJvdGgiLCJtZWV0aW5nT3B0aW9ucyIsInJlcXVpcmVQYXNzd29yZCIsInRlbGVwaG9ueU9ubHkiLCJzdGFydCIsInNraXAiLCJuZXh0IiwiZmluaXNoIiwiZ29vZ2xlIiwic2NoZWR1bGUiLCJwcm9tcHQiLCJpbnZpdGVXaXRoQ2FsZW5kYXIiLCJhdXRob3JpemUiLCJhY2NvdW50TG9nZ2VkT3V0Iiwibm90QXV0aG9yaXplZCIsImluQm91bmQiLCJvdXRCb3VuZCIsIm1pc3NlZCIsInJlY2VudEFjdGl2aXRpZXMiLCJ2b2ljZW1haWwiLCJnbWFpbCIsImRpYWxwYWRMYWJlbCIsImNhbGxzTGFiZWwiLCJoaXN0b3J5TGFiZWwiLCJtZXNzYWdlc0xhYmVsIiwibW9yZU1lbnVMYWJlbCIsImNvbnRhY3RzTGFiZWwiLCJtZWV0aW5nTGFiZWwiLCJjb25mZXJlbmNlTGFiZWwiLCJoYW5nb3V0c0xhYmVsIiwiaGFuZ291dHNUaXRsZSIsInNldHRpbmdzTGFiZWwiLCJvZmZsaW5lTW9kZSIsIndlYnBob25lVW5hdmFpbGFibGUiLCJldWxhIiwic2VydmljZVRlcm1zIiwic3RhdHVzIiwiYWNjZXB0UXVldWVDYWxscyIsImVuIiwiamEiLCJmciIsImRlIiwiZXMiLCJpdCIsInB0IiwiY2FsbGluZyIsImxvZ291dCIsInNldHRpbmdzIiwiY2xpY2tUb0RpYWwiLCJhdXRvQ3JlYXRlTG9nIiwiYXV0b0NyZWF0ZVNNU0xvZyIsImF1dG9Mb2dDYWxscyIsImF1dG9Mb2dTTVMiLCJjbGlja1RvU01TIiwiY2xpY2tUb0RpYWxTTVMiLCJhdWRpbyIsImxhbmd1YWdlIiwiZmVlZGJhY2siLCJ1c2VyR3VpZGUiLCJ1bmF1dGhvcml6ZWQiLCJhdXRob3JpemVkIiwidW5hdXRob3JpemVkVGl0bGUiLCJ0b29sdGlwIiwiYWRkTWVldGluZyIsImFkZE1lZXRpbmdUaXRsZSIsIm1lZXRpbmdTZXR0aW5nc1RpdGxlIiwicmVjdXJyaW5nTWVldGluZ1Byb21wdCIsIm9uIiwib2ZmIiwicGFydGljaXBhbnQiLCJ0ZWxlcGhvbmUiLCJ2b2lwIiwiam9pbkJlZm9yZUhvc3QiLCJkb05vdFNob3dBZ2FpbiIsImluY29taW5nQ2FsbCIsImluYm91bmRNZXNzYWdlIiwic21zIiwicGFnZXIiLCJ0YWtlQWxsQ2FsbHMiLCJkb05vdEFjY2VwdERlcGFydG1lbnRDYWxscyIsInRha2VEZXBhcnRtZW50Q2FsbHNPbmx5IiwiY29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixTQURzQixFQUV0QixTQUZzQixFQUd0QixNQUhzQixFQUl0QixhQUpzQixFQUt0QixZQUxzQixFQU10QixXQU5zQixDQUFULEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0ZBO0FBQ2JBLFlBQVUsb0JBREc7QUFFYkMsWUFBVTtBQUZHLEM7O0FBS2Y7QUFDQSwyRDs7Ozs7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QUZZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsY0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsY0FIc0IsQ0FBVCxFQUlaLGNBSlksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixrQkFEc0IsRUFFdEIsZUFGc0IsQ0FBVCxFQUdaLG9CQUhZLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0Qix5QkFEc0IsQ0FBVCxFQUVaLGdCQUZZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIscUJBRHNCLENBQVQsRUFFWixlQUZZLEM7Ozs7Ozs7O0FDRmYsa0JBQWtCLHlEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW51bSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXHJcbiAgJ2FjY291bnQnLFxyXG4gICdjb250YWN0JyxcclxuICAnbGVhZCcsXHJcbiAgJ29wcG9ydHVuaXR5JyxcclxuICAnc3lzdGVtVXNlcicsXHJcbiAgJ3JjQ29udGFjdCcsXHJcbl0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjMmRUaXRsZTogJ0NoYW1hciBjb20ge2JyYW5kfScsXG4gIHNtc1RpdGxlOiAnU01TIGNvbSB7YnJhbmR9Jyxcbn07XHJcblxuLy8gQGtleTogQCNAXCJjMmRUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCB3aXRoIHticmFuZH1cIkAjQFxuLy8gQGtleTogQCNAXCJzbXNUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU01TIHdpdGgge2JyYW5kfVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9DaHJvbWVBZGFwdGVyL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNpZ25JbkVycm9yTXNnOiAnUGFyYSBwcm9zc2VndWlyLCBmYcOnYSBvIGxvZ2luIG5hIGNvbnRhIHF1ZSB2b2PDqiBwZXJtaXRpdSBvIGFjZXNzbyBwb3IgcGFydGUgZGUge2JyYW5kfS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJzaWduSW5FcnJvck1zZ1wiQCNAIEBzb3VyY2U6IEAjQFwiVG8gcHJvY2VlZCwgcGxlYXNlIGxvZyBpbiB0aGUgYWNjb3VudCB0aGF0IHlvdSBoYXZlIGF1dGhvcml6ZWQge2JyYW5kfSBmb3IgR29vZ2xlIHRvIGFjY2Vzcy5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGludml0ZU1lZXRpbmdDb250ZW50OiAne2FjY291bnROYW1lfSBpcyBpbnZpdGluZyB5b3UgdG8gYSB7YnJhbmROYW1lfSBtZWV0aW5nLlxcblxcbkpvaW4gZnJvbSBQQywgTWFjLCBpT1Mgb3IgQW5kcm9pZDoge2pvaW5Vcml9e3Bhc3N3b3JkVHBsfVxcblxcbk9yIGlQaG9uZSBvbmUtdGFwOlxcbiAgICAge21vYmlsZURpYWxpbmdOdW1iZXJUcGx9XFxuXFxuT3IgVGVsZXBob25lOlxcbiAgICAgRGlhbDp7cGhvbmVEaWFsaW5nTnVtYmVyVHBsfVxcbiAgICAgTWVldGluZyBJRDoge21lZXRpbmdJZH1cXG4gICAgIEludGVybmF0aW9uYWwgbnVtYmVycyBhdmFpbGFibGU6IHt0ZWxlY29uZmVyZW5jZX0nLFxuICBwYXNzd29yZDogJ1NlbmhhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiaW52aXRlTWVldGluZ0NvbnRlbnRcIkAjQCBAc291cmNlOiBAI0BcInthY2NvdW50TmFtZX0gaXMgaW52aXRpbmcgeW91IHRvIGEge2JyYW5kTmFtZX0gbWVldGluZy5cXG5cXG5Kb2luIGZyb20gUEMsIE1hYywgaU9TIG9yIEFuZHJvaWQ6IHtqb2luVXJpfXtwYXNzd29yZFRwbH1cXG5cXG5PciBpUGhvbmUgb25lLXRhcDpcXG4gICAgIHttb2JpbGVEaWFsaW5nTnVtYmVyVHBsfVxcblxcbk9yIFRlbGVwaG9uZTpcXG4gICAgIERpYWw6e3Bob25lRGlhbGluZ051bWJlclRwbH1cXG4gICAgIE1lZXRpbmcgSUQ6IHttZWV0aW5nSWR9XFxuICAgICBJbnRlcm5hdGlvbmFsIG51bWJlcnMgYXZhaWxhYmxlOiB7dGVsZWNvbmZlcmVuY2V9XCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFzc3dvcmRcIkAjQCBAc291cmNlOiBAI0BcIlBhc3N3b3JkXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0dvb2dsZUNhbGVuZGFyL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgYXV0aE1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQXV0aC9hdXRoTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFthdXRoTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl06ICdGYWxoYSBkZSBsb2dpbiBkZXZpZG8gYSBlcnJvcyBpbnRlcm5vcy4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW2F1dGhNZXNzYWdlcy5hY2Nlc3NEZW5pZWRdOiAnQWNlc3NvIG5lZ2Fkby4gRW50cmUgZW0gY29udGF0byBjb20gbyBTdXBvcnRlLicsXG4gIFthdXRoTWVzc2FnZXMuc2Vzc2lvbkV4cGlyZWRdOiAnU2Vzc8OjbyBleHBpcmFkYS4gQ29uZWN0ZS1zZS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dpbiBmYWlsZWQgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF1cIkAjQCBAc291cmNlOiBAI0BcIkFjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNlc3Npb24gZXhwaXJlZC4gUGxlYXNlIHNpZ24gaW4uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1dGhBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IGNhbGxFcnJvcnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjYWxsRXJyb3JzLm5vVG9OdW1iZXJdOiAnSW5zaXJhIHVtIG7Dum1lcm8gZGUgdGVsZWZvbmUgdsOhbGlkby4nLFxuICBbY2FsbEVycm9ycy5ub0FyZWFDb2RlXTogJ0RlZmluYSBvIHthcmVhQ29kZUxpbmt9IHBhcmEgdXNhciBuw7ptZXJvcyBkZSB0ZWxlZm9uZSBsb2NhaXMgZGUgc2V0ZSBkw61naXRvcy4nLFxuICBbY2FsbEVycm9ycy5zcGVjaWFsTnVtYmVyXTogJ07Do28gaMOhIHN1cG9ydGUgZGUgZGlzY2FnZW0gcGFyYSBuw7ptZXJvcyBkZSBlbWVyZ8OqbmNpYSBvdSBzZXJ2acOnbyBlc3BlY2lhaXMuJyxcbiAgW2NhbGxFcnJvcnMuY29ubmVjdEZhaWxlZF06ICdGYWxoYSBkZSBjb25leMOjby4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW2NhbGxFcnJvcnMuaW50ZXJuYWxFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBjb25lY3RhciBkZXZpZG8gYSBlcnJvcyBpbnRlcm5vcy4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW2NhbGxFcnJvcnMubm90QW5FeHRlbnNpb25dOiAnTyBuw7ptZXJvIGRlIHJhbWFsIG7Do28gZXhpc3RlLicsXG4gIFtjYWxsRXJyb3JzLm5ldHdvcmtFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBjb25lY3RhciBkZXZpZG8gYSBlcnJvcyBkZSByZWRlLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nLFxuICBbY2FsbEVycm9ycy5ub1JpbmdvdXRFbmFibGVdOiAnTyByYW1hbCBwb2RlIGZhemVyIGNoYW1hZGFzIGNvbSBvIGFwbGljYXRpdm8gZGUgZGVza3RvcC5cXG4gICAgU2Ugdm9jw6ogZGVzZWphIGFsdGVybmFyIHBhcmEgb3V0cmFzIG9ww6fDtWVzIGRlIGNoYW1hZGEsXFxuICAgIGVudHJlIGVtIGNvbnRhdG8gY29tIG8gYWRtaW5pc3RyYWRvciBkYSBjb250YSBwYXJhIGZhemVyIHVtIHVwZ3JhZGUuJyxcbiAgYXJlYUNvZGU6ICdjw7NkaWdvIGRlIMOhcmVhJyxcbiAgdGVsdXM5MTE6ICdOw6NvIGjDoSBzdXBvcnRlIHBhcmEgYSBkaXNjYWdlbSBkZSBlbWVyZ8OqbmNpYS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5ub1RvTnVtYmVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vQXJlYUNvZGVdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMuc3BlY2lhbE51bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIkRpYWxpbmcgZW1lcmdlbmN5IG9yIHNwZWNpYWwgc2VydmljZSBudW1iZXJzIGlzIG5vdCBzdXBwb3J0ZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMuY29ubmVjdEZhaWxlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbm5lY3Rpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vdEFuRXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiVGhlIGV4dGVuc2lvbiBudW1iZXIgZG9lcyBub3QgZXhpc3QuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubmV0d29ya0Vycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIG5ldHdvcmsgaXNzdWVzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vSW50ZXJuYXRpb25hbF1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb25zIHRvIG1ha2UgaW50ZXJuYXRpb25hbCBjYWxscy4gUGxlYXNlIGNvbnRhY3QgeW91ciB7YnJhbmR9IGFjY291bnQgYWRtaW5pc3RyYXRvciBmb3IgYW4gdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5ub1JpbmdvdXRFbmFibGVdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIGV4dGVuc2lvbiBpcyBhbGxvd2VkIHRvIG1ha2UgY2FsbHMgd2l0aCBkZXNrdG9wIGFwcC5cXG4gICAgSWYgeW91IHdpc2ggdG8gc3dpdGNoIHRvIG90aGVyIGNhbGxpbmcgb3B0aW9uc1xcbiAgICBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvciBmb3IgYW4gdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiYXJlYSBjb2RlXCJAI0Bcbi8vIEBrZXk6IEAjQFwidGVsdXM5MTFcIkAjQCBAc291cmNlOiBAI0BcIkVtZXJnZW5jeSBkaWFsaW5nIGlzIG5vdCBzdXBwb3J0ZWQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IGNhbGxpbmdTZXR0aW5nc01lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NdOiAnQ29uZmlndXJhw6fDtWVzIHNhbHZhcyBjb20gc3VjZXNzby4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lXTogJ0NvbmZpZ3VyYcOnw7VlcyBzYWx2YXMgY29tIHN1Y2Vzc28uIFZlcmlmaXF1ZSBzZSBvIHticmFuZH0gcGFyYSBEZXNrdG9wIGVzdMOhIGluc3RhbGFkbyBubyBjb21wdXRhZG9yLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5maXJzdExvZ2luXTogJ1NlbGVjaW9uZSBjb21vIHZvY8OqIGRlc2VqYSBmYXplciBhIGNoYW1hZGEgbmEgc2XDp8OjbyBDaGFtYWRhcy4gSW5mb3JtZSBzdWEgbG9jYWxpemHDp8OjbyBhbyBlc3BlY2lmaWNhciBvIGPDs2RpZ28gZGUgcGHDrXMgZSDDoXJlYSAoc2UgZGlzcG9uw612ZWwpIG5hIHNlw6fDo28gUmVnacOjbyBwYXJhIGZhemVyIGNoYW1hZGFzIGxvY2FpcyBjb20gbyBhcGxpY2F0aXZvLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5maXJzdExvZ2luT3RoZXJdOiAnU2VsZWNpb25lIGNvbW8gdm9jw6ogZGVzZWphIGZhemVyIGEgY2hhbWFkYSBuYSBzZcOnw6NvIENoYW1hZGFzLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5wZXJtaXNzaW9uQ2hhbmdlZF06ICdTdWFzIHBlcm1pc3PDtWVzIGZvcmFtIGFsdGVyYWRhcyByZWNlbnRlbWVudGUuIEFjZXNzZSBvIHtsaW5rfSBwYXJhIHZlcmlmaWNhciBhcyBvcMOnw7VlcyBkZSBDaGFtYWRhLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5waG9uZU51bWJlckNoYW5nZWRdOiAnQXMgaW5mb3JtYcOnw7VlcyBkZSBuw7ptZXJvcyBkZSB0ZWxlZm9uZSBmb3JhbSBhbHRlcmFkYXMgcmVjZW50ZW1lbnRlLiBBY2Vzc2UgbyB7bGlua30gcGFyYSB2ZXJpZmljYXIgYXMgb3DDp8O1ZXMgZGUgQ2hhbWFkYS4nLFxuICBsaW5rOiAnQ29uZmlndXJhw6fDtWVzID4gQ2hhbWFkYScsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy53ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkXTogJ1N1YXMgcGVybWlzc8O1ZXMgZm9yYW0gYWx0ZXJhZGFzIGUgbsOjbyDDqSBwb3Nzw612ZWwgZmF6ZXIgY2hhbWFkYXMgY29tIG8gTmF2ZWdhZG9yLiBQYXJhIG9idGVyIG1haXMgZGV0YWxoZXMsIGVudHJlIGVtIGNvbnRhdG8gY29tIG8gYWRtaW5pc3RyYWRvciBkYSBjb250YS4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZW1lcmdlbmN5Q2FsbGluZ05vdEF2YWlsYWJsZV06ICdOw6NvIGjDoSBzdXBvcnRlIGRlIGRpc2NhZ2VtIHBhcmEgbsO6bWVyb3MgZGUgZW1lcmfDqm5jaWEgb3Ugc2VydmnDp28gZXNwZWNpYWlzLiBFbSB1bWEgZW1lcmfDqm5jaWEsIHVzZSBzZXUgdGVsZWZvbmUgZml4byB0cmFkaWNpb25hbCBvdSBzZW0gZmlvIHBhcmEgZmF6ZXIgdW1hIGNoYW1hZGEgcGFyYSB1bSBuw7ptZXJvIGRlIGVtZXJnw6puY2lhLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBoYXZlIHticmFuZH0gZm9yIERlc2t0b3AgaW5zdGFsbGVkIGluIHlvdXIgY29tcHV0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBlcm1pc3Npb25DaGFuZ2VkXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGhvbmVOdW1iZXJDaGFuZ2VkXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBwaG9uZSBudW1iZXIgaW5mb3JtYXRpb24gaGFzIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy5cIkAjQFxuLy8gQGtleTogQCNAXCJsaW5rXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyA+IENhbGxpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZF1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgcGVybWlzc2lvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgYW5kIHlvdSBjYW5ub3QgbWFrZSBjYWxscyB3aXRoIEJyb3dzZXIuIEZvciBkZXRhaWxzIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5lbWVyZ2VuY3lDYWxsaW5nTm90QXZhaWxhYmxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4gSW4gYW4gZW1lcmdlbmN5LCB1c2UgeW91ciB0cmFkaXRpb25hbCB3aXJlbGluZSBvciB3aXJlbGVzcyBwaG9uZSB0byBjYWxsIGFuIGVtZXJnZW5jeSBudW1iZXIuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1JlZ2lvblNldHRpbmdzL3JlZ2lvblNldHRpbmdzTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlZ2lvbjogJ1JlZ2nDo28nLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc106ICdDb25maWd1cmHDp8O1ZXMgc2FsdmFzIGNvbSBzdWNlc3NvLicsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmRpYWxpbmdQbGFuc0NoYW5nZWRdOiAnQSByZWdpw6NvIGFudGVyaW9yIG7Do28gw6kgbWFpcyBzdXBvcnRhZGEgcGFyYSBzdWEgY29udGEuXFxuICAgIFZlcmlmaXF1ZSBhcyBub3ZhcyB7cmVnaW9uU2V0dGluZ3NMaW5rfS4nLFxuICByZWdpb25TZXR0aW5nczogJ2NvbmZpZ3VyYcOnw7VlcyBkZSByZWdpw6NvJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuYXJlYUNvZGVJbnZhbGlkXTogJ0luc2lyYSB1bSBjw7NkaWdvIGRlIMOhcmVhIHbDoWxpZG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwicmVnaW9uXCJAI0AgQHNvdXJjZTogQCNAXCJSZWdpb25cIkAjQFxuLy8gQGtleTogQCNAXCJbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS5cIkAjQFxuLy8gQGtleTogQCNAXCJbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5kaWFsaW5nUGxhbnNDaGFuZ2VkXVwiQCNAIEBzb3VyY2U6IEAjQFwiVGhlIHByZXZpb3VzIHJlZ2lvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGZvciB5b3VyIGFjY291bnQuXFxuICAgIFBsZWFzZSB2ZXJpZnkgeW91ciBuZXcge3JlZ2lvblNldHRpbmdzTGlua30uXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVnaW9uU2V0dGluZ3NcIkAjQCBAc291cmNlOiBAI0BcInJlZ2lvbiBzZXR0aW5nc1wiQCNAXG4vLyBAa2V5OiBAI0BcIltyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmFyZWFDb2RlSW52YWxpZF1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGFyZWEgY29kZS5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IG1lc3NhZ2VTZW5kZXJNZXNzYWdlcyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL01lc3NhZ2VTZW5kZXIvbWVzc2FnZVNlbmRlck1lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRTdWNjZXNzXTogJ0VudmlhZG8gY29tIHN1Y2Vzc28uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kRXJyb3JdOiAnRXJybyBhbyBlbnZpYXIgYSBtZW5zYWdlbS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdOiAnRXJybyBkZSB2YWxpZGHDp8OjbyBkbyBuw7ptZXJvIGRlIHRlbGVmb25lLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dEVtcHR5XTogJ0luc2lyYSBvIHRleHRvIHBhcmEgZW52aW8uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub1Blcm1pc3Npb25dOiAnVm9jw6ogbsOjbyB0ZW0gcGVybWlzc8OjbyBwYXJhIGVudmlhciBtZW5zYWdlbnMuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJFbXB0eV06ICdWb2PDqiBkZXZlIHNlbGVjaW9uYXIgdW0gbsO6bWVybyBkZSB0ZWxlZm9uZSBwYXJhIGVudmlhcicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl06ICdOw7ptZXJvIGRlIHRlbGVmb25lIGludsOhbGlkby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudHNFbXB0eV06ICdJbnNpcmEgdW0gbsO6bWVybyBkZSByZWNlYmltZW50byB2w6FsaWRvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dFRvb0xvbmddOiAnTyB0ZXh0byDDqSBtdWl0byBsb25nby4gTGltaXRhZG8gYSAxMDAwJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub0FyZWFDb2RlXTogJ0RlZmluYSBvIHthcmVhQ29kZUxpbmt9IHBhcmEgdXNhciBuw7ptZXJvcyBkZSB0ZWxlZm9uZSBsb2NhaXMgZGUgc2V0ZSBkw61naXRvcy4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdOiAnTsOjbyBow6Egc3Vwb3J0ZSBkZSBkaXNjYWdlbSBwYXJhIG7Dum1lcm9zIGRlIGVtZXJnw6puY2lhIG91IHNlcnZpw6dvIGVzcGVjaWFpcy4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmNvbm5lY3RGYWlsZWRdOiAnRmFsaGEgZGUgY29uZXjDo28uIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBjb25lY3RhciBkZXZpZG8gYSBlcnJvcyBpbnRlcm5vcy4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RBbkV4dGVuc2lvbl06ICdPIG7Dum1lcm8gZGUgcmFtYWwgbsOjbyBleGlzdGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5uZXR3b3JrRXJyb3JdOiAnTsOjbyDDqSBwb3Nzw612ZWwgY29uZWN0YXIgZGV2aWRvIGEgZXJyb3MgZGUgcmVkZS4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJOdW1iZXJJbnZhbGlkXTogJ1ZvY8OqIG7Do28gdGVtIHBlcm1pc3PDo28gcGFyYSBlbnZpYXIgbWVuc2FnZW5zIHBhcmEgZGVzdGluYXTDoXJpb3MgZGUgZm9yYSBkYSBzdWEgb3JnYW5pemHDp8Ojby4gRW50cmUgZW0gY29udGF0byBjb20gbyBhZG1pbmlzdHJhZG9yIGRhIGNvbnRhIGRhIFJpbmdDZW50cmFsIHBhcmEgZmF6ZXIgbyB1cGdyYWRlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90U21zVG9FeHRlbnNpb25dOiAnTsOjbyDDqSBwb3Nzw612ZWwgZW52aWFyIHBhcmEgdW0gbsO6bWVybyBkZSByYW1hbCBjb20gbyBuw7ptZXJvIGRlIHRlbGVmb25lIHByaW5jaXBhbC4gU2Ugdm9jw6ogZGVzZWphIGVudmlhciBwYXJhIHVtIE7Dum1lcm8gZGUgcmFtYWwsIGluc2lyYSB1bSBOw7ptZXJvIGRlIHJhbWFsLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZF06ICdOw6NvIGjDoSBzdXBvcnRlIHBhcmEgbyBlbnZpbyBkZSBTTVMgcGFyYSB1bSBuw7ptZXJvIGRlIHRlbGVmb25lIGludGVybmFjaW9uYWwuJyxcbiAgYXJlYUNvZGU6ICdjw7NkaWdvIGRlIMOhcmVhJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5yZWNpcGllbnROdW1iZXJJbnZhbGlkc106ICdJbnNpcmEgdW0gbsO6bWVybyBkZSB0ZWxlZm9uZSB2w6FsaWRvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9JbnRlcm5hbFNNU1Blcm1pc3Npb25dOiAnVm9jw6ogbsOjbyB0ZW0gcGVybWlzc8OjbyBwYXJhIGVudmlhciBtZW5zYWdlbnMuIEVudHJlIGVtIGNvbnRhdG8gY29tIG8gYWRtaW5pc3RyYWRvciBkYSBjb250YSBkYSBSaW5nQ2VudHJhbCBwYXJhIGZhemVyIG8gdXBncmFkZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRpbmddOiAnRW52aWFuZG8gbWVuc2FnZW0uLi4gTyBwcm9jZXNzbyBwb2RlIGxldmFyIGFsZ3VucyBtaW51dG9zIHBhcmEgc2VyIGNvbmNsdcOtZG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIlNlbmQgU3VjY2Vzcy5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIlNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGVuIHNlbmQgbWVzc2FnZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJQaG9uZSBOdW1iZXIgVmFsaWRhdGUgRXJyb3IuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0RW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gYmUgc2VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vUGVybWlzc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIG5vIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyRW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgbXVzdCBzZWxlY3QgYSBudW1iZXIgZnJvbSB5b3VyIHBob25lIG51bWJlcnMgdG8gc2VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIkludmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50c0VtcHR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVjZWl2ZXIgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dFRvb0xvbmddXCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0IGlzIHRvbyBsb25nLCAxMDAwIExpbWl0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudE51bWJlckludmFsaWRzXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9BcmVhQ29kZV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbm5lY3Rpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RBbkV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIlRoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubmV0d29ya0Vycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIG5ldHdvcmsgaXNzdWVzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyTnVtYmVySW52YWxpZF1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlcyB0byByZWNpcGllbnRzIG91dHNpZGUgb2YgeW91ciBvcmdhbml6YXRpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgUmluZ0NlbnRyYWwgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciB1cGdyYWRlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90U21zVG9FeHRlbnNpb25dXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3Qgc2VuZCBUbyBhIGV4dGVuc2lvbiBudW1iZXIgd2l0aCBtYWluIHBob25lIG51bWJlci4gSWYgeW91IHdhbnQgdG8gc2VudCB0byBhIGV4dGVuc2lvbiBOdW1iZXIsIHBsZWFzZSBqdXN0IGVudGVyIGV4dGVuc2lvbiBOdW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZGluZyBTTVMgdG8gaW50ZXJuYXRpb25hbCBwaG9uZSBudW1iZXIgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vSW50ZXJuYWxTTVNQZXJtaXNzaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2VzLiBQbGVhc2UgY29udGFjdCB5b3VyIFJpbmdDZW50cmFsIGFjY291bnQgYWRtaW5pc3RyYXRvciBmb3IgdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiYXJlYSBjb2RlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kaW5nXVwiQCNAIEBzb3VyY2U6IEAjQFwiTWVzc2FnZSBiZWluZyBzZW504oCmSXQgbWF5IHRha2UgYSBjb3VwbGUgb2YgbWludXRlcyB0byBjb21wbGV0ZS5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJhdGVFeGNlZWRlZDogJ0xpbWl0ZSBkZSBzb2xpY2l0YcOnw7VlcyBleGNlZGlkby4gTyBhcGxpY2F0aXZvIGNvbnRpbnVhcsOhIGVtIHt0dGx9IHNlZ3VuZG9zLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInJhdGVFeGNlZWRlZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4gQXBwIHdpbGwgcmVzdW1lIGluIHt0dGx9IHNlY29uZHMuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29ubmVjdGl2aXR5TW9uaXRvci9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMuZGlzY29ubmVjdGVkXTogJ0EgY29uZXjDo28gZGUgcmVkZSBmb2kgcGVyZGlkYS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmRpc2Nvbm5lY3RlZF1cIkAjQCBAc291cmNlOiBAI0BcIk5ldHdvcmsgY29ubmVjdGlvbiBpcyBsb3N0LlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IHdlYnBob25lRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvV2VicGhvbmUvd2VicGhvbmVFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFt3ZWJwaG9uZUVycm9ycy5jb25uZWN0RmFpbGVkXTogJ0ZhbGhhIGFvIGNvbmVjdGFyIGFvIHNlcnZpZG9yIGRlIHRlbGVmb25lIGRhIFdlYi4nLFxuICBbd2VicGhvbmVFcnJvcnMuY29ubmVjdGVkXTogJ1RlbGVmb25lIGRhIFdlYiByZWdpc3RyYWRvLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5icm93c2VyTm90U3VwcG9ydGVkXTogJ0jDoSBzdXBvcnRlIHBhcmEgbGlnYcOnw6NvIGNvbSBvIG5hdmVnYWRvciBzb21lbnRlIG5vIENocm9tZS4nLFxuICBbd2VicGhvbmVFcnJvcnMud2VicGhvbmVDb3VudE92ZXJMaW1pdF06ICfDiSBwb3Nzw612ZWwgcmVnaXN0cmFyIG5vIG3DoXhpbW8gY2luY28gdGVsZWZvbmVzIFdlYi4nLFxuICBbd2VicGhvbmVFcnJvcnMubm90T3V0Ym91bmRDYWxsV2l0aG91dERMXTogJ05vIG1vbWVudG8sIG8gcmFtYWwgbsOjbyBwb2RlIGZhemVyIGNoYW1hZGFzIGRlIHNhw61kYSBjb20gbyBuYXZlZ2Fkb3IuIEVudHJlIGVtIGNvbnRhdG8gY29tIG8gcmVwcmVzZW50YW50ZSBkYSBjb250YSBwYXJhIGZhemVyIHVtIHVwZ3JhZGUuJyxcbiAgW3dlYnBob25lRXJyb3JzLmdldFNpcFByb3Zpc2lvbkVycm9yXTogJ1ZvY8OqIG7Do28gdGVtIHBlcm1pc3PDo28gcGFyYSBlbnZpYXIgbWVuc2FnZW5zLicsXG4gIFt3ZWJwaG9uZUVycm9ycy50b1ZvaWNlTWFpbEVycm9yXTogJ07Do28gw6kgcG9zc8OtdmVsIGVudmlhciBjaGFtYWRhcyBwYXJhIGNhaXhhIHBvc3RhbCBkZXZpZG8gYSB1bSBlcnJvIGludGVybm8nLFxuICBbd2VicGhvbmVFcnJvcnMubXV0ZUVycm9yXTogJ07Do28gw6kgcG9zc8OtdmVsIGRlaXhhciBhIGNoYW1hZGEgc2VtIHNvbSBubyBtb21lbnRvLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5ob2xkRXJyb3JdOiAnTsOjbyDDqSBwb3Nzw612ZWwgY29sb2NhciBhIGNoYW1hZGEgZW0gZXNwZXJhIG5vIG1vbWVudG8uJyxcbiAgW3dlYnBob25lRXJyb3JzLmZsaXBFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCB0cmFuc2ZlcmlyIGEgY2hhbWFkYS4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW3dlYnBob25lRXJyb3JzLnJlY29yZEVycm9yXTogJ07Do28gw6kgcG9zc8OtdmVsIGdyYXZhciBhIGNoYW1hZGEgbm8gbW9tZW50by4gQ8OzZGlnbyBkZSBlcnJvOiB7ZXJyb3JDb2RlfScsXG4gIFt3ZWJwaG9uZUVycm9ycy5yZWNvcmREaXNhYmxlZF06ICdTdWEgY29udGEgbsOjbyB0ZW0gbyByZWN1cnNvIGRlIGdyYXZhw6fDo28gZGUgY2hhbWFkYXMuIEVudHJlIGVtIGNvbnRhdG8gY29tIG8gYWRtaW5pc3RyYWRvciBkYSBjb250YS4nLFxuICBbd2VicGhvbmVFcnJvcnMudHJhbnNmZXJFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCB0cmFuc2ZlcmlyIGEgY2hhbWFkYS4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgd2VicGhvbmVVbmF2YWlsYWJsZTogJ3tlcnJvcn0uIEVzdGFtb3Mgbm9zIHJlY29uZWN0YW5kbyBhbyBzZXJ2aWRvci4gU2UgbyBlcnJvIGNvbnRpbnVhciwgcmVwb3J0ZSBlc3NlIGVycm8gYW8gU3Vwb3J0ZSBkZSB7YnJhbmROYW1lfS4nLFxuICBlcnJvckNvZGU6ICdDw7NkaWdvIGRlIGVycm8gaW50ZXJubzoge2Vycm9yQ29kZX0nLFxuICBvY2N1cnM6ICdIw6EgdW0gZXJybyBpbnRlcm5vJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmNvbm5lY3RGYWlsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDb25uZWN0IHdpdGggd2ViIHBob25lIHNlcnZlciBmYWlsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmNvbm5lY3RlZF1cIkAjQCBAc291cmNlOiBAI0BcIldlYiBwaG9uZSByZWdpc3RlcmVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5icm93c2VyTm90U3VwcG9ydGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbGluZyB3aXRoIGJyb3dzZXIgaXMgb25seSBzdXBwb3J0ZWQgb24gQ2hyb21lLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy53ZWJwaG9uZUNvdW50T3ZlckxpbWl0XVwiQCNAIEBzb3VyY2U6IEAjQFwiQSBtYXhpbXVtIG9mIDUgd2ViIHBob25lcyBjb3VsZCBiZSByZWdpc3RlcmVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5ub3RPdXRib3VuZENhbGxXaXRob3V0RExdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIGV4dGVuc2lvbiBpcyBub3QgYWxsb3dlZCB0byBtYWtlIG91dGJvdW5kIGNhbGxzIHdpdGggYnJvd3NlciBjdXJyZW50bHksIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSBmb3IgYW4gdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuZ2V0U2lwUHJvdmlzaW9uRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgaGF2ZSBubyBwZXJtaXNzaW9uIHRvIHNlbmQgbWVzc2FnZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMudG9Wb2ljZU1haWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBzZW5kIGNhbGwgdG8gdm9pY2VtYWlsIGR1ZSB0byBpbnRlcm5hbCBlcnJvclwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5tdXRlRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIGNhbm5vdCBiZSBtdXRlZCBhdCB0aGUgbW9tZW50LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5ob2xkRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIGNhbm5vdCBiZSBob2xkIGF0IHRoZSBtb21lbnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmZsaXBFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBmbGlwIHRoZSBjYWxsLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5yZWNvcmRFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBjYW5ub3QgcmVjb3JkIHRoZSBjYWxsIGF0IHRoZSBtb21lbnQuIEVycm9yIGNvZGU6IHtlcnJvckNvZGV9XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLnJlY29yZERpc2FibGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiU29ycnksIHlvdXIgYWNjb3VudCBkb2VzIG5vdCBoYXZlIHRoZSBmZWF0dXJlIHRvIHJlY29yZCBhIGNhbGwuIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy50cmFuc2ZlckVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IHRyYW5zZmVyIHRoZSBjYWxsLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIndlYnBob25lVW5hdmFpbGFibGVcIkAjQCBAc291cmNlOiBAI0BcIntlcnJvcn0uIFdlIGFyZSByZWNvbm5lY3RpbmcgdG8gc2VydmVyLiBJZiB0aGUgZXJyb3IgcGVyc2lzdHMsIHBsZWFzZSByZXBvcnQgdGhpcyBlcnJvciB0byB7YnJhbmROYW1lfSBTdXBwb3J0LlwiQCNAXG4vLyBAa2V5OiBAI0BcImVycm9yQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiSW50ZXJuYWwgZXJyb3IgY29kZToge2Vycm9yQ29kZX1cIkAjQFxuLy8gQGtleTogQCNAXCJvY2N1cnNcIkAjQCBAc291cmNlOiBAI0BcIkludGVybmFsIGVycm9yIG9jY3Vyc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgbWVzc2FnZVN0b3JlRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVzc2FnZVN0b3JlL21lc3NhZ2VTdG9yZUVycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VTdG9yZUVycm9ycy5kZWxldGVGYWlsZWRdOiAnTsOjbyDDqSBwb3Nzw612ZWwgZXhjbHVpciBhIGNhaXhhIHBvc3RhbCBkZXZpZG8gYSB1bSBlcnJvIGludGVybm8gZGUgc2Vydmlkb3IuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTdG9yZUVycm9ycy5kZWxldGVGYWlsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgZGVsZXRlIHRoZSB2b2ljZW1haWwgZHVlIHRvIGludGVybmFsIHNlcnZlciBlcnJvci5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZVN0b3JlQWxlcnQvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBtZWV0aW5nU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVldGluZy9tZWV0aW5nU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbbWVldGluZ1N0YXR1cy5lbXB0eVRvcGljXTogJ0luc2lyYSB1bSB0w7NwaWNvIGRlIHJldW5pw6NvLicsXG4gIFttZWV0aW5nU3RhdHVzLm5vUGFzc3dvcmRdOiAnRm9ybmXDp2EgdW1hIHNlbmhhIHBhcmEgYSByZXVuacOjby4nLFxuICBbbWVldGluZ1N0YXR1cy5zY2hlZHVsZWRTdWNjZXNzXTogJ0EgcmV1bmnDo28gZXN0w6EgYWdlbmRhZGEuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lZXRpbmdTdGF0dXMuZW1wdHlUb3BpY11cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBlbnRlciBtZWV0aW5nIHRvcGljLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZWV0aW5nU3RhdHVzLm5vUGFzc3dvcmRdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgcHJvdmlkZSBtZWV0aW5nIHBhc3N3b3JkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZWV0aW5nU3RhdHVzLnNjaGVkdWxlZFN1Y2Nlc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJNZWV0aW5nIGlzIHNjaGVkdWxlZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVldGluZ0FsZXJ0L2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgYXVkaW9TZXR0aW5nc0Vycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0F1ZGlvU2V0dGluZ3MvYXVkaW9TZXR0aW5nc0Vycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1ZGlvU2V0dGluZ3NFcnJvcnMudXNlck1lZGlhUGVybWlzc2lvbl06ICdDb25jZWRhIGEge2JyYW5kTmFtZX0gcGFyYSBHb29nbGUgbyBhY2Vzc28gYW8gw6F1ZGlvLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlthdWRpb1NldHRpbmdzRXJyb3JzLnVzZXJNZWRpYVBlcm1pc3Npb25dXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZ3JhbnQge2JyYW5kTmFtZX0gZm9yIEdvb2dsZSB0byBhY2Nlc3MgeW91ciBhdWRpby5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQXVkaW9TZXR0aW5nc0FsZXJ0L2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgcGVybWlzc2lvbk1lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGVybWlzc2lvbk1lc3NhZ2VzLmludmFsaWRUaWVyXTogJ1N1YSBlZGnDp8OjbyBuw6NvIG9mZXJlY2Ugc3Vwb3J0ZSDDoCBpbnRlZ3Jhw6fDo28gY29tIHthcHBsaWNhdGlvbn0uIEVudHJlIGVtIGNvbnRhdG8gY29tIG8gcmVwcmVzZW50YW50ZSBkYSBjb250YSBwYXJhIGZhemVyIHVwZ3JhZGUgZGEgZWRpw6fDo28gZG8ge2JyYW5kfS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGVybWlzc2lvbk1lc3NhZ2VzLmludmFsaWRUaWVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBlZGl0aW9uIGRvZXMgbm90IHN1cHBvcnQge2FwcGxpY2F0aW9ufSBpbnRlZ3JhdGlvbi4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIHRvIHVwZ3JhZGUgeW91ciB7YnJhbmR9IGVkaXRpb24uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Blcm1pc3Npb25NZXNzYWdlcy5pbnN1ZmZpY2llbnRQcml2aWxlZ2VdXCJAI0AgQHNvdXJjZTogQCNAXCJJbnN1ZmZpY2llbnQgcHJpdmlsZWdlLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JvbGVzQW5kUGVybWlzc2lvbnNBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VzLnJlcXVpcmVBZGl0aW9uYWxOdW1iZXJzXTogJ1NlbGVjaW9uZSBvcyBuw7ptZXJvcyBkZSBkaXNjYWdlbSBhZGljaW9uYWlzLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlcy5yZXF1aXJlQWRpdGlvbmFsTnVtYmVyc11cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgdGhlIGFkZGl0aW9uYWwgZGlhbC1pbiBudW1iZXJzLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db25mZXJlbmNlQWxlcnQvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW5CdXR0b246ICdFbnRyYXInLFxuICB2ZXJzaW9uOiAnVmVyc8OjbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2luQnV0dG9uXCJAI0AgQHNvdXJjZTogQCNAXCJTaWduIEluXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmVyc2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiVmVyc2lvblwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgY2FsbGluZ09wdGlvbnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ09wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnQ2hhbWFkYXMnLFxuICBzYXZlOiAnU2FsdmFyJyxcbiAgW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV06ICd7YnJhbmR9IHBhcmEgRGVza3RvcCcsXG4gIFtjYWxsaW5nT3B0aW9ucy5teXBob25lXTogJ01ldSB0ZWxlZm9uZSB7YnJhbmR9JyxcbiAgW2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmVdOiAnT3V0cm8gdGVsZWZvbmUnLFxuICBbY2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmVdOiAnVGVsZWZvbmUgcGVyc29uYWxpemFkbycsXG4gIFtjYWxsaW5nT3B0aW9ucy5icm93c2VyXTogJ05hdmVnYWRvcicsXG4gIG1ha2VDYWxsc1dpdGg6ICdGYXplciBtaW5oYXMgY2hhbWFkYXMgY29tJyxcbiAgcmluZ291dEhpbnQ6ICdMaWdhciBwYXJhIG1ldSBsb2NhbCBwcmltZWlybyBlLCBlbSBzZWd1aWRhLCBjb25lY3RhciBhbyBkZXN0aW5hdMOhcmlvIGRhIGNoYW1hZGEnLFxuICBteUxvY2F0aW9uTGFiZWw6ICdNZXUgbG9jYWwnLFxuICBwcmVzczFUb1N0YXJ0Q2FsbExhYmVsOiAnU29saWNpdGFyIGRpc2NhciAxIGFudGVzIGRlIGNvbmVjdGFyIGEgY2hhbWFkYScsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5icm93c2VyfVRvb2x0aXBgXTogJ1VzZSBlc3RhIG9ww6fDo28gcGFyYSBmYXplciBlIHJlY2ViZXIgY2hhbWFkYXMgdXNhbmRvIG8gbWljcm9mb25lIGUgbyBhbHRvLWZhbGFudGUgZG8gY29tcHV0YWRvci4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuc29mdHBob25lfVRvb2x0aXBgXTogJ1VzZSBlc3RhIG9ww6fDo28gcGFyYSBmYXplciBlIHJlY2ViZXIgY2hhbWFkYXMgdXNhbmRvIG8gYXBsaWNhdGl2byB7YnJhbmR9IHBhcmEgRGVza3RvcC4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcMOnw6NvIHBhcmEgZmF6ZXIgY2hhbWFkYXMgdXNhbmRvIG8gdGVsZWZvbmUge2JyYW5kfS4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwMWBdOiAnUGFyYSBhIGNoYW1hZGEgZWZldHVhZGEsIG8gdGVsZWZvbmUge2JyYW5kfSB0b2NhIHByaW1laXJvIGUsIGVtIHNlZ3VpZGEsIGEgcGFydGUgZGUgZGVzdGluby4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcMOnw6NvIHBhcmEgZmF6ZXIgY2hhbWFkYXMgdXNhbmRvIG91dHJvcyB0ZWxlZm9uZXMsIGNvbW8gbyByZXNpZGVuY2lhbCBvdSBjZWx1bGFyLCBhZGljaW9uYWRvIG5vIFJhbWFsIGRvIHticmFuZH0uJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcDFgXTogJ1BhcmEgYSBjaGFtYWRhIGVmZXR1YWRhLCBvIHRlbGVmb25lIHRvY2EgcHJpbWVpcm8gZSwgZW0gc2VndWlkYSwgYSBwYXJ0ZSBkZSBkZXN0aW5vLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcMOnw6NvIHBhcmEgZmF6ZXIgY2hhbWFkYXMgdXNhbmRvIHF1YWxxdWVyIHRlbGVmb25lIGRlIHN1YSBlc2NvbGhhIGFvIGluc2VyaXIgdW0gbsO6bWVybyBkZSB0ZWxlZm9uZSB2w6FsaWRvIG5vIGNhbXBvIGFiYWl4by4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcDFgXTogJ1BhcmEgYSBjaGFtYWRhIGVmZXR1YWRhLCBvIHRlbGVmb25lIHRvY2EgcHJpbWVpcm8gZSwgZW0gc2VndWlkYSwgYSBwYXJ0ZSBkZSBkZXN0aW5vLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcInticmFuZH0gZm9yIERlc2t0b3BcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMubXlwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk15IHticmFuZH0gUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk90aGVyIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmJyb3dzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJCcm93c2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWFrZUNhbGxzV2l0aFwiQCNAIEBzb3VyY2U6IEAjQFwiTWFrZSBteSBjYWxscyB3aXRoXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ291dEhpbnRcIkAjQCBAc291cmNlOiBAI0BcIlJpbmcgbWUgYXQgbXkgbG9jYXRpb24gZmlyc3QsIHRoZW4gY29ubmVjdCB0aGUgY2FsbGVkIHBhcnR5XCJAI0Bcbi8vIEBrZXk6IEAjQFwibXlMb2NhdGlvbkxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJNeSBMb2NhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInByZXNzMVRvU3RhcnRDYWxsTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlByb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIgY29tcHV0ZXLigJlzIG1pY3JvcGhvbmUgYW5kIHNwZWFrZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZX1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIge2JyYW5kfSBmb3IgRGVza3RvcCBhcHAuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gcGhvbmUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXVwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB5b3VyIHticmFuZH0gcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIG90aGVyIHBob25lcyBzdWNoIGFzIGhvbWUgb3IgY2VsbCBwaG9uZXMgdGhhdCB5b3UgaGF2ZSBhZGRlZCBpbiB5b3VyIHticmFuZH0gRXh0ZW5zaW9uLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXAxYF1cIkAjQCBAc291cmNlOiBAI0BcIkZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgeW91IGNhbGxlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyBhbnkgcGhvbmUgb2YgeW91ciBjaG9pY2UgYnkgZW50ZXJpbmcgYSB2YWxpZCBwaG9uZSBudW1iZXIgaW4gdGhlIGZpZWxkIGJlbG93LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdXCJAI0AgQHNvdXJjZTogQCNAXCJGb3IgdGhlIGNhbGwgeW91IG1ha2UsIHRoaXMgcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc1BhbmVsL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgSGFzaE1hcCBmcm9tICcuLi9IYXNoTWFwJztcblxuY29uc3QgeyBoYXNPd25Qcm9wZXJ0eSB9ID0gT2JqZWN0LnByb3RvdHlwZTtcbi8qKlxuICogQGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gaGVscGVyIGNsYXNzIGZvciBjcmVhdGluZyByZWR1eCBhY3Rpb24gZGVmaW5pdGlvbiBtYXBzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudW0gZXh0ZW5kcyBIYXNoTWFwIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBhY3Rpb25zIC0gbGlzdCBvZiBhY3Rpb24gc3RyaW5nc1xuICAgKiBAZXh0ZW5kcyBIYXNoTWFwXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbXSwgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBkZWZpbml0aW9uW3ZhbHVlXSA9IHByZWZpeCAhPT0gJycgPyBgJHtwcmVmaXh9LSR7dmFsdWV9YCA6IHZhbHVlO1xuICAgIH0pO1xuICAgIHN1cGVyKGRlZmluaXRpb24pO1xuICB9XG59XG5jb25zdCBwcmVmaXhDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBoZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIGEgcHJlZml4ZWQgYWN0aW9uIGRlZmluaXRpb24gbWFwc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4RW51bSh7IGVudW1NYXAsIHByZWZpeCwgYmFzZSA9IGVudW1NYXAgfSkge1xuICBpZiAoIXByZWZpeCB8fCBwcmVmaXggPT09ICcnKSByZXR1cm4gYmFzZTtcblxuICBpZiAoIXByZWZpeENhY2hlLmhhcyhwcmVmaXgpKSB7XG4gICAgcHJlZml4Q2FjaGUuc2V0KHByZWZpeCwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hlID0gcHJlZml4Q2FjaGUuZ2V0KHByZWZpeCk7XG5cbiAgaWYgKCFjYWNoZS5oYXMoYmFzZSkpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG4gICAgZm9yIChjb25zdCB0eXBlIGluIGJhc2UpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoYmFzZTo6aGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgZGVmaW5pdGlvblt0eXBlXSA9IGAke3ByZWZpeH0tJHtiYXNlW3R5cGVdfWA7XG4gICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnNldChiYXNlLCBuZXcgSGFzaE1hcChkZWZpbml0aW9uKSk7XG4gIH1cbiAgcmV0dXJuIGNhY2hlLmdldChiYXNlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvRW51bS9pbmRleC5qcyIsImNvbnN0IHNEZWZpbml0aW9uID0gU3ltYm9sKCdkZWZpbml0aW9uJyk7XHJcbmNvbnN0IHNWYWx1ZU1hcCA9IFN5bWJvbCgndmFsdWVNYXAnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0R2V0RnVuY3Rpb24oaXRlbSkge1xyXG4gIHJldHVybiBpdGVtO1xyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIEhhc2hNYXBcclxuICogQGRlc2NyaXB0aW9uIFNpbXBsZSBoYXNoIG1hcCBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzaE1hcCB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb25cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkZWZpbml0aW9uKSB7XHJcbiAgICB0aGlzW3NEZWZpbml0aW9uXSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmluaXRpb24pO1xyXG4gICAgdGhpc1tzVmFsdWVNYXBdID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmluaXRpb24pIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKGRlZmluaXRpb246Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbc0RlZmluaXRpb25dW2tleV07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzW3NWYWx1ZU1hcF0uc2V0KHRoaXNbc0RlZmluaXRpb25dW2tleV0sIGtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRLZXkobWFwLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG1hcFtzVmFsdWVNYXBdLmdldCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBoYXNWYWx1ZShtYXAsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbWFwW3NWYWx1ZU1hcF0uaGFzKHZhbHVlKTtcclxuICB9XHJcbiAgc3RhdGljIGZyb21TZXQoeyBzZXQsIGdldEtleSA9IGRlZmF1bHRHZXRGdW5jdGlvbiwgZ2V0VmFsdWUgPSBkZWZhdWx0R2V0RnVuY3Rpb24gfSkge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHt9O1xyXG4gICAgWy4uLnNldF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBnZXRLZXkoaXRlbSk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoaXRlbSk7XHJcbiAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJyAmJiBrZXkgIT09IG51bGwgJiYga2V5ICE9PSAnJykge1xyXG4gICAgICAgIGRlZmluaXRpb25ba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgSGFzaE1hcChkZWZpbml0aW9uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9IYXNoTWFwL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzYXZlOiAnU2FsdmFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic2F2ZVwiQCNAIEBzb3VyY2U6IEAjQFwiU2F2ZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vcHQtQlIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiZXhwb3J0IGRlZmF1bHQge1xuICBzYXZlOiAnU2FsdmFyJyxcbiAgdGl0bGU6ICdSZWdpw6NvJyxcbiAgTkFPbmx5TWVzc2FnZTogJ0RlZmluYSBzZXUgY8OzZGlnbyBkZSDDoXJlYS4gRWxlIHNlcsOhIHVzYWRvIHBhcmEgZGlzY2FnZW0gbG9jYWwuJyxcbiAgTXVsdGlXaXRoTkFNZXNzYWdlOiAnRGVmaW5hIG8gcGHDrXMgZSBvIGPDs2RpZ28gZGUgw6FyZWEgZGEgc3VhIHJlZ2nDo28uIElzc28gc2Vyw6EgdXNhZG8gcGFyYSBkaXNjYWdlbSBsb2NhbCBlIGEgZm9ybWF0YcOnw6NvIGRlIG7Dum1lcm8gZGUgdGVsZWZvbmUuJyxcbiAgTXVsdGlXaXRob3V0TkFNZXNzYWdlOiAnU2VsZWNpb25lIG8gcGHDrXMgb25kZSB2b2PDqiBlc3TDoSBsb2NhbGl6YWRvLiBJc3NvIHNlcsOhIHVzYWRvIHBhcmEgZGlzY2FnZW0gbG9jYWwgZSBwYXJhIGEgZm9ybWHDp8OjbyBkZSBuw7ptZXJvIGRlIHRlbGVmb25lLicsXG4gIGNvdW50cnk6ICdQYcOtcycsXG4gIGFyZWFDb2RlOiAnQ8OzZGlnbyBkZSDDoXJlYScsXG4gIGFyZWFDb2RlUGxhY2Vob2xkZXI6ICdJbnNlcmlyIGPDs2RpZ28gZGUgw6FyZWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiUmVnaW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTkFPbmx5TWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNldCB5b3VyIGFyZWEgY29kZS4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTXVsdGlXaXRoTkFNZXNzYWdlXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2V0IHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgZm9yIHlvdXIgcmVnaW9uLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGluZyBhbmQgcGhvbmUgbnVtYmVyIGZvcm1hdHRpbmcuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTXVsdGlXaXRob3V0TkFNZXNzYWdlXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2VsZWN0IHRoZSBjb3VudHJ5IHlvdSBsb2NhdGUgaW4uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy5cIkAjQFxuLy8gQGtleTogQCNAXCJjb3VudHJ5XCJAI0AgQHNvdXJjZTogQCNAXCJDb3VudHJ5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVcIkAjQCBAc291cmNlOiBAI0BcIkFyZWEgQ29kZVwiQCNAXG4vLyBAa2V5OiBAI0BcImFyZWFDb2RlUGxhY2Vob2xkZXJcIkAjQCBAc291cmNlOiBAI0BcIkVudGVyIEFyZWEgQ29kZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc1BhbmVsL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIDQxOTogJ0Ftw6lyaWNhIExhdGluYScsXG4gIEFSOiAnQXJnZW50aW5hJyxcbiAgQVQ6ICfDgXVzdHJpYScsXG4gIEJIOiAnQmFocmFpbicsXG4gIEJSOiAnQnJhc2lsJyxcbiAgQkc6ICdCdWxnw6FyaWEnLFxuICBDQTogJ0NhbmFkw6EnLFxuICBDTDogJ0NoaWxlJyxcbiAgQ046ICdDaGluYScsXG4gIEhSOiAnQ3Jvw6FjaWEnLFxuICBDWTogJ0NoaXByZScsXG4gIENaOiAnUmVww7pibGljYSBUY2hlY2EnLFxuICBESzogJ0RpbmFtYXJjYScsXG4gIERPOiAnUmVww7pibGljYSBEb21pbmljYW5hJyxcbiAgRUU6ICdFc3TDtG5pYScsXG4gIEZJOiAnRmlubMOibmRpYScsXG4gIEZSOiAnRnJhbsOnYScsXG4gIERFOiAnQWxlbWFuaGEnLFxuICBISzogJ0hvbmcgS29uZycsXG4gIEhVOiAnSHVuZ3JpYScsXG4gIElFOiAnSXJsYW5kYScsXG4gIElMOiAnSXNyYWVsJyxcbiAgSU46ICfDjW5kaWEnLFxuICBJVDogJ0l0w6FsaWEnLFxuICBKUDogJ0phcMOjbycsXG4gIExWOiAnTMOhdHZpYScsXG4gIExUOiAnTGl0dcOibmlhJyxcbiAgTFU6ICdMdXhlbWJ1cmdvJyxcbiAgTVk6ICdNYWzDoXNpYScsXG4gIE1YOiAnTcOpeGljbycsXG4gIE5MOiAnSG9sYW5kYScsXG4gIE5POiAnTm9ydWVnYScsXG4gIFBBOiAnUGFuYW3DoScsXG4gIFBIOiAnRmlsaXBpbmFzJyxcbiAgUEw6ICdQb2zDtG5pYScsXG4gIFBUOiAnUG9ydHVnYWwnLFxuICBSTzogJ1JvbcOqbmlhJyxcbiAgU0s6ICdFc2xvdsOhcXVpYScsXG4gIFNJOiAnRXNsb3bDqm5pYScsXG4gIEVTOiAnRXNwYW5oYScsXG4gIFNFOiAnU3XDqWNpYScsXG4gIENIOiAnU3XDrcOnYScsXG4gIFRSOiAnVHVycXVpYScsXG4gIEdCOiAnUmVpbm8gVW5pZG8nLFxuICBBVTogJ0F1c3Ryw6FsaWEnLFxuICBHRTogJ0dlw7NyZ2lhJyxcbiAgSUQ6ICdJbmRvbsOpc2lhJyxcbiAgS0U6ICdRdcOqbmlhJyxcbiAgTkc6ICdOaWfDqXJpYScsXG4gIFBLOiAnUGFxdWlzdMOjbycsXG4gIFpBOiAnw4FmcmljYSBkbyBTdWwnLFxuICBLUjogJ0NvcmVpYSBkbyBTdWwnLFxuICBTRzogJ0NpbmdhcHVyYScsXG4gIFRXOiAnVGFpd2FuJyxcbiAgVUE6ICdVY3LDom5pYScsXG4gIFVTOiAnRXN0YWRvcyBVbmlkb3MnLFxuICBWTjogJ1ZpZXRuw6MnLFxuICBCRTogJ0LDqWxnaWNhJyxcbiAgQko6ICdCZW5pbicsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHSDogJ0dhbmEnLFxuICBHUjogJ0dyw6ljaWEnLFxuICBHTjogJ0d1aW7DqScsXG4gIE5aOiAnTm92YSBaZWzDom5kaWEnLFxuICBQRTogJ1BlcnUnLFxuICBQUjogJ1BvcnRvIFJpY28nLFxufTtcblxuLy8gQGtleTogQCNAXCI0MTlcIkAjQCBAc291cmNlOiBAI0BcIkxhdGluIEFtZXJpY2FcIkAjQFxuLy8gQGtleTogQCNAXCJBUlwiQCNAIEBzb3VyY2U6IEAjQFwiQXJnZW50aW5hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQVRcIkAjQCBAc291cmNlOiBAI0BcIkF1c3RyaWFcIkAjQFxuLy8gQGtleTogQCNAXCJCSFwiQCNAIEBzb3VyY2U6IEAjQFwiQmFocmFpblwiQCNAXG4vLyBAa2V5OiBAI0BcIkJSXCJAI0AgQHNvdXJjZTogQCNAXCJCcmF6aWxcIkAjQFxuLy8gQGtleTogQCNAXCJCR1wiQCNAIEBzb3VyY2U6IEAjQFwiQnVsZ2FyaWFcIkAjQFxuLy8gQGtleTogQCNAXCJDQVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FuYWRhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ0xcIkAjQCBAc291cmNlOiBAI0BcIkNoaWxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ05cIkAjQCBAc291cmNlOiBAI0BcIkNoaW5hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSFJcIkAjQCBAc291cmNlOiBAI0BcIkNyb2F0aWFcIkAjQFxuLy8gQGtleTogQCNAXCJDWVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3lwcnVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ1pcIkAjQCBAc291cmNlOiBAI0BcIkN6ZWNoIFJlcHVibGljXCJAI0Bcbi8vIEBrZXk6IEAjQFwiREtcIkAjQCBAc291cmNlOiBAI0BcIkRlbm1hcmtcIkAjQFxuLy8gQGtleTogQCNAXCJET1wiQCNAIEBzb3VyY2U6IEAjQFwiRG9taW5pY2FuIFJlcHVibGljXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRUVcIkAjQCBAc291cmNlOiBAI0BcIkVzdG9uaWFcIkAjQFxuLy8gQGtleTogQCNAXCJGSVwiQCNAIEBzb3VyY2U6IEAjQFwiRmlubGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIkZSXCJAI0AgQHNvdXJjZTogQCNAXCJGcmFuY2VcIkAjQFxuLy8gQGtleTogQCNAXCJERVwiQCNAIEBzb3VyY2U6IEAjQFwiR2VybWFueVwiQCNAXG4vLyBAa2V5OiBAI0BcIkhLXCJAI0AgQHNvdXJjZTogQCNAXCJIb25nIEtvbmdcIkAjQFxuLy8gQGtleTogQCNAXCJIVVwiQCNAIEBzb3VyY2U6IEAjQFwiSHVuZ2FyeVwiQCNAXG4vLyBAa2V5OiBAI0BcIklFXCJAI0AgQHNvdXJjZTogQCNAXCJJcmVsYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSUxcIkAjQCBAc291cmNlOiBAI0BcIklzcmFlbFwiQCNAXG4vLyBAa2V5OiBAI0BcIklOXCJAI0AgQHNvdXJjZTogQCNAXCJJbmRpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIklUXCJAI0AgQHNvdXJjZTogQCNAXCJJdGFseVwiQCNAXG4vLyBAa2V5OiBAI0BcIkpQXCJAI0AgQHNvdXJjZTogQCNAXCJKYXBhblwiQCNAXG4vLyBAa2V5OiBAI0BcIkxWXCJAI0AgQHNvdXJjZTogQCNAXCJMYXR2aWFcIkAjQFxuLy8gQGtleTogQCNAXCJMVFwiQCNAIEBzb3VyY2U6IEAjQFwiTGl0aHVhbmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTFVcIkAjQCBAc291cmNlOiBAI0BcIkx1eGVtYm91cmdcIkAjQFxuLy8gQGtleTogQCNAXCJNWVwiQCNAIEBzb3VyY2U6IEAjQFwiTWFsYXlzaWFcIkAjQFxuLy8gQGtleTogQCNAXCJNWFwiQCNAIEBzb3VyY2U6IEAjQFwiTWV4aWNvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTkxcIkAjQCBAc291cmNlOiBAI0BcIk5ldGhlcmxhbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTk9cIkAjQCBAc291cmNlOiBAI0BcIk5vcndheVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBBXCJAI0AgQHNvdXJjZTogQCNAXCJQYW5hbWFcIkAjQFxuLy8gQGtleTogQCNAXCJQSFwiQCNAIEBzb3VyY2U6IEAjQFwiUGhpbGlwcGluZXNcIkAjQFxuLy8gQGtleTogQCNAXCJQTFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9sYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUFRcIkAjQCBAc291cmNlOiBAI0BcIlBvcnR1Z2FsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUk9cIkAjQCBAc291cmNlOiBAI0BcIlJvbWFuaWFcIkAjQFxuLy8gQGtleTogQCNAXCJTS1wiQCNAIEBzb3VyY2U6IEAjQFwiU2xvdmFraWFcIkAjQFxuLy8gQGtleTogQCNAXCJTSVwiQCNAIEBzb3VyY2U6IEAjQFwiU2xvdmVuaWFcIkAjQFxuLy8gQGtleTogQCNAXCJFU1wiQCNAIEBzb3VyY2U6IEAjQFwiU3BhaW5cIkAjQFxuLy8gQGtleTogQCNAXCJTRVwiQCNAIEBzb3VyY2U6IEAjQFwiU3dlZGVuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ0hcIkAjQCBAc291cmNlOiBAI0BcIlN3aXR6ZXJsYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVFJcIkAjQCBAc291cmNlOiBAI0BcIlR1cmtleVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdCXCJAI0AgQHNvdXJjZTogQCNAXCJVbml0ZWQgS2luZ2RvbVwiQCNAXG4vLyBAa2V5OiBAI0BcIkFVXCJAI0AgQHNvdXJjZTogQCNAXCJBdXN0cmFsaWFcIkAjQFxuLy8gQGtleTogQCNAXCJHRVwiQCNAIEBzb3VyY2U6IEAjQFwiR2VvcmdpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIklEXCJAI0AgQHNvdXJjZTogQCNAXCJJbmRvbmVzaWFcIkAjQFxuLy8gQGtleTogQCNAXCJLRVwiQCNAIEBzb3VyY2U6IEAjQFwiS2VueWFcIkAjQFxuLy8gQGtleTogQCNAXCJOR1wiQCNAIEBzb3VyY2U6IEAjQFwiTmlnZXJpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBLXCJAI0AgQHNvdXJjZTogQCNAXCJQYWtpc3RhblwiQCNAXG4vLyBAa2V5OiBAI0BcIlpBXCJAI0AgQHNvdXJjZTogQCNAXCJTb3V0aCBBZnJpY2FcIkAjQFxuLy8gQGtleTogQCNAXCJLUlwiQCNAIEBzb3VyY2U6IEAjQFwiU291dGggS29yZWFcIkAjQFxuLy8gQGtleTogQCNAXCJTR1wiQCNAIEBzb3VyY2U6IEAjQFwiU2luZ2Fwb3JlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVFdcIkAjQCBAc291cmNlOiBAI0BcIlRhaXdhblwiQCNAXG4vLyBAa2V5OiBAI0BcIlVBXCJAI0AgQHNvdXJjZTogQCNAXCJVa3JhaW5lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVVNcIkAjQCBAc291cmNlOiBAI0BcIlVuaXRlZCBTdGF0ZXNcIkAjQFxuLy8gQGtleTogQCNAXCJWTlwiQCNAIEBzb3VyY2U6IEAjQFwiVmlldG5hbVwiQCNAXG4vLyBAa2V5OiBAI0BcIkJFXCJAI0AgQHNvdXJjZTogQCNAXCJCZWxnaXVtXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQkpcIkAjQCBAc291cmNlOiBAI0BcIkJlbmluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiU1ZcIkAjQCBAc291cmNlOiBAI0BcIkVsIFNhbHZhZG9yXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR0hcIkAjQCBAc291cmNlOiBAI0BcIkdoYW5hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR1JcIkAjQCBAc291cmNlOiBAI0BcIkdyZWVjZVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdOXCJAI0AgQHNvdXJjZTogQCNAXCJHdWluZWFcIkAjQFxuLy8gQGtleTogQCNAXCJOWlwiQCNAIEBzb3VyY2U6IEAjQFwiTmV3IFplYWxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJQRVwiQCNAIEBzb3VyY2U6IEAjQFwiUGVydVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBSXCJAI0AgQHNvdXJjZTogQCNAXCJQdWVydG8gUmljb1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2NvdW50cnlOYW1lcy9wdC1CUi5qcyIsImltcG9ydCBwaG9uZVR5cGVzIGZyb20gJy4uLy4uL2VudW1zL3Bob25lVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwaG9uZVR5cGVzLmJ1c2luZXNzXTogJ1RlbGVmb25lIGNvbWVyY2lhbCcsXG4gIFtwaG9uZVR5cGVzLmV4dGVuc2lvbl06ICdOw7ptZXJvIGRvIHJhbWFsJyxcbiAgW3Bob25lVHlwZXMuaG9tZV06ICdOw7ptZXJvIGRhIGNhc2EnLFxuICBbcGhvbmVUeXBlcy5tb2JpbGVdOiAnVGVsZWZvbmUgY2VsdWxhcicsXG4gIFtwaG9uZVR5cGVzLnBob25lXTogJ1RlbGVmb25lJyxcbiAgW3Bob25lVHlwZXMudW5rbm93bl06ICdUaXBvIGRlIHRlbGVmb25lIGRlc2NvbmhlY2lkbycsXG4gIFtwaG9uZVR5cGVzLmNvbXBhbnldOiAnTsO6bWVybyBkYSBlbXByZXNhJyxcbiAgW3Bob25lVHlwZXMuZGlyZWN0XTogJ07Dum1lcm8gZGlyZXRvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuYnVzaW5lc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJCdXNpbmVzcyBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIkV4dGVuc2lvbiBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5ob21lXVwiQCNAIEBzb3VyY2U6IEAjQFwiSG9tZSBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5tb2JpbGVdXCJAI0AgQHNvdXJjZTogQCNAXCJNb2JpbGUgUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5waG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIlBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMudW5rbm93bl1cIkAjQCBAc291cmNlOiBAI0BcIlVua25vd24gUGhvbmUgVHlwZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmNvbXBhbnldXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55IE51bWJlclwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmRpcmVjdF1cIkAjQCBAc291cmNlOiBAI0BcIkRpcmVjdCBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9waG9uZVR5cGVOYW1lcy9wdC1CUi5qcyIsImltcG9ydCBwaG9uZVNvdXJjZXMgZnJvbSAnLi4vLi4vZW51bXMvcGhvbmVTb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGhvbmVTb3VyY2VzLmFjY291bnRdOiAnQ29udGEnLFxuICBbcGhvbmVTb3VyY2VzLmNvbnRhY3RdOiAnQ29udGF0bycsXG4gIFtwaG9uZVNvdXJjZXMucmNDb250YWN0XTogJ3ticmFuZH0nLFxuICBbcGhvbmVTb3VyY2VzLmxlYWRdOiAnTGVhZCcsXG4gIFtwaG9uZVNvdXJjZXMub3Bwb3J0dW5pdHldOiAnT3BvcnR1bmlkYWRlJyxcbiAgW3Bob25lU291cmNlcy5zeXN0ZW1Vc2VyXTogJ1VzdcOhcmlvIGRvIHNpc3RlbWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLmFjY291bnRdXCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5jb250YWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMucmNDb250YWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwie2JyYW5kfVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMubGVhZF1cIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLm9wcG9ydHVuaXR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiT3Bwb3J0dW5pdHlcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLnN5c3RlbVVzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJTeXN0ZW0gVXNlclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lU291cmNlTmFtZXMvcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvOiAnUGFyYScsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnSW5zZXJpciBvIG5vbWUgb3UgbyBuw7ptZXJvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW50ZXJOYW1lT3JOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkVudGVyIE5hbWUgb3IgTnVtYmVyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBEaXJlY3ROdW1iZXI6ICdEaXJldG8nLFxuICBNYWluQ29tcGFueU51bWJlcjogJ1ByaW5jaXBhbCcsXG4gIENvbXBhbnlOdW1iZXI6ICdFbXByZXNhJyxcbiAgQ29tcGFueUZheE51bWJlcjogJ0ZheCcsXG4gIEJsb2NrZWQ6ICdCbG9xdWVhZG8nLFxuICBBZGRpdGlvbmFsQ29tcGFueU51bWJlcjogJ0VtcHJlc2EnLFxuICBGb3J3YXJkZWRDb21wYW55TnVtYmVyOiAnRW5jYW1pbmhhZG8nLFxuICBmcm9tOiAnRGUnLFxufTtcblxuLy8gQGtleTogQCNAXCJEaXJlY3ROdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkRpcmVjdFwiQCNAXG4vLyBAa2V5OiBAI0BcIk1haW5Db21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJNYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNvbXBhbnlGYXhOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkZheFwiQCNAXG4vLyBAa2V5OiBAI0BcIkJsb2NrZWRcIkAjQCBAc291cmNlOiBAI0BcIkJsb2NrZWRcIkAjQFxuLy8gQGtleTogQCNAXCJBZGRpdGlvbmFsQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcIkZvcndhcmRlZENvbXBhbnlOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkZvcndhcmRlZFwiQCNAXG4vLyBAa2V5OiBAI0BcImZyb21cIkAjQCBAc291cmNlOiBAI0BcIkZyb21cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRnJvbUZpZWxkL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZyb206ICdEZScsXG4gIHRvOiAnUGFyYScsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnSW5zaXJhIG8gbsO6bWVybyBvdSBvIG5vbWUuLi4nLFxuICB0eXBlTWVzc2FnZTogJ0RpZ2l0ZSBhIG1lbnNhZ2VtLi4uJyxcbiAgc2VuZDogJ0VudmlhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImZyb21cIkAjQCBAc291cmNlOiBAI0BcIkZyb21cIkAjQFxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG9cIkAjQFxuLy8gQGtleTogQCNAXCJlbnRlck5hbWVPck51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgTnVtYmVyIG9yIE5hbWUuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJ0eXBlTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiVHlwZSBtZXNzYWdlLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VuZFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db21wb3NlVGV4dFBhbmVsL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2dpbmc6ICdSZWdpc3RyYW5kby4uLicsXG4gIGxvZ0NhbGw6ICdSZWdpc3RyYXIgY2hhbWFkYScsXG4gIGVkaXRMb2c6ICdFZGl0YXIgbG9nJyxcbiAgc2VsZWN0OiAnU2VsZWNpb25hciB1bSByZWdpc3RybyBjb3JyZXNwb25kZW50ZScsXG4gIE9uSG9sZDogJ0VtIGVzcGVyYScsXG4gIFJpbmdpbmc6ICdUb3F1ZScsXG4gIENhbGxDb25uZWN0ZWQ6ICdDaGFtYWRhIGNvbmVjdGFkYScsXG4gIHVua25vd25Vc2VyOiAnVXN1w6FyaW8gZGVzY29uaGVjaWRvJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fuw7RuaW1vJyxcbiAgdW5hdmFpbGFibGU6ICdJbmRpc3BvbsOtdmVsJyxcbiAgdmlld0RldGFpbHM6ICdFeGliaXIgZGV0YWxoZXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJsb2dnaW5nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dnaW5nLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwibG9nQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTG9nIENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJlZGl0TG9nXCJAI0AgQHNvdXJjZTogQCNAXCJFZGl0IExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlbGVjdFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiT25Ib2xkXCJAI0AgQHNvdXJjZTogQCNAXCJPbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUmluZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ2luZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIkNhbGxDb25uZWN0ZWRcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgQ29ubmVjdGVkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93blVzZXJcIkAjQCBAc291cmNlOiBAI0BcIlVua25vd24gVXNlclwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25OdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkFub255bW91c1wiQCNAXG4vLyBAa2V5OiBAI0BcInVuYXZhaWxhYmxlXCJAI0AgQHNvdXJjZTogQCNAXCJVbmF2YWlsYWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcInZpZXdEZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV3IERldGFpbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERpc3BsYXkvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZU1lc3NhZ2U6ICdEaWdpdGUgYSBtZW5zYWdlbS4uLicsXG4gIHNlbmQ6ICdFbnZpYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJ0eXBlTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiVHlwZSBtZXNzYWdlLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VuZFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db252ZXJzYXRpb25QYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuZXdDb25mZXJlbmNlOiAnTm92YSBjb25mZXLDqm5jaWEnLFxuICBkaWFsSW5OdW1iZXI6ICdOw7ptZXJvIGRlIGRpc2NhZ2VtJyxcbiAgaG9zdDogJ09yZ2FuaXphZG9yJyxcbiAgcGFydGljaXBhbnRzOiAnUGFydGljaXBhbnRlcycsXG4gIGludGVybmF0aW9uYWxQYXJ0aWNpcGFudHM6ICdQYXJ0aWNpcGFudGVzIGludGVybmFjaW9uYWlzJyxcbiAgaW50ZXJuYXRpb25hbE51bWJlcnNIZWFkZXI6ICdTZWxlY2lvbmFyIG9zIG7Dum1lcm9zIGRlIGRpc2NhZ2VtIGludGVybmFjaW9uYWlzJyxcbiAgc2VhcmNoOiAnUGVzcXVpc2FyLi4uJyxcbiAgaW52aXRlV2l0aFRleHQ6ICdDb252aWRhciBjb20gdGV4dG8nLFxuICBpbnZpdGVUZXh0OiAnUGFydGljaXBlIGRhIGNvbmZlcsOqbmNpYSB7YnJhbmROYW1lfS5cXHJcXG5cXG5Ow7ptZXJvcyBkZSBkaXNjYWdlbToge2Zvcm1hdHRlZERpYWxJbk51bWJlcn0gXFxyXFxue2FkZGl0aW9uYWxOdW1iZXJzU2VjdGlvbn0gXFxyXFxuQWNlc3NvIGRlIHBhcnRpY2lwYW50ZToge3BhcnRpY2lwYW50Q29kZX0gXFxyXFxuXFxuUHJlY2lzYSBkZSB1bSBuw7ptZXJvIGRlIHRlbGVmb25lIGNvbSBkaXNjYWdlbSBpbnRlcm5hY2lvbmFsPyBBY2Vzc2Uge2RpYWxJbk51bWJlcnNMaW5rc30gXFxyXFxuXFxuRXN0YSBjaGFtYWRhIGVtIGNvbmZlcsOqbmNpYSDDqSBwb3NzaWJpbGl0YWRhIHBlbG8gU2lzdGVtYSBkZSBjb25mZXLDqm5jaWEge2JyYW5kTmFtZX0uJyxcbiAgaG9zdEFjY2VzczogJ0FjZXNzbyBkbyBvcmdhbml6YWRvcicsXG4gIHBhcnRpY2lwYW50c0FjY2VzczogJ0FjZXNzbyBkZSBwYXJ0aWNpcGFudGUnLFxuICBhZGRpbmFsRGlhbEluTnVtYmVyczogJ07Dum1lcm9zIGRlIGRpc2NhZ2VtIGFkaWNpb25haXMnLFxuICBzZWxlY3ROdW1iZXJzOiAnU2VsZWNpb25hciBuw7ptZXJvcycsXG4gIGVuYWJsZUpvaW5CZWZvcmVIb3N0OiAnQXRpdmFyIHBhcnRpY2lwYcOnw6NvIGFudGVzIGRlIG9yZ2FuaXphcicsXG4gIGNvbmZlcmVuY2VDb21tYW5kczogJ0NvbWFuZG9zIGRlIGNvbmZlcsOqbmNpYScsXG4gIGludml0ZVdpdGhHQ2FsZW5kYXI6ICdDb252aWRhciBjb20gbyBHb29nbGUgQ2FsZW5kYXInLFxuICBqb2luQXNIb3N0OiAnSW5pY2lhciBjb25mZXLDqm5jaWEnLFxuICBpbnRlcm5hdGlvbmFsTnVtYmVyOiAnTsO6bWVyb3MgZGUgZGlzY2FnZW0gaW50ZXJuYWNpb25hbDonLFxufTtcblxuLy8gQGtleTogQCNAXCJuZXdDb25mZXJlbmNlXCJAI0AgQHNvdXJjZTogQCNAXCJOZXcgQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcImRpYWxJbk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbC1pbiBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJob3N0QWNjZXNzXCJAI0AgQHNvdXJjZTogQCNAXCJIb3N0IEFjY2Vzc1wiQCNAXG4vLyBAa2V5OiBAI0BcInBhcnRpY2lwYW50c0FjY2Vzc1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFydGljaXBhbnRzIEFjY2Vzc1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZGluYWxEaWFsSW5OdW1iZXJzXCJAI0AgQHNvdXJjZTogQCNAXCJBZGRpdGlvbmFsIERpYWwtaW4gTnVtYmVyc1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlbGVjdE51bWJlcnNcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBOdW1iZXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW5hYmxlSm9pbkJlZm9yZUhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkVuYWJsZSBqb2luIGJlZm9yZSBIb3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29uZmVyZW5jZUNvbW1hbmRzXCJAI0AgQHNvdXJjZTogQCNAXCJDb25mZXJlbmNlIENvbW1hbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW52aXRlV2l0aEdDYWxlbmRhclwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXRlIHdpdGggR29vZ2xlIENhbGVuZGFyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW52aXRlV2l0aFRleHRcIkAjQCBAc291cmNlOiBAI0BcIkludml0ZSB3aXRoIFRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJqb2luQXNIb3N0XCJAI0AgQHNvdXJjZTogQCNAXCJMYXVuY2ggQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcImludGVybmF0aW9uYWxOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkludGVybmF0aW9uYWwgRGlhbC1pbiBOdW1iZXJzOlwiQCNAXG4vLyBAa2V5OiBAI0BcImludml0ZVRleHRcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBqb2luIHRoZSB7YnJhbmROYW1lfSBjb25mZXJlbmNlLlxcblxcbkRpYWwtSW4gTnVtYmVyczoge2Zvcm1hdHRlZERpYWxJbk51bWJlcn0gXFxue2FkZGl0aW9uYWxOdW1iZXJzU2VjdGlvbn0gXFxuUGFydGljaXBhbnQgQWNjZXNzOiB7cGFydGljaXBhbnRDb2RlfSBcXG5cXG5OZWVkIGFuIGludGVybmF0aW9uYWwgZGlhbC1pbiBwaG9uZSBudW1iZXI/IFBsZWFzZSB2aXNpdCB7ZGlhbEluTnVtYmVyc0xpbmtzfSBcXG5cXG5UaGlzIGNvbmZlcmVuY2UgY2FsbCBpcyBicm91Z2h0IHRvIHlvdSBieSB7YnJhbmROYW1lfSBDb25mZXJlbmNpbmcuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0NvbWFuZG9zIGRlIGNvbmZlcsOqbmNpYScsXG4gIHN0YXJTaGFycDJUaXRsZTogJ0NvbnRhZ2VtIGRlIGF1dG9yIGRhIGNoYW1hZGEnLFxuICBzdGFyU2hhcnAyQm9keTogJ01vbml0b3JhciBxdWFudGFzIHBlc3NvYXMgZXN0w6NvIG5hIGNoYW1hZGEnLFxuICBzdGFyU2hhcnAzVGl0bGU6ICdEZWl4YXIgY29uZmVyw6puY2lhJyxcbiAgc3RhclNoYXJwM0JvZHk6ICdQZXJtaXRpciBxdWUgbyBvcmdhbml6YWRvciBkZXNsaWd1ZSBlIGZpbmFsaXplIGEgY2hhbWFkYScsXG4gIHN0YXJTaGFycDRUaXRsZTogJ01lbnUnLFxuICBzdGFyU2hhcnA0Qm9keTogJ091dmlyIGEgbGlzdGEgZGUgY29tYW5kb3MgcG9yIHRvbSBkZSB0b3F1ZScsXG4gIHN0YXJTaGFycDVUaXRsZTogJ0RlZmluaXIgbW9kb3MgZGUgZXNjdXRhJyxcbiAgc3RhclNoYXJwNUJvZHk6ICdQcmVzc2lvbmUgMXg6IENvbG9jYXIgYXV0b3JlcyBkZSBjaGFtYWRhcyBubyBtdWRvIC0gT3MgYXV0b3JlcyBkZSBjaGFtYWRhcyBwb2RlbSBkZXNhdGl2YXIgbyBtb2RvIG11ZG8gY29tICAqLCAjLCA2XFxyXFxuUHJlc3Npb25lIDJ4OiBDb2xvY2FyIGF1dG9yZXMgZGUgY2hhbWFkYXMgbm8gbXVkbyAtIEFwZW5hcyBlc2N1dGEuIFNlbSBvcMOnw6NvIGRlIGRlc2F0aXZhciBtdWRvXFxyXFxuUHJlc3Npb25lIDN4OiBEZXNhdGl2YXIgbXVkbyBkb3MgYXV0b3JlcyBkZSBjaGFtYWRhcyAtIFJlYWJyZSBhIGxpbmhhJyxcbiAgc3RhclNoYXJwNlRpdGxlOiAnQ29sb2NhciBhIGxpbmhhIGRvIG9yZ2FuaXphZG9yIG5vIG11ZG8nLFxuICBzdGFyU2hhcnA2Qm9keTogJ1ByZXNzaW9uZSB1bWEgdmV6IHBhcmEgQ09MT0NBUiBOTyBNVURPXFxyXFxuUHJlc3Npb25lIG5vdmFtZW50ZSBwYXJhIERFU0FUSVZBUiBNVURPJyxcbiAgc3RhclNoYXJwN1RpdGxlOiAnUHJvdGVnZXIgYSBjaGFtYWRhJyxcbiAgc3RhclNoYXJwN0JvZHk6ICdQcmVzc2lvbmUgdW1hIHZleiBwYXJhIEJMT1FVRUFSIHRvZG9zIG9zIGF1dG9yZXMgZGUgY2hhbWFkYXNcXHJcXG5QcmVzc2lvbmUgbm92YW1lbnRlIHBhcmEgQUJSSVIgYSBjaGFtYWRhJyxcbiAgc3RhclNoYXJwOFRpdGxlOiAnT3V2aXIgdW0gc29tIHF1YW5kbyBhbGd1w6ltIEVudHJhciBvdSBTYWlyIGRhIGNoYW1hZGEnLFxuICBzdGFyU2hhcnA4Qm9keTogJ1ByZXNzaW9uZSAxeDogREVTQVRJVkEgbyBzb21cXHJcXG5QcmVzc2lvbmUgMng6IEluc2VyaXIgdG9tIGVzdMOhIEFUSVZBRE8gU2FpciBkbyB0b20gZXN0w6EgREVTQVRJVkFET1xcclxcblByZXNzaW9uZSAzeDogSW5zZXJpciB0b20gZXN0w6EgREVTQVRJVkFETyBTYWlyIGRvIHRvbSBlc3TDoSBBVElWQURPXFxyXFxuUHJlc3Npb25lIDR4OiBBVElWQSBvIHNvbScsXG4gIHN0YXI5VGl0bGU6ICdHcmF2YXIgc3VhIGNvbmZlcsOqbmNpYScsXG4gIHN0YXI5Qm9keTogJ1ByZXNzaW9uZSB1bWEgdmV6IHBhcmEgQ09NRcOHQVIgYSBncmF2YcOnw6NvXFxyXFxuUHJlc3Npb25lIG5vdmFtZW50ZSBwYXJhIFBBUkFSIGEgZ3JhdmHDp8OjbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDb25mZXJlbmNlIENvbW1hbmRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwMlRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsZXIgQ291bnRcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnAyQm9keVwiQCNAIEBzb3VyY2U6IEAjQFwiS2VlcCB0cmFjayBvZiBob3cgbWFueSBwZW9wbGUgYXJlIG9uIHRoZSBjYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwM1RpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJMZWF2ZSBDb25mZXJlbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwM0JvZHlcIkAjQCBAc291cmNlOiBAI0BcIkxldHMgdGhlIGhvc3QgaGFuZyB1cCBhbmQgZW5kIHRoZSBjYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNFRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJNZW51XCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwNEJvZHlcIkAjQCBAc291cmNlOiBAI0BcIkxpc3RlbiB0byB0aGUgbGlzdCBvZiB0b3VjaHRvbmUgY29tbWFuZHNcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA1VGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlNldCBMaXN0ZW5pbmcgTW9kZXNcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA1Qm9keVwiQCNAIEBzb3VyY2U6IEAjQFwiUHJlc3MgMXg6IE11dGUgY2FsbGVycyAtIENhbGxlcnMgY2FuIHVubXV0ZSB3aXRoICAqLCAjLCA2XFxuUHJlc3MgMng6IE11dGUgY2FsbGVycyAtIExpc3RlbiBvbmx5LiBObyB1bm11dGluZyBvcHRpb25cXG5QcmVzcyAzeDogVW5tdXRlIGNhbGxlcnMgLSBPcGVucyB0aGUgbGluZSBhZ2FpblwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXJTaGFycDZUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTXV0ZSBIb3N0IExpbmVcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA2Qm9keVwiQCNAIEBzb3VyY2U6IEAjQFwiUHJlc3Mgb25jZSB0byBNVVRFXFxuUHJlc3MgYWdhaW4gdG8gVU5NVVRFXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwN1RpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJTZWN1cmUgdGhlIENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA3Qm9keVwiQCNAIEBzb3VyY2U6IEAjQFwiUHJlc3Mgb25jZSB0byBCTE9DSyBhbGwgY2FsbGVyc1xcblByZXNzIGFnYWluIHRvIE9QRU4gdGhlIGNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyU2hhcnA4VGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkhlYXIgc291bmQgd2hlbiBwZW9wbGUgRW50ZXIgb3IgRXhpdCBjYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RhclNoYXJwOEJvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIDF4OiBUdXJucyBPRkYgc291bmRcXG5QcmVzcyAyeDogRW50ZXIgdG9uZSBpcyBPTiBFeGl0IHRvbmUgaXMgT0ZGXFxuUHJlc3MgM3g6IEVudGVyIHRvbmUgaXMgT0ZGIEV4aXQgdG9uZSBpcyBPTlxcblByZXNzIDR4OiBUdXJucyBPTiBzb3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcInN0YXI5VGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlJlY29yZCB5b3VyIGNvbmZlcmVuY2VcIkAjQFxuLy8gQGtleTogQCNAXCJzdGFyOUJvZHlcIkAjQCBAc291cmNlOiBAI0BcIlByZXNzIG9uY2UgdG8gU1RBUlQgcmVjb3JkaW5nXFxuUHJlc3MgYWdhaW4gdG8gU1RPUCByZWNvcmRpbmdcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29uZmVyZW5jZUNvbW1hbmRzL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFjY291bnQ6ICdDb250YScsXG4gIGNvbnRhY3Q6ICdDb250YXRvJyxcbiAgbGVhZDogJ0xlYWQnLFxuICBjaG9vc2VFbnRpdHk6ICdTZWxlY2lvbmUgbyB0aXBvIGRlIGVudGlkYWRlJyxcbiAgY3JlYXRlOiAnQ3JpYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJhY2NvdW50XCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29udGFjdFwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcImxlYWRcIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJjaG9vc2VFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgZW50aXR5IHR5cGVcIkAjQFxuLy8gQGtleTogQCNAXCJjcmVhdGVcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdXJlVG9EZWxldGVWb2ljZU1haWw6ICdUZW0gY2VydGV6YSBkZSBxdWUgZGVzZWphIGV4Y2x1aXIgZXN0YSBjYWl4YSBwb3N0YWw/JyxcbiAgZG9Ob3RBc2tBZ2FpbjogJ07Do28gcGVyZ3VudGFyIG5vdmFtZW50ZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInN1cmVUb0RlbGV0ZVZvaWNlTWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHZvaWNlbWFpbD9cIkAjQFxuLy8gQGtleTogQCNAXCJkb05vdEFza0FnYWluXCJAI0AgQHNvdXJjZTogQCNAXCJEb24ndCBhc2sgbWUgYWdhaW5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aW9uTWVudUxpc3QvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZG93bmxvYWQ6ICdCYWl4YXInLFxuICBwbGF5OiAnUmVwcm9kdXppcicsXG4gIHBhdXNlOiAnUGF1c2FyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZG93bmxvYWRcIkAjQCBAc291cmNlOiBAI0BcIkRvd25sb2FkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGxheVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxheVwiQCNAXG4vLyBAa2V5OiBAI0BcInBhdXNlXCJAI0AgQHNvdXJjZTogQCNAXCJQYXVzZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Wb2ljZW1haWxQbGF5ZXIvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRMb2c6ICdMb2cnLFxuICBlZGl0TG9nOiAnRWRpdGFyIGxvZycsXG4gIHZpZXdEZXRhaWxzOiAnRXhpYmlyIGRldGFsaGVzJyxcbiAgYWRkRW50aXR5OiAnQ3JpYXIgbm92bycsXG4gIGNhbGw6ICdDaGFtYWRhJyxcbiAgY29udmVyc2F0aW9uOiAnQ29udmVyc2EnLFxuICBncm91cENvbnZlcnNhdGlvbjogJ0NvbnZlcnNhIGVtIGdydXBvJyxcbiAgdGV4dDogJ1RleHRvJyxcbiAgdm9pY2VNZXNzYWdlOiAnTWVuc2FnZW5zIGRlIHZveicsXG4gIFttZXNzYWdlVHlwZXMudm9pY2VNYWlsXTogJ0NvcnJlaW8gZGUgdm96JyxcbiAgbWFyazogJ01hcmNhciBjb21vIG7Do28gbGlkbycsXG4gIHVubWFyazogJ01hcmNhciBjb21vIGxpZG8nLFxuICBkZWxldGU6ICdFeGNsdWlyJyxcbiAgZmF4U2VudDogJ0ZheCBlbnZpYWRvJyxcbiAgZmF4UmVjZWl2ZWQ6ICdGYXggcmVjZWJpZG8nLFxuICBwYWdlczogJ3DDoWdpbmFzJyxcbiAgcHJldmlldzogJ0V4aWJpcicsXG4gIGRvd25sb2FkOiAnQmFpeGFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJlZGl0TG9nXCJAI0AgQHNvdXJjZTogQCNAXCJFZGl0IExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInZpZXdEZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV3IERldGFpbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZSBOZXdcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwidGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbnZlcnNhdGlvblwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udmVyc2F0aW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZ3JvdXBDb252ZXJzYXRpb25cIkAjQCBAc291cmNlOiBAI0BcIkdyb3VwIENvbnZlcnNhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaWNlTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2UgbWVzc2FnZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudm9pY2VNYWlsXVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2UgTWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1hcmtcIkAjQCBAc291cmNlOiBAI0BcIk1hcmsgYXMgVW5yZWFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5tYXJrXCJAI0AgQHNvdXJjZTogQCNAXCJNYXJrIGFzIFJlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJkZWxldGVcIkAjQCBAc291cmNlOiBAI0BcIkRlbGV0ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImZheFNlbnRcIkAjQCBAc291cmNlOiBAI0BcIkZheCBzZW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmF4UmVjZWl2ZWRcIkAjQCBAc291cmNlOiBAI0BcIkZheCByZWNlaXZlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhZ2VzXCJAI0AgQHNvdXJjZTogQCNAXCJwYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcInByZXZpZXdcIkAjQCBAc291cmNlOiBAI0BcIlZpZXdcIkAjQFxuLy8gQGtleTogQCNAXCJkb3dubG9hZFwiQCNAIEBzb3VyY2U6IEAjQFwiRG93bmxvYWRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZUl0ZW0vaTE4bi9wdC1CUi5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZWFyY2g6ICdQZXNxdWlzYXIuLi4nLFxuICBub01lc3NhZ2VzOiAnTmVuaHVtYSBtZW5zYWdlbScsXG4gIG5vU2VhcmNoUmVzdWx0czogJ05lbmh1bSByZWdpc3RybyBjb3JyZXNwb25kZW50ZSBlbmNvbnRyYWRvJyxcbiAgdGl0bGU6ICdNZW5zYWdlbnMnLFxuICBjb21wb3NlVGV4dDogJ0NyaWFyIHRleHRvJyxcbiAgW21lc3NhZ2VUeXBlcy5hbGxdOiAnVHVkbycsXG4gIFttZXNzYWdlVHlwZXMudm9pY2VNYWlsXTogJ1ZveicsXG4gIFttZXNzYWdlVHlwZXMudGV4dF06ICdUZXh0bycsXG4gIFttZXNzYWdlVHlwZXMuZmF4XTogJ0ZheCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJNZXNzYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlYXJjaFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VhcmNoLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29tcG9zZVRleHRcIkAjQCBAc291cmNlOiBAI0BcIkNvbXBvc2UgVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcIm5vTWVzc2FnZXNcIkAjQCBAc291cmNlOiBAI0BcIk5vIE1lc3NhZ2VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibm9TZWFyY2hSZXN1bHRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBtYXRjaGluZyByZWNvcmRzIGZvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy5hbGxdXCJAI0AgQHNvdXJjZTogQCNAXCJBbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy50ZXh0XVwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMuZmF4XVwiQCNAIEBzb3VyY2U6IEAjQFwiRmF4XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VzUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ1JlZ2lzdHJhbmRvLi4uJyxcbiAgbG9nQ2FsbDogJ1JlZ2lzdHJhciBjaGFtYWRhJyxcbiAgZWRpdExvZzogJ0VkaXRhciBsb2cnLFxuICBzZWxlY3Q6ICdTZWxlY2lvbmFyIHVtIHJlZ2lzdHJvIGNvcnJlc3BvbmRlbnRlJyxcbiAgT25Ib2xkOiAnRW0gZXNwZXJhJyxcbiAgUmluZ2luZzogJ1RvcXVlJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NoYW1hZGEgY29uZWN0YWRhJyxcbiAgdW5rbm93blVzZXI6ICdVc3XDoXJpbyBkZXNjb25oZWNpZG8nLFxuICB1bmtub3duTnVtYmVyOiAnQW7DtG5pbW8nLFxuICB1bmF2YWlsYWJsZTogJ0luZGlzcG9uw612ZWwnLFxuICB2aWV3RGV0YWlsczogJ0V4aWJpciBkZXRhbGhlcycsXG4gIGFkZEVudGl0eTogJ0NyaWFyIG5vdm8nLFxuICBhZGRMb2c6ICdMb2cnLFxuICB0ZXh0OiAnVGV4dG8nLFxuICBjYWxsOiAnQ2hhbWFkYScsXG4gIGFkZENvbnRhY3Q6ICdBZGljaW9uYXIgY29udGF0bycsXG4gIG1pc3NlZENhbGw6ICdQZXJkaWRhcycsXG4gIGluYm91bmRDYWxsOiAnRW50cmFkYScsXG4gIG91dGJvdW5kQ2FsbDogJ1Nhw61kYScsXG4gIGZyb206ICdEZScsXG4gIHRvOiAnUGFyYScsXG4gIGhhbmd1cDogJ0Rlc2xpZ2FyJyxcbiAgYWNjZXB0OiAnQWNlaXRhcicsXG4gIHRvVm9pY2VtYWlsOiAnRW52aWFyIHBhcmEgY2FpeGEgcG9zdGFsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImFkZENvbnRhY3RcIkAjQCBAc291cmNlOiBAI0BcIkFkZCBDb250YWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwibWlzc2VkQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTWlzc2VkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluYm91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk91dGJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJvbVwiQCNAIEBzb3VyY2U6IEAjQFwiRnJvbVwiQCNAXG4vLyBAa2V5OiBAI0BcInRvXCJAI0AgQHNvdXJjZTogQCNAXCJUb1wiQCNAXG4vLyBAa2V5OiBAI0BcImhhbmd1cFwiQCNAIEBzb3VyY2U6IEAjQFwiSGFuZ3VwXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWNjZXB0XCJAI0AgQHNvdXJjZTogQCNAXCJBY2NlcHRcIkAjQFxuLy8gQGtleTogQCNAXCJ0b1ZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZCB0byBWb2ljZW1haWxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbEl0ZW0vaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9BY3RpdmVDYWxsczogJ1NlbSBjaGFtYWRhcyBhdGl2YXMnLFxuICBjdXJyZW50Q2FsbDogJ0NoYW1hZGEgYXR1YWwnLFxuICByaW5nQ2FsbDogJ0NoYW1hZGEgc29ub3JhJyxcbiAgb25Ib2xkQ2FsbDogJ0NoYW1hZGEgZW0gZXNwZXJhJyxcbiAgb3RoZXJEZXZpY2VDYWxsOiAnQ2hhbWFkYXMgZW0gYW5kYW1lbnRvIG5vcyBtZXVzIG91dHJvcyBkaXNwb3NpdGl2b3MnLFxufTtcblxuLy8gQGtleTogQCNAXCJub0FjdGl2ZUNhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBhY3RpdmUgY2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJjdXJyZW50Q2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VycmVudCBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmcgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uSG9sZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgb24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm90aGVyRGV2aWNlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiT25nb2luZyBjYWxscyBvbiBteSBvdGhlciBkZXZpY2VzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxzUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ1JlZ2lzdHJhbmRvLi4uJyxcbiAgbG9nQ2FsbDogJ1JlZ2lzdHJhciBjaGFtYWRhJyxcbiAgZWRpdExvZzogJ0VkaXRhciBsb2cnLFxuICBzZWxlY3Q6ICdTZWxlY2lvbmFyIHVtIHJlZ2lzdHJvIGNvcnJlc3BvbmRlbnRlJyxcbiAgT25Ib2xkOiAnRW0gZXNwZXJhJyxcbiAgUmluZ2luZzogJ1RvcXVlJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NoYW1hZGEgY29uZWN0YWRhJyxcbiAgdW5rbm93blVzZXI6ICdVc3XDoXJpbyBkZXNjb25oZWNpZG8nLFxuICB1bmtub3duTnVtYmVyOiAnQW7DtG5pbW8nLFxuICB1bmF2YWlsYWJsZTogJ0luZGlzcG9uw612ZWwnLFxuICB2aWV3RGV0YWlsczogJ0V4aWJpciBkZXRhbGhlcycsXG4gIGFkZEVudGl0eTogJ0NyaWFyIG5vdm8nLFxuICBhZGRMb2c6ICdMb2cnLFxuICB0ZXh0OiAnVGV4dG8nLFxuICBjYWxsOiAnQ2hhbWFkYScsXG4gIG1pc3NlZENhbGw6ICdQZXJkaWRhcycsXG4gIGluYm91bmRDYWxsOiAnRW50cmFkYScsXG4gIG91dGJvdW5kQ2FsbDogJ1Nhw61kYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2dpbmdcIkAjQCBAc291cmNlOiBAI0BcIkxvZ2dpbmcuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJsb2dDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJMb2cgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImVkaXRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkVkaXQgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VsZWN0XCJAI0AgQHNvdXJjZTogQCNAXCJTZWxlY3QgYSBtYXRjaGluZyByZWNvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJPbkhvbGRcIkAjQCBAc291cmNlOiBAI0BcIk9uIEhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJSaW5naW5nXCJAI0AgQHNvdXJjZTogQCNAXCJSaW5naW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ2FsbENvbm5lY3RlZFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBDb25uZWN0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duVXNlclwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93biBVc2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93bk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdmFpbGFibGVcIkAjQCBAc291cmNlOiBAI0BcIlVuYXZhaWxhYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlld0RldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIlZpZXcgRGV0YWlsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZEVudGl0eVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3JlYXRlIE5ld1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwidGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJtaXNzZWRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJNaXNzZWRcIkAjQFxuLy8gQGtleTogQCNAXCJpbmJvdW5kQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiSW5ib3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm91dGJvdW5kQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiT3V0Ym91bmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbEl0ZW0vaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9BY3RpdmVDYWxsczogJ1NlbSBjaGFtYWRhcyBhdGl2YXMnLFxuICBub1JlY29yZHM6ICdOZW5odW0gcmVzdWx0YWRvIGVuY29udHJhZG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9BY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gYWN0aXZlIGNhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZXN1bHRzIGZvdW5kLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0hpc3TDs3JpY28nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiSGlzdG9yeVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0VuY2FtaW5oYXInLFxuICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gIGN1c3RvbU51bWJlcjogJ07Dum1lcm8gcGVyc29uYWxpemFkbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImZvcndhcmRcIkAjQCBAc291cmNlOiBAI0BcIkZvcndhcmRcIkAjQFxuLy8gQGtleTogQCNAXCJjYW5jZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbmNlbFwiQCNAXG4vLyBAa2V5OiBAI0BcImN1c3RvbU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIG51bWJlclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Gb3J3YXJkRm9ybS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gIHJlcGx5OiAnUmVzcG9uZGVyJyxcbiAgb25NeVdheTogJ0VzdG91IGEgY2FtaW5obycsXG4gIGN1c3RvbU1lc3NhZ2U6ICdNZW5zYWdlbSBwZXJzb25hbGl6YWRhJyxcbiAgY2FsbE1lQmFja0luOiAnTGlndWUgZGUgbm92byBlbScsXG4gIHdpbGxDYWxsWW91QmFja0luOiAnVm9jw6ogcG9kZSBsaWdhciBkZSBub3ZvIGVtJyxcbiAgbWluOiAnbWluLicsXG4gIGhvdXJzOiAnaG9yYXMnLFxuICBkYXlzOiAnZGlhcycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImNhbmNlbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FuY2VsXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVwbHlcIkAjQCBAc291cmNlOiBAI0BcIlJlcGx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwib25NeVdheVwiQCNAIEBzb3VyY2U6IEAjQFwiT24gbXkgd2F5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY3VzdG9tTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIE1lc3NhZ2VcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsTWVCYWNrSW5cIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgbWUgYmFjayBpblwiQCNAXG4vLyBAa2V5OiBAI0BcIndpbGxDYWxsWW91QmFja0luXCJAI0AgQHNvdXJjZTogQCNAXCJXaWxsIGNhbGwgeW91IGJhY2sgaW5cIkAjQFxuLy8gQGtleTogQCNAXCJtaW5cIkAjQCBAc291cmNlOiBAI0BcIm1pbi5cIkAjQFxuLy8gQGtleTogQCNAXCJob3Vyc1wiQCNAIEBzb3VyY2U6IEAjQFwiaG91cnNcIkAjQFxuLy8gQGtleTogQCNAXCJkYXlzXCJAI0AgQHNvdXJjZTogQCNAXCJkYXlzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0VuY2FtaW5oYXInLFxuICByZXBseTogJ1Jlc3BvbmRlcicsXG4gIGlnbm9yZTogJ0lnbm9yYXInLFxuICB0b1ZvaWNlbWFpbDogJ1BhcmEgY2FpeGEgcG9zdGFsJyxcbiAgYW5zd2VyOiAnUmVzcG9uZGVyJyxcbiAgYW5zd2VyQW5kRW5kOiAnQXRlbmRlciBlIGVuYy4nLFxuICBhbnN3ZXJBbmRIb2xkOiAnQXRlbmRlciBlIGVzcGVyYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImZvcndhcmRcIkAjQCBAc291cmNlOiBAI0BcIkZvcndhcmRcIkAjQFxuLy8gQGtleTogQCNAXCJyZXBseVwiQCNAIEBzb3VyY2U6IEAjQFwiUmVwbHlcIkAjQFxuLy8gQGtleTogQCNAXCJpZ25vcmVcIkAjQCBAc291cmNlOiBAI0BcIklnbm9yZVwiQCNAXG4vLyBAa2V5OiBAI0BcInRvVm9pY2VtYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJUbyBWb2ljZW1haWxcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlclwiQCNAXG4vLyBAa2V5OiBAI0BcImFuc3dlckFuZEVuZFwiQCNAIEBzb3VyY2U6IEAjQFwiQW5zd2VyICYgRW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5zd2VyQW5kSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiQW5zd2VyICYgSG9sZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9JbmNvbWluZ0NhbGxQYWQvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5rbm93bjogJ0Rlc2NvbmhlY2lkbycsXG4gIGFub255bW91czogJ0Fuw7RuaW1vJyxcbiAgYWN0aXZlQ2FsbDogJ0NoYW1hZGEgYXRpdmEnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmtub3duXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJhY3RpdmVDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJBY3RpdmUgQ2FsbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9JbmNvbWluZ0NhbGxQYWdlL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhpZGU6ICdPY3VsdGFyJyxcbiAgZW5kOiAnRmltJyxcbiAga2V5cGFkOiAnVGVjbGFkbyBudW3DqXJpY28nLFxufTtcblxuLy8gQGtleTogQCNAXCJoaWRlXCJAI0AgQHNvdXJjZTogQCNAXCJIaWRlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW5kXCJAI0AgQHNvdXJjZTogQCNAXCJFbmRcIkAjQFxuLy8gQGtleTogQCNAXCJrZXlwYWRcIkAjQCBAc291cmNlOiBAI0BcIktleXBhZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsRGlhbFBhZC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bm11dGU6ICdEZXNhdGl2YXIgbXVkbycsXG4gIG11dGU6ICdBdGl2YXIgbXVkbycsXG4gIGtleXBhZDogJ1RlY2xhZG8gbnVtw6lyaWNvJyxcbiAgaG9sZDogJ0FndWFyZGFyJyxcbiAgb25Ib2xkOiAnRW0gZXNwZXJhJyxcbiAgcGFyazogJ0VzdGFjaW9uYXInLFxuICBzdG9wUmVjb3JkOiAnUGFyYXInLFxuICByZWNvcmQ6ICdHcmF2YXInLFxuICBhZGQ6ICdBZGljaW9uYXInLFxuICB0cmFuc2ZlcjogJ1RyYW5zZmVyw6puY2lhJyxcbiAgZmxpcDogJ1RyYW5zZmVyaXInLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bm11dGVcIkAjQCBAc291cmNlOiBAI0BcIlVubXV0ZVwiQCNAXG4vLyBAa2V5OiBAI0BcIm11dGVcIkAjQCBAc291cmNlOiBAI0BcIk11dGVcIkAjQFxuLy8gQGtleTogQCNAXCJrZXlwYWRcIkAjQCBAc291cmNlOiBAI0BcIktleXBhZFwiQCNAXG4vLyBAa2V5OiBAI0BcImhvbGRcIkAjQCBAc291cmNlOiBAI0BcIkhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJvbkhvbGRcIkAjQCBAc291cmNlOiBAI0BcIk9uIEhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJwYXJrXCJAI0AgQHNvdXJjZTogQCNAXCJQYXJrXCJAI0Bcbi8vIEBrZXk6IEAjQFwic3RvcFJlY29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiU3RvcFwiQCNAXG4vLyBAa2V5OiBAI0BcInJlY29yZFwiQCNAIEBzb3VyY2U6IEAjQFwiUmVjb3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkXCJAI0AgQHNvdXJjZTogQCNAXCJBZGRcIkAjQFxuLy8gQGtleTogQCNAXCJ0cmFuc2ZlclwiQCNAIEBzb3VyY2U6IEAjQFwiVHJhbnNmZXJcIkAjQFxuLy8gQGtleTogQCNAXCJmbGlwXCJAI0AgQHNvdXJjZTogQCNAXCJGbGlwXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxQYWQvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgSG9tZTogJ1DDoWdpbmEgcHJpbmNpcGFsJyxcbiAgTW9iaWxlOiAnRGlzcG9zaXRpdm8gbcOzdmVsJyxcbiAgV29yazogJ1RyYWJhbGhvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiSG9tZVwiQCNAIEBzb3VyY2U6IEAjQFwiSG9tZVwiQCNAXG4vLyBAa2V5OiBAI0BcIk1vYmlsZVwiQCNAIEBzb3VyY2U6IEAjQFwiTW9iaWxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiV29ya1wiQCNAIEBzb3VyY2U6IEAjQFwiV29ya1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SYWRpb0J0bkdyb3VwL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZsaXBIZWFkZXI6ICdUcmFuc2ZlcmlyIGNoYW1hZGEgcGFyYS4uLicsXG4gIGZsaXA6ICdUcmFuc2ZlcmlyJyxcbiAgY29tcGxldGU6ICdUcmFuc2ZlcsOqbmNpYSBjb25jbHXDrWRhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZmxpcEhlYWRlclwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcCBDYWxsIHRvLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmxpcFwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbXBsZXRlXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wbGV0ZSBGbGlwXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ1BhcmE6JyxcbiAgdHJhbnNmZXJUbzogJ1RyYW5zZmVyaXIgcGFyYScsXG4gIGJsaW5kVHJhbnNmZXI6ICdUcmFuc2ZlcsOqbmNpYScsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnSW5zZXJpciBuw7ptZXJvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvOlwiQCNAXG4vLyBAa2V5OiBAI0BcInRyYW5zZmVyVG9cIkAjQCBAc291cmNlOiBAI0BcIlRyYW5zZmVyIHRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYmxpbmRUcmFuc2ZlclwiQCNAIEBzb3VyY2U6IEAjQFwiVHJhbnNmZXJcIkAjQFxuLy8gQGtleTogQCNAXCJlbnRlck5hbWVPck51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgTnVtYmVyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5rbm93bjogJ0Rlc2NvbmhlY2lkbycsXG4gIGFub255bW91czogJ0Fuw7RuaW1vJyxcbiAgYWN0aXZlQ2FsbHM6ICdDaGFtYWRhcyBhdGl2YXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmtub3duXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJhY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxDdHJsUGFnZS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVDYWxsOiAnQ2hhbWFkYSBhdGl2YScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFjdGl2ZUNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkFjdGl2ZSBDYWxsXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxCYWRnZUNvbnRhaW5lci9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0NvbnRhY3RzOiAnTmVuaHVtIHJlZ2lzdHJvIGVuY29udHJhZG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9Db250YWN0c1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjb3JkcyBmb3VuZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdExpc3QvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2VhcmNoUGxhY2Vob2xkZXI6ICdQZXNxdWlzYXIuLi4nLFxufTtcblxuLy8gQGtleTogQCNAXCJzZWFyY2hQbGFjZWhvbGRlclwiQCNAIEBzb3VyY2U6IEAjQFwiU2VhcmNoLi4uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3RzVmlldy9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhbGw6ICdUb2RvcycsXG4gIGNvbXBhbnk6ICdFbXByZXNhJyxcbiAgcGVyc29uYWw6ICdQZXNzb2FsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJBbGxcIkAjQFxuLy8gQGtleTogQCNAXCJjb21wYW55XCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwicGVyc29uYWxcIkAjQCBAc291cmNlOiBAI0BcIlBlcnNvbmFsXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBwcmVzZW5jZVN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzJztcbmltcG9ydCBkbmRTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9kbmRTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV4dGVuc2lvbkxhYmVsOiAnUmFtYWwnLFxuICBkaXJlY3RMYWJlbDogJ0RpcmV0bycsXG4gIGVtYWlsTGFiZWw6ICdFbWFpbCcsXG4gIGNhbGw6ICdDaGFtYWRhJyxcbiAgdGV4dDogJ1RleHRvJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV06ICdEaXNwb27DrXZlbCcsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXN5XTogJ09jdXBhZG8nLFxuICBbcHJlc2VuY2VTdGF0dXMub2ZmbGluZV06ICdJbnZpc8OtdmVsJyxcbiAgW2RuZFN0YXR1cy5kb05vdEFjY2VwdEFueUNhbGxzXTogJ07Do28gcGVydHVyYmUnLFxufTtcblxuLy8gQGtleTogQCNAXCJleHRlbnNpb25MYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiRXh0LlwiQCNAXG4vLyBAa2V5OiBAI0BcImRpcmVjdExhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJEaXJlY3RcIkAjQFxuLy8gQGtleTogQCNAXCJlbWFpbExhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJFbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV1cIkAjQCBAc291cmNlOiBAI0BcIkF2YWlsYWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXVwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXNpYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmJ1c3ldXCJAI0AgQHNvdXJjZTogQCNAXCJCdXN5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2RuZFN0YXR1cy5kb05vdEFjY2VwdEFueUNhbGxzXVwiQCNAIEBzb3VyY2U6IEAjQFwiRG8gbm90IERpc3R1cmJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERldGFpbHMvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFjdERldGFpbHM6ICdEZXRhbGhlcyBkZSBjb250YXRvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiY29udGFjdERldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIkNvbnRhY3QgRGV0YWlsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGV0YWlsc1ZpZXcvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICfDgXVkaW8nLFxuICBkaWFsQnV0dG9uVm9sdW1lOiAnVm9sdW1lIGRvIGJvdMOjbyBkZSBkaXNjYWdlbScsXG4gIHJpbmd0b25lVm9sdW1lOiAnVm9sdW1lIGRvIHRvcXVlJyxcbiAgY2FsbFZvbHVtZTogJ1ZvbHVtZSBkYSBjaGFtYWRhJyxcbiAgbXV0ZUNhbGxzOiAnQ29sb2NhciBjaGFtYWRhcyBubyBtdWRvJyxcbiAgb3V0cHV0RGV2aWNlOiAnRGlzcG9zaXRpdm8gZGUgc2HDrWRhJyxcbiAgaW5wdXREZXZpY2U6ICdEaXNwb3NpdGl2byBkZSBlbnRyYWRhJyxcbiAgbWljUGVybWlzc2lvbjogJ1Blcm1pc3PDo28gZGUgbWljcm9mb25lJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkF1ZGlvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGlhbEJ1dHRvblZvbHVtZVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbCBCdXR0b24gVm9sdW1lXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ3RvbmVWb2x1bWVcIkAjQCBAc291cmNlOiBAI0BcIlJpbmd0b25lIFZvbHVtZVwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxWb2x1bWVcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgVm9sdW1lXCJAI0Bcbi8vIEBrZXk6IEAjQFwibXV0ZUNhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJNdXRlIENhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0cHV0RGV2aWNlXCJAI0AgQHNvdXJjZTogQCNAXCJPdXRwdXQgRGV2aWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5wdXREZXZpY2VcIkAjQCBAc291cmNlOiBAI0BcIklucHV0IERldmljZVwiQCNAXG4vLyBAa2V5OiBAI0BcIm1pY1Blcm1pc3Npb25cIkAjQCBAc291cmNlOiBAI0BcIk1pY3JvcGhvbmUgUGVybWlzc2lvblwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BdWRpb1NldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdG9waWM6ICdUw7NwaWNvJyxcbiAgd2hlbjogJ1F1YW5kbycsXG4gIGR1cmF0aW9uOiAnRHVyYcOnw6NvJyxcbiAgcmVjdXJyaW5nTWVldGluZzogJ1JldW5pw6NvIHJlY29ycmVudGUnLFxuICByZWN1cnJpbmdEZXNjcmliZTogJ0xlbWJyZS1zZSBkZSB2ZXJpZmljYXIgYSByZWNvcnLDqm5jaWEgb3UgcmVwZXRpciBubyBjb252aXRlIGRlIGNhbGVuZMOhcmlvIHBhcmEgb3MgcGFydGljaXBhbnRlcy4nLFxuICB2aWRlbzogJ1bDrWRlbycsXG4gIHZpZGVvRGVzY3JpYmU6ICdBbyBwYXJ0aWNpcGFyIGRlIHVtYSByZXVuacOjbycsXG4gIGhvc3Q6ICdPcmdhbml6YWRvcicsXG4gIHBhcnRpY2lwYW50czogJ1BhcnRpY2lwYW50ZScsXG4gIGF1ZGlvT3B0aW9uczogJ09ww6fDtWVzIGRlIMOhdWRpbycsXG4gIHZvSVBPbmx5OiAnU29tZW50ZSBWb0lQJyxcbiAgYm90aDogJ0FtYm9zJyxcbiAgbWVldGluZ09wdGlvbnM6ICdPcMOnw7VlcyBkZSByZXVuacOjbycsXG4gIHJlcXVpcmVQYXNzd29yZDogJ0V4aWdpciBzZW5oYSBkYSByZXVuacOjbycsXG4gIHBhc3N3b3JkOiAnU2VuaGEnLFxuICBlbmFibGVKb2luQmVmb3JlSG9zdDogJ0F0aXZhciBwYXJ0aWNpcGHDp8OjbyBhbnRlcyBkZSBvcmdhbml6YXInLFxuICB0ZWxlcGhvbnlPbmx5OiAnU29tZW50ZSB0ZWxlZm9uaWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJ0b3BpY1wiQCNAIEBzb3VyY2U6IEAjQFwiVG9waWNcIkAjQFxuLy8gQGtleTogQCNAXCJ3aGVuXCJAI0AgQHNvdXJjZTogQCNAXCJXaGVuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZHVyYXRpb25cIkAjQCBAc291cmNlOiBAI0BcIkR1cmF0aW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjdXJyaW5nTWVldGluZ1wiQCNAIEBzb3VyY2U6IEAjQFwiUmVjdXJyaW5nIE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJyZWN1cnJpbmdEZXNjcmliZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHJlbWVtYmVyIHRvIGNoZWNrIHJlY3VycmVuY2Ugb3IgcmVwZWF0IGluIHlvdXIgY2FsZW5kYXIgaW52aXRhdGlvbiB0byB5b3VyIGF0dGVuZGVlcy5cIkAjQFxuLy8gQGtleTogQCNAXCJ2aWRlb1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlkZW9cIkAjQFxuLy8gQGtleTogQCNAXCJ2aWRlb0Rlc2NyaWJlXCJAI0AgQHNvdXJjZTogQCNAXCJXaGVuIGpvaW5pbmcgYSBtZWV0aW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG9zdFwiQCNAIEBzb3VyY2U6IEAjQFwiSG9zdFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhcnRpY2lwYW50c1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFydGljaXBhbnRcIkAjQFxuLy8gQGtleTogQCNAXCJhdWRpb09wdGlvbnNcIkAjQCBAc291cmNlOiBAI0BcIkF1ZGlvIE9wdGlvbnNcIkAjQFxuLy8gQGtleTogQCNAXCJ2b0lQT25seVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9JUCBPbmx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYm90aFwiQCNAIEBzb3VyY2U6IEAjQFwiQm90aFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1lZXRpbmdPcHRpb25zXCJAI0AgQHNvdXJjZTogQCNAXCJNZWV0aW5nIE9wdGlvbnNcIkAjQFxuLy8gQGtleTogQCNAXCJyZXF1aXJlUGFzc3dvcmRcIkAjQCBAc291cmNlOiBAI0BcIlJlcXVpcmUgbWVldGluZyBwYXNzd29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhc3N3b3JkXCJAI0AgQHNvdXJjZTogQCNAXCJQYXNzd29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcImVuYWJsZUpvaW5CZWZvcmVIb3N0XCJAI0AgQHNvdXJjZTogQCNAXCJFbmFibGUgam9pbiBiZWZvcmUgaG9zdFwiQCNAXG4vLyBAa2V5OiBAI0BcInRlbGVwaG9ueU9ubHlcIkAjQCBAc291cmNlOiBAI0BcIlRlbGVwaG9ueSBPbmx5XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lZXRpbmdQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdGFydDogJ0Zhw6dhIHVtIHLDoXBpZG8gdG91cicsXG4gIHNraXA6ICdJZ25vcmFyJyxcbiAgbmV4dDogJ1Byw7N4aW1vJyxcbiAgZmluaXNoOiAnRmluYWxpemFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic3RhcnRcIkAjQCBAc291cmNlOiBAI0BcIlRha2UgYSBRdWljayBUb3VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2tpcFwiQCNAIEBzb3VyY2U6IEAjQFwiU2tpcFwiQCNAXG4vLyBAa2V5OiBAI0BcIm5leHRcIkAjQCBAc291cmNlOiBAI0BcIk5leHRcIkAjQFxuLy8gQGtleTogQCNAXCJmaW5pc2hcIkAjQCBAc291cmNlOiBAI0BcIkZpbmlzaFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Vc2VyR3VpZGUvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZ29vZ2xlOiAnR29vZ2xlJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZ29vZ2xlXCJAI0AgQHNvdXJjZTogQCNAXCJHb29nbGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFNvdXJjZUZpbHRlci9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzY2hlZHVsZTogJ0FnZW5kYXInLFxuICBwcm9tcHQ6ICdBdXRvcml6ZSBhIFJpbmdDZW50cmFsIGEgYWNlc3NhciBhcyBpbmZvcm1hw6fDtWVzIGRhIHN1YSBjb250YS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJzY2hlZHVsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU2NoZWR1bGVcIkAjQFxuLy8gQGtleTogQCNAXCJwcm9tcHRcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBhdXRob3JpemUgUmluZ0NlbnRyYWwgdG8gYWNjZXNzIHlvdXIgYWNjb3VudCBpbmZvcm1hdGlvbi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVldGluZ1NjaGVkdWxlQnV0dG9uL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGludml0ZVdpdGhDYWxlbmRhcjogJ0NvbnZpZGFyIGNvbSBvIEdvb2dsZSBDYWxlbmRhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImludml0ZVdpdGhDYWxlbmRhclwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXRlIHdpdGggR29vZ2xlIENhbGVuZGFyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01lZXRpbmdJbnZpdGVCdXR0b24vaTE4bi9wdC1CUi5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW52aXRlV2l0aENhbGVuZGFyOiAnQ29udmlkYXIgY29tIG8gR29vZ2xlIENhbGVuZGFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiaW52aXRlV2l0aENhbGVuZGFyXCJAI0AgQHNvdXJjZTogQCNAXCJJbnZpdGUgd2l0aCBHb29nbGUgQ2FsZW5kYXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29uZmVyZW5jZUludml0ZUJ1dHRvbi9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRob3JpemU6ICdBdXRvcml6YXInLFxuICBwcm9tcHQ6ICdQZXJtaXRhIHF1ZSB7YnJhbmR9IGFjZXNzZSBhcyBpbmZvcm1hw6fDtWVzIGRhIHN1YSBjb250YSBkbyBHb29nbGUuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYXV0aG9yaXplXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRob3JpemVcIkAjQFxuLy8gQGtleTogQCNAXCJwcm9tcHRcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBhdXRob3JpemUge2JyYW5kfSB0byBhY2Nlc3MgeW91ciBHb29nbGUgYWNjb3VudCBpbmZvcm1hdGlvbi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IGF1dGhvcml6YXRpb25FcnJvciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFthdXRob3JpemF0aW9uRXJyb3IuYWNjb3VudExvZ2dlZE91dF06ICdQZXJjZWJlbW9zIHF1ZSB2b2PDqiBzYWl1IGRhIHN1YSBjb250YSBkbyBHb29nbGUge2FjY291bnRFbWFpbH0uIFBhcmEgY29udGludWFyLCB7Y2xpY2tIZXJlTGlua30gZmHDp2EgbyBsb2dpbiBuYSBzdWEgY29udGEgZG8gR29vZ2xlLicsXG4gIGNsaWNrSGVyZTogJ2NsaXF1ZSBhcXVpJyxcbiAgW2F1dGhvcml6YXRpb25FcnJvci5ub3RBdXRob3JpemVkXTogJ1BlcmNlYmVtb3MgcXVlIHZvY8OqIG7Do28gYXV0b3Jpem91IHF1ZSB7YnJhbmR9IGFjZXNzZSBzdWEgY29udGEgZG8gR29vZ2xlLiB7Y2xpY2tIZXJlTGlua30gcGFyYSBhdXRvcml6YXIuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2F1dGhvcml6YXRpb25FcnJvci5hY2NvdW50TG9nZ2VkT3V0XVwiQCNAIEBzb3VyY2U6IEAjQFwiV2Ugbm90aWNlZCB5b3UgaGF2ZSBsb2dnZWQgb3V0IHlvdXIgR29vZ2xlIGFjY291bnQge2FjY291bnRFbWFpbH0uIFRvIGNvbnRpbnVlIHBsZWFzZSB7Y2xpY2tIZXJlTGlua30gdG8gbG9naW4geW91ciBHb29nbGUgYWNjb3VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja0hlcmVcIkAjQCBAc291cmNlOiBAI0BcImNsaWNrIGhlcmVcIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aG9yaXphdGlvbkVycm9yLm5vdEF1dGhvcml6ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJXZSBub3RpY2VkIHlvdSBoYXZlbid0IGF1dGhvcml6ZWQge2JyYW5kfSBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIEdvb2dsZSBhY2NvdW50LiBQbGVhc2Uge2NsaWNrSGVyZUxpbmt9IHRvIGF1dGhvcml6ZS5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbkFsZXJ0L2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vUmVjb3JkczogJ05lbmh1bSByZWdpc3RybyByZWNlbnRlIGVuY29udHJhZG8uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZWNlbnQgcmVjb3JkcyBmb3VuZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjZW50QWN0aXZpdHlNZXNzYWdlcy9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdOZW5odW0gcmVnaXN0cm8gcmVjZW50ZSBlbmNvbnRyYWRvLicsXG4gIGluQm91bmQ6ICdFbnRyYWRhJyxcbiAgb3V0Qm91bmQ6ICdTYcOtZGEnLFxuICBtaXNzZWQ6ICdDaGFtYWRhIHBlcmRpZGEnLFxufTtcblxuLy8gQGtleTogQCNAXCJub1JlY29yZHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIHJlY2VudCByZWNvcmRzIGZvdW5kLlwiQCNAXG4vLyBAa2V5OiBAI0BcImluQm91bmRcIkAjQCBAc291cmNlOiBAI0BcIkluYm91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRCb3VuZFwiQCNAIEBzb3VyY2U6IEAjQFwiT3V0Ym91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJtaXNzZWRcIkAjQCBAc291cmNlOiBAI0BcIk1pc3NlZCBDYWxsXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2VudEFjdGl2aXR5Q2FsbHMvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVjZW50QWN0aXZpdGllczogJ0F0aXZpZGFkZXMgcmVjZW50ZXMnLFxuICB0ZXh0OiAnVGV4dG8nLFxuICBmYXg6ICdGYXgnLFxuICB2b2ljZW1haWw6ICdDYWl4YSBwb3N0YWwnLFxuICBjYWxsOiAnQ2hhbWFkYScsXG4gIGdtYWlsOiAnR21haWwnLFxufTtcblxuLy8gQGtleTogQCNAXCJyZWNlbnRBY3Rpdml0aWVzXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNlbnQgQWN0aXZpdGllc1wiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJmYXhcIkAjQCBAc291cmNlOiBAI0BcIkZheFwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImdtYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJHbWFpbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWNlbnRBY3Rpdml0eUNvbnRhaW5lci9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdOZW5odW0gcmVnaXN0cm8gcmVjZW50ZSBlbmNvbnRyYWRvLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vUmVjb3Jkc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjZW50IHJlY29yZHMgZm91bmQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5RW1haWxzL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRpYWxwYWRMYWJlbDogJ1RlY2xhZG8gZGUgZGlzY2FnZW0nLFxuICBjYWxsc0xhYmVsOiAnQ2hhbWFkYXMnLFxuICBoaXN0b3J5TGFiZWw6ICdIaXN0w7NyaWNvJyxcbiAgbWVzc2FnZXNMYWJlbDogJ01lbnNhZ2VucycsXG4gIG1vcmVNZW51TGFiZWw6ICdNZW51IE1haXMnLFxuICBjb250YWN0c0xhYmVsOiAnQ29udGF0b3MnLFxuICBtZWV0aW5nTGFiZWw6ICdBZ2VuZGFyIHJldW5pw7VlcycsXG4gIGNvbmZlcmVuY2VMYWJlbDogJ0FnZW5kYXIgY29uZmVyw6puY2lhJyxcbiAgaGFuZ291dHNMYWJlbDogJ0luaWNpYXIgSGFuZ291dHMnLFxuICBoYW5nb3V0c1RpdGxlOiAnSW5pY2lhciBIYW5nb3V0cyBjb20gc2lzdGVtYSBkZSBjb25mZXLDqm5jaWEnLFxuICBzZXR0aW5nc0xhYmVsOiAnQ29uZmlndXJhw6fDtWVzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZGlhbHBhZExhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsIFBhZFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxzTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaGlzdG9yeUxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJIaXN0b3J5XCJAI0Bcbi8vIEBrZXk6IEAjQFwibWVzc2FnZXNMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiTWVzc2FnZXNcIkAjQFxuLy8gQGtleTogQCNAXCJtb3JlTWVudUxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJNb3JlIE1lbnVcIkAjQFxuLy8gQGtleTogQCNAXCJjb250YWN0c0xhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJDb250YWN0c1wiQCNAXG4vLyBAa2V5OiBAI0BcIm1lZXRpbmdMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiU2NoZWR1bGUgTWVldGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImNvbmZlcmVuY2VMYWJlbFwiQCNAIEBzb3VyY2U6IEAjQFwiU2NoZWR1bGUgQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcImhhbmdvdXRzTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlN0YXJ0IEhhbmdvdXRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaGFuZ291dHNUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU3RhcnQgSGFuZ291dHMgd2l0aCBDb25mZXJlbmNpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJzZXR0aW5nc0xhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5nc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYWluVmlldy9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvZmZsaW5lTW9kZTogJ01vZG8gb2ZmbGluZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm9mZmxpbmVNb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJPZmZsaW5lIE1vZGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB3ZWJwaG9uZVVuYXZhaWxhYmxlOiAnVGVsZWZvbmUgZGEgV2ViIGluZGlzcG9uw612ZWwnLFxufTtcblxuLy8gQGtleTogQCNAXCJ3ZWJwaG9uZVVuYXZhaWxhYmxlXCJAI0AgQHNvdXJjZTogQCNAXCJXZWIgUGhvbmUgVW5hdmFpbGFibGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvV2VicGhvbmVCYWRnZS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBldWxhOiAnQ29udHJhdG8gZGUgbGljZW7Dp2EgZG8gdXN1w6FyaW8gZmluYWwnLFxuICBzZXJ2aWNlVGVybXM6ICdUZXJtb3MgZGUgc2VydmnDp28nLFxufTtcblxuLy8gQGtleTogQCNAXCJldWxhXCJAI0AgQHNvdXJjZTogQCNAXCJFbmQgVXNlciBMaWNlbnNlIEFncmVlbWVudFwiQCNAXG4vLyBAa2V5OiBAI0BcInNlcnZpY2VUZXJtc1wiQCNAIEBzb3VyY2U6IEAjQFwiU2VydmljZSBUZXJtc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FdWxhL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgcHJlc2VuY2VTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9wcmVzZW5jZVN0YXR1cyc7XG5pbXBvcnQgZG5kU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcHJlc2VuY2VTdGF0dXMuYXZhaWxhYmxlXTogJ0Rpc3BvbsOtdmVsJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3ldOiAnT2N1cGFkbycsXG4gIFtwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXTogJ0ludmlzw612ZWwnLFxuICBbZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdOiAnTsOjbyBwZXJ0dXJiZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdXCJAI0AgQHNvdXJjZTogQCNAXCJBdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMuYnVzeV1cIkAjQCBAc291cmNlOiBAI0BcIkJ1c3lcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMub2ZmbGluZV1cIkAjQCBAc291cmNlOiBAI0BcIkludmlzaWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc11cIkAjQCBAc291cmNlOiBAI0BcIkRvIG5vdCBEaXN0dXJiXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1ByZXNlbmNlSXRlbS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0dXM6ICdTdGF0dXMnLFxuICBhY2NlcHRRdWV1ZUNhbGxzOiAnQWNlaXRhciBjaGFtYWRhcyBlbSBmaWxhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic3RhdHVzXCJAI0AgQHNvdXJjZTogQCNAXCJTdGF0dXNcIkAjQFxuLy8gQGtleTogQCNAXCJhY2NlcHRRdWV1ZUNhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJBY2NlcHQgY2FsbCBxdWV1ZSBjYWxsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9QcmVzZW5jZVNldHRpbmdTZWN0aW9uL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVuOiAnRW5nbGlzaCcsXG4gIGphOiAnSmFwYW5lc2UnLFxuICBmcjogJ0ZyYW5jw6pzJyxcbiAgZGU6ICdEZXV0c2NoJyxcbiAgZXM6ICdFc3BhbmhvbCcsXG4gIGl0OiAnSXRhbGlhbm8nLFxuICBwdDogJ1BvcnR1Z3XDqnMnLFxufTtcclxuXG4vLyBAa2V5OiBAI0BcImVuXCJAI0AgQHNvdXJjZTogQCNAXCJFbmdsaXNoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiamFcIkAjQCBAc291cmNlOiBAI0BcIkphcGFuZXNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJcIkAjQCBAc291cmNlOiBAI0BcIkZyZW5jaFwiQCNAXG4vLyBAa2V5OiBAI0BcImRlXCJAI0AgQHNvdXJjZTogQCNAXCJEZXV0c2NoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZXNcIkAjQCBAc291cmNlOiBAI0BcIlNwYW5pc2hcIkAjQFxuLy8gQGtleTogQCNAXCJpdFwiQCNAIEBzb3VyY2U6IEAjQFwiSXRhbGlhblwiQCNAXG4vLyBAa2V5OiBAI0BcInB0XCJAI0AgQHNvdXJjZTogQCNAXCJQb3J0dWd1ZXNlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWdpb246ICdSZWdpw6NvJyxcbiAgY2FsbGluZzogJ0NoYW1hZGFzJyxcbiAgbG9nb3V0OiAnTG9nb3V0JyxcbiAgdmVyc2lvbjogJ1ZlcnPDo28nLFxuICBzZXR0aW5nczogJ0NvbmZpZ3VyYcOnw7VlcycsXG4gIGNsaWNrVG9EaWFsOiAnQ2xpcXVlIHBhcmEgZGlzY2FyJyxcbiAgYXV0b0NyZWF0ZUxvZzogJ0NyaWFyIGxvZyBkZSBjaGFtYWRhcyBhdXRvbWF0aWNhbWVudGUnLFxuICBhdXRvQ3JlYXRlU01TTG9nOiAnQ3JpYXIgbG9nIGRlIFNNUyBhdXRvbWF0aWNhbWVudGUnLFxuICBhdXRvTG9nQ2FsbHM6ICdSZWdpc3RyYXIgY2hhbWFkYXMgYXV0b21hdGljYW1lbnRlJyxcbiAgYXV0b0xvZ1NNUzogJ1JlZ2lzdHJhciBTTVMgYXV0b21hdGljYW1lbnRlJyxcbiAgY2xpY2tUb1NNUzogJ0NsaWNhciBwYXJhIGVudmlhciBtZW5zYWdlbSBkZSB0ZXh0bycsXG4gIGNsaWNrVG9EaWFsU01TOiAnQ2xpcXVlIHBhcmEgZGlzY2FyL2VudmlhciBtZW5zYWdlbSBkZSB0ZXh0bycsXG4gIGF1ZGlvOiAnw4F1ZGlvJyxcbiAgbGFuZ3VhZ2U6ICdJZGlvbWEnLFxuICBmZWVkYmFjazogJ0NvbWVudMOhcmlvcycsXG4gIHVzZXJHdWlkZTogJ05vdmlkYWRlcycsXG59O1xuXG5cbi8vIEBrZXk6IEAjQFwicmVnaW9uXCJAI0AgQHNvdXJjZTogQCNAXCJSZWdpb25cIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsaW5nXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwibG9nb3V0XCJAI0AgQHNvdXJjZTogQCNAXCJMb2dvdXRcIkAjQFxuLy8gQGtleTogQCNAXCJ2ZXJzaW9uXCJAI0AgQHNvdXJjZTogQCNAXCJWZXJzaW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2V0dGluZ3NcIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2xpY2tUb0RpYWxcIkAjQCBAc291cmNlOiBAI0BcIkNsaWNrIHRvIERpYWxcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRvQ3JlYXRlTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRvLWNyZWF0ZSBDYWxsIExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9DcmVhdGVTTVNMb2dcIkAjQCBAc291cmNlOiBAI0BcIkF1dG8tY3JlYXRlIFNNUyBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRvTG9nQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIkF1dG8gbG9nIGNhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0b0xvZ1NNU1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0byBsb2cgU01TXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2xpY2tUb1NNU1wiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gU01TXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2xpY2tUb0RpYWxTTVNcIkAjQCBAc291cmNlOiBAI0BcIkNsaWNrIHRvIERpYWwvU01TXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXVkaW9cIkAjQCBAc291cmNlOiBAI0BcIkF1ZGlvXCJAI0Bcbi8vIEBrZXk6IEAjQFwibGFuZ3VhZ2VcIkAjQCBAc291cmNlOiBAI0BcIkxhbmd1YWdlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmVlZGJhY2tcIkAjQCBAc291cmNlOiBAI0BcIkZlZWRiYWNrXCJAI0Bcbi8vIEBrZXk6IEAjQFwidXNlckd1aWRlXCJAI0AgQHNvdXJjZTogQCNAXCJXaGF0J3MgTmV3XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5hdXRob3JpemVkOiAnQXV0b3JpemFyJyxcbiAgYXV0aG9yaXplZDogJ0NhbmNlbGFyIGF1dG9yaXphw6fDo28nLFxuICB1bmF1dGhvcml6ZWRUaXRsZTogJ0NvbnRhIGF1dG9yaXphZGEnLFxuICB0b29sdGlwOiAnVm9jw6ogYXV0b3Jpem91IG8gUmluZ0NlbnRyYWwgZm9yIEdvb2dsZSBhIGFjZXNzYXIgc3VhIGNvbnRhICcsXG59O1xuXG4vLyBAa2V5OiBAI0BcInVuYXV0aG9yaXplZFwiQCNAIEBzb3VyY2U6IEAjQFwiQXV0aG9yaXplXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0aG9yaXplZFwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdXRob3JpemVcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF1dGhvcml6ZWRUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQXV0aG9yaXplZCBBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwidG9vbHRpcFwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGhhdmUgYXV0aG9yaXplZCBSaW5nQ2VudHJhbCBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIGFjY291bnQgXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0F1dGhvcml6ZVNldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkTWVldGluZzogJ0FkaWNpb25hciByZXVuacOjbycsXG4gIGFkZE1lZXRpbmdUaXRsZTogJ0FkaWNpb25hciB7YnJhbmR9IHJldW5pw6NvJyxcbiAgbWVldGluZ1NldHRpbmdzVGl0bGU6ICd7YnJhbmR9IE1lZXRpbmdzIC0gQ29uZmlndXJhw6fDtWVzJyxcbiAgd2hlbjogJ1F1YW5kbycsXG4gIHJlY3VycmluZ01lZXRpbmc6ICdSZXVuacOjbyByZWNvcnJlbnRlJyxcbiAgcmVjdXJyaW5nTWVldGluZ1Byb21wdDogJ0xlbWJyZS1zZSBkZSB2ZXJpZmljYXIgYSByZWNvcnLDqm5jaWEgb3UgcmVwZXRpciBubyBjb252aXRlIGRlIGNhbGVuZMOhcmlvIHBhcmEgb3MgcGFydGljaXBhbnRlcy4nLFxuICB2aWRlbzogJ1bDrWRlbyAoYW8gZW50cmFyIGVtIHVtYSByZXVuacOjbyknLFxuICBob3N0OiAnT3JnYW5pemFkb3I6JyxcbiAgb246ICdhdGl2YWRvJyxcbiAgb2ZmOiAnZGVzYXRpdmFkbycsXG4gIHBhcnRpY2lwYW50OiAnUGFydGljaXBhbnRlOicsXG4gIGF1ZGlvT3B0aW9uczogJ09ww6fDtWVzIGRlIMOhdWRpbycsXG4gIHRlbGVwaG9uZTogJ1NvbWVudGUgdGVsZWZvbmlhJyxcbiAgdm9pcDogJ1NvbWVudGUgVm9JUCcsXG4gIGJvdGg6ICdBbWJvcycsXG4gIG1lZXRpbmdPcHRpb25zOiAnT3DDp8O1ZXMgZGUgcmV1bmnDo28nLFxuICByZXF1aXJlUGFzc3dvcmQ6ICdFeGlnaXIgc2VuaGEgZGEgcmV1bmnDo28nLFxuICBqb2luQmVmb3JlSG9zdDogJ0F0aXZhciBwYXJ0aWNpcGHDp8OjbyBhbnRlcyBkZSBvcmdhbml6YXInLFxuICBkb05vdFNob3dBZ2FpbjogJ1NhbHZhciBlIG7Do28gbW9zdHJhciBub3ZhbWVudGUnLFxuICBzY2hlZHVsZTogJ0FnZW5kYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJhZGRNZWV0aW5nXCJAI0AgQHNvdXJjZTogQCNAXCJBZGQgTWVldGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZE1lZXRpbmdUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQWRkIHticmFuZH0gTWVldGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIm1lZXRpbmdTZXR0aW5nc1RpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJ7YnJhbmR9IE1lZXRpbmdzIC0gU2V0dGluZ3NcIkAjQFxuLy8gQGtleTogQCNAXCJ3aGVuXCJAI0AgQHNvdXJjZTogQCNAXCJXaGVuXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjdXJyaW5nTWVldGluZ1wiQCNAIEBzb3VyY2U6IEAjQFwiUmVjdXJyaW5nIE1lZXRpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJyZWN1cnJpbmdNZWV0aW5nUHJvbXB0XCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgcmVtZW1iZXIgdG8gY2hlY2sgcmVjdXJyZW5jZSBvciByZXBlYXQgaW4geW91ciBjYWxlbmRhciBpbnZpdGF0aW9uIHRvIHlvdXIgYXR0ZW5kZWVzLlwiQCNAXG4vLyBAa2V5OiBAI0BcInZpZGVvXCJAI0AgQHNvdXJjZTogQCNAXCJWaWRlbyh3aGVuIGpvaW5pbmcgYSBtZWV0aW5nKVwiQCNAXG4vLyBAa2V5OiBAI0BcImhvc3RcIkAjQCBAc291cmNlOiBAI0BcIkhvc3Q6XCJAI0Bcbi8vIEBrZXk6IEAjQFwib25cIkAjQCBAc291cmNlOiBAI0BcIm9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwib2ZmXCJAI0AgQHNvdXJjZTogQCNAXCJvZmZcIkAjQFxuLy8gQGtleTogQCNAXCJwYXJ0aWNpcGFudFwiQCNAIEBzb3VyY2U6IEAjQFwiUGFydGljaXBhbnQ6XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXVkaW9PcHRpb25zXCJAI0AgQHNvdXJjZTogQCNAXCJBdWRpbyBPcHRpb25zXCJAI0Bcbi8vIEBrZXk6IEAjQFwidGVsZXBob25lXCJAI0AgQHNvdXJjZTogQCNAXCJUZWxlcGhvbnkgT25seVwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaXBcIkAjQCBAc291cmNlOiBAI0BcIlZvSVAgT25seVwiQCNAXG4vLyBAa2V5OiBAI0BcImJvdGhcIkAjQCBAc291cmNlOiBAI0BcIkJvdGhcIkAjQFxuLy8gQGtleTogQCNAXCJtZWV0aW5nT3B0aW9uc1wiQCNAIEBzb3VyY2U6IEAjQFwiTWVldGluZyBPcHRpb25zXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVxdWlyZVBhc3N3b3JkXCJAI0AgQHNvdXJjZTogQCNAXCJSZXF1aXJlIG1lZXRpbmcgcGFzc3dvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJqb2luQmVmb3JlSG9zdFwiQCNAIEBzb3VyY2U6IEAjQFwiRW5hYmxlIGpvaW4gYmVmb3JlIGhvc3RcIkAjQFxuLy8gQGtleTogQCNAXCJkb05vdFNob3dBZ2FpblwiQCNAIEBzb3VyY2U6IEAjQFwiU2F2ZSBhbmQgZG8gbm90IHNob3cgYWdhaW5cIkAjQFxuLy8gQGtleTogQCNAXCJzY2hlZHVsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU2NoZWR1bGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgbWVzc2FnZVR5cGVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2VudW1zL21lc3NhZ2VUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5jb21pbmdDYWxsOiAnQ2hhbWFkYSByZWNlYmlkYSBkZTonLFxuICBhbnN3ZXI6ICdSZXNwb25kZXInLFxuICBpZ25vcmU6ICdJZ25vcmFyJyxcbiAgaW5ib3VuZE1lc3NhZ2U6ICdOb3ZhIHttZXNzYWdlVHlwZX0gZGUge2Zyb219JyxcbiAgW21lc3NhZ2VUeXBlcy5mYXhdOiAnZmF4JyxcbiAgW21lc3NhZ2VUeXBlcy52b2ljZU1haWxdOiAnY29ycmVpbyBkZSB2b3onLFxuICBbbWVzc2FnZVR5cGVzLnRleHRdOiAnbWVuc2FnZW0gZGUgdGV4dG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJpbmNvbWluZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluY29taW5nIENhbGwgRnJvbTpcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlclwiQCNAXG4vLyBAa2V5OiBAI0BcImlnbm9yZVwiQCNAIEBzb3VyY2U6IEAjQFwiSWdub3JlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZE1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIk5ldyB7bWVzc2FnZVR5cGV9IGZyb20ge2Zyb219XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzQ2FsbGVyXCJAI0AgQHNvdXJjZTogQCNAXCJhbm9ueW1vdXMgcGVyc29uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy5mYXhdXCJAI0AgQHNvdXJjZTogQCNAXCJmYXhcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcInZvaWNlbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudGV4dF1cIkAjQCBAc291cmNlOiBAI0BcInRleHQgbWVzc2FnZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL3B0LUJSLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICdidXNpbmVzcycsXHJcbiAgJ2V4dGVuc2lvbicsXHJcbiAgJ2hvbWUnLFxyXG4gICdtb2JpbGUnLFxyXG4gICdwaG9uZScsXHJcbiAgJ3Vua25vd24nLFxyXG4gICdjb21wYW55JyxcclxuICAnZGlyZWN0JyxcclxuXSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlbnVtcy9waG9uZVR5cGVzLmpzIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSAnLi4vbGliL0hhc2hNYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xyXG4gIGFsbDogJ0FsbCcsXHJcbiAgZmF4OiAnRmF4JyxcclxuICBzbXM6ICdTTVMnLFxyXG4gIHZvaWNlTWFpbDogJ1ZvaWNlTWFpbCcsXHJcbiAgcGFnZXI6ICdQYWdlcicsXHJcbiAgdGV4dDogJ1RleHQnLFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVudW1zL21lc3NhZ2VUeXBlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc29mdHBob25lJywgLy8gZGVza3RvcFxuICAnbXlwaG9uZScsIC8vIHJpbmdvdXQgYnJhbmRpbmcgcmMuLlxuICAnb3RoZXJwaG9uZScsIC8vIHJpbmdvdXRcbiAgJ2N1c3RvbXBob25lJywgLy8gcmluZ291dFxuICAnYnJvd3NlcicsIC8vIHdlYnBob25lXG5dLCAnY2FsbGluZ09wdGlvbnMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucy5qcyIsImltcG9ydCBIYXNoTWFwIGZyb20gJy4uLy4uL2xpYi9IYXNoTWFwJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xuICB0YWtlQWxsQ2FsbHM6ICdUYWtlQWxsQ2FsbHMnLFxuICBkb05vdEFjY2VwdEFueUNhbGxzOiAnRG9Ob3RBY2NlcHRBbnlDYWxscycsXG4gIGRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzOiAnRG9Ob3RBY2NlcHREZXBhcnRtZW50Q2FsbHMnLFxuICB0YWtlRGVwYXJ0bWVudENhbGxzT25seTogJ1Rha2VEZXBhcnRtZW50Q2FsbHNPbmx5Jyxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdub1RvTnVtYmVyJyxcbiAgJ25vQXJlYUNvZGUnLFxuICAnc3BlY2lhbE51bWJlcicsXG4gICdjb25uZWN0RmFpbGVkJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vUmluZ291dEVuYWJsZScsXG5dLCAnY2FsbEVycm9ycycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQ2FsbC9jYWxsRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzZW5kU3VjY2VzcycsXG4gICdzZW5kRXJyb3InLFxuICAnbnVtYmVyVmFsaWRhdGVFcnJvcicsXG4gICd0ZXh0RW1wdHknLFxuICAndGV4dFRvb0xvbmcnLFxuICAnbm9QZXJtaXNzaW9uJyxcbiAgJ3NlbmRlckVtcHR5JyxcbiAgJ25vVG9OdW1iZXInLFxuICAncmVjaXBpZW50c0VtcHR5JyxcbiAgJ3JlY2lwaWVudE51bWJlckludmFsaWRzJyxcbiAgJ3NlbmRlck51bWJlckludmFsaWQnLFxuICAnbm9BcmVhQ29kZScsXG4gICdzcGVjaWFsTnVtYmVyJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vdFNtc1RvRXh0ZW5zaW9uJyxcbiAgJ2ludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQnLFxuICAnbm9JbnRlcm5hbFNNU1Blcm1pc3Npb24nLFxuICAnc2VuZGluZydcbl0sICdtZXNzYWdlLXNlbmRlci1tc2cnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lc3NhZ2VTZW5kZXIvbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkTWVldGluZ0luZm8nLFxuICAnZW1wdHlUb3BpYycsXG4gICdub1Bhc3N3b3JkJyxcbiAgJ2R1cmF0aW9uSW5jb3JyZWN0JyxcbiAgJ3NjaGVkdWxlZFN1Y2Nlc3MnLFxuXSwgJ21lZXRpbmdTdGF0dXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lZXRpbmcvbWVldGluZ1N0YXR1cy5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmZyZWV6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICBjb25maXJtOiAnQ29uZmlybWFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiY2FuY2VsXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5jZWxcIkAjQFxuLy8gQGtleTogQCNAXCJjb25maXJtXCJAI0AgQHNvdXJjZTogQCNAXCJDb25maXJtXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01vZGFsL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgSGFzaE1hcCBmcm9tICcuLi8uLi9saWIvSGFzaE1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIYXNoTWFwKHtcbiAgb2ZmbGluZTogJ09mZmxpbmUnLFxuICBidXN5OiAnQnVzeScsXG4gIGF2YWlsYWJsZTogJ0F2YWlsYWJsZScsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdlbXB0eVBhc3N3b3JkJyxcbiAgJ2VtcHR5VXNlcm5hbWUnLFxuICAnc2Vzc2lvbkV4cGlyZWQnLFxuICAnYmVmb3JlTG9nb3V0RXJyb3InLFxuICAnbG9naW5FcnJvcicsXG4gICdsb2dvdXRFcnJvcicsXG4gICdhY2Nlc3NEZW5pZWQnLFxuICAnaW50ZXJuYWxFcnJvcicsXG5dLCAnYXV0aE1lc3NhZ2VzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc2F2ZVN1Y2Nlc3MnLFxuICAnc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lJyxcbiAgJ3Blcm1pc3Npb25DaGFuZ2VkJyxcbiAgJ3Bob25lTnVtYmVyQ2hhbmdlZCcsXG4gICd3ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkJyxcbiAgJ2VtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUnLFxuXSwgJ2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuanMiLCJpbXBvcnQgRW51bSBmcm9tICcuLi8uLi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ2Rpc2Nvbm5lY3RlZCcsXG5dLCAnY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2UnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0Nvbm5lY3Rpdml0eU1vbml0b3IvY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzYXZlU3VjY2VzcycsXG4gICdkaWFsaW5nUGxhbnNDaGFuZ2VkJyxcbiAgJ2FyZWFDb2RlSW52YWxpZCcsXG5dLCAncmVnaW9uU2V0dGluZ3NNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUmVnaW9uU2V0dGluZ3MvcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnY29ubmVjdEZhaWxlZCcsXG4gICdjb25uZWN0ZWQnLFxuICAnYnJvd3Nlck5vdFN1cHBvcnRlZCcsXG4gICd3ZWJwaG9uZUNvdW50T3ZlckxpbWl0JyxcbiAgJ3dlYnBob25lRm9yYmlkZGVuJyxcbiAgJ25vdE91dGJvdW5kQ2FsbFdpdGhvdXRETCcsXG4gICdub3RXZWJwaG9uZVBlcm1pc3Npb24nLFxuICAnZ2V0U2lwUHJvdmlzaW9uRXJyb3InLFxuICAndG9Wb2ljZU1haWxFcnJvcicsXG4gICdjaGVja0RMRXJyb3InLFxuICAnZm9yd2FyZEVycm9yJyxcbiAgJ211dGVFcnJvcicsXG4gICdob2xkRXJyb3InLFxuICAnZmxpcEVycm9yJyxcbiAgJ3JlY29yZEVycm9yJyxcbiAgJ3JlY29yZERpc2FibGVkJyxcbiAgJ3RyYW5zZmVyRXJyb3InLFxuICAncmVxdWVzdFRpbWVvdXQnLFxuICAnc2VydmVyVGltZW91dCcsXG4gICdpbnRlcm5hbFNlcnZlckVycm9yJyxcbiAgJ3NpcFByb3Zpc2lvbkVycm9yJyxcbiAgJ3Vua25vd25FcnJvcicsXG5dLCAnd2VicGhvbmUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkVGllcicsXG5dLCAncGVybWlzc2lvbnNNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdkZWxldGVGYWlsZWQnLFxuICAncmVhZEZhaWxlZCcsXG4gICd1bnJlYWRGYWlsZWQnLFxuXSwgJ21lc3NhZ2VTdG9yZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvTWVzc2FnZVN0b3JlL21lc3NhZ2VTdG9yZUVycm9ycy5qcyIsImltcG9ydCBFbnVtIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnYWNjb3VudExvZ2dlZE91dCcsXG4gICdub3RBdXRob3JpemVkJ1xuXSwgJ2F1dGhvcml6YXRpb25FcnJvcicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2F1dGhvcml6YXRpb25FcnJvci5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAncmVxdWlyZUFkaXRpb25hbE51bWJlcnMnLFxuXSwgJ2NvbmZlcmVuY2UtbXNnJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9Db25mZXJlbmNlL21lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICd1c2VyTWVkaWFQZXJtaXNzaW9uJyxcclxuXSwgJ2F1ZGlvU2V0dGluZ3MnKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQXVkaW9TZXR0aW5ncy9hdWRpb1NldHRpbmdzRXJyb3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSJdLCJzb3VyY2VSb290IjoiIn0=