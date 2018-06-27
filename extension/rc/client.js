webpackJsonp([13],{

/***/ 2043:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(222);
module.exports = __webpack_require__(2044);


/***/ }),

/***/ 2044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _ExtensionClientRunner = __webpack_require__(2045);

var _ExtensionClientRunner2 = _interopRequireDefault(_ExtensionClientRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

global.runner = new _ExtensionClientRunner2.default();
global.client = global.runner._client;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),

/***/ 2045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ChromeTransport = __webpack_require__(934);

var _redux = __webpack_require__(121);

var _getProxyClient = __webpack_require__(2062);

var _getProxyClient2 = _interopRequireDefault(_getProxyClient);

var _querystring = __webpack_require__(181);

var _querystring2 = _interopRequireDefault(_querystring);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(91);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _url = __webpack_require__(140);

var _url2 = _interopRequireDefault(_url);

var _Phone = __webpack_require__(937);

var _Phone2 = _interopRequireDefault(_Phone);

var _App = __webpack_require__(991);

var _App2 = _interopRequireDefault(_App);

var _BaseRunner2 = __webpack_require__(384);

var _BaseRunner3 = _interopRequireDefault(_BaseRunner2);

var _Logo = __webpack_require__(1066);

var _Logo2 = _interopRequireDefault(_Logo);

var _Icon = __webpack_require__(1067);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

// eslint-disable-next-line
var ProxyClient = (0, _getProxyClient2.default)(_Phone2.default);
// eslint-disable-next-line

var ExtensionClientRunner = function (_BaseRunner) {
  (0, _inherits3.default)(ExtensionClientRunner, _BaseRunner);

  function ExtensionClientRunner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExtensionClientRunner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExtensionClientRunner.__proto__ || (0, _getPrototypeOf2.default)(ExtensionClientRunner)).call.apply(_ref, [this].concat(args))), _this), _this._renderApp = function () {
      _reactDom2.default.render(_react2.default.createElement(_App2.default, {
        phone: _this._client._target,
        standAlone: _this._standAlone,
        logo: _Logo2.default,
        icon: _Icon2.default
      }), document.querySelector('div#viewport'));
      _this._client.sync(); // Rendering App with Routes would force the history object to default path
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExtensionClientRunner, [{
    key: '_initializeApp',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var _qs$parse, adapterId, tabId, fn;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _qs$parse = _querystring2.default.parse(_url2.default.parse(location.href).query), adapterId = _qs$parse.adapterId, tabId = _qs$parse.tabId;

                this._transport = new _ChromeTransport.ClientTransport();
                this._client = new ProxyClient((0, _extends3.default)({}, {"prefix":"rc-chrome","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google","application":"Google Chrome","fullName":"RingCentral","teleconference":"https://meetings.ringcentral.com/teleconference"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-fueai0i5mpo6lrfqlekj1p1t0jbj78qq.apps.googleusercontent.com","analyticsKey":"","defaultWhitelist":[],"defaultBlacklist":["*://*.salesforce.com/*","*://*.servicenow.com/*","*://*.mindbodyonline.com/*","*://*.zendesk.com/*","*://*.desk.com/*","*://*.oraclecloud.com/*","*://*.crm.dynamics.com/*","*://github.com/*","*://login.microsoftonline.com/*","*://myaccount.google.com/*","*://login.live.com/*","*://chromedriver.storage.googleapis.com/*"],"managedBlacklist":["*://*.ringcentral.com*","*://ringcentral.*/*","*://*glip.com/*","*://*service-officeathand.att.com/*","*://*btcloudphone.bt.com/*","*://*businessconnect.telus.com/*","*://*google.com*/chrome/newtab*","*://*rc.my.salesforce.com/*","*://chrome.google.com/webstore/*","chrome://*","chrome-extension://*"],"defaultC2DWhitelist":["http://*","https://*"],"defaultC2DBlacklist":[],"managedC2DBlacklist":["*://*.crm.dynamics.com/*"],"version":"4.0.6","buildHash":"485","watch":false}, {
                  adapterId: adapterId,
                  tabId: tabId,
                  transport: this._transport
                }));
                this._store = (0, _redux.createStore)(this._client.reducer);
                this._client.setStore(this._store);
                this._standAlone = !tabId;
                _context.next = 8;
                return this._client.sync();

              case 8:
                // wait for the first sync
                if (document.readyState !== 'loading') {
                  this._renderApp();
                } else {
                  fn = function fn() {
                    window.removeEventListener('load', fn);
                    _this2._renderApp();
                  };

                  window.addEventListener('load', fn);
                }
                this.onCurrentTabActivated(function () {
                  return _this2._client.sync();
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _initializeApp() {
        return _ref2.apply(this, arguments);
      }

      return _initializeApp;
    }()
  }, {
    key: 'onCurrentTabActivated',
    value: function onCurrentTabActivated(callback) {
      var _this3 = this;

      chrome.tabs.onActivated.addListener(function () {
        chrome.tabs.getCurrent(function (currentTab) {
          if (currentTab && currentTab.active) {
            callback.apply(_this3);
          }
        });
      });
    }
  }]);
  return ExtensionClientRunner;
}(_BaseRunner3.default);

