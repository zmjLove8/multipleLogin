webpackJsonp([7],{

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

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Call with {brand}',
  smsTitle: 'SMS with {brand}'
};

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  signInErrorMsg: 'To proceed, please log in the account that you have authorized {brand} for Google to access.'
};

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteMeetingContent: '{accountName} is inviting you to a {brandName} meeting.\n\nJoin from PC, Mac, iOS or Android: {joinUri}{passwordTpl}\n\nOr iPhone one-tap:\n     {mobileDialingNumberTpl}\n\nOr Telephone:\n     Dial:{phoneDialingNumberTpl}\n     Meeting ID: {meetingId}\n     International numbers available: {teleconference}',
  password: 'Password'
};

/***/ }),

/***/ 1125:
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

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Login failed due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Access denied. Please contact support.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Session expired. Please sign in.'), _authMessages$interna);


/***/ }),

/***/ 1137:
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

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Dialing emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options\n    please contact your account administrator for an upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'area code'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'Emergency dialing is not supported.'), _callErrors$noToNumbe);


/***/ }),

/***/ 1149:
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

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Your permissions have been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'Your phone number information has been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Settings > Calling'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number.'), _callingSettingsMessa);


/***/ }),

/***/ 1161:
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
  region: 'Region'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'region settings'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Please enter a valid area code.'), _region$regionSetting);


/***/ }),

/***/ 1173:
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

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Send Success.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Something wrong happened when send message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Phone Number Validate Error.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Please enter the text to be sent.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'You have no permission to send message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'You must select a number from your phone numbers to send'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Invalid phone number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Please enter a valid receiver number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Text is too long, 1000 Limited'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Dialing emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'You don\'t have permission to send messages to recipients outside of your organization. Please contact your RingCentral account administrator for upgrade.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Sending SMS to international phone number is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noInternalSMSPermission, 'You don\'t have permission to send messages. Please contact your RingCentral account administrator for upgrade.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'area code'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sending, 'Message being sent…It may take a couple of minutes to complete.'), _messageSenderMessage);


/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Request limit exceeded. App will resume in {ttl} seconds.'
};


/***/ }),

/***/ 1197:
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

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'Network connection is lost.');


/***/ }),

/***/ 1209:
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

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Connect with web phone server failed.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Web phone registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Calling with browser is only supported on Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'A maximum of 5 web phones could be registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'You have no permission to send message.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'Cannot send call to voicemail due to internal error'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'Call cannot be muted at the moment.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'Call cannot be hold at the moment.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'Cannot flip the call. Please try again later.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'You cannot record the call at the moment. Error code: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'Sorry, your account does not have the feature to record a call. Please contact your account administrator.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'Cannot transfer the call. Please try again later.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'webphoneUnavailable', '{error}. We are reconnecting to server. If the error persists, please report this error to {brandName} Support.'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'errorCode', 'Internal error code: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, 'occurs', 'Internal error occurs'), _webphoneErrors$conne);


/***/ }),

/***/ 1221:
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

exports.default = (0, _defineProperty3.default)({}, _messageStoreErrors2.default.deleteFailed, 'Cannot delete the voicemail due to internal server error.');


/***/ }),

/***/ 1233:
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

exports.default = (_meetingStatus$emptyT = {}, (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.emptyTopic, 'Please enter meeting topic.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.noPassword, 'Please provide meeting password.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.scheduledSuccess, 'Meeting is scheduled.'), _meetingStatus$emptyT);


/***/ }),

/***/ 1244:
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

exports.default = (0, _defineProperty3.default)({}, _audioSettingsErrors2.default.userMediaPermission, 'Please grant {brandName} for Google to access your audio.');


/***/ }),

/***/ 1256:
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

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition.');


/***/ }),

/***/ 1268:
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

exports.default = (0, _defineProperty3.default)({}, _messages2.default.requireAditionalNumbers, 'Please select the additional dial-in numbers.');


/***/ }),

/***/ 1280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Sign In',
  version: 'Version'
};


/***/ }),

/***/ 1292:
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
  title: 'Calling'
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} for Desktop'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'My {brand} Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Other Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Custom Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Browser'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Make my calls with'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Ring me at my location first, then connect the called party'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'My Location'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Prompt me to dial 1 before connecting the call'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser + 'Tooltip', 'Use this option to make and receive calls using your computer’s microphone and speaker.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone + 'Tooltip', 'Use this option to make and receive calls using your {brand} for Desktop app.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip', 'Use this option to make calls using your {brand} phone.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip1', 'For the call you make, your {brand} phone will ring first then the party you called.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip', 'Use this option to make calls using your other phones such as home or cell phones that you have added in your {brand} Extension.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip1', 'For the call you make, this phone will ring first then the party you called.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip', 'Use this option to make calls using any phone of your choice by entering a valid phone number in the field below.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip1', 'For the call you make, this phone will ring first then the party you called.'), _title$callingOptions);


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

/***/ 1304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Save'
};


/***/ }),

/***/ 1316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Region',
  NAOnlyMessage: 'Please set your area code. This will be used for local dialing.',
  MultiWithNAMessage: 'Please set the country and area code for your region. This will be used for local dialing and phone number formatting.',
  MultiWithoutNAMessage: 'Please select the country you locate in. This will be used for local dialing and phone number formatting.',
  country: 'Country',
  areaCode: 'Area Code',
  areaCodePlaceholder: 'Enter Area Code'
};


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(807), __esModule: true };

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  AR: 'Argentina',
  AT: 'Austria',
  BH: 'Bahrain',
  BR: 'Brazil',
  BG: 'Bulgaria',
  CA: 'Canada',
  CL: 'Chile',
  CN: 'China',
  HR: 'Croatia',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DO: 'Dominican Republic',
  EE: 'Estonia',
  FI: 'Finland',
  FR: 'France',
  DE: 'Germany',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IE: 'Ireland',
  IL: 'Israel',
  IN: 'India',
  IT: 'Italy',
  JP: 'Japan',
  LV: 'Latvia',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MY: 'Malaysia',
  MX: 'Mexico',
  NL: 'Netherlands',
  NO: 'Norway',
  PA: 'Panama',
  PH: 'Philippines',
  PL: 'Poland',
  PT: 'Portugal',
  RO: 'Romania',
  SK: 'Slovakia',
  SI: 'Slovenia',
  ES: 'Spain',
  SE: 'Sweden',
  CH: 'Switzerland',
  TR: 'Turkey',
  GB: 'United Kingdom',
  AU: 'Australia',
  GE: 'Georgia',
  ID: 'Indonesia',
  KE: 'Kenya',
  NG: 'Nigeria',
  PK: 'Pakistan',
  ZA: 'South Africa',
  KR: 'South Korea',
  SG: 'Singapore',
  TW: 'Taiwan',
  UA: 'Ukraine',
  US: 'United States',
  VN: 'Vietnam',
  BE: 'Belgium',
  BJ: 'Benin',
  SV: 'El Salvador',
  GH: 'Ghana',
  GR: 'Greece',
  GN: 'Guinea',
  NZ: 'New Zealand',
  PE: 'Peru',
  PR: 'Puerto Rico',
  419: 'Latin America'
};


/***/ }),

/***/ 1340:
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

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Business Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Extension Number'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Home Number'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Mobile Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Unknown Phone Type'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.company, 'Company Number'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.direct, 'Direct Number'), _phoneTypes$business$);


/***/ }),

/***/ 1352:
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

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Account'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contact'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Opportunity'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'System User'), _phoneSources$account);


/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To',
  enterNameOrNumber: 'Enter Name or Number'
};


/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Direct',
  MainCompanyNumber: 'Main',
  CompanyNumber: 'Company',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Blocked',
  AdditionalCompanyNumber: 'Company',
  ForwardedCompanyNumber: 'Forwarded',
  from: 'From'
};


/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'From',
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name...',
  typeMessage: 'Type message...',
  send: 'Send'
};


/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details'
};


/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  typeMessage: 'Type message...',
  send: 'Send'
};


/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'New Conference',
  dialInNumber: 'Dial-in Number',
  hostAccess: 'Host Access',
  participantsAccess: 'Participants Access',
  addinalDialInNumbers: 'Additional Dial-in Numbers',
  selectNumbers: 'Select Numbers',
  enableJoinBeforeHost: 'Enable join before Host',
  conferenceCommands: 'Conference Commands',
  inviteWithGCalendar: 'Invite with Google Calendar',
  inviteWithText: 'Invite with Text',
  joinAsHost: 'Launch Conference',
  internationalNumber: 'International Dial-in Numbers:',
  inviteText: 'Please join the {brandName} conference.\n\nDial-In Numbers: {formattedDialInNumber} \n{additionalNumbersSection} \nParticipant Access: {participantCode} \n\nNeed an international dial-in phone number? Please visit {dialInNumbersLinks} \n\nThis conference call is brought to you by {brandName} Conferencing.'
};


/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Conference Commands',
  starSharp2Title: 'Caller Count',
  starSharp2Body: 'Keep track of how many people are on the call',
  starSharp3Title: 'Leave Conference',
  starSharp3Body: 'Lets the host hang up and end the call',
  starSharp4Title: 'Menu',
  starSharp4Body: 'Listen to the list of touchtone commands',
  starSharp5Title: 'Set Listening Modes',
  starSharp5Body: 'Press 1x: Mute callers - Callers can unmute with  *, #, 6\nPress 2x: Mute callers - Listen only. No unmuting option\nPress 3x: Unmute callers - Opens the line again',
  starSharp6Title: 'Mute Host Line',
  starSharp6Body: 'Press once to MUTE\nPress again to UNMUTE',
  starSharp7Title: 'Secure the Call',
  starSharp7Body: 'Press once to BLOCK all callers\nPress again to OPEN the call',
  starSharp8Title: 'Hear sound when people Enter or Exit call',
  starSharp8Body: 'Press 1x: Turns OFF sound\nPress 2x: Enter tone is ON Exit tone is OFF\nPress 3x: Enter tone is OFF Exit tone is ON\nPress 4x: Turns ON sound',
  star9Title: 'Record your conference',
  star9Body: 'Press once to START recording\nPress again to STOP recording'
};


/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Account',
  contact: 'Contact',
  lead: 'Lead',
  chooseEntity: 'Please select entity type',
  create: 'Create'
};


/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  sureToDeleteVoiceMail: 'Are you sure you want to delete this voicemail?',
  doNotAskAgain: "Don't ask me again"
};


/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  download: 'Download',
  play: 'Play',
  pause: 'Pause'
};


/***/ }),

/***/ 1484:
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
  editLog: 'Edit Log',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  call: 'Call',
  text: 'Text',
  conversation: 'Conversation',
  groupConversation: 'Group Conversation',
  voiceMessage: 'Voice message'
}, (0, _defineProperty3.default)(_addLog$editLog$viewD, _messageTypes2.default.voiceMail, 'Voice Mail'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'mark', 'Mark as Unread'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'unmark', 'Mark as Read'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'delete', 'Delete'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxSent', 'Fax sent'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'faxReceived', 'Fax received'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'pages', 'pages'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'preview', 'View'), (0, _defineProperty3.default)(_addLog$editLog$viewD, 'download', 'Download'), _addLog$editLog$viewD);


/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$search$compose;

var _messageTypes = __webpack_require__(359);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$search$compose = {
  title: 'Messages',
  search: 'Search...',
  composeText: 'Compose Text',
  noMessages: 'No Messages',
  noSearchResults: 'No matching records found'
}, (0, _defineProperty3.default)(_title$search$compose, _messageTypes2.default.all, 'All'), (0, _defineProperty3.default)(_title$search$compose, _messageTypes2.default.voiceMail, 'Voice'), (0, _defineProperty3.default)(_title$search$compose, _messageTypes2.default.text, 'Text'), (0, _defineProperty3.default)(_title$search$compose, _messageTypes2.default.fax, 'Fax'), _title$search$compose);


/***/ }),

/***/ 1508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  addLog: 'Log',
  text: 'Text',
  call: 'Call',
  addContact: 'Add Contact',
  missedCall: 'Missed',
  inboundCall: 'Inbound',
  outboundCall: 'Outbound',
  from: 'From',
  to: 'To',
  hangup: 'Hangup',
  accept: 'Accept',
  toVoicemail: 'Send to Voicemail'
};


/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  currentCall: 'Current Call',
  ringCall: 'Ringing Call',
  onHoldCall: 'Call on Hold',
  otherDeviceCall: 'Ongoing calls on my other devices'
};


/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  addLog: 'Log',
  text: 'Text',
  call: 'Call',
  missedCall: 'Missed',
  inboundCall: 'Inbound',
  outboundCall: 'Outbound'
};


/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  noRecords: 'No results found.'
};


/***/ }),

/***/ 1556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'History'
};


/***/ }),

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Forward',
  cancel: 'Cancel',
  customNumber: 'Custom number'
};


/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  reply: 'Reply',
  onMyWay: 'On my way',
  customMessage: 'Custom Message',
  callMeBackIn: 'Call me back in',
  willCallYouBackIn: 'Will call you back in',
  min: 'min.',
  hours: 'hours',
  days: 'days'
};


/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Forward',
  reply: 'Reply',
  ignore: 'Ignore',
  toVoicemail: 'To Voicemail',
  answer: 'Answer',
  answerAndEnd: 'Answer & End',
  answerAndHold: 'Answer & Hold'
};


/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Unknown',
  anonymous: 'Anonymous',
  activeCall: 'Active Call'
};


/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  hide: 'Hide',
  end: 'End',
  keypad: 'Keypad'
};


/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unmute: 'Unmute',
  mute: 'Mute',
  keypad: 'Keypad',
  hold: 'Hold',
  onHold: 'On Hold',
  park: 'Park',
  stopRecord: 'Stop',
  record: 'Record',
  add: 'Add',
  transfer: 'Transfer',
  flip: 'Flip'
};


/***/ }),

/***/ 1640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Home: 'Home',
  Mobile: 'Mobile',
  Work: 'Work'
};


/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flipHeader: 'Flip Call to...',
  flip: 'Flip',
  complete: 'Complete Flip'
};


/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To:',
  transferTo: 'Transfer to',
  blindTransfer: 'Transfer',
  enterNameOrNumber: 'Enter Number'
};


/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Unknown',
  anonymous: 'Anonymous',
  activeCalls: 'Active Calls'
};


/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Active Call'
};


/***/ }),

/***/ 1700:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'No records found.'
};


/***/ }),

/***/ 1712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Search...'
};


/***/ }),

/***/ 1724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  all: 'All',
  company: 'Company',
  personal: 'Personal'
};


/***/ }),

/***/ 1736:
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
  directLabel: 'Direct',
  emailLabel: 'Email',
  call: 'Call',
  text: 'Text'
}, (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.available, 'Available'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy, 'Busy'), (0, _defineProperty3.default)(_extensionLabel$direc, _dndStatus2.default.doNotAcceptAnyCalls, 'Do not Disturb'), _extensionLabel$direc);


/***/ }),

/***/ 1748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Contact Details'
};


/***/ }),

/***/ 1760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Audio',
  dialButtonVolume: 'Dial Button Volume',
  ringtoneVolume: 'Ringtone Volume',
  callVolume: 'Call Volume',
  muteCalls: 'Mute Calls',
  outputDevice: 'Output Device',
  inputDevice: 'Input Device',
  micPermission: 'Microphone Permission'
};


/***/ }),

/***/ 1772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  topic: 'Topic',
  when: 'When',
  duration: 'Duration',
  recurringMeeting: 'Recurring Meeting',
  recurringDescribe: 'Please remember to check recurrence or repeat in your calendar invitation to your attendees.',
  video: 'Video',
  videoDescribe: 'When joining a meeting',
  host: 'Host',
  participants: 'Participant',
  audioOptions: 'Audio Options',
  voIPOnly: 'VoIP Only',
  both: 'Both',
  meetingOptions: 'Meeting Options',
  requirePassword: 'Require meeting password',
  password: 'Password',
  enableJoinBeforeHost: 'Enable join before host',
  telephonyOnly: 'Telephony Only'
};


/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  start: 'Take a Quick Tour',
  skip: 'Skip',
  next: 'Next',
  finish: 'Finish'
};


/***/ }),

/***/ 1796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  google: 'Google'
};

/***/ }),

/***/ 1808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  schedule: 'Schedule',
  prompt: 'Please authorize RingCentral to access your account information.'
};


/***/ }),

/***/ 1820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invite with Google Calendar'
};

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

/***/ 1832:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invite with Google Calendar'
};

/***/ }),

/***/ 1844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  authorize: 'Authorize',
  prompt: 'Please authorize {brand} to access your Google account information.'
};

/***/ }),

/***/ 1856:
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

exports.default = (_authorizationError$a = {}, (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.accountLoggedOut, 'We noticed you have logged out your Google account {accountEmail}. To continue please {clickHereLink} to login your Google account.'), (0, _defineProperty3.default)(_authorizationError$a, 'clickHere', 'click here'), (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.notAuthorized, 'We noticed you haven\'t authorized {brand} for Google to access your Google account. Please {clickHereLink} to authorize.'), _authorizationError$a);

/***/ }),

/***/ 1868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.'
};


/***/ }),

/***/ 1880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.',
  inBound: 'Inbound',
  outBound: 'Outbound',
  missed: 'Missed Call'
};


/***/ }),

/***/ 1892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  recentActivities: 'Recent Activities',
  text: 'Text',
  fax: 'Fax',
  voicemail: 'Voicemail',
  call: 'Call',
  gmail: 'Gmail'
};

/***/ }),

/***/ 1904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.'
};

/***/ }),

/***/ 1916:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dialpadLabel: 'Dial Pad',
  callsLabel: 'Calls',
  historyLabel: 'History',
  messagesLabel: 'Messages',
  moreMenuLabel: 'More Menu',
  contactsLabel: 'Contacts',
  meetingLabel: 'Schedule Meeting',
  conferenceLabel: 'Schedule Conference',
  hangoutsLabel: 'Start Hangouts',
  hangoutsTitle: 'Start Hangouts with Conferencing',
  settingsLabel: 'Settings'
};

/***/ }),

/***/ 1928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Offline Mode'
};


/***/ }),

/***/ 1939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  webphoneUnavailable: 'Web Phone Unavailable'
};


/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'End User License Agreement',
  serviceTerms: 'Service Terms'
};


/***/ }),

/***/ 1963:
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

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Available'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy, 'Busy'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_presenceStatus$avail, _dndStatus2.default.doNotAcceptAnyCalls, 'Do not Disturb'), _presenceStatus$avail);


/***/ }),

/***/ 1975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Status',
  acceptQueueCalls: 'Accept call queue calls'
};


/***/ }),

/***/ 1987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'English',
  ja: 'Japanese',
  fr: 'French',
  de: 'Deutsch',
  es: 'Spanish',
  it: 'Italian',
  pt: 'Portuguese'
};


/***/ }),

/***/ 1999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Region',
  calling: 'Calling',
  logout: 'Logout',
  version: 'Version',
  settings: 'Settings',
  clickToDial: 'Click to Dial',
  autoCreateLog: 'Auto-create Call Log',
  autoCreateSMSLog: 'Auto-create SMS Log',
  autoLogCalls: 'Auto log calls',
  autoLogSMS: 'Auto log SMS',
  clickToSMS: 'Click to SMS',
  clickToDialSMS: 'Click to Dial/SMS',
  audio: 'Audio',
  language: 'Language',
  feedback: 'Feedback',
  userGuide: "What\'s New"
};


/***/ }),

/***/ 2011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Authorize',
  authorized: 'Unauthorize',
  unauthorizedTitle: 'Authorized Account',
  tooltip: 'You have authorized RingCentral for Google to access your account '
};

