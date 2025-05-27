(function (React, adminjs, designSystem, reactDom, reactRouterDom) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);

  const api$1 = new adminjs.ApiClient();
  const GroupedQuestionsPage = () => {
    const [data, setData] = React.useState([]);
    console.log('Hello World!');
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await api$1.getPage({
            pageName: 'grouped-questions'
          });
          console.log('✅ res:', res);
          console.log('✅ res.data:', res.data);
          const nested = res?.data;
          if (Array.isArray(nested)) {
            setData(nested);
          } else if (nested?.data && Array.isArray(nested.data)) {
            setData(nested.data);
          } else {
            console.warn('Unexpected shape:', nested);
            setData([]);
          }
        } catch (err) {
          console.error('🔥 API fetch error:', err);
        }
      };
      fetchData();
    }, []);
    return /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      variant: "grey"
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.H2, null, "Grouped Questions by Topic"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Table, null, /*#__PURE__*/React__namespace.default.createElement("thead", null, /*#__PURE__*/React__namespace.default.createElement(designSystem.TableRow, null, /*#__PURE__*/React__namespace.default.createElement(designSystem.TableCell, null, /*#__PURE__*/React__namespace.default.createElement("strong", null, "Topic Code")), /*#__PURE__*/React__namespace.default.createElement(designSystem.TableCell, null, /*#__PURE__*/React__namespace.default.createElement("strong", null, "Total Questions")))), /*#__PURE__*/React__namespace.default.createElement("tbody", null, data.map(({
      topic_code,
      total
    }) => /*#__PURE__*/React__namespace.default.createElement(designSystem.TableRow, {
      key: topic_code
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.TableCell, null, /*#__PURE__*/React__namespace.default.createElement(designSystem.Link, {
      href: `/admin/resources/ข้อสอบ?filters.topic_code=${topic_code}`
    }, topic_code)), /*#__PURE__*/React__namespace.default.createElement(designSystem.TableCell, null, total))))));
  };

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }

  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }

  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }

  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }

  var _excluded$6 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
  function useStateManager(_ref) {
    var _ref$defaultInputValu = _ref.defaultInputValue,
      defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
      _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
      defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      propsInputValue = _ref.inputValue,
      propsMenuIsOpen = _ref.menuIsOpen,
      propsOnChange = _ref.onChange,
      propsOnInputChange = _ref.onInputChange,
      propsOnMenuClose = _ref.onMenuClose,
      propsOnMenuOpen = _ref.onMenuOpen,
      propsValue = _ref.value,
      restSelectProps = _objectWithoutProperties(_ref, _excluded$6);
    var _useState = React.useState(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
      _useState2 = _slicedToArray(_useState, 2),
      stateInputValue = _useState2[0],
      setStateInputValue = _useState2[1];
    var _useState3 = React.useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState4 = _slicedToArray(_useState3, 2),
      stateMenuIsOpen = _useState4[0],
      setStateMenuIsOpen = _useState4[1];
    var _useState5 = React.useState(propsValue !== undefined ? propsValue : defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      stateValue = _useState6[0],
      setStateValue = _useState6[1];
    var onChange = React.useCallback(function (value, actionMeta) {
      if (typeof propsOnChange === 'function') {
        propsOnChange(value, actionMeta);
      }
      setStateValue(value);
    }, [propsOnChange]);
    var onInputChange = React.useCallback(function (value, actionMeta) {
      var newValue;
      if (typeof propsOnInputChange === 'function') {
        newValue = propsOnInputChange(value, actionMeta);
      }
      setStateInputValue(newValue !== undefined ? newValue : value);
    }, [propsOnInputChange]);
    var onMenuOpen = React.useCallback(function () {
      if (typeof propsOnMenuOpen === 'function') {
        propsOnMenuOpen();
      }
      setStateMenuIsOpen(true);
    }, [propsOnMenuOpen]);
    var onMenuClose = React.useCallback(function () {
      if (typeof propsOnMenuClose === 'function') {
        propsOnMenuClose();
      }
      setStateMenuIsOpen(false);
    }, [propsOnMenuClose]);
    var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
    var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
    var value = propsValue !== undefined ? propsValue : stateValue;
    return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
      inputValue: inputValue,
      menuIsOpen: menuIsOpen,
      onChange: onChange,
      onInputChange: onInputChange,
      onMenuClose: onMenuClose,
      onMenuOpen: onMenuOpen,
      value: value
    });
  }

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }

  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }

  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }

  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }

  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }

  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function () {
      var e,
        o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }

  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }

  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */

  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here


    return undefined;
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      this.tags.forEach(function (tag) {
        var _tag$parentNode;

        return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';

  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';
  var LAYER = '@layer';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {object}
   * @return {object}
   */
  var assign = Object.assign;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash (value, length) {
  	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim (value) {
  	return value.trim()
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match (value, pattern) {
  	return (value = pattern.exec(value)) ? value[0] : value
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace (value, pattern, replacement) {
  	return value.replace(pattern, replacement)
  }

  /**
   * @param {string} value
   * @param {string} search
   * @return {number}
   */
  function indexof (value, search) {
  	return value.indexOf(search)
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat (value, index) {
  	return value.charCodeAt(index) | 0
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr (value, begin, end) {
  	return value.slice(begin, end)
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen (value) {
  	return value.length
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof (value) {
  	return value.length
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append (value, array) {
  	return array.push(value), value
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine (array, callback) {
  	return array.map(callback).join('')
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object | null} root
   * @param {object | null} parent
   * @param {string} type
   * @param {string[] | string} props
   * @param {object[] | string} children
   * @param {number} length
   */
  function node (value, root, parent, type, props, children, length) {
  	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
  }

  /**
   * @param {object} root
   * @param {object} props
   * @return {object}
   */
  function copy (root, props) {
  	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
  }

  /**
   * @return {number}
   */
  function char () {
  	return character
  }

  /**
   * @return {number}
   */
  function prev () {
  	character = position > 0 ? charat(characters, --position) : 0;

  	if (column--, character === 10)
  		column = 1, line--;

  	return character
  }

  /**
   * @return {number}
   */
  function next () {
  	character = position < length ? charat(characters, position++) : 0;

  	if (column++, character === 10)
  		column = 1, line++;

  	return character
  }

  /**
   * @return {number}
   */
  function peek () {
  	return charat(characters, position)
  }

  /**
   * @return {number}
   */
  function caret () {
  	return position
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice (begin, end) {
  	return substr(characters, begin, end)
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token (type) {
  	switch (type) {
  		// \0 \t \n \r \s whitespace token
  		case 0: case 9: case 10: case 13: case 32:
  			return 5
  		// ! + , / > @ ~ isolate token
  		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
  		// ; { } breakpoint token
  		case 59: case 123: case 125:
  			return 4
  		// : accompanied token
  		case 58:
  			return 3
  		// " ' ( [ opening delimit token
  		case 34: case 39: case 40: case 91:
  			return 2
  		// ) ] closing delimit token
  		case 41: case 93:
  			return 1
  	}

  	return 0
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc (value) {
  	return line = column = 1, length = strlen(characters = value), position = 0, []
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc (value) {
  	return characters = '', value
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit (type) {
  	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace (type) {
  	while (character = peek())
  		if (character < 33)
  			next();
  		else
  			break

  	return token(type) > 2 || token(character) > 3 ? '' : ' '
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping (index, count) {
  	while (--count && next())
  		// not 0-9 A-F a-f
  		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
  			break

  	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter (type) {
  	while (next())
  		switch (character) {
  			// ] ) " '
  			case type:
  				return position
  			// " '
  			case 34: case 39:
  				if (type !== 34 && type !== 39)
  					delimiter(character);
  				break
  			// (
  			case 40:
  				if (type === 41)
  					delimiter(type);
  				break
  			// \
  			case 92:
  				next();
  				break
  		}

  	return position
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter (type, index) {
  	while (next())
  		// //
  		if (type + character === 47 + 10)
  			break
  		// /*
  		else if (type + character === 42 + 42 && peek() === 47)
  			break

  	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier (index) {
  	while (!token(peek()))
  		next();

  	return slice(index, position)
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile (value) {
  	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  	var index = 0;
  	var offset = 0;
  	var length = pseudo;
  	var atrule = 0;
  	var property = 0;
  	var previous = 0;
  	var variable = 1;
  	var scanning = 1;
  	var ampersand = 1;
  	var character = 0;
  	var type = '';
  	var props = rules;
  	var children = rulesets;
  	var reference = rule;
  	var characters = type;

  	while (scanning)
  		switch (previous = character, character = next()) {
  			// (
  			case 40:
  				if (previous != 108 && charat(characters, length - 1) == 58) {
  					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
  						ampersand = -1;
  					break
  				}
  			// " ' [
  			case 34: case 39: case 91:
  				characters += delimit(character);
  				break
  			// \t \n \r \s
  			case 9: case 10: case 13: case 32:
  				characters += whitespace(previous);
  				break
  			// \
  			case 92:
  				characters += escaping(caret() - 1, 7);
  				continue
  			// /
  			case 47:
  				switch (peek()) {
  					case 42: case 47:
  						append(comment(commenter(next(), caret()), root, parent), declarations);
  						break
  					default:
  						characters += '/';
  				}
  				break
  			// {
  			case 123 * variable:
  				points[index++] = strlen(characters) * ampersand;
  			// } ; \0
  			case 125 * variable: case 59: case 0:
  				switch (character) {
  					// \0 }
  					case 0: case 125: scanning = 0;
  					// ;
  					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
  						if (property > 0 && (strlen(characters) - length))
  							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
  						break
  					// @ ;
  					case 59: characters += ';';
  					// { rule/at-rule
  					default:
  						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

  						if (character === 123)
  							if (offset === 0)
  								parse(characters, root, reference, reference, props, rulesets, length, points, children);
  							else
  								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
  									// d l m s
  									case 100: case 108: case 109: case 115:
  										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
  										break
  									default:
  										parse(characters, reference, reference, reference, [''], children, 0, points, children);
  								}
  				}

  				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
  				break
  			// :
  			case 58:
  				length = 1 + strlen(characters), property = previous;
  			default:
  				if (variable < 1)
  					if (character == 123)
  						--variable;
  					else if (character == 125 && variable++ == 0 && prev() == 125)
  						continue

  				switch (characters += from(character), character * variable) {
  					// &
  					case 38:
  						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
  						break
  					// ,
  					case 44:
  						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
  						break
  					// @
  					case 64:
  						// -
  						if (peek() === 45)
  							characters += delimit(next());

  						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
  						break
  					// -
  					case 45:
  						if (previous === 45 && strlen(characters) == 2)
  							variable = 0;
  				}
  		}

  	return rulesets
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
  	var post = offset - 1;
  	var rule = offset === 0 ? rules : [''];
  	var size = sizeof(rule);

  	for (var i = 0, j = 0, k = 0; i < index; ++i)
  		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
  			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
  				props[k++] = z;

  	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment (value, root, parent) {
  	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration (value, root, parent, length) {
  	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize (children, callback) {
  	var output = '';
  	var length = sizeof(children);

  	for (var i = 0; i < length; i++)
  		output += callback(children[i], i, children, callback) || '';

  	return output
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify (element, index, children, callback) {
  	switch (element.type) {
  		case LAYER: if (element.children.length) break
  		case IMPORT: case DECLARATION: return element.return = element.return || element.value
  		case COMMENT: return ''
  		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
  		case RULESET: element.value = element.props.join(',');
  	}

  	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware (collection) {
  	var length = sizeof(collection);

  	return function (element, index, children, callback) {
  		var output = '';

  		for (var i = 0; i < length; i++)
  			output += collection[i](element, index, children, callback) || '';

  		return output
  	}
  }

  /**
   * @param {function} callback
   * @return {function}
   */
  function rulesheet (callback) {
  	return function (element) {
  		if (!element.root)
  			if (element = element.return)
  				callback(element);
  	}
  }

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;

    while (true) {
      previous = character;
      character = peek(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }

      if (token(character)) {
        break;
      }

      next();
    }

    return slice(begin, position);
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;

        case 2:
          parsed[index] += delimit(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }

    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (hash(value, length)) {
      // color-adjust
      case 5103:
        return WEBKIT + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order

      case 6165:
        return WEBKIT + value + MS + 'flex-' + value + value;
      // align-items

      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
      // cursor

      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
      // justify-content

      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (charat(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (charat(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ':', ':' + WEBKIT) + value;
          // (inline-)?fl(e)x

          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        }

        break;
      // writing-mode

      case 5936:
        switch (charat(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }

        return WEBKIT + value + MS + value + value;
    }

    return value;
  }

  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;

      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, '@', '@' + WEBKIT)
        })], callback);

      case RULESET:
        if (element.length) return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
              })], callback);
          }

          return '';
        });
    }
  };

  var defaultStylisPlugins = [prefixer];

  var createCache = function createCache(options) {
    var key = options.key;

    if (key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }

        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {};
    var container;
    var nodesToHydrate = [];

    {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' ');

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var reactIs$1 = {exports: {}};

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  reactIs_development.AsyncMode = AsyncMode;
  reactIs_development.ConcurrentMode = ConcurrentMode;
  reactIs_development.ContextConsumer = ContextConsumer;
  reactIs_development.ContextProvider = ContextProvider;
  reactIs_development.Element = Element;
  reactIs_development.ForwardRef = ForwardRef;
  reactIs_development.Fragment = Fragment;
  reactIs_development.Lazy = Lazy;
  reactIs_development.Memo = Memo;
  reactIs_development.Portal = Portal;
  reactIs_development.Profiler = Profiler;
  reactIs_development.StrictMode = StrictMode;
  reactIs_development.Suspense = Suspense;
  reactIs_development.isAsyncMode = isAsyncMode;
  reactIs_development.isConcurrentMode = isConcurrentMode;
  reactIs_development.isContextConsumer = isContextConsumer;
  reactIs_development.isContextProvider = isContextProvider;
  reactIs_development.isElement = isElement;
  reactIs_development.isForwardRef = isForwardRef;
  reactIs_development.isFragment = isFragment;
  reactIs_development.isLazy = isLazy;
  reactIs_development.isMemo = isMemo;
  reactIs_development.isPortal = isPortal;
  reactIs_development.isProfiler = isProfiler;
  reactIs_development.isStrictMode = isStrictMode;
  reactIs_development.isSuspense = isSuspense;
  reactIs_development.isValidElementType = isValidElementType;
  reactIs_development.typeOf = typeOf;
    })();
  }

  {
    reactIs$1.exports = reactIs_development;
  }

  var reactIsExports = reactIs$1.exports;

  var reactIs = reactIsExports;
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  var isBrowser = true;

  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false ) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;

    if (cache.inserted[serialized.name] === undefined) {
      var current = serialized;

      do {
        cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        current = current.next;
      } while (current !== undefined);
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    var componentSelector = interpolation;

    if (componentSelector.__emotion_styles !== undefined) {

      return componentSelector;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          var keyframes = interpolation;

          if (keyframes.anim === 1) {
            cursor = {
              name: keyframes.name,
              styles: keyframes.styles,
              next: cursor
            };
            return keyframes.name;
          }

          var serializedStyles = interpolation;

          if (serializedStyles.styles !== undefined) {
            var next = serializedStyles.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = serializedStyles.styles + ";";
            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    var asString = interpolation;

    {
      return asString;
    }
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key in obj) {
        var value = obj[key];

        if (typeof value !== 'object') {
          var asString = value;

          if (isProcessableValue(asString)) {
            string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
          }
        } else {

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
  // keyframes are stored on the SerializedStyles object as a linked list

  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;

      styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {
        var templateStringsArr = strings;

        styles += templateStringsArr[i];
      }
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  }

  var syncFallback = function syncFallback(create) {
    return create();
  };

  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;

  var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);

  EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

  var hasOwn = {}.hasOwnProperty;

  var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
  var createEmotionProps = function createEmotionProps(type, props) {

    var newProps = {};

    for (var _key in props) {
      if (hasOwn.call(props, _key)) {
        newProps[_key] = props[_key];
      }
    }

    newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:

    return newProps;
  };

  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
        serialized = _ref.serialized,
        isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });

    return null;
  };

  var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible

    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
      cssProp = cache.registered[cssProp];
    }

    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = '';

    if (typeof props.className === 'string') {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }

    var serialized = serializeStyles(registeredStyles, undefined, React__namespace.useContext(ThemeContext));

    className += cache.key + "-" + serialized.name;
    var newProps = {};

    for (var _key2 in props) {
      if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && (true )) {
        newProps[_key2] = props[_key2];
      }
    }

    newProps.className = className;

    if (ref) {
      newProps.ref = ref;
    }

    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
      cache: cache,
      serialized: serialized,
      isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/React__namespace.createElement(WrappedComponent, newProps));
  });

  var Emotion$1 = Emotion;

  var jsx = function jsx(type, props) {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;

    if (props == null || !hasOwn.call(props, 'css')) {
      return React__namespace.createElement.apply(undefined, args);
    }

    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion$1;
    createElementArgArray[1] = createEmotionProps(type, props);

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React__namespace.createElement.apply(null, createElementArgArray);
  };

  (function (_jsx) {
    var JSX;

    (function (_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
  })(jsx || (jsx = {}));

  function css$2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  function keyframes() {
    var insertable = css$2.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }

  function _taggedTemplateLiteral(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v
  });
  function rectToClientRect(rect) {
    const {
      x,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y
    };
  }

  function hasWindow() {
    return typeof window !== 'undefined';
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    {
      return false;
    }
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets() ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  }

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            // If the reference is clipped, the ratio is 0. Throttle the refresh
            // to prevent an infinite loop of updates.
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1000);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          // It's possible that even though the ratio is reported as 1, the
          // element is not actually fully within the IntersectionObserver's root
          // area anymore. This can happen under performance constraints. This may
          // be a bug in the browser's IntersectionObserver implementation. To
          // work around this, we compare the element's bounding rect now with
          // what it was at the time we created the IntersectionObserver. If they
          // are not equal then the element moved, so we refresh.
          refresh();
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  var index = React.useLayoutEffect ;

  var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
  // ==============================
  // NO OP
  // ==============================

  var noop = function noop() {};

  // ==============================
  // Class Name Prefixer
  // ==============================

  /**
   String representation of component state for styling with class names.

   Expects an array of strings OR a string/object pair:
   - className(['comp', 'comp-arg', 'comp-arg-2'])
     @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
   - className('comp', { some: true, state: false })
     @returns 'react-select__comp react-select__comp--some'
  */
  function applyPrefixToName(prefix, name) {
    if (!name) {
      return prefix;
    } else if (name[0] === '-') {
      return prefix + name;
    } else {
      return prefix + '__' + name;
    }
  }
  function classNames(prefix, state) {
    for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classNameList[_key - 2] = arguments[_key];
    }
    var arr = [].concat(classNameList);
    if (state && prefix) {
      for (var key in state) {
        if (state.hasOwnProperty(key) && state[key]) {
          arr.push("".concat(applyPrefixToName(prefix, key)));
        }
      }
    }
    return arr.filter(function (i) {
      return i;
    }).map(function (i) {
      return String(i).trim();
    }).join(' ');
  }
  // ==============================
  // Clean Value
  // ==============================

  var cleanValue = function cleanValue(value) {
    if (isArray(value)) return value.filter(Boolean);
    if (_typeof(value) === 'object' && value !== null) return [value];
    return [];
  };

  // ==============================
  // Clean Common Props
  // ==============================

  var cleanCommonProps = function cleanCommonProps(props) {
    //className
    props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getClassNames;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = _objectWithoutProperties(props, _excluded$4);
    return _objectSpread2({}, innerProps);
  };

  // ==============================
  // Get Style Props
  // ==============================

  var getStyleProps = function getStyleProps(props, name, classNamesState) {
    var cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      className = props.className;
    return {
      css: getStyles(name, props),
      className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
    };
  };

  // ==============================
  // Scroll Helpers
  // ==============================

  function isDocumentElement(el) {
    return [document.documentElement, document.body, window].indexOf(el) > -1;
  }

  // Normalized Scroll Top
  // ------------------------------

  function normalizedHeight(el) {
    if (isDocumentElement(el)) {
      return window.innerHeight;
    }
    return el.clientHeight;
  }

  // Normalized scrollTo & scrollTop
  // ------------------------------

  function getScrollTop(el) {
    if (isDocumentElement(el)) {
      return window.pageYOffset;
    }
    return el.scrollTop;
  }
  function scrollTo(el, top) {
    // with a scroll distance, we perform scroll on the element
    if (isDocumentElement(el)) {
      window.scrollTo(0, top);
      return;
    }
    el.scrollTop = top;
  }

  // Get Scroll Parent
  // ------------------------------

  function getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === 'absolute';
    var overflowRx = /(auto|scroll)/;
    if (style.position === 'fixed') return document.documentElement;
    for (var parent = element; parent = parent.parentElement;) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === 'static') {
        continue;
      }
      if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
        return parent;
      }
    }
    return document.documentElement;
  }

  // Animated Scroll To
  // ------------------------------

  /**
    @param t: time (elapsed)
    @param b: initial value
    @param c: amount of change
    @param d: duration
  */
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
  function animatedScrollTo(element, to) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
    var start = getScrollTop(element);
    var change = to - start;
    var increment = 10;
    var currentTime = 0;
    function animateScroll() {
      currentTime += increment;
      var val = easeOutCubic(currentTime, start, change, duration);
      scrollTo(element, val);
      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        callback(element);
      }
    }
    animateScroll();
  }

  // Scroll Into View
  // ------------------------------

  function scrollIntoView(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;
    if (focusedRect.bottom + overScroll > menuRect.bottom) {
      scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    } else if (focusedRect.top - overScroll < menuRect.top) {
      scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
    }
  }

  // ==============================
  // Get bounding client object
  // ==============================

  // cannot get keys using array notation with DOMRect
  function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    };
  }

  // ==============================
  // Touch Capability Detector
  // ==============================

  function isTouchCapable() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  // ==============================
  // Mobile Device Detector
  // ==============================

  function isMobileDevice() {
    try {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
      return false;
    }
  }

  // ==============================
  // Passive Event Detector
  // ==============================

  // https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
  var passiveOptionAccessed = false;
  var options = {
    get passive() {
      return passiveOptionAccessed = true;
    }
  };
  // check for SSR
  var w = typeof window !== 'undefined' ? window : {};
  if (w.addEventListener && w.removeEventListener) {
    w.addEventListener('p', noop, options);
    w.removeEventListener('p', noop, false);
  }
  var supportsPassiveEvents = passiveOptionAccessed;
  function notNullish(item) {
    return item != null;
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function valueTernary(isMulti, multiValue, singleValue) {
    return isMulti ? multiValue : singleValue;
  }
  function singleValueAsValue(singleValue) {
    return singleValue;
  }
  function multiValueAsValue(multiValue) {
    return multiValue;
  }
  var removeProps = function removeProps(propsObj) {
    for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      properties[_key2 - 1] = arguments[_key2];
    }
    var propsMap = Object.entries(propsObj).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !properties.includes(key);
    });
    return propsMap.reduce(function (newProps, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];
      newProps[key] = val;
      return newProps;
    }, {});
  };

  var _excluded$3 = ["children", "innerProps"],
    _excluded2$1 = ["children", "innerProps"];
  function getMenuPlacement(_ref) {
    var preferredMaxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      preferredPlacement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      controlHeight = _ref.controlHeight;
    var scrollParent = getScrollParent(menuEl);
    var defaultState = {
      placement: 'bottom',
      maxHeight: preferredMaxHeight
    };

    // something went wrong, return default state
    if (!menuEl || !menuEl.offsetParent) return defaultState;

    // we can't trust `scrollParent.scrollHeight` --> it may increase when
    // the menu is rendered
    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;
    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;
    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;
    var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
    var scrollTop = getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;
    switch (preferredPlacement) {
      case 'auto':
      case 'bottom':
        // 1: the menu will fit, do nothing
        if (viewSpaceBelow >= menuHeight) {
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }

        // 2: the menu will fit, if scrolled
        if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }

        // 3: the menu will fit, if constrained
        if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }

          // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.
          var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
          return {
            placement: 'bottom',
            maxHeight: constrainedHeight
          };
        }

        // 4. Forked beviour when there isn't enough space below

        // AUTO: flip the menu, render above
        if (preferredPlacement === 'auto' || isFixedPosition) {
          // may need to be constrained after flipping
          var _constrainedHeight = preferredMaxHeight;
          var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
          if (spaceAbove >= minHeight) {
            _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
          }
          return {
            placement: 'top',
            maxHeight: _constrainedHeight
          };
        }

        // BOTTOM: allow browser to increase scrollable area and immediately set scroll
        if (preferredPlacement === 'bottom') {
          if (shouldScroll) {
            scrollTo(scrollParent, scrollDown);
          }
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }
        break;
      case 'top':
        // 1: the menu will fit, do nothing
        if (viewSpaceAbove >= menuHeight) {
          return {
            placement: 'top',
            maxHeight: preferredMaxHeight
          };
        }

        // 2: the menu will fit, if scrolled
        if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: 'top',
            maxHeight: preferredMaxHeight
          };
        }

        // 3: the menu will fit, if constrained
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          var _constrainedHeight2 = preferredMaxHeight;

          // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.
          if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
            _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
          }
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: 'top',
            maxHeight: _constrainedHeight2
          };
        }

        // 4. not enough space, the browser WILL NOT increase scrollable area when
        // absolutely positioned element rendered above the viewport (only below).
        // Flip the menu, render below
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      default:
        throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
    }
    return defaultState;
  }

  // Menu Component
  // ------------------------------

  function alignToControl(placement) {
    var placementToCSSProp = {
      bottom: 'top',
      top: 'bottom'
    };
    return placement ? placementToCSSProp[placement] : 'bottom';
  }
  var coercePlacement = function coercePlacement(p) {
    return p === 'auto' ? 'bottom' : p;
  };
  var menuCSS = function menuCSS(_ref2, unstyled) {
    var _objectSpread2$1;
    var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
    return _objectSpread2((_objectSpread2$1 = {
      label: 'menu'
    }, _defineProperty(_objectSpread2$1, alignToControl(placement), '100%'), _defineProperty(_objectSpread2$1, "position", 'absolute'), _defineProperty(_objectSpread2$1, "width", '100%'), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
      backgroundColor: colors.neutral0,
      borderRadius: borderRadius,
      boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
      marginBottom: spacing.menuGutter,
      marginTop: spacing.menuGutter
    });
  };
  var PortalPlacementContext = /*#__PURE__*/React.createContext(null);

  // NOTE: internal only
  var MenuPlacer = function MenuPlacer(props) {
    var children = props.children,
      minMenuHeight = props.minMenuHeight,
      maxMenuHeight = props.maxMenuHeight,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition,
      menuShouldScrollIntoView = props.menuShouldScrollIntoView,
      theme = props.theme;
    var _ref3 = React.useContext(PortalPlacementContext) || {},
      setPortalPlacement = _ref3.setPortalPlacement;
    var ref = React.useRef(null);
    var _useState = React.useState(maxMenuHeight),
      _useState2 = _slicedToArray(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];
    var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      placement = _useState4[0],
      setPlacement = _useState4[1];
    var controlHeight = theme.spacing.controlHeight;
    index(function () {
      var menuEl = ref.current;
      if (!menuEl) return;

      // DO NOT scroll if position is fixed
      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: menuEl,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        controlHeight: controlHeight
      });
      setMaxHeight(state.maxHeight);
      setPlacement(state.placement);
      setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
    }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
    return children({
      ref: ref,
      placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
        placement: placement || coercePlacement(menuPlacement),
        maxHeight: maxHeight
      })
    });
  };
  var Menu = function Menu(props) {
    var children = props.children,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'menu', {
      menu: true
    }), {
      ref: innerRef
    }, innerProps), children);
  };
  var Menu$1 = Menu;

  // ==============================
  // Menu List
  // ==============================

  var menuListCSS = function menuListCSS(_ref4, unstyled) {
    var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
    return _objectSpread2({
      maxHeight: maxHeight,
      overflowY: 'auto',
      position: 'relative',
      // required for offset[Height, Top] > keyboard scroll
      WebkitOverflowScrolling: 'touch'
    }, unstyled ? {} : {
      paddingBottom: baseUnit,
      paddingTop: baseUnit
    });
  };
  var MenuList = function MenuList(props) {
    var children = props.children,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
    return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }), {
      ref: innerRef
    }, innerProps), children);
  };

  // ==============================
  // Menu Notices
  // ==============================

  var noticeCSS = function noticeCSS(_ref5, unstyled) {
    var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
    return _objectSpread2({
      textAlign: 'center'
    }, unstyled ? {} : {
      color: colors.neutral40,
      padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
    });
  };
  var noOptionsMessageCSS = noticeCSS;
  var loadingMessageCSS = noticeCSS;
  var NoOptionsMessage = function NoOptionsMessage(_ref6) {
    var _ref6$children = _ref6.children,
      children = _ref6$children === void 0 ? 'No options' : _ref6$children,
      innerProps = _ref6.innerProps,
      restProps = _objectWithoutProperties(_ref6, _excluded$3);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'noOptionsMessage', {
      'menu-notice': true,
      'menu-notice--no-options': true
    }), innerProps), children);
  };
  var LoadingMessage = function LoadingMessage(_ref7) {
    var _ref7$children = _ref7.children,
      children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
      innerProps = _ref7.innerProps,
      restProps = _objectWithoutProperties(_ref7, _excluded2$1);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'loadingMessage', {
      'menu-notice': true,
      'menu-notice--loading': true
    }), innerProps), children);
  };

  // ==============================
  // Menu Portal
  // ==============================

  var menuPortalCSS = function menuPortalCSS(_ref8) {
    var rect = _ref8.rect,
      offset = _ref8.offset,
      position = _ref8.position;
    return {
      left: rect.left,
      position: position,
      top: offset,
      width: rect.width,
      zIndex: 1
    };
  };
  var MenuPortal = function MenuPortal(props) {
    var appendTo = props.appendTo,
      children = props.children,
      controlElement = props.controlElement,
      innerProps = props.innerProps,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition;
    var menuPortalRef = React.useRef(null);
    var cleanupRef = React.useRef(null);
    var _useState5 = React.useState(coercePlacement(menuPlacement)),
      _useState6 = _slicedToArray(_useState5, 2),
      placement = _useState6[0],
      setPortalPlacement = _useState6[1];
    var portalPlacementContext = React.useMemo(function () {
      return {
        setPortalPlacement: setPortalPlacement
      };
    }, []);
    var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      computedPosition = _useState8[0],
      setComputedPosition = _useState8[1];
    var updateComputedPosition = React.useCallback(function () {
      if (!controlElement) return;
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
        setComputedPosition({
          offset: offset,
          rect: rect
        });
      }
    }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
    index(function () {
      updateComputedPosition();
    }, [updateComputedPosition]);
    var runAutoUpdate = React.useCallback(function () {
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (controlElement && menuPortalRef.current) {
        cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
          elementResize: 'ResizeObserver' in window
        });
      }
    }, [controlElement, updateComputedPosition]);
    index(function () {
      runAutoUpdate();
    }, [runAutoUpdate]);
    var setMenuPortalElement = React.useCallback(function (menuPortalElement) {
      menuPortalRef.current = menuPortalElement;
      runAutoUpdate();
    }, [runAutoUpdate]);

    // bail early if required elements aren't present
    if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

    // same wrapper element whether fixed or portalled
    var menuWrapper = jsx("div", _extends({
      ref: setMenuPortalElement
    }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
      offset: computedPosition.offset,
      position: menuPosition,
      rect: computedPosition.rect
    }), 'menuPortal', {
      'menu-portal': true
    }), innerProps), children);
    return jsx(PortalPlacementContext.Provider, {
      value: portalPlacementContext
    }, appendTo ? /*#__PURE__*/reactDom.createPortal(menuWrapper, appendTo) : menuWrapper);
  };

  // ==============================
  // Root Container
  // ==============================

  var containerCSS = function containerCSS(_ref) {
    var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
    return {
      label: 'container',
      direction: isRtl ? 'rtl' : undefined,
      pointerEvents: isDisabled ? 'none' : undefined,
      // cancel mouse events when disabled
      position: 'relative'
    };
  };
  var SelectContainer = function SelectContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
    return jsx("div", _extends({}, getStyleProps(props, 'container', {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }), innerProps), children);
  };

  // ==============================
  // Value Container
  // ==============================

  var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
    var spacing = _ref2.theme.spacing,
      isMulti = _ref2.isMulti,
      hasValue = _ref2.hasValue,
      controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
    return _objectSpread2({
      alignItems: 'center',
      display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
      flex: 1,
      flexWrap: 'wrap',
      WebkitOverflowScrolling: 'touch',
      position: 'relative',
      overflow: 'hidden'
    }, unstyled ? {} : {
      padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
    });
  };
  var ValueContainer = function ValueContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      hasValue = props.hasValue;
    return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }), innerProps), children);
  };

  // ==============================
  // Indicator Container
  // ==============================

  var indicatorsContainerCSS = function indicatorsContainerCSS() {
    return {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'flex',
      flexShrink: 0
    };
  };
  var IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
      indicators: true
    }), innerProps), children);
  };

  var _templateObject;
  var _excluded$2 = ["size"],
    _excluded2 = ["innerProps", "isRtl", "size"];
  function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

  // ==============================
  // Dropdown & Clear Icons
  // ==============================
  var _ref2$2 = {
    name: "tj5bde-Svg",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
  };
  var Svg = function Svg(_ref) {
    var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded$2);
    return jsx("svg", _extends({
      height: size,
      width: size,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      css: _ref2$2
    }, props));
  };
  var CrossIcon = function CrossIcon(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  };
  var DownChevron = function DownChevron(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
  };

  // ==============================
  // Dropdown & Clear Buttons
  // ==============================

  var baseCSS = function baseCSS(_ref3, unstyled) {
    var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
    return _objectSpread2({
      label: 'indicatorContainer',
      display: 'flex',
      transition: 'color 150ms'
    }, unstyled ? {} : {
      color: isFocused ? colors.neutral60 : colors.neutral20,
      padding: baseUnit * 2,
      ':hover': {
        color: isFocused ? colors.neutral80 : colors.neutral40
      }
    });
  };
  var dropdownIndicatorCSS = baseCSS;
  var DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
      indicator: true,
      'dropdown-indicator': true
    }), innerProps), children || jsx(DownChevron, null));
  };
  var clearIndicatorCSS = baseCSS;
  var ClearIndicator = function ClearIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
      indicator: true,
      'clear-indicator': true
    }), innerProps), children || jsx(CrossIcon, null));
  };

  // ==============================
  // Separator
  // ==============================

  var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
    var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
    return _objectSpread2({
      label: 'indicatorSeparator',
      alignSelf: 'stretch',
      width: 1
    }, unstyled ? {} : {
      backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
      marginBottom: baseUnit * 2,
      marginTop: baseUnit * 2
    });
  };
  var IndicatorSeparator = function IndicatorSeparator(props) {
    var innerProps = props.innerProps;
    return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
      'indicator-separator': true
    })));
  };

  // ==============================
  // Loading
  // ==============================

  var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
  var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
    var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
    return _objectSpread2({
      label: 'loadingIndicator',
      display: 'flex',
      transition: 'color 150ms',
      alignSelf: 'center',
      fontSize: size,
      lineHeight: 1,
      marginRight: size,
      textAlign: 'center',
      verticalAlign: 'middle'
    }, unstyled ? {} : {
      color: isFocused ? colors.neutral60 : colors.neutral20,
      padding: baseUnit * 2
    });
  };
  var LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay,
      offset = _ref6.offset;
    return jsx("span", {
      css: /*#__PURE__*/css$2({
        animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
        backgroundColor: 'currentColor',
        borderRadius: '1em',
        display: 'inline-block',
        marginLeft: offset ? '1em' : undefined,
        height: '1em',
        verticalAlign: 'top',
        width: '1em'
      }, ";label:LoadingDot;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
    });
  };
  var LoadingIndicator = function LoadingIndicator(_ref7) {
    var innerProps = _ref7.innerProps,
      isRtl = _ref7.isRtl,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? 4 : _ref7$size,
      restProps = _objectWithoutProperties(_ref7, _excluded2);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      innerProps: innerProps,
      isRtl: isRtl,
      size: size
    }), 'loadingIndicator', {
      indicator: true,
      'loading-indicator': true
    }), innerProps), jsx(LoadingDot, {
      delay: 0,
      offset: isRtl
    }), jsx(LoadingDot, {
      delay: 160,
      offset: true
    }), jsx(LoadingDot, {
      delay: 320,
      offset: !isRtl
    }));
  };

  var css$1 = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
    return _objectSpread2({
      label: 'control',
      alignItems: 'center',
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: spacing.controlHeight,
      outline: '0 !important',
      position: 'relative',
      transition: 'all 100ms'
    }, unstyled ? {} : {
      backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
      borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
      borderRadius: borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
      '&:hover': {
        borderColor: isFocused ? colors.primary : colors.neutral30
      }
    });
  };
  var Control = function Control(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
    return jsx("div", _extends({
      ref: innerRef
    }, getStyleProps(props, 'control', {
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }), innerProps, {
      "aria-disabled": isDisabled || undefined
    }), children);
  };
  var Control$1 = Control;

  var _excluded$1 = ["data"];
  var groupCSS = function groupCSS(_ref, unstyled) {
    var spacing = _ref.theme.spacing;
    return unstyled ? {} : {
      paddingBottom: spacing.baseUnit * 2,
      paddingTop: spacing.baseUnit * 2
    };
  };
  var Group = function Group(props) {
    var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
    return jsx("div", _extends({}, getStyleProps(props, 'group', {
      group: true
    }), innerProps), jsx(Heading, _extends({}, headingProps, {
      selectProps: selectProps,
      theme: theme,
      getStyles: getStyles,
      getClassNames: getClassNames,
      cx: cx
    }), label), jsx("div", null, children));
  };
  var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme,
      colors = _ref2$theme.colors,
      spacing = _ref2$theme.spacing;
    return _objectSpread2({
      label: 'group',
      cursor: 'default',
      display: 'block'
    }, unstyled ? {} : {
      color: colors.neutral40,
      fontSize: '75%',
      fontWeight: 500,
      marginBottom: '0.25em',
      paddingLeft: spacing.baseUnit * 3,
      paddingRight: spacing.baseUnit * 3,
      textTransform: 'uppercase'
    });
  };
  var GroupHeading = function GroupHeading(props) {
    var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
    return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
      'group-heading': true
    }), innerProps));
  };
  var Group$1 = Group;

  var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
  var inputCSS = function inputCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      value = _ref.value,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2(_objectSpread2({
      visibility: isDisabled ? 'hidden' : 'visible',
      // force css to recompute when value change due to @emotion bug.
      // We can remove it whenever the bug is fixed.
      transform: value ? 'translateZ(0)' : ''
    }, containerStyle), unstyled ? {} : {
      margin: spacing.baseUnit / 2,
      paddingBottom: spacing.baseUnit / 2,
      paddingTop: spacing.baseUnit / 2,
      color: colors.neutral80
    });
  };
  var spacingStyle = {
    gridArea: '1 / 2',
    font: 'inherit',
    minWidth: '2px',
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  };
  var containerStyle = {
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': _objectSpread2({
      content: 'attr(data-value) " "',
      visibility: 'hidden',
      whiteSpace: 'pre'
    }, spacingStyle)
  };
  var inputStyle = function inputStyle(isHidden) {
    return _objectSpread2({
      label: 'input',
      color: 'inherit',
      background: 0,
      opacity: isHidden ? 0 : 1,
      width: '100%'
    }, spacingStyle);
  };
  var Input = function Input(props) {
    var cx = props.cx,
      value = props.value;
    var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      inputClassName = _cleanCommonProps.inputClassName,
      innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
    return jsx("div", _extends({}, getStyleProps(props, 'input', {
      'input-container': true
    }), {
      "data-value": value || ''
    }), jsx("input", _extends({
      className: cx({
        input: true
      }, inputClassName),
      ref: innerRef,
      style: inputStyle(isHidden),
      disabled: isDisabled
    }, innerProps)));
  };
  var Input$1 = Input;

  var multiValueCSS = function multiValueCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'multiValue',
      display: 'flex',
      minWidth: 0
    }, unstyled ? {} : {
      backgroundColor: colors.neutral10,
      borderRadius: borderRadius / 2,
      margin: spacing.baseUnit / 2
    });
  };
  var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
    return _objectSpread2({
      overflow: 'hidden',
      textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
      whiteSpace: 'nowrap'
    }, unstyled ? {} : {
      borderRadius: borderRadius / 2,
      color: colors.neutral80,
      fontSize: '85%',
      padding: 3,
      paddingLeft: 6
    });
  };
  var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
    var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
    return _objectSpread2({
      alignItems: 'center',
      display: 'flex'
    }, unstyled ? {} : {
      borderRadius: borderRadius / 2,
      backgroundColor: isFocused ? colors.dangerLight : undefined,
      paddingLeft: spacing.baseUnit,
      paddingRight: spacing.baseUnit,
      ':hover': {
        backgroundColor: colors.dangerLight,
        color: colors.danger
      }
    });
  };
  var MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children,
      innerProps = _ref4.innerProps;
    return jsx("div", innerProps, children);
  };
  var MultiValueContainer = MultiValueGeneric;
  var MultiValueLabel = MultiValueGeneric;
  function MultiValueRemove(_ref5) {
    var children = _ref5.children,
      innerProps = _ref5.innerProps;
    return jsx("div", _extends({
      role: "button"
    }, innerProps), children || jsx(CrossIcon, {
      size: 14
    }));
  }
  var MultiValue = function MultiValue(props) {
    var children = props.children,
      components = props.components,
      data = props.data,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
    var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValue', {
        'multi-value': true,
        'multi-value--is-disabled': isDisabled
      })), innerProps),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: _objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
        'multi-value__label': true
      })),
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
        'multi-value__remove': true
      })), {}, {
        'aria-label': "Remove ".concat(children || 'option')
      }, removeProps),
      selectProps: selectProps
    }));
  };
  var MultiValue$1 = MultiValue;

  var optionCSS = function optionCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'option',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      width: '100%',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
    }, unstyled ? {} : {
      backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
      color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
      padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
      // provide some affordance on touch devices
      ':active': {
        backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
      }
    });
  };
  var Option = function Option(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'option', {
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }), {
      ref: innerRef,
      "aria-disabled": isDisabled
    }, innerProps), children);
  };
  var Option$1 = Option;

  var placeholderCSS = function placeholderCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'placeholder',
      gridArea: '1 / 1 / 2 / 3'
    }, unstyled ? {} : {
      color: colors.neutral50,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2
    });
  };
  var Placeholder = function Placeholder(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
      placeholder: true
    }), innerProps), children);
  };
  var Placeholder$1 = Placeholder;

  var css = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'singleValue',
      gridArea: '1 / 1 / 2 / 3',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }, unstyled ? {} : {
      color: isDisabled ? colors.neutral40 : colors.neutral80,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2
    });
  };
  var SingleValue = function SingleValue(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }), innerProps), children);
  };
  var SingleValue$1 = SingleValue;

  var components = {
    ClearIndicator: ClearIndicator,
    Control: Control$1,
    DropdownIndicator: DropdownIndicator,
    DownChevron: DownChevron,
    CrossIcon: CrossIcon,
    Group: Group$1,
    GroupHeading: GroupHeading,
    IndicatorsContainer: IndicatorsContainer,
    IndicatorSeparator: IndicatorSeparator,
    Input: Input$1,
    LoadingIndicator: LoadingIndicator,
    Menu: Menu$1,
    MenuList: MenuList,
    MenuPortal: MenuPortal,
    LoadingMessage: LoadingMessage,
    NoOptionsMessage: NoOptionsMessage,
    MultiValue: MultiValue$1,
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    Option: Option$1,
    Placeholder: Placeholder$1,
    SelectContainer: SelectContainer,
    SingleValue: SingleValue$1,
    ValueContainer: ValueContainer
  };
  var defaultComponents = function defaultComponents(props) {
    return _objectSpread2(_objectSpread2({}, components), props.components);
  };

  var safeIsNaN = Number.isNaN ||
      function ponyfill(value) {
          return typeof value === 'number' && value !== value;
      };
  function isEqual(first, second) {
      if (first === second) {
          return true;
      }
      if (safeIsNaN(first) && safeIsNaN(second)) {
          return true;
      }
      return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
      if (newInputs.length !== lastInputs.length) {
          return false;
      }
      for (var i = 0; i < newInputs.length; i++) {
          if (!isEqual(newInputs[i], lastInputs[i])) {
              return false;
          }
      }
      return true;
  }

  function memoizeOne(resultFn, isEqual) {
      if (isEqual === void 0) { isEqual = areInputsEqual; }
      var cache = null;
      function memoized() {
          var newArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              newArgs[_i] = arguments[_i];
          }
          if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
              return cache.lastResult;
          }
          var lastResult = resultFn.apply(this, newArgs);
          cache = {
              lastResult: lastResult,
              lastArgs: newArgs,
              lastThis: this,
          };
          return lastResult;
      }
      memoized.clear = function clear() {
          cache = null;
      };
      return memoized;
  }

  var memoizeOne_cjs = memoizeOne;

  var memoizeOne$1 = /*@__PURE__*/getDefaultExportFromCjs(memoizeOne_cjs);

  function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

  // Assistive text to describe visual elements. Hidden for sighted users.
  var _ref = {
    name: "1f43avz-a11yText-A11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
  };
  var A11yText = function A11yText(props) {
    return jsx("span", _extends({
      css: _ref
    }, props));
  };
  var A11yText$1 = A11yText;

  var defaultAriaLiveMessages = {
    guidance: function guidance(props) {
      var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context,
        isInitialFocus = props.isInitialFocus;
      switch (context) {
        case 'menu':
          return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
        case 'input':
          return isInitialFocus ? "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '') : '';
        case 'value':
          return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
        default:
          return '';
      }
    },
    onChange: function onChange(props) {
      var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? '' : _props$label,
        labels = props.labels,
        isDisabled = props.isDisabled;
      switch (action) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return "option ".concat(label, ", deselected.");
        case 'clear':
          return 'All selected options have been cleared.';
        case 'initial-input-focus':
          return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
        case 'select-option':
          return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
        default:
          return '';
      }
    },
    onFocus: function onFocus(props) {
      var context = props.context,
        focused = props.focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected,
        isAppleDevice = props.isAppleDevice;
      var getArrayIndex = function getArrayIndex(arr, item) {
        return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
      };
      if (context === 'value' && selectValue) {
        return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
      }
      if (context === 'menu' && isAppleDevice) {
        var disabled = isDisabled ? ' disabled' : '';
        var status = "".concat(isSelected ? ' selected' : '').concat(disabled);
        return "".concat(label).concat(status, ", ").concat(getArrayIndex(options, focused), ".");
      }
      return '';
    },
    onFilter: function onFilter(props) {
      var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
      return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
    }
  };

  var LiveRegion = function LiveRegion(props) {
    var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps,
      id = props.id,
      isAppleDevice = props.isAppleDevice;
    var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue,
      isLoading = selectProps.isLoading;
    var ariaLabel = selectProps['aria-label'];
    var ariaLive = selectProps['aria-live'];

    // Update aria live message configuration when prop changes
    var messages = React.useMemo(function () {
      return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
    }, [ariaLiveMessages]);

    // Update aria live selected option when prop changes
    var ariaSelected = React.useMemo(function () {
      var message = '';
      if (ariaSelection && messages.onChange) {
        var option = ariaSelection.option,
          selectedOptions = ariaSelection.options,
          removedValue = ariaSelection.removedValue,
          removedValues = ariaSelection.removedValues,
          value = ariaSelection.value;
        // select-option when !isMulti does not return option so we assume selected option is value
        var asOption = function asOption(val) {
          return !Array.isArray(val) ? val : null;
        };

        // If there is just one item from the action then get its label
        var selected = removedValue || option || asOption(value);
        var label = selected ? getOptionLabel(selected) : '';

        // If there are multiple items from the action then return an array of labels
        var multiSelected = selectedOptions || removedValues || undefined;
        var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
        var onChangeProps = _objectSpread2({
          // multiSelected items are usually items that have already been selected
          // or set by the user as a default value so we assume they are not disabled
          isDisabled: selected && isOptionDisabled(selected, selectValue),
          label: label,
          labels: labels
        }, ariaSelection);
        message = messages.onChange(onChangeProps);
      }
      return message;
    }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
    var ariaFocused = React.useMemo(function () {
      var focusMsg = '';
      var focused = focusedOption || focusedValue;
      var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
      if (focused && messages.onFocus) {
        var onFocusProps = {
          focused: focused,
          label: getOptionLabel(focused),
          isDisabled: isOptionDisabled(focused, selectValue),
          isSelected: isSelected,
          options: focusableOptions,
          context: focused === focusedOption ? 'menu' : 'value',
          selectValue: selectValue,
          isAppleDevice: isAppleDevice
        };
        focusMsg = messages.onFocus(onFocusProps);
      }
      return focusMsg;
    }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue, isAppleDevice]);
    var ariaResults = React.useMemo(function () {
      var resultsMsg = '';
      if (menuIsOpen && options.length && !isLoading && messages.onFilter) {
        var resultsMessage = screenReaderStatus({
          count: focusableOptions.length
        });
        resultsMsg = messages.onFilter({
          inputValue: inputValue,
          resultsMessage: resultsMessage
        });
      }
      return resultsMsg;
    }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus, isLoading]);
    var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
    var ariaGuidance = React.useMemo(function () {
      var guidanceMsg = '';
      if (messages.guidance) {
        var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
        guidanceMsg = messages.guidance({
          'aria-label': ariaLabel,
          context: context,
          isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
          isMulti: isMulti,
          isSearchable: isSearchable,
          tabSelectsValue: tabSelectsValue,
          isInitialFocus: isInitialFocus
        });
      }
      return guidanceMsg;
    }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
    var ScreenReaderText = jsx(React.Fragment, null, jsx("span", {
      id: "aria-selection"
    }, ariaSelected), jsx("span", {
      id: "aria-focused"
    }, ariaFocused), jsx("span", {
      id: "aria-results"
    }, ariaResults), jsx("span", {
      id: "aria-guidance"
    }, ariaGuidance));
    return jsx(React.Fragment, null, jsx(A11yText$1, {
      id: id
    }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
      "aria-live": ariaLive,
      "aria-atomic": "false",
      "aria-relevant": "additions text",
      role: "log"
    }, isFocused && !isInitialFocus && ScreenReaderText));
  };
  var LiveRegion$1 = LiveRegion;

  var diacritics = [{
    base: 'A',
    letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
  }, {
    base: 'AA',
    letters: "\uA732"
  }, {
    base: 'AE',
    letters: "\xC6\u01FC\u01E2"
  }, {
    base: 'AO',
    letters: "\uA734"
  }, {
    base: 'AU',
    letters: "\uA736"
  }, {
    base: 'AV',
    letters: "\uA738\uA73A"
  }, {
    base: 'AY',
    letters: "\uA73C"
  }, {
    base: 'B',
    letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
  }, {
    base: 'C',
    letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
  }, {
    base: 'D',
    letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
  }, {
    base: 'DZ',
    letters: "\u01F1\u01C4"
  }, {
    base: 'Dz',
    letters: "\u01F2\u01C5"
  }, {
    base: 'E',
    letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
  }, {
    base: 'F',
    letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
  }, {
    base: 'G',
    letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
  }, {
    base: 'H',
    letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
  }, {
    base: 'I',
    letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
  }, {
    base: 'J',
    letters: "J\u24BF\uFF2A\u0134\u0248"
  }, {
    base: 'K',
    letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
  }, {
    base: 'L',
    letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
  }, {
    base: 'LJ',
    letters: "\u01C7"
  }, {
    base: 'Lj',
    letters: "\u01C8"
  }, {
    base: 'M',
    letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
  }, {
    base: 'N',
    letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
  }, {
    base: 'NJ',
    letters: "\u01CA"
  }, {
    base: 'Nj',
    letters: "\u01CB"
  }, {
    base: 'O',
    letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
  }, {
    base: 'OI',
    letters: "\u01A2"
  }, {
    base: 'OO',
    letters: "\uA74E"
  }, {
    base: 'OU',
    letters: "\u0222"
  }, {
    base: 'P',
    letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
  }, {
    base: 'Q',
    letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
  }, {
    base: 'R',
    letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
  }, {
    base: 'S',
    letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
  }, {
    base: 'T',
    letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
  }, {
    base: 'TZ',
    letters: "\uA728"
  }, {
    base: 'U',
    letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
  }, {
    base: 'V',
    letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
  }, {
    base: 'VY',
    letters: "\uA760"
  }, {
    base: 'W',
    letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
  }, {
    base: 'X',
    letters: "X\u24CD\uFF38\u1E8A\u1E8C"
  }, {
    base: 'Y',
    letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
  }, {
    base: 'Z',
    letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
  }, {
    base: 'a',
    letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
  }, {
    base: 'aa',
    letters: "\uA733"
  }, {
    base: 'ae',
    letters: "\xE6\u01FD\u01E3"
  }, {
    base: 'ao',
    letters: "\uA735"
  }, {
    base: 'au',
    letters: "\uA737"
  }, {
    base: 'av',
    letters: "\uA739\uA73B"
  }, {
    base: 'ay',
    letters: "\uA73D"
  }, {
    base: 'b',
    letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
  }, {
    base: 'c',
    letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
  }, {
    base: 'd',
    letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
  }, {
    base: 'dz',
    letters: "\u01F3\u01C6"
  }, {
    base: 'e',
    letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
  }, {
    base: 'f',
    letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
  }, {
    base: 'g',
    letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
  }, {
    base: 'h',
    letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
  }, {
    base: 'hv',
    letters: "\u0195"
  }, {
    base: 'i',
    letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
  }, {
    base: 'j',
    letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
  }, {
    base: 'k',
    letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
  }, {
    base: 'l',
    letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
  }, {
    base: 'lj',
    letters: "\u01C9"
  }, {
    base: 'm',
    letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
  }, {
    base: 'n',
    letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
  }, {
    base: 'nj',
    letters: "\u01CC"
  }, {
    base: 'o',
    letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
  }, {
    base: 'oi',
    letters: "\u01A3"
  }, {
    base: 'ou',
    letters: "\u0223"
  }, {
    base: 'oo',
    letters: "\uA74F"
  }, {
    base: 'p',
    letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
  }, {
    base: 'q',
    letters: "q\u24E0\uFF51\u024B\uA757\uA759"
  }, {
    base: 'r',
    letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
  }, {
    base: 's',
    letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
  }, {
    base: 't',
    letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
  }, {
    base: 'tz',
    letters: "\uA729"
  }, {
    base: 'u',
    letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
  }, {
    base: 'v',
    letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
  }, {
    base: 'vy',
    letters: "\uA761"
  }, {
    base: 'w',
    letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
  }, {
    base: 'x',
    letters: "x\u24E7\uFF58\u1E8B\u1E8D"
  }, {
    base: 'y',
    letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
  }, {
    base: 'z',
    letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
  }];
  var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
    return d.letters;
  }).join('') + ']', 'g');
  var diacriticToBase = {};
  for (var i = 0; i < diacritics.length; i++) {
    var diacritic = diacritics[i];
    for (var j = 0; j < diacritic.letters.length; j++) {
      diacriticToBase[diacritic.letters[j]] = diacritic.base;
    }
  }
  var stripDiacritics = function stripDiacritics(str) {
    return str.replace(anyDiacritic, function (match) {
      return diacriticToBase[match];
    });
  };

  var memoizedStripDiacriticsForInput = memoizeOne$1(stripDiacritics);
  var trimString = function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var defaultStringify = function defaultStringify(option) {
    return "".concat(option.label, " ").concat(option.value);
  };
  var createFilter = function createFilter(config) {
    return function (option, rawInput) {
      // eslint-disable-next-line no-underscore-dangle
      if (option.data.__isNew__) return true;
      var _ignoreCase$ignoreAcc = _objectSpread2({
          ignoreCase: true,
          ignoreAccents: true,
          stringify: defaultStringify,
          trim: true,
          matchFrom: 'any'
        }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;
      var input = trim ? trimString(rawInput) : rawInput;
      var candidate = trim ? trimString(stringify(option)) : stringify(option);
      if (ignoreCase) {
        input = input.toLowerCase();
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        input = memoizedStripDiacriticsForInput(input);
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
  };

  var _excluded = ["innerRef"];
  function DummyInput(_ref) {
    var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, _excluded);
    // Remove animation props not meant for HTML elements
    var filteredProps = removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
    return jsx("input", _extends({
      ref: innerRef
    }, filteredProps, {
      css: /*#__PURE__*/css$2({
        label: 'dummyInput',
        // get rid of any default styles
        background: 0,
        border: 0,
        // important! this hides the flashing cursor
        caretColor: 'transparent',
        fontSize: 'inherit',
        gridArea: '1 / 1 / 2 / 3',
        outline: 0,
        padding: 0,
        // important! without `width` browsers won't allow focus
        width: 1,
        // remove cursor on desktop
        color: 'transparent',
        // remove cursor on mobile whilst maintaining "scroll into view" behaviour
        left: -100,
        opacity: 0,
        position: 'relative',
        transform: 'scale(.01)'
      }, ";label:DummyInput;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
    }));
  }

  var cancelScroll = function cancelScroll(event) {
    if (event.cancelable) event.preventDefault();
    event.stopPropagation();
  };
  function useScrollCapture(_ref) {
    var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
    var isBottom = React.useRef(false);
    var isTop = React.useRef(false);
    var touchStart = React.useRef(0);
    var scrollTarget = React.useRef(null);
    var handleEventDelta = React.useCallback(function (event, delta) {
      if (scrollTarget.current === null) return;
      var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
      var target = scrollTarget.current;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false;

      // reset bottom/top flags
      if (availableScroll > delta && isBottom.current) {
        if (onBottomLeave) onBottomLeave(event);
        isBottom.current = false;
      }
      if (isDeltaPositive && isTop.current) {
        if (onTopLeave) onTopLeave(event);
        isTop.current = false;
      }

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !isBottom.current) {
          onBottomArrive(event);
        }
        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        isBottom.current = true;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !isTop.current) {
          onTopArrive(event);
        }
        target.scrollTop = 0;
        shouldCancelScroll = true;
        isTop.current = true;
      }

      // cancel scroll
      if (shouldCancelScroll) {
        cancelScroll(event);
      }
    }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
    var onWheel = React.useCallback(function (event) {
      handleEventDelta(event, event.deltaY);
    }, [handleEventDelta]);
    var onTouchStart = React.useCallback(function (event) {
      // set touch start so we can calculate touchmove delta
      touchStart.current = event.changedTouches[0].clientY;
    }, []);
    var onTouchMove = React.useCallback(function (event) {
      var deltaY = touchStart.current - event.changedTouches[0].clientY;
      handleEventDelta(event, deltaY);
    }, [handleEventDelta]);
    var startListening = React.useCallback(function (el) {
      // bail early if no element is available to attach to
      if (!el) return;
      var notPassive = supportsPassiveEvents ? {
        passive: false
      } : false;
      el.addEventListener('wheel', onWheel, notPassive);
      el.addEventListener('touchstart', onTouchStart, notPassive);
      el.addEventListener('touchmove', onTouchMove, notPassive);
    }, [onTouchMove, onTouchStart, onWheel]);
    var stopListening = React.useCallback(function (el) {
      // bail early if no element is available to detach from
      if (!el) return;
      el.removeEventListener('wheel', onWheel, false);
      el.removeEventListener('touchstart', onTouchStart, false);
      el.removeEventListener('touchmove', onTouchMove, false);
    }, [onTouchMove, onTouchStart, onWheel]);
    React.useEffect(function () {
      if (!isEnabled) return;
      var element = scrollTarget.current;
      startListening(element);
      return function () {
        stopListening(element);
      };
    }, [isEnabled, startListening, stopListening]);
    return function (element) {
      scrollTarget.current = element;
    };
  }

  var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
  var LOCK_STYLES = {
    boxSizing: 'border-box',
    // account for possible declaration `width: 100%;` on body
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  };
  function preventTouchMove(e) {
    if (e.cancelable) e.preventDefault();
  }
  function allowTouchMove(e) {
    e.stopPropagation();
  }
  function preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;
    if (top === 0) {
      this.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      this.scrollTop = top - 1;
    }
  }

  // `ontouchstart` check works on most browsers
  // `maxTouchPoints` works on IE10/11 and Surface
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var activeScrollLocks = 0;
  var listenerOptions = {
    capture: false,
    passive: false
  };
  function useScrollLock(_ref) {
    var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
    var originalStyles = React.useRef({});
    var scrollTarget = React.useRef(null);
    var addScrollLock = React.useCallback(function (touchScrollTarget) {
      if (!canUseDOM) return;
      var target = document.body;
      var targetStyle = target && target.style;
      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          originalStyles.current[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      }

      // account for touch devices
      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
        }
      }

      // increment active scroll locks
      activeScrollLocks += 1;
    }, [accountForScrollbars]);
    var removeScrollLock = React.useCallback(function (touchScrollTarget) {
      if (!canUseDOM) return;
      var target = document.body;
      var targetStyle = target && target.style;

      // safely decrement active scroll locks
      activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

      // reapply original body styles, if any
      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = originalStyles.current[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
        }
      }
    }, [accountForScrollbars]);
    React.useEffect(function () {
      if (!isEnabled) return;
      var element = scrollTarget.current;
      addScrollLock(element);
      return function () {
        removeScrollLock(element);
      };
    }, [isEnabled, addScrollLock, removeScrollLock]);
    return function (element) {
      scrollTarget.current = element;
    };
  }

  function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
  var blurSelectInput = function blurSelectInput(event) {
    var element = event.target;
    return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
  };
  var _ref2$1 = {
    name: "bp8cua-ScrollManager",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
  };
  function ScrollManager(_ref) {
    var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
    var setScrollCaptureTarget = useScrollCapture({
      isEnabled: captureEnabled,
      onBottomArrive: onBottomArrive,
      onBottomLeave: onBottomLeave,
      onTopArrive: onTopArrive,
      onTopLeave: onTopLeave
    });
    var setScrollLockTarget = useScrollLock({
      isEnabled: lockEnabled
    });
    var targetRef = function targetRef(element) {
      setScrollCaptureTarget(element);
      setScrollLockTarget(element);
    };
    return jsx(React.Fragment, null, lockEnabled && jsx("div", {
      onClick: blurSelectInput,
      css: _ref2$1
    }), children(targetRef));
  }

  function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
  var _ref2 = {
    name: "5kkxb2-requiredInput-RequiredInput",
    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  };
  var RequiredInput = function RequiredInput(_ref) {
    var name = _ref.name,
      onFocus = _ref.onFocus;
    return jsx("input", {
      required: true,
      name: name,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: onFocus,
      css: _ref2
      // Prevent `Switching from uncontrolled to controlled` error
      ,
      value: "",
      onChange: function onChange() {}
    });
  };
  var RequiredInput$1 = RequiredInput;

  /// <reference types="user-agent-data-types" />

  function testPlatform(re) {
    var _window$navigator$use;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window$navigator$use = window.navigator['userAgentData']) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
  }
  function isIPhone() {
    return testPlatform(/^iPhone/i);
  }
  function isMac() {
    return testPlatform(/^Mac/i);
  }
  function isIPad() {
    return testPlatform(/^iPad/i) ||
    // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
  }
  function isIOS() {
    return isIPhone() || isIPad();
  }
  function isAppleDevice() {
    return isMac() || isIOS();
  }

  var formatGroupLabel = function formatGroupLabel(group) {
    return group.label;
  };
  var getOptionLabel$1 = function getOptionLabel(option) {
    return option.label;
  };
  var getOptionValue$1 = function getOptionValue(option) {
    return option.value;
  };
  var isOptionDisabled = function isOptionDisabled(option) {
    return !!option.isDisabled;
  };

  var defaultStyles = {
    clearIndicator: clearIndicatorCSS,
    container: containerCSS,
    control: css$1,
    dropdownIndicator: dropdownIndicatorCSS,
    group: groupCSS,
    groupHeading: groupHeadingCSS,
    indicatorsContainer: indicatorsContainerCSS,
    indicatorSeparator: indicatorSeparatorCSS,
    input: inputCSS,
    loadingIndicator: loadingIndicatorCSS,
    loadingMessage: loadingMessageCSS,
    menu: menuCSS,
    menuList: menuListCSS,
    menuPortal: menuPortalCSS,
    multiValue: multiValueCSS,
    multiValueLabel: multiValueLabelCSS,
    multiValueRemove: multiValueRemoveCSS,
    noOptionsMessage: noOptionsMessageCSS,
    option: optionCSS,
    placeholder: placeholderCSS,
    singleValue: css,
    valueContainer: valueContainerCSS
  };

  var colors = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)'
  };
  var borderRadius = 4;
  // Used to calculate consistent margin/padding on elements
  var baseUnit = 4;
  // The minimum height of the control
  var controlHeight = 38;
  // The amount of space between the control and menu */
  var menuGutter = baseUnit * 2;
  var spacing = {
    baseUnit: baseUnit,
    controlHeight: controlHeight,
    menuGutter: menuGutter
  };
  var defaultTheme = {
    borderRadius: borderRadius,
    colors: colors,
    spacing: spacing
  };

  var defaultProps = {
    'aria-live': 'polite',
    backspaceRemovesValue: true,
    blurInputOnSelect: isTouchCapable(),
    captureMenuScroll: !isTouchCapable(),
    classNames: {},
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: createFilter(),
    formatGroupLabel: formatGroupLabel,
    getOptionLabel: getOptionLabel$1,
    getOptionValue: getOptionValue$1,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled: isOptionDisabled,
    loadingMessage: function loadingMessage() {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !isMobileDevice(),
    noOptionsMessage: function noOptionsMessage() {
      return 'No options';
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function screenReaderStatus(_ref) {
      var count = _ref.count;
      return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: true,
    unstyled: false
  };
  function toCategorizedOption(props, option, selectValue, index) {
    var isDisabled = _isOptionDisabled(props, option, selectValue);
    var isSelected = _isOptionSelected(props, option, selectValue);
    var label = getOptionLabel(props, option);
    var value = getOptionValue(props, option);
    return {
      type: 'option',
      data: option,
      isDisabled: isDisabled,
      isSelected: isSelected,
      label: label,
      value: value,
      index: index
    };
  }
  function buildCategorizedOptions(props, selectValue) {
    return props.options.map(function (groupOrOption, groupOrOptionIndex) {
      if ('options' in groupOrOption) {
        var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
          return toCategorizedOption(props, option, selectValue, optionIndex);
        }).filter(function (categorizedOption) {
          return isFocusable(props, categorizedOption);
        });
        return categorizedOptions.length > 0 ? {
          type: 'group',
          data: groupOrOption,
          options: categorizedOptions,
          index: groupOrOptionIndex
        } : undefined;
      }
      var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
      return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
    }).filter(notNullish);
  }
  function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
    return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
      if (categorizedOption.type === 'group') {
        optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
          return option.data;
        })));
      } else {
        optionsAccumulator.push(categorizedOption.data);
      }
      return optionsAccumulator;
    }, []);
  }
  function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
    return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
      if (categorizedOption.type === 'group') {
        optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
          return {
            data: option.data,
            id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
          };
        })));
      } else {
        optionsAccumulator.push({
          data: categorizedOption.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index)
        });
      }
      return optionsAccumulator;
    }, []);
  }
  function buildFocusableOptions(props, selectValue) {
    return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
  }
  function isFocusable(props, categorizedOption) {
    var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
    var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
    return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
      label: label,
      value: value,
      data: data
    }, inputValue);
  }
  function getNextFocusedValue(state, nextSelectValue) {
    var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }
    return null;
  }
  function getNextFocusedOption(state, options) {
    var lastFocusedOption = state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  }
  var getFocusedOptionId = function getFocusedOptionId(focusableOptionsWithIds, focusedOption) {
    var _focusableOptionsWith;
    var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function (option) {
      return option.data === focusedOption;
    })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
    return focusedOptionId || null;
  };
  var getOptionLabel = function getOptionLabel(props, data) {
    return props.getOptionLabel(data);
  };
  var getOptionValue = function getOptionValue(props, data) {
    return props.getOptionValue(data);
  };
  function _isOptionDisabled(props, option, selectValue) {
    return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
  }
  function _isOptionSelected(props, option, selectValue) {
    if (selectValue.indexOf(option) > -1) return true;
    if (typeof props.isOptionSelected === 'function') {
      return props.isOptionSelected(option, selectValue);
    }
    var candidate = getOptionValue(props, option);
    return selectValue.some(function (i) {
      return getOptionValue(props, i) === candidate;
    });
  }
  function _filterOption(props, option, inputValue) {
    return props.filterOption ? props.filterOption(option, inputValue) : true;
  }
  var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
    var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
  };
  var instanceId = 1;
  var Select = /*#__PURE__*/function (_Component) {
    _inherits(Select, _Component);
    var _super = _createSuper(Select);
    // Misc. Instance Properties
    // ------------------------------

    // TODO

    // Refs
    // ------------------------------

    // Lifecycle
    // ------------------------------

    function Select(_props) {
      var _this;
      _classCallCheck(this, Select);
      _this = _super.call(this, _props);
      _this.state = {
        ariaSelection: null,
        focusedOption: null,
        focusedOptionId: null,
        focusableOptionsWithIds: [],
        focusedValue: null,
        inputIsHidden: false,
        isFocused: false,
        selectValue: [],
        clearFocusValueOnUpdate: false,
        prevWasFocused: false,
        inputIsHiddenAfterUpdate: undefined,
        prevProps: undefined,
        instancePrefix: ''
      };
      _this.blockOptionHover = false;
      _this.isComposing = false;
      _this.commonProps = void 0;
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
      _this.openAfterFocus = false;
      _this.scrollToFocusedOptionOnUpdate = false;
      _this.userIsDragging = void 0;
      _this.isAppleDevice = isAppleDevice();
      _this.controlRef = null;
      _this.getControlRef = function (ref) {
        _this.controlRef = ref;
      };
      _this.focusedOptionRef = null;
      _this.getFocusedOptionRef = function (ref) {
        _this.focusedOptionRef = ref;
      };
      _this.menuListRef = null;
      _this.getMenuListRef = function (ref) {
        _this.menuListRef = ref;
      };
      _this.inputRef = null;
      _this.getInputRef = function (ref) {
        _this.inputRef = ref;
      };
      _this.focus = _this.focusInput;
      _this.blur = _this.blurInput;
      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
        actionMeta.name = name;
        _this.ariaOnChange(newValue, actionMeta);
        onChange(newValue, actionMeta);
      };
      _this.setValue = function (newValue, action, option) {
        var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti,
          inputValue = _this$props2.inputValue;
        _this.onInputChange('', {
          action: 'set-value',
          prevInputValue: inputValue
        });
        if (closeMenuOnSelect) {
          _this.setState({
            inputIsHiddenAfterUpdate: !isMulti
          });
          _this.onMenuClose();
        }
        // when the select value should change, we should reset focusedValue
        _this.setState({
          clearFocusValueOnUpdate: true
        });
        _this.onChange(newValue, {
          action: action,
          option: option
        });
      };
      _this.selectOption = function (newValue) {
        var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
        var selectValue = _this.state.selectValue;
        var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
        var isDisabled = _this.isOptionDisabled(newValue, selectValue);
        if (deselected) {
          var candidate = _this.getOptionValue(newValue);
          _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          })), 'deselect-option', newValue);
        } else if (!isDisabled) {
          // Select option if option is not disabled
          if (isMulti) {
            _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
          } else {
            _this.setValue(singleValueAsValue(newValue), 'select-option');
          }
        } else {
          _this.ariaOnChange(singleValueAsValue(newValue), {
            action: 'select-option',
            option: newValue,
            name: name
          });
          return;
        }
        if (blurInputOnSelect) {
          _this.blurInput();
        }
      };
      _this.removeValue = function (removedValue) {
        var isMulti = _this.props.isMulti;
        var selectValue = _this.state.selectValue;
        var candidate = _this.getOptionValue(removedValue);
        var newValueArray = selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        });
        var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
        _this.onChange(newValue, {
          action: 'remove-value',
          removedValue: removedValue
        });
        _this.focusInput();
      };
      _this.clearValue = function () {
        var selectValue = _this.state.selectValue;
        _this.onChange(valueTernary(_this.props.isMulti, [], null), {
          action: 'clear',
          removedValues: selectValue
        });
      };
      _this.popValue = function () {
        var isMulti = _this.props.isMulti;
        var selectValue = _this.state.selectValue;
        var lastSelectedValue = selectValue[selectValue.length - 1];
        var newValueArray = selectValue.slice(0, selectValue.length - 1);
        var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
        if (lastSelectedValue) {
          _this.onChange(newValue, {
            action: 'pop-value',
            removedValue: lastSelectedValue
          });
        }
      };
      _this.getFocusedOptionId = function (focusedOption) {
        return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
      };
      _this.getFocusableOptionsWithIds = function () {
        return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId('option'));
      };
      _this.getValue = function () {
        return _this.state.selectValue;
      };
      _this.cx = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
      };
      _this.getOptionLabel = function (data) {
        return getOptionLabel(_this.props, data);
      };
      _this.getOptionValue = function (data) {
        return getOptionValue(_this.props, data);
      };
      _this.getStyles = function (key, props) {
        var unstyled = _this.props.unstyled;
        var base = defaultStyles[key](props, unstyled);
        base.boxSizing = 'border-box';
        var custom = _this.props.styles[key];
        return custom ? custom(base, props) : base;
      };
      _this.getClassNames = function (key, props) {
        var _this$props$className, _this$props$className2;
        return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
      };
      _this.getElementId = function (element) {
        return "".concat(_this.state.instancePrefix, "-").concat(element);
      };
      _this.getComponents = function () {
        return defaultComponents(_this.props);
      };
      _this.buildCategorizedOptions = function () {
        return buildCategorizedOptions(_this.props, _this.state.selectValue);
      };
      _this.getCategorizedOptions = function () {
        return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
      };
      _this.buildFocusableOptions = function () {
        return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
      };
      _this.getFocusableOptions = function () {
        return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
      };
      _this.ariaOnChange = function (value, actionMeta) {
        _this.setState({
          ariaSelection: _objectSpread2({
            value: value
          }, actionMeta)
        });
      };
      _this.onMenuMouseDown = function (event) {
        if (event.button !== 0) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        _this.focusInput();
      };
      _this.onMenuMouseMove = function (event) {
        _this.blockOptionHover = false;
      };
      _this.onControlMouseDown = function (event) {
        // Event captured by dropdown indicator
        if (event.defaultPrevented) {
          return;
        }
        var openMenuOnClick = _this.props.openMenuOnClick;
        if (!_this.state.isFocused) {
          if (openMenuOnClick) {
            _this.openAfterFocus = true;
          }
          _this.focusInput();
        } else if (!_this.props.menuIsOpen) {
          if (openMenuOnClick) {
            _this.openMenu('first');
          }
        } else {
          if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            _this.onMenuClose();
          }
        }
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          event.preventDefault();
        }
      };
      _this.onDropdownIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }
        if (_this.props.isDisabled) return;
        var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;
        _this.focusInput();
        if (menuIsOpen) {
          _this.setState({
            inputIsHiddenAfterUpdate: !isMulti
          });
          _this.onMenuClose();
        } else {
          _this.openMenu('first');
        }
        event.preventDefault();
      };
      _this.onClearIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }
        _this.clearValue();
        event.preventDefault();
        _this.openAfterFocus = false;
        if (event.type === 'touchend') {
          _this.focusInput();
        } else {
          setTimeout(function () {
            return _this.focusInput();
          });
        }
      };
      _this.onScroll = function (event) {
        if (typeof _this.props.closeMenuOnScroll === 'boolean') {
          if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
            _this.props.onMenuClose();
          }
        } else if (typeof _this.props.closeMenuOnScroll === 'function') {
          if (_this.props.closeMenuOnScroll(event)) {
            _this.props.onMenuClose();
          }
        }
      };
      _this.onCompositionStart = function () {
        _this.isComposing = true;
      };
      _this.onCompositionEnd = function () {
        _this.isComposing = false;
      };
      _this.onTouchStart = function (_ref2) {
        var touches = _ref2.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        _this.initialTouchX = touch.clientX;
        _this.initialTouchY = touch.clientY;
        _this.userIsDragging = false;
      };
      _this.onTouchMove = function (_ref3) {
        var touches = _ref3.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
        var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
        var moveThreshold = 5;
        _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
      };
      _this.onTouchEnd = function (event) {
        if (_this.userIsDragging) return;

        // close the menu if the user taps outside
        // we're checking on event.target here instead of event.currentTarget, because we want to assert information
        // on events on child elements, not the document (which we've attached this handler to).
        if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
          _this.blurInput();
        }

        // reset move vars
        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
      };
      _this.onControlTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onControlMouseDown(event);
      };
      _this.onClearIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onClearIndicatorMouseDown(event);
      };
      _this.onDropdownIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onDropdownIndicatorMouseDown(event);
      };
      _this.handleInputChange = function (event) {
        var prevInputValue = _this.props.inputValue;
        var inputValue = event.currentTarget.value;
        _this.setState({
          inputIsHiddenAfterUpdate: false
        });
        _this.onInputChange(inputValue, {
          action: 'input-change',
          prevInputValue: prevInputValue
        });
        if (!_this.props.menuIsOpen) {
          _this.onMenuOpen();
        }
      };
      _this.onInputFocus = function (event) {
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
        _this.setState({
          inputIsHiddenAfterUpdate: false,
          isFocused: true
        });
        if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
          _this.openMenu('first');
        }
        _this.openAfterFocus = false;
      };
      _this.onInputBlur = function (event) {
        var prevInputValue = _this.props.inputValue;
        if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
          _this.inputRef.focus();
          return;
        }
        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
        _this.onInputChange('', {
          action: 'input-blur',
          prevInputValue: prevInputValue
        });
        _this.onMenuClose();
        _this.setState({
          focusedValue: null,
          isFocused: false
        });
      };
      _this.onOptionHover = function (focusedOption) {
        if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
          return;
        }
        var options = _this.getFocusableOptions();
        var focusedOptionIndex = options.indexOf(focusedOption);
        _this.setState({
          focusedOption: focusedOption,
          focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
        });
      };
      _this.shouldHideSelectedOptions = function () {
        return shouldHideSelectedOptions(_this.props);
      };
      _this.onValueInputFocus = function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.focus();
      };
      _this.onKeyDown = function (event) {
        var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
        var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
        if (isDisabled) return;
        if (typeof onKeyDown === 'function') {
          onKeyDown(event);
          if (event.defaultPrevented) {
            return;
          }
        }

        // Block option hover events when the user has just pressed a key
        _this.blockOptionHover = true;
        switch (event.key) {
          case 'ArrowLeft':
            if (!isMulti || inputValue) return;
            _this.focusValue('previous');
            break;
          case 'ArrowRight':
            if (!isMulti || inputValue) return;
            _this.focusValue('next');
            break;
          case 'Delete':
          case 'Backspace':
            if (inputValue) return;
            if (focusedValue) {
              _this.removeValue(focusedValue);
            } else {
              if (!backspaceRemovesValue) return;
              if (isMulti) {
                _this.popValue();
              } else if (isClearable) {
                _this.clearValue();
              }
            }
            break;
          case 'Tab':
            if (_this.isComposing) return;
            if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
            // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
              return;
            }
            _this.selectOption(focusedOption);
            break;
          case 'Enter':
            if (event.keyCode === 229) {
              // ignore the keydown event from an Input Method Editor(IME)
              // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
              break;
            }
            if (menuIsOpen) {
              if (!focusedOption) return;
              if (_this.isComposing) return;
              _this.selectOption(focusedOption);
              break;
            }
            return;
          case 'Escape':
            if (menuIsOpen) {
              _this.setState({
                inputIsHiddenAfterUpdate: false
              });
              _this.onInputChange('', {
                action: 'menu-close',
                prevInputValue: inputValue
              });
              _this.onMenuClose();
            } else if (isClearable && escapeClearsValue) {
              _this.clearValue();
            }
            break;
          case ' ':
            // space
            if (inputValue) {
              return;
            }
            if (!menuIsOpen) {
              _this.openMenu('first');
              break;
            }
            if (!focusedOption) return;
            _this.selectOption(focusedOption);
            break;
          case 'ArrowUp':
            if (menuIsOpen) {
              _this.focusOption('up');
            } else {
              _this.openMenu('last');
            }
            break;
          case 'ArrowDown':
            if (menuIsOpen) {
              _this.focusOption('down');
            } else {
              _this.openMenu('first');
            }
            break;
          case 'PageUp':
            if (!menuIsOpen) return;
            _this.focusOption('pageup');
            break;
          case 'PageDown':
            if (!menuIsOpen) return;
            _this.focusOption('pagedown');
            break;
          case 'Home':
            if (!menuIsOpen) return;
            _this.focusOption('first');
            break;
          case 'End':
            if (!menuIsOpen) return;
            _this.focusOption('last');
            break;
          default:
            return;
        }
        event.preventDefault();
      };
      _this.state.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
      _this.state.selectValue = cleanValue(_props.value);
      // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
      if (_props.menuIsOpen && _this.state.selectValue.length) {
        var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
        var focusableOptions = _this.buildFocusableOptions();
        var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
        _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
        _this.state.focusedOption = focusableOptions[optionIndex];
        _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
      }
      return _this;
    }
    _createClass(Select, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.startListeningComposition();
        this.startListeningToTouch();
        if (this.props.closeMenuOnScroll && document && document.addEventListener) {
          // Listen to all scroll events, and filter them out inside of 'onScroll'
          document.addEventListener('scroll', this.onScroll, true);
        }
        if (this.props.autoFocus) {
          this.focusInput();
        }

        // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
        if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
        var isFocused = this.state.isFocused;
        if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled ||
        // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen) {
          this.focusInput();
        }
        if (isFocused && isDisabled && !prevProps.isDisabled) {
          // ensure select state gets blurred in case Select is programmatically disabled while focused
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isFocused: false
          }, this.onMenuClose);
        } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
          // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isFocused: true
          });
        }

        // scroll the focused option into view if necessary
        if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
          this.scrollToFocusedOptionOnUpdate = false;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.stopListeningComposition();
        this.stopListeningToTouch();
        document.removeEventListener('scroll', this.onScroll, true);
      }

      // ==============================
      // Consumer Handlers
      // ==============================
    }, {
      key: "onMenuOpen",
      value: function onMenuOpen() {
        this.props.onMenuOpen();
      }
    }, {
      key: "onMenuClose",
      value: function onMenuClose() {
        this.onInputChange('', {
          action: 'menu-close',
          prevInputValue: this.props.inputValue
        });
        this.props.onMenuClose();
      }
    }, {
      key: "onInputChange",
      value: function onInputChange(newValue, actionMeta) {
        this.props.onInputChange(newValue, actionMeta);
      }

      // ==============================
      // Methods
      // ==============================
    }, {
      key: "focusInput",
      value: function focusInput() {
        if (!this.inputRef) return;
        this.inputRef.focus();
      }
    }, {
      key: "blurInput",
      value: function blurInput() {
        if (!this.inputRef) return;
        this.inputRef.blur();
      }

      // aliased for consumers
    }, {
      key: "openMenu",
      value: function openMenu(focusOption) {
        var _this2 = this;
        var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
        var focusableOptions = this.buildFocusableOptions();
        var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
        if (!this.props.isMulti) {
          var selectedIndex = focusableOptions.indexOf(selectValue[0]);
          if (selectedIndex > -1) {
            openAtIndex = selectedIndex;
          }
        }

        // only scroll if the menu isn't already open
        this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
        this.setState({
          inputIsHiddenAfterUpdate: false,
          focusedValue: null,
          focusedOption: focusableOptions[openAtIndex],
          focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
        }, function () {
          return _this2.onMenuOpen();
        });
      }
    }, {
      key: "focusValue",
      value: function focusValue(direction) {
        var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue;

        // Only multiselects support value focusing
        if (!this.props.isMulti) return;
        this.setState({
          focusedOption: null
        });
        var focusedIndex = selectValue.indexOf(focusedValue);
        if (!focusedValue) {
          focusedIndex = -1;
        }
        var lastIndex = selectValue.length - 1;
        var nextFocus = -1;
        if (!selectValue.length) return;
        switch (direction) {
          case 'previous':
            if (focusedIndex === 0) {
              // don't cycle from the start to the end
              nextFocus = 0;
            } else if (focusedIndex === -1) {
              // if nothing is focused, focus the last value first
              nextFocus = lastIndex;
            } else {
              nextFocus = focusedIndex - 1;
            }
            break;
          case 'next':
            if (focusedIndex > -1 && focusedIndex < lastIndex) {
              nextFocus = focusedIndex + 1;
            }
            break;
        }
        this.setState({
          inputIsHidden: nextFocus !== -1,
          focusedValue: selectValue[nextFocus]
        });
      }
    }, {
      key: "focusOption",
      value: function focusOption() {
        var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
        var pageSize = this.props.pageSize;
        var focusedOption = this.state.focusedOption;
        var options = this.getFocusableOptions();
        if (!options.length) return;
        var nextFocus = 0; // handles 'first'
        var focusedIndex = options.indexOf(focusedOption);
        if (!focusedOption) {
          focusedIndex = -1;
        }
        if (direction === 'up') {
          nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
        } else if (direction === 'down') {
          nextFocus = (focusedIndex + 1) % options.length;
        } else if (direction === 'pageup') {
          nextFocus = focusedIndex - pageSize;
          if (nextFocus < 0) nextFocus = 0;
        } else if (direction === 'pagedown') {
          nextFocus = focusedIndex + pageSize;
          if (nextFocus > options.length - 1) nextFocus = options.length - 1;
        } else if (direction === 'last') {
          nextFocus = options.length - 1;
        }
        this.scrollToFocusedOptionOnUpdate = true;
        this.setState({
          focusedOption: options[nextFocus],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(options[nextFocus])
        });
      }
    }, {
      key: "getTheme",
      value:
      // ==============================
      // Getters
      // ==============================

      function getTheme() {
        // Use the default theme if there are no customisations.
        if (!this.props.theme) {
          return defaultTheme;
        }
        // If the theme prop is a function, assume the function
        // knows how to merge the passed-in default theme with
        // its own modifications.
        if (typeof this.props.theme === 'function') {
          return this.props.theme(defaultTheme);
        }
        // Otherwise, if a plain theme object was passed in,
        // overlay it with the default theme.
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    }, {
      key: "getCommonProps",
      value: function getCommonProps() {
        var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getClassNames = this.getClassNames,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
        var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
        var hasValue = this.hasValue();
        return {
          clearValue: clearValue,
          cx: cx,
          getStyles: getStyles,
          getClassNames: getClassNames,
          getValue: getValue,
          hasValue: hasValue,
          isMulti: isMulti,
          isRtl: isRtl,
          options: options,
          selectOption: selectOption,
          selectProps: props,
          setValue: setValue,
          theme: this.getTheme()
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        var selectValue = this.state.selectValue;
        return selectValue.length > 0;
      }
    }, {
      key: "hasOptions",
      value: function hasOptions() {
        return !!this.getFocusableOptions().length;
      }
    }, {
      key: "isClearable",
      value: function isClearable() {
        var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti;

        // single select, by default, IS NOT clearable
        // multi select, by default, IS clearable
        if (isClearable === undefined) return isMulti;
        return isClearable;
      }
    }, {
      key: "isOptionDisabled",
      value: function isOptionDisabled(option, selectValue) {
        return _isOptionDisabled(this.props, option, selectValue);
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(option, selectValue) {
        return _isOptionSelected(this.props, option, selectValue);
      }
    }, {
      key: "filterOption",
      value: function filterOption(option, inputValue) {
        return _filterOption(this.props, option, inputValue);
      }
    }, {
      key: "formatOptionLabel",
      value: function formatOptionLabel(data, context) {
        if (typeof this.props.formatOptionLabel === 'function') {
          var _inputValue = this.props.inputValue;
          var _selectValue = this.state.selectValue;
          return this.props.formatOptionLabel(data, {
            context: context,
            inputValue: _inputValue,
            selectValue: _selectValue
          });
        } else {
          return this.getOptionLabel(data);
        }
      }
    }, {
      key: "formatGroupLabel",
      value: function formatGroupLabel(data) {
        return this.props.formatGroupLabel(data);
      }

      // ==============================
      // Mouse Handlers
      // ==============================
    }, {
      key: "startListeningComposition",
      value:
      // ==============================
      // Composition Handlers
      // ==============================

      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener('compositionstart', this.onCompositionStart, false);
          document.addEventListener('compositionend', this.onCompositionEnd, false);
        }
      }
    }, {
      key: "stopListeningComposition",
      value: function stopListeningComposition() {
        if (document && document.removeEventListener) {
          document.removeEventListener('compositionstart', this.onCompositionStart);
          document.removeEventListener('compositionend', this.onCompositionEnd);
        }
      }
    }, {
      key: "startListeningToTouch",
      value:
      // ==============================
      // Touch Handlers
      // ==============================

      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener('touchstart', this.onTouchStart, false);
          document.addEventListener('touchmove', this.onTouchMove, false);
          document.addEventListener('touchend', this.onTouchEnd, false);
        }
      }
    }, {
      key: "stopListeningToTouch",
      value: function stopListeningToTouch() {
        if (document && document.removeEventListener) {
          document.removeEventListener('touchstart', this.onTouchStart);
          document.removeEventListener('touchmove', this.onTouchMove);
          document.removeEventListener('touchend', this.onTouchEnd);
        }
      }
    }, {
      key: "renderInput",
      value:
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form,
          menuIsOpen = _this$props8.menuIsOpen,
          required = _this$props8.required;
        var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;
        var _this$state4 = this.state,
          inputIsHidden = _this$state4.inputIsHidden,
          ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId('input');

        // aria attributes makes the JSX "noisy", separated for clarity
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          'aria-autocomplete': 'list',
          'aria-expanded': menuIsOpen,
          'aria-haspopup': true,
          'aria-errormessage': this.props['aria-errormessage'],
          'aria-invalid': this.props['aria-invalid'],
          'aria-label': this.props['aria-label'],
          'aria-labelledby': this.props['aria-labelledby'],
          'aria-required': required,
          role: 'combobox',
          'aria-activedescendant': this.isAppleDevice ? undefined : this.state.focusedOptionId || ''
        }, menuIsOpen && {
          'aria-controls': this.getElementId('listbox')
        }), !isSearchable && {
          'aria-readonly': true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
          'aria-describedby': this.getElementId('live-region')
        } : {
          'aria-describedby': this.getElementId('placeholder')
        });
        if (!isSearchable) {
          // use a dummy input to maintain focus/blur functionality
          return /*#__PURE__*/React__namespace.createElement(DummyInput, _extends({
            id: id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex: tabIndex,
            inputMode: "none",
            form: form,
            value: ""
          }, ariaAttributes));
        }
        return /*#__PURE__*/React__namespace.createElement(Input, _extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: id,
          innerRef: this.getInputRef,
          isDisabled: isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: tabIndex,
          form: form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    }, {
      key: "renderPlaceholderOrValue",
      value: function renderPlaceholderOrValue() {
        var _this3 = this;
        var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;
        var commonProps = this.commonProps;
        var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
        var _this$state5 = this.state,
          selectValue = _this$state5.selectValue,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused;
        if (!this.hasValue() || !controlShouldRenderValue) {
          return inputValue ? null : /*#__PURE__*/React__namespace.createElement(Placeholder, _extends({}, commonProps, {
            key: "placeholder",
            isDisabled: isDisabled,
            isFocused: isFocused,
            innerProps: {
              id: this.getElementId('placeholder')
            }
          }), placeholder);
        }
        if (isMulti) {
          return selectValue.map(function (opt, index) {
            var isOptionFocused = opt === focusedValue;
            var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
            return /*#__PURE__*/React__namespace.createElement(MultiValue, _extends({}, commonProps, {
              components: {
                Container: MultiValueContainer,
                Label: MultiValueLabel,
                Remove: MultiValueRemove
              },
              isFocused: isOptionFocused,
              isDisabled: isDisabled,
              key: key,
              index: index,
              removeProps: {
                onClick: function onClick() {
                  return _this3.removeValue(opt);
                },
                onTouchEnd: function onTouchEnd() {
                  return _this3.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                }
              },
              data: opt
            }), _this3.formatOptionLabel(opt, 'value'));
          });
        }
        if (inputValue) {
          return null;
        }
        var singleValue = selectValue[0];
        return /*#__PURE__*/React__namespace.createElement(SingleValue, _extends({}, commonProps, {
          data: singleValue,
          isDisabled: isDisabled
        }), this.formatOptionLabel(singleValue, 'value'));
      }
    }, {
      key: "renderClearIndicator",
      value: function renderClearIndicator() {
        var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;
        var commonProps = this.commonProps;
        var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
        var isFocused = this.state.isFocused;
        if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
          return null;
        }
        var innerProps = {
          onMouseDown: this.onClearIndicatorMouseDown,
          onTouchEnd: this.onClearIndicatorTouchEnd,
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(ClearIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderLoadingIndicator",
      value: function renderLoadingIndicator() {
        var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;
        var commonProps = this.commonProps;
        var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
        var isFocused = this.state.isFocused;
        if (!LoadingIndicator || !isLoading) return null;
        var innerProps = {
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(LoadingIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderIndicatorSeparator",
      value: function renderIndicatorSeparator() {
        var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

        // separator doesn't make sense without the dropdown indicator
        if (!DropdownIndicator || !IndicatorSeparator) return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        return /*#__PURE__*/React__namespace.createElement(IndicatorSeparator, _extends({}, commonProps, {
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderDropdownIndicator",
      value: function renderDropdownIndicator() {
        var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;
        if (!DropdownIndicator) return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        var innerProps = {
          onMouseDown: this.onDropdownIndicatorMouseDown,
          onTouchEnd: this.onDropdownIndicatorTouchEnd,
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(DropdownIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
        var _this4 = this;
        var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;
        var commonProps = this.commonProps;
        var focusedOption = this.state.focusedOption;
        var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
        if (!menuIsOpen) return null;

        // TODO: Internal Option Type here
        var render = function render(props, id) {
          var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
          var isFocused = focusedOption === data;
          var onHover = isDisabled ? undefined : function () {
            return _this4.onOptionHover(data);
          };
          var onSelect = isDisabled ? undefined : function () {
            return _this4.selectOption(data);
          };
          var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
          var innerProps = {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1,
            role: 'option',
            'aria-selected': _this4.isAppleDevice ? undefined : isSelected // is not supported on Apple devices
          };

          return /*#__PURE__*/React__namespace.createElement(Option, _extends({}, commonProps, {
            innerProps: innerProps,
            data: data,
            isDisabled: isDisabled,
            isSelected: isSelected,
            key: optionId,
            label: label,
            type: type,
            value: value,
            isFocused: isFocused,
            innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
          }), _this4.formatOptionLabel(props.data, 'menu'));
        };
        var menuUI;
        if (this.hasOptions()) {
          menuUI = this.getCategorizedOptions().map(function (item) {
            if (item.type === 'group') {
              var _data = item.data,
                options = item.options,
                groupIndex = item.index;
              var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
              var headingId = "".concat(groupId, "-heading");
              return /*#__PURE__*/React__namespace.createElement(Group, _extends({}, commonProps, {
                key: groupId,
                data: _data,
                options: options,
                Heading: GroupHeading,
                headingProps: {
                  id: headingId,
                  data: item.data
                },
                label: _this4.formatGroupLabel(item.data)
              }), item.options.map(function (option) {
                return render(option, "".concat(groupIndex, "-").concat(option.index));
              }));
            } else if (item.type === 'option') {
              return render(item, "".concat(item.index));
            }
          });
        } else if (isLoading) {
          var message = loadingMessage({
            inputValue: inputValue
          });
          if (message === null) return null;
          menuUI = /*#__PURE__*/React__namespace.createElement(LoadingMessage, commonProps, message);
        } else {
          var _message = noOptionsMessage({
            inputValue: inputValue
          });
          if (_message === null) return null;
          menuUI = /*#__PURE__*/React__namespace.createElement(NoOptionsMessage, commonProps, _message);
        }
        var menuPlacementProps = {
          minMenuHeight: minMenuHeight,
          maxMenuHeight: maxMenuHeight,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition,
          menuShouldScrollIntoView: menuShouldScrollIntoView
        };
        var menuElement = /*#__PURE__*/React__namespace.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
          var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
          return /*#__PURE__*/React__namespace.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
            innerRef: ref,
            innerProps: {
              onMouseDown: _this4.onMenuMouseDown,
              onMouseMove: _this4.onMenuMouseMove
            },
            isLoading: isLoading,
            placement: placement
          }), /*#__PURE__*/React__namespace.createElement(ScrollManager, {
            captureEnabled: captureMenuScroll,
            onTopArrive: onMenuScrollToTop,
            onBottomArrive: onMenuScrollToBottom,
            lockEnabled: menuShouldBlockScroll
          }, function (scrollTargetRef) {
            return /*#__PURE__*/React__namespace.createElement(MenuList, _extends({}, commonProps, {
              innerRef: function innerRef(instance) {
                _this4.getMenuListRef(instance);
                scrollTargetRef(instance);
              },
              innerProps: {
                role: 'listbox',
                'aria-multiselectable': commonProps.isMulti,
                id: _this4.getElementId('listbox')
              },
              isLoading: isLoading,
              maxHeight: maxHeight,
              focusedOption: focusedOption
            }), menuUI);
          }));
        });

        // positioning behaviour is almost identical for portalled and fixed,
        // so we use the same component. the actual portalling logic is forked
        // within the component based on `menuPosition`
        return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/React__namespace.createElement(MenuPortal, _extends({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition
        }), menuElement) : menuElement;
      }
    }, {
      key: "renderFormField",
      value: function renderFormField() {
        var _this5 = this;
        var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name,
          required = _this$props13.required;
        var selectValue = this.state.selectValue;
        if (required && !this.hasValue() && !isDisabled) {
          return /*#__PURE__*/React__namespace.createElement(RequiredInput$1, {
            name: name,
            onFocus: this.onValueInputFocus
          });
        }
        if (!name || isDisabled) return;
        if (isMulti) {
          if (delimiter) {
            var value = selectValue.map(function (opt) {
              return _this5.getOptionValue(opt);
            }).join(delimiter);
            return /*#__PURE__*/React__namespace.createElement("input", {
              name: name,
              type: "hidden",
              value: value
            });
          } else {
            var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
              return /*#__PURE__*/React__namespace.createElement("input", {
                key: "i-".concat(i),
                name: name,
                type: "hidden",
                value: _this5.getOptionValue(opt)
              });
            }) : /*#__PURE__*/React__namespace.createElement("input", {
              name: name,
              type: "hidden",
              value: ""
            });
            return /*#__PURE__*/React__namespace.createElement("div", null, input);
          }
        } else {
          var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
          return /*#__PURE__*/React__namespace.createElement("input", {
            name: name,
            type: "hidden",
            value: _value
          });
        }
      }
    }, {
      key: "renderLiveRegion",
      value: function renderLiveRegion() {
        var commonProps = this.commonProps;
        var _this$state6 = this.state,
          ariaSelection = _this$state6.ariaSelection,
          focusedOption = _this$state6.focusedOption,
          focusedValue = _this$state6.focusedValue,
          isFocused = _this$state6.isFocused,
          selectValue = _this$state6.selectValue;
        var focusableOptions = this.getFocusableOptions();
        return /*#__PURE__*/React__namespace.createElement(LiveRegion$1, _extends({}, commonProps, {
          id: this.getElementId('live-region'),
          ariaSelection: ariaSelection,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          isFocused: isFocused,
          selectValue: selectValue,
          focusableOptions: focusableOptions,
          isAppleDevice: this.isAppleDevice
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;
        var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
        var isFocused = this.state.isFocused;
        var commonProps = this.commonProps = this.getCommonProps();
        return /*#__PURE__*/React__namespace.createElement(SelectContainer, _extends({}, commonProps, {
          className: className,
          innerProps: {
            id: id,
            onKeyDown: this.onKeyDown
          },
          isDisabled: isDisabled,
          isFocused: isFocused
        }), this.renderLiveRegion(), /*#__PURE__*/React__namespace.createElement(Control, _extends({}, commonProps, {
          innerRef: this.getControlRef,
          innerProps: {
            onMouseDown: this.onControlMouseDown,
            onTouchEnd: this.onControlTouchEnd
          },
          isDisabled: isDisabled,
          isFocused: isFocused,
          menuIsOpen: menuIsOpen
        }), /*#__PURE__*/React__namespace.createElement(ValueContainer, _extends({}, commonProps, {
          isDisabled: isDisabled
        }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/React__namespace.createElement(IndicatorsContainer, _extends({}, commonProps, {
          isDisabled: isDisabled
        }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
          ariaSelection = state.ariaSelection,
          isFocused = state.isFocused,
          prevWasFocused = state.prevWasFocused,
          instancePrefix = state.instancePrefix;
        var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue,
          isMulti = props.isMulti;
        var selectValue = cleanValue(value);
        var newMenuOptionsState = {};
        if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
          var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
          var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
          var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
          var focusedOption = getNextFocusedOption(state, focusableOptions);
          var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
          newMenuOptionsState = {
            selectValue: selectValue,
            focusedOption: focusedOption,
            focusedOptionId: focusedOptionId,
            focusableOptionsWithIds: focusableOptionsWithIds,
            focusedValue: focusedValue,
            clearFocusValueOnUpdate: false
          };
        }
        // some updates should toggle the state of the input visibility
        var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
          inputIsHidden: inputIsHiddenAfterUpdate,
          inputIsHiddenAfterUpdate: undefined
        } : {};
        var newAriaSelection = ariaSelection;
        var hasKeptFocus = isFocused && prevWasFocused;
        if (isFocused && !hasKeptFocus) {
          // If `value` or `defaultValue` props are not empty then announce them
          // when the Select is initially focused
          newAriaSelection = {
            value: valueTernary(isMulti, selectValue, selectValue[0] || null),
            options: selectValue,
            action: 'initial-input-focus'
          };
          hasKeptFocus = !prevWasFocused;
        }

        // If the 'initial-input-focus' action has been set already
        // then reset the ariaSelection to null
        if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
          newAriaSelection = null;
        }
        return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
          prevProps: props,
          ariaSelection: newAriaSelection,
          prevWasFocused: hasKeptFocus
        });
      }
    }]);
    return Select;
  }(React.Component);
  Select.defaultProps = defaultProps;

  var StateManagedSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var baseSelectProps = useStateManager(props);
    return /*#__PURE__*/React__namespace.createElement(Select, _extends({
      ref: ref
    }, baseSelectProps));
  });
  var StateManagedSelect$1 = StateManagedSelect;

  const DepartmentMultiSelect = props => {
    const {
      record,
      onChange,
      property
    } = props;
    const [options, setOptions] = React.useState([]);
    const selectedValues = record.params[property.name] || [];
    React.useEffect(() => {
      const fetchDepartments = async () => {
        const res = await fetch('/admin/api/resources/แผนก/actions/list');
        const json = await res.json();
        const values = json.records.map(r => ({
          label: r.params.name,
          value: parseInt(r.params.dept_id)
        }));
        setOptions(values);
      };
      fetchDepartments();
    }, []);
    const handleChange = selected => {
      const values = selected.map(option => option.value);
      onChange(property.name, values);
    };
    const handleSelectAll = () => {
      onChange(property.name, options.map(opt => opt.value));
    };
    return /*#__PURE__*/React__namespace.default.createElement("div", null, /*#__PURE__*/React__namespace.default.createElement("button", {
      type: "button",
      onClick: handleSelectAll,
      style: {
        marginBottom: '5px'
      }
    }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), /*#__PURE__*/React__namespace.default.createElement(StateManagedSelect$1, {
      isMulti: true,
      options: options,
      value: options.filter(opt => selectedValues?.includes(opt.value)),
      onChange: handleChange
    }));
  };

  const SwitchViewQuestionAction = () => {
    const navigate = reactRouterDom.useNavigate();
    const handleRedirect = () => {
      navigate('/admin/pages/grouped-questions');
    };
    return /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      variant: "grey"
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.H2, null, "Grouped Questions View"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Button, {
      variant: "primary",
      mt: "lg",
      onClick: handleRedirect
    }, "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32 Grouped Questions"));
  };

  const SITES = ['HQ', 'SK', 'ST'];
  const api = new adminjs.ApiClient();
  const TopicConfig = () => {
    const [topics, setTopics] = React.useState([]);
    const [departments, setDepartments] = React.useState([]);
    const [selectedTopic, setSelectedTopic] = React.useState('');
    const [siteConfigs, setSiteConfigs] = React.useState({});
    React.useEffect(() => {
      // โหลด topic codes และ departments ผ่าน handler
      api.getPage({
        pageName: 'topic-config'
      }).then(({
        data
      }) => {
        setTopics(data.topicCodes || []);
        setDepartments(data.departments || []);
      }).catch(console.error);
    }, []);
    React.useEffect(() => {
      // reset เมื่อเปลี่ยน topic
      const defaultConfigs = {};
      SITES.forEach(site => {
        defaultConfigs[site] = {
          type: 'All',
          time_limit: 60,
          dept_ids: [] // เฉพาะกรณี Partial
        };
      });
      setSiteConfigs(defaultConfigs);
    }, [selectedTopic]);
    const handleChange = (site, field, value) => {
      setSiteConfigs(prev => ({
        ...prev,
        [site]: {
          ...prev[site],
          [field]: value
        }
      }));
    };
    const handleSubmit = async () => {
      try {
        await api.callPage({
          pageName: 'topic-config',
          method: 'post',
          data: {
            topic_code: selectedTopic,
            config: siteConfigs
          }
        });
        alert('Configuration saved successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to save configuration.');
      }
    };
    const getDepartmentsBySite = site => {
      return departments.filter(dep => dep.site === site);
    };
    return /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      variant: "grey",
      p: "xl"
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.H2, {
      mb: "xl"
    }, "Configure Topic by Site"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.Label, null, "Select Topic Code:"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Select, {
      options: topics.map(t => ({
        value: t,
        label: t
      })),
      value: selectedTopic ? {
        value: selectedTopic,
        label: selectedTopic
      } : null,
      onChange: selected => setSelectedTopic(selected?.value || ''),
      isClearable: true
    })), selectedTopic && SITES.map(site => /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      key: site,
      variant: "white",
      p: "xl",
      mb: "xl",
      border: true
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.H3, {
      mb: "lg"
    }, site), /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      mb: "lg"
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.Label, null, "Type:"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Select, {
      options: [{
        value: 'All',
        label: 'All'
      }, {
        value: 'Partial',
        label: 'Partial'
      }],
      value: {
        value: siteConfigs[site]?.type,
        label: siteConfigs[site]?.type
      },
      onChange: selected => handleChange(site, 'type', selected.value)
    })), siteConfigs[site]?.type === 'Partial' && /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, {
      mb: "lg"
    }, /*#__PURE__*/React__namespace.default.createElement(designSystem.Label, null, "Departments:"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Select, {
      isMulti: true,
      closeMenuOnSelect: false,
      options: [{
        value: '__ALL__',
        label: '📌 Select All'
      }, ...getDepartmentsBySite(site).map(dep => ({
        value: dep.dept_id,
        label: dep.dept_name
      }))],
      value: [...siteConfigs[site].dept_ids.map(id => {
        const dep = departments.find(d => d.dept_id === id);
        return dep ? {
          value: dep.dept_id,
          label: dep.dept_name
        } : null;
      }).filter(Boolean)],
      onChange: selectedOptions => {
        const selectedIds = selectedOptions.filter(opt => opt.value !== '__ALL__').map(opt => opt.value);
        const allDepIds = getDepartmentsBySite(site).map(dep => dep.dept_id);
        const isAllSelected = allDepIds.every(id => selectedIds.includes(id));
        const clickedSelectAll = selectedOptions.some(opt => opt.value === '__ALL__');
        if (clickedSelectAll) {
          if (isAllSelected) {
            // ถ้าเลือกครบทุกอันแล้ว และคลิก Select All อีก = ยกเลิกทั้งหมด
            handleChange(site, 'dept_ids', []);
          } else {
            // เลือกทั้งหมด
            handleChange(site, 'dept_ids', allDepIds);
          }
        } else {
          // เลือกแบบปกติ
          handleChange(site, 'dept_ids', selectedIds);
        }
      }
    })), /*#__PURE__*/React__namespace.default.createElement(designSystem.Box, null, /*#__PURE__*/React__namespace.default.createElement(designSystem.Label, null, "Time Limit (minutes):"), /*#__PURE__*/React__namespace.default.createElement(designSystem.Input, {
      type: "number",
      value: siteConfigs[site]?.time_limit,
      onChange: e => handleChange(site, 'time_limit', parseInt(e.target.value) || 0)
    })))), /*#__PURE__*/React__namespace.default.createElement(designSystem.Button, {
      variant: "primary",
      size: "lg",
      onClick: handleSubmit
    }, "Save Configuration"));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.GroupedQuestionsPage = GroupedQuestionsPage;
  AdminJS.UserComponents.DepartmentMultiSelect = DepartmentMultiSelect;
  AdminJS.UserComponents.SwitchViewQuestionAction = SwitchViewQuestionAction;
  AdminJS.UserComponents.TopicConfig = TopicConfig;

})(React, AdminJS, AdminJSDesignSystem, ReactDOM, ReactRouterDOM);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL0dyb3VwZWRRdWVzdGlvbnNQYWdlLmpzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC91c2VTdGF0ZU1hbmFnZXItN2UxZTg0ODkuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvRW51bS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1V0aWxpdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9Ub2tlbml6ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QYXJzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9TZXJpYWxpemVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvTWlkZGxld2FyZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9lbW90aW9uLWhhc2guZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvZW1vdGlvbi11bml0bGVzcy5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3QvZW1vdGlvbi1zZXJpYWxpemUuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzL2Rpc3QvZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tZWxlbWVudC1mMGRlOTY4ZS5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS91dGlscy9kaXN0L2Zsb2F0aW5nLXVpLnV0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5kb20ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9kb20vZGlzdC9mbG9hdGluZy11aS5kb20ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QvZGlzdC91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0LmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L2luZGV4LTY0MWVlNWI4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9TZWxlY3QtYWFiMDI3ZjMuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5lc20uanMiLCIuLi9jb21wb25lbnRzL0RlcGFydG1lbnRNdWx0aVNlbGVjdC5qc3giLCIuLi9jb21wb25lbnRzL1N3aXRjaFZpZXdRdWVzdGlvbkFjdGlvbi5qc3giLCIuLi9jb21wb25lbnRzL1RvcGljQ29uZmlnLmpzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IEJveCwgSDIsIFRhYmxlLCBUYWJsZVJvdywgVGFibGVDZWxsLCBMaW5rIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgR3JvdXBlZFF1ZXN0aW9uc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCEnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRQYWdlKHsgcGFnZU5hbWU6ICdncm91cGVkLXF1ZXN0aW9ucycgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygn4pyFIHJlczonLCByZXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KchSByZXMuZGF0YTonLCByZXMuZGF0YSlcclxuICBcclxuICAgICAgICBjb25zdCBuZXN0ZWQgPSByZXM/LmRhdGFcclxuICBcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXN0ZWQpKSB7XHJcbiAgICAgICAgICBzZXREYXRhKG5lc3RlZClcclxuICAgICAgICB9IGVsc2UgaWYgKG5lc3RlZD8uZGF0YSAmJiBBcnJheS5pc0FycmF5KG5lc3RlZC5kYXRhKSkge1xyXG4gICAgICAgICAgc2V0RGF0YShuZXN0ZWQuZGF0YSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdVbmV4cGVjdGVkIHNoYXBlOicsIG5lc3RlZClcclxuICAgICAgICAgIHNldERhdGEoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfwn5SlIEFQSSBmZXRjaCBlcnJvcjonLCBlcnIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCI+XHJcbiAgICAgIDxIMj5Hcm91cGVkIFF1ZXN0aW9ucyBieSBUb3BpYzwvSDI+XHJcbiAgICAgIDxUYWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+PHN0cm9uZz5Ub3BpYyBDb2RlPC9zdHJvbmc+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+PHN0cm9uZz5Ub3RhbCBRdWVzdGlvbnM8L3N0cm9uZz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKHsgdG9waWNfY29kZSwgdG90YWwgfSkgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXt0b3BpY19jb2RlfT5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hZG1pbi9yZXNvdXJjZXMv4LiC4LmJ4Lit4Liq4Lit4LiaP2ZpbHRlcnMudG9waWNfY29kZT0ke3RvcGljX2NvZGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b3BpY19jb2RlfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3RvdGFsfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZFF1ZXN0aW9uc1BhZ2VcclxuXHJcbiIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5leHBvcnQgeyB0b1ByaW1pdGl2ZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufVxuZXhwb3J0IHsgdG9Qcm9wZXJ0eUtleSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCIuL2RlZmluZVByb3BlcnR5LmpzXCI7XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5leHBvcnQgeyBfb2JqZWN0U3ByZWFkMiBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgaWYgKHIpIHtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBhcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5leHBvcnQgeyBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVSZXN0IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5leHBvcnQgeyBfc2xpY2VkVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UociwgZSkge1xuICBpZiAobnVsbCA9PSByKSByZXR1cm4ge307XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIG4gaW4gcikgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwociwgbikpIHtcbiAgICBpZiAoLTEgIT09IGUuaW5kZXhPZihuKSkgY29udGludWU7XG4gICAgdFtuXSA9IHJbbl07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5leHBvcnQgeyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGUsIHQpIHtcbiAgaWYgKG51bGwgPT0gZSkgcmV0dXJuIHt9O1xuICB2YXIgbyxcbiAgICByLFxuICAgIGkgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGUsIHQpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBuID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICBmb3IgKHIgPSAwOyByIDwgbi5sZW5ndGg7IHIrKykgbyA9IG5bcl0sIC0xID09PSB0LmluZGV4T2YobykgJiYge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLCBvKSAmJiAoaVtvXSA9IGVbb10pO1xuICB9XG4gIHJldHVybiBpO1xufVxuZXhwb3J0IHsgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyJztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiZGVmYXVsdElucHV0VmFsdWVcIiwgXCJkZWZhdWx0TWVudUlzT3BlblwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImlucHV0VmFsdWVcIiwgXCJtZW51SXNPcGVuXCIsIFwib25DaGFuZ2VcIiwgXCJvbklucHV0Q2hhbmdlXCIsIFwib25NZW51Q2xvc2VcIiwgXCJvbk1lbnVPcGVuXCIsIFwidmFsdWVcIl07XG5mdW5jdGlvbiB1c2VTdGF0ZU1hbmFnZXIoX3JlZikge1xuICB2YXIgX3JlZiRkZWZhdWx0SW5wdXRWYWx1ID0gX3JlZi5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICBkZWZhdWx0SW5wdXRWYWx1ZSA9IF9yZWYkZGVmYXVsdElucHV0VmFsdSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJGRlZmF1bHRJbnB1dFZhbHUsXG4gICAgX3JlZiRkZWZhdWx0TWVudUlzT3BlID0gX3JlZi5kZWZhdWx0TWVudUlzT3BlbixcbiAgICBkZWZhdWx0TWVudUlzT3BlbiA9IF9yZWYkZGVmYXVsdE1lbnVJc09wZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlZmF1bHRNZW51SXNPcGUsXG4gICAgX3JlZiRkZWZhdWx0VmFsdWUgPSBfcmVmLmRlZmF1bHRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWUgPSBfcmVmJGRlZmF1bHRWYWx1ZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGVmYXVsdFZhbHVlLFxuICAgIHByb3BzSW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcbiAgICBwcm9wc01lbnVJc09wZW4gPSBfcmVmLm1lbnVJc09wZW4sXG4gICAgcHJvcHNPbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgcHJvcHNPbklucHV0Q2hhbmdlID0gX3JlZi5vbklucHV0Q2hhbmdlLFxuICAgIHByb3BzT25NZW51Q2xvc2UgPSBfcmVmLm9uTWVudUNsb3NlLFxuICAgIHByb3BzT25NZW51T3BlbiA9IF9yZWYub25NZW51T3BlbixcbiAgICBwcm9wc1ZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICByZXN0U2VsZWN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHByb3BzSW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNJbnB1dFZhbHVlIDogZGVmYXVsdElucHV0VmFsdWUpLFxuICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgIHN0YXRlSW5wdXRWYWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgc2V0U3RhdGVJbnB1dFZhbHVlID0gX3VzZVN0YXRlMlsxXTtcbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShwcm9wc01lbnVJc09wZW4gIT09IHVuZGVmaW5lZCA/IHByb3BzTWVudUlzT3BlbiA6IGRlZmF1bHRNZW51SXNPcGVuKSxcbiAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgc3RhdGVNZW51SXNPcGVuID0gX3VzZVN0YXRlNFswXSxcbiAgICBzZXRTdGF0ZU1lbnVJc09wZW4gPSBfdXNlU3RhdGU0WzFdO1xuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKHByb3BzVmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzVmFsdWUgOiBkZWZhdWx0VmFsdWUpLFxuICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICBzdGF0ZVZhbHVlID0gX3VzZVN0YXRlNlswXSxcbiAgICBzZXRTdGF0ZVZhbHVlID0gX3VzZVN0YXRlNlsxXTtcbiAgdmFyIG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wc09uQ2hhbmdlKHZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG4gICAgc2V0U3RhdGVWYWx1ZSh2YWx1ZSk7XG4gIH0sIFtwcm9wc09uQ2hhbmdlXSk7XG4gIHZhciBvbklucHV0Q2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgdmFyIG5ld1ZhbHVlO1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbklucHV0Q2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBuZXdWYWx1ZSA9IHByb3BzT25JbnB1dENoYW5nZSh2YWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfVxuICAgIHNldFN0YXRlSW5wdXRWYWx1ZShuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUgOiB2YWx1ZSk7XG4gIH0sIFtwcm9wc09uSW5wdXRDaGFuZ2VdKTtcbiAgdmFyIG9uTWVudU9wZW4gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uTWVudU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BzT25NZW51T3BlbigpO1xuICAgIH1cbiAgICBzZXRTdGF0ZU1lbnVJc09wZW4odHJ1ZSk7XG4gIH0sIFtwcm9wc09uTWVudU9wZW5dKTtcbiAgdmFyIG9uTWVudUNsb3NlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbk1lbnVDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcHNPbk1lbnVDbG9zZSgpO1xuICAgIH1cbiAgICBzZXRTdGF0ZU1lbnVJc09wZW4oZmFsc2UpO1xuICB9LCBbcHJvcHNPbk1lbnVDbG9zZV0pO1xuICB2YXIgaW5wdXRWYWx1ZSA9IHByb3BzSW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNJbnB1dFZhbHVlIDogc3RhdGVJbnB1dFZhbHVlO1xuICB2YXIgbWVudUlzT3BlbiA9IHByb3BzTWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gcHJvcHNNZW51SXNPcGVuIDogc3RhdGVNZW51SXNPcGVuO1xuICB2YXIgdmFsdWUgPSBwcm9wc1ZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wc1ZhbHVlIDogc3RhdGVWYWx1ZTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFNlbGVjdFByb3BzKSwge30sIHtcbiAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIG1lbnVJc09wZW46IG1lbnVJc09wZW4sXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uSW5wdXRDaGFuZ2U6IG9uSW5wdXRDaGFuZ2UsXG4gICAgb25NZW51Q2xvc2U6IG9uTWVudUNsb3NlLFxuICAgIG9uTWVudU9wZW46IG9uTWVudU9wZW4sXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuXG5leHBvcnQgeyB1c2VTdGF0ZU1hbmFnZXIgYXMgdSB9O1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7XG4gICAgZm9yICh2YXIgZSA9IDE7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciB0ID0gYXJndW1lbnRzW2VdO1xuICAgICAgZm9yICh2YXIgciBpbiB0KSAoe30pLmhhc093blByb3BlcnR5LmNhbGwodCwgcikgJiYgKG5bcl0gPSB0W3JdKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH0sIF9leHRlbmRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5leHBvcnQgeyBfZXh0ZW5kcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsIG4pIHtcbiAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xufVxuZXhwb3J0IHsgX2NsYXNzQ2FsbENoZWNrIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gIGZvciAodmFyIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgIHZhciBvID0gclt0XTtcbiAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlO1xufVxuZXhwb3J0IHsgX2NyZWF0ZUNsYXNzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YodCwgZSkge1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgcmV0dXJuIHQuX19wcm90b19fID0gZSwgdDtcbiAgfSwgX3NldFByb3RvdHlwZU9mKHQsIGUpO1xufVxuZXhwb3J0IHsgX3NldFByb3RvdHlwZU9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmZ1bmN0aW9uIF9pbmhlcml0cyh0LCBlKSB7XG4gIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUgJiYgbnVsbCAhPT0gZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZSAmJiBlLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogdCxcbiAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9XG4gIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZSAmJiBzZXRQcm90b3R5cGVPZih0LCBlKTtcbn1cbmV4cG9ydCB7IF9pbmhlcml0cyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKHQpIHtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7XG4gIH0sIF9nZXRQcm90b3R5cGVPZih0KTtcbn1cbmV4cG9ydCB7IF9nZXRQcm90b3R5cGVPZiBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gIH0gY2F0Y2ggKHQpIHt9XG4gIHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gICAgcmV0dXJuICEhdDtcbiAgfSkoKTtcbn1cbmV4cG9ydCB7IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoZSkge1xuICBpZiAodm9pZCAwID09PSBlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIHJldHVybiBlO1xufVxuZXhwb3J0IHsgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgZSkge1xuICBpZiAoZSAmJiAoXCJvYmplY3RcIiA9PSBfdHlwZW9mKGUpIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSkpIHJldHVybiBlO1xuICBpZiAodm9pZCAwICE9PSBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQodCk7XG59XG5leHBvcnQgeyBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCIuL2dldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiO1xuaW1wb3J0IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIi4vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1wiO1xuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKHQpIHtcbiAgdmFyIHIgPSBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZSxcbiAgICAgIG8gPSBnZXRQcm90b3R5cGVPZih0KTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIHMgPSBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgIGUgPSBSZWZsZWN0LmNvbnN0cnVjdChvLCBhcmd1bWVudHMsIHMpO1xuICAgIH0gZWxzZSBlID0gby5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIGUpO1xuICB9O1xufVxuZXhwb3J0IHsgX2NyZWF0ZVN1cGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRob3V0SG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmV4cG9ydCB7IF9ub25JdGVyYWJsZVNwcmVhZCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwidmFyIGlzRGV2ZWxvcG1lbnQgPSBmYWxzZTtcblxuLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cblxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfSAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIHdpdGggYSB2YWx1ZVxuICAvLyBUUyBjYW4ndCB1bmRlcnN0YW5kIGl0IHRob3VnaCBzbyB3ZSBtYWtlIGl0IHN0b3AgY29tcGxhaW5pbmcgaGVyZVxuXG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdGlvbnMua2V5KTtcblxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRpb25zLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gVXNpbmcgTm9kZSBpbnN0ZWFkIG9mIEhUTUxFbGVtZW50IHNpbmNlIGNvbnRhaW5lciBtYXkgYmUgYSBTaGFkb3dSb290XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pbnNlcnRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAoX3RoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKF90aGlzLmluc2VydGlvblBvaW50KSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlcGVuZCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gX3RoaXMudGFnc1tfdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhZywgYmVmb3JlKTtcblxuICAgICAgX3RoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgfTtcblxuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gIWlzRGV2ZWxvcG1lbnQgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgX3RhZyRwYXJlbnROb2RlO1xuXG4gICAgICByZXR1cm4gKF90YWckcGFyZW50Tm9kZSA9IHRhZy5wYXJlbnROb2RlKSA9PSBudWxsID8gdm9pZCAwIDogX3RhZyRwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJleHBvcnQgdmFyIE1TID0gJy1tcy0nXG5leHBvcnQgdmFyIE1PWiA9ICctbW96LSdcbmV4cG9ydCB2YXIgV0VCS0lUID0gJy13ZWJraXQtJ1xuXG5leHBvcnQgdmFyIENPTU1FTlQgPSAnY29tbSdcbmV4cG9ydCB2YXIgUlVMRVNFVCA9ICdydWxlJ1xuZXhwb3J0IHZhciBERUNMQVJBVElPTiA9ICdkZWNsJ1xuXG5leHBvcnQgdmFyIFBBR0UgPSAnQHBhZ2UnXG5leHBvcnQgdmFyIE1FRElBID0gJ0BtZWRpYSdcbmV4cG9ydCB2YXIgSU1QT1JUID0gJ0BpbXBvcnQnXG5leHBvcnQgdmFyIENIQVJTRVQgPSAnQGNoYXJzZXQnXG5leHBvcnQgdmFyIFZJRVdQT1JUID0gJ0B2aWV3cG9ydCdcbmV4cG9ydCB2YXIgU1VQUE9SVFMgPSAnQHN1cHBvcnRzJ1xuZXhwb3J0IHZhciBET0NVTUVOVCA9ICdAZG9jdW1lbnQnXG5leHBvcnQgdmFyIE5BTUVTUEFDRSA9ICdAbmFtZXNwYWNlJ1xuZXhwb3J0IHZhciBLRVlGUkFNRVMgPSAnQGtleWZyYW1lcydcbmV4cG9ydCB2YXIgRk9OVF9GQUNFID0gJ0Bmb250LWZhY2UnXG5leHBvcnQgdmFyIENPVU5URVJfU1RZTEUgPSAnQGNvdW50ZXItc3R5bGUnXG5leHBvcnQgdmFyIEZPTlRfRkVBVFVSRV9WQUxVRVMgPSAnQGZvbnQtZmVhdHVyZS12YWx1ZXMnXG5leHBvcnQgdmFyIExBWUVSID0gJ0BsYXllcidcbiIsIi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnNcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IHZhciBmcm9tID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgdmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ25cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2ggKHZhbHVlLCBsZW5ndGgpIHtcblx0cmV0dXJuIGNoYXJhdCh2YWx1ZSwgMCkgXiA0NSA/ICgoKCgoKChsZW5ndGggPDwgMikgXiBjaGFyYXQodmFsdWUsIDApKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMSkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAyKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDMpIDogMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbSAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLnRyaW0oKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cbiAqIEByZXR1cm4ge3N0cmluZz99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaCAodmFsdWUsIHBhdHRlcm4pIHtcblx0cmV0dXJuICh2YWx1ZSA9IHBhdHRlcm4uZXhlYyh2YWx1ZSkpID8gdmFsdWVbMF0gOiB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHBhdHRlcm5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZSAodmFsdWUsIHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7XG5cdHJldHVybiB2YWx1ZS5yZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhvZiAodmFsdWUsIHNlYXJjaCkge1xuXHRyZXR1cm4gdmFsdWUuaW5kZXhPZihzZWFyY2gpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJhdCAodmFsdWUsIGluZGV4KSB7XG5cdHJldHVybiB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSB8IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyICh2YWx1ZSwgYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gdmFsdWUuc2xpY2UoYmVnaW4sIGVuZClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55W119IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaXplb2YgKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7YW55W119IGFycmF5XG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQgKHZhbHVlLCBhcnJheSkge1xuXHRyZXR1cm4gYXJyYXkucHVzaCh2YWx1ZSksIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gYXJyYXlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lIChhcnJheSwgY2FsbGJhY2spIHtcblx0cmV0dXJuIGFycmF5Lm1hcChjYWxsYmFjaykuam9pbignJylcbn1cbiIsImltcG9ydCB7ZnJvbSwgdHJpbSwgY2hhcmF0LCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCBhc3NpZ259IGZyb20gJy4vVXRpbGl0eS5qcydcblxuZXhwb3J0IHZhciBsaW5lID0gMVxuZXhwb3J0IHZhciBjb2x1bW4gPSAxXG5leHBvcnQgdmFyIGxlbmd0aCA9IDBcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlciA9IDBcbmV4cG9ydCB2YXIgY2hhcmFjdGVycyA9ICcnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXSB8IHN0cmluZ30gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0W10gfCBzdHJpbmd9IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub2RlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHRyZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgcm9vdDogcm9vdCwgcGFyZW50OiBwYXJlbnQsIHR5cGU6IHR5cGUsIHByb3BzOiBwcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuLCBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiwgbGVuZ3RoOiBsZW5ndGgsIHJldHVybjogJyd9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weSAocm9vdCwgcHJvcHMpIHtcblx0cmV0dXJuIGFzc2lnbihub2RlKCcnLCBudWxsLCBudWxsLCAnJywgbnVsbCwgbnVsbCwgMCksIHJvb3QsIHtsZW5ndGg6IC1yb290Lmxlbmd0aH0sIHByb3BzKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXIgKCkge1xuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldiAoKSB7XG5cdGNoYXJhY3RlciA9IHBvc2l0aW9uID4gMCA/IGNoYXJhdChjaGFyYWN0ZXJzLCAtLXBvc2l0aW9uKSA6IDBcblxuXHRpZiAoY29sdW1uLS0sIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZS0tXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA8IGxlbmd0aCA/IGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbisrKSA6IDBcblxuXHRpZiAoY29sdW1uKyssIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZSsrXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlZWsgKCkge1xuXHRyZXR1cm4gY2hhcmF0KGNoYXJhY3RlcnMsIHBvc2l0aW9uKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcmV0ICgpIHtcblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGljZSAoYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gc3Vic3RyKGNoYXJhY3RlcnMsIGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuICh0eXBlKSB7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdC8vIFxcMCBcXHQgXFxuIFxcciBcXHMgd2hpdGVzcGFjZSB0b2tlblxuXHRcdGNhc2UgMDogY2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0cmV0dXJuIDVcblx0XHQvLyAhICsgLCAvID4gQCB+IGlzb2xhdGUgdG9rZW5cblx0XHRjYXNlIDMzOiBjYXNlIDQzOiBjYXNlIDQ0OiBjYXNlIDQ3OiBjYXNlIDYyOiBjYXNlIDY0OiBjYXNlIDEyNjpcblx0XHQvLyA7IHsgfSBicmVha3BvaW50IHRva2VuXG5cdFx0Y2FzZSA1OTogY2FzZSAxMjM6IGNhc2UgMTI1OlxuXHRcdFx0cmV0dXJuIDRcblx0XHQvLyA6IGFjY29tcGFuaWVkIHRva2VuXG5cdFx0Y2FzZSA1ODpcblx0XHRcdHJldHVybiAzXG5cdFx0Ly8gXCIgJyAoIFsgb3BlbmluZyBkZWxpbWl0IHRva2VuXG5cdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA0MDogY2FzZSA5MTpcblx0XHRcdHJldHVybiAyXG5cdFx0Ly8gKSBdIGNsb3NpbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgNDE6IGNhc2UgOTM6XG5cdFx0XHRyZXR1cm4gMVxuXHR9XG5cblx0cmV0dXJuIDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBsaW5lID0gY29sdW1uID0gMSwgbGVuZ3RoID0gc3RybGVuKGNoYXJhY3RlcnMgPSB2YWx1ZSksIHBvc2l0aW9uID0gMCwgW11cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzID0gJycsIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGltaXQgKHR5cGUpIHtcblx0cmV0dXJuIHRyaW0oc2xpY2UocG9zaXRpb24gLSAxLCBkZWxpbWl0ZXIodHlwZSA9PT0gOTEgPyB0eXBlICsgMiA6IHR5cGUgPT09IDQwID8gdHlwZSArIDEgOiB0eXBlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyh0b2tlbml6ZXIoYWxsb2ModmFsdWUpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hpdGVzcGFjZSAodHlwZSkge1xuXHR3aGlsZSAoY2hhcmFjdGVyID0gcGVlaygpKVxuXHRcdGlmIChjaGFyYWN0ZXIgPCAzMylcblx0XHRcdG5leHQoKVxuXHRcdGVsc2Vcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHRva2VuKHR5cGUpID4gMiB8fCB0b2tlbihjaGFyYWN0ZXIpID4gMyA/ICcnIDogJyAnXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVyIChjaGlsZHJlbikge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuXHRcdFx0Y2FzZSAwOiBhcHBlbmQoaWRlbnRpZmllcihwb3NpdGlvbiAtIDEpLCBjaGlsZHJlbilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjogYXBwZW5kKGRlbGltaXQoY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OiBhcHBlbmQoZnJvbShjaGFyYWN0ZXIpLCBjaGlsZHJlbilcblx0XHR9XG5cblx0cmV0dXJuIGNoaWxkcmVuXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwaW5nIChpbmRleCwgY291bnQpIHtcblx0d2hpbGUgKC0tY291bnQgJiYgbmV4dCgpKVxuXHRcdC8vIG5vdCAwLTkgQS1GIGEtZlxuXHRcdGlmIChjaGFyYWN0ZXIgPCA0OCB8fCBjaGFyYWN0ZXIgPiAxMDIgfHwgKGNoYXJhY3RlciA+IDU3ICYmIGNoYXJhY3RlciA8IDY1KSB8fCAoY2hhcmFjdGVyID4gNzAgJiYgY2hhcmFjdGVyIDwgOTcpKVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gc2xpY2UoaW5kZXgsIGNhcmV0KCkgKyAoY291bnQgPCA2ICYmIHBlZWsoKSA9PSAzMiAmJiBuZXh0KCkgPT0gMzIpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ZXIgKHR5cGUpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0Ly8gXSApIFwiICdcblx0XHRcdGNhc2UgdHlwZTpcblx0XHRcdFx0cmV0dXJuIHBvc2l0aW9uXG5cdFx0XHQvLyBcIiAnXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OlxuXHRcdFx0XHRpZiAodHlwZSAhPT0gMzQgJiYgdHlwZSAhPT0gMzkpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKGNoYXJhY3Rlcilcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmICh0eXBlID09PSA0MSlcblx0XHRcdFx0XHRkZWxpbWl0ZXIodHlwZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRuZXh0KClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudGVyICh0eXBlLCBpbmRleCkge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdC8vIC8vXG5cdFx0aWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQ3ICsgMTApXG5cdFx0XHRicmVha1xuXHRcdC8vIC8qXG5cdFx0ZWxzZSBpZiAodHlwZSArIGNoYXJhY3RlciA9PT0gNDIgKyA0MiAmJiBwZWVrKCkgPT09IDQ3KVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gJy8qJyArIHNsaWNlKGluZGV4LCBwb3NpdGlvbiAtIDEpICsgJyonICsgZnJvbSh0eXBlID09PSA0NyA/IHR5cGUgOiBuZXh0KCkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyIChpbmRleCkge1xuXHR3aGlsZSAoIXRva2VuKHBlZWsoKSkpXG5cdFx0bmV4dCgpXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBwb3NpdGlvbilcbn1cbiIsImltcG9ydCB7Q09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7YWJzLCBjaGFyYXQsIHRyaW0sIGZyb20sIHNpemVvZiwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgcmVwbGFjZSwgaW5kZXhvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtub2RlLCBjaGFyLCBwcmV2LCBuZXh0LCBwZWVrLCBjYXJldCwgYWxsb2MsIGRlYWxsb2MsIGRlbGltaXQsIHdoaXRlc3BhY2UsIGVzY2FwaW5nLCBpZGVudGlmaWVyLCBjb21tZW50ZXJ9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7b2JqZWN0W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyhwYXJzZSgnJywgbnVsbCwgbnVsbCwgbnVsbCwgWycnXSwgdmFsdWUgPSBhbGxvYyh2YWx1ZSksIDAsIFswXSwgdmFsdWUpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNldHNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBzZXVkb1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkZWNsYXJhdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBydWxlLCBydWxlcywgcnVsZXNldHMsIHBzZXVkbywgcG9pbnRzLCBkZWNsYXJhdGlvbnMpIHtcblx0dmFyIGluZGV4ID0gMFxuXHR2YXIgb2Zmc2V0ID0gMFxuXHR2YXIgbGVuZ3RoID0gcHNldWRvXG5cdHZhciBhdHJ1bGUgPSAwXG5cdHZhciBwcm9wZXJ0eSA9IDBcblx0dmFyIHByZXZpb3VzID0gMFxuXHR2YXIgdmFyaWFibGUgPSAxXG5cdHZhciBzY2FubmluZyA9IDFcblx0dmFyIGFtcGVyc2FuZCA9IDFcblx0dmFyIGNoYXJhY3RlciA9IDBcblx0dmFyIHR5cGUgPSAnJ1xuXHR2YXIgcHJvcHMgPSBydWxlc1xuXHR2YXIgY2hpbGRyZW4gPSBydWxlc2V0c1xuXHR2YXIgcmVmZXJlbmNlID0gcnVsZVxuXHR2YXIgY2hhcmFjdGVycyA9IHR5cGVcblxuXHR3aGlsZSAoc2Nhbm5pbmcpXG5cdFx0c3dpdGNoIChwcmV2aW91cyA9IGNoYXJhY3RlciwgY2hhcmFjdGVyID0gbmV4dCgpKSB7XG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAocHJldmlvdXMgIT0gMTA4ICYmIGNoYXJhdChjaGFyYWN0ZXJzLCBsZW5ndGggLSAxKSA9PSA1OCkge1xuXHRcdFx0XHRcdGlmIChpbmRleG9mKGNoYXJhY3RlcnMgKz0gcmVwbGFjZShkZWxpbWl0KGNoYXJhY3RlciksICcmJywgJyZcXGYnKSwgJyZcXGYnKSAhPSAtMSlcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IC0xXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0Ly8gXCIgJyBbXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDkxOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFx0IFxcbiBcXHIgXFxzXG5cdFx0XHRjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gd2hpdGVzcGFjZShwcmV2aW91cylcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGVzY2FwaW5nKGNhcmV0KCkgLSAxLCA3KVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0Ly8gL1xuXHRcdFx0Y2FzZSA0Nzpcblx0XHRcdFx0c3dpdGNoIChwZWVrKCkpIHtcblx0XHRcdFx0XHRjYXNlIDQyOiBjYXNlIDQ3OlxuXHRcdFx0XHRcdFx0YXBwZW5kKGNvbW1lbnQoY29tbWVudGVyKG5leHQoKSwgY2FyZXQoKSksIHJvb3QsIHBhcmVudCksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gJy8nXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIHtcblx0XHRcdGNhc2UgMTIzICogdmFyaWFibGU6XG5cdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IHN0cmxlbihjaGFyYWN0ZXJzKSAqIGFtcGVyc2FuZFxuXHRcdFx0Ly8gfSA7IFxcMFxuXHRcdFx0Y2FzZSAxMjUgKiB2YXJpYWJsZTogY2FzZSA1OTogY2FzZSAwOlxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0XHRcdC8vIFxcMCB9XG5cdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDEyNTogc2Nhbm5pbmcgPSAwXG5cdFx0XHRcdFx0Ly8gO1xuXHRcdFx0XHRcdGNhc2UgNTkgKyBvZmZzZXQ6IGlmIChhbXBlcnNhbmQgPT0gLTEpIGNoYXJhY3RlcnMgPSByZXBsYWNlKGNoYXJhY3RlcnMsIC9cXGYvZywgJycpXG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHkgPiAwICYmIChzdHJsZW4oY2hhcmFjdGVycykgLSBsZW5ndGgpKVxuXHRcdFx0XHRcdFx0XHRhcHBlbmQocHJvcGVydHkgPiAzMiA/IGRlY2xhcmF0aW9uKGNoYXJhY3RlcnMgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMSkgOiBkZWNsYXJhdGlvbihyZXBsYWNlKGNoYXJhY3RlcnMsICcgJywgJycpICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDIpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEAgO1xuXHRcdFx0XHRcdGNhc2UgNTk6IGNoYXJhY3RlcnMgKz0gJzsnXG5cdFx0XHRcdFx0Ly8geyBydWxlL2F0LXJ1bGVcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YXBwZW5kKHJlZmVyZW5jZSA9IHJ1bGVzZXQoY2hhcmFjdGVycywgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcyA9IFtdLCBjaGlsZHJlbiA9IFtdLCBsZW5ndGgpLCBydWxlc2V0cylcblxuXHRcdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gMTIzKVxuXHRcdFx0XHRcdFx0XHRpZiAob2Zmc2V0ID09PSAwKVxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJvb3QsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBwcm9wcywgcnVsZXNldHMsIGxlbmd0aCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoYXRydWxlID09PSA5OSAmJiBjaGFyYXQoY2hhcmFjdGVycywgMykgPT09IDExMCA/IDEwMCA6IGF0cnVsZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZCBsIG0gc1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxMDA6IGNhc2UgMTA4OiBjYXNlIDEwOTogY2FzZSAxMTU6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcnVsZSAmJiBhcHBlbmQocnVsZXNldCh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIDAsIDAsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHJ1bGVzLCBwcm9wcyA9IFtdLCBsZW5ndGgpLCBjaGlsZHJlbiksIHJ1bGVzLCBjaGlsZHJlbiwgbGVuZ3RoLCBwb2ludHMsIHJ1bGUgPyBwcm9wcyA6IGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgWycnXSwgY2hpbGRyZW4sIDAsIHBvaW50cywgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW5kZXggPSBvZmZzZXQgPSBwcm9wZXJ0eSA9IDAsIHZhcmlhYmxlID0gYW1wZXJzYW5kID0gMSwgdHlwZSA9IGNoYXJhY3RlcnMgPSAnJywgbGVuZ3RoID0gcHNldWRvXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyA6XG5cdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRsZW5ndGggPSAxICsgc3RybGVuKGNoYXJhY3RlcnMpLCBwcm9wZXJ0eSA9IHByZXZpb3VzXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAodmFyaWFibGUgPCAxKVxuXHRcdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT0gMTIzKVxuXHRcdFx0XHRcdFx0LS12YXJpYWJsZVxuXHRcdFx0XHRcdGVsc2UgaWYgKGNoYXJhY3RlciA9PSAxMjUgJiYgdmFyaWFibGUrKyA9PSAwICYmIHByZXYoKSA9PSAxMjUpXG5cdFx0XHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVycyArPSBmcm9tKGNoYXJhY3RlciksIGNoYXJhY3RlciAqIHZhcmlhYmxlKSB7XG5cdFx0XHRcdFx0Ly8gJlxuXHRcdFx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdFx0XHRhbXBlcnNhbmQgPSBvZmZzZXQgPiAwID8gMSA6IChjaGFyYWN0ZXJzICs9ICdcXGYnLCAtMSlcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLFxuXHRcdFx0XHRcdGNhc2UgNDQ6XG5cdFx0XHRcdFx0XHRwb2ludHNbaW5kZXgrK10gPSAoc3RybGVuKGNoYXJhY3RlcnMpIC0gMSkgKiBhbXBlcnNhbmQsIGFtcGVyc2FuZCA9IDFcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQFxuXHRcdFx0XHRcdGNhc2UgNjQ6XG5cdFx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0XHRpZiAocGVlaygpID09PSA0NSlcblx0XHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSBkZWxpbWl0KG5leHQoKSlcblxuXHRcdFx0XHRcdFx0YXRydWxlID0gcGVlaygpLCBvZmZzZXQgPSBsZW5ndGggPSBzdHJsZW4odHlwZSA9IGNoYXJhY3RlcnMgKz0gaWRlbnRpZmllcihjYXJldCgpKSksIGNoYXJhY3RlcisrXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRjYXNlIDQ1OlxuXHRcdFx0XHRcdFx0aWYgKHByZXZpb3VzID09PSA0NSAmJiBzdHJsZW4oY2hhcmFjdGVycykgPT0gMilcblx0XHRcdFx0XHRcdFx0dmFyaWFibGUgPSAwXG5cdFx0XHRcdH1cblx0XHR9XG5cblx0cmV0dXJuIHJ1bGVzZXRzXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNldCAodmFsdWUsIHJvb3QsIHBhcmVudCwgaW5kZXgsIG9mZnNldCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0dmFyIHBvc3QgPSBvZmZzZXQgLSAxXG5cdHZhciBydWxlID0gb2Zmc2V0ID09PSAwID8gcnVsZXMgOiBbJyddXG5cdHZhciBzaXplID0gc2l6ZW9mKHJ1bGUpXG5cblx0Zm9yICh2YXIgaSA9IDAsIGogPSAwLCBrID0gMDsgaSA8IGluZGV4OyArK2kpXG5cdFx0Zm9yICh2YXIgeCA9IDAsIHkgPSBzdWJzdHIodmFsdWUsIHBvc3QgKyAxLCBwb3N0ID0gYWJzKGogPSBwb2ludHNbaV0pKSwgeiA9IHZhbHVlOyB4IDwgc2l6ZTsgKyt4KVxuXHRcdFx0aWYgKHogPSB0cmltKGogPiAwID8gcnVsZVt4XSArICcgJyArIHkgOiByZXBsYWNlKHksIC8mXFxmL2csIHJ1bGVbeF0pKSlcblx0XHRcdFx0cHJvcHNbaysrXSA9IHpcblxuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBvZmZzZXQgPT09IDAgPyBSVUxFU0VUIDogdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQgKHZhbHVlLCByb290LCBwYXJlbnQpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgQ09NTUVOVCwgZnJvbShjaGFyKCkpLCBzdWJzdHIodmFsdWUsIDIsIC0yKSwgMClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyYXRpb24gKHZhbHVlLCByb290LCBwYXJlbnQsIGxlbmd0aCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBERUNMQVJBVElPTiwgc3Vic3RyKHZhbHVlLCAwLCBsZW5ndGgpLCBzdWJzdHIodmFsdWUsIGxlbmd0aCArIDEsIC0xKSwgbGVuZ3RoKVxufVxuIiwiaW1wb3J0IHtJTVBPUlQsIExBWUVSLCBDT01NRU5ULCBSVUxFU0VULCBERUNMQVJBVElPTiwgS0VZRlJBTUVTfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge3N0cmxlbiwgc2l6ZW9mfSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUgKGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHR2YXIgb3V0cHV0ID0gJydcblx0dmFyIGxlbmd0aCA9IHNpemVvZihjaGlsZHJlbilcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuXHRcdG91dHB1dCArPSBjYWxsYmFjayhjaGlsZHJlbltpXSwgaSwgY2hpbGRyZW4sIGNhbGxiYWNrKSB8fCAnJ1xuXG5cdHJldHVybiBvdXRwdXRcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdGNhc2UgTEFZRVI6IGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkgYnJlYWtcblx0XHRjYXNlIElNUE9SVDogY2FzZSBERUNMQVJBVElPTjogcmV0dXJuIGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC5yZXR1cm4gfHwgZWxlbWVudC52YWx1ZVxuXHRcdGNhc2UgQ09NTUVOVDogcmV0dXJuICcnXG5cdFx0Y2FzZSBLRVlGUkFNRVM6IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spICsgJ30nXG5cdFx0Y2FzZSBSVUxFU0VUOiBlbGVtZW50LnZhbHVlID0gZWxlbWVudC5wcm9wcy5qb2luKCcsJylcblx0fVxuXG5cdHJldHVybiBzdHJsZW4oY2hpbGRyZW4gPSBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spKSA/IGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC52YWx1ZSArICd7JyArIGNoaWxkcmVuICsgJ30nIDogJydcbn1cbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lULCBSVUxFU0VULCBLRVlGUkFNRVMsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge21hdGNoLCBjaGFyYXQsIHN1YnN0ciwgc3RybGVuLCBzaXplb2YsIHJlcGxhY2UsIGNvbWJpbmV9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7Y29weSwgdG9rZW5pemV9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuaW1wb3J0IHtzZXJpYWxpemV9IGZyb20gJy4vU2VyaWFsaXplci5qcydcbmltcG9ydCB7cHJlZml4fSBmcm9tICcuL1ByZWZpeGVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gY29sbGVjdGlvblxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlIChjb2xsZWN0aW9uKSB7XG5cdHZhciBsZW5ndGggPSBzaXplb2YoY29sbGVjdGlvbilcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0XHR2YXIgb3V0cHV0ID0gJydcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0XHRvdXRwdXQgKz0gY29sbGVjdGlvbltpXShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB8fCAnJ1xuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNoZWV0IChjYWxsYmFjaykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoIWVsZW1lbnQucm9vdClcblx0XHRcdGlmIChlbGVtZW50ID0gZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRcdGNhbGxiYWNrKGVsZW1lbnQpXG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVyIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdGlmIChlbGVtZW50Lmxlbmd0aCA+IC0xKVxuXHRcdGlmICghZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdFx0XHRjYXNlIERFQ0xBUkFUSU9OOiBlbGVtZW50LnJldHVybiA9IHByZWZpeChlbGVtZW50LnZhbHVlLCBlbGVtZW50Lmxlbmd0aCwgY2hpbGRyZW4pXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdGNhc2UgS0VZRlJBTUVTOlxuXHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3ZhbHVlOiByZXBsYWNlKGVsZW1lbnQudmFsdWUsICdAJywgJ0AnICsgV0VCS0lUKX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdGNhc2UgUlVMRVNFVDpcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5sZW5ndGgpXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZShlbGVtZW50LnByb3BzLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChtYXRjaCh2YWx1ZSwgLyg6OnBsYWNcXHcrfDpyZWFkLVxcdyspLykpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyA6cmVhZC0ob25seXx3cml0ZSlcblx0XHRcdFx0XHRcdFx0XHRjYXNlICc6cmVhZC1vbmx5JzogY2FzZSAnOnJlYWQtd3JpdGUnOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihyZWFkLVxcdyspLywgJzonICsgTU9aICsgJyQxJyldfSldLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0XHQvLyA6cGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICc6OnBsYWNlaG9sZGVyJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIFdFQktJVCArICdpbnB1dC0kMScpXX0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sIE1TICsgJ2lucHV0LSQxJyldfSlcblx0XHRcdFx0XHRcdFx0XHRcdF0sIGNhbGxiYWNrKVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2UgKGVsZW1lbnQpIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRlbGVtZW50LnByb3BzID0gZWxlbWVudC5wcm9wcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBjb21iaW5lKHRva2VuaXplKHZhbHVlKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgMCkpIHtcblx0XHRcdFx0XHRcdC8vIFxcZlxuXHRcdFx0XHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHN1YnN0cih2YWx1ZSwgMSwgc3RybGVuKHZhbHVlKSlcblx0XHRcdFx0XHRcdC8vIFxcMCAoICsgPiB+XG5cdFx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgNDA6IGNhc2UgNDM6IGNhc2UgNjI6IGNhc2UgMTI2OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdC8vIDpcblx0XHRcdFx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdFx0XHRcdGlmIChjaGlsZHJlblsrK2luZGV4XSA9PT0gJ2dsb2JhbCcpXG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW5baW5kZXhdID0gJycsIGNoaWxkcmVuWysraW5kZXhdID0gJ1xcZicgKyBzdWJzdHIoY2hpbGRyZW5baW5kZXhdLCBpbmRleCA9IDEsIC0xKVxuXHRcdFx0XHRcdFx0Ly8gXFxzXG5cdFx0XHRcdFx0XHRjYXNlIDMyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAwOiBlbGVtZW50ID0gdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzaXplb2YoY2hpbGRyZW4pID4gMSA/ICcnIDogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRjYXNlIGluZGV4ID0gc2l6ZW9mKGNoaWxkcmVuKSAtIDE6IGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBpbmRleCA9PT0gMiA/IHZhbHVlICsgZWxlbWVudCArIGVsZW1lbnQgOiB2YWx1ZSArIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHR9XG59XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCB7IG1lbW9pemUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCB7IGRlYWxsb2MsIGFsbG9jLCBuZXh0LCB0b2tlbiwgZnJvbSwgcGVlaywgZGVsaW1pdCwgc2xpY2UsIHBvc2l0aW9uLCBSVUxFU0VULCBjb21iaW5lLCBtYXRjaCwgc2VyaWFsaXplLCBjb3B5LCByZXBsYWNlLCBXRUJLSVQsIE1PWiwgTVMsIEtFWUZSQU1FUywgREVDTEFSQVRJT04sIGhhc2gsIGNoYXJhdCwgc3RybGVuLCBpbmRleG9mLCBzdHJpbmdpZnksIHJ1bGVzaGVldCwgbWlkZGxld2FyZSwgY29tcGlsZSB9IGZyb20gJ3N0eWxpcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nID0gZnVuY3Rpb24gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKGJlZ2luLCBwb2ludHMsIGluZGV4KSB7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIHZhciBjaGFyYWN0ZXIgPSAwO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gcGVlaygpOyAvLyAmXFxmXG5cbiAgICBpZiAocHJldmlvdXMgPT09IDM4ICYmIGNoYXJhY3RlciA9PT0gMTIpIHtcbiAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgIH1cblxuICAgIGlmICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH1cblxuICByZXR1cm4gc2xpY2UoYmVnaW4sIHBvc2l0aW9uKTtcbn07XG5cbnZhciB0b1J1bGVzID0gZnVuY3Rpb24gdG9SdWxlcyhwYXJzZWQsIHBvaW50cykge1xuICAvLyBwcmV0ZW5kIHdlJ3ZlIHN0YXJ0ZWQgd2l0aCBhIGNvbW1hXG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgY2hhcmFjdGVyID0gNDQ7XG5cbiAgZG8ge1xuICAgIHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAvLyAmXFxmXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDM4ICYmIHBlZWsoKSA9PT0gMTIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3QsIHdlIGRvbid0IGFjY291bnQgZm9yIGxpdGVyYWwgc2VxdWVuY2VzIGhlcmUgLSBsaWtlIGZvciBleGFtcGxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgICAgLy8gc3R5bGlzIGluc2VydHMgXFxmIGFmdGVyICYgdG8ga25vdyB3aGVuICYgd2hlcmUgaXQgc2hvdWxkIHJlcGxhY2UgdGhpcyBzZXF1ZW5jZSB3aXRoIHRoZSBjb250ZXh0IHNlbGVjdG9yXG4gICAgICAgICAgLy8gYW5kIHdoZW4gaXQgc2hvdWxkIGp1c3QgY29uY2F0ZW5hdGUgdGhlIG91dGVyIGFuZCBpbm5lciBzZWxlY3RvcnNcbiAgICAgICAgICAvLyBpdCdzIHZlcnkgdW5saWtlbHkgZm9yIHRoaXMgc2VxdWVuY2UgdG8gYWN0dWFsbHkgYXBwZWFyIGluIGEgZGlmZmVyZW50IGNvbnRleHQsIHNvIHdlIGp1c3QgbGV2ZXJhZ2UgdGhpcyBmYWN0IGhlcmVcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKHBvc2l0aW9uIC0gMSwgcG9pbnRzLCBpbmRleCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZGVsaW1pdChjaGFyYWN0ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICAvLyBjb21tYVxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSA0NCkge1xuICAgICAgICAgIC8vIGNvbG9uXG4gICAgICAgICAgcGFyc2VkWysraW5kZXhdID0gcGVlaygpID09PSA1OCA/ICcmXFxmJyA6ICcnO1xuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSBwYXJzZWRbaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxsdGhyb3VnaFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGZyb20oY2hhcmFjdGVyKTtcbiAgICB9XG4gIH0gd2hpbGUgKGNoYXJhY3RlciA9IG5leHQoKSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpIHtcbiAgcmV0dXJuIGRlYWxsb2ModG9SdWxlcyhhbGxvYyh2YWx1ZSksIHBvaW50cykpO1xufTsgLy8gV2Vha1NldCB3b3VsZCBiZSBtb3JlIGFwcHJvcHJpYXRlLCBidXQgb25seSBXZWFrTWFwIGlzIHN1cHBvcnRlZCBpbiBJRTExXG5cblxudmFyIGZpeGVkRWxlbWVudHMgPSAvKiAjX19QVVJFX18gKi9uZXcgV2Vha01hcCgpO1xudmFyIGNvbXBhdCA9IGZ1bmN0aW9uIGNvbXBhdChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCAhZWxlbWVudC5wYXJlbnQgfHwgLy8gcG9zaXRpdmUgLmxlbmd0aCBpbmRpY2F0ZXMgdGhhdCB0aGlzIHJ1bGUgY29udGFpbnMgcHNldWRvXG4gIC8vIG5lZ2F0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGhhcyBiZWVuIGFscmVhZHkgcHJlZml4ZWRcbiAgZWxlbWVudC5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50O1xuICB2YXIgaXNJbXBsaWNpdFJ1bGUgPSBlbGVtZW50LmNvbHVtbiA9PT0gcGFyZW50LmNvbHVtbiAmJiBlbGVtZW50LmxpbmUgPT09IHBhcmVudC5saW5lO1xuXG4gIHdoaWxlIChwYXJlbnQudHlwZSAhPT0gJ3J1bGUnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICB9IC8vIHNob3J0LWNpcmN1aXQgZm9yIHRoZSBzaW1wbGVzdCBjYXNlXG5cblxuICBpZiAoZWxlbWVudC5wcm9wcy5sZW5ndGggPT09IDEgJiYgdmFsdWUuY2hhckNvZGVBdCgwKSAhPT0gNThcbiAgLyogY29sb24gKi9cbiAgJiYgIWZpeGVkRWxlbWVudHMuZ2V0KHBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhpcyBpcyBhbiBpbXBsaWNpdGx5IGluc2VydGVkIHJ1bGUgKHRoZSBvbmUgZWFnZXJseSBpbnNlcnRlZCBhdCB0aGUgZWFjaCBuZXcgbmVzdGVkIGxldmVsKVxuICAvLyB0aGVuIHRoZSBwcm9wcyBoYXMgYWxyZWFkeSBiZWVuIG1hbmlwdWxhdGVkIGJlZm9yZWhhbmQgYXMgdGhleSB0aGF0IGFycmF5IGlzIHNoYXJlZCBiZXR3ZWVuIGl0IGFuZCBpdHMgXCJydWxlIHBhcmVudFwiXG5cblxuICBpZiAoaXNJbXBsaWNpdFJ1bGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaXhlZEVsZW1lbnRzLnNldChlbGVtZW50LCB0cnVlKTtcbiAgdmFyIHBvaW50cyA9IFtdO1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKTtcbiAgdmFyIHBhcmVudFJ1bGVzID0gcGFyZW50LnByb3BzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBrID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJlbnRSdWxlcy5sZW5ndGg7IGorKywgaysrKSB7XG4gICAgICBlbGVtZW50LnByb3BzW2tdID0gcG9pbnRzW2ldID8gcnVsZXNbaV0ucmVwbGFjZSgvJlxcZi9nLCBwYXJlbnRSdWxlc1tqXSkgOiBwYXJlbnRSdWxlc1tqXSArIFwiIFwiICsgcnVsZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlID09PSAnZGVjbCcpIHtcbiAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgaWYgKCAvLyBjaGFyY29kZSBmb3IgbFxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDEwOCAmJiAvLyBjaGFyY29kZSBmb3IgYlxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG5cbmZ1bmN0aW9uIHByZWZpeCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHN3aXRjaCAoaGFzaCh2YWx1ZSwgbGVuZ3RoKSkge1xuICAgIC8vIGNvbG9yLWFkanVzdFxuICAgIGNhc2UgNTEwMzpcbiAgICAgIHJldHVybiBXRUJLSVQgKyAncHJpbnQtJyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYW5pbWF0aW9uLCBhbmltYXRpb24tKGRlbGF5fGRpcmVjdGlvbnxkdXJhdGlvbnxmaWxsLW1vZGV8aXRlcmF0aW9uLWNvdW50fG5hbWV8cGxheS1zdGF0ZXx0aW1pbmctZnVuY3Rpb24pXG5cbiAgICBjYXNlIDU3Mzc6XG4gICAgY2FzZSA0MjAxOlxuICAgIGNhc2UgMzE3NzpcbiAgICBjYXNlIDM0MzM6XG4gICAgY2FzZSAxNjQxOlxuICAgIGNhc2UgNDQ1NzpcbiAgICBjYXNlIDI5MjE6IC8vIHRleHQtZGVjb3JhdGlvbiwgZmlsdGVyLCBjbGlwLXBhdGgsIGJhY2tmYWNlLXZpc2liaWxpdHksIGNvbHVtbiwgYm94LWRlY29yYXRpb24tYnJlYWtcblxuICAgIGNhc2UgNTU3MjpcbiAgICBjYXNlIDYzNTY6XG4gICAgY2FzZSA1ODQ0OlxuICAgIGNhc2UgMzE5MTpcbiAgICBjYXNlIDY2NDU6XG4gICAgY2FzZSAzMDA1OiAvLyBtYXNrLCBtYXNrLWltYWdlLCBtYXNrLShtb2RlfGNsaXB8c2l6ZSksIG1hc2stKHJlcGVhdHxvcmlnaW4pLCBtYXNrLXBvc2l0aW9uLCBtYXNrLWNvbXBvc2l0ZSxcblxuICAgIGNhc2UgNjM5MTpcbiAgICBjYXNlIDU4Nzk6XG4gICAgY2FzZSA1NjIzOlxuICAgIGNhc2UgNjEzNTpcbiAgICBjYXNlIDQ1OTk6XG4gICAgY2FzZSA0ODU1OiAvLyBiYWNrZ3JvdW5kLWNsaXAsIGNvbHVtbnMsIGNvbHVtbi0oY291bnR8ZmlsbHxnYXB8cnVsZXxydWxlLWNvbG9yfHJ1bGUtc3R5bGV8cnVsZS13aWR0aHxzcGFufHdpZHRoKVxuXG4gICAgY2FzZSA0MjE1OlxuICAgIGNhc2UgNjM4OTpcbiAgICBjYXNlIDUxMDk6XG4gICAgY2FzZSA1MzY1OlxuICAgIGNhc2UgNTYyMTpcbiAgICBjYXNlIDM4Mjk6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyBhcHBlYXJhbmNlLCB1c2VyLXNlbGVjdCwgdHJhbnNmb3JtLCBoeXBoZW5zLCB0ZXh0LXNpemUtYWRqdXN0XG5cbiAgICBjYXNlIDUzNDk6XG4gICAgY2FzZSA0MjQ2OlxuICAgIGNhc2UgNDgxMDpcbiAgICBjYXNlIDY5Njg6XG4gICAgY2FzZSAyNzU2OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTU9aICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gZmxleCwgZmxleC1kaXJlY3Rpb25cblxuICAgIGNhc2UgNjgyODpcbiAgICBjYXNlIDQyNjg6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gb3JkZXJcblxuICAgIGNhc2UgNjE2NTpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtJyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYWxpZ24taXRlbXNcblxuICAgIGNhc2UgNTE4NzpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHJlcGxhY2UodmFsdWUsIC8oXFx3KykuKyg6W15dKykvLCBXRUJLSVQgKyAnYm94LSQxJDInICsgTVMgKyAnZmxleC0kMSQyJykgKyB2YWx1ZTtcbiAgICAvLyBhbGlnbi1zZWxmXG5cbiAgICBjYXNlIDU0NDM6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWl0ZW0tJyArIHJlcGxhY2UodmFsdWUsIC9mbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlO1xuICAgIC8vIGFsaWduLWNvbnRlbnRcblxuICAgIGNhc2UgNDY3NTpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtbGluZS1wYWNrJyArIHJlcGxhY2UodmFsdWUsIC9hbGlnbi1jb250ZW50fGZsZXgtfC1zZWxmLywgJycpICsgdmFsdWU7XG4gICAgLy8gZmxleC1zaHJpbmtcblxuICAgIGNhc2UgNTU0ODpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ3NocmluaycsICduZWdhdGl2ZScpICsgdmFsdWU7XG4gICAgLy8gZmxleC1iYXNpc1xuXG4gICAgY2FzZSA1MjkyOlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtZ3Jvd1xuXG4gICAgY2FzZSA2MDYwOlxuICAgICAgcmV0dXJuIFdFQktJVCArICdib3gtJyArIHJlcGxhY2UodmFsdWUsICctZ3JvdycsICcnKSArIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnZ3JvdycsICdwb3NpdGl2ZScpICsgdmFsdWU7XG4gICAgLy8gdHJhbnNpdGlvblxuXG4gICAgY2FzZSA0NTU0OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHJlcGxhY2UodmFsdWUsIC8oW14tXSkodHJhbnNmb3JtKS9nLCAnJDEnICsgV0VCS0lUICsgJyQyJykgKyB2YWx1ZTtcbiAgICAvLyBjdXJzb3JcblxuICAgIGNhc2UgNjE4NzpcbiAgICAgIHJldHVybiByZXBsYWNlKHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyh6b29tLXxncmFiKS8sIFdFQktJVCArICckMScpLCAvKGltYWdlLXNldCkvLCBXRUJLSVQgKyAnJDEnKSwgdmFsdWUsICcnKSArIHZhbHVlO1xuICAgIC8vIGJhY2tncm91bmQsIGJhY2tncm91bmQtaW1hZ2VcblxuICAgIGNhc2UgNTQ5NTpcbiAgICBjYXNlIDM5NTk6XG4gICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyhpbWFnZS1zZXRcXChbXl0qKS8sIFdFQktJVCArICckMScgKyAnJGAkMScpO1xuICAgIC8vIGp1c3RpZnktY29udGVudFxuXG4gICAgY2FzZSA0OTY4OlxuICAgICAgcmV0dXJuIHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyguKzopKGZsZXgtKT8oLiopLywgV0VCS0lUICsgJ2JveC1wYWNrOiQzJyArIE1TICsgJ2ZsZXgtcGFjazokMycpLCAvcy4rLWJbXjtdKy8sICdqdXN0aWZ5JykgKyBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIChtYXJnaW58cGFkZGluZyktaW5saW5lLShzdGFydHxlbmQpXG5cbiAgICBjYXNlIDQwOTU6XG4gICAgY2FzZSAzNTgzOlxuICAgIGNhc2UgNDA2ODpcbiAgICBjYXNlIDI1MzI6XG4gICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKyktaW5saW5lKC4rKS8sIFdFQktJVCArICckMSQyJykgKyB2YWx1ZTtcbiAgICAvLyAobWlufG1heCk/KHdpZHRofGhlaWdodHxpbmxpbmUtc2l6ZXxibG9jay1zaXplKVxuXG4gICAgY2FzZSA4MTE2OlxuICAgIGNhc2UgNzA1OTpcbiAgICBjYXNlIDU3NTM6XG4gICAgY2FzZSA1NTM1OlxuICAgIGNhc2UgNTQ0NTpcbiAgICBjYXNlIDU3MDE6XG4gICAgY2FzZSA0OTMzOlxuICAgIGNhc2UgNDY3NzpcbiAgICBjYXNlIDU1MzM6XG4gICAgY2FzZSA1Nzg5OlxuICAgIGNhc2UgNTAyMTpcbiAgICBjYXNlIDQ3NjU6XG4gICAgICAvLyBzdHJldGNoLCBtYXgtY29udGVudCwgbWluLWNvbnRlbnQsIGZpbGwtYXZhaWxhYmxlXG4gICAgICBpZiAoc3RybGVuKHZhbHVlKSAtIDEgLSBsZW5ndGggPiA2KSBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkpIHtcbiAgICAgICAgLy8gKG0pYXgtY29udGVudCwgKG0paW4tY29udGVudFxuICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAvLyAtXG4gICAgICAgICAgaWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgNCkgIT09IDQ1KSBicmVhaztcbiAgICAgICAgLy8gKGYpaWxsLWF2YWlsYWJsZSwgKGYpaXQtY29udGVudFxuXG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoLispLShbXl0rKS8sICckMScgKyBXRUJLSVQgKyAnJDItJDMnICsgJyQxJyArIE1PWiArIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDMpID09IDEwOCA/ICckMycgOiAnJDItJDMnKSkgKyB2YWx1ZTtcbiAgICAgICAgLy8gKHMpdHJldGNoXG5cbiAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgcmV0dXJuIH5pbmRleG9mKHZhbHVlLCAnc3RyZXRjaCcpID8gcHJlZml4KHJlcGxhY2UodmFsdWUsICdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGxlbmd0aCkgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy8gcG9zaXRpb246IHN0aWNreVxuXG4gICAgY2FzZSA0OTQ5OlxuICAgICAgLy8gKHMpdGlja3k/XG4gICAgICBpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSAhPT0gMTE1KSBicmVhaztcbiAgICAvLyBkaXNwbGF5OiAoZmxleHxpbmxpbmUtZmxleClcblxuICAgIGNhc2UgNjQ0NDpcbiAgICAgIHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBzdHJsZW4odmFsdWUpIC0gMyAtICh+aW5kZXhvZih2YWx1ZSwgJyFpbXBvcnRhbnQnKSAmJiAxMCkpKSB7XG4gICAgICAgIC8vIHN0aWMoayl5XG4gICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAnOicsICc6JyArIFdFQktJVCkgKyB2YWx1ZTtcbiAgICAgICAgLy8gKGlubGluZS0pP2ZsKGUpeFxuXG4gICAgICAgIGNhc2UgMTAxOlxuICAgICAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoW147IV0rKSg7fCEuKyk/LywgJyQxJyArIFdFQktJVCArIChjaGFyYXQodmFsdWUsIDE0KSA9PT0gNDUgPyAnaW5saW5lLScgOiAnJykgKyAnYm94JDMnICsgJyQxJyArIFdFQktJVCArICckMiQzJyArICckMScgKyBNUyArICckMmJveCQzJykgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgLy8gd3JpdGluZy1tb2RlXG5cbiAgICBjYXNlIDU5MzY6XG4gICAgICBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMTEpKSB7XG4gICAgICAgIC8vIHZlcnRpY2FsLWwocilcbiAgICAgICAgY2FzZSAxMTQ6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0YicpICsgdmFsdWU7XG4gICAgICAgIC8vIHZlcnRpY2FsLXIobClcblxuICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiLXJsJykgKyB2YWx1ZTtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCgtKXRiXG5cbiAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ2xyJykgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgcHJlZml4ZXIgPSBmdW5jdGlvbiBwcmVmaXhlcihlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG4gIGlmIChlbGVtZW50Lmxlbmd0aCA+IC0xKSBpZiAoIWVsZW1lbnRbXCJyZXR1cm5cIl0pIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgY2FzZSBERUNMQVJBVElPTjpcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEtFWUZSQU1FUzpcbiAgICAgIHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge1xuICAgICAgICB2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVClcbiAgICAgIH0pXSwgY2FsbGJhY2spO1xuXG4gICAgY2FzZSBSVUxFU0VUOlxuICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoKSByZXR1cm4gY29tYmluZShlbGVtZW50LnByb3BzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc3dpdGNoIChtYXRjaCh2YWx1ZSwgLyg6OnBsYWNcXHcrfDpyZWFkLVxcdyspLykpIHtcbiAgICAgICAgICAvLyA6cmVhZC0ob25seXx3cml0ZSlcbiAgICAgICAgICBjYXNlICc6cmVhZC1vbmx5JzpcbiAgICAgICAgICBjYXNlICc6cmVhZC13cml0ZSc6XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgcHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihyZWFkLVxcdyspLywgJzonICsgTU9aICsgJyQxJyldXG4gICAgICAgICAgICB9KV0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAvLyA6cGxhY2Vob2xkZXJcblxuICAgICAgICAgIGNhc2UgJzo6cGxhY2Vob2xkZXInOlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgV0VCS0lUICsgJ2lucHV0LSQxJyldXG4gICAgICAgICAgICB9KSwgY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgTU9aICsgJyQxJyldXG4gICAgICAgICAgICB9KSwgY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgTVMgKyAnaW5wdXQtJDEnKV1cbiAgICAgICAgICAgIH0pXSwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U3R5bGlzUGx1Z2lucyA9IFtwcmVmaXhlcl07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5O1xuXG4gIGlmIChrZXkgPT09ICdjc3MnKSB7XG4gICAgdmFyIHNzclN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dOm5vdChbZGF0YS1zXSlcIik7IC8vIGdldCBTU1JlZCBzdHlsZXMgb3V0IG9mIHRoZSB3YXkgb2YgUmVhY3QncyBoeWRyYXRpb25cbiAgICAvLyBkb2N1bWVudC5oZWFkIGlzIGEgc2FmZSBwbGFjZSB0byBtb3ZlIHRoZW0gdG8odGhvdWdoIG5vdGUgZG9jdW1lbnQuaGVhZCBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIGxhc3QgcGxhY2UgdGhleSB3aWxsIGJlKVxuICAgIC8vIG5vdGUgdGhpcyB2ZXJ5IHZlcnkgaW50ZW50aW9uYWxseSB0YXJnZXRzIGFsbCBzdHlsZSBlbGVtZW50cyByZWdhcmRsZXNzIG9mIHRoZSBrZXkgdG8gZW5zdXJlXG4gICAgLy8gdGhhdCBjcmVhdGluZyBhIGNhY2hlIHdvcmtzIGluc2lkZSBvZiByZW5kZXIgb2YgYSBSZWFjdCBjb21wb25lbnRcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3NyU3R5bGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBvbmx5IG1vdmUgZWxlbWVudHMgd2hpY2ggaGF2ZSBhIHNwYWNlIGluIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlIHZhbHVlXG4gICAgICAvLyBiZWNhdXNlIHRoYXQgaW5kaWNhdGVzIHRoYXQgaXQgaXMgYW4gRW1vdGlvbiAxMSBzZXJ2ZXItc2lkZSByZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgICAgLy8gd2hpbGUgd2Ugd2lsbCBhbHJlYWR5IGlnbm9yZSBFbW90aW9uIDExIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBiZWNhdXNlIG9mIHRoZSA6bm90KFtkYXRhLXNdKSBwYXJ0IGluIHRoZSBzZWxlY3RvclxuICAgICAgLy8gRW1vdGlvbiAxMCBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgZGlkIG5vdCBoYXZlIGRhdGEtcyAoYnV0IGltcG9ydGFudGx5IGRpZCBub3QgaGF2ZSBhIHNwYWNlIGluIHRoZWlyIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGVzKVxuICAgICAgLy8gc28gY2hlY2tpbmcgZm9yIHRoZSBzcGFjZSBlbnN1cmVzIHRoYXQgbG9hZGluZyBFbW90aW9uIDExIGFmdGVyIEVtb3Rpb24gMTAgaGFzIGluc2VydGVkIHNvbWUgc3R5bGVzXG4gICAgICAvLyB3aWxsIG5vdCByZXN1bHQgaW4gdGhlIEVtb3Rpb24gMTAgc3R5bGVzIGJlaW5nIGRlc3Ryb3llZFxuICAgICAgdmFyIGRhdGFFbW90aW9uQXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicpO1xuXG4gICAgICBpZiAoZGF0YUVtb3Rpb25BdHRyaWJ1dGUuaW5kZXhPZignICcpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxpc1BsdWdpbnMgPSBvcHRpb25zLnN0eWxpc1BsdWdpbnMgfHwgZGVmYXVsdFN0eWxpc1BsdWdpbnM7XG5cbiAgdmFyIGluc2VydGVkID0ge307XG4gIHZhciBjb250YWluZXI7XG4gIHZhciBub2Rlc1RvSHlkcmF0ZSA9IFtdO1xuXG4gIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoIC8vIHRoaXMgbWVhbnMgd2Ugd2lsbCBpZ25vcmUgZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhIHNwYWNlIGluIHRoZW0gd2hpY2hcbiAgICAvLyBtZWFucyB0aGF0IHRoZSBzdHlsZSBlbGVtZW50cyB3ZSdyZSBsb29raW5nIGF0IGFyZSBvbmx5IEVtb3Rpb24gMTEgc2VydmVyLXJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl49XFxcIlwiICsga2V5ICsgXCIgXFxcIl1cIiksIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb25cIikuc3BsaXQoJyAnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhdHRyaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5zZXJ0ZWRbYXR0cmliW2ldXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzVG9IeWRyYXRlLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcblxuICB2YXIgb21uaXByZXNlbnRQbHVnaW5zID0gW2NvbXBhdCwgcmVtb3ZlTGFiZWxdO1xuXG4gIHtcbiAgICB2YXIgY3VycmVudFNoZWV0O1xuICAgIHZhciBmaW5hbGl6aW5nUGx1Z2lucyA9IFtzdHJpbmdpZnksIHJ1bGVzaGVldChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgY3VycmVudFNoZWV0Lmluc2VydChydWxlKTtcbiAgICB9KV07XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBtaWRkbGV3YXJlKG9tbmlwcmVzZW50UGx1Z2lucy5jb25jYXQoc3R5bGlzUGx1Z2lucywgZmluYWxpemluZ1BsdWdpbnMpKTtcblxuICAgIHZhciBzdHlsaXMgPSBmdW5jdGlvbiBzdHlsaXMoc3R5bGVzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplKGNvbXBpbGUoc3R5bGVzKSwgc2VyaWFsaXplcik7XG4gICAgfTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIHN0eWxpcyhzZWxlY3RvciA/IHNlbGVjdG9yICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiIDogc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeSxcbiAgICAgIHByZXBlbmQ6IG9wdGlvbnMucHJlcGVuZCxcbiAgICAgIGluc2VydGlvblBvaW50OiBvcHRpb25zLmluc2VydGlvblBvaW50XG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICBjYWNoZS5zaGVldC5oeWRyYXRlKG5vZGVzVG9IeWRyYXRlKTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ2FjaGUgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwidmFyIGlzQnJvd3NlciA9IHRydWU7XG5cbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIHJlZ2lzdGVyU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG59O1xudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICBjYWNoZS5pbnNlcnQoc2VyaWFsaXplZCA9PT0gY3VycmVudCA/IFwiLlwiICsgY2xhc3NOYW1lIDogJycsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IHsgbXVybXVyMiBhcyBkZWZhdWx0IH07XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYXNwZWN0UmF0aW86IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHNjYWxlOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgeyB1bml0bGVzc0tleXMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGhhc2hTdHJpbmcgZnJvbSAnQGVtb3Rpb24vaGFzaCc7XG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBpc0RldmVsb3BtZW50ID0gZmFsc2U7XG5cbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgbm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UgPSAnQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggJyArICdAZW1vdGlvbi9iYWJlbC1wbHVnaW4sIHRoZSBzd2MgRW1vdGlvbiBwbHVnaW4sIG9yIGFub3RoZXIgRW1vdGlvbi1hd2FyZSAnICsgJ2NvbXBpbGVyIHRyYW5zZm9ybS4nO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgY29tcG9uZW50U2VsZWN0b3IgPSBpbnRlcnBvbGF0aW9uO1xuXG4gIGlmIChjb21wb25lbnRTZWxlY3Rvci5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcblxuICAgIHJldHVybiBjb21wb25lbnRTZWxlY3RvcjtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZW9mIGludGVycG9sYXRpb24pIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGtleWZyYW1lcyA9IGludGVycG9sYXRpb247XG5cbiAgICAgICAgaWYgKGtleWZyYW1lcy5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZToga2V5ZnJhbWVzLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGtleWZyYW1lcy5zdHlsZXMsXG4gICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBrZXlmcmFtZXMubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZXJpYWxpemVkU3R5bGVzID0gaW50ZXJwb2xhdGlvbjtcblxuICAgICAgICBpZiAoc2VyaWFsaXplZFN0eWxlcy5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBuZXh0ID0gc2VyaWFsaXplZFN0eWxlcy5uZXh0O1xuXG4gICAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBtb3N0IGVmZmljaWVudCB0aGluZyBldmVyIGJ1dCB0aGlzIGlzIGEgcHJldHR5IHJhcmUgY2FzZVxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlIHdpbGwgYmUgdmVyeSBmZXcgaXRlcmF0aW9ucyBvZiB0aGlzIGdlbmVyYWxseVxuICAgICAgICAgICAgd2hpbGUgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlczogbmV4dC5zdHlsZXMsXG4gICAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlcyA9IHNlcmlhbGl6ZWRTdHlsZXMuc3R5bGVzICsgXCI7XCI7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgdmFyIGFzU3RyaW5nID0gaW50ZXJwb2xhdGlvbjtcblxuICBpZiAocmVnaXN0ZXJlZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGFzU3RyaW5nO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbYXNTdHJpbmddO1xuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgPyBjYWNoZWQgOiBhc1N0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XG4gIHZhciBzdHJpbmcgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmpbaV0pICsgXCI7XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgYXNTdHJpbmcgPSB2YWx1ZTtcblxuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbYXNTdHJpbmddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0ga2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW2FzU3RyaW5nXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZShhc1N0cmluZykpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShrZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIGFzU3RyaW5nKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBpc0RldmVsb3BtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5vQ29tcG9uZW50U2VsZWN0b3JNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7e10rKVxccyooO3wkKS9nOyAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxudmFyIGN1cnNvcjtcbmZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGFzVGVtcGxhdGVTdHJpbmdzQXJyID0gc3RyaW5ncztcblxuICAgIHN0eWxlcyArPSBhc1RlbXBsYXRlU3RyaW5nc0FyclswXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgdmFyIHRlbXBsYXRlU3RyaW5nc0FyciA9IHN0cmluZ3M7XG5cbiAgICAgIHN0eWxlcyArPSB0ZW1wbGF0ZVN0cmluZ3NBcnJbaV07XG4gICAgfVxuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgc3luY0ZhbGxiYWNrID0gZnVuY3Rpb24gc3luY0ZhbGxiYWNrKGNyZWF0ZSkge1xuICByZXR1cm4gY3JlYXRlKCk7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gPyBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA6IGZhbHNlO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgPSB1c2VJbnNlcnRpb25FZmZlY3QgfHwgc3luY0ZhbGxiYWNrO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayA9IHVzZUluc2VydGlvbkVmZmVjdCB8fCBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG5cbmV4cG9ydCB7IHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2Vha01lbW9pemUgZnJvbSAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrIH0gZnJvbSAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuXG52YXIgaXNEZXZlbG9wbWVudCA9IGZhbHNlO1xuXG52YXIgRW1vdGlvbkNhY2hlQ29udGV4dCA9IC8qICNfX1BVUkVfXyAqL1JlYWN0LmNyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IC8qICNfX1BVUkVfXyAqL2NyZWF0ZUNhY2hlKHtcbiAga2V5OiAnY3NzJ1xufSkgOiBudWxsKTtcblxudmFyIENhY2hlUHJvdmlkZXIgPSBFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyO1xudmFyIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHVzZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG59O1xuXG52YXIgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAvLyB0aGUgY2FjaGUgd2lsbCBuZXZlciBiZSBudWxsIGluIHRoZSBicm93c2VyXG4gICAgdmFyIGNhY2hlID0gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbiAgICByZXR1cm4gZnVuYyhwcm9wcywgY2FjaGUsIHJlZik7XG4gIH0pO1xufTtcblxudmFyIFRoZW1lQ29udGV4dCA9IC8qICNfX1BVUkVfXyAqL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgdGhlbWUpO1xufTtcblxudmFyIGNyZWF0ZUNhY2hlV2l0aFRoZW1lID0gLyogI19fUFVSRV9fICovd2Vha01lbW9pemUoZnVuY3Rpb24gKG91dGVyVGhlbWUpIHtcbiAgcmV0dXJuIHdlYWtNZW1vaXplKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHJldHVybiBnZXRUaGVtZShvdXRlclRoZW1lLCB0aGVtZSk7XG4gIH0pO1xufSk7XG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIGlmIChwcm9wcy50aGVtZSAhPT0gdGhlbWUpIHtcbiAgICB0aGVtZSA9IGNyZWF0ZUNhY2hlV2l0aFRoZW1lKHRoZW1lKShwcm9wcy50aGVtZSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRoZW1lXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5mdW5jdGlvbiB3aXRoVGhlbWUoQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9KTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHR5cGVQcm9wTmFtZSA9ICdfX0VNT1RJT05fVFlQRV9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBjcmVhdGVFbW90aW9uUHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpIHtcblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBfa2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKHByb3BzLCBfa2V5KSkge1xuICAgICAgbmV3UHJvcHNbX2tleV0gPSBwcm9wc1tfa2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gUnVudGltZSBsYWJlbGluZyBpcyBhbiBvcHQtaW4gZmVhdHVyZSBiZWNhdXNlOlxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZCA9IF9yZWYuc2VyaWFsaXplZCxcbiAgICAgIGlzU3RyaW5nVGFnID0gX3JlZi5pc1N0cmluZ1RhZztcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBFbW90aW9uID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSBwcm9wcy5jc3M7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMsIHVuZGVmaW5lZCwgUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcblxuICBjbGFzc05hbWUgKz0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIF9rZXkyIGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKHByb3BzLCBfa2V5MikgJiYgX2tleTIgIT09ICdjc3MnICYmIF9rZXkyICE9PSB0eXBlUHJvcE5hbWUgJiYgKCFpc0RldmVsb3BtZW50ICkpIHtcbiAgICAgIG5ld1Byb3BzW19rZXkyXSA9IHByb3BzW19rZXkyXTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cbiAgaWYgKHJlZikge1xuICAgIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgaXNTdHJpbmdUYWc6IHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgbmV3UHJvcHMpKTtcbn0pO1xuXG52YXIgRW1vdGlvbiQxID0gRW1vdGlvbjtcblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uJDEgYXMgRSwgVGhlbWVDb250ZXh0IGFzIFQsIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSBhcyBfLCBUaGVtZVByb3ZpZGVyIGFzIGEsIHdpdGhUaGVtZSBhcyBiLCBjcmVhdGVFbW90aW9uUHJvcHMgYXMgYywgaGFzT3duIGFzIGgsIGlzRGV2ZWxvcG1lbnQgYXMgaSwgdXNlVGhlbWUgYXMgdSwgd2l0aEVtb3Rpb25DYWNoZSBhcyB3IH07XG4iLCJpbXBvcnQgeyBoIGFzIGhhc093biwgRSBhcyBFbW90aW9uLCBjIGFzIGNyZWF0ZUVtb3Rpb25Qcm9wcywgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBUIGFzIFRoZW1lQ29udGV4dCwgaSBhcyBpc0RldmVsb3BtZW50IH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtZjBkZTk2OGUuYnJvd3Nlci5lc20uanMnO1xuZXhwb3J0IHsgQyBhcyBDYWNoZVByb3ZpZGVyLCBUIGFzIFRoZW1lQ29udGV4dCwgYSBhcyBUaGVtZVByb3ZpZGVyLCBfIGFzIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSwgdSBhcyB1c2VUaGVtZSwgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBiIGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LWYwZGU5NjhlLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgfSBmcm9tICdAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxudmFyIGpzeCA9IGZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd24uY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbihmdW5jdGlvbiAoX2pzeCkge1xuICB2YXIgSlNYO1xuXG4gIChmdW5jdGlvbiAoX0pTWCkge30pKEpTWCB8fCAoSlNYID0gX2pzeC5KU1ggfHwgKF9qc3guSlNYID0ge30pKSk7XG59KShqc3ggfHwgKGpzeCA9IHt9KSk7XG5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xuXG52YXIgR2xvYmFsID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10sIHVuZGVmaW5lZCwgUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcbiAgLy8gYnV0IGl0IGlzIGJhc2VkIG9uIGEgY29uc3RhbnQgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSBhdCBydW50aW1lXG4gIC8vIGl0J3MgZWZmZWN0aXZlbHkgbGlrZSBoYXZpbmcgdHdvIGltcGxlbWVudGF0aW9ucyBhbmQgc3dpdGNoaW5nIHRoZW0gb3V0XG4gIC8vIHNvIGl0J3Mgbm90IGFjdHVhbGx5IGJyZWFraW5nIGFueXRoaW5nXG5cblxuICB2YXIgc2hlZXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIga2V5ID0gY2FjaGUua2V5ICsgXCItZ2xvYmFsXCI7IC8vIHVzZSBjYXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9lbW90aW9uLWpzL2Vtb3Rpb24vaXNzdWVzLzI2NzVcblxuICAgIHZhciBzaGVldCA9IG5ldyBjYWNoZS5zaGVldC5jb25zdHJ1Y3Rvcih7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5vbmNlOiBjYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogY2FjaGUuc2hlZXQuY29udGFpbmVyLFxuICAgICAgc3BlZWR5OiBjYWNoZS5zaGVldC5pc1NwZWVkeVxuICAgIH0pO1xuICAgIHZhciByZWh5ZHJhdGluZyA9IGZhbHNlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbj1cXFwiXCIgKyBrZXkgKyBcIiBcIiArIHNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAoY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGNhY2hlLnNoZWV0LnRhZ3NbMF07XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlaHlkcmF0aW5nID0gdHJ1ZTsgLy8gY2xlYXIgdGhlIGhhc2ggc28gdGhpcyBub2RlIHdvbid0IGJlIHJlY29nbml6YWJsZSBhcyByZWh5ZHJhdGFibGUgYnkgb3RoZXIgPEdsb2JhbC8+c1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywga2V5KTtcbiAgICAgIHNoZWV0Lmh5ZHJhdGUoW25vZGVdKTtcbiAgICB9XG5cbiAgICBzaGVldFJlZi5jdXJyZW50ID0gW3NoZWV0LCByZWh5ZHJhdGluZ107XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfTtcbiAgfSwgW2NhY2hlXSk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoZWV0UmVmQ3VycmVudCA9IHNoZWV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRSZWZDdXJyZW50WzBdLFxuICAgICAgICByZWh5ZHJhdGluZyA9IHNoZWV0UmVmQ3VycmVudFsxXTtcblxuICAgIGlmIChyZWh5ZHJhdGluZykge1xuICAgICAgc2hlZXRSZWZDdXJyZW50WzFdID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcmlhbGl6ZWQubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpbnNlcnQga2V5ZnJhbWVzXG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQubmV4dCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB0aGlzIGRvZXNuJ3QgZXhpc3QgdGhlbiBpdCB3aWxsIGJlIG51bGwgc28gdGhlIHN0eWxlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZFxuICAgICAgdmFyIGVsZW1lbnQgPSBzaGVldC50YWdzW3NoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgc2hlZXQuYmVmb3JlID0gZWxlbWVudDtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgY2FjaGUuaW5zZXJ0KFwiXCIsIHNlcmlhbGl6ZWQsIHNoZWV0LCBmYWxzZSk7XG4gIH0sIFtjYWNoZSwgc2VyaWFsaXplZC5uYW1lXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbmZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgdmFyIGluc2VydGFibGUgPSBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB2YXIgbmFtZSA9IFwiYW5pbWF0aW9uLVwiICsgaW5zZXJ0YWJsZS5uYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBuYW1lICsgXCJ7XCIgKyBpbnNlcnRhYmxlLnN0eWxlcyArIFwifVwiLFxuICAgIGFuaW06IDEsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiX0VNT19cIiArIHRoaXMubmFtZSArIFwiX1wiICsgdGhpcy5zdHlsZXMgKyBcIl9FTU9fXCI7XG4gICAgfVxuICB9O1xufVxuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZEFyciA9IF9yZWYuc2VyaWFsaXplZEFycjtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZEFycltpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgQ2xhc3NOYW1lcyA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcbiAgdmFyIHNlcmlhbGl6ZWRBcnIgPSBbXTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBpc0RldmVsb3BtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG4gICAgc2VyaWFsaXplZEFyci5wdXNoKHNlcmlhbGl6ZWQpOyAvLyByZWdpc3RyYXRpb24gaGFzIHRvIGhhcHBlbiBoZXJlIGFzIHRoZSByZXN1bHQgb2YgdGhpcyBtaWdodCBnZXQgY29uc3VtZWQgYnkgYGN4YFxuXG4gICAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIGlzRGV2ZWxvcG1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNhY2hlLnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIHRoZW1lOiBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgfTtcbiAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICBoYXNSZW5kZXJlZCA9IHRydWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWRBcnI6IHNlcmlhbGl6ZWRBcnJcbiAgfSksIGVsZSk7XG59KTtcblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwgY3NzLCBqc3gsIGtleWZyYW1lcyB9O1xuIiwiZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChlLCB0KSB7XG4gIHJldHVybiB0IHx8ICh0ID0gZS5zbGljZSgwKSksIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUodClcbiAgICB9XG4gIH0pKTtcbn1cbmV4cG9ydCB7IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwgYXMgZGVmYXVsdCB9OyIsIi8qKlxuICogQ3VzdG9tIHBvc2l0aW9uaW5nIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3ZpcnR1YWwtZWxlbWVudHNcbiAqL1xuXG5jb25zdCBzaWRlcyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5jb25zdCBhbGlnbm1lbnRzID0gWydzdGFydCcsICdlbmQnXTtcbmNvbnN0IHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovc2lkZXMucmVkdWNlKChhY2MsIHNpZGUpID0+IGFjYy5jb25jYXQoc2lkZSwgc2lkZSArIFwiLVwiICsgYWxpZ25tZW50c1swXSwgc2lkZSArIFwiLVwiICsgYWxpZ25tZW50c1sxXSksIFtdKTtcbmNvbnN0IG1pbiA9IE1hdGgubWluO1xuY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG5jb25zdCBjcmVhdGVDb29yZHMgPSB2ID0+ICh7XG4gIHg6IHYsXG4gIHk6IHZcbn0pO1xuY29uc3Qgb3Bwb3NpdGVTaWRlTWFwID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnRNYXAgPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gY2xhbXAoc3RhcnQsIHZhbHVlLCBlbmQpIHtcbiAgcmV0dXJuIG1heChzdGFydCwgbWluKHZhbHVlLCBlbmQpKTtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKHZhbHVlLCBwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUocGFyYW0pIDogdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRTaWRlKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5mdW5jdGlvbiBnZXRBeGlzTGVuZ3RoKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbn1cbmZ1bmN0aW9uIGdldFNpZGVBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMoZ2V0U2lkZShwbGFjZW1lbnQpKSA/ICd5JyA6ICd4Jztcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KSB7XG4gIHJldHVybiBnZXRPcHBvc2l0ZUF4aXMoZ2V0U2lkZUF4aXMocGxhY2VtZW50KSk7XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRTaWRlcyhwbGFjZW1lbnQsIHJlY3RzLCBydGwpIHtcbiAgaWYgKHJ0bCA9PT0gdm9pZCAwKSB7XG4gICAgcnRsID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGFsaWdubWVudEF4aXMgPSBnZXRBbGlnbm1lbnRBeGlzKHBsYWNlbWVudCk7XG4gIGNvbnN0IGxlbmd0aCA9IGdldEF4aXNMZW5ndGgoYWxpZ25tZW50QXhpcyk7XG4gIGxldCBtYWluQWxpZ25tZW50U2lkZSA9IGFsaWdubWVudEF4aXMgPT09ICd4JyA/IGFsaWdubWVudCA9PT0gKHJ0bCA/ICdlbmQnIDogJ3N0YXJ0JykgPyAncmlnaHQnIDogJ2xlZnQnIDogYWxpZ25tZW50ID09PSAnc3RhcnQnID8gJ2JvdHRvbScgOiAndG9wJztcbiAgaWYgKHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdID4gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXSkge1xuICAgIG1haW5BbGlnbm1lbnRTaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpO1xuICB9XG4gIHJldHVybiBbbWFpbkFsaWdubWVudFNpZGUsIGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKV07XG59XG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBhbGlnbm1lbnQgPT4gb3Bwb3NpdGVBbGlnbm1lbnRNYXBbYWxpZ25tZW50XSk7XG59XG5mdW5jdGlvbiBnZXRTaWRlTGlzdChzaWRlLCBpc1N0YXJ0LCBydGwpIHtcbiAgY29uc3QgbHIgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgY29uc3QgcmwgPSBbJ3JpZ2h0JywgJ2xlZnQnXTtcbiAgY29uc3QgdGIgPSBbJ3RvcCcsICdib3R0b20nXTtcbiAgY29uc3QgYnQgPSBbJ2JvdHRvbScsICd0b3AnXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgaWYgKHJ0bCkgcmV0dXJuIGlzU3RhcnQgPyBybCA6IGxyO1xuICAgICAgcmV0dXJuIGlzU3RhcnQgPyBsciA6IHJsO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gdGIgOiBidDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtdO1xuICB9XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzKHBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZGlyZWN0aW9uLCBydGwpIHtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGxldCBsaXN0ID0gZ2V0U2lkZUxpc3QoZ2V0U2lkZShwbGFjZW1lbnQpLCBkaXJlY3Rpb24gPT09ICdzdGFydCcsIHJ0bCk7XG4gIGlmIChhbGlnbm1lbnQpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoc2lkZSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgc2lkZSA9PiBvcHBvc2l0ZVNpZGVNYXBbc2lkZV0pO1xufVxuZnVuY3Rpb24gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC4uLnBhZGRpbmdcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4gdHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSA6IHtcbiAgICB0b3A6IHBhZGRpbmcsXG4gICAgcmlnaHQ6IHBhZGRpbmcsXG4gICAgYm90dG9tOiBwYWRkaW5nLFxuICAgIGxlZnQ6IHBhZGRpbmdcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICBjb25zdCB7XG4gICAgeCxcbiAgICB5LFxuICAgIHdpZHRoLFxuICAgIGhlaWdodFxuICB9ID0gcmVjdDtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdG9wOiB5LFxuICAgIGxlZnQ6IHgsXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmV4cG9ydCB7IGFsaWdubWVudHMsIGNsYW1wLCBjcmVhdGVDb29yZHMsIGV2YWx1YXRlLCBleHBhbmRQYWRkaW5nT2JqZWN0LCBmbG9vciwgZ2V0QWxpZ25tZW50LCBnZXRBbGlnbm1lbnRBeGlzLCBnZXRBbGlnbm1lbnRTaWRlcywgZ2V0QXhpc0xlbmd0aCwgZ2V0RXhwYW5kZWRQbGFjZW1lbnRzLCBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBeGlzLCBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzLCBnZXRPcHBvc2l0ZVBsYWNlbWVudCwgZ2V0UGFkZGluZ09iamVjdCwgZ2V0U2lkZSwgZ2V0U2lkZUF4aXMsIG1heCwgbWluLCBwbGFjZW1lbnRzLCByZWN0VG9DbGllbnRSZWN0LCByb3VuZCwgc2lkZXMgfTtcbiIsImZ1bmN0aW9uIGhhc1dpbmRvdygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZU5hbWUobm9kZSkge1xuICBpZiAoaXNOb2RlKG5vZGUpKSB7XG4gICAgcmV0dXJuIChub2RlLm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIC8vIE1vY2tlZCBub2RlcyBpbiB0ZXN0aW5nIGVudmlyb25tZW50cyBtYXkgbm90IGJlIGluc3RhbmNlcyBvZiBOb2RlLiBCeVxuICAvLyByZXR1cm5pbmcgYCNkb2N1bWVudGAgYW4gaW5maW5pdGUgbG9vcCB3b24ndCBvY2N1ci5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8yMzE3XG4gIHJldHVybiAnI2RvY3VtZW50Jztcbn1cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKG5vZGUgPT0gbnVsbCB8fCAoX25vZGUkb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIHx8IHdpbmRvdztcbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChub2RlKSB7XG4gIHZhciBfcmVmO1xuICByZXR1cm4gKF9yZWYgPSAoaXNOb2RlKG5vZGUpID8gbm9kZS5vd25lckRvY3VtZW50IDogbm9kZS5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX3JlZi5kb2N1bWVudEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc05vZGUodmFsdWUpIHtcbiAgaWYgKCFoYXNXaW5kb3coKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBOb2RlIHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5Ob2RlO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlKSB7XG4gIGlmICghaGFzV2luZG93KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQodmFsdWUpIHtcbiAgaWYgKCFoYXNXaW5kb3coKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuSFRNTEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3QodmFsdWUpIHtcbiAgaWYgKCFoYXNXaW5kb3coKSB8fCB0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuU2hhZG93Um9vdDtcbn1cbmZ1bmN0aW9uIGlzT3ZlcmZsb3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3Qge1xuICAgIG92ZXJmbG93LFxuICAgIG92ZXJmbG93WCxcbiAgICBvdmVyZmxvd1ksXG4gICAgZGlzcGxheVxuICB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbnxjbGlwLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSAmJiAhWydpbmxpbmUnLCAnY29udGVudHMnXS5pbmNsdWRlcyhkaXNwbGF5KTtcbn1cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShlbGVtZW50KSk7XG59XG5mdW5jdGlvbiBpc1RvcExheWVyKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsnOnBvcG92ZXItb3BlbicsICc6bW9kYWwnXS5zb21lKHNlbGVjdG9yID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBpc0NvbnRhaW5pbmdCbG9jayhlbGVtZW50T3JDc3MpIHtcbiAgY29uc3Qgd2Via2l0ID0gaXNXZWJLaXQoKTtcbiAgY29uc3QgY3NzID0gaXNFbGVtZW50KGVsZW1lbnRPckNzcykgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnRPckNzcykgOiBlbGVtZW50T3JDc3M7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy10cmFuc2Zvcm1zLTIvI2luZGl2aWR1YWwtdHJhbnNmb3Jtc1xuICByZXR1cm4gWyd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlJywgJ3NjYWxlJywgJ3JvdGF0ZScsICdwZXJzcGVjdGl2ZSddLnNvbWUodmFsdWUgPT4gY3NzW3ZhbHVlXSA/IGNzc1t2YWx1ZV0gIT09ICdub25lJyA6IGZhbHNlKSB8fCAoY3NzLmNvbnRhaW5lclR5cGUgPyBjc3MuY29udGFpbmVyVHlwZSAhPT0gJ25vcm1hbCcgOiBmYWxzZSkgfHwgIXdlYmtpdCAmJiAoY3NzLmJhY2tkcm9wRmlsdGVyID8gY3NzLmJhY2tkcm9wRmlsdGVyICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgIXdlYmtpdCAmJiAoY3NzLmZpbHRlciA/IGNzcy5maWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCBbJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUnLCAnc2NhbGUnLCAncm90YXRlJywgJ3BlcnNwZWN0aXZlJywgJ2ZpbHRlciddLnNvbWUodmFsdWUgPT4gKGNzcy53aWxsQ2hhbmdlIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpIHx8IFsncGFpbnQnLCAnbGF5b3V0JywgJ3N0cmljdCcsICdjb250ZW50J10uc29tZSh2YWx1ZSA9PiAoY3NzLmNvbnRhaW4gfHwgJycpLmluY2x1ZGVzKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBsZXQgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBpZiAoaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIGlmIChpc1RvcExheWVyKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgaWYgKHR5cGVvZiBDU1MgPT09ICd1bmRlZmluZWQnIHx8ICFDU1Muc3VwcG9ydHMpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cygnLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXInLCAnbm9uZScpO1xufVxuZnVuY3Rpb24gaXNMYXN0VHJhdmVyc2FibGVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKG5vZGUpKTtcbn1cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpIHtcbiAgaWYgKGlzRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsWCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsWVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID1cbiAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gIG5vZGUuYXNzaWduZWRTbG90IHx8XG4gIC8vIERPTSBFbGVtZW50IGRldGVjdGVkLlxuICBub2RlLnBhcmVudE5vZGUgfHxcbiAgLy8gU2hhZG93Um9vdCBkZXRlY3RlZC5cbiAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fFxuICAvLyBGYWxsYmFjay5cbiAgZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHJlc3VsdCkgPyByZXN1bHQuaG9zdCA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSk7XG4gIGlmIChpc0xhc3RUcmF2ZXJzYWJsZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50ID8gbm9kZS5vd25lckRvY3VtZW50LmJvZHkgOiBub2RlLmJvZHk7XG4gIH1cbiAgaWYgKGlzSFRNTEVsZW1lbnQocGFyZW50Tm9kZSkgJiYgaXNPdmVyZmxvd0VsZW1lbnQocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3IocGFyZW50Tm9kZSk7XG59XG5mdW5jdGlvbiBnZXRPdmVyZmxvd0FuY2VzdG9ycyhub2RlLCBsaXN0LCB0cmF2ZXJzZUlmcmFtZXMpIHtcbiAgdmFyIF9ub2RlJG93bmVyRG9jdW1lbnQyO1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG4gIGlmICh0cmF2ZXJzZUlmcmFtZXMgPT09IHZvaWQgMCkge1xuICAgIHRyYXZlcnNlSWZyYW1lcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2Nyb2xsYWJsZUFuY2VzdG9yID0gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSk7XG4gIGNvbnN0IGlzQm9keSA9IHNjcm9sbGFibGVBbmNlc3RvciA9PT0gKChfbm9kZSRvd25lckRvY3VtZW50MiA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQyLmJvZHkpO1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsYWJsZUFuY2VzdG9yKTtcbiAgaWYgKGlzQm9keSkge1xuICAgIGNvbnN0IGZyYW1lRWxlbWVudCA9IGdldEZyYW1lRWxlbWVudCh3aW4pO1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCh3aW4sIHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNPdmVyZmxvd0VsZW1lbnQoc2Nyb2xsYWJsZUFuY2VzdG9yKSA/IHNjcm9sbGFibGVBbmNlc3RvciA6IFtdLCBmcmFtZUVsZW1lbnQgJiYgdHJhdmVyc2VJZnJhbWVzID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZnJhbWVFbGVtZW50KSA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IsIFtdLCB0cmF2ZXJzZUlmcmFtZXMpKTtcbn1cbmZ1bmN0aW9uIGdldEZyYW1lRWxlbWVudCh3aW4pIHtcbiAgcmV0dXJuIHdpbi5wYXJlbnQgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHdpbi5wYXJlbnQpID8gd2luLmZyYW1lRWxlbWVudCA6IG51bGw7XG59XG5cbmV4cG9ydCB7IGdldENvbXB1dGVkU3R5bGUsIGdldENvbnRhaW5pbmdCbG9jaywgZ2V0RG9jdW1lbnRFbGVtZW50LCBnZXRGcmFtZUVsZW1lbnQsIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yLCBnZXROb2RlTmFtZSwgZ2V0Tm9kZVNjcm9sbCwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsIGdldFBhcmVudE5vZGUsIGdldFdpbmRvdywgaXNDb250YWluaW5nQmxvY2ssIGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNMYXN0VHJhdmVyc2FibGVOb2RlLCBpc05vZGUsIGlzT3ZlcmZsb3dFbGVtZW50LCBpc1NoYWRvd1Jvb3QsIGlzVGFibGVFbGVtZW50LCBpc1RvcExheWVyLCBpc1dlYktpdCB9O1xuIiwiaW1wb3J0IHsgcmVjdFRvQ2xpZW50UmVjdCwgZGV0ZWN0T3ZlcmZsb3cgYXMgZGV0ZWN0T3ZlcmZsb3ckMSwgb2Zmc2V0IGFzIG9mZnNldCQxLCBhdXRvUGxhY2VtZW50IGFzIGF1dG9QbGFjZW1lbnQkMSwgc2hpZnQgYXMgc2hpZnQkMSwgZmxpcCBhcyBmbGlwJDEsIHNpemUgYXMgc2l6ZSQxLCBoaWRlIGFzIGhpZGUkMSwgYXJyb3cgYXMgYXJyb3ckMSwgaW5saW5lIGFzIGlubGluZSQxLCBsaW1pdFNoaWZ0IGFzIGxpbWl0U2hpZnQkMSwgY29tcHV0ZVBvc2l0aW9uIGFzIGNvbXB1dGVQb3NpdGlvbiQxIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2NvcmUnO1xuaW1wb3J0IHsgcm91bmQsIGNyZWF0ZUNvb3JkcywgbWF4LCBtaW4sIGZsb29yIH0gZnJvbSAnQGZsb2F0aW5nLXVpL3V0aWxzJztcbmltcG9ydCB7IGdldENvbXB1dGVkU3R5bGUsIGlzSFRNTEVsZW1lbnQsIGlzRWxlbWVudCwgZ2V0V2luZG93LCBpc1dlYktpdCwgZ2V0RnJhbWVFbGVtZW50LCBnZXROb2RlU2Nyb2xsLCBnZXREb2N1bWVudEVsZW1lbnQsIGlzVG9wTGF5ZXIsIGdldE5vZGVOYW1lLCBpc092ZXJmbG93RWxlbWVudCwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsIGdldFBhcmVudE5vZGUsIGlzTGFzdFRyYXZlcnNhYmxlTm9kZSwgaXNDb250YWluaW5nQmxvY2ssIGlzVGFibGVFbGVtZW50LCBnZXRDb250YWluaW5nQmxvY2sgfSBmcm9tICdAZmxvYXRpbmctdWkvdXRpbHMvZG9tJztcbmV4cG9ydCB7IGdldE92ZXJmbG93QW5jZXN0b3JzIH0gZnJvbSAnQGZsb2F0aW5nLXVpL3V0aWxzL2RvbSc7XG5cbmZ1bmN0aW9uIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCkge1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAvLyBJbiB0ZXN0aW5nIGVudmlyb25tZW50cywgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIHByb3BlcnRpZXMgYXJlIGVtcHR5XG4gIC8vIHN0cmluZ3MgZm9yIFNWRyBlbGVtZW50cywgcmV0dXJuaW5nIE5hTi4gRmFsbGJhY2sgdG8gYDBgIGluIHRoaXMgY2FzZS5cbiAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChjc3Mud2lkdGgpIHx8IDA7XG4gIGxldCBoZWlnaHQgPSBwYXJzZUZsb2F0KGNzcy5oZWlnaHQpIHx8IDA7XG4gIGNvbnN0IGhhc09mZnNldCA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IG9mZnNldFdpZHRoID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpZHRoO1xuICBjb25zdCBvZmZzZXRIZWlnaHQgPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IGhlaWdodDtcbiAgY29uc3Qgc2hvdWxkRmFsbGJhY2sgPSByb3VuZCh3aWR0aCkgIT09IG9mZnNldFdpZHRoIHx8IHJvdW5kKGhlaWdodCkgIT09IG9mZnNldEhlaWdodDtcbiAgaWYgKHNob3VsZEZhbGxiYWNrKSB7XG4gICAgd2lkdGggPSBvZmZzZXRXaWR0aDtcbiAgICBoZWlnaHQgPSBvZmZzZXRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJDogc2hvdWxkRmFsbGJhY2tcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW53cmFwRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5jb250ZXh0RWxlbWVudCA6IGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjYWxlKGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHVud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gIGlmICghaXNIVE1MRWxlbWVudChkb21FbGVtZW50KSkge1xuICAgIHJldHVybiBjcmVhdGVDb29yZHMoMSk7XG4gIH1cbiAgY29uc3QgcmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJFxuICB9ID0gZ2V0Q3NzRGltZW5zaW9ucyhkb21FbGVtZW50KTtcbiAgbGV0IHggPSAoJCA/IHJvdW5kKHJlY3Qud2lkdGgpIDogcmVjdC53aWR0aCkgLyB3aWR0aDtcbiAgbGV0IHkgPSAoJCA/IHJvdW5kKHJlY3QuaGVpZ2h0KSA6IHJlY3QuaGVpZ2h0KSAvIGhlaWdodDtcblxuICAvLyAwLCBOYU4sIG9yIEluZmluaXR5IHNob3VsZCBhbHdheXMgZmFsbGJhY2sgdG8gMS5cblxuICBpZiAoIXggfHwgIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHggPSAxO1xuICB9XG4gIGlmICgheSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSB7XG4gICAgeSA9IDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuY29uc3Qgbm9PZmZzZXRzID0gLyojX19QVVJFX18qL2NyZWF0ZUNvb3JkcygwKTtcbmZ1bmN0aW9uIGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCkge1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGlmICghaXNXZWJLaXQoKSB8fCAhd2luLnZpc3VhbFZpZXdwb3J0KSB7XG4gICAgcmV0dXJuIG5vT2Zmc2V0cztcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IHdpbi52aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0LFxuICAgIHk6IHdpbi52aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3BcbiAgfTtcbn1cbmZ1bmN0aW9uIHNob3VsZEFkZFZpc3VhbE9mZnNldHMoZWxlbWVudCwgaXNGaXhlZCwgZmxvYXRpbmdPZmZzZXRQYXJlbnQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuICBpZiAoIWZsb2F0aW5nT2Zmc2V0UGFyZW50IHx8IGlzRml4ZWQgJiYgZmxvYXRpbmdPZmZzZXRQYXJlbnQgIT09IGdldFdpbmRvdyhlbGVtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZDtcbn1cblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGlmIChpbmNsdWRlU2NhbGUpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgICBpZiAoaXNFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBjb25zdCB2aXN1YWxPZmZzZXRzID0gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50LCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkgPyBnZXRWaXN1YWxPZmZzZXRzKGRvbUVsZW1lbnQpIDogY3JlYXRlQ29vcmRzKDApO1xuICBsZXQgeCA9IChjbGllbnRSZWN0LmxlZnQgKyB2aXN1YWxPZmZzZXRzLngpIC8gc2NhbGUueDtcbiAgbGV0IHkgPSAoY2xpZW50UmVjdC50b3AgKyB2aXN1YWxPZmZzZXRzLnkpIC8gc2NhbGUueTtcbiAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlLng7XG4gIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlLnk7XG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgY29uc3Qgd2luID0gZ2V0V2luZG93KGRvbUVsZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldFdpbiA9IG9mZnNldFBhcmVudCAmJiBpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSA/IGdldFdpbmRvdyhvZmZzZXRQYXJlbnQpIDogb2Zmc2V0UGFyZW50O1xuICAgIGxldCBjdXJyZW50V2luID0gd2luO1xuICAgIGxldCBjdXJyZW50SUZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGN1cnJlbnRXaW4pO1xuICAgIHdoaWxlIChjdXJyZW50SUZyYW1lICYmIG9mZnNldFBhcmVudCAmJiBvZmZzZXRXaW4gIT09IGN1cnJlbnRXaW4pIHtcbiAgICAgIGNvbnN0IGlmcmFtZVNjYWxlID0gZ2V0U2NhbGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBpZnJhbWVSZWN0ID0gY3VycmVudElGcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBsZWZ0ID0gaWZyYW1lUmVjdC5sZWZ0ICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50TGVmdCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdMZWZ0KSkgKiBpZnJhbWVTY2FsZS54O1xuICAgICAgY29uc3QgdG9wID0gaWZyYW1lUmVjdC50b3AgKyAoY3VycmVudElGcmFtZS5jbGllbnRUb3AgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nVG9wKSkgKiBpZnJhbWVTY2FsZS55O1xuICAgICAgeCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgeSAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgd2lkdGggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIGhlaWdodCAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgeCArPSBsZWZ0O1xuICAgICAgeSArPSB0b3A7XG4gICAgICBjdXJyZW50V2luID0gZ2V0V2luZG93KGN1cnJlbnRJRnJhbWUpO1xuICAgICAgY3VycmVudElGcmFtZSA9IGdldEZyYW1lRWxlbWVudChjdXJyZW50V2luKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3Qoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfSk7XG59XG5cbi8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbi8vIGluY29ycmVjdCBmb3IgUlRMLlxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50LCByZWN0KSB7XG4gIGNvbnN0IGxlZnRTY3JvbGwgPSBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG4gIGlmICghcmVjdCkge1xuICAgIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgbGVmdFNjcm9sbDtcbiAgfVxuICByZXR1cm4gcmVjdC5sZWZ0ICsgbGVmdFNjcm9sbDtcbn1cblxuZnVuY3Rpb24gZ2V0SFRNTE9mZnNldChkb2N1bWVudEVsZW1lbnQsIHNjcm9sbCwgaWdub3JlU2Nyb2xsYmFyWCkge1xuICBpZiAoaWdub3JlU2Nyb2xsYmFyWCA9PT0gdm9pZCAwKSB7XG4gICAgaWdub3JlU2Nyb2xsYmFyWCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGh0bWxSZWN0ID0gZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB4ID0gaHRtbFJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gKGlnbm9yZVNjcm9sbGJhclggPyAwIDpcbiAgLy8gUlRMIDxib2R5PiBzY3JvbGxiYXIuXG4gIGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50LCBodG1sUmVjdCkpO1xuICBjb25zdCB5ID0gaHRtbFJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcDtcbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QoX3JlZikge1xuICBsZXQge1xuICAgIGVsZW1lbnRzLFxuICAgIHJlY3QsXG4gICAgb2Zmc2V0UGFyZW50LFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBpc0ZpeGVkID0gc3RyYXRlZ3kgPT09ICdmaXhlZCc7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCB0b3BMYXllciA9IGVsZW1lbnRzID8gaXNUb3BMYXllcihlbGVtZW50cy5mbG9hdGluZykgOiBmYWxzZTtcbiAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnRFbGVtZW50IHx8IHRvcExheWVyICYmIGlzRml4ZWQpIHtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuICBsZXQgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIGxldCBzY2FsZSA9IGNyZWF0ZUNvb3JkcygxKTtcbiAgY29uc3Qgb2Zmc2V0cyA9IGNyZWF0ZUNvb3JkcygwKTtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ID0gb2Zmc2V0UmVjdC54ICsgb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgPSBvZmZzZXRSZWN0LnkgKyBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH1cbiAgfVxuICBjb25zdCBodG1sT2Zmc2V0ID0gZG9jdW1lbnRFbGVtZW50ICYmICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCA/IGdldEhUTUxPZmZzZXQoZG9jdW1lbnRFbGVtZW50LCBzY3JvbGwsIHRydWUpIDogY3JlYXRlQ29vcmRzKDApO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoICogc2NhbGUueCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICogc2NhbGUueSxcbiAgICB4OiByZWN0LnggKiBzY2FsZS54IC0gc2Nyb2xsLnNjcm9sbExlZnQgKiBzY2FsZS54ICsgb2Zmc2V0cy54ICsgaHRtbE9mZnNldC54LFxuICAgIHk6IHJlY3QueSAqIHNjYWxlLnkgLSBzY3JvbGwuc2Nyb2xsVG9wICogc2NhbGUueSArIG9mZnNldHMueSArIGh0bWxPZmZzZXQueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0cyhlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKSk7XG59XG5cbi8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGUuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpO1xuICBjb25zdCBib2R5ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkuY2xpZW50V2lkdGgpO1xuICBjb25zdCBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5jbGllbnRIZWlnaHQpO1xuICBsZXQgeCA9IC1zY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIGNvbnN0IHkgPSAtc2Nyb2xsLnNjcm9sbFRvcDtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkuY2xpZW50V2lkdGgpIC0gd2lkdGg7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICBsZXQgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICBsZXQgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDtcbiAgICBjb25zdCB2aXN1YWxWaWV3cG9ydEJhc2VkID0gaXNXZWJLaXQoKTtcbiAgICBpZiAoIXZpc3VhbFZpZXdwb3J0QmFzZWQgfHwgdmlzdWFsVmlld3BvcnRCYXNlZCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuLy8gUmV0dXJucyB0aGUgaW5uZXIgY2xpZW50IHJlY3QsIHN1YnRyYWN0aW5nIHNjcm9sbGJhcnMgaWYgcHJlc2VudC5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgdHJ1ZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICBjb25zdCB0b3AgPSBjbGllbnRSZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICBjb25zdCBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICBjb25zdCBzY2FsZSA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRTY2FsZShlbGVtZW50KSA6IGNyZWF0ZUNvb3JkcygxKTtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoICogc2NhbGUueDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY2FsZS55O1xuICBjb25zdCB4ID0gbGVmdCAqIHNjYWxlLng7XG4gIGNvbnN0IHkgPSB0b3AgKiBzY2FsZS55O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkge1xuICBsZXQgcmVjdDtcbiAgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09ICd2aWV3cG9ydCcpIHtcbiAgICByZWN0ID0gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KTtcbiAgfSBlbHNlIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAnZG9jdW1lbnQnKSB7XG4gICAgcmVjdCA9IGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpO1xuICB9IGVsc2UgaWYgKGlzRWxlbWVudChjbGlwcGluZ0FuY2VzdG9yKSkge1xuICAgIHJlY3QgPSBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCk7XG4gICAgcmVjdCA9IHtcbiAgICAgIHg6IGNsaXBwaW5nQW5jZXN0b3IueCAtIHZpc3VhbE9mZnNldHMueCxcbiAgICAgIHk6IGNsaXBwaW5nQW5jZXN0b3IueSAtIHZpc3VhbE9mZnNldHMueSxcbiAgICAgIHdpZHRoOiBjbGlwcGluZ0FuY2VzdG9yLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjbGlwcGluZ0FuY2VzdG9yLmhlaWdodFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3QocmVjdCk7XG59XG5mdW5jdGlvbiBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IoZWxlbWVudCwgc3RvcE5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmIChwYXJlbnROb2RlID09PSBzdG9wTm9kZSB8fCAhaXNFbGVtZW50KHBhcmVudE5vZGUpIHx8IGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnROb2RlKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fCBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IocGFyZW50Tm9kZSwgc3RvcE5vZGUpO1xufVxuXG4vLyBBIFwiY2xpcHBpbmcgYW5jZXN0b3JcIiBpcyBhbiBgb3ZlcmZsb3dgIGVsZW1lbnQgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIGNoaWxkIGVsZW1lbnRzLiBUaGlzIHJldHVybnMgYWxsIGNsaXBwaW5nIGFuY2VzdG9yc1xuLy8gb2YgdGhlIGdpdmVuIGVsZW1lbnQgdXAgdGhlIHRyZWUuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMoZWxlbWVudCwgY2FjaGUpIHtcbiAgY29uc3QgY2FjaGVkUmVzdWx0ID0gY2FjaGUuZ2V0KGVsZW1lbnQpO1xuICBpZiAoY2FjaGVkUmVzdWx0KSB7XG4gICAgcmV0dXJuIGNhY2hlZFJlc3VsdDtcbiAgfVxuICBsZXQgcmVzdWx0ID0gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZWxlbWVudCwgW10sIGZhbHNlKS5maWx0ZXIoZWwgPT4gaXNFbGVtZW50KGVsKSAmJiBnZXROb2RlTmFtZShlbCkgIT09ICdib2R5Jyk7XG4gIGxldCBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gIGNvbnN0IGVsZW1lbnRJc0ZpeGVkID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgbGV0IGN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICB3aGlsZSAoaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZUlzQ29udGFpbmluZyA9IGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKTtcbiAgICBpZiAoIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRHJvcEN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlIDogIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICEhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgJiYgWydhYnNvbHV0ZScsICdmaXhlZCddLmluY2x1ZGVzKGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlLnBvc2l0aW9uKSB8fCBpc092ZXJmbG93RWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBjdXJyZW50Tm9kZSk7XG4gICAgaWYgKHNob3VsZERyb3BDdXJyZW50Tm9kZSkge1xuICAgICAgLy8gRHJvcCBub24tY29udGFpbmluZyBibG9ja3MuXG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGFuY2VzdG9yID0+IGFuY2VzdG9yICE9PSBjdXJyZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlY29yZCBsYXN0IGNvbnRhaW5pbmcgYmxvY2sgZm9yIG5leHQgaXRlcmF0aW9uLlxuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIGNhY2hlLnNldChlbGVtZW50LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBhbmNlc3RvcnMuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoX3JlZikge1xuICBsZXQge1xuICAgIGVsZW1lbnQsXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBlbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nQW5jZXN0b3JzJyA/IGlzVG9wTGF5ZXIoZWxlbWVudCkgPyBbXSA6IGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCB0aGlzLl9jKSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIGNvbnN0IGNsaXBwaW5nQW5jZXN0b3JzID0gWy4uLmVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycywgcm9vdEJvdW5kYXJ5XTtcbiAgY29uc3QgZmlyc3RDbGlwcGluZ0FuY2VzdG9yID0gY2xpcHBpbmdBbmNlc3RvcnNbMF07XG4gIGNvbnN0IGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nQW5jZXN0b3JzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdBbmNlc3RvcikgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBmaXJzdENsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIGhlaWdodDogY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3AsXG4gICAgeDogY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgeTogY2xpcHBpbmdSZWN0LnRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgY29uc3Qge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodFxuICB9ID0gZ2V0Q3NzRGltZW5zaW9ucyhlbGVtZW50KTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQoZWxlbWVudCwgb2Zmc2V0UGFyZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGlzRml4ZWQgPSBzdHJhdGVneSA9PT0gJ2ZpeGVkJztcbiAgY29uc3QgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCB0cnVlLCBpc0ZpeGVkLCBvZmZzZXRQYXJlbnQpO1xuICBsZXQgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50KSB7XG4gICAgICBjb25zdCBvZmZzZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgLy8gSWYgdGhlIDxib2R5PiBzY3JvbGxiYXIgYXBwZWFycyBvbiB0aGUgbGVmdCAoZS5nLiBSVEwgc3lzdGVtcykuIFVzZVxuICAgICAgLy8gRmlyZWZveCB3aXRoIGxheW91dC5zY3JvbGxiYXIuc2lkZSA9IDMgaW4gYWJvdXQ6Y29uZmlnIHRvIHRlc3QgdGhpcy5cbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaHRtbE9mZnNldCA9IGRvY3VtZW50RWxlbWVudCAmJiAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQgPyBnZXRIVE1MT2Zmc2V0KGRvY3VtZW50RWxlbWVudCwgc2Nyb2xsKSA6IGNyZWF0ZUNvb3JkcygwKTtcbiAgY29uc3QgeCA9IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54IC0gaHRtbE9mZnNldC54O1xuICBjb25zdCB5ID0gcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55IC0gaHRtbE9mZnNldC55O1xuICByZXR1cm4ge1xuICAgIHgsXG4gICAgeSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljUG9zaXRpb25lZChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJztcbn1cblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwb2x5ZmlsbCkge1xuICAgIHJldHVybiBwb2x5ZmlsbChlbGVtZW50KTtcbiAgfVxuICBsZXQgcmF3T2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cbiAgLy8gRmlyZWZveCByZXR1cm5zIHRoZSA8aHRtbD4gZWxlbWVudCBhcyB0aGUgb2Zmc2V0UGFyZW50IGlmIGl0J3Mgbm9uLXN0YXRpYyxcbiAgLy8gd2hpbGUgQ2hyb21lIGFuZCBTYWZhcmkgcmV0dXJuIHRoZSA8Ym9keT4gZWxlbWVudC4gVGhlIDxib2R5PiBlbGVtZW50IG11c3RcbiAgLy8gYmUgdXNlZCB0byBwZXJmb3JtIHRoZSBjb3JyZWN0IGNhbGN1bGF0aW9ucyBldmVuIGlmIHRoZSA8aHRtbD4gZWxlbWVudCBpc1xuICAvLyBub24tc3RhdGljLlxuICBpZiAoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpID09PSByYXdPZmZzZXRQYXJlbnQpIHtcbiAgICByYXdPZmZzZXRQYXJlbnQgPSByYXdPZmZzZXRQYXJlbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG4gIHJldHVybiByYXdPZmZzZXRQYXJlbnQ7XG59XG5cbi8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoaXNUb3BMYXllcihlbGVtZW50KSkge1xuICAgIHJldHVybiB3aW47XG4gIH1cbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgbGV0IHN2Z09mZnNldFBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgd2hpbGUgKHN2Z09mZnNldFBhcmVudCAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKHN2Z09mZnNldFBhcmVudCkpIHtcbiAgICAgIGlmIChpc0VsZW1lbnQoc3ZnT2Zmc2V0UGFyZW50KSAmJiAhaXNTdGF0aWNQb3NpdGlvbmVkKHN2Z09mZnNldFBhcmVudCkpIHtcbiAgICAgICAgcmV0dXJuIHN2Z09mZnNldFBhcmVudDtcbiAgICAgIH1cbiAgICAgIHN2Z09mZnNldFBhcmVudCA9IGdldFBhcmVudE5vZGUoc3ZnT2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbjtcbiAgfVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCk7XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50LCBwb2x5ZmlsbCk7XG4gIH1cbiAgaWYgKG9mZnNldFBhcmVudCAmJiBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUob2Zmc2V0UGFyZW50KSAmJiBpc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSAmJiAhaXNDb250YWluaW5nQmxvY2sob2Zmc2V0UGFyZW50KSkge1xuICAgIHJldHVybiB3aW47XG4gIH1cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luO1xufVxuXG5jb25zdCBnZXRFbGVtZW50UmVjdHMgPSBhc3luYyBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBnZXRPZmZzZXRQYXJlbnRGbiA9IHRoaXMuZ2V0T2Zmc2V0UGFyZW50IHx8IGdldE9mZnNldFBhcmVudDtcbiAgY29uc3QgZ2V0RGltZW5zaW9uc0ZuID0gdGhpcy5nZXREaW1lbnNpb25zO1xuICBjb25zdCBmbG9hdGluZ0RpbWVuc2lvbnMgPSBhd2FpdCBnZXREaW1lbnNpb25zRm4oZGF0YS5mbG9hdGluZyk7XG4gIHJldHVybiB7XG4gICAgcmVmZXJlbmNlOiBnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudChkYXRhLnJlZmVyZW5jZSwgYXdhaXQgZ2V0T2Zmc2V0UGFyZW50Rm4oZGF0YS5mbG9hdGluZyksIGRhdGEuc3RyYXRlZ3kpLFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiBmbG9hdGluZ0RpbWVuc2lvbnMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZsb2F0aW5nRGltZW5zaW9ucy5oZWlnaHRcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpc1JUTChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG59XG5cbmNvbnN0IHBsYXRmb3JtID0ge1xuICBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCxcbiAgZ2V0RG9jdW1lbnRFbGVtZW50LFxuICBnZXRDbGlwcGluZ1JlY3QsXG4gIGdldE9mZnNldFBhcmVudCxcbiAgZ2V0RWxlbWVudFJlY3RzLFxuICBnZXRDbGllbnRSZWN0cyxcbiAgZ2V0RGltZW5zaW9ucyxcbiAgZ2V0U2NhbGUsXG4gIGlzRWxlbWVudCxcbiAgaXNSVExcbn07XG5cbmZ1bmN0aW9uIHJlY3RzQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnkgJiYgYS53aWR0aCA9PT0gYi53aWR0aCAmJiBhLmhlaWdodCA9PT0gYi5oZWlnaHQ7XG59XG5cbi8vIGh0dHBzOi8vc2FtdGhvci5hdS8yMDIxL29ic2VydmluZy1kb20vXG5mdW5jdGlvbiBvYnNlcnZlTW92ZShlbGVtZW50LCBvbk1vdmUpIHtcbiAgbGV0IGlvID0gbnVsbDtcbiAgbGV0IHRpbWVvdXRJZDtcbiAgY29uc3Qgcm9vdCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgX2lvO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIChfaW8gPSBpbykgPT0gbnVsbCB8fCBfaW8uZGlzY29ubmVjdCgpO1xuICAgIGlvID0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiByZWZyZXNoKHNraXAsIHRocmVzaG9sZCkge1xuICAgIGlmIChza2lwID09PSB2b2lkIDApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gICAgY29uc3QgZWxlbWVudFJlY3RGb3JSb290TWFyZ2luID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0LFxuICAgICAgdG9wLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9ID0gZWxlbWVudFJlY3RGb3JSb290TWFyZ2luO1xuICAgIGlmICghc2tpcCkge1xuICAgICAgb25Nb3ZlKCk7XG4gICAgfVxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnNldFRvcCA9IGZsb29yKHRvcCk7XG4gICAgY29uc3QgaW5zZXRSaWdodCA9IGZsb29yKHJvb3QuY2xpZW50V2lkdGggLSAobGVmdCArIHdpZHRoKSk7XG4gICAgY29uc3QgaW5zZXRCb3R0b20gPSBmbG9vcihyb290LmNsaWVudEhlaWdodCAtICh0b3AgKyBoZWlnaHQpKTtcbiAgICBjb25zdCBpbnNldExlZnQgPSBmbG9vcihsZWZ0KTtcbiAgICBjb25zdCByb290TWFyZ2luID0gLWluc2V0VG9wICsgXCJweCBcIiArIC1pbnNldFJpZ2h0ICsgXCJweCBcIiArIC1pbnNldEJvdHRvbSArIFwicHggXCIgKyAtaW5zZXRMZWZ0ICsgXCJweFwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290TWFyZ2luLFxuICAgICAgdGhyZXNob2xkOiBtYXgoMCwgbWluKDEsIHRocmVzaG9sZCkpIHx8IDFcbiAgICB9O1xuICAgIGxldCBpc0ZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBoYW5kbGVPYnNlcnZlKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gZW50cmllc1swXS5pbnRlcnNlY3Rpb25SYXRpbztcbiAgICAgIGlmIChyYXRpbyAhPT0gdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICghaXNGaXJzdFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybiByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyYXRpbykge1xuICAgICAgICAgIC8vIElmIHRoZSByZWZlcmVuY2UgaXMgY2xpcHBlZCwgdGhlIHJhdGlvIGlzIDAuIFRocm90dGxlIHRoZSByZWZyZXNoXG4gICAgICAgICAgLy8gdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wIG9mIHVwZGF0ZXMuXG4gICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZWZyZXNoKGZhbHNlLCAxZS03KTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZyZXNoKGZhbHNlLCByYXRpbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyYXRpbyA9PT0gMSAmJiAhcmVjdHNBcmVFcXVhbChlbGVtZW50UmVjdEZvclJvb3RNYXJnaW4sIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKSB7XG4gICAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCBldmVuIHRob3VnaCB0aGUgcmF0aW8gaXMgcmVwb3J0ZWQgYXMgMSwgdGhlXG4gICAgICAgIC8vIGVsZW1lbnQgaXMgbm90IGFjdHVhbGx5IGZ1bGx5IHdpdGhpbiB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIncyByb290XG4gICAgICAgIC8vIGFyZWEgYW55bW9yZS4gVGhpcyBjYW4gaGFwcGVuIHVuZGVyIHBlcmZvcm1hbmNlIGNvbnN0cmFpbnRzLiBUaGlzIG1heVxuICAgICAgICAvLyBiZSBhIGJ1ZyBpbiB0aGUgYnJvd3NlcidzIEludGVyc2VjdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uLiBUb1xuICAgICAgICAvLyB3b3JrIGFyb3VuZCB0aGlzLCB3ZSBjb21wYXJlIHRoZSBlbGVtZW50J3MgYm91bmRpbmcgcmVjdCBub3cgd2l0aFxuICAgICAgICAvLyB3aGF0IGl0IHdhcyBhdCB0aGUgdGltZSB3ZSBjcmVhdGVkIHRoZSBJbnRlcnNlY3Rpb25PYnNlcnZlci4gSWYgdGhleVxuICAgICAgICAvLyBhcmUgbm90IGVxdWFsIHRoZW4gdGhlIGVsZW1lbnQgbW92ZWQsIHNvIHdlIHJlZnJlc2guXG4gICAgICAgIHJlZnJlc2goKTtcbiAgICAgIH1cbiAgICAgIGlzRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBPbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IGEgYGRvY3VtZW50YCBhcyB0aGUgcm9vdCBhbmQgd2lsbCB0aHJvdyBhblxuICAgIC8vIGVycm9yLlxuICAgIHRyeSB7XG4gICAgICBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVPYnNlcnZlLCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC8vIEhhbmRsZSA8aWZyYW1lPnNcbiAgICAgICAgcm9vdDogcm9vdC5vd25lckRvY3VtZW50XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVPYnNlcnZlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaW8ub2JzZXJ2ZShlbGVtZW50KTtcbiAgfVxuICByZWZyZXNoKHRydWUpO1xuICByZXR1cm4gY2xlYW51cDtcbn1cblxuLyoqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHdoZW4gbmVjZXNzYXJ5LlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW4gdGhlIGZsb2F0aW5nIGVsZW1lbnQgaXMgbW91bnRlZCBvbiB0aGUgRE9NIG9yXG4gKiB2aXNpYmxlIG9uIHRoZSBzY3JlZW4uXG4gKiBAcmV0dXJucyBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpc1xuICogcmVtb3ZlZCBmcm9tIHRoZSBET00gb3IgaGlkZGVuIGZyb20gdGhlIHNjcmVlbi5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvVXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGF1dG9VcGRhdGUocmVmZXJlbmNlLCBmbG9hdGluZywgdXBkYXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIGFuY2VzdG9yU2Nyb2xsID0gdHJ1ZSxcbiAgICBhbmNlc3RvclJlc2l6ZSA9IHRydWUsXG4gICAgZWxlbWVudFJlc2l6ZSA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJyxcbiAgICBsYXlvdXRTaGlmdCA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJyxcbiAgICBhbmltYXRpb25GcmFtZSA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByZWZlcmVuY2VFbCA9IHVud3JhcEVsZW1lbnQocmVmZXJlbmNlKTtcbiAgY29uc3QgYW5jZXN0b3JzID0gYW5jZXN0b3JTY3JvbGwgfHwgYW5jZXN0b3JSZXNpemUgPyBbLi4uKHJlZmVyZW5jZUVsID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMocmVmZXJlbmNlRWwpIDogW10pLCAuLi5nZXRPdmVyZmxvd0FuY2VzdG9ycyhmbG9hdGluZyldIDogW107XG4gIGFuY2VzdG9ycy5mb3JFYWNoKGFuY2VzdG9yID0+IHtcbiAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICBhbmNlc3RvclJlc2l6ZSAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICB9KTtcbiAgY29uc3QgY2xlYW51cElvID0gcmVmZXJlbmNlRWwgJiYgbGF5b3V0U2hpZnQgPyBvYnNlcnZlTW92ZShyZWZlcmVuY2VFbCwgdXBkYXRlKSA6IG51bGw7XG4gIGxldCByZW9ic2VydmVGcmFtZSA9IC0xO1xuICBsZXQgcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICBpZiAoZWxlbWVudFJlc2l6ZSkge1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKF9yZWYgPT4ge1xuICAgICAgbGV0IFtmaXJzdEVudHJ5XSA9IF9yZWY7XG4gICAgICBpZiAoZmlyc3RFbnRyeSAmJiBmaXJzdEVudHJ5LnRhcmdldCA9PT0gcmVmZXJlbmNlRWwgJiYgcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgLy8gUHJldmVudCB1cGRhdGUgbG9vcHMgd2hlbiB1c2luZyB0aGUgYHNpemVgIG1pZGRsZXdhcmUuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZy11aS9mbG9hdGluZy11aS9pc3N1ZXMvMTc0MFxuICAgICAgICByZXNpemVPYnNlcnZlci51bm9ic2VydmUoZmxvYXRpbmcpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZW9ic2VydmVGcmFtZSk7XG4gICAgICAgIHJlb2JzZXJ2ZUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB2YXIgX3Jlc2l6ZU9ic2VydmVyO1xuICAgICAgICAgIChfcmVzaXplT2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcikgPT0gbnVsbCB8fCBfcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShmbG9hdGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gICAgaWYgKHJlZmVyZW5jZUVsICYmICFhbmltYXRpb25GcmFtZSkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShyZWZlcmVuY2VFbCk7XG4gICAgfVxuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICB9XG4gIGxldCBmcmFtZUlkO1xuICBsZXQgcHJldlJlZlJlY3QgPSBhbmltYXRpb25GcmFtZSA/IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpIDogbnVsbDtcbiAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZnJhbWVMb29wKCk7XG4gIH1cbiAgZnVuY3Rpb24gZnJhbWVMb29wKCkge1xuICAgIGNvbnN0IG5leHRSZWZSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSk7XG4gICAgaWYgKHByZXZSZWZSZWN0ICYmICFyZWN0c0FyZUVxdWFsKHByZXZSZWZSZWN0LCBuZXh0UmVmUmVjdCkpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgICBwcmV2UmVmUmVjdCA9IG5leHRSZWZSZWN0O1xuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWVMb29wKTtcbiAgfVxuICB1cGRhdGUoKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICB2YXIgX3Jlc2l6ZU9ic2VydmVyMjtcbiAgICBhbmNlc3RvcnMuZm9yRWFjaChhbmNlc3RvciA9PiB7XG4gICAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUpO1xuICAgICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwSW8gPT0gbnVsbCB8fCBjbGVhbnVwSW8oKTtcbiAgICAoX3Jlc2l6ZU9ic2VydmVyMiA9IHJlc2l6ZU9ic2VydmVyKSA9PSBudWxsIHx8IF9yZXNpemVPYnNlcnZlcjIuZGlzY29ubmVjdCgpO1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB3aXRoIGFuIG9iamVjdCBvZiBvdmVyZmxvdyBzaWRlIG9mZnNldHMgdGhhdCBkZXRlcm1pbmUgaG93IG11Y2ggdGhlXG4gKiBlbGVtZW50IGlzIG92ZXJmbG93aW5nIGEgZ2l2ZW4gY2xpcHBpbmcgYm91bmRhcnkgb24gZWFjaCBzaWRlLlxuICogLSBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBib3VuZGFyeSBieSB0aGF0IG51bWJlciBvZiBwaXhlbHNcbiAqIC0gbmVnYXRpdmUgPSBob3cgbWFueSBwaXhlbHMgbGVmdCBiZWZvcmUgaXQgd2lsbCBvdmVyZmxvd1xuICogLSAwID0gbGllcyBmbHVzaCB3aXRoIHRoZSBib3VuZGFyeVxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2RldGVjdE92ZXJmbG93XG4gKi9cbmNvbnN0IGRldGVjdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3ckMTtcblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcGxhY2VtZW50IGJ5IHRyYW5zbGF0aW5nIHRoZSBmbG9hdGluZyBlbGVtZW50IGFsb25nIHRoZVxuICogc3BlY2lmaWVkIGF4ZXMuXG4gKiBBIG51bWJlciAoc2hvcnRoYW5kIGZvciBgbWFpbkF4aXNgIG9yIGRpc3RhbmNlKSwgb3IgYW4gYXhlcyBjb25maWd1cmF0aW9uXG4gKiBvYmplY3QgbWF5IGJlIHBhc3NlZC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9vZmZzZXRcbiAqL1xuY29uc3Qgb2Zmc2V0ID0gb2Zmc2V0JDE7XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGNob29zaW5nIHRoZSBwbGFjZW1lbnRcbiAqIHRoYXQgaGFzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZSBhdXRvbWF0aWNhbGx5LCB3aXRob3V0IG5lZWRpbmcgdG8gc3BlY2lmeSBhXG4gKiBwcmVmZXJyZWQgcGxhY2VtZW50LiBBbHRlcm5hdGl2ZSB0byBgZmxpcGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudFxuICovXG5jb25zdCBhdXRvUGxhY2VtZW50ID0gYXV0b1BsYWNlbWVudCQxO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBzaGlmdGluZyBpdCBpbiBvcmRlciB0b1xuICoga2VlcCBpdCBpbiB2aWV3IHdoZW4gaXQgd2lsbCBvdmVyZmxvdyB0aGUgY2xpcHBpbmcgYm91bmRhcnkuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2hpZnRcbiAqL1xuY29uc3Qgc2hpZnQgPSBzaGlmdCQxO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBmbGlwcGluZyB0aGUgYHBsYWNlbWVudGBcbiAqIGluIG9yZGVyIHRvIGtlZXAgaXQgaW4gdmlldyB3aGVuIHRoZSBwcmVmZXJyZWQgcGxhY2VtZW50KHMpIHdpbGwgb3ZlcmZsb3cgdGhlXG4gKiBjbGlwcGluZyBib3VuZGFyeS4gQWx0ZXJuYXRpdmUgdG8gYGF1dG9QbGFjZW1lbnRgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2ZsaXBcbiAqL1xuY29uc3QgZmxpcCA9IGZsaXAkMTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRoYXQgYWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHNpemUgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQg4oCUXG4gKiBmb3IgaW5zdGFuY2UsIHByZXZlbnQgaXQgZnJvbSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgYm91bmRhcnkgb3IgbWF0Y2ggdGhlXG4gKiB3aWR0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2l6ZVxuICovXG5jb25zdCBzaXplID0gc2l6ZSQxO1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gaGlkZSB0aGUgZmxvYXRpbmcgZWxlbWVudCBpbiBhcHBsaWNhYmxlIHNpdHVhdGlvbnMsIHN1Y2ggYXNcbiAqIHdoZW4gaXQgaXMgbm90IGluIHRoZSBzYW1lIGNsaXBwaW5nIGNvbnRleHQgYXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2hpZGVcbiAqL1xuY29uc3QgaGlkZSA9IGhpZGUkMTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgc28gdGhhdCBpdFxuICogYXBwZWFycyBjZW50ZXJlZCB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXJyb3dcbiAqL1xuY29uc3QgYXJyb3cgPSBhcnJvdyQxO1xuXG4vKipcbiAqIFByb3ZpZGVzIGltcHJvdmVkIHBvc2l0aW9uaW5nIGZvciBpbmxpbmUgcmVmZXJlbmNlIGVsZW1lbnRzIHRoYXQgY2FuIHNwYW5cbiAqIG92ZXIgbXVsdGlwbGUgbGluZXMsIHN1Y2ggYXMgaHlwZXJsaW5rcyBvciByYW5nZSBzZWxlY3Rpb25zLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2lubGluZVxuICovXG5jb25zdCBpbmxpbmUgPSBpbmxpbmUkMTtcblxuLyoqXG4gKiBCdWlsdC1pbiBgbGltaXRlcmAgdGhhdCB3aWxsIHN0b3AgYHNoaWZ0KClgIGF0IGEgY2VydGFpbiBwb2ludC5cbiAqL1xuY29uc3QgbGltaXRTaGlmdCA9IGxpbWl0U2hpZnQkMTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgZ2l2ZW4gcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cbmNvbnN0IGNvbXB1dGVQb3NpdGlvbiA9IChyZWZlcmVuY2UsIGZsb2F0aW5nLCBvcHRpb25zKSA9PiB7XG4gIC8vIFRoaXMgY2FjaGVzIHRoZSBleHBlbnNpdmUgYGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9yc2AgZnVuY3Rpb24gc28gdGhhdFxuICAvLyBtdWx0aXBsZSBsaWZlY3ljbGUgcmVzZXRzIHJlLXVzZSB0aGUgc2FtZSByZXN1bHQuIEl0IG9ubHkgbGl2ZXMgZm9yIGFcbiAgLy8gc2luZ2xlIGNhbGwuIElmIG90aGVyIGZ1bmN0aW9ucyBiZWNvbWUgZXhwZW5zaXZlLCB3ZSBjYW4gYWRkIHRoZW0gYXMgd2VsbC5cbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgcGxhdGZvcm0sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBwbGF0Zm9ybVdpdGhDYWNoZSA9IHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLnBsYXRmb3JtLFxuICAgIF9jOiBjYWNoZVxuICB9O1xuICByZXR1cm4gY29tcHV0ZVBvc2l0aW9uJDEocmVmZXJlbmNlLCBmbG9hdGluZywge1xuICAgIC4uLm1lcmdlZE9wdGlvbnMsXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtV2l0aENhY2hlXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYXJyb3csIGF1dG9QbGFjZW1lbnQsIGF1dG9VcGRhdGUsIGNvbXB1dGVQb3NpdGlvbiwgZGV0ZWN0T3ZlcmZsb3csIGZsaXAsIGhpZGUsIGlubGluZSwgbGltaXRTaGlmdCwgb2Zmc2V0LCBwbGF0Zm9ybSwgc2hpZnQsIHNpemUgfTtcbiIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxudmFyIGluZGV4ID0gdXNlTGF5b3V0RWZmZWN0IDtcblxuZXhwb3J0IHsgaW5kZXggYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMic7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcywgY3NzIGFzIGNzcyQyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX3R5cGVvZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YnO1xuaW1wb3J0IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgYXV0b1VwZGF0ZSB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0IHVzZUxheW91dEVmZmVjdCBmcm9tICd1c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0JztcblxudmFyIF9leGNsdWRlZCQ0ID0gW1wiY2xhc3NOYW1lXCIsIFwiY2xlYXJWYWx1ZVwiLCBcImN4XCIsIFwiZ2V0U3R5bGVzXCIsIFwiZ2V0Q2xhc3NOYW1lc1wiLCBcImdldFZhbHVlXCIsIFwiaGFzVmFsdWVcIiwgXCJpc011bHRpXCIsIFwiaXNSdGxcIiwgXCJvcHRpb25zXCIsIFwic2VsZWN0T3B0aW9uXCIsIFwic2VsZWN0UHJvcHNcIiwgXCJzZXRWYWx1ZVwiLCBcInRoZW1lXCJdO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOTyBPUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsYXNzIE5hbWUgUHJlZml4ZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgY29tcG9uZW50IHN0YXRlIGZvciBzdHlsaW5nIHdpdGggY2xhc3MgbmFtZXMuXG5cbiBFeHBlY3RzIGFuIGFycmF5IG9mIHN0cmluZ3MgT1IgYSBzdHJpbmcvb2JqZWN0IHBhaXI6XG4gLSBjbGFzc05hbWUoWydjb21wJywgJ2NvbXAtYXJnJywgJ2NvbXAtYXJnLTInXSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLWFyZyByZWFjdC1zZWxlY3RfX2NvbXAtYXJnLTInXG4gLSBjbGFzc05hbWUoJ2NvbXAnLCB7IHNvbWU6IHRydWUsIHN0YXRlOiBmYWxzZSB9KVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtLXNvbWUnXG4qL1xuZnVuY3Rpb24gYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH0gZWxzZSBpZiAobmFtZVswXSA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdfXycgKyBuYW1lO1xuICB9XG59XG5mdW5jdGlvbiBjbGFzc05hbWVzKHByZWZpeCwgc3RhdGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzTmFtZUxpc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzTmFtZUxpc3RbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHZhciBhcnIgPSBbXS5jb25jYXQoY2xhc3NOYW1lTGlzdCk7XG4gIGlmIChzdGF0ZSAmJiBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHN0YXRlW2tleV0pIHtcbiAgICAgICAgYXJyLnB1c2goXCJcIi5jb25jYXQoYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBrZXkpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLm1hcChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBTdHJpbmcoaSkudHJpbSgpO1xuICB9KS5qb2luKCcgJyk7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsZWFuIFZhbHVlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNsZWFuVmFsdWUgPSBmdW5jdGlvbiBjbGVhblZhbHVlKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmZpbHRlcihCb29sZWFuKTtcbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgcmV0dXJuIFt2YWx1ZV07XG4gIHJldHVybiBbXTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gQ29tbW9uIFByb3BzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNsZWFuQ29tbW9uUHJvcHMgPSBmdW5jdGlvbiBjbGVhbkNvbW1vblByb3BzKHByb3BzKSB7XG4gIC8vY2xhc3NOYW1lXG4gIHByb3BzLmNsYXNzTmFtZTtcbiAgICBwcm9wcy5jbGVhclZhbHVlO1xuICAgIHByb3BzLmN4O1xuICAgIHByb3BzLmdldFN0eWxlcztcbiAgICBwcm9wcy5nZXRDbGFzc05hbWVzO1xuICAgIHByb3BzLmdldFZhbHVlO1xuICAgIHByb3BzLmhhc1ZhbHVlO1xuICAgIHByb3BzLmlzTXVsdGk7XG4gICAgcHJvcHMuaXNSdGw7XG4gICAgcHJvcHMub3B0aW9ucztcbiAgICBwcm9wcy5zZWxlY3RPcHRpb247XG4gICAgcHJvcHMuc2VsZWN0UHJvcHM7XG4gICAgcHJvcHMuc2V0VmFsdWU7XG4gICAgcHJvcHMudGhlbWU7XG4gICAgdmFyIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCQ0KTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGlubmVyUHJvcHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgU3R5bGUgUHJvcHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgZ2V0U3R5bGVQcm9wcyA9IGZ1bmN0aW9uIGdldFN0eWxlUHJvcHMocHJvcHMsIG5hbWUsIGNsYXNzTmFtZXNTdGF0ZSkge1xuICB2YXIgY3ggPSBwcm9wcy5jeCxcbiAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgZ2V0Q2xhc3NOYW1lcyA9IHByb3BzLmdldENsYXNzTmFtZXMsXG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICByZXR1cm4ge1xuICAgIGNzczogZ2V0U3R5bGVzKG5hbWUsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KGNsYXNzTmFtZXNTdGF0ZSAhPT0gbnVsbCAmJiBjbGFzc05hbWVzU3RhdGUgIT09IHZvaWQgMCA/IGNsYXNzTmFtZXNTdGF0ZSA6IHt9LCBnZXRDbGFzc05hbWVzKG5hbWUsIHByb3BzKSwgY2xhc3NOYW1lKVxuICB9O1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIYW5kbGUgSW5wdXQgQ2hhbmdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSkge1xuICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgIHZhciBfbmV3VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIGlmICh0eXBlb2YgX25ld1ZhbHVlID09PSAnc3RyaW5nJykgcmV0dXJuIF9uZXdWYWx1ZTtcbiAgfVxuICByZXR1cm4gaW5wdXRWYWx1ZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KGVsKSB7XG4gIHJldHVybiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCB3aW5kb3ddLmluZGV4T2YoZWwpID4gLTE7XG59XG5cbi8vIE5vcm1hbGl6ZWQgU2Nyb2xsIFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZWRIZWlnaHQoZWwpIHtcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGVsLmNsaWVudEhlaWdodDtcbn1cblxuLy8gTm9ybWFsaXplZCBzY3JvbGxUbyAmIHNjcm9sbFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xufVxuZnVuY3Rpb24gc2Nyb2xsVG8oZWwsIHRvcCkge1xuICAvLyB3aXRoIGEgc2Nyb2xsIGRpc3RhbmNlLCB3ZSBwZXJmb3JtIHNjcm9sbCBvbiB0aGUgZWxlbWVudFxuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHRvcCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsLnNjcm9sbFRvcCA9IHRvcDtcbn1cblxuLy8gR2V0IFNjcm9sbCBQYXJlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgZXhjbHVkZVN0YXRpY1BhcmVudCA9IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICB2YXIgb3ZlcmZsb3dSeCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBmb3IgKHZhciBwYXJlbnQgPSBlbGVtZW50OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDspIHtcbiAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICBpZiAoZXhjbHVkZVN0YXRpY1BhcmVudCAmJiBzdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAob3ZlcmZsb3dSeC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZICsgc3R5bGUub3ZlcmZsb3dYKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbn1cbmZ1bmN0aW9uIGFuaW1hdGVkU2Nyb2xsVG8oZWxlbWVudCwgdG8pIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAyMDA7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbm9vcDtcbiAgdmFyIHN0YXJ0ID0gZ2V0U2Nyb2xsVG9wKGVsZW1lbnQpO1xuICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgdmFyIGluY3JlbWVudCA9IDEwO1xuICB2YXIgY3VycmVudFRpbWUgPSAwO1xuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcbiAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIGFuaW1hdGVTY3JvbGwoKTtcbn1cblxuLy8gU2Nyb2xsIEludG8gVmlld1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG1lbnVFbCwgZm9jdXNlZEVsKSB7XG4gIHZhciBtZW51UmVjdCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgb3ZlclNjcm9sbCA9IGZvY3VzZWRFbC5vZmZzZXRIZWlnaHQgLyAzO1xuICBpZiAoZm9jdXNlZFJlY3QuYm90dG9tICsgb3ZlclNjcm9sbCA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5taW4oZm9jdXNlZEVsLm9mZnNldFRvcCArIGZvY3VzZWRFbC5jbGllbnRIZWlnaHQgLSBtZW51RWwub2Zmc2V0SGVpZ2h0ICsgb3ZlclNjcm9sbCwgbWVudUVsLnNjcm9sbEhlaWdodCkpO1xuICB9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCAtIG92ZXJTY3JvbGwgPCBtZW51UmVjdC50b3ApIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWF4KGZvY3VzZWRFbC5vZmZzZXRUb3AgLSBvdmVyU2Nyb2xsLCAwKSk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgYm91bmRpbmcgY2xpZW50IG9iamVjdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGNhbm5vdCBnZXQga2V5cyB1c2luZyBhcnJheSBub3RhdGlvbiB3aXRoIERPTVJlY3RcbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50T2JqKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC53aWR0aFxuICB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRvdWNoIENhcGFiaWxpdHkgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc1RvdWNoQ2FwYWJsZSgpIHtcbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9iaWxlIERldmljZSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICB0cnkge1xuICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQYXNzaXZlIEV2ZW50IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JhZmdyYXBoL2RldGVjdC1pdC9ibG9iL21haW4vc3JjL2luZGV4LnRzI0wxOS1MMzZcbnZhciBwYXNzaXZlT3B0aW9uQWNjZXNzZWQgPSBmYWxzZTtcbnZhciBvcHRpb25zID0ge1xuICBnZXQgcGFzc2l2ZSgpIHtcbiAgICByZXR1cm4gcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkID0gdHJ1ZTtcbiAgfVxufTtcbi8vIGNoZWNrIGZvciBTU1JcbnZhciB3ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbmlmICh3LmFkZEV2ZW50TGlzdGVuZXIgJiYgdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gIHcuYWRkRXZlbnRMaXN0ZW5lcigncCcsIG5vb3AsIG9wdGlvbnMpO1xuICB3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3AnLCBub29wLCBmYWxzZSk7XG59XG52YXIgc3VwcG9ydHNQYXNzaXZlRXZlbnRzID0gcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkO1xuZnVuY3Rpb24gbm90TnVsbGlzaChpdGVtKSB7XG4gIHJldHVybiBpdGVtICE9IG51bGw7XG59XG5mdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xufVxuZnVuY3Rpb24gdmFsdWVUZXJuYXJ5KGlzTXVsdGksIG11bHRpVmFsdWUsIHNpbmdsZVZhbHVlKSB7XG4gIHJldHVybiBpc011bHRpID8gbXVsdGlWYWx1ZSA6IHNpbmdsZVZhbHVlO1xufVxuZnVuY3Rpb24gc2luZ2xlVmFsdWVBc1ZhbHVlKHNpbmdsZVZhbHVlKSB7XG4gIHJldHVybiBzaW5nbGVWYWx1ZTtcbn1cbmZ1bmN0aW9uIG11bHRpVmFsdWVBc1ZhbHVlKG11bHRpVmFsdWUpIHtcbiAgcmV0dXJuIG11bHRpVmFsdWU7XG59XG52YXIgcmVtb3ZlUHJvcHMgPSBmdW5jdGlvbiByZW1vdmVQcm9wcyhwcm9wc09iaikge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHByb3BlcnRpZXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cbiAgdmFyIHByb3BzTWFwID0gT2JqZWN0LmVudHJpZXMocHJvcHNPYmopLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDEpLFxuICAgICAga2V5ID0gX3JlZjJbMF07XG4gICAgcmV0dXJuICFwcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcHJvcHNNYXAucmVkdWNlKGZ1bmN0aW9uIChuZXdQcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICBrZXkgPSBfcmVmNFswXSxcbiAgICAgIHZhbCA9IF9yZWY0WzFdO1xuICAgIG5ld1Byb3BzW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG5ld1Byb3BzO1xuICB9LCB7fSk7XG59O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjaGlsZHJlblwiLCBcImlubmVyUHJvcHNcIl0sXG4gIF9leGNsdWRlZDIkMSA9IFtcImNoaWxkcmVuXCIsIFwiaW5uZXJQcm9wc1wiXTtcbmZ1bmN0aW9uIGdldE1lbnVQbGFjZW1lbnQoX3JlZikge1xuICB2YXIgcHJlZmVycmVkTWF4SGVpZ2h0ID0gX3JlZi5tYXhIZWlnaHQsXG4gICAgbWVudUVsID0gX3JlZi5tZW51RWwsXG4gICAgbWluSGVpZ2h0ID0gX3JlZi5taW5IZWlnaHQsXG4gICAgcHJlZmVycmVkUGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgc2hvdWxkU2Nyb2xsID0gX3JlZi5zaG91bGRTY3JvbGwsXG4gICAgaXNGaXhlZFBvc2l0aW9uID0gX3JlZi5pc0ZpeGVkUG9zaXRpb24sXG4gICAgY29udHJvbEhlaWdodCA9IF9yZWYuY29udHJvbEhlaWdodDtcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChtZW51RWwpO1xuICB2YXIgZGVmYXVsdFN0YXRlID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgfTtcblxuICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmV0dXJuIGRlZmF1bHQgc3RhdGVcbiAgaWYgKCFtZW51RWwgfHwgIW1lbnVFbC5vZmZzZXRQYXJlbnQpIHJldHVybiBkZWZhdWx0U3RhdGU7XG5cbiAgLy8gd2UgY2FuJ3QgdHJ1c3QgYHNjcm9sbFBhcmVudC5zY3JvbGxIZWlnaHRgIC0tPiBpdCBtYXkgaW5jcmVhc2Ugd2hlblxuICAvLyB0aGUgbWVudSBpcyByZW5kZXJlZFxuICB2YXIgX3Njcm9sbFBhcmVudCRnZXRCb3VuID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxQYXJlbnQkZ2V0Qm91bi5oZWlnaHQ7XG4gIHZhciBfbWVudUVsJGdldEJvdW5kaW5nQ2wgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgbWVudUJvdHRvbSA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5ib3R0b20sXG4gICAgbWVudUhlaWdodCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5oZWlnaHQsXG4gICAgbWVudVRvcCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC50b3A7XG4gIHZhciBfbWVudUVsJG9mZnNldFBhcmVudCQgPSBtZW51RWwub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIGNvbnRhaW5lclRvcCA9IF9tZW51RWwkb2Zmc2V0UGFyZW50JC50b3A7XG4gIHZhciB2aWV3SGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gd2luZG93LmlubmVySGVpZ2h0IDogbm9ybWFsaXplZEhlaWdodChzY3JvbGxQYXJlbnQpO1xuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKHNjcm9sbFBhcmVudCk7XG4gIHZhciBtYXJnaW5Cb3R0b20gPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luQm90dG9tLCAxMCk7XG4gIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luVG9wLCAxMCk7XG4gIHZhciB2aWV3U3BhY2VBYm92ZSA9IGNvbnRhaW5lclRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHZpZXdTcGFjZUJlbG93ID0gdmlld0hlaWdodCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUFib3ZlID0gdmlld1NwYWNlQWJvdmUgKyBzY3JvbGxUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUJlbG93ID0gc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbERvd24gPSBtZW51Qm90dG9tIC0gdmlld0hlaWdodCArIHNjcm9sbFRvcCArIG1hcmdpbkJvdHRvbTtcbiAgdmFyIHNjcm9sbFVwID0gc2Nyb2xsVG9wICsgbWVudVRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHNjcm9sbER1cmF0aW9uID0gMTYwO1xuICBzd2l0Y2ggKHByZWZlcnJlZFBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuICAgICAgaWYgKHNjcm9sbFNwYWNlQmVsb3cgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQmVsb3cgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuICAgICAgICB2YXIgY29uc3RyYWluZWRIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbSA6IHNjcm9sbFNwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b207XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIEZvcmtlZCBiZXZpb3VyIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGJlbG93XG5cbiAgICAgIC8vIEFVVE86IGZsaXAgdGhlIG1lbnUsIHJlbmRlciBhYm92ZVxuICAgICAgaWYgKHByZWZlcnJlZFBsYWNlbWVudCA9PT0gJ2F1dG8nIHx8IGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBiZSBjb25zdHJhaW5lZCBhZnRlciBmbGlwcGluZ1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gcHJlZmVycmVkTWF4SGVpZ2h0O1xuICAgICAgICB2YXIgc3BhY2VBYm92ZSA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIDogc2Nyb2xsU3BhY2VBYm92ZTtcbiAgICAgICAgaWYgKHNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gTWF0aC5taW4oc3BhY2VBYm92ZSAtIG1hcmdpbkJvdHRvbSAtIGNvbnRyb2xIZWlnaHQsIHByZWZlcnJlZE1heEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIEJPVFRPTTogYWxsb3cgYnJvd3NlciB0byBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgYW5kIGltbWVkaWF0ZWx5IHNldCBzY3JvbGxcbiAgICAgIGlmIChwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBzY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQWJvdmUgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodDIgPSBwcmVmZXJyZWRNYXhIZWlnaHQ7XG5cbiAgICAgICAgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cbiAgICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodDIgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSAtIG1hcmdpblRvcCA6IHNjcm9sbFNwYWNlQWJvdmUgLSBtYXJnaW5Ub3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodDJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gbm90IGVub3VnaCBzcGFjZSwgdGhlIGJyb3dzZXIgV0lMTCBOT1QgaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIHdoZW5cbiAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50IHJlbmRlcmVkIGFib3ZlIHRoZSB2aWV3cG9ydCAob25seSBiZWxvdykuXG4gICAgICAvLyBGbGlwIHRoZSBtZW51LCByZW5kZXIgYmVsb3dcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCBwcm92aWRlZCBcXFwiXCIuY29uY2F0KHByZWZlcnJlZFBsYWNlbWVudCwgXCJcXFwiLlwiKSk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcbn1cblxuLy8gTWVudSBDb21wb25lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpIHtcbiAgdmFyIHBsYWNlbWVudFRvQ1NTUHJvcCA9IHtcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgcmV0dXJuIHBsYWNlbWVudCA/IHBsYWNlbWVudFRvQ1NTUHJvcFtwbGFjZW1lbnRdIDogJ2JvdHRvbSc7XG59XG52YXIgY29lcmNlUGxhY2VtZW50ID0gZnVuY3Rpb24gY29lcmNlUGxhY2VtZW50KHApIHtcbiAgcmV0dXJuIHAgPT09ICdhdXRvJyA/ICdib3R0b20nIDogcDtcbn07XG52YXIgbWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIsIHVuc3R5bGVkKSB7XG4gIHZhciBfb2JqZWN0U3ByZWFkMjtcbiAgdmFyIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBzcGFjaW5nID0gX3JlZjIkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKChfb2JqZWN0U3ByZWFkMiA9IHtcbiAgICBsYWJlbDogJ21lbnUnXG4gIH0sIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcInBvc2l0aW9uXCIsICdhYnNvbHV0ZScpLCBfZGVmaW5lUHJvcGVydHkoX29iamVjdFNwcmVhZDIsIFwid2lkdGhcIiwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcInpJbmRleFwiLCAxKSwgX29iamVjdFNwcmVhZDIpLCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSwgMCA0cHggMTFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKScsXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nLm1lbnVHdXR0ZXIsXG4gICAgbWFyZ2luVG9wOiBzcGFjaW5nLm1lbnVHdXR0ZXJcbiAgfSk7XG59O1xudmFyIFBvcnRhbFBsYWNlbWVudENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gTk9URTogaW50ZXJuYWwgb25seVxudmFyIE1lbnVQbGFjZXIgPSBmdW5jdGlvbiBNZW51UGxhY2VyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIG1pbk1lbnVIZWlnaHQgPSBwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgIG1heE1lbnVIZWlnaHQgPSBwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgIG1lbnVQbGFjZW1lbnQgPSBwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgIG1lbnVQb3NpdGlvbiA9IHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgdGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgdmFyIF9yZWYzID0gdXNlQ29udGV4dChQb3J0YWxQbGFjZW1lbnRDb250ZXh0KSB8fCB7fSxcbiAgICBzZXRQb3J0YWxQbGFjZW1lbnQgPSBfcmVmMy5zZXRQb3J0YWxQbGFjZW1lbnQ7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShtYXhNZW51SGVpZ2h0KSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBtYXhIZWlnaHQgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldE1heEhlaWdodCA9IF91c2VTdGF0ZTJbMV07XG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUobnVsbCksXG4gICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgIHBsYWNlbWVudCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0UGxhY2VtZW50ID0gX3VzZVN0YXRlNFsxXTtcbiAgdmFyIGNvbnRyb2xIZWlnaHQgPSB0aGVtZS5zcGFjaW5nLmNvbnRyb2xIZWlnaHQ7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lbnVFbCA9IHJlZi5jdXJyZW50O1xuICAgIGlmICghbWVudUVsKSByZXR1cm47XG5cbiAgICAvLyBETyBOT1Qgc2Nyb2xsIGlmIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICB2YXIgc2hvdWxkU2Nyb2xsID0gbWVudVNob3VsZFNjcm9sbEludG9WaWV3ICYmICFpc0ZpeGVkUG9zaXRpb247XG4gICAgdmFyIHN0YXRlID0gZ2V0TWVudVBsYWNlbWVudCh7XG4gICAgICBtYXhIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICBtZW51RWw6IG1lbnVFbCxcbiAgICAgIG1pbkhlaWdodDogbWluTWVudUhlaWdodCxcbiAgICAgIHBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgIHNob3VsZFNjcm9sbDogc2hvdWxkU2Nyb2xsLFxuICAgICAgaXNGaXhlZFBvc2l0aW9uOiBpc0ZpeGVkUG9zaXRpb24sXG4gICAgICBjb250cm9sSGVpZ2h0OiBjb250cm9sSGVpZ2h0XG4gICAgfSk7XG4gICAgc2V0TWF4SGVpZ2h0KHN0YXRlLm1heEhlaWdodCk7XG4gICAgc2V0UGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgc2V0UG9ydGFsUGxhY2VtZW50ID09PSBudWxsIHx8IHNldFBvcnRhbFBsYWNlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIH0sIFttYXhNZW51SGVpZ2h0LCBtZW51UGxhY2VtZW50LCBtZW51UG9zaXRpb24sIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldywgbWluTWVudUhlaWdodCwgc2V0UG9ydGFsUGxhY2VtZW50LCBjb250cm9sSGVpZ2h0XSk7XG4gIHJldHVybiBjaGlsZHJlbih7XG4gICAgcmVmOiByZWYsXG4gICAgcGxhY2VyUHJvcHM6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpLFxuICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICB9KVxuICB9KTtcbn07XG52YXIgTWVudSA9IGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ21lbnUnLCB7XG4gICAgbWVudTogdHJ1ZVxuICB9KSwge1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG52YXIgTWVudSQxID0gTWVudTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IExpc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudUxpc3RDU1MgPSBmdW5jdGlvbiBtZW51TGlzdENTUyhfcmVmNCwgdW5zdHlsZWQpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY0Lm1heEhlaWdodCxcbiAgICBiYXNlVW5pdCA9IF9yZWY0LnRoZW1lLnNwYWNpbmcuYmFzZVVuaXQ7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyByZXF1aXJlZCBmb3Igb2Zmc2V0W0hlaWdodCwgVG9wXSA+IGtleWJvYXJkIHNjcm9sbFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogYmFzZVVuaXQsXG4gICAgcGFkZGluZ1RvcDogYmFzZVVuaXRcbiAgfSk7XG59O1xudmFyIE1lbnVMaXN0ID0gZnVuY3Rpb24gTWVudUxpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ21lbnVMaXN0Jywge1xuICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICdtZW51LWxpc3QtLWlzLW11bHRpJzogaXNNdWx0aVxuICB9KSwge1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBOb3RpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vdGljZUNTUyA9IGZ1bmN0aW9uIG5vdGljZUNTUyhfcmVmNSwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChiYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChiYXNlVW5pdCAqIDMsIFwicHhcIilcbiAgfSk7XG59O1xudmFyIG5vT3B0aW9uc01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgbG9hZGluZ01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgTm9PcHRpb25zTWVzc2FnZSA9IGZ1bmN0aW9uIE5vT3B0aW9uc01lc3NhZ2UoX3JlZjYpIHtcbiAgdmFyIF9yZWY2JGNoaWxkcmVuID0gX3JlZjYuY2hpbGRyZW4sXG4gICAgY2hpbGRyZW4gPSBfcmVmNiRjaGlsZHJlbiA9PT0gdm9pZCAwID8gJ05vIG9wdGlvbnMnIDogX3JlZjYkY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY2LmlubmVyUHJvcHMsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY2LCBfZXhjbHVkZWQkMyk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpLCB7fSwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBpbm5lclByb3BzOiBpbm5lclByb3BzXG4gIH0pLCAnbm9PcHRpb25zTWVzc2FnZScsIHtcbiAgICAnbWVudS1ub3RpY2UnOiB0cnVlLFxuICAgICdtZW51LW5vdGljZS0tbm8tb3B0aW9ucyc6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIExvYWRpbmdNZXNzYWdlID0gZnVuY3Rpb24gTG9hZGluZ01lc3NhZ2UoX3JlZjcpIHtcbiAgdmFyIF9yZWY3JGNoaWxkcmVuID0gX3JlZjcuY2hpbGRyZW4sXG4gICAgY2hpbGRyZW4gPSBfcmVmNyRjaGlsZHJlbiA9PT0gdm9pZCAwID8gJ0xvYWRpbmcuLi4nIDogX3JlZjckY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY3LmlubmVyUHJvcHMsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY3LCBfZXhjbHVkZWQyJDEpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKSwge30sIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wczogaW5uZXJQcm9wc1xuICB9KSwgJ2xvYWRpbmdNZXNzYWdlJywge1xuICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgJ21lbnUtbm90aWNlLS1sb2FkaW5nJzogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBQb3J0YWxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudVBvcnRhbENTUyA9IGZ1bmN0aW9uIG1lbnVQb3J0YWxDU1MoX3JlZjgpIHtcbiAgdmFyIHJlY3QgPSBfcmVmOC5yZWN0LFxuICAgIG9mZnNldCA9IF9yZWY4Lm9mZnNldCxcbiAgICBwb3NpdGlvbiA9IF9yZWY4LnBvc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgekluZGV4OiAxXG4gIH07XG59O1xudmFyIE1lbnVQb3J0YWwgPSBmdW5jdGlvbiBNZW51UG9ydGFsKHByb3BzKSB7XG4gIHZhciBhcHBlbmRUbyA9IHByb3BzLmFwcGVuZFRvLFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgY29udHJvbEVsZW1lbnQgPSBwcm9wcy5jb250cm9sRWxlbWVudCxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBtZW51UGxhY2VtZW50ID0gcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICBtZW51UG9zaXRpb24gPSBwcm9wcy5tZW51UG9zaXRpb247XG4gIHZhciBtZW51UG9ydGFsUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgY2xlYW51cFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShjb2VyY2VQbGFjZW1lbnQobWVudVBsYWNlbWVudCkpLFxuICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICBwbGFjZW1lbnQgPSBfdXNlU3RhdGU2WzBdLFxuICAgIHNldFBvcnRhbFBsYWNlbWVudCA9IF91c2VTdGF0ZTZbMV07XG4gIHZhciBwb3J0YWxQbGFjZW1lbnRDb250ZXh0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFBvcnRhbFBsYWNlbWVudDogc2V0UG9ydGFsUGxhY2VtZW50XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKG51bGwpLFxuICAgIF91c2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU3LCAyKSxcbiAgICBjb21wdXRlZFBvc2l0aW9uID0gX3VzZVN0YXRlOFswXSxcbiAgICBzZXRDb21wdXRlZFBvc2l0aW9uID0gX3VzZVN0YXRlOFsxXTtcbiAgdmFyIHVwZGF0ZUNvbXB1dGVkUG9zaXRpb24gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjb250cm9sRWxlbWVudCkgcmV0dXJuO1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRPYmooY29udHJvbEVsZW1lbnQpO1xuICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IDAgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgdmFyIG9mZnNldCA9IHJlY3RbcGxhY2VtZW50XSArIHNjcm9sbERpc3RhbmNlO1xuICAgIGlmIChvZmZzZXQgIT09IChjb21wdXRlZFBvc2l0aW9uID09PSBudWxsIHx8IGNvbXB1dGVkUG9zaXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXB1dGVkUG9zaXRpb24ub2Zmc2V0KSB8fCByZWN0LmxlZnQgIT09IChjb21wdXRlZFBvc2l0aW9uID09PSBudWxsIHx8IGNvbXB1dGVkUG9zaXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXB1dGVkUG9zaXRpb24ucmVjdC5sZWZ0KSB8fCByZWN0LndpZHRoICE9PSAoY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3Qud2lkdGgpKSB7XG4gICAgICBzZXRDb21wdXRlZFBvc2l0aW9uKHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xFbGVtZW50LCBtZW51UG9zaXRpb24sIHBsYWNlbWVudCwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLm9mZnNldCwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3QubGVmdCwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3Qud2lkdGhdKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVDb21wdXRlZFBvc2l0aW9uKCk7XG4gIH0sIFt1cGRhdGVDb21wdXRlZFBvc2l0aW9uXSk7XG4gIHZhciBydW5BdXRvVXBkYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgY2xlYW51cFJlZi5jdXJyZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjbGVhbnVwUmVmLmN1cnJlbnQoKTtcbiAgICAgIGNsZWFudXBSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjb250cm9sRWxlbWVudCAmJiBtZW51UG9ydGFsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFudXBSZWYuY3VycmVudCA9IGF1dG9VcGRhdGUoY29udHJvbEVsZW1lbnQsIG1lbnVQb3J0YWxSZWYuY3VycmVudCwgdXBkYXRlQ29tcHV0ZWRQb3NpdGlvbiwge1xuICAgICAgICBlbGVtZW50UmVzaXplOiAnUmVzaXplT2JzZXJ2ZXInIGluIHdpbmRvd1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY29udHJvbEVsZW1lbnQsIHVwZGF0ZUNvbXB1dGVkUG9zaXRpb25dKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBydW5BdXRvVXBkYXRlKCk7XG4gIH0sIFtydW5BdXRvVXBkYXRlXSk7XG4gIHZhciBzZXRNZW51UG9ydGFsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChtZW51UG9ydGFsRWxlbWVudCkge1xuICAgIG1lbnVQb3J0YWxSZWYuY3VycmVudCA9IG1lbnVQb3J0YWxFbGVtZW50O1xuICAgIHJ1bkF1dG9VcGRhdGUoKTtcbiAgfSwgW3J1bkF1dG9VcGRhdGVdKTtcblxuICAvLyBiYWlsIGVhcmx5IGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZW4ndCBwcmVzZW50XG4gIGlmICghYXBwZW5kVG8gJiYgbWVudVBvc2l0aW9uICE9PSAnZml4ZWQnIHx8ICFjb21wdXRlZFBvc2l0aW9uKSByZXR1cm4gbnVsbDtcblxuICAvLyBzYW1lIHdyYXBwZXIgZWxlbWVudCB3aGV0aGVyIGZpeGVkIG9yIHBvcnRhbGxlZFxuICB2YXIgbWVudVdyYXBwZXIgPSBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogc2V0TWVudVBvcnRhbEVsZW1lbnRcbiAgfSwgZ2V0U3R5bGVQcm9wcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICBvZmZzZXQ6IGNvbXB1dGVkUG9zaXRpb24ub2Zmc2V0LFxuICAgIHBvc2l0aW9uOiBtZW51UG9zaXRpb24sXG4gICAgcmVjdDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0XG4gIH0pLCAnbWVudVBvcnRhbCcsIHtcbiAgICAnbWVudS1wb3J0YWwnOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xuICByZXR1cm4ganN4KFBvcnRhbFBsYWNlbWVudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcG9ydGFsUGxhY2VtZW50Q29udGV4dFxuICB9LCBhcHBlbmRUbyA/IC8qI19fUFVSRV9fKi9jcmVhdGVQb3J0YWwobWVudVdyYXBwZXIsIGFwcGVuZFRvKSA6IG1lbnVXcmFwcGVyKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUm9vdCBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgaXNSdGwgPSBfcmVmLmlzUnRsO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnY29udGFpbmVyJyxcbiAgICBkaXJlY3Rpb246IGlzUnRsID8gJ3J0bCcgOiB1bmRlZmluZWQsXG4gICAgcG9pbnRlckV2ZW50czogaXNEaXNhYmxlZCA/ICdub25lJyA6IHVuZGVmaW5lZCxcbiAgICAvLyBjYW5jZWwgbW91c2UgZXZlbnRzIHdoZW4gZGlzYWJsZWRcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9O1xufTtcbnZhciBTZWxlY3RDb250YWluZXIgPSBmdW5jdGlvbiBTZWxlY3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgaXNSdGwgPSBwcm9wcy5pc1J0bDtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NvbnRhaW5lcicsIHtcbiAgICAnLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgJy0taXMtcnRsJzogaXNSdGxcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbHVlIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciB2YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgc3BhY2luZyA9IF9yZWYyLnRoZW1lLnNwYWNpbmcsXG4gICAgaXNNdWx0aSA9IF9yZWYyLmlzTXVsdGksXG4gICAgaGFzVmFsdWUgPSBfcmVmMi5oYXNWYWx1ZSxcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfcmVmMi5zZWxlY3RQcm9wcy5jb250cm9sU2hvdWxkUmVuZGVyVmFsdWU7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiBpc011bHRpICYmIGhhc1ZhbHVlICYmIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSA/ICdmbGV4JyA6ICdncmlkJyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAvIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweFwiKVxuICB9KTtcbn07XG52YXIgVmFsdWVDb250YWluZXIgPSBmdW5jdGlvbiBWYWx1ZUNvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICBoYXNWYWx1ZSA9IHByb3BzLmhhc1ZhbHVlO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAndmFsdWVDb250YWluZXInLCB7XG4gICAgJ3ZhbHVlLWNvbnRhaW5lcic6IHRydWUsXG4gICAgJ3ZhbHVlLWNvbnRhaW5lci0taXMtbXVsdGknOiBpc011bHRpLFxuICAgICd2YWx1ZS1jb250YWluZXItLWhhcy12YWx1ZSc6IGhhc1ZhbHVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbmRpY2F0b3IgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGluZGljYXRvcnNDb250YWluZXJDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTKCkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH07XG59O1xudmFyIEluZGljYXRvcnNDb250YWluZXIgPSBmdW5jdGlvbiBJbmRpY2F0b3JzQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yc0NvbnRhaW5lcicsIHtcbiAgICBpbmRpY2F0b3JzOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdDtcbnZhciBfZXhjbHVkZWQkMiA9IFtcInNpemVcIl0sXG4gIF9leGNsdWRlZDIgPSBbXCJpbm5lclByb3BzXCIsIFwiaXNSdGxcIiwgXCJzaXplXCJdO1xuZnVuY3Rpb24gX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18oKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjhtbWtjZ1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowXCJcbn0gOiB7XG4gIG5hbWU6IFwidGo1YmRlLVN2Z1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowO2xhYmVsOlN2ZztcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhsQ1NTSXNJbVpwYkdVaU9pSnBibVJwWTJGMGIzSnpMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1NsTllMQ0JTWldGamRFNXZaR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnc0lHdGxlV1p5WVcxbGN5QjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwzSmxZV04wSnp0Y2JseHVhVzF3YjNKMElIdGNiaUFnUTI5dGJXOXVVSEp2Y0hOQmJtUkRiR0Z6YzA1aGJXVXNYRzRnSUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkN4Y2JpQWdSM0p2ZFhCQ1lYTmxMRnh1ZlNCbWNtOXRJQ2N1TGk5MGVYQmxjeWM3WEc1cGJYQnZjblFnZXlCblpYUlRkSGxzWlZCeWIzQnpJSDBnWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmk4dklFUnliM0JrYjNkdUlDWWdRMnhsWVhJZ1NXTnZibk5jYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JUZG1jZ1BTQW9lMXh1SUNCemFYcGxMRnh1SUNBdUxpNXdjbTl3YzF4dWZUb2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemRtY25YU0FtSUhzZ2MybDZaVG9nYm5WdFltVnlJSDBwSUQwK0lDaGNiaUFnUEhOMloxeHVJQ0FnSUdobGFXZG9kRDE3YzJsNlpYMWNiaUFnSUNCM2FXUjBhRDE3YzJsNlpYMWNiaUFnSUNCMmFXVjNRbTk0UFZ3aU1DQXdJREl3SURJd1hDSmNiaUFnSUNCaGNtbGhMV2hwWkdSbGJqMWNJblJ5ZFdWY0lseHVJQ0FnSUdadlkzVnpZV0pzWlQxY0ltWmhiSE5sWENKY2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnWm1sc2JEb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCc2FXNWxTR1ZwWjJoME9pQXhMRnh1SUNBZ0lDQWdjM1J5YjJ0bE9pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUhOMGNtOXJaVmRwWkhSb09pQXdMRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJSFI1Y0dVZ1EzSnZjM05KWTI5dVVISnZjSE1nUFNCS1UxZ3VTVzUwY21sdWMybGpSV3hsYldWdWRITmJKM04yWnlkZElDWWdleUJ6YVhwbFB6b2diblZ0WW1WeUlIMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ1EzSnZjM05KWTI5dUlEMGdLSEJ5YjNCek9pQkRjbTl6YzBsamIyNVFjbTl3Y3lrZ1BUNGdLRnh1SUNBOFUzWm5JSE5wZW1VOWV6SXdmU0I3TGk0dWNISnZjSE45UGx4dUlDQWdJRHh3WVhSb0lHUTlYQ0pOTVRRdU16UTRJREUwTGpnME9XTXRNQzQwTmprZ01DNDBOamt0TVM0eU1qa2dNQzQwTmprdE1TNDJPVGNnTUd3dE1pNDJOVEV0TXk0d016QXRNaTQyTlRFZ015NHdNamxqTFRBdU5EWTVJREF1TkRZNUxURXVNakk1SURBdU5EWTVMVEV1TmprM0lEQXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWprZ01DMHhMalk1TjJ3eUxqYzFPQzB6TGpFMUxUSXVOelU1TFRNdU1UVXlZeTB3TGpRMk9TMHdMalEyT1Mwd0xqUTJPUzB4TGpJeU9DQXdMVEV1TmprM2N6RXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnNNaTQyTlRJZ015NHdNekVnTWk0Mk5URXRNeTR3TXpGak1DNDBOamt0TUM0ME5qa2dNUzR5TWpndE1DNDBOamtnTVM0Mk9UY2dNSE13TGpRMk9TQXhMakl5T1NBd0lERXVOamszYkMweUxqYzFPQ0F6TGpFMU1pQXlMamMxT0NBekxqRTFZekF1TkRZNUlEQXVORFk1SURBdU5EWTVJREV1TWpJNUlEQWdNUzQyT1RoNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVaWGh3YjNKMElIUjVjR1VnUkc5M2JrTm9aWFp5YjI1UWNtOXdjeUE5SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25jM1puSjEwZ0ppQjdJSE5wZW1VL09pQnVkVzFpWlhJZ2ZUdGNibVY0Y0c5eWRDQmpiMjV6ZENCRWIzZHVRMmhsZG5KdmJpQTlJQ2h3Y205d2N6b2dSRzkzYmtOb1pYWnliMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk5DNDFNVFlnTnk0MU5EaGpNQzQwTXpZdE1DNDBORFlnTVM0d05ETXRNQzQwT0RFZ01TNDFOellnTUd3ekxqa3dPQ0F6TGpjME55QXpMamt3T0MwekxqYzBOMk13TGpVek15MHdMalE0TVNBeExqRTBNUzB3TGpRME5pQXhMalUzTkNBd0lEQXVORE0ySURBdU5EUTFJREF1TkRBNElERXVNVGszSURBZ01TNDJNVFV0TUM0ME1EWWdNQzQwTVRndE5DNDJPVFVnTkM0MU1ESXROQzQyT1RVZ05DNDFNREl0TUM0eU1UY2dNQzR5TWpNdE1DNDFNRElnTUM0ek16VXRNQzQzT0RjZ01DNHpNelZ6TFRBdU5UY3RNQzR4TVRJdE1DNDNPRGt0TUM0ek16VmpNQ0F3TFRRdU1qZzNMVFF1TURnMExUUXVOamsxTFRRdU5UQXljeTB3TGpRek5pMHhMakUzSURBdE1TNDJNVFY2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdRblYwZEc5dWMxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4Y2JpQWdUM0IwYVc5dUlEMGdkVzVyYm05M2JpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNGdQU0JpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtJRDBnUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0Z1pYaDBaVzVrY3lCRGIyMXRiMjVRY205d2MwRnVaRU5zWVhOelRtRnRaVHhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BpQjdYRzRnSUM4cUtpQlVhR1VnWTJocGJHUnlaVzRnZEc4Z1ltVWdjbVZ1WkdWeVpXUWdhVzV6YVdSbElIUm9aU0JwYm1ScFkyRjBiM0l1SUNvdlhHNGdJR05vYVd4a2NtVnVQem9nVW1WaFkzUk9iMlJsTzF4dUlDQXZLaW9nVUhKdmNITWdkR2hoZENCM2FXeHNJR0psSUhCaGMzTmxaQ0J2YmlCMGJ5QjBhR1VnWTJocGJHUnlaVzR1SUNvdlhHNGdJR2x1Ym1WeVVISnZjSE02SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25aR2wySjEwN1hHNGdJQzhxS2lCVWFHVWdabTlqZFhObFpDQnpkR0YwWlNCdlppQjBhR1VnYzJWc1pXTjBMaUFxTDF4dUlDQnBjMFp2WTNWelpXUTZJR0p2YjJ4bFlXNDdYRzRnSUdselJHbHpZV0pzWldRNklHSnZiMnhsWVc0N1hHNTlYRzVjYm1OdmJuTjBJR0poYzJWRFUxTWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUh0Y2JpQWdJQ0JwYzBadlkzVnpaV1FzWEc0Z0lDQWdkR2hsYldVNklIdGNiaUFnSUNBZ0lITndZV05wYm1jNklIc2dZbUZ6WlZWdWFYUWdmU3hjYmlBZ0lDQWdJR052Ykc5eWN5eGNiaUFnSUNCOUxGeHVJQ0I5T2x4dUlDQWdJSHdnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUlDQWdJSHdnUTJ4bFlYSkpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaXhjYmlBZ2RXNXpkSGxzWldRNklHSnZiMnhsWVc1Y2JpazZJRU5UVTA5aWFtVmpkRmRwZEdoTVlXSmxiQ0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZja052Ym5SaGFXNWxjaWNzWEc0Z0lHUnBjM0JzWVhrNklDZG1iR1Y0Snl4Y2JpQWdkSEpoYm5OcGRHbHZiam9nSjJOdmJHOXlJREUxTUcxekp5eGNiaUFnTGk0dUtIVnVjM1I1YkdWa1hHNGdJQ0FnUHlCN2ZWeHVJQ0FnSURvZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ2FYTkdiMk4xYzJWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3Mk1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUNBZ0lDQWdJSEJoWkdScGJtYzZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdJQ0FnSUNBZ0p6cG9iM1psY2ljNklIdGNiaUFnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzRNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNOREFzWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVSeWIzQmtiM2R1U1c1a2FXTmhkRzl5SUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0Z4dUlDQndjbTl3Y3pvZ1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVLU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMmhwYkdSeVpXNHNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVuWlhSVGRIbHNaVkJ5YjNCektIQnliM0J6TENBblpISnZjR1J2ZDI1SmJtUnBZMkYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdKMlJ5YjNCa2IzZHVMV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQjlLWDFjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThSRzkzYmtOb1pYWnliMjRnTHo1OVhHNGdJQ0FnUEM5a2FYWStYRzRnSUNrN1hHNTlPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVOc1pXRnlTVzVrYVdOaGRHOXlVSEp2Y0hNOFhHNGdJRTl3ZEdsdmJpQTlJSFZ1YTI1dmQyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVJRDBnWW05dmJHVmhiaXhjYmlBZ1IzSnZkWEFnWlhoMFpXNWtjeUJIY205MWNFSmhjMlU4VDNCMGFXOXVQaUE5SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0lHVjRkR1Z1WkhNZ1EyOXRiVzl1VUhKdmNITkJibVJEYkdGemMwNWhiV1U4VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENGdlMXh1SUNBdktpb2dWR2hsSUdOb2FXeGtjbVZ1SUhSdklHSmxJSEpsYm1SbGNtVmtJR2x1YzJsa1pTQjBhR1VnYVc1a2FXTmhkRzl5TGlBcUwxeHVJQ0JqYUdsc1pISmxiajg2SUZKbFlXTjBUbTlrWlR0Y2JpQWdMeW9xSUZCeWIzQnpJSFJvWVhRZ2QybHNiQ0JpWlNCd1lYTnpaV1FnYjI0Z2RHOGdkR2hsSUdOb2FXeGtjbVZ1TGlBcUwxeHVJQ0JwYm01bGNsQnliM0J6T2lCS1UxZ3VTVzUwY21sdWMybGpSV3hsYldWdWRITmJKMlJwZGlkZE8xeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4bFlYSkpibVJwWTJGMGIzSkRVMU1nUFNCaVlYTmxRMU5UTzF4dVpYaHdiM0owSUdOdmJuTjBJRU5zWldGeVNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dRMnhsWVhKSmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVLU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMmhwYkdSeVpXNHNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVuWlhSVGRIbHNaVkJ5YjNCektIQnliM0J6TENBblkyeGxZWEpKYm1ScFkyRjBiM0luTENCN1hHNGdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0oyTnNaV0Z5TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4UTNKdmMzTkpZMjl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QlRaWEJoY21GMGIzSmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWx1WkdsallYUnZjbE5sY0dGeVlYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ2FYTkVhWE5oWW14bFpEb2dZbTl2YkdWaGJqdGNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBibTVsY2xCeWIzQnpQem9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpjR0Z1SjEwN1hHNTlYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBibVJwWTJGMGIzSlRaWEJoY21GMGIzSkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwUnBjMkZpYkdWa0xGeHVJQ0FnSUhSb1pXMWxPaUI3WEc0Z0lDQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnSUNCamIyeHZjbk1zWEc0Z0lDQWdmU3hjYmlBZ2ZUb2dTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRzWEc0Z0lIVnVjM1I1YkdWa09pQmliMjlzWldGdVhHNHBPaUJEVTFOUFltcGxZM1JYYVhSb1RHRmlaV3dnUFQ0Z0tIdGNiaUFnYkdGaVpXdzZJQ2RwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0luTEZ4dUlDQmhiR2xuYmxObGJHWTZJQ2R6ZEhKbGRHTm9KeXhjYmlBZ2QybGtkR2c2SURFc1hHNGdJQzR1TGloMWJuTjBlV3hsWkZ4dUlDQWdJRDhnZTMxY2JpQWdJQ0E2SUh0Y2JpQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpFTnZiRzl5T2lCcGMwUnBjMkZpYkdWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3eE1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUNBZ0lDQWdJRzFoY21kcGJrSnZkSFJ2YlRvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNBZ0lDQWdJQ0J0WVhKbmFXNVViM0E2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lIMHBMRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCSmJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSEJ5YjNCek9pQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnYVc1dVpYSlFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BITndZVzVjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUNBZ2V5NHVMbWRsZEZOMGVXeGxVSEp2Y0hNb2NISnZjSE1zSUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJQ2RwYm1ScFkyRjBiM0l0YzJWd1lYSmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJSDBwZlZ4dUlDQWdJQzgrWEc0Z0lDazdYRzU5TzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRXh2WVdScGJtZGNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVqYjI1emRDQnNiMkZrYVc1blJHOTBRVzVwYldGMGFXOXVjeUE5SUd0bGVXWnlZVzFsYzJCY2JpQWdNQ1VzSURnd0pTd2dNVEF3SlNCN0lHOXdZV05wZEhrNklEQTdJSDFjYmlBZ05EQWxJSHNnYjNCaFkybDBlVG9nTVRzZ2ZWeHVZRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR3h2WVdScGJtZEpibVJwWTJGMGIzSkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwWnZZM1Z6WldRc1hHNGdJQ0FnYzJsNlpTeGNiaUFnSUNCMGFHVnRaVG9nZTF4dUlDQWdJQ0FnWTI5c2IzSnpMRnh1SUNBZ0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQWdJSDBzWEc0Z0lIMDZJRXh2WVdScGJtZEpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaXhjYmlBZ2RXNXpkSGxzWldRNklHSnZiMnhsWVc1Y2JpazZJRU5UVTA5aWFtVmpkRmRwZEdoTVlXSmxiQ0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIUnlZVzV6YVhScGIyNDZJQ2RqYjJ4dmNpQXhOVEJ0Y3ljc1hHNGdJR0ZzYVdkdVUyVnNaam9nSjJObGJuUmxjaWNzWEc0Z0lHWnZiblJUYVhwbE9pQnphWHBsTEZ4dUlDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQnRZWEpuYVc1U2FXZG9kRG9nYzJsNlpTeGNiaUFnZEdWNGRFRnNhV2R1T2lBblkyVnVkR1Z5Snl4Y2JpQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0oyMXBaR1JzWlNjc1hHNGdJQzR1TGloMWJuTjBlV3hsWkZ4dUlDQWdJRDhnZTMxY2JpQWdJQ0E2SUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0FnSUNBZ0lDQndZV1JrYVc1bk9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lDQWdJQ0I5S1N4Y2JuMHBPMXh1WEc1cGJuUmxjbVpoWTJVZ1RHOWhaR2x1WjBSdmRGQnliM0J6SUh0Y2JpQWdaR1ZzWVhrNklHNTFiV0psY2p0Y2JpQWdiMlptYzJWME9pQmliMjlzWldGdU8xeHVmVnh1WTI5dWMzUWdURzloWkdsdVowUnZkQ0E5SUNoN0lHUmxiR0Y1TENCdlptWnpaWFFnZlRvZ1RHOWhaR2x1WjBSdmRGQnliM0J6S1NBOVBpQW9YRzRnSUR4emNHRnVYRzRnSUNBZ1kzTnpQWHQ3WEc0Z0lDQWdJQ0JoYm1sdFlYUnBiMjQ2SUdBa2UyeHZZV1JwYm1kRWIzUkJibWx0WVhScGIyNXpmU0F4Y3lCbFlYTmxMV2x1TFc5MWRDQWtlMlJsYkdGNWZXMXpJR2x1Wm1sdWFYUmxPMkFzWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUFuTVdWdEp5eGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnYldGeVoybHVUR1ZtZERvZ2IyWm1jMlYwSUQ4Z0p6RmxiU2NnT2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SUNjeFpXMG5MRnh1SUNBZ0lDQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0ozUnZjQ2NzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekZsYlNjc1hHNGdJQ0FnZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVPMXh1SUNBdktpb2dVMlYwSUhOcGVtVWdiMllnZEdobElHTnZiblJoYVc1bGNpNGdLaTljYmlBZ2MybDZaVG9nYm5WdFltVnlPMXh1ZlZ4dVpYaHdiM0owSUdOdmJuTjBJRXh2WVdScGJtZEpibVJwWTJGMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9lMXh1SUNCcGJtNWxjbEJ5YjNCekxGeHVJQ0JwYzFKMGJDeGNiaUFnYzJsNlpTQTlJRFFzWEc0Z0lDNHVMbkpsYzNSUWNtOXdjMXh1ZlRvZ1RHOWhaR2x1WjBsdVpHbGpZWFJ2Y2xCeWIzQnpQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0tTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdScGRseHVJQ0FnSUNBZ2V5NHVMbWRsZEZOMGVXeGxVSEp2Y0hNb1hHNGdJQ0FnSUNBZ0lIc2dMaTR1Y21WemRGQnliM0J6TENCcGJtNWxjbEJ5YjNCekxDQnBjMUowYkN3Z2MybDZaU0I5TEZ4dUlDQWdJQ0FnSUNBbmJHOWhaR2x1WjBsdVpHbGpZWFJ2Y2ljc1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSjJ4dllXUnBibWN0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3dmU0J2Wm1aelpYUTllMmx6VW5Sc2ZTQXZQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllekUyTUgwZ2IyWm1jMlYwSUM4K1hHNGdJQ0FnSUNBOFRHOWhaR2x1WjBSdmRDQmtaV3hoZVQxN016SXdmU0J2Wm1aelpYUTlleUZwYzFKMGJIMGdMejVjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNGlYWDA9ICovXCIsXG4gIHRvU3RyaW5nOiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfX1xufTtcbnZhciBTdmcgPSBmdW5jdGlvbiBTdmcoX3JlZikge1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQkMik7XG4gIHJldHVybiBqc3goXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIGhlaWdodDogc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgY3NzOiBfcmVmMlxuICB9LCBwcm9wcykpO1xufTtcbnZhciBDcm9zc0ljb24gPSBmdW5jdGlvbiBDcm9zc0ljb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiXG4gIH0pKTtcbn07XG52YXIgRG93bkNoZXZyb24gPSBmdW5jdGlvbiBEb3duQ2hldnJvbihwcm9wcykge1xuICByZXR1cm4ganN4KFN2ZywgX2V4dGVuZHMoe1xuICAgIHNpemU6IDIwXG4gIH0sIHByb3BzKSwganN4KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgfSkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgYmFzZUNTUyA9IGZ1bmN0aW9uIGJhc2VDU1MoX3JlZjMsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQsXG4gICAgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICBiYXNlVW5pdCA9IF9yZWYzJHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwXG4gICAgfVxuICB9KTtcbn07XG52YXIgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xudmFyIERyb3Bkb3duSW5kaWNhdG9yID0gZnVuY3Rpb24gRHJvcGRvd25JbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdkcm9wZG93bkluZGljYXRvcicsIHtcbiAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbiB8fCBqc3goRG93bkNoZXZyb24sIG51bGwpKTtcbn07XG52YXIgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xudmFyIENsZWFySW5kaWNhdG9yID0gZnVuY3Rpb24gQ2xlYXJJbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdjbGVhckluZGljYXRvcicsIHtcbiAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCBudWxsKSk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MoX3JlZjQsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZjQuaXNEaXNhYmxlZCxcbiAgICBfcmVmNCR0aGVtZSA9IF9yZWY0LnRoZW1lLFxuICAgIGJhc2VVbml0ID0gX3JlZjQkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICBjb2xvcnMgPSBfcmVmNCR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgd2lkdGg6IDFcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMlxuICB9KTtcbn07XG52YXIgSW5kaWNhdG9yU2VwYXJhdG9yID0gZnVuY3Rpb24gSW5kaWNhdG9yU2VwYXJhdG9yKHByb3BzKSB7XG4gIHZhciBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIGdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlXG4gIH0pKSk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXMoX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cXG5cIl0pKSk7XG52YXIgbG9hZGluZ0luZGljYXRvckNTUyA9IGZ1bmN0aW9uIGxvYWRpbmdJbmRpY2F0b3JDU1MoX3JlZjUsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmNS5pc0ZvY3VzZWQsXG4gICAgc2l6ZSA9IF9yZWY1LnNpemUsXG4gICAgX3JlZjUkdGhlbWUgPSBfcmVmNS50aGVtZSxcbiAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnMsXG4gICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiBzaXplLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDJcbiAgfSk7XG59O1xudmFyIExvYWRpbmdEb3QgPSBmdW5jdGlvbiBMb2FkaW5nRG90KF9yZWY2KSB7XG4gIHZhciBkZWxheSA9IF9yZWY2LmRlbGF5LFxuICAgIG9mZnNldCA9IF9yZWY2Lm9mZnNldDtcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwge1xuICAgIGNzczogLyojX19QVVJFX18qL2NzcyQyKHtcbiAgICAgIGFuaW1hdGlvbjogXCJcIi5jb25jYXQobG9hZGluZ0RvdEFuaW1hdGlvbnMsIFwiIDFzIGVhc2UtaW4tb3V0IFwiKS5jb25jYXQoZGVsYXksIFwibXMgaW5maW5pdGU7XCIpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiO2xhYmVsOkxvYWRpbmdEb3Q7XCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVcxUlNTSXNJbVpwYkdVaU9pSnBibVJwWTJGMGIzSnpMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1NsTllMQ0JTWldGamRFNXZaR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnc0lHdGxlV1p5WVcxbGN5QjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwzSmxZV04wSnp0Y2JseHVhVzF3YjNKMElIdGNiaUFnUTI5dGJXOXVVSEp2Y0hOQmJtUkRiR0Z6YzA1aGJXVXNYRzRnSUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkN4Y2JpQWdSM0p2ZFhCQ1lYTmxMRnh1ZlNCbWNtOXRJQ2N1TGk5MGVYQmxjeWM3WEc1cGJYQnZjblFnZXlCblpYUlRkSGxzWlZCeWIzQnpJSDBnWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmk4dklFUnliM0JrYjNkdUlDWWdRMnhsWVhJZ1NXTnZibk5jYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JUZG1jZ1BTQW9lMXh1SUNCemFYcGxMRnh1SUNBdUxpNXdjbTl3YzF4dWZUb2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemRtY25YU0FtSUhzZ2MybDZaVG9nYm5WdFltVnlJSDBwSUQwK0lDaGNiaUFnUEhOMloxeHVJQ0FnSUdobGFXZG9kRDE3YzJsNlpYMWNiaUFnSUNCM2FXUjBhRDE3YzJsNlpYMWNiaUFnSUNCMmFXVjNRbTk0UFZ3aU1DQXdJREl3SURJd1hDSmNiaUFnSUNCaGNtbGhMV2hwWkdSbGJqMWNJblJ5ZFdWY0lseHVJQ0FnSUdadlkzVnpZV0pzWlQxY0ltWmhiSE5sWENKY2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnWm1sc2JEb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCc2FXNWxTR1ZwWjJoME9pQXhMRnh1SUNBZ0lDQWdjM1J5YjJ0bE9pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUhOMGNtOXJaVmRwWkhSb09pQXdMRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJSFI1Y0dVZ1EzSnZjM05KWTI5dVVISnZjSE1nUFNCS1UxZ3VTVzUwY21sdWMybGpSV3hsYldWdWRITmJKM04yWnlkZElDWWdleUJ6YVhwbFB6b2diblZ0WW1WeUlIMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ1EzSnZjM05KWTI5dUlEMGdLSEJ5YjNCek9pQkRjbTl6YzBsamIyNVFjbTl3Y3lrZ1BUNGdLRnh1SUNBOFUzWm5JSE5wZW1VOWV6SXdmU0I3TGk0dWNISnZjSE45UGx4dUlDQWdJRHh3WVhSb0lHUTlYQ0pOTVRRdU16UTRJREUwTGpnME9XTXRNQzQwTmprZ01DNDBOamt0TVM0eU1qa2dNQzQwTmprdE1TNDJPVGNnTUd3dE1pNDJOVEV0TXk0d016QXRNaTQyTlRFZ015NHdNamxqTFRBdU5EWTVJREF1TkRZNUxURXVNakk1SURBdU5EWTVMVEV1TmprM0lEQXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWprZ01DMHhMalk1TjJ3eUxqYzFPQzB6TGpFMUxUSXVOelU1TFRNdU1UVXlZeTB3TGpRMk9TMHdMalEyT1Mwd0xqUTJPUzB4TGpJeU9DQXdMVEV1TmprM2N6RXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnNNaTQyTlRJZ015NHdNekVnTWk0Mk5URXRNeTR3TXpGak1DNDBOamt0TUM0ME5qa2dNUzR5TWpndE1DNDBOamtnTVM0Mk9UY2dNSE13TGpRMk9TQXhMakl5T1NBd0lERXVOamszYkMweUxqYzFPQ0F6TGpFMU1pQXlMamMxT0NBekxqRTFZekF1TkRZNUlEQXVORFk1SURBdU5EWTVJREV1TWpJNUlEQWdNUzQyT1RoNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVaWGh3YjNKMElIUjVjR1VnUkc5M2JrTm9aWFp5YjI1UWNtOXdjeUE5SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25jM1puSjEwZ0ppQjdJSE5wZW1VL09pQnVkVzFpWlhJZ2ZUdGNibVY0Y0c5eWRDQmpiMjV6ZENCRWIzZHVRMmhsZG5KdmJpQTlJQ2h3Y205d2N6b2dSRzkzYmtOb1pYWnliMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk5DNDFNVFlnTnk0MU5EaGpNQzQwTXpZdE1DNDBORFlnTVM0d05ETXRNQzQwT0RFZ01TNDFOellnTUd3ekxqa3dPQ0F6TGpjME55QXpMamt3T0MwekxqYzBOMk13TGpVek15MHdMalE0TVNBeExqRTBNUzB3TGpRME5pQXhMalUzTkNBd0lEQXVORE0ySURBdU5EUTFJREF1TkRBNElERXVNVGszSURBZ01TNDJNVFV0TUM0ME1EWWdNQzQwTVRndE5DNDJPVFVnTkM0MU1ESXROQzQyT1RVZ05DNDFNREl0TUM0eU1UY2dNQzR5TWpNdE1DNDFNRElnTUM0ek16VXRNQzQzT0RjZ01DNHpNelZ6TFRBdU5UY3RNQzR4TVRJdE1DNDNPRGt0TUM0ek16VmpNQ0F3TFRRdU1qZzNMVFF1TURnMExUUXVOamsxTFRRdU5UQXljeTB3TGpRek5pMHhMakUzSURBdE1TNDJNVFY2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdRblYwZEc5dWMxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4Y2JpQWdUM0IwYVc5dUlEMGdkVzVyYm05M2JpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNGdQU0JpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtJRDBnUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0Z1pYaDBaVzVrY3lCRGIyMXRiMjVRY205d2MwRnVaRU5zWVhOelRtRnRaVHhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BpQjdYRzRnSUM4cUtpQlVhR1VnWTJocGJHUnlaVzRnZEc4Z1ltVWdjbVZ1WkdWeVpXUWdhVzV6YVdSbElIUm9aU0JwYm1ScFkyRjBiM0l1SUNvdlhHNGdJR05vYVd4a2NtVnVQem9nVW1WaFkzUk9iMlJsTzF4dUlDQXZLaW9nVUhKdmNITWdkR2hoZENCM2FXeHNJR0psSUhCaGMzTmxaQ0J2YmlCMGJ5QjBhR1VnWTJocGJHUnlaVzR1SUNvdlhHNGdJR2x1Ym1WeVVISnZjSE02SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25aR2wySjEwN1hHNGdJQzhxS2lCVWFHVWdabTlqZFhObFpDQnpkR0YwWlNCdlppQjBhR1VnYzJWc1pXTjBMaUFxTDF4dUlDQnBjMFp2WTNWelpXUTZJR0p2YjJ4bFlXNDdYRzRnSUdselJHbHpZV0pzWldRNklHSnZiMnhsWVc0N1hHNTlYRzVjYm1OdmJuTjBJR0poYzJWRFUxTWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUh0Y2JpQWdJQ0JwYzBadlkzVnpaV1FzWEc0Z0lDQWdkR2hsYldVNklIdGNiaUFnSUNBZ0lITndZV05wYm1jNklIc2dZbUZ6WlZWdWFYUWdmU3hjYmlBZ0lDQWdJR052Ykc5eWN5eGNiaUFnSUNCOUxGeHVJQ0I5T2x4dUlDQWdJSHdnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUlDQWdJSHdnUTJ4bFlYSkpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaXhjYmlBZ2RXNXpkSGxzWldRNklHSnZiMnhsWVc1Y2JpazZJRU5UVTA5aWFtVmpkRmRwZEdoTVlXSmxiQ0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZja052Ym5SaGFXNWxjaWNzWEc0Z0lHUnBjM0JzWVhrNklDZG1iR1Y0Snl4Y2JpQWdkSEpoYm5OcGRHbHZiam9nSjJOdmJHOXlJREUxTUcxekp5eGNiaUFnTGk0dUtIVnVjM1I1YkdWa1hHNGdJQ0FnUHlCN2ZWeHVJQ0FnSURvZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ2FYTkdiMk4xYzJWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3Mk1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUNBZ0lDQWdJSEJoWkdScGJtYzZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdJQ0FnSUNBZ0p6cG9iM1psY2ljNklIdGNiaUFnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzRNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNOREFzWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVSeWIzQmtiM2R1U1c1a2FXTmhkRzl5SUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0Z4dUlDQndjbTl3Y3pvZ1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVLU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMmhwYkdSeVpXNHNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVuWlhSVGRIbHNaVkJ5YjNCektIQnliM0J6TENBblpISnZjR1J2ZDI1SmJtUnBZMkYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdKMlJ5YjNCa2IzZHVMV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQjlLWDFjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThSRzkzYmtOb1pYWnliMjRnTHo1OVhHNGdJQ0FnUEM5a2FYWStYRzRnSUNrN1hHNTlPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVOc1pXRnlTVzVrYVdOaGRHOXlVSEp2Y0hNOFhHNGdJRTl3ZEdsdmJpQTlJSFZ1YTI1dmQyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVJRDBnWW05dmJHVmhiaXhjYmlBZ1IzSnZkWEFnWlhoMFpXNWtjeUJIY205MWNFSmhjMlU4VDNCMGFXOXVQaUE5SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0lHVjRkR1Z1WkhNZ1EyOXRiVzl1VUhKdmNITkJibVJEYkdGemMwNWhiV1U4VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENGdlMXh1SUNBdktpb2dWR2hsSUdOb2FXeGtjbVZ1SUhSdklHSmxJSEpsYm1SbGNtVmtJR2x1YzJsa1pTQjBhR1VnYVc1a2FXTmhkRzl5TGlBcUwxeHVJQ0JqYUdsc1pISmxiajg2SUZKbFlXTjBUbTlrWlR0Y2JpQWdMeW9xSUZCeWIzQnpJSFJvWVhRZ2QybHNiQ0JpWlNCd1lYTnpaV1FnYjI0Z2RHOGdkR2hsSUdOb2FXeGtjbVZ1TGlBcUwxeHVJQ0JwYm01bGNsQnliM0J6T2lCS1UxZ3VTVzUwY21sdWMybGpSV3hsYldWdWRITmJKMlJwZGlkZE8xeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4bFlYSkpibVJwWTJGMGIzSkRVMU1nUFNCaVlYTmxRMU5UTzF4dVpYaHdiM0owSUdOdmJuTjBJRU5zWldGeVNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dRMnhsWVhKSmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVLU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMmhwYkdSeVpXNHNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVuWlhSVGRIbHNaVkJ5YjNCektIQnliM0J6TENBblkyeGxZWEpKYm1ScFkyRjBiM0luTENCN1hHNGdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0oyTnNaV0Z5TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4UTNKdmMzTkpZMjl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QlRaWEJoY21GMGIzSmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWx1WkdsallYUnZjbE5sY0dGeVlYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ2FYTkVhWE5oWW14bFpEb2dZbTl2YkdWaGJqdGNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBibTVsY2xCeWIzQnpQem9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpjR0Z1SjEwN1hHNTlYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBibVJwWTJGMGIzSlRaWEJoY21GMGIzSkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwUnBjMkZpYkdWa0xGeHVJQ0FnSUhSb1pXMWxPaUI3WEc0Z0lDQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnSUNCamIyeHZjbk1zWEc0Z0lDQWdmU3hjYmlBZ2ZUb2dTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRzWEc0Z0lIVnVjM1I1YkdWa09pQmliMjlzWldGdVhHNHBPaUJEVTFOUFltcGxZM1JYYVhSb1RHRmlaV3dnUFQ0Z0tIdGNiaUFnYkdGaVpXdzZJQ2RwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0luTEZ4dUlDQmhiR2xuYmxObGJHWTZJQ2R6ZEhKbGRHTm9KeXhjYmlBZ2QybGtkR2c2SURFc1hHNGdJQzR1TGloMWJuTjBlV3hsWkZ4dUlDQWdJRDhnZTMxY2JpQWdJQ0E2SUh0Y2JpQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpFTnZiRzl5T2lCcGMwUnBjMkZpYkdWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3eE1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUNBZ0lDQWdJRzFoY21kcGJrSnZkSFJ2YlRvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNBZ0lDQWdJQ0J0WVhKbmFXNVViM0E2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lIMHBMRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCSmJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSEJ5YjNCek9pQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnYVc1dVpYSlFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BITndZVzVjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUNBZ2V5NHVMbWRsZEZOMGVXeGxVSEp2Y0hNb2NISnZjSE1zSUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJQ2RwYm1ScFkyRjBiM0l0YzJWd1lYSmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJSDBwZlZ4dUlDQWdJQzgrWEc0Z0lDazdYRzU5TzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRXh2WVdScGJtZGNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVqYjI1emRDQnNiMkZrYVc1blJHOTBRVzVwYldGMGFXOXVjeUE5SUd0bGVXWnlZVzFsYzJCY2JpQWdNQ1VzSURnd0pTd2dNVEF3SlNCN0lHOXdZV05wZEhrNklEQTdJSDFjYmlBZ05EQWxJSHNnYjNCaFkybDBlVG9nTVRzZ2ZWeHVZRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR3h2WVdScGJtZEpibVJwWTJGMGIzSkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwWnZZM1Z6WldRc1hHNGdJQ0FnYzJsNlpTeGNiaUFnSUNCMGFHVnRaVG9nZTF4dUlDQWdJQ0FnWTI5c2IzSnpMRnh1SUNBZ0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQWdJSDBzWEc0Z0lIMDZJRXh2WVdScGJtZEpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaXhjYmlBZ2RXNXpkSGxzWldRNklHSnZiMnhsWVc1Y2JpazZJRU5UVTA5aWFtVmpkRmRwZEdoTVlXSmxiQ0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIUnlZVzV6YVhScGIyNDZJQ2RqYjJ4dmNpQXhOVEJ0Y3ljc1hHNGdJR0ZzYVdkdVUyVnNaam9nSjJObGJuUmxjaWNzWEc0Z0lHWnZiblJUYVhwbE9pQnphWHBsTEZ4dUlDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQnRZWEpuYVc1U2FXZG9kRG9nYzJsNlpTeGNiaUFnZEdWNGRFRnNhV2R1T2lBblkyVnVkR1Z5Snl4Y2JpQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0oyMXBaR1JzWlNjc1hHNGdJQzR1TGloMWJuTjBlV3hsWkZ4dUlDQWdJRDhnZTMxY2JpQWdJQ0E2SUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0FnSUNBZ0lDQndZV1JrYVc1bk9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lDQWdJQ0I5S1N4Y2JuMHBPMXh1WEc1cGJuUmxjbVpoWTJVZ1RHOWhaR2x1WjBSdmRGQnliM0J6SUh0Y2JpQWdaR1ZzWVhrNklHNTFiV0psY2p0Y2JpQWdiMlptYzJWME9pQmliMjlzWldGdU8xeHVmVnh1WTI5dWMzUWdURzloWkdsdVowUnZkQ0E5SUNoN0lHUmxiR0Y1TENCdlptWnpaWFFnZlRvZ1RHOWhaR2x1WjBSdmRGQnliM0J6S1NBOVBpQW9YRzRnSUR4emNHRnVYRzRnSUNBZ1kzTnpQWHQ3WEc0Z0lDQWdJQ0JoYm1sdFlYUnBiMjQ2SUdBa2UyeHZZV1JwYm1kRWIzUkJibWx0WVhScGIyNXpmU0F4Y3lCbFlYTmxMV2x1TFc5MWRDQWtlMlJsYkdGNWZXMXpJR2x1Wm1sdWFYUmxPMkFzWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUFuTVdWdEp5eGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnYldGeVoybHVUR1ZtZERvZ2IyWm1jMlYwSUQ4Z0p6RmxiU2NnT2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SUNjeFpXMG5MRnh1SUNBZ0lDQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0ozUnZjQ2NzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekZsYlNjc1hHNGdJQ0FnZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVPMXh1SUNBdktpb2dVMlYwSUhOcGVtVWdiMllnZEdobElHTnZiblJoYVc1bGNpNGdLaTljYmlBZ2MybDZaVG9nYm5WdFltVnlPMXh1ZlZ4dVpYaHdiM0owSUdOdmJuTjBJRXh2WVdScGJtZEpibVJwWTJGMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9lMXh1SUNCcGJtNWxjbEJ5YjNCekxGeHVJQ0JwYzFKMGJDeGNiaUFnYzJsNlpTQTlJRFFzWEc0Z0lDNHVMbkpsYzNSUWNtOXdjMXh1ZlRvZ1RHOWhaR2x1WjBsdVpHbGpZWFJ2Y2xCeWIzQnpQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0tTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdScGRseHVJQ0FnSUNBZ2V5NHVMbWRsZEZOMGVXeGxVSEp2Y0hNb1hHNGdJQ0FnSUNBZ0lIc2dMaTR1Y21WemRGQnliM0J6TENCcGJtNWxjbEJ5YjNCekxDQnBjMUowYkN3Z2MybDZaU0I5TEZ4dUlDQWdJQ0FnSUNBbmJHOWhaR2x1WjBsdVpHbGpZWFJ2Y2ljc1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSjJ4dllXUnBibWN0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3dmU0J2Wm1aelpYUTllMmx6VW5Sc2ZTQXZQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllekUyTUgwZ2IyWm1jMlYwSUM4K1hHNGdJQ0FnSUNBOFRHOWhaR2x1WjBSdmRDQmtaV3hoZVQxN016SXdmU0J2Wm1aelpYUTlleUZwYzFKMGJIMGdMejVjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNGlYWDA9ICovXCIpXG4gIH0pO1xufTtcbnZhciBMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcihfcmVmNykge1xuICB2YXIgaW5uZXJQcm9wcyA9IF9yZWY3LmlubmVyUHJvcHMsXG4gICAgaXNSdGwgPSBfcmVmNy5pc1J0bCxcbiAgICBfcmVmNyRzaXplID0gX3JlZjcuc2l6ZSxcbiAgICBzaXplID0gX3JlZjckc2l6ZSA9PT0gdm9pZCAwID8gNCA6IF9yZWY3JHNpemUsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY3LCBfZXhjbHVkZWQyKTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3RQcm9wcyksIHt9LCB7XG4gICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICBpc1J0bDogaXNSdGwsXG4gICAgc2l6ZTogc2l6ZVxuICB9KSwgJ2xvYWRpbmdJbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAwLFxuICAgIG9mZnNldDogaXNSdGxcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDE2MCxcbiAgICBvZmZzZXQ6IHRydWVcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDMyMCxcbiAgICBvZmZzZXQ6ICFpc1J0bFxuICB9KSk7XG59O1xuXG52YXIgY3NzJDEgPSBmdW5jdGlvbiBjc3MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgaXNGb2N1c2VkID0gX3JlZi5pc0ZvY3VzZWQsXG4gICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnMsXG4gICAgYm9yZGVyUmFkaXVzID0gX3JlZiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnY29udHJvbCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5IZWlnaHQ6IHNwYWNpbmcuY29udHJvbEhlaWdodCxcbiAgICBvdXRsaW5lOiAnMCAhaW1wb3J0YW50JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDEwMG1zJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNSA6IGNvbG9ycy5uZXV0cmFsMCxcbiAgICBib3JkZXJDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm94U2hhZG93OiBpc0ZvY3VzZWQgPyBcIjAgMCAwIDFweCBcIi5jb25jYXQoY29sb3JzLnByaW1hcnkpIDogdW5kZWZpbmVkLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwzMFxuICAgIH1cbiAgfSk7XG59O1xudmFyIENvbnRyb2wgPSBmdW5jdGlvbiBDb250cm9sKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGdldFN0eWxlUHJvcHMocHJvcHMsICdjb250cm9sJywge1xuICAgIGNvbnRyb2w6IHRydWUsXG4gICAgJ2NvbnRyb2wtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAnY29udHJvbC0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAnY29udHJvbC0tbWVudS1pcy1vcGVuJzogbWVudUlzT3BlblxuICB9KSwgaW5uZXJQcm9wcywge1xuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBpc0Rpc2FibGVkIHx8IHVuZGVmaW5lZFxuICB9KSwgY2hpbGRyZW4pO1xufTtcbnZhciBDb250cm9sJDEgPSBDb250cm9sO1xuXG52YXIgX2V4Y2x1ZGVkJDEgPSBbXCJkYXRhXCJdO1xudmFyIGdyb3VwQ1NTID0gZnVuY3Rpb24gZ3JvdXBDU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB1bnN0eWxlZCA/IHt9IDoge1xuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgKiAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgKiAyXG4gIH07XG59O1xudmFyIEdyb3VwID0gZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgY3ggPSBwcm9wcy5jeCxcbiAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgZ2V0Q2xhc3NOYW1lcyA9IHByb3BzLmdldENsYXNzTmFtZXMsXG4gICAgSGVhZGluZyA9IHByb3BzLkhlYWRpbmcsXG4gICAgaGVhZGluZ1Byb3BzID0gcHJvcHMuaGVhZGluZ1Byb3BzLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgdGhlbWUgPSBwcm9wcy50aGVtZSxcbiAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnZ3JvdXAnLCB7XG4gICAgZ3JvdXA6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBqc3goSGVhZGluZywgX2V4dGVuZHMoe30sIGhlYWRpbmdQcm9wcywge1xuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wcyxcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgZ2V0Q2xhc3NOYW1lczogZ2V0Q2xhc3NOYW1lcyxcbiAgICBjeDogY3hcbiAgfSksIGxhYmVsKSwganN4KFwiZGl2XCIsIG51bGwsIGNoaWxkcmVuKSk7XG59O1xudmFyIGdyb3VwSGVhZGluZ0NTUyA9IGZ1bmN0aW9uIGdyb3VwSGVhZGluZ0NTUyhfcmVmMiwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYyJHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgIHNwYWNpbmcgPSBfcmVmMiR0aGVtZS5zcGFjaW5nO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdncm91cCcsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgIGZvbnRTaXplOiAnNzUlJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbWFyZ2luQm90dG9tOiAnMC4yNWVtJyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9KTtcbn07XG52YXIgR3JvdXBIZWFkaW5nID0gZnVuY3Rpb24gR3JvdXBIZWFkaW5nKHByb3BzKSB7XG4gIHZhciBfY2xlYW5Db21tb25Qcm9wcyA9IGNsZWFuQ29tbW9uUHJvcHMocHJvcHMpO1xuICAgIF9jbGVhbkNvbW1vblByb3BzLmRhdGE7XG4gICAgdmFyIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NsZWFuQ29tbW9uUHJvcHMsIF9leGNsdWRlZCQxKTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2dyb3VwSGVhZGluZycsIHtcbiAgICAnZ3JvdXAtaGVhZGluZyc6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpKTtcbn07XG52YXIgR3JvdXAkMSA9IEdyb3VwO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiaW5uZXJSZWZcIiwgXCJpc0Rpc2FibGVkXCIsIFwiaXNIaWRkZW5cIiwgXCJpbnB1dENsYXNzTmFtZVwiXTtcbnZhciBpbnB1dENTUyA9IGZ1bmN0aW9uIGlucHV0Q1NTKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICB2aXNpYmlsaXR5OiBpc0Rpc2FibGVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScsXG4gICAgLy8gZm9yY2UgY3NzIHRvIHJlY29tcHV0ZSB3aGVuIHZhbHVlIGNoYW5nZSBkdWUgdG8gQGVtb3Rpb24gYnVnLlxuICAgIC8vIFdlIGNhbiByZW1vdmUgaXQgd2hlbmV2ZXIgdGhlIGJ1ZyBpcyBmaXhlZC5cbiAgICB0cmFuc2Zvcm06IHZhbHVlID8gJ3RyYW5zbGF0ZVooMCknIDogJydcbiAgfSwgY29udGFpbmVyU3R5bGUpLCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODBcbiAgfSk7XG59O1xudmFyIHNwYWNpbmdTdHlsZSA9IHtcbiAgZ3JpZEFyZWE6ICcxIC8gMicsXG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWluV2lkdGg6ICcycHgnLFxuICBib3JkZXI6IDAsXG4gIG1hcmdpbjogMCxcbiAgb3V0bGluZTogMCxcbiAgcGFkZGluZzogMFxufTtcbnZhciBjb250YWluZXJTdHlsZSA9IHtcbiAgZmxleDogJzEgMSBhdXRvJyxcbiAgZGlzcGxheTogJ2lubGluZS1ncmlkJyxcbiAgZ3JpZEFyZWE6ICcxIC8gMSAvIDIgLyAzJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzAgbWluLWNvbnRlbnQnLFxuICAnJjphZnRlcic6IF9vYmplY3RTcHJlYWQoe1xuICAgIGNvbnRlbnQ6ICdhdHRyKGRhdGEtdmFsdWUpIFwiIFwiJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAncHJlJ1xuICB9LCBzcGFjaW5nU3R5bGUpXG59O1xudmFyIGlucHV0U3R5bGUgPSBmdW5jdGlvbiBpbnB1dFN0eWxlKGlzSGlkZGVuKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ2lucHV0JyxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIGJhY2tncm91bmQ6IDAsXG4gICAgb3BhY2l0eTogaXNIaWRkZW4gPyAwIDogMSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sIHNwYWNpbmdTdHlsZSk7XG59O1xudmFyIElucHV0ID0gZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgdmFyIGN4ID0gcHJvcHMuY3gsXG4gICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgdmFyIF9jbGVhbkNvbW1vblByb3BzID0gY2xlYW5Db21tb25Qcm9wcyhwcm9wcyksXG4gICAgaW5uZXJSZWYgPSBfY2xlYW5Db21tb25Qcm9wcy5pbm5lclJlZixcbiAgICBpc0Rpc2FibGVkID0gX2NsZWFuQ29tbW9uUHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpc0hpZGRlbiA9IF9jbGVhbkNvbW1vblByb3BzLmlzSGlkZGVuLFxuICAgIGlucHV0Q2xhc3NOYW1lID0gX2NsZWFuQ29tbW9uUHJvcHMuaW5wdXRDbGFzc05hbWUsXG4gICAgaW5uZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2xlYW5Db21tb25Qcm9wcywgX2V4Y2x1ZGVkKTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2lucHV0Jywge1xuICAgICdpbnB1dC1jb250YWluZXInOiB0cnVlXG4gIH0pLCB7XG4gICAgXCJkYXRhLXZhbHVlXCI6IHZhbHVlIHx8ICcnXG4gIH0pLCBqc3goXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbnB1dDogdHJ1ZVxuICAgIH0sIGlucHV0Q2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIHN0eWxlOiBpbnB1dFN0eWxlKGlzSGlkZGVuKSxcbiAgICBkaXNhYmxlZDogaXNEaXNhYmxlZFxuICB9LCBpbm5lclByb3BzKSkpO1xufTtcbnZhciBJbnB1dCQxID0gSW5wdXQ7XG5cbnZhciBtdWx0aVZhbHVlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUNTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnbXVsdGlWYWx1ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbldpZHRoOiAwXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubmV1dHJhbDEwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBtYXJnaW46IHNwYWNpbmcuYmFzZVVuaXQgLyAyXG4gIH0pO1xufTtcbnZhciBtdWx0aVZhbHVlTGFiZWxDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlTGFiZWxDU1MoX3JlZjIsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnMsXG4gICAgY3JvcFdpdGhFbGxpcHNpcyA9IF9yZWYyLmNyb3BXaXRoRWxsaXBzaXM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiBjcm9wV2l0aEVsbGlwc2lzIHx8IGNyb3BXaXRoRWxsaXBzaXMgPT09IHVuZGVmaW5lZCA/ICdlbGxpcHNpcycgOiB1bmRlZmluZWQsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODAsXG4gICAgZm9udFNpemU6ICc4NSUnLFxuICAgIHBhZGRpbmc6IDMsXG4gICAgcGFkZGluZ0xlZnQ6IDZcbiAgfSk7XG59O1xudmFyIG11bHRpVmFsdWVSZW1vdmVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlUmVtb3ZlQ1NTKF9yZWYzLCB1bnN0eWxlZCkge1xuICB2YXIgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZjMkdGhlbWUuc3BhY2luZyxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmMyR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzLFxuICAgIGlzRm9jdXNlZCA9IF9yZWYzLmlzRm9jdXNlZDtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5kYW5nZXJMaWdodCA6IHVuZGVmaW5lZCxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhbmdlckxpZ2h0LFxuICAgICAgY29sb3I6IGNvbG9ycy5kYW5nZXJcbiAgICB9XG4gIH0pO1xufTtcbnZhciBNdWx0aVZhbHVlR2VuZXJpYyA9IGZ1bmN0aW9uIE11bHRpVmFsdWVHZW5lcmljKF9yZWY0KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBfcmVmNC5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuKTtcbn07XG52YXIgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IE11bHRpVmFsdWVHZW5lcmljO1xudmFyIE11bHRpVmFsdWVMYWJlbCA9IE11bHRpVmFsdWVHZW5lcmljO1xuZnVuY3Rpb24gTXVsdGlWYWx1ZVJlbW92ZShfcmVmNSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gX3JlZjUuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJidXR0b25cIlxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwge1xuICAgIHNpemU6IDE0XG4gIH0pKTtcbn1cbnZhciBNdWx0aVZhbHVlID0gZnVuY3Rpb24gTXVsdGlWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBjb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICByZW1vdmVQcm9wcyA9IHByb3BzLnJlbW92ZVByb3BzLFxuICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG4gIHZhciBDb250YWluZXIgPSBjb21wb25lbnRzLkNvbnRhaW5lcixcbiAgICBMYWJlbCA9IGNvbXBvbmVudHMuTGFiZWwsXG4gICAgUmVtb3ZlID0gY29tcG9uZW50cy5SZW1vdmU7XG4gIHJldHVybiBqc3goQ29udGFpbmVyLCB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtdWx0aVZhbHVlJywge1xuICAgICAgJ211bHRpLXZhbHVlJzogdHJ1ZSxcbiAgICAgICdtdWx0aS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgfSkpLCBpbm5lclByb3BzKSxcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgfSwganN4KExhYmVsLCB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnbXVsdGlWYWx1ZUxhYmVsJywge1xuICAgICAgJ211bHRpLXZhbHVlX19sYWJlbCc6IHRydWVcbiAgICB9KSksXG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gIH0sIGNoaWxkcmVuKSwganN4KFJlbW92ZSwge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnbXVsdGlWYWx1ZVJlbW92ZScsIHtcbiAgICAgICdtdWx0aS12YWx1ZV9fcmVtb3ZlJzogdHJ1ZVxuICAgIH0pKSwge30sIHtcbiAgICAgICdhcmlhLWxhYmVsJzogXCJSZW1vdmUgXCIuY29uY2F0KGNoaWxkcmVuIHx8ICdvcHRpb24nKVxuICAgIH0sIHJlbW92ZVByb3BzKSxcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgfSkpO1xufTtcbnZhciBNdWx0aVZhbHVlJDEgPSBNdWx0aVZhbHVlO1xuXG52YXIgb3B0aW9uQ1NTID0gZnVuY3Rpb24gb3B0aW9uQ1NTKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG4gICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnb3B0aW9uJyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkyNSA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDIwIDogaXNTZWxlY3RlZCA/IGNvbG9ycy5uZXV0cmFsMCA6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweCBcIikuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIC8vIHByb3ZpZGUgc29tZSBhZmZvcmRhbmNlIG9uIHRvdWNoIGRldmljZXNcbiAgICAnOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgPyBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMucHJpbWFyeTUwIDogdW5kZWZpbmVkXG4gICAgfVxuICB9KTtcbn07XG52YXIgT3B0aW9uID0gZnVuY3Rpb24gT3B0aW9uKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZCxcbiAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnb3B0aW9uJywge1xuICAgIG9wdGlvbjogdHJ1ZSxcbiAgICAnb3B0aW9uLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgJ29wdGlvbi0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAnb3B0aW9uLS1pcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWRcbiAgfSksIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBpc0Rpc2FibGVkXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIE9wdGlvbiQxID0gT3B0aW9uO1xuXG52YXIgcGxhY2Vob2xkZXJDU1MgPSBmdW5jdGlvbiBwbGFjZWhvbGRlckNTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAncGxhY2Vob2xkZXInLFxuICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMydcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw1MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDJcbiAgfSk7XG59O1xudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdwbGFjZWhvbGRlcicsIHtcbiAgICBwbGFjZWhvbGRlcjogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG52YXIgUGxhY2Vob2xkZXIkMSA9IFBsYWNlaG9sZGVyO1xuXG52YXIgY3NzID0gZnVuY3Rpb24gY3NzKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ3NpbmdsZVZhbHVlJyxcbiAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWw0MCA6IGNvbG9ycy5uZXV0cmFsODAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyXG4gIH0pO1xufTtcbnZhciBTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIFNpbmdsZVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnc2luZ2xlVmFsdWUnLCB7XG4gICAgJ3NpbmdsZS12YWx1ZSc6IHRydWUsXG4gICAgJ3NpbmdsZS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbnZhciBTaW5nbGVWYWx1ZSQxID0gU2luZ2xlVmFsdWU7XG5cbnZhciBjb21wb25lbnRzID0ge1xuICBDbGVhckluZGljYXRvcjogQ2xlYXJJbmRpY2F0b3IsXG4gIENvbnRyb2w6IENvbnRyb2wkMSxcbiAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duSW5kaWNhdG9yLFxuICBEb3duQ2hldnJvbjogRG93bkNoZXZyb24sXG4gIENyb3NzSWNvbjogQ3Jvc3NJY29uLFxuICBHcm91cDogR3JvdXAkMSxcbiAgR3JvdXBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gIEluZGljYXRvcnNDb250YWluZXI6IEluZGljYXRvcnNDb250YWluZXIsXG4gIEluZGljYXRvclNlcGFyYXRvcjogSW5kaWNhdG9yU2VwYXJhdG9yLFxuICBJbnB1dDogSW5wdXQkMSxcbiAgTG9hZGluZ0luZGljYXRvcjogTG9hZGluZ0luZGljYXRvcixcbiAgTWVudTogTWVudSQxLFxuICBNZW51TGlzdDogTWVudUxpc3QsXG4gIE1lbnVQb3J0YWw6IE1lbnVQb3J0YWwsXG4gIExvYWRpbmdNZXNzYWdlOiBMb2FkaW5nTWVzc2FnZSxcbiAgTm9PcHRpb25zTWVzc2FnZTogTm9PcHRpb25zTWVzc2FnZSxcbiAgTXVsdGlWYWx1ZTogTXVsdGlWYWx1ZSQxLFxuICBNdWx0aVZhbHVlQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICBNdWx0aVZhbHVlTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgTXVsdGlWYWx1ZVJlbW92ZTogTXVsdGlWYWx1ZVJlbW92ZSxcbiAgT3B0aW9uOiBPcHRpb24kMSxcbiAgUGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyJDEsXG4gIFNlbGVjdENvbnRhaW5lcjogU2VsZWN0Q29udGFpbmVyLFxuICBTaW5nbGVWYWx1ZTogU2luZ2xlVmFsdWUkMSxcbiAgVmFsdWVDb250YWluZXI6IFZhbHVlQ29udGFpbmVyXG59O1xudmFyIGRlZmF1bHRDb21wb25lbnRzID0gZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudHMocHJvcHMpIHtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY29tcG9uZW50cyksIHByb3BzLmNvbXBvbmVudHMpO1xufTtcblxuZXhwb3J0IHsgaXNNb2JpbGVEZXZpY2UgYXMgQSwgbXVsdGlWYWx1ZUFzVmFsdWUgYXMgQiwgc2luZ2xlVmFsdWVBc1ZhbHVlIGFzIEMsIHZhbHVlVGVybmFyeSBhcyBELCBjbGFzc05hbWVzIGFzIEUsIGRlZmF1bHRDb21wb25lbnRzIGFzIEYsIGlzRG9jdW1lbnRFbGVtZW50IGFzIEcsIGNsZWFuVmFsdWUgYXMgSCwgc2Nyb2xsSW50b1ZpZXcgYXMgSSwgbm9vcCBhcyBKLCBub3ROdWxsaXNoIGFzIEssIGhhbmRsZUlucHV0Q2hhbmdlIGFzIEwsIE1lbnVQbGFjZXIgYXMgTSwgY2xlYXJJbmRpY2F0b3JDU1MgYXMgYSwgY29udGFpbmVyQ1NTIGFzIGIsIGNvbXBvbmVudHMgYXMgYywgY3NzJDEgYXMgZCwgZHJvcGRvd25JbmRpY2F0b3JDU1MgYXMgZSwgZ3JvdXBIZWFkaW5nQ1NTIGFzIGYsIGdyb3VwQ1NTIGFzIGcsIGluZGljYXRvclNlcGFyYXRvckNTUyBhcyBoLCBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTIGFzIGksIGlucHV0Q1NTIGFzIGosIGxvYWRpbmdNZXNzYWdlQ1NTIGFzIGssIGxvYWRpbmdJbmRpY2F0b3JDU1MgYXMgbCwgbWVudUNTUyBhcyBtLCBtZW51TGlzdENTUyBhcyBuLCBtZW51UG9ydGFsQ1NTIGFzIG8sIG11bHRpVmFsdWVDU1MgYXMgcCwgbXVsdGlWYWx1ZUxhYmVsQ1NTIGFzIHEsIHJlbW92ZVByb3BzIGFzIHIsIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyBhcyBzLCBtdWx0aVZhbHVlUmVtb3ZlQ1NTIGFzIHQsIG5vT3B0aW9uc01lc3NhZ2VDU1MgYXMgdSwgb3B0aW9uQ1NTIGFzIHYsIHBsYWNlaG9sZGVyQ1NTIGFzIHcsIGNzcyBhcyB4LCB2YWx1ZUNvbnRhaW5lckNTUyBhcyB5LCBpc1RvdWNoQ2FwYWJsZSBhcyB6IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzYWZlSXNOYU4gPSBOdW1iZXIuaXNOYU4gfHxcbiAgICBmdW5jdGlvbiBwb255ZmlsbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWU7XG4gICAgfTtcbmZ1bmN0aW9uIGlzRXF1YWwoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2FmZUlzTmFOKGZpcnN0KSAmJiBzYWZlSXNOYU4oc2Vjb25kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsKG5ld0lucHV0c1tpXSwgbGFzdElucHV0c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGNhY2hlID0gbnVsbDtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FjaGUgJiYgY2FjaGUubGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBjYWNoZS5sYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5sYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIGNhY2hlID0ge1xuICAgICAgICAgICAgbGFzdFJlc3VsdDogbGFzdFJlc3VsdCxcbiAgICAgICAgICAgIGxhc3RBcmdzOiBuZXdBcmdzLFxuICAgICAgICAgICAgbGFzdFRoaXM6IHRoaXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICBtZW1vaXplZC5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBjYWNoZSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZU9uZTtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDInO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlcic7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8sIEZyYWdtZW50LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHIgYXMgcmVtb3ZlUHJvcHMsIHMgYXMgc3VwcG9ydHNQYXNzaXZlRXZlbnRzLCBhIGFzIGNsZWFySW5kaWNhdG9yQ1NTLCBiIGFzIGNvbnRhaW5lckNTUywgZCBhcyBjc3MkMSwgZSBhcyBkcm9wZG93bkluZGljYXRvckNTUywgZyBhcyBncm91cENTUywgZiBhcyBncm91cEhlYWRpbmdDU1MsIGkgYXMgaW5kaWNhdG9yc0NvbnRhaW5lckNTUywgaCBhcyBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsIGogYXMgaW5wdXRDU1MsIGwgYXMgbG9hZGluZ0luZGljYXRvckNTUywgayBhcyBsb2FkaW5nTWVzc2FnZUNTUywgbSBhcyBtZW51Q1NTLCBuIGFzIG1lbnVMaXN0Q1NTLCBvIGFzIG1lbnVQb3J0YWxDU1MsIHAgYXMgbXVsdGlWYWx1ZUNTUywgcSBhcyBtdWx0aVZhbHVlTGFiZWxDU1MsIHQgYXMgbXVsdGlWYWx1ZVJlbW92ZUNTUywgdSBhcyBub09wdGlvbnNNZXNzYWdlQ1NTLCB2IGFzIG9wdGlvbkNTUywgdyBhcyBwbGFjZWhvbGRlckNTUywgeCBhcyBjc3MkMiwgeSBhcyB2YWx1ZUNvbnRhaW5lckNTUywgeiBhcyBpc1RvdWNoQ2FwYWJsZSwgQSBhcyBpc01vYmlsZURldmljZSwgQiBhcyBtdWx0aVZhbHVlQXNWYWx1ZSwgQyBhcyBzaW5nbGVWYWx1ZUFzVmFsdWUsIEQgYXMgdmFsdWVUZXJuYXJ5LCBFIGFzIGNsYXNzTmFtZXMsIEYgYXMgZGVmYXVsdENvbXBvbmVudHMsIEcgYXMgaXNEb2N1bWVudEVsZW1lbnQsIEggYXMgY2xlYW5WYWx1ZSwgSSBhcyBzY3JvbGxJbnRvVmlldywgSiBhcyBub29wLCBNIGFzIE1lbnVQbGFjZXIsIEsgYXMgbm90TnVsbGlzaCB9IGZyb20gJy4vaW5kZXgtNjQxZWU1YjguZXNtLmpzJztcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDIoKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG4vLyBBc3Npc3RpdmUgdGV4dCB0byBkZXNjcmliZSB2aXN1YWwgZWxlbWVudHMuIEhpZGRlbiBmb3Igc2lnaHRlZCB1c2Vycy5cbnZhciBfcmVmID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjdwZzBjai1hMTF5VGV4dFwiLFxuICBzdHlsZXM6IFwibGFiZWw6YTExeVRleHQ7ei1pbmRleDo5OTk5O2JvcmRlcjowO2NsaXA6cmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO2hlaWdodDoxcHg7d2lkdGg6MXB4O3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm93cmFwXCJcbn0gOiB7XG4gIG5hbWU6IFwiMWY0M2F2ei1hMTF5VGV4dC1BMTF5VGV4dFwiLFxuICBzdHlsZXM6IFwibGFiZWw6YTExeVRleHQ7ei1pbmRleDo5OTk5O2JvcmRlcjowO2NsaXA6cmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO2hlaWdodDoxcHg7d2lkdGg6MXB4O3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm93cmFwO2xhYmVsOkExMXlUZXh0O1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtFeE1YbFVaWGgwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRlBTU0lzSW1acGJHVWlPaUpCTVRGNVZHVjRkQzUwYzNnaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9nUUdwemVDQnFjM2dnS2k5Y2JtbHRjRzl5ZENCN0lFcFRXQ0I5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJR3B6ZUNCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDNKbFlXTjBKenRjYmx4dUx5OGdRWE56YVhOMGFYWmxJSFJsZUhRZ2RHOGdaR1Z6WTNKcFltVWdkbWx6ZFdGc0lHVnNaVzFsYm5SekxpQklhV1JrWlc0Z1ptOXlJSE5wWjJoMFpXUWdkWE5sY25NdVhHNWpiMjV6ZENCQk1URjVWR1Y0ZENBOUlDaHdjbTl3Y3pvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMHBJRDArSUNoY2JpQWdQSE53WVc1Y2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHeGhZbVZzT2lBbllURXhlVlJsZUhRbkxGeHVJQ0FnSUNBZ2VrbHVaR1Y0T2lBNU9UazVMRnh1SUNBZ0lDQWdZbTl5WkdWeU9pQXdMRnh1SUNBZ0lDQWdZMnhwY0RvZ0ozSmxZM1FvTVhCNExDQXhjSGdzSURGd2VDd2dNWEI0S1Njc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SURFc1hHNGdJQ0FnSUNCM2FXUjBhRG9nTVN4Y2JpQWdJQ0FnSUhCdmMybDBhVzl1T2lBbllXSnpiMngxZEdVbkxGeHVJQ0FnSUNBZ2IzWmxjbVpzYjNjNklDZG9hV1JrWlc0bkxGeHVJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01DeGNiaUFnSUNBZ0lIZG9hWFJsVTNCaFkyVTZJQ2R1YjNkeVlYQW5MRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRVEV4ZVZSbGVIUTdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18kMlxufTtcbnZhciBBMTF5VGV4dCA9IGZ1bmN0aW9uIEExMXlUZXh0KHByb3BzKSB7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IF9yZWZcbiAgfSwgcHJvcHMpKTtcbn07XG52YXIgQTExeVRleHQkMSA9IEExMXlUZXh0O1xuXG52YXIgZGVmYXVsdEFyaWFMaXZlTWVzc2FnZXMgPSB7XG4gIGd1aWRhbmNlOiBmdW5jdGlvbiBndWlkYW5jZShwcm9wcykge1xuICAgIHZhciBpc1NlYXJjaGFibGUgPSBwcm9wcy5pc1NlYXJjaGFibGUsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIHRhYlNlbGVjdHNWYWx1ZSA9IHByb3BzLnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgIGNvbnRleHQgPSBwcm9wcy5jb250ZXh0LFxuICAgICAgaXNJbml0aWFsRm9jdXMgPSBwcm9wcy5pc0luaXRpYWxGb2N1cztcbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICByZXR1cm4gXCJVc2UgVXAgYW5kIERvd24gdG8gY2hvb3NlIG9wdGlvbnMsIHByZXNzIEVudGVyIHRvIHNlbGVjdCB0aGUgY3VycmVudGx5IGZvY3VzZWQgb3B0aW9uLCBwcmVzcyBFc2NhcGUgdG8gZXhpdCB0aGUgbWVudVwiLmNvbmNhdCh0YWJTZWxlY3RzVmFsdWUgPyAnLCBwcmVzcyBUYWIgdG8gc2VsZWN0IHRoZSBvcHRpb24gYW5kIGV4aXQgdGhlIG1lbnUnIDogJycsIFwiLlwiKTtcbiAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgcmV0dXJuIGlzSW5pdGlhbEZvY3VzID8gXCJcIi5jb25jYXQocHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCAnU2VsZWN0JywgXCIgaXMgZm9jdXNlZCBcIikuY29uY2F0KGlzU2VhcmNoYWJsZSA/ICcsdHlwZSB0byByZWZpbmUgbGlzdCcgOiAnJywgXCIsIHByZXNzIERvd24gdG8gb3BlbiB0aGUgbWVudSwgXCIpLmNvbmNhdChpc011bHRpID8gJyBwcmVzcyBsZWZ0IHRvIGZvY3VzIHNlbGVjdGVkIHZhbHVlcycgOiAnJykgOiAnJztcbiAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgcmV0dXJuICdVc2UgbGVmdCBhbmQgcmlnaHQgdG8gdG9nZ2xlIGJldHdlZW4gZm9jdXNlZCB2YWx1ZXMsIHByZXNzIEJhY2tzcGFjZSB0byByZW1vdmUgdGhlIGN1cnJlbnRseSBmb2N1c2VkIHZhbHVlJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShwcm9wcykge1xuICAgIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBfcHJvcHMkbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIGxhYmVsID0gX3Byb3BzJGxhYmVsID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRsYWJlbCxcbiAgICAgIGxhYmVscyA9IHByb3BzLmxhYmVscyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkO1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlICdkZXNlbGVjdC1vcHRpb24nOlxuICAgICAgY2FzZSAncG9wLXZhbHVlJzpcbiAgICAgIGNhc2UgJ3JlbW92ZS12YWx1ZSc6XG4gICAgICAgIHJldHVybiBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiLCBkZXNlbGVjdGVkLlwiKTtcbiAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgcmV0dXJuICdBbGwgc2VsZWN0ZWQgb3B0aW9ucyBoYXZlIGJlZW4gY2xlYXJlZC4nO1xuICAgICAgY2FzZSAnaW5pdGlhbC1pbnB1dC1mb2N1cyc6XG4gICAgICAgIHJldHVybiBcIm9wdGlvblwiLmNvbmNhdChsYWJlbHMubGVuZ3RoID4gMSA/ICdzJyA6ICcnLCBcIiBcIikuY29uY2F0KGxhYmVscy5qb2luKCcsJyksIFwiLCBzZWxlY3RlZC5cIik7XG4gICAgICBjYXNlICdzZWxlY3Qtb3B0aW9uJzpcbiAgICAgICAgcmV0dXJuIGlzRGlzYWJsZWQgPyBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiIGlzIGRpc2FibGVkLiBTZWxlY3QgYW5vdGhlciBvcHRpb24uXCIpIDogXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiwgc2VsZWN0ZWQuXCIpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSxcbiAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cyhwcm9wcykge1xuICAgIHZhciBjb250ZXh0ID0gcHJvcHMuY29udGV4dCxcbiAgICAgIGZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLFxuICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICBfcHJvcHMkbGFiZWwyID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbCA9IF9wcm9wcyRsYWJlbDIgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGxhYmVsMixcbiAgICAgIHNlbGVjdFZhbHVlID0gcHJvcHMuc2VsZWN0VmFsdWUsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgaXNBcHBsZURldmljZSA9IHByb3BzLmlzQXBwbGVEZXZpY2U7XG4gICAgdmFyIGdldEFycmF5SW5kZXggPSBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGFyciwgaXRlbSkge1xuICAgICAgcmV0dXJuIGFyciAmJiBhcnIubGVuZ3RoID8gXCJcIi5jb25jYXQoYXJyLmluZGV4T2YoaXRlbSkgKyAxLCBcIiBvZiBcIikuY29uY2F0KGFyci5sZW5ndGgpIDogJyc7XG4gICAgfTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ3ZhbHVlJyAmJiBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIFwidmFsdWUgXCIuY29uY2F0KGxhYmVsLCBcIiBmb2N1c2VkLCBcIikuY29uY2F0KGdldEFycmF5SW5kZXgoc2VsZWN0VmFsdWUsIGZvY3VzZWQpLCBcIi5cIik7XG4gICAgfVxuICAgIGlmIChjb250ZXh0ID09PSAnbWVudScgJiYgaXNBcHBsZURldmljZSkge1xuICAgICAgdmFyIGRpc2FibGVkID0gaXNEaXNhYmxlZCA/ICcgZGlzYWJsZWQnIDogJyc7XG4gICAgICB2YXIgc3RhdHVzID0gXCJcIi5jb25jYXQoaXNTZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpLmNvbmNhdChkaXNhYmxlZCk7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobGFiZWwpLmNvbmNhdChzdGF0dXMsIFwiLCBcIikuY29uY2F0KGdldEFycmF5SW5kZXgob3B0aW9ucywgZm9jdXNlZCksIFwiLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9LFxuICBvbkZpbHRlcjogZnVuY3Rpb24gb25GaWx0ZXIocHJvcHMpIHtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICByZXN1bHRzTWVzc2FnZSA9IHByb3BzLnJlc3VsdHNNZXNzYWdlO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChyZXN1bHRzTWVzc2FnZSkuY29uY2F0KGlucHV0VmFsdWUgPyAnIGZvciBzZWFyY2ggdGVybSAnICsgaW5wdXRWYWx1ZSA6ICcnLCBcIi5cIik7XG4gIH1cbn07XG5cbnZhciBMaXZlUmVnaW9uID0gZnVuY3Rpb24gTGl2ZVJlZ2lvbihwcm9wcykge1xuICB2YXIgYXJpYVNlbGVjdGlvbiA9IHByb3BzLmFyaWFTZWxlY3Rpb24sXG4gICAgZm9jdXNlZE9wdGlvbiA9IHByb3BzLmZvY3VzZWRPcHRpb24sXG4gICAgZm9jdXNlZFZhbHVlID0gcHJvcHMuZm9jdXNlZFZhbHVlLFxuICAgIGZvY3VzYWJsZU9wdGlvbnMgPSBwcm9wcy5mb2N1c2FibGVPcHRpb25zLFxuICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICBzZWxlY3RWYWx1ZSA9IHByb3BzLnNlbGVjdFZhbHVlLFxuICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHMsXG4gICAgaWQgPSBwcm9wcy5pZCxcbiAgICBpc0FwcGxlRGV2aWNlID0gcHJvcHMuaXNBcHBsZURldmljZTtcbiAgdmFyIGFyaWFMaXZlTWVzc2FnZXMgPSBzZWxlY3RQcm9wcy5hcmlhTGl2ZU1lc3NhZ2VzLFxuICAgIGdldE9wdGlvbkxhYmVsID0gc2VsZWN0UHJvcHMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgaW5wdXRWYWx1ZSA9IHNlbGVjdFByb3BzLmlucHV0VmFsdWUsXG4gICAgaXNNdWx0aSA9IHNlbGVjdFByb3BzLmlzTXVsdGksXG4gICAgaXNPcHRpb25EaXNhYmxlZCA9IHNlbGVjdFByb3BzLmlzT3B0aW9uRGlzYWJsZWQsXG4gICAgaXNTZWFyY2hhYmxlID0gc2VsZWN0UHJvcHMuaXNTZWFyY2hhYmxlLFxuICAgIG1lbnVJc09wZW4gPSBzZWxlY3RQcm9wcy5tZW51SXNPcGVuLFxuICAgIG9wdGlvbnMgPSBzZWxlY3RQcm9wcy5vcHRpb25zLFxuICAgIHNjcmVlblJlYWRlclN0YXR1cyA9IHNlbGVjdFByb3BzLnNjcmVlblJlYWRlclN0YXR1cyxcbiAgICB0YWJTZWxlY3RzVmFsdWUgPSBzZWxlY3RQcm9wcy50YWJTZWxlY3RzVmFsdWUsXG4gICAgaXNMb2FkaW5nID0gc2VsZWN0UHJvcHMuaXNMb2FkaW5nO1xuICB2YXIgYXJpYUxhYmVsID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGFiZWwnXTtcbiAgdmFyIGFyaWFMaXZlID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGl2ZSddO1xuXG4gIC8vIFVwZGF0ZSBhcmlhIGxpdmUgbWVzc2FnZSBjb25maWd1cmF0aW9uIHdoZW4gcHJvcCBjaGFuZ2VzXG4gIHZhciBtZXNzYWdlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRBcmlhTGl2ZU1lc3NhZ2VzKSwgYXJpYUxpdmVNZXNzYWdlcyB8fCB7fSk7XG4gIH0sIFthcmlhTGl2ZU1lc3NhZ2VzXSk7XG5cbiAgLy8gVXBkYXRlIGFyaWEgbGl2ZSBzZWxlY3RlZCBvcHRpb24gd2hlbiBwcm9wIGNoYW5nZXNcbiAgdmFyIGFyaWFTZWxlY3RlZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZXNzYWdlID0gJyc7XG4gICAgaWYgKGFyaWFTZWxlY3Rpb24gJiYgbWVzc2FnZXMub25DaGFuZ2UpIHtcbiAgICAgIHZhciBvcHRpb24gPSBhcmlhU2VsZWN0aW9uLm9wdGlvbixcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zID0gYXJpYVNlbGVjdGlvbi5vcHRpb25zLFxuICAgICAgICByZW1vdmVkVmFsdWUgPSBhcmlhU2VsZWN0aW9uLnJlbW92ZWRWYWx1ZSxcbiAgICAgICAgcmVtb3ZlZFZhbHVlcyA9IGFyaWFTZWxlY3Rpb24ucmVtb3ZlZFZhbHVlcyxcbiAgICAgICAgdmFsdWUgPSBhcmlhU2VsZWN0aW9uLnZhbHVlO1xuICAgICAgLy8gc2VsZWN0LW9wdGlvbiB3aGVuICFpc011bHRpIGRvZXMgbm90IHJldHVybiBvcHRpb24gc28gd2UgYXNzdW1lIHNlbGVjdGVkIG9wdGlvbiBpcyB2YWx1ZVxuICAgICAgdmFyIGFzT3B0aW9uID0gZnVuY3Rpb24gYXNPcHRpb24odmFsKSB7XG4gICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGp1c3Qgb25lIGl0ZW0gZnJvbSB0aGUgYWN0aW9uIHRoZW4gZ2V0IGl0cyBsYWJlbFxuICAgICAgdmFyIHNlbGVjdGVkID0gcmVtb3ZlZFZhbHVlIHx8IG9wdGlvbiB8fCBhc09wdGlvbih2YWx1ZSk7XG4gICAgICB2YXIgbGFiZWwgPSBzZWxlY3RlZCA/IGdldE9wdGlvbkxhYmVsKHNlbGVjdGVkKSA6ICcnO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgaXRlbXMgZnJvbSB0aGUgYWN0aW9uIHRoZW4gcmV0dXJuIGFuIGFycmF5IG9mIGxhYmVsc1xuICAgICAgdmFyIG11bHRpU2VsZWN0ZWQgPSBzZWxlY3RlZE9wdGlvbnMgfHwgcmVtb3ZlZFZhbHVlcyB8fCB1bmRlZmluZWQ7XG4gICAgICB2YXIgbGFiZWxzID0gbXVsdGlTZWxlY3RlZCA/IG11bHRpU2VsZWN0ZWQubWFwKGdldE9wdGlvbkxhYmVsKSA6IFtdO1xuICAgICAgdmFyIG9uQ2hhbmdlUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgLy8gbXVsdGlTZWxlY3RlZCBpdGVtcyBhcmUgdXN1YWxseSBpdGVtcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIHNlbGVjdGVkXG4gICAgICAgIC8vIG9yIHNldCBieSB0aGUgdXNlciBhcyBhIGRlZmF1bHQgdmFsdWUgc28gd2UgYXNzdW1lIHRoZXkgYXJlIG5vdCBkaXNhYmxlZFxuICAgICAgICBpc0Rpc2FibGVkOiBzZWxlY3RlZCAmJiBpc09wdGlvbkRpc2FibGVkKHNlbGVjdGVkLCBzZWxlY3RWYWx1ZSksXG4gICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgbGFiZWxzOiBsYWJlbHNcbiAgICAgIH0sIGFyaWFTZWxlY3Rpb24pO1xuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLm9uQ2hhbmdlKG9uQ2hhbmdlUHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSwgW2FyaWFTZWxlY3Rpb24sIG1lc3NhZ2VzLCBpc09wdGlvbkRpc2FibGVkLCBzZWxlY3RWYWx1ZSwgZ2V0T3B0aW9uTGFiZWxdKTtcbiAgdmFyIGFyaWFGb2N1c2VkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvY3VzTXNnID0gJyc7XG4gICAgdmFyIGZvY3VzZWQgPSBmb2N1c2VkT3B0aW9uIHx8IGZvY3VzZWRWYWx1ZTtcbiAgICB2YXIgaXNTZWxlY3RlZCA9ICEhKGZvY3VzZWRPcHRpb24gJiYgc2VsZWN0VmFsdWUgJiYgc2VsZWN0VmFsdWUuaW5jbHVkZXMoZm9jdXNlZE9wdGlvbikpO1xuICAgIGlmIChmb2N1c2VkICYmIG1lc3NhZ2VzLm9uRm9jdXMpIHtcbiAgICAgIHZhciBvbkZvY3VzUHJvcHMgPSB7XG4gICAgICAgIGZvY3VzZWQ6IGZvY3VzZWQsXG4gICAgICAgIGxhYmVsOiBnZXRPcHRpb25MYWJlbChmb2N1c2VkKSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNPcHRpb25EaXNhYmxlZChmb2N1c2VkLCBzZWxlY3RWYWx1ZSksXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgIG9wdGlvbnM6IGZvY3VzYWJsZU9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQ6IGZvY3VzZWQgPT09IGZvY3VzZWRPcHRpb24gPyAnbWVudScgOiAndmFsdWUnLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWUsXG4gICAgICAgIGlzQXBwbGVEZXZpY2U6IGlzQXBwbGVEZXZpY2VcbiAgICAgIH07XG4gICAgICBmb2N1c01zZyA9IG1lc3NhZ2VzLm9uRm9jdXMob25Gb2N1c1Byb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvY3VzTXNnO1xuICB9LCBbZm9jdXNlZE9wdGlvbiwgZm9jdXNlZFZhbHVlLCBnZXRPcHRpb25MYWJlbCwgaXNPcHRpb25EaXNhYmxlZCwgbWVzc2FnZXMsIGZvY3VzYWJsZU9wdGlvbnMsIHNlbGVjdFZhbHVlLCBpc0FwcGxlRGV2aWNlXSk7XG4gIHZhciBhcmlhUmVzdWx0cyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHRzTXNnID0gJyc7XG4gICAgaWYgKG1lbnVJc09wZW4gJiYgb3B0aW9ucy5sZW5ndGggJiYgIWlzTG9hZGluZyAmJiBtZXNzYWdlcy5vbkZpbHRlcikge1xuICAgICAgdmFyIHJlc3VsdHNNZXNzYWdlID0gc2NyZWVuUmVhZGVyU3RhdHVzKHtcbiAgICAgICAgY291bnQ6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoXG4gICAgICB9KTtcbiAgICAgIHJlc3VsdHNNc2cgPSBtZXNzYWdlcy5vbkZpbHRlcih7XG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgIHJlc3VsdHNNZXNzYWdlOiByZXN1bHRzTWVzc2FnZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzTXNnO1xuICB9LCBbZm9jdXNhYmxlT3B0aW9ucywgaW5wdXRWYWx1ZSwgbWVudUlzT3BlbiwgbWVzc2FnZXMsIG9wdGlvbnMsIHNjcmVlblJlYWRlclN0YXR1cywgaXNMb2FkaW5nXSk7XG4gIHZhciBpc0luaXRpYWxGb2N1cyA9IChhcmlhU2VsZWN0aW9uID09PSBudWxsIHx8IGFyaWFTZWxlY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyaWFTZWxlY3Rpb24uYWN0aW9uKSA9PT0gJ2luaXRpYWwtaW5wdXQtZm9jdXMnO1xuICB2YXIgYXJpYUd1aWRhbmNlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGd1aWRhbmNlTXNnID0gJyc7XG4gICAgaWYgKG1lc3NhZ2VzLmd1aWRhbmNlKSB7XG4gICAgICB2YXIgY29udGV4dCA9IGZvY3VzZWRWYWx1ZSA/ICd2YWx1ZScgOiBtZW51SXNPcGVuID8gJ21lbnUnIDogJ2lucHV0JztcbiAgICAgIGd1aWRhbmNlTXNnID0gbWVzc2FnZXMuZ3VpZGFuY2Uoe1xuICAgICAgICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgaXNEaXNhYmxlZDogZm9jdXNlZE9wdGlvbiAmJiBpc09wdGlvbkRpc2FibGVkKGZvY3VzZWRPcHRpb24sIHNlbGVjdFZhbHVlKSxcbiAgICAgICAgaXNNdWx0aTogaXNNdWx0aSxcbiAgICAgICAgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsXG4gICAgICAgIHRhYlNlbGVjdHNWYWx1ZTogdGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICBpc0luaXRpYWxGb2N1czogaXNJbml0aWFsRm9jdXNcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ3VpZGFuY2VNc2c7XG4gIH0sIFthcmlhTGFiZWwsIGZvY3VzZWRPcHRpb24sIGZvY3VzZWRWYWx1ZSwgaXNNdWx0aSwgaXNPcHRpb25EaXNhYmxlZCwgaXNTZWFyY2hhYmxlLCBtZW51SXNPcGVuLCBtZXNzYWdlcywgc2VsZWN0VmFsdWUsIHRhYlNlbGVjdHNWYWx1ZSwgaXNJbml0aWFsRm9jdXNdKTtcbiAgdmFyIFNjcmVlblJlYWRlclRleHQgPSBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChcInNwYW5cIiwge1xuICAgIGlkOiBcImFyaWEtc2VsZWN0aW9uXCJcbiAgfSwgYXJpYVNlbGVjdGVkKSwganN4KFwic3BhblwiLCB7XG4gICAgaWQ6IFwiYXJpYS1mb2N1c2VkXCJcbiAgfSwgYXJpYUZvY3VzZWQpLCBqc3goXCJzcGFuXCIsIHtcbiAgICBpZDogXCJhcmlhLXJlc3VsdHNcIlxuICB9LCBhcmlhUmVzdWx0cyksIGpzeChcInNwYW5cIiwge1xuICAgIGlkOiBcImFyaWEtZ3VpZGFuY2VcIlxuICB9LCBhcmlhR3VpZGFuY2UpKTtcbiAgcmV0dXJuIGpzeChGcmFnbWVudCwgbnVsbCwganN4KEExMXlUZXh0JDEsIHtcbiAgICBpZDogaWRcbiAgfSwgaXNJbml0aWFsRm9jdXMgJiYgU2NyZWVuUmVhZGVyVGV4dCksIGpzeChBMTF5VGV4dCQxLCB7XG4gICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmUsXG4gICAgXCJhcmlhLWF0b21pY1wiOiBcImZhbHNlXCIsXG4gICAgXCJhcmlhLXJlbGV2YW50XCI6IFwiYWRkaXRpb25zIHRleHRcIixcbiAgICByb2xlOiBcImxvZ1wiXG4gIH0sIGlzRm9jdXNlZCAmJiAhaXNJbml0aWFsRm9jdXMgJiYgU2NyZWVuUmVhZGVyVGV4dCkpO1xufTtcbnZhciBMaXZlUmVnaW9uJDEgPSBMaXZlUmVnaW9uO1xuXG52YXIgZGlhY3JpdGljcyA9IFt7XG4gIGJhc2U6ICdBJyxcbiAgbGV0dGVyczogXCJBXFx1MjRCNlxcdUZGMjFcXHhDMFxceEMxXFx4QzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx4QzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxceEM0XFx1MDFERVxcdTFFQTJcXHhDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXCJcbn0sIHtcbiAgYmFzZTogJ0FBJyxcbiAgbGV0dGVyczogXCJcXHVBNzMyXCJcbn0sIHtcbiAgYmFzZTogJ0FFJyxcbiAgbGV0dGVyczogXCJcXHhDNlxcdTAxRkNcXHUwMUUyXCJcbn0sIHtcbiAgYmFzZTogJ0FPJyxcbiAgbGV0dGVyczogXCJcXHVBNzM0XCJcbn0sIHtcbiAgYmFzZTogJ0FVJyxcbiAgbGV0dGVyczogXCJcXHVBNzM2XCJcbn0sIHtcbiAgYmFzZTogJ0FWJyxcbiAgbGV0dGVyczogXCJcXHVBNzM4XFx1QTczQVwiXG59LCB7XG4gIGJhc2U6ICdBWScsXG4gIGxldHRlcnM6IFwiXFx1QTczQ1wiXG59LCB7XG4gIGJhc2U6ICdCJyxcbiAgbGV0dGVyczogXCJCXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFcIlxufSwge1xuICBiYXNlOiAnQycsXG4gIGxldHRlcnM6IFwiQ1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xceEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRVwiXG59LCB7XG4gIGJhc2U6ICdEJyxcbiAgbGV0dGVyczogXCJEXFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OVwiXG59LCB7XG4gIGJhc2U6ICdEWicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMVxcdTAxQzRcIlxufSwge1xuICBiYXNlOiAnRHonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjJcXHUwMUM1XCJcbn0sIHtcbiAgYmFzZTogJ0UnLFxuICBsZXR0ZXJzOiBcIkVcXHUyNEJBXFx1RkYyNVxceEM4XFx4QzlcXHhDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHhDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVcIlxufSwge1xuICBiYXNlOiAnRicsXG4gIGxldHRlcnM6IFwiRlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXCJcbn0sIHtcbiAgYmFzZTogJ0cnLFxuICBsZXR0ZXJzOiBcIkdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RVwiXG59LCB7XG4gIGJhc2U6ICdIJyxcbiAgbGV0dGVyczogXCJIXFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RFwiXG59LCB7XG4gIGJhc2U6ICdJJyxcbiAgbGV0dGVyczogXCJJXFx1MjRCRVxcdUZGMjlcXHhDQ1xceENEXFx4Q0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx4Q0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTdcIlxufSwge1xuICBiYXNlOiAnSicsXG4gIGxldHRlcnM6IFwiSlxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhcIlxufSwge1xuICBiYXNlOiAnSycsXG4gIGxldHRlcnM6IFwiS1xcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJcIlxufSwge1xuICBiYXNlOiAnTCcsXG4gIGxldHRlcnM6IFwiTFxcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXCJcbn0sIHtcbiAgYmFzZTogJ0xKJyxcbiAgbGV0dGVyczogXCJcXHUwMUM3XCJcbn0sIHtcbiAgYmFzZTogJ0xqJyxcbiAgbGV0dGVyczogXCJcXHUwMUM4XCJcbn0sIHtcbiAgYmFzZTogJ00nLFxuICBsZXR0ZXJzOiBcIk1cXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXCJcbn0sIHtcbiAgYmFzZTogJ04nLFxuICBsZXR0ZXJzOiBcIk5cXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx4RDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XCJcbn0sIHtcbiAgYmFzZTogJ05KJyxcbiAgbGV0dGVyczogXCJcXHUwMUNBXCJcbn0sIHtcbiAgYmFzZTogJ05qJyxcbiAgbGV0dGVyczogXCJcXHUwMUNCXCJcbn0sIHtcbiAgYmFzZTogJ08nLFxuICBsZXR0ZXJzOiBcIk9cXHUyNEM0XFx1RkYyRlxceEQyXFx4RDNcXHhENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHhENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxceEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xceEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENcIlxufSwge1xuICBiYXNlOiAnT0knLFxuICBsZXR0ZXJzOiBcIlxcdTAxQTJcIlxufSwge1xuICBiYXNlOiAnT08nLFxuICBsZXR0ZXJzOiBcIlxcdUE3NEVcIlxufSwge1xuICBiYXNlOiAnT1UnLFxuICBsZXR0ZXJzOiBcIlxcdTAyMjJcIlxufSwge1xuICBiYXNlOiAnUCcsXG4gIGxldHRlcnM6IFwiUFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NFwiXG59LCB7XG4gIGJhc2U6ICdRJyxcbiAgbGV0dGVyczogXCJRXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFcIlxufSwge1xuICBiYXNlOiAnUicsXG4gIGxldHRlcnM6IFwiUlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJcIlxufSwge1xuICBiYXNlOiAnUycsXG4gIGxldHRlcnM6IFwiU1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRcIlxufSwge1xuICBiYXNlOiAnVCcsXG4gIGxldHRlcnM6IFwiVFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XCJcbn0sIHtcbiAgYmFzZTogJ1RaJyxcbiAgbGV0dGVyczogXCJcXHVBNzI4XCJcbn0sIHtcbiAgYmFzZTogJ1UnLFxuICBsZXR0ZXJzOiBcIlVcXHUyNENBXFx1RkYzNVxceEQ5XFx4REFcXHhEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx4RENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XCJcbn0sIHtcbiAgYmFzZTogJ1YnLFxuICBsZXR0ZXJzOiBcIlZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XCJcbn0sIHtcbiAgYmFzZTogJ1ZZJyxcbiAgbGV0dGVyczogXCJcXHVBNzYwXCJcbn0sIHtcbiAgYmFzZTogJ1cnLFxuICBsZXR0ZXJzOiBcIldcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJcIlxufSwge1xuICBiYXNlOiAnWCcsXG4gIGxldHRlcnM6IFwiWFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENcIlxufSwge1xuICBiYXNlOiAnWScsXG4gIGxldHRlcnM6IFwiWVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxceEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRVwiXG59LCB7XG4gIGJhc2U6ICdaJyxcbiAgbGV0dGVyczogXCJaXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2MlwiXG59LCB7XG4gIGJhc2U6ICdhJyxcbiAgbGV0dGVyczogXCJhXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx4RTBcXHhFMVxceEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxceEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHhFNFxcdTAxREZcXHUxRUEzXFx4RTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MFwiXG59LCB7XG4gIGJhc2U6ICdhYScsXG4gIGxldHRlcnM6IFwiXFx1QTczM1wiXG59LCB7XG4gIGJhc2U6ICdhZScsXG4gIGxldHRlcnM6IFwiXFx4RTZcXHUwMUZEXFx1MDFFM1wiXG59LCB7XG4gIGJhc2U6ICdhbycsXG4gIGxldHRlcnM6IFwiXFx1QTczNVwiXG59LCB7XG4gIGJhc2U6ICdhdScsXG4gIGxldHRlcnM6IFwiXFx1QTczN1wiXG59LCB7XG4gIGJhc2U6ICdhdicsXG4gIGxldHRlcnM6IFwiXFx1QTczOVxcdUE3M0JcIlxufSwge1xuICBiYXNlOiAnYXknLFxuICBsZXR0ZXJzOiBcIlxcdUE3M0RcIlxufSwge1xuICBiYXNlOiAnYicsXG4gIGxldHRlcnM6IFwiYlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXCJcbn0sIHtcbiAgYmFzZTogJ2MnLFxuICBsZXR0ZXJzOiBcImNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHhFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XCJcbn0sIHtcbiAgYmFzZTogJ2QnLFxuICBsZXR0ZXJzOiBcImRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXCJcbn0sIHtcbiAgYmFzZTogJ2R6JyxcbiAgbGV0dGVyczogXCJcXHUwMUYzXFx1MDFDNlwiXG59LCB7XG4gIGJhc2U6ICdlJyxcbiAgbGV0dGVyczogXCJlXFx1MjRENFxcdUZGNDVcXHhFOFxceEU5XFx4RUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx4RUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERFwiXG59LCB7XG4gIGJhc2U6ICdmJyxcbiAgbGV0dGVyczogXCJmXFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NcIlxufSwge1xuICBiYXNlOiAnZycsXG4gIGxldHRlcnM6IFwiZ1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXCJcbn0sIHtcbiAgYmFzZTogJ2gnLFxuICBsZXR0ZXJzOiBcImhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NVwiXG59LCB7XG4gIGJhc2U6ICdodicsXG4gIGxldHRlcnM6IFwiXFx1MDE5NVwiXG59LCB7XG4gIGJhc2U6ICdpJyxcbiAgbGV0dGVyczogXCJpXFx1MjREOFxcdUZGNDlcXHhFQ1xceEVEXFx4RUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHhFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFcIlxufSwge1xuICBiYXNlOiAnaicsXG4gIGxldHRlcnM6IFwialxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XCJcbn0sIHtcbiAgYmFzZTogJ2snLFxuICBsZXR0ZXJzOiBcImtcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXCJcbn0sIHtcbiAgYmFzZTogJ2wnLFxuICBsZXR0ZXJzOiBcImxcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDdcIlxufSwge1xuICBiYXNlOiAnbGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzlcIlxufSwge1xuICBiYXNlOiAnbScsXG4gIGxldHRlcnM6IFwibVxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZcIlxufSwge1xuICBiYXNlOiAnbicsXG4gIGxldHRlcnM6IFwiblxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHhGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XCJcbn0sIHtcbiAgYmFzZTogJ25qJyxcbiAgbGV0dGVyczogXCJcXHUwMUNDXCJcbn0sIHtcbiAgYmFzZTogJ28nLFxuICBsZXR0ZXJzOiBcIm9cXHUyNERFXFx1RkY0RlxceEYyXFx4RjNcXHhGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHhGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxceEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxceEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVcIlxufSwge1xuICBiYXNlOiAnb2knLFxuICBsZXR0ZXJzOiBcIlxcdTAxQTNcIlxufSwge1xuICBiYXNlOiAnb3UnLFxuICBsZXR0ZXJzOiBcIlxcdTAyMjNcIlxufSwge1xuICBiYXNlOiAnb28nLFxuICBsZXR0ZXJzOiBcIlxcdUE3NEZcIlxufSwge1xuICBiYXNlOiAncCcsXG4gIGxldHRlcnM6IFwicFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NVwiXG59LCB7XG4gIGJhc2U6ICdxJyxcbiAgbGV0dGVyczogXCJxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTlcIlxufSwge1xuICBiYXNlOiAncicsXG4gIGxldHRlcnM6IFwiclxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNcIlxufSwge1xuICBiYXNlOiAncycsXG4gIGxldHRlcnM6IFwic1xcdTI0RTJcXHVGRjUzXFx4REZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5QlwiXG59LCB7XG4gIGJhc2U6ICd0JyxcbiAgbGV0dGVyczogXCJ0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XCJcbn0sIHtcbiAgYmFzZTogJ3R6JyxcbiAgbGV0dGVyczogXCJcXHVBNzI5XCJcbn0sIHtcbiAgYmFzZTogJ3UnLFxuICBsZXR0ZXJzOiBcInVcXHUyNEU0XFx1RkY1NVxceEY5XFx4RkFcXHhGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx4RkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XCJcbn0sIHtcbiAgYmFzZTogJ3YnLFxuICBsZXR0ZXJzOiBcInZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXCJcbn0sIHtcbiAgYmFzZTogJ3Z5JyxcbiAgbGV0dGVyczogXCJcXHVBNzYxXCJcbn0sIHtcbiAgYmFzZTogJ3cnLFxuICBsZXR0ZXJzOiBcIndcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXCJcbn0sIHtcbiAgYmFzZTogJ3gnLFxuICBsZXR0ZXJzOiBcInhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXCJcbn0sIHtcbiAgYmFzZTogJ3knLFxuICBsZXR0ZXJzOiBcInlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHhGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHhGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRlwiXG59LCB7XG4gIGJhc2U6ICd6JyxcbiAgbGV0dGVyczogXCJ6XFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M1wiXG59XTtcbnZhciBhbnlEaWFjcml0aWMgPSBuZXcgUmVnRXhwKCdbJyArIGRpYWNyaXRpY3MubWFwKGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBkLmxldHRlcnM7XG59KS5qb2luKCcnKSArICddJywgJ2cnKTtcbnZhciBkaWFjcml0aWNUb0Jhc2UgPSB7fTtcbmZvciAodmFyIGkgPSAwOyBpIDwgZGlhY3JpdGljcy5sZW5ndGg7IGkrKykge1xuICB2YXIgZGlhY3JpdGljID0gZGlhY3JpdGljc1tpXTtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBkaWFjcml0aWMubGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgIGRpYWNyaXRpY1RvQmFzZVtkaWFjcml0aWMubGV0dGVyc1tqXV0gPSBkaWFjcml0aWMuYmFzZTtcbiAgfVxufVxudmFyIHN0cmlwRGlhY3JpdGljcyA9IGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGFueURpYWNyaXRpYywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGRpYWNyaXRpY1RvQmFzZVttYXRjaF07XG4gIH0pO1xufTtcblxudmFyIG1lbW9pemVkU3RyaXBEaWFjcml0aWNzRm9ySW5wdXQgPSBtZW1vaXplT25lKHN0cmlwRGlhY3JpdGljcyk7XG52YXIgdHJpbVN0cmluZyA9IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG9wdGlvbi5sYWJlbCwgXCIgXCIpLmNvbmNhdChvcHRpb24udmFsdWUpO1xufTtcbnZhciBjcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiBjcmVhdGVGaWx0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob3B0aW9uLCByYXdJbnB1dCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIGlmIChvcHRpb24uZGF0YS5fX2lzTmV3X18pIHJldHVybiB0cnVlO1xuICAgIHZhciBfaWdub3JlQ2FzZSRpZ25vcmVBY2MgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgICAgaWdub3JlQWNjZW50czogdHJ1ZSxcbiAgICAgICAgc3RyaW5naWZ5OiBkZWZhdWx0U3RyaW5naWZ5LFxuICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICBtYXRjaEZyb206ICdhbnknXG4gICAgICB9LCBjb25maWcpLFxuICAgICAgaWdub3JlQ2FzZSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVDYXNlLFxuICAgICAgaWdub3JlQWNjZW50cyA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVBY2NlbnRzLFxuICAgICAgc3RyaW5naWZ5ID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnN0cmluZ2lmeSxcbiAgICAgIHRyaW0gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MudHJpbSxcbiAgICAgIG1hdGNoRnJvbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5tYXRjaEZyb207XG4gICAgdmFyIGlucHV0ID0gdHJpbSA/IHRyaW1TdHJpbmcocmF3SW5wdXQpIDogcmF3SW5wdXQ7XG4gICAgdmFyIGNhbmRpZGF0ZSA9IHRyaW0gPyB0cmltU3RyaW5nKHN0cmluZ2lmeShvcHRpb24pKSA6IHN0cmluZ2lmeShvcHRpb24pO1xuICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIGlucHV0ID0gbWVtb2l6ZWRTdHJpcERpYWNyaXRpY3NGb3JJbnB1dChpbnB1dCk7XG4gICAgICBjYW5kaWRhdGUgPSBzdHJpcERpYWNyaXRpY3MoY2FuZGlkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoRnJvbSA9PT0gJ3N0YXJ0JyA/IGNhbmRpZGF0ZS5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoKSA9PT0gaW5wdXQgOiBjYW5kaWRhdGUuaW5kZXhPZihpbnB1dCkgPiAtMTtcbiAgfTtcbn07XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJpbm5lclJlZlwiXTtcbmZ1bmN0aW9uIER1bW15SW5wdXQoX3JlZikge1xuICB2YXIgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG4gIC8vIFJlbW92ZSBhbmltYXRpb24gcHJvcHMgbm90IG1lYW50IGZvciBIVE1MIGVsZW1lbnRzXG4gIHZhciBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMocHJvcHMsICdvbkV4aXRlZCcsICdpbicsICdlbnRlcicsICdleGl0JywgJ2FwcGVhcicpO1xuICByZXR1cm4ganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgZmlsdGVyZWRQcm9wcywge1xuICAgIGNzczogLyojX19QVVJFX18qL2Nzcyh7XG4gICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgY2FyZXRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgb3V0bGluZTogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgd2lkdGg6IDEsXG4gICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgbGVmdDogLTEwMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC4wMSknXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiO2xhYmVsOkR1bW15SW5wdXQ7XCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUjFiVzE1U1c1d2RYUXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhsQ1RTSXNJbVpwYkdVaU9pSkVkVzF0ZVVsdWNIVjBMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1NsTllMQ0JTWldZZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ2dmU0JtY205dElDZEFaVzF2ZEdsdmJpOXlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnlaVzF2ZG1WUWNtOXdjeUI5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnUkhWdGJYbEpibkIxZENoN1hHNGdJR2x1Ym1WeVVtVm1MRnh1SUNBdUxpNXdjbTl3YzF4dWZUb2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkcGJuQjFkQ2RkSUNZZ2UxeHVJQ0J5WldGa2IyNXNlU0JwYm01bGNsSmxaam9nVW1WbVBFaFVUVXhKYm5CMWRFVnNaVzFsYm5RK08xeHVmU2tnZTF4dUlDQXZMeUJTWlcxdmRtVWdZVzVwYldGMGFXOXVJSEJ5YjNCeklHNXZkQ0J0WldGdWRDQm1iM0lnU0ZSTlRDQmxiR1Z0Wlc1MGMxeHVJQ0JqYjI1emRDQm1hV3gwWlhKbFpGQnliM0J6SUQwZ2NtVnRiM1psVUhKdmNITW9YRzRnSUNBZ2NISnZjSE1zWEc0Z0lDQWdKMjl1UlhocGRHVmtKeXhjYmlBZ0lDQW5hVzRuTEZ4dUlDQWdJQ2RsYm5SbGNpY3NYRzRnSUNBZ0oyVjRhWFFuTEZ4dUlDQWdJQ2RoY0hCbFlYSW5YRzRnSUNrN1hHNWNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThhVzV3ZFhSY2JpQWdJQ0FnSUhKbFpqMTdhVzV1WlhKU1pXWjlYRzRnSUNBZ0lDQjdMaTR1Wm1sc2RHVnlaV1JRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3ZTF4dUlDQWdJQ0FnSUNCc1lXSmxiRG9nSjJSMWJXMTVTVzV3ZFhRbkxGeHVJQ0FnSUNBZ0lDQXZMeUJuWlhRZ2NtbGtJRzltSUdGdWVTQmtaV1poZFd4MElITjBlV3hsYzF4dUlDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQXdMRnh1SUNBZ0lDQWdJQ0JpYjNKa1pYSTZJREFzWEc0Z0lDQWdJQ0FnSUM4dklHbHRjRzl5ZEdGdWRDRWdkR2hwY3lCb2FXUmxjeUIwYUdVZ1pteGhjMmhwYm1jZ1kzVnljMjl5WEc0Z0lDQWdJQ0FnSUdOaGNtVjBRMjlzYjNJNklDZDBjbUZ1YzNCaGNtVnVkQ2NzWEc0Z0lDQWdJQ0FnSUdadmJuUlRhWHBsT2lBbmFXNW9aWEpwZENjc1hHNGdJQ0FnSUNBZ0lHZHlhV1JCY21WaE9pQW5NU0F2SURFZ0x5QXlJQzhnTXljc1hHNGdJQ0FnSUNBZ0lHOTFkR3hwYm1VNklEQXNYRzRnSUNBZ0lDQWdJSEJoWkdScGJtYzZJREFzWEc0Z0lDQWdJQ0FnSUM4dklHbHRjRzl5ZEdGdWRDRWdkMmwwYUc5MWRDQmdkMmxrZEdoZ0lHSnliM2R6WlhKeklIZHZiaWQwSUdGc2JHOTNJR1p2WTNWelhHNGdJQ0FnSUNBZ0lIZHBaSFJvT2lBeExGeHVYRzRnSUNBZ0lDQWdJQzh2SUhKbGJXOTJaU0JqZFhKemIzSWdiMjRnWkdWemEzUnZjRnh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dKM1J5WVc1emNHRnlaVzUwSnl4Y2JseHVJQ0FnSUNBZ0lDQXZMeUJ5WlcxdmRtVWdZM1Z5YzI5eUlHOXVJRzF2WW1sc1pTQjNhR2xzYzNRZ2JXRnBiblJoYVc1cGJtY2dYQ0p6WTNKdmJHd2dhVzUwYnlCMmFXVjNYQ0lnWW1Wb1lYWnBiM1Z5WEc0Z0lDQWdJQ0FnSUd4bFpuUTZJQzB4TURBc1hHNGdJQ0FnSUNBZ0lHOXdZV05wZEhrNklEQXNYRzRnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUFuY21Wc1lYUnBkbVVuTEZ4dUlDQWdJQ0FnSUNCMGNtRnVjMlp2Y20wNklDZHpZMkZzWlNndU1ERXBKeXhjYmlBZ0lDQWdJSDE5WEc0Z0lDQWdMejVjYmlBZ0tUdGNibjFjYmlKZGZRPT0gKi9cIilcbiAgfSkpO1xufVxuXG52YXIgY2FuY2VsU2Nyb2xsID0gZnVuY3Rpb24gY2FuY2VsU2Nyb2xsKGV2ZW50KSB7XG4gIGlmIChldmVudC5jYW5jZWxhYmxlKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5mdW5jdGlvbiB1c2VTY3JvbGxDYXB0dXJlKF9yZWYpIHtcbiAgdmFyIGlzRW5hYmxlZCA9IF9yZWYuaXNFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlID0gX3JlZi5vbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlID0gX3JlZi5vblRvcEFycml2ZSxcbiAgICBvblRvcExlYXZlID0gX3JlZi5vblRvcExlYXZlO1xuICB2YXIgaXNCb3R0b20gPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgaXNUb3AgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgdG91Y2hTdGFydCA9IHVzZVJlZigwKTtcbiAgdmFyIHNjcm9sbFRhcmdldCA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZUV2ZW50RGVsdGEgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQsIGRlbHRhKSB7XG4gICAgaWYgKHNjcm9sbFRhcmdldC5jdXJyZW50ID09PSBudWxsKSByZXR1cm47XG4gICAgdmFyIF9zY3JvbGxUYXJnZXQkY3VycmVudCA9IHNjcm9sbFRhcmdldC5jdXJyZW50LFxuICAgICAgc2Nyb2xsVG9wID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LnNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxIZWlnaHQsXG4gICAgICBjbGllbnRIZWlnaHQgPSBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB0YXJnZXQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICB2YXIgaXNEZWx0YVBvc2l0aXZlID0gZGVsdGEgPiAwO1xuICAgIHZhciBhdmFpbGFibGVTY3JvbGwgPSBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQgLSBzY3JvbGxUb3A7XG4gICAgdmFyIHNob3VsZENhbmNlbFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgLy8gcmVzZXQgYm90dG9tL3RvcCBmbGFnc1xuICAgIGlmIChhdmFpbGFibGVTY3JvbGwgPiBkZWx0YSAmJiBpc0JvdHRvbS5jdXJyZW50KSB7XG4gICAgICBpZiAob25Cb3R0b21MZWF2ZSkgb25Cb3R0b21MZWF2ZShldmVudCk7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgaXNUb3AuY3VycmVudCkge1xuICAgICAgaWYgKG9uVG9wTGVhdmUpIG9uVG9wTGVhdmUoZXZlbnQpO1xuICAgICAgaXNUb3AuY3VycmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGJvdHRvbSBsaW1pdFxuICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgZGVsdGEgPiBhdmFpbGFibGVTY3JvbGwpIHtcbiAgICAgIGlmIChvbkJvdHRvbUFycml2ZSAmJiAhaXNCb3R0b20uY3VycmVudCkge1xuICAgICAgICBvbkJvdHRvbUFycml2ZShldmVudCk7XG4gICAgICB9XG4gICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIGlzQm90dG9tLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAvLyB0b3AgbGltaXRcbiAgICB9IGVsc2UgaWYgKCFpc0RlbHRhUG9zaXRpdmUgJiYgLWRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICBpZiAob25Ub3BBcnJpdmUgJiYgIWlzVG9wLmN1cnJlbnQpIHtcbiAgICAgICAgb25Ub3BBcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IDA7XG4gICAgICBzaG91bGRDYW5jZWxTY3JvbGwgPSB0cnVlO1xuICAgICAgaXNUb3AuY3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gY2FuY2VsIHNjcm9sbFxuICAgIGlmIChzaG91bGRDYW5jZWxTY3JvbGwpIHtcbiAgICAgIGNhbmNlbFNjcm9sbChldmVudCk7XG4gICAgfVxuICB9LCBbb25Cb3R0b21BcnJpdmUsIG9uQm90dG9tTGVhdmUsIG9uVG9wQXJyaXZlLCBvblRvcExlYXZlXSk7XG4gIHZhciBvbldoZWVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRXZlbnREZWx0YShldmVudCwgZXZlbnQuZGVsdGFZKTtcbiAgfSwgW2hhbmRsZUV2ZW50RGVsdGFdKTtcbiAgdmFyIG9uVG91Y2hTdGFydCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHNldCB0b3VjaCBzdGFydCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRvdWNobW92ZSBkZWx0YVxuICAgIHRvdWNoU3RhcnQuY3VycmVudCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gIH0sIFtdKTtcbiAgdmFyIG9uVG91Y2hNb3ZlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWSA9IHRvdWNoU3RhcnQuY3VycmVudCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgaGFuZGxlRXZlbnREZWx0YShldmVudCwgZGVsdGFZKTtcbiAgfSwgW2hhbmRsZUV2ZW50RGVsdGFdKTtcbiAgdmFyIHN0YXJ0TGlzdGVuaW5nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBhdHRhY2ggdG9cbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgdmFyIG5vdFBhc3NpdmUgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudHMgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uV2hlZWwsIG5vdFBhc3NpdmUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIG5vdFBhc3NpdmUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBub3RQYXNzaXZlKTtcbiAgfSwgW29uVG91Y2hNb3ZlLCBvblRvdWNoU3RhcnQsIG9uV2hlZWxdKTtcbiAgdmFyIHN0b3BMaXN0ZW5pbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZWwpIHtcbiAgICAvLyBiYWlsIGVhcmx5IGlmIG5vIGVsZW1lbnQgaXMgYXZhaWxhYmxlIHRvIGRldGFjaCBmcm9tXG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25XaGVlbCwgZmFsc2UpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuICB9LCBbb25Ub3VjaE1vdmUsIG9uVG91Y2hTdGFydCwgb25XaGVlbF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGVsZW1lbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICBzdGFydExpc3RlbmluZyhlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc3RvcExpc3RlbmluZyhlbGVtZW50KTtcbiAgICB9O1xuICB9LCBbaXNFbmFibGVkLCBzdGFydExpc3RlbmluZywgc3RvcExpc3RlbmluZ10pO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBzY3JvbGxUYXJnZXQuY3VycmVudCA9IGVsZW1lbnQ7XG4gIH07XG59XG5cbnZhciBTVFlMRV9LRVlTID0gWydib3hTaXppbmcnLCAnaGVpZ2h0JywgJ292ZXJmbG93JywgJ3BhZGRpbmdSaWdodCcsICdwb3NpdGlvbiddO1xudmFyIExPQ0tfU1RZTEVTID0ge1xuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgLy8gYWNjb3VudCBmb3IgcG9zc2libGUgZGVjbGFyYXRpb24gYHdpZHRoOiAxMDAlO2Agb24gYm9keVxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcbmZ1bmN0aW9uIHByZXZlbnRUb3VjaE1vdmUoZSkge1xuICBpZiAoZS5jYW5jZWxhYmxlKSBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5mdW5jdGlvbiBwcmV2ZW50SW5lcnRpYVNjcm9sbCgpIHtcbiAgdmFyIHRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICB2YXIgdG90YWxTY3JvbGwgPSB0aGlzLnNjcm9sbEhlaWdodDtcbiAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0b3AgKyB0aGlzLm9mZnNldEhlaWdodDtcbiAgaWYgKHRvcCA9PT0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsID09PSB0b3RhbFNjcm9sbCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gdG9wIC0gMTtcbiAgfVxufVxuXG4vLyBgb250b3VjaHN0YXJ0YCBjaGVjayB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4vLyBgbWF4VG91Y2hQb2ludHNgIHdvcmtzIG9uIElFMTAvMTEgYW5kIFN1cmZhY2VcbmZ1bmN0aW9uIGlzVG91Y2hEZXZpY2UoKSB7XG4gIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xufVxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG52YXIgYWN0aXZlU2Nyb2xsTG9ja3MgPSAwO1xudmFyIGxpc3RlbmVyT3B0aW9ucyA9IHtcbiAgY2FwdHVyZTogZmFsc2UsXG4gIHBhc3NpdmU6IGZhbHNlXG59O1xuZnVuY3Rpb24gdXNlU2Nyb2xsTG9jayhfcmVmKSB7XG4gIHZhciBpc0VuYWJsZWQgPSBfcmVmLmlzRW5hYmxlZCxcbiAgICBfcmVmJGFjY291bnRGb3JTY3JvbGwgPSBfcmVmLmFjY291bnRGb3JTY3JvbGxiYXJzLFxuICAgIGFjY291bnRGb3JTY3JvbGxiYXJzID0gX3JlZiRhY2NvdW50Rm9yU2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRhY2NvdW50Rm9yU2Nyb2xsO1xuICB2YXIgb3JpZ2luYWxTdHlsZXMgPSB1c2VSZWYoe30pO1xuICB2YXIgc2Nyb2xsVGFyZ2V0ID0gdXNlUmVmKG51bGwpO1xuICB2YXIgYWRkU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcbiAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMpIHtcbiAgICAgIC8vIHN0b3JlIGFueSBzdHlsZXMgYWxyZWFkeSBhcHBsaWVkIHRvIHRoZSBib2R5XG4gICAgICBTVFlMRV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gdGFyZ2V0U3R5bGUgJiYgdGFyZ2V0U3R5bGVba2V5XTtcbiAgICAgICAgb3JpZ2luYWxTdHlsZXMuY3VycmVudFtrZXldID0gdmFsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdGhlIGxvY2sgc3R5bGVzIGFuZCBwYWRkaW5nIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHNjcm9sbCBsb2NrXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VJbnQob3JpZ2luYWxTdHlsZXMuY3VycmVudC5wYWRkaW5nUmlnaHQsIDEwKSB8fCAwO1xuICAgICAgdmFyIGNsaWVudFdpZHRoID0gZG9jdW1lbnQuYm9keSA/IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggOiAwO1xuICAgICAgdmFyIGFkanVzdGVkUGFkZGluZyA9IHdpbmRvdy5pbm5lcldpZHRoIC0gY2xpZW50V2lkdGggKyBjdXJyZW50UGFkZGluZyB8fCAwO1xuICAgICAgT2JqZWN0LmtleXMoTE9DS19TVFlMRVMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gTE9DS19TVFlMRVNba2V5XTtcbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgdGFyZ2V0U3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoYWRqdXN0ZWRQYWRkaW5nLCBcInB4XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjY291bnQgZm9yIHRvdWNoIGRldmljZXNcbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgLy8gTW9iaWxlIFNhZmFyaSBpZ25vcmVzIHsgb3ZlcmZsb3c6IGhpZGRlbiB9IGRlY2xhcmF0aW9uIG9uIHRoZSBib2R5LlxuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICAgIC8vIEFsbG93IHNjcm9sbCBvbiBwcm92aWRlZCB0YXJnZXRcbiAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG4gICAgYWN0aXZlU2Nyb2xsTG9ja3MgKz0gMTtcbiAgfSwgW2FjY291bnRGb3JTY3JvbGxiYXJzXSk7XG4gIHZhciByZW1vdmVTY3JvbGxMb2NrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlO1xuXG4gICAgLy8gc2FmZWx5IGRlY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG4gICAgYWN0aXZlU2Nyb2xsTG9ja3MgPSBNYXRoLm1heChhY3RpdmVTY3JvbGxMb2NrcyAtIDEsIDApO1xuXG4gICAgLy8gcmVhcHBseSBvcmlnaW5hbCBib2R5IHN0eWxlcywgaWYgYW55XG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XTtcbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHRvdWNoIGxpc3RlbmVyc1xuICAgIGlmICh0YXJnZXQgJiYgaXNUb3VjaERldmljZSgpKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFRvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjY291bnRGb3JTY3JvbGxiYXJzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybjtcbiAgICB2YXIgZWxlbWVudCA9IHNjcm9sbFRhcmdldC5jdXJyZW50O1xuICAgIGFkZFNjcm9sbExvY2soZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudCk7XG4gICAgfTtcbiAgfSwgW2lzRW5hYmxlZCwgYWRkU2Nyb2xsTG9jaywgcmVtb3ZlU2Nyb2xsTG9ja10pO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBzY3JvbGxUYXJnZXQuY3VycmVudCA9IGVsZW1lbnQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDEoKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxudmFyIGJsdXJTZWxlY3RJbnB1dCA9IGZ1bmN0aW9uIGJsdXJTZWxlY3RJbnB1dChldmVudCkge1xuICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGVsZW1lbnQub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbn07XG52YXIgX3JlZjIkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCIxa2ZkYjBlXCIsXG4gIHN0eWxlczogXCJwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDt0b3A6MFwiXG59IDoge1xuICBuYW1lOiBcImJwOGN1YS1TY3JvbGxNYW5hZ2VyXCIsXG4gIHN0eWxlczogXCJwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDt0b3A6MDtsYWJlbDpTY3JvbGxNYW5hZ2VyO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxOamNtOXNiRTFoYm1GblpYSXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVc5RVZTSXNJbVpwYkdVaU9pSlRZM0p2Ykd4TllXNWhaMlZ5TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dhbk40SUgwZ1puSnZiU0FuUUdWdGIzUnBiMjR2Y21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnUm5KaFoyMWxiblFzSUZKbFlXTjBSV3hsYldWdWRDd2dVbVZtUTJGc2JHSmhZMnNzSUUxdmRYTmxSWFpsYm5RZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZFhObFUyTnliMnhzUTJGd2RIVnlaU0JtY205dElDY3VMM1Z6WlZOamNtOXNiRU5oY0hSMWNtVW5PMXh1YVcxd2IzSjBJSFZ6WlZOamNtOXNiRXh2WTJzZ1puSnZiU0FuTGk5MWMyVlRZM0p2Ykd4TWIyTnJKenRjYmx4dWFXNTBaWEptWVdObElGQnliM0J6SUh0Y2JpQWdjbVZoWkc5dWJIa2dZMmhwYkdSeVpXNDZJQ2h5WldZNklGSmxaa05oYkd4aVlXTnJQRWhVVFV4RmJHVnRaVzUwUGlrZ1BUNGdVbVZoWTNSRmJHVnRaVzUwTzF4dUlDQnlaV0ZrYjI1c2VTQnNiMk5yUlc1aFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2NtVmhaRzl1YkhrZ1kyRndkSFZ5WlVWdVlXSnNaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lISmxZV1J2Ym14NUlHOXVRbTkwZEc5dFFYSnlhWFpsUHpvZ0tHVjJaVzUwT2lCWGFHVmxiRVYyWlc1MElId2dWRzkxWTJoRmRtVnVkQ2tnUFQ0Z2RtOXBaRHRjYmlBZ2NtVmhaRzl1YkhrZ2IyNUNiM1IwYjIxTVpXRjJaVDg2SUNobGRtVnVkRG9nVjJobFpXeEZkbVZ1ZENCOElGUnZkV05vUlhabGJuUXBJRDArSUhadmFXUTdYRzRnSUhKbFlXUnZibXg1SUc5dVZHOXdRWEp5YVhabFB6b2dLR1YyWlc1ME9pQlhhR1ZsYkVWMlpXNTBJSHdnVkc5MVkyaEZkbVZ1ZENrZ1BUNGdkbTlwWkR0Y2JpQWdjbVZoWkc5dWJIa2diMjVVYjNCTVpXRjJaVDg2SUNobGRtVnVkRG9nVjJobFpXeEZkbVZ1ZENCOElGUnZkV05vUlhabGJuUXBJRDArSUhadmFXUTdYRzU5WEc1Y2JtTnZibk4wSUdKc2RYSlRaV3hsWTNSSmJuQjFkQ0E5SUNobGRtVnVkRG9nVFc5MWMyVkZkbVZ1ZER4SVZFMU1SR2wyUld4bGJXVnVkRDRwSUQwK0lIdGNiaUFnWTI5dWMzUWdaV3hsYldWdWRDQTlJR1YyWlc1MExuUmhjbWRsZENCaGN5QklWRTFNUkdsMlJXeGxiV1Z1ZER0Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNCbGJHVnRaVzUwTG05M2JtVnlSRzlqZFcxbGJuUXVZV04wYVhabFJXeGxiV1Z1ZENBbUpseHVJQ0FnSUNobGJHVnRaVzUwTG05M2JtVnlSRzlqZFcxbGJuUXVZV04wYVhabFJXeGxiV1Z1ZENCaGN5QklWRTFNUld4bGJXVnVkQ2t1WW14MWNpZ3BYRzRnSUNrN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJUWTNKdmJHeE5ZVzVoWjJWeUtIdGNiaUFnWTJocGJHUnlaVzRzWEc0Z0lHeHZZMnRGYm1GaWJHVmtMRnh1SUNCallYQjBkWEpsUlc1aFlteGxaQ0E5SUhSeWRXVXNYRzRnSUc5dVFtOTBkRzl0UVhKeWFYWmxMRnh1SUNCdmJrSnZkSFJ2YlV4bFlYWmxMRnh1SUNCdmJsUnZjRUZ5Y21sMlpTeGNiaUFnYjI1VWIzQk1aV0YyWlN4Y2JuMDZJRkJ5YjNCektTQjdYRzRnSUdOdmJuTjBJSE5sZEZOamNtOXNiRU5oY0hSMWNtVlVZWEpuWlhRZ1BTQjFjMlZUWTNKdmJHeERZWEIwZFhKbEtIdGNiaUFnSUNCcGMwVnVZV0pzWldRNklHTmhjSFIxY21WRmJtRmliR1ZrTEZ4dUlDQWdJRzl1UW05MGRHOXRRWEp5YVhabExGeHVJQ0FnSUc5dVFtOTBkRzl0VEdWaGRtVXNYRzRnSUNBZ2IyNVViM0JCY25KcGRtVXNYRzRnSUNBZ2IyNVViM0JNWldGMlpTeGNiaUFnZlNrN1hHNGdJR052Ym5OMElITmxkRk5qY205c2JFeHZZMnRVWVhKblpYUWdQU0IxYzJWVFkzSnZiR3hNYjJOcktIc2dhWE5GYm1GaWJHVmtPaUJzYjJOclJXNWhZbXhsWkNCOUtUdGNibHh1SUNCamIyNXpkQ0IwWVhKblpYUlNaV1k2SUZKbFprTmhiR3hpWVdOclBFaFVUVXhGYkdWdFpXNTBQaUE5SUNobGJHVnRaVzUwS1NBOVBpQjdYRzRnSUNBZ2MyVjBVMk55YjJ4c1EyRndkSFZ5WlZSaGNtZGxkQ2hsYkdWdFpXNTBLVHRjYmlBZ0lDQnpaWFJUWTNKdmJHeE1iMk5yVkdGeVoyVjBLR1ZzWlcxbGJuUXBPMXh1SUNCOU8xeHVYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQRVp5WVdkdFpXNTBQbHh1SUNBZ0lDQWdlMnh2WTJ0RmJtRmliR1ZrSUNZbUlDaGNiaUFnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lHOXVRMnhwWTJzOWUySnNkWEpUWld4bFkzUkpibkIxZEgxY2JpQWdJQ0FnSUNBZ0lDQmpjM005ZTNzZ2NHOXphWFJwYjI0NklDZG1hWGhsWkNjc0lHeGxablE2SURBc0lHSnZkSFJ2YlRvZ01Dd2djbWxuYUhRNklEQXNJSFJ2Y0RvZ01DQjlmVnh1SUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUh0amFHbHNaSEpsYmloMFlYSm5aWFJTWldZcGZWeHVJQ0FnSUR3dlJuSmhaMjFsYm5RK1hHNGdJQ2s3WEc1OVhHNGlYWDA9ICovXCIsXG4gIHRvU3RyaW5nOiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxXG59O1xuZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgbG9ja0VuYWJsZWQgPSBfcmVmLmxvY2tFbmFibGVkLFxuICAgIF9yZWYkY2FwdHVyZUVuYWJsZWQgPSBfcmVmLmNhcHR1cmVFbmFibGVkLFxuICAgIGNhcHR1cmVFbmFibGVkID0gX3JlZiRjYXB0dXJlRW5hYmxlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkY2FwdHVyZUVuYWJsZWQsXG4gICAgb25Cb3R0b21BcnJpdmUgPSBfcmVmLm9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUgPSBfcmVmLm9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUgPSBfcmVmLm9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUgPSBfcmVmLm9uVG9wTGVhdmU7XG4gIHZhciBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZTogb25Cb3R0b21BcnJpdmUsXG4gICAgb25Cb3R0b21MZWF2ZTogb25Cb3R0b21MZWF2ZSxcbiAgICBvblRvcEFycml2ZTogb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZTogb25Ub3BMZWF2ZVxuICB9KTtcbiAgdmFyIHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHtcbiAgICBpc0VuYWJsZWQ6IGxvY2tFbmFibGVkXG4gIH0pO1xuICB2YXIgdGFyZ2V0UmVmID0gZnVuY3Rpb24gdGFyZ2V0UmVmKGVsZW1lbnQpIHtcbiAgICBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0KGVsZW1lbnQpO1xuICAgIHNldFNjcm9sbExvY2tUYXJnZXQoZWxlbWVudCk7XG4gIH07XG4gIHJldHVybiBqc3goRnJhZ21lbnQsIG51bGwsIGxvY2tFbmFibGVkICYmIGpzeChcImRpdlwiLCB7XG4gICAgb25DbGljazogYmx1clNlbGVjdElucHV0LFxuICAgIGNzczogX3JlZjIkMVxuICB9KSwgY2hpbGRyZW4odGFyZ2V0UmVmKSk7XG59XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cbnZhciBfcmVmMiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCIxYTBybzRuLXJlcXVpcmVkSW5wdXRcIixcbiAgc3R5bGVzOiBcImxhYmVsOnJlcXVpcmVkSW5wdXQ7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7d2lkdGg6MTAwJVwiXG59IDoge1xuICBuYW1lOiBcIjVra3hiMi1yZXF1aXJlZElucHV0LVJlcXVpcmVkSW5wdXRcIixcbiAgc3R5bGVzOiBcImxhYmVsOnJlcXVpcmVkSW5wdXQ7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7d2lkdGg6MTAwJTtsYWJlbDpSZXF1aXJlZElucHV0O1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxKbGNYVnBjbVZrU1c1d2RYUXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdOSklpd2labWxzWlNJNklsSmxjWFZwY21Wa1NXNXdkWFF1ZEhONElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xSUVCcWMzZ2dhbk40SUNvdlhHNXBiWEJ2Y25RZ2V5QkdiMk4xYzBWMlpXNTBTR0Z1Wkd4bGNpd2dSblZ1WTNScGIyNURiMjF3YjI1bGJuUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dnZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTl5WldGamRDYzdYRzVjYm1OdmJuTjBJRkpsY1hWcGNtVmtTVzV3ZFhRNklFWjFibU4wYVc5dVEyOXRjRzl1Wlc1MFBIdGNiaUFnY21WaFpHOXViSGtnYm1GdFpUODZJSE4wY21sdVp6dGNiaUFnY21WaFpHOXViSGtnYjI1R2IyTjFjem9nUm05amRYTkZkbVZ1ZEVoaGJtUnNaWEk4U0ZSTlRFbHVjSFYwUld4bGJXVnVkRDQ3WEc1OVBpQTlJQ2g3SUc1aGJXVXNJRzl1Um05amRYTWdmU2tnUFQ0Z0tGeHVJQ0E4YVc1d2RYUmNiaUFnSUNCeVpYRjFhWEpsWkZ4dUlDQWdJRzVoYldVOWUyNWhiV1Y5WEc0Z0lDQWdkR0ZpU1c1a1pYZzlleTB4ZlZ4dUlDQWdJR0Z5YVdFdGFHbGtaR1Z1UFZ3aWRISjFaVndpWEc0Z0lDQWdiMjVHYjJOMWN6MTdiMjVHYjJOMWMzMWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR3hoWW1Wc09pQW5jbVZ4ZFdseVpXUkpibkIxZENjc1hHNGdJQ0FnSUNCdmNHRmphWFI1T2lBd0xGeHVJQ0FnSUNBZ2NHOXBiblJsY2tWMlpXNTBjem9nSjI1dmJtVW5MRnh1SUNBZ0lDQWdjRzl6YVhScGIyNDZJQ2RoWW5OdmJIVjBaU2NzWEc0Z0lDQWdJQ0JpYjNSMGIyMDZJREFzWEc0Z0lDQWdJQ0JzWldaME9pQXdMRnh1SUNBZ0lDQWdjbWxuYUhRNklEQXNYRzRnSUNBZ0lDQjNhV1IwYURvZ0p6RXdNQ1VuTEZ4dUlDQWdJSDE5WEc0Z0lDQWdMeThnVUhKbGRtVnVkQ0JnVTNkcGRHTm9hVzVuSUdaeWIyMGdkVzVqYjI1MGNtOXNiR1ZrSUhSdklHTnZiblJ5YjJ4c1pXUmdJR1Z5Y205eVhHNGdJQ0FnZG1Gc2RXVTlYQ0pjSWx4dUlDQWdJRzl1UTJoaGJtZGxQWHNvS1NBOVBpQjdmWDFjYmlBZ0x6NWNiaWs3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZKbGNYVnBjbVZrU1c1d2RYUTdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG52YXIgUmVxdWlyZWRJbnB1dCA9IGZ1bmN0aW9uIFJlcXVpcmVkSW5wdXQoX3JlZikge1xuICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICBvbkZvY3VzID0gX3JlZi5vbkZvY3VzO1xuICByZXR1cm4ganN4KFwiaW5wdXRcIiwge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBjc3M6IF9yZWYyXG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgLFxuICAgIHZhbHVlOiBcIlwiLFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9XG4gIH0pO1xufTtcbnZhciBSZXF1aXJlZElucHV0JDEgPSBSZXF1aXJlZElucHV0O1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInVzZXItYWdlbnQtZGF0YS10eXBlc1wiIC8+XG5cbmZ1bmN0aW9uIHRlc3RQbGF0Zm9ybShyZSkge1xuICB2YXIgX3dpbmRvdyRuYXZpZ2F0b3IkdXNlO1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAhPSBudWxsID8gcmUudGVzdCgoKF93aW5kb3ckbmF2aWdhdG9yJHVzZSA9IHdpbmRvdy5uYXZpZ2F0b3JbJ3VzZXJBZ2VudERhdGEnXSkgPT09IG51bGwgfHwgX3dpbmRvdyRuYXZpZ2F0b3IkdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfd2luZG93JG5hdmlnYXRvciR1c2UucGxhdGZvcm0pIHx8IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pIDogZmFsc2U7XG59XG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXmlQaG9uZS9pKTtcbn1cbmZ1bmN0aW9uIGlzTWFjKCkge1xuICByZXR1cm4gdGVzdFBsYXRmb3JtKC9eTWFjL2kpO1xufVxuZnVuY3Rpb24gaXNJUGFkKCkge1xuICByZXR1cm4gdGVzdFBsYXRmb3JtKC9eaVBhZC9pKSB8fFxuICAvLyBpUGFkT1MgMTMgbGllcyBhbmQgc2F5cyBpdCdzIGEgTWFjLCBidXQgd2UgY2FuIGRpc3Rpbmd1aXNoIGJ5IGRldGVjdGluZyB0b3VjaCBzdXBwb3J0LlxuICBpc01hYygpICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDE7XG59XG5mdW5jdGlvbiBpc0lPUygpIHtcbiAgcmV0dXJuIGlzSVBob25lKCkgfHwgaXNJUGFkKCk7XG59XG5mdW5jdGlvbiBpc0FwcGxlRGV2aWNlKCkge1xuICByZXR1cm4gaXNNYWMoKSB8fCBpc0lPUygpO1xufVxuXG52YXIgZm9ybWF0R3JvdXBMYWJlbCA9IGZ1bmN0aW9uIGZvcm1hdEdyb3VwTGFiZWwoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLmxhYmVsO1xufTtcbnZhciBnZXRPcHRpb25MYWJlbCQxID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24ubGFiZWw7XG59O1xudmFyIGdldE9wdGlvblZhbHVlJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbn07XG52YXIgaXNPcHRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB7XG4gIHJldHVybiAhIW9wdGlvbi5pc0Rpc2FibGVkO1xufTtcblxudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gIGNsZWFySW5kaWNhdG9yOiBjbGVhckluZGljYXRvckNTUyxcbiAgY29udGFpbmVyOiBjb250YWluZXJDU1MsXG4gIGNvbnRyb2w6IGNzcyQxLFxuICBkcm9wZG93bkluZGljYXRvcjogZHJvcGRvd25JbmRpY2F0b3JDU1MsXG4gIGdyb3VwOiBncm91cENTUyxcbiAgZ3JvdXBIZWFkaW5nOiBncm91cEhlYWRpbmdDU1MsXG4gIGluZGljYXRvcnNDb250YWluZXI6IGluZGljYXRvcnNDb250YWluZXJDU1MsXG4gIGluZGljYXRvclNlcGFyYXRvcjogaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLFxuICBpbnB1dDogaW5wdXRDU1MsXG4gIGxvYWRpbmdJbmRpY2F0b3I6IGxvYWRpbmdJbmRpY2F0b3JDU1MsXG4gIGxvYWRpbmdNZXNzYWdlOiBsb2FkaW5nTWVzc2FnZUNTUyxcbiAgbWVudTogbWVudUNTUyxcbiAgbWVudUxpc3Q6IG1lbnVMaXN0Q1NTLFxuICBtZW51UG9ydGFsOiBtZW51UG9ydGFsQ1NTLFxuICBtdWx0aVZhbHVlOiBtdWx0aVZhbHVlQ1NTLFxuICBtdWx0aVZhbHVlTGFiZWw6IG11bHRpVmFsdWVMYWJlbENTUyxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogbXVsdGlWYWx1ZVJlbW92ZUNTUyxcbiAgbm9PcHRpb25zTWVzc2FnZTogbm9PcHRpb25zTWVzc2FnZUNTUyxcbiAgb3B0aW9uOiBvcHRpb25DU1MsXG4gIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlckNTUyxcbiAgc2luZ2xlVmFsdWU6IGNzcyQyLFxuICB2YWx1ZUNvbnRhaW5lcjogdmFsdWVDb250YWluZXJDU1Ncbn07XG4vLyBNZXJnZSBVdGlsaXR5XG4vLyBBbGxvd3MgY29uc3VtZXJzIHRvIGV4dGVuZCBhIGJhc2UgU2VsZWN0IHdpdGggYWRkaXRpb25hbCBzdHlsZXNcblxuZnVuY3Rpb24gbWVyZ2VTdHlsZXMoc291cmNlKSB7XG4gIHZhciB0YXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvLyBpbml0aWFsaXplIHdpdGggc291cmNlIHN0eWxlc1xuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZCh7fSwgc291cmNlKTtcblxuICAvLyBtYXNzYWdlIGluIHRhcmdldCBzdHlsZXNcbiAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlBc1N0cmluZykge1xuICAgIHZhciBrZXkgPSBrZXlBc1N0cmluZztcbiAgICBpZiAoc291cmNlW2tleV0pIHtcbiAgICAgIHN0eWxlc1trZXldID0gZnVuY3Rpb24gKHJzQ3NzLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV0oc291cmNlW2tleV0ocnNDc3MsIHByb3BzKSwgcHJvcHMpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufVxuXG52YXIgY29sb3JzID0ge1xuICBwcmltYXJ5OiAnIzI2ODRGRicsXG4gIHByaW1hcnk3NTogJyM0QzlBRkYnLFxuICBwcmltYXJ5NTA6ICcjQjJENEZGJyxcbiAgcHJpbWFyeTI1OiAnI0RFRUJGRicsXG4gIGRhbmdlcjogJyNERTM1MEInLFxuICBkYW5nZXJMaWdodDogJyNGRkJEQUQnLFxuICBuZXV0cmFsMDogJ2hzbCgwLCAwJSwgMTAwJSknLFxuICBuZXV0cmFsNTogJ2hzbCgwLCAwJSwgOTUlKScsXG4gIG5ldXRyYWwxMDogJ2hzbCgwLCAwJSwgOTAlKScsXG4gIG5ldXRyYWwyMDogJ2hzbCgwLCAwJSwgODAlKScsXG4gIG5ldXRyYWwzMDogJ2hzbCgwLCAwJSwgNzAlKScsXG4gIG5ldXRyYWw0MDogJ2hzbCgwLCAwJSwgNjAlKScsXG4gIG5ldXRyYWw1MDogJ2hzbCgwLCAwJSwgNTAlKScsXG4gIG5ldXRyYWw2MDogJ2hzbCgwLCAwJSwgNDAlKScsXG4gIG5ldXRyYWw3MDogJ2hzbCgwLCAwJSwgMzAlKScsXG4gIG5ldXRyYWw4MDogJ2hzbCgwLCAwJSwgMjAlKScsXG4gIG5ldXRyYWw5MDogJ2hzbCgwLCAwJSwgMTAlKSdcbn07XG52YXIgYm9yZGVyUmFkaXVzID0gNDtcbi8vIFVzZWQgdG8gY2FsY3VsYXRlIGNvbnNpc3RlbnQgbWFyZ2luL3BhZGRpbmcgb24gZWxlbWVudHNcbnZhciBiYXNlVW5pdCA9IDQ7XG4vLyBUaGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIGNvbnRyb2xcbnZhciBjb250cm9sSGVpZ2h0ID0gMzg7XG4vLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cbnZhciBtZW51R3V0dGVyID0gYmFzZVVuaXQgKiAyO1xudmFyIHNwYWNpbmcgPSB7XG4gIGJhc2VVbml0OiBiYXNlVW5pdCxcbiAgY29udHJvbEhlaWdodDogY29udHJvbEhlaWdodCxcbiAgbWVudUd1dHRlcjogbWVudUd1dHRlclxufTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICBjb2xvcnM6IGNvbG9ycyxcbiAgc3BhY2luZzogc3BhY2luZ1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU6IHRydWUsXG4gIGJsdXJJbnB1dE9uU2VsZWN0OiBpc1RvdWNoQ2FwYWJsZSgpLFxuICBjYXB0dXJlTWVudVNjcm9sbDogIWlzVG91Y2hDYXBhYmxlKCksXG4gIGNsYXNzTmFtZXM6IHt9LFxuICBjbG9zZU1lbnVPblNlbGVjdDogdHJ1ZSxcbiAgY2xvc2VNZW51T25TY3JvbGw6IGZhbHNlLFxuICBjb21wb25lbnRzOiB7fSxcbiAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiB0cnVlLFxuICBlc2NhcGVDbGVhcnNWYWx1ZTogZmFsc2UsXG4gIGZpbHRlck9wdGlvbjogY3JlYXRlRmlsdGVyKCksXG4gIGZvcm1hdEdyb3VwTGFiZWw6IGZvcm1hdEdyb3VwTGFiZWwsXG4gIGdldE9wdGlvbkxhYmVsOiBnZXRPcHRpb25MYWJlbCQxLFxuICBnZXRPcHRpb25WYWx1ZTogZ2V0T3B0aW9uVmFsdWUkMSxcbiAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGlzTXVsdGk6IGZhbHNlLFxuICBpc1J0bDogZmFsc2UsXG4gIGlzU2VhcmNoYWJsZTogdHJ1ZSxcbiAgaXNPcHRpb25EaXNhYmxlZDogaXNPcHRpb25EaXNhYmxlZCxcbiAgbG9hZGluZ01lc3NhZ2U6IGZ1bmN0aW9uIGxvYWRpbmdNZXNzYWdlKCkge1xuICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gIH0sXG4gIG1heE1lbnVIZWlnaHQ6IDMwMCxcbiAgbWluTWVudUhlaWdodDogMTQwLFxuICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgbWVudVBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1lbnVQb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbWVudVNob3VsZEJsb2NrU2Nyb2xsOiBmYWxzZSxcbiAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiAhaXNNb2JpbGVEZXZpY2UoKSxcbiAgbm9PcHRpb25zTWVzc2FnZTogZnVuY3Rpb24gbm9PcHRpb25zTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ05vIG9wdGlvbnMnO1xuICB9LFxuICBvcGVuTWVudU9uRm9jdXM6IGZhbHNlLFxuICBvcGVuTWVudU9uQ2xpY2s6IHRydWUsXG4gIG9wdGlvbnM6IFtdLFxuICBwYWdlU2l6ZTogNSxcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuICBzY3JlZW5SZWFkZXJTdGF0dXM6IGZ1bmN0aW9uIHNjcmVlblJlYWRlclN0YXR1cyhfcmVmKSB7XG4gICAgdmFyIGNvdW50ID0gX3JlZi5jb3VudDtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoY291bnQsIFwiIHJlc3VsdFwiKS5jb25jYXQoY291bnQgIT09IDEgPyAncycgOiAnJywgXCIgYXZhaWxhYmxlXCIpO1xuICB9LFxuICBzdHlsZXM6IHt9LFxuICB0YWJJbmRleDogMCxcbiAgdGFiU2VsZWN0c1ZhbHVlOiB0cnVlLFxuICB1bnN0eWxlZDogZmFsc2Vcbn07XG5mdW5jdGlvbiB0b0NhdGVnb3JpemVkT3B0aW9uKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlLCBpbmRleCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9pc09wdGlvbkRpc2FibGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgdmFyIGlzU2VsZWN0ZWQgPSBfaXNPcHRpb25TZWxlY3RlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gIHZhciBsYWJlbCA9IGdldE9wdGlvbkxhYmVsKHByb3BzLCBvcHRpb24pO1xuICB2YXIgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnb3B0aW9uJyxcbiAgICBkYXRhOiBvcHRpb24sXG4gICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaW5kZXg6IGluZGV4XG4gIH07XG59XG5mdW5jdGlvbiBidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIHtcbiAgcmV0dXJuIHByb3BzLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChncm91cE9yT3B0aW9uLCBncm91cE9yT3B0aW9uSW5kZXgpIHtcbiAgICBpZiAoJ29wdGlvbnMnIGluIGdyb3VwT3JPcHRpb24pIHtcbiAgICAgIHZhciBjYXRlZ29yaXplZE9wdGlvbnMgPSBncm91cE9yT3B0aW9uLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24sIG9wdGlvbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0b0NhdGVnb3JpemVkT3B0aW9uKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlLCBvcHRpb25JbmRleCk7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBpc0ZvY3VzYWJsZShwcm9wcywgY2F0ZWdvcml6ZWRPcHRpb24pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2F0ZWdvcml6ZWRPcHRpb25zLmxlbmd0aCA+IDAgPyB7XG4gICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgIGRhdGE6IGdyb3VwT3JPcHRpb24sXG4gICAgICAgIG9wdGlvbnM6IGNhdGVnb3JpemVkT3B0aW9ucyxcbiAgICAgICAgaW5kZXg6IGdyb3VwT3JPcHRpb25JbmRleFxuICAgICAgfSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIGNhdGVnb3JpemVkT3B0aW9uID0gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgZ3JvdXBPck9wdGlvbiwgc2VsZWN0VmFsdWUsIGdyb3VwT3JPcHRpb25JbmRleCk7XG4gICAgcmV0dXJuIGlzRm9jdXNhYmxlKHByb3BzLCBjYXRlZ29yaXplZE9wdGlvbikgPyBjYXRlZ29yaXplZE9wdGlvbiA6IHVuZGVmaW5lZDtcbiAgfSkuZmlsdGVyKG5vdE51bGxpc2gpO1xufVxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhjYXRlZ29yaXplZE9wdGlvbnMpIHtcbiAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKG9wdGlvbnNBY2N1bXVsYXRvciwgY2F0ZWdvcml6ZWRPcHRpb24pIHtcbiAgICBpZiAoY2F0ZWdvcml6ZWRPcHRpb24udHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgb3B0aW9uc0FjY3VtdWxhdG9yLnB1c2guYXBwbHkob3B0aW9uc0FjY3VtdWxhdG9yLCBfdG9Db25zdW1hYmxlQXJyYXkoY2F0ZWdvcml6ZWRPcHRpb24ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmRhdGE7XG4gICAgICB9KSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zQWNjdW11bGF0b3IucHVzaChjYXRlZ29yaXplZE9wdGlvbi5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNBY2N1bXVsYXRvcjtcbiAgfSwgW10pO1xufVxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zV2l0aElkcyhjYXRlZ29yaXplZE9wdGlvbnMsIG9wdGlvbklkKSB7XG4gIHJldHVybiBjYXRlZ29yaXplZE9wdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zQWNjdW11bGF0b3IsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gICAgaWYgKGNhdGVnb3JpemVkT3B0aW9uLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoLmFwcGx5KG9wdGlvbnNBY2N1bXVsYXRvciwgX3RvQ29uc3VtYWJsZUFycmF5KGNhdGVnb3JpemVkT3B0aW9uLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiBvcHRpb24uZGF0YSxcbiAgICAgICAgICBpZDogXCJcIi5jb25jYXQob3B0aW9uSWQsIFwiLVwiKS5jb25jYXQoY2F0ZWdvcml6ZWRPcHRpb24uaW5kZXgsIFwiLVwiKS5jb25jYXQob3B0aW9uLmluZGV4KVxuICAgICAgICB9O1xuICAgICAgfSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc0FjY3VtdWxhdG9yLnB1c2goe1xuICAgICAgICBkYXRhOiBjYXRlZ29yaXplZE9wdGlvbi5kYXRhLFxuICAgICAgICBpZDogXCJcIi5jb25jYXQob3B0aW9uSWQsIFwiLVwiKS5jb25jYXQoY2F0ZWdvcml6ZWRPcHRpb24uaW5kZXgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNBY2N1bXVsYXRvcjtcbiAgfSwgW10pO1xufVxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpKTtcbn1cbmZ1bmN0aW9uIGlzRm9jdXNhYmxlKHByb3BzLCBjYXRlZ29yaXplZE9wdGlvbikge1xuICB2YXIgX3Byb3BzJGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgIGlucHV0VmFsdWUgPSBfcHJvcHMkaW5wdXRWYWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkaW5wdXRWYWx1ZTtcbiAgdmFyIGRhdGEgPSBjYXRlZ29yaXplZE9wdGlvbi5kYXRhLFxuICAgIGlzU2VsZWN0ZWQgPSBjYXRlZ29yaXplZE9wdGlvbi5pc1NlbGVjdGVkLFxuICAgIGxhYmVsID0gY2F0ZWdvcml6ZWRPcHRpb24ubGFiZWwsXG4gICAgdmFsdWUgPSBjYXRlZ29yaXplZE9wdGlvbi52YWx1ZTtcbiAgcmV0dXJuICghc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyhwcm9wcykgfHwgIWlzU2VsZWN0ZWQpICYmIF9maWx0ZXJPcHRpb24ocHJvcHMsIHtcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRhdGE6IGRhdGFcbiAgfSwgaW5wdXRWYWx1ZSk7XG59XG5mdW5jdGlvbiBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBuZXh0U2VsZWN0VmFsdWUpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IHN0YXRlLmZvY3VzZWRWYWx1ZSxcbiAgICBsYXN0U2VsZWN0VmFsdWUgPSBzdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgdmFyIGxhc3RGb2N1c2VkSW5kZXggPSBsYXN0U2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuICBpZiAobGFzdEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgdmFyIG5leHRGb2N1c2VkSW5kZXggPSBuZXh0U2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICByZXR1cm4gZm9jdXNlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgIC8vIHJlZmVyZW5jZSwgc28gcmV0dXJuIHRoZSBuZXcgdmFsdWUgYXQgdGhlIHNhbWUgaW5kZXhcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRPcHRpb24oc3RhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RGb2N1c2VkT3B0aW9uID0gc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgcmV0dXJuIGxhc3RGb2N1c2VkT3B0aW9uICYmIG9wdGlvbnMuaW5kZXhPZihsYXN0Rm9jdXNlZE9wdGlvbikgPiAtMSA/IGxhc3RGb2N1c2VkT3B0aW9uIDogb3B0aW9uc1swXTtcbn1cbnZhciBnZXRGb2N1c2VkT3B0aW9uSWQgPSBmdW5jdGlvbiBnZXRGb2N1c2VkT3B0aW9uSWQoZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMsIGZvY3VzZWRPcHRpb24pIHtcbiAgdmFyIF9mb2N1c2FibGVPcHRpb25zV2l0aDtcbiAgdmFyIGZvY3VzZWRPcHRpb25JZCA9IChfZm9jdXNhYmxlT3B0aW9uc1dpdGggPSBmb2N1c2FibGVPcHRpb25zV2l0aElkcy5maW5kKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gb3B0aW9uLmRhdGEgPT09IGZvY3VzZWRPcHRpb247XG4gIH0pKSA9PT0gbnVsbCB8fCBfZm9jdXNhYmxlT3B0aW9uc1dpdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mb2N1c2FibGVPcHRpb25zV2l0aC5pZDtcbiAgcmV0dXJuIGZvY3VzZWRPcHRpb25JZCB8fCBudWxsO1xufTtcbnZhciBnZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKHByb3BzLCBkYXRhKSB7XG4gIHJldHVybiBwcm9wcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbn07XG52YXIgZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShwcm9wcywgZGF0YSkge1xuICByZXR1cm4gcHJvcHMuZ2V0T3B0aW9uVmFsdWUoZGF0YSk7XG59O1xuZnVuY3Rpb24gX2lzT3B0aW9uRGlzYWJsZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9wcy5pc09wdGlvbkRpc2FibGVkID09PSAnZnVuY3Rpb24nID8gcHJvcHMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24sIHNlbGVjdFZhbHVlKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gX2lzT3B0aW9uU2VsZWN0ZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgaWYgKHNlbGVjdFZhbHVlLmluZGV4T2Yob3B0aW9uKSA+IC0xKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBwcm9wcy5pc09wdGlvblNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb3BzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gIH1cbiAgdmFyIGNhbmRpZGF0ZSA9IGdldE9wdGlvblZhbHVlKHByb3BzLCBvcHRpb24pO1xuICByZXR1cm4gc2VsZWN0VmFsdWUuc29tZShmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBnZXRPcHRpb25WYWx1ZShwcm9wcywgaSkgPT09IGNhbmRpZGF0ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBfZmlsdGVyT3B0aW9uKHByb3BzLCBvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgcmV0dXJuIHByb3BzLmZpbHRlck9wdGlvbiA/IHByb3BzLmZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIDogdHJ1ZTtcbn1cbnZhciBzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zID0gZnVuY3Rpb24gc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyhwcm9wcykge1xuICB2YXIgaGlkZVNlbGVjdGVkT3B0aW9ucyA9IHByb3BzLmhpZGVTZWxlY3RlZE9wdGlvbnMsXG4gICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIGlmIChoaWRlU2VsZWN0ZWRPcHRpb25zID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuICByZXR1cm4gaGlkZVNlbGVjdGVkT3B0aW9ucztcbn07XG52YXIgaW5zdGFuY2VJZCA9IDE7XG52YXIgU2VsZWN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3QsIF9Db21wb25lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNlbGVjdCk7XG4gIC8vIE1pc2MuIEluc3RhbmNlIFByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVE9ET1xuXG4gIC8vIFJlZnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGZ1bmN0aW9uIFNlbGVjdChfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYXJpYVNlbGVjdGlvbjogbnVsbCxcbiAgICAgIGZvY3VzZWRPcHRpb246IG51bGwsXG4gICAgICBmb2N1c2VkT3B0aW9uSWQ6IG51bGwsXG4gICAgICBmb2N1c2FibGVPcHRpb25zV2l0aElkczogW10sXG4gICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICBpbnB1dElzSGlkZGVuOiBmYWxzZSxcbiAgICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgICBzZWxlY3RWYWx1ZTogW10sXG4gICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZTogZmFsc2UsXG4gICAgICBwcmV2V2FzRm9jdXNlZDogZmFsc2UsXG4gICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IHVuZGVmaW5lZCxcbiAgICAgIHByZXZQcm9wczogdW5kZWZpbmVkLFxuICAgICAgaW5zdGFuY2VQcmVmaXg6ICcnXG4gICAgfTtcbiAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gZmFsc2U7XG4gICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5jb21tb25Qcm9wcyA9IHZvaWQgMDtcbiAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gMDtcbiAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIF90aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSB2b2lkIDA7XG4gICAgX3RoaXMuaXNBcHBsZURldmljZSA9IGlzQXBwbGVEZXZpY2UoKTtcbiAgICBfdGhpcy5jb250cm9sUmVmID0gbnVsbDtcbiAgICBfdGhpcy5nZXRDb250cm9sUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuY29udHJvbFJlZiA9IHJlZjtcbiAgICB9O1xuICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSBudWxsO1xuICAgIF90aGlzLmdldEZvY3VzZWRPcHRpb25SZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5mb2N1c2VkT3B0aW9uUmVmID0gcmVmO1xuICAgIH07XG4gICAgX3RoaXMubWVudUxpc3RSZWYgPSBudWxsO1xuICAgIF90aGlzLmdldE1lbnVMaXN0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMubWVudUxpc3RSZWYgPSByZWY7XG4gICAgfTtcbiAgICBfdGhpcy5pbnB1dFJlZiA9IG51bGw7XG4gICAgX3RoaXMuZ2V0SW5wdXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5pbnB1dFJlZiA9IHJlZjtcbiAgICB9O1xuICAgIF90aGlzLmZvY3VzID0gX3RoaXMuZm9jdXNJbnB1dDtcbiAgICBfdGhpcy5ibHVyID0gX3RoaXMuYmx1cklucHV0O1xuICAgIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWU7XG4gICAgICBhY3Rpb25NZXRhLm5hbWUgPSBuYW1lO1xuICAgICAgX3RoaXMuYXJpYU9uQ2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9O1xuICAgIF90aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBhY3Rpb24sIG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICBjbG9zZU1lbnVPblNlbGVjdCA9IF90aGlzJHByb3BzMi5jbG9zZU1lbnVPblNlbGVjdCxcbiAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMi5pc011bHRpLFxuICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMyLmlucHV0VmFsdWU7XG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ3NldC12YWx1ZScsXG4gICAgICAgIHByZXZJbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmIChjbG9zZU1lbnVPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiAhaXNNdWx0aVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIC8vIHdoZW4gdGhlIHNlbGVjdCB2YWx1ZSBzaG91bGQgY2hhbmdlLCB3ZSBzaG91bGQgcmVzZXQgZm9jdXNlZFZhbHVlXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgfSk7XG4gICAgfTtcbiAgICBfdGhpcy5zZWxlY3RPcHRpb24gPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgYmx1cklucHV0T25TZWxlY3QgPSBfdGhpcyRwcm9wczMuYmx1cklucHV0T25TZWxlY3QsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczMuaXNNdWx0aSxcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMy5uYW1lO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgZGVzZWxlY3RlZCA9IGlzTXVsdGkgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChuZXdWYWx1ZSwgc2VsZWN0VmFsdWUpO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSBfdGhpcy5pc09wdGlvbkRpc2FibGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSk7XG4gICAgICBpZiAoZGVzZWxlY3RlZCkge1xuICAgICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBfdGhpcy5zZXRWYWx1ZShtdWx0aVZhbHVlQXNWYWx1ZShzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgICAgfSkpLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICghaXNEaXNhYmxlZCkge1xuICAgICAgICAvLyBTZWxlY3Qgb3B0aW9uIGlmIG9wdGlvbiBpcyBub3QgZGlzYWJsZWRcbiAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShtdWx0aVZhbHVlQXNWYWx1ZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNlbGVjdFZhbHVlKSwgW25ld1ZhbHVlXSkpLCAnc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShzaW5nbGVWYWx1ZUFzVmFsdWUobmV3VmFsdWUpLCAnc2VsZWN0LW9wdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5hcmlhT25DaGFuZ2Uoc2luZ2xlVmFsdWVBc1ZhbHVlKG5ld1ZhbHVlKSwge1xuICAgICAgICAgIGFjdGlvbjogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgIG9wdGlvbjogbmV3VmFsdWUsXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGJsdXJJbnB1dE9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLmJsdXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgX3RoaXMucmVtb3ZlVmFsdWUgPSBmdW5jdGlvbiAocmVtb3ZlZFZhbHVlKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpcy5nZXRPcHRpb25WYWx1ZShyZW1vdmVkVmFsdWUpO1xuICAgICAgdmFyIG5ld1ZhbHVlQXJyYXkgPSBzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlVGVybmFyeShpc011bHRpLCBuZXdWYWx1ZUFycmF5LCBuZXdWYWx1ZUFycmF5WzBdIHx8IG51bGwpO1xuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlOiByZW1vdmVkVmFsdWVcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG4gICAgX3RoaXMuY2xlYXJWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgX3RoaXMub25DaGFuZ2UodmFsdWVUZXJuYXJ5KF90aGlzLnByb3BzLmlzTXVsdGksIFtdLCBudWxsKSwge1xuICAgICAgICBhY3Rpb246ICdjbGVhcicsXG4gICAgICAgIHJlbW92ZWRWYWx1ZXM6IHNlbGVjdFZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLnBvcFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlzTXVsdGkgPSBfdGhpcy5wcm9wcy5pc011bHRpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgbGFzdFNlbGVjdGVkVmFsdWUgPSBzZWxlY3RWYWx1ZVtzZWxlY3RWYWx1ZS5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBuZXdWYWx1ZUFycmF5ID0gc2VsZWN0VmFsdWUuc2xpY2UoMCwgc2VsZWN0VmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgbmV3VmFsdWVBcnJheSwgbmV3VmFsdWVBcnJheVswXSB8fCBudWxsKTtcbiAgICAgIGlmIChsYXN0U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICAgIGFjdGlvbjogJ3BvcC12YWx1ZScsXG4gICAgICAgICAgcmVtb3ZlZFZhbHVlOiBsYXN0U2VsZWN0ZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLmdldEZvY3VzZWRPcHRpb25JZCA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgICByZXR1cm4gZ2V0Rm9jdXNlZE9wdGlvbklkKF90aGlzLnN0YXRlLmZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLCBmb2N1c2VkT3B0aW9uKTtcbiAgICB9O1xuICAgIF90aGlzLmdldEZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMoYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMoX3RoaXMucHJvcHMsIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlKSwgX3RoaXMuZ2V0RWxlbWVudElkKCdvcHRpb24nKSk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICB9O1xuICAgIF90aGlzLmN4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3NOYW1lcy5hcHBseSh2b2lkIDAsIFtfdGhpcy5wcm9wcy5jbGFzc05hbWVQcmVmaXhdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0T3B0aW9uTGFiZWwoX3RoaXMucHJvcHMsIGRhdGEpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvblZhbHVlKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuICAgIF90aGlzLmdldFN0eWxlcyA9IGZ1bmN0aW9uIChrZXksIHByb3BzKSB7XG4gICAgICB2YXIgdW5zdHlsZWQgPSBfdGhpcy5wcm9wcy51bnN0eWxlZDtcbiAgICAgIHZhciBiYXNlID0gZGVmYXVsdFN0eWxlc1trZXldKHByb3BzLCB1bnN0eWxlZCk7XG4gICAgICBiYXNlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAgIHZhciBjdXN0b20gPSBfdGhpcy5wcm9wcy5zdHlsZXNba2V5XTtcbiAgICAgIHJldHVybiBjdXN0b20gPyBjdXN0b20oYmFzZSwgcHJvcHMpIDogYmFzZTtcbiAgICB9O1xuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xuICAgICAgdmFyIF90aGlzJHByb3BzJGNsYXNzTmFtZSwgX3RoaXMkcHJvcHMkY2xhc3NOYW1lMjtcbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMkY2xhc3NOYW1lID0gKF90aGlzJHByb3BzJGNsYXNzTmFtZTIgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzKVtrZXldKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wcyRjbGFzc05hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzJGNsYXNzTmFtZS5jYWxsKF90aGlzJHByb3BzJGNsYXNzTmFtZTIsIHByb3BzKTtcbiAgICB9O1xuICAgIF90aGlzLmdldEVsZW1lbnRJZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMuc3RhdGUuaW5zdGFuY2VQcmVmaXgsIFwiLVwiKS5jb25jYXQoZWxlbWVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRDb21wb25lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb21wb25lbnRzKF90aGlzLnByb3BzKTtcbiAgICB9O1xuICAgIF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLnByb3BzLCBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRDYXRlZ29yaXplZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMubWVudUlzT3BlbiA/IF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKCkgOiBbXTtcbiAgICB9O1xuICAgIF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKCkpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5tZW51SXNPcGVuID8gX3RoaXMuYnVpbGRGb2N1c2FibGVPcHRpb25zKCkgOiBbXTtcbiAgICB9O1xuICAgIF90aGlzLmFyaWFPbkNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcmlhU2VsZWN0aW9uOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgYWN0aW9uTWV0YSlcbiAgICAgIH0pO1xuICAgIH07XG4gICAgX3RoaXMub25NZW51TW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuICAgIF90aGlzLm9uTWVudU1vdXNlTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIH07XG4gICAgX3RoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBFdmVudCBjYXB0dXJlZCBieSBkcm9wZG93biBpbmRpY2F0b3JcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvcGVuTWVudU9uQ2xpY2sgPSBfdGhpcy5wcm9wcy5vcGVuTWVudU9uQ2xpY2s7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoIV90aGlzLnByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGlnbm9yZSBtb3VzZSBldmVudHMgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNC5pc011bHRpLFxuICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM0Lm1lbnVJc09wZW47XG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiAhaXNNdWx0aVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGlnbm9yZSBtb3VzZSBldmVudHMgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xuICAgICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uU2Nyb2xsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzRG9jdW1lbnRFbGVtZW50KGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwoZXZlbnQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3RoaXMub25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH07XG4gICAgX3RoaXMub25Db21wb3NpdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciB0b3VjaGVzID0gX3JlZjIudG91Y2hlcztcbiAgICAgIHZhciB0b3VjaCA9IHRvdWNoZXMgJiYgdG91Y2hlcy5pdGVtKDApO1xuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gdG91Y2guY2xpZW50WDtcbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSB0b3VjaC5jbGllbnRZO1xuICAgICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9O1xuICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWYzLnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGRlbHRhWCA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSBfdGhpcy5pbml0aWFsVG91Y2hYKTtcbiAgICAgIHZhciBkZWx0YVkgPSBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gX3RoaXMuaW5pdGlhbFRvdWNoWSk7XG4gICAgICB2YXIgbW92ZVRocmVzaG9sZCA9IDU7XG4gICAgICBfdGhpcy51c2VySXNEcmFnZ2luZyA9IGRlbHRhWCA+IG1vdmVUaHJlc2hvbGQgfHwgZGVsdGFZID4gbW92ZVRocmVzaG9sZDtcbiAgICB9O1xuICAgIF90aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICAvLyBjbG9zZSB0aGUgbWVudSBpZiB0aGUgdXNlciB0YXBzIG91dHNpZGVcbiAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIG9uIGV2ZW50LnRhcmdldCBoZXJlIGluc3RlYWQgb2YgZXZlbnQuY3VycmVudFRhcmdldCwgYmVjYXVzZSB3ZSB3YW50IHRvIGFzc2VydCBpbmZvcm1hdGlvblxuICAgICAgLy8gb24gZXZlbnRzIG9uIGNoaWxkIGVsZW1lbnRzLCBub3QgdGhlIGRvY3VtZW50ICh3aGljaCB3ZSd2ZSBhdHRhY2hlZCB0aGlzIGhhbmRsZXIgdG8pLlxuICAgICAgaWYgKF90aGlzLmNvbnRyb2xSZWYgJiYgIV90aGlzLmNvbnRyb2xSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBfdGhpcy5tZW51TGlzdFJlZiAmJiAhX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVzZXQgbW92ZSB2YXJzXG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gMDtcbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICAgIH07XG4gICAgX3RoaXMub25Db250cm9sVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgX3RoaXMub25Db250cm9sTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuICAgIF90aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJldklucHV0VmFsdWUgPSBfdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwge1xuICAgICAgICBhY3Rpb246ICdpbnB1dC1jaGFuZ2UnLFxuICAgICAgICBwcmV2SW5wdXRWYWx1ZTogcHJldklucHV0VmFsdWVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLm9uTWVudU9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogZmFsc2UsXG4gICAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoX3RoaXMub3BlbkFmdGVyRm9jdXMgfHwgX3RoaXMucHJvcHMub3Blbk1lbnVPbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIF90aGlzLm9uSW5wdXRCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJldklucHV0VmFsdWUgPSBfdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgaWYgKF90aGlzLm1lbnVMaXN0UmVmICYmIF90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIF90aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtYmx1cicsXG4gICAgICAgIHByZXZJbnB1dFZhbHVlOiBwcmV2SW5wdXRWYWx1ZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG4gICAgX3RoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgICBpZiAoX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciB8fCBfdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgdmFyIGZvY3VzZWRPcHRpb25JbmRleCA9IG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZE9wdGlvbklkOiBmb2N1c2VkT3B0aW9uSW5kZXggPiAtMSA/IF90aGlzLmdldEZvY3VzZWRPcHRpb25JZChmb2N1c2VkT3B0aW9uKSA6IG51bGxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgX3RoaXMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zKF90aGlzLnByb3BzKTtcbiAgICB9O1xuICAgIF90aGlzLm9uVmFsdWVJbnB1dEZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBfdGhpcy5mb2N1cygpO1xuICAgIH07XG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczUuaXNNdWx0aSxcbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlID0gX3RoaXMkcHJvcHM1LmJhY2tzcGFjZVJlbW92ZXNWYWx1ZSxcbiAgICAgICAgZXNjYXBlQ2xlYXJzVmFsdWUgPSBfdGhpcyRwcm9wczUuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczUuaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczUuaXNDbGVhcmFibGUsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczUuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNS5tZW51SXNPcGVuLFxuICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wczUub25LZXlEb3duLFxuICAgICAgICB0YWJTZWxlY3RzVmFsdWUgPSBfdGhpcyRwcm9wczUudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICBvcGVuTWVudU9uRm9jdXMgPSBfdGhpcyRwcm9wczUub3Blbk1lbnVPbkZvY3VzO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZS5mb2N1c2VkT3B0aW9uLFxuICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZS5mb2N1c2VkVmFsdWUsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgaWYgKHR5cGVvZiBvbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQmxvY2sgb3B0aW9uIGhvdmVyIGV2ZW50cyB3aGVuIHRoZSB1c2VyIGhhcyBqdXN0IHByZXNzZWQgYSBrZXlcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSB0cnVlO1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ3ByZXZpb3VzJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGlmICghaXNNdWx0aSB8fCBpbnB1dFZhbHVlKSByZXR1cm47XG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgnbmV4dCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSByZXR1cm47XG4gICAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlVmFsdWUoZm9jdXNlZFZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFiYWNrc3BhY2VSZW1vdmVzVmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgICAgICAgIF90aGlzLnBvcFZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2xlYXJhYmxlKSB7XG4gICAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5IHx8ICFtZW51SXNPcGVuIHx8ICF0YWJTZWxlY3RzVmFsdWUgfHwgIWZvY3VzZWRPcHRpb24gfHxcbiAgICAgICAgICAvLyBkb24ndCBjYXB0dXJlIHRoZSBldmVudCBpZiB0aGUgbWVudSBvcGVucyBvbiBmb2N1cyBhbmQgdGhlIGZvY3VzZWRcbiAgICAgICAgICAvLyBvcHRpb24gaXMgYWxyZWFkeSBzZWxlY3RlZDsgaXQgYnJlYWtzIHRoZSBmbG93IG9mIG5hdmlnYXRpb25cbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBrZXlkb3duIGV2ZW50IGZyb20gYW4gSW5wdXQgTWV0aG9kIEVkaXRvcihJTUUpXG4gICAgICAgICAgICAvLyByZWYuIGh0dHBzOi8vd3d3LnczLm9yZy9UUi91aWV2ZW50cy8jZGV0ZXJtaW5lLWtleWRvd24ta2V5dXAta2V5Q29kZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHJldHVybjtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pc0NvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnbWVudS1jbG9zZScsXG4gICAgICAgICAgICAgIHByZXZJbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0NsZWFyYWJsZSAmJiBlc2NhcGVDbGVhcnNWYWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgLy8gc3BhY2VcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCd1cCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnbGFzdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2Rvd24nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQYWdlVXAnOlxuICAgICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdldXAnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdlZG93bicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignZmlyc3QnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignbGFzdCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBfdGhpcy5zdGF0ZS5pbnN0YW5jZVByZWZpeCA9ICdyZWFjdC1zZWxlY3QtJyArIChfdGhpcy5wcm9wcy5pbnN0YW5jZUlkIHx8ICsraW5zdGFuY2VJZCk7XG4gICAgX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKF9wcm9wcy52YWx1ZSk7XG4gICAgLy8gU2V0IGZvY3VzZWRPcHRpb24gaWYgbWVudUlzT3BlbiBpcyBzZXQgb24gaW5pdCAoZS5nLiBkZWZhdWx0TWVudUlzT3BlbilcbiAgICBpZiAoX3Byb3BzLm1lbnVJc09wZW4gJiYgX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWUubGVuZ3RoKSB7XG4gICAgICB2YXIgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMgPSBfdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zV2l0aElkcygpO1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSBfdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHZhciBvcHRpb25JbmRleCA9IGZvY3VzYWJsZU9wdGlvbnMuaW5kZXhPZihfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZVswXSk7XG4gICAgICBfdGhpcy5zdGF0ZS5mb2N1c2FibGVPcHRpb25zV2l0aElkcyA9IGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzO1xuICAgICAgX3RoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiA9IGZvY3VzYWJsZU9wdGlvbnNbb3B0aW9uSW5kZXhdO1xuICAgICAgX3RoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbklkID0gZ2V0Rm9jdXNlZE9wdGlvbklkKGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLCBmb2N1c2FibGVPcHRpb25zW29wdGlvbkluZGV4XSk7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgLy8gTGlzdGVuIHRvIGFsbCBzY3JvbGwgZXZlbnRzLCBhbmQgZmlsdGVyIHRoZW0gb3V0IGluc2lkZSBvZiAnb25TY3JvbGwnXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTY3JvbGwgZm9jdXNlZE9wdGlvbiBpbnRvIHZpZXcgaWYgbWVudUlzT3BlbiBpcyBzZXQgb24gbW91bnQgKGUuZy4gZGVmYXVsdE1lbnVJc09wZW4pXG4gICAgICBpZiAodGhpcy5wcm9wcy5tZW51SXNPcGVuICYmIHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiAmJiB0aGlzLm1lbnVMaXN0UmVmICYmIHRoaXMuZm9jdXNlZE9wdGlvblJlZikge1xuICAgICAgICBzY3JvbGxJbnRvVmlldyh0aGlzLm1lbnVMaXN0UmVmLCB0aGlzLmZvY3VzZWRPcHRpb25SZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczYuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNi5tZW51SXNPcGVuO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgaWYgKFxuICAgICAgLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8XG4gICAgICAvLyBlbnN1cmUgZm9jdXMgaXMgb24gdGhlIElucHV0IHdoZW4gdGhlIG1lbnUgb3BlbnNcbiAgICAgIGlzRm9jdXNlZCAmJiBtZW51SXNPcGVuICYmICFwcmV2UHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0ZvY3VzZWQgJiYgaXNEaXNhYmxlZCAmJiAhcHJldlByb3BzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgLy8gZW5zdXJlIHNlbGVjdCBzdGF0ZSBnZXRzIGJsdXJyZWQgaW4gY2FzZSBTZWxlY3QgaXMgcHJvZ3JhbW1hdGljYWxseSBkaXNhYmxlZCB3aGlsZSBmb2N1c2VkXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICAgIH0sIHRoaXMub25NZW51Q2xvc2UpO1xuICAgICAgfSBlbHNlIGlmICghaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkICYmIHRoaXMuaW5wdXRSZWYgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgLy8gZW5zdXJlIHNlbGVjdCBzdGF0ZSBnZXRzIGZvY3VzZWQgaW4gY2FzZSBTZWxlY3QgaXMgcHJvZ3JhbWF0aWNhbGx5IHJlLWVuYWJsZWQgd2hpbGUgZm9jdXNlZCAoRmlyZWZveClcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gc2Nyb2xsIHRoZSBmb2N1c2VkIG9wdGlvbiBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAodGhpcy5tZW51TGlzdFJlZiAmJiB0aGlzLmZvY3VzZWRPcHRpb25SZWYgJiYgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSkge1xuICAgICAgICBzY3JvbGxJbnRvVmlldyh0aGlzLm1lbnVMaXN0UmVmLCB0aGlzLmZvY3VzZWRPcHRpb25SZWYpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZ1RvVG91Y2goKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbnN1bWVyIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIH0sIHtcbiAgICBrZXk6IFwib25NZW51T3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVPcGVuKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVPcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudUNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudUNsb3NlKCkge1xuICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnLFxuICAgICAgICBwcmV2SW5wdXRWYWx1ZTogdGhpcy5wcm9wcy5pbnB1dFZhbHVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25JbnB1dENoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE1ldGhvZHNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c0lucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1cklucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcbiAgICAgIGlmICghdGhpcy5pbnB1dFJlZikgcmV0dXJuO1xuICAgICAgdGhpcy5pbnB1dFJlZi5ibHVyKCk7XG4gICAgfVxuXG4gICAgLy8gYWxpYXNlZCBmb3IgY29uc3VtZXJzXG4gIH0sIHtcbiAgICBrZXk6IFwib3Blbk1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3Blbk1lbnUoZm9jdXNPcHRpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUyLnNlbGVjdFZhbHVlLFxuICAgICAgICBpc0ZvY3VzZWQgPSBfdGhpcyRzdGF0ZTIuaXNGb2N1c2VkO1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSB0aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgdmFyIG9wZW5BdEluZGV4ID0gZm9jdXNPcHRpb24gPT09ICdmaXJzdCcgPyAwIDogZm9jdXNhYmxlT3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGkpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBmb2N1c2FibGVPcHRpb25zLmluZGV4T2Yoc2VsZWN0VmFsdWVbMF0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgb3BlbkF0SW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG9ubHkgc2Nyb2xsIGlmIHRoZSBtZW51IGlzbid0IGFscmVhZHkgb3BlblxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9ICEoaXNGb2N1c2VkICYmIHRoaXMubWVudUxpc3RSZWYpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogZmFsc2UsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNhYmxlT3B0aW9uc1tvcGVuQXRJbmRleF0sXG4gICAgICAgIGZvY3VzZWRPcHRpb25JZDogdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQoZm9jdXNhYmxlT3B0aW9uc1tvcGVuQXRJbmRleF0pXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIub25NZW51T3BlbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNWYWx1ZShkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlMy5zZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUzLmZvY3VzZWRWYWx1ZTtcblxuICAgICAgLy8gT25seSBtdWx0aXNlbGVjdHMgc3VwcG9ydCB2YWx1ZSBmb2N1c2luZ1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGkpIHJldHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBudWxsXG4gICAgICB9KTtcbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG4gICAgICBpZiAoIWZvY3VzZWRWYWx1ZSkge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBsYXN0SW5kZXggPSBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgdmFyIG5leHRGb2N1cyA9IC0xO1xuICAgICAgaWYgKCFzZWxlY3RWYWx1ZS5sZW5ndGgpIHJldHVybjtcbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBjeWNsZSBmcm9tIHRoZSBzdGFydCB0byB0aGUgZW5kXG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8gaWYgbm90aGluZyBpcyBmb2N1c2VkLCBmb2N1cyB0aGUgbGFzdCB2YWx1ZSBmaXJzdFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gbGFzdEluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA+IC0xICYmIGZvY3VzZWRJbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogbmV4dEZvY3VzICE9PSAtMSxcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBzZWxlY3RWYWx1ZVtuZXh0Rm9jdXNdXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNPcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNPcHRpb24oKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnZmlyc3QnO1xuICAgICAgdmFyIHBhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybjtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAwOyAvLyBoYW5kbGVzICdmaXJzdCdcbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCA+IDAgPyBmb2N1c2VkSW5kZXggLSAxIDogb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSAoZm9jdXNlZEluZGV4ICsgMSkgJSBvcHRpb25zLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZXVwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA8IDApIG5leHRGb2N1cyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA+IG9wdGlvbnMubGVuZ3RoIC0gMSkgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsYXN0Jykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBvcHRpb25zW25leHRGb2N1c10sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgZm9jdXNlZE9wdGlvbklkOiB0aGlzLmdldEZvY3VzZWRPcHRpb25JZChvcHRpb25zW25leHRGb2N1c10pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGhlbWVcIixcbiAgICB2YWx1ZTpcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBHZXR0ZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgICAgIC8vIFVzZSB0aGUgZGVmYXVsdCB0aGVtZSBpZiB0aGVyZSBhcmUgbm8gY3VzdG9taXNhdGlvbnMuXG4gICAgICBpZiAoIXRoaXMucHJvcHMudGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSB0aGVtZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSB0aGUgZnVuY3Rpb25cbiAgICAgIC8vIGtub3dzIGhvdyB0byBtZXJnZSB0aGUgcGFzc2VkLWluIGRlZmF1bHQgdGhlbWUgd2l0aFxuICAgICAgLy8gaXRzIG93biBtb2RpZmljYXRpb25zLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRoZW1lKGRlZmF1bHRUaGVtZSk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UsIGlmIGEgcGxhaW4gdGhlbWUgb2JqZWN0IHdhcyBwYXNzZWQgaW4sXG4gICAgICAvLyBvdmVybGF5IGl0IHdpdGggdGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0VGhlbWUpLCB0aGlzLnByb3BzLnRoZW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29tbW9uUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tbW9uUHJvcHMoKSB7XG4gICAgICB2YXIgY2xlYXJWYWx1ZSA9IHRoaXMuY2xlYXJWYWx1ZSxcbiAgICAgICAgY3ggPSB0aGlzLmN4LFxuICAgICAgICBnZXRTdHlsZXMgPSB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgZ2V0Q2xhc3NOYW1lcyA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyxcbiAgICAgICAgZ2V0VmFsdWUgPSB0aGlzLmdldFZhbHVlLFxuICAgICAgICBzZWxlY3RPcHRpb24gPSB0aGlzLnNlbGVjdE9wdGlvbixcbiAgICAgICAgc2V0VmFsdWUgPSB0aGlzLnNldFZhbHVlLFxuICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGwsXG4gICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuICAgICAgdmFyIGhhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJWYWx1ZTogY2xlYXJWYWx1ZSxcbiAgICAgICAgY3g6IGN4LFxuICAgICAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICAgICAgZ2V0Q2xhc3NOYW1lczogZ2V0Q2xhc3NOYW1lcyxcbiAgICAgICAgZ2V0VmFsdWU6IGdldFZhbHVlLFxuICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWUsXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzUnRsOiBpc1J0bCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgc2VsZWN0T3B0aW9uOiBzZWxlY3RPcHRpb24sXG4gICAgICAgIHNlbGVjdFByb3BzOiBwcm9wcyxcbiAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlLFxuICAgICAgICB0aGVtZTogdGhpcy5nZXRUaGVtZSgpXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWYWx1ZSgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICByZXR1cm4gc2VsZWN0VmFsdWUubGVuZ3RoID4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NsZWFyYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsZWFyYWJsZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0NsZWFyYWJsZSA9IF90aGlzJHByb3BzNy5pc0NsZWFyYWJsZSxcbiAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNy5pc011bHRpO1xuXG4gICAgICAvLyBzaW5nbGUgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBOT1QgY2xlYXJhYmxlXG4gICAgICAvLyBtdWx0aSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIGNsZWFyYWJsZVxuICAgICAgaWYgKGlzQ2xlYXJhYmxlID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuICAgICAgcmV0dXJuIGlzQ2xlYXJhYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc09wdGlvbkRpc2FibGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIF9pc09wdGlvbkRpc2FibGVkKHRoaXMucHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc09wdGlvblNlbGVjdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIF9pc09wdGlvblNlbGVjdGVkKHRoaXMucHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaWx0ZXJPcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9uKG9wdGlvbiwgaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIF9maWx0ZXJPcHRpb24odGhpcy5wcm9wcywgb3B0aW9uLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0T3B0aW9uTGFiZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwgY29udGV4dCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmZvcm1hdE9wdGlvbkxhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfaW5wdXRWYWx1ZSA9IHRoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFyIF9zZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIHtcbiAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgIGlucHV0VmFsdWU6IF9pbnB1dFZhbHVlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlOiBfc2VsZWN0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0R3JvdXBMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTW91c2UgSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQ29tcG9zaXRpb24gSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdUb1RvdWNoXCIsXG4gICAgdmFsdWU6XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVG91Y2ggSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdUb1RvdWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySW5wdXRcIixcbiAgICB2YWx1ZTpcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBSZW5kZXJlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM4LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzOC5pc1NlYXJjaGFibGUsXG4gICAgICAgIGlucHV0SWQgPSBfdGhpcyRwcm9wczguaW5wdXRJZCxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzOC5pbnB1dFZhbHVlLFxuICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzOC50YWJJbmRleCxcbiAgICAgICAgZm9ybSA9IF90aGlzJHByb3BzOC5mb3JtLFxuICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM4Lm1lbnVJc09wZW4sXG4gICAgICAgIHJlcXVpcmVkID0gX3RoaXMkcHJvcHM4LnJlcXVpcmVkO1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgSW5wdXQgPSBfdGhpcyRnZXRDb21wb25lbnRzLklucHV0O1xuICAgICAgdmFyIF90aGlzJHN0YXRlNCA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGlucHV0SXNIaWRkZW4gPSBfdGhpcyRzdGF0ZTQuaW5wdXRJc0hpZGRlbixcbiAgICAgICAgYXJpYVNlbGVjdGlvbiA9IF90aGlzJHN0YXRlNC5hcmlhU2VsZWN0aW9uO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpZCA9IGlucHV0SWQgfHwgdGhpcy5nZXRFbGVtZW50SWQoJ2lucHV0Jyk7XG5cbiAgICAgIC8vIGFyaWEgYXR0cmlidXRlcyBtYWtlcyB0aGUgSlNYIFwibm9pc3lcIiwgc2VwYXJhdGVkIGZvciBjbGFyaXR5XG4gICAgICB2YXIgYXJpYUF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBtZW51SXNPcGVuLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICdhcmlhLWVycm9ybWVzc2FnZSc6IHRoaXMucHJvcHNbJ2FyaWEtZXJyb3JtZXNzYWdlJ10sXG4gICAgICAgICdhcmlhLWludmFsaWQnOiB0aGlzLnByb3BzWydhcmlhLWludmFsaWQnXSxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgICAgJ2FyaWEtcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuaXNBcHBsZURldmljZSA/IHVuZGVmaW5lZCA6IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbklkIHx8ICcnXG4gICAgICB9LCBtZW51SXNPcGVuICYmIHtcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiB0aGlzLmdldEVsZW1lbnRJZCgnbGlzdGJveCcpXG4gICAgICB9KSwgIWlzU2VhcmNoYWJsZSAmJiB7XG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogdHJ1ZVxuICAgICAgfSksIHRoaXMuaGFzVmFsdWUoKSA/IChhcmlhU2VsZWN0aW9uID09PSBudWxsIHx8IGFyaWFTZWxlY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyaWFTZWxlY3Rpb24uYWN0aW9uKSA9PT0gJ2luaXRpYWwtaW5wdXQtZm9jdXMnICYmIHtcbiAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLmdldEVsZW1lbnRJZCgnbGl2ZS1yZWdpb24nKVxuICAgICAgfSA6IHtcbiAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLmdldEVsZW1lbnRJZCgncGxhY2Vob2xkZXInKVxuICAgICAgfSk7XG4gICAgICBpZiAoIWlzU2VhcmNoYWJsZSkge1xuICAgICAgICAvLyB1c2UgYSBkdW1teSBpbnB1dCB0byBtYWludGFpbiBmb2N1cy9ibHVyIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KER1bW15SW5wdXQsIF9leHRlbmRzKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0SW5wdXRSZWYsXG4gICAgICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlOiBub29wLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgICBpbnB1dE1vZGU6IFwibm9uZVwiLFxuICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGF1dG9DYXBpdGFsaXplOiBcIm5vbmVcIixcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICBhdXRvQ29ycmVjdDogXCJvZmZcIixcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNIaWRkZW46IGlucHV0SXNIaWRkZW4sXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICB9LCBhcmlhQXR0cmlidXRlcykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJQbGFjZWhvbGRlck9yVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czIgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgTXVsdGlWYWx1ZSA9IF90aGlzJGdldENvbXBvbmVudHMyLk11bHRpVmFsdWUsXG4gICAgICAgIE11bHRpVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICBNdWx0aVZhbHVlTGFiZWwgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgIE11bHRpVmFsdWVSZW1vdmUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlUmVtb3ZlLFxuICAgICAgICBTaW5nbGVWYWx1ZSA9IF90aGlzJGdldENvbXBvbmVudHMyLlNpbmdsZVZhbHVlLFxuICAgICAgICBQbGFjZWhvbGRlciA9IF90aGlzJGdldENvbXBvbmVudHMyLlBsYWNlaG9sZGVyO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfdGhpcyRwcm9wczkuY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM5LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczkuaXNNdWx0aSxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzOS5pbnB1dFZhbHVlLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJHByb3BzOS5wbGFjZWhvbGRlcjtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNS5zZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU1LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGU1LmlzRm9jdXNlZDtcbiAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpIHx8ICFjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0RWxlbWVudElkKCdwbGFjZWhvbGRlcicpXG4gICAgICAgICAgfVxuICAgICAgICB9KSwgcGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpbmRleCkge1xuICAgICAgICAgIHZhciBpc09wdGlvbkZvY3VzZWQgPSBvcHQgPT09IGZvY3VzZWRWYWx1ZTtcbiAgICAgICAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoX3RoaXMzLmdldE9wdGlvbkxhYmVsKG9wdCksIFwiLVwiKS5jb25jYXQoX3RoaXMzLmdldE9wdGlvblZhbHVlKG9wdCkpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aVZhbHVlLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICAgICAgICBMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgICAgICBSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGlzT3B0aW9uRm9jdXNlZCxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZVByb3BzOiB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBvcHRcbiAgICAgICAgICB9KSwgX3RoaXMzLmZvcm1hdE9wdGlvbkxhYmVsKG9wdCwgJ3ZhbHVlJykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHNpbmdsZVZhbHVlID0gc2VsZWN0VmFsdWVbMF07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlVmFsdWUsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBkYXRhOiBzaW5nbGVWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMuZm9ybWF0T3B0aW9uTGFiZWwoc2luZ2xlVmFsdWUsICd2YWx1ZScpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ2xlYXJJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXJJbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgQ2xlYXJJbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzMy5DbGVhckluZGljYXRvcjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczEwLmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTAuaXNMb2FkaW5nO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgaWYgKCF0aGlzLmlzQ2xlYXJhYmxlKCkgfHwgIUNsZWFySW5kaWNhdG9yIHx8IGlzRGlzYWJsZWQgfHwgIXRoaXMuaGFzVmFsdWUoKSB8fCBpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbGVhckluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxvYWRpbmdJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTG9hZGluZ0luZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNCA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICBMb2FkaW5nSW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czQuTG9hZGluZ0luZGljYXRvcjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczExLmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTEuaXNMb2FkaW5nO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgaWYgKCFMb2FkaW5nSW5kaWNhdG9yIHx8ICFpc0xvYWRpbmcpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nSW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvclNlcGFyYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNSA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM1LkRyb3Bkb3duSW5kaWNhdG9yLFxuICAgICAgICBJbmRpY2F0b3JTZXBhcmF0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNS5JbmRpY2F0b3JTZXBhcmF0b3I7XG5cbiAgICAgIC8vIHNlcGFyYXRvciBkb2Vzbid0IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgZHJvcGRvd24gaW5kaWNhdG9yXG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yIHx8ICFJbmRpY2F0b3JTZXBhcmF0b3IpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckRyb3Bkb3duSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM2ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIERyb3Bkb3duSW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czYuRHJvcGRvd25JbmRpY2F0b3I7XG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JUb3VjaEVuZCxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duSW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTWVudVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czcgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgR3JvdXAgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5Hcm91cCxcbiAgICAgICAgR3JvdXBIZWFkaW5nID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuR3JvdXBIZWFkaW5nLFxuICAgICAgICBNZW51ID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudSxcbiAgICAgICAgTWVudUxpc3QgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51TGlzdCxcbiAgICAgICAgTWVudVBvcnRhbCA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnVQb3J0YWwsXG4gICAgICAgIExvYWRpbmdNZXNzYWdlID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTG9hZGluZ01lc3NhZ2UsXG4gICAgICAgIE5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5Ob09wdGlvbnNNZXNzYWdlLFxuICAgICAgICBPcHRpb24gPSBfdGhpcyRnZXRDb21wb25lbnRzNy5PcHRpb247XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsID0gX3RoaXMkcHJvcHMxMi5jYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTIuaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxMi5pc0xvYWRpbmcsXG4gICAgICAgIGxvYWRpbmdNZXNzYWdlID0gX3RoaXMkcHJvcHMxMi5sb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgbWluTWVudUhlaWdodCA9IF90aGlzJHByb3BzMTIubWluTWVudUhlaWdodCxcbiAgICAgICAgbWF4TWVudUhlaWdodCA9IF90aGlzJHByb3BzMTIubWF4TWVudUhlaWdodCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMTIubWVudUlzT3BlbixcbiAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzMTIubWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uID0gX3RoaXMkcHJvcHMxMi5tZW51UG9zaXRpb24sXG4gICAgICAgIG1lbnVQb3J0YWxUYXJnZXQgPSBfdGhpcyRwcm9wczEyLm1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgIG1lbnVTaG91bGRCbG9ja1Njcm9sbCA9IF90aGlzJHByb3BzMTIubWVudVNob3VsZEJsb2NrU2Nyb2xsLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wczEyLm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyxcbiAgICAgICAgbm9PcHRpb25zTWVzc2FnZSA9IF90aGlzJHByb3BzMTIubm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgb25NZW51U2Nyb2xsVG9Ub3AgPSBfdGhpcyRwcm9wczEyLm9uTWVudVNjcm9sbFRvVG9wLFxuICAgICAgICBvbk1lbnVTY3JvbGxUb0JvdHRvbSA9IF90aGlzJHByb3BzMTIub25NZW51U2Nyb2xsVG9Cb3R0b207XG4gICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybiBudWxsO1xuXG4gICAgICAvLyBUT0RPOiBJbnRlcm5hbCBPcHRpb24gVHlwZSBoZXJlXG4gICAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCBpZCkge1xuICAgICAgICB2YXIgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICAgICAgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gZm9jdXNlZE9wdGlvbiA9PT0gZGF0YTtcbiAgICAgICAgdmFyIG9uSG92ZXIgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQub25PcHRpb25Ib3ZlcihkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU2VsZWN0ID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LnNlbGVjdE9wdGlvbihkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wdGlvbklkID0gXCJcIi5jb25jYXQoX3RoaXM0LmdldEVsZW1lbnRJZCgnb3B0aW9uJyksIFwiLVwiKS5jb25jYXQoaWQpO1xuICAgICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgICBpZDogb3B0aW9uSWQsXG4gICAgICAgICAgb25DbGljazogb25TZWxlY3QsXG4gICAgICAgICAgb25Nb3VzZU1vdmU6IG9uSG92ZXIsXG4gICAgICAgICAgb25Nb3VzZU92ZXI6IG9uSG92ZXIsXG4gICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogX3RoaXM0LmlzQXBwbGVEZXZpY2UgPyB1bmRlZmluZWQgOiBpc1NlbGVjdGVkIC8vIGlzIG5vdCBzdXBwb3J0ZWQgb24gQXBwbGUgZGV2aWNlc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAga2V5OiBvcHRpb25JZCxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgaW5uZXJSZWY6IGlzRm9jdXNlZCA/IF90aGlzNC5nZXRGb2N1c2VkT3B0aW9uUmVmIDogdW5kZWZpbmVkXG4gICAgICAgIH0pLCBfdGhpczQuZm9ybWF0T3B0aW9uTGFiZWwocHJvcHMuZGF0YSwgJ21lbnUnKSk7XG4gICAgICB9O1xuICAgICAgdmFyIG1lbnVVSTtcbiAgICAgIGlmICh0aGlzLmhhc09wdGlvbnMoKSkge1xuICAgICAgICBtZW51VUkgPSB0aGlzLmdldENhdGVnb3JpemVkT3B0aW9ucygpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIHZhciBfZGF0YSA9IGl0ZW0uZGF0YSxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IGl0ZW0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgZ3JvdXBJbmRleCA9IGl0ZW0uaW5kZXg7XG4gICAgICAgICAgICB2YXIgZ3JvdXBJZCA9IFwiXCIuY29uY2F0KF90aGlzNC5nZXRFbGVtZW50SWQoJ2dyb3VwJyksIFwiLVwiKS5jb25jYXQoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICB2YXIgaGVhZGluZ0lkID0gXCJcIi5jb25jYXQoZ3JvdXBJZCwgXCItaGVhZGluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICAgIGtleTogZ3JvdXBJZCxcbiAgICAgICAgICAgICAgZGF0YTogX2RhdGEsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgIEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgICAgICAgICAgICAgaGVhZGluZ1Byb3BzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGhlYWRpbmdJZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtLmRhdGFcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IF90aGlzNC5mb3JtYXRHcm91cExhYmVsKGl0ZW0uZGF0YSlcbiAgICAgICAgICAgIH0pLCBpdGVtLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihvcHRpb24sIFwiXCIuY29uY2F0KGdyb3VwSW5kZXgsIFwiLVwiKS5jb25jYXQob3B0aW9uLmluZGV4KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGl0ZW0sIFwiXCIuY29uY2F0KGl0ZW0uaW5kZXgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBsb2FkaW5nTWVzc2FnZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBtZW51VUkgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nTWVzc2FnZSwgY29tbW9uUHJvcHMsIG1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9tZXNzYWdlID0gbm9PcHRpb25zTWVzc2FnZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF9tZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm9PcHRpb25zTWVzc2FnZSwgY29tbW9uUHJvcHMsIF9tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHZhciBtZW51UGxhY2VtZW50UHJvcHMgPSB7XG4gICAgICAgIG1pbk1lbnVIZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXc6IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlld1xuICAgICAgfTtcbiAgICAgIHZhciBtZW51RWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQbGFjZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzKSwgZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgIHZhciByZWYgPSBfcmVmNC5yZWYsXG4gICAgICAgICAgX3JlZjQkcGxhY2VyUHJvcHMgPSBfcmVmNC5wbGFjZXJQcm9wcyxcbiAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmNCRwbGFjZXJQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3JlZjQkcGxhY2VyUHJvcHMubWF4SGVpZ2h0O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMsIHtcbiAgICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBfdGhpczQub25NZW51TW91c2VEb3duLFxuICAgICAgICAgICAgb25Nb3VzZU1vdmU6IF90aGlzNC5vbk1lbnVNb3VzZU1vdmVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxNYW5hZ2VyLCB7XG4gICAgICAgICAgY2FwdHVyZUVuYWJsZWQ6IGNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIG9uVG9wQXJyaXZlOiBvbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbkJvdHRvbUFycml2ZTogb25NZW51U2Nyb2xsVG9Cb3R0b20sXG4gICAgICAgICAgbG9ja0VuYWJsZWQ6IG1lbnVTaG91bGRCbG9ja1Njcm9sbFxuICAgICAgICB9LCBmdW5jdGlvbiAoc2Nyb2xsVGFyZ2V0UmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVMaXN0LCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZihpbnN0YW5jZSkge1xuICAgICAgICAgICAgICBfdGhpczQuZ2V0TWVudUxpc3RSZWYoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICBzY3JvbGxUYXJnZXRSZWYoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICAgICAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiBjb21tb25Qcm9wcy5pc011bHRpLFxuICAgICAgICAgICAgICBpZDogX3RoaXM0LmdldEVsZW1lbnRJZCgnbGlzdGJveCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb25cbiAgICAgICAgICB9KSwgbWVudVVJKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHBvc2l0aW9uaW5nIGJlaGF2aW91ciBpcyBhbG1vc3QgaWRlbnRpY2FsIGZvciBwb3J0YWxsZWQgYW5kIGZpeGVkLFxuICAgICAgLy8gc28gd2UgdXNlIHRoZSBzYW1lIGNvbXBvbmVudC4gdGhlIGFjdHVhbCBwb3J0YWxsaW5nIGxvZ2ljIGlzIGZvcmtlZFxuICAgICAgLy8gd2l0aGluIHRoZSBjb21wb25lbnQgYmFzZWQgb24gYG1lbnVQb3NpdGlvbmBcbiAgICAgIHJldHVybiBtZW51UG9ydGFsVGFyZ2V0IHx8IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQb3J0YWwsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBhcHBlbmRUbzogbWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IHRoaXMuY29udHJvbFJlZixcbiAgICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb25cbiAgICAgIH0pLCBtZW51RWxlbWVudCkgOiBtZW51RWxlbWVudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRm9ybUZpZWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1GaWVsZCgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkZWxpbWl0ZXIgPSBfdGhpcyRwcm9wczEzLmRlbGltaXRlcixcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTMuaXNEaXNhYmxlZCxcbiAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMTMuaXNNdWx0aSxcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMTMubmFtZSxcbiAgICAgICAgcmVxdWlyZWQgPSBfdGhpcyRwcm9wczEzLnJlcXVpcmVkO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIGlmIChyZXF1aXJlZCAmJiAhdGhpcy5oYXNWYWx1ZSgpICYmICFpc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXF1aXJlZElucHV0JDEsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMub25WYWx1ZUlucHV0Rm9jdXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5hbWUgfHwgaXNEaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgaWYgKGRlbGltaXRlcikge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1LmdldE9wdGlvblZhbHVlKG9wdCk7XG4gICAgICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGlucHV0ID0gc2VsZWN0VmFsdWUubGVuZ3RoID4gMCA/IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJpLVwiLmNvbmNhdChpKSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzNS5nZXRPcHRpb25WYWx1ZShvcHQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfdmFsdWUgPSBzZWxlY3RWYWx1ZVswXSA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUoc2VsZWN0VmFsdWVbMF0pIDogJyc7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgdmFsdWU6IF92YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTGl2ZVJlZ2lvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMaXZlUmVnaW9uKCkge1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTYgPSB0aGlzLnN0YXRlLFxuICAgICAgICBhcmlhU2VsZWN0aW9uID0gX3RoaXMkc3RhdGU2LmFyaWFTZWxlY3Rpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZTYuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU2LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGU2LmlzRm9jdXNlZCxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTYuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpdmVSZWdpb24kMSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlkOiB0aGlzLmdldEVsZW1lbnRJZCgnbGl2ZS1yZWdpb24nKSxcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogYXJpYVNlbGVjdGlvbixcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzYWJsZU9wdGlvbnM6IGZvY3VzYWJsZU9wdGlvbnMsXG4gICAgICAgIGlzQXBwbGVEZXZpY2U6IHRoaXMuaXNBcHBsZURldmljZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM4ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIENvbnRyb2wgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5Db250cm9sLFxuICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgICAgICAgU2VsZWN0Q29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguU2VsZWN0Q29udGFpbmVyLFxuICAgICAgICBWYWx1ZUNvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHM4LlZhbHVlQ29udGFpbmVyO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTQgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczE0LmNsYXNzTmFtZSxcbiAgICAgICAgaWQgPSBfdGhpcyRwcm9wczE0LmlkLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNC5pc0Rpc2FibGVkLFxuICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHMxNC5tZW51SXNPcGVuO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyA9IHRoaXMuZ2V0Q29tbW9uUHJvcHMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duXG4gICAgICAgIH0sXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJMaXZlUmVnaW9uKCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRyb2wsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRDb250cm9sUmVmLFxuICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Db250cm9sTW91c2VEb3duLFxuICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Db250cm9sVG91Y2hFbmRcbiAgICAgICAgfSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgIG1lbnVJc09wZW46IG1lbnVJc09wZW5cbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWYWx1ZUNvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpLCB0aGlzLnJlbmRlcklucHV0KCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbmRpY2F0b3JzQ29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMucmVuZGVyQ2xlYXJJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCksIHRoaXMucmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCksIHRoaXMucmVuZGVyRHJvcGRvd25JbmRpY2F0b3IoKSkpLCB0aGlzLnJlbmRlck1lbnUoKSwgdGhpcy5yZW5kZXJGb3JtRmllbGQoKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSBzdGF0ZS5wcmV2UHJvcHMsXG4gICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlID0gc3RhdGUuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUsXG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IHN0YXRlLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSxcbiAgICAgICAgYXJpYVNlbGVjdGlvbiA9IHN0YXRlLmFyaWFTZWxlY3Rpb24sXG4gICAgICAgIGlzRm9jdXNlZCA9IHN0YXRlLmlzRm9jdXNlZCxcbiAgICAgICAgcHJldldhc0ZvY3VzZWQgPSBzdGF0ZS5wcmV2V2FzRm9jdXNlZCxcbiAgICAgICAgaW5zdGFuY2VQcmVmaXggPSBzdGF0ZS5pbnN0YW5jZVByZWZpeDtcbiAgICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbiA9IHByb3BzLm1lbnVJc09wZW4sXG4gICAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUodmFsdWUpO1xuICAgICAgdmFyIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7fTtcbiAgICAgIGlmIChwcmV2UHJvcHMgJiYgKHZhbHVlICE9PSBwcmV2UHJvcHMudmFsdWUgfHwgb3B0aW9ucyAhPT0gcHJldlByb3BzLm9wdGlvbnMgfHwgbWVudUlzT3BlbiAhPT0gcHJldlByb3BzLm1lbnVJc09wZW4gfHwgaW5wdXRWYWx1ZSAhPT0gcHJldlByb3BzLmlucHV0VmFsdWUpKSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gbWVudUlzT3BlbiA/IGJ1aWxkRm9jdXNhYmxlT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIDogW107XG4gICAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zV2l0aElkcyA9IG1lbnVJc09wZW4gPyBidWlsZEZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzKGJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSksIFwiXCIuY29uY2F0KGluc3RhbmNlUHJlZml4LCBcIi1vcHRpb25cIikpIDogW107XG4gICAgICAgIHZhciBmb2N1c2VkVmFsdWUgPSBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA/IGdldE5leHRGb2N1c2VkVmFsdWUoc3RhdGUsIHNlbGVjdFZhbHVlKSA6IG51bGw7XG4gICAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gZ2V0TmV4dEZvY3VzZWRPcHRpb24oc3RhdGUsIGZvY3VzYWJsZU9wdGlvbnMpO1xuICAgICAgICB2YXIgZm9jdXNlZE9wdGlvbklkID0gZ2V0Rm9jdXNlZE9wdGlvbklkKGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLCBmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgbmV3TWVudU9wdGlvbnNTdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uSWQ6IGZvY3VzZWRPcHRpb25JZCxcbiAgICAgICAgICBmb2N1c2FibGVPcHRpb25zV2l0aElkczogZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMsXG4gICAgICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWUsXG4gICAgICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBzb21lIHVwZGF0ZXMgc2hvdWxkIHRvZ2dsZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZpc2liaWxpdHlcbiAgICAgIHZhciBuZXdJbnB1dElzSGlkZGVuU3RhdGUgPSBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgIT0gbnVsbCAmJiBwcm9wcyAhPT0gcHJldlByb3BzID8ge1xuICAgICAgICBpbnB1dElzSGlkZGVuOiBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUsXG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogdW5kZWZpbmVkXG4gICAgICB9IDoge307XG4gICAgICB2YXIgbmV3QXJpYVNlbGVjdGlvbiA9IGFyaWFTZWxlY3Rpb247XG4gICAgICB2YXIgaGFzS2VwdEZvY3VzID0gaXNGb2N1c2VkICYmIHByZXZXYXNGb2N1c2VkO1xuICAgICAgaWYgKGlzRm9jdXNlZCAmJiAhaGFzS2VwdEZvY3VzKSB7XG4gICAgICAgIC8vIElmIGB2YWx1ZWAgb3IgYGRlZmF1bHRWYWx1ZWAgcHJvcHMgYXJlIG5vdCBlbXB0eSB0aGVuIGFubm91bmNlIHRoZW1cbiAgICAgICAgLy8gd2hlbiB0aGUgU2VsZWN0IGlzIGluaXRpYWxseSBmb2N1c2VkXG4gICAgICAgIG5ld0FyaWFTZWxlY3Rpb24gPSB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlVGVybmFyeShpc011bHRpLCBzZWxlY3RWYWx1ZSwgc2VsZWN0VmFsdWVbMF0gfHwgbnVsbCksXG4gICAgICAgICAgb3B0aW9uczogc2VsZWN0VmFsdWUsXG4gICAgICAgICAgYWN0aW9uOiAnaW5pdGlhbC1pbnB1dC1mb2N1cydcbiAgICAgICAgfTtcbiAgICAgICAgaGFzS2VwdEZvY3VzID0gIXByZXZXYXNGb2N1c2VkO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgJ2luaXRpYWwtaW5wdXQtZm9jdXMnIGFjdGlvbiBoYXMgYmVlbiBzZXQgYWxyZWFkeVxuICAgICAgLy8gdGhlbiByZXNldCB0aGUgYXJpYVNlbGVjdGlvbiB0byBudWxsXG4gICAgICBpZiAoKGFyaWFTZWxlY3Rpb24gPT09IG51bGwgfHwgYXJpYVNlbGVjdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJpYVNlbGVjdGlvbi5hY3Rpb24pID09PSAnaW5pdGlhbC1pbnB1dC1mb2N1cycpIHtcbiAgICAgICAgbmV3QXJpYVNlbGVjdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG5ld01lbnVPcHRpb25zU3RhdGUpLCBuZXdJbnB1dElzSGlkZGVuU3RhdGUpLCB7fSwge1xuICAgICAgICBwcmV2UHJvcHM6IHByb3BzLFxuICAgICAgICBhcmlhU2VsZWN0aW9uOiBuZXdBcmlhU2VsZWN0aW9uLFxuICAgICAgICBwcmV2V2FzRm9jdXNlZDogaGFzS2VwdEZvY3VzXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNlbGVjdDtcbn0oQ29tcG9uZW50KTtcblNlbGVjdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IFNlbGVjdCBhcyBTLCBkZWZhdWx0UHJvcHMgYXMgYSwgZ2V0T3B0aW9uTGFiZWwkMSBhcyBiLCBjcmVhdGVGaWx0ZXIgYXMgYywgZGVmYXVsdFRoZW1lIGFzIGQsIGdldE9wdGlvblZhbHVlJDEgYXMgZywgbWVyZ2VTdHlsZXMgYXMgbSB9O1xuIiwiaW1wb3J0IHsgdSBhcyB1c2VTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3VzZVN0YXRlTWFuYWdlci03ZTFlODQ4OS5lc20uanMnO1xuZXhwb3J0IHsgdSBhcyB1c2VTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3VzZVN0YXRlTWFuYWdlci03ZTFlODQ4OS5lc20uanMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFMgYXMgU2VsZWN0IH0gZnJvbSAnLi9TZWxlY3QtYWFiMDI3ZjMuZXNtLmpzJztcbmV4cG9ydCB7IGMgYXMgY3JlYXRlRmlsdGVyLCBkIGFzIGRlZmF1bHRUaGVtZSwgbSBhcyBtZXJnZVN0eWxlcyB9IGZyb20gJy4vU2VsZWN0LWFhYjAyN2YzLmVzbS5qcyc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmV4cG9ydCB7IGMgYXMgY29tcG9uZW50cyB9IGZyb20gJy4vaW5kZXgtNjQxZWU1YjguZXNtLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXInO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0ICd1c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0JztcblxudmFyIFN0YXRlTWFuYWdlZFNlbGVjdCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBiYXNlU2VsZWN0UHJvcHMgPSB1c2VTdGF0ZU1hbmFnZXIocHJvcHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWZcbiAgfSwgYmFzZVNlbGVjdFByb3BzKSk7XG59KTtcbnZhciBTdGF0ZU1hbmFnZWRTZWxlY3QkMSA9IFN0YXRlTWFuYWdlZFNlbGVjdDtcblxudmFyIE5vbmNlUHJvdmlkZXIgPSAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIG5vbmNlID0gX3JlZi5ub25jZSxcbiAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgY2FjaGVLZXkgPSBfcmVmLmNhY2hlS2V5O1xuICB2YXIgZW1vdGlvbkNhY2hlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNhY2hlKHtcbiAgICAgIGtleTogY2FjaGVLZXksXG4gICAgICBub25jZTogbm9uY2VcbiAgICB9KTtcbiAgfSwgW2NhY2hlS2V5LCBub25jZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FjaGVQcm92aWRlciwge1xuICAgIHZhbHVlOiBlbW90aW9uQ2FjaGVcbiAgfSwgY2hpbGRyZW4pO1xufSk7XG5cbmV4cG9ydCB7IE5vbmNlUHJvdmlkZXIsIFN0YXRlTWFuYWdlZFNlbGVjdCQxIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5jb25zdCBEZXBhcnRtZW50TXVsdGlTZWxlY3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlY29yZCwgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSBwcm9wcztcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5Lm5hbWVdIHx8IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEZXBhcnRtZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL+C5geC4nOC4meC4gS9hY3Rpb25zL2xpc3QnKTtcclxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGpzb24ucmVjb3Jkcy5tYXAociA9PiAoe1xyXG4gICAgICAgIGxhYmVsOiByLnBhcmFtcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiBwYXJzZUludChyLnBhcmFtcy5kZXB0X2lkKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRPcHRpb25zKHZhbHVlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGVwYXJ0bWVudHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVzID0gc2VsZWN0ZWQubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGwgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBvcHRpb25zLm1hcChvcHQgPT4gb3B0LnZhbHVlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICDguYDguKXguLfguK3guIHguJfguLHguYnguIfguKvguKHguJRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBpc011bHRpXHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICB2YWx1ZT17b3B0aW9ucy5maWx0ZXIob3B0ID0+IHNlbGVjdGVkVmFsdWVzPy5pbmNsdWRlcyhvcHQudmFsdWUpKX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlcGFydG1lbnRNdWx0aVNlbGVjdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBIMiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5jb25zdCBTd2l0Y2hWaWV3UXVlc3Rpb25BY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZGlyZWN0ID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoJy9hZG1pbi9wYWdlcy9ncm91cGVkLXF1ZXN0aW9ucycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB2YXJpYW50PVwiZ3JleVwiPlxyXG4gICAgICA8SDI+R3JvdXBlZCBRdWVzdGlvbnMgVmlldzwvSDI+XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBtdD1cImxnXCIgb25DbGljaz17aGFuZGxlUmVkaXJlY3R9PlxyXG4gICAgICAgIOC5hOC4m+C4ouC4seC4h+C4q+C4meC5ieC4siBHcm91cGVkIFF1ZXN0aW9uc1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoVmlld1F1ZXN0aW9uQWN0aW9uXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbmpzJ1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgTGFiZWwsXHJcbiAgU2VsZWN0LFxyXG4gIElucHV0LFxyXG4gIEgyLFxyXG4gIEgzLFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuY29uc3QgU0lURVMgPSBbJ0hRJywgJ1NLJywgJ1NUJ107XHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgVG9waWNDb25maWcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvcGljcywgc2V0VG9waWNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGVwYXJ0bWVudHMsIHNldERlcGFydG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUb3BpYywgc2V0U2VsZWN0ZWRUb3BpY10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NpdGVDb25maWdzLCBzZXRTaXRlQ29uZmlnc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDguYLguKvguKXguJQgdG9waWMgY29kZXMg4LmB4Lil4LiwIGRlcGFydG1lbnRzIOC4nOC5iOC4suC4mSBoYW5kbGVyXHJcbiAgICBhcGkuZ2V0UGFnZSh7IHBhZ2VOYW1lOiAndG9waWMtY29uZmlnJyB9KVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBzZXRUb3BpY3MoZGF0YS50b3BpY0NvZGVzIHx8IFtdKTtcclxuICAgICAgICBzZXREZXBhcnRtZW50cyhkYXRhLmRlcGFydG1lbnRzIHx8IFtdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gcmVzZXQg4LmA4Lih4Li34LmI4Lit4LmA4Lib4Lil4Li14LmI4Lii4LiZIHRvcGljXHJcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlncyA9IHt9O1xyXG4gICAgU0lURVMuZm9yRWFjaChzaXRlID0+IHtcclxuICAgICAgZGVmYXVsdENvbmZpZ3Nbc2l0ZV0gPSB7XHJcbiAgICAgICAgdHlwZTogJ0FsbCcsXHJcbiAgICAgICAgdGltZV9saW1pdDogNjAsXHJcbiAgICAgICAgZGVwdF9pZHM6IFtdLCAvLyDguYDguInguJ7guLLguLDguIHguKPguJPguLUgUGFydGlhbFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRTaXRlQ29uZmlncyhkZWZhdWx0Q29uZmlncyk7XHJcbiAgfSwgW3NlbGVjdGVkVG9waWNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNpdGUsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2l0ZUNvbmZpZ3MocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBbc2l0ZV06IHtcclxuICAgICAgICAuLi5wcmV2W3NpdGVdLFxyXG4gICAgICAgIFtmaWVsZF06IHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkuY2FsbFBhZ2Uoe1xyXG4gICAgICAgIHBhZ2VOYW1lOiAndG9waWMtY29uZmlnJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0b3BpY19jb2RlOiBzZWxlY3RlZFRvcGljLFxyXG4gICAgICAgICAgY29uZmlnOiBzaXRlQ29uZmlncyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBhbGVydCgnQ29uZmlndXJhdGlvbiBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBzYXZlIGNvbmZpZ3VyYXRpb24uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RGVwYXJ0bWVudHNCeVNpdGUgPSAoc2l0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRlcGFydG1lbnRzLmZpbHRlcihkZXAgPT4gZGVwLnNpdGUgPT09IHNpdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCIgcD1cInhsXCI+XHJcbiAgICAgIDxIMiBtYj1cInhsXCI+Q29uZmlndXJlIFRvcGljIGJ5IFNpdGU8L0gyPlxyXG5cclxuICAgICAgPEJveCBtYj1cInhsXCI+XHJcbiAgICAgICAgPExhYmVsPlNlbGVjdCBUb3BpYyBDb2RlOjwvTGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgb3B0aW9ucz17dG9waWNzLm1hcCgodCkgPT4gKHsgdmFsdWU6IHQsIGxhYmVsOiB0IH0pKX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRvcGljID8geyB2YWx1ZTogc2VsZWN0ZWRUb3BpYywgbGFiZWw6IHNlbGVjdGVkVG9waWMgfSA6IG51bGx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiBzZXRTZWxlY3RlZFRvcGljKHNlbGVjdGVkPy52YWx1ZSB8fCAnJyl9XHJcbiAgICAgICAgICBpc0NsZWFyYWJsZVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAge3NlbGVjdGVkVG9waWMgJiYgU0lURVMubWFwKHNpdGUgPT4gKFxyXG4gICAgICAgIDxCb3gga2V5PXtzaXRlfSB2YXJpYW50PVwid2hpdGVcIiBwPVwieGxcIiBtYj1cInhsXCIgYm9yZGVyPlxyXG4gICAgICAgICAgPEgzIG1iPVwibGdcIj57c2l0ZX08L0gzPlxyXG5cclxuICAgICAgICAgIDxCb3ggbWI9XCJsZ1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VHlwZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogJ0FsbCcsIGxhYmVsOiAnQWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogJ1BhcnRpYWwnLCBsYWJlbDogJ1BhcnRpYWwnIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICB2YWx1ZT17eyB2YWx1ZTogc2l0ZUNvbmZpZ3Nbc2l0ZV0/LnR5cGUsIGxhYmVsOiBzaXRlQ29uZmlnc1tzaXRlXT8udHlwZSB9fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQpID0+IGhhbmRsZUNoYW5nZShzaXRlLCAndHlwZScsIHNlbGVjdGVkLnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHtzaXRlQ29uZmlnc1tzaXRlXT8udHlwZSA9PT0gJ1BhcnRpYWwnICYmIChcclxuICAgICAgICAgICAgPEJveCBtYj1cImxnXCI+XHJcbiAgICAgICAgICAgICAgPExhYmVsPkRlcGFydG1lbnRzOjwvTGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ19fQUxMX18nLCBsYWJlbDogJ/Cfk4wgU2VsZWN0IEFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgLi4uZ2V0RGVwYXJ0bWVudHNCeVNpdGUoc2l0ZSkubWFwKGRlcCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZXAuZGVwdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGVwLmRlcHRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1tcclxuICAgICAgICAgICAgICAgICAgLi4uc2l0ZUNvbmZpZ3Nbc2l0ZV0uZGVwdF9pZHMubWFwKGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXAgPSBkZXBhcnRtZW50cy5maW5kKGQgPT4gZC5kZXB0X2lkID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlcCA/IHsgdmFsdWU6IGRlcC5kZXB0X2lkLCBsYWJlbDogZGVwLmRlcHRfbmFtZSB9IDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZE9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBzZWxlY3RlZE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG9wdCA9PiBvcHQudmFsdWUgIT09ICdfX0FMTF9fJylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgYWxsRGVwSWRzID0gZ2V0RGVwYXJ0bWVudHNCeVNpdGUoc2l0ZSkubWFwKGRlcCA9PiBkZXAuZGVwdF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSBhbGxEZXBJZHMuZXZlcnkoaWQgPT4gc2VsZWN0ZWRJZHMuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRTZWxlY3RBbGwgPSBzZWxlY3RlZE9wdGlvbnMuc29tZShvcHQgPT4gb3B0LnZhbHVlID09PSAnX19BTExfXycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRTZWxlY3RBbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBbGxTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8g4LiW4LmJ4Liy4LmA4Lil4Li34Lit4LiB4LiE4Lij4Lia4LiX4Li44LiB4Lit4Lix4LiZ4LmB4Lil4LmJ4LinIOC5geC4peC4sOC4hOC4peC4tOC4gSBTZWxlY3QgQWxsIOC4reC4teC4gSA9IOC4ouC4geC5gOC4peC4tOC4geC4l+C4seC5ieC4h+C4q+C4oeC4lFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKHNpdGUsICdkZXB0X2lkcycsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8g4LmA4Lil4Li34Lit4LiB4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uoc2l0ZSwgJ2RlcHRfaWRzJywgYWxsRGVwSWRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g4LmA4Lil4Li34Lit4LiB4LmB4Lia4Lia4Lib4LiB4LiV4Li0XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKHNpdGUsICdkZXB0X2lkcycsIHNlbGVjdGVkSWRzKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaW1lIExpbWl0IChtaW51dGVzKTo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2l0ZUNvbmZpZ3Nbc2l0ZV0/LnRpbWVfbGltaXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKHNpdGUsICd0aW1lX2xpbWl0JywgcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgU2F2ZSBDb25maWd1cmF0aW9uXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BpY0NvbmZpZztcclxuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgR3JvdXBlZFF1ZXN0aW9uc1BhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Hcm91cGVkUXVlc3Rpb25zUGFnZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuR3JvdXBlZFF1ZXN0aW9uc1BhZ2UgPSBHcm91cGVkUXVlc3Rpb25zUGFnZVxuaW1wb3J0IERlcGFydG1lbnRNdWx0aVNlbGVjdCBmcm9tICcuLi9jb21wb25lbnRzL0RlcGFydG1lbnRNdWx0aVNlbGVjdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGVwYXJ0bWVudE11bHRpU2VsZWN0ID0gRGVwYXJ0bWVudE11bHRpU2VsZWN0XG5pbXBvcnQgU3dpdGNoVmlld1F1ZXN0aW9uQWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3dpdGNoVmlld1F1ZXN0aW9uQWN0aW9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Td2l0Y2hWaWV3UXVlc3Rpb25BY3Rpb24gPSBTd2l0Y2hWaWV3UXVlc3Rpb25BY3Rpb25cbmltcG9ydCBUb3BpY0NvbmZpZyBmcm9tICcuLi9jb21wb25lbnRzL1RvcGljQ29uZmlnJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Ub3BpY0NvbmZpZyA9IFRvcGljQ29uZmlnIl0sIm5hbWVzIjpbImFwaSIsIkFwaUNsaWVudCIsIkdyb3VwZWRRdWVzdGlvbnNQYWdlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJyZXMiLCJnZXRQYWdlIiwicGFnZU5hbWUiLCJuZXN0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJ3YXJuIiwiZXJyIiwiZXJyb3IiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJ2YXJpYW50IiwiSDIiLCJUYWJsZSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwibWFwIiwidG9waWNfY29kZSIsInRvdGFsIiwia2V5IiwiTGluayIsImhyZWYiLCJkZWZpbmVQcm9wZXJ0eSIsImFycmF5TGlrZVRvQXJyYXkiLCJhcnJheVdpdGhIb2xlcyIsIml0ZXJhYmxlVG9BcnJheUxpbWl0IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVJlc3QiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiX2V4Y2x1ZGVkIiwidXNlQ2FsbGJhY2siLCJfb2JqZWN0U3ByZWFkIiwic2V0UHJvdG90eXBlT2YiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJnZXRQcm90b3R5cGVPZiIsInBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJhcnJheVdpdGhvdXRIb2xlcyIsIml0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwicmVhY3RJc01vZHVsZSIsInJlcXVpcmUkJDAiLCJ1bml0bGVzcyIsImhhc2hTdHJpbmciLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsIkVtb3Rpb24iLCJjc3MiLCJtaW4iLCJNYXRoIiwibWF4Iiwicm91bmQiLCJmbG9vciIsImNyZWF0ZUNvb3JkcyIsInYiLCJ4IiwieSIsInJlY3RUb0NsaWVudFJlY3QiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoYXNXaW5kb3ciLCJ3aW5kb3ciLCJnZXROb2RlTmFtZSIsIm5vZGUiLCJpc05vZGUiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0V2luZG93IiwiX25vZGUkb3duZXJEb2N1bWVudCIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImdldERvY3VtZW50RWxlbWVudCIsIl9yZWYiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInZhbHVlIiwiTm9kZSIsImlzRWxlbWVudCIsIkVsZW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1NoYWRvd1Jvb3QiLCJTaGFkb3dSb290IiwiaXNPdmVyZmxvd0VsZW1lbnQiLCJlbGVtZW50Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRlc3QiLCJpbmNsdWRlcyIsImlzV2ViS2l0IiwiQ1NTIiwic3VwcG9ydHMiLCJpc0xhc3RUcmF2ZXJzYWJsZU5vZGUiLCJnZXRQYXJlbnROb2RlIiwicmVzdWx0IiwiYXNzaWduZWRTbG90IiwicGFyZW50Tm9kZSIsImhvc3QiLCJnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvciIsImJvZHkiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImxpc3QiLCJ0cmF2ZXJzZUlmcmFtZXMiLCJfbm9kZSRvd25lckRvY3VtZW50MiIsInNjcm9sbGFibGVBbmNlc3RvciIsImlzQm9keSIsIndpbiIsImZyYW1lRWxlbWVudCIsImdldEZyYW1lRWxlbWVudCIsImNvbmNhdCIsInZpc3VhbFZpZXdwb3J0IiwicGFyZW50IiwiT2JqZWN0IiwiZ2V0Q3NzRGltZW5zaW9ucyIsInBhcnNlRmxvYXQiLCJoYXNPZmZzZXQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNob3VsZEZhbGxiYWNrIiwiJCIsInVud3JhcEVsZW1lbnQiLCJjb250ZXh0RWxlbWVudCIsImdldFNjYWxlIiwiZG9tRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIk51bWJlciIsImlzRmluaXRlIiwibm9PZmZzZXRzIiwiZ2V0VmlzdWFsT2Zmc2V0cyIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzaG91bGRBZGRWaXN1YWxPZmZzZXRzIiwiaXNGaXhlZCIsImZsb2F0aW5nT2Zmc2V0UGFyZW50IiwiaW5jbHVkZVNjYWxlIiwiaXNGaXhlZFN0cmF0ZWd5Iiwib2Zmc2V0UGFyZW50IiwiY2xpZW50UmVjdCIsInNjYWxlIiwidmlzdWFsT2Zmc2V0cyIsIm9mZnNldFdpbiIsImN1cnJlbnRXaW4iLCJjdXJyZW50SUZyYW1lIiwiaWZyYW1lU2NhbGUiLCJpZnJhbWVSZWN0IiwiY2xpZW50TGVmdCIsInBhZGRpbmdMZWZ0IiwiY2xpZW50VG9wIiwicGFkZGluZ1RvcCIsInJlY3RzQXJlRXF1YWwiLCJhIiwiYiIsIm9ic2VydmVNb3ZlIiwib25Nb3ZlIiwiaW8iLCJ0aW1lb3V0SWQiLCJyb290IiwiY2xlYW51cCIsIl9pbyIsImNsZWFyVGltZW91dCIsImRpc2Nvbm5lY3QiLCJyZWZyZXNoIiwic2tpcCIsInRocmVzaG9sZCIsImVsZW1lbnRSZWN0Rm9yUm9vdE1hcmdpbiIsImluc2V0VG9wIiwiaW5zZXRSaWdodCIsImNsaWVudFdpZHRoIiwiaW5zZXRCb3R0b20iLCJjbGllbnRIZWlnaHQiLCJpbnNldExlZnQiLCJyb290TWFyZ2luIiwib3B0aW9ucyIsImlzRmlyc3RVcGRhdGUiLCJoYW5kbGVPYnNlcnZlIiwiZW50cmllcyIsInJhdGlvIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJzZXRUaW1lb3V0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlIiwib2JzZXJ2ZSIsImF1dG9VcGRhdGUiLCJyZWZlcmVuY2UiLCJmbG9hdGluZyIsInVwZGF0ZSIsImFuY2VzdG9yU2Nyb2xsIiwiYW5jZXN0b3JSZXNpemUiLCJlbGVtZW50UmVzaXplIiwiUmVzaXplT2JzZXJ2ZXIiLCJsYXlvdXRTaGlmdCIsImFuaW1hdGlvbkZyYW1lIiwicmVmZXJlbmNlRWwiLCJhbmNlc3RvcnMiLCJmb3JFYWNoIiwiYW5jZXN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImNsZWFudXBJbyIsInJlb2JzZXJ2ZUZyYW1lIiwicmVzaXplT2JzZXJ2ZXIiLCJmaXJzdEVudHJ5IiwidGFyZ2V0IiwidW5vYnNlcnZlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfcmVzaXplT2JzZXJ2ZXIiLCJmcmFtZUlkIiwicHJldlJlZlJlY3QiLCJmcmFtZUxvb3AiLCJuZXh0UmVmUmVjdCIsIl9yZXNpemVPYnNlcnZlcjIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlTGF5b3V0RWZmZWN0IiwiX29iamVjdFNwcmVhZDIiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVmIiwidXNlTWVtbyIsImNyZWF0ZVBvcnRhbCIsIl9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fIiwiX3JlZjIiLCJGcmFnbWVudCIsIm1lbW9pemVPbmUiLCJjc3MkMiIsIkNvbXBvbmVudCIsIkRlcGFydG1lbnRNdWx0aVNlbGVjdCIsInByb3BzIiwicmVjb3JkIiwib25DaGFuZ2UiLCJwcm9wZXJ0eSIsInNldE9wdGlvbnMiLCJzZWxlY3RlZFZhbHVlcyIsInBhcmFtcyIsIm5hbWUiLCJmZXRjaERlcGFydG1lbnRzIiwiZmV0Y2giLCJqc29uIiwidmFsdWVzIiwicmVjb3JkcyIsInIiLCJsYWJlbCIsInBhcnNlSW50IiwiZGVwdF9pZCIsImhhbmRsZUNoYW5nZSIsInNlbGVjdGVkIiwib3B0aW9uIiwiaGFuZGxlU2VsZWN0QWxsIiwib3B0IiwidHlwZSIsIm9uQ2xpY2siLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsIlNlbGVjdCIsImlzTXVsdGkiLCJmaWx0ZXIiLCJTd2l0Y2hWaWV3UXVlc3Rpb25BY3Rpb24iLCJuYXZpZ2F0ZSIsInVzZU5hdmlnYXRlIiwiaGFuZGxlUmVkaXJlY3QiLCJCdXR0b24iLCJtdCIsIlNJVEVTIiwiVG9waWNDb25maWciLCJ0b3BpY3MiLCJzZXRUb3BpY3MiLCJkZXBhcnRtZW50cyIsInNldERlcGFydG1lbnRzIiwic2VsZWN0ZWRUb3BpYyIsInNldFNlbGVjdGVkVG9waWMiLCJzaXRlQ29uZmlncyIsInNldFNpdGVDb25maWdzIiwidGhlbiIsInRvcGljQ29kZXMiLCJjYXRjaCIsImRlZmF1bHRDb25maWdzIiwic2l0ZSIsInRpbWVfbGltaXQiLCJkZXB0X2lkcyIsImZpZWxkIiwicHJldiIsImhhbmRsZVN1Ym1pdCIsImNhbGxQYWdlIiwibWV0aG9kIiwiY29uZmlnIiwiYWxlcnQiLCJnZXREZXBhcnRtZW50c0J5U2l0ZSIsImRlcCIsInAiLCJtYiIsIkxhYmVsIiwidCIsImlzQ2xlYXJhYmxlIiwiYm9yZGVyIiwiSDMiLCJjbG9zZU1lbnVPblNlbGVjdCIsImRlcHRfbmFtZSIsImlkIiwiZmluZCIsImQiLCJCb29sZWFuIiwic2VsZWN0ZWRPcHRpb25zIiwic2VsZWN0ZWRJZHMiLCJhbGxEZXBJZHMiLCJpc0FsbFNlbGVjdGVkIiwiZXZlcnkiLCJjbGlja2VkU2VsZWN0QWxsIiwic29tZSIsIklucHV0Iiwic2l6ZSIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFJQSxNQUFNQSxLQUFHLEdBQUcsSUFBSUMsaUJBQVMsRUFBRTtFQUUzQixNQUFNQyxvQkFBb0IsR0FBR0EsTUFBTTtJQUNqQyxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdDLGNBQVEsQ0FBQyxFQUFFLENBQUM7RUFFcENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMzQkMsRUFBQUEsZUFBUyxDQUFDLE1BQU07RUFDZCxJQUFBLE1BQU1DLFNBQVMsR0FBRyxZQUFZO1FBQzVCLElBQUk7RUFDRixRQUFBLE1BQU1DLEdBQUcsR0FBRyxNQUFNVixLQUFHLENBQUNXLE9BQU8sQ0FBQztFQUFFQyxVQUFBQSxRQUFRLEVBQUU7RUFBb0IsU0FBQyxD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QUMsQ0FBQyxDQUFDLEdBQUc7RUFDbkQ7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7RUFDdEQsQ0FBQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVc7RUFDMUM7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7RUFDeEMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtFQUM1Qjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUN0QyxDQUFDLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRztFQUNsQzs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtFQUMzQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRztFQUM5Qjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsTUFBTSxFQUFFLEtBQUssRUFBRTtFQUMvQixDQUFDLE9BQU8sS0FBSyxDQUFDO0VBQ2Q7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUU7RUFDL0IsQ0FBQyxPQUFPLEtBQUssQ0FBQztFQUNkOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0VBQ3RDLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0VBQzNCOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0VBQzFDLENBQUMs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QUFHLEdBQUcsR0FBRyxNQUFNO0VBQzdFO0VBQ0EsU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7RUFDL0MsVUFBVSxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxHQUFHLEtBQUssR0FBRyxRQUFRO0VBQzNOLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVSxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUTtFQUNoRztFQUNBOztFQUVBLElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRztFQUM5RixJQUFJO0VBQ0o7RUFDQSxHQUFHLEtBQUssRUFBRTtFQUNWLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxHQUFHO0VBQ2hELEdBQUc7RUFDSCxJQUFJLElBQUksUUFBUSxHQUFHLENBQUM7RUFDcEIsS0FBSyxJQUFJLFNBQVMsSUFBSSxHQUFHO0VBQ3pCLE1BQU0sRUFBRTtFQUNSLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHO0VBQ2xFLE1BQU07O0VBRU4sSUFBSSxRQUFRLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxHQUFHLFFBQVE7RUFDL0Q7RUFDQSxLQUFLLEtBQUssRUFBRTtFQUNaLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUUsRUFBRTtFQUMxRCxNQUFNO0VBQ047RUFDQSxLQUFLLEtBQUssRUFBRTtFQUNaLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxTQUFTLEdBQUc7RUFDMUUsTUFBTTtFQUNOO0VBQ0EsS0FBSyxLQUFLLEVBQUU7RUFDWjtFQUNBLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ3ZCLE9BQU8sVUFBVSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7O0VBRW5DLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTO0VBQ3BHLE1BQU07RUFDTjtFQUNBLEtBQUssS0FBSyxFQUFFO0VBQ1osTUFBTSxJQUFJLFFBQVEsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEQsT0FBTyxRQUFRLEdBQUc7RUFDbEI7RUFDQTs7RUFFQSxDQUFDLE9BQU87RUFDUjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtFQUMzRyxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRztFQUNyQixDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtFQUN0QyxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJOztFQUV2QixDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQztFQUM3QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO0VBQ2xHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDeEUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRzs7RUFFakIsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNO0VBQ3hGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVB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TyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7RUFDNUIsTUFBTSxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDeEI7RUFDQTtFQUNBLENBQUM7O0VBRUQ7O0VBRUEsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtFQUMvQixFQUFFLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7RUFDN0I7RUFDQSxJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxNQUFNLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxLQUFLO0VBQzlDOztFQUVBLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJLENBQUM7O0VBRWQsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJLENBQUM7O0VBRWQsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJLENBQUM7O0VBRWQsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSztFQUNuQzs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUss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QUUsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7RUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO0VBQzlJLElBQUksQ0FBQztFQUNMO0VBQ0EsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDO0VBQzNELElBQUksQ0FBQztFQUNMO0VBQ0EsSUFBSSxDQUFDLEtBQUssRUFBRTtFQUNaLElBQUksQ0FBQztFQUNMO0VBQ0EsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDO0VBQzNEO0VBQ0EsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDO0VBQzNELEdBQUc7OztFQUdILEVBQUUsUUFBUSxHQUFHO0VBQ2IsSUFBSSxLQUFLLENBQUM7RUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFOztFQUUvQyxJQUFJLEtBQUssQ0FBQztFQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FB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LEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxJQUFJO0VBQ1osRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7RUFDSCxFQUFFLElBQUksRUFBRSxHQUFHO0VBQ1gsRUFBRSxPQUFPLEVBQUU7RUFDWCxDQUFD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QUMsU0FBUztFQUFDaVQsSUFBQUEsSUFBSSxFQUFDLElBQUk7RUFBQzNELElBQUFBLE9BQU8sRUFBRStCO0tBQWMsRUFBQSxvQkFFbkQsQ0FDTCxDQUFDO0VBR1YsQ0FBQzs7RUMzS0Q2QixPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFO0VBRTNCRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ3ZVLG9CQUFvQixHQUFHQSxvQkFBb0I7RUFFbEVzVSxPQUFPLENBQUNDLGNBQWMsQ0FBQ3JGLHFCQUFxQixHQUFHQSxxQkFBcUI7RUFFcEVvRixPQUFPLENBQUNDLGNBQWMsQ0FBQ3ZELHdCQUF3QixHQUFHQSx3QkFBd0I7RUFFMUVzRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ2hELFdBQVcsR0FBR0EsV0FBVzs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Nl19