exports.default = ExtensionClientRunner;

/***/ }),

/***/ 2062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty = __webpack_require__(115);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = getProxyClient;

var _uuid = __webpack_require__(229);

var _uuid2 = _interopRequireDefault(_uuid);

var _RcModule2 = __webpack_require__(32);

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _getProxyClientReducer = __webpack_require__(2063);

var _getProxyClientReducer2 = _interopRequireDefault(_getProxyClientReducer);

var _baseActionTypes = __webpack_require__(846);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

var _ensureExist = __webpack_require__(73);

var _ensureExist2 = _interopRequireDefault(_ensureExist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyClient(Target) {
  return function (_RcModule) {
    (0, _inherits3.default)(_class, _RcModule);

    function _class(_ref) {
      var transport = _ref.transport,
          options = (0, _objectWithoutProperties3.default)(_ref, ['transport']);
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, (0, _extends3.default)({}, options, {
        actionTypes: _baseActionTypes2.default
      })));

      _this._id = _uuid2.default.v4();
      _this._target = new Target((0, _extends3.default)({}, options, {
        getState: function getState() {
          return _this.state.target;
        },
        getProxyState: function getProxyState() {
          return _this.state.proxy;
        }
      }));
      _this._transport = _ensureExist2.default.call(_this, transport, 'transport');
      _this._setTransport(_this._target);

      var _loop = function _loop(subModule) {
        var _context;

        if ((_context = _this._target, Object.prototype.hasOwnProperty).call(_context, subModule) && _this._target[subModule] instanceof _RcModule3.default) {
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

      _this._reducer = (0, _getProxyClientReducer2.default)({
        targetReducer: _this._target.reducer,
        proxyReducer: _this._target.proxyReducer,
        transport: transport,
        types: _this.actionTypes
      });
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: '_setTransport',
      value: function _setTransport(target) {
        target._transport = this._transport;
        target._proxyActionTypes = this.actionTypes;
        target._suppressInit = true;
        for (var subModule in target) {
          if (Object.prototype.hasOwnProperty.call(target, subModule) && target[subModule] instanceof _RcModule3.default) {
            this._setTransport(target[subModule]);
          }
        }
      }
    }, {
      key: '_sync',
      value: function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var result;
          return _regenerator2.default.wrap(function _callee$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return this._transport.request({
                    payload: {
                      type: this.actionTypes.sync,
                      actionNumber: this.state.actionNumber
                    }
                  });

                case 3:
                  result = _context2.sent;

                  this.store.dispatch((0, _extends3.default)({}, result, {
                    type: this.actionTypes.sync
                  }));
                  _context2.next = 9;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);

                case 9:
                  this._syncPromise = null;

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        function _sync() {
          return _ref2.apply(this, arguments);
        }

        return _sync;
      }()
    }, {
      key: 'sync',
      value: function sync() {
        if (!this._syncPromise) {
          this._syncPromise = this._sync();
        }
        return this._syncPromise;
      }
    }, {
      key: '_initialize',
      value: function _initialize(target) {
        if (typeof target.initializeProxy === 'function' && !target._proxyInitialized) {
          target._proxyInitialized = true;
          target.initializeProxy();
        }
        for (var subModule in target) {
          if (Object.prototype.hasOwnProperty.call(target, subModule) && target[subModule] instanceof _RcModule3.default) {
            this._initialize(target[subModule]);
          }
        }
      }
    }, {
      key: 'initialize',
      value: function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          var _this2 = this;

          return _regenerator2.default.wrap(function _callee3$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // initialize the instance before sync to avoid history object from
                  // becoming out of sync
                  this._initialize(this._target);
                  this._transport.on(this._transport.events.push, function () {
                    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(payload) {
                      return _regenerator2.default.wrap(function _callee2$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (!(payload.type === _this2.actionTypes.action)) {
                                _context3.next = 10;
                                break;
                              }

                              if (!_this2._syncPromise) {
                                _context3.next = 4;
                                break;
                              }

                              _context3.next = 4;
                              return _this2._syncPromise;

                            case 4:
                              if (!(payload.actionNumber === _this2.state.actionNumber + 1)) {
                                _context3.next = 8;
                                break;
                              }

                              _this2.store.dispatch((0, _extends3.default)({}, payload, {
                                type: _this2.actionTypes.action
                              }));
                              _context3.next = 10;
                              break;

                            case 8:
                              _context3.next = 10;
                              return _this2.sync();

                            case 10:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function (_x) {
                      return _ref4.apply(this, arguments);
                    };
                  }());
                  _context4.next = 4;
                  return this.sync();

                case 4:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee3, this);
        }));

        function initialize() {
          return _ref3.apply(this, arguments);
        }

        return initialize;
      }()
    }]);
    return _class;
  }(_RcModule3.default);
}