/***/ }),

/***/ 2023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addMeeting: 'Add Meeting',
  addMeetingTitle: 'Add {brand} Meeting',
  meetingSettingsTitle: '{brand} Meetings - Settings',
  when: 'When',
  recurringMeeting: 'Recurring Meeting',
  recurringMeetingPrompt: 'Please remember to check recurrence or repeat in your calendar invitation to your attendees.',
  video: 'Video(when joining a meeting)',
  host: 'Host:',
  on: 'on',
  off: 'off',
  participant: 'Participant:',
  audioOptions: 'Audio Options',
  telephone: 'Telephony Only',
  voip: 'VoIP Only',
  both: 'Both',
  meetingOptions: 'Meeting Options',
  requirePassword: 'Require meeting password',
  joinBeforeHost: 'Enable join before host',
  doNotShowAgain: 'Save and do not show again',
  schedule: 'Schedule'
};

/***/ }),

/***/ 2035:
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
  incomingCall: 'Incoming Call From:',
  answer: 'Answer',
  ignore: 'Ignore',
  inboundMessage: 'New {messageType} from {from}',
  anonymousCaller: 'anonymous person'
}, (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.fax, 'fax'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.voiceMail, 'voicemail'), (0, _defineProperty3.default)(_incomingCall$answer$, _messageTypes2.default.text, 'text message'), _incomingCall$answer$);

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

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  confirm: 'Confirm'
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Hb29nbGVDYWxlbmRhci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1dGhBbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NBbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VTZW5kZXJBbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVN0b3JlQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BdWRpb1NldHRpbmdzQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25mZXJlbmNlQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vbGliL0VudW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9IYXNoTWFwL2luZGV4LmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL2VuLVVTLmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZUNvbW1hbmRzL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRW50aXR5TW9kYWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3Rpb25NZW51TGlzdC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1ZvaWNlbWFpbFBsYXllci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZXNQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxJdGVtL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbHNQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxJdGVtL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbExpc3QvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb3J3YXJkRm9ybS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JbmNvbWluZ0NhbGxQYWQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9JbmNvbWluZ0NhbGxQYWdlL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbERpYWxQYWQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmFkaW9CdG5Hcm91cC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQmFkZ2VDb250YWluZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TGlzdC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RzVmlldy9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGV0YWlscy9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3REZXRhaWxzVmlldy9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lZXRpbmdQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1VzZXJHdWlkZS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nU2NoZWR1bGVCdXR0b24vaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nSW52aXRlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6YXRpb25BbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQmFkZ2UvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdWxhL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy9lbnVtcy9waG9uZVR5cGVzLmpzIiwid2VicGFjazovLy9lbnVtcy9tZXNzYWdlVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdPcHRpb25zLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvTWVldGluZy9tZWV0aW5nU3RhdHVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Nb2RhbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0F1dGgvYXV0aE1lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwid2VicGFjazovLy9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9NZXNzYWdlU3RvcmUvbWVzc2FnZVN0b3JlRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dvb2dsZUF1dGhvcml6ZS9hdXRob3JpemF0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL21vZHVsZXMvQ29uZmVyZW5jZS9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vbW9kdWxlcy9BdWRpb1NldHRpbmdzL2F1ZGlvU2V0dGluZ3NFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanMiXSwibmFtZXMiOlsiYzJkVGl0bGUiLCJzbXNUaXRsZSIsInNpZ25JbkVycm9yTXNnIiwiaW52aXRlTWVldGluZ0NvbnRlbnQiLCJwYXNzd29yZCIsImludGVybmFsRXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJzZXNzaW9uRXhwaXJlZCIsIm5vVG9OdW1iZXIiLCJub0FyZWFDb2RlIiwic3BlY2lhbE51bWJlciIsImNvbm5lY3RGYWlsZWQiLCJub3RBbkV4dGVuc2lvbiIsIm5ldHdvcmtFcnJvciIsIm5vUmluZ291dEVuYWJsZSIsInNhdmVTdWNjZXNzIiwic2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lIiwicGVybWlzc2lvbkNoYW5nZWQiLCJwaG9uZU51bWJlckNoYW5nZWQiLCJ3ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkIiwiZW1lcmdlbmN5Q2FsbGluZ05vdEF2YWlsYWJsZSIsInJlZ2lvbiIsImRpYWxpbmdQbGFuc0NoYW5nZWQiLCJhcmVhQ29kZUludmFsaWQiLCJzZW5kU3VjY2VzcyIsInNlbmRFcnJvciIsIm51bWJlclZhbGlkYXRlRXJyb3IiLCJ0ZXh0RW1wdHkiLCJub1Blcm1pc3Npb24iLCJzZW5kZXJFbXB0eSIsInJlY2lwaWVudHNFbXB0eSIsInRleHRUb29Mb25nIiwicmVjaXBpZW50TnVtYmVySW52YWxpZHMiLCJzZW5kZXJOdW1iZXJJbnZhbGlkIiwibm90U21zVG9FeHRlbnNpb24iLCJpbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkIiwibm9JbnRlcm5hbFNNU1Blcm1pc3Npb24iLCJzZW5kaW5nIiwicmF0ZUV4Y2VlZGVkIiwiZGlzY29ubmVjdGVkIiwiY29ubmVjdGVkIiwiYnJvd3Nlck5vdFN1cHBvcnRlZCIsIndlYnBob25lQ291bnRPdmVyTGltaXQiLCJub3RPdXRib3VuZENhbGxXaXRob3V0REwiLCJnZXRTaXBQcm92aXNpb25FcnJvciIsInRvVm9pY2VNYWlsRXJyb3IiLCJtdXRlRXJyb3IiLCJob2xkRXJyb3IiLCJmbGlwRXJyb3IiLCJyZWNvcmRFcnJvciIsInJlY29yZERpc2FibGVkIiwidHJhbnNmZXJFcnJvciIsImRlbGV0ZUZhaWxlZCIsImVtcHR5VG9waWMiLCJub1Bhc3N3b3JkIiwic2NoZWR1bGVkU3VjY2VzcyIsInVzZXJNZWRpYVBlcm1pc3Npb24iLCJpbnZhbGlkVGllciIsInJlcXVpcmVBZGl0aW9uYWxOdW1iZXJzIiwibG9naW5CdXR0b24iLCJ2ZXJzaW9uIiwidGl0bGUiLCJzb2Z0cGhvbmUiLCJteXBob25lIiwib3RoZXJwaG9uZSIsImN1c3RvbXBob25lIiwiYnJvd3NlciIsInByZWZpeEVudW0iLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsIkVudW0iLCJ2YWx1ZXMiLCJwcmVmaXgiLCJkZWZpbml0aW9uIiwiZm9yRWFjaCIsInZhbHVlIiwicHJlZml4Q2FjaGUiLCJlbnVtTWFwIiwiYmFzZSIsImhhcyIsInNldCIsImNhY2hlIiwiZ2V0IiwidHlwZSIsImRlZmF1bHRHZXRGdW5jdGlvbiIsInNEZWZpbml0aW9uIiwic1ZhbHVlTWFwIiwiaXRlbSIsIkhhc2hNYXAiLCJrZXkiLCJlbnVtZXJhYmxlIiwibWFwIiwiZ2V0S2V5IiwiZ2V0VmFsdWUiLCJzYXZlIiwiTkFPbmx5TWVzc2FnZSIsIk11bHRpV2l0aE5BTWVzc2FnZSIsIk11bHRpV2l0aG91dE5BTWVzc2FnZSIsImNvdW50cnkiLCJhcmVhQ29kZSIsImFyZWFDb2RlUGxhY2Vob2xkZXIiLCJBUiIsIkFUIiwiQkgiLCJCUiIsIkJHIiwiQ0EiLCJDTCIsIkNOIiwiSFIiLCJDWSIsIkNaIiwiREsiLCJETyIsIkVFIiwiRkkiLCJGUiIsIkRFIiwiSEsiLCJIVSIsIklFIiwiSUwiLCJJTiIsIklUIiwiSlAiLCJMViIsIkxUIiwiTFUiLCJNWSIsIk1YIiwiTkwiLCJOTyIsIlBBIiwiUEgiLCJQTCIsIlBUIiwiUk8iLCJTSyIsIlNJIiwiRVMiLCJTRSIsIkNIIiwiVFIiLCJHQiIsIkFVIiwiR0UiLCJJRCIsIktFIiwiTkciLCJQSyIsIlpBIiwiS1IiLCJTRyIsIlRXIiwiVUEiLCJVUyIsIlZOIiwiQkUiLCJCSiIsIlNWIiwiR0giLCJHUiIsIkdOIiwiTloiLCJQRSIsIlBSIiwiYnVzaW5lc3MiLCJleHRlbnNpb24iLCJob21lIiwibW9iaWxlIiwicGhvbmUiLCJ1bmtub3duIiwiY29tcGFueSIsImRpcmVjdCIsImFjY291bnQiLCJjb250YWN0IiwicmNDb250YWN0IiwibGVhZCIsIm9wcG9ydHVuaXR5Iiwic3lzdGVtVXNlciIsInRvIiwiZW50ZXJOYW1lT3JOdW1iZXIiLCJEaXJlY3ROdW1iZXIiLCJNYWluQ29tcGFueU51bWJlciIsIkNvbXBhbnlOdW1iZXIiLCJDb21wYW55RmF4TnVtYmVyIiwiQmxvY2tlZCIsIkFkZGl0aW9uYWxDb21wYW55TnVtYmVyIiwiRm9yd2FyZGVkQ29tcGFueU51bWJlciIsImZyb20iLCJ0eXBlTWVzc2FnZSIsInNlbmQiLCJsb2dnaW5nIiwibG9nQ2FsbCIsImVkaXRMb2ciLCJzZWxlY3QiLCJPbkhvbGQiLCJSaW5naW5nIiwiQ2FsbENvbm5lY3RlZCIsInVua25vd25Vc2VyIiwidW5rbm93bk51bWJlciIsInVuYXZhaWxhYmxlIiwidmlld0RldGFpbHMiLCJuZXdDb25mZXJlbmNlIiwiZGlhbEluTnVtYmVyIiwiaG9zdEFjY2VzcyIsInBhcnRpY2lwYW50c0FjY2VzcyIsImFkZGluYWxEaWFsSW5OdW1iZXJzIiwic2VsZWN0TnVtYmVycyIsImVuYWJsZUpvaW5CZWZvcmVIb3N0IiwiY29uZmVyZW5jZUNvbW1hbmRzIiwiaW52aXRlV2l0aEdDYWxlbmRhciIsImludml0ZVdpdGhUZXh0Iiwiam9pbkFzSG9zdCIsImludGVybmF0aW9uYWxOdW1iZXIiLCJpbnZpdGVUZXh0Iiwic3RhclNoYXJwMlRpdGxlIiwic3RhclNoYXJwMkJvZHkiLCJzdGFyU2hhcnAzVGl0bGUiLCJzdGFyU2hhcnAzQm9keSIsInN0YXJTaGFycDRUaXRsZSIsInN0YXJTaGFycDRCb2R5Iiwic3RhclNoYXJwNVRpdGxlIiwic3RhclNoYXJwNUJvZHkiLCJzdGFyU2hhcnA2VGl0bGUiLCJzdGFyU2hhcnA2Qm9keSIsInN0YXJTaGFycDdUaXRsZSIsInN0YXJTaGFycDdCb2R5Iiwic3RhclNoYXJwOFRpdGxlIiwic3RhclNoYXJwOEJvZHkiLCJzdGFyOVRpdGxlIiwic3RhcjlCb2R5IiwiY2hvb3NlRW50aXR5IiwiY3JlYXRlIiwic3VyZVRvRGVsZXRlVm9pY2VNYWlsIiwiZG9Ob3RBc2tBZ2FpbiIsImRvd25sb2FkIiwicGxheSIsInBhdXNlIiwiYWRkTG9nIiwiYWRkRW50aXR5IiwiY2FsbCIsInRleHQiLCJjb252ZXJzYXRpb24iLCJncm91cENvbnZlcnNhdGlvbiIsInZvaWNlTWVzc2FnZSIsInZvaWNlTWFpbCIsInNlYXJjaCIsImNvbXBvc2VUZXh0Iiwibm9NZXNzYWdlcyIsIm5vU2VhcmNoUmVzdWx0cyIsImFsbCIsImZheCIsImFkZENvbnRhY3QiLCJtaXNzZWRDYWxsIiwiaW5ib3VuZENhbGwiLCJvdXRib3VuZENhbGwiLCJoYW5ndXAiLCJhY2NlcHQiLCJ0b1ZvaWNlbWFpbCIsIm5vQWN0aXZlQ2FsbHMiLCJjdXJyZW50Q2FsbCIsInJpbmdDYWxsIiwib25Ib2xkQ2FsbCIsIm90aGVyRGV2aWNlQ2FsbCIsIm5vUmVjb3JkcyIsImZvcndhcmQiLCJjYW5jZWwiLCJjdXN0b21OdW1iZXIiLCJyZXBseSIsIm9uTXlXYXkiLCJjdXN0b21NZXNzYWdlIiwiY2FsbE1lQmFja0luIiwid2lsbENhbGxZb3VCYWNrSW4iLCJtaW4iLCJob3VycyIsImRheXMiLCJpZ25vcmUiLCJhbnN3ZXIiLCJhbnN3ZXJBbmRFbmQiLCJhbnN3ZXJBbmRIb2xkIiwiYW5vbnltb3VzIiwiYWN0aXZlQ2FsbCIsImhpZGUiLCJlbmQiLCJrZXlwYWQiLCJ1bm11dGUiLCJtdXRlIiwiaG9sZCIsIm9uSG9sZCIsInBhcmsiLCJzdG9wUmVjb3JkIiwicmVjb3JkIiwiYWRkIiwidHJhbnNmZXIiLCJmbGlwIiwiSG9tZSIsIk1vYmlsZSIsIldvcmsiLCJmbGlwSGVhZGVyIiwiY29tcGxldGUiLCJ0cmFuc2ZlclRvIiwiYmxpbmRUcmFuc2ZlciIsImFjdGl2ZUNhbGxzIiwibm9Db250YWN0cyIsInNlYXJjaFBsYWNlaG9sZGVyIiwicGVyc29uYWwiLCJleHRlbnNpb25MYWJlbCIsImRpcmVjdExhYmVsIiwiZW1haWxMYWJlbCIsImF2YWlsYWJsZSIsIm9mZmxpbmUiLCJidXN5IiwiZG9Ob3RBY2NlcHRBbnlDYWxscyIsImNvbnRhY3REZXRhaWxzIiwiZGlhbEJ1dHRvblZvbHVtZSIsInJpbmd0b25lVm9sdW1lIiwiY2FsbFZvbHVtZSIsIm11dGVDYWxscyIsIm91dHB1dERldmljZSIsImlucHV0RGV2aWNlIiwibWljUGVybWlzc2lvbiIsInRvcGljIiwid2hlbiIsImR1cmF0aW9uIiwicmVjdXJyaW5nTWVldGluZyIsInJlY3VycmluZ0Rlc2NyaWJlIiwidmlkZW8iLCJ2aWRlb0Rlc2NyaWJlIiwiaG9zdCIsInBhcnRpY2lwYW50cyIsImF1ZGlvT3B0aW9ucyIsInZvSVBPbmx5IiwiYm90aCIsIm1lZXRpbmdPcHRpb25zIiwicmVxdWlyZVBhc3N3b3JkIiwidGVsZXBob255T25seSIsInN0YXJ0Iiwic2tpcCIsIm5leHQiLCJmaW5pc2giLCJnb29nbGUiLCJzY2hlZHVsZSIsInByb21wdCIsImludml0ZVdpdGhDYWxlbmRhciIsImF1dGhvcml6ZSIsImFjY291bnRMb2dnZWRPdXQiLCJub3RBdXRob3JpemVkIiwiaW5Cb3VuZCIsIm91dEJvdW5kIiwibWlzc2VkIiwicmVjZW50QWN0aXZpdGllcyIsInZvaWNlbWFpbCIsImdtYWlsIiwiZGlhbHBhZExhYmVsIiwiY2FsbHNMYWJlbCIsImhpc3RvcnlMYWJlbCIsIm1lc3NhZ2VzTGFiZWwiLCJtb3JlTWVudUxhYmVsIiwiY29udGFjdHNMYWJlbCIsIm1lZXRpbmdMYWJlbCIsImNvbmZlcmVuY2VMYWJlbCIsImhhbmdvdXRzTGFiZWwiLCJoYW5nb3V0c1RpdGxlIiwic2V0dGluZ3NMYWJlbCIsIm9mZmxpbmVNb2RlIiwid2VicGhvbmVVbmF2YWlsYWJsZSIsImV1bGEiLCJzZXJ2aWNlVGVybXMiLCJzdGF0dXMiLCJhY2NlcHRRdWV1ZUNhbGxzIiwiZW4iLCJqYSIsImZyIiwiZGUiLCJlcyIsIml0IiwicHQiLCJjYWxsaW5nIiwibG9nb3V0Iiwic2V0dGluZ3MiLCJjbGlja1RvRGlhbCIsImF1dG9DcmVhdGVMb2ciLCJhdXRvQ3JlYXRlU01TTG9nIiwiYXV0b0xvZ0NhbGxzIiwiYXV0b0xvZ1NNUyIsImNsaWNrVG9TTVMiLCJjbGlja1RvRGlhbFNNUyIsImF1ZGlvIiwibGFuZ3VhZ2UiLCJmZWVkYmFjayIsInVzZXJHdWlkZSIsInVuYXV0aG9yaXplZCIsImF1dGhvcml6ZWQiLCJ1bmF1dGhvcml6ZWRUaXRsZSIsInRvb2x0aXAiLCJhZGRNZWV0aW5nIiwiYWRkTWVldGluZ1RpdGxlIiwibWVldGluZ1NldHRpbmdzVGl0bGUiLCJyZWN1cnJpbmdNZWV0aW5nUHJvbXB0Iiwib24iLCJvZmYiLCJwYXJ0aWNpcGFudCIsInRlbGVwaG9uZSIsInZvaXAiLCJqb2luQmVmb3JlSG9zdCIsImRvTm90U2hvd0FnYWluIiwiaW5jb21pbmdDYWxsIiwiaW5ib3VuZE1lc3NhZ2UiLCJhbm9ueW1vdXNDYWxsZXIiLCJzbXMiLCJwYWdlciIsInRha2VBbGxDYWxscyIsImRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzIiwidGFrZURlcGFydG1lbnRDYWxsc09ubHkiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlLG1CQUFTLENBQ3RCLFNBRHNCLEVBRXRCLFNBRnNCLEVBR3RCLE1BSHNCLEVBSXRCLGFBSnNCLEVBS3RCLFlBTHNCLEVBTXRCLFdBTnNCLENBQVQsQzs7Ozs7Ozs7Ozs7Ozs7a0JDRkE7QUFDYkEsWUFBVSxtQkFERztBQUViQyxZQUFVO0FBRkcsQzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxrQkFBZ0I7QUFESCxDOzs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLHdCQUFzQixxVEFEVDtBQUViQyxZQUFVO0FBRkcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O29HQUdHLHVCQUFhQyxhLEVBQWdCLDhELHdEQUM3Qix1QkFBYUMsWSxFQUFlLHdDLHdEQUM1Qix1QkFBYUMsYyxFQUFpQixrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGpDOzs7Ozs7b0dBR0cscUJBQVdDLFUsRUFBYSxvQyx3REFDeEIscUJBQVdDLFUsRUFBYSwrRCx3REFDeEIscUJBQVdDLGEsRUFBZ0IsZ0Usd0RBQzNCLHFCQUFXQyxhLEVBQWdCLDRDLHdEQUMzQixxQkFBV04sYSxFQUFnQixnRSx3REFDM0IscUJBQVdPLGMsRUFBaUIsc0Msd0RBQzVCLHFCQUFXQyxZLEVBQWUsK0Qsd0RBQzFCLHFCQUFXQyxlLEVBQWtCLDhLLG9FQUNwQixXLG9FQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaWjs7Ozs7O29HQUlHLGtDQUF3QkMsVyxFQUFjLDhCLHdEQUN0QyxrQ0FBd0JDLHdCLEVBQTJCLHdHLHdEQUNuRCxrQ0FBd0JDLGlCLEVBQW9CLGlHLHdEQUM1QyxrQ0FBd0JDLGtCLEVBQXFCLDZHLGdFQUN4QyxvQix3REFDTCxrQ0FBd0JDLHlCLEVBQTRCLG1JLHdEQUNwRCxrQ0FBd0JDLDRCLEVBQStCLDhKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMUQ7Ozs7Ozs7QUFJRUMsVUFBUTt3REFDUCxpQ0FBdUJOLFcsRUFBYyw4Qix3REFDckMsaUNBQXVCTyxtQixFQUFzQixnSCwwRUFDOUIsaUIsd0RBQ2YsaUNBQXVCQyxlLEVBQWtCLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUM7Ozs7OztvR0FHRyxnQ0FBc0JDLFcsRUFBYyxlLHdEQUNwQyxnQ0FBc0JDLFMsRUFBWSw2Qyx3REFDbEMsZ0NBQXNCQyxtQixFQUFzQiw4Qix3REFDNUMsZ0NBQXNCQyxTLEVBQVksbUMsd0RBQ2xDLGdDQUFzQkMsWSxFQUFlLHlDLHdEQUNyQyxnQ0FBc0JDLFcsRUFBYywwRCx3REFDcEMsZ0NBQXNCckIsVSxFQUFhLHVCLHdEQUNuQyxnQ0FBc0JzQixlLEVBQWtCLHVDLHdEQUN4QyxnQ0FBc0JDLFcsRUFBYyxnQyx3REFDcEMsZ0NBQXNCQyx1QixFQUEwQixvQyx3REFDaEQsZ0NBQXNCdkIsVSxFQUFhLCtELHdEQUNuQyxnQ0FBc0JDLGEsRUFBZ0IsZ0Usd0RBQ3RDLGdDQUFzQkMsYSxFQUFnQiw0Qyx3REFDdEMsZ0NBQXNCTixhLEVBQWdCLGdFLHdEQUN0QyxnQ0FBc0JPLGMsRUFBaUIsc0Msd0RBQ3ZDLGdDQUFzQkMsWSxFQUFlLCtELHdEQUNyQyxnQ0FBc0JvQixtQixFQUFzQiw0Six3REFDNUMsZ0NBQXNCQyxpQixFQUFvQiwwSSx3REFDMUMsZ0NBQXNCQyw0QixFQUErQiw2RCx3REFDckQsZ0NBQXNCQyx1QixFQUEwQixpSCxvRUFDdkMsVyx3REFDVCxnQ0FBc0JDLE8sRUFBVSxpRTs7Ozs7Ozs7Ozs7Ozs7a0JDeEJwQjtBQUNiQyxnQkFBYztBQURELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O29EQUlHLHNDQUE0QkMsWSxFQUFlLDZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKOUM7Ozs7OztvR0FHRyx5QkFBZTVCLGEsRUFBZ0IsdUMsd0RBQy9CLHlCQUFlNkIsUyxFQUFZLHVCLHdEQUMzQix5QkFBZUMsbUIsRUFBc0IsbUQsd0RBQ3JDLHlCQUFlQyxzQixFQUF5QixnRCx3REFDeEMseUJBQWVDLHdCLEVBQTJCLHlJLHdEQUMxQyx5QkFBZUMsb0IsRUFBdUIseUMsd0RBQ3RDLHlCQUFlQyxnQixFQUFtQixxRCx3REFDbEMseUJBQWVDLFMsRUFBWSxxQyx3REFDM0IseUJBQWVDLFMsRUFBWSxvQyx3REFDM0IseUJBQWVDLFMsRUFBWSwrQyx3REFDM0IseUJBQWVDLFcsRUFBYyxtRSx3REFDN0IseUJBQWVDLGMsRUFBaUIsNEcsd0RBQ2hDLHlCQUFlQyxhLEVBQWdCLG1ELCtFQUNYLGlILHFFQUNWLGtDLGtFQUNILHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJWOzs7Ozs7b0RBR0csNkJBQW1CQyxZLEVBQWUsMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQzs7Ozs7O29HQUdHLHdCQUFjQyxVLEVBQWEsNkIsd0RBQzNCLHdCQUFjQyxVLEVBQWEsa0Msd0RBQzNCLHdCQUFjQyxnQixFQUFtQix1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xwQzs7Ozs7O29EQUdHLDhCQUFvQkMsbUIsRUFBc0IsMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIN0M7Ozs7OztvREFJRyw4QkFBbUJDLFcsRUFBYyxzSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pwQzs7Ozs7O29EQUdHLG1CQUFTQyx1QixFQUEwQiwrQzs7Ozs7Ozs7Ozs7Ozs7a0JDSHZCO0FBQ2JDLGVBQWEsU0FEQTtBQUViQyxXQUFTO0FBRkksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7Ozs7QUFHRUMsU0FBTzt3REFDTix5QkFBZUMsUyxFQUFZLHFCLHdEQUMzQix5QkFBZUMsTyxFQUFVLGtCLHdEQUN6Qix5QkFBZUMsVSxFQUFhLGEsd0RBQzVCLHlCQUFlQyxXLEVBQWMsYyx3REFDN0IseUJBQWVDLE8sRUFBVSxTLHlFQUNYLG9CLHVFQUNGLDZELDJFQUNJLGEsa0ZBQ08sZ0Qsd0RBQ3BCLHlCQUFlQSxPLGNBQW1CLHlGLHdEQUNsQyx5QkFBZUosUyxjQUFxQiwrRSx3REFDcEMseUJBQWVDLE8sY0FBbUIseUQsd0RBQ2xDLHlCQUFlQSxPLGVBQW9CLHNGLHdEQUNuQyx5QkFBZUMsVSxjQUFzQixrSSx3REFDckMseUJBQWVBLFUsZUFBdUIsOEUsd0RBQ3RDLHlCQUFlQyxXLGNBQXVCLG1ILHdEQUN0Qyx5QkFBZUEsVyxlQUF3Qiw4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDTzdCRSxVLEdBQUFBLFU7O0FBM0JoQjs7Ozs7O0lBRVFDLGMsR0FBbUJDLE9BQU9DLFMsQ0FBMUJGLGM7QUFDUjs7Ozs7SUFJcUJHLEk7OztBQUNuQjs7Ozs7QUFLQSxrQkFBc0M7QUFBQSxRQUExQkMsTUFBMEIsdUVBQWpCLEVBQWlCO0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUE7O0FBQ3BDLFFBQU1DLGFBQWEsRUFBbkI7QUFDQUYsV0FBT0csT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBVztBQUN4QkYsaUJBQVdFLEtBQVgsSUFBb0JILFdBQVcsRUFBWCxHQUFtQkEsTUFBbkIsU0FBNkJHLEtBQTdCLEdBQXVDQSxLQUEzRDtBQUNELEtBRkQ7QUFGb0MsNkhBSzlCRixVQUw4QjtBQU1yQzs7Ozs7a0JBWmtCSCxJOztBQWNyQixJQUFNTSxjQUFjLG1CQUFwQjs7QUFFQTs7OztBQUlPLFNBQVNWLFVBQVQsT0FBeUQ7QUFBQSxNQUFuQ1csT0FBbUMsUUFBbkNBLE9BQW1DO0FBQUEsTUFBMUJMLE1BQTBCLFFBQTFCQSxNQUEwQjtBQUFBLHVCQUFsQk0sSUFBa0I7QUFBQSxNQUFsQkEsSUFBa0IsNkJBQVhELE9BQVc7O0FBQzlELE1BQUksQ0FBQ0wsTUFBRCxJQUFXQSxXQUFXLEVBQTFCLEVBQThCLE9BQU9NLElBQVA7O0FBRTlCLE1BQUksQ0FBQ0YsWUFBWUcsR0FBWixDQUFnQlAsTUFBaEIsQ0FBTCxFQUE4QjtBQUM1QkksZ0JBQVlJLEdBQVosQ0FBZ0JSLE1BQWhCLEVBQXdCLG1CQUF4QjtBQUNEOztBQUVELE1BQU1TLFFBQVFMLFlBQVlNLEdBQVosQ0FBZ0JWLE1BQWhCLENBQWQ7O0FBRUEsTUFBSSxDQUFDUyxNQUFNRixHQUFOLENBQVVELElBQVYsQ0FBTCxFQUFzQjtBQUNwQixRQUFNTCxhQUFhLEVBQW5CO0FBQ0EsU0FBSyxJQUFNVSxJQUFYLElBQW1CTCxJQUFuQixFQUF5QjtBQUN2QjtBQUNBLFVBQVVYLGNBQU4sWUFBcUJnQixJQUFyQixDQUFKLEVBQWdDO0FBQzlCVixtQkFBV1UsSUFBWCxJQUFzQlgsTUFBdEIsU0FBZ0NNLEtBQUtLLElBQUwsQ0FBaEM7QUFDRDtBQUNGO0FBQ0RGLFVBQU1ELEdBQU4sQ0FBVUYsSUFBVixFQUFnQixzQkFBWUwsVUFBWixDQUFoQjtBQUNEO0FBQ0QsU0FBT1EsTUFBTUMsR0FBTixDQUFVSixJQUFWLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDNUNlTSxrQixHQUFBQSxrQjs7OztBQUhoQixJQUFNQyxjQUFjLHNCQUFPLFlBQVAsQ0FBcEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFPLFVBQVAsQ0FBbEI7O0FBRU8sU0FBU0Ysa0JBQVQsQ0FBNEJHLElBQTVCLEVBQWtDO0FBQ3ZDLFNBQU9BLElBQVA7QUFDRDs7QUFFRDs7Ozs7SUFJcUJDLE87QUFDbkI7Ozs7QUFJQSxtQkFBWWYsVUFBWixFQUF3QjtBQUFBOztBQUFBOztBQUN0QixTQUFLWSxXQUFMLElBQW9CLHNCQUFjLEVBQWQsRUFBa0JaLFVBQWxCLENBQXBCO0FBQ0EsU0FBS2EsU0FBTCxJQUFrQixtQkFBbEI7O0FBRnNCLCtCQUlYRyxHQUpXO0FBS3BCO0FBQ0EsVUFBZ0JyQixPQUFPQyxTQUFQLENBQWlCRixjQUE3QixrQkFBNENzQixHQUE1QyxDQUFKLEVBQXNEO0FBQ3BELDZDQUE0QkEsR0FBNUIsRUFBaUM7QUFDL0JQLGFBRCtCLGlCQUN6QjtBQUNKLG1CQUFPLEtBQUtHLFdBQUwsRUFBa0JJLEdBQWxCLENBQVA7QUFDRCxXQUg4Qjs7QUFJL0JDLHNCQUFZO0FBSm1CLFNBQWpDO0FBTUEsY0FBS0osU0FBTCxFQUFnQk4sR0FBaEIsQ0FBb0IsTUFBS0ssV0FBTCxFQUFrQkksR0FBbEIsQ0FBcEIsRUFBNENBLEdBQTVDO0FBQ0Q7QUFkbUI7O0FBSXRCLFNBQUssSUFBTUEsR0FBWCxJQUFrQmhCLFVBQWxCLEVBQThCO0FBQUEsWUFBbkJnQixHQUFtQjtBQVc3QjtBQUNELDBCQUFjLElBQWQ7QUFDRDs7OzsyQkFDYUUsRyxFQUFLaEIsSyxFQUFPO0FBQ3hCLGFBQU9nQixJQUFJTCxTQUFKLEVBQWVKLEdBQWYsQ0FBbUJQLEtBQW5CLENBQVA7QUFDRDs7OzZCQUNlZ0IsRyxFQUFLaEIsSyxFQUFPO0FBQzFCLGFBQU9nQixJQUFJTCxTQUFKLEVBQWVQLEdBQWYsQ0FBbUJKLEtBQW5CLENBQVA7QUFDRDs7O2tDQUNtRjtBQUFBLFVBQW5FSyxHQUFtRSxRQUFuRUEsR0FBbUU7QUFBQSw2QkFBOURZLE1BQThEO0FBQUEsVUFBOURBLE1BQThELCtCQUFyRFIsa0JBQXFEO0FBQUEsK0JBQWpDUyxRQUFpQztBQUFBLFVBQWpDQSxRQUFpQyxpQ0FBdEJULGtCQUFzQjs7QUFDbEYsVUFBTVgsYUFBYSxFQUFuQjtBQUNBLGlEQUFJTyxHQUFKLEdBQVNOLE9BQVQsQ0FBaUIsVUFBQ2EsSUFBRCxFQUFVO0FBQ3pCLFlBQU1FLE1BQU1HLE9BQU9MLElBQVAsQ0FBWjtBQUNBLFlBQU1aLFFBQVFrQixTQUFTTixJQUFULENBQWQ7QUFDQSxZQUFJLE9BQU9FLEdBQVAsS0FBZSxXQUFmLElBQThCQSxRQUFRLElBQXRDLElBQThDQSxRQUFRLEVBQTFELEVBQThEO0FBQzVEaEIscUJBQVdnQixHQUFYLElBQWtCZCxLQUFsQjtBQUNEO0FBQ0YsT0FORDtBQU9BLGFBQU8sSUFBSWEsT0FBSixDQUFZZixVQUFaLENBQVA7QUFDRDs7Ozs7a0JBdkNrQmUsTzs7Ozs7Ozs7Ozs7Ozs7a0JDWE47QUFDYk0sUUFBTTtBQURPLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JsQyxTQUFPLFFBRE07QUFFYm1DLGlCQUFlLGlFQUZGO0FBR2JDLHNCQUFvQix3SEFIUDtBQUliQyx5QkFBdUIsMkdBSlY7QUFLYkMsV0FBUyxTQUxJO0FBTWJDLFlBQVUsV0FORztBQU9iQyx1QkFBcUI7QUFQUixDOzs7Ozs7OztBQ0FmLGtCQUFrQix5RDs7Ozs7Ozs7Ozs7OztrQkNBSDtBQUNiQyxNQUFJLFdBRFM7QUFFYkMsTUFBSSxTQUZTO0FBR2JDLE1BQUksU0FIUztBQUliQyxNQUFJLFFBSlM7QUFLYkMsTUFBSSxVQUxTO0FBTWJDLE1BQUksUUFOUztBQU9iQyxNQUFJLE9BUFM7QUFRYkMsTUFBSSxPQVJTO0FBU2JDLE1BQUksU0FUUztBQVViQyxNQUFJLFFBVlM7QUFXYkMsTUFBSSxnQkFYUztBQVliQyxNQUFJLFNBWlM7QUFhYkMsTUFBSSxvQkFiUztBQWNiQyxNQUFJLFNBZFM7QUFlYkMsTUFBSSxTQWZTO0FBZ0JiQyxNQUFJLFFBaEJTO0FBaUJiQyxNQUFJLFNBakJTO0FBa0JiQyxNQUFJLFdBbEJTO0FBbUJiQyxNQUFJLFNBbkJTO0FBb0JiQyxNQUFJLFNBcEJTO0FBcUJiQyxNQUFJLFFBckJTO0FBc0JiQyxNQUFJLE9BdEJTO0FBdUJiQyxNQUFJLE9BdkJTO0FBd0JiQyxNQUFJLE9BeEJTO0FBeUJiQyxNQUFJLFFBekJTO0FBMEJiQyxNQUFJLFdBMUJTO0FBMkJiQyxNQUFJLFlBM0JTO0FBNEJiQyxNQUFJLFVBNUJTO0FBNkJiQyxNQUFJLFFBN0JTO0FBOEJiQyxNQUFJLGFBOUJTO0FBK0JiQyxNQUFJLFFBL0JTO0FBZ0NiQyxNQUFJLFFBaENTO0FBaUNiQyxNQUFJLGFBakNTO0FBa0NiQyxNQUFJLFFBbENTO0FBbUNiQyxNQUFJLFVBbkNTO0FBb0NiQyxNQUFJLFNBcENTO0FBcUNiQyxNQUFJLFVBckNTO0FBc0NiQyxNQUFJLFVBdENTO0FBdUNiQyxNQUFJLE9BdkNTO0FBd0NiQyxNQUFJLFFBeENTO0FBeUNiQyxNQUFJLGFBekNTO0FBMENiQyxNQUFJLFFBMUNTO0FBMkNiQyxNQUFJLGdCQTNDUztBQTRDYkMsTUFBSSxXQTVDUztBQTZDYkMsTUFBSSxTQTdDUztBQThDYkMsTUFBSSxXQTlDUztBQStDYkMsTUFBSSxPQS9DUztBQWdEYkMsTUFBSSxTQWhEUztBQWlEYkMsTUFBSSxVQWpEUztBQWtEYkMsTUFBSSxjQWxEUztBQW1EYkMsTUFBSSxhQW5EUztBQW9EYkMsTUFBSSxXQXBEUztBQXFEYkMsTUFBSSxRQXJEUztBQXNEYkMsTUFBSSxTQXREUztBQXVEYkMsTUFBSSxlQXZEUztBQXdEYkMsTUFBSSxTQXhEUztBQXlEYkMsTUFBSSxTQXpEUztBQTBEYkMsTUFBSSxPQTFEUztBQTJEYkMsTUFBSSxhQTNEUztBQTREYkMsTUFBSSxPQTVEUztBQTZEYkMsTUFBSSxRQTdEUztBQThEYkMsTUFBSSxRQTlEUztBQStEYkMsTUFBSSxhQS9EUztBQWdFYkMsTUFBSSxNQWhFUztBQWlFYkMsTUFBSSxhQWpFUztBQWtFYixPQUFLO0FBbEVRLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmOzs7Ozs7b0dBR0cscUJBQVdDLFEsRUFBVyxnQix3REFDdEIscUJBQVdDLFMsRUFBWSxrQix3REFDdkIscUJBQVdDLEksRUFBTyxhLHdEQUNsQixxQkFBV0MsTSxFQUFTLGMsd0RBQ3BCLHFCQUFXQyxLLEVBQVEsTyx3REFDbkIscUJBQVdDLE8sRUFBVSxvQix3REFDckIscUJBQVdDLE8sRUFBVSxnQix3REFDckIscUJBQVdDLE0sRUFBUyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdkI7Ozs7OztvR0FHRyx1QkFBYUMsTyxFQUFVLFMsd0RBQ3ZCLHVCQUFhQyxPLEVBQVUsUyx3REFDdkIsdUJBQWFDLFMsRUFBWSxTLHdEQUN6Qix1QkFBYUMsSSxFQUFPLE0sd0RBQ3BCLHVCQUFhQyxXLEVBQWMsYSx3REFDM0IsdUJBQWFDLFUsRUFBYSxhOzs7Ozs7Ozs7Ozs7OztrQkNSZDtBQUNiQyxNQUFJLElBRFM7QUFFYkMscUJBQW1CO0FBRk4sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsZ0JBQWMsUUFERDtBQUViQyxxQkFBbUIsTUFGTjtBQUdiQyxpQkFBZSxTQUhGO0FBSWJDLG9CQUFrQixLQUpMO0FBS2JDLFdBQVMsU0FMSTtBQU1iQywyQkFBeUIsU0FOWjtBQU9iQywwQkFBd0IsV0FQWDtBQVFiQyxRQUFNO0FBUk8sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkEsUUFBTSxNQURPO0FBRWJULE1BQUksSUFGUztBQUdiQyxxQkFBbUIseUJBSE47QUFJYlMsZUFBYSxpQkFKQTtBQUtiQyxRQUFNO0FBTE8sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsV0FBUyxZQURJO0FBRWJDLFdBQVMsVUFGSTtBQUdiQyxXQUFTLFVBSEk7QUFJYkMsVUFBUSwwQkFKSztBQUtiQyxVQUFRLFNBTEs7QUFNYkMsV0FBUyxTQU5JO0FBT2JDLGlCQUFlLGdCQVBGO0FBUWJDLGVBQWEsY0FSQTtBQVNiQyxpQkFBZSxXQVRGO0FBVWJDLGVBQWEsYUFWQTtBQVdiQyxlQUFhO0FBWEEsQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYlosZUFBYSxpQkFEQTtBQUViQyxRQUFNO0FBRk8sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYlksaUJBQWUsZ0JBREY7QUFFYkMsZ0JBQWMsZ0JBRkQ7QUFHYkMsY0FBWSxhQUhDO0FBSWJDLHNCQUFvQixxQkFKUDtBQUtiQyx3QkFBc0IsNEJBTFQ7QUFNYkMsaUJBQWUsZ0JBTkY7QUFPYkMsd0JBQXNCLHlCQVBUO0FBUWJDLHNCQUFvQixxQkFSUDtBQVNiQyx1QkFBcUIsNkJBVFI7QUFVYkMsa0JBQWdCLGtCQVZIO0FBV2JDLGNBQVksbUJBWEM7QUFZYkMsdUJBQXFCLGdDQVpSO0FBYWJDLGNBQVk7QUFiQyxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiM0osU0FBTyxxQkFETTtBQUViNEosbUJBQWlCLGNBRko7QUFHYkMsa0JBQWdCLCtDQUhIO0FBSWJDLG1CQUFpQixrQkFKSjtBQUtiQyxrQkFBZ0Isd0NBTEg7QUFNYkMsbUJBQWlCLE1BTko7QUFPYkMsa0JBQWdCLDBDQVBIO0FBUWJDLG1CQUFpQixxQkFSSjtBQVNiQyxrQkFBZ0Isc0tBVEg7QUFVYkMsbUJBQWlCLGdCQVZKO0FBV2JDLGtCQUFnQiwyQ0FYSDtBQVliQyxtQkFBaUIsaUJBWko7QUFhYkMsa0JBQWdCLCtEQWJIO0FBY2JDLG1CQUFpQiwyQ0FkSjtBQWViQyxrQkFBZ0IsK0lBZkg7QUFnQmJDLGNBQVksd0JBaEJDO0FBaUJiQyxhQUFXO0FBakJFLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2J6RCxXQUFTLFNBREk7QUFFYkMsV0FBUyxTQUZJO0FBR2JFLFFBQU0sTUFITztBQUlidUQsZ0JBQWMsMkJBSkQ7QUFLYkMsVUFBUTtBQUxLLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLHlCQUF1QixpREFEVjtBQUViQyxpQkFBZTtBQUZGLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLFlBQVUsVUFERztBQUViQyxRQUFNLE1BRk87QUFHYkMsU0FBTztBQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmOzs7Ozs7O0FBR0VDLFVBQVEsSztBQUNSN0MsV0FBUyxVO0FBQ1RRLGVBQWEsYztBQUNic0MsYUFBVyxZO0FBQ1hDLFFBQU0sTTtBQUNOQyxRQUFNLE07QUFDTkMsZ0JBQWMsYztBQUNkQyxxQkFBbUIsb0I7QUFDbkJDLGdCQUFjO3dEQUNiLHVCQUFhQyxTLEVBQVksWSxnRUFDcEIsZ0Isa0VBQ0UsYyxrRUFDQSxRLG1FQUNDLFUsdUVBQ0ksYyxpRUFDTixPLG1FQUNFLE0sb0VBQ0MsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJaOzs7Ozs7O0FBR0UxTCxTQUFPLFU7QUFDUDJMLFVBQVEsVztBQUNSQyxlQUFhLGM7QUFDYkMsY0FBWSxhO0FBQ1pDLG1CQUFpQjt3REFDaEIsdUJBQWFDLEcsRUFBTSxLLHdEQUNuQix1QkFBYUwsUyxFQUFZLE8sd0RBQ3pCLHVCQUFhSixJLEVBQU8sTSx3REFDcEIsdUJBQWFVLEcsRUFBTSxLOzs7Ozs7Ozs7Ozs7OztrQkNYUDtBQUNiNUQsV0FBUyxZQURJO0FBRWJDLFdBQVMsVUFGSTtBQUdiQyxXQUFTLFVBSEk7QUFJYkMsVUFBUSwwQkFKSztBQUtiQyxVQUFRLFNBTEs7QUFNYkMsV0FBUyxTQU5JO0FBT2JDLGlCQUFlLGdCQVBGO0FBUWJDLGVBQWEsY0FSQTtBQVNiQyxpQkFBZSxXQVRGO0FBVWJDLGVBQWEsYUFWQTtBQVdiQyxlQUFhLGNBWEE7QUFZYnNDLGFBQVcsWUFaRTtBQWFiRCxVQUFRLEtBYks7QUFjYkcsUUFBTSxNQWRPO0FBZWJELFFBQU0sTUFmTztBQWdCYlksY0FBWSxhQWhCQztBQWlCYkMsY0FBWSxRQWpCQztBQWtCYkMsZUFBYSxTQWxCQTtBQW1CYkMsZ0JBQWMsVUFuQkQ7QUFvQmJuRSxRQUFNLE1BcEJPO0FBcUJiVCxNQUFJLElBckJTO0FBc0JiNkUsVUFBTyxRQXRCTTtBQXVCYkMsVUFBTyxRQXZCTTtBQXdCYkMsZUFBWTtBQXhCQyxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxpQkFBZSxpQkFERjtBQUViQyxlQUFhLGNBRkE7QUFHYkMsWUFBVSxjQUhHO0FBSWJDLGNBQVksY0FKQztBQUtiQyxtQkFBaUI7QUFMSixDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNieEUsV0FBUyxZQURJO0FBRWJDLFdBQVMsVUFGSTtBQUdiQyxXQUFTLFVBSEk7QUFJYkMsVUFBUSwwQkFKSztBQUtiQyxVQUFRLFNBTEs7QUFNYkMsV0FBUyxTQU5JO0FBT2JDLGlCQUFlLGdCQVBGO0FBUWJDLGVBQWEsY0FSQTtBQVNiQyxpQkFBZSxXQVRGO0FBVWJDLGVBQWEsYUFWQTtBQVdiQyxlQUFhLGNBWEE7QUFZYnNDLGFBQVcsWUFaRTtBQWFiRCxVQUFRLEtBYks7QUFjYkcsUUFBTSxNQWRPO0FBZWJELFFBQU0sTUFmTztBQWdCYmEsY0FBWSxRQWhCQztBQWlCYkMsZUFBYSxTQWpCQTtBQWtCYkMsZ0JBQWM7QUFsQkQsQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkksaUJBQWUsaUJBREY7QUFFYkssYUFBVztBQUZFLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2I3TSxTQUFPO0FBRE0sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYjhNLFdBQVMsU0FESTtBQUViQyxVQUFRLFFBRks7QUFHYkMsZ0JBQWM7QUFIRCxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiRCxVQUFRLFFBREs7QUFFYkUsU0FBTyxPQUZNO0FBR2JDLFdBQVMsV0FISTtBQUliQyxpQkFBZSxnQkFKRjtBQUtiQyxnQkFBYyxpQkFMRDtBQU1iQyxxQkFBbUIsdUJBTk47QUFPYkMsT0FBSyxNQVBRO0FBUWJDLFNBQU8sT0FSTTtBQVNiQyxRQUFNO0FBVE8sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYlYsV0FBUyxTQURJO0FBRWJHLFNBQU8sT0FGTTtBQUdiUSxVQUFRLFFBSEs7QUFJYmxCLGVBQWEsY0FKQTtBQUtibUIsVUFBUSxRQUxLO0FBTWJDLGdCQUFjLGNBTkQ7QUFPYkMsaUJBQWU7QUFQRixDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiN0csV0FBUyxTQURJO0FBRWI4RyxhQUFXLFdBRkU7QUFHYkMsY0FBWTtBQUhDLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLFFBQU0sTUFETztBQUViQyxPQUFLLEtBRlE7QUFHYkMsVUFBUTtBQUhLLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLFVBQVEsUUFESztBQUViQyxRQUFNLE1BRk87QUFHYkYsVUFBUSxRQUhLO0FBSWJHLFFBQU0sTUFKTztBQUtiQyxVQUFRLFNBTEs7QUFNYkMsUUFBTSxNQU5PO0FBT2JDLGNBQVksTUFQQztBQVFiQyxVQUFRLFFBUks7QUFTYkMsT0FBSyxLQVRRO0FBVWJDLFlBQVUsVUFWRztBQVdiQyxRQUFNO0FBWE8sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsUUFBTSxNQURPO0FBRWJDLFVBQVEsUUFGSztBQUdiQyxRQUFNO0FBSE8sQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsY0FBWSxpQkFEQztBQUViSixRQUFNLE1BRk87QUFHYkssWUFBVTtBQUhHLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2J4SCxNQUFJLEtBRFM7QUFFYnlILGNBQVksYUFGQztBQUdiQyxpQkFBZSxVQUhGO0FBSWJ6SCxxQkFBbUI7QUFKTixDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiVixXQUFTLFNBREk7QUFFYjhHLGFBQVcsV0FGRTtBQUdic0IsZUFBYTtBQUhBLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JyQixjQUFZO0FBREMsQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYnNCLGNBQVk7QUFEQyxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxxQkFBbUI7QUFETixDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNidEQsT0FBSyxLQURRO0FBRWIvRSxXQUFTLFNBRkk7QUFHYnNJLFlBQVU7QUFIRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7OztBQUNBOzs7Ozs7O0FBR0VDLGtCQUFnQixNO0FBQ2hCQyxlQUFhLFE7QUFDYkMsY0FBWSxPO0FBQ1pwRSxRQUFNLE07QUFDTkMsUUFBTTt3REFDTCx5QkFBZW9FLFMsRUFBWSxXLHdEQUMzQix5QkFBZUMsTyxFQUFVLFcsd0RBQ3pCLHlCQUFlQyxJLEVBQU8sTSx3REFDdEIsb0JBQVVDLG1CLEVBQXNCLGdCOzs7Ozs7Ozs7Ozs7OztrQkNacEI7QUFDYkMsa0JBQWdCO0FBREgsQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYjlQLFNBQU8sT0FETTtBQUViK1Asb0JBQWtCLG9CQUZMO0FBR2JDLGtCQUFnQixpQkFISDtBQUliQyxjQUFZLGFBSkM7QUFLYkMsYUFBVyxZQUxFO0FBTWJDLGdCQUFjLGVBTkQ7QUFPYkMsZUFBYSxjQVBBO0FBUWJDLGlCQUFlO0FBUkYsQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsU0FBTyxPQURNO0FBRWJDLFFBQU0sTUFGTztBQUdiQyxZQUFVLFVBSEc7QUFJYkMsb0JBQWtCLG1CQUpMO0FBS2JDLHFCQUFtQiw4RkFMTjtBQU1iQyxTQUFPLE9BTk07QUFPYkMsaUJBQWUsd0JBUEY7QUFRYkMsUUFBTSxNQVJPO0FBU2JDLGdCQUFjLGFBVEQ7QUFVYkMsZ0JBQWMsZUFWRDtBQVdiQyxZQUFVLFdBWEc7QUFZYkMsUUFBTSxNQVpPO0FBYWJDLGtCQUFnQixpQkFiSDtBQWNiQyxtQkFBaUIsMEJBZEo7QUFlYjVVLFlBQVUsVUFmRztBQWdCYjhNLHdCQUFzQix5QkFoQlQ7QUFpQmIrSCxpQkFBZTtBQWpCRixDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxTQUFPLG1CQURNO0FBRWJDLFFBQU0sTUFGTztBQUdiQyxRQUFNLE1BSE87QUFJYkMsVUFBUTtBQUpLLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLFVBQVE7QUFESyxDOzs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLFlBQVUsVUFERztBQUViQyxVQUFRO0FBRkssQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsc0JBQW9CO0FBRFAsQzs7Ozs7Ozs7QUNBZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7O2tCQ3ZCZTtBQUNiQSxzQkFBb0I7QUFEUCxDOzs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLGFBQVcsV0FERTtBQUViRixVQUFRO0FBRkssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O29HQUdHLDZCQUFtQkcsZ0IsRUFBbUIscUkscUVBQzVCLFksd0RBQ1YsNkJBQW1CQyxhLEVBQWdCLDJIOzs7Ozs7Ozs7Ozs7O2tCQ0x2QjtBQUNibEYsYUFBVztBQURFLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JBLGFBQVcsMEJBREU7QUFFYm1GLFdBQVMsU0FGSTtBQUdiQyxZQUFVLFVBSEc7QUFJYkMsVUFBUTtBQUpLLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLG9CQUFrQixtQkFETDtBQUViN0csUUFBTSxNQUZPO0FBR2JVLE9BQUssS0FIUTtBQUlib0csYUFBVyxXQUpFO0FBS2IvRyxRQUFNLE1BTE87QUFNYmdILFNBQU87QUFOTSxDOzs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2J4RixhQUFXO0FBREUsQzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNieUYsZ0JBQWMsVUFERDtBQUViQyxjQUFZLE9BRkM7QUFHYkMsZ0JBQWMsU0FIRDtBQUliQyxpQkFBZSxVQUpGO0FBS2JDLGlCQUFlLFdBTEY7QUFNYkMsaUJBQWUsVUFORjtBQU9iQyxnQkFBYyxrQkFQRDtBQVFiQyxtQkFBaUIscUJBUko7QUFTYkMsaUJBQWUsZ0JBVEY7QUFVYkMsaUJBQWUsa0NBVkY7QUFXYkMsaUJBQWU7QUFYRixDOzs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLGVBQWE7QUFEQSxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyx1QkFBcUI7QUFEUixDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxRQUFNLDRCQURPO0FBRWJDLGdCQUFjO0FBRkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7QUFDQTs7Ozs7O29HQUdHLHlCQUFlMUQsUyxFQUFZLFcsd0RBQzNCLHlCQUFlRSxJLEVBQU8sTSx3REFDdEIseUJBQWVELE8sRUFBVSxXLHdEQUN6QixvQkFBVUUsbUIsRUFBc0IsZ0I7Ozs7Ozs7Ozs7Ozs7O2tCQ1BwQjtBQUNid0QsVUFBUSxRQURLO0FBRWJDLG9CQUFrQjtBQUZMLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLE1BQUksU0FEUztBQUViQyxNQUFJLFVBRlM7QUFHYkMsTUFBSSxRQUhTO0FBSWJDLE1BQUksU0FKUztBQUtiQyxNQUFJLFNBTFM7QUFNYkMsTUFBSSxTQU5TO0FBT2JDLE1BQUk7QUFQUyxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiclcsVUFBUSxRQURLO0FBRWJzVyxXQUFTLFNBRkk7QUFHYkMsVUFBUSxRQUhLO0FBSWJoVSxXQUFTLFNBSkk7QUFLYmlVLFlBQVUsVUFMRztBQU1iQyxlQUFhLGVBTkE7QUFPYkMsaUJBQWUsc0JBUEY7QUFRYkMsb0JBQWtCLHFCQVJMO0FBU2JDLGdCQUFjLGdCQVREO0FBVWJDLGNBQVksY0FWQztBQVdiQyxjQUFZLGNBWEM7QUFZYkMsa0JBQWdCLG1CQVpIO0FBYWJDLFNBQU8sT0FiTTtBQWNiQyxZQUFVLFVBZEc7QUFlYkMsWUFBVSxVQWZHO0FBZ0JiQyxhQUFXO0FBaEJFLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2JDLGdCQUFjLFdBREQ7QUFFYkMsY0FBWSxhQUZDO0FBR2JDLHFCQUFtQixvQkFITjtBQUliQyxXQUFTO0FBSkksQzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxjQUFZLGFBREM7QUFFYkMsbUJBQWlCLHFCQUZKO0FBR2JDLHdCQUFzQiw2QkFIVDtBQUliM0UsUUFBTSxNQUpPO0FBS2JFLG9CQUFrQixtQkFMTDtBQU1iMEUsMEJBQXdCLDhGQU5YO0FBT2J4RSxTQUFPLCtCQVBNO0FBUWJFLFFBQU0sT0FSTztBQVNidUUsTUFBSSxJQVRTO0FBVWJDLE9BQUssS0FWUTtBQVdiQyxlQUFhLGNBWEE7QUFZYnZFLGdCQUFjLGVBWkQ7QUFhYndFLGFBQVcsZ0JBYkU7QUFjYkMsUUFBTSxXQWRPO0FBZWJ2RSxRQUFNLE1BZk87QUFnQmJDLGtCQUFnQixpQkFoQkg7QUFpQmJDLG1CQUFpQiwwQkFqQko7QUFrQmJzRSxrQkFBZ0IseUJBbEJIO0FBbUJiQyxrQkFBZ0IsNEJBbkJIO0FBb0JiaEUsWUFBVTtBQXBCRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmOzs7Ozs7O0FBR0VpRSxnQkFBYyxxQjtBQUNkakksVUFBUSxRO0FBQ1JELFVBQVEsUTtBQUNSbUksa0JBQWdCLCtCO0FBQ2hCQyxtQkFBaUI7d0RBQ2hCLHVCQUFhN0osRyxFQUFNLEssd0RBQ25CLHVCQUFhTixTLEVBQVksVyx3REFDekIsdUJBQWFKLEksRUFBTyxjOzs7Ozs7OztBQ1Z2Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixVQURzQixFQUV0QixXQUZzQixFQUd0QixNQUhzQixFQUl0QixRQUpzQixFQUt0QixPQUxzQixFQU10QixTQU5zQixFQU90QixTQVBzQixFQVF0QixRQVJzQixDQUFULEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsc0JBQVk7QUFDekJTLE9BQUssS0FEb0I7QUFFekJDLE9BQUssS0FGb0I7QUFHekI4SixPQUFLLEtBSG9CO0FBSXpCcEssYUFBVyxXQUpjO0FBS3pCcUssU0FBTyxPQUxrQjtBQU16QnpLLFFBQU07QUFObUIsQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlLG1CQUFTLENBQ3RCLFdBRHNCLEVBQ1Q7QUFDYixTQUZzQixFQUVYO0FBQ1gsWUFIc0IsRUFHUjtBQUNkLGFBSnNCLEVBSVA7QUFDZixTQUxzQixDQUFULEVBTVosZ0JBTlksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxzQkFBWTtBQUN6QjBLLGdCQUFjLGNBRFc7QUFFekJuRyx1QkFBcUIscUJBRkk7QUFHekJvRyw4QkFBNEIsNEJBSEg7QUFJekJDLDJCQUF5QjtBQUpBLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixZQURzQixFQUV0QixZQUZzQixFQUd0QixlQUhzQixFQUl0QixlQUpzQixFQUt0QixlQUxzQixFQU10QixnQkFOc0IsRUFPdEIsY0FQc0IsRUFRdEIsaUJBUnNCLENBQVQsRUFTWixZQVRZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsYUFEc0IsRUFFdEIsV0FGc0IsRUFHdEIscUJBSHNCLEVBSXRCLFdBSnNCLEVBS3RCLGFBTHNCLEVBTXRCLGNBTnNCLEVBT3RCLGFBUHNCLEVBUXRCLFlBUnNCLEVBU3RCLGlCQVRzQixFQVV0Qix5QkFWc0IsRUFXdEIscUJBWHNCLEVBWXRCLFlBWnNCLEVBYXRCLGVBYnNCLEVBY3RCLGVBZHNCLEVBZXRCLGdCQWZzQixFQWdCdEIsY0FoQnNCLEVBaUJ0QixtQkFqQnNCLEVBa0J0Qiw4QkFsQnNCLEVBbUJ0Qix5QkFuQnNCLEVBb0J0QixTQXBCc0IsQ0FBVCxFQXFCWixvQkFyQlksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixvQkFEc0IsRUFFdEIsWUFGc0IsRUFHdEIsWUFIc0IsRUFJdEIsbUJBSnNCLEVBS3RCLGtCQUxzQixDQUFULEVBTVosZUFOWSxDOzs7Ozs7OztBQ0ZmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Qzs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsbUVBQW1FO0FBQzNGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0I7Ozs7Ozs7QUNoQkQ7QUFDQTs7QUFFQSx1Q0FBdUMsd0NBQWdELEU7Ozs7Ozs7QUNIdkY7QUFDQTtBQUNBLG9EOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBMEUsa0JBQWtCLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztBQ3BDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1BBLGtCQUFrQix5RDs7Ozs7OztBQ0FsQjtBQUNBLHVEOzs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7O2tCQ1JjO0FBQ2JuSixVQUFRLFFBREs7QUFFYm9KLFdBQVM7QUFGSSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O2tCQUVlLHNCQUFZO0FBQ3pCeEcsV0FBUyxTQURnQjtBQUV6QkMsUUFBTSxNQUZtQjtBQUd6QkYsYUFBVztBQUhjLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixlQURzQixFQUV0QixlQUZzQixFQUd0QixnQkFIc0IsRUFJdEIsbUJBSnNCLEVBS3RCLFlBTHNCLEVBTXRCLGFBTnNCLEVBT3RCLGNBUHNCLEVBUXRCLGVBUnNCLENBQVQsRUFTWixjQVRZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsYUFEc0IsRUFFdEIsMEJBRnNCLEVBR3RCLG1CQUhzQixFQUl0QixvQkFKc0IsRUFLdEIsMkJBTHNCLEVBTXRCLDhCQU5zQixDQUFULEVBT1oseUJBUFksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixjQURzQixDQUFULEVBRVosNEJBRlksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixhQURzQixFQUV0QixxQkFGc0IsRUFHdEIsaUJBSHNCLENBQVQsRUFJWix3QkFKWSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlLG1CQUFTLENBQ3RCLGVBRHNCLEVBRXRCLFdBRnNCLEVBR3RCLHFCQUhzQixFQUl0Qix3QkFKc0IsRUFLdEIsbUJBTHNCLEVBTXRCLDBCQU5zQixFQU90Qix1QkFQc0IsRUFRdEIsc0JBUnNCLEVBU3RCLGtCQVRzQixFQVV0QixjQVZzQixFQVd0QixjQVhzQixFQVl0QixXQVpzQixFQWF0QixXQWJzQixFQWN0QixXQWRzQixFQWV0QixhQWZzQixFQWdCdEIsZ0JBaEJzQixFQWlCdEIsZUFqQnNCLEVBa0J0QixnQkFsQnNCLEVBbUJ0QixlQW5Cc0IsRUFvQnRCLHFCQXBCc0IsRUFxQnRCLG1CQXJCc0IsRUFzQnRCLGNBdEJzQixDQUFULEVBdUJaLFVBdkJZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsYUFEc0IsQ0FBVCxFQUVaLHFCQUZZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsY0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsY0FIc0IsQ0FBVCxFQUlaLGNBSlksQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0QixrQkFEc0IsRUFFdEIsZUFGc0IsQ0FBVCxFQUdaLG9CQUhZLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztrQkFFZSxtQkFBUyxDQUN0Qix5QkFEc0IsQ0FBVCxFQUVaLGdCQUZZLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIscUJBRHNCLENBQVQsRUFFWixlQUZZLEM7Ozs7Ozs7O0FDRmYsa0JBQWtCLHlEIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW51bSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXHJcbiAgJ2FjY291bnQnLFxyXG4gICdjb250YWN0JyxcclxuICAnbGVhZCcsXHJcbiAgJ29wcG9ydHVuaXR5JyxcclxuICAnc3lzdGVtVXNlcicsXHJcbiAgJ3JjQ29udGFjdCcsXHJcbl0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZW51bXMvcGhvbmVTb3VyY2VzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGMyZFRpdGxlOiAnQ2FsbCB3aXRoIHticmFuZH0nLFxyXG4gIHNtc1RpdGxlOiAnU01TIHdpdGgge2JyYW5kfScsXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2lnbkluRXJyb3JNc2c6ICdUbyBwcm9jZWVkLCBwbGVhc2UgbG9nIGluIHRoZSBhY2NvdW50IHRoYXQgeW91IGhhdmUgYXV0aG9yaXplZCB7YnJhbmR9IGZvciBHb29nbGUgdG8gYWNjZXNzLidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9Hb29nbGVBdXRob3JpemUvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW52aXRlTWVldGluZ0NvbnRlbnQ6ICd7YWNjb3VudE5hbWV9IGlzIGludml0aW5nIHlvdSB0byBhIHticmFuZE5hbWV9IG1lZXRpbmcuXFxuXFxuSm9pbiBmcm9tIFBDLCBNYWMsIGlPUyBvciBBbmRyb2lkOiB7am9pblVyaX17cGFzc3dvcmRUcGx9XFxuXFxuT3IgaVBob25lIG9uZS10YXA6XFxuICAgICB7bW9iaWxlRGlhbGluZ051bWJlclRwbH1cXG5cXG5PciBUZWxlcGhvbmU6XFxuICAgICBEaWFsOntwaG9uZURpYWxpbmdOdW1iZXJUcGx9XFxuICAgICBNZWV0aW5nIElEOiB7bWVldGluZ0lkfVxcbiAgICAgSW50ZXJuYXRpb25hbCBudW1iZXJzIGF2YWlsYWJsZToge3RlbGVjb25mZXJlbmNlfScsXG4gIHBhc3N3b3JkOiAnUGFzc3dvcmQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQ2FsZW5kYXIvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBhdXRoTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhNZXNzYWdlcy5pbnRlcm5hbEVycm9yXTogJ0xvZ2luIGZhaWxlZCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gIFthdXRoTWVzc2FnZXMuYWNjZXNzRGVuaWVkXTogJ0FjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuJyxcbiAgW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF06ICdTZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBzaWduIGluLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgY2FsbEVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGwvY2FsbEVycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxFcnJvcnMubm9Ub051bWJlcl06ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuJyxcbiAgW2NhbGxFcnJvcnMubm9BcmVhQ29kZV06ICdQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuJyxcbiAgW2NhbGxFcnJvcnMuc3BlY2lhbE51bWJlcl06ICdEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLicsXG4gIFtjYWxsRXJyb3JzLmNvbm5lY3RGYWlsZWRdOiAnQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW2NhbGxFcnJvcnMuaW50ZXJuYWxFcnJvcl06ICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gIFtjYWxsRXJyb3JzLm5vdEFuRXh0ZW5zaW9uXTogJ1RoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LicsXG4gIFtjYWxsRXJyb3JzLm5ldHdvcmtFcnJvcl06ICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW2NhbGxFcnJvcnMubm9SaW5nb3V0RW5hYmxlXTogJ1lvdXIgZXh0ZW5zaW9uIGlzIGFsbG93ZWQgdG8gbWFrZSBjYWxscyB3aXRoIGRlc2t0b3AgYXBwLlxcbiAgICBJZiB5b3Ugd2lzaCB0byBzd2l0Y2ggdG8gb3RoZXIgY2FsbGluZyBvcHRpb25zXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLicsXG4gIGFyZWFDb2RlOiAnYXJlYSBjb2RlJyxcbiAgdGVsdXM5MTE6ICdFbWVyZ2VuY3kgZGlhbGluZyBpcyBub3Qgc3VwcG9ydGVkLidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsQWxlcnQvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXTogJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lXTogJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGF2ZSB7YnJhbmR9IGZvciBEZXNrdG9wIGluc3RhbGxlZCBpbiB5b3VyIGNvbXB1dGVyLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5wZXJtaXNzaW9uQ2hhbmdlZF06ICdZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5waG9uZU51bWJlckNoYW5nZWRdOiAnWW91ciBwaG9uZSBudW1iZXIgaW5mb3JtYXRpb24gaGFzIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy4nLFxuICBsaW5rOiAnU2V0dGluZ3MgPiBDYWxsaW5nJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLndlYnBob25lUGVybWlzc2lvblJlbW92ZWRdOiAnWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBhbmQgeW91IGNhbm5vdCBtYWtlIGNhbGxzIHdpdGggQnJvd3Nlci4gRm9yIGRldGFpbHMgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGVdOiAnRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4gSW4gYW4gZW1lcmdlbmN5LCB1c2UgeW91ciB0cmFkaXRpb25hbCB3aXJlbGluZSBvciB3aXJlbGVzcyBwaG9uZSB0byBjYWxsIGFuIGVtZXJnZW5jeSBudW1iZXIuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NBbGVydC9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IHJlZ2lvblNldHRpbmdzTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWdpb246ICdSZWdpb24nLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc106ICdTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuZGlhbGluZ1BsYW5zQ2hhbmdlZF06ICdUaGUgcHJldmlvdXMgcmVnaW9uIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgZm9yIHlvdXIgYWNjb3VudC5cXG4gICAgUGxlYXNlIHZlcmlmeSB5b3VyIG5ldyB7cmVnaW9uU2V0dGluZ3NMaW5rfS4nLFxuICByZWdpb25TZXR0aW5nczogJ3JlZ2lvbiBzZXR0aW5ncycsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmFyZWFDb2RlSW52YWxpZF06ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhcmVhIGNvZGUuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgbWVzc2FnZVNlbmRlck1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZFN1Y2Nlc3NdOiAnU2VuZCBTdWNjZXNzLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZEVycm9yXTogJ1NvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGVuIHNlbmQgbWVzc2FnZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdOiAnUGhvbmUgTnVtYmVyIFZhbGlkYXRlIEVycm9yLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dEVtcHR5XTogJ1BsZWFzZSBlbnRlciB0aGUgdGV4dCB0byBiZSBzZW50LicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9QZXJtaXNzaW9uXTogJ1lvdSBoYXZlIG5vIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyRW1wdHldOiAnWW91IG11c3Qgc2VsZWN0IGEgbnVtYmVyIGZyb20geW91ciBwaG9uZSBudW1iZXJzIHRvIHNlbmQnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vVG9OdW1iZXJdOiAnSW52YWxpZCBwaG9uZSBudW1iZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5yZWNpcGllbnRzRW1wdHldOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVjZWl2ZXIgbnVtYmVyLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dFRvb0xvbmddOiAnVGV4dCBpcyB0b28gbG9uZywgMTAwMCBMaW1pdGVkJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5yZWNpcGllbnROdW1iZXJJbnZhbGlkc106ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub0FyZWFDb2RlXTogJ1BsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdOiAnRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmNvbm5lY3RGYWlsZWRdOiAnQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hbEVycm9yXTogJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RBbkV4dGVuc2lvbl06ICdUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5ldHdvcmtFcnJvcl06ICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJOdW1iZXJJbnZhbGlkXTogJ1lvdSBkb25cXCd0IGhhdmUgcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2VzIHRvIHJlY2lwaWVudHMgb3V0c2lkZSBvZiB5b3VyIG9yZ2FuaXphdGlvbi4gUGxlYXNlIGNvbnRhY3QgeW91ciBSaW5nQ2VudHJhbCBhY2NvdW50IGFkbWluaXN0cmF0b3IgZm9yIHVwZ3JhZGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RTbXNUb0V4dGVuc2lvbl06ICdDYW5ub3Qgc2VuZCBUbyBhIGV4dGVuc2lvbiBudW1iZXIgd2l0aCBtYWluIHBob25lIG51bWJlci4gSWYgeW91IHdhbnQgdG8gc2VudCB0byBhIGV4dGVuc2lvbiBOdW1iZXIsIHBsZWFzZSBqdXN0IGVudGVyIGV4dGVuc2lvbiBOdW1iZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkXTogJ1NlbmRpbmcgU01TIHRvIGludGVybmF0aW9uYWwgcGhvbmUgbnVtYmVyIGlzIG5vdCBzdXBwb3J0ZWQuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub0ludGVybmFsU01TUGVybWlzc2lvbl06ICdZb3UgZG9uXFwndCBoYXZlIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlcy4gUGxlYXNlIGNvbnRhY3QgeW91ciBSaW5nQ2VudHJhbCBhY2NvdW50IGFkbWluaXN0cmF0b3IgZm9yIHVwZ3JhZGUuJyxcbiAgYXJlYUNvZGU6ICdhcmVhIGNvZGUnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRpbmddOiAnTWVzc2FnZSBiZWluZyBzZW504oCmSXQgbWF5IHRha2UgYSBjb3VwbGUgb2YgbWludXRlcyB0byBjb21wbGV0ZS4nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJhdGVFeGNlZWRlZDogJ1JlcXVlc3QgbGltaXQgZXhjZWVkZWQuIEFwcCB3aWxsIHJlc3VtZSBpbiB7dHRsfSBzZWNvbmRzLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBjb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5kaXNjb25uZWN0ZWRdOiAnTmV0d29yayBjb25uZWN0aW9uIGlzIGxvc3QuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IHdlYnBob25lRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvV2VicGhvbmUvd2VicGhvbmVFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFt3ZWJwaG9uZUVycm9ycy5jb25uZWN0RmFpbGVkXTogJ0Nvbm5lY3Qgd2l0aCB3ZWIgcGhvbmUgc2VydmVyIGZhaWxlZC4nLFxuICBbd2VicGhvbmVFcnJvcnMuY29ubmVjdGVkXTogJ1dlYiBwaG9uZSByZWdpc3RlcmVkLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5icm93c2VyTm90U3VwcG9ydGVkXTogJ0NhbGxpbmcgd2l0aCBicm93c2VyIGlzIG9ubHkgc3VwcG9ydGVkIG9uIENocm9tZS4nLFxuICBbd2VicGhvbmVFcnJvcnMud2VicGhvbmVDb3VudE92ZXJMaW1pdF06ICdBIG1heGltdW0gb2YgNSB3ZWIgcGhvbmVzIGNvdWxkIGJlIHJlZ2lzdGVyZWQuJyxcbiAgW3dlYnBob25lRXJyb3JzLm5vdE91dGJvdW5kQ2FsbFdpdGhvdXRETF06ICdZb3VyIGV4dGVuc2lvbiBpcyBub3QgYWxsb3dlZCB0byBtYWtlIG91dGJvdW5kIGNhbGxzIHdpdGggYnJvd3NlciBjdXJyZW50bHksIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSBmb3IgYW4gdXBncmFkZS4nLFxuICBbd2VicGhvbmVFcnJvcnMuZ2V0U2lwUHJvdmlzaW9uRXJyb3JdOiAnWW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2UuJyxcbiAgW3dlYnBob25lRXJyb3JzLnRvVm9pY2VNYWlsRXJyb3JdOiAnQ2Fubm90IHNlbmQgY2FsbCB0byB2b2ljZW1haWwgZHVlIHRvIGludGVybmFsIGVycm9yJyxcbiAgW3dlYnBob25lRXJyb3JzLm11dGVFcnJvcl06ICdDYWxsIGNhbm5vdCBiZSBtdXRlZCBhdCB0aGUgbW9tZW50LicsXG4gIFt3ZWJwaG9uZUVycm9ycy5ob2xkRXJyb3JdOiAnQ2FsbCBjYW5ub3QgYmUgaG9sZCBhdCB0aGUgbW9tZW50LicsXG4gIFt3ZWJwaG9uZUVycm9ycy5mbGlwRXJyb3JdOiAnQ2Fubm90IGZsaXAgdGhlIGNhbGwuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW3dlYnBob25lRXJyb3JzLnJlY29yZEVycm9yXTogJ1lvdSBjYW5ub3QgcmVjb3JkIHRoZSBjYWxsIGF0IHRoZSBtb21lbnQuIEVycm9yIGNvZGU6IHtlcnJvckNvZGV9JyxcbiAgW3dlYnBob25lRXJyb3JzLnJlY29yZERpc2FibGVkXTogJ1NvcnJ5LCB5b3VyIGFjY291bnQgZG9lcyBub3QgaGF2ZSB0aGUgZmVhdHVyZSB0byByZWNvcmQgYSBjYWxsLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci4nLFxuICBbd2VicGhvbmVFcnJvcnMudHJhbnNmZXJFcnJvcl06ICdDYW5ub3QgdHJhbnNmZXIgdGhlIGNhbGwuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgd2VicGhvbmVVbmF2YWlsYWJsZTogJ3tlcnJvcn0uIFdlIGFyZSByZWNvbm5lY3RpbmcgdG8gc2VydmVyLiBJZiB0aGUgZXJyb3IgcGVyc2lzdHMsIHBsZWFzZSByZXBvcnQgdGhpcyBlcnJvciB0byB7YnJhbmROYW1lfSBTdXBwb3J0LicsXG4gIGVycm9yQ29kZTogJ0ludGVybmFsIGVycm9yIGNvZGU6IHtlcnJvckNvZGV9JyxcbiAgb2NjdXJzOiAnSW50ZXJuYWwgZXJyb3Igb2NjdXJzJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgbWVzc2FnZVN0b3JlRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVzc2FnZVN0b3JlL21lc3NhZ2VTdG9yZUVycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VTdG9yZUVycm9ycy5kZWxldGVGYWlsZWRdOiAnQ2Fubm90IGRlbGV0ZSB0aGUgdm9pY2VtYWlsIGR1ZSB0byBpbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZXNzYWdlU3RvcmVBbGVydC9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IG1lZXRpbmdTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZWV0aW5nL21lZXRpbmdTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFttZWV0aW5nU3RhdHVzLmVtcHR5VG9waWNdOiAnUGxlYXNlIGVudGVyIG1lZXRpbmcgdG9waWMuJyxcbiAgW21lZXRpbmdTdGF0dXMubm9QYXNzd29yZF06ICdQbGVhc2UgcHJvdmlkZSBtZWV0aW5nIHBhc3N3b3JkLicsXG4gIFttZWV0aW5nU3RhdHVzLnNjaGVkdWxlZFN1Y2Nlc3NdOiAnTWVldGluZyBpcyBzY2hlZHVsZWQuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBhdWRpb1NldHRpbmdzRXJyb3JzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQXVkaW9TZXR0aW5ncy9hdWRpb1NldHRpbmdzRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbYXVkaW9TZXR0aW5nc0Vycm9ycy51c2VyTWVkaWFQZXJtaXNzaW9uXTogJ1BsZWFzZSBncmFudCB7YnJhbmROYW1lfSBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIGF1ZGlvLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQXVkaW9TZXR0aW5nc0FsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgcGVybWlzc2lvbk1lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGVybWlzc2lvbk1lc3NhZ2VzLmludmFsaWRUaWVyXTogJ1lvdXIgZWRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHthcHBsaWNhdGlvbn0gaW50ZWdyYXRpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSB0byB1cGdyYWRlIHlvdXIge2JyYW5kfSBlZGl0aW9uLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUm9sZXNBbmRQZXJtaXNzaW9uc0FsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9Db25mZXJlbmNlL21lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbbWVzc2FnZXMucmVxdWlyZUFkaXRpb25hbE51bWJlcnNdOiAnUGxlYXNlIHNlbGVjdCB0aGUgYWRkaXRpb25hbCBkaWFsLWluIG51bWJlcnMuJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VBbGVydC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dpbkJ1dHRvbjogJ1NpZ24gSW4nLFxuICB2ZXJzaW9uOiAnVmVyc2lvbicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTG9naW5QYW5lbC9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IGNhbGxpbmdPcHRpb25zIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ2FsbGluZ1NldHRpbmdzL2NhbGxpbmdPcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0NhbGxpbmcnLFxuICBbY2FsbGluZ09wdGlvbnMuc29mdHBob25lXTogJ3ticmFuZH0gZm9yIERlc2t0b3AnLFxuICBbY2FsbGluZ09wdGlvbnMubXlwaG9uZV06ICdNeSB7YnJhbmR9IFBob25lJyxcbiAgW2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmVdOiAnT3RoZXIgUGhvbmUnLFxuICBbY2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmVdOiAnQ3VzdG9tIFBob25lJyxcbiAgW2NhbGxpbmdPcHRpb25zLmJyb3dzZXJdOiAnQnJvd3NlcicsXG4gIG1ha2VDYWxsc1dpdGg6ICdNYWtlIG15IGNhbGxzIHdpdGgnLFxuICByaW5nb3V0SGludDogJ1JpbmcgbWUgYXQgbXkgbG9jYXRpb24gZmlyc3QsIHRoZW4gY29ubmVjdCB0aGUgY2FsbGVkIHBhcnR5JyxcbiAgbXlMb2NhdGlvbkxhYmVsOiAnTXkgTG9jYXRpb24nLFxuICBwcmVzczFUb1N0YXJ0Q2FsbExhYmVsOiAnUHJvbXB0IG1lIHRvIGRpYWwgMSBiZWZvcmUgY29ubmVjdGluZyB0aGUgY2FsbCcsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5icm93c2VyfVRvb2x0aXBgXTogJ1VzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIgY29tcHV0ZXLigJlzIG1pY3JvcGhvbmUgYW5kIHNwZWFrZXIuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZX1Ub29sdGlwYF06ICdVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBhbmQgcmVjZWl2ZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gZm9yIERlc2t0b3AgYXBwLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5teXBob25lfVRvb2x0aXBgXTogJ1VzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGNhbGxzIHVzaW5nIHlvdXIge2JyYW5kfSBwaG9uZS4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwMWBdOiAnRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB5b3VyIHticmFuZH0gcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcGBdOiAnVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgeW91ciBvdGhlciBwaG9uZXMgc3VjaCBhcyBob21lIG9yIGNlbGwgcGhvbmVzIHRoYXQgeW91IGhhdmUgYWRkZWQgaW4geW91ciB7YnJhbmR9IEV4dGVuc2lvbi4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZX1Ub29sdGlwMWBdOiAnRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB0aGlzIHBob25lIHdpbGwgcmluZyBmaXJzdCB0aGVuIHRoZSBwYXJ0eSB5b3UgY2FsbGVkLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwYF06ICdVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyBhbnkgcGhvbmUgb2YgeW91ciBjaG9pY2UgYnkgZW50ZXJpbmcgYSB2YWxpZCBwaG9uZSBudW1iZXIgaW4gdGhlIGZpZWxkIGJlbG93LicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdOiAnRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB0aGlzIHBob25lIHdpbGwgcmluZyBmaXJzdCB0aGVuIHRoZSBwYXJ0eSB5b3UgY2FsbGVkLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBIYXNoTWFwIGZyb20gJy4uL0hhc2hNYXAnO1xuXG5jb25zdCB7IGhhc093blByb3BlcnR5IH0gPSBPYmplY3QucHJvdG90eXBlO1xuLyoqXG4gKiBAY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBoZWxwZXIgY2xhc3MgZm9yIGNyZWF0aW5nIHJlZHV4IGFjdGlvbiBkZWZpbml0aW9uIG1hcHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW51bSBleHRlbmRzIEhhc2hNYXAge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nW119IGFjdGlvbnMgLSBsaXN0IG9mIGFjdGlvbiBzdHJpbmdzXG4gICAqIEBleHRlbmRzIEhhc2hNYXBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdLCBwcmVmaXggPSAnJykge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7fTtcbiAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGRlZmluaXRpb25bdmFsdWVdID0gcHJlZml4ICE9PSAnJyA/IGAke3ByZWZpeH0tJHt2YWx1ZX1gIDogdmFsdWU7XG4gICAgfSk7XG4gICAgc3VwZXIoZGVmaW5pdGlvbik7XG4gIH1cbn1cbmNvbnN0IHByZWZpeENhY2hlID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQGRlc2NyaXB0aW9uIGhlbHBlciBmdW5jdGlvbiB0byByZXR1cm4gYSBwcmVmaXhlZCBhY3Rpb24gZGVmaW5pdGlvbiBtYXBzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhFbnVtKHsgZW51bU1hcCwgcHJlZml4LCBiYXNlID0gZW51bU1hcCB9KSB7XG4gIGlmICghcHJlZml4IHx8IHByZWZpeCA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIGlmICghcHJlZml4Q2FjaGUuaGFzKHByZWZpeCkpIHtcbiAgICBwcmVmaXhDYWNoZS5zZXQocHJlZml4LCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgY29uc3QgY2FjaGUgPSBwcmVmaXhDYWNoZS5nZXQocHJlZml4KTtcblxuICBpZiAoIWNhY2hlLmhhcyhiYXNlKSkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7fTtcbiAgICBmb3IgKGNvbnN0IHR5cGUgaW4gYmFzZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChiYXNlOjpoYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICBkZWZpbml0aW9uW3R5cGVdID0gYCR7cHJlZml4fS0ke2Jhc2VbdHlwZV19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgY2FjaGUuc2V0KGJhc2UsIG5ldyBIYXNoTWFwKGRlZmluaXRpb24pKTtcbiAgfVxuICByZXR1cm4gY2FjaGUuZ2V0KGJhc2UpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9FbnVtL2luZGV4LmpzIiwiY29uc3Qgc0RlZmluaXRpb24gPSBTeW1ib2woJ2RlZmluaXRpb24nKTtcclxuY29uc3Qgc1ZhbHVlTWFwID0gU3ltYm9sKCd2YWx1ZU1hcCcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRHZXRGdW5jdGlvbihpdGVtKSB7XHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgSGFzaE1hcFxyXG4gKiBAZGVzY3JpcHRpb24gU2ltcGxlIGhhc2ggbWFwIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXNoTWFwIHtcclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVmaW5pdGlvblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRlZmluaXRpb24pIHtcclxuICAgIHRoaXNbc0RlZmluaXRpb25dID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmaW5pdGlvbik7XHJcbiAgICB0aGlzW3NWYWx1ZU1hcF0gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmaW5pdGlvbikge1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICBpZiAoZGVmaW5pdGlvbjo6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tzRGVmaW5pdGlvbl1ba2V5XTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNbc1ZhbHVlTWFwXS5zZXQodGhpc1tzRGVmaW5pdGlvbl1ba2V5XSwga2V5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcclxuICB9XHJcbiAgc3RhdGljIGdldEtleShtYXAsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbWFwW3NWYWx1ZU1hcF0uZ2V0KHZhbHVlKTtcclxuICB9XHJcbiAgc3RhdGljIGhhc1ZhbHVlKG1hcCwgdmFsdWUpIHtcclxuICAgIHJldHVybiBtYXBbc1ZhbHVlTWFwXS5oYXModmFsdWUpO1xyXG4gIH1cclxuICBzdGF0aWMgZnJvbVNldCh7IHNldCwgZ2V0S2V5ID0gZGVmYXVsdEdldEZ1bmN0aW9uLCBnZXRWYWx1ZSA9IGRlZmF1bHRHZXRGdW5jdGlvbiB9KSB7XHJcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge307XHJcbiAgICBbLi4uc2V0XS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGdldEtleShpdGVtKTtcclxuICAgICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShpdGVtKTtcclxuICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICd1bmRlZmluZWQnICYmIGtleSAhPT0gbnVsbCAmJiBrZXkgIT09ICcnKSB7XHJcbiAgICAgICAgZGVmaW5pdGlvbltrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBIYXNoTWFwKGRlZmluaXRpb24pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL0hhc2hNYXAvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNhdmU6ICdTYXZlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnUmVnaW9uJyxcbiAgTkFPbmx5TWVzc2FnZTogJ1BsZWFzZSBzZXQgeW91ciBhcmVhIGNvZGUuIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nLicsXG4gIE11bHRpV2l0aE5BTWVzc2FnZTogJ1BsZWFzZSBzZXQgdGhlIGNvdW50cnkgYW5kIGFyZWEgY29kZSBmb3IgeW91ciByZWdpb24uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy4nLFxuICBNdWx0aVdpdGhvdXROQU1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IHRoZSBjb3VudHJ5IHlvdSBsb2NhdGUgaW4uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy4nLFxuICBjb3VudHJ5OiAnQ291bnRyeScsXG4gIGFyZWFDb2RlOiAnQXJlYSBDb2RlJyxcbiAgYXJlYUNvZGVQbGFjZWhvbGRlcjogJ0VudGVyIEFyZWEgQ29kZScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBVDogJ0F1c3RyaWEnLFxuICBCSDogJ0JhaHJhaW4nLFxuICBCUjogJ0JyYXppbCcsXG4gIEJHOiAnQnVsZ2FyaWEnLFxuICBDQTogJ0NhbmFkYScsXG4gIENMOiAnQ2hpbGUnLFxuICBDTjogJ0NoaW5hJyxcbiAgSFI6ICdDcm9hdGlhJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoIFJlcHVibGljJyxcbiAgREs6ICdEZW5tYXJrJyxcbiAgRE86ICdEb21pbmljYW4gUmVwdWJsaWMnLFxuICBFRTogJ0VzdG9uaWEnLFxuICBGSTogJ0ZpbmxhbmQnLFxuICBGUjogJ0ZyYW5jZScsXG4gIERFOiAnR2VybWFueScsXG4gIEhLOiAnSG9uZyBLb25nJyxcbiAgSFU6ICdIdW5nYXJ5JyxcbiAgSUU6ICdJcmVsYW5kJyxcbiAgSUw6ICdJc3JhZWwnLFxuICBJTjogJ0luZGlhJyxcbiAgSVQ6ICdJdGFseScsXG4gIEpQOiAnSmFwYW4nLFxuICBMVjogJ0xhdHZpYScsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1YOiAnTWV4aWNvJyxcbiAgTkw6ICdOZXRoZXJsYW5kcycsXG4gIE5POiAnTm9yd2F5JyxcbiAgUEE6ICdQYW5hbWEnLFxuICBQSDogJ1BoaWxpcHBpbmVzJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUk86ICdSb21hbmlhJyxcbiAgU0s6ICdTbG92YWtpYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBFUzogJ1NwYWluJyxcbiAgU0U6ICdTd2VkZW4nLFxuICBDSDogJ1N3aXR6ZXJsYW5kJyxcbiAgVFI6ICdUdXJrZXknLFxuICBHQjogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBHRTogJ0dlb3JnaWEnLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIEtFOiAnS2VueWEnLFxuICBORzogJ05pZ2VyaWEnLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgWkE6ICdTb3V0aCBBZnJpY2EnLFxuICBLUjogJ1NvdXRoIEtvcmVhJyxcbiAgU0c6ICdTaW5nYXBvcmUnLFxuICBUVzogJ1RhaXdhbicsXG4gIFVBOiAnVWtyYWluZScsXG4gIFVTOiAnVW5pdGVkIFN0YXRlcycsXG4gIFZOOiAnVmlldG5hbScsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJKOiAnQmVuaW4nLFxuICBTVjogJ0VsIFNhbHZhZG9yJyxcbiAgR0g6ICdHaGFuYScsXG4gIEdSOiAnR3JlZWNlJyxcbiAgR046ICdHdWluZWEnLFxuICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgUEU6ICdQZXJ1JyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG4gIDQxOTogJ0xhdGluIEFtZXJpY2EnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY291bnRyeU5hbWVzL2VuLVVTLmpzIiwiaW1wb3J0IHBob25lVHlwZXMgZnJvbSAnLi4vLi4vZW51bXMvcGhvbmVUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3Bob25lVHlwZXMuYnVzaW5lc3NdOiAnQnVzaW5lc3MgUGhvbmUnLFxuICBbcGhvbmVUeXBlcy5leHRlbnNpb25dOiAnRXh0ZW5zaW9uIE51bWJlcicsXG4gIFtwaG9uZVR5cGVzLmhvbWVdOiAnSG9tZSBOdW1iZXInLFxuICBbcGhvbmVUeXBlcy5tb2JpbGVdOiAnTW9iaWxlIFBob25lJyxcbiAgW3Bob25lVHlwZXMucGhvbmVdOiAnUGhvbmUnLFxuICBbcGhvbmVUeXBlcy51bmtub3duXTogJ1Vua25vd24gUGhvbmUgVHlwZScsXG4gIFtwaG9uZVR5cGVzLmNvbXBhbnldOiAnQ29tcGFueSBOdW1iZXInLFxuICBbcGhvbmVUeXBlcy5kaXJlY3RdOiAnRGlyZWN0IE51bWJlcicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9waG9uZVR5cGVOYW1lcy9lbi1VUy5qcyIsImltcG9ydCBwaG9uZVNvdXJjZXMgZnJvbSAnLi4vLi4vZW51bXMvcGhvbmVTb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGhvbmVTb3VyY2VzLmFjY291bnRdOiAnQWNjb3VudCcsXG4gIFtwaG9uZVNvdXJjZXMuY29udGFjdF06ICdDb250YWN0JyxcbiAgW3Bob25lU291cmNlcy5yY0NvbnRhY3RdOiAne2JyYW5kfScsXG4gIFtwaG9uZVNvdXJjZXMubGVhZF06ICdMZWFkJyxcbiAgW3Bob25lU291cmNlcy5vcHBvcnR1bml0eV06ICdPcHBvcnR1bml0eScsXG4gIFtwaG9uZVNvdXJjZXMuc3lzdGVtVXNlcl06ICdTeXN0ZW0gVXNlcicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9waG9uZVNvdXJjZU5hbWVzL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ1RvJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdFbnRlciBOYW1lIG9yIE51bWJlcicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjaXBpZW50c0lucHV0L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIERpcmVjdE51bWJlcjogJ0RpcmVjdCcsXG4gIE1haW5Db21wYW55TnVtYmVyOiAnTWFpbicsXG4gIENvbXBhbnlOdW1iZXI6ICdDb21wYW55JyxcbiAgQ29tcGFueUZheE51bWJlcjogJ0ZheCcsXG4gIEJsb2NrZWQ6ICdCbG9ja2VkJyxcbiAgQWRkaXRpb25hbENvbXBhbnlOdW1iZXI6ICdDb21wYW55JyxcbiAgRm9yd2FyZGVkQ29tcGFueU51bWJlcjogJ0ZvcndhcmRlZCcsXG4gIGZyb206ICdGcm9tJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Gcm9tRmllbGQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZnJvbTogJ0Zyb20nLFxuICB0bzogJ1RvJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdFbnRlciBOdW1iZXIgb3IgTmFtZS4uLicsXG4gIHR5cGVNZXNzYWdlOiAnVHlwZSBtZXNzYWdlLi4uJyxcbiAgc2VuZDogJ1NlbmQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ0xvZ2dpbmcuLi4nLFxuICBsb2dDYWxsOiAnTG9nIENhbGwnLFxuICBlZGl0TG9nOiAnRWRpdCBMb2cnLFxuICBzZWxlY3Q6ICdTZWxlY3QgYSBtYXRjaGluZyByZWNvcmQnLFxuICBPbkhvbGQ6ICdPbiBIb2xkJyxcbiAgUmluZ2luZzogJ1JpbmdpbmcnLFxuICBDYWxsQ29ubmVjdGVkOiAnQ2FsbCBDb25uZWN0ZWQnLFxuICB1bmtub3duVXNlcjogJ1Vua25vd24gVXNlcicsXG4gIHVua25vd25OdW1iZXI6ICdBbm9ueW1vdXMnLFxuICB1bmF2YWlsYWJsZTogJ1VuYXZhaWxhYmxlJyxcbiAgdmlld0RldGFpbHM6ICdWaWV3IERldGFpbHMnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3REaXNwbGF5L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVNZXNzYWdlOiAnVHlwZSBtZXNzYWdlLi4uJyxcbiAgc2VuZDogJ1NlbmQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5ld0NvbmZlcmVuY2U6ICdOZXcgQ29uZmVyZW5jZScsXG4gIGRpYWxJbk51bWJlcjogJ0RpYWwtaW4gTnVtYmVyJyxcbiAgaG9zdEFjY2VzczogJ0hvc3QgQWNjZXNzJyxcbiAgcGFydGljaXBhbnRzQWNjZXNzOiAnUGFydGljaXBhbnRzIEFjY2VzcycsXG4gIGFkZGluYWxEaWFsSW5OdW1iZXJzOiAnQWRkaXRpb25hbCBEaWFsLWluIE51bWJlcnMnLFxuICBzZWxlY3ROdW1iZXJzOiAnU2VsZWN0IE51bWJlcnMnLFxuICBlbmFibGVKb2luQmVmb3JlSG9zdDogJ0VuYWJsZSBqb2luIGJlZm9yZSBIb3N0JyxcbiAgY29uZmVyZW5jZUNvbW1hbmRzOiAnQ29uZmVyZW5jZSBDb21tYW5kcycsXG4gIGludml0ZVdpdGhHQ2FsZW5kYXI6ICdJbnZpdGUgd2l0aCBHb29nbGUgQ2FsZW5kYXInLFxuICBpbnZpdGVXaXRoVGV4dDogJ0ludml0ZSB3aXRoIFRleHQnLFxuICBqb2luQXNIb3N0OiAnTGF1bmNoIENvbmZlcmVuY2UnLFxuICBpbnRlcm5hdGlvbmFsTnVtYmVyOiAnSW50ZXJuYXRpb25hbCBEaWFsLWluIE51bWJlcnM6JyxcbiAgaW52aXRlVGV4dDogJ1BsZWFzZSBqb2luIHRoZSB7YnJhbmROYW1lfSBjb25mZXJlbmNlLlxcblxcbkRpYWwtSW4gTnVtYmVyczoge2Zvcm1hdHRlZERpYWxJbk51bWJlcn0gXFxue2FkZGl0aW9uYWxOdW1iZXJzU2VjdGlvbn0gXFxuUGFydGljaXBhbnQgQWNjZXNzOiB7cGFydGljaXBhbnRDb2RlfSBcXG5cXG5OZWVkIGFuIGludGVybmF0aW9uYWwgZGlhbC1pbiBwaG9uZSBudW1iZXI/IFBsZWFzZSB2aXNpdCB7ZGlhbEluTnVtYmVyc0xpbmtzfSBcXG5cXG5UaGlzIGNvbmZlcmVuY2UgY2FsbCBpcyBicm91Z2h0IHRvIHlvdSBieSB7YnJhbmROYW1lfSBDb25mZXJlbmNpbmcuJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0NvbmZlcmVuY2UgQ29tbWFuZHMnLFxuICBzdGFyU2hhcnAyVGl0bGU6ICdDYWxsZXIgQ291bnQnLFxuICBzdGFyU2hhcnAyQm9keTogJ0tlZXAgdHJhY2sgb2YgaG93IG1hbnkgcGVvcGxlIGFyZSBvbiB0aGUgY2FsbCcsXG4gIHN0YXJTaGFycDNUaXRsZTogJ0xlYXZlIENvbmZlcmVuY2UnLFxuICBzdGFyU2hhcnAzQm9keTogJ0xldHMgdGhlIGhvc3QgaGFuZyB1cCBhbmQgZW5kIHRoZSBjYWxsJyxcbiAgc3RhclNoYXJwNFRpdGxlOiAnTWVudScsXG4gIHN0YXJTaGFycDRCb2R5OiAnTGlzdGVuIHRvIHRoZSBsaXN0IG9mIHRvdWNodG9uZSBjb21tYW5kcycsXG4gIHN0YXJTaGFycDVUaXRsZTogJ1NldCBMaXN0ZW5pbmcgTW9kZXMnLFxuICBzdGFyU2hhcnA1Qm9keTogJ1ByZXNzIDF4OiBNdXRlIGNhbGxlcnMgLSBDYWxsZXJzIGNhbiB1bm11dGUgd2l0aCAgKiwgIywgNlxcblByZXNzIDJ4OiBNdXRlIGNhbGxlcnMgLSBMaXN0ZW4gb25seS4gTm8gdW5tdXRpbmcgb3B0aW9uXFxuUHJlc3MgM3g6IFVubXV0ZSBjYWxsZXJzIC0gT3BlbnMgdGhlIGxpbmUgYWdhaW4nLFxuICBzdGFyU2hhcnA2VGl0bGU6ICdNdXRlIEhvc3QgTGluZScsXG4gIHN0YXJTaGFycDZCb2R5OiAnUHJlc3Mgb25jZSB0byBNVVRFXFxuUHJlc3MgYWdhaW4gdG8gVU5NVVRFJyxcbiAgc3RhclNoYXJwN1RpdGxlOiAnU2VjdXJlIHRoZSBDYWxsJyxcbiAgc3RhclNoYXJwN0JvZHk6ICdQcmVzcyBvbmNlIHRvIEJMT0NLIGFsbCBjYWxsZXJzXFxuUHJlc3MgYWdhaW4gdG8gT1BFTiB0aGUgY2FsbCcsXG4gIHN0YXJTaGFycDhUaXRsZTogJ0hlYXIgc291bmQgd2hlbiBwZW9wbGUgRW50ZXIgb3IgRXhpdCBjYWxsJyxcbiAgc3RhclNoYXJwOEJvZHk6ICdQcmVzcyAxeDogVHVybnMgT0ZGIHNvdW5kXFxuUHJlc3MgMng6IEVudGVyIHRvbmUgaXMgT04gRXhpdCB0b25lIGlzIE9GRlxcblByZXNzIDN4OiBFbnRlciB0b25lIGlzIE9GRiBFeGl0IHRvbmUgaXMgT05cXG5QcmVzcyA0eDogVHVybnMgT04gc291bmQnLFxuICBzdGFyOVRpdGxlOiAnUmVjb3JkIHlvdXIgY29uZmVyZW5jZScsXG4gIHN0YXI5Qm9keTogJ1ByZXNzIG9uY2UgdG8gU1RBUlQgcmVjb3JkaW5nXFxuUHJlc3MgYWdhaW4gdG8gU1RPUCByZWNvcmRpbmcnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VDb21tYW5kcy9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY2NvdW50OiAnQWNjb3VudCcsXG4gIGNvbnRhY3Q6ICdDb250YWN0JyxcbiAgbGVhZDogJ0xlYWQnLFxuICBjaG9vc2VFbnRpdHk6ICdQbGVhc2Ugc2VsZWN0IGVudGl0eSB0eXBlJyxcbiAgY3JlYXRlOiAnQ3JlYXRlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzdXJlVG9EZWxldGVWb2ljZU1haWw6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdm9pY2VtYWlsPycsXG4gIGRvTm90QXNrQWdhaW46IFwiRG9uJ3QgYXNrIG1lIGFnYWluXCIsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aW9uTWVudUxpc3QvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gIHBsYXk6ICdQbGF5JyxcbiAgcGF1c2U6ICdQYXVzZScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVm9pY2VtYWlsUGxheWVyL2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgbWVzc2FnZVR5cGVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2VudW1zL21lc3NhZ2VUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkTG9nOiAnTG9nJyxcbiAgZWRpdExvZzogJ0VkaXQgTG9nJyxcbiAgdmlld0RldGFpbHM6ICdWaWV3IERldGFpbHMnLFxuICBhZGRFbnRpdHk6ICdDcmVhdGUgTmV3JyxcbiAgY2FsbDogJ0NhbGwnLFxuICB0ZXh0OiAnVGV4dCcsXG4gIGNvbnZlcnNhdGlvbjogJ0NvbnZlcnNhdGlvbicsXG4gIGdyb3VwQ29udmVyc2F0aW9uOiAnR3JvdXAgQ29udmVyc2F0aW9uJyxcbiAgdm9pY2VNZXNzYWdlOiAnVm9pY2UgbWVzc2FnZScsXG4gIFttZXNzYWdlVHlwZXMudm9pY2VNYWlsXTogJ1ZvaWNlIE1haWwnLFxuICBtYXJrOiAnTWFyayBhcyBVbnJlYWQnLFxuICB1bm1hcms6ICdNYXJrIGFzIFJlYWQnLFxuICBkZWxldGU6ICdEZWxldGUnLFxuICBmYXhTZW50OiAnRmF4IHNlbnQnLFxuICBmYXhSZWNlaXZlZDogJ0ZheCByZWNlaXZlZCcsXG4gIHBhZ2VzOiAncGFnZXMnLFxuICBwcmV2aWV3OiAnVmlldycsXG4gIGRvd25sb2FkOiAnRG93bmxvYWQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZUl0ZW0vaTE4bi9lbi1VUy5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ01lc3NhZ2VzJyxcbiAgc2VhcmNoOiAnU2VhcmNoLi4uJyxcbiAgY29tcG9zZVRleHQ6ICdDb21wb3NlIFRleHQnLFxuICBub01lc3NhZ2VzOiAnTm8gTWVzc2FnZXMnLFxuICBub1NlYXJjaFJlc3VsdHM6ICdObyBtYXRjaGluZyByZWNvcmRzIGZvdW5kJyxcbiAgW21lc3NhZ2VUeXBlcy5hbGxdOiAnQWxsJyxcbiAgW21lc3NhZ2VUeXBlcy52b2ljZU1haWxdOiAnVm9pY2UnLFxuICBbbWVzc2FnZVR5cGVzLnRleHRdOiAnVGV4dCcsXG4gIFttZXNzYWdlVHlwZXMuZmF4XTogJ0ZheCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZXNQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscycsXG4gIGFkZEVudGl0eTogJ0NyZWF0ZSBOZXcnLFxuICBhZGRMb2c6ICdMb2cnLFxuICB0ZXh0OiAnVGV4dCcsXG4gIGNhbGw6ICdDYWxsJyxcbiAgYWRkQ29udGFjdDogJ0FkZCBDb250YWN0JyxcbiAgbWlzc2VkQ2FsbDogJ01pc3NlZCcsXG4gIGluYm91bmRDYWxsOiAnSW5ib3VuZCcsXG4gIG91dGJvdW5kQ2FsbDogJ091dGJvdW5kJyxcbiAgZnJvbTogJ0Zyb20nLFxuICB0bzogJ1RvJyxcbiAgaGFuZ3VwOidIYW5ndXAnLFxuICBhY2NlcHQ6J0FjY2VwdCcsXG4gIHRvVm9pY2VtYWlsOidTZW5kIHRvIFZvaWNlbWFpbCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbEl0ZW0vaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9BY3RpdmVDYWxsczogJ05vIGFjdGl2ZSBjYWxscycsXG4gIGN1cnJlbnRDYWxsOiAnQ3VycmVudCBDYWxsJyxcbiAgcmluZ0NhbGw6ICdSaW5naW5nIENhbGwnLFxuICBvbkhvbGRDYWxsOiAnQ2FsbCBvbiBIb2xkJyxcbiAgb3RoZXJEZXZpY2VDYWxsOiAnT25nb2luZyBjYWxscyBvbiBteSBvdGhlciBkZXZpY2VzJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2dpbmc6ICdMb2dnaW5nLi4uJyxcbiAgbG9nQ2FsbDogJ0xvZyBDYWxsJyxcbiAgZWRpdExvZzogJ0VkaXQgTG9nJyxcbiAgc2VsZWN0OiAnU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkJyxcbiAgT25Ib2xkOiAnT24gSG9sZCcsXG4gIFJpbmdpbmc6ICdSaW5naW5nJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NhbGwgQ29ubmVjdGVkJyxcbiAgdW5rbm93blVzZXI6ICdVbmtub3duIFVzZXInLFxuICB1bmtub3duTnVtYmVyOiAnQW5vbnltb3VzJyxcbiAgdW5hdmFpbGFibGU6ICdVbmF2YWlsYWJsZScsXG4gIHZpZXdEZXRhaWxzOiAnVmlldyBEZXRhaWxzJyxcbiAgYWRkRW50aXR5OiAnQ3JlYXRlIE5ldycsXG4gIGFkZExvZzogJ0xvZycsXG4gIHRleHQ6ICdUZXh0JyxcbiAgY2FsbDogJ0NhbGwnLFxuICBtaXNzZWRDYWxsOiAnTWlzc2VkJyxcbiAgaW5ib3VuZENhbGw6ICdJbmJvdW5kJyxcbiAgb3V0Ym91bmRDYWxsOiAnT3V0Ym91bmQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxJdGVtL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vQWN0aXZlQ2FsbHM6ICdObyBhY3RpdmUgY2FsbHMnLFxuICBub1JlY29yZHM6ICdObyByZXN1bHRzIGZvdW5kLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbExpc3QvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdIaXN0b3J5J1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxIaXN0b3J5UGFnZS9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb3J3YXJkOiAnRm9yd2FyZCcsXG4gIGNhbmNlbDogJ0NhbmNlbCcsXG4gIGN1c3RvbU51bWJlcjogJ0N1c3RvbSBudW1iZXInXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRm9yd2FyZEZvcm0vaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgcmVwbHk6ICdSZXBseScsXG4gIG9uTXlXYXk6ICdPbiBteSB3YXknLFxuICBjdXN0b21NZXNzYWdlOiAnQ3VzdG9tIE1lc3NhZ2UnLFxuICBjYWxsTWVCYWNrSW46ICdDYWxsIG1lIGJhY2sgaW4nLFxuICB3aWxsQ2FsbFlvdUJhY2tJbjogJ1dpbGwgY2FsbCB5b3UgYmFjayBpbicsXG4gIG1pbjogJ21pbi4nLFxuICBob3VyczogJ2hvdXJzJyxcbiAgZGF5czogJ2RheXMnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0ZvcndhcmQnLFxuICByZXBseTogJ1JlcGx5JyxcbiAgaWdub3JlOiAnSWdub3JlJyxcbiAgdG9Wb2ljZW1haWw6ICdUbyBWb2ljZW1haWwnLFxuICBhbnN3ZXI6ICdBbnN3ZXInLFxuICBhbnN3ZXJBbmRFbmQ6ICdBbnN3ZXIgJiBFbmQnLFxuICBhbnN3ZXJBbmRIb2xkOiAnQW5zd2VyICYgSG9sZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvSW5jb21pbmdDYWxsUGFkL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVua25vd246ICdVbmtub3duJyxcbiAgYW5vbnltb3VzOiAnQW5vbnltb3VzJyxcbiAgYWN0aXZlQ2FsbDogJ0FjdGl2ZSBDYWxsJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9JbmNvbWluZ0NhbGxQYWdlL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhpZGU6ICdIaWRlJyxcbiAgZW5kOiAnRW5kJyxcbiAga2V5cGFkOiAnS2V5cGFkJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsRGlhbFBhZC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bm11dGU6ICdVbm11dGUnLFxuICBtdXRlOiAnTXV0ZScsXG4gIGtleXBhZDogJ0tleXBhZCcsXG4gIGhvbGQ6ICdIb2xkJyxcbiAgb25Ib2xkOiAnT24gSG9sZCcsXG4gIHBhcms6ICdQYXJrJyxcbiAgc3RvcFJlY29yZDogJ1N0b3AnLFxuICByZWNvcmQ6ICdSZWNvcmQnLFxuICBhZGQ6ICdBZGQnLFxuICB0cmFuc2ZlcjogJ1RyYW5zZmVyJyxcbiAgZmxpcDogJ0ZsaXAnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxQYWQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgSG9tZTogJ0hvbWUnLFxuICBNb2JpbGU6ICdNb2JpbGUnLFxuICBXb3JrOiAnV29yaycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmFkaW9CdG5Hcm91cC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmbGlwSGVhZGVyOiAnRmxpcCBDYWxsIHRvLi4uJyxcbiAgZmxpcDogJ0ZsaXAnLFxuICBjb21wbGV0ZTogJ0NvbXBsZXRlIEZsaXAnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ1RvOicsXG4gIHRyYW5zZmVyVG86ICdUcmFuc2ZlciB0bycsXG4gIGJsaW5kVHJhbnNmZXI6ICdUcmFuc2ZlcicsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnRW50ZXIgTnVtYmVyJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9UcmFuc2ZlclBhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVua25vd246ICdVbmtub3duJyxcbiAgYW5vbnltb3VzOiAnQW5vbnltb3VzJyxcbiAgYWN0aXZlQ2FsbHM6ICdBY3RpdmUgQ2FsbHMnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxDdHJsUGFnZS9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVDYWxsOiAnQWN0aXZlIENhbGwnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxCYWRnZUNvbnRhaW5lci9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0NvbnRhY3RzOiAnTm8gcmVjb3JkcyBmb3VuZC4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3RMaXN0L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0c1ZpZXcvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsOiAnQWxsJyxcbiAgY29tcGFueTogJ0NvbXBhbnknLFxuICBwZXJzb25hbDogJ1BlcnNvbmFsJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgcHJlc2VuY2VTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9wcmVzZW5jZVN0YXR1cyc7XG5pbXBvcnQgZG5kU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBleHRlbnNpb25MYWJlbDogJ0V4dC4nLFxuICBkaXJlY3RMYWJlbDogJ0RpcmVjdCcsXG4gIGVtYWlsTGFiZWw6ICdFbWFpbCcsXG4gIGNhbGw6ICdDYWxsJyxcbiAgdGV4dDogJ1RleHQnLFxuICBbcHJlc2VuY2VTdGF0dXMuYXZhaWxhYmxlXTogJ0F2YWlsYWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXTogJ0ludmlzaWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXN5XTogJ0J1c3knLFxuICBbZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdOiAnRG8gbm90IERpc3R1cmInXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERldGFpbHMvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFjdERldGFpbHM6ICdDb250YWN0IERldGFpbHMnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3REZXRhaWxzVmlldy9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRpdGxlOiAnQXVkaW8nLFxyXG4gIGRpYWxCdXR0b25Wb2x1bWU6ICdEaWFsIEJ1dHRvbiBWb2x1bWUnLFxyXG4gIHJpbmd0b25lVm9sdW1lOiAnUmluZ3RvbmUgVm9sdW1lJyxcclxuICBjYWxsVm9sdW1lOiAnQ2FsbCBWb2x1bWUnLFxyXG4gIG11dGVDYWxsczogJ011dGUgQ2FsbHMnLFxyXG4gIG91dHB1dERldmljZTogJ091dHB1dCBEZXZpY2UnLFxyXG4gIGlucHV0RGV2aWNlOiAnSW5wdXQgRGV2aWNlJyxcclxuICBtaWNQZXJtaXNzaW9uOiAnTWljcm9waG9uZSBQZXJtaXNzaW9uJyxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQXVkaW9TZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvcGljOiAnVG9waWMnLFxuICB3aGVuOiAnV2hlbicsXG4gIGR1cmF0aW9uOiAnRHVyYXRpb24nLFxuICByZWN1cnJpbmdNZWV0aW5nOiAnUmVjdXJyaW5nIE1lZXRpbmcnLFxuICByZWN1cnJpbmdEZXNjcmliZTogJ1BsZWFzZSByZW1lbWJlciB0byBjaGVjayByZWN1cnJlbmNlIG9yIHJlcGVhdCBpbiB5b3VyIGNhbGVuZGFyIGludml0YXRpb24gdG8geW91ciBhdHRlbmRlZXMuJyxcbiAgdmlkZW86ICdWaWRlbycsXG4gIHZpZGVvRGVzY3JpYmU6ICdXaGVuIGpvaW5pbmcgYSBtZWV0aW5nJyxcbiAgaG9zdDogJ0hvc3QnLFxuICBwYXJ0aWNpcGFudHM6ICdQYXJ0aWNpcGFudCcsXG4gIGF1ZGlvT3B0aW9uczogJ0F1ZGlvIE9wdGlvbnMnLFxuICB2b0lQT25seTogJ1ZvSVAgT25seScsXG4gIGJvdGg6ICdCb3RoJyxcbiAgbWVldGluZ09wdGlvbnM6ICdNZWV0aW5nIE9wdGlvbnMnLFxuICByZXF1aXJlUGFzc3dvcmQ6ICdSZXF1aXJlIG1lZXRpbmcgcGFzc3dvcmQnLFxuICBwYXNzd29yZDogJ1Bhc3N3b3JkJyxcbiAgZW5hYmxlSm9pbkJlZm9yZUhvc3Q6ICdFbmFibGUgam9pbiBiZWZvcmUgaG9zdCcsXG4gIHRlbGVwaG9ueU9ubHk6ICdUZWxlcGhvbnkgT25seScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVldGluZ1BhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN0YXJ0OiAnVGFrZSBhIFF1aWNrIFRvdXInLFxuICBza2lwOiAnU2tpcCcsXG4gIG5leHQ6ICdOZXh0JyxcbiAgZmluaXNoOiAnRmluaXNoJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Vc2VyR3VpZGUvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZ29vZ2xlOiAnR29vZ2xlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVkdWxlOiAnU2NoZWR1bGUnLFxuICBwcm9tcHQ6ICdQbGVhc2UgYXV0aG9yaXplIFJpbmdDZW50cmFsIHRvIGFjY2VzcyB5b3VyIGFjY291bnQgaW5mb3JtYXRpb24uJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lZXRpbmdTY2hlZHVsZUJ1dHRvbi9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbnZpdGVXaXRoQ2FsZW5kYXI6ICdJbnZpdGUgd2l0aCBHb29nbGUgQ2FsZW5kYXInXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0ludml0ZUJ1dHRvbi9pMThuL2VuLVVTLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbnZpdGVXaXRoQ2FsZW5kYXI6ICdJbnZpdGUgd2l0aCBHb29nbGUgQ2FsZW5kYXInXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29uZmVyZW5jZUludml0ZUJ1dHRvbi9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRob3JpemU6ICdBdXRob3JpemUnLFxuICBwcm9tcHQ6ICdQbGVhc2UgYXV0aG9yaXplIHticmFuZH0gdG8gYWNjZXNzIHlvdXIgR29vZ2xlIGFjY291bnQgaW5mb3JtYXRpb24uJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nQXV0aG9yaXplQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgYXV0aG9yaXphdGlvbkVycm9yIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2F1dGhvcml6YXRpb25FcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhvcml6YXRpb25FcnJvci5hY2NvdW50TG9nZ2VkT3V0XTogJ1dlIG5vdGljZWQgeW91IGhhdmUgbG9nZ2VkIG91dCB5b3VyIEdvb2dsZSBhY2NvdW50IHthY2NvdW50RW1haWx9LiBUbyBjb250aW51ZSBwbGVhc2Uge2NsaWNrSGVyZUxpbmt9IHRvIGxvZ2luIHlvdXIgR29vZ2xlIGFjY291bnQuJyxcbiAgY2xpY2tIZXJlOiAnY2xpY2sgaGVyZScsXG4gIFthdXRob3JpemF0aW9uRXJyb3Iubm90QXV0aG9yaXplZF06ICdXZSBub3RpY2VkIHlvdSBoYXZlblxcJ3QgYXV0aG9yaXplZCB7YnJhbmR9IGZvciBHb29nbGUgdG8gYWNjZXNzIHlvdXIgR29vZ2xlIGFjY291bnQuIFBsZWFzZSB7Y2xpY2tIZXJlTGlua30gdG8gYXV0aG9yaXplLidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemF0aW9uQWxlcnQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTm8gcmVjZW50IHJlY29yZHMgZm91bmQuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eU1lc3NhZ2VzL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vUmVjb3JkczogJ05vIHJlY2VudCByZWNvcmRzIGZvdW5kLicsXG4gIGluQm91bmQ6ICdJbmJvdW5kJyxcbiAgb3V0Qm91bmQ6ICdPdXRib3VuZCcsXG4gIG1pc3NlZDogJ01pc3NlZCBDYWxsJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2VudEFjdGl2aXR5Q2FsbHMvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVjZW50QWN0aXZpdGllczogJ1JlY2VudCBBY3Rpdml0aWVzJyxcbiAgdGV4dDogJ1RleHQnLFxuICBmYXg6ICdGYXgnLFxuICB2b2ljZW1haWw6ICdWb2ljZW1haWwnLFxuICBjYWxsOiAnQ2FsbCcsXG4gIGdtYWlsOiAnR21haWwnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTm8gcmVjZW50IHJlY29yZHMgZm91bmQuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaWFscGFkTGFiZWw6ICdEaWFsIFBhZCcsXG4gIGNhbGxzTGFiZWw6ICdDYWxscycsXG4gIGhpc3RvcnlMYWJlbDogJ0hpc3RvcnknLFxuICBtZXNzYWdlc0xhYmVsOiAnTWVzc2FnZXMnLFxuICBtb3JlTWVudUxhYmVsOiAnTW9yZSBNZW51JyxcbiAgY29udGFjdHNMYWJlbDogJ0NvbnRhY3RzJyxcbiAgbWVldGluZ0xhYmVsOiAnU2NoZWR1bGUgTWVldGluZycsXG4gIGNvbmZlcmVuY2VMYWJlbDogJ1NjaGVkdWxlIENvbmZlcmVuY2UnLFxuICBoYW5nb3V0c0xhYmVsOiAnU3RhcnQgSGFuZ291dHMnLFxuICBoYW5nb3V0c1RpdGxlOiAnU3RhcnQgSGFuZ291dHMgd2l0aCBDb25mZXJlbmNpbmcnLFxuICBzZXR0aW5nc0xhYmVsOiAnU2V0dGluZ3MnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9mZmxpbmVNb2RlOiAnT2ZmbGluZSBNb2RlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9PZmZsaW5lTW9kZUJhZGdlL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHdlYnBob25lVW5hdmFpbGFibGU6ICdXZWIgUGhvbmUgVW5hdmFpbGFibGUnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1dlYnBob25lQmFkZ2UvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZXVsYTogJ0VuZCBVc2VyIExpY2Vuc2UgQWdyZWVtZW50JyxcbiAgc2VydmljZVRlcm1zOiAnU2VydmljZSBUZXJtcycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRXVsYS9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IHByZXNlbmNlU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvcHJlc2VuY2VTdGF0dXMnO1xuaW1wb3J0IGRuZFN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL2RuZFN0YXR1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV06ICdBdmFpbGFibGUnLFxuICBbcHJlc2VuY2VTdGF0dXMuYnVzeV06ICdCdXN5JyxcbiAgW3ByZXNlbmNlU3RhdHVzLm9mZmxpbmVdOiAnSW52aXNpYmxlJyxcbiAgW2RuZFN0YXR1cy5kb05vdEFjY2VwdEFueUNhbGxzXTogJ0RvIG5vdCBEaXN0dXJiJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9QcmVzZW5jZUl0ZW0vaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgYWNjZXB0UXVldWVDYWxsczogJ0FjY2VwdCBjYWxsIHF1ZXVlIGNhbGxzJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9QcmVzZW5jZVNldHRpbmdTZWN0aW9uL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZW46ICdFbmdsaXNoJyxcclxuICBqYTogJ0phcGFuZXNlJyxcclxuICBmcjogJ0ZyZW5jaCcsXHJcbiAgZGU6ICdEZXV0c2NoJyxcclxuICBlczogJ1NwYW5pc2gnLFxyXG4gIGl0OiAnSXRhbGlhbicsXHJcbiAgcHQ6ICdQb3J0dWd1ZXNlJyxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTG9jYWxlUGlja2VyL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlZ2lvbjogJ1JlZ2lvbicsXG4gIGNhbGxpbmc6ICdDYWxsaW5nJyxcbiAgbG9nb3V0OiAnTG9nb3V0JyxcbiAgdmVyc2lvbjogJ1ZlcnNpb24nLFxuICBzZXR0aW5nczogJ1NldHRpbmdzJyxcbiAgY2xpY2tUb0RpYWw6ICdDbGljayB0byBEaWFsJyxcbiAgYXV0b0NyZWF0ZUxvZzogJ0F1dG8tY3JlYXRlIENhbGwgTG9nJyxcbiAgYXV0b0NyZWF0ZVNNU0xvZzogJ0F1dG8tY3JlYXRlIFNNUyBMb2cnLFxuICBhdXRvTG9nQ2FsbHM6ICdBdXRvIGxvZyBjYWxscycsXG4gIGF1dG9Mb2dTTVM6ICdBdXRvIGxvZyBTTVMnLFxuICBjbGlja1RvU01TOiAnQ2xpY2sgdG8gU01TJyxcbiAgY2xpY2tUb0RpYWxTTVM6ICdDbGljayB0byBEaWFsL1NNUycsXG4gIGF1ZGlvOiAnQXVkaW8nLFxuICBsYW5ndWFnZTogJ0xhbmd1YWdlJyxcbiAgZmVlZGJhY2s6ICdGZWVkYmFjaycsXG4gIHVzZXJHdWlkZTogXCJXaGF0XFwncyBOZXdcIixcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5hdXRob3JpemVkOiAnQXV0aG9yaXplJyxcbiAgYXV0aG9yaXplZDogJ1VuYXV0aG9yaXplJyxcbiAgdW5hdXRob3JpemVkVGl0bGU6ICdBdXRob3JpemVkIEFjY291bnQnLFxuICB0b29sdGlwOiAnWW91IGhhdmUgYXV0aG9yaXplZCBSaW5nQ2VudHJhbCBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIGFjY291bnQgJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFkZE1lZXRpbmc6ICdBZGQgTWVldGluZycsXG4gIGFkZE1lZXRpbmdUaXRsZTogJ0FkZCB7YnJhbmR9IE1lZXRpbmcnLFxuICBtZWV0aW5nU2V0dGluZ3NUaXRsZTogJ3ticmFuZH0gTWVldGluZ3MgLSBTZXR0aW5ncycsXG4gIHdoZW46ICdXaGVuJyxcbiAgcmVjdXJyaW5nTWVldGluZzogJ1JlY3VycmluZyBNZWV0aW5nJyxcbiAgcmVjdXJyaW5nTWVldGluZ1Byb21wdDogJ1BsZWFzZSByZW1lbWJlciB0byBjaGVjayByZWN1cnJlbmNlIG9yIHJlcGVhdCBpbiB5b3VyIGNhbGVuZGFyIGludml0YXRpb24gdG8geW91ciBhdHRlbmRlZXMuJyxcbiAgdmlkZW86ICdWaWRlbyh3aGVuIGpvaW5pbmcgYSBtZWV0aW5nKScsXG4gIGhvc3Q6ICdIb3N0OicsXG4gIG9uOiAnb24nLFxuICBvZmY6ICdvZmYnLFxuICBwYXJ0aWNpcGFudDogJ1BhcnRpY2lwYW50OicsXG4gIGF1ZGlvT3B0aW9uczogJ0F1ZGlvIE9wdGlvbnMnLFxuICB0ZWxlcGhvbmU6ICdUZWxlcGhvbnkgT25seScsXG4gIHZvaXA6ICdWb0lQIE9ubHknLFxuICBib3RoOiAnQm90aCcsXG4gIG1lZXRpbmdPcHRpb25zOiAnTWVldGluZyBPcHRpb25zJyxcbiAgcmVxdWlyZVBhc3N3b3JkOiAnUmVxdWlyZSBtZWV0aW5nIHBhc3N3b3JkJyxcbiAgam9pbkJlZm9yZUhvc3Q6ICdFbmFibGUgam9pbiBiZWZvcmUgaG9zdCcsXG4gIGRvTm90U2hvd0FnYWluOiAnU2F2ZSBhbmQgZG8gbm90IHNob3cgYWdhaW4nLFxuICBzY2hlZHVsZTogJ1NjaGVkdWxlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL01lZXRpbmdIZWxwZXIvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbmNvbWluZ0NhbGw6ICdJbmNvbWluZyBDYWxsIEZyb206JyxcbiAgYW5zd2VyOiAnQW5zd2VyJyxcbiAgaWdub3JlOiAnSWdub3JlJyxcbiAgaW5ib3VuZE1lc3NhZ2U6ICdOZXcge21lc3NhZ2VUeXBlfSBmcm9tIHtmcm9tfScsXG4gIGFub255bW91c0NhbGxlcjogJ2Fub255bW91cyBwZXJzb24nLFxuICBbbWVzc2FnZVR5cGVzLmZheF06ICdmYXgnLFxuICBbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF06ICd2b2ljZW1haWwnLFxuICBbbWVzc2FnZVR5cGVzLnRleHRdOiAndGV4dCBtZXNzYWdlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL2VuLVVTLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICdidXNpbmVzcycsXHJcbiAgJ2V4dGVuc2lvbicsXHJcbiAgJ2hvbWUnLFxyXG4gICdtb2JpbGUnLFxyXG4gICdwaG9uZScsXHJcbiAgJ3Vua25vd24nLFxyXG4gICdjb21wYW55JyxcclxuICAnZGlyZWN0JyxcclxuXSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlbnVtcy9waG9uZVR5cGVzLmpzIiwiaW1wb3J0IEhhc2hNYXAgZnJvbSAnLi4vbGliL0hhc2hNYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xyXG4gIGFsbDogJ0FsbCcsXHJcbiAgZmF4OiAnRmF4JyxcclxuICBzbXM6ICdTTVMnLFxyXG4gIHZvaWNlTWFpbDogJ1ZvaWNlTWFpbCcsXHJcbiAgcGFnZXI6ICdQYWdlcicsXHJcbiAgdGV4dDogJ1RleHQnLFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVudW1zL21lc3NhZ2VUeXBlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc29mdHBob25lJywgLy8gZGVza3RvcFxuICAnbXlwaG9uZScsIC8vIHJpbmdvdXQgYnJhbmRpbmcgcmMuLlxuICAnb3RoZXJwaG9uZScsIC8vIHJpbmdvdXRcbiAgJ2N1c3RvbXBob25lJywgLy8gcmluZ291dFxuICAnYnJvd3NlcicsIC8vIHdlYnBob25lXG5dLCAnY2FsbGluZ09wdGlvbnMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucy5qcyIsImltcG9ydCBIYXNoTWFwIGZyb20gJy4uLy4uL2xpYi9IYXNoTWFwJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhc2hNYXAoe1xuICB0YWtlQWxsQ2FsbHM6ICdUYWtlQWxsQ2FsbHMnLFxuICBkb05vdEFjY2VwdEFueUNhbGxzOiAnRG9Ob3RBY2NlcHRBbnlDYWxscycsXG4gIGRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzOiAnRG9Ob3RBY2NlcHREZXBhcnRtZW50Q2FsbHMnLFxuICB0YWtlRGVwYXJ0bWVudENhbGxzT25seTogJ1Rha2VEZXBhcnRtZW50Q2FsbHNPbmx5Jyxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdub1RvTnVtYmVyJyxcbiAgJ25vQXJlYUNvZGUnLFxuICAnc3BlY2lhbE51bWJlcicsXG4gICdjb25uZWN0RmFpbGVkJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vUmluZ291dEVuYWJsZScsXG5dLCAnY2FsbEVycm9ycycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQ2FsbC9jYWxsRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzZW5kU3VjY2VzcycsXG4gICdzZW5kRXJyb3InLFxuICAnbnVtYmVyVmFsaWRhdGVFcnJvcicsXG4gICd0ZXh0RW1wdHknLFxuICAndGV4dFRvb0xvbmcnLFxuICAnbm9QZXJtaXNzaW9uJyxcbiAgJ3NlbmRlckVtcHR5JyxcbiAgJ25vVG9OdW1iZXInLFxuICAncmVjaXBpZW50c0VtcHR5JyxcbiAgJ3JlY2lwaWVudE51bWJlckludmFsaWRzJyxcbiAgJ3NlbmRlck51bWJlckludmFsaWQnLFxuICAnbm9BcmVhQ29kZScsXG4gICdzcGVjaWFsTnVtYmVyJyxcbiAgJ2ludGVybmFsRXJyb3InLFxuICAnbm90QW5FeHRlbnNpb24nLFxuICAnbmV0d29ya0Vycm9yJyxcbiAgJ25vdFNtc1RvRXh0ZW5zaW9uJyxcbiAgJ2ludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQnLFxuICAnbm9JbnRlcm5hbFNNU1Blcm1pc3Npb24nLFxuICAnc2VuZGluZydcbl0sICdtZXNzYWdlLXNlbmRlci1tc2cnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lc3NhZ2VTZW5kZXIvbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkTWVldGluZ0luZm8nLFxuICAnZW1wdHlUb3BpYycsXG4gICdub1Bhc3N3b3JkJyxcbiAgJ2R1cmF0aW9uSW5jb3JyZWN0JyxcbiAgJ3NjaGVkdWxlZFN1Y2Nlc3MnLFxuXSwgJ21lZXRpbmdTdGF0dXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL01lZXRpbmcvbWVldGluZ1N0YXR1cy5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gODA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDE0IDE1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmZyZWV6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgY29uZmlybTogJ0NvbmZpcm0nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01vZGFsL2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgSGFzaE1hcCBmcm9tICcuLi8uLi9saWIvSGFzaE1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIYXNoTWFwKHtcbiAgb2ZmbGluZTogJ09mZmxpbmUnLFxuICBidXN5OiAnQnVzeScsXG4gIGF2YWlsYWJsZTogJ0F2YWlsYWJsZScsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdlbXB0eVBhc3N3b3JkJyxcbiAgJ2VtcHR5VXNlcm5hbWUnLFxuICAnc2Vzc2lvbkV4cGlyZWQnLFxuICAnYmVmb3JlTG9nb3V0RXJyb3InLFxuICAnbG9naW5FcnJvcicsXG4gICdsb2dvdXRFcnJvcicsXG4gICdhY2Nlc3NEZW5pZWQnLFxuICAnaW50ZXJuYWxFcnJvcicsXG5dLCAnYXV0aE1lc3NhZ2VzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnc2F2ZVN1Y2Nlc3MnLFxuICAnc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lJyxcbiAgJ3Blcm1pc3Npb25DaGFuZ2VkJyxcbiAgJ3Bob25lTnVtYmVyQ2hhbmdlZCcsXG4gICd3ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkJyxcbiAgJ2VtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUnLFxuXSwgJ2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuanMiLCJpbXBvcnQgRW51bSBmcm9tICcuLi8uLi9saWIvRW51bSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcbiAgJ2Rpc2Nvbm5lY3RlZCcsXG5dLCAnY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2UnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL0Nvbm5lY3Rpdml0eU1vbml0b3IvY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdzYXZlU3VjY2VzcycsXG4gICdkaWFsaW5nUGxhbnNDaGFuZ2VkJyxcbiAgJ2FyZWFDb2RlSW52YWxpZCcsXG5dLCAncmVnaW9uU2V0dGluZ3NNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUmVnaW9uU2V0dGluZ3MvcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnY29ubmVjdEZhaWxlZCcsXG4gICdjb25uZWN0ZWQnLFxuICAnYnJvd3Nlck5vdFN1cHBvcnRlZCcsXG4gICd3ZWJwaG9uZUNvdW50T3ZlckxpbWl0JyxcbiAgJ3dlYnBob25lRm9yYmlkZGVuJyxcbiAgJ25vdE91dGJvdW5kQ2FsbFdpdGhvdXRETCcsXG4gICdub3RXZWJwaG9uZVBlcm1pc3Npb24nLFxuICAnZ2V0U2lwUHJvdmlzaW9uRXJyb3InLFxuICAndG9Wb2ljZU1haWxFcnJvcicsXG4gICdjaGVja0RMRXJyb3InLFxuICAnZm9yd2FyZEVycm9yJyxcbiAgJ211dGVFcnJvcicsXG4gICdob2xkRXJyb3InLFxuICAnZmxpcEVycm9yJyxcbiAgJ3JlY29yZEVycm9yJyxcbiAgJ3JlY29yZERpc2FibGVkJyxcbiAgJ3RyYW5zZmVyRXJyb3InLFxuICAncmVxdWVzdFRpbWVvdXQnLFxuICAnc2VydmVyVGltZW91dCcsXG4gICdpbnRlcm5hbFNlcnZlckVycm9yJyxcbiAgJ3NpcFByb3Zpc2lvbkVycm9yJyxcbiAgJ3Vua25vd25FcnJvcicsXG5dLCAnd2VicGhvbmUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdpbnZhbGlkVGllcicsXG5dLCAncGVybWlzc2lvbnNNZXNzYWdlcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdkZWxldGVGYWlsZWQnLFxuICAncmVhZEZhaWxlZCcsXG4gICd1bnJlYWRGYWlsZWQnLFxuXSwgJ21lc3NhZ2VTdG9yZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvTWVzc2FnZVN0b3JlL21lc3NhZ2VTdG9yZUVycm9ycy5qcyIsImltcG9ydCBFbnVtIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAnYWNjb3VudExvZ2dlZE91dCcsXG4gICdub3RBdXRob3JpemVkJ1xuXSwgJ2F1dGhvcml6YXRpb25FcnJvcicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2F1dGhvcml6YXRpb25FcnJvci5qcyIsImltcG9ydCBFbnVtIGZyb20gJy4uLy4uL2xpYi9FbnVtJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xuICAncmVxdWlyZUFkaXRpb25hbE51bWJlcnMnLFxuXSwgJ2NvbmZlcmVuY2UtbXNnJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbW9kdWxlcy9Db25mZXJlbmNlL21lc3NhZ2VzLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAnLi4vLi4vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICd1c2VyTWVkaWFQZXJtaXNzaW9uJyxcclxuXSwgJ2F1ZGlvU2V0dGluZ3MnKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZXMvQXVkaW9TZXR0aW5ncy9hdWRpb1NldHRpbmdzRXJyb3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxNCAxNSJdLCJzb3VyY2VSb290IjoiIn0=