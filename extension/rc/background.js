webpackJsonp([12],{

/***/ 3085:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(222);
module.exports = __webpack_require__(3086);


/***/ }),

/***/ 3086:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _ExtensionServerRunner = __webpack_require__(3087);

var _ExtensionServerRunner2 = _interopRequireDefault(_ExtensionServerRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.runner = new _ExtensionServerRunner2.default();
global.server = global.runner._server;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),

/***/ 3087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(120);

var _set2 = _interopRequireDefault(_set);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(284);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(91);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(121);

var _formatMessage = __webpack_require__(198);

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _uuid = __webpack_require__(229);

var _uuid2 = _interopRequireDefault(_uuid);

var _ramda = __webpack_require__(131);

var _ramda2 = _interopRequireDefault(_ramda);

var _formatNumber = __webpack_require__(187);

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _debounce = __webpack_require__(369);

var _debounce2 = _interopRequireDefault(_debounce);

var _messageHelper = __webpack_require__(379);

var _ChromeTransport = __webpack_require__(934);

var _getProxyServer = __webpack_require__(3088);

var _getProxyServer2 = _interopRequireDefault(_getProxyServer);

var _answer = __webpack_require__(3090);

var _answer2 = _interopRequireDefault(_answer);

var _reject = __webpack_require__(3091);

var _reject2 = _interopRequireDefault(_reject);

var _Phone = __webpack_require__(937);

var _Phone2 = _interopRequireDefault(_Phone);

var _App = __webpack_require__(991);

var _App2 = _interopRequireDefault(_App);

var _createWindow = __webpack_require__(3092);

var _createWindow2 = _interopRequireDefault(_createWindow);

var _Logo = __webpack_require__(1066);

var _Logo2 = _interopRequireDefault(_Logo);

var _Icon = __webpack_require__(1067);

var _Icon2 = _interopRequireDefault(_Icon);

var _notificationIcon = __webpack_require__(3093);

var _notificationIcon2 = _interopRequireDefault(_notificationIcon);

var _BaseRunner2 = __webpack_require__(384);

var _BaseRunner3 = _interopRequireDefault(_BaseRunner2);

var _MeetingServerHelper = __webpack_require__(3094);

var _MeetingServerHelper2 = _interopRequireDefault(_MeetingServerHelper);

var _migrateLocalStorage = __webpack_require__(3097);

var _migrateLocalStorage2 = _interopRequireDefault(_migrateLocalStorage);

var _i18n = __webpack_require__(3098);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

// eslint-disable-next-line

// eslint-disable-next-line
var ProxyServer = (0, _getProxyServer2.default)(_Phone2.default);
// eslint-disable-next-line

// eslint-disable-next-line

// eslint-disable-next-line

var ExtensionServerRunner = function (_BaseRunner) {
  (0, _inherits3.default)(ExtensionServerRunner, _BaseRunner);

  function ExtensionServerRunner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExtensionServerRunner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExtensionServerRunner.__proto__ || (0, _getPrototypeOf2.default)(ExtensionServerRunner)).call.apply(_ref, [this].concat(args))), _this), _this._handleNewInboundMessage = function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var notificationId = arguments[1];

      var target = _this._server._target;
      var currentLocale = target.locale.currentLocale;

      var from = message.from || {};
      var fromNumber = from.extensionNumber || from.phoneNumber;
      var contactMapping = target.contactMatcher && target.contactMatcher.dataMapping;
      var fromMatches = contactMapping && contactMapping[fromNumber] || [];

      var messageType = (0, _messageHelper.getMessageType)(message);

      var fromSlot = null;
      if (fromMatches.length === 1) {
        fromSlot = fromMatches[0].name;
      } else if (fromNumber) {
        fromSlot = fromNumber;
      } else {
        fromSlot = _i18n2.default.getString('anonymousCaller', currentLocale);
      }

      var options = {
        type: 'basic',
        iconUrl: _notificationIcon2.default,
        title: chrome.runtime.getManifest().name,
        message: (0, _formatMessage2.default)(_i18n2.default.getString('inboundMessage', currentLocale), {
          messageType: _i18n2.default.getString(messageType, currentLocale),
          from: fromSlot
        })
      };

      // clear the previous notification first
      chrome.notifications.clear(notificationId);
      chrome.notifications.create(notificationId, options);
    }, _this._onStateChange = function () {
      var target = _this._server._target;
      if (target.chromeAdapter.clickToDial !== _this._clickToDial) {
        _this._clickToDial = target.chromeAdapter.clickToDial;
        chrome.storage.local.set({
          clickToDial: !!_this._clickToDial
        });
      }
      if (_this._c2dPermission !== _this.c2dPermission) {
        _this._c2dPermission = _this.c2dPermission;
        chrome.storage.local.set({
          c2dPermission: _this._c2dPermission
        });
      }
      if (_this._c2smsPermission !== _this.c2smsPermission) {
        _this._c2smsPermission = _this.c2smsPermission;
        chrome.storage.local.set({
          c2smsPermission: _this._c2smsPermission
        });
      }
      if (target.webphone.ringSession && !_this._notificationIdSet.has(target.webphone.ringSession.id) && target.webphone.ringSession.callStatus === 'webphone-session-connecting') {
        _this._createNotification(target.webphone.ringSessionId);
      }
      if (_this._notificationIdSet && _this._notificationIdSet.size > 0) {
        var ringSessions = new _set2.default();
        target.webphone.sessions.forEach(function (session) {
          if (session.callStatus === 'webphone-session-connecting' && session.direction === 'Inbound') {
            ringSessions.add(session.id);
          }
        });
        var inactiveNotificationIdArr = [].concat((0, _toConsumableArray3.default)(_this._notificationIdSet)).filter(function (notificationId) {
          return !ringSessions.has(notificationId);
        });
        inactiveNotificationIdArr.forEach(function (inactiveNotificationId) {
          chrome.notifications.clear(inactiveNotificationId);
          _this._notificationIdSet.delete(inactiveNotificationId);
        });
      }
    }, _this._onWindowRemoved = function (id) {
      if (_this._clientWindow && _this._clientWindow.id === id) {
        _this._clientWindow = null;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExtensionServerRunner, [{
    key: '_renderApp',
    value: function _renderApp() {
      _reactDom2.default.render(_react2.default.createElement(_App2.default, {
        phone: this._server._target,
        logo: _Logo2.default,
        icon: _Icon2.default
      }), document.querySelector('div#viewport'));
    }
  }, {
    key: '_initializeApp',
    value: function _initializeApp() {
      var _this2 = this;

      (0, _migrateLocalStorage2.default)({"prefix":"rc-chrome","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google","application":"Google Chrome","fullName":"RingCentral","teleconference":"https://meetings.ringcentral.com/teleconference"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-fueai0i5mpo6lrfqlekj1p1t0jbj78qq.apps.googleusercontent.com","analyticsKey":"","defaultWhitelist":[],"defaultBlacklist":["*://*.salesforce.com/*","*://*.servicenow.com/*","*://*.mindbodyonline.com/*","*://*.zendesk.com/*","*://*.desk.com/*","*://*.oraclecloud.com/*","*://*.crm.dynamics.com/*","*://github.com/*","*://login.microsoftonline.com/*","*://myaccount.google.com/*","*://login.live.com/*","*://chromedriver.storage.googleapis.com/*"],"managedBlacklist":["*://*.ringcentral.com*","*://ringcentral.*/*","*://*glip.com/*","*://*service-officeathand.att.com/*","*://*btcloudphone.bt.com/*","*://*businessconnect.telus.com/*","*://*google.com*/chrome/newtab*","*://*rc.my.salesforce.com/*","*://chrome.google.com/webstore/*","chrome://*","chrome-extension://*"],"defaultC2DWhitelist":["http://*","https://*"],"defaultC2DBlacklist":[],"managedC2DBlacklist":["*://*.crm.dynamics.com/*"],"version":"4.0.6","buildHash":"485","watch":false}.version);
      this._transport = new _ChromeTransport.ServerTransport();
      this._server = new ProxyServer((0, _extends3.default)({}, {"prefix":"rc-chrome","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google","application":"Google Chrome","fullName":"RingCentral","teleconference":"https://meetings.ringcentral.com/teleconference"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-fueai0i5mpo6lrfqlekj1p1t0jbj78qq.apps.googleusercontent.com","analyticsKey":"","defaultWhitelist":[],"defaultBlacklist":["*://*.salesforce.com/*","*://*.servicenow.com/*","*://*.mindbodyonline.com/*","*://*.zendesk.com/*","*://*.desk.com/*","*://*.oraclecloud.com/*","*://*.crm.dynamics.com/*","*://github.com/*","*://login.microsoftonline.com/*","*://myaccount.google.com/*","*://login.live.com/*","*://chromedriver.storage.googleapis.com/*"],"managedBlacklist":["*://*.ringcentral.com*","*://ringcentral.*/*","*://*glip.com/*","*://*service-officeathand.att.com/*","*://*btcloudphone.bt.com/*","*://*businessconnect.telus.com/*","*://*google.com*/chrome/newtab*","*://*rc.my.salesforce.com/*","*://chrome.google.com/webstore/*","chrome://*","chrome-extension://*"],"defaultC2DWhitelist":["http://*","https://*"],"defaultC2DBlacklist":[],"managedC2DBlacklist":["*://*.crm.dynamics.com/*"],"version":"4.0.6","buildHash":"485","watch":false}, {
        transport: this._transport
      }));
      this._server._target.chromeAdapter.showClientWindow = function () {
        _this2._showClientWindow();
      };
      this._store = (0, _redux.createStore)(this._server.reducer);
      this._server.setStore(this._store);
      if (document.readyState !== 'loading') {
        this._renderApp();
      } else {
        var fn = function fn() {
          window.removeEventListener('load', fn);
          _this2._renderApp();
        };
        window.addEventListener('load', fn);
      }
      chrome.browserAction.onClicked.addListener(function (tab) {
        return _this2._onBrowserAction(tab);
      });
      this._notificationIdSet = new _set2.default();
      this._store.subscribe(function () {
        return _this2._onStateChange();
      });
      this._injectContent();

      var meetingServerHelper = new _MeetingServerHelper2.default({
        phone: this._server,
        server: this
      });
      meetingServerHelper.init();

      // Handle message notifications
      this._handleMessageNotifications();
    }
  }, {
    key: '_handleMessageNotifications',
    value: function _handleMessageNotifications() {
      var _this3 = this;

      var notificationId = _uuid2.default.v4();
      var target = this._server._target;

      target.messageStore.onNewInboundMessage((0, _debounce2.default)(function (message) {
        // Keep track of current message for navigation
        _this3._currentInboundMessage = message;
        _this3._handleNewInboundMessage(message, notificationId);
      }));

      // Set up onclick event listener
      chrome.notifications.onClicked.addListener(function (id) {
        var curMsg = _this3._currentInboundMessage;
        // Only care about inbound message nofication events
        if (id !== notificationId || !curMsg) return;
        _this3._launchAppWindow();

        if ((0, _messageHelper.messageIsTextMessage)(curMsg) && curMsg.conversation &&
        // check if message exists locally
        target.messageStore.messageExists(curMsg)) {
          target.routerInteraction.history.push('/conversations/' + curMsg.conversation.id);
        } else {
          target.routerInteraction.history.push('/messages');

          // Select corresponding tab on message page
          var messageType = (0, _messageHelper.getMessageType)(curMsg);
          target.messages.updateTypeFilter(messageType);
        }
      });
    }
  }, {
    key: '_isInPopUpWindow',
    value: function _isInPopUpWindow(windowId) {
      return new _promise2.default(function (resolve) {
        chrome.windows.get(windowId, function (window) {
          resolve(window.type === chrome.windows.WindowType.POPUP);
        });
      });
    }
  }, {
    key: '_injectContent',
    value: function _injectContent() {
      var _this4 = this;

      // inject content into all http/https tabs
      chrome.tabs.query({
        discarded: false
      }, function (tabs) {
        // tabs that doesn't accept scripts will simple fail without effecting background
        _ramda2.default.forEach(function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(tab) {
            var inPopUpWindow;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this4._isInPopUpWindow(tab.windowId);

                  case 2:
                    inPopUpWindow = _context.sent;

                    if (!inPopUpWindow) {
                      chrome.tabs.executeScript(tab.id, {
                        file: 'content.js'
                      });
                    }

                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this4);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(), tabs);
      });
    }
  }, {
    key: '_onStorageChange',
    value: function _onStorageChange(changes, namespace) {
      (0, _get3.default)(ExtensionServerRunner.prototype.__proto__ || (0, _getPrototypeOf2.default)(ExtensionServerRunner.prototype), '_onStorageChange', this).call(this, changes, namespace);
      if (namespace === 'local' && Object.prototype.hasOwnProperty.call(changes, 'c2d')) {
        var c2d = changes.c2d.newValue;
        chrome.storage.local.remove('c2d');
        if (c2d && c2d.number) {
          if (!c2d.injectedApp) {
            this._showClientWindow();
          }
          this._server._target.routerInteraction.history.push('/dialer');
          var formattedNumber = (0, _formatNumber2.default)({
            phoneNumber: c2d.number,
            countryCode: this._server._target.regionSettings.countryCode,
            areaCode: this._server._target.regionSettings.areaCode
          });
          this._server._target.dialerUI.call({
            phoneNumber: formattedNumber
          });
          // for track
          this._server._target.chromeAdapter.onClickToDial();
          this._server._target.userGuide.dismiss();
        }
      }
      if (namespace === 'local' && Object.prototype.hasOwnProperty.call(changes, 'c2sms')) {
        var c2sms = changes.c2sms.newValue;
        chrome.storage.local.remove('c2sms');
        if (c2sms && c2sms.number) {
          if (!c2sms.injectedApp) {
            this._showClientWindow();
          }
          var _formattedNumber = (0, _formatNumber2.default)({
            phoneNumber: c2sms.number,
            countryCode: this._server._target.regionSettings.countryCode,
            areaCode: this._server._target.regionSettings.areaCode
          });
          this._server._target.routerInteraction.history.push('/composeText');
          if (this._server._target.composeText.typingToNumber) {
            this._server._target.composeText.addToNumber({
              phoneNumber: this._server._target.composeText.typingToNumber,
              name: this._server._target.composeText.typingToNumber
            });
            this._server._target.composeText.cleanTypingToNumber();
          }
          this._server._target.composeText.updateTypingToNumber(_formattedNumber);
          this._server._target.chromeAdapter.onClickToSMS();
          this._server._target.userGuide.dismiss();
          // this._server._target.contactSearch.search({ searchString: c2sms.number });
        }
      }
    }
  }, {
    key: '_showClientWindow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                chrome.windows.onRemoved.addListener(this._onWindowRemoved);

                if (this._clientWindow) {
                  _context2.next = 10;
                  break;
                }

                if (this._clientWindowPromise) {
                  _context2.next = 8;
                  break;
                }

                this._clientWindowPromise = (0, _createWindow2.default)({
                  url: './client.html',
                  width: 300,
                  height: 540,
                  title: {"prefix":"rc-chrome","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google","application":"Google Chrome","fullName":"RingCentral","teleconference":"https://meetings.ringcentral.com/teleconference"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-fueai0i5mpo6lrfqlekj1p1t0jbj78qq.apps.googleusercontent.com","analyticsKey":"","defaultWhitelist":[],"defaultBlacklist":["*://*.salesforce.com/*","*://*.servicenow.com/*","*://*.mindbodyonline.com/*","*://*.zendesk.com/*","*://*.desk.com/*","*://*.oraclecloud.com/*","*://*.crm.dynamics.com/*","*://github.com/*","*://login.microsoftonline.com/*","*://myaccount.google.com/*","*://login.live.com/*","*://chromedriver.storage.googleapis.com/*"],"managedBlacklist":["*://*.ringcentral.com*","*://ringcentral.*/*","*://*glip.com/*","*://*service-officeathand.att.com/*","*://*btcloudphone.bt.com/*","*://*businessconnect.telus.com/*","*://*google.com*/chrome/newtab*","*://*rc.my.salesforce.com/*","*://chrome.google.com/webstore/*","chrome://*","chrome-extension://*"],"defaultC2DWhitelist":["http://*","https://*"],"defaultC2DBlacklist":[],"managedC2DBlacklist":["*://*.crm.dynamics.com/*"],"version":"4.0.6","buildHash":"485","watch":false}.brandConfig.appName,
                  useChromeWindowAPI: true
                });
                _context2.next = 6;
                return this._clientWindowPromise;

              case 6:
                this._clientWindow = _context2.sent;

                this._clientWindowPromise = null;

              case 8:
                _context2.next = 11;
                break;

              case 10:
                chrome.windows.update(this._clientWindow.id, {
                  focused: true
                });

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _showClientWindow() {
        return _ref3.apply(this, arguments);
      }

      return _showClientWindow;
    }()
  }, {
    key: '_onBrowserAction',
    value: function _onBrowserAction(tab) {
      if (tab && this._checkUrl(tab.url)) {
        // if (
        //   this._server._target.chromeAdapter.minimized ||
        //   this._server._target.chromeAdapter.closed
        // ) {
        this._server._target.chromeAdapter.showAdapter(tab);
        // }
      } else {
        this._showClientWindow();
      }
    }
  }, {
    key: '_createNotification',
    value: function _createNotification(sessionId) {
      var _this5 = this;

      var target = this._server._target;
      var contactMapping = target.contactMatcher && target.contactMatcher.dataMapping;
      var fromMatches = contactMapping && contactMapping[target.webphone.ringSession.from] || [];
      var display = void 0;
      if (fromMatches.length === 1) {
        display = _i18n2.default.getString('incomingCall', target.locale.currentLocale) + ' ' + fromMatches[0].name + '\n' + target.webphone.ringSession.from;
      } else {
        display = _i18n2.default.getString('incomingCall', target.locale.currentLocale) + ' ' + target.webphone.ringSession.from;
      }
      var options = {
        type: 'basic',
        iconUrl: _notificationIcon2.default,
        title: chrome.runtime.getManifest().name,
        message: display,
        buttons: [{
          title: _i18n2.default.getString('answer', target.locale.currentLocale),
          iconUrl: _answer2.default
        }, {
          title: _i18n2.default.getString('ignore', target.locale.currentLocale),
          iconUrl: _reject2.default
        }],
        requireInteraction: true
      };
      this._notificationIdSet.add(sessionId);
      chrome.notifications.create(sessionId, options);
      chrome.notifications.onButtonClicked.addListener(function (notificationId, buttonIndex) {
        if (_this5._notificationIdSet.has(notificationId)) {
          if (buttonIndex === 0) {
            _this5._launchAppWindow();
            target.webphone.answer(notificationId);
          } else {
            target.webphone.reject(notificationId);
          }
          if (notificationId) {
            chrome.notifications.clear(notificationId);
            _this5._notificationIdSet.delete(notificationId);
          }
        }
      });
    }
  }, {
    key: '_launchAppWindow',
    value: function _launchAppWindow() {
      var _this6 = this;

      chrome.windows.getLastFocused({}, function (window) {
        if (window && window.focused === true && window.state !== 'minimized') {
          chrome.tabs.query({
            active: true, windowId: window.id
          }, function (tabs) {
            _this6._onBrowserAction(tabs[0]);
          });
        } else {
          _this6._showClientWindow();
        }
      });
    }
  }, {
    key: 'c2dPermission',
    get: function get() {
      return !!this._server._target.rolesAndPermissions.ringoutEnabled;
    }
  }, {
    key: 'c2smsPermission',
    get: function get() {
      return !!(this._server._target.rolesAndPermissions.permissions.OutboundSMS || this._server._target.rolesAndPermissions.permissions.InternalSMS);
    }
  }]);
  return ExtensionServerRunner;
}(_BaseRunner3.default);

exports.default = ExtensionServerRunner;

/***/ }),