/***/ }),

/***/ 2063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastActionReducer = getLastActionReducer;
exports.getActionNumberReducer = getActionNumberReducer;
exports.getTargetReducer = getTargetReducer;
exports.default = getProxyClientReducer;

var _redux = __webpack_require__(33);

function getLastActionReducer(_ref) {
  var types = _ref.types;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref2 = arguments[1];
    var type = _ref2.type,
        action = _ref2.action,
        lastAction = _ref2.lastAction;

    switch (type) {
      case types.action:
        return action;
      case types.sync:
        return lastAction;
      default:
        return state;
    }
  };
}
function getActionNumberReducer(_ref3) {
  var types = _ref3.types;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var _ref4 = arguments[1];
    var type = _ref4.type,
        actionNumber = _ref4.actionNumber;

    switch (type) {
      case types.action:
      case types.sync:
        return actionNumber;
      default:
        return state;
    }
  };
}
function getTargetReducer(_ref5) {
  var targetReducer = _ref5.targetReducer,
      types = _ref5.types;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : targetReducer(undefined, { type: types.initModule });
    var _ref6 = arguments[1];
    var type = _ref6.type,
        target = _ref6.target,
        action = _ref6.action;

    switch (type) {
      case types.action:
        return targetReducer(state, action);
      case types.sync:
        return target;
      default:
        return state;
    }
  };
}

function getProxyClientReducer(_ref7) {
  var targetReducer = _ref7.targetReducer,
      proxyReducer = _ref7.proxyReducer,
      types = _ref7.types;

  return (0, _redux.combineReducers)({
    target: getTargetReducer({ targetReducer: targetReducer, types: types }),
    proxy: proxyReducer,
    lastAction: getLastActionReducer({ types: types }),
    actionNumber: getActionNumberReducer({ types: types })
  });
}


/***/ })

},[2043]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0V4dGVuc2lvbkNsaWVudFJ1bm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbGliL3Byb3h5L2dldFByb3h5Q2xpZW50LmpzIiwid2VicGFjazovLy9saWIvcHJveHkvZ2V0UHJveHlDbGllbnRSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJ1bm5lciIsImNsaWVudCIsIl9jbGllbnQiLCJQcm94eUNsaWVudCIsIkV4dGVuc2lvbkNsaWVudFJ1bm5lciIsIl9yZW5kZXJBcHAiLCJyZW5kZXIiLCJfdGFyZ2V0IiwiX3N0YW5kQWxvbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzeW5jIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeSIsImFkYXB0ZXJJZCIsInRhYklkIiwiX3RyYW5zcG9ydCIsInRyYW5zcG9ydCIsIl9zdG9yZSIsInJlZHVjZXIiLCJzZXRTdG9yZSIsInJlYWR5U3RhdGUiLCJmbiIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25DdXJyZW50VGFiQWN0aXZhdGVkIiwiY2FsbGJhY2siLCJjaHJvbWUiLCJ0YWJzIiwib25BY3RpdmF0ZWQiLCJhZGRMaXN0ZW5lciIsImdldEN1cnJlbnQiLCJjdXJyZW50VGFiIiwiYWN0aXZlIiwiYXBwbHkiLCJnZXRQcm94eUNsaWVudCIsIlRhcmdldCIsIm9wdGlvbnMiLCJhY3Rpb25UeXBlcyIsIl9pZCIsInY0IiwiZ2V0U3RhdGUiLCJzdGF0ZSIsInRhcmdldCIsImdldFByb3h5U3RhdGUiLCJwcm94eSIsIl9zZXRUcmFuc3BvcnQiLCJzdWJNb2R1bGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJfcmVkdWNlciIsInRhcmdldFJlZHVjZXIiLCJwcm94eVJlZHVjZXIiLCJ0eXBlcyIsIl9wcm94eUFjdGlvblR5cGVzIiwiX3N1cHByZXNzSW5pdCIsInJlcXVlc3QiLCJwYXlsb2FkIiwidHlwZSIsImFjdGlvbk51bWJlciIsInJlc3VsdCIsInN0b3JlIiwiZGlzcGF0Y2giLCJfc3luY1Byb21pc2UiLCJfc3luYyIsImluaXRpYWxpemVQcm94eSIsIl9wcm94eUluaXRpYWxpemVkIiwiX2luaXRpYWxpemUiLCJvbiIsImV2ZW50cyIsInB1c2giLCJhY3Rpb24iLCJnZXRMYXN0QWN0aW9uUmVkdWNlciIsImdldEFjdGlvbk51bWJlclJlZHVjZXIiLCJnZXRUYXJnZXRSZWR1Y2VyIiwiZ2V0UHJveHlDbGllbnRSZWR1Y2VyIiwibGFzdEFjdGlvbiIsInVuZGVmaW5lZCIsImluaXRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBOztBQUVBQSxPQUFPQyxNQUFQLEdBQWdCLHFDQUFoQjtBQUNBRCxPQUFPRSxNQUFQLEdBQWdCRixPQUFPQyxNQUFQLENBQWNFLE9BQTlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFDQTs7QUFKQTtBQU1BLElBQU1DLGNBQWMsOENBQXBCO0FBSkE7O0lBTXFCQyxxQjs7Ozs7Ozs7Ozs7Ozs7ME9BQ25CQyxVLEdBQWEsWUFBTTtBQUNqQix5QkFBU0MsTUFBVCxDQUNFO0FBQ0UsZUFBTyxNQUFLSixPQUFMLENBQWFLLE9BRHRCO0FBRUUsb0JBQVksTUFBS0MsV0FGbkI7QUFHRSw0QkFIRjtBQUlFO0FBSkYsUUFERixFQU9FQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBUEY7QUFTQSxZQUFLUixPQUFMLENBQWFTLElBQWIsR0FWaUIsQ0FVSTtB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V0FBT1csWUFGYztBQUdyQndCLGdCQUFZSixxQkFBcUIsRUFBRW5CLFlBQUYsRUFBckIsQ0FIUztBQUlyQk0sa0JBQWNjLHVCQUF1QixFQUFFcEIsWUFBRixFQUF2QjtBQUpPLEdBQWhCLENBQVA7QUFNRCIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0ZW5zaW9uQ2xpZW50UnVubmVyIGZyb20gJy4uL2xpYi9FeHRlbnNpb25DbGllbnRSdW5uZXInO1xyXG4vKiBnbG9iYWwgY29uZmlnICovXHJcblxyXG5nbG9iYWwucnVubmVyID0gbmV3IEV4dGVuc2lvbkNsaWVudFJ1bm5lcigpO1xyXG5nbG9iYWwuY2xpZW50ID0gZ2xvYmFsLnJ1bm5lci5fY2xpZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXh0ZW5zaW9uL2NsaWVudC5qcyIsImltcG9ydCB7IENsaWVudFRyYW5zcG9ydCB9IGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9DaHJvbWVUcmFuc3BvcnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGdldFByb3h5Q2xpZW50IGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9wcm94eS9nZXRQcm94eUNsaWVudCc7XHJcbmltcG9ydCBxcyBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XHJcbmltcG9ydCBQaG9uZSBmcm9tICcuLi8uLi9tb2R1bGVzL1Bob25lJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9jb250YWluZXJzL0FwcCc7XHJcbmltcG9ydCBCYXNlUnVubmVyIGZyb20gJy4uL0Jhc2VSdW5uZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IExvZ28gZnJvbSAnYnJhbmQtbG9nby1wYXRoL0xvZ28uc3ZnJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCBJY29uIGZyb20gJ2JyYW5kLWxvZ28tcGF0aC9JY29uLnN2Zyc7XHJcbi8qIGdsb2JhbCBjb25maWcgKi9cclxuXHJcbmNvbnN0IFByb3h5Q2xpZW50ID0gZ2V0UHJveHlDbGllbnQoUGhvbmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uQ2xpZW50UnVubmVyIGV4dGVuZHMgQmFzZVJ1bm5lciB7XHJcbiAgX3JlbmRlckFwcCA9ICgpID0+IHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgPEFwcFxyXG4gICAgICAgIHBob25lPXt0aGlzLl9jbGllbnQuX3RhcmdldH1cclxuICAgICAgICBzdGFuZEFsb25lPXt0aGlzLl9zdGFuZEFsb25lfVxyXG4gICAgICAgIGxvZ289e0xvZ299XHJcbiAgICAgICAgaWNvbj17SWNvbn1cclxuICAgICAgLz4sXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiN2aWV3cG9ydCcpLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NsaWVudC5zeW5jKCk7IC8vIFJlbmRlcmluZyBBcHAgd2l0aCBSb3V0ZXMgd291bGQgZm9yY2UgdGhlIGhpc3Rvcnkgb2JqZWN0IHRvIGRlZmF1bHQgcGF0aFxyXG4gIH1cclxuICBhc3luYyBfaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgIGFkYXB0ZXJJZCxcclxuICAgICAgdGFiSWQsXHJcbiAgICB9ID0gcXMucGFyc2UodXJsLnBhcnNlKGxvY2F0aW9uLmhyZWYpLnF1ZXJ5KTtcclxuICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBDbGllbnRUcmFuc3BvcnQoKTtcclxuICAgIHRoaXMuX2NsaWVudCA9IG5ldyBQcm94eUNsaWVudCh7XHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgYWRhcHRlcklkLFxyXG4gICAgICB0YWJJZCxcclxuICAgICAgdHJhbnNwb3J0OiB0aGlzLl90cmFuc3BvcnQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3N0b3JlID0gY3JlYXRlU3RvcmUodGhpcy5fY2xpZW50LnJlZHVjZXIpO1xyXG4gICAgdGhpcy5fY2xpZW50LnNldFN0b3JlKHRoaXMuX3N0b3JlKTtcclxuICAgIHRoaXMuX3N0YW5kQWxvbmUgPSAhdGFiSWQ7XHJcbiAgICBhd2FpdCB0aGlzLl9jbGllbnQuc3luYygpOyAgLy8gd2FpdCBmb3IgdGhlIGZpcnN0IHN5bmNcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQXBwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZuKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJBcHAoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmbik7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ3VycmVudFRhYkFjdGl2YXRlZCgoKSA9PiB0aGlzLl9jbGllbnQuc3luYygpKTtcclxuICB9XHJcblxyXG4gIG9uQ3VycmVudFRhYkFjdGl2YXRlZChjYWxsYmFjaykge1xyXG4gICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICBjaHJvbWUudGFicy5nZXRDdXJyZW50KChjdXJyZW50VGFiKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYWIgJiYgY3VycmVudFRhYi5hY3RpdmUpIHtcclxuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9FeHRlbnNpb25DbGllbnRSdW5uZXIvaW5kZXguanMiLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IFJjTW9kdWxlIGZyb20gJy4uL1JjTW9kdWxlJztcclxuaW1wb3J0IGdldFByb3h5Q2xpZW50UmVkdWNlciBmcm9tICcuL2dldFByb3h5Q2xpZW50UmVkdWNlcic7XHJcbmltcG9ydCBiYXNlQWN0aW9uVHlwZXMgZnJvbSAnLi9iYXNlQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgZW5zdXJlRXhpc3QgZnJvbSAnLi4vZW5zdXJlRXhpc3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByb3h5Q2xpZW50KFRhcmdldCkge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJjTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgdHJhbnNwb3J0LCAuLi5vcHRpb25zIH0pIHtcclxuICAgICAgc3VwZXIoe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgYWN0aW9uVHlwZXM6IGJhc2VBY3Rpb25UeXBlcyxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2lkID0gdXVpZC52NCgpO1xyXG4gICAgICB0aGlzLl90YXJnZXQgPSBuZXcgVGFyZ2V0KHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIGdldFN0YXRlOiAoKSA9PiB0aGlzLnN0YXRlLnRhcmdldCxcclxuICAgICAgICBnZXRQcm94eVN0YXRlOiAoKSA9PiB0aGlzLnN0YXRlLnByb3h5LFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fdHJhbnNwb3J0ID0gdGhpczo6ZW5zdXJlRXhpc3QodHJhbnNwb3J0LCAndHJhbnNwb3J0Jyk7XHJcbiAgICAgIHRoaXMuX3NldFRyYW5zcG9ydCh0aGlzLl90YXJnZXQpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN1Yk1vZHVsZSBpbiB0aGlzLl90YXJnZXQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLl90YXJnZXQ6Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc3ViTW9kdWxlKSAmJlxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRbc3ViTW9kdWxlXSBpbnN0YW5jZW9mIFJjTW9kdWxlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgc3ViTW9kdWxlLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0W3N1Yk1vZHVsZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3JlZHVjZXIgPSBnZXRQcm94eUNsaWVudFJlZHVjZXIoe1xyXG4gICAgICAgIHRhcmdldFJlZHVjZXI6IHRoaXMuX3RhcmdldC5yZWR1Y2VyLFxyXG4gICAgICAgIHByb3h5UmVkdWNlcjogdGhpcy5fdGFyZ2V0LnByb3h5UmVkdWNlcixcclxuICAgICAgICB0cmFuc3BvcnQsXHJcbiAgICAgICAgdHlwZXM6IHRoaXMuYWN0aW9uVHlwZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRUcmFuc3BvcnQodGFyZ2V0KSB7XHJcbiAgICAgIHRhcmdldC5fdHJhbnNwb3J0ID0gdGhpcy5fdHJhbnNwb3J0O1xyXG4gICAgICB0YXJnZXQuX3Byb3h5QWN0aW9uVHlwZXMgPSB0aGlzLmFjdGlvblR5cGVzO1xyXG4gICAgICB0YXJnZXQuX3N1cHByZXNzSW5pdCA9IHRydWU7XHJcbiAgICAgIGZvciAoY29uc3Qgc3ViTW9kdWxlIGluIHRhcmdldCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRhcmdldDo6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzdWJNb2R1bGUpICYmXHJcbiAgICAgICAgICAgIHRhcmdldFtzdWJNb2R1bGVdIGluc3RhbmNlb2YgUmNNb2R1bGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuX3NldFRyYW5zcG9ydCh0YXJnZXRbc3ViTW9kdWxlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIF9zeW5jKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3RyYW5zcG9ydC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5hY3Rpb25UeXBlcy5zeW5jLFxyXG4gICAgICAgICAgICBhY3Rpb25OdW1iZXI6IHRoaXMuc3RhdGUuYWN0aW9uTnVtYmVyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgLi4ucmVzdWx0LFxyXG4gICAgICAgICAgdHlwZTogdGhpcy5hY3Rpb25UeXBlcy5zeW5jLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChfKSB7IC8qIElnbm9yZSAqLyB9XHJcbiAgICAgIHRoaXMuX3N5bmNQcm9taXNlID0gbnVsbDtcclxuICAgIH1cclxuICAgIHN5bmMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5fc3luY1Byb21pc2UpIHtcclxuICAgICAgICB0aGlzLl9zeW5jUHJvbWlzZSA9IHRoaXMuX3N5bmMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fc3luY1Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlb2YgdGFyZ2V0LmluaXRpYWxpemVQcm94eSA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICAgICF0YXJnZXQuX3Byb3h5SW5pdGlhbGl6ZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFyZ2V0Ll9wcm94eUluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB0YXJnZXQuaW5pdGlhbGl6ZVByb3h5KCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChjb25zdCBzdWJNb2R1bGUgaW4gdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGFyZ2V0OjpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHN1Yk1vZHVsZSkgJiZcclxuICAgICAgICAgICAgdGFyZ2V0W3N1Yk1vZHVsZV0gaW5zdGFuY2VvZiBSY01vZHVsZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSh0YXJnZXRbc3ViTW9kdWxlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAvLyBpbml0aWFsaXplIHRoZSBpbnN0YW5jZSBiZWZvcmUgc3luYyB0byBhdm9pZCBoaXN0b3J5IG9iamVjdCBmcm9tXHJcbiAgICAgIC8vIGJlY29taW5nIG91dCBvZiBzeW5jXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemUodGhpcy5fdGFyZ2V0KTtcclxuICAgICAgdGhpcy5fdHJhbnNwb3J0Lm9uKHRoaXMuX3RyYW5zcG9ydC5ldmVudHMucHVzaCwgYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgICAgICBpZiAocGF5bG9hZC50eXBlID09PSB0aGlzLmFjdGlvblR5cGVzLmFjdGlvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX3N5bmNQcm9taXNlKSBhd2FpdCB0aGlzLl9zeW5jUHJvbWlzZTtcclxuICAgICAgICAgIGlmIChwYXlsb2FkLmFjdGlvbk51bWJlciA9PT0gdGhpcy5zdGF0ZS5hY3Rpb25OdW1iZXIgKyAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5hY3Rpb25UeXBlcy5hY3Rpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdGhpcy5zeW5jKCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Byb3h5L2dldFByb3h5Q2xpZW50LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RBY3Rpb25SZWR1Y2VyKHsgdHlwZXMgfSkge1xyXG4gIHJldHVybiAoc3RhdGUgPSBudWxsLCB7IHR5cGUsIGFjdGlvbiwgbGFzdEFjdGlvbiB9KSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSB0eXBlcy5hY3Rpb246XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgY2FzZSB0eXBlcy5zeW5jOlxyXG4gICAgICAgIHJldHVybiBsYXN0QWN0aW9uO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpb25OdW1iZXJSZWR1Y2VyKHsgdHlwZXMgfSkge1xyXG4gIHJldHVybiAoc3RhdGUgPSAtMSwgeyB0eXBlLCBhY3Rpb25OdW1iZXIgfSkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgdHlwZXMuYWN0aW9uOlxyXG4gICAgICBjYXNlIHR5cGVzLnN5bmM6XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbk51bWJlcjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0UmVkdWNlcih7IHRhcmdldFJlZHVjZXIsIHR5cGVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgc3RhdGUgPSB0YXJnZXRSZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlcy5pbml0TW9kdWxlIH0pLFxyXG4gICAgeyB0eXBlLCB0YXJnZXQsIGFjdGlvbiB9LFxyXG4gICkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgdHlwZXMuYWN0aW9uOlxyXG4gICAgICAgIHJldHVybiB0YXJnZXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIHR5cGVzLnN5bmM6XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJveHlDbGllbnRSZWR1Y2VyKHsgdGFyZ2V0UmVkdWNlciwgcHJveHlSZWR1Y2VyLCB0eXBlcyB9KSB7XHJcbiAgcmV0dXJuIGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB0YXJnZXQ6IGdldFRhcmdldFJlZHVjZXIoeyB0YXJnZXRSZWR1Y2VyLCB0eXBlcyB9KSxcclxuICAgIHByb3h5OiBwcm94eVJlZHVjZXIsXHJcbiAgICBsYXN0QWN0aW9uOiBnZXRMYXN0QWN0aW9uUmVkdWNlcih7IHR5cGVzIH0pLFxyXG4gICAgYWN0aW9uTnVtYmVyOiBnZXRBY3Rpb25OdW1iZXJSZWR1Y2VyKHsgdHlwZXMgfSksXHJcbiAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9wcm94eS9nZXRQcm94eUNsaWVudFJlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9