/***/ 3088:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(115);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = __webpack_require__(1065);

var _toArray3 = _interopRequireDefault(_toArray2);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = getProxyServer;

var _RcModule2 = __webpack_require__(32);

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _baseActionTypes = __webpack_require__(846);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

var _getProxyServerReducer = __webpack_require__(3089);

var _getProxyServerReducer2 = _interopRequireDefault(_getProxyServerReducer);

var _ensureExist = __webpack_require__(73);

var _ensureExist2 = _interopRequireDefault(_ensureExist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyServer(Target) {
  return function (_RcModule) {
    (0, _inherits3.default)(_class, _RcModule);

    function _class(_ref) {
      var _this2 = this;

      var transport = _ref.transport,
          options = (0, _objectWithoutProperties3.default)(_ref, ['transport']);
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, (0, _extends3.default)({}, options, {
        actionTypes: _baseActionTypes2.default
      })));

      _this._target = new Target((0, _extends3.default)({}, options, {
        getState: function getState() {
          return _this.state.target;
        }
      }));

      var _loop = function _loop(subModule) {
        var _context2;

        if ((_context2 = _this._target, Object.prototype.hasOwnProperty).call(_context2, subModule) && _this._target[subModule] instanceof _RcModule3.default) {
          (0, _defineProperty2.default)(_this, subModule, {
            configurable: false,
            enumerable: true,
            get: function get() {
              return this._target[subModule];
            }
          });
        }
      };

      for (var subModule in _this._target) {
        _loop(subModule);
      }

      _this._transport = _ensureExist2.default.call(_this, transport, 'transport');
      _this._reducer = (0, _getProxyServerReducer2.default)({
        moduleReducer: _this._target.reducer,
        transport: transport,
        prefix: _this.prefix
      });

      transport.on(transport.events.request, function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
          var requestId = _ref3.requestId,
              _ref3$payload = _ref3.payload,
              type = _ref3$payload.type,
              functionPath = _ref3$payload.functionPath,
              args = _ref3$payload.args,
              actionNumber = _ref3$payload.actionNumber;

          var _functionPath$split$s, _functionPath$split$s2, pathTokens, fnName, target, _target, result;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = type;
                  _context.next = _context.t0 === _this.actionTypes.execute ? 3 : _context.t0 === _this.actionTypes.sync ? 18 : 20;
                  break;

                case 3:
                  _functionPath$split$s = functionPath.split('.').slice(1), _functionPath$split$s2 = (0, _toArray3.default)(_functionPath$split$s), pathTokens = _functionPath$split$s2.slice(0);
                  fnName = pathTokens.pop();
                  target = _this._target;

                  pathTokens.forEach(function (token) {
                    target = target[token];
                  });
                  _context.prev = 7;
                  _context.next = 10;
                  return (_target = target)[fnName].apply(_target, (0, _toConsumableArray3.default)(args));

                case 10:
                  result = _context.sent;

                  transport.response({
                    requestId: requestId,
                    result: result
                  });
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t1 = _context['catch'](7);

                  transport.response({
                    requestId: requestId,
                    error: _context.t1
                  });

                case 17:
                  return _context.abrupt('break', 22);

                case 18:
                  if (actionNumber !== _this.state.actionNumber) {
                    transport.response({
                      requestId: requestId,
                      result: _this.state
                    });
                  } else {
                    transport.response({
                      requestId: requestId,
                      error: new Error('State is already up to date.')
                    });
                  }
                  return _context.abrupt('break', 22);

                case 20:
                  transport.response({
                    requestId: requestId,
                    error: new Error('Invalid request type \'' + type + '\'.')
                  });
                  return _context.abrupt('break', 22);

                case 22:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[7, 14]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      return _this;
    }

    return _class;
  }(_RcModule3.default);
}


/***/ }),

/***/ 3089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProxyServerReducer;

var _Enum = __webpack_require__(13);

var _baseActionTypes = __webpack_require__(846);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyServerReducer(_ref) {
  var moduleReducer = _ref.moduleReducer,
      transport = _ref.transport,
      prefix = _ref.prefix;

  var actionTypes = (0, _Enum.prefixEnum)({ enumMap: _baseActionTypes2.default, prefix: prefix });
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      target: moduleReducer(undefined, {
        type: actionTypes.initModule
      }),
      lastAction: null,
      actionNumber: -1
    };
    var action = arguments[1];

    if (!action) return state;
    var nextActionNumber = state.actionNumber + 1;
    transport.push({
      payload: {
        type: actionTypes.action,
        action: action,
        actionNumber: nextActionNumber
      }
    });
    return {
      target: moduleReducer(state.target, action),
      lastAction: action,
      actionNumber: nextActionNumber
    };
  };
}


/***/ }),

/***/ 3090:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABbUlEQVR42mNgwAEyL1UIZl0tSMi8XLA+81LBzczL+Z/BGMwuWA+WA6phIBY03G/gAGqszLhU8CHjUv5//LjgA0gtSA9eQwtvFkpnXC44TdhANAzUA9KL29BLBU9INhTh+icYhoO8QpZLsbgcJVggYUqhoVAMMgse+7giqv127//rn2/+n/doESlB8gGcWkDJBpeiJ9+f/geBr3++/i++WkW04SAzQcGwHpeCNz/f/oeB3a/2kRIc6xlACR6XglPvz4AN/QJ08aR704k3GGgmAyg34VLQd3cy2OCH3x6TGIH5n/EaDMJn3p8DG77g0VISDcYTFCAMirQPvz7+//Pvz/+VT9f+P/buxP/H3578r7xeTygocEceDLfe6vr/7c/3/8jg7c93/2tuNOHIKPnr8CY3dMORUwkILH+yGk9yw5NB0HHBlbL/m15s+3/ny73/+18f+p91qRB3BqFZlqZpIUSzYpOmBT1NqyZqVqYAJ2ZWHlw8zSwAAAAASUVORK5CYII="

/***/ }),

/***/ 3091:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABLklEQVR42rWVz0rDQBCHfxRF9NBrEaE+gN48lFJ8At/Dm2BJQkQvwbfoQyRpTOnVm/hOPdT9VhCD+bOr7sBC2J35sjvzm12py25Xh7rPTxVvLhWvZ0rW13bwzRxr+Dhbth8pys+VVAulLxd6rCbK6hNlrwefw3wzxxo++BLTa3fbIz1sruyOlm/Hg5vAB19iiO2ExsVcaT2VrxFD7A84R+Gvv4F+h8NopIU8caS/GgxYX9WnCC45dck5LKsWZEOFfeypPlO2HbenxLBg2u0jH+fjVjeKyp3i8r11HZZNK4JHmz7QqNgbFSTtfWBYMG03IXwvaPnc3WCGBdMJ7AptgIdS4QNtpKKveFTfB9ooXp/ckBTV7ypUr9yCNUiwlg56CQW7NoNe9EGfpn98TD8AdsHl1SslaKYAAAAASUVORK5CYII="

/***/ }),

/***/ 3092:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: refactor
exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var url = _ref2.url,
        width = _ref2.width,
        height = _ref2.height,
        title = _ref2.title,
        _ref2$type = _ref2.type,
        type = _ref2$type === undefined ? 'popup' : _ref2$type,
        _ref2$position = _ref2.position,
        position = _ref2$position === undefined ? 'center' : _ref2$position,
        _ref2$focused = _ref2.focused,
        focused = _ref2$focused === undefined ? true : _ref2$focused,
        _ref2$useChromeWindow = _ref2.useChromeWindowAPI,
        useChromeWindowAPI = _ref2$useChromeWindow === undefined ? true : _ref2$useChromeWindow;
    var isMac, dualScreenLeft, dualScreenTop, windowWidth, windowHeight, top, left, newWindow;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isMac = navigator.userAgent.indexOf('Macintosh') > -1 || navigator.userAgent.indexOf('Mac OS X') > -1;
            dualScreenLeft = parseInt(window.screenLeft !== undefined ? window.screenLeft : screen.left, 10);
            dualScreenTop = parseInt(window.screenTop !== undefined ? window.screenTop : screen.top, 10);
            windowWidth = parseInt(window.innerWidth || document.documentElement.clientWidth || screen.width, 10);
            windowHeight = parseInt(window.innerHeight || document.documentElement.clientHeight || screen.height, 10);
            top = void 0;
            left = void 0;
            _context.t0 = position;
            _context.next = _context.t0 === 'bottom-right' ? 10 : _context.t0 === 'center' ? 13 : 13;
            break;

          case 10:
            top = parseInt(windowHeight - height + dualScreenTop, 10);
            left = parseInt(windowWidth - width + dualScreenLeft, 10);
            return _context.abrupt('break', 16);

          case 13:
            top = parseInt(windowHeight / 2 - height / 2 + dualScreenTop, 10);
            left = parseInt(windowWidth / 2 - width / 2 + dualScreenLeft, 10);
            return _context.abrupt('break', 16);

          case 16:

            if (!isMac) {
              width += 16;
              height += 16;
            }

            if (!useChromeWindowAPI) {
              _context.next = 19;
              break;
            }

            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              try {
                chrome.windows.create({
                  url: url,
                  type: type,
                  focused: focused,
                  width: width,
                  height: height,
                  top: top,
                  left: left
                }, function (wind) {
                  resolve(wind);
                });
              } catch (error) {
                reject(error);
              }
            }));

          case 19:
            newWindow = window.open(url, title, 'scrollbars=yes, resizable=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);


            if (window.focus) {
              newWindow.focus();
            }
            return _context.abrupt('return', newWindow);

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function createWindow(_x) {
    return _ref.apply(this, arguments);
  }

  return createWindow;
}();

/***/ }),

/***/ 3093:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3094:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Meeting = __webpack_require__(783);

var _sleep = __webpack_require__(122);

var _sleep2 = _interopRequireDefault(_sleep);

var _formatMessage = __webpack_require__(198);

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _i18n = __webpack_require__(3095);

var _i18n2 = _interopRequireDefault(_i18n);

var _Channel = __webpack_require__(801);

var _Channel2 = _interopRequireDefault(_Channel);

var _MeetingAction = __webpack_require__(802);

var _MeetingAction2 = _interopRequireDefault(_MeetingAction);

var _getEventTpl = __webpack_require__(988);

var _getEventTpl2 = _interopRequireDefault(_getEventTpl);

var _ValidationError = __webpack_require__(918);

var _addMeetingLiteral = __webpack_require__(803);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MeetingServerHelper = function () {
  function MeetingServerHelper(_ref) {
    var server = _ref.server,
        _ref$phone = _ref.phone;
    _ref$phone = _ref$phone === undefined ? {} : _ref$phone;
    var auth = _ref$phone.auth,
        brand = _ref$phone.brand,
        meeting = _ref$phone.meeting,
        extensionInfo = _ref$phone.extensionInfo,
        googleCalendar = _ref$phone.googleCalendar,
        googleAuthorize = _ref$phone.googleAuthorize,
        rolesAndPermissions = _ref$phone.rolesAndPermissions,
        locale = _ref$phone.locale;
    (0, _classCallCheck3.default)(this, MeetingServerHelper);

    this._server = server;
    this._auth = auth;
    this._brand = brand;
    this._locale = locale;
    this._meeting = meeting;
    this._extensionInfo = extensionInfo;
    this._googleCalendar = googleCalendar;
    this._googleAuthorize = googleAuthorize;
    this._rolesAndPermissions = rolesAndPermissions;

    this._autoPopup = false;
  }

  (0, _createClass3.default)(MeetingServerHelper, [{
    key: 'init',
    value: function init() {
      this._channel = new _Channel2.default(_addMeetingLiteral.ADD_MEETING);

      // Subscribe to auth and authorization status change
      this._subscribeStatusChange();

      this._channel.select(_MeetingAction2.default.getLatestScheduleSetting, this._getLatestScheduleSetting.bind(this)).select(_MeetingAction2.default.autoPopup, this._autoPopupHandler.bind(this)).select(_MeetingAction2.default.shouldAutoPopup, this._shouldAutoPopup.bind(this)).select(_MeetingAction2.default.getBrandName, this._getBrandName.bind(this)).select(_MeetingAction2.default.getAddMeeting, this._getAddMeeting.bind(this)).select(_MeetingAction2.default.getAddMeetingTitle, this._getAddMeetingTitle.bind(this)).select(_MeetingAction2.default.getAuthorizedEmail, this._getAuthorizedEmail.bind(this)).select(_MeetingAction2.default.validate, this._validate.bind(this)).select(_MeetingAction2.default.showAppWindow, this._showAppWindow.bind(this)).select(_MeetingAction2.default.schedule, this._scheduleMeeting.bind(this)).select(_MeetingAction2.default.checkMeetingPermissions, this._hasMeetingPermissions.bind(this)).select(_MeetingAction2.default.getPopupSettings, this._getPopupSettings.bind(this));
    }
  }, {
    key: '_subscribeStatusChange',
    value: function _subscribeStatusChange() {
      var _this = this;

      var notifyFn = function notifyFn() {
        _this.notifyChange();
        return false;
      };
      this._auth.addBeforeLogoutHandler(notifyFn);
      this._auth.addAfterLoggedInHandler(notifyFn);
      this._googleAuthorize.addAfterAuthorizedHandler(notifyFn);
      this._googleAuthorize.addAfterUnauthorizedHandler(notifyFn);
      this._rolesAndPermissions.onDataReady(notifyFn);
    }
  }, {
    key: 'notifyChange',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', this._channel.broadcast({ action: _MeetingAction2.default.statusChange }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function notifyChange() {
        return _ref2.apply(this, arguments);
      }

      return notifyChange;
    }()
  }, {
    key: '_showAppWindow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_, sender) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._server._onBrowserAction(sender.tab);

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _showAppWindow(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return _showAppWindow;
    }()
  }, {
    key: '_autoPopupHandler',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(request) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._autoPopup = request.enable;

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _autoPopupHandler(_x3) {
        return _ref4.apply(this, arguments);
      }

      return _autoPopupHandler;
    }()
  }, {
    key: '_shouldAutoPopup',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', this._autoPopup);

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _shouldAutoPopup() {
        return _ref5.apply(this, arguments);
      }

      return _shouldAutoPopup;
    }()
  }, {
    key: '_scheduleMeeting',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(request) {
        var extensionName, topic, resp;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!request.scheduleData) {
                  _context5.next = 7;
                  break;
                }

                extensionName = this._extensionInfo.info.name || '';
                topic = request.scheduleData.topic || (0, _Meeting.getDefaultMeetingSettings)(extensionName).topic;
                _context5.next = 5;
                return this._meeting.schedule((0, _extends3.default)({}, request.scheduleData, {
                  topic: topic
                }), { isAlertSuccess: false });

              case 5:
                resp = _context5.sent;
                return _context5.abrupt('return', resp ? {
                  topic: resp.meeting.topic,
                  location: resp.meeting.links.joinUri,
                  details: (0, _getEventTpl2.default)(resp, this._brand)
                } : null);

              case 7:
                return _context5.abrupt('return', null);

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _scheduleMeeting(_x4) {
        return _ref6.apply(this, arguments);
      }

      return _scheduleMeeting;
    }()
  }, {
    key: '_hasMeetingPermissions',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt('return', this._auth.loggedIn && this._rolesAndPermissions.ready && !!this._rolesAndPermissions.permissions ? this._rolesAndPermissions.permissions.Meetings : true);

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _hasMeetingPermissions() {
        return _ref7.apply(this, arguments);
      }

      return _hasMeetingPermissions;
    }()
  }, {
    key: '_validate',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(request) {
        var validationResults;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // Validation process
                validationResults = [];

                // Log in check

                if (this._auth.ready && !this._auth.loggedIn) {
                  validationResults.push(_ValidationError.ValidationError.notLoggedIn);
                }

                // Meeting permissions check
                if (this._rolesAndPermissions.ready && !this._rolesAndPermissions.permissions.Meetings) {
                  validationResults.push(_ValidationError.ValidationError.noMeetingPermission);
                }

                // * NOTE: comment out the following code *
                // because under current implementation, google authorization is not necessary
                // also, it will make user a bit confuse when schedule meeting on google calendar
                // with calendar account and authorized account required to be matched
                //

                // Google authorize check
                // if (!this._googleAuthorize.isAuthorized) {
                //   validationResults.push(ValidationError.notAuthorized);
                // }

                // Google authorize check account inconsistency
                // const userEmail = request.payload.userEmail;
                // if (userEmail !== this._googleAuthorize.authorizedAccount) {
                //   validationResults.push(ValidationError.accountInconsistent);
                // }

                return _context7.abrupt('return', validationResults);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _validate(_x5) {
        return _ref8.apply(this, arguments);
      }

      return _validate;
    }()
  }, {
    key: '_getLatestScheduleSetting',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt('return', this._meeting.lastMeetingInfo);

              case 1:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _getLatestScheduleSetting() {
        return _ref9.apply(this, arguments);
      }

      return _getLatestScheduleSetting;
    }()
  }, {
    key: '_getBrandName',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt('return', this._brand.name);

              case 1:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _getBrandName() {
        return _ref10.apply(this, arguments);
      }

      return _getBrandName;
    }()
  }, {
    key: '_getAddMeeting',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt('return', _i18n2.default.getString('addMeeting', this._locale.currentLocale));

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _getAddMeeting() {
        return _ref11.apply(this, arguments);
      }

      return _getAddMeeting;
    }()
  }, {
    key: '_getAddMeetingTitle',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt('return', (0, _formatMessage2.default)(_i18n2.default.getString('addMeetingTitle', this._locale.currentLocale), {
                  brand: this._brand.name
                }));

              case 1:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _getAddMeetingTitle() {
        return _ref12.apply(this, arguments);
      }

      return _getAddMeetingTitle;
    }()
  }, {
    key: '_getPopupSettings',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt('return', {
                  title: (0, _formatMessage2.default)(_i18n2.default.getString('meetingSettingsTitle', this._locale.currentLocale), {
                    brand: this._brand.name
                  }),
                  when: _i18n2.default.getString('when', this._locale.currentLocale),
                  recurringMeeting: _i18n2.default.getString('recurringMeeting', this._locale.currentLocale),
                  recurringMeetingPrompt: _i18n2.default.getString('recurringMeetingPrompt', this._locale.currentLocale),
                  video: _i18n2.default.getString('video', this._locale.currentLocale),
                  host: _i18n2.default.getString('host', this._locale.currentLocale),
                  on: _i18n2.default.getString('on', this._locale.currentLocale),
                  off: _i18n2.default.getString('off', this._locale.currentLocale),
                  participant: _i18n2.default.getString('participant', this._locale.currentLocale),
                  audioOptions: _i18n2.default.getString('audioOptions', this._locale.currentLocale),
                  telephone: _i18n2.default.getString('telephone', this._locale.currentLocale),
                  voip: _i18n2.default.getString('voip', this._locale.currentLocale),
                  both: _i18n2.default.getString('both', this._locale.currentLocale),
                  meetingOptions: _i18n2.default.getString('meetingOptions', this._locale.currentLocale),
                  requirePassword: _i18n2.default.getString('requirePassword', this._locale.currentLocale),
                  joinBeforeHost: _i18n2.default.getString('joinBeforeHost', this._locale.currentLocale),
                  doNotShowAgain: _i18n2.default.getString('doNotShowAgain', this._locale.currentLocale),
                  schedule: _i18n2.default.getString('schedule', this._locale.currentLocale)
                });

              case 1:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _getPopupSettings() {
        return _ref13.apply(this, arguments);
      }

      return _getPopupSettings;
    }()
  }, {
    key: '_getAuthorizedEmail',
    value: function () {
      var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
        return _regenerator2.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt('return', this._googleAuthorize.authorizedAccount);

              case 1:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _getAuthorizedEmail() {
        return _ref14.apply(this, arguments);
      }

      return _getAuthorizedEmail;
    }()
  }, {
    key: 'ready',
    get: function get() {
      return this._auth.ready && this._brand.ready && this._meeting.ready && this._extensionInfo.ready && this._googleCalendar.ready && this._googleAuthorize.ready && this._rolesAndPermissions.ready && this._auth.loggedIn || this._auth.ready && this._brand.ready && !this._meeting.ready && !this._extensionInfo.ready && !this._googleCalendar.ready && !this._googleAuthorize.ready && !this._rolesAndPermissions.ready && !this._auth.loggedIn;
    }
  }]);
  return MeetingServerHelper;
}();

exports.default = MeetingServerHelper;

/***/ }),

/***/ 3095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _I18n = __webpack_require__(21);

var _I18n2 = _interopRequireDefault(_I18n);

var _loadLocale = __webpack_require__(3096);

var _loadLocale2 = _interopRequireDefault(_loadLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _I18n2.default(_loadLocale2.default);

/***/ }),

/***/ 3096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault(_promise);

exports.default = loadLocale;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadLocale(locale) {
  return new _promise2.default(function (resolve) {
    switch (locale) {
      case 'de':

      case 'de-DE':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(10).then((function (require) {
              var data = __webpack_require__(2019);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var data = require('./de-DE');
            resolve(data.__esModule === true ? data.default : data);
          }
          break;
        }
      case 'en':

      case 'en-AU':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(9).then((function (require) {
              var data = __webpack_require__(2020);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data = require('./en-AU');
            resolve(_data.__esModule === true ? _data.default : _data);
          }
          break;
        }
      case 'en-CA':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(11).then((function (require) {
              var data = __webpack_require__(2021);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data2 = require('./en-CA');
            resolve(_data2.__esModule === true ? _data2.default : _data2);
          }
          break;
        }
      case 'en-GB':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(8).then((function (require) {
              var data = __webpack_require__(2022);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data3 = require('./en-GB');
            resolve(_data3.__esModule === true ? _data3.default : _data3);
          }
          break;
        }
      case 'en-US':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(7).then((function (require) {
              var data = __webpack_require__(2023);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data4 = require('./en-US');
            resolve(_data4.__esModule === true ? _data4.default : _data4);
          }
          break;
        }
      case 'es':

      case 'es-419':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(6).then((function (require) {
              var data = __webpack_require__(2024);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data5 = require('./es-419');
            resolve(_data5.__esModule === true ? _data5.default : _data5);
          }
          break;
        }
      case 'es-ES':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(5).then((function (require) {
              var data = __webpack_require__(2025);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data6 = require('./es-ES');
            resolve(_data6.__esModule === true ? _data6.default : _data6);
          }
          break;
        }
      case 'fr':

      case 'fr-CA':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(4).then((function (require) {
              var data = __webpack_require__(2026);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data7 = require('./fr-CA');
            resolve(_data7.__esModule === true ? _data7.default : _data7);
          }
          break;
        }
      case 'fr-FR':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(3).then((function (require) {
              var data = __webpack_require__(2027);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data8 = require('./fr-FR');
            resolve(_data8.__esModule === true ? _data8.default : _data8);
          }
          break;
        }
      case 'it':

      case 'it-IT':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(2).then((function (require) {
              var data = __webpack_require__(2028);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data9 = require('./it-IT');
            resolve(_data9.__esModule === true ? _data9.default : _data9);
          }
          break;
        }
      case 'ja':

      case 'ja-JP':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(1).then((function (require) {
              var data = __webpack_require__(2029);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data10 = require('./ja-JP');
            resolve(_data10.__esModule === true ? _data10.default : _data10);
          }
          break;
        }
      case 'pt':

      case 'pt-BR':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
              var data = __webpack_require__(2030);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data11 = require('./pt-BR');
            resolve(_data11.__esModule === true ? _data11.default : _data11);
          }
          break;
        }
      default:
        resolve({});
        break;
    }
  });
}

/***/ }),

/***/ 3097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = migrateLocalStorage;
var VERSION_KEY = exports.VERSION_KEY = '$$version';

/**
 * Clear localstorage when there is not any version key exists,
 * which means it's a full upgrade. The clear logic can be updated,
 * since currently it works for 3.x migration.
 */
function migrateLocalStorage() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var storage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : localStorage;

  var legacyVersion = storage.getItem(VERSION_KEY);
  if (!legacyVersion) {
    storage.clear();
  }
  storage.setItem(VERSION_KEY, version || VERSION_KEY);
}

/***/ }),

/***/ 3098:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _I18n = __webpack_require__(21);

var _I18n2 = _interopRequireDefault(_I18n);

var _loadLocale = __webpack_require__(3099);

var _loadLocale2 = _interopRequireDefault(_loadLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _I18n2.default(_loadLocale2.default);

/***/ }),

/***/ 3099:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault(_promise);

exports.default = loadLocale;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadLocale(locale) {
  return new _promise2.default(function (resolve) {
    switch (locale) {
      case 'de':

      case 'de-DE':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(10).then((function (require) {
              var data = __webpack_require__(2031);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var data = require('./de-DE');
            resolve(data.__esModule === true ? data.default : data);
          }
          break;
        }
      case 'en':

      case 'en-AU':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(9).then((function (require) {
              var data = __webpack_require__(2032);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data = require('./en-AU');
            resolve(_data.__esModule === true ? _data.default : _data);
          }
          break;
        }
      case 'en-CA':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(11).then((function (require) {
              var data = __webpack_require__(2033);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data2 = require('./en-CA');
            resolve(_data2.__esModule === true ? _data2.default : _data2);
          }
          break;
        }
      case 'en-GB':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(8).then((function (require) {
              var data = __webpack_require__(2034);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data3 = require('./en-GB');
            resolve(_data3.__esModule === true ? _data3.default : _data3);
          }
          break;
        }
      case 'en-US':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(7).then((function (require) {
              var data = __webpack_require__(2035);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data4 = require('./en-US');
            resolve(_data4.__esModule === true ? _data4.default : _data4);
          }
          break;
        }
      case 'es':

      case 'es-419':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(6).then((function (require) {
              var data = __webpack_require__(2036);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data5 = require('./es-419');
            resolve(_data5.__esModule === true ? _data5.default : _data5);
          }
          break;
        }
      case 'es-ES':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(5).then((function (require) {
              var data = __webpack_require__(2037);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data6 = require('./es-ES');
            resolve(_data6.__esModule === true ? _data6.default : _data6);
          }
          break;
        }
      case 'fr':

      case 'fr-CA':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(4).then((function (require) {
              var data = __webpack_require__(2038);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data7 = require('./fr-CA');
            resolve(_data7.__esModule === true ? _data7.default : _data7);
          }
          break;
        }
      case 'fr-FR':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(3).then((function (require) {
              var data = __webpack_require__(2039);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data8 = require('./fr-FR');
            resolve(_data8.__esModule === true ? _data8.default : _data8);
          }
          break;
        }
      case 'it':

      case 'it-IT':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(2).then((function (require) {
              var data = __webpack_require__(2040);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data9 = require('./it-IT');
            resolve(_data9.__esModule === true ? _data9.default : _data9);
          }
          break;
        }
      case 'ja':

      case 'ja-JP':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(1).then((function (require) {
              var data = __webpack_require__(2041);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data10 = require('./ja-JP');
            resolve(_data10.__esModule === true ? _data10.default : _data10);
          }
          break;
        }
      case 'pt':

      case 'pt-BR':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
              var data = __webpack_require__(2042);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data11 = require('./pt-BR');
            resolve(_data11.__esModule === true ? _data11.default : _data11);
          }
          break;
        }
      default:
        resolve({});
        break;
    }
  });
}

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getIterator2 = __webpack_require__(76);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Channel = function () {
  function Channel(type) {
    (0, _classCallCheck3.default)(this, Channel);

    // action -> handler
    this._mux = {};
    this._type = type;
    this._make();
  }

  (0, _createClass3.default)(Channel, [{
    key: 'select',
    value: function select(actionType, handler) {
      this._mux[actionType] = handler;
      return this;
    }
  }, {
    key: 'send',
    value: function send(packet) {
      var _this = this;

      return new _promise2.default(function (resolve) {
        chrome.runtime.sendMessage((0, _extends3.default)({ type: _this._type }, packet), resolve);
      });
    }
  }, {
    key: 'broadcast',
    value: function broadcast(packet) {
      var _this2 = this;

      var promises = [];
      chrome.tabs.query({}, function (tabs) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var tab = _step.value;

            promises.push(new _promise2.default(function (resolve) {
              chrome.tabs.sendMessage(tab.id, (0, _extends3.default)({ type: _this2._type }, packet), resolve);
            }));
          };

          for (var _iterator = (0, _getIterator3.default)(tabs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      return _promise2.default.all(promises);
    }
  }, {
    key: '_make',
    value: function _make() {
      var _this3 = this;

      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        var type = request.type,
            action = request.action;

        if (type === _this3._type) {
          var handler = _this3._mux[action];
          if (typeof handler === 'function') {
            handler(request, sender).then(function (retval) {
              sendResponse(retval);
            }).catch(function () {
              return sendResponse();
            });
            // Async
            return true;
          }
        }
        return false;
      });
    }
  }]);
  return Channel;
}();

exports.default = Channel;

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['hasLoggedIn', 'hasAuthorized', 'hasMeetingPermission', 'getLatestCalendarEvent', 'getLatestScheduleSetting', 'checkMeetingPermissions', 'autoPopup', 'schedule', 'shouldAutoPopup', 'getBrandName', 'getAddMeeting', 'getAddMeetingTitle', 'getAuthorizedEmail', 'validate', 'statusChange', 'showAppWindow', 'getPopupSettings'], 'meetingActions');

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_MEETING = exports.ADD_MEETING = 'add_meeting';

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationErrorMessagge = exports.ValidationError = undefined;

var _defineProperty2 = __webpack_require__(183);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ValidationErrorMessa;

var _Enum = __webpack_require__(13);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationError = exports.ValidationError = new _Enum2.default(['notLoggedIn', 'notAuthorized', 'noMeetingPermission', 'accountInconsistent', 'duplicateMeeting'], 'ValidationError');

var ValidationErrorMessagge = exports.ValidationErrorMessagge = (_ValidationErrorMessa = {}, (0, _defineProperty3.default)(_ValidationErrorMessa, ValidationError.notLoggedIn, function (brand) {
  return 'Please login ' + brand + ' for Google extension to create meeting';
}), (0, _defineProperty3.default)(_ValidationErrorMessa, ValidationError.notAuthorized, function (brand) {
  return brand + ' for Google would need your authorization to access this Google account of yours before setting up an event for you.';
}), (0, _defineProperty3.default)(_ValidationErrorMessa, ValidationError.accountInconsistent, function (brand) {
  return 'You have logged in Google with a different account. ' + brand + ' for Google would need your authorization to access this Google account of yours before setting up an event for you.';
}), (0, _defineProperty3.default)(_ValidationErrorMessa, ValidationError.noMeetingPermission, function (brand) {
  return 'You don\'t have permission to setup a ' + brand + ' meeting, please contact your ' + brand + ' account administrator for upgrade.';
}), (0, _defineProperty3.default)(_ValidationErrorMessa, ValidationError.duplicateMeeting, function (brand) {
  return 'You already have a ' + brand + ' meeting scheduled with this event.';
}), _ValidationErrorMessa);

/***/ })

},[3085]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9wcm94eS9nZXRQcm94eVNlcnZlci5qcyIsIndlYnBhY2s6Ly8vbGliL3Byb3h5L2dldFByb3h5U2VydmVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvYW5zd2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvcmVqZWN0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NyZWF0ZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvbm90aWZpY2F0aW9uSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL01lZXRpbmdTZXJ2ZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL2kxOG4vbG9hZExvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9taWdyYXRlTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyL2kxOG4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9sb2FkTG9jYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvTWVldGluZ0hlbHBlci9DaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvTWVldGluZ0hlbHBlci9NZWV0aW5nQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvTWVldGluZ0hlbHBlci9hZGRNZWV0aW5nTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL01lZXRpbmdIZWxwZXIvVmFsaWRhdGlvbkVycm9yLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJ1bm5lciIsInNlcnZlciIsIl9zZXJ2ZXIiLCJQcm94eVNlcnZlciIsIkV4dGVuc2lvblNlcnZlclJ1bm5lciIsIl9oYW5kbGVOZXdJbmJvdW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb25JZCIsInRhcmdldCIsIl90YXJnZXQiLCJjdXJyZW50TG9jYWxlIiwibG9jYWxlIiwiZnJvbSIsImZyb21OdW1iZXIiLCJleHRlbnNpb25OdW1iZXIiLCJwaG9uZU51bWJlciIsImNvbnRhY3RNYXBwaW5nIiwiY29udGFjdE1hdGNoZXIiLCJkYXRhTWFwcGluZyIsImZyb21NYXRjaGVzIiwibWVzc2FnZVR5cGUiLCJmcm9tU2xvdCIsImxlbmd0aCIsIm5hbWUiLCJnZXRTdHJpbmciLCJvcHRpb25zIiwidHlwZSIsImljb25VcmwiLCJ0aXRsZSIsImNocm9tZSIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsIm5vdGlmaWNhdGlvbnMiLCJjbGVhciIsImNyZWF0ZSIsIl9vblN0YXRlQ2hhbmdlIiwiY2hyb21lQWRhcHRlciIsImNsaWNrVG9EaWFsIiwiX2NsaWNrVG9EaWFsIiwic3RvcmFnZSIsImxvY2FsIiwic2V0IiwiX2MyZFBlcm1pc3Npb24iLCJjMmRQZXJtaXNzaW9uIiwiX2Myc21zUGVybWlzc2lvbiIsImMyc21zUGVybWlzc2lvbiIsIndlYnBob25lIiwicmluZ1Nlc3Npb24iLCJfbm90aWZpY2F0aW9uSWRTZXQiLCJoYXMiLCJpZCIsImNhbGxTdGF0dXMiLCJfY3JlYXRlTm90aWZpY2F0aW9uIiwicmluZ1Nlc3Npb25JZCIsInNpemUiLCJyaW5nU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImZvckVhY2giLCJzZXNzaW9uIiwiZGlyZWN0aW9uIiwiYWRkIiwiaW5hY3RpdmVOb3RpZmljYXRpb25JZEFyciIsImZpbHRlciIsImluYWN0aXZlTm90aWZpY2F0aW9uSWQiLCJkZWxldGUiLCJfb25XaW5kb3dSZW1vdmVkIiwiX2NsaWVudFdpbmRvdyIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmZpZyIsInZlcnNpb24iLCJfdHJhbnNwb3J0IiwidHJhbnNwb3J0Iiwic2hvd0NsaWVudFdpbmRvdyIsIl9zaG93Q2xpZW50V2luZG93IiwiX3N0b3JlIiwicmVkdWNlciIsInNldFN0b3JlIiwicmVhZHlTdGF0ZSIsIl9yZW5kZXJBcHAiLCJmbiIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYnJvd3NlckFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwiX29uQnJvd3NlckFjdGlvbiIsInRhYiIsInN1YnNjcmliZSIsIl9pbmplY3RDb250ZW50IiwibWVldGluZ1NlcnZlckhlbHBlciIsInBob25lIiwiaW5pdCIsIl9oYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9ucyIsInY0IiwibWVzc2FnZVN0b3JlIiwib25OZXdJbmJvdW5kTWVzc2FnZSIsIl9jdXJyZW50SW5ib3VuZE1lc3NhZ2UiLCJjdXJNc2ciLCJfbGF1bmNoQXBwV2luZG93IiwiY29udmVyc2F0aW9uIiwibWVzc2FnZUV4aXN0cyIsInJvdXRlckludGVyYWN0aW9uIiwiaGlzdG9yeSIsInB1c2giLCJtZXNzYWdlcyIsInVwZGF0ZVR5cGVGaWx0ZXIiLCJ3aW5kb3dJZCIsInJlc29sdmUiLCJ3aW5kb3dzIiwiZ2V0IiwiV2luZG93VHlwZSIsIlBPUFVQIiwidGFicyIsInF1ZXJ5IiwiZGlzY2FyZGVkIiwiX2lzSW5Qb3BVcFdpbmRvdyIsImluUG9wVXBXaW5kb3ciLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsImNoYW5nZXMiLCJuYW1lc3BhY2UiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImMyZCIsIm5ld1ZhbHVlIiwicmVtb3ZlIiwibnVtYmVyIiwiaW5qZWN0ZWRBcHAiLCJmb3JtYXR0ZWROdW1iZXIiLCJjb3VudHJ5Q29kZSIsInJlZ2lvblNldHRpbmdzIiwiYXJlYUNvZGUiLCJkaWFsZXJVSSIsImNhbGwiLCJvbkNsaWNrVG9EaWFsIiwidXNlckd1aWRlIiwiZGlzbWlzcyIsImMyc21zIiwiY29tcG9zZVRleHQiLCJ0eXBpbmdUb051bWJlciIsImFkZFRvTnVtYmVyIiwiY2xlYW5UeXBpbmdUb051bWJlciIsInVwZGF0ZVR5cGluZ1RvTnVtYmVyIiwib25DbGlja1RvU01TIiwib25SZW1vdmVkIiwiX2NsaWVudFdpbmRvd1Byb21pc2UiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImJyYW5kQ29uZmlnIiwiYXBwTmFtZSIsInVzZUNocm9tZVdpbmRvd0FQSSIsInVwZGF0ZSIsImZvY3VzZWQiLCJfY2hlY2tVcmwiLCJzaG93QWRhcHRlciIsInNlc3Npb25JZCIsImRpc3BsYXkiLCJidXR0b25zIiwicmVxdWlyZUludGVyYWN0aW9uIiwib25CdXR0b25DbGlja2VkIiwiYnV0dG9uSW5kZXgiLCJhbnN3ZXIiLCJyZWplY3QiLCJnZXRMYXN0Rm9jdXNlZCIsInN0YXRlIiwiYWN0aXZlIiwicm9sZXNBbmRQZXJtaXNzaW9ucyIsInJpbmdvdXRFbmFibGVkIiwicGVybWlzc2lvbnMiLCJPdXRib3VuZFNNUyIsIkludGVybmFsU01TIiwiZ2V0UHJveHlTZXJ2ZXIiLCJUYXJnZXQiLCJhY3Rpb25UeXBlcyIsImdldFN0YXRlIiwic3ViTW9kdWxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIl9yZWR1Y2VyIiwibW9kdWxlUmVkdWNlciIsInByZWZpeCIsIm9uIiwiZXZlbnRzIiwicmVxdWVzdCIsInJlcXVlc3RJZCIsInBheWxvYWQiLCJmdW5jdGlvblBhdGgiLCJhcmdzIiwiYWN0aW9uTnVtYmVyIiwiZXhlY3V0ZSIsInN5bmMiLCJzcGxpdCIsInNsaWNlIiwicGF0aFRva2VucyIsImZuTmFtZSIsInBvcCIsInRva2VuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwiZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyIiwiZW51bU1hcCIsInVuZGVmaW5lZCIsImluaXRNb2R1bGUiLCJsYXN0QWN0aW9uIiwiYWN0aW9uIiwibmV4dEFjdGlvbk51bWJlciIsInBvc2l0aW9uIiwiaXNNYWMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiZHVhbFNjcmVlbkxlZnQiLCJwYXJzZUludCIsInNjcmVlbkxlZnQiLCJzY3JlZW4iLCJsZWZ0IiwiZHVhbFNjcmVlblRvcCIsInNjcmVlblRvcCIsInRvcCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kIiwibmV3V2luZG93Iiwib3BlbiIsImZvY3VzIiwiY3JlYXRlV2luZG93IiwiTWVldGluZ1NlcnZlckhlbHBlciIsImF1dGgiLCJicmFuZCIsIm1lZXRpbmciLCJleHRlbnNpb25JbmZvIiwiZ29vZ2xlQ2FsZW5kYXIiLCJnb29nbGVBdXRob3JpemUiLCJfYXV0aCIsIl9icmFuZCIsIl9sb2NhbGUiLCJfbWVldGluZyIsIl9leHRlbnNpb25JbmZvIiwiX2dvb2dsZUNhbGVuZGFyIiwiX2dvb2dsZUF1dGhvcml6ZSIsIl9yb2xlc0FuZFBlcm1pc3Npb25zIiwiX2F1dG9Qb3B1cCIsIl9jaGFubmVsIiwiX3N1YnNjcmliZVN0YXR1c0NoYW5nZSIsInNlbGVjdCIsImdldExhdGVzdFNjaGVkdWxlU2V0dGluZyIsIl9nZXRMYXRlc3RTY2hlZHVsZVNldHRpbmciLCJiaW5kIiwiYXV0b1BvcHVwIiwiX2F1dG9Qb3B1cEhhbmRsZXIiLCJzaG91bGRBdXRvUG9wdXAiLCJfc2hvdWxkQXV0b1BvcHVwIiwiZ2V0QnJhbmROYW1lIiwiX2dldEJyYW5kTmFtZSIsImdldEFkZE1lZXRpbmciLCJfZ2V0QWRkTWVldGluZyIsImdldEFkZE1lZXRpbmdUaXRsZSIsIl9nZXRBZGRNZWV0aW5nVGl0bGUiLCJnZXRBdXRob3JpemVkRW1haWwiLCJfZ2V0QXV0aG9yaXplZEVtYWlsIiwidmFsaWRhdGUiLCJfdmFsaWRhdGUiLCJzaG93QXBwV2luZG93IiwiX3Nob3dBcHBXaW5kb3ciLCJzY2hlZHVsZSIsIl9zY2hlZHVsZU1lZXRpbmciLCJjaGVja01lZXRpbmdQZXJtaXNzaW9ucyIsIl9oYXNNZWV0aW5nUGVybWlzc2lvbnMiLCJnZXRQb3B1cFNldHRpbmdzIiwiX2dldFBvcHVwU2V0dGluZ3MiLCJub3RpZnlGbiIsIm5vdGlmeUNoYW5nZSIsImFkZEJlZm9yZUxvZ291dEhhbmRsZXIiLCJhZGRBZnRlckxvZ2dlZEluSGFuZGxlciIsImFkZEFmdGVyQXV0aG9yaXplZEhhbmRsZXIiLCJhZGRBZnRlclVuYXV0aG9yaXplZEhhbmRsZXIiLCJvbkRhdGFSZWFkeSIsImJyb2FkY2FzdCIsInN0YXR1c0NoYW5nZSIsIl8iLCJzZW5kZXIiLCJlbmFibGUiLCJzY2hlZHVsZURhdGEiLCJleHRlbnNpb25OYW1lIiwiaW5mbyIsInRvcGljIiwiaXNBbGVydFN1Y2Nlc3MiLCJyZXNwIiwibG9jYXRpb24iLCJsaW5rcyIsImpvaW5VcmkiLCJkZXRhaWxzIiwibG9nZ2VkSW4iLCJyZWFkeSIsIk1lZXRpbmdzIiwidmFsaWRhdGlvblJlc3VsdHMiLCJub3RMb2dnZWRJbiIsIm5vTWVldGluZ1Blcm1pc3Npb24iLCJsYXN0TWVldGluZ0luZm8iLCJ3aGVuIiwicmVjdXJyaW5nTWVldGluZyIsInJlY3VycmluZ01lZXRpbmdQcm9tcHQiLCJ2aWRlbyIsImhvc3QiLCJvZmYiLCJwYXJ0aWNpcGFudCIsImF1ZGlvT3B0aW9ucyIsInRlbGVwaG9uZSIsInZvaXAiLCJib3RoIiwibWVldGluZ09wdGlvbnMiLCJyZXF1aXJlUGFzc3dvcmQiLCJqb2luQmVmb3JlSG9zdCIsImRvTm90U2hvd0FnYWluIiwiYXV0aG9yaXplZEFjY291bnQiLCJsb2FkTG9jYWxlIiwicmVxdWlyZSIsImRhdGEiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1pZ3JhdGVMb2NhbFN0b3JhZ2UiLCJWRVJTSU9OX0tFWSIsImxvY2FsU3RvcmFnZSIsImxlZ2FjeVZlcnNpb24iLCJnZXRJdGVtIiwic2V0SXRlbSIsIkNoYW5uZWwiLCJfbXV4IiwiX3R5cGUiLCJfbWFrZSIsImFjdGlvblR5cGUiLCJoYW5kbGVyIiwicGFja2V0Iiwic2VuZE1lc3NhZ2UiLCJwcm9taXNlcyIsImFsbCIsIm9uTWVzc2FnZSIsInNlbmRSZXNwb25zZSIsInRoZW4iLCJyZXR2YWwiLCJjYXRjaCIsIkFERF9NRUVUSU5HIiwiVmFsaWRhdGlvbkVycm9yIiwiVmFsaWRhdGlvbkVycm9yTWVzc2FnZ2UiLCJub3RBdXRob3JpemVkIiwiYWNjb3VudEluY29uc2lzdGVudCIsImR1cGxpY2F0ZU1lZXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBQSxPQUFPQyxNQUFQLEdBQWdCLHFDQUFoQjtBQUNBRCxPQUFPRSxNQUFQLEdBQWdCRixPQUFPQyxNQUFQLENBQWNFLE9BQTlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQTs7QUFYQTs7QUFUQTtBQXNCQSxJQUFNQyxjQUFjLDhDQUFwQjtBQVhBOztBQUpBOztBQUxBOztJQXNCcUJDLHFCOzs7Ozs7Ozs7Ozs7OzswT0FnRm5CQyx3QixHQUEyQixZQUFrQztBQUFBLFVBQWpDQyxPQUFpQyx1RUFBdkIsRUFBdUI7QUFBQSxVQUFuQkMsY0FBbUI7O0FBQzNE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clJ1bm5lciBmcm9tICcuLi9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyJztcclxuXHJcbmdsb2JhbC5ydW5uZXIgPSBuZXcgRXh0ZW5zaW9uU2VydmVyUnVubmVyKCk7XHJcbmdsb2JhbC5zZXJ2ZXIgPSBnbG9iYWwucnVubmVyLl9zZXJ2ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leHRlbnNpb24vYmFja2dyb3VuZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGZvcm1hdE1lc3NhZ2UgZnJvbSAnZm9ybWF0LW1lc3NhZ2UnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgUiBmcm9tICdyYW1kYSc7XG5pbXBvcnQgZm9ybWF0TnVtYmVyIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9mb3JtYXROdW1iZXInO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9kZWJvdW5jZSc7XG5pbXBvcnQgeyBtZXNzYWdlSXNUZXh0TWVzc2FnZSwgZ2V0TWVzc2FnZVR5cGUgfSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvbWVzc2FnZUhlbHBlcic7XG5pbXBvcnQgeyBTZXJ2ZXJUcmFuc3BvcnQgfSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvQ2hyb21lVHJhbnNwb3J0JztcbmltcG9ydCBnZXRQcm94eVNlcnZlciBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvcHJveHkvZ2V0UHJveHlTZXJ2ZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgQW5zd2VySWNvbiBmcm9tICchdXJsLWxvYWRlciFicmFuZC1sb2dvLXBhdGgvYW5zd2VyLnBuZyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCBSZWplY3RJY29uIGZyb20gJyF1cmwtbG9hZGVyIWJyYW5kLWxvZ28tcGF0aC9yZWplY3QucG5nJztcbmltcG9ydCBQaG9uZSBmcm9tICcuLi8uLi9tb2R1bGVzL1Bob25lJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vY29udGFpbmVycy9BcHAnO1xuaW1wb3J0IGNyZWF0ZVdpbmRvdyBmcm9tICcuLi9jcmVhdGVXaW5kb3cnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgTG9nbyBmcm9tICdicmFuZC1sb2dvLXBhdGgvTG9nby5zdmcnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgSWNvbiBmcm9tICdicmFuZC1sb2dvLXBhdGgvSWNvbi5zdmcnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgaWNvblVybCBmcm9tICchdXJsLWxvYWRlciFicmFuZC1sb2dvLXBhdGgvbm90aWZpY2F0aW9uSWNvbi5wbmcnO1xuaW1wb3J0IEJhc2VSdW5uZXIgZnJvbSAnLi4vQmFzZVJ1bm5lcic7XG5cbmltcG9ydCBNZWV0aW5nU2VydmVySGVscGVyIGZyb20gJy4uL01lZXRpbmdIZWxwZXIvTWVldGluZ1NlcnZlckhlbHBlcic7XG5pbXBvcnQgbWlncmF0ZUxvY2FsU3RvcmFnZSBmcm9tICcuL21pZ3JhdGVMb2NhbFN0b3JhZ2UnO1xuXG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG4vKiBnbG9iYWwgY29uZmlnICovXG5cbmNvbnN0IFByb3h5U2VydmVyID0gZ2V0UHJveHlTZXJ2ZXIoUGhvbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnNpb25TZXJ2ZXJSdW5uZXIgZXh0ZW5kcyBCYXNlUnVubmVyIHtcbiAgX3JlbmRlckFwcCgpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8QXBwXG4gICAgICAgIHBob25lPXt0aGlzLl9zZXJ2ZXIuX3RhcmdldH1cbiAgICAgICAgbG9nbz17TG9nb31cbiAgICAgICAgaWNvbj17SWNvbn1cbiAgICAgIC8+LFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3ZpZXdwb3J0JyksXG4gICAgKTtcbiAgfVxuXG4gIF9pbml0aWFsaXplQXBwKCkge1xuICAgIG1pZ3JhdGVMb2NhbFN0b3JhZ2UoY29uZmlnLnZlcnNpb24pO1xuICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBTZXJ2ZXJUcmFuc3BvcnQoKTtcbiAgICB0aGlzLl9zZXJ2ZXIgPSBuZXcgUHJveHlTZXJ2ZXIoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgdHJhbnNwb3J0OiB0aGlzLl90cmFuc3BvcnQsXG4gICAgfSk7XG4gICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5zaG93Q2xpZW50V2luZG93ID0gKCkgPT4geyB0aGlzLl9zaG93Q2xpZW50V2luZG93KCk7IH07XG4gICAgdGhpcy5fc3RvcmUgPSBjcmVhdGVTdG9yZSh0aGlzLl9zZXJ2ZXIucmVkdWNlcik7XG4gICAgdGhpcy5fc2VydmVyLnNldFN0b3JlKHRoaXMuX3N0b3JlKTtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICB0aGlzLl9yZW5kZXJBcHAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZm4pO1xuICAgICAgICB0aGlzLl9yZW5kZXJBcHAoKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZuKTtcbiAgICB9XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB0aGlzLl9vbkJyb3dzZXJBY3Rpb24odGFiKSk7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5fc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuX29uU3RhdGVDaGFuZ2UoKSk7XG4gICAgdGhpcy5faW5qZWN0Q29udGVudCgpO1xuXG4gICAgY29uc3QgbWVldGluZ1NlcnZlckhlbHBlciA9IG5ldyBNZWV0aW5nU2VydmVySGVscGVyKHtcbiAgICAgIHBob25lOiB0aGlzLl9zZXJ2ZXIsXG4gICAgICBzZXJ2ZXI6IHRoaXMsXG4gICAgfSk7XG4gICAgbWVldGluZ1NlcnZlckhlbHBlci5pbml0KCk7XG5cbiAgICAvLyBIYW5kbGUgbWVzc2FnZSBub3RpZmljYXRpb25zXG4gICAgdGhpcy5faGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbnMoKTtcbiAgfVxuXG4gIF9oYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9ucygpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25JZCA9IHV1aWQudjQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9zZXJ2ZXIuX3RhcmdldDtcblxuICAgIHRhcmdldC5tZXNzYWdlU3RvcmUub25OZXdJbmJvdW5kTWVzc2FnZShkZWJvdW5jZSgobWVzc2FnZSkgPT4ge1xuICAgICAgLy8gS2VlcCB0cmFjayBvZiBjdXJyZW50IG1lc3NhZ2UgZm9yIG5hdmlnYXRpb25cbiAgICAgIHRoaXMuX2N1cnJlbnRJbmJvdW5kTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLl9oYW5kbGVOZXdJbmJvdW5kTWVzc2FnZShtZXNzYWdlLCBub3RpZmljYXRpb25JZCk7XG4gICAgfSkpO1xuXG4gICAgLy8gU2V0IHVwIG9uY2xpY2sgZXZlbnQgbGlzdGVuZXJcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGlkKSA9PiB7XG4gICAgICBjb25zdCBjdXJNc2cgPSB0aGlzLl9jdXJyZW50SW5ib3VuZE1lc3NhZ2U7XG4gICAgICAvLyBPbmx5IGNhcmUgYWJvdXQgaW5ib3VuZCBtZXNzYWdlIG5vZmljYXRpb24gZXZlbnRzXG4gICAgICBpZiAoaWQgIT09IG5vdGlmaWNhdGlvbklkIHx8ICFjdXJNc2cpIHJldHVybjtcbiAgICAgIHRoaXMuX2xhdW5jaEFwcFdpbmRvdygpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIG1lc3NhZ2VJc1RleHRNZXNzYWdlKGN1ck1zZykgJiZcbiAgICAgICAgY3VyTXNnLmNvbnZlcnNhdGlvbiAmJlxuICAgICAgICAvLyBjaGVjayBpZiBtZXNzYWdlIGV4aXN0cyBsb2NhbGx5XG4gICAgICAgIHRhcmdldC5tZXNzYWdlU3RvcmUubWVzc2FnZUV4aXN0cyhjdXJNc2cpXG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0LnJvdXRlckludGVyYWN0aW9uLmhpc3RvcnkucHVzaChgL2NvbnZlcnNhdGlvbnMvJHtjdXJNc2cuY29udmVyc2F0aW9uLmlkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LnJvdXRlckludGVyYWN0aW9uLmhpc3RvcnkucHVzaCgnL21lc3NhZ2VzJyk7XG5cbiAgICAgICAgLy8gU2VsZWN0IGNvcnJlc3BvbmRpbmcgdGFiIG9uIG1lc3NhZ2UgcGFnZVxuICAgICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IGdldE1lc3NhZ2VUeXBlKGN1ck1zZyk7XG4gICAgICAgIHRhcmdldC5tZXNzYWdlcy51cGRhdGVUeXBlRmlsdGVyKG1lc3NhZ2VUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVOZXdJbmJvdW5kTWVzc2FnZSA9IChtZXNzYWdlID0ge30sIG5vdGlmaWNhdGlvbklkKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fc2VydmVyLl90YXJnZXQ7XG4gICAgY29uc3QgY3VycmVudExvY2FsZSA9IHRhcmdldC5sb2NhbGUuY3VycmVudExvY2FsZTtcblxuICAgIGNvbnN0IGZyb20gPSBtZXNzYWdlLmZyb20gfHwge307XG4gICAgY29uc3QgZnJvbU51bWJlciA9IGZyb20uZXh0ZW5zaW9uTnVtYmVyIHx8IGZyb20ucGhvbmVOdW1iZXI7XG4gICAgY29uc3QgY29udGFjdE1hcHBpbmcgPSB0YXJnZXQuY29udGFjdE1hdGNoZXIgJiYgdGFyZ2V0LmNvbnRhY3RNYXRjaGVyLmRhdGFNYXBwaW5nO1xuICAgIGNvbnN0IGZyb21NYXRjaGVzID0gKGNvbnRhY3RNYXBwaW5nICYmIGNvbnRhY3RNYXBwaW5nW2Zyb21OdW1iZXJdKSB8fCBbXTtcblxuICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gZ2V0TWVzc2FnZVR5cGUobWVzc2FnZSk7XG5cbiAgICBsZXQgZnJvbVNsb3QgPSBudWxsO1xuICAgIGlmIChmcm9tTWF0Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZyb21TbG90ID0gZnJvbU1hdGNoZXNbMF0ubmFtZTtcbiAgICB9IGVsc2UgaWYgKGZyb21OdW1iZXIpIHtcbiAgICAgIGZyb21TbG90ID0gZnJvbU51bWJlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbVNsb3QgPSBpMThuLmdldFN0cmluZygnYW5vbnltb3VzQ2FsbGVyJywgY3VycmVudExvY2FsZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICBpY29uVXJsLFxuICAgICAgdGl0bGU6IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgIGkxOG4uZ2V0U3RyaW5nKCdpbmJvdW5kTWVzc2FnZScsIGN1cnJlbnRMb2NhbGUpLFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZVR5cGU6IGkxOG4uZ2V0U3RyaW5nKG1lc3NhZ2VUeXBlLCBjdXJyZW50TG9jYWxlKSxcbiAgICAgICAgICBmcm9tOiBmcm9tU2xvdCxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICB9O1xuXG4gICAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIG5vdGlmaWNhdGlvbiBmaXJzdFxuICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkKTtcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uSWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgX2lzSW5Qb3BVcFdpbmRvdyh3aW5kb3dJZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLndpbmRvd3MuZ2V0KHdpbmRvd0lkLCAod2luZG93KSA9PiB7XG4gICAgICAgIHJlc29sdmUod2luZG93LnR5cGUgPT09IGNocm9tZS53aW5kb3dzLldpbmRvd1R5cGUuUE9QVVApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfaW5qZWN0Q29udGVudCgpIHtcbiAgICAvLyBpbmplY3QgY29udGVudCBpbnRvIGFsbCBodHRwL2h0dHBzIHRhYnNcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICBkaXNjYXJkZWQ6IGZhbHNlLFxuICAgIH0sICh0YWJzKSA9PiB7XG4gICAgICAvLyB0YWJzIHRoYXQgZG9lc24ndCBhY2NlcHQgc2NyaXB0cyB3aWxsIHNpbXBsZSBmYWlsIHdpdGhvdXQgZWZmZWN0aW5nIGJhY2tncm91bmRcbiAgICAgIFIuZm9yRWFjaChhc3luYyAodGFiKSA9PiB7XG4gICAgICAgIGNvbnN0IGluUG9wVXBXaW5kb3cgPSBhd2FpdCB0aGlzLl9pc0luUG9wVXBXaW5kb3codGFiLndpbmRvd0lkKTtcbiAgICAgICAgaWYgKCFpblBvcFVwV2luZG93KSB7XG4gICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgICAgIGZpbGU6ICdjb250ZW50LmpzJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgdGFicyk7XG4gICAgfSk7XG4gIH1cbiAgX29uU3RhdGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fc2VydmVyLl90YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jaHJvbWVBZGFwdGVyLmNsaWNrVG9EaWFsICE9PSB0aGlzLl9jbGlja1RvRGlhbCkge1xuICAgICAgdGhpcy5fY2xpY2tUb0RpYWwgPSB0YXJnZXQuY2hyb21lQWRhcHRlci5jbGlja1RvRGlhbDtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgIGNsaWNrVG9EaWFsOiAhISh0aGlzLl9jbGlja1RvRGlhbCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2MyZFBlcm1pc3Npb24gIT09IHRoaXMuYzJkUGVybWlzc2lvbikge1xuICAgICAgdGhpcy5fYzJkUGVybWlzc2lvbiA9IHRoaXMuYzJkUGVybWlzc2lvbjtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgIGMyZFBlcm1pc3Npb246IHRoaXMuX2MyZFBlcm1pc3Npb24sXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Myc21zUGVybWlzc2lvbiAhPT0gdGhpcy5jMnNtc1Blcm1pc3Npb24pIHtcbiAgICAgIHRoaXMuX2Myc21zUGVybWlzc2lvbiA9IHRoaXMuYzJzbXNQZXJtaXNzaW9uO1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgYzJzbXNQZXJtaXNzaW9uOiB0aGlzLl9jMnNtc1Blcm1pc3Npb24sXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC53ZWJwaG9uZS5yaW5nU2Vzc2lvblxuICAgICAgICAmJiAhdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuaGFzKHRhcmdldC53ZWJwaG9uZS5yaW5nU2Vzc2lvbi5pZClcbiAgICAgICAgJiYgdGFyZ2V0LndlYnBob25lLnJpbmdTZXNzaW9uLmNhbGxTdGF0dXMgPT09ICd3ZWJwaG9uZS1zZXNzaW9uLWNvbm5lY3RpbmcnKSB7XG4gICAgICB0aGlzLl9jcmVhdGVOb3RpZmljYXRpb24odGFyZ2V0LndlYnBob25lLnJpbmdTZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uSWRTZXQgJiYgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuc2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IHJpbmdTZXNzaW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgIHRhcmdldC53ZWJwaG9uZS5zZXNzaW9ucy5mb3JFYWNoKChzZXNzaW9uKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uLmNhbGxTdGF0dXMgPT09ICd3ZWJwaG9uZS1zZXNzaW9uLWNvbm5lY3RpbmcnICYmIHNlc3Npb24uZGlyZWN0aW9uID09PSAnSW5ib3VuZCcpIHtcbiAgICAgICAgICByaW5nU2Vzc2lvbnMuYWRkKHNlc3Npb24uaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGluYWN0aXZlTm90aWZpY2F0aW9uSWRBcnIgPSAoWy4uLnRoaXMuX25vdGlmaWNhdGlvbklkU2V0XS5maWx0ZXIoKG5vdGlmaWNhdGlvbklkID0+ICFyaW5nU2Vzc2lvbnMuaGFzKG5vdGlmaWNhdGlvbklkKSkpKTtcbiAgICAgIGluYWN0aXZlTm90aWZpY2F0aW9uSWRBcnIuZm9yRWFjaCgoaW5hY3RpdmVOb3RpZmljYXRpb25JZCkgPT4ge1xuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihpbmFjdGl2ZU5vdGlmaWNhdGlvbklkKTtcbiAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuZGVsZXRlKGluYWN0aXZlTm90aWZpY2F0aW9uSWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9vblN0b3JhZ2VDaGFuZ2UoY2hhbmdlcywgbmFtZXNwYWNlKSB7XG4gICAgc3VwZXIuX29uU3RvcmFnZUNoYW5nZShjaGFuZ2VzLCBuYW1lc3BhY2UpO1xuICAgIGlmIChuYW1lc3BhY2UgPT09ICdsb2NhbCcgJiYgY2hhbmdlczo6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYzJkJykpIHtcbiAgICAgIGNvbnN0IGMyZCA9IGNoYW5nZXMuYzJkLm5ld1ZhbHVlO1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKCdjMmQnKTtcbiAgICAgIGlmIChjMmQgJiYgYzJkLm51bWJlcikge1xuICAgICAgICBpZiAoIWMyZC5pbmplY3RlZEFwcCkge1xuICAgICAgICAgIHRoaXMuX3Nob3dDbGllbnRXaW5kb3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5yb3V0ZXJJbnRlcmFjdGlvbi5oaXN0b3J5LnB1c2goJy9kaWFsZXInKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gZm9ybWF0TnVtYmVyKHtcbiAgICAgICAgICBwaG9uZU51bWJlcjogYzJkLm51bWJlcixcbiAgICAgICAgICBjb3VudHJ5Q29kZTogdGhpcy5fc2VydmVyLl90YXJnZXQucmVnaW9uU2V0dGluZ3MuY291bnRyeUNvZGUsXG4gICAgICAgICAgYXJlYUNvZGU6IHRoaXMuX3NlcnZlci5fdGFyZ2V0LnJlZ2lvblNldHRpbmdzLmFyZWFDb2RlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuZGlhbGVyVUkuY2FsbCh7XG4gICAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1hdHRlZE51bWJlclxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZm9yIHRyYWNrXG4gICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNocm9tZUFkYXB0ZXIub25DbGlja1RvRGlhbCgpO1xuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC51c2VyR3VpZGUuZGlzbWlzcygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlID09PSAnbG9jYWwnICYmIGNoYW5nZXM6Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2Myc21zJykpIHtcbiAgICAgIGNvbnN0IGMyc21zID0gY2hhbmdlcy5jMnNtcy5uZXdWYWx1ZTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgnYzJzbXMnKTtcbiAgICAgIGlmIChjMnNtcyAmJiBjMnNtcy5udW1iZXIpIHtcbiAgICAgICAgaWYgKCFjMnNtcy5pbmplY3RlZEFwcCkge1xuICAgICAgICAgIHRoaXMuX3Nob3dDbGllbnRXaW5kb3coKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBmb3JtYXROdW1iZXIoe1xuICAgICAgICAgIHBob25lTnVtYmVyOiBjMnNtcy5udW1iZXIsXG4gICAgICAgICAgY291bnRyeUNvZGU6IHRoaXMuX3NlcnZlci5fdGFyZ2V0LnJlZ2lvblNldHRpbmdzLmNvdW50cnlDb2RlLFxuICAgICAgICAgIGFyZWFDb2RlOiB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5yZWdpb25TZXR0aW5ncy5hcmVhQ29kZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LnJvdXRlckludGVyYWN0aW9uLmhpc3RvcnkucHVzaCgnL2NvbXBvc2VUZXh0Jyk7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jb21wb3NlVGV4dC50eXBpbmdUb051bWJlcikge1xuICAgICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNvbXBvc2VUZXh0LmFkZFRvTnVtYmVyKHtcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jb21wb3NlVGV4dC50eXBpbmdUb051bWJlcixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNvbXBvc2VUZXh0LnR5cGluZ1RvTnVtYmVyLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNvbXBvc2VUZXh0LmNsZWFuVHlwaW5nVG9OdW1iZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jb21wb3NlVGV4dC51cGRhdGVUeXBpbmdUb051bWJlcihmb3JtYXR0ZWROdW1iZXIpO1xuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jaHJvbWVBZGFwdGVyLm9uQ2xpY2tUb1NNUygpO1xuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC51c2VyR3VpZGUuZGlzbWlzcygpO1xuICAgICAgICAvLyB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jb250YWN0U2VhcmNoLnNlYXJjaCh7IHNlYXJjaFN0cmluZzogYzJzbXMubnVtYmVyIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBjMmRQZXJtaXNzaW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3NlcnZlci5fdGFyZ2V0LnJvbGVzQW5kUGVybWlzc2lvbnMucmluZ291dEVuYWJsZWQ7XG4gIH1cblxuICBnZXQgYzJzbXNQZXJtaXNzaW9uKCkge1xuICAgIHJldHVybiAhIShcbiAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LnJvbGVzQW5kUGVybWlzc2lvbnMucGVybWlzc2lvbnMuT3V0Ym91bmRTTVMgfHxcbiAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LnJvbGVzQW5kUGVybWlzc2lvbnMucGVybWlzc2lvbnMuSW50ZXJuYWxTTVNcbiAgICApO1xuICB9XG4gIF9vbldpbmRvd1JlbW92ZWQgPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5fY2xpZW50V2luZG93ICYmIHRoaXMuX2NsaWVudFdpbmRvdy5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMuX2NsaWVudFdpbmRvdyA9IG51bGw7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9zaG93Q2xpZW50V2luZG93KCkge1xuICAgIGNocm9tZS53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcih0aGlzLl9vbldpbmRvd1JlbW92ZWQpO1xuICAgIGlmICghdGhpcy5fY2xpZW50V2luZG93KSB7XG4gICAgICBpZiAoIXRoaXMuX2NsaWVudFdpbmRvd1Byb21pc2UpIHtcbiAgICAgICAgdGhpcy5fY2xpZW50V2luZG93UHJvbWlzZSA9IGNyZWF0ZVdpbmRvdyh7XG4gICAgICAgICAgdXJsOiAnLi9jbGllbnQuaHRtbCcsXG4gICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IDU0MCxcbiAgICAgICAgICB0aXRsZTogY29uZmlnLmJyYW5kQ29uZmlnLmFwcE5hbWUsXG4gICAgICAgICAgdXNlQ2hyb21lV2luZG93QVBJOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY2xpZW50V2luZG93ID0gYXdhaXQgdGhpcy5fY2xpZW50V2luZG93UHJvbWlzZTtcbiAgICAgICAgdGhpcy5fY2xpZW50V2luZG93UHJvbWlzZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh0aGlzLl9jbGllbnRXaW5kb3cuaWQsIHtcbiAgICAgICAgZm9jdXNlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBfb25Ccm93c2VyQWN0aW9uKHRhYikge1xuICAgIGlmICh0YWIgJiYgdGhpcy5fY2hlY2tVcmwodGFiLnVybCkpIHtcbiAgICAgIC8vIGlmIChcbiAgICAgIC8vICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5taW5pbWl6ZWQgfHxcbiAgICAgIC8vICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5jbG9zZWRcbiAgICAgIC8vICkge1xuICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5zaG93QWRhcHRlcih0YWIpO1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93Q2xpZW50V2luZG93KCk7XG4gICAgfVxuICB9XG4gIF9jcmVhdGVOb3RpZmljYXRpb24oc2Vzc2lvbklkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fc2VydmVyLl90YXJnZXQ7XG4gICAgY29uc3QgY29udGFjdE1hcHBpbmcgPSB0YXJnZXQuY29udGFjdE1hdGNoZXIgJiYgdGFyZ2V0LmNvbnRhY3RNYXRjaGVyLmRhdGFNYXBwaW5nO1xuICAgIGNvbnN0IGZyb21NYXRjaGVzID0gKGNvbnRhY3RNYXBwaW5nICYmIGNvbnRhY3RNYXBwaW5nW3RhcmdldC53ZWJwaG9uZS5yaW5nU2Vzc2lvbi5mcm9tXSkgfHwgW107XG4gICAgbGV0IGRpc3BsYXk7XG4gICAgaWYgKGZyb21NYXRjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGlzcGxheSA9IGAke2kxOG4uZ2V0U3RyaW5nKCdpbmNvbWluZ0NhbGwnLCB0YXJnZXQubG9jYWxlLmN1cnJlbnRMb2NhbGUpfSAke2Zyb21NYXRjaGVzWzBdLm5hbWV9XFxuJHt0YXJnZXQud2VicGhvbmUucmluZ1Nlc3Npb24uZnJvbX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gYCR7aTE4bi5nZXRTdHJpbmcoJ2luY29taW5nQ2FsbCcsIHRhcmdldC5sb2NhbGUuY3VycmVudExvY2FsZSl9ICR7dGFyZ2V0LndlYnBob25lLnJpbmdTZXNzaW9uLmZyb219YDtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICBpY29uVXJsLFxuICAgICAgdGl0bGU6IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGRpc3BsYXksXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0aXRsZTogaTE4bi5nZXRTdHJpbmcoJ2Fuc3dlcicsIHRhcmdldC5sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICAgIGljb25Vcmw6IEFuc3dlckljb25cbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IGkxOG4uZ2V0U3RyaW5nKCdpZ25vcmUnLCB0YXJnZXQubG9jYWxlLmN1cnJlbnRMb2NhbGUpLFxuICAgICAgICBpY29uVXJsOiBSZWplY3RJY29uXG4gICAgICB9XSxcbiAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuYWRkKHNlc3Npb25JZCk7XG4gICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHNlc3Npb25JZCwgb3B0aW9ucyk7XG4gICAgY2hyb21lLm5vdGlmaWNhdGlvbnMub25CdXR0b25DbGlja2VkLmFkZExpc3RlbmVyKChcbiAgICAgIG5vdGlmaWNhdGlvbklkLCBidXR0b25JbmRleFxuICAgICkgPT4ge1xuICAgICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbklkU2V0Lmhhcyhub3RpZmljYXRpb25JZCkpIHtcbiAgICAgICAgaWYgKGJ1dHRvbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fbGF1bmNoQXBwV2luZG93KCk7XG4gICAgICAgICAgdGFyZ2V0LndlYnBob25lLmFuc3dlcihub3RpZmljYXRpb25JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LndlYnBob25lLnJlamVjdChub3RpZmljYXRpb25JZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbklkKSB7XG4gICAgICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY2xlYXIobm90aWZpY2F0aW9uSWQpO1xuICAgICAgICAgIHRoaXMuX25vdGlmaWNhdGlvbklkU2V0LmRlbGV0ZShub3RpZmljYXRpb25JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9sYXVuY2hBcHBXaW5kb3coKSB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoe30sICh3aW5kb3cpID0+IHtcbiAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmZvY3VzZWQgPT09IHRydWUgJiYgd2luZG93LnN0YXRlICE9PSAnbWluaW1pemVkJykge1xuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLCB3aW5kb3dJZDogd2luZG93LmlkXG4gICAgICAgIH0sICh0YWJzKSA9PiB7XG4gICAgICAgICAgdGhpcy5fb25Ccm93c2VyQWN0aW9uKHRhYnNbMF0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Nob3dDbGllbnRXaW5kb3coKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaW5kZXguanMiLCJpbXBvcnQgUmNNb2R1bGUgZnJvbSAnLi4vUmNNb2R1bGUnO1xyXG5pbXBvcnQgYmFzZUFjdGlvblR5cGVzIGZyb20gJy4vYmFzZUFjdGlvblR5cGVzJztcclxuaW1wb3J0IGdldFByb3h5U2VydmVyUmVkdWNlciBmcm9tICcuL2dldFByb3h5U2VydmVyUmVkdWNlcic7XHJcbmltcG9ydCBlbnN1cmVFeGlzdCBmcm9tICcuLi9lbnN1cmVFeGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm94eVNlcnZlcihUYXJnZXQpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSY01vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHRyYW5zcG9ydCwgLi4ub3B0aW9ucyB9KSB7XHJcbiAgICAgIHN1cGVyKHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIGFjdGlvblR5cGVzOiBiYXNlQWN0aW9uVHlwZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl90YXJnZXQgPSBuZXcgVGFyZ2V0KHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIGdldFN0YXRlOiAoKSA9PiB0aGlzLnN0YXRlLnRhcmdldCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHN1Yk1vZHVsZSBpbiB0aGlzLl90YXJnZXQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLl90YXJnZXQ6Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc3ViTW9kdWxlKSAmJlxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRbc3ViTW9kdWxlXSBpbnN0YW5jZW9mIFJjTW9kdWxlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgc3ViTW9kdWxlLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0W3N1Yk1vZHVsZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IHRoaXM6OmVuc3VyZUV4aXN0KHRyYW5zcG9ydCwgJ3RyYW5zcG9ydCcpO1xyXG4gICAgICB0aGlzLl9yZWR1Y2VyID0gZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyKHtcclxuICAgICAgICBtb2R1bGVSZWR1Y2VyOiB0aGlzLl90YXJnZXQucmVkdWNlcixcclxuICAgICAgICB0cmFuc3BvcnQsXHJcbiAgICAgICAgcHJlZml4OiB0aGlzLnByZWZpeCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cmFuc3BvcnQub24oXHJcbiAgICAgICAgdHJhbnNwb3J0LmV2ZW50cy5yZXF1ZXN0LFxyXG4gICAgICAgIGFzeW5jICh7XHJcbiAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uUGF0aCxcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAgYWN0aW9uTnVtYmVyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuYWN0aW9uVHlwZXMuZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgIGNvbnN0IFsuLi5wYXRoVG9rZW5zXSA9IGZ1bmN0aW9uUGF0aC5zcGxpdCgnLicpLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZuTmFtZSA9IHBhdGhUb2tlbnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuX3RhcmdldDtcclxuICAgICAgICAgICAgICBwYXRoVG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRbdG9rZW5dO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0YXJnZXRbZm5OYW1lXSguLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5yZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5yZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmFjdGlvblR5cGVzLnN5bmM6IHtcclxuICAgICAgICAgICAgICBpZiAoYWN0aW9uTnVtYmVyICE9PSB0aGlzLnN0YXRlLmFjdGlvbk51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQ6IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdTdGF0ZSBpcyBhbHJlYWR5IHVwIHRvIGRhdGUuJyksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICB0cmFuc3BvcnQucmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcihgSW52YWxpZCByZXF1ZXN0IHR5cGUgJyR7dHlwZX0nLmApXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcHJveHkvZ2V0UHJveHlTZXJ2ZXIuanMiLCJpbXBvcnQgeyBwcmVmaXhFbnVtIH0gZnJvbSAnLi4vRW51bSc7XHJcbmltcG9ydCBiYXNlQWN0aW9uVHlwZXMgZnJvbSAnLi9iYXNlQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyKHsgbW9kdWxlUmVkdWNlciwgdHJhbnNwb3J0LCBwcmVmaXggfSkge1xyXG4gIGNvbnN0IGFjdGlvblR5cGVzID0gcHJlZml4RW51bSh7IGVudW1NYXA6IGJhc2VBY3Rpb25UeXBlcywgcHJlZml4IH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgdGFyZ2V0OiBtb2R1bGVSZWR1Y2VyKHVuZGVmaW5lZCwge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmluaXRNb2R1bGUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBsYXN0QWN0aW9uOiBudWxsLFxyXG4gICAgICBhY3Rpb25OdW1iZXI6IC0xLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbixcclxuICApID0+IHtcclxuICAgIGlmICghYWN0aW9uKSByZXR1cm4gc3RhdGU7XHJcbiAgICBjb25zdCBuZXh0QWN0aW9uTnVtYmVyID0gc3RhdGUuYWN0aW9uTnVtYmVyICsgMTtcclxuICAgIHRyYW5zcG9ydC5wdXNoKHtcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFjdGlvbixcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgYWN0aW9uTnVtYmVyOiBuZXh0QWN0aW9uTnVtYmVyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXJnZXQ6IG1vZHVsZVJlZHVjZXIoc3RhdGUudGFyZ2V0LCBhY3Rpb24pLFxyXG4gICAgICBsYXN0QWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgIGFjdGlvbk51bWJlcjogbmV4dEFjdGlvbk51bWJlcixcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Byb3h5L2dldFByb3h5U2VydmVyUmVkdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJZQUFBQVdDQVlBQUFERXRHdzdBQUFCYlVsRVFWUjQybU5nd0FFeUwxVUlabDB0U01pOFhMQSs4MUxCemN6TCtaL0JHTXd1V0ErV0E2cGhJQlkwM0cvZ0FHcXN6TGhVOENIalV2NS8vTGpnQTBndFNBOWVRd3R2RmtwblhDNDRUZGhBTkF6VUE5S0wyOUJMQlU5SU5oVGgraWNZaG9POFFwWkxzYmdjSlZnZ1lVcWhvVkFNTWdzZSs3Z2lxdjEyNy8vcm4yLytuL2RvRVNsQjhnR2NXa0RKQnBlaUo5K2YvZ2VCcjMrKy9pKytXa1cwNFNBelFjR3dIcGVDTnovZi9vZUIzYS8ya1JJYzZ4bEFDUjZYZ2xQdno0QU4vUUowOGFSNzA0azNHR2dtQXlnMzRWTFFkM2N5Mk9DSDN4NlRHSUg1bi9FYURNSm4zcDhERzc3ZzBWSVNEY1lURkNBTWlyUVB2ejcrLy9QdnovK1ZUOWYrUC9idXhQL0gzNTc4cjd4ZVR5Z29jRWNlRExmZTZ2ci83Yy8zLzhqZzdjOTMvMnR1Tk9ISUtQbnI4Q1kzZE1PUlV3a0lMSCt5R2s5eXc1TkIwSEhCbGJML20xNXMrMy9ueTczLysxOGYrcDkxcVJCM0JxRlpscVpwSVVTellwT21CVDFOcXlacVZxWUFKMlpXSGx3OHpTd0FBQUFBU1VWT1JLNUNZSUk9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91cmwtbG9hZGVyIS4vc3JjL2dldEJyYW5kQ29uZmlnL3JjL2Fuc3dlci5wbmdcbi8vIG1vZHVsZSBpZCA9IDMwOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJZQUFBQVdDQVlBQUFERXRHdzdBQUFCTGtsRVFWUjQycldWejByRFFCQ0hmeFJGOU5CckVhRStnTjQ4bEZKOEF0L0RtMkJKUWtRdndiZm9ReVJwVE9uVm0vaE9QZFQ5VmhDRCtiT3I3c0JDMkozNXNqdnptMTJweTI1WGg3clBUeFZ2TGhXdlowclcxM2J3elJ4citEaGJ0aDhweXMrVlZBdWxMeGQ2ckNiSzZoTmxyd2VmdzN3enh4bysrQkxUYTNmYkl6MXNydXlPbG0vSGc1dkFCMTlpaU8yRXhzVmNhVDJWcnhGRDdBODRSK0d2djRGK2g4Tm9wSVU4Y2FTL0dneFlYOVduQ0M0NWRjazVMS3NXWkVPRmZleXBQbE8ySGJlbnhMQmcydTBqSCtmalZqZUt5cDNpOHIxMUhaWk5LNEpIbXo3UXFOZ2JGU1R0ZldCWU1HMDNJWHd2YVBuYzNXQ0dCZE1KN0FwdGdJZFM0UU50cEtLdmVGVGZCOW9vWHAvY2tCVFY3eXBVcjl5Q05VaXdsZzU2Q1FXN05vTmU5RUdmcG45OFREOEFkc0hsMVNzbGFLWUFBQUFBU1VWT1JLNUNZSUk9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91cmwtbG9hZGVyIS4vc3JjL2dldEJyYW5kQ29uZmlnL3JjL3JlamVjdC5wbmdcbi8vIG1vZHVsZSBpZCA9IDMwOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIi8vIFRPRE86IHJlZmFjdG9yXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmRvdyh7XHJcbiAgdXJsLFxyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICB0aXRsZSxcclxuICB0eXBlID0gJ3BvcHVwJyxcclxuICBwb3NpdGlvbiA9ICdjZW50ZXInLFxyXG4gIGZvY3VzZWQgPSB0cnVlLFxyXG4gIHVzZUNocm9tZVdpbmRvd0FQSSA9IHRydWUsXHJcbn0pIHtcclxuICBjb25zdCBpc01hYyA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTWFjaW50b3NoJykgPiAtMSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01hYyBPUyBYJykgPiAtMTtcclxuXHJcbiAgY29uc3QgZHVhbFNjcmVlbkxlZnQgPSBwYXJzZUludChcclxuICAgIHdpbmRvdy5zY3JlZW5MZWZ0ICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICB3aW5kb3cuc2NyZWVuTGVmdCA6XHJcbiAgICAgIHNjcmVlbi5sZWZ0LFxyXG4gICAgMTAsXHJcbiAgKTtcclxuICBjb25zdCBkdWFsU2NyZWVuVG9wID0gcGFyc2VJbnQoXHJcbiAgICB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICB3aW5kb3cuc2NyZWVuVG9wIDpcclxuICAgICAgc2NyZWVuLnRvcCxcclxuICAgIDEwLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gcGFyc2VJbnQoXHJcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgc2NyZWVuLndpZHRoLFxyXG4gICAgMTAsXHJcbiAgKTtcclxuICBjb25zdCB3aW5kb3dIZWlnaHQgPSBwYXJzZUludChcclxuICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHNjcmVlbi5oZWlnaHQsXHJcbiAgICAxMCxcclxuICApO1xyXG5cclxuICBsZXQgdG9wO1xyXG4gIGxldCBsZWZ0O1xyXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XHJcbiAgICAgIHRvcCA9IHBhcnNlSW50KHdpbmRvd0hlaWdodCAtIGhlaWdodCArIGR1YWxTY3JlZW5Ub3AsIDEwKTtcclxuICAgICAgbGVmdCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoIC0gd2lkdGggKyBkdWFsU2NyZWVuTGVmdCwgMTApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2NlbnRlcic6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0b3AgPSBwYXJzZUludCgoKHdpbmRvd0hlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3AsIDEwKTtcclxuICAgICAgbGVmdCA9IHBhcnNlSW50KCgod2luZG93V2lkdGggLyAyKSAtICh3aWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0LCAxMCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc01hYykge1xyXG4gICAgd2lkdGggKz0gMTY7XHJcbiAgICBoZWlnaHQgKz0gMTY7XHJcbiAgfVxyXG4gIGlmICh1c2VDaHJvbWVXaW5kb3dBUEkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY2hyb21lLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICBmb2N1c2VkLFxyXG4gICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgIH0sICh3aW5kKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHdpbmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbihcclxuICAgIHVybCxcclxuICAgIHRpdGxlLFxyXG4gICAgYHNjcm9sbGJhcnM9eWVzLCByZXNpemFibGU9bm8sIHdpZHRoPSR7d2lkdGh9LCBoZWlnaHQ9JHtoZWlnaHR9LCB0b3A9JHt0b3B9LCBsZWZ0PSR7bGVmdH1gLFxyXG4gICk7XHJcblxyXG4gIGlmICh3aW5kb3cuZm9jdXMpIHtcclxuICAgIG5ld1dpbmRvdy5mb2N1cygpO1xyXG4gIH1cclxuICByZXR1cm4gbmV3V2luZG93O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY3JlYXRlV2luZG93LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRkFBQUFCUUNBWUFBQUNPRWZLdEFBQU1ORWxFUVZSNDJ1MWNDWEJVVlJidFFJeUlPb0lqT2hJR0FpSXc3cFlib0FLaW96TkRxVE9PczFTTlRvMDFpcFl3TUNwU2J0RHBkTksvUVhZU0VrQTBRQkNFRUpBbGhIUVd5QUtFa0NZSkNXUWhaQ0Zra3lWa0kyRTdjKzlOZDlLUmpKS2tPNzlUOVUvVnE5Lzl0Mzd2dlB2dTh0NTlyZE5wMEtCQmd3WU5HalJvMEtCQlE0OEY1dXRHd0t5YlNjVkNKWmRLTFJXNFNhbTExY2tpZGFTNnVnOXg4M1NQVWFWaTNZaXM2eTJ4WEhmMWlJdlhlVklsQWpGSGQ3VUhrdGRjbXVzZXlHM3BYdktXNmZyVGo4ZjFXT0t1SlRLTzI5UjlrdWRDOGhyTU42TGNmRHZ5bEVFNG9neVR3cC9MemIrVWF5NGxzVHNrVVVUZWlSV3ZJTEsyS1UvalkvL0ptT2czQno2K29iaEZId0ZQL1U1NCtPNlc0cW1QbEhORGZGZGpnbUV1UHZKL0QxdE56NkNNU0hVeWtZR3VOeGhPMEhtTjVodXdYUm1Mdnhobm9aOCtIRHEvQkF4WWxJWnhhN013ZVdjK0FwS0tzVHl0REdHWkZRZzdVb0VWMWpLWWtrcndidVJ4VEFqTHhwMkwwNkF6SnVJMi9XYThadFJqcS9JTUxwaTluS01UWFdsWXVtcHRtOHllV0cxNkNROGJsa1BudXdlREE2MzRJUG80NGdyUDRtekRSVnd2emwyNGhEMUY1ekREVW9DaFFWYm9ESHR4djJFbFZwbitRSjNUWlNKalhVUGVITjNJcmxSc2ovSUlSdnN0cGNZbTRLbHZNdkF0U2RiNXhrdm9LbXFiTG1OamRpWEdobWJRdXhQeHVOOHl4Q2lQZFkxRVYvaUpOaWU1VTBiaDA0QjNvTk5IWTNoUUdoRlhqa3RYcnNMWnVIejFxaEE1TXBna1VtL0JSd0h2bzg3Y3A3TWt6blFGZ1phT1ZxVEVmQ2VlTjg0bkhaZU1hVkY1T05PQllkcFpWTlB3bm1FNVRqcHlIOFlaRitPRStlN09FR2h4QllHNUhhbEV0dGtISS8xVzQ5YTVCN0FocXdMZGpjM0hLdEh2eXhUY1l3aER1aks4b3dUbXVvTEEybzZRTjhTd0hnTVhIY1MrazlWUUM0Zkt6bVB3a2xSNEd6WjJsTVJhVnhCNFhUOSswanhBSkkvSlM2K29nZHJJcXFvVkVvY1oxcUd3QThOWkZRTFpZRHh2bkNmRGRyK0trdmRqcEpFazlwK1hnbWRJSjlhWmIzSmZBajhMZUZzTXhuZlpGWEEzYk0ycEVzUHlJVmxudHlRd1VYa0l2Y2xWWVd2cnJwZ1pROVpaSDRQWTYvQVR1NVhBSmdyTjJFbStoL3k4c3hjdXVpMkJOVTJYY0YrSUZZLzZCZi9zeEVTM0VoaG0rcTFFR0dxNEs1MGF5b1lrZkdXYTVCNEU4c1RBdzRZUVBQbDFPaTY2SU1Kd1JjUXliazBtUmhsV29mNG5wTERiQ0l4VVJzdkVRRStRdnJaU21JQUk1Vm4xQ2Z5YjhRdVpWZUdnM2c2T2RUbWtxbTY4dHZBRVF1T2xLKzIzN0FycHo1cFRRSk5yL2NlR2k1Y3hQUGd3WGpINnFVdGdsYmtmK3VzMzRZUG9nallWNUFrRDcvbDdNWFJ4NGpWbDJKSkVQTEJzSDE1Y200YTV5WVd0UmljM0FsZzduaDUrZ1k3amdPaHB3SVd6TGlQeHM3Z1R1RVcvQmFmTWQ2aEg0SFpsakV5R3hoZTFiZWlIdTNPaG14VUZUeitMbE41VWV0bEtiMXZSK1ViTFBiOWZaMjJXeUlKSWlyMENnWU5MZ1dPYmdDankxM1pOZGhtQjdPanJqRWtJTjQxWGo4Q1ovdS9namtWcE1zSHBpRW5mV29XZ0cvMWpwTnhzaWtXL09mRzR6UnduNUhuWnp2T3hENVdzcXJybUI1UDlnVVFhVmx2K0N1U0VBM1VsblNMbkNobUtDLzlQVFRqTUl3NWNhc1YvL0tlb1IrRHpmbWFaaHYreGZoa1ZsQ3hFTVVrZVJPU1h5VVVvT051QS9EUDFXSjVXaXI0QnNVS2VsekVHdHlpeHlEbHRJL0Q0RG1BSkJmM1pZVUI5SlNKeVRtTlo2a2tFSFN6QlhwTHlPbm8zZjM1enl4RzhFWEVFUzFKSzJ1amUwcHBHZkJ5ZGh5ZFdIc0J2cUE1LzNwaU9JNVcxVUpJSzhTYmQvOGJtVEd4MGlKSmVYSDhVVHh2bXEwTWdyMEg0NkVObERjTVJUQlJMMnczR1ppbmpvN1c4MVNpVTF6YWlQMTMzTWxyZ1lZakdJeUg3VzZYbHRCWFkvaVpRZVFnMUpOUy9YcGdndzF6M3hTNjh1aUVkejYwK0JOM3MzUlJOMk1vWFVmajN0bXg1TkpPSUdyRTBTYTd6ZSszWFdlL2VQamUrK2JuUGRpR1lPc1NPNmFTN0IrckRVTnRPZk94eUFuazE3Vlo5aEN3QU9TSzY0QXg2R1pxbGp5WHNGMHFjU0ZINDBVcDhaUzBWNCtIcG9BZlhacGJKYzB6eVc5dHo4TmFPQXV3cXFFYmh1UVo1MXF1bEl5ek5aTkl6OW5PZWRPNnVlWHRRVkgwQlQzOTlVRWl6ZDlxVEsxUHdZUEErcWt1MFEyZGFrRlJ5cnFXdUN3NmN4RTM2NzJYaXQ5c0p6RmU4WmVtUlY4OGNzU1NsdUtVaDlpSVM0V3VUQ21tUUJVTVhKV0pOUnV1em44VGtrWVJFaXBTc3l5d1h3OFRQQ1ZGRXRnL2QvMDM2S1FUU0VQNkZ1WmxZSm1ZZ1dmdTVwQ0xzbmNZcTQ3MGRSOFdWWXQxOFAxbDg3aXorelFGZjdwRmhic2VhakFwNDZLT1FyZmgwUDRGWnlsQ3FiQlJKVUZzSCtsMnF2Q09CTGNPSmlsMHZjbVBZelZsckk1Q2pBNVlndnBlbEtxMnNSb2l5djRlUHl4eUdIcnRCdld3Vy9qN1NkYTk5bDk0c21YVHZUYVJmRHp1b2pCZkQwdVFhRS96STh2MjRlTGsxV3RwMGxCeHFYL285WllSN0VNaFZteENhMmtaeVhsaHpDSi9INW1ONlZJNDAzTk51WE9pZXU0bEVkcTU1dVBZanFXTHlXRCt5bnJSM2hGanFnRlk5V2xuWEJPOEZlK1ZlZnNkRTBvc1RRZy9KWis0WTFuZGx0YzFTVmtYM0RscVFJUGN5aWE5dnpHalQyYW9TbUs4TXVtWUljL1RoUTByYlRoSlhlalBwUGpzU2lzOUpJNzFzVXNoRGlvZlpPbks4K1Y2VzBIdkpFTEJsSFdmckNHNDhFL1pEZlpPOEkvWFUrUllYaUFtZUVua01MNjgvM09JMjhXOS9FcE9QdU1JeklwbTliSjNKOTg2T1A5Nkd3RFhVK1N3RVdXb000WEtiRVRFNUdKRXNzb1RzODNuWmZieUF0aGFZQ1dSQ3VFRzliY09QUmkvZStqNUxHc2lFc2FWbFVvY3NTaEF5K055WVZTbmkyekhDeU9qWXllSm5WcEpidEpqMUxoa1lyM1owcmwyVjhQY05XZVZ0Q0Z4SVJxU1BXa2FFM1pnaDVNWnd1b1VkRWNjcVpmMlhsVHNUMUN3NXJmT0RxNnlueEozZzY5eTRWemNjUnRQbEt5SjFIcVNqK05yYjVKYmtucTRYOHNYeTBuMy8zTkxxYTM1SzBtVi9CeE1WYytLTStJZC9FbW16dE9qYklXUjBSbitWSXAzUW5tNWsvSmZjbUx2MTY5UnhZN2c4WjVpRDhXR3RqZVBZdGk5Vmx2VVlTeUpMazExeXBNZjNGN2RlcHdheFRrb3ByWmJ2N0R2eXRZVUhpc2tWT2kzT2RuL2J1WG43aWxyZThmZndUTG5HVVEzcjBCT2tQKzA0UU85aUNXVzF3UjMzRG5XRzNYalpWWU1qWGlKSGVveGhnWHFSeUF6L3laTG9VMjFMMGVCS3N5UE5qZUpqUlczVE5Ua3Q5dXNuNkZoTS9sdTF3emsrY2lOckdxODk1eGh0eURYYjgzelBQeWpLNE9qa1gxdXp4S1hoQ1FxV1ROYXhJdTJ6b3pCdFYwNmJ1ckRVZWdkYU1jVi9xbm9FYmxQR1VrQ2VnTDNGNTFTYjIrUE9ZNGRaOTBsa2k2UE54TEdmS0hxUWh2dkRGTzA0K24rTWxOTHowUGtuWWFOcGdub0VWcHI3UzRyWmpKZ0NWU2RJaTZvYnhIa2VGWmdzNVBIdzVnaUZpWnRweVd0eGF4d3hhMDhoYnRadlJhbDVnTG9UcXE4Ylo4TW55Q3BEUW0zVVV4MUt6emVLWDFsTzZvTU5WSHZnMkh0RXlHRk1NdnFyUHlQTmlaSTYzNzNrbEZiMm1Dbjk3YmsveUpUK0ptV0MrZ1N5Ty9PQVlRWEdoR2E0SkczTjJXQ3Y0TG13VE54citPWW4wOSs2ZFZrejFQUTdTVzRNN3dGU3VDT1BwTTh2Q1NHbVY5eG5YWmlsOEhHL0lJd01Ubk5LMXFtclVFZnUwSU1yckhqUWJ3WHFmeWI1c3R0VE8rS1ZSK0hCbWFHVzQyNUw0T2Z4QmVSWXh5SktlZEk5azR0bUJMd25DVHhiamxXNUhYazc4MytBaC84K1RBMlk1cjdaV2F5VXh4a1hTV1lvSnplNkN6SXJhakZnZmdxZU1nYWh4dHpYZlFua1VtVCtsYVRWRGw2Y0tzbU5hb01uSnU0SlBJVEJodlhJTjN1cm1tQjUzU20rR2Nwd1NhdGxFdFdVeEl5S0dpSXZGWGY1YmthcU1xb2pHMjVxVkU4eTU1emtZU1NKbkJtcWhrNWtkK1VPR3JZc2VSMGl6NFZKNWgzZTVzQmJESjQxTGhiRHdzbU4zZUhpOE16TjUzRmtiY2xnakNhZGwyY2U1RGJiSERxMTBZWW5LejhJbUNLWm9aemN5SE4xam5PRXpnSy9jVnRPRlI1YVlSVlhaV3JBZEp3MzMreEdHMjI2dU5Vcldua0NqL3FGU0hJajUrZEYwTEN1ZDhJRVJNT2xLL2llaUp1NE5sTWlESGFTZHlxajNXK3Jsek0yRzNKYTdRclR5NUxjeU1IODhHQXJQbzA3Z2VTU2FwbEU3Y2d3NWVTZ1dmR0ZHQmx5V043RnNlMHkweCs3c3IzTHRac05uYm5kbGNPb2NHVThYakVhSmNXTUp6YTlsMW9sVjJYNjdnTE1QM0JTRnIxNTJUR2NDbi9tTEFKZXcrQnArRUdCVm5tbXIzNHJKaGtEOEoxcFlydnJHbTYzM2RVVkc2NTVZdzdQQ2svMW40cXhoZ1dTcThJclpiemN5R3UyWFBoekgvMDJXUUFhWTFpSTkvMm5ZUU9SMXQ1cW1sdHZ1QllDWGJ6bG55T0ZFdVZPV2JqbkJXOHUvTG5ZZk5kMVJ4RnV2ZVZmU05UK2RNSkprcWo5N1ltVERJdjJ4enRPOHhON3hsOC9VVjExR2pSbzBLQkJnd1lOR2pSbzBOQmo4VC93ZnNzODJSaDc1Z0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXJsLWxvYWRlciEuL3NyYy9nZXRCcmFuZENvbmZpZy9yYy9ub3RpZmljYXRpb25JY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE1lZXRpbmdTZXR0aW5ncyB9IGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVldGluZyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL3NsZWVwJztcbmltcG9ydCBmb3JtYXRNZXNzYWdlIGZyb20gJ2Zvcm1hdC1tZXNzYWdlJztcbmltcG9ydCBpMThuIGZyb20gJy4vaTE4bic7XG5pbXBvcnQgQ2hhbm5lbCBmcm9tICcuL0NoYW5uZWwnO1xuaW1wb3J0IE1lZXRpbmdBY3Rpb24gZnJvbSAnLi9NZWV0aW5nQWN0aW9uJztcbmltcG9ydCBnZXRFdmVudFRwbCBmcm9tICcuLi8uLi9tb2R1bGVzL0dvb2dsZUNhbGVuZGFyL2dldEV2ZW50VHBsJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gJy4vVmFsaWRhdGlvbkVycm9yJztcbmltcG9ydCB7IEFERF9NRUVUSU5HIH0gZnJvbSAnLi9hZGRNZWV0aW5nTGl0ZXJhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZXRpbmdTZXJ2ZXJIZWxwZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgc2VydmVyLFxuICAgIHBob25lOiB7XG4gICAgICBhdXRoLFxuICAgICAgYnJhbmQsXG4gICAgICBtZWV0aW5nLFxuICAgICAgZXh0ZW5zaW9uSW5mbyxcbiAgICAgIGdvb2dsZUNhbGVuZGFyLFxuICAgICAgZ29vZ2xlQXV0aG9yaXplLFxuICAgICAgcm9sZXNBbmRQZXJtaXNzaW9ucyxcbiAgICAgIGxvY2FsZSxcbiAgICB9ID0ge31cbiAgfSkge1xuICAgIHRoaXMuX3NlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLl9hdXRoID0gYXV0aDtcbiAgICB0aGlzLl9icmFuZCA9IGJyYW5kO1xuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLl9tZWV0aW5nID0gbWVldGluZztcbiAgICB0aGlzLl9leHRlbnNpb25JbmZvID0gZXh0ZW5zaW9uSW5mbztcbiAgICB0aGlzLl9nb29nbGVDYWxlbmRhciA9IGdvb2dsZUNhbGVuZGFyO1xuICAgIHRoaXMuX2dvb2dsZUF1dGhvcml6ZSA9IGdvb2dsZUF1dGhvcml6ZTtcbiAgICB0aGlzLl9yb2xlc0FuZFBlcm1pc3Npb25zID0gcm9sZXNBbmRQZXJtaXNzaW9ucztcblxuICAgIHRoaXMuX2F1dG9Qb3B1cCA9IGZhbHNlO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9jaGFubmVsID0gbmV3IENoYW5uZWwoQUREX01FRVRJTkcpO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIGF1dGggYW5kIGF1dGhvcml6YXRpb24gc3RhdHVzIGNoYW5nZVxuICAgIHRoaXMuX3N1YnNjcmliZVN0YXR1c0NoYW5nZSgpO1xuXG4gICAgdGhpcy5fY2hhbm5lbFxuICAgICAgLnNlbGVjdChNZWV0aW5nQWN0aW9uLmdldExhdGVzdFNjaGVkdWxlU2V0dGluZywgdGhpcy5fZ2V0TGF0ZXN0U2NoZWR1bGVTZXR0aW5nLmJpbmQodGhpcykpXG4gICAgICAuc2VsZWN0KE1lZXRpbmdBY3Rpb24uYXV0b1BvcHVwLCB0aGlzLl9hdXRvUG9wdXBIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgICAuc2VsZWN0KE1lZXRpbmdBY3Rpb24uc2hvdWxkQXV0b1BvcHVwLCB0aGlzLl9zaG91bGRBdXRvUG9wdXAuYmluZCh0aGlzKSlcbiAgICAgIC5zZWxlY3QoTWVldGluZ0FjdGlvbi5nZXRCcmFuZE5hbWUsIHRoaXMuX2dldEJyYW5kTmFtZS5iaW5kKHRoaXMpKVxuICAgICAgLnNlbGVjdChNZWV0aW5nQWN0aW9uLmdldEFkZE1lZXRpbmcsIHRoaXMuX2dldEFkZE1lZXRpbmcuYmluZCh0aGlzKSlcbiAgICAgIC5zZWxlY3QoTWVldGluZ0FjdGlvbi5nZXRBZGRNZWV0aW5nVGl0bGUsIHRoaXMuX2dldEFkZE1lZXRpbmdUaXRsZS5iaW5kKHRoaXMpKVxuICAgICAgLnNlbGVjdChNZWV0aW5nQWN0aW9uLmdldEF1dGhvcml6ZWRFbWFpbCwgdGhpcy5fZ2V0QXV0aG9yaXplZEVtYWlsLmJpbmQodGhpcykpXG4gICAgICAuc2VsZWN0KE1lZXRpbmdBY3Rpb24udmFsaWRhdGUsIHRoaXMuX3ZhbGlkYXRlLmJpbmQodGhpcykpXG4gICAgICAuc2VsZWN0KE1lZXRpbmdBY3Rpb24uc2hvd0FwcFdpbmRvdywgdGhpcy5fc2hvd0FwcFdpbmRvdy5iaW5kKHRoaXMpKVxuICAgICAgLnNlbGVjdChNZWV0aW5nQWN0aW9uLnNjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZU1lZXRpbmcuYmluZCh0aGlzKSlcbiAgICAgIC5zZWxlY3QoTWVldGluZ0FjdGlvbi5jaGVja01lZXRpbmdQZXJtaXNzaW9ucywgdGhpcy5faGFzTWVldGluZ1Blcm1pc3Npb25zLmJpbmQodGhpcykpXG4gICAgICAuc2VsZWN0KE1lZXRpbmdBY3Rpb24uZ2V0UG9wdXBTZXR0aW5ncywgdGhpcy5fZ2V0UG9wdXBTZXR0aW5ncy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9zdWJzY3JpYmVTdGF0dXNDaGFuZ2UoKSB7XG4gICAgY29uc3Qgbm90aWZ5Rm4gPSAoKSA9PiB7XG4gICAgICB0aGlzLm5vdGlmeUNoYW5nZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5fYXV0aC5hZGRCZWZvcmVMb2dvdXRIYW5kbGVyKG5vdGlmeUZuKTtcbiAgICB0aGlzLl9hdXRoLmFkZEFmdGVyTG9nZ2VkSW5IYW5kbGVyKG5vdGlmeUZuKTtcbiAgICB0aGlzLl9nb29nbGVBdXRob3JpemUuYWRkQWZ0ZXJBdXRob3JpemVkSGFuZGxlcihub3RpZnlGbik7XG4gICAgdGhpcy5fZ29vZ2xlQXV0aG9yaXplLmFkZEFmdGVyVW5hdXRob3JpemVkSGFuZGxlcihub3RpZnlGbik7XG4gICAgdGhpcy5fcm9sZXNBbmRQZXJtaXNzaW9ucy5vbkRhdGFSZWFkeShub3RpZnlGbik7XG4gIH1cblxuICBhc3luYyBub3RpZnlDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5uZWwuYnJvYWRjYXN0KHsgYWN0aW9uOiBNZWV0aW5nQWN0aW9uLnN0YXR1c0NoYW5nZSB9KTtcbiAgfVxuXG4gIGdldCByZWFkeSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fYXV0aC5yZWFkeSAmJlxuICAgICAgdGhpcy5fYnJhbmQucmVhZHkgJiZcbiAgICAgIHRoaXMuX21lZXRpbmcucmVhZHkgJiZcbiAgICAgIHRoaXMuX2V4dGVuc2lvbkluZm8ucmVhZHkgJiZcbiAgICAgIHRoaXMuX2dvb2dsZUNhbGVuZGFyLnJlYWR5ICYmXG4gICAgICB0aGlzLl9nb29nbGVBdXRob3JpemUucmVhZHkgJiZcbiAgICAgIHRoaXMuX3JvbGVzQW5kUGVybWlzc2lvbnMucmVhZHkgJiZcbiAgICAgIHRoaXMuX2F1dGgubG9nZ2VkSW5cbiAgICApIHx8IChcbiAgICAgIHRoaXMuX2F1dGgucmVhZHkgJiZcbiAgICAgIHRoaXMuX2JyYW5kLnJlYWR5ICYmXG4gICAgICAhdGhpcy5fbWVldGluZy5yZWFkeSAmJlxuICAgICAgIXRoaXMuX2V4dGVuc2lvbkluZm8ucmVhZHkgJiZcbiAgICAgICF0aGlzLl9nb29nbGVDYWxlbmRhci5yZWFkeSAmJlxuICAgICAgIXRoaXMuX2dvb2dsZUF1dGhvcml6ZS5yZWFkeSAmJlxuICAgICAgIXRoaXMuX3JvbGVzQW5kUGVybWlzc2lvbnMucmVhZHkgJiZcbiAgICAgICF0aGlzLl9hdXRoLmxvZ2dlZEluXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIF9zaG93QXBwV2luZG93KF8sIHNlbmRlcikge1xuICAgIHRoaXMuX3NlcnZlci5fb25Ccm93c2VyQWN0aW9uKHNlbmRlci50YWIpO1xuICB9XG5cbiAgYXN5bmMgX2F1dG9Qb3B1cEhhbmRsZXIocmVxdWVzdCkge1xuICAgIHRoaXMuX2F1dG9Qb3B1cCA9IHJlcXVlc3QuZW5hYmxlO1xuICB9XG5cbiAgYXN5bmMgX3Nob3VsZEF1dG9Qb3B1cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1BvcHVwO1xuICB9XG5cbiAgYXN5bmMgX3NjaGVkdWxlTWVldGluZyhyZXF1ZXN0KSB7XG4gICAgaWYgKHJlcXVlc3Quc2NoZWR1bGVEYXRhKSB7XG4gICAgICBjb25zdCBleHRlbnNpb25OYW1lID0gdGhpcy5fZXh0ZW5zaW9uSW5mby5pbmZvLm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCB0b3BpYyA9IHJlcXVlc3Quc2NoZWR1bGVEYXRhLnRvcGljIHx8IGdldERlZmF1bHRNZWV0aW5nU2V0dGluZ3MoZXh0ZW5zaW9uTmFtZSkudG9waWM7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5fbWVldGluZy5zY2hlZHVsZSh7XG4gICAgICAgIC4uLnJlcXVlc3Quc2NoZWR1bGVEYXRhLFxuICAgICAgICB0b3BpY1xuICAgICAgfSwgeyBpc0FsZXJ0U3VjY2VzczogZmFsc2UgfSk7XG4gICAgICByZXR1cm4gcmVzcCA/IHtcbiAgICAgICAgdG9waWM6IHJlc3AubWVldGluZy50b3BpYyxcbiAgICAgICAgbG9jYXRpb246IHJlc3AubWVldGluZy5saW5rcy5qb2luVXJpLFxuICAgICAgICBkZXRhaWxzOiBnZXRFdmVudFRwbChyZXNwLCB0aGlzLl9icmFuZCksXG4gICAgICB9IDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhc3luYyBfaGFzTWVldGluZ1Blcm1pc3Npb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9hdXRoLmxvZ2dlZEluICYmXG4gICAgICB0aGlzLl9yb2xlc0FuZFBlcm1pc3Npb25zLnJlYWR5ICYmXG4gICAgICAhIXRoaXMuX3JvbGVzQW5kUGVybWlzc2lvbnMucGVybWlzc2lvbnNcbiAgICApID8gdGhpcy5fcm9sZXNBbmRQZXJtaXNzaW9ucy5wZXJtaXNzaW9ucy5NZWV0aW5nc1xuICAgICAgOiB0cnVlO1xuICB9XG5cbiAgYXN5bmMgX3ZhbGlkYXRlKHJlcXVlc3QpIHtcbiAgICAvLyBWYWxpZGF0aW9uIHByb2Nlc3NcbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTG9nIGluIGNoZWNrXG4gICAgaWYgKHRoaXMuX2F1dGgucmVhZHkgJiYgIXRoaXMuX2F1dGgubG9nZ2VkSW4pIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHRzLnB1c2goVmFsaWRhdGlvbkVycm9yLm5vdExvZ2dlZEluKTtcbiAgICB9XG5cbiAgICAvLyBNZWV0aW5nIHBlcm1pc3Npb25zIGNoZWNrXG4gICAgaWYgKHRoaXMuX3JvbGVzQW5kUGVybWlzc2lvbnMucmVhZHkgJiYgIXRoaXMuX3JvbGVzQW5kUGVybWlzc2lvbnMucGVybWlzc2lvbnMuTWVldGluZ3MpIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHRzLnB1c2goVmFsaWRhdGlvbkVycm9yLm5vTWVldGluZ1Blcm1pc3Npb24pO1xuICAgIH1cblxuICAgIC8vICogTk9URTogY29tbWVudCBvdXQgdGhlIGZvbGxvd2luZyBjb2RlICpcbiAgICAvLyBiZWNhdXNlIHVuZGVyIGN1cnJlbnQgaW1wbGVtZW50YXRpb24sIGdvb2dsZSBhdXRob3JpemF0aW9uIGlzIG5vdCBuZWNlc3NhcnlcbiAgICAvLyBhbHNvLCBpdCB3aWxsIG1ha2UgdXNlciBhIGJpdCBjb25mdXNlIHdoZW4gc2NoZWR1bGUgbWVldGluZyBvbiBnb29nbGUgY2FsZW5kYXJcbiAgICAvLyB3aXRoIGNhbGVuZGFyIGFjY291bnQgYW5kIGF1dGhvcml6ZWQgYWNjb3VudCByZXF1aXJlZCB0byBiZSBtYXRjaGVkXG4gICAgLy9cblxuICAgIC8vIEdvb2dsZSBhdXRob3JpemUgY2hlY2tcbiAgICAvLyBpZiAoIXRoaXMuX2dvb2dsZUF1dGhvcml6ZS5pc0F1dGhvcml6ZWQpIHtcbiAgICAvLyAgIHZhbGlkYXRpb25SZXN1bHRzLnB1c2goVmFsaWRhdGlvbkVycm9yLm5vdEF1dGhvcml6ZWQpO1xuICAgIC8vIH1cblxuICAgIC8vIEdvb2dsZSBhdXRob3JpemUgY2hlY2sgYWNjb3VudCBpbmNvbnNpc3RlbmN5XG4gICAgLy8gY29uc3QgdXNlckVtYWlsID0gcmVxdWVzdC5wYXlsb2FkLnVzZXJFbWFpbDtcbiAgICAvLyBpZiAodXNlckVtYWlsICE9PSB0aGlzLl9nb29nbGVBdXRob3JpemUuYXV0aG9yaXplZEFjY291bnQpIHtcbiAgICAvLyAgIHZhbGlkYXRpb25SZXN1bHRzLnB1c2goVmFsaWRhdGlvbkVycm9yLmFjY291bnRJbmNvbnNpc3RlbnQpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0cztcbiAgfVxuXG4gIGFzeW5jIF9nZXRMYXRlc3RTY2hlZHVsZVNldHRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lZXRpbmcubGFzdE1lZXRpbmdJbmZvO1xuICB9XG5cbiAgYXN5bmMgX2dldEJyYW5kTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJhbmQubmFtZTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRBZGRNZWV0aW5nKCkge1xuICAgIHJldHVybiBpMThuLmdldFN0cmluZygnYWRkTWVldGluZycsIHRoaXMuX2xvY2FsZS5jdXJyZW50TG9jYWxlKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRBZGRNZWV0aW5nVGl0bGUoKSB7XG4gICAgcmV0dXJuIGZvcm1hdE1lc3NhZ2UoaTE4bi5nZXRTdHJpbmcoJ2FkZE1lZXRpbmdUaXRsZScsIHRoaXMuX2xvY2FsZS5jdXJyZW50TG9jYWxlKSwge1xuICAgICAgYnJhbmQ6IHRoaXMuX2JyYW5kLm5hbWVcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfZ2V0UG9wdXBTZXR0aW5ncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGZvcm1hdE1lc3NhZ2UoaTE4bi5nZXRTdHJpbmcoJ21lZXRpbmdTZXR0aW5nc1RpdGxlJywgdGhpcy5fbG9jYWxlLmN1cnJlbnRMb2NhbGUpLCB7XG4gICAgICAgIGJyYW5kOiB0aGlzLl9icmFuZC5uYW1lXG4gICAgICB9KSxcbiAgICAgIHdoZW46IGkxOG4uZ2V0U3RyaW5nKCd3aGVuJywgdGhpcy5fbG9jYWxlLmN1cnJlbnRMb2NhbGUpLFxuICAgICAgcmVjdXJyaW5nTWVldGluZzogaTE4bi5nZXRTdHJpbmcoJ3JlY3VycmluZ01lZXRpbmcnLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICByZWN1cnJpbmdNZWV0aW5nUHJvbXB0OiBpMThuLmdldFN0cmluZygncmVjdXJyaW5nTWVldGluZ1Byb21wdCcsIHRoaXMuX2xvY2FsZS5jdXJyZW50TG9jYWxlKSxcbiAgICAgIHZpZGVvOiBpMThuLmdldFN0cmluZygndmlkZW8nLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICBob3N0OiBpMThuLmdldFN0cmluZygnaG9zdCcsIHRoaXMuX2xvY2FsZS5jdXJyZW50TG9jYWxlKSxcbiAgICAgIG9uOiBpMThuLmdldFN0cmluZygnb24nLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICBvZmY6IGkxOG4uZ2V0U3RyaW5nKCdvZmYnLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICBwYXJ0aWNpcGFudDogaTE4bi5nZXRTdHJpbmcoJ3BhcnRpY2lwYW50JywgdGhpcy5fbG9jYWxlLmN1cnJlbnRMb2NhbGUpLFxuICAgICAgYXVkaW9PcHRpb25zOiBpMThuLmdldFN0cmluZygnYXVkaW9PcHRpb25zJywgdGhpcy5fbG9jYWxlLmN1cnJlbnRMb2NhbGUpLFxuICAgICAgdGVsZXBob25lOiBpMThuLmdldFN0cmluZygndGVsZXBob25lJywgdGhpcy5fbG9jYWxlLmN1cnJlbnRMb2NhbGUpLFxuICAgICAgdm9pcDogaTE4bi5nZXRTdHJpbmcoJ3ZvaXAnLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICBib3RoOiBpMThuLmdldFN0cmluZygnYm90aCcsIHRoaXMuX2xvY2FsZS5jdXJyZW50TG9jYWxlKSxcbiAgICAgIG1lZXRpbmdPcHRpb25zOiBpMThuLmdldFN0cmluZygnbWVldGluZ09wdGlvbnMnLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICByZXF1aXJlUGFzc3dvcmQ6IGkxOG4uZ2V0U3RyaW5nKCdyZXF1aXJlUGFzc3dvcmQnLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgICBqb2luQmVmb3JlSG9zdDogaTE4bi5nZXRTdHJpbmcoJ2pvaW5CZWZvcmVIb3N0JywgdGhpcy5fbG9jYWxlLmN1cnJlbnRMb2NhbGUpLFxuICAgICAgZG9Ob3RTaG93QWdhaW46IGkxOG4uZ2V0U3RyaW5nKCdkb05vdFNob3dBZ2FpbicsIHRoaXMuX2xvY2FsZS5jdXJyZW50TG9jYWxlKSxcbiAgICAgIHNjaGVkdWxlOiBpMThuLmdldFN0cmluZygnc2NoZWR1bGUnLCB0aGlzLl9sb2NhbGUuY3VycmVudExvY2FsZSksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRBdXRob3JpemVkRW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dvb2dsZUF1dGhvcml6ZS5hdXRob3JpemVkQWNjb3VudDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL01lZXRpbmdTZXJ2ZXJIZWxwZXIuanMiLCJpbXBvcnQgSTE4biBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvSTE4bic7XG5pbXBvcnQgbG9hZExvY2FsZSBmcm9tICcuL2xvYWRMb2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bihsb2FkTG9jYWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9pMThuL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZExvY2FsZShsb2NhbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICBjYXNlICdkZSc6XG4gIFxuICAgICAgY2FzZSAnZGUtREUnOiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZS5lbnN1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXF1aXJlLmVuc3VyZShbJy4vZGUtREUnXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kZS1ERScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2RlLURFJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGUtREUnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgJ2VuJzpcbiAgXG4gICAgICBjYXNlICdlbi1BVSc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lbi1BVSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUFVJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZW4tQVUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lbi1BVScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdlbi1DQSc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lbi1DQSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUNBJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZW4tQ0EnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lbi1DQScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdlbi1HQic6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lbi1HQiddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUdCJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZW4tR0InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lbi1HQicpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdlbi1VUyc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lbi1VUyddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLVVTJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZW4tVVMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lbi1VUycpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAnZXMnOlxuICBcbiAgICAgIGNhc2UgJ2VzLTQxOSc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lcy00MTknXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lcy00MTknKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlcy00MTknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lcy00MTknKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZXMtRVMnOiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZS5lbnN1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXF1aXJlLmVuc3VyZShbJy4vZXMtRVMnXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lcy1FUycpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2VzLUVTJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZXMtRVMnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgJ2ZyJzpcbiAgXG4gICAgICBjYXNlICdmci1DQSc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9mci1DQSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2ZyLUNBJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZnItQ0EnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9mci1DQScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdmci1GUic6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9mci1GUiddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2ZyLUZSJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZnItRlInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9mci1GUicpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAnaXQnOlxuICBcbiAgICAgIGNhc2UgJ2l0LUlUJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2l0LUlUJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vaXQtSVQnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdpdC1JVCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2l0LUlUJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlICdqYSc6XG4gIFxuICAgICAgY2FzZSAnamEtSlAnOiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZS5lbnN1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXF1aXJlLmVuc3VyZShbJy4vamEtSlAnXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9qYS1KUCcpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2phLUpQJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vamEtSlAnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgJ3B0JzpcbiAgXG4gICAgICBjYXNlICdwdC1CUic6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9wdC1CUiddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL3B0LUJSJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAncHQtQlInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9wdC1CUicpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9pMThuL2xvYWRMb2NhbGUuanMiLCJleHBvcnQgY29uc3QgVkVSU0lPTl9LRVkgPSAnJCR2ZXJzaW9uJztcblxuLyoqXG4gKiBDbGVhciBsb2NhbHN0b3JhZ2Ugd2hlbiB0aGVyZSBpcyBub3QgYW55IHZlcnNpb24ga2V5IGV4aXN0cyxcbiAqIHdoaWNoIG1lYW5zIGl0J3MgYSBmdWxsIHVwZ3JhZGUuIFRoZSBjbGVhciBsb2dpYyBjYW4gYmUgdXBkYXRlZCxcbiAqIHNpbmNlIGN1cnJlbnRseSBpdCB3b3JrcyBmb3IgMy54IG1pZ3JhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlncmF0ZUxvY2FsU3RvcmFnZSh2ZXJzaW9uID0gbnVsbCwgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZSkge1xuICBjb25zdCBsZWdhY3lWZXJzaW9uID0gc3RvcmFnZS5nZXRJdGVtKFZFUlNJT05fS0VZKTtcbiAgaWYgKCFsZWdhY3lWZXJzaW9uKSB7XG4gICAgc3RvcmFnZS5jbGVhcigpO1xuICB9XG4gIHN0b3JhZ2Uuc2V0SXRlbShcbiAgICBWRVJTSU9OX0tFWSxcbiAgICB2ZXJzaW9uIHx8IFZFUlNJT05fS0VZXG4gICk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyL21pZ3JhdGVMb2NhbFN0b3JhZ2UuanMiLCJpbXBvcnQgSTE4biBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvSTE4bic7XG5pbXBvcnQgbG9hZExvY2FsZSBmcm9tICcuL2xvYWRMb2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bihsb2FkTG9jYWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyL2kxOG4vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTG9jYWxlKGxvY2FsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgIGNhc2UgJ2RlJzpcbiAgXG4gICAgICBjYXNlICdkZS1ERSc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9kZS1ERSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RlLURFJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZGUtREUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kZS1ERScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAnZW4nOlxuICBcbiAgICAgIGNhc2UgJ2VuLUFVJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLUFVJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tQVUnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1BVScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUFVJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2VuLUNBJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLUNBJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tQ0EnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1DQScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUNBJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2VuLUdCJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLUdCJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tR0InKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1HQicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUdCJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2VuLVVTJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLVVTJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tVVMnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1VUycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLVVTJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlICdlcyc6XG4gIFxuICAgICAgY2FzZSAnZXMtNDE5Jzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VzLTQxOSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VzLTQxOScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2VzLTQxOScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VzLTQxOScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdlcy1FUyc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lcy1FUyddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VzLUVTJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZXMtRVMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lcy1FUycpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAnZnInOlxuICBcbiAgICAgIGNhc2UgJ2ZyLUNBJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2ZyLUNBJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZnItQ0EnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdmci1DQScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2ZyLUNBJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2ZyLUZSJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2ZyLUZSJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZnItRlInKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdmci1GUicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2ZyLUZSJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlICdpdCc6XG4gIFxuICAgICAgY2FzZSAnaXQtSVQnOiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZS5lbnN1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXF1aXJlLmVuc3VyZShbJy4vaXQtSVQnXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9pdC1JVCcpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2l0LUlUJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vaXQtSVQnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgJ2phJzpcbiAgXG4gICAgICBjYXNlICdqYS1KUCc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9qYS1KUCddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2phLUpQJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnamEtSlAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9qYS1KUCcpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAncHQnOlxuICBcbiAgICAgIGNhc2UgJ3B0LUJSJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL3B0LUJSJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vcHQtQlInKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdwdC1CUicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL3B0LUJSJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9sb2FkTG9jYWxlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAvLyBhY3Rpb24gLT4gaGFuZGxlclxuICAgIHRoaXMuX211eCA9IHt9O1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX21ha2UoKTtcbiAgfVxuXG4gIHNlbGVjdChhY3Rpb25UeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5fbXV4W2FjdGlvblR5cGVdID0gaGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbmQocGFja2V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcbiAgICAgICAgeyB0eXBlOiB0aGlzLl90eXBlLCAuLi5wYWNrZXQgfSxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJyb2FkY2FzdChwYWNrZXQpIHtcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHt9LCAodGFicykgPT4ge1xuICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICB0YWIuaWQsXG4gICAgICAgICAgICB7IHR5cGU6IHRoaXMuX3R5cGUsIC4uLnBhY2tldCB9LFxuICAgICAgICAgICAgcmVzb2x2ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgX21ha2UoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgICAgKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgYWN0aW9uIH0gPSByZXF1ZXN0O1xuICAgICAgICBpZiAodHlwZSA9PT0gdGhpcy5fdHlwZSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLl9tdXhbYWN0aW9uXTtcbiAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGhhbmRsZXIocmVxdWVzdCwgc2VuZGVyKVxuICAgICAgICAgICAgICAudGhlbigocmV0dmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHJldHZhbCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBzZW5kUmVzcG9uc2UoKSk7XG4gICAgICAgICAgICAvLyBBc3luY1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9DaGFubmVsL2luZGV4LmpzIiwiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXG4gICdoYXNMb2dnZWRJbicsXG4gICdoYXNBdXRob3JpemVkJyxcbiAgJ2hhc01lZXRpbmdQZXJtaXNzaW9uJyxcbiAgJ2dldExhdGVzdENhbGVuZGFyRXZlbnQnLFxuICAnZ2V0TGF0ZXN0U2NoZWR1bGVTZXR0aW5nJyxcbiAgJ2NoZWNrTWVldGluZ1Blcm1pc3Npb25zJyxcbiAgJ2F1dG9Qb3B1cCcsXG4gICdzY2hlZHVsZScsXG4gICdzaG91bGRBdXRvUG9wdXAnLFxuICAnZ2V0QnJhbmROYW1lJyxcbiAgJ2dldEFkZE1lZXRpbmcnLFxuICAnZ2V0QWRkTWVldGluZ1RpdGxlJyxcbiAgJ2dldEF1dGhvcml6ZWRFbWFpbCcsXG4gICd2YWxpZGF0ZScsXG4gICdzdGF0dXNDaGFuZ2UnLFxuICAnc2hvd0FwcFdpbmRvdycsXG4gICdnZXRQb3B1cFNldHRpbmdzJyxcbl0sICdtZWV0aW5nQWN0aW9ucycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL01lZXRpbmdBY3Rpb24uanMiLCJleHBvcnQgY29uc3QgQUREX01FRVRJTkcgPSAnYWRkX21lZXRpbmcnO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL01lZXRpbmdIZWxwZXIvYWRkTWVldGluZ0xpdGVyYWwuanMiLCJpbXBvcnQgRW51bSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bSc7XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0aW9uRXJyb3IgPSBuZXcgRW51bShbXG4gICdub3RMb2dnZWRJbicsXG4gICdub3RBdXRob3JpemVkJyxcbiAgJ25vTWVldGluZ1Blcm1pc3Npb24nLFxuICAnYWNjb3VudEluY29uc2lzdGVudCcsXG4gICdkdXBsaWNhdGVNZWV0aW5nJyxcbl0sICdWYWxpZGF0aW9uRXJyb3InKTtcblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRpb25FcnJvck1lc3NhZ2dlID0ge1xuICBbVmFsaWRhdGlvbkVycm9yLm5vdExvZ2dlZEluXTogYnJhbmQgPT4gYFBsZWFzZSBsb2dpbiAke2JyYW5kfSBmb3IgR29vZ2xlIGV4dGVuc2lvbiB0byBjcmVhdGUgbWVldGluZ2AsXG4gIFtWYWxpZGF0aW9uRXJyb3Iubm90QXV0aG9yaXplZF06IGJyYW5kID0+IGAke2JyYW5kfSBmb3IgR29vZ2xlIHdvdWxkIG5lZWQgeW91ciBhdXRob3JpemF0aW9uIHRvIGFjY2VzcyB0aGlzIEdvb2dsZSBhY2NvdW50IG9mIHlvdXJzIGJlZm9yZSBzZXR0aW5nIHVwIGFuIGV2ZW50IGZvciB5b3UuYCxcbiAgW1ZhbGlkYXRpb25FcnJvci5hY2NvdW50SW5jb25zaXN0ZW50XTogYnJhbmQgPT4gYFlvdSBoYXZlIGxvZ2dlZCBpbiBHb29nbGUgd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LiAke2JyYW5kfSBmb3IgR29vZ2xlIHdvdWxkIG5lZWQgeW91ciBhdXRob3JpemF0aW9uIHRvIGFjY2VzcyB0aGlzIEdvb2dsZSBhY2NvdW50IG9mIHlvdXJzIGJlZm9yZSBzZXR0aW5nIHVwIGFuIGV2ZW50IGZvciB5b3UuYCxcbiAgW1ZhbGlkYXRpb25FcnJvci5ub01lZXRpbmdQZXJtaXNzaW9uXTogYnJhbmQgPT4gYFlvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gc2V0dXAgYSAke2JyYW5kfSBtZWV0aW5nLCBwbGVhc2UgY29udGFjdCB5b3VyICR7YnJhbmR9IGFjY291bnQgYWRtaW5pc3RyYXRvciBmb3IgdXBncmFkZS5gLFxuICBbVmFsaWRhdGlvbkVycm9yLmR1cGxpY2F0ZU1lZXRpbmddOiBicmFuZCA9PiBgWW91IGFscmVhZHkgaGF2ZSBhICR7YnJhbmR9IG1lZXRpbmcgc2NoZWR1bGVkIHdpdGggdGhpcyBldmVudC5gLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9WYWxpZGF0aW9uRXJyb3IuanMiXSwic291cmNlUm9vdCI6IiJ9