import { y as notARegexp, z as correctIsRegexpLogic, A as createHtml, B as stringHtmlForced, C as loadCSS$1, D as loadJS$1, S as SvelteComponent, i as init$1, s as safe_not_equal, E as svg_element, b as claim_element, g as children$1, d as detach, k as attr, m as insert, F as noop$2, u as onMount, G as onDestroy, v as binding_callbacks } from './client.d6d41c36.js';
import { b as aFunction, U as isObject$1, _ as _export, h as arrayMethodIsStrict, m as arrayIteration, r as requireObjectCoercible, K as addToUnscopables, V as arrayIncludes, F as toIndexedObject, f as toLength, W as toInteger, g as global, X as classofRaw, u as objectCreate, Y as isForced_1, v as descriptors, Z as has, $ as redefine, a0 as objectGetOwnPropertyNames, o as objectGetOwnPropertyDescriptor, C as objectDefineProperty, I as fails, a1 as inheritIfRequired, a2 as toPrimitive, a3 as stringTrim, p as internalMetadata, a4 as freezing, S as _createForOfIteratorHelper, a as _typeof, a5 as _defineProperty, a6 as stringRepeat, L as _createClass$1, R as _asyncToGenerator, M as _classCallCheck, N as _toConsumableArray, T as _slicedToArray, a7 as whitespaces, c as createCommonjsModule, a8 as commonjsGlobal } from './web.url.4d8a464f.js';

var slice$1 = [].slice;
var factories = {};

var construct = function construct(C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) {
      list[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


var functionBind = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = slice$1.call(arguments, 1);

  var boundFunction = function bound()
  /* args... */
  {
    var args = partArgs.concat(slice$1.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };

  if (isObject$1(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

// https://tc39.es/ecma262/#sec-function.prototype.bind

_export({
  target: 'Function',
  proto: true
}, {
  bind: functionBind
});

var $every = arrayIteration.every;
var STRICT_METHOD$1 = arrayMethodIsStrict('every'); // `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every

_export({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD$1
}, {
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-string.prototype.includes


_export({
  target: 'String',
  proto: true,
  forced: !correctIsRegexpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $includes = arrayIncludes.includes; // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes

_export({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

// https://tc39.es/ecma262/#sec-array.prototype.lastindexof

_export({
  target: 'Array',
  proto: true,
  forced: arrayLastIndexOf !== [].lastIndexOf
}, {
  lastIndexOf: arrayLastIndexOf
});

var min$2 = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED$2 = NEGATIVE_ZERO || !STRICT_METHOD; // `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof

var arrayLastIndexOf = FORCED$2 ? function lastIndexOf(searchElement
/* , fromIndex = @[*-1] */
) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min$2(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;

  for (; index >= 0; index--) {
    if (index in O && O[index] === searchElement) return index || 0;
  }

  return -1;
} : nativeLastIndexOf;

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var defineProperty = objectDefineProperty.f;
var trim$1 = stringTrim.trim;
var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber

var toNumber$1 = function toNumber(argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;

  if (typeof it == 'string' && it.length > 2) {
    it = trim$1(it);
    first = it.charCodeAt(0);

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal of /^0o[0-7]+$/i

        default:
          return +it;
      }

      digits = it.slice(2);
      length = digits.length;

      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
}; // `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor


if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
    && (BROKEN_CLASSOF ? fails(function () {
      NumberPrototype.valueOf.call(dummy);
    }) : classofRaw(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber$1(it)), dummy, NumberWrapper) : toNumber$1(it);
  };

  for (var keys = descriptors ? getOwnPropertyNames(NativeNumber) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' + // ESNext
  'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor$1(NativeNumber, key));
    }
  }

  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}

var onFreeze = internalMetadata.onFreeze;
var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () {
  nativeFreeze(1);
}); // `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES,
  sham: !freezing
}, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject$1(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});

function max(values, valueof) {
  var max;

  if (valueof === undefined) {
    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null && (max < value || max === undefined && value >= value)) {
          max = value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null && (max < _value || max === undefined && _value >= _value)) {
          max = _value;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return max;
}

function min$1(values, valueof) {
  var min;

  if (valueof === undefined) {
    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null && (min > value || min === undefined && value >= value)) {
          min = value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null && (min > _value || min === undefined && _value >= _value)) {
          min = _value;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return min;
}

function minIndex(values, valueof) {
  var min;
  var minIndex = -1;
  var index = -1;

  if (valueof === undefined) {
    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        ++index;

        if (value != null && (min > value || min === undefined && value >= value)) {
          min = value, minIndex = index;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null && (min > _value || min === undefined && _value >= _value)) {
          min = _value, minIndex = index;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return minIndex;
}

var noop$1 = {
  value: function value() {}
};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }

  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name: name
    };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      }

      return;
    } // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.


    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set$1(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;

    for (var t in _) {
      copy[t] = _[t].slice();
    }

    return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }

  if (callback != null) type.push({
    name: name,
    value: callback
  });
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {
    space: namespaces[prefix],
    local: name
  } : name; // eslint-disable-line no-prototype-builtins
}

function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator (name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

function none() {}

function selector (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
}

function selection_select (select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

function array$1 (x) {
  return _typeof(x) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
}

function empty() {
  return [];
}

function selectorAll (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
}

function arrayAll(select) {
  return function () {
    var group = select.apply(this, arguments);
    return group == null ? [] : array$1(group);
  };
}

function selection_selectAll (select) {
  if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection$1(subgroups, parents);
}

function matcher (selector) {
  return function () {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function (node) {
    return node.matches(selector);
  };
}

var find = Array.prototype.find;

function childFind(match) {
  return function () {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild (match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function () {
    return filter.call(this.children, match);
  };
}

function selection_selectChildren (match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

function selection_filter (match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

function sparse (update) {
  return new Array(update.length);
}

function selection_enter () {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

function constant$3 (x) {
  return function () {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length; // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.

  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  } // Put any non-null nodes that don’t fit into exit.


  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue; // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.

  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";

      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  } // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.


  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";

    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue["delete"](keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  } // Add any remaining nodes that were not bound to data to exit.


  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data (value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
  if (typeof value !== "function") value = constant$3(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = array$1(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.

    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;

        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
        }

        previous._next = next || null;
      }
    }
  }

  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit () {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join (onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge (selection) {
  if (!(selection instanceof Selection$1)) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection$1(merges, this._parents);
}

function selection_order () {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort (compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }

    sortgroup.sort(compareNode);
  }

  return new Selection$1(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes () {
  return Array.from(this);
}

function selection_node () {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size () {
  var size = 0;

  var _iterator = _createForOfIteratorHelper(this),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      ++size;
    } // eslint-disable-line no-unused-vars

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return size;
}

function selection_empty () {
  return !this.node();
}

function selection_each (callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove$1(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS$1(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction$1(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS$1(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr (name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}

function defaultView (node) {
  return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
  node.document && node // node is a Window
  || node.defaultView; // node is a Document
}

function styleRemove$1(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction$1(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

function selection_style (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

function selection_property (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function add(name) {
    var i = this._names.indexOf(name);

    if (i < 0) {
      this._names.push(name);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);

    if (i >= 0) {
      this._names.splice(i, 1);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.remove(names[i]);
  }
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;

    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }

    return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant$1(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise () {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower () {
  return this.each(lower);
}

function selection_append (name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert (name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove () {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum (value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

function contextListener(listener) {
  return function (event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {
      type: t,
      name: name
    };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;

    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }

    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function () {
    var on = this.__on,
        o,
        listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {
      type: typename.type,
      name: typename.name,
      value: value,
      listener: listener,
      options: options
    };
    if (!on) this.__on = [o];else on.push(o);
  };
}

function selection_on (typename, value, options) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;

    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;

  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, options));
  }

  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_callee);

function _callee() {
  var groups, j, m, group, i, n, node;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          groups = this._groups, j = 0, m = groups.length;

        case 1:
          if (!(j < m)) {
            _context.next = 13;
            break;
          }

          group = groups[j], i = 0, n = group.length;

        case 3:
          if (!(i < n)) {
            _context.next = 10;
            break;
          }

          if (!(node = group[i])) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return node;

        case 7:
          ++i;
          _context.next = 3;
          break;

        case 10:
          ++j;
          _context.next = 1;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var root$1 = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection$1([[document.documentElement]], root$1);
}

function selection_selection() {
  return this;
}

Selection$1.prototype = selection.prototype = _defineProperty({
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
}, Symbol.iterator, _callee);

function select (selector) {
  return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root$1);
}

function sourceEvent (event) {
  var sourceEvent;

  while (sourceEvent = event.sourceEvent) {
    event = sourceEvent;
  }

  return event;
}

function pointer (event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;

  if (node) {
    var svg = node.ownerSVGElement || node;

    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }

    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }

  return [event.pageX, event.pageY];
}

function nopropagation$1(event) {
  event.stopImmediatePropagation();
}
function noevent$1 (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function dragDisable (view) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent$1, true);

  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent$1, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);

  if (noclick) {
    selection.on("click.drag", noevent$1, true);
    setTimeout(function () {
      selection.on("click.drag", null);
    }, 0);
  }

  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

function define (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);

  for (var key in definition) {
    prototype[key] = definition[key];
  }

  return prototype;
}

function Color() {}
var _darker = 0.7;

var _brighter = 1 / _darker;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};
define(Color, color, {
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
  : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
  : null // invalid hex
  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;

  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }

  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
/* From FvD 13.37, CSS Color Module Level 3 */

function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis$1 (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function basisClosed (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

var constant$2 = (function (x) {
  return function () {
    return x;
  };
});

function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$2(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$2(isNaN(a) ? b : a);
}

var interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;
  return rgb$1;
})(1);

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;

    for (i = 0; i < n; ++i) {
      color = rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }

    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);
var rgbBasisClosed = rgbSpline(basisClosed);

function interpolateNumber (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

function interpolateString (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators
  // Coerce inputs to strings.

  a = a + "", b = b + ""; // Interpolate pairs of numbers in a & b.

  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({
        i: i,
        x: interpolateNumber(am, bm)
      });
    }

    bi = reB.lastIndex;
  } // Add remains of b.


  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  } // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.


  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }

    return s.join("");
  });
}

var degrees = 180 / Math.PI;
var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;
/* eslint-disable no-undef */

function parseCss(value) {
  var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: interpolateNumber(xa, xb)
      }, {
        i: i - 2,
        x: interpolateNumber(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path

      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: interpolateNumber(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: interpolateNumber(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: interpolateNumber(xa, xb)
      }, {
        i: i - 2,
        x: interpolateNumber(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators

    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc

    return function (t) {
      var i = -1,
          n = q.length,
          o;

      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }

      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

var interpolateZoom = (function zoomRho(rho, rho2, rho4) {
  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0],
        uy0 = p0[1],
        w0 = p0[2],
        ux1 = p1[0],
        uy1 = p1[1],
        w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S; // Special case for u0 ≅ u1.

    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;

      i = function i(t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
      };
    } // General case.
    else {
        var d1 = Math.sqrt(d2),
            b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
            b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
            r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
            r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;

        i = function i(t) {
          var s = t * S,
              coshr0 = cosh(r0),
              u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
        };
      }

    i.duration = S * 1000 * rho / Math.SQRT2;
    return i;
  }

  zoom.rho = function (_) {
    var _1 = Math.max(1e-3, +_),
        _2 = _1 * _1,
        _4 = _2 * _2;

    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4);

var frame = 0,
    // is an animation frame pending?
timeout$1 = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};
function now$1() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now$1() : +time) + (delay == null ? 0 : +delay);

    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }

    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now$1(); // Get the current time, if not already set.

  ++frame; // Pretend we’ve set an alarm, if we haven’t already.

  var t = taskHead,
      e;

  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }

  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;

  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;

  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }

  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.

  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.

  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout (callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index,
    // For context during callback.
    group: group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween; // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!

  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time); // If the elapsed delay is less than our first sleep, start immediately.

    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o; // If the state is not SCHEDULED, then we previously errored on start.

    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue; // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!

      if (o.state === STARTED) return timeout(start); // Interrupt the active transition, if any.

      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } // Cancel any pre-empted transitions.
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
    } // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.


    timeout(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    }); // Dispatch the start event.
    // Note this must be done before the tween are initialized.

    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted

    self.state = STARTED; // Initialize the tween, deleting null tween.

    tween = new Array(n = self.tween.length);

    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }

    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    } // Dispatch the end event.


    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];

    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars


    delete node.__transition;
  }
}

function interrupt (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;
  if (!schedules) return;
  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;
      continue;
    }

    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt (name) {
  return this.each(function () {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = set(this, id),
        tween = schedule.tween; // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.

    if (tween !== tween0) {
      tween1 = tween0 = tween;

      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = set(this, id),
        tween = schedule.tween; // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.

    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();

      for (var t = {
        name: name,
        value: value
      }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }

      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween (name, value) {
  var id = this._id;
  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;

    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }

    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
  var id = transition._id;
  transition.each(function () {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function (node) {
    return get(node, id).value[name];
  };
}

function interpolate (a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr (name, value) {
  var fullname = namespace(name),
      i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function (t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function (t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function transition_attrTween (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function () {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    init(this, id).delay = value;
  };
}

function transition_delay (value) {
  var id = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function () {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    set(this, id).duration = value;
  };
}

function transition_duration (value) {
  var id = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    set(this, id).ease = value;
  };
}

function transition_ease (value) {
  var id = this._id;
  return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
}

function easeVarying(id, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set(this, id).ease = v;
  };
}

function transition_easeVarying (value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

function transition_filter (match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? init : set;
  return function () {
    var schedule = sit(this, id),
        on = schedule.on; // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.

    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}

function transition_on (name, listener) {
  var id = this._id;
  return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function () {
    var parent = this.parentNode;

    for (var i in this.__transition) {
      if (+i !== id) return;
    }

    if (parent) parent.removeChild(this);
  };
}

function transition_remove () {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select (select) {
  var name = this._name,
      id = this._id;
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll (select) {
  var name = this._name,
      id = this._id;
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }

        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection = selection.prototype.constructor;
function transition_selection () {
  return new Selection(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
  return function () {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined; // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.

    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}

function transition_style (name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function (t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }

  tween._value = value;
  return tween;
}

function transition_styleTween (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text (value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}

function textInterpolate(i) {
  return function (t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function transition_textTween (value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

function transition_transition () {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end () {
  var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
  return new Promise(function (resolve, reject) {
    var cancel = {
      value: reject
    },
        end = {
      value: function value() {
        if (--size === 0) resolve();
      }
    };
    that.each(function () {
      var schedule = set(this, id),
          on = schedule.on; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.

      if (on !== on0) {
        on1 = (on0 = on).copy();

        on1._.cancel.push(cancel);

        on1._.interrupt.push(cancel);

        on1._.end.push(end);
      }

      schedule.on = on1;
    }); // The selection was empty, resolve end immediately

    if (size === 0) resolve();
  });
}

var id = 0;
function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}
function transition(name) {
  return selection().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = transition.prototype = _defineProperty({
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end
}, Symbol.iterator, selection_prototype[Symbol.iterator]);

function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  return --t * t * t + 1;
}
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;

  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error("transition ".concat(id, " not found"));
    }
  }

  return timing;
}

function selection_transition (name) {
  var id, timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now$1(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath

  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function moveTo(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function lineTo(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x1,y1).

    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ; // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        } // Otherwise, draw an arc!
        else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21; // If the start tangent is not coincident with (x0,y0), line to.

            if (Math.abs(t01 - 1) > epsilon) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }

            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
  },
  arc: function arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x0,y0).

    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      } // Is this arc empty? We’re done.


    if (!r) return; // Does the angle go the wrong way? Flip the direction.

    if (da < 0) da = da % tau + tau; // Is this a complete circle? Draw two arcs to complete the circle.

    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
  },
  rect: function rect(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function toString() {
    return this._;
  }
};

var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt; // Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546

var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot

_export({
  target: 'Math',
  stat: true,
  forced: BUGGY
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  hypot: function hypot(value1, value2) {
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * sqrt(sum);
  }
});

// https://tc39.es/ecma262/#sec-thisnumbervalue

var thisNumberValue = function thisNumberValue(value) {
  if (typeof value != 'number' && classofRaw(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }

  return +value;
};

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function log(x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

var multiply = function multiply(data, n, c) {
  var index = -1;
  var c2 = c;

  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function divide(data, n) {
  var index = 6;
  var c = 0;

  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = c % n * 1e7;
  }
};

var dataToString = function dataToString(data) {
  var index = 6;
  var s = '';

  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
    }
  }

  return s;
};

var FORCED$1 = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
}); // `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed

_export({
  target: 'Number',
  proto: true,
  forced: FORCED$1
}, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;
    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);

    if (number < 0) {
      sign = '-';
      number = -number;
    }

    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;

        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }

        multiply(data, pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }

        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + stringRepeat.call('0', fractDigits);
      }
    }

    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits ? '0.' + stringRepeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    }

    return result;
  }
});

function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;

    case 1:
      this.range(domain);
      break;

    default:
      this.range(range).domain(domain);
      break;
  }

  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;

    case 1:
      {
        if (typeof domain === "function") this.interpolator(domain);else this.range(domain);
        break;
      }

    default:
      {
        this.domain(domain);
        if (typeof interpolator === "function") this.interpolator(interpolator);else this.range(interpolator);
        break;
      }
  }

  return this;
}

var implicit = Symbol("implicit");
function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "",
        i = index.get(key);

    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }

    return range[(i - 1) % range.length];
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();

    var _iterator = _createForOfIteratorHelper(_),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        var key = value + "";
        if (index.has(key)) continue;
        index.set(key, domain.push(value));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return scale;
  };

  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);
  return scale;
}

function colors (specifier) {
  var n = specifier.length / 6 | 0,
      colors = new Array(n),
      i = 0;

  while (i < n) {
    colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  }

  return colors;
}

var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

function constant$1 (x) {
  return function constant() {
    return x;
  };
}

var slice = Array.prototype.slice;
function array (x) {
  return _typeof(x) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
}

function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

function pointRadial (x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x$1 = x,
      y$1 = y,
      context = null;

  function link() {
    var buffer,
        argv = slice.call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv);
    if (!context) context = buffer = path();
    curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function (_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function (_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function (_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$1(+_), link) : x$1;
  };

  link.y = function (_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$1(+_), link) : y$1;
  };

  link.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = pointRadial(x0, y0),
      p1 = pointRadial(x0, y0 = (y0 + y1) / 2),
      p2 = pointRadial(x1, y0),
      p3 = pointRadial(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}
function linkVertical() {
  return link(curveVertical);
}
function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

var constant = (function (x) {
  return function () {
    return x;
  };
});

function ZoomEvent(type, _ref) {
  var sourceEvent = _ref.sourceEvent,
      target = _ref.target,
      transform = _ref.transform,
      dispatch = _ref.dispatch;
  Object.defineProperties(this, {
    type: {
      value: type,
      enumerable: true,
      configurable: true
    },
    sourceEvent: {
      value: sourceEvent,
      enumerable: true,
      configurable: true
    },
    target: {
      value: target,
      enumerable: true,
      configurable: true
    },
    transform: {
      value: transform,
      enumerable: true,
      configurable: true
    },
    _: {
      value: dispatch
    }
  });
}

function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function scale(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function translate(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function apply(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function applyX(x) {
    return x * this.k + this.x;
  },
  applyY: function applyY(y) {
    return y * this.k + this.y;
  },
  invert: function invert(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function invertX(x) {
    return (x - this.x) / this.k;
  },
  invertY: function invertY(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function rescaleX(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function rescaleY(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function toString() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) {
    if (!(node = node.parentNode)) return identity;
  }

  return node.__zoom;
}

function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event

function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;

  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;

    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }

    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }

  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}

function zoom () {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function (collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);

    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function () {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };

  zoom.scaleBy = function (selection, k, p, event) {
    zoom.scaleTo(selection, function () {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function (selection, k, p, event) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function (selection, x, y, event) {
    zoom.transform(selection, function () {
      return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function (selection, x, y, p, event) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k,
        y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition.on("start.zoom", function () {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function () {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function () {
      var that = this,
          args = arguments,
          g = gesture(that, args).event(event),
          e = extent.apply(that, args),
          p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
          w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
          a = that.__zoom,
          b = typeof transform === "function" ? transform.apply(that, args) : transform,
          i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function (t) {
        if (t === 1) t = b; // Avoid rounding error on end.
        else {
            var l = i(t),
                k = w / l[2];
            t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
        g.zoom(null, t);
      };
    });
  }

  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function event(_event) {
      if (_event) this.sourceEvent = _event;
      return this;
    },
    start: function start() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }

      return this;
    },
    zoom: function zoom(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function end() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }

      return this;
    },
    emit: function emit(type) {
      var d = select(this.that).datum();
      listeners.call(type, this.that, new ZoomEvent(type, {
        sourceEvent: this.sourceEvent,
        target: zoom,
        type: type,
        transform: this.that.__zoom,
        dispatch: listeners
      }), d);
    }
  };

  function wheeled(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event); // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.

    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }

      clearTimeout(g.wheel);
    } // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return; // Otherwise, capture the mouse point and location at the start.
      else {
          g.mouse = [p, t.invert(p)];
          interrupt(this);
          g.start();
        }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        currentTarget = event.currentTarget,
        x0 = event.clientX,
        y0 = event.clientY;
    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);

      if (!g.moved) {
        var dx = event.clientX - x0,
            dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }

      g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started,
        i,
        t,
        p;
    nopropagation(event);

    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function () {
        touchstarting = null;
      }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event) {
    if (!this.__zooming) return;

    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length,
        i,
        t,
        p,
        l;
    noevent(event);

    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }

    t = g.that.__zoom;

    if (g.touch1) {
      var p0 = g.touch0[0],
          l0 = g.touch0[1],
          p1 = g.touch1[0],
          l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event) {
    for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      args[_key6 - 1] = arguments[_key6];
    }

    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length,
        i,
        t;
    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, touchDelay);

    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }

    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);else {
      g.end(); // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.

      if (g.taps === 2) {
        t = pointer(t, this);

        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function (_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function (_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function (_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function (_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function (_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function (_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function (_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function (_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;else while (--i >= 0) {
    sum += children[i].value;
  }
  node.value = sum;
}

function node_count() {
  return this.eachAfter(count);
}

function node_each(callback) {
  var node = this,
      current,
      next = [node],
      children,
      i,
      n;

  do {
    current = next.reverse(), next = [];

    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);

  return this;
}

function node_eachBefore(callback) {
  var node = this,
      nodes = [node],
      children,
      i;

  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }

  return this;
}

function node_eachAfter(callback) {
  var node = this,
      nodes = [node],
      next = [],
      children,
      i,
      n;

  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }

  while (node = next.pop()) {
    callback(node);
  }

  return this;
}

function node_sum(value) {
  return this.eachAfter(function (node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;

    while (--i >= 0) {
      sum += children[i].value;
    }

    node.value = sum;
  });
}

function node_sort(compare) {
  return this.eachBefore(function (node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

function node_path(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];

  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }

  var k = nodes.length;

  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }

  return nodes;
}

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();

  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }

  return c;
}

function node_ancestors() {
  var node = this,
      nodes = [node];

  while (node = node.parent) {
    nodes.push(node);
  }

  return nodes;
}

function node_descendants() {
  var nodes = [];
  this.each(function (node) {
    nodes.push(node);
  });
  return nodes;
}

function node_leaves() {
  var leaves = [];
  this.eachBefore(function (node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

function node_links() {
  var root = this,
      links = [];
  root.each(function (node) {
    if (node !== root) {
      // Don’t include the root’s parent, if any.
      links.push({
        source: node.parent,
        target: node
      });
    }
  });
  return links;
}

function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;
  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;

    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);

      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;

  do {
    node.height = height;
  } while ((node = node.parent) && node.height < ++height);
}

function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: node_count,
  each: node_each,
  eachAfter: node_eachAfter,
  eachBefore: node_eachBefore,
  sum: node_sum,
  sort: node_sort,
  path: node_path,
  ancestors: node_ancestors,
  descendants: node_descendants,
  leaves: node_leaves,
  links: node_links,
  copy: node_copy
};
var version = "2.1.1";
var defaults = Object.freeze({
  children: function children(data) {
    return data.children;
  },
  nodeSize: function nodeSize(node) {
    return node.data.size;
  },
  spacing: 0
}); // Create a layout function with customizable options. Per D3-style, the
// options can be set at any time using setter methods. The layout function
// will compute the tree node positions based on the options in effect at the
// time it is called.

function flextree(options) {
  var opts = Object.assign({}, defaults, options);

  function accessor(name) {
    var opt = opts[name];
    return typeof opt === 'function' ? opt : function () {
      return opt;
    };
  }

  function layout(tree) {
    var wtree = wrap(getWrapper(), tree, function (node) {
      return node.children;
    });
    wtree.update();
    return wtree.data;
  }

  function getFlexNode() {
    var nodeSize = accessor('nodeSize');

    var _spacing = accessor('spacing');

    return /*#__PURE__*/function (_hierarchy$prototype$) {
      _inheritsLoose(FlexNode, _hierarchy$prototype$);

      function FlexNode(data) {
        return _hierarchy$prototype$.call(this, data) || this;
      }

      var _proto = FlexNode.prototype;

      _proto.copy = function copy() {
        var c = wrap(this.constructor, this, function (node) {
          return node.children;
        });
        c.each(function (node) {
          return node.data = node.data.data;
        });
        return c;
      };

      _proto.spacing = function spacing(oNode) {
        return _spacing(this, oNode);
      };

      FlexNode.maxExtents = function maxExtents(e0, e1) {
        return {
          top: Math.min(e0.top, e1.top),
          bottom: Math.max(e0.bottom, e1.bottom),
          left: Math.min(e0.left, e1.left),
          right: Math.max(e0.right, e1.right)
        };
      };

      _createClass(FlexNode, [{
        key: "size",
        get: function get() {
          return nodeSize(this);
        }
      }, {
        key: "nodes",
        get: function get() {
          return this.descendants();
        }
      }, {
        key: "xSize",
        get: function get() {
          return this.size[0];
        }
      }, {
        key: "ySize",
        get: function get() {
          return this.size[1];
        }
      }, {
        key: "top",
        get: function get() {
          return this.y;
        }
      }, {
        key: "bottom",
        get: function get() {
          return this.y + this.ySize;
        }
      }, {
        key: "left",
        get: function get() {
          return this.x - this.xSize / 2;
        }
      }, {
        key: "right",
        get: function get() {
          return this.x + this.xSize / 2;
        }
      }, {
        key: "root",
        get: function get() {
          var ancs = this.ancestors();
          return ancs[ancs.length - 1];
        }
      }, {
        key: "numChildren",
        get: function get() {
          return this.hasChildren ? this.children.length : 0;
        }
      }, {
        key: "hasChildren",
        get: function get() {
          return !this.noChildren;
        }
      }, {
        key: "noChildren",
        get: function get() {
          return this.children === null;
        }
      }, {
        key: "firstChild",
        get: function get() {
          return this.hasChildren ? this.children[0] : null;
        }
      }, {
        key: "lastChild",
        get: function get() {
          return this.hasChildren ? this.children[this.numChildren - 1] : null;
        }
      }, {
        key: "extents",
        get: function get() {
          return (this.children || []).reduce(function (acc, kid) {
            return FlexNode.maxExtents(acc, kid.extents);
          }, this.nodeExtents);
        }
      }, {
        key: "nodeExtents",
        get: function get() {
          return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right
          };
        }
      }]);

      return FlexNode;
    }(hierarchy.prototype.constructor);
  }

  function getWrapper() {
    var FlexNode = getFlexNode();
    var nodeSize = accessor('nodeSize');

    var _spacing2 = accessor('spacing');

    return /*#__PURE__*/function (_FlexNode) {
      _inheritsLoose(_class, _FlexNode);

      function _class(data) {
        var _this;

        _this = _FlexNode.call(this, data) || this;
        Object.assign(_assertThisInitialized(_this), {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: _assertThisInitialized(_this),
          lExtRelX: 0,
          lThr: null,
          rExt: _assertThisInitialized(_this),
          rExtRelX: 0,
          rThr: null
        });
        return _this;
      }

      var _proto2 = _class.prototype;

      _proto2.spacing = function spacing(oNode) {
        return _spacing2(this.data, oNode.data);
      };

      _proto2.update = function update() {
        layoutChildren(this);
        resolveX(this);
        return this;
      };

      _createClass(_class, [{
        key: "size",
        get: function get() {
          return nodeSize(this.data);
        }
      }, {
        key: "x",
        get: function get() {
          return this.data.x;
        },
        set: function set(v) {
          this.data.x = v;
        }
      }, {
        key: "y",
        get: function get() {
          return this.data.y;
        },
        set: function set(v) {
          this.data.y = v;
        }
      }]);

      return _class;
    }(FlexNode);
  }

  function wrap(FlexClass, treeData, children) {
    var _wrap = function _wrap(data, parent) {
      var node = new FlexClass(data);
      Object.assign(node, {
        parent: parent,
        depth: parent === null ? 0 : parent.depth + 1,
        height: 0,
        length: 1
      });
      var kidsData = children(data) || [];
      node.children = kidsData.length === 0 ? null : kidsData.map(function (kd) {
        return _wrap(kd, node);
      });

      if (node.children) {
        Object.assign(node, node.children.reduce(function (hl, kid) {
          return {
            height: Math.max(hl.height, kid.height + 1),
            length: hl.length + kid.length
          };
        }, node));
      }

      return node;
    };

    return _wrap(treeData, null);
  }

  Object.assign(layout, {
    nodeSize: function nodeSize(arg) {
      return arguments.length ? (opts.nodeSize = arg, layout) : opts.nodeSize;
    },
    spacing: function spacing(arg) {
      return arguments.length ? (opts.spacing = arg, layout) : opts.spacing;
    },
    children: function children(arg) {
      return arguments.length ? (opts.children = arg, layout) : opts.children;
    },
    hierarchy: function hierarchy(treeData, children) {
      var kids = typeof children === 'undefined' ? opts.children : children;
      return wrap(getFlexNode(), treeData, kids);
    },
    dump: function dump(tree) {
      var nodeSize = accessor('nodeSize');

      var _dump = function _dump(i0) {
        return function (node) {
          var i1 = i0 + '  ';
          var i2 = i0 + '    ';
          var x = node.x,
              y = node.y;
          var size = nodeSize(node);
          var kids = node.children || [];
          var kdumps = kids.length === 0 ? ' ' : "," + i1 + "children: [" + i2 + kids.map(_dump(i2)).join(i2) + i1 + "]," + i0;
          return "{ size: [" + size.join(', ') + "]," + i1 + "x: " + x + ", y: " + y + kdumps + "},";
        };
      };

      return _dump('\n')(tree);
    }
  });
  return layout;
}

flextree.version = version;

var layoutChildren = function layoutChildren(w, y) {
  if (y === void 0) {
    y = 0;
  }

  w.y = y;
  (w.children || []).reduce(function (acc, kid) {
    var i = acc[0],
        lastLows = acc[1];
    layoutChildren(kid, w.y + w.ySize); // The lowest vertical coordinate while extreme nodes still point
    // in current subtree.

    var lowY = (i === 0 ? kid.lExt : kid.rExt).bottom;
    if (i !== 0) separate(w, i, lastLows);
    var lows = updateLows(lowY, i, lastLows);
    return [i + 1, lows];
  }, [0, null]);
  shiftChange(w);
  positionRoot(w);
  return w;
}; // Resolves the relative coordinate properties - relX and prelim --
// to set the final, absolute x coordinate for each node. This also sets
// `prelim` to 0, so that `relX` for each node is its x-coordinate relative
// to its parent.


var resolveX = function resolveX(w, prevSum, parentX) {
  // A call to resolveX without arguments is assumed to be for the root of
  // the tree. This will set the root's x-coord to zero.
  if (typeof prevSum === 'undefined') {
    prevSum = -w.relX - w.prelim;
    parentX = 0;
  }

  var sum = prevSum + w.relX;
  w.relX = sum + w.prelim - parentX;
  w.prelim = 0;
  w.x = parentX + w.relX;
  (w.children || []).forEach(function (k) {
    return resolveX(k, sum, w.x);
  });
  return w;
}; // Process shift and change for all children, to add intermediate spacing to
// each child's modifier.


var shiftChange = function shiftChange(w) {
  (w.children || []).reduce(function (acc, child) {
    var lastShiftSum = acc[0],
        lastChangeSum = acc[1];
    var shiftSum = lastShiftSum + child.shift;
    var changeSum = lastChangeSum + shiftSum + child.change;
    child.relX += changeSum;
    return [shiftSum, changeSum];
  }, [0, 0]);
}; // Separates the latest child from its previous sibling

/* eslint-disable complexity */


var separate = function separate(w, i, lows) {
  var lSib = w.children[i - 1];
  var curSubtree = w.children[i];
  var rContour = lSib;
  var rSumMods = lSib.relX;
  var lContour = curSubtree;
  var lSumMods = curSubtree.relX;
  var isFirst = true;

  while (rContour && lContour) {
    if (rContour.bottom > lows.lowY) lows = lows.next; // How far to the left of the right side of rContour is the left side
    // of lContour? First compute the center-to-center distance, then add
    // the "spacing"

    var dist = rSumMods + rContour.prelim - (lSumMods + lContour.prelim) + rContour.xSize / 2 + lContour.xSize / 2 + rContour.spacing(lContour);

    if (dist > 0 || dist < 0 && isFirst) {
      lSumMods += dist; // Move subtree by changing relX.

      moveSubtree(curSubtree, dist);
      distributeExtra(w, i, lows.index, dist);
    }

    isFirst = false; // Advance highest node(s) and sum(s) of modifiers

    var rightBottom = rContour.bottom;
    var leftBottom = lContour.bottom;

    if (rightBottom <= leftBottom) {
      rContour = nextRContour(rContour);
      if (rContour) rSumMods += rContour.relX;
    }

    if (rightBottom >= leftBottom) {
      lContour = nextLContour(lContour);
      if (lContour) lSumMods += lContour.relX;
    }
  } // Set threads and update extreme nodes. In the first case, the
  // current subtree is taller than the left siblings.


  if (!rContour && lContour) setLThr(w, i, lContour, lSumMods); // In the next case, the left siblings are taller than the current subtree
  else if (rContour && !lContour) setRThr(w, i, rContour, rSumMods);
};
/* eslint-enable complexity */
// Move subtree by changing relX.


var moveSubtree = function moveSubtree(subtree, distance) {
  subtree.relX += distance;
  subtree.lExtRelX += distance;
  subtree.rExtRelX += distance;
};

var distributeExtra = function distributeExtra(w, curSubtreeI, leftSibI, dist) {
  var curSubtree = w.children[curSubtreeI];
  var n = curSubtreeI - leftSibI; // Are there intermediate children?

  if (n > 1) {
    var delta = dist / n;
    w.children[leftSibI + 1].shift += delta;
    curSubtree.shift -= delta;
    curSubtree.change -= dist - delta;
  }
};

var nextLContour = function nextLContour(w) {
  return w.hasChildren ? w.firstChild : w.lThr;
};

var nextRContour = function nextRContour(w) {
  return w.hasChildren ? w.lastChild : w.rThr;
};

var setLThr = function setLThr(w, i, lContour, lSumMods) {
  var firstChild = w.firstChild;
  var lExt = firstChild.lExt;
  var curSubtree = w.children[i];
  lExt.lThr = lContour; // Change relX so that the sum of modifier after following thread is correct.

  var diff = lSumMods - lContour.relX - firstChild.lExtRelX;
  lExt.relX += diff; // Change preliminary x coordinate so that the node does not move.

  lExt.prelim -= diff; // Update extreme node and its sum of modifiers.

  firstChild.lExt = curSubtree.lExt;
  firstChild.lExtRelX = curSubtree.lExtRelX;
}; // Mirror image of setLThr.


var setRThr = function setRThr(w, i, rContour, rSumMods) {
  var curSubtree = w.children[i];
  var rExt = curSubtree.rExt;
  var lSib = w.children[i - 1];
  rExt.rThr = rContour;
  var diff = rSumMods - rContour.relX - curSubtree.rExtRelX;
  rExt.relX += diff;
  rExt.prelim -= diff;
  curSubtree.rExt = lSib.rExt;
  curSubtree.rExtRelX = lSib.rExtRelX;
}; // Position root between children, taking into account their modifiers


var positionRoot = function positionRoot(w) {
  if (w.hasChildren) {
    var k0 = w.firstChild;
    var kf = w.lastChild;
    var prelim = (k0.prelim + k0.relX - k0.xSize / 2 + kf.relX + kf.prelim + kf.xSize / 2) / 2;
    Object.assign(w, {
      prelim: prelim,
      lExt: k0.lExt,
      lExtRelX: k0.lExtRelX,
      rExt: kf.rExt,
      rExtRelX: kf.rExtRelX
    });
  }
}; // Make/maintain a linked list of the indexes of left siblings and their
// lowest vertical coordinate.


var updateLows = function updateLows(lowY, index, lastLows) {
  // Remove siblings that are hidden by the new subtree.
  while (lastLows !== null && lowY >= lastLows.lowY) {
    lastLows = lastLows.next;
  } // Prepend the new subtree.


  return {
    lowY: lowY,
    index: index,
    next: lastLows
  };
};
/*! markmap-common v0.1.4 | MIT License */


var Hook = /*#__PURE__*/function () {
  function Hook() {
    _classCallCheck(this, Hook);

    this.listeners = [];
  }

  _createClass$1(Hook, [{
    key: "tap",
    value: function tap(fn) {
      var _this2 = this;

      this.listeners.push(fn);
      return function () {
        return _this2.revoke(fn);
      };
    }
  }, {
    key: "revoke",
    value: function revoke(fn) {
      var i = this.listeners.indexOf(fn);
      if (i >= 0) this.listeners.splice(i, 1);
    }
  }, {
    key: "revokeAll",
    value: function revokeAll() {
      this.listeners.splice(0);
    }
  }, {
    key: "call",
    value: function call() {
      var _iterator = _createForOfIteratorHelper(this.listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          fn.apply(void 0, arguments);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Hook;
}();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var uniqId = Math.random().toString(36).slice(2, 8);
var globalIndex = 0;

function getId() {
  globalIndex += 1;
  return "mm-".concat(uniqId, "-").concat(globalIndex);
}

function noop() {// noop
}

function walkTree(tree, callback) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'c';

  var walk = function walk(item, parent) {
    return callback(item, function () {
      var _item$key;

      (_item$key = item[key]) == null ? void 0 : _item$key.forEach(function (child) {
        walk(child, item);
      });
    }, parent);
  };

  walk(tree);
}

function arrayFrom(arrayLike) {
  if (Array.from) return Array.from(arrayLike);
  var array = [];

  for (var i = 0; i < arrayLike.length; i += 1) {
    array.push(arrayLike[i]);
  }

  return array;
}

function addClass(className) {
  var classList = (className || '').split(' ').filter(Boolean);

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  rest.forEach(function (item) {
    if (item && classList.indexOf(item) < 0) classList.push(item);
  });
  return classList.join(' ');
}

function childSelector(filter) {
  if (typeof filter === 'string') {
    var tagName = filter;

    filter = function filter(el) {
      return el.tagName === tagName;
    };
  }

  var filterFn = filter;
  return function selector() {
    var nodes = arrayFrom(this.childNodes);
    if (filterFn) nodes = nodes.filter(function (node) {
      return filterFn(node);
    });
    return nodes;
  };
}

function memoize(fn) {
  var cache = {};
  return function memoized() {
    var key = "".concat(arguments.length <= 0 ? undefined : arguments[0]);
    var data = cache[key];

    if (!data) {
      data = {
        value: fn.apply(void 0, arguments)
      };
      cache[key] = data;
    }

    return data.value;
  };
}

function createElement(tagName, props, attrs) {
  var el = document.createElement(tagName);

  if (props) {
    Object.entries(props).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      el[key] = value;
    });
  }

  if (attrs) {
    Object.entries(attrs).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      el.setAttribute(key, value);
    });
  }

  return el;
}

var memoizedPreloadJS = memoize(function (url) {
  document.head.append(createElement('link', {
    rel: 'preload',
    as: 'script',
    href: url
  }));
});

function loadJSItem(item, context) {
  if (item.type === 'script') {
    return new Promise(function (resolve, reject) {
      var _item$data;

      document.head.append(createElement('script', _extends({}, item.data, {
        onload: resolve,
        onerror: reject
      }))); // Run inline script synchronously

      if (!((_item$data = item.data) != null && _item$data.src)) resolve();
    });
  }

  if (item.type === 'iife') {
    var _item$data3 = item.data,
        fn = _item$data3.fn,
        getParams = _item$data3.getParams;
    fn.apply(void 0, _toConsumableArray((getParams == null ? void 0 : getParams(context)) || []));
  }
}

function loadCSSItem(item) {
  if (item.type === 'style') {
    document.head.append(createElement('style', {
      textContent: item.data
    }));
  } else if (item.type === 'stylesheet') {
    document.head.append(createElement('link', _extends({
      rel: 'stylesheet'
    }, item.data)));
  }
}

function loadJS(_x, _x2) {
  return _loadJS.apply(this, arguments);
}

function _loadJS() {
  _loadJS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(items, context) {
    var needPreload, _iterator3, _step3, item;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            needPreload = items.filter(function (item) {
              var _item$data2;

              return item.type === 'script' && ((_item$data2 = item.data) == null ? void 0 : _item$data2.src);
            });
            if (needPreload.length > 1) needPreload.forEach(function (item) {
              return memoizedPreloadJS(item.data.src);
            });
            context = _extends({
              getMarkmap: function getMarkmap() {
                return window.markmap;
              }
            }, context);
            _iterator3 = _createForOfIteratorHelper(items);
            _context4.prev = 4;

            _iterator3.s();

          case 6:
            if ((_step3 = _iterator3.n()).done) {
              _context4.next = 12;
              break;
            }

            item = _step3.value;
            _context4.next = 10;
            return loadJSItem(item, context);

          case 10:
            _context4.next = 6;
            break;

          case 12:
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](4);

            _iterator3.e(_context4.t0);

          case 17:
            _context4.prev = 17;

            _iterator3.f();

            return _context4.finish(17);

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 14, 17, 20]]);
  }));
  return _loadJS.apply(this, arguments);
}

function loadCSS(items) {
  var _iterator2 = _createForOfIteratorHelper(items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      loadCSSItem(item);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function linkWidth(nodeData) {
  var data = nodeData.data;
  return Math.max(6 - 2 * data.d, 1.5);
}

function adjustSpacing(tree, spacing) {
  walkTree(tree, function (d, next) {
    d.ySizeInner = d.ySize - spacing;
    d.y += spacing;
    next();
  }, 'children');
}

function minBy(numbers, by) {
  var index = minIndex(numbers, by);
  return numbers[index];
}

function stopPropagation(e) {
  e.stopPropagation();
}

function createViewHooks() {
  return {
    transformHtml: new Hook()
  };
}
/**
 * A global hook to refresh all markmaps when called.
 */


var refreshHook = new Hook();

var Markmap = /*#__PURE__*/function () {
  function Markmap(svg, opts) {
    var _this3 = this;

    _classCallCheck(this, Markmap);

    this.options = void 0;
    this.state = void 0;
    this.svg = void 0;
    this.styleNode = void 0;
    this.g = void 0;
    this.zoom = void 0;
    this.viewHooks = void 0;
    this.revokers = [];
    ['handleZoom', 'handleClick'].forEach(function (key) {
      _this3[key] = _this3[key].bind(_this3);
    });
    this.viewHooks = createViewHooks();
    this.svg = svg.datum ? svg : select(svg);
    this.styleNode = this.svg.append('style');
    this.zoom = zoom().on('zoom', this.handleZoom);
    this.options = _extends$1({}, Markmap.defaultOptions, opts);
    this.state = {
      id: this.options.id || getId()
    };
    this.g = this.svg.append('g').attr('class', "".concat(this.state.id, "-g"));
    this.updateStyle();
    this.svg.call(this.zoom);
    this.revokers.push(refreshHook.tap(function () {
      _this3.setData();
    }));
  }

  _createClass$1(Markmap, [{
    key: "getStyleContent",
    value: function getStyleContent() {
      var _this$options = this.options,
          style = _this$options.style,
          nodeFont = _this$options.nodeFont;
      var id = this.state.id;
      var extraStyle = typeof style === 'function' ? style(id) : '';
      var styleText = ".".concat(id, " { line-height: 1; }\n.").concat(id, " a { color: #0097e6; }\n.").concat(id, " a:hover { color: #00a8ff; }\n.").concat(id, "-g > path { fill: none; }\n.").concat(id, "-g > g > circle { cursor: pointer; }\n.").concat(id, "-fo > div { display: inline-block; font: ").concat(nodeFont, "; white-space: nowrap; }\n.").concat(id, "-fo code { font-size: calc(1em - 2px); color: #555; background-color: #f0f0f0; border-radius: 2px; }\n.").concat(id, "-fo :not(pre) > code { padding: .2em .4em; }\n.").concat(id, "-fo del { text-decoration: line-through; }\n.").concat(id, "-fo em { font-style: italic; }\n.").concat(id, "-fo strong { font-weight: bolder; }\n.").concat(id, "-fo pre { margin: 0; padding: .2em .4em; }\n").concat(extraStyle, "\n");
      return styleText;
    }
  }, {
    key: "updateStyle",
    value: function updateStyle() {
      this.svg.attr('class', addClass(this.svg.attr('class'), this.state.id));
      this.styleNode.text(this.getStyleContent());
    }
  }, {
    key: "handleZoom",
    value: function handleZoom(e) {
      var transform = e.transform;
      this.g.attr('transform', transform);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, d) {
      var _data$p;

      var data = d.data;
      data.p = _extends$1({}, data.p, {
        f: !((_data$p = data.p) != null && _data$p.f)
      });
      this.renderData(d.data);
    }
  }, {
    key: "initializeData",
    value: function initializeData(node) {
      var i = 0;
      var _this$options2 = this.options,
          nodeFont = _this$options2.nodeFont,
          color = _this$options2.color,
          nodeMinHeight = _this$options2.nodeMinHeight;
      var id = this.state.id;
      var container = document.createElement('div');
      var containerClass = "".concat(id, "-container");
      container.className = addClass(container.className, "".concat(id, "-fo"), containerClass);
      var style = document.createElement('style');
      style.textContent = "\n".concat(this.getStyleContent(), "\n.").concat(containerClass, " {\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: -100px;\n  left: -100px;\n  overflow: hidden;\n  font: ").concat(nodeFont, ";\n}\n.").concat(containerClass, " > div {\n  display: inline-block;\n}\n");
      document.body.append(style, container);
      walkTree(node, function (item, next) {
        var _item$c;

        item.c = (_item$c = item.c) == null ? void 0 : _item$c.map(function (child) {
          return _extends$1({}, child);
        });
        i += 1;
        var el = document.createElement('div');
        el.innerHTML = item.v;
        container.append(el);
        item.p = _extends$1({}, item.p, {
          // unique ID
          i: i,
          el: el
        });
        color(item); // preload colors

        next();
      });
      var nodes = arrayFrom(container.childNodes);
      this.viewHooks.transformHtml.call(this, nodes);
      walkTree(node, function (item, next, parent) {
        var _parent$p;

        var rect = item.p.el.getBoundingClientRect();
        item.v = item.p.el.innerHTML;
        item.p.s = [Math.ceil(rect.width), Math.max(Math.ceil(rect.height), nodeMinHeight)]; // TODO keep keys for unchanged objects
        // unique key, should be based on content

        item.p.k = "".concat((parent == null ? void 0 : (_parent$p = parent.p) == null ? void 0 : _parent$p.i) || '', ".").concat(item.p.i, ":").concat(item.v);
        next();
      });
      container.remove();
      style.remove();
    }
  }, {
    key: "setOptions",
    value: function setOptions(opts) {
      Object.assign(this.options, opts);
    }
  }, {
    key: "setData",
    value: function setData(data, opts) {
      if (!data) data = _extends$1({}, this.state.data);
      this.state.data = data;
      this.initializeData(data);
      if (opts) this.setOptions(opts);
      this.renderData();
    }
  }, {
    key: "renderData",
    value: function renderData(originData) {
      var _this4 = this;

      var _origin$data$p$x, _origin$data$p$y;

      if (!this.state.data) return;
      var _this$options3 = this.options,
          spacingHorizontal = _this$options3.spacingHorizontal,
          paddingX = _this$options3.paddingX,
          spacingVertical = _this$options3.spacingVertical,
          autoFit = _this$options3.autoFit,
          color = _this$options3.color;
      var id = this.state.id;
      var layout = flextree().children(function (d) {
        var _d$p;

        return !((_d$p = d.p) != null && _d$p.f) && d.c;
      }).nodeSize(function (d) {
        var _d$data$p$s = _slicedToArray(d.data.p.s, 2),
            width = _d$data$p$s[0],
            height = _d$data$p$s[1];

        return [height, width + (width ? paddingX * 2 : 0) + spacingHorizontal];
      }).spacing(function (a, b) {
        return a.parent === b.parent ? spacingVertical : spacingVertical * 2;
      });
      var tree = layout.hierarchy(this.state.data);
      layout(tree);
      adjustSpacing(tree, spacingHorizontal);
      var descendants = tree.descendants().reverse();
      var links = tree.links();
      var linkShape = linkHorizontal();
      var minX = min$1(descendants, function (d) {
        return d.x - d.xSize / 2;
      });
      var maxX = max(descendants, function (d) {
        return d.x + d.xSize / 2;
      });
      var minY = min$1(descendants, function (d) {
        return d.y;
      });
      var maxY = max(descendants, function (d) {
        return d.y + d.ySizeInner;
      });
      Object.assign(this.state, {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY
      });
      if (autoFit) this.fit();
      var origin = originData && descendants.find(function (item) {
        return item.data === originData;
      }) || tree;
      var x0 = (_origin$data$p$x = origin.data.p.x0) != null ? _origin$data$p$x : origin.x;
      var y0 = (_origin$data$p$y = origin.data.p.y0) != null ? _origin$data$p$y : origin.y; // Update the nodes

      var node = this.g.selectAll(childSelector('g')).data(descendants, function (d) {
        return d.data.p.k;
      });
      var nodeEnter = node.enter().append('g').attr('transform', function (d) {
        return "translate(".concat(y0 + origin.ySizeInner - d.ySizeInner, ",").concat(x0 + origin.xSize / 2 - d.xSize, ")");
      });
      var nodeExit = this.transition(node.exit());
      nodeExit.select('rect').attr('width', 0).attr('x', function (d) {
        return d.ySizeInner;
      });
      nodeExit.select('foreignObject').style('opacity', 0);
      nodeExit.attr('transform', function (d) {
        return "translate(".concat(origin.y + origin.ySizeInner - d.ySizeInner, ",").concat(origin.x + origin.xSize / 2 - d.xSize, ")");
      }).remove();
      var nodeMerge = node.merge(nodeEnter);
      this.transition(nodeMerge).attr('transform', function (d) {
        return "translate(".concat(d.y, ",").concat(d.x - d.xSize / 2, ")");
      });
      var rect = nodeMerge.selectAll(childSelector('rect')).data(function (d) {
        return [d];
      }, function (d) {
        return d.data.p.k;
      }).join(function (enter) {
        return enter.append('rect').attr('x', function (d) {
          return d.ySizeInner;
        }).attr('y', function (d) {
          return d.xSize - linkWidth(d) / 2;
        }).attr('width', 0).attr('height', linkWidth);
      }, function (update) {
        return update;
      }, function (exit) {
        return exit.remove();
      });
      this.transition(rect).attr('x', -1).attr('width', function (d) {
        return d.ySizeInner + 2;
      }).attr('fill', function (d) {
        return color(d.data);
      });
      var circle = nodeMerge.selectAll(childSelector('circle')).data(function (d) {
        return d.data.c ? [d] : [];
      }, function (d) {
        return d.data.p.k;
      }).join(function (enter) {
        return enter.append('circle').attr('stroke-width', '1.5').attr('cx', function (d) {
          return d.ySizeInner;
        }).attr('cy', function (d) {
          return d.xSize;
        }).attr('r', 0).on('click', _this4.handleClick);
      }, function (update) {
        return update;
      }, function (exit) {
        return exit.remove();
      });
      this.transition(circle).attr('r', 6).attr('stroke', function (d) {
        return color(d.data);
      }).attr('fill', function (d) {
        var _d$data$p;

        return (_d$data$p = d.data.p) != null && _d$data$p.f && d.data.c ? color(d.data) : '#fff';
      });
      var foreignObject = nodeMerge.selectAll(childSelector('foreignObject')).data(function (d) {
        return [d];
      }, function (d) {
        return d.data.p.k;
      }).join(function (enter) {
        var fo = enter.append('foreignObject').attr('class', "".concat(id, "-fo")).attr('x', paddingX).attr('y', 0).style('opacity', 0).attr('height', function (d) {
          return d.xSize;
        }).on('mousedown', stopPropagation).on('dblclick', stopPropagation);
        fo.append('xhtml:div').select(function select(d) {
          var node = d.data.p.el.cloneNode(true);
          this.replaceWith(node);
          return node;
        }).attr('xmlns', 'http://www.w3.org/1999/xhtml');
        return fo;
      }, function (update) {
        return update;
      }, function (exit) {
        return exit.remove();
      }).attr('width', function (d) {
        return Math.max(0, d.ySizeInner - paddingX * 2);
      });
      this.transition(foreignObject).style('opacity', 1); // Update the links

      var path = this.g.selectAll(childSelector('path')).data(links, function (d) {
        return d.target.data.p.k;
      }).join(function (enter) {
        var source = [y0 + origin.ySizeInner, x0 + origin.xSize / 2];
        return enter.insert('path', 'g').attr('d', linkShape({
          source: source,
          target: source
        }));
      }, function (update) {
        return update;
      }, function (exit) {
        var source = [origin.y + origin.ySizeInner, origin.x + origin.xSize / 2];
        return _this4.transition(exit).attr('d', linkShape({
          source: source,
          target: source
        })).remove();
      });
      this.transition(path).attr('stroke', function (d) {
        return color(d.target.data);
      }).attr('stroke-width', function (d) {
        return linkWidth(d.target);
      }).attr('d', function (d) {
        var source = [d.source.y + d.source.ySizeInner, d.source.x + d.source.xSize / 2];
        var target = [d.target.y, d.target.x + d.target.xSize / 2];
        return linkShape({
          source: source,
          target: target
        });
      });
      descendants.forEach(function (d) {
        d.data.p.x0 = d.x;
        d.data.p.y0 = d.y;
      });
    }
  }, {
    key: "transition",
    value: function transition(sel) {
      var duration = this.options.duration;
      return sel.transition().duration(duration);
    }
    /**
     * Fit the content to the viewport.
     */

  }, {
    key: "fit",
    value: function () {
      var _fit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var svgNode, _svgNode$getBoundingC, offsetWidth, offsetHeight, fitRatio, _this$state, minX, maxX, minY, maxY, naturalWidth, naturalHeight, scale, initialZoom;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                svgNode = this.svg.node();
                _svgNode$getBoundingC = svgNode.getBoundingClientRect(), offsetWidth = _svgNode$getBoundingC.width, offsetHeight = _svgNode$getBoundingC.height;
                fitRatio = this.options.fitRatio;
                _this$state = this.state, minX = _this$state.minX, maxX = _this$state.maxX, minY = _this$state.minY, maxY = _this$state.maxY;
                naturalWidth = maxY - minY;
                naturalHeight = maxX - minX;
                scale = Math.min(offsetWidth / naturalWidth * fitRatio, offsetHeight / naturalHeight * fitRatio, 2);
                initialZoom = identity.translate((offsetWidth - naturalWidth * scale) / 2 - minY * scale, (offsetHeight - naturalHeight * scale) / 2 - minX * scale).scale(scale);
                return _context.abrupt("return", this.transition(this.svg).call(this.zoom.transform, initialZoom).end()["catch"](noop));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fit() {
        return _fit.apply(this, arguments);
      }

      return fit;
    }()
    /**
     * Pan the content to make the provided node visible in the viewport.
     */

  }, {
    key: "ensureView",
    value: function () {
      var _ensureView = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(node, padding) {
        var g, itemData, svgNode, relRect, transform$1, _map, _map2, left, right, _map3, _map4, top, bottom, pd, dxs, dys, dx, dy, newTransform;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.g.selectAll(childSelector('g')).each(function walk(d) {
                  if (d.data === node) {
                    g = this;
                    itemData = d;
                  }
                });

                if (!(!g || !itemData)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                svgNode = this.svg.node();
                relRect = svgNode.getBoundingClientRect();
                transform$1 = transform(svgNode);
                _map = [itemData.y, itemData.y + itemData.ySizeInner + 2].map(function (x) {
                  return x * transform$1.k + transform$1.x;
                }), _map2 = _slicedToArray(_map, 2), left = _map2[0], right = _map2[1];
                _map3 = [itemData.x - itemData.xSize / 2, itemData.x + itemData.xSize / 2].map(function (y) {
                  return y * transform$1.k + transform$1.y;
                }), _map4 = _slicedToArray(_map3, 2), top = _map4[0], bottom = _map4[1]; // Skip if the node includes or is included in the container.

                pd = _extends$1({
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }, padding);
                dxs = [pd.left - left, relRect.width - pd.right - right];
                dys = [pd.top - top, relRect.height - pd.bottom - bottom];
                dx = dxs[0] * dxs[1] > 0 ? minBy(dxs, Math.abs) / transform$1.k : 0;
                dy = dys[0] * dys[1] > 0 ? minBy(dys, Math.abs) / transform$1.k : 0;

                if (!(dx || dy)) {
                  _context2.next = 16;
                  break;
                }

                newTransform = transform$1.translate(dx, dy);
                return _context2.abrupt("return", this.transition(this.svg).call(this.zoom.transform, newTransform).end()["catch"](noop));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function ensureView(_x3, _x4) {
        return _ensureView.apply(this, arguments);
      }

      return ensureView;
    }()
    /**
     * Scale content with it pinned at the center of the viewport.
     */

  }, {
    key: "rescale",
    value: function () {
      var _rescale = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(scale) {
        var svgNode, _svgNode$getBoundingC2, offsetWidth, offsetHeight, halfWidth, halfHeight, transform$1, newTransform;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                svgNode = this.svg.node();
                _svgNode$getBoundingC2 = svgNode.getBoundingClientRect(), offsetWidth = _svgNode$getBoundingC2.width, offsetHeight = _svgNode$getBoundingC2.height;
                halfWidth = offsetWidth / 2;
                halfHeight = offsetHeight / 2;
                transform$1 = transform(svgNode);
                newTransform = transform$1.translate((halfWidth - transform$1.x) * (1 - scale) / transform$1.k, (halfHeight - transform$1.y) * (1 - scale) / transform$1.k).scale(scale);
                return _context3.abrupt("return", this.transition(this.svg).call(this.zoom.transform, newTransform).end()["catch"](noop));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function rescale(_x5) {
        return _rescale.apply(this, arguments);
      }

      return rescale;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      this.svg.remove();
      this.revokers.forEach(function (fn) {
        fn();
      });
    }
  }], [{
    key: "create",
    value: function create(svg, opts, data) {
      var mm = new Markmap(svg, opts);

      if (data) {
        mm.setData(data);
        mm.fit(); // always fit for the first render
      }

      return mm;
    }
  }]);

  return Markmap;
}();

Markmap.defaultOptions = {
  duration: 500,
  nodeFont: '300 16px/20px sans-serif',
  nodeMinHeight: 16,
  spacingVertical: 5,
  spacingHorizontal: 80,
  autoFit: false,
  fitRatio: 0.95,
  color: function (colorFn) {
    return function (node) {
      return colorFn(node.p.i);
    };
  }(ordinal(category10)),
  paddingX: 8
};

var markmap = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Markmap: Markmap,
  loadCSS: loadCSS,
  loadJS: loadJS,
  refreshHook: refreshHook
});

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var nativeEndsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}(); // `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith

_export({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = String(requireObjectCoercible(this));
    notARegexp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

// https://tc39.es/ecma262/#sec-string.prototype.sup


_export({
  target: 'String',
  proto: true,
  forced: stringHtmlForced('sup')
}, {
  sup: function sup() {
    return createHtml(this, 'sup', '', '');
  }
});

// https://tc39.es/ecma262/#sec-string.prototype.sub


_export({
  target: 'String',
  proto: true,
  forced: stringHtmlForced('sub')
}, {
  sub: function sub() {
    return createHtml(this, 'sub', '', '');
  }
});

// https://tc39.es/ecma262/#sec-string.prototype.italics


_export({
  target: 'String',
  proto: true,
  forced: stringHtmlForced('italics')
}, {
  italics: function italics() {
    return createHtml(this, 'i', '', '');
  }
});

var trim = stringTrim.trim;
var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string

var numberParseFloat = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// https://tc39.es/ecma262/#sec-parsefloat-string

_export({
  global: true,
  forced: parseFloat != numberParseFloat
}, {
  parseFloat: numberParseFloat
});

var katex=createCommonjsModule(function(module,exports){(function webpackUniversalModuleDefinition(root,factory){module.exports=factory();})(typeof self!=='undefined'?self:commonjsGlobal,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=1);/******/}(/************************************************************************/ /******/[/* 0 */ /***/function(module,exports,__webpack_require__){// extracted by mini-css-extract-plugin
/***/},/* 1 */ /***/function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);// EXTERNAL MODULE: ./src/katex.less
__webpack_require__(0);// CONCATENATED MODULE: ./src/SourceLocation.js
/**
 * Lexing or parsing positional information for error reporting.
 * This object is immutable.
 */var SourceLocation=/*#__PURE__*/function(){// The + prefix indicates that these fields aren't writeable
// Lexer holding the input string.
// Start offset, zero-based inclusive.
// End offset, zero-based exclusive.
function SourceLocation(lexer,start,end){this.lexer=void 0;this.start=void 0;this.end=void 0;this.lexer=lexer;this.start=start;this.end=end;}/**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */SourceLocation.range=function range(first,second){if(!second){return first&&first.loc;}else if(!first||!first.loc||!second.loc||first.loc.lexer!==second.loc.lexer){return null;}else {return new SourceLocation(first.loc.lexer,first.loc.start,second.loc.end);}};return SourceLocation;}();// CONCATENATED MODULE: ./src/Token.js
/**
 * Interface required to break circular dependency between Token, Lexer, and
 * ParseError.
 */ /**
 * The resulting token returned from `lex`.
 *
 * It consists of the token text plus some position information.
 * The position information is essentially a range in an input string,
 * but instead of referencing the bare input string, we refer to the lexer.
 * That way it is possible to attach extra metadata to the input string,
 * like for example a file name or similar.
 *
 * The position information is optional, so it is OK to construct synthetic
 * tokens if appropriate. Not providing available position information may
 * lead to degraded error reporting, though.
 */var Token_Token=/*#__PURE__*/function(){// don't expand the token
// used in \noexpand
function Token(text,// the text of this token
loc){this.text=void 0;this.loc=void 0;this.noexpand=void 0;this.treatAsRelax=void 0;this.text=text;this.loc=loc;}/**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */var _proto=Token.prototype;_proto.range=function range(endToken,// last token of the range, inclusive
text)// the text of the newly constructed token
{return new Token(text,SourceLocation.range(this,endToken));};return Token;}();// CONCATENATED MODULE: ./src/ParseError.js
/**
 * This is the ParseError class, which is the main error thrown by KaTeX
 * functions when something has gone wrong. This is used to distinguish internal
 * errors from errors in the expression that the user provided.
 *
 * If possible, a caller should provide a Token or ParseNode with information
 * about where in the source string the problem occurred.
 */var ParseError=// Error position based on passed-in Token or ParseNode.
function ParseError(message,// The error message
token)// An object providing position information
{this.position=void 0;var error="KaTeX parse error: "+message;var start;var loc=token&&token.loc;if(loc&&loc.start<=loc.end){// If we have the input and a position, make the error a bit fancier
// Get the input
var input=loc.lexer.input;// Prepend some information
start=loc.start;var end=loc.end;if(start===input.length){error+=" at end of input: ";}else {error+=" at position "+(start+1)+": ";}// Underline token in question using combining underscores
var underlined=input.slice(start,end).replace(/[^]/g,"$&\u0332");// Extract some context from the input and add it to the error
var left;if(start>15){left="…"+input.slice(start-15,start);}else {left=input.slice(0,start);}var right;if(end+15<input.length){right=input.slice(end,end+15)+"…";}else {right=input.slice(end);}error+=left+underlined+right;}// Some hackery to make ParseError a prototype of Error
// See http://stackoverflow.com/a/8460753
var self=new Error(error);self.name="ParseError";// $FlowFixMe
self.__proto__=ParseError.prototype;// $FlowFixMe
self.position=start;return self;};// $FlowFixMe More hackery
ParseError.prototype.__proto__=Error.prototype;/* harmony default export */var src_ParseError=ParseError;// CONCATENATED MODULE: ./src/utils.js
/**
 * This file contains a list of utility functions which are useful in other
 * files.
 */ /**
 * Return whether an element is contained in a list
 */var contains=function contains(list,elem){return list.indexOf(elem)!==-1;};/**
 * Provide a default value if a setting is undefined
 * NOTE: Couldn't use `T` as the output type due to facebook/flow#5022.
 */var deflt=function deflt(setting,defaultIfUndefined){return setting===undefined?defaultIfUndefined:setting;};// hyphenate and escape adapted from Facebook's React under Apache 2 license
var uppercase=/([A-Z])/g;var hyphenate=function hyphenate(str){return str.replace(uppercase,"-$1").toLowerCase();};var ESCAPE_LOOKUP={"&":"&amp;",">":"&gt;","<":"&lt;","\"":"&quot;","'":"&#x27;"};var ESCAPE_REGEX=/[&><"']/g;/**
 * Escapes text to prevent scripting attacks.
 */function utils_escape(text){return String(text).replace(ESCAPE_REGEX,function(match){return ESCAPE_LOOKUP[match];});}/**
 * Sometimes we want to pull out the innermost element of a group. In most
 * cases, this will just be the group itself, but when ordgroups and colors have
 * a single element, we want to pull that out.
 */var getBaseElem=function getBaseElem(group){if(group.type==="ordgroup"){if(group.body.length===1){return getBaseElem(group.body[0]);}else {return group;}}else if(group.type==="color"){if(group.body.length===1){return getBaseElem(group.body[0]);}else {return group;}}else if(group.type==="font"){return getBaseElem(group.body);}else {return group;}};/**
 * TeXbook algorithms often reference "character boxes", which are simply groups
 * with a single character in them. To decide if something is a character box,
 * we find its innermost group, and see if it is a single character.
 */var utils_isCharacterBox=function isCharacterBox(group){var baseElem=getBaseElem(group);// These are all they types of groups which hold single characters
return baseElem.type==="mathord"||baseElem.type==="textord"||baseElem.type==="atom";};var assert=function assert(value){if(!value){throw new Error('Expected non-null, but got '+String(value));}return value;};/**
 * Return the protocol of a URL, or "_relative" if the URL does not specify a
 * protocol (and thus is relative).
 */var protocolFromUrl=function protocolFromUrl(url){var protocol=/^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(url);return protocol!=null?protocol[1]:"_relative";};/* harmony default export */var utils={contains:contains,deflt:deflt,escape:utils_escape,hyphenate:hyphenate,getBaseElem:getBaseElem,isCharacterBox:utils_isCharacterBox,protocolFromUrl:protocolFromUrl};// CONCATENATED MODULE: ./src/Settings.js
/* eslint no-console:0 */ /**
 * This is a module for storing settings passed into KaTeX. It correctly handles
 * default settings.
 */ /**
 * The main Settings object
 *
 * The current options stored are:
 *  - displayMode: Whether the expression should be typeset as inline math
 *                 (false, the default), meaning that the math starts in
 *                 \textstyle and is placed in an inline-block); or as display
 *                 math (true), meaning that the math starts in \displaystyle
 *                 and is placed in a block with vertical margin.
 */var Settings_Settings=/*#__PURE__*/function(){function Settings(options){this.displayMode=void 0;this.output=void 0;this.leqno=void 0;this.fleqn=void 0;this.throwOnError=void 0;this.errorColor=void 0;this.macros=void 0;this.minRuleThickness=void 0;this.colorIsTextColor=void 0;this.strict=void 0;this.trust=void 0;this.maxSize=void 0;this.maxExpand=void 0;this.globalGroup=void 0;// allow null options
options=options||{};this.displayMode=utils.deflt(options.displayMode,false);this.output=utils.deflt(options.output,"htmlAndMathml");this.leqno=utils.deflt(options.leqno,false);this.fleqn=utils.deflt(options.fleqn,false);this.throwOnError=utils.deflt(options.throwOnError,true);this.errorColor=utils.deflt(options.errorColor,"#cc0000");this.macros=options.macros||{};this.minRuleThickness=Math.max(0,utils.deflt(options.minRuleThickness,0));this.colorIsTextColor=utils.deflt(options.colorIsTextColor,false);this.strict=utils.deflt(options.strict,"warn");this.trust=utils.deflt(options.trust,false);this.maxSize=Math.max(0,utils.deflt(options.maxSize,Infinity));this.maxExpand=Math.max(0,utils.deflt(options.maxExpand,1000));this.globalGroup=utils.deflt(options.globalGroup,false);}/**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */var _proto=Settings.prototype;_proto.reportNonstrict=function reportNonstrict(errorCode,errorMsg,token){var strict=this.strict;if(typeof strict==="function"){// Allow return value of strict function to be boolean or string
// (or null/undefined, meaning no further processing).
strict=strict(errorCode,errorMsg,token);}if(!strict||strict==="ignore"){return;}else if(strict===true||strict==="error"){throw new src_ParseError("LaTeX-incompatible input and strict mode is set to 'error': "+(errorMsg+" ["+errorCode+"]"),token);}else if(strict==="warn"){typeof console!=="undefined"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(errorMsg+" ["+errorCode+"]"));}else {// won't happen in type-safe code
typeof console!=="undefined"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+strict+"': "+errorMsg+" ["+errorCode+"]"));}}/**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */;_proto.useStrictBehavior=function useStrictBehavior(errorCode,errorMsg,token){var strict=this.strict;if(typeof strict==="function"){// Allow return value of strict function to be boolean or string
// (or null/undefined, meaning no further processing).
// But catch any exceptions thrown by function, treating them
// like "error".
try{strict=strict(errorCode,errorMsg,token);}catch(error){strict="error";}}if(!strict||strict==="ignore"){return false;}else if(strict===true||strict==="error"){return true;}else if(strict==="warn"){typeof console!=="undefined"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(errorMsg+" ["+errorCode+"]"));return false;}else {// won't happen in type-safe code
typeof console!=="undefined"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+strict+"': "+errorMsg+" ["+errorCode+"]"));return false;}}/**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */;_proto.isTrusted=function isTrusted(context){if(context.url&&!context.protocol){context.protocol=utils.protocolFromUrl(context.url);}var trust=typeof this.trust==="function"?this.trust(context):this.trust;return Boolean(trust);};return Settings;}();// CONCATENATED MODULE: ./src/Style.js
/**
 * This file contains information and classes for the various kinds of styles
 * used in TeX. It provides a generic `Style` class, which holds information
 * about a specific style. It then provides instances of all the different kinds
 * of styles possible, and provides functions to move between them and get
 * information about them.
 */ /**
 * The main style class. Contains a unique id for the style, a size (which is
 * the same for cramped and uncramped version of a style), and a cramped flag.
 */var Style=/*#__PURE__*/function(){function Style(id,size,cramped){this.id=void 0;this.size=void 0;this.cramped=void 0;this.id=id;this.size=size;this.cramped=cramped;}/**
   * Get the style of a superscript given a base in the current style.
   */var _proto=Style.prototype;_proto.sup=function sup(){return Style_styles[_sup[this.id]];}/**
   * Get the style of a subscript given a base in the current style.
   */;_proto.sub=function sub(){return Style_styles[_sub[this.id]];}/**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */;_proto.fracNum=function fracNum(){return Style_styles[_fracNum[this.id]];}/**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */;_proto.fracDen=function fracDen(){return Style_styles[_fracDen[this.id]];}/**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */;_proto.cramp=function cramp(){return Style_styles[_cramp[this.id]];}/**
   * Get a text or display version of this style.
   */;_proto.text=function text(){return Style_styles[_text[this.id]];}/**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */;_proto.isTight=function isTight(){return this.size>=2;};return Style;}();// Export an interface for type checking, but don't expose the implementation.
// This way, no more styles can be generated.
// IDs of the different styles
var D=0;var Dc=1;var T=2;var Tc=3;var S=4;var Sc=5;var SS=6;var SSc=7;// Instances of the different styles
var Style_styles=[new Style(D,0,false),new Style(Dc,0,true),new Style(T,1,false),new Style(Tc,1,true),new Style(S,2,false),new Style(Sc,2,true),new Style(SS,3,false),new Style(SSc,3,true)];// Lookup tables for switching from one style to another
var _sup=[S,Sc,S,Sc,SS,SSc,SS,SSc];var _sub=[Sc,Sc,Sc,Sc,SSc,SSc,SSc,SSc];var _fracNum=[T,Tc,S,Sc,SS,SSc,SS,SSc];var _fracDen=[Tc,Tc,Sc,Sc,SSc,SSc,SSc,SSc];var _cramp=[Dc,Dc,Tc,Tc,Sc,Sc,SSc,SSc];var _text=[D,Dc,T,Tc,T,Tc,T,Tc];// We only export some of the styles.
/* harmony default export */var src_Style={DISPLAY:Style_styles[D],TEXT:Style_styles[T],SCRIPT:Style_styles[S],SCRIPTSCRIPT:Style_styles[SS]};// CONCATENATED MODULE: ./src/unicodeScripts.js
/*
 * This file defines the Unicode scripts and script families that we
 * support. To add new scripts or families, just add a new entry to the
 * scriptData array below. Adding scripts to the scriptData array allows
 * characters from that script to appear in \text{} environments.
 */ /**
 * Each script or script family has a name and an array of blocks.
 * Each block is an array of two numbers which specify the start and
 * end points (inclusive) of a block of Unicode codepoints.
 */ /**
 * Unicode block data for the families of scripts we support in \text{}.
 * Scripts only need to appear here if they do not have font metrics.
 */var scriptData=[{// Latin characters beyond the Latin-1 characters we have metrics for.
// Needed for Czech, Hungarian and Turkish text, for example.
name:'latin',blocks:[[0x0100,0x024f],// Latin Extended-A and Latin Extended-B
[0x0300,0x036f]]},{// The Cyrillic script used by Russian and related languages.
// A Cyrillic subset used to be supported as explicitly defined
// symbols in symbols.js
name:'cyrillic',blocks:[[0x0400,0x04ff]]},{// The Brahmic scripts of South and Southeast Asia
// Devanagari (0900–097F)
// Bengali (0980–09FF)
// Gurmukhi (0A00–0A7F)
// Gujarati (0A80–0AFF)
// Oriya (0B00–0B7F)
// Tamil (0B80–0BFF)
// Telugu (0C00–0C7F)
// Kannada (0C80–0CFF)
// Malayalam (0D00–0D7F)
// Sinhala (0D80–0DFF)
// Thai (0E00–0E7F)
// Lao (0E80–0EFF)
// Tibetan (0F00–0FFF)
// Myanmar (1000–109F)
name:'brahmic',blocks:[[0x0900,0x109F]]},{name:'georgian',blocks:[[0x10A0,0x10ff]]},{// Chinese and Japanese.
// The "k" in cjk is for Korean, but we've separated Korean out
name:"cjk",blocks:[[0x3000,0x30FF],// CJK symbols and punctuation, Hiragana, Katakana
[0x4E00,0x9FAF],// CJK ideograms
[0xFF00,0xFF60]]},{// Korean
name:'hangul',blocks:[[0xAC00,0xD7AF]]}];/**
 * Given a codepoint, return the name of the script or script family
 * it is from, or null if it is not part of a known block
 */function scriptFromCodepoint(codepoint){for(var i=0;i<scriptData.length;i++){var script=scriptData[i];for(var _i=0;_i<script.blocks.length;_i++){var block=script.blocks[_i];if(codepoint>=block[0]&&codepoint<=block[1]){return script.name;}}}return null;}/**
 * A flattened version of all the supported blocks in a single array.
 * This is an optimization to make supportedCodepoint() fast.
 */var allBlocks=[];scriptData.forEach(function(s){return s.blocks.forEach(function(b){return allBlocks.push.apply(allBlocks,b);});});/**
 * Given a codepoint, return true if it falls within one of the
 * scripts or script families defined above and false otherwise.
 *
 * Micro benchmarks shows that this is faster than
 * /[\u3000-\u30FF\u4E00-\u9FAF\uFF00-\uFF60\uAC00-\uD7AF\u0900-\u109F]/.test()
 * in Firefox, Chrome and Node.
 */function supportedCodepoint(codepoint){for(var i=0;i<allBlocks.length;i+=2){if(codepoint>=allBlocks[i]&&codepoint<=allBlocks[i+1]){return true;}}return false;}// CONCATENATED MODULE: ./src/svgGeometry.js
/**
 * This file provides support to domTree.js and delimiter.js.
 * It's a storehouse of path geometry for SVG images.
 */ // In all paths below, the viewBox-to-em scale is 1000:1.
var hLinePad=80;// padding above a sqrt viniculum. Prevents image cropping.
// The viniculum of a \sqrt can be made thicker by a KaTeX rendering option.
// Think of variable extraViniculum as two detours in the SVG path.
// The detour begins at the lower left of the area labeled extraViniculum below.
// The detour proceeds one extraViniculum distance up and slightly to the right,
// displacing the radiused corner between surd and viniculum. The radius is
// traversed as usual, then the detour resumes. It goes right, to the end of
// the very long viniculumn, then down one extraViniculum distance,
// after which it resumes regular path geometry for the radical.
/*                                                  viniculum
                                                   /
         /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒←extraViniculum
        / █████████████████████←0.04em (40 unit) std viniculum thickness
       / /
      / /
     / /\
    / / surd
*/var sqrtMain=function sqrtMain(extraViniculum,hLinePad){// sqrtMain path geometry is from glyph U221A in the font KaTeX Main
return "M95,"+(622+extraViniculum+hLinePad)+"\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl"+extraViniculum/2.075+" -"+extraViniculum+"\nc5.3,-9.3,12,-14,20,-14\nH400000v"+(40+extraViniculum)+"H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM"+(834+extraViniculum)+" "+hLinePad+"h400000v"+(40+extraViniculum)+"h-400000z";};var sqrtSize1=function sqrtSize1(extraViniculum,hLinePad){// size1 is from glyph U221A in the font KaTeX_Size1-Regular
return "M263,"+(601+extraViniculum+hLinePad)+"c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl"+extraViniculum/2.084+" -"+extraViniculum+"\nc4.7,-7.3,11,-11,19,-11\nH40000v"+(40+extraViniculum)+"H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM"+(1001+extraViniculum)+" "+hLinePad+"h400000v"+(40+extraViniculum)+"h-400000z";};var sqrtSize2=function sqrtSize2(extraViniculum,hLinePad){// size2 is from glyph U221A in the font KaTeX_Size2-Regular
return "M983 "+(10+extraViniculum+hLinePad)+"\nl"+extraViniculum/3.13+" -"+extraViniculum+"\nc4,-6.7,10,-10,18,-10 H400000v"+(40+extraViniculum)+"\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM"+(1001+extraViniculum)+" "+hLinePad+"h400000v"+(40+extraViniculum)+"h-400000z";};var sqrtSize3=function sqrtSize3(extraViniculum,hLinePad){// size3 is from glyph U221A in the font KaTeX_Size3-Regular
return "M424,"+(2398+extraViniculum+hLinePad)+"\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl"+extraViniculum/4.223+" -"+extraViniculum+"c4,-6.7,10,-10,18,-10 H400000\nv"+(40+extraViniculum)+"H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M"+(1001+extraViniculum)+" "+hLinePad+"\nh400000v"+(40+extraViniculum)+"h-400000z";};var sqrtSize4=function sqrtSize4(extraViniculum,hLinePad){// size4 is from glyph U221A in the font KaTeX_Size4-Regular
return "M473,"+(2713+extraViniculum+hLinePad)+"\nc339.3,-1799.3,509.3,-2700,510,-2702 l"+extraViniculum/5.298+" -"+extraViniculum+"\nc3.3,-7.3,9.3,-11,18,-11 H400000v"+(40+extraViniculum)+"H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM"+(1001+extraViniculum)+" "+hLinePad+"h400000v"+(40+extraViniculum)+"H1017.7z";};var sqrtTall=function sqrtTall(extraViniculum,hLinePad,viewBoxHeight){// sqrtTall is from glyph U23B7 in the font KaTeX_Size4-Regular
// One path edge has a variable length. It runs vertically from the viniculumn
// to a point near (14 units) the bottom of the surd. The viniculum
// is normally 40 units thick. So the length of the line in question is:
var vertSegment=viewBoxHeight-54-hLinePad-extraViniculum;return "M702 "+(extraViniculum+hLinePad)+"H400000"+(40+extraViniculum)+"\nH742v"+vertSegment+"l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 "+hLinePad+"H400000v"+(40+extraViniculum)+"H742z";};var sqrtPath=function sqrtPath(size,extraViniculum,viewBoxHeight){extraViniculum=1000*extraViniculum;// Convert from document ems to viewBox.
var path="";switch(size){case"sqrtMain":path=sqrtMain(extraViniculum,hLinePad);break;case"sqrtSize1":path=sqrtSize1(extraViniculum,hLinePad);break;case"sqrtSize2":path=sqrtSize2(extraViniculum,hLinePad);break;case"sqrtSize3":path=sqrtSize3(extraViniculum,hLinePad);break;case"sqrtSize4":path=sqrtSize4(extraViniculum,hLinePad);break;case"sqrtTall":path=sqrtTall(extraViniculum,hLinePad,viewBoxHeight);}return path;};var svgGeometry_path={// Two paths that cover gaps in built-up parentheses.
leftParenInner:"M291 0 H417 V300 H291 z",rightParenInner:"M457 0 H583 V300 H457 z",// The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
doubleleftarrow:"M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",// doublerightarrow is from glyph U+21D2 in font KaTeX Main
doublerightarrow:"M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",// leftarrow is from glyph U+2190 in font KaTeX Main
leftarrow:"M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",// overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
leftbrace:"M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",leftbraceunder:"M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",// overgroup is from the MnSymbol package (public domain)
leftgroup:"M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",leftgroupunder:"M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",// Harpoons are from glyph U+21BD in font KaTeX Main
leftharpoon:"M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",leftharpoonplus:"M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",leftharpoondown:"M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",leftharpoondownplus:"M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",// hook is from glyph U+21A9 in font KaTeX Main
lefthook:"M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",leftlinesegment:"M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",leftmapsto:"M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",// tofrom is from glyph U+21C4 in font KaTeX AMS Regular
leftToFrom:"M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",longequal:"M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",midbrace:"M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",midbraceunder:"M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",oiintSize1:"M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",oiintSize2:"M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",oiiintSize1:"M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",oiiintSize2:"M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",rightarrow:"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",rightbrace:"M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",rightbraceunder:"M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",rightgroup:"M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",rightgroupunder:"M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",rightharpoon:"M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",rightharpoonplus:"M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",rightharpoondown:"M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",rightharpoondownplus:"M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",righthook:"M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",rightlinesegment:"M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",rightToFrom:"M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",// twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
twoheadleftarrow:"M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",twoheadrightarrow:"M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",// tilde1 is a modified version of a glyph from the MnSymbol package
tilde1:"M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",// ditto tilde2, tilde3, & tilde4
tilde2:"M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",tilde3:"M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",tilde4:"M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",// vec is from glyph U+20D7 in font KaTeX Main
vec:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",// widehat1 is a modified version of a glyph from the MnSymbol package
widehat1:"M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",// ditto widehat2, widehat3, & widehat4
widehat2:"M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widehat3:"M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widehat4:"M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",// widecheck paths are all inverted versions of widehat
widecheck1:"M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",widecheck2:"M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",widecheck3:"M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",widecheck4:"M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",// The next ten paths support reaction arrows from the mhchem package.
// Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
// baraboveleftarrow is mostly from from glyph U+2190 in font KaTeX Main
baraboveleftarrow:"M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",// rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
rightarrowabovebar:"M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",// The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
// Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
baraboveshortleftharpoon:"M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",rightharpoonaboveshortbar:"M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",shortbaraboveleftharpoon:"M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",shortrightharpoonabovebar:"M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"};// CONCATENATED MODULE: ./src/tree.js
/**
 * This node represents a document fragment, which contains elements, but when
 * placed into the DOM doesn't have any representation itself. It only contains
 * children and doesn't have any DOM node properties.
 */var tree_DocumentFragment=/*#__PURE__*/function(){// HtmlDomNode
// Never used; needed for satisfying interface.
function DocumentFragment(children){this.children=void 0;this.classes=void 0;this.height=void 0;this.depth=void 0;this.maxFontSize=void 0;this.style=void 0;this.children=children;this.classes=[];this.height=0;this.depth=0;this.maxFontSize=0;this.style={};}var _proto=DocumentFragment.prototype;_proto.hasClass=function hasClass(className){return utils.contains(this.classes,className);}/** Convert the fragment into a node. */;_proto.toNode=function toNode(){var frag=document.createDocumentFragment();for(var i=0;i<this.children.length;i++){frag.appendChild(this.children[i].toNode());}return frag;}/** Convert the fragment into HTML markup. */;_proto.toMarkup=function toMarkup(){var markup="";// Simply concatenate the markup for the children together.
for(var i=0;i<this.children.length;i++){markup+=this.children[i].toMarkup();}return markup;}/**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */;_proto.toText=function toText(){// To avoid this, we would subclass documentFragment separately for
// MathML, but polyfills for subclassing is expensive per PR 1469.
// $FlowFixMe: Only works for ChildType = MathDomNode.
var toText=function toText(child){return child.toText();};return this.children.map(toText).join("");};return DocumentFragment;}();// CONCATENATED MODULE: ./src/domTree.js
/**
 * These objects store the data about the DOM nodes we create, as well as some
 * extra data. They can then be transformed into real DOM nodes with the
 * `toNode` function or HTML markup using `toMarkup`. They are useful for both
 * storing extra properties on the nodes, as well as providing a way to easily
 * work with the DOM.
 *
 * Similar functions for working with MathML nodes exist in mathMLTree.js.
 *
 * TODO: refactor `span` and `anchor` into common superclass when
 * target environments support class inheritance
 */ /**
 * Create an HTML className based on a list of classes. In addition to joining
 * with spaces, we also remove empty classes.
 */var createClass=function createClass(classes){return classes.filter(function(cls){return cls;}).join(" ");};var initNode=function initNode(classes,options,style){this.classes=classes||[];this.attributes={};this.height=0;this.depth=0;this.maxFontSize=0;this.style=style||{};if(options){if(options.style.isTight()){this.classes.push("mtight");}var color=options.getColor();if(color){this.style.color=color;}}};/**
 * Convert into an HTML node
 */var _toNode=function toNode(tagName){var node=document.createElement(tagName);// Apply the class
node.className=createClass(this.classes);// Apply inline styles
for(var style in this.style){if(this.style.hasOwnProperty(style)){// $FlowFixMe Flow doesn't seem to understand span.style's type.
node.style[style]=this.style[style];}}// Apply attributes
for(var attr in this.attributes){if(this.attributes.hasOwnProperty(attr)){node.setAttribute(attr,this.attributes[attr]);}}// Append the children, also as HTML nodes
for(var i=0;i<this.children.length;i++){node.appendChild(this.children[i].toNode());}return node;};/**
 * Convert into an HTML markup string
 */var _toMarkup=function toMarkup(tagName){var markup="<"+tagName;// Add the class
if(this.classes.length){markup+=" class=\""+utils.escape(createClass(this.classes))+"\"";}var styles="";// Add the styles, after hyphenation
for(var style in this.style){if(this.style.hasOwnProperty(style)){styles+=utils.hyphenate(style)+":"+this.style[style]+";";}}if(styles){markup+=" style=\""+utils.escape(styles)+"\"";}// Add the attributes
for(var attr in this.attributes){if(this.attributes.hasOwnProperty(attr)){markup+=" "+attr+"=\""+utils.escape(this.attributes[attr])+"\"";}}markup+=">";// Add the markup of the children, also as markup
for(var i=0;i<this.children.length;i++){markup+=this.children[i].toMarkup();}markup+="</"+tagName+">";return markup;};// Making the type below exact with all optional fields doesn't work due to
// - https://github.com/facebook/flow/issues/4582
// - https://github.com/facebook/flow/issues/5688
// However, since *all* fields are optional, $Shape<> works as suggested in 5688
// above.
// This type does not include all CSS properties. Additional properties should
// be added as needed.
/**
 * This node represents a span node, with a className, a list of children, and
 * an inline style. It also contains information about its height, depth, and
 * maxFontSize.
 *
 * Represents two types with different uses: SvgSpan to wrap an SVG and DomSpan
 * otherwise. This typesafety is important when HTML builders access a span's
 * children.
 */var domTree_Span=/*#__PURE__*/function(){function Span(classes,children,options,style){this.children=void 0;this.attributes=void 0;this.classes=void 0;this.height=void 0;this.depth=void 0;this.width=void 0;this.maxFontSize=void 0;this.style=void 0;initNode.call(this,classes,options,style);this.children=children||[];}/**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */var _proto=Span.prototype;_proto.setAttribute=function setAttribute(attribute,value){this.attributes[attribute]=value;};_proto.hasClass=function hasClass(className){return utils.contains(this.classes,className);};_proto.toNode=function toNode(){return _toNode.call(this,"span");};_proto.toMarkup=function toMarkup(){return _toMarkup.call(this,"span");};return Span;}();/**
 * This node represents an anchor (<a>) element with a hyperlink.  See `span`
 * for further details.
 */var domTree_Anchor=/*#__PURE__*/function(){function Anchor(href,classes,children,options){this.children=void 0;this.attributes=void 0;this.classes=void 0;this.height=void 0;this.depth=void 0;this.maxFontSize=void 0;this.style=void 0;initNode.call(this,classes,options);this.children=children||[];this.setAttribute('href',href);}var _proto2=Anchor.prototype;_proto2.setAttribute=function setAttribute(attribute,value){this.attributes[attribute]=value;};_proto2.hasClass=function hasClass(className){return utils.contains(this.classes,className);};_proto2.toNode=function toNode(){return _toNode.call(this,"a");};_proto2.toMarkup=function toMarkup(){return _toMarkup.call(this,"a");};return Anchor;}();/**
 * This node represents an image embed (<img>) element.
 */var domTree_Img=/*#__PURE__*/function(){function Img(src,alt,style){this.src=void 0;this.alt=void 0;this.classes=void 0;this.height=void 0;this.depth=void 0;this.maxFontSize=void 0;this.style=void 0;this.alt=alt;this.src=src;this.classes=["mord"];this.style=style;}var _proto3=Img.prototype;_proto3.hasClass=function hasClass(className){return utils.contains(this.classes,className);};_proto3.toNode=function toNode(){var node=document.createElement("img");node.src=this.src;node.alt=this.alt;node.className="mord";// Apply inline styles
for(var style in this.style){if(this.style.hasOwnProperty(style)){// $FlowFixMe
node.style[style]=this.style[style];}}return node;};_proto3.toMarkup=function toMarkup(){var markup="<img  src='"+this.src+" 'alt='"+this.alt+"' ";// Add the styles, after hyphenation
var styles="";for(var style in this.style){if(this.style.hasOwnProperty(style)){styles+=utils.hyphenate(style)+":"+this.style[style]+";";}}if(styles){markup+=" style=\""+utils.escape(styles)+"\"";}markup+="'/>";return markup;};return Img;}();var iCombinations={'î':"\u0131\u0302",'ï':"\u0131\u0308",'í':"\u0131\u0301",// 'ī': '\u0131\u0304', // enable when we add Extended Latin
'ì':"\u0131\u0300"};/**
 * A symbol node contains information about a single symbol. It either renders
 * to a single text node, or a span with a single text node in it, depending on
 * whether it has CSS classes, styles, or needs italic correction.
 */var domTree_SymbolNode=/*#__PURE__*/function(){function SymbolNode(text,height,depth,italic,skew,width,classes,style){this.text=void 0;this.height=void 0;this.depth=void 0;this.italic=void 0;this.skew=void 0;this.width=void 0;this.maxFontSize=void 0;this.classes=void 0;this.style=void 0;this.text=text;this.height=height||0;this.depth=depth||0;this.italic=italic||0;this.skew=skew||0;this.width=width||0;this.classes=classes||[];this.style=style||{};this.maxFontSize=0;// Mark text from non-Latin scripts with specific classes so that we
// can specify which fonts to use.  This allows us to render these
// characters with a serif font in situations where the browser would
// either default to a sans serif or render a placeholder character.
// We use CSS class names like cjk_fallback, hangul_fallback and
// brahmic_fallback. See ./unicodeScripts.js for the set of possible
// script names
var script=scriptFromCodepoint(this.text.charCodeAt(0));if(script){this.classes.push(script+"_fallback");}if(/[îïíì]/.test(this.text)){// add ī when we add Extended Latin
this.text=iCombinations[this.text];}}var _proto4=SymbolNode.prototype;_proto4.hasClass=function hasClass(className){return utils.contains(this.classes,className);}/**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */;_proto4.toNode=function toNode(){var node=document.createTextNode(this.text);var span=null;if(this.italic>0){span=document.createElement("span");span.style.marginRight=this.italic+"em";}if(this.classes.length>0){span=span||document.createElement("span");span.className=createClass(this.classes);}for(var style in this.style){if(this.style.hasOwnProperty(style)){span=span||document.createElement("span");// $FlowFixMe Flow doesn't seem to understand span.style's type.
span.style[style]=this.style[style];}}if(span){span.appendChild(node);return span;}else {return node;}}/**
   * Creates markup for a symbol node.
   */;_proto4.toMarkup=function toMarkup(){// TODO(alpert): More duplication than I'd like from
// span.prototype.toMarkup and symbolNode.prototype.toNode...
var needsSpan=false;var markup="<span";if(this.classes.length){needsSpan=true;markup+=" class=\"";markup+=utils.escape(createClass(this.classes));markup+="\"";}var styles="";if(this.italic>0){styles+="margin-right:"+this.italic+"em;";}for(var style in this.style){if(this.style.hasOwnProperty(style)){styles+=utils.hyphenate(style)+":"+this.style[style]+";";}}if(styles){needsSpan=true;markup+=" style=\""+utils.escape(styles)+"\"";}var escaped=utils.escape(this.text);if(needsSpan){markup+=">";markup+=escaped;markup+="</span>";return markup;}else {return escaped;}};return SymbolNode;}();/**
 * SVG nodes are used to render stretchy wide elements.
 */var SvgNode=/*#__PURE__*/function(){function SvgNode(children,attributes){this.children=void 0;this.attributes=void 0;this.children=children||[];this.attributes=attributes||{};}var _proto5=SvgNode.prototype;_proto5.toNode=function toNode(){var svgNS="http://www.w3.org/2000/svg";var node=document.createElementNS(svgNS,"svg");// Apply attributes
for(var attr in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,attr)){node.setAttribute(attr,this.attributes[attr]);}}for(var i=0;i<this.children.length;i++){node.appendChild(this.children[i].toNode());}return node;};_proto5.toMarkup=function toMarkup(){var markup="<svg";// Apply attributes
for(var attr in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,attr)){markup+=" "+attr+"='"+this.attributes[attr]+"'";}}markup+=">";for(var i=0;i<this.children.length;i++){markup+=this.children[i].toMarkup();}markup+="</svg>";return markup;};return SvgNode;}();var domTree_PathNode=/*#__PURE__*/function(){function PathNode(pathName,alternate){this.pathName=void 0;this.alternate=void 0;this.pathName=pathName;this.alternate=alternate;// Used only for \sqrt
}var _proto6=PathNode.prototype;_proto6.toNode=function toNode(){var svgNS="http://www.w3.org/2000/svg";var node=document.createElementNS(svgNS,"path");if(this.alternate){node.setAttribute("d",this.alternate);}else {node.setAttribute("d",svgGeometry_path[this.pathName]);}return node;};_proto6.toMarkup=function toMarkup(){if(this.alternate){return "<path d='"+this.alternate+"'/>";}else {return "<path d='"+svgGeometry_path[this.pathName]+"'/>";}};return PathNode;}();var LineNode=/*#__PURE__*/function(){function LineNode(attributes){this.attributes=void 0;this.attributes=attributes||{};}var _proto7=LineNode.prototype;_proto7.toNode=function toNode(){var svgNS="http://www.w3.org/2000/svg";var node=document.createElementNS(svgNS,"line");// Apply attributes
for(var attr in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,attr)){node.setAttribute(attr,this.attributes[attr]);}}return node;};_proto7.toMarkup=function toMarkup(){var markup="<line";for(var attr in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,attr)){markup+=" "+attr+"='"+this.attributes[attr]+"'";}}markup+="/>";return markup;};return LineNode;}();function assertSymbolDomNode(group){if(group instanceof domTree_SymbolNode){return group;}else {throw new Error("Expected symbolNode but got "+String(group)+".");}}function assertSpan(group){if(group instanceof domTree_Span){return group;}else {throw new Error("Expected span<HtmlDomNode> but got "+String(group)+".");}}// CONCATENATED MODULE: ./submodules/katex-fonts/fontMetricsData.js
// This file is GENERATED by buildMetrics.sh. DO NOT MODIFY.
/* harmony default export */var fontMetricsData={"AMS-Regular":{"32":[0,0,0,0,0.25],"65":[0,0.68889,0,0,0.72222],"66":[0,0.68889,0,0,0.66667],"67":[0,0.68889,0,0,0.72222],"68":[0,0.68889,0,0,0.72222],"69":[0,0.68889,0,0,0.66667],"70":[0,0.68889,0,0,0.61111],"71":[0,0.68889,0,0,0.77778],"72":[0,0.68889,0,0,0.77778],"73":[0,0.68889,0,0,0.38889],"74":[0.16667,0.68889,0,0,0.5],"75":[0,0.68889,0,0,0.77778],"76":[0,0.68889,0,0,0.66667],"77":[0,0.68889,0,0,0.94445],"78":[0,0.68889,0,0,0.72222],"79":[0.16667,0.68889,0,0,0.77778],"80":[0,0.68889,0,0,0.61111],"81":[0.16667,0.68889,0,0,0.77778],"82":[0,0.68889,0,0,0.72222],"83":[0,0.68889,0,0,0.55556],"84":[0,0.68889,0,0,0.66667],"85":[0,0.68889,0,0,0.72222],"86":[0,0.68889,0,0,0.72222],"87":[0,0.68889,0,0,1.0],"88":[0,0.68889,0,0,0.72222],"89":[0,0.68889,0,0,0.72222],"90":[0,0.68889,0,0,0.66667],"107":[0,0.68889,0,0,0.55556],"160":[0,0,0,0,0.25],"165":[0,0.675,0.025,0,0.75],"174":[0.15559,0.69224,0,0,0.94666],"240":[0,0.68889,0,0,0.55556],"295":[0,0.68889,0,0,0.54028],"710":[0,0.825,0,0,2.33334],"732":[0,0.9,0,0,2.33334],"770":[0,0.825,0,0,2.33334],"771":[0,0.9,0,0,2.33334],"989":[0.08167,0.58167,0,0,0.77778],"1008":[0,0.43056,0.04028,0,0.66667],"8245":[0,0.54986,0,0,0.275],"8463":[0,0.68889,0,0,0.54028],"8487":[0,0.68889,0,0,0.72222],"8498":[0,0.68889,0,0,0.55556],"8502":[0,0.68889,0,0,0.66667],"8503":[0,0.68889,0,0,0.44445],"8504":[0,0.68889,0,0,0.66667],"8513":[0,0.68889,0,0,0.63889],"8592":[-0.03598,0.46402,0,0,0.5],"8594":[-0.03598,0.46402,0,0,0.5],"8602":[-0.13313,0.36687,0,0,1.0],"8603":[-0.13313,0.36687,0,0,1.0],"8606":[0.01354,0.52239,0,0,1.0],"8608":[0.01354,0.52239,0,0,1.0],"8610":[0.01354,0.52239,0,0,1.11111],"8611":[0.01354,0.52239,0,0,1.11111],"8619":[0,0.54986,0,0,1.0],"8620":[0,0.54986,0,0,1.0],"8621":[-0.13313,0.37788,0,0,1.38889],"8622":[-0.13313,0.36687,0,0,1.0],"8624":[0,0.69224,0,0,0.5],"8625":[0,0.69224,0,0,0.5],"8630":[0,0.43056,0,0,1.0],"8631":[0,0.43056,0,0,1.0],"8634":[0.08198,0.58198,0,0,0.77778],"8635":[0.08198,0.58198,0,0,0.77778],"8638":[0.19444,0.69224,0,0,0.41667],"8639":[0.19444,0.69224,0,0,0.41667],"8642":[0.19444,0.69224,0,0,0.41667],"8643":[0.19444,0.69224,0,0,0.41667],"8644":[0.1808,0.675,0,0,1.0],"8646":[0.1808,0.675,0,0,1.0],"8647":[0.1808,0.675,0,0,1.0],"8648":[0.19444,0.69224,0,0,0.83334],"8649":[0.1808,0.675,0,0,1.0],"8650":[0.19444,0.69224,0,0,0.83334],"8651":[0.01354,0.52239,0,0,1.0],"8652":[0.01354,0.52239,0,0,1.0],"8653":[-0.13313,0.36687,0,0,1.0],"8654":[-0.13313,0.36687,0,0,1.0],"8655":[-0.13313,0.36687,0,0,1.0],"8666":[0.13667,0.63667,0,0,1.0],"8667":[0.13667,0.63667,0,0,1.0],"8669":[-0.13313,0.37788,0,0,1.0],"8672":[-0.064,0.437,0,0,1.334],"8674":[-0.064,0.437,0,0,1.334],"8705":[0,0.825,0,0,0.5],"8708":[0,0.68889,0,0,0.55556],"8709":[0.08167,0.58167,0,0,0.77778],"8717":[0,0.43056,0,0,0.42917],"8722":[-0.03598,0.46402,0,0,0.5],"8724":[0.08198,0.69224,0,0,0.77778],"8726":[0.08167,0.58167,0,0,0.77778],"8733":[0,0.69224,0,0,0.77778],"8736":[0,0.69224,0,0,0.72222],"8737":[0,0.69224,0,0,0.72222],"8738":[0.03517,0.52239,0,0,0.72222],"8739":[0.08167,0.58167,0,0,0.22222],"8740":[0.25142,0.74111,0,0,0.27778],"8741":[0.08167,0.58167,0,0,0.38889],"8742":[0.25142,0.74111,0,0,0.5],"8756":[0,0.69224,0,0,0.66667],"8757":[0,0.69224,0,0,0.66667],"8764":[-0.13313,0.36687,0,0,0.77778],"8765":[-0.13313,0.37788,0,0,0.77778],"8769":[-0.13313,0.36687,0,0,0.77778],"8770":[-0.03625,0.46375,0,0,0.77778],"8774":[0.30274,0.79383,0,0,0.77778],"8776":[-0.01688,0.48312,0,0,0.77778],"8778":[0.08167,0.58167,0,0,0.77778],"8782":[0.06062,0.54986,0,0,0.77778],"8783":[0.06062,0.54986,0,0,0.77778],"8785":[0.08198,0.58198,0,0,0.77778],"8786":[0.08198,0.58198,0,0,0.77778],"8787":[0.08198,0.58198,0,0,0.77778],"8790":[0,0.69224,0,0,0.77778],"8791":[0.22958,0.72958,0,0,0.77778],"8796":[0.08198,0.91667,0,0,0.77778],"8806":[0.25583,0.75583,0,0,0.77778],"8807":[0.25583,0.75583,0,0,0.77778],"8808":[0.25142,0.75726,0,0,0.77778],"8809":[0.25142,0.75726,0,0,0.77778],"8812":[0.25583,0.75583,0,0,0.5],"8814":[0.20576,0.70576,0,0,0.77778],"8815":[0.20576,0.70576,0,0,0.77778],"8816":[0.30274,0.79383,0,0,0.77778],"8817":[0.30274,0.79383,0,0,0.77778],"8818":[0.22958,0.72958,0,0,0.77778],"8819":[0.22958,0.72958,0,0,0.77778],"8822":[0.1808,0.675,0,0,0.77778],"8823":[0.1808,0.675,0,0,0.77778],"8828":[0.13667,0.63667,0,0,0.77778],"8829":[0.13667,0.63667,0,0,0.77778],"8830":[0.22958,0.72958,0,0,0.77778],"8831":[0.22958,0.72958,0,0,0.77778],"8832":[0.20576,0.70576,0,0,0.77778],"8833":[0.20576,0.70576,0,0,0.77778],"8840":[0.30274,0.79383,0,0,0.77778],"8841":[0.30274,0.79383,0,0,0.77778],"8842":[0.13597,0.63597,0,0,0.77778],"8843":[0.13597,0.63597,0,0,0.77778],"8847":[0.03517,0.54986,0,0,0.77778],"8848":[0.03517,0.54986,0,0,0.77778],"8858":[0.08198,0.58198,0,0,0.77778],"8859":[0.08198,0.58198,0,0,0.77778],"8861":[0.08198,0.58198,0,0,0.77778],"8862":[0,0.675,0,0,0.77778],"8863":[0,0.675,0,0,0.77778],"8864":[0,0.675,0,0,0.77778],"8865":[0,0.675,0,0,0.77778],"8872":[0,0.69224,0,0,0.61111],"8873":[0,0.69224,0,0,0.72222],"8874":[0,0.69224,0,0,0.88889],"8876":[0,0.68889,0,0,0.61111],"8877":[0,0.68889,0,0,0.61111],"8878":[0,0.68889,0,0,0.72222],"8879":[0,0.68889,0,0,0.72222],"8882":[0.03517,0.54986,0,0,0.77778],"8883":[0.03517,0.54986,0,0,0.77778],"8884":[0.13667,0.63667,0,0,0.77778],"8885":[0.13667,0.63667,0,0,0.77778],"8888":[0,0.54986,0,0,1.11111],"8890":[0.19444,0.43056,0,0,0.55556],"8891":[0.19444,0.69224,0,0,0.61111],"8892":[0.19444,0.69224,0,0,0.61111],"8901":[0,0.54986,0,0,0.27778],"8903":[0.08167,0.58167,0,0,0.77778],"8905":[0.08167,0.58167,0,0,0.77778],"8906":[0.08167,0.58167,0,0,0.77778],"8907":[0,0.69224,0,0,0.77778],"8908":[0,0.69224,0,0,0.77778],"8909":[-0.03598,0.46402,0,0,0.77778],"8910":[0,0.54986,0,0,0.76042],"8911":[0,0.54986,0,0,0.76042],"8912":[0.03517,0.54986,0,0,0.77778],"8913":[0.03517,0.54986,0,0,0.77778],"8914":[0,0.54986,0,0,0.66667],"8915":[0,0.54986,0,0,0.66667],"8916":[0,0.69224,0,0,0.66667],"8918":[0.0391,0.5391,0,0,0.77778],"8919":[0.0391,0.5391,0,0,0.77778],"8920":[0.03517,0.54986,0,0,1.33334],"8921":[0.03517,0.54986,0,0,1.33334],"8922":[0.38569,0.88569,0,0,0.77778],"8923":[0.38569,0.88569,0,0,0.77778],"8926":[0.13667,0.63667,0,0,0.77778],"8927":[0.13667,0.63667,0,0,0.77778],"8928":[0.30274,0.79383,0,0,0.77778],"8929":[0.30274,0.79383,0,0,0.77778],"8934":[0.23222,0.74111,0,0,0.77778],"8935":[0.23222,0.74111,0,0,0.77778],"8936":[0.23222,0.74111,0,0,0.77778],"8937":[0.23222,0.74111,0,0,0.77778],"8938":[0.20576,0.70576,0,0,0.77778],"8939":[0.20576,0.70576,0,0,0.77778],"8940":[0.30274,0.79383,0,0,0.77778],"8941":[0.30274,0.79383,0,0,0.77778],"8994":[0.19444,0.69224,0,0,0.77778],"8995":[0.19444,0.69224,0,0,0.77778],"9416":[0.15559,0.69224,0,0,0.90222],"9484":[0,0.69224,0,0,0.5],"9488":[0,0.69224,0,0,0.5],"9492":[0,0.37788,0,0,0.5],"9496":[0,0.37788,0,0,0.5],"9585":[0.19444,0.68889,0,0,0.88889],"9586":[0.19444,0.74111,0,0,0.88889],"9632":[0,0.675,0,0,0.77778],"9633":[0,0.675,0,0,0.77778],"9650":[0,0.54986,0,0,0.72222],"9651":[0,0.54986,0,0,0.72222],"9654":[0.03517,0.54986,0,0,0.77778],"9660":[0,0.54986,0,0,0.72222],"9661":[0,0.54986,0,0,0.72222],"9664":[0.03517,0.54986,0,0,0.77778],"9674":[0.11111,0.69224,0,0,0.66667],"9733":[0.19444,0.69224,0,0,0.94445],"10003":[0,0.69224,0,0,0.83334],"10016":[0,0.69224,0,0,0.83334],"10731":[0.11111,0.69224,0,0,0.66667],"10846":[0.19444,0.75583,0,0,0.61111],"10877":[0.13667,0.63667,0,0,0.77778],"10878":[0.13667,0.63667,0,0,0.77778],"10885":[0.25583,0.75583,0,0,0.77778],"10886":[0.25583,0.75583,0,0,0.77778],"10887":[0.13597,0.63597,0,0,0.77778],"10888":[0.13597,0.63597,0,0,0.77778],"10889":[0.26167,0.75726,0,0,0.77778],"10890":[0.26167,0.75726,0,0,0.77778],"10891":[0.48256,0.98256,0,0,0.77778],"10892":[0.48256,0.98256,0,0,0.77778],"10901":[0.13667,0.63667,0,0,0.77778],"10902":[0.13667,0.63667,0,0,0.77778],"10933":[0.25142,0.75726,0,0,0.77778],"10934":[0.25142,0.75726,0,0,0.77778],"10935":[0.26167,0.75726,0,0,0.77778],"10936":[0.26167,0.75726,0,0,0.77778],"10937":[0.26167,0.75726,0,0,0.77778],"10938":[0.26167,0.75726,0,0,0.77778],"10949":[0.25583,0.75583,0,0,0.77778],"10950":[0.25583,0.75583,0,0,0.77778],"10955":[0.28481,0.79383,0,0,0.77778],"10956":[0.28481,0.79383,0,0,0.77778],"57350":[0.08167,0.58167,0,0,0.22222],"57351":[0.08167,0.58167,0,0,0.38889],"57352":[0.08167,0.58167,0,0,0.77778],"57353":[0,0.43056,0.04028,0,0.66667],"57356":[0.25142,0.75726,0,0,0.77778],"57357":[0.25142,0.75726,0,0,0.77778],"57358":[0.41951,0.91951,0,0,0.77778],"57359":[0.30274,0.79383,0,0,0.77778],"57360":[0.30274,0.79383,0,0,0.77778],"57361":[0.41951,0.91951,0,0,0.77778],"57366":[0.25142,0.75726,0,0,0.77778],"57367":[0.25142,0.75726,0,0,0.77778],"57368":[0.25142,0.75726,0,0,0.77778],"57369":[0.25142,0.75726,0,0,0.77778],"57370":[0.13597,0.63597,0,0,0.77778],"57371":[0.13597,0.63597,0,0,0.77778]},"Caligraphic-Regular":{"32":[0,0,0,0,0.25],"65":[0,0.68333,0,0.19445,0.79847],"66":[0,0.68333,0.03041,0.13889,0.65681],"67":[0,0.68333,0.05834,0.13889,0.52653],"68":[0,0.68333,0.02778,0.08334,0.77139],"69":[0,0.68333,0.08944,0.11111,0.52778],"70":[0,0.68333,0.09931,0.11111,0.71875],"71":[0.09722,0.68333,0.0593,0.11111,0.59487],"72":[0,0.68333,0.00965,0.11111,0.84452],"73":[0,0.68333,0.07382,0,0.54452],"74":[0.09722,0.68333,0.18472,0.16667,0.67778],"75":[0,0.68333,0.01445,0.05556,0.76195],"76":[0,0.68333,0,0.13889,0.68972],"77":[0,0.68333,0,0.13889,1.2009],"78":[0,0.68333,0.14736,0.08334,0.82049],"79":[0,0.68333,0.02778,0.11111,0.79611],"80":[0,0.68333,0.08222,0.08334,0.69556],"81":[0.09722,0.68333,0,0.11111,0.81667],"82":[0,0.68333,0,0.08334,0.8475],"83":[0,0.68333,0.075,0.13889,0.60556],"84":[0,0.68333,0.25417,0,0.54464],"85":[0,0.68333,0.09931,0.08334,0.62583],"86":[0,0.68333,0.08222,0,0.61278],"87":[0,0.68333,0.08222,0.08334,0.98778],"88":[0,0.68333,0.14643,0.13889,0.7133],"89":[0.09722,0.68333,0.08222,0.08334,0.66834],"90":[0,0.68333,0.07944,0.13889,0.72473],"160":[0,0,0,0,0.25]},"Fraktur-Regular":{"32":[0,0,0,0,0.25],"33":[0,0.69141,0,0,0.29574],"34":[0,0.69141,0,0,0.21471],"38":[0,0.69141,0,0,0.73786],"39":[0,0.69141,0,0,0.21201],"40":[0.24982,0.74947,0,0,0.38865],"41":[0.24982,0.74947,0,0,0.38865],"42":[0,0.62119,0,0,0.27764],"43":[0.08319,0.58283,0,0,0.75623],"44":[0,0.10803,0,0,0.27764],"45":[0.08319,0.58283,0,0,0.75623],"46":[0,0.10803,0,0,0.27764],"47":[0.24982,0.74947,0,0,0.50181],"48":[0,0.47534,0,0,0.50181],"49":[0,0.47534,0,0,0.50181],"50":[0,0.47534,0,0,0.50181],"51":[0.18906,0.47534,0,0,0.50181],"52":[0.18906,0.47534,0,0,0.50181],"53":[0.18906,0.47534,0,0,0.50181],"54":[0,0.69141,0,0,0.50181],"55":[0.18906,0.47534,0,0,0.50181],"56":[0,0.69141,0,0,0.50181],"57":[0.18906,0.47534,0,0,0.50181],"58":[0,0.47534,0,0,0.21606],"59":[0.12604,0.47534,0,0,0.21606],"61":[-0.13099,0.36866,0,0,0.75623],"63":[0,0.69141,0,0,0.36245],"65":[0,0.69141,0,0,0.7176],"66":[0,0.69141,0,0,0.88397],"67":[0,0.69141,0,0,0.61254],"68":[0,0.69141,0,0,0.83158],"69":[0,0.69141,0,0,0.66278],"70":[0.12604,0.69141,0,0,0.61119],"71":[0,0.69141,0,0,0.78539],"72":[0.06302,0.69141,0,0,0.7203],"73":[0,0.69141,0,0,0.55448],"74":[0.12604,0.69141,0,0,0.55231],"75":[0,0.69141,0,0,0.66845],"76":[0,0.69141,0,0,0.66602],"77":[0,0.69141,0,0,1.04953],"78":[0,0.69141,0,0,0.83212],"79":[0,0.69141,0,0,0.82699],"80":[0.18906,0.69141,0,0,0.82753],"81":[0.03781,0.69141,0,0,0.82699],"82":[0,0.69141,0,0,0.82807],"83":[0,0.69141,0,0,0.82861],"84":[0,0.69141,0,0,0.66899],"85":[0,0.69141,0,0,0.64576],"86":[0,0.69141,0,0,0.83131],"87":[0,0.69141,0,0,1.04602],"88":[0,0.69141,0,0,0.71922],"89":[0.18906,0.69141,0,0,0.83293],"90":[0.12604,0.69141,0,0,0.60201],"91":[0.24982,0.74947,0,0,0.27764],"93":[0.24982,0.74947,0,0,0.27764],"94":[0,0.69141,0,0,0.49965],"97":[0,0.47534,0,0,0.50046],"98":[0,0.69141,0,0,0.51315],"99":[0,0.47534,0,0,0.38946],"100":[0,0.62119,0,0,0.49857],"101":[0,0.47534,0,0,0.40053],"102":[0.18906,0.69141,0,0,0.32626],"103":[0.18906,0.47534,0,0,0.5037],"104":[0.18906,0.69141,0,0,0.52126],"105":[0,0.69141,0,0,0.27899],"106":[0,0.69141,0,0,0.28088],"107":[0,0.69141,0,0,0.38946],"108":[0,0.69141,0,0,0.27953],"109":[0,0.47534,0,0,0.76676],"110":[0,0.47534,0,0,0.52666],"111":[0,0.47534,0,0,0.48885],"112":[0.18906,0.52396,0,0,0.50046],"113":[0.18906,0.47534,0,0,0.48912],"114":[0,0.47534,0,0,0.38919],"115":[0,0.47534,0,0,0.44266],"116":[0,0.62119,0,0,0.33301],"117":[0,0.47534,0,0,0.5172],"118":[0,0.52396,0,0,0.5118],"119":[0,0.52396,0,0,0.77351],"120":[0.18906,0.47534,0,0,0.38865],"121":[0.18906,0.47534,0,0,0.49884],"122":[0.18906,0.47534,0,0,0.39054],"160":[0,0,0,0,0.25],"8216":[0,0.69141,0,0,0.21471],"8217":[0,0.69141,0,0,0.21471],"58112":[0,0.62119,0,0,0.49749],"58113":[0,0.62119,0,0,0.4983],"58114":[0.18906,0.69141,0,0,0.33328],"58115":[0.18906,0.69141,0,0,0.32923],"58116":[0.18906,0.47534,0,0,0.50343],"58117":[0,0.69141,0,0,0.33301],"58118":[0,0.62119,0,0,0.33409],"58119":[0,0.47534,0,0,0.50073]},"Main-Bold":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0,0,0.35],"34":[0,0.69444,0,0,0.60278],"35":[0.19444,0.69444,0,0,0.95833],"36":[0.05556,0.75,0,0,0.575],"37":[0.05556,0.75,0,0,0.95833],"38":[0,0.69444,0,0,0.89444],"39":[0,0.69444,0,0,0.31944],"40":[0.25,0.75,0,0,0.44722],"41":[0.25,0.75,0,0,0.44722],"42":[0,0.75,0,0,0.575],"43":[0.13333,0.63333,0,0,0.89444],"44":[0.19444,0.15556,0,0,0.31944],"45":[0,0.44444,0,0,0.38333],"46":[0,0.15556,0,0,0.31944],"47":[0.25,0.75,0,0,0.575],"48":[0,0.64444,0,0,0.575],"49":[0,0.64444,0,0,0.575],"50":[0,0.64444,0,0,0.575],"51":[0,0.64444,0,0,0.575],"52":[0,0.64444,0,0,0.575],"53":[0,0.64444,0,0,0.575],"54":[0,0.64444,0,0,0.575],"55":[0,0.64444,0,0,0.575],"56":[0,0.64444,0,0,0.575],"57":[0,0.64444,0,0,0.575],"58":[0,0.44444,0,0,0.31944],"59":[0.19444,0.44444,0,0,0.31944],"60":[0.08556,0.58556,0,0,0.89444],"61":[-0.10889,0.39111,0,0,0.89444],"62":[0.08556,0.58556,0,0,0.89444],"63":[0,0.69444,0,0,0.54305],"64":[0,0.69444,0,0,0.89444],"65":[0,0.68611,0,0,0.86944],"66":[0,0.68611,0,0,0.81805],"67":[0,0.68611,0,0,0.83055],"68":[0,0.68611,0,0,0.88194],"69":[0,0.68611,0,0,0.75555],"70":[0,0.68611,0,0,0.72361],"71":[0,0.68611,0,0,0.90416],"72":[0,0.68611,0,0,0.9],"73":[0,0.68611,0,0,0.43611],"74":[0,0.68611,0,0,0.59444],"75":[0,0.68611,0,0,0.90138],"76":[0,0.68611,0,0,0.69166],"77":[0,0.68611,0,0,1.09166],"78":[0,0.68611,0,0,0.9],"79":[0,0.68611,0,0,0.86388],"80":[0,0.68611,0,0,0.78611],"81":[0.19444,0.68611,0,0,0.86388],"82":[0,0.68611,0,0,0.8625],"83":[0,0.68611,0,0,0.63889],"84":[0,0.68611,0,0,0.8],"85":[0,0.68611,0,0,0.88472],"86":[0,0.68611,0.01597,0,0.86944],"87":[0,0.68611,0.01597,0,1.18888],"88":[0,0.68611,0,0,0.86944],"89":[0,0.68611,0.02875,0,0.86944],"90":[0,0.68611,0,0,0.70277],"91":[0.25,0.75,0,0,0.31944],"92":[0.25,0.75,0,0,0.575],"93":[0.25,0.75,0,0,0.31944],"94":[0,0.69444,0,0,0.575],"95":[0.31,0.13444,0.03194,0,0.575],"97":[0,0.44444,0,0,0.55902],"98":[0,0.69444,0,0,0.63889],"99":[0,0.44444,0,0,0.51111],"100":[0,0.69444,0,0,0.63889],"101":[0,0.44444,0,0,0.52708],"102":[0,0.69444,0.10903,0,0.35139],"103":[0.19444,0.44444,0.01597,0,0.575],"104":[0,0.69444,0,0,0.63889],"105":[0,0.69444,0,0,0.31944],"106":[0.19444,0.69444,0,0,0.35139],"107":[0,0.69444,0,0,0.60694],"108":[0,0.69444,0,0,0.31944],"109":[0,0.44444,0,0,0.95833],"110":[0,0.44444,0,0,0.63889],"111":[0,0.44444,0,0,0.575],"112":[0.19444,0.44444,0,0,0.63889],"113":[0.19444,0.44444,0,0,0.60694],"114":[0,0.44444,0,0,0.47361],"115":[0,0.44444,0,0,0.45361],"116":[0,0.63492,0,0,0.44722],"117":[0,0.44444,0,0,0.63889],"118":[0,0.44444,0.01597,0,0.60694],"119":[0,0.44444,0.01597,0,0.83055],"120":[0,0.44444,0,0,0.60694],"121":[0.19444,0.44444,0.01597,0,0.60694],"122":[0,0.44444,0,0,0.51111],"123":[0.25,0.75,0,0,0.575],"124":[0.25,0.75,0,0,0.31944],"125":[0.25,0.75,0,0,0.575],"126":[0.35,0.34444,0,0,0.575],"160":[0,0,0,0,0.25],"163":[0,0.69444,0,0,0.86853],"168":[0,0.69444,0,0,0.575],"172":[0,0.44444,0,0,0.76666],"176":[0,0.69444,0,0,0.86944],"177":[0.13333,0.63333,0,0,0.89444],"184":[0.17014,0,0,0,0.51111],"198":[0,0.68611,0,0,1.04166],"215":[0.13333,0.63333,0,0,0.89444],"216":[0.04861,0.73472,0,0,0.89444],"223":[0,0.69444,0,0,0.59722],"230":[0,0.44444,0,0,0.83055],"247":[0.13333,0.63333,0,0,0.89444],"248":[0.09722,0.54167,0,0,0.575],"305":[0,0.44444,0,0,0.31944],"338":[0,0.68611,0,0,1.16944],"339":[0,0.44444,0,0,0.89444],"567":[0.19444,0.44444,0,0,0.35139],"710":[0,0.69444,0,0,0.575],"711":[0,0.63194,0,0,0.575],"713":[0,0.59611,0,0,0.575],"714":[0,0.69444,0,0,0.575],"715":[0,0.69444,0,0,0.575],"728":[0,0.69444,0,0,0.575],"729":[0,0.69444,0,0,0.31944],"730":[0,0.69444,0,0,0.86944],"732":[0,0.69444,0,0,0.575],"733":[0,0.69444,0,0,0.575],"915":[0,0.68611,0,0,0.69166],"916":[0,0.68611,0,0,0.95833],"920":[0,0.68611,0,0,0.89444],"923":[0,0.68611,0,0,0.80555],"926":[0,0.68611,0,0,0.76666],"928":[0,0.68611,0,0,0.9],"931":[0,0.68611,0,0,0.83055],"933":[0,0.68611,0,0,0.89444],"934":[0,0.68611,0,0,0.83055],"936":[0,0.68611,0,0,0.89444],"937":[0,0.68611,0,0,0.83055],"8211":[0,0.44444,0.03194,0,0.575],"8212":[0,0.44444,0.03194,0,1.14999],"8216":[0,0.69444,0,0,0.31944],"8217":[0,0.69444,0,0,0.31944],"8220":[0,0.69444,0,0,0.60278],"8221":[0,0.69444,0,0,0.60278],"8224":[0.19444,0.69444,0,0,0.51111],"8225":[0.19444,0.69444,0,0,0.51111],"8242":[0,0.55556,0,0,0.34444],"8407":[0,0.72444,0.15486,0,0.575],"8463":[0,0.69444,0,0,0.66759],"8465":[0,0.69444,0,0,0.83055],"8467":[0,0.69444,0,0,0.47361],"8472":[0.19444,0.44444,0,0,0.74027],"8476":[0,0.69444,0,0,0.83055],"8501":[0,0.69444,0,0,0.70277],"8592":[-0.10889,0.39111,0,0,1.14999],"8593":[0.19444,0.69444,0,0,0.575],"8594":[-0.10889,0.39111,0,0,1.14999],"8595":[0.19444,0.69444,0,0,0.575],"8596":[-0.10889,0.39111,0,0,1.14999],"8597":[0.25,0.75,0,0,0.575],"8598":[0.19444,0.69444,0,0,1.14999],"8599":[0.19444,0.69444,0,0,1.14999],"8600":[0.19444,0.69444,0,0,1.14999],"8601":[0.19444,0.69444,0,0,1.14999],"8636":[-0.10889,0.39111,0,0,1.14999],"8637":[-0.10889,0.39111,0,0,1.14999],"8640":[-0.10889,0.39111,0,0,1.14999],"8641":[-0.10889,0.39111,0,0,1.14999],"8656":[-0.10889,0.39111,0,0,1.14999],"8657":[0.19444,0.69444,0,0,0.70277],"8658":[-0.10889,0.39111,0,0,1.14999],"8659":[0.19444,0.69444,0,0,0.70277],"8660":[-0.10889,0.39111,0,0,1.14999],"8661":[0.25,0.75,0,0,0.70277],"8704":[0,0.69444,0,0,0.63889],"8706":[0,0.69444,0.06389,0,0.62847],"8707":[0,0.69444,0,0,0.63889],"8709":[0.05556,0.75,0,0,0.575],"8711":[0,0.68611,0,0,0.95833],"8712":[0.08556,0.58556,0,0,0.76666],"8715":[0.08556,0.58556,0,0,0.76666],"8722":[0.13333,0.63333,0,0,0.89444],"8723":[0.13333,0.63333,0,0,0.89444],"8725":[0.25,0.75,0,0,0.575],"8726":[0.25,0.75,0,0,0.575],"8727":[-0.02778,0.47222,0,0,0.575],"8728":[-0.02639,0.47361,0,0,0.575],"8729":[-0.02639,0.47361,0,0,0.575],"8730":[0.18,0.82,0,0,0.95833],"8733":[0,0.44444,0,0,0.89444],"8734":[0,0.44444,0,0,1.14999],"8736":[0,0.69224,0,0,0.72222],"8739":[0.25,0.75,0,0,0.31944],"8741":[0.25,0.75,0,0,0.575],"8743":[0,0.55556,0,0,0.76666],"8744":[0,0.55556,0,0,0.76666],"8745":[0,0.55556,0,0,0.76666],"8746":[0,0.55556,0,0,0.76666],"8747":[0.19444,0.69444,0.12778,0,0.56875],"8764":[-0.10889,0.39111,0,0,0.89444],"8768":[0.19444,0.69444,0,0,0.31944],"8771":[0.00222,0.50222,0,0,0.89444],"8776":[0.02444,0.52444,0,0,0.89444],"8781":[0.00222,0.50222,0,0,0.89444],"8801":[0.00222,0.50222,0,0,0.89444],"8804":[0.19667,0.69667,0,0,0.89444],"8805":[0.19667,0.69667,0,0,0.89444],"8810":[0.08556,0.58556,0,0,1.14999],"8811":[0.08556,0.58556,0,0,1.14999],"8826":[0.08556,0.58556,0,0,0.89444],"8827":[0.08556,0.58556,0,0,0.89444],"8834":[0.08556,0.58556,0,0,0.89444],"8835":[0.08556,0.58556,0,0,0.89444],"8838":[0.19667,0.69667,0,0,0.89444],"8839":[0.19667,0.69667,0,0,0.89444],"8846":[0,0.55556,0,0,0.76666],"8849":[0.19667,0.69667,0,0,0.89444],"8850":[0.19667,0.69667,0,0,0.89444],"8851":[0,0.55556,0,0,0.76666],"8852":[0,0.55556,0,0,0.76666],"8853":[0.13333,0.63333,0,0,0.89444],"8854":[0.13333,0.63333,0,0,0.89444],"8855":[0.13333,0.63333,0,0,0.89444],"8856":[0.13333,0.63333,0,0,0.89444],"8857":[0.13333,0.63333,0,0,0.89444],"8866":[0,0.69444,0,0,0.70277],"8867":[0,0.69444,0,0,0.70277],"8868":[0,0.69444,0,0,0.89444],"8869":[0,0.69444,0,0,0.89444],"8900":[-0.02639,0.47361,0,0,0.575],"8901":[-0.02639,0.47361,0,0,0.31944],"8902":[-0.02778,0.47222,0,0,0.575],"8968":[0.25,0.75,0,0,0.51111],"8969":[0.25,0.75,0,0,0.51111],"8970":[0.25,0.75,0,0,0.51111],"8971":[0.25,0.75,0,0,0.51111],"8994":[-0.13889,0.36111,0,0,1.14999],"8995":[-0.13889,0.36111,0,0,1.14999],"9651":[0.19444,0.69444,0,0,1.02222],"9657":[-0.02778,0.47222,0,0,0.575],"9661":[0.19444,0.69444,0,0,1.02222],"9667":[-0.02778,0.47222,0,0,0.575],"9711":[0.19444,0.69444,0,0,1.14999],"9824":[0.12963,0.69444,0,0,0.89444],"9825":[0.12963,0.69444,0,0,0.89444],"9826":[0.12963,0.69444,0,0,0.89444],"9827":[0.12963,0.69444,0,0,0.89444],"9837":[0,0.75,0,0,0.44722],"9838":[0.19444,0.69444,0,0,0.44722],"9839":[0.19444,0.69444,0,0,0.44722],"10216":[0.25,0.75,0,0,0.44722],"10217":[0.25,0.75,0,0,0.44722],"10815":[0,0.68611,0,0,0.9],"10927":[0.19667,0.69667,0,0,0.89444],"10928":[0.19667,0.69667,0,0,0.89444],"57376":[0.19444,0.69444,0,0,0]},"Main-BoldItalic":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0.11417,0,0.38611],"34":[0,0.69444,0.07939,0,0.62055],"35":[0.19444,0.69444,0.06833,0,0.94444],"37":[0.05556,0.75,0.12861,0,0.94444],"38":[0,0.69444,0.08528,0,0.88555],"39":[0,0.69444,0.12945,0,0.35555],"40":[0.25,0.75,0.15806,0,0.47333],"41":[0.25,0.75,0.03306,0,0.47333],"42":[0,0.75,0.14333,0,0.59111],"43":[0.10333,0.60333,0.03306,0,0.88555],"44":[0.19444,0.14722,0,0,0.35555],"45":[0,0.44444,0.02611,0,0.41444],"46":[0,0.14722,0,0,0.35555],"47":[0.25,0.75,0.15806,0,0.59111],"48":[0,0.64444,0.13167,0,0.59111],"49":[0,0.64444,0.13167,0,0.59111],"50":[0,0.64444,0.13167,0,0.59111],"51":[0,0.64444,0.13167,0,0.59111],"52":[0.19444,0.64444,0.13167,0,0.59111],"53":[0,0.64444,0.13167,0,0.59111],"54":[0,0.64444,0.13167,0,0.59111],"55":[0.19444,0.64444,0.13167,0,0.59111],"56":[0,0.64444,0.13167,0,0.59111],"57":[0,0.64444,0.13167,0,0.59111],"58":[0,0.44444,0.06695,0,0.35555],"59":[0.19444,0.44444,0.06695,0,0.35555],"61":[-0.10889,0.39111,0.06833,0,0.88555],"63":[0,0.69444,0.11472,0,0.59111],"64":[0,0.69444,0.09208,0,0.88555],"65":[0,0.68611,0,0,0.86555],"66":[0,0.68611,0.0992,0,0.81666],"67":[0,0.68611,0.14208,0,0.82666],"68":[0,0.68611,0.09062,0,0.87555],"69":[0,0.68611,0.11431,0,0.75666],"70":[0,0.68611,0.12903,0,0.72722],"71":[0,0.68611,0.07347,0,0.89527],"72":[0,0.68611,0.17208,0,0.8961],"73":[0,0.68611,0.15681,0,0.47166],"74":[0,0.68611,0.145,0,0.61055],"75":[0,0.68611,0.14208,0,0.89499],"76":[0,0.68611,0,0,0.69777],"77":[0,0.68611,0.17208,0,1.07277],"78":[0,0.68611,0.17208,0,0.8961],"79":[0,0.68611,0.09062,0,0.85499],"80":[0,0.68611,0.0992,0,0.78721],"81":[0.19444,0.68611,0.09062,0,0.85499],"82":[0,0.68611,0.02559,0,0.85944],"83":[0,0.68611,0.11264,0,0.64999],"84":[0,0.68611,0.12903,0,0.7961],"85":[0,0.68611,0.17208,0,0.88083],"86":[0,0.68611,0.18625,0,0.86555],"87":[0,0.68611,0.18625,0,1.15999],"88":[0,0.68611,0.15681,0,0.86555],"89":[0,0.68611,0.19803,0,0.86555],"90":[0,0.68611,0.14208,0,0.70888],"91":[0.25,0.75,0.1875,0,0.35611],"93":[0.25,0.75,0.09972,0,0.35611],"94":[0,0.69444,0.06709,0,0.59111],"95":[0.31,0.13444,0.09811,0,0.59111],"97":[0,0.44444,0.09426,0,0.59111],"98":[0,0.69444,0.07861,0,0.53222],"99":[0,0.44444,0.05222,0,0.53222],"100":[0,0.69444,0.10861,0,0.59111],"101":[0,0.44444,0.085,0,0.53222],"102":[0.19444,0.69444,0.21778,0,0.4],"103":[0.19444,0.44444,0.105,0,0.53222],"104":[0,0.69444,0.09426,0,0.59111],"105":[0,0.69326,0.11387,0,0.35555],"106":[0.19444,0.69326,0.1672,0,0.35555],"107":[0,0.69444,0.11111,0,0.53222],"108":[0,0.69444,0.10861,0,0.29666],"109":[0,0.44444,0.09426,0,0.94444],"110":[0,0.44444,0.09426,0,0.64999],"111":[0,0.44444,0.07861,0,0.59111],"112":[0.19444,0.44444,0.07861,0,0.59111],"113":[0.19444,0.44444,0.105,0,0.53222],"114":[0,0.44444,0.11111,0,0.50167],"115":[0,0.44444,0.08167,0,0.48694],"116":[0,0.63492,0.09639,0,0.385],"117":[0,0.44444,0.09426,0,0.62055],"118":[0,0.44444,0.11111,0,0.53222],"119":[0,0.44444,0.11111,0,0.76777],"120":[0,0.44444,0.12583,0,0.56055],"121":[0.19444,0.44444,0.105,0,0.56166],"122":[0,0.44444,0.13889,0,0.49055],"126":[0.35,0.34444,0.11472,0,0.59111],"160":[0,0,0,0,0.25],"168":[0,0.69444,0.11473,0,0.59111],"176":[0,0.69444,0,0,0.94888],"184":[0.17014,0,0,0,0.53222],"198":[0,0.68611,0.11431,0,1.02277],"216":[0.04861,0.73472,0.09062,0,0.88555],"223":[0.19444,0.69444,0.09736,0,0.665],"230":[0,0.44444,0.085,0,0.82666],"248":[0.09722,0.54167,0.09458,0,0.59111],"305":[0,0.44444,0.09426,0,0.35555],"338":[0,0.68611,0.11431,0,1.14054],"339":[0,0.44444,0.085,0,0.82666],"567":[0.19444,0.44444,0.04611,0,0.385],"710":[0,0.69444,0.06709,0,0.59111],"711":[0,0.63194,0.08271,0,0.59111],"713":[0,0.59444,0.10444,0,0.59111],"714":[0,0.69444,0.08528,0,0.59111],"715":[0,0.69444,0,0,0.59111],"728":[0,0.69444,0.10333,0,0.59111],"729":[0,0.69444,0.12945,0,0.35555],"730":[0,0.69444,0,0,0.94888],"732":[0,0.69444,0.11472,0,0.59111],"733":[0,0.69444,0.11472,0,0.59111],"915":[0,0.68611,0.12903,0,0.69777],"916":[0,0.68611,0,0,0.94444],"920":[0,0.68611,0.09062,0,0.88555],"923":[0,0.68611,0,0,0.80666],"926":[0,0.68611,0.15092,0,0.76777],"928":[0,0.68611,0.17208,0,0.8961],"931":[0,0.68611,0.11431,0,0.82666],"933":[0,0.68611,0.10778,0,0.88555],"934":[0,0.68611,0.05632,0,0.82666],"936":[0,0.68611,0.10778,0,0.88555],"937":[0,0.68611,0.0992,0,0.82666],"8211":[0,0.44444,0.09811,0,0.59111],"8212":[0,0.44444,0.09811,0,1.18221],"8216":[0,0.69444,0.12945,0,0.35555],"8217":[0,0.69444,0.12945,0,0.35555],"8220":[0,0.69444,0.16772,0,0.62055],"8221":[0,0.69444,0.07939,0,0.62055]},"Main-Italic":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0.12417,0,0.30667],"34":[0,0.69444,0.06961,0,0.51444],"35":[0.19444,0.69444,0.06616,0,0.81777],"37":[0.05556,0.75,0.13639,0,0.81777],"38":[0,0.69444,0.09694,0,0.76666],"39":[0,0.69444,0.12417,0,0.30667],"40":[0.25,0.75,0.16194,0,0.40889],"41":[0.25,0.75,0.03694,0,0.40889],"42":[0,0.75,0.14917,0,0.51111],"43":[0.05667,0.56167,0.03694,0,0.76666],"44":[0.19444,0.10556,0,0,0.30667],"45":[0,0.43056,0.02826,0,0.35778],"46":[0,0.10556,0,0,0.30667],"47":[0.25,0.75,0.16194,0,0.51111],"48":[0,0.64444,0.13556,0,0.51111],"49":[0,0.64444,0.13556,0,0.51111],"50":[0,0.64444,0.13556,0,0.51111],"51":[0,0.64444,0.13556,0,0.51111],"52":[0.19444,0.64444,0.13556,0,0.51111],"53":[0,0.64444,0.13556,0,0.51111],"54":[0,0.64444,0.13556,0,0.51111],"55":[0.19444,0.64444,0.13556,0,0.51111],"56":[0,0.64444,0.13556,0,0.51111],"57":[0,0.64444,0.13556,0,0.51111],"58":[0,0.43056,0.0582,0,0.30667],"59":[0.19444,0.43056,0.0582,0,0.30667],"61":[-0.13313,0.36687,0.06616,0,0.76666],"63":[0,0.69444,0.1225,0,0.51111],"64":[0,0.69444,0.09597,0,0.76666],"65":[0,0.68333,0,0,0.74333],"66":[0,0.68333,0.10257,0,0.70389],"67":[0,0.68333,0.14528,0,0.71555],"68":[0,0.68333,0.09403,0,0.755],"69":[0,0.68333,0.12028,0,0.67833],"70":[0,0.68333,0.13305,0,0.65277],"71":[0,0.68333,0.08722,0,0.77361],"72":[0,0.68333,0.16389,0,0.74333],"73":[0,0.68333,0.15806,0,0.38555],"74":[0,0.68333,0.14028,0,0.525],"75":[0,0.68333,0.14528,0,0.76888],"76":[0,0.68333,0,0,0.62722],"77":[0,0.68333,0.16389,0,0.89666],"78":[0,0.68333,0.16389,0,0.74333],"79":[0,0.68333,0.09403,0,0.76666],"80":[0,0.68333,0.10257,0,0.67833],"81":[0.19444,0.68333,0.09403,0,0.76666],"82":[0,0.68333,0.03868,0,0.72944],"83":[0,0.68333,0.11972,0,0.56222],"84":[0,0.68333,0.13305,0,0.71555],"85":[0,0.68333,0.16389,0,0.74333],"86":[0,0.68333,0.18361,0,0.74333],"87":[0,0.68333,0.18361,0,0.99888],"88":[0,0.68333,0.15806,0,0.74333],"89":[0,0.68333,0.19383,0,0.74333],"90":[0,0.68333,0.14528,0,0.61333],"91":[0.25,0.75,0.1875,0,0.30667],"93":[0.25,0.75,0.10528,0,0.30667],"94":[0,0.69444,0.06646,0,0.51111],"95":[0.31,0.12056,0.09208,0,0.51111],"97":[0,0.43056,0.07671,0,0.51111],"98":[0,0.69444,0.06312,0,0.46],"99":[0,0.43056,0.05653,0,0.46],"100":[0,0.69444,0.10333,0,0.51111],"101":[0,0.43056,0.07514,0,0.46],"102":[0.19444,0.69444,0.21194,0,0.30667],"103":[0.19444,0.43056,0.08847,0,0.46],"104":[0,0.69444,0.07671,0,0.51111],"105":[0,0.65536,0.1019,0,0.30667],"106":[0.19444,0.65536,0.14467,0,0.30667],"107":[0,0.69444,0.10764,0,0.46],"108":[0,0.69444,0.10333,0,0.25555],"109":[0,0.43056,0.07671,0,0.81777],"110":[0,0.43056,0.07671,0,0.56222],"111":[0,0.43056,0.06312,0,0.51111],"112":[0.19444,0.43056,0.06312,0,0.51111],"113":[0.19444,0.43056,0.08847,0,0.46],"114":[0,0.43056,0.10764,0,0.42166],"115":[0,0.43056,0.08208,0,0.40889],"116":[0,0.61508,0.09486,0,0.33222],"117":[0,0.43056,0.07671,0,0.53666],"118":[0,0.43056,0.10764,0,0.46],"119":[0,0.43056,0.10764,0,0.66444],"120":[0,0.43056,0.12042,0,0.46389],"121":[0.19444,0.43056,0.08847,0,0.48555],"122":[0,0.43056,0.12292,0,0.40889],"126":[0.35,0.31786,0.11585,0,0.51111],"160":[0,0,0,0,0.25],"168":[0,0.66786,0.10474,0,0.51111],"176":[0,0.69444,0,0,0.83129],"184":[0.17014,0,0,0,0.46],"198":[0,0.68333,0.12028,0,0.88277],"216":[0.04861,0.73194,0.09403,0,0.76666],"223":[0.19444,0.69444,0.10514,0,0.53666],"230":[0,0.43056,0.07514,0,0.71555],"248":[0.09722,0.52778,0.09194,0,0.51111],"338":[0,0.68333,0.12028,0,0.98499],"339":[0,0.43056,0.07514,0,0.71555],"710":[0,0.69444,0.06646,0,0.51111],"711":[0,0.62847,0.08295,0,0.51111],"713":[0,0.56167,0.10333,0,0.51111],"714":[0,0.69444,0.09694,0,0.51111],"715":[0,0.69444,0,0,0.51111],"728":[0,0.69444,0.10806,0,0.51111],"729":[0,0.66786,0.11752,0,0.30667],"730":[0,0.69444,0,0,0.83129],"732":[0,0.66786,0.11585,0,0.51111],"733":[0,0.69444,0.1225,0,0.51111],"915":[0,0.68333,0.13305,0,0.62722],"916":[0,0.68333,0,0,0.81777],"920":[0,0.68333,0.09403,0,0.76666],"923":[0,0.68333,0,0,0.69222],"926":[0,0.68333,0.15294,0,0.66444],"928":[0,0.68333,0.16389,0,0.74333],"931":[0,0.68333,0.12028,0,0.71555],"933":[0,0.68333,0.11111,0,0.76666],"934":[0,0.68333,0.05986,0,0.71555],"936":[0,0.68333,0.11111,0,0.76666],"937":[0,0.68333,0.10257,0,0.71555],"8211":[0,0.43056,0.09208,0,0.51111],"8212":[0,0.43056,0.09208,0,1.02222],"8216":[0,0.69444,0.12417,0,0.30667],"8217":[0,0.69444,0.12417,0,0.30667],"8220":[0,0.69444,0.1685,0,0.51444],"8221":[0,0.69444,0.06961,0,0.51444],"8463":[0,0.68889,0,0,0.54028]},"Main-Regular":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0,0,0.27778],"34":[0,0.69444,0,0,0.5],"35":[0.19444,0.69444,0,0,0.83334],"36":[0.05556,0.75,0,0,0.5],"37":[0.05556,0.75,0,0,0.83334],"38":[0,0.69444,0,0,0.77778],"39":[0,0.69444,0,0,0.27778],"40":[0.25,0.75,0,0,0.38889],"41":[0.25,0.75,0,0,0.38889],"42":[0,0.75,0,0,0.5],"43":[0.08333,0.58333,0,0,0.77778],"44":[0.19444,0.10556,0,0,0.27778],"45":[0,0.43056,0,0,0.33333],"46":[0,0.10556,0,0,0.27778],"47":[0.25,0.75,0,0,0.5],"48":[0,0.64444,0,0,0.5],"49":[0,0.64444,0,0,0.5],"50":[0,0.64444,0,0,0.5],"51":[0,0.64444,0,0,0.5],"52":[0,0.64444,0,0,0.5],"53":[0,0.64444,0,0,0.5],"54":[0,0.64444,0,0,0.5],"55":[0,0.64444,0,0,0.5],"56":[0,0.64444,0,0,0.5],"57":[0,0.64444,0,0,0.5],"58":[0,0.43056,0,0,0.27778],"59":[0.19444,0.43056,0,0,0.27778],"60":[0.0391,0.5391,0,0,0.77778],"61":[-0.13313,0.36687,0,0,0.77778],"62":[0.0391,0.5391,0,0,0.77778],"63":[0,0.69444,0,0,0.47222],"64":[0,0.69444,0,0,0.77778],"65":[0,0.68333,0,0,0.75],"66":[0,0.68333,0,0,0.70834],"67":[0,0.68333,0,0,0.72222],"68":[0,0.68333,0,0,0.76389],"69":[0,0.68333,0,0,0.68056],"70":[0,0.68333,0,0,0.65278],"71":[0,0.68333,0,0,0.78472],"72":[0,0.68333,0,0,0.75],"73":[0,0.68333,0,0,0.36111],"74":[0,0.68333,0,0,0.51389],"75":[0,0.68333,0,0,0.77778],"76":[0,0.68333,0,0,0.625],"77":[0,0.68333,0,0,0.91667],"78":[0,0.68333,0,0,0.75],"79":[0,0.68333,0,0,0.77778],"80":[0,0.68333,0,0,0.68056],"81":[0.19444,0.68333,0,0,0.77778],"82":[0,0.68333,0,0,0.73611],"83":[0,0.68333,0,0,0.55556],"84":[0,0.68333,0,0,0.72222],"85":[0,0.68333,0,0,0.75],"86":[0,0.68333,0.01389,0,0.75],"87":[0,0.68333,0.01389,0,1.02778],"88":[0,0.68333,0,0,0.75],"89":[0,0.68333,0.025,0,0.75],"90":[0,0.68333,0,0,0.61111],"91":[0.25,0.75,0,0,0.27778],"92":[0.25,0.75,0,0,0.5],"93":[0.25,0.75,0,0,0.27778],"94":[0,0.69444,0,0,0.5],"95":[0.31,0.12056,0.02778,0,0.5],"97":[0,0.43056,0,0,0.5],"98":[0,0.69444,0,0,0.55556],"99":[0,0.43056,0,0,0.44445],"100":[0,0.69444,0,0,0.55556],"101":[0,0.43056,0,0,0.44445],"102":[0,0.69444,0.07778,0,0.30556],"103":[0.19444,0.43056,0.01389,0,0.5],"104":[0,0.69444,0,0,0.55556],"105":[0,0.66786,0,0,0.27778],"106":[0.19444,0.66786,0,0,0.30556],"107":[0,0.69444,0,0,0.52778],"108":[0,0.69444,0,0,0.27778],"109":[0,0.43056,0,0,0.83334],"110":[0,0.43056,0,0,0.55556],"111":[0,0.43056,0,0,0.5],"112":[0.19444,0.43056,0,0,0.55556],"113":[0.19444,0.43056,0,0,0.52778],"114":[0,0.43056,0,0,0.39167],"115":[0,0.43056,0,0,0.39445],"116":[0,0.61508,0,0,0.38889],"117":[0,0.43056,0,0,0.55556],"118":[0,0.43056,0.01389,0,0.52778],"119":[0,0.43056,0.01389,0,0.72222],"120":[0,0.43056,0,0,0.52778],"121":[0.19444,0.43056,0.01389,0,0.52778],"122":[0,0.43056,0,0,0.44445],"123":[0.25,0.75,0,0,0.5],"124":[0.25,0.75,0,0,0.27778],"125":[0.25,0.75,0,0,0.5],"126":[0.35,0.31786,0,0,0.5],"160":[0,0,0,0,0.25],"163":[0,0.69444,0,0,0.76909],"167":[0.19444,0.69444,0,0,0.44445],"168":[0,0.66786,0,0,0.5],"172":[0,0.43056,0,0,0.66667],"176":[0,0.69444,0,0,0.75],"177":[0.08333,0.58333,0,0,0.77778],"182":[0.19444,0.69444,0,0,0.61111],"184":[0.17014,0,0,0,0.44445],"198":[0,0.68333,0,0,0.90278],"215":[0.08333,0.58333,0,0,0.77778],"216":[0.04861,0.73194,0,0,0.77778],"223":[0,0.69444,0,0,0.5],"230":[0,0.43056,0,0,0.72222],"247":[0.08333,0.58333,0,0,0.77778],"248":[0.09722,0.52778,0,0,0.5],"305":[0,0.43056,0,0,0.27778],"338":[0,0.68333,0,0,1.01389],"339":[0,0.43056,0,0,0.77778],"567":[0.19444,0.43056,0,0,0.30556],"710":[0,0.69444,0,0,0.5],"711":[0,0.62847,0,0,0.5],"713":[0,0.56778,0,0,0.5],"714":[0,0.69444,0,0,0.5],"715":[0,0.69444,0,0,0.5],"728":[0,0.69444,0,0,0.5],"729":[0,0.66786,0,0,0.27778],"730":[0,0.69444,0,0,0.75],"732":[0,0.66786,0,0,0.5],"733":[0,0.69444,0,0,0.5],"915":[0,0.68333,0,0,0.625],"916":[0,0.68333,0,0,0.83334],"920":[0,0.68333,0,0,0.77778],"923":[0,0.68333,0,0,0.69445],"926":[0,0.68333,0,0,0.66667],"928":[0,0.68333,0,0,0.75],"931":[0,0.68333,0,0,0.72222],"933":[0,0.68333,0,0,0.77778],"934":[0,0.68333,0,0,0.72222],"936":[0,0.68333,0,0,0.77778],"937":[0,0.68333,0,0,0.72222],"8211":[0,0.43056,0.02778,0,0.5],"8212":[0,0.43056,0.02778,0,1.0],"8216":[0,0.69444,0,0,0.27778],"8217":[0,0.69444,0,0,0.27778],"8220":[0,0.69444,0,0,0.5],"8221":[0,0.69444,0,0,0.5],"8224":[0.19444,0.69444,0,0,0.44445],"8225":[0.19444,0.69444,0,0,0.44445],"8230":[0,0.12,0,0,1.172],"8242":[0,0.55556,0,0,0.275],"8407":[0,0.71444,0.15382,0,0.5],"8463":[0,0.68889,0,0,0.54028],"8465":[0,0.69444,0,0,0.72222],"8467":[0,0.69444,0,0.11111,0.41667],"8472":[0.19444,0.43056,0,0.11111,0.63646],"8476":[0,0.69444,0,0,0.72222],"8501":[0,0.69444,0,0,0.61111],"8592":[-0.13313,0.36687,0,0,1.0],"8593":[0.19444,0.69444,0,0,0.5],"8594":[-0.13313,0.36687,0,0,1.0],"8595":[0.19444,0.69444,0,0,0.5],"8596":[-0.13313,0.36687,0,0,1.0],"8597":[0.25,0.75,0,0,0.5],"8598":[0.19444,0.69444,0,0,1.0],"8599":[0.19444,0.69444,0,0,1.0],"8600":[0.19444,0.69444,0,0,1.0],"8601":[0.19444,0.69444,0,0,1.0],"8614":[0.011,0.511,0,0,1.0],"8617":[0.011,0.511,0,0,1.126],"8618":[0.011,0.511,0,0,1.126],"8636":[-0.13313,0.36687,0,0,1.0],"8637":[-0.13313,0.36687,0,0,1.0],"8640":[-0.13313,0.36687,0,0,1.0],"8641":[-0.13313,0.36687,0,0,1.0],"8652":[0.011,0.671,0,0,1.0],"8656":[-0.13313,0.36687,0,0,1.0],"8657":[0.19444,0.69444,0,0,0.61111],"8658":[-0.13313,0.36687,0,0,1.0],"8659":[0.19444,0.69444,0,0,0.61111],"8660":[-0.13313,0.36687,0,0,1.0],"8661":[0.25,0.75,0,0,0.61111],"8704":[0,0.69444,0,0,0.55556],"8706":[0,0.69444,0.05556,0.08334,0.5309],"8707":[0,0.69444,0,0,0.55556],"8709":[0.05556,0.75,0,0,0.5],"8711":[0,0.68333,0,0,0.83334],"8712":[0.0391,0.5391,0,0,0.66667],"8715":[0.0391,0.5391,0,0,0.66667],"8722":[0.08333,0.58333,0,0,0.77778],"8723":[0.08333,0.58333,0,0,0.77778],"8725":[0.25,0.75,0,0,0.5],"8726":[0.25,0.75,0,0,0.5],"8727":[-0.03472,0.46528,0,0,0.5],"8728":[-0.05555,0.44445,0,0,0.5],"8729":[-0.05555,0.44445,0,0,0.5],"8730":[0.2,0.8,0,0,0.83334],"8733":[0,0.43056,0,0,0.77778],"8734":[0,0.43056,0,0,1.0],"8736":[0,0.69224,0,0,0.72222],"8739":[0.25,0.75,0,0,0.27778],"8741":[0.25,0.75,0,0,0.5],"8743":[0,0.55556,0,0,0.66667],"8744":[0,0.55556,0,0,0.66667],"8745":[0,0.55556,0,0,0.66667],"8746":[0,0.55556,0,0,0.66667],"8747":[0.19444,0.69444,0.11111,0,0.41667],"8764":[-0.13313,0.36687,0,0,0.77778],"8768":[0.19444,0.69444,0,0,0.27778],"8771":[-0.03625,0.46375,0,0,0.77778],"8773":[-0.022,0.589,0,0,1.0],"8776":[-0.01688,0.48312,0,0,0.77778],"8781":[-0.03625,0.46375,0,0,0.77778],"8784":[-0.133,0.67,0,0,0.778],"8801":[-0.03625,0.46375,0,0,0.77778],"8804":[0.13597,0.63597,0,0,0.77778],"8805":[0.13597,0.63597,0,0,0.77778],"8810":[0.0391,0.5391,0,0,1.0],"8811":[0.0391,0.5391,0,0,1.0],"8826":[0.0391,0.5391,0,0,0.77778],"8827":[0.0391,0.5391,0,0,0.77778],"8834":[0.0391,0.5391,0,0,0.77778],"8835":[0.0391,0.5391,0,0,0.77778],"8838":[0.13597,0.63597,0,0,0.77778],"8839":[0.13597,0.63597,0,0,0.77778],"8846":[0,0.55556,0,0,0.66667],"8849":[0.13597,0.63597,0,0,0.77778],"8850":[0.13597,0.63597,0,0,0.77778],"8851":[0,0.55556,0,0,0.66667],"8852":[0,0.55556,0,0,0.66667],"8853":[0.08333,0.58333,0,0,0.77778],"8854":[0.08333,0.58333,0,0,0.77778],"8855":[0.08333,0.58333,0,0,0.77778],"8856":[0.08333,0.58333,0,0,0.77778],"8857":[0.08333,0.58333,0,0,0.77778],"8866":[0,0.69444,0,0,0.61111],"8867":[0,0.69444,0,0,0.61111],"8868":[0,0.69444,0,0,0.77778],"8869":[0,0.69444,0,0,0.77778],"8872":[0.249,0.75,0,0,0.867],"8900":[-0.05555,0.44445,0,0,0.5],"8901":[-0.05555,0.44445,0,0,0.27778],"8902":[-0.03472,0.46528,0,0,0.5],"8904":[0.005,0.505,0,0,0.9],"8942":[0.03,0.9,0,0,0.278],"8943":[-0.19,0.31,0,0,1.172],"8945":[-0.1,0.82,0,0,1.282],"8968":[0.25,0.75,0,0,0.44445],"8969":[0.25,0.75,0,0,0.44445],"8970":[0.25,0.75,0,0,0.44445],"8971":[0.25,0.75,0,0,0.44445],"8994":[-0.14236,0.35764,0,0,1.0],"8995":[-0.14236,0.35764,0,0,1.0],"9136":[0.244,0.744,0,0,0.412],"9137":[0.244,0.744,0,0,0.412],"9651":[0.19444,0.69444,0,0,0.88889],"9657":[-0.03472,0.46528,0,0,0.5],"9661":[0.19444,0.69444,0,0,0.88889],"9667":[-0.03472,0.46528,0,0,0.5],"9711":[0.19444,0.69444,0,0,1.0],"9824":[0.12963,0.69444,0,0,0.77778],"9825":[0.12963,0.69444,0,0,0.77778],"9826":[0.12963,0.69444,0,0,0.77778],"9827":[0.12963,0.69444,0,0,0.77778],"9837":[0,0.75,0,0,0.38889],"9838":[0.19444,0.69444,0,0,0.38889],"9839":[0.19444,0.69444,0,0,0.38889],"10216":[0.25,0.75,0,0,0.38889],"10217":[0.25,0.75,0,0,0.38889],"10222":[0.244,0.744,0,0,0.412],"10223":[0.244,0.744,0,0,0.412],"10229":[0.011,0.511,0,0,1.609],"10230":[0.011,0.511,0,0,1.638],"10231":[0.011,0.511,0,0,1.859],"10232":[0.024,0.525,0,0,1.609],"10233":[0.024,0.525,0,0,1.638],"10234":[0.024,0.525,0,0,1.858],"10236":[0.011,0.511,0,0,1.638],"10815":[0,0.68333,0,0,0.75],"10927":[0.13597,0.63597,0,0,0.77778],"10928":[0.13597,0.63597,0,0,0.77778],"57376":[0.19444,0.69444,0,0,0]},"Math-BoldItalic":{"32":[0,0,0,0,0.25],"48":[0,0.44444,0,0,0.575],"49":[0,0.44444,0,0,0.575],"50":[0,0.44444,0,0,0.575],"51":[0.19444,0.44444,0,0,0.575],"52":[0.19444,0.44444,0,0,0.575],"53":[0.19444,0.44444,0,0,0.575],"54":[0,0.64444,0,0,0.575],"55":[0.19444,0.44444,0,0,0.575],"56":[0,0.64444,0,0,0.575],"57":[0.19444,0.44444,0,0,0.575],"65":[0,0.68611,0,0,0.86944],"66":[0,0.68611,0.04835,0,0.8664],"67":[0,0.68611,0.06979,0,0.81694],"68":[0,0.68611,0.03194,0,0.93812],"69":[0,0.68611,0.05451,0,0.81007],"70":[0,0.68611,0.15972,0,0.68889],"71":[0,0.68611,0,0,0.88673],"72":[0,0.68611,0.08229,0,0.98229],"73":[0,0.68611,0.07778,0,0.51111],"74":[0,0.68611,0.10069,0,0.63125],"75":[0,0.68611,0.06979,0,0.97118],"76":[0,0.68611,0,0,0.75555],"77":[0,0.68611,0.11424,0,1.14201],"78":[0,0.68611,0.11424,0,0.95034],"79":[0,0.68611,0.03194,0,0.83666],"80":[0,0.68611,0.15972,0,0.72309],"81":[0.19444,0.68611,0,0,0.86861],"82":[0,0.68611,0.00421,0,0.87235],"83":[0,0.68611,0.05382,0,0.69271],"84":[0,0.68611,0.15972,0,0.63663],"85":[0,0.68611,0.11424,0,0.80027],"86":[0,0.68611,0.25555,0,0.67778],"87":[0,0.68611,0.15972,0,1.09305],"88":[0,0.68611,0.07778,0,0.94722],"89":[0,0.68611,0.25555,0,0.67458],"90":[0,0.68611,0.06979,0,0.77257],"97":[0,0.44444,0,0,0.63287],"98":[0,0.69444,0,0,0.52083],"99":[0,0.44444,0,0,0.51342],"100":[0,0.69444,0,0,0.60972],"101":[0,0.44444,0,0,0.55361],"102":[0.19444,0.69444,0.11042,0,0.56806],"103":[0.19444,0.44444,0.03704,0,0.5449],"104":[0,0.69444,0,0,0.66759],"105":[0,0.69326,0,0,0.4048],"106":[0.19444,0.69326,0.0622,0,0.47083],"107":[0,0.69444,0.01852,0,0.6037],"108":[0,0.69444,0.0088,0,0.34815],"109":[0,0.44444,0,0,1.0324],"110":[0,0.44444,0,0,0.71296],"111":[0,0.44444,0,0,0.58472],"112":[0.19444,0.44444,0,0,0.60092],"113":[0.19444,0.44444,0.03704,0,0.54213],"114":[0,0.44444,0.03194,0,0.5287],"115":[0,0.44444,0,0,0.53125],"116":[0,0.63492,0,0,0.41528],"117":[0,0.44444,0,0,0.68102],"118":[0,0.44444,0.03704,0,0.56666],"119":[0,0.44444,0.02778,0,0.83148],"120":[0,0.44444,0,0,0.65903],"121":[0.19444,0.44444,0.03704,0,0.59028],"122":[0,0.44444,0.04213,0,0.55509],"160":[0,0,0,0,0.25],"915":[0,0.68611,0.15972,0,0.65694],"916":[0,0.68611,0,0,0.95833],"920":[0,0.68611,0.03194,0,0.86722],"923":[0,0.68611,0,0,0.80555],"926":[0,0.68611,0.07458,0,0.84125],"928":[0,0.68611,0.08229,0,0.98229],"931":[0,0.68611,0.05451,0,0.88507],"933":[0,0.68611,0.15972,0,0.67083],"934":[0,0.68611,0,0,0.76666],"936":[0,0.68611,0.11653,0,0.71402],"937":[0,0.68611,0.04835,0,0.8789],"945":[0,0.44444,0,0,0.76064],"946":[0.19444,0.69444,0.03403,0,0.65972],"947":[0.19444,0.44444,0.06389,0,0.59003],"948":[0,0.69444,0.03819,0,0.52222],"949":[0,0.44444,0,0,0.52882],"950":[0.19444,0.69444,0.06215,0,0.50833],"951":[0.19444,0.44444,0.03704,0,0.6],"952":[0,0.69444,0.03194,0,0.5618],"953":[0,0.44444,0,0,0.41204],"954":[0,0.44444,0,0,0.66759],"955":[0,0.69444,0,0,0.67083],"956":[0.19444,0.44444,0,0,0.70787],"957":[0,0.44444,0.06898,0,0.57685],"958":[0.19444,0.69444,0.03021,0,0.50833],"959":[0,0.44444,0,0,0.58472],"960":[0,0.44444,0.03704,0,0.68241],"961":[0.19444,0.44444,0,0,0.6118],"962":[0.09722,0.44444,0.07917,0,0.42361],"963":[0,0.44444,0.03704,0,0.68588],"964":[0,0.44444,0.13472,0,0.52083],"965":[0,0.44444,0.03704,0,0.63055],"966":[0.19444,0.44444,0,0,0.74722],"967":[0.19444,0.44444,0,0,0.71805],"968":[0.19444,0.69444,0.03704,0,0.75833],"969":[0,0.44444,0.03704,0,0.71782],"977":[0,0.69444,0,0,0.69155],"981":[0.19444,0.69444,0,0,0.7125],"982":[0,0.44444,0.03194,0,0.975],"1009":[0.19444,0.44444,0,0,0.6118],"1013":[0,0.44444,0,0,0.48333],"57649":[0,0.44444,0,0,0.39352],"57911":[0.19444,0.44444,0,0,0.43889]},"Math-Italic":{"32":[0,0,0,0,0.25],"48":[0,0.43056,0,0,0.5],"49":[0,0.43056,0,0,0.5],"50":[0,0.43056,0,0,0.5],"51":[0.19444,0.43056,0,0,0.5],"52":[0.19444,0.43056,0,0,0.5],"53":[0.19444,0.43056,0,0,0.5],"54":[0,0.64444,0,0,0.5],"55":[0.19444,0.43056,0,0,0.5],"56":[0,0.64444,0,0,0.5],"57":[0.19444,0.43056,0,0,0.5],"65":[0,0.68333,0,0.13889,0.75],"66":[0,0.68333,0.05017,0.08334,0.75851],"67":[0,0.68333,0.07153,0.08334,0.71472],"68":[0,0.68333,0.02778,0.05556,0.82792],"69":[0,0.68333,0.05764,0.08334,0.7382],"70":[0,0.68333,0.13889,0.08334,0.64306],"71":[0,0.68333,0,0.08334,0.78625],"72":[0,0.68333,0.08125,0.05556,0.83125],"73":[0,0.68333,0.07847,0.11111,0.43958],"74":[0,0.68333,0.09618,0.16667,0.55451],"75":[0,0.68333,0.07153,0.05556,0.84931],"76":[0,0.68333,0,0.02778,0.68056],"77":[0,0.68333,0.10903,0.08334,0.97014],"78":[0,0.68333,0.10903,0.08334,0.80347],"79":[0,0.68333,0.02778,0.08334,0.76278],"80":[0,0.68333,0.13889,0.08334,0.64201],"81":[0.19444,0.68333,0,0.08334,0.79056],"82":[0,0.68333,0.00773,0.08334,0.75929],"83":[0,0.68333,0.05764,0.08334,0.6132],"84":[0,0.68333,0.13889,0.08334,0.58438],"85":[0,0.68333,0.10903,0.02778,0.68278],"86":[0,0.68333,0.22222,0,0.58333],"87":[0,0.68333,0.13889,0,0.94445],"88":[0,0.68333,0.07847,0.08334,0.82847],"89":[0,0.68333,0.22222,0,0.58056],"90":[0,0.68333,0.07153,0.08334,0.68264],"97":[0,0.43056,0,0,0.52859],"98":[0,0.69444,0,0,0.42917],"99":[0,0.43056,0,0.05556,0.43276],"100":[0,0.69444,0,0.16667,0.52049],"101":[0,0.43056,0,0.05556,0.46563],"102":[0.19444,0.69444,0.10764,0.16667,0.48959],"103":[0.19444,0.43056,0.03588,0.02778,0.47697],"104":[0,0.69444,0,0,0.57616],"105":[0,0.65952,0,0,0.34451],"106":[0.19444,0.65952,0.05724,0,0.41181],"107":[0,0.69444,0.03148,0,0.5206],"108":[0,0.69444,0.01968,0.08334,0.29838],"109":[0,0.43056,0,0,0.87801],"110":[0,0.43056,0,0,0.60023],"111":[0,0.43056,0,0.05556,0.48472],"112":[0.19444,0.43056,0,0.08334,0.50313],"113":[0.19444,0.43056,0.03588,0.08334,0.44641],"114":[0,0.43056,0.02778,0.05556,0.45116],"115":[0,0.43056,0,0.05556,0.46875],"116":[0,0.61508,0,0.08334,0.36111],"117":[0,0.43056,0,0.02778,0.57246],"118":[0,0.43056,0.03588,0.02778,0.48472],"119":[0,0.43056,0.02691,0.08334,0.71592],"120":[0,0.43056,0,0.02778,0.57153],"121":[0.19444,0.43056,0.03588,0.05556,0.49028],"122":[0,0.43056,0.04398,0.05556,0.46505],"160":[0,0,0,0,0.25],"915":[0,0.68333,0.13889,0.08334,0.61528],"916":[0,0.68333,0,0.16667,0.83334],"920":[0,0.68333,0.02778,0.08334,0.76278],"923":[0,0.68333,0,0.16667,0.69445],"926":[0,0.68333,0.07569,0.08334,0.74236],"928":[0,0.68333,0.08125,0.05556,0.83125],"931":[0,0.68333,0.05764,0.08334,0.77986],"933":[0,0.68333,0.13889,0.05556,0.58333],"934":[0,0.68333,0,0.08334,0.66667],"936":[0,0.68333,0.11,0.05556,0.61222],"937":[0,0.68333,0.05017,0.08334,0.7724],"945":[0,0.43056,0.0037,0.02778,0.6397],"946":[0.19444,0.69444,0.05278,0.08334,0.56563],"947":[0.19444,0.43056,0.05556,0,0.51773],"948":[0,0.69444,0.03785,0.05556,0.44444],"949":[0,0.43056,0,0.08334,0.46632],"950":[0.19444,0.69444,0.07378,0.08334,0.4375],"951":[0.19444,0.43056,0.03588,0.05556,0.49653],"952":[0,0.69444,0.02778,0.08334,0.46944],"953":[0,0.43056,0,0.05556,0.35394],"954":[0,0.43056,0,0,0.57616],"955":[0,0.69444,0,0,0.58334],"956":[0.19444,0.43056,0,0.02778,0.60255],"957":[0,0.43056,0.06366,0.02778,0.49398],"958":[0.19444,0.69444,0.04601,0.11111,0.4375],"959":[0,0.43056,0,0.05556,0.48472],"960":[0,0.43056,0.03588,0,0.57003],"961":[0.19444,0.43056,0,0.08334,0.51702],"962":[0.09722,0.43056,0.07986,0.08334,0.36285],"963":[0,0.43056,0.03588,0,0.57141],"964":[0,0.43056,0.1132,0.02778,0.43715],"965":[0,0.43056,0.03588,0.02778,0.54028],"966":[0.19444,0.43056,0,0.08334,0.65417],"967":[0.19444,0.43056,0,0.05556,0.62569],"968":[0.19444,0.69444,0.03588,0.11111,0.65139],"969":[0,0.43056,0.03588,0,0.62245],"977":[0,0.69444,0,0.08334,0.59144],"981":[0.19444,0.69444,0,0.08334,0.59583],"982":[0,0.43056,0.02778,0,0.82813],"1009":[0.19444,0.43056,0,0.08334,0.51702],"1013":[0,0.43056,0,0.05556,0.4059],"57649":[0,0.43056,0,0.02778,0.32246],"57911":[0.19444,0.43056,0,0.08334,0.38403]},"SansSerif-Bold":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0,0,0.36667],"34":[0,0.69444,0,0,0.55834],"35":[0.19444,0.69444,0,0,0.91667],"36":[0.05556,0.75,0,0,0.55],"37":[0.05556,0.75,0,0,1.02912],"38":[0,0.69444,0,0,0.83056],"39":[0,0.69444,0,0,0.30556],"40":[0.25,0.75,0,0,0.42778],"41":[0.25,0.75,0,0,0.42778],"42":[0,0.75,0,0,0.55],"43":[0.11667,0.61667,0,0,0.85556],"44":[0.10556,0.13056,0,0,0.30556],"45":[0,0.45833,0,0,0.36667],"46":[0,0.13056,0,0,0.30556],"47":[0.25,0.75,0,0,0.55],"48":[0,0.69444,0,0,0.55],"49":[0,0.69444,0,0,0.55],"50":[0,0.69444,0,0,0.55],"51":[0,0.69444,0,0,0.55],"52":[0,0.69444,0,0,0.55],"53":[0,0.69444,0,0,0.55],"54":[0,0.69444,0,0,0.55],"55":[0,0.69444,0,0,0.55],"56":[0,0.69444,0,0,0.55],"57":[0,0.69444,0,0,0.55],"58":[0,0.45833,0,0,0.30556],"59":[0.10556,0.45833,0,0,0.30556],"61":[-0.09375,0.40625,0,0,0.85556],"63":[0,0.69444,0,0,0.51945],"64":[0,0.69444,0,0,0.73334],"65":[0,0.69444,0,0,0.73334],"66":[0,0.69444,0,0,0.73334],"67":[0,0.69444,0,0,0.70278],"68":[0,0.69444,0,0,0.79445],"69":[0,0.69444,0,0,0.64167],"70":[0,0.69444,0,0,0.61111],"71":[0,0.69444,0,0,0.73334],"72":[0,0.69444,0,0,0.79445],"73":[0,0.69444,0,0,0.33056],"74":[0,0.69444,0,0,0.51945],"75":[0,0.69444,0,0,0.76389],"76":[0,0.69444,0,0,0.58056],"77":[0,0.69444,0,0,0.97778],"78":[0,0.69444,0,0,0.79445],"79":[0,0.69444,0,0,0.79445],"80":[0,0.69444,0,0,0.70278],"81":[0.10556,0.69444,0,0,0.79445],"82":[0,0.69444,0,0,0.70278],"83":[0,0.69444,0,0,0.61111],"84":[0,0.69444,0,0,0.73334],"85":[0,0.69444,0,0,0.76389],"86":[0,0.69444,0.01528,0,0.73334],"87":[0,0.69444,0.01528,0,1.03889],"88":[0,0.69444,0,0,0.73334],"89":[0,0.69444,0.0275,0,0.73334],"90":[0,0.69444,0,0,0.67223],"91":[0.25,0.75,0,0,0.34306],"93":[0.25,0.75,0,0,0.34306],"94":[0,0.69444,0,0,0.55],"95":[0.35,0.10833,0.03056,0,0.55],"97":[0,0.45833,0,0,0.525],"98":[0,0.69444,0,0,0.56111],"99":[0,0.45833,0,0,0.48889],"100":[0,0.69444,0,0,0.56111],"101":[0,0.45833,0,0,0.51111],"102":[0,0.69444,0.07639,0,0.33611],"103":[0.19444,0.45833,0.01528,0,0.55],"104":[0,0.69444,0,0,0.56111],"105":[0,0.69444,0,0,0.25556],"106":[0.19444,0.69444,0,0,0.28611],"107":[0,0.69444,0,0,0.53056],"108":[0,0.69444,0,0,0.25556],"109":[0,0.45833,0,0,0.86667],"110":[0,0.45833,0,0,0.56111],"111":[0,0.45833,0,0,0.55],"112":[0.19444,0.45833,0,0,0.56111],"113":[0.19444,0.45833,0,0,0.56111],"114":[0,0.45833,0.01528,0,0.37222],"115":[0,0.45833,0,0,0.42167],"116":[0,0.58929,0,0,0.40417],"117":[0,0.45833,0,0,0.56111],"118":[0,0.45833,0.01528,0,0.5],"119":[0,0.45833,0.01528,0,0.74445],"120":[0,0.45833,0,0,0.5],"121":[0.19444,0.45833,0.01528,0,0.5],"122":[0,0.45833,0,0,0.47639],"126":[0.35,0.34444,0,0,0.55],"160":[0,0,0,0,0.25],"168":[0,0.69444,0,0,0.55],"176":[0,0.69444,0,0,0.73334],"180":[0,0.69444,0,0,0.55],"184":[0.17014,0,0,0,0.48889],"305":[0,0.45833,0,0,0.25556],"567":[0.19444,0.45833,0,0,0.28611],"710":[0,0.69444,0,0,0.55],"711":[0,0.63542,0,0,0.55],"713":[0,0.63778,0,0,0.55],"728":[0,0.69444,0,0,0.55],"729":[0,0.69444,0,0,0.30556],"730":[0,0.69444,0,0,0.73334],"732":[0,0.69444,0,0,0.55],"733":[0,0.69444,0,0,0.55],"915":[0,0.69444,0,0,0.58056],"916":[0,0.69444,0,0,0.91667],"920":[0,0.69444,0,0,0.85556],"923":[0,0.69444,0,0,0.67223],"926":[0,0.69444,0,0,0.73334],"928":[0,0.69444,0,0,0.79445],"931":[0,0.69444,0,0,0.79445],"933":[0,0.69444,0,0,0.85556],"934":[0,0.69444,0,0,0.79445],"936":[0,0.69444,0,0,0.85556],"937":[0,0.69444,0,0,0.79445],"8211":[0,0.45833,0.03056,0,0.55],"8212":[0,0.45833,0.03056,0,1.10001],"8216":[0,0.69444,0,0,0.30556],"8217":[0,0.69444,0,0,0.30556],"8220":[0,0.69444,0,0,0.55834],"8221":[0,0.69444,0,0,0.55834]},"SansSerif-Italic":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0.05733,0,0.31945],"34":[0,0.69444,0.00316,0,0.5],"35":[0.19444,0.69444,0.05087,0,0.83334],"36":[0.05556,0.75,0.11156,0,0.5],"37":[0.05556,0.75,0.03126,0,0.83334],"38":[0,0.69444,0.03058,0,0.75834],"39":[0,0.69444,0.07816,0,0.27778],"40":[0.25,0.75,0.13164,0,0.38889],"41":[0.25,0.75,0.02536,0,0.38889],"42":[0,0.75,0.11775,0,0.5],"43":[0.08333,0.58333,0.02536,0,0.77778],"44":[0.125,0.08333,0,0,0.27778],"45":[0,0.44444,0.01946,0,0.33333],"46":[0,0.08333,0,0,0.27778],"47":[0.25,0.75,0.13164,0,0.5],"48":[0,0.65556,0.11156,0,0.5],"49":[0,0.65556,0.11156,0,0.5],"50":[0,0.65556,0.11156,0,0.5],"51":[0,0.65556,0.11156,0,0.5],"52":[0,0.65556,0.11156,0,0.5],"53":[0,0.65556,0.11156,0,0.5],"54":[0,0.65556,0.11156,0,0.5],"55":[0,0.65556,0.11156,0,0.5],"56":[0,0.65556,0.11156,0,0.5],"57":[0,0.65556,0.11156,0,0.5],"58":[0,0.44444,0.02502,0,0.27778],"59":[0.125,0.44444,0.02502,0,0.27778],"61":[-0.13,0.37,0.05087,0,0.77778],"63":[0,0.69444,0.11809,0,0.47222],"64":[0,0.69444,0.07555,0,0.66667],"65":[0,0.69444,0,0,0.66667],"66":[0,0.69444,0.08293,0,0.66667],"67":[0,0.69444,0.11983,0,0.63889],"68":[0,0.69444,0.07555,0,0.72223],"69":[0,0.69444,0.11983,0,0.59722],"70":[0,0.69444,0.13372,0,0.56945],"71":[0,0.69444,0.11983,0,0.66667],"72":[0,0.69444,0.08094,0,0.70834],"73":[0,0.69444,0.13372,0,0.27778],"74":[0,0.69444,0.08094,0,0.47222],"75":[0,0.69444,0.11983,0,0.69445],"76":[0,0.69444,0,0,0.54167],"77":[0,0.69444,0.08094,0,0.875],"78":[0,0.69444,0.08094,0,0.70834],"79":[0,0.69444,0.07555,0,0.73611],"80":[0,0.69444,0.08293,0,0.63889],"81":[0.125,0.69444,0.07555,0,0.73611],"82":[0,0.69444,0.08293,0,0.64584],"83":[0,0.69444,0.09205,0,0.55556],"84":[0,0.69444,0.13372,0,0.68056],"85":[0,0.69444,0.08094,0,0.6875],"86":[0,0.69444,0.1615,0,0.66667],"87":[0,0.69444,0.1615,0,0.94445],"88":[0,0.69444,0.13372,0,0.66667],"89":[0,0.69444,0.17261,0,0.66667],"90":[0,0.69444,0.11983,0,0.61111],"91":[0.25,0.75,0.15942,0,0.28889],"93":[0.25,0.75,0.08719,0,0.28889],"94":[0,0.69444,0.0799,0,0.5],"95":[0.35,0.09444,0.08616,0,0.5],"97":[0,0.44444,0.00981,0,0.48056],"98":[0,0.69444,0.03057,0,0.51667],"99":[0,0.44444,0.08336,0,0.44445],"100":[0,0.69444,0.09483,0,0.51667],"101":[0,0.44444,0.06778,0,0.44445],"102":[0,0.69444,0.21705,0,0.30556],"103":[0.19444,0.44444,0.10836,0,0.5],"104":[0,0.69444,0.01778,0,0.51667],"105":[0,0.67937,0.09718,0,0.23889],"106":[0.19444,0.67937,0.09162,0,0.26667],"107":[0,0.69444,0.08336,0,0.48889],"108":[0,0.69444,0.09483,0,0.23889],"109":[0,0.44444,0.01778,0,0.79445],"110":[0,0.44444,0.01778,0,0.51667],"111":[0,0.44444,0.06613,0,0.5],"112":[0.19444,0.44444,0.0389,0,0.51667],"113":[0.19444,0.44444,0.04169,0,0.51667],"114":[0,0.44444,0.10836,0,0.34167],"115":[0,0.44444,0.0778,0,0.38333],"116":[0,0.57143,0.07225,0,0.36111],"117":[0,0.44444,0.04169,0,0.51667],"118":[0,0.44444,0.10836,0,0.46111],"119":[0,0.44444,0.10836,0,0.68334],"120":[0,0.44444,0.09169,0,0.46111],"121":[0.19444,0.44444,0.10836,0,0.46111],"122":[0,0.44444,0.08752,0,0.43472],"126":[0.35,0.32659,0.08826,0,0.5],"160":[0,0,0,0,0.25],"168":[0,0.67937,0.06385,0,0.5],"176":[0,0.69444,0,0,0.73752],"184":[0.17014,0,0,0,0.44445],"305":[0,0.44444,0.04169,0,0.23889],"567":[0.19444,0.44444,0.04169,0,0.26667],"710":[0,0.69444,0.0799,0,0.5],"711":[0,0.63194,0.08432,0,0.5],"713":[0,0.60889,0.08776,0,0.5],"714":[0,0.69444,0.09205,0,0.5],"715":[0,0.69444,0,0,0.5],"728":[0,0.69444,0.09483,0,0.5],"729":[0,0.67937,0.07774,0,0.27778],"730":[0,0.69444,0,0,0.73752],"732":[0,0.67659,0.08826,0,0.5],"733":[0,0.69444,0.09205,0,0.5],"915":[0,0.69444,0.13372,0,0.54167],"916":[0,0.69444,0,0,0.83334],"920":[0,0.69444,0.07555,0,0.77778],"923":[0,0.69444,0,0,0.61111],"926":[0,0.69444,0.12816,0,0.66667],"928":[0,0.69444,0.08094,0,0.70834],"931":[0,0.69444,0.11983,0,0.72222],"933":[0,0.69444,0.09031,0,0.77778],"934":[0,0.69444,0.04603,0,0.72222],"936":[0,0.69444,0.09031,0,0.77778],"937":[0,0.69444,0.08293,0,0.72222],"8211":[0,0.44444,0.08616,0,0.5],"8212":[0,0.44444,0.08616,0,1.0],"8216":[0,0.69444,0.07816,0,0.27778],"8217":[0,0.69444,0.07816,0,0.27778],"8220":[0,0.69444,0.14205,0,0.5],"8221":[0,0.69444,0.00316,0,0.5]},"SansSerif-Regular":{"32":[0,0,0,0,0.25],"33":[0,0.69444,0,0,0.31945],"34":[0,0.69444,0,0,0.5],"35":[0.19444,0.69444,0,0,0.83334],"36":[0.05556,0.75,0,0,0.5],"37":[0.05556,0.75,0,0,0.83334],"38":[0,0.69444,0,0,0.75834],"39":[0,0.69444,0,0,0.27778],"40":[0.25,0.75,0,0,0.38889],"41":[0.25,0.75,0,0,0.38889],"42":[0,0.75,0,0,0.5],"43":[0.08333,0.58333,0,0,0.77778],"44":[0.125,0.08333,0,0,0.27778],"45":[0,0.44444,0,0,0.33333],"46":[0,0.08333,0,0,0.27778],"47":[0.25,0.75,0,0,0.5],"48":[0,0.65556,0,0,0.5],"49":[0,0.65556,0,0,0.5],"50":[0,0.65556,0,0,0.5],"51":[0,0.65556,0,0,0.5],"52":[0,0.65556,0,0,0.5],"53":[0,0.65556,0,0,0.5],"54":[0,0.65556,0,0,0.5],"55":[0,0.65556,0,0,0.5],"56":[0,0.65556,0,0,0.5],"57":[0,0.65556,0,0,0.5],"58":[0,0.44444,0,0,0.27778],"59":[0.125,0.44444,0,0,0.27778],"61":[-0.13,0.37,0,0,0.77778],"63":[0,0.69444,0,0,0.47222],"64":[0,0.69444,0,0,0.66667],"65":[0,0.69444,0,0,0.66667],"66":[0,0.69444,0,0,0.66667],"67":[0,0.69444,0,0,0.63889],"68":[0,0.69444,0,0,0.72223],"69":[0,0.69444,0,0,0.59722],"70":[0,0.69444,0,0,0.56945],"71":[0,0.69444,0,0,0.66667],"72":[0,0.69444,0,0,0.70834],"73":[0,0.69444,0,0,0.27778],"74":[0,0.69444,0,0,0.47222],"75":[0,0.69444,0,0,0.69445],"76":[0,0.69444,0,0,0.54167],"77":[0,0.69444,0,0,0.875],"78":[0,0.69444,0,0,0.70834],"79":[0,0.69444,0,0,0.73611],"80":[0,0.69444,0,0,0.63889],"81":[0.125,0.69444,0,0,0.73611],"82":[0,0.69444,0,0,0.64584],"83":[0,0.69444,0,0,0.55556],"84":[0,0.69444,0,0,0.68056],"85":[0,0.69444,0,0,0.6875],"86":[0,0.69444,0.01389,0,0.66667],"87":[0,0.69444,0.01389,0,0.94445],"88":[0,0.69444,0,0,0.66667],"89":[0,0.69444,0.025,0,0.66667],"90":[0,0.69444,0,0,0.61111],"91":[0.25,0.75,0,0,0.28889],"93":[0.25,0.75,0,0,0.28889],"94":[0,0.69444,0,0,0.5],"95":[0.35,0.09444,0.02778,0,0.5],"97":[0,0.44444,0,0,0.48056],"98":[0,0.69444,0,0,0.51667],"99":[0,0.44444,0,0,0.44445],"100":[0,0.69444,0,0,0.51667],"101":[0,0.44444,0,0,0.44445],"102":[0,0.69444,0.06944,0,0.30556],"103":[0.19444,0.44444,0.01389,0,0.5],"104":[0,0.69444,0,0,0.51667],"105":[0,0.67937,0,0,0.23889],"106":[0.19444,0.67937,0,0,0.26667],"107":[0,0.69444,0,0,0.48889],"108":[0,0.69444,0,0,0.23889],"109":[0,0.44444,0,0,0.79445],"110":[0,0.44444,0,0,0.51667],"111":[0,0.44444,0,0,0.5],"112":[0.19444,0.44444,0,0,0.51667],"113":[0.19444,0.44444,0,0,0.51667],"114":[0,0.44444,0.01389,0,0.34167],"115":[0,0.44444,0,0,0.38333],"116":[0,0.57143,0,0,0.36111],"117":[0,0.44444,0,0,0.51667],"118":[0,0.44444,0.01389,0,0.46111],"119":[0,0.44444,0.01389,0,0.68334],"120":[0,0.44444,0,0,0.46111],"121":[0.19444,0.44444,0.01389,0,0.46111],"122":[0,0.44444,0,0,0.43472],"126":[0.35,0.32659,0,0,0.5],"160":[0,0,0,0,0.25],"168":[0,0.67937,0,0,0.5],"176":[0,0.69444,0,0,0.66667],"184":[0.17014,0,0,0,0.44445],"305":[0,0.44444,0,0,0.23889],"567":[0.19444,0.44444,0,0,0.26667],"710":[0,0.69444,0,0,0.5],"711":[0,0.63194,0,0,0.5],"713":[0,0.60889,0,0,0.5],"714":[0,0.69444,0,0,0.5],"715":[0,0.69444,0,0,0.5],"728":[0,0.69444,0,0,0.5],"729":[0,0.67937,0,0,0.27778],"730":[0,0.69444,0,0,0.66667],"732":[0,0.67659,0,0,0.5],"733":[0,0.69444,0,0,0.5],"915":[0,0.69444,0,0,0.54167],"916":[0,0.69444,0,0,0.83334],"920":[0,0.69444,0,0,0.77778],"923":[0,0.69444,0,0,0.61111],"926":[0,0.69444,0,0,0.66667],"928":[0,0.69444,0,0,0.70834],"931":[0,0.69444,0,0,0.72222],"933":[0,0.69444,0,0,0.77778],"934":[0,0.69444,0,0,0.72222],"936":[0,0.69444,0,0,0.77778],"937":[0,0.69444,0,0,0.72222],"8211":[0,0.44444,0.02778,0,0.5],"8212":[0,0.44444,0.02778,0,1.0],"8216":[0,0.69444,0,0,0.27778],"8217":[0,0.69444,0,0,0.27778],"8220":[0,0.69444,0,0,0.5],"8221":[0,0.69444,0,0,0.5]},"Script-Regular":{"32":[0,0,0,0,0.25],"65":[0,0.7,0.22925,0,0.80253],"66":[0,0.7,0.04087,0,0.90757],"67":[0,0.7,0.1689,0,0.66619],"68":[0,0.7,0.09371,0,0.77443],"69":[0,0.7,0.18583,0,0.56162],"70":[0,0.7,0.13634,0,0.89544],"71":[0,0.7,0.17322,0,0.60961],"72":[0,0.7,0.29694,0,0.96919],"73":[0,0.7,0.19189,0,0.80907],"74":[0.27778,0.7,0.19189,0,1.05159],"75":[0,0.7,0.31259,0,0.91364],"76":[0,0.7,0.19189,0,0.87373],"77":[0,0.7,0.15981,0,1.08031],"78":[0,0.7,0.3525,0,0.9015],"79":[0,0.7,0.08078,0,0.73787],"80":[0,0.7,0.08078,0,1.01262],"81":[0,0.7,0.03305,0,0.88282],"82":[0,0.7,0.06259,0,0.85],"83":[0,0.7,0.19189,0,0.86767],"84":[0,0.7,0.29087,0,0.74697],"85":[0,0.7,0.25815,0,0.79996],"86":[0,0.7,0.27523,0,0.62204],"87":[0,0.7,0.27523,0,0.80532],"88":[0,0.7,0.26006,0,0.94445],"89":[0,0.7,0.2939,0,0.70961],"90":[0,0.7,0.24037,0,0.8212],"160":[0,0,0,0,0.25]},"Size1-Regular":{"32":[0,0,0,0,0.25],"40":[0.35001,0.85,0,0,0.45834],"41":[0.35001,0.85,0,0,0.45834],"47":[0.35001,0.85,0,0,0.57778],"91":[0.35001,0.85,0,0,0.41667],"92":[0.35001,0.85,0,0,0.57778],"93":[0.35001,0.85,0,0,0.41667],"123":[0.35001,0.85,0,0,0.58334],"125":[0.35001,0.85,0,0,0.58334],"160":[0,0,0,0,0.25],"710":[0,0.72222,0,0,0.55556],"732":[0,0.72222,0,0,0.55556],"770":[0,0.72222,0,0,0.55556],"771":[0,0.72222,0,0,0.55556],"8214":[-0.00099,0.601,0,0,0.77778],"8593":[1e-05,0.6,0,0,0.66667],"8595":[1e-05,0.6,0,0,0.66667],"8657":[1e-05,0.6,0,0,0.77778],"8659":[1e-05,0.6,0,0,0.77778],"8719":[0.25001,0.75,0,0,0.94445],"8720":[0.25001,0.75,0,0,0.94445],"8721":[0.25001,0.75,0,0,1.05556],"8730":[0.35001,0.85,0,0,1.0],"8739":[-0.00599,0.606,0,0,0.33333],"8741":[-0.00599,0.606,0,0,0.55556],"8747":[0.30612,0.805,0.19445,0,0.47222],"8748":[0.306,0.805,0.19445,0,0.47222],"8749":[0.306,0.805,0.19445,0,0.47222],"8750":[0.30612,0.805,0.19445,0,0.47222],"8896":[0.25001,0.75,0,0,0.83334],"8897":[0.25001,0.75,0,0,0.83334],"8898":[0.25001,0.75,0,0,0.83334],"8899":[0.25001,0.75,0,0,0.83334],"8968":[0.35001,0.85,0,0,0.47222],"8969":[0.35001,0.85,0,0,0.47222],"8970":[0.35001,0.85,0,0,0.47222],"8971":[0.35001,0.85,0,0,0.47222],"9168":[-0.00099,0.601,0,0,0.66667],"10216":[0.35001,0.85,0,0,0.47222],"10217":[0.35001,0.85,0,0,0.47222],"10752":[0.25001,0.75,0,0,1.11111],"10753":[0.25001,0.75,0,0,1.11111],"10754":[0.25001,0.75,0,0,1.11111],"10756":[0.25001,0.75,0,0,0.83334],"10758":[0.25001,0.75,0,0,0.83334]},"Size2-Regular":{"32":[0,0,0,0,0.25],"40":[0.65002,1.15,0,0,0.59722],"41":[0.65002,1.15,0,0,0.59722],"47":[0.65002,1.15,0,0,0.81111],"91":[0.65002,1.15,0,0,0.47222],"92":[0.65002,1.15,0,0,0.81111],"93":[0.65002,1.15,0,0,0.47222],"123":[0.65002,1.15,0,0,0.66667],"125":[0.65002,1.15,0,0,0.66667],"160":[0,0,0,0,0.25],"710":[0,0.75,0,0,1.0],"732":[0,0.75,0,0,1.0],"770":[0,0.75,0,0,1.0],"771":[0,0.75,0,0,1.0],"8719":[0.55001,1.05,0,0,1.27778],"8720":[0.55001,1.05,0,0,1.27778],"8721":[0.55001,1.05,0,0,1.44445],"8730":[0.65002,1.15,0,0,1.0],"8747":[0.86225,1.36,0.44445,0,0.55556],"8748":[0.862,1.36,0.44445,0,0.55556],"8749":[0.862,1.36,0.44445,0,0.55556],"8750":[0.86225,1.36,0.44445,0,0.55556],"8896":[0.55001,1.05,0,0,1.11111],"8897":[0.55001,1.05,0,0,1.11111],"8898":[0.55001,1.05,0,0,1.11111],"8899":[0.55001,1.05,0,0,1.11111],"8968":[0.65002,1.15,0,0,0.52778],"8969":[0.65002,1.15,0,0,0.52778],"8970":[0.65002,1.15,0,0,0.52778],"8971":[0.65002,1.15,0,0,0.52778],"10216":[0.65002,1.15,0,0,0.61111],"10217":[0.65002,1.15,0,0,0.61111],"10752":[0.55001,1.05,0,0,1.51112],"10753":[0.55001,1.05,0,0,1.51112],"10754":[0.55001,1.05,0,0,1.51112],"10756":[0.55001,1.05,0,0,1.11111],"10758":[0.55001,1.05,0,0,1.11111]},"Size3-Regular":{"32":[0,0,0,0,0.25],"40":[0.95003,1.45,0,0,0.73611],"41":[0.95003,1.45,0,0,0.73611],"47":[0.95003,1.45,0,0,1.04445],"91":[0.95003,1.45,0,0,0.52778],"92":[0.95003,1.45,0,0,1.04445],"93":[0.95003,1.45,0,0,0.52778],"123":[0.95003,1.45,0,0,0.75],"125":[0.95003,1.45,0,0,0.75],"160":[0,0,0,0,0.25],"710":[0,0.75,0,0,1.44445],"732":[0,0.75,0,0,1.44445],"770":[0,0.75,0,0,1.44445],"771":[0,0.75,0,0,1.44445],"8730":[0.95003,1.45,0,0,1.0],"8968":[0.95003,1.45,0,0,0.58334],"8969":[0.95003,1.45,0,0,0.58334],"8970":[0.95003,1.45,0,0,0.58334],"8971":[0.95003,1.45,0,0,0.58334],"10216":[0.95003,1.45,0,0,0.75],"10217":[0.95003,1.45,0,0,0.75]},"Size4-Regular":{"32":[0,0,0,0,0.25],"40":[1.25003,1.75,0,0,0.79167],"41":[1.25003,1.75,0,0,0.79167],"47":[1.25003,1.75,0,0,1.27778],"91":[1.25003,1.75,0,0,0.58334],"92":[1.25003,1.75,0,0,1.27778],"93":[1.25003,1.75,0,0,0.58334],"123":[1.25003,1.75,0,0,0.80556],"125":[1.25003,1.75,0,0,0.80556],"160":[0,0,0,0,0.25],"710":[0,0.825,0,0,1.8889],"732":[0,0.825,0,0,1.8889],"770":[0,0.825,0,0,1.8889],"771":[0,0.825,0,0,1.8889],"8730":[1.25003,1.75,0,0,1.0],"8968":[1.25003,1.75,0,0,0.63889],"8969":[1.25003,1.75,0,0,0.63889],"8970":[1.25003,1.75,0,0,0.63889],"8971":[1.25003,1.75,0,0,0.63889],"9115":[0.64502,1.155,0,0,0.875],"9116":[1e-05,0.6,0,0,0.875],"9117":[0.64502,1.155,0,0,0.875],"9118":[0.64502,1.155,0,0,0.875],"9119":[1e-05,0.6,0,0,0.875],"9120":[0.64502,1.155,0,0,0.875],"9121":[0.64502,1.155,0,0,0.66667],"9122":[-0.00099,0.601,0,0,0.66667],"9123":[0.64502,1.155,0,0,0.66667],"9124":[0.64502,1.155,0,0,0.66667],"9125":[-0.00099,0.601,0,0,0.66667],"9126":[0.64502,1.155,0,0,0.66667],"9127":[1e-05,0.9,0,0,0.88889],"9128":[0.65002,1.15,0,0,0.88889],"9129":[0.90001,0,0,0,0.88889],"9130":[0,0.3,0,0,0.88889],"9131":[1e-05,0.9,0,0,0.88889],"9132":[0.65002,1.15,0,0,0.88889],"9133":[0.90001,0,0,0,0.88889],"9143":[0.88502,0.915,0,0,1.05556],"10216":[1.25003,1.75,0,0,0.80556],"10217":[1.25003,1.75,0,0,0.80556],"57344":[-0.00499,0.605,0,0,1.05556],"57345":[-0.00499,0.605,0,0,1.05556],"57680":[0,0.12,0,0,0.45],"57681":[0,0.12,0,0,0.45],"57682":[0,0.12,0,0,0.45],"57683":[0,0.12,0,0,0.45]},"Typewriter-Regular":{"32":[0,0,0,0,0.525],"33":[0,0.61111,0,0,0.525],"34":[0,0.61111,0,0,0.525],"35":[0,0.61111,0,0,0.525],"36":[0.08333,0.69444,0,0,0.525],"37":[0.08333,0.69444,0,0,0.525],"38":[0,0.61111,0,0,0.525],"39":[0,0.61111,0,0,0.525],"40":[0.08333,0.69444,0,0,0.525],"41":[0.08333,0.69444,0,0,0.525],"42":[0,0.52083,0,0,0.525],"43":[-0.08056,0.53055,0,0,0.525],"44":[0.13889,0.125,0,0,0.525],"45":[-0.08056,0.53055,0,0,0.525],"46":[0,0.125,0,0,0.525],"47":[0.08333,0.69444,0,0,0.525],"48":[0,0.61111,0,0,0.525],"49":[0,0.61111,0,0,0.525],"50":[0,0.61111,0,0,0.525],"51":[0,0.61111,0,0,0.525],"52":[0,0.61111,0,0,0.525],"53":[0,0.61111,0,0,0.525],"54":[0,0.61111,0,0,0.525],"55":[0,0.61111,0,0,0.525],"56":[0,0.61111,0,0,0.525],"57":[0,0.61111,0,0,0.525],"58":[0,0.43056,0,0,0.525],"59":[0.13889,0.43056,0,0,0.525],"60":[-0.05556,0.55556,0,0,0.525],"61":[-0.19549,0.41562,0,0,0.525],"62":[-0.05556,0.55556,0,0,0.525],"63":[0,0.61111,0,0,0.525],"64":[0,0.61111,0,0,0.525],"65":[0,0.61111,0,0,0.525],"66":[0,0.61111,0,0,0.525],"67":[0,0.61111,0,0,0.525],"68":[0,0.61111,0,0,0.525],"69":[0,0.61111,0,0,0.525],"70":[0,0.61111,0,0,0.525],"71":[0,0.61111,0,0,0.525],"72":[0,0.61111,0,0,0.525],"73":[0,0.61111,0,0,0.525],"74":[0,0.61111,0,0,0.525],"75":[0,0.61111,0,0,0.525],"76":[0,0.61111,0,0,0.525],"77":[0,0.61111,0,0,0.525],"78":[0,0.61111,0,0,0.525],"79":[0,0.61111,0,0,0.525],"80":[0,0.61111,0,0,0.525],"81":[0.13889,0.61111,0,0,0.525],"82":[0,0.61111,0,0,0.525],"83":[0,0.61111,0,0,0.525],"84":[0,0.61111,0,0,0.525],"85":[0,0.61111,0,0,0.525],"86":[0,0.61111,0,0,0.525],"87":[0,0.61111,0,0,0.525],"88":[0,0.61111,0,0,0.525],"89":[0,0.61111,0,0,0.525],"90":[0,0.61111,0,0,0.525],"91":[0.08333,0.69444,0,0,0.525],"92":[0.08333,0.69444,0,0,0.525],"93":[0.08333,0.69444,0,0,0.525],"94":[0,0.61111,0,0,0.525],"95":[0.09514,0,0,0,0.525],"96":[0,0.61111,0,0,0.525],"97":[0,0.43056,0,0,0.525],"98":[0,0.61111,0,0,0.525],"99":[0,0.43056,0,0,0.525],"100":[0,0.61111,0,0,0.525],"101":[0,0.43056,0,0,0.525],"102":[0,0.61111,0,0,0.525],"103":[0.22222,0.43056,0,0,0.525],"104":[0,0.61111,0,0,0.525],"105":[0,0.61111,0,0,0.525],"106":[0.22222,0.61111,0,0,0.525],"107":[0,0.61111,0,0,0.525],"108":[0,0.61111,0,0,0.525],"109":[0,0.43056,0,0,0.525],"110":[0,0.43056,0,0,0.525],"111":[0,0.43056,0,0,0.525],"112":[0.22222,0.43056,0,0,0.525],"113":[0.22222,0.43056,0,0,0.525],"114":[0,0.43056,0,0,0.525],"115":[0,0.43056,0,0,0.525],"116":[0,0.55358,0,0,0.525],"117":[0,0.43056,0,0,0.525],"118":[0,0.43056,0,0,0.525],"119":[0,0.43056,0,0,0.525],"120":[0,0.43056,0,0,0.525],"121":[0.22222,0.43056,0,0,0.525],"122":[0,0.43056,0,0,0.525],"123":[0.08333,0.69444,0,0,0.525],"124":[0.08333,0.69444,0,0,0.525],"125":[0.08333,0.69444,0,0,0.525],"126":[0,0.61111,0,0,0.525],"127":[0,0.61111,0,0,0.525],"160":[0,0,0,0,0.525],"176":[0,0.61111,0,0,0.525],"184":[0.19445,0,0,0,0.525],"305":[0,0.43056,0,0,0.525],"567":[0.22222,0.43056,0,0,0.525],"711":[0,0.56597,0,0,0.525],"713":[0,0.56555,0,0,0.525],"714":[0,0.61111,0,0,0.525],"715":[0,0.61111,0,0,0.525],"728":[0,0.61111,0,0,0.525],"730":[0,0.61111,0,0,0.525],"770":[0,0.61111,0,0,0.525],"771":[0,0.61111,0,0,0.525],"776":[0,0.61111,0,0,0.525],"915":[0,0.61111,0,0,0.525],"916":[0,0.61111,0,0,0.525],"920":[0,0.61111,0,0,0.525],"923":[0,0.61111,0,0,0.525],"926":[0,0.61111,0,0,0.525],"928":[0,0.61111,0,0,0.525],"931":[0,0.61111,0,0,0.525],"933":[0,0.61111,0,0,0.525],"934":[0,0.61111,0,0,0.525],"936":[0,0.61111,0,0,0.525],"937":[0,0.61111,0,0,0.525],"8216":[0,0.61111,0,0,0.525],"8217":[0,0.61111,0,0,0.525],"8242":[0,0.61111,0,0,0.525],"9251":[0.11111,0.21944,0,0,0.525]}};// CONCATENATED MODULE: ./src/fontMetrics.js
/**
 * This file contains metrics regarding fonts and individual symbols. The sigma
 * and xi variables, as well as the metricMap map contain data extracted from
 * TeX, TeX font metrics, and the TTF files. These data are then exposed via the
 * `metrics` variable and the getCharacterMetrics function.
 */ // In TeX, there are actually three sets of dimensions, one for each of
// textstyle (size index 5 and higher: >=9pt), scriptstyle (size index 3 and 4:
// 7-8pt), and scriptscriptstyle (size index 1 and 2: 5-6pt).  These are
// provided in the the arrays below, in that order.
//
// The font metrics are stored in fonts cmsy10, cmsy7, and cmsy5 respsectively.
// This was determined by running the following script:
//
//     latex -interaction=nonstopmode \
//     '\documentclass{article}\usepackage{amsmath}\begin{document}' \
//     '$a$ \expandafter\show\the\textfont2' \
//     '\expandafter\show\the\scriptfont2' \
//     '\expandafter\show\the\scriptscriptfont2' \
//     '\stop'
//
// The metrics themselves were retreived using the following commands:
//
//     tftopl cmsy10
//     tftopl cmsy7
//     tftopl cmsy5
//
// The output of each of these commands is quite lengthy.  The only part we
// care about is the FONTDIMEN section. Each value is measured in EMs.
var sigmasAndXis={slant:[0.250,0.250,0.250],// sigma1
space:[0.000,0.000,0.000],// sigma2
stretch:[0.000,0.000,0.000],// sigma3
shrink:[0.000,0.000,0.000],// sigma4
xHeight:[0.431,0.431,0.431],// sigma5
quad:[1.000,1.171,1.472],// sigma6
extraSpace:[0.000,0.000,0.000],// sigma7
num1:[0.677,0.732,0.925],// sigma8
num2:[0.394,0.384,0.387],// sigma9
num3:[0.444,0.471,0.504],// sigma10
denom1:[0.686,0.752,1.025],// sigma11
denom2:[0.345,0.344,0.532],// sigma12
sup1:[0.413,0.503,0.504],// sigma13
sup2:[0.363,0.431,0.404],// sigma14
sup3:[0.289,0.286,0.294],// sigma15
sub1:[0.150,0.143,0.200],// sigma16
sub2:[0.247,0.286,0.400],// sigma17
supDrop:[0.386,0.353,0.494],// sigma18
subDrop:[0.050,0.071,0.100],// sigma19
delim1:[2.390,1.700,1.980],// sigma20
delim2:[1.010,1.157,1.420],// sigma21
axisHeight:[0.250,0.250,0.250],// sigma22
// These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
// they correspond to the font parameters of the extension fonts (family 3).
// See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
// match cmex7, we'd use cmex7.tfm values for script and scriptscript
// values.
defaultRuleThickness:[0.04,0.049,0.049],// xi8; cmex7: 0.049
bigOpSpacing1:[0.111,0.111,0.111],// xi9
bigOpSpacing2:[0.166,0.166,0.166],// xi10
bigOpSpacing3:[0.2,0.2,0.2],// xi11
bigOpSpacing4:[0.6,0.611,0.611],// xi12; cmex7: 0.611
bigOpSpacing5:[0.1,0.143,0.143],// xi13; cmex7: 0.143
// The \sqrt rule width is taken from the height of the surd character.
// Since we use the same font at all sizes, this thickness doesn't scale.
sqrtRuleThickness:[0.04,0.04,0.04],// This value determines how large a pt is, for metrics which are defined
// in terms of pts.
// This value is also used in katex.less; if you change it make sure the
// values match.
ptPerEm:[10.0,10.0,10.0],// The space between adjacent `|` columns in an array definition. From
// `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
doubleRuleSep:[0.2,0.2,0.2],// The width of separator lines in {array} environments. From
// `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
arrayRuleWidth:[0.04,0.04,0.04],// Two values from LaTeX source2e:
fboxsep:[0.3,0.3,0.3],//        3 pt / ptPerEm
fboxrule:[0.04,0.04,0.04]// 0.4 pt / ptPerEm
};// This map contains a mapping from font name and character code to character
// metrics, including height, depth, italic correction, and skew (kern from the
// character to the corresponding \skewchar)
// This map is generated via `make metrics`. It should not be changed manually.
// These are very rough approximations.  We default to Times New Roman which
// should have Latin-1 and Cyrillic characters, but may not depending on the
// operating system.  The metrics do not account for extra height from the
// accents.  In the case of Cyrillic characters which have both ascenders and
// descenders we prefer approximations with ascenders, primarily to prevent
// the fraction bar or root line from intersecting the glyph.
// TODO(kevinb) allow union of multiple glyph metrics for better accuracy.
var extraCharacterMap={// Latin-1
'Å':'A','Ç':'C','Ð':'D','Þ':'o','å':'a','ç':'c','ð':'d','þ':'o',// Cyrillic
'А':'A','Б':'B','В':'B','Г':'F','Д':'A','Е':'E','Ж':'K','З':'3','И':'N','Й':'N','К':'K','Л':'N','М':'M','Н':'H','О':'O','П':'N','Р':'P','С':'C','Т':'T','У':'y','Ф':'O','Х':'X','Ц':'U','Ч':'h','Ш':'W','Щ':'W','Ъ':'B','Ы':'X','Ь':'B','Э':'3','Ю':'X','Я':'R','а':'a','б':'b','в':'a','г':'r','д':'y','е':'e','ж':'m','з':'e','и':'n','й':'n','к':'n','л':'n','м':'m','н':'n','о':'o','п':'n','р':'p','с':'c','т':'o','у':'y','ф':'b','х':'x','ц':'n','ч':'n','ш':'w','щ':'w','ъ':'a','ы':'m','ь':'a','э':'e','ю':'m','я':'r'};/**
 * This function adds new font metrics to default metricMap
 * It can also override existing metrics
 */function setFontMetrics(fontName,metrics){fontMetricsData[fontName]=metrics;}/**
 * This function is a convenience function for looking up information in the
 * metricMap table. It takes a character as a string, and a font.
 *
 * Note: the `width` property may be undefined if fontMetricsData.js wasn't
 * built using `Make extended_metrics`.
 */function getCharacterMetrics(character,font,mode){if(!fontMetricsData[font]){throw new Error("Font metrics not found for font: "+font+".");}var ch=character.charCodeAt(0);var metrics=fontMetricsData[font][ch];if(!metrics&&character[0]in extraCharacterMap){ch=extraCharacterMap[character[0]].charCodeAt(0);metrics=fontMetricsData[font][ch];}if(!metrics&&mode==='text'){// We don't typically have font metrics for Asian scripts.
// But since we support them in text mode, we need to return
// some sort of metrics.
// So if the character is in a script we support but we
// don't have metrics for it, just use the metrics for
// the Latin capital letter M. This is close enough because
// we (currently) only care about the height of the glpyh
// not its width.
if(supportedCodepoint(ch)){metrics=fontMetricsData[font][77];// 77 is the charcode for 'M'
}}if(metrics){return {depth:metrics[0],height:metrics[1],italic:metrics[2],skew:metrics[3],width:metrics[4]};}}var fontMetricsBySizeIndex={};/**
 * Get the font metrics for a given size.
 */function getGlobalMetrics(size){var sizeIndex;if(size>=5){sizeIndex=0;}else if(size>=3){sizeIndex=1;}else {sizeIndex=2;}if(!fontMetricsBySizeIndex[sizeIndex]){var metrics=fontMetricsBySizeIndex[sizeIndex]={cssEmPerMu:sigmasAndXis.quad[sizeIndex]/18};for(var key in sigmasAndXis){if(sigmasAndXis.hasOwnProperty(key)){metrics[key]=sigmasAndXis[key][sizeIndex];}}}return fontMetricsBySizeIndex[sizeIndex];}// CONCATENATED MODULE: ./src/symbols.js
/**
 * This file holds a list of all no-argument functions and single-character
 * symbols (like 'a' or ';').
 *
 * For each of the symbols, there are three properties they can have:
 * - font (required): the font to be used for this symbol. Either "main" (the
     normal font), or "ams" (the ams fonts).
 * - group (required): the ParseNode group type the symbol should have (i.e.
     "textord", "mathord", etc).
     See https://github.com/KaTeX/KaTeX/wiki/Examining-TeX#group-types
 * - replace: the character that this symbol or function should be
 *   replaced with (i.e. "\phi" has a replace value of "\u03d5", the phi
 *   character in the main font).
 *
 * The outermost map in the table indicates what mode the symbols should be
 * accepted in (e.g. "math" or "text").
 */ // Some of these have a "-token" suffix since these are also used as `ParseNode`
// types for raw text tokens, and we want to avoid conflicts with higher-level
// `ParseNode` types. These `ParseNode`s are constructed within `Parser` by
// looking up the `symbols` map.
var ATOMS={"bin":1,"close":1,"inner":1,"open":1,"punct":1,"rel":1};var NON_ATOMS={"accent-token":1,"mathord":1,"op-token":1,"spacing":1,"textord":1};var symbols={"math":{},"text":{}};/* harmony default export */var src_symbols=symbols;/** `acceptUnicodeChar = true` is only applicable if `replace` is set. */function defineSymbol(mode,font,group,replace,name,acceptUnicodeChar){symbols[mode][name]={font:font,group:group,replace:replace};if(acceptUnicodeChar&&replace){symbols[mode][replace]=symbols[mode][name];}}// Some abbreviations for commonly used strings.
// This helps minify the code, and also spotting typos using jshint.
// modes:
var symbols_math="math";var symbols_text="text";// fonts:
var main="main";var ams="ams";// groups:
var symbols_accent="accent-token";var bin="bin";var symbols_close="close";var symbols_inner="inner";var mathord="mathord";var op="op-token";var symbols_open="open";var punct="punct";var rel="rel";var symbols_spacing="spacing";var symbols_textord="textord";// Now comes the symbol table
// Relation Symbols
defineSymbol(symbols_math,main,rel,"\u2261","\\equiv",true);defineSymbol(symbols_math,main,rel,"\u227A","\\prec",true);defineSymbol(symbols_math,main,rel,"\u227B","\\succ",true);defineSymbol(symbols_math,main,rel,"\u223C","\\sim",true);defineSymbol(symbols_math,main,rel,"\u22A5","\\perp");defineSymbol(symbols_math,main,rel,"\u2AAF","\\preceq",true);defineSymbol(symbols_math,main,rel,"\u2AB0","\\succeq",true);defineSymbol(symbols_math,main,rel,"\u2243","\\simeq",true);defineSymbol(symbols_math,main,rel,"\u2223","\\mid",true);defineSymbol(symbols_math,main,rel,"\u226A","\\ll",true);defineSymbol(symbols_math,main,rel,"\u226B","\\gg",true);defineSymbol(symbols_math,main,rel,"\u224D","\\asymp",true);defineSymbol(symbols_math,main,rel,"\u2225","\\parallel");defineSymbol(symbols_math,main,rel,"\u22C8","\\bowtie",true);defineSymbol(symbols_math,main,rel,"\u2323","\\smile",true);defineSymbol(symbols_math,main,rel,"\u2291","\\sqsubseteq",true);defineSymbol(symbols_math,main,rel,"\u2292","\\sqsupseteq",true);defineSymbol(symbols_math,main,rel,"\u2250","\\doteq",true);defineSymbol(symbols_math,main,rel,"\u2322","\\frown",true);defineSymbol(symbols_math,main,rel,"\u220B","\\ni",true);defineSymbol(symbols_math,main,rel,"\u221D","\\propto",true);defineSymbol(symbols_math,main,rel,"\u22A2","\\vdash",true);defineSymbol(symbols_math,main,rel,"\u22A3","\\dashv",true);defineSymbol(symbols_math,main,rel,"\u220B","\\owns");// Punctuation
defineSymbol(symbols_math,main,punct,".","\\ldotp");defineSymbol(symbols_math,main,punct,"\u22C5","\\cdotp");// Misc Symbols
defineSymbol(symbols_math,main,symbols_textord,"#","\\#");defineSymbol(symbols_text,main,symbols_textord,"#","\\#");defineSymbol(symbols_math,main,symbols_textord,"&","\\&");defineSymbol(symbols_text,main,symbols_textord,"&","\\&");defineSymbol(symbols_math,main,symbols_textord,"\u2135","\\aleph",true);defineSymbol(symbols_math,main,symbols_textord,"\u2200","\\forall",true);defineSymbol(symbols_math,main,symbols_textord,"\u210F","\\hbar",true);defineSymbol(symbols_math,main,symbols_textord,"\u2203","\\exists",true);defineSymbol(symbols_math,main,symbols_textord,"\u2207","\\nabla",true);defineSymbol(symbols_math,main,symbols_textord,"\u266D","\\flat",true);defineSymbol(symbols_math,main,symbols_textord,"\u2113","\\ell",true);defineSymbol(symbols_math,main,symbols_textord,"\u266E","\\natural",true);defineSymbol(symbols_math,main,symbols_textord,"\u2663","\\clubsuit",true);defineSymbol(symbols_math,main,symbols_textord,"\u2118","\\wp",true);defineSymbol(symbols_math,main,symbols_textord,"\u266F","\\sharp",true);defineSymbol(symbols_math,main,symbols_textord,"\u2662","\\diamondsuit",true);defineSymbol(symbols_math,main,symbols_textord,"\u211C","\\Re",true);defineSymbol(symbols_math,main,symbols_textord,"\u2661","\\heartsuit",true);defineSymbol(symbols_math,main,symbols_textord,"\u2111","\\Im",true);defineSymbol(symbols_math,main,symbols_textord,"\u2660","\\spadesuit",true);defineSymbol(symbols_text,main,symbols_textord,"\xA7","\\S",true);defineSymbol(symbols_text,main,symbols_textord,"\xB6","\\P",true);// Math and Text
defineSymbol(symbols_math,main,symbols_textord,"\u2020","\\dag");defineSymbol(symbols_text,main,symbols_textord,"\u2020","\\dag");defineSymbol(symbols_text,main,symbols_textord,"\u2020","\\textdagger");defineSymbol(symbols_math,main,symbols_textord,"\u2021","\\ddag");defineSymbol(symbols_text,main,symbols_textord,"\u2021","\\ddag");defineSymbol(symbols_text,main,symbols_textord,"\u2021","\\textdaggerdbl");// Large Delimiters
defineSymbol(symbols_math,main,symbols_close,"\u23B1","\\rmoustache",true);defineSymbol(symbols_math,main,symbols_open,"\u23B0","\\lmoustache",true);defineSymbol(symbols_math,main,symbols_close,"\u27EF","\\rgroup",true);defineSymbol(symbols_math,main,symbols_open,"\u27EE","\\lgroup",true);// Binary Operators
defineSymbol(symbols_math,main,bin,"\u2213","\\mp",true);defineSymbol(symbols_math,main,bin,"\u2296","\\ominus",true);defineSymbol(symbols_math,main,bin,"\u228E","\\uplus",true);defineSymbol(symbols_math,main,bin,"\u2293","\\sqcap",true);defineSymbol(symbols_math,main,bin,"\u2217","\\ast");defineSymbol(symbols_math,main,bin,"\u2294","\\sqcup",true);defineSymbol(symbols_math,main,bin,"\u25EF","\\bigcirc");defineSymbol(symbols_math,main,bin,"\u2219","\\bullet");defineSymbol(symbols_math,main,bin,"\u2021","\\ddagger");defineSymbol(symbols_math,main,bin,"\u2240","\\wr",true);defineSymbol(symbols_math,main,bin,"\u2A3F","\\amalg");defineSymbol(symbols_math,main,bin,"&","\\And");// from amsmath
// Arrow Symbols
defineSymbol(symbols_math,main,rel,"\u27F5","\\longleftarrow",true);defineSymbol(symbols_math,main,rel,"\u21D0","\\Leftarrow",true);defineSymbol(symbols_math,main,rel,"\u27F8","\\Longleftarrow",true);defineSymbol(symbols_math,main,rel,"\u27F6","\\longrightarrow",true);defineSymbol(symbols_math,main,rel,"\u21D2","\\Rightarrow",true);defineSymbol(symbols_math,main,rel,"\u27F9","\\Longrightarrow",true);defineSymbol(symbols_math,main,rel,"\u2194","\\leftrightarrow",true);defineSymbol(symbols_math,main,rel,"\u27F7","\\longleftrightarrow",true);defineSymbol(symbols_math,main,rel,"\u21D4","\\Leftrightarrow",true);defineSymbol(symbols_math,main,rel,"\u27FA","\\Longleftrightarrow",true);defineSymbol(symbols_math,main,rel,"\u21A6","\\mapsto",true);defineSymbol(symbols_math,main,rel,"\u27FC","\\longmapsto",true);defineSymbol(symbols_math,main,rel,"\u2197","\\nearrow",true);defineSymbol(symbols_math,main,rel,"\u21A9","\\hookleftarrow",true);defineSymbol(symbols_math,main,rel,"\u21AA","\\hookrightarrow",true);defineSymbol(symbols_math,main,rel,"\u2198","\\searrow",true);defineSymbol(symbols_math,main,rel,"\u21BC","\\leftharpoonup",true);defineSymbol(symbols_math,main,rel,"\u21C0","\\rightharpoonup",true);defineSymbol(symbols_math,main,rel,"\u2199","\\swarrow",true);defineSymbol(symbols_math,main,rel,"\u21BD","\\leftharpoondown",true);defineSymbol(symbols_math,main,rel,"\u21C1","\\rightharpoondown",true);defineSymbol(symbols_math,main,rel,"\u2196","\\nwarrow",true);defineSymbol(symbols_math,main,rel,"\u21CC","\\rightleftharpoons",true);// AMS Negated Binary Relations
defineSymbol(symbols_math,ams,rel,"\u226E","\\nless",true);// Symbol names preceeded by "@" each have a corresponding macro.
defineSymbol(symbols_math,ams,rel,"\uE010","\\@nleqslant");defineSymbol(symbols_math,ams,rel,"\uE011","\\@nleqq");defineSymbol(symbols_math,ams,rel,"\u2A87","\\lneq",true);defineSymbol(symbols_math,ams,rel,"\u2268","\\lneqq",true);defineSymbol(symbols_math,ams,rel,"\uE00C","\\@lvertneqq");defineSymbol(symbols_math,ams,rel,"\u22E6","\\lnsim",true);defineSymbol(symbols_math,ams,rel,"\u2A89","\\lnapprox",true);defineSymbol(symbols_math,ams,rel,"\u2280","\\nprec",true);// unicode-math maps \u22e0 to \npreccurlyeq. We'll use the AMS synonym.
defineSymbol(symbols_math,ams,rel,"\u22E0","\\npreceq",true);defineSymbol(symbols_math,ams,rel,"\u22E8","\\precnsim",true);defineSymbol(symbols_math,ams,rel,"\u2AB9","\\precnapprox",true);defineSymbol(symbols_math,ams,rel,"\u2241","\\nsim",true);defineSymbol(symbols_math,ams,rel,"\uE006","\\@nshortmid");defineSymbol(symbols_math,ams,rel,"\u2224","\\nmid",true);defineSymbol(symbols_math,ams,rel,"\u22AC","\\nvdash",true);defineSymbol(symbols_math,ams,rel,"\u22AD","\\nvDash",true);defineSymbol(symbols_math,ams,rel,"\u22EA","\\ntriangleleft");defineSymbol(symbols_math,ams,rel,"\u22EC","\\ntrianglelefteq",true);defineSymbol(symbols_math,ams,rel,"\u228A","\\subsetneq",true);defineSymbol(symbols_math,ams,rel,"\uE01A","\\@varsubsetneq");defineSymbol(symbols_math,ams,rel,"\u2ACB","\\subsetneqq",true);defineSymbol(symbols_math,ams,rel,"\uE017","\\@varsubsetneqq");defineSymbol(symbols_math,ams,rel,"\u226F","\\ngtr",true);defineSymbol(symbols_math,ams,rel,"\uE00F","\\@ngeqslant");defineSymbol(symbols_math,ams,rel,"\uE00E","\\@ngeqq");defineSymbol(symbols_math,ams,rel,"\u2A88","\\gneq",true);defineSymbol(symbols_math,ams,rel,"\u2269","\\gneqq",true);defineSymbol(symbols_math,ams,rel,"\uE00D","\\@gvertneqq");defineSymbol(symbols_math,ams,rel,"\u22E7","\\gnsim",true);defineSymbol(symbols_math,ams,rel,"\u2A8A","\\gnapprox",true);defineSymbol(symbols_math,ams,rel,"\u2281","\\nsucc",true);// unicode-math maps \u22e1 to \nsucccurlyeq. We'll use the AMS synonym.
defineSymbol(symbols_math,ams,rel,"\u22E1","\\nsucceq",true);defineSymbol(symbols_math,ams,rel,"\u22E9","\\succnsim",true);defineSymbol(symbols_math,ams,rel,"\u2ABA","\\succnapprox",true);// unicode-math maps \u2246 to \simneqq. We'll use the AMS synonym.
defineSymbol(symbols_math,ams,rel,"\u2246","\\ncong",true);defineSymbol(symbols_math,ams,rel,"\uE007","\\@nshortparallel");defineSymbol(symbols_math,ams,rel,"\u2226","\\nparallel",true);defineSymbol(symbols_math,ams,rel,"\u22AF","\\nVDash",true);defineSymbol(symbols_math,ams,rel,"\u22EB","\\ntriangleright");defineSymbol(symbols_math,ams,rel,"\u22ED","\\ntrianglerighteq",true);defineSymbol(symbols_math,ams,rel,"\uE018","\\@nsupseteqq");defineSymbol(symbols_math,ams,rel,"\u228B","\\supsetneq",true);defineSymbol(symbols_math,ams,rel,"\uE01B","\\@varsupsetneq");defineSymbol(symbols_math,ams,rel,"\u2ACC","\\supsetneqq",true);defineSymbol(symbols_math,ams,rel,"\uE019","\\@varsupsetneqq");defineSymbol(symbols_math,ams,rel,"\u22AE","\\nVdash",true);defineSymbol(symbols_math,ams,rel,"\u2AB5","\\precneqq",true);defineSymbol(symbols_math,ams,rel,"\u2AB6","\\succneqq",true);defineSymbol(symbols_math,ams,rel,"\uE016","\\@nsubseteqq");defineSymbol(symbols_math,ams,bin,"\u22B4","\\unlhd");defineSymbol(symbols_math,ams,bin,"\u22B5","\\unrhd");// AMS Negated Arrows
defineSymbol(symbols_math,ams,rel,"\u219A","\\nleftarrow",true);defineSymbol(symbols_math,ams,rel,"\u219B","\\nrightarrow",true);defineSymbol(symbols_math,ams,rel,"\u21CD","\\nLeftarrow",true);defineSymbol(symbols_math,ams,rel,"\u21CF","\\nRightarrow",true);defineSymbol(symbols_math,ams,rel,"\u21AE","\\nleftrightarrow",true);defineSymbol(symbols_math,ams,rel,"\u21CE","\\nLeftrightarrow",true);// AMS Misc
defineSymbol(symbols_math,ams,rel,"\u25B3","\\vartriangle");defineSymbol(symbols_math,ams,symbols_textord,"\u210F","\\hslash");defineSymbol(symbols_math,ams,symbols_textord,"\u25BD","\\triangledown");defineSymbol(symbols_math,ams,symbols_textord,"\u25CA","\\lozenge");defineSymbol(symbols_math,ams,symbols_textord,"\u24C8","\\circledS");defineSymbol(symbols_math,ams,symbols_textord,"\xAE","\\circledR");defineSymbol(symbols_text,ams,symbols_textord,"\xAE","\\circledR");defineSymbol(symbols_math,ams,symbols_textord,"\u2221","\\measuredangle",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2204","\\nexists");defineSymbol(symbols_math,ams,symbols_textord,"\u2127","\\mho");defineSymbol(symbols_math,ams,symbols_textord,"\u2132","\\Finv",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2141","\\Game",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2035","\\backprime");defineSymbol(symbols_math,ams,symbols_textord,"\u25B2","\\blacktriangle");defineSymbol(symbols_math,ams,symbols_textord,"\u25BC","\\blacktriangledown");defineSymbol(symbols_math,ams,symbols_textord,"\u25A0","\\blacksquare");defineSymbol(symbols_math,ams,symbols_textord,"\u29EB","\\blacklozenge");defineSymbol(symbols_math,ams,symbols_textord,"\u2605","\\bigstar");defineSymbol(symbols_math,ams,symbols_textord,"\u2222","\\sphericalangle",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2201","\\complement",true);// unicode-math maps U+F0 to \matheth. We map to AMS function \eth
defineSymbol(symbols_math,ams,symbols_textord,"\xF0","\\eth",true);defineSymbol(symbols_text,main,symbols_textord,"\xF0","\xF0");defineSymbol(symbols_math,ams,symbols_textord,"\u2571","\\diagup");defineSymbol(symbols_math,ams,symbols_textord,"\u2572","\\diagdown");defineSymbol(symbols_math,ams,symbols_textord,"\u25A1","\\square");defineSymbol(symbols_math,ams,symbols_textord,"\u25A1","\\Box");defineSymbol(symbols_math,ams,symbols_textord,"\u25CA","\\Diamond");// unicode-math maps U+A5 to \mathyen. We map to AMS function \yen
defineSymbol(symbols_math,ams,symbols_textord,"\xA5","\\yen",true);defineSymbol(symbols_text,ams,symbols_textord,"\xA5","\\yen",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2713","\\checkmark",true);defineSymbol(symbols_text,ams,symbols_textord,"\u2713","\\checkmark");// AMS Hebrew
defineSymbol(symbols_math,ams,symbols_textord,"\u2136","\\beth",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2138","\\daleth",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2137","\\gimel",true);// AMS Greek
defineSymbol(symbols_math,ams,symbols_textord,"\u03DD","\\digamma",true);defineSymbol(symbols_math,ams,symbols_textord,"\u03F0","\\varkappa");// AMS Delimiters
defineSymbol(symbols_math,ams,symbols_open,"\u250C","\\@ulcorner",true);defineSymbol(symbols_math,ams,symbols_close,"\u2510","\\@urcorner",true);defineSymbol(symbols_math,ams,symbols_open,"\u2514","\\@llcorner",true);defineSymbol(symbols_math,ams,symbols_close,"\u2518","\\@lrcorner",true);// AMS Binary Relations
defineSymbol(symbols_math,ams,rel,"\u2266","\\leqq",true);defineSymbol(symbols_math,ams,rel,"\u2A7D","\\leqslant",true);defineSymbol(symbols_math,ams,rel,"\u2A95","\\eqslantless",true);defineSymbol(symbols_math,ams,rel,"\u2272","\\lesssim",true);defineSymbol(symbols_math,ams,rel,"\u2A85","\\lessapprox",true);defineSymbol(symbols_math,ams,rel,"\u224A","\\approxeq",true);defineSymbol(symbols_math,ams,bin,"\u22D6","\\lessdot");defineSymbol(symbols_math,ams,rel,"\u22D8","\\lll",true);defineSymbol(symbols_math,ams,rel,"\u2276","\\lessgtr",true);defineSymbol(symbols_math,ams,rel,"\u22DA","\\lesseqgtr",true);defineSymbol(symbols_math,ams,rel,"\u2A8B","\\lesseqqgtr",true);defineSymbol(symbols_math,ams,rel,"\u2251","\\doteqdot");defineSymbol(symbols_math,ams,rel,"\u2253","\\risingdotseq",true);defineSymbol(symbols_math,ams,rel,"\u2252","\\fallingdotseq",true);defineSymbol(symbols_math,ams,rel,"\u223D","\\backsim",true);defineSymbol(symbols_math,ams,rel,"\u22CD","\\backsimeq",true);defineSymbol(symbols_math,ams,rel,"\u2AC5","\\subseteqq",true);defineSymbol(symbols_math,ams,rel,"\u22D0","\\Subset",true);defineSymbol(symbols_math,ams,rel,"\u228F","\\sqsubset",true);defineSymbol(symbols_math,ams,rel,"\u227C","\\preccurlyeq",true);defineSymbol(symbols_math,ams,rel,"\u22DE","\\curlyeqprec",true);defineSymbol(symbols_math,ams,rel,"\u227E","\\precsim",true);defineSymbol(symbols_math,ams,rel,"\u2AB7","\\precapprox",true);defineSymbol(symbols_math,ams,rel,"\u22B2","\\vartriangleleft");defineSymbol(symbols_math,ams,rel,"\u22B4","\\trianglelefteq");defineSymbol(symbols_math,ams,rel,"\u22A8","\\vDash",true);defineSymbol(symbols_math,ams,rel,"\u22AA","\\Vvdash",true);defineSymbol(symbols_math,ams,rel,"\u2323","\\smallsmile");defineSymbol(symbols_math,ams,rel,"\u2322","\\smallfrown");defineSymbol(symbols_math,ams,rel,"\u224F","\\bumpeq",true);defineSymbol(symbols_math,ams,rel,"\u224E","\\Bumpeq",true);defineSymbol(symbols_math,ams,rel,"\u2267","\\geqq",true);defineSymbol(symbols_math,ams,rel,"\u2A7E","\\geqslant",true);defineSymbol(symbols_math,ams,rel,"\u2A96","\\eqslantgtr",true);defineSymbol(symbols_math,ams,rel,"\u2273","\\gtrsim",true);defineSymbol(symbols_math,ams,rel,"\u2A86","\\gtrapprox",true);defineSymbol(symbols_math,ams,bin,"\u22D7","\\gtrdot");defineSymbol(symbols_math,ams,rel,"\u22D9","\\ggg",true);defineSymbol(symbols_math,ams,rel,"\u2277","\\gtrless",true);defineSymbol(symbols_math,ams,rel,"\u22DB","\\gtreqless",true);defineSymbol(symbols_math,ams,rel,"\u2A8C","\\gtreqqless",true);defineSymbol(symbols_math,ams,rel,"\u2256","\\eqcirc",true);defineSymbol(symbols_math,ams,rel,"\u2257","\\circeq",true);defineSymbol(symbols_math,ams,rel,"\u225C","\\triangleq",true);defineSymbol(symbols_math,ams,rel,"\u223C","\\thicksim");defineSymbol(symbols_math,ams,rel,"\u2248","\\thickapprox");defineSymbol(symbols_math,ams,rel,"\u2AC6","\\supseteqq",true);defineSymbol(symbols_math,ams,rel,"\u22D1","\\Supset",true);defineSymbol(symbols_math,ams,rel,"\u2290","\\sqsupset",true);defineSymbol(symbols_math,ams,rel,"\u227D","\\succcurlyeq",true);defineSymbol(symbols_math,ams,rel,"\u22DF","\\curlyeqsucc",true);defineSymbol(symbols_math,ams,rel,"\u227F","\\succsim",true);defineSymbol(symbols_math,ams,rel,"\u2AB8","\\succapprox",true);defineSymbol(symbols_math,ams,rel,"\u22B3","\\vartriangleright");defineSymbol(symbols_math,ams,rel,"\u22B5","\\trianglerighteq");defineSymbol(symbols_math,ams,rel,"\u22A9","\\Vdash",true);defineSymbol(symbols_math,ams,rel,"\u2223","\\shortmid");defineSymbol(symbols_math,ams,rel,"\u2225","\\shortparallel");defineSymbol(symbols_math,ams,rel,"\u226C","\\between",true);defineSymbol(symbols_math,ams,rel,"\u22D4","\\pitchfork",true);defineSymbol(symbols_math,ams,rel,"\u221D","\\varpropto");defineSymbol(symbols_math,ams,rel,"\u25C0","\\blacktriangleleft");// unicode-math says that \therefore is a mathord atom.
// We kept the amssymb atom type, which is rel.
defineSymbol(symbols_math,ams,rel,"\u2234","\\therefore",true);defineSymbol(symbols_math,ams,rel,"\u220D","\\backepsilon");defineSymbol(symbols_math,ams,rel,"\u25B6","\\blacktriangleright");// unicode-math says that \because is a mathord atom.
// We kept the amssymb atom type, which is rel.
defineSymbol(symbols_math,ams,rel,"\u2235","\\because",true);defineSymbol(symbols_math,ams,rel,"\u22D8","\\llless");defineSymbol(symbols_math,ams,rel,"\u22D9","\\gggtr");defineSymbol(symbols_math,ams,bin,"\u22B2","\\lhd");defineSymbol(symbols_math,ams,bin,"\u22B3","\\rhd");defineSymbol(symbols_math,ams,rel,"\u2242","\\eqsim",true);defineSymbol(symbols_math,main,rel,"\u22C8","\\Join");defineSymbol(symbols_math,ams,rel,"\u2251","\\Doteq",true);// AMS Binary Operators
defineSymbol(symbols_math,ams,bin,"\u2214","\\dotplus",true);defineSymbol(symbols_math,ams,bin,"\u2216","\\smallsetminus");defineSymbol(symbols_math,ams,bin,"\u22D2","\\Cap",true);defineSymbol(symbols_math,ams,bin,"\u22D3","\\Cup",true);defineSymbol(symbols_math,ams,bin,"\u2A5E","\\doublebarwedge",true);defineSymbol(symbols_math,ams,bin,"\u229F","\\boxminus",true);defineSymbol(symbols_math,ams,bin,"\u229E","\\boxplus",true);defineSymbol(symbols_math,ams,bin,"\u22C7","\\divideontimes",true);defineSymbol(symbols_math,ams,bin,"\u22C9","\\ltimes",true);defineSymbol(symbols_math,ams,bin,"\u22CA","\\rtimes",true);defineSymbol(symbols_math,ams,bin,"\u22CB","\\leftthreetimes",true);defineSymbol(symbols_math,ams,bin,"\u22CC","\\rightthreetimes",true);defineSymbol(symbols_math,ams,bin,"\u22CF","\\curlywedge",true);defineSymbol(symbols_math,ams,bin,"\u22CE","\\curlyvee",true);defineSymbol(symbols_math,ams,bin,"\u229D","\\circleddash",true);defineSymbol(symbols_math,ams,bin,"\u229B","\\circledast",true);defineSymbol(symbols_math,ams,bin,"\u22C5","\\centerdot");defineSymbol(symbols_math,ams,bin,"\u22BA","\\intercal",true);defineSymbol(symbols_math,ams,bin,"\u22D2","\\doublecap");defineSymbol(symbols_math,ams,bin,"\u22D3","\\doublecup");defineSymbol(symbols_math,ams,bin,"\u22A0","\\boxtimes",true);// AMS Arrows
// Note: unicode-math maps \u21e2 to their own function \rightdasharrow.
// We'll map it to AMS function \dashrightarrow. It produces the same atom.
defineSymbol(symbols_math,ams,rel,"\u21E2","\\dashrightarrow",true);// unicode-math maps \u21e0 to \leftdasharrow. We'll use the AMS synonym.
defineSymbol(symbols_math,ams,rel,"\u21E0","\\dashleftarrow",true);defineSymbol(symbols_math,ams,rel,"\u21C7","\\leftleftarrows",true);defineSymbol(symbols_math,ams,rel,"\u21C6","\\leftrightarrows",true);defineSymbol(symbols_math,ams,rel,"\u21DA","\\Lleftarrow",true);defineSymbol(symbols_math,ams,rel,"\u219E","\\twoheadleftarrow",true);defineSymbol(symbols_math,ams,rel,"\u21A2","\\leftarrowtail",true);defineSymbol(symbols_math,ams,rel,"\u21AB","\\looparrowleft",true);defineSymbol(symbols_math,ams,rel,"\u21CB","\\leftrightharpoons",true);defineSymbol(symbols_math,ams,rel,"\u21B6","\\curvearrowleft",true);// unicode-math maps \u21ba to \acwopencirclearrow. We'll use the AMS synonym.
defineSymbol(symbols_math,ams,rel,"\u21BA","\\circlearrowleft",true);defineSymbol(symbols_math,ams,rel,"\u21B0","\\Lsh",true);defineSymbol(symbols_math,ams,rel,"\u21C8","\\upuparrows",true);defineSymbol(symbols_math,ams,rel,"\u21BF","\\upharpoonleft",true);defineSymbol(symbols_math,ams,rel,"\u21C3","\\downharpoonleft",true);defineSymbol(symbols_math,ams,rel,"\u22B8","\\multimap",true);defineSymbol(symbols_math,ams,rel,"\u21AD","\\leftrightsquigarrow",true);defineSymbol(symbols_math,ams,rel,"\u21C9","\\rightrightarrows",true);defineSymbol(symbols_math,ams,rel,"\u21C4","\\rightleftarrows",true);defineSymbol(symbols_math,ams,rel,"\u21A0","\\twoheadrightarrow",true);defineSymbol(symbols_math,ams,rel,"\u21A3","\\rightarrowtail",true);defineSymbol(symbols_math,ams,rel,"\u21AC","\\looparrowright",true);defineSymbol(symbols_math,ams,rel,"\u21B7","\\curvearrowright",true);// unicode-math maps \u21bb to \cwopencirclearrow. We'll use the AMS synonym.
defineSymbol(symbols_math,ams,rel,"\u21BB","\\circlearrowright",true);defineSymbol(symbols_math,ams,rel,"\u21B1","\\Rsh",true);defineSymbol(symbols_math,ams,rel,"\u21CA","\\downdownarrows",true);defineSymbol(symbols_math,ams,rel,"\u21BE","\\upharpoonright",true);defineSymbol(symbols_math,ams,rel,"\u21C2","\\downharpoonright",true);defineSymbol(symbols_math,ams,rel,"\u21DD","\\rightsquigarrow",true);defineSymbol(symbols_math,ams,rel,"\u21DD","\\leadsto");defineSymbol(symbols_math,ams,rel,"\u21DB","\\Rrightarrow",true);defineSymbol(symbols_math,ams,rel,"\u21BE","\\restriction");defineSymbol(symbols_math,main,symbols_textord,"\u2018","`");defineSymbol(symbols_math,main,symbols_textord,"$","\\$");defineSymbol(symbols_text,main,symbols_textord,"$","\\$");defineSymbol(symbols_text,main,symbols_textord,"$","\\textdollar");defineSymbol(symbols_math,main,symbols_textord,"%","\\%");defineSymbol(symbols_text,main,symbols_textord,"%","\\%");defineSymbol(symbols_math,main,symbols_textord,"_","\\_");defineSymbol(symbols_text,main,symbols_textord,"_","\\_");defineSymbol(symbols_text,main,symbols_textord,"_","\\textunderscore");defineSymbol(symbols_math,main,symbols_textord,"\u2220","\\angle",true);defineSymbol(symbols_math,main,symbols_textord,"\u221E","\\infty",true);defineSymbol(symbols_math,main,symbols_textord,"\u2032","\\prime");defineSymbol(symbols_math,main,symbols_textord,"\u25B3","\\triangle");defineSymbol(symbols_math,main,symbols_textord,"\u0393","\\Gamma",true);defineSymbol(symbols_math,main,symbols_textord,"\u0394","\\Delta",true);defineSymbol(symbols_math,main,symbols_textord,"\u0398","\\Theta",true);defineSymbol(symbols_math,main,symbols_textord,"\u039B","\\Lambda",true);defineSymbol(symbols_math,main,symbols_textord,"\u039E","\\Xi",true);defineSymbol(symbols_math,main,symbols_textord,"\u03A0","\\Pi",true);defineSymbol(symbols_math,main,symbols_textord,"\u03A3","\\Sigma",true);defineSymbol(symbols_math,main,symbols_textord,"\u03A5","\\Upsilon",true);defineSymbol(symbols_math,main,symbols_textord,"\u03A6","\\Phi",true);defineSymbol(symbols_math,main,symbols_textord,"\u03A8","\\Psi",true);defineSymbol(symbols_math,main,symbols_textord,"\u03A9","\\Omega",true);defineSymbol(symbols_math,main,symbols_textord,"A","\u0391");defineSymbol(symbols_math,main,symbols_textord,"B","\u0392");defineSymbol(symbols_math,main,symbols_textord,"E","\u0395");defineSymbol(symbols_math,main,symbols_textord,"Z","\u0396");defineSymbol(symbols_math,main,symbols_textord,"H","\u0397");defineSymbol(symbols_math,main,symbols_textord,"I","\u0399");defineSymbol(symbols_math,main,symbols_textord,"K","\u039A");defineSymbol(symbols_math,main,symbols_textord,"M","\u039C");defineSymbol(symbols_math,main,symbols_textord,"N","\u039D");defineSymbol(symbols_math,main,symbols_textord,"O","\u039F");defineSymbol(symbols_math,main,symbols_textord,"P","\u03A1");defineSymbol(symbols_math,main,symbols_textord,"T","\u03A4");defineSymbol(symbols_math,main,symbols_textord,"X","\u03A7");defineSymbol(symbols_math,main,symbols_textord,"\xAC","\\neg",true);defineSymbol(symbols_math,main,symbols_textord,"\xAC","\\lnot");defineSymbol(symbols_math,main,symbols_textord,"\u22A4","\\top");defineSymbol(symbols_math,main,symbols_textord,"\u22A5","\\bot");defineSymbol(symbols_math,main,symbols_textord,"\u2205","\\emptyset");defineSymbol(symbols_math,ams,symbols_textord,"\u2205","\\varnothing");defineSymbol(symbols_math,main,mathord,"\u03B1","\\alpha",true);defineSymbol(symbols_math,main,mathord,"\u03B2","\\beta",true);defineSymbol(symbols_math,main,mathord,"\u03B3","\\gamma",true);defineSymbol(symbols_math,main,mathord,"\u03B4","\\delta",true);defineSymbol(symbols_math,main,mathord,"\u03F5","\\epsilon",true);defineSymbol(symbols_math,main,mathord,"\u03B6","\\zeta",true);defineSymbol(symbols_math,main,mathord,"\u03B7","\\eta",true);defineSymbol(symbols_math,main,mathord,"\u03B8","\\theta",true);defineSymbol(symbols_math,main,mathord,"\u03B9","\\iota",true);defineSymbol(symbols_math,main,mathord,"\u03BA","\\kappa",true);defineSymbol(symbols_math,main,mathord,"\u03BB","\\lambda",true);defineSymbol(symbols_math,main,mathord,"\u03BC","\\mu",true);defineSymbol(symbols_math,main,mathord,"\u03BD","\\nu",true);defineSymbol(symbols_math,main,mathord,"\u03BE","\\xi",true);defineSymbol(symbols_math,main,mathord,"\u03BF","\\omicron",true);defineSymbol(symbols_math,main,mathord,"\u03C0","\\pi",true);defineSymbol(symbols_math,main,mathord,"\u03C1","\\rho",true);defineSymbol(symbols_math,main,mathord,"\u03C3","\\sigma",true);defineSymbol(symbols_math,main,mathord,"\u03C4","\\tau",true);defineSymbol(symbols_math,main,mathord,"\u03C5","\\upsilon",true);defineSymbol(symbols_math,main,mathord,"\u03D5","\\phi",true);defineSymbol(symbols_math,main,mathord,"\u03C7","\\chi",true);defineSymbol(symbols_math,main,mathord,"\u03C8","\\psi",true);defineSymbol(symbols_math,main,mathord,"\u03C9","\\omega",true);defineSymbol(symbols_math,main,mathord,"\u03B5","\\varepsilon",true);defineSymbol(symbols_math,main,mathord,"\u03D1","\\vartheta",true);defineSymbol(symbols_math,main,mathord,"\u03D6","\\varpi",true);defineSymbol(symbols_math,main,mathord,"\u03F1","\\varrho",true);defineSymbol(symbols_math,main,mathord,"\u03C2","\\varsigma",true);defineSymbol(symbols_math,main,mathord,"\u03C6","\\varphi",true);defineSymbol(symbols_math,main,bin,"\u2217","*");defineSymbol(symbols_math,main,bin,"+","+");defineSymbol(symbols_math,main,bin,"\u2212","-");defineSymbol(symbols_math,main,bin,"\u22C5","\\cdot",true);defineSymbol(symbols_math,main,bin,"\u2218","\\circ");defineSymbol(symbols_math,main,bin,"\xF7","\\div",true);defineSymbol(symbols_math,main,bin,"\xB1","\\pm",true);defineSymbol(symbols_math,main,bin,"\xD7","\\times",true);defineSymbol(symbols_math,main,bin,"\u2229","\\cap",true);defineSymbol(symbols_math,main,bin,"\u222A","\\cup",true);defineSymbol(symbols_math,main,bin,"\u2216","\\setminus");defineSymbol(symbols_math,main,bin,"\u2227","\\land");defineSymbol(symbols_math,main,bin,"\u2228","\\lor");defineSymbol(symbols_math,main,bin,"\u2227","\\wedge",true);defineSymbol(symbols_math,main,bin,"\u2228","\\vee",true);defineSymbol(symbols_math,main,symbols_textord,"\u221A","\\surd");defineSymbol(symbols_math,main,symbols_open,"\u27E8","\\langle",true);defineSymbol(symbols_math,main,symbols_open,"\u2223","\\lvert");defineSymbol(symbols_math,main,symbols_open,"\u2225","\\lVert");defineSymbol(symbols_math,main,symbols_close,"?","?");defineSymbol(symbols_math,main,symbols_close,"!","!");defineSymbol(symbols_math,main,symbols_close,"\u27E9","\\rangle",true);defineSymbol(symbols_math,main,symbols_close,"\u2223","\\rvert");defineSymbol(symbols_math,main,symbols_close,"\u2225","\\rVert");defineSymbol(symbols_math,main,rel,"=","=");defineSymbol(symbols_math,main,rel,":",":");defineSymbol(symbols_math,main,rel,"\u2248","\\approx",true);defineSymbol(symbols_math,main,rel,"\u2245","\\cong",true);defineSymbol(symbols_math,main,rel,"\u2265","\\ge");defineSymbol(symbols_math,main,rel,"\u2265","\\geq",true);defineSymbol(symbols_math,main,rel,"\u2190","\\gets");defineSymbol(symbols_math,main,rel,">","\\gt",true);defineSymbol(symbols_math,main,rel,"\u2208","\\in",true);defineSymbol(symbols_math,main,rel,"\uE020","\\@not");defineSymbol(symbols_math,main,rel,"\u2282","\\subset",true);defineSymbol(symbols_math,main,rel,"\u2283","\\supset",true);defineSymbol(symbols_math,main,rel,"\u2286","\\subseteq",true);defineSymbol(symbols_math,main,rel,"\u2287","\\supseteq",true);defineSymbol(symbols_math,ams,rel,"\u2288","\\nsubseteq",true);defineSymbol(symbols_math,ams,rel,"\u2289","\\nsupseteq",true);defineSymbol(symbols_math,main,rel,"\u22A8","\\models");defineSymbol(symbols_math,main,rel,"\u2190","\\leftarrow",true);defineSymbol(symbols_math,main,rel,"\u2264","\\le");defineSymbol(symbols_math,main,rel,"\u2264","\\leq",true);defineSymbol(symbols_math,main,rel,"<","\\lt",true);defineSymbol(symbols_math,main,rel,"\u2192","\\rightarrow",true);defineSymbol(symbols_math,main,rel,"\u2192","\\to");defineSymbol(symbols_math,ams,rel,"\u2271","\\ngeq",true);defineSymbol(symbols_math,ams,rel,"\u2270","\\nleq",true);defineSymbol(symbols_math,main,symbols_spacing,"\xA0","\\ ");defineSymbol(symbols_math,main,symbols_spacing,"\xA0","~");defineSymbol(symbols_math,main,symbols_spacing,"\xA0","\\space");// Ref: LaTeX Source 2e: \DeclareRobustCommand{\nobreakspace}{%
defineSymbol(symbols_math,main,symbols_spacing,"\xA0","\\nobreakspace");defineSymbol(symbols_text,main,symbols_spacing,"\xA0","\\ ");defineSymbol(symbols_text,main,symbols_spacing,"\xA0"," ");defineSymbol(symbols_text,main,symbols_spacing,"\xA0","~");defineSymbol(symbols_text,main,symbols_spacing,"\xA0","\\space");defineSymbol(symbols_text,main,symbols_spacing,"\xA0","\\nobreakspace");defineSymbol(symbols_math,main,symbols_spacing,null,"\\nobreak");defineSymbol(symbols_math,main,symbols_spacing,null,"\\allowbreak");defineSymbol(symbols_math,main,punct,",",",");defineSymbol(symbols_math,main,punct,";",";");defineSymbol(symbols_math,ams,bin,"\u22BC","\\barwedge",true);defineSymbol(symbols_math,ams,bin,"\u22BB","\\veebar",true);defineSymbol(symbols_math,main,bin,"\u2299","\\odot",true);defineSymbol(symbols_math,main,bin,"\u2295","\\oplus",true);defineSymbol(symbols_math,main,bin,"\u2297","\\otimes",true);defineSymbol(symbols_math,main,symbols_textord,"\u2202","\\partial",true);defineSymbol(symbols_math,main,bin,"\u2298","\\oslash",true);defineSymbol(symbols_math,ams,bin,"\u229A","\\circledcirc",true);defineSymbol(symbols_math,ams,bin,"\u22A1","\\boxdot",true);defineSymbol(symbols_math,main,bin,"\u25B3","\\bigtriangleup");defineSymbol(symbols_math,main,bin,"\u25BD","\\bigtriangledown");defineSymbol(symbols_math,main,bin,"\u2020","\\dagger");defineSymbol(symbols_math,main,bin,"\u22C4","\\diamond");defineSymbol(symbols_math,main,bin,"\u22C6","\\star");defineSymbol(symbols_math,main,bin,"\u25C3","\\triangleleft");defineSymbol(symbols_math,main,bin,"\u25B9","\\triangleright");defineSymbol(symbols_math,main,symbols_open,"{","\\{");defineSymbol(symbols_text,main,symbols_textord,"{","\\{");defineSymbol(symbols_text,main,symbols_textord,"{","\\textbraceleft");defineSymbol(symbols_math,main,symbols_close,"}","\\}");defineSymbol(symbols_text,main,symbols_textord,"}","\\}");defineSymbol(symbols_text,main,symbols_textord,"}","\\textbraceright");defineSymbol(symbols_math,main,symbols_open,"{","\\lbrace");defineSymbol(symbols_math,main,symbols_close,"}","\\rbrace");defineSymbol(symbols_math,main,symbols_open,"[","\\lbrack",true);defineSymbol(symbols_text,main,symbols_textord,"[","\\lbrack",true);defineSymbol(symbols_math,main,symbols_close,"]","\\rbrack",true);defineSymbol(symbols_text,main,symbols_textord,"]","\\rbrack",true);defineSymbol(symbols_math,main,symbols_open,"(","\\lparen",true);defineSymbol(symbols_math,main,symbols_close,")","\\rparen",true);defineSymbol(symbols_text,main,symbols_textord,"<","\\textless",true);// in T1 fontenc
defineSymbol(symbols_text,main,symbols_textord,">","\\textgreater",true);// in T1 fontenc
defineSymbol(symbols_math,main,symbols_open,"\u230A","\\lfloor",true);defineSymbol(symbols_math,main,symbols_close,"\u230B","\\rfloor",true);defineSymbol(symbols_math,main,symbols_open,"\u2308","\\lceil",true);defineSymbol(symbols_math,main,symbols_close,"\u2309","\\rceil",true);defineSymbol(symbols_math,main,symbols_textord,"\\","\\backslash");defineSymbol(symbols_math,main,symbols_textord,"\u2223","|");defineSymbol(symbols_math,main,symbols_textord,"\u2223","\\vert");defineSymbol(symbols_text,main,symbols_textord,"|","\\textbar",true);// in T1 fontenc
defineSymbol(symbols_math,main,symbols_textord,"\u2225","\\|");defineSymbol(symbols_math,main,symbols_textord,"\u2225","\\Vert");defineSymbol(symbols_text,main,symbols_textord,"\u2225","\\textbardbl");defineSymbol(symbols_text,main,symbols_textord,"~","\\textasciitilde");defineSymbol(symbols_text,main,symbols_textord,"\\","\\textbackslash");defineSymbol(symbols_text,main,symbols_textord,"^","\\textasciicircum");defineSymbol(symbols_math,main,rel,"\u2191","\\uparrow",true);defineSymbol(symbols_math,main,rel,"\u21D1","\\Uparrow",true);defineSymbol(symbols_math,main,rel,"\u2193","\\downarrow",true);defineSymbol(symbols_math,main,rel,"\u21D3","\\Downarrow",true);defineSymbol(symbols_math,main,rel,"\u2195","\\updownarrow",true);defineSymbol(symbols_math,main,rel,"\u21D5","\\Updownarrow",true);defineSymbol(symbols_math,main,op,"\u2210","\\coprod");defineSymbol(symbols_math,main,op,"\u22C1","\\bigvee");defineSymbol(symbols_math,main,op,"\u22C0","\\bigwedge");defineSymbol(symbols_math,main,op,"\u2A04","\\biguplus");defineSymbol(symbols_math,main,op,"\u22C2","\\bigcap");defineSymbol(symbols_math,main,op,"\u22C3","\\bigcup");defineSymbol(symbols_math,main,op,"\u222B","\\int");defineSymbol(symbols_math,main,op,"\u222B","\\intop");defineSymbol(symbols_math,main,op,"\u222C","\\iint");defineSymbol(symbols_math,main,op,"\u222D","\\iiint");defineSymbol(symbols_math,main,op,"\u220F","\\prod");defineSymbol(symbols_math,main,op,"\u2211","\\sum");defineSymbol(symbols_math,main,op,"\u2A02","\\bigotimes");defineSymbol(symbols_math,main,op,"\u2A01","\\bigoplus");defineSymbol(symbols_math,main,op,"\u2A00","\\bigodot");defineSymbol(symbols_math,main,op,"\u222E","\\oint");defineSymbol(symbols_math,main,op,"\u2A06","\\bigsqcup");defineSymbol(symbols_math,main,op,"\u222B","\\smallint");defineSymbol(symbols_text,main,symbols_inner,"\u2026","\\textellipsis");defineSymbol(symbols_math,main,symbols_inner,"\u2026","\\mathellipsis");defineSymbol(symbols_text,main,symbols_inner,"\u2026","\\ldots",true);defineSymbol(symbols_math,main,symbols_inner,"\u2026","\\ldots",true);defineSymbol(symbols_math,main,symbols_inner,"\u22EF","\\@cdots",true);defineSymbol(symbols_math,main,symbols_inner,"\u22F1","\\ddots",true);defineSymbol(symbols_math,main,symbols_textord,"\u22EE","\\varvdots");// \vdots is a macro
defineSymbol(symbols_math,main,symbols_accent,"\u02CA","\\acute");defineSymbol(symbols_math,main,symbols_accent,"\u02CB","\\grave");defineSymbol(symbols_math,main,symbols_accent,"\xA8","\\ddot");defineSymbol(symbols_math,main,symbols_accent,"~","\\tilde");defineSymbol(symbols_math,main,symbols_accent,"\u02C9","\\bar");defineSymbol(symbols_math,main,symbols_accent,"\u02D8","\\breve");defineSymbol(symbols_math,main,symbols_accent,"\u02C7","\\check");defineSymbol(symbols_math,main,symbols_accent,"^","\\hat");defineSymbol(symbols_math,main,symbols_accent,"\u20D7","\\vec");defineSymbol(symbols_math,main,symbols_accent,"\u02D9","\\dot");defineSymbol(symbols_math,main,symbols_accent,"\u02DA","\\mathring");// \imath and \jmath should be invariant to \mathrm, \mathbf, etc., so use PUA
defineSymbol(symbols_math,main,mathord,"\uE131","\\@imath");defineSymbol(symbols_math,main,mathord,"\uE237","\\@jmath");defineSymbol(symbols_math,main,symbols_textord,"\u0131","\u0131");defineSymbol(symbols_math,main,symbols_textord,"\u0237","\u0237");defineSymbol(symbols_text,main,symbols_textord,"\u0131","\\i",true);defineSymbol(symbols_text,main,symbols_textord,"\u0237","\\j",true);defineSymbol(symbols_text,main,symbols_textord,"\xDF","\\ss",true);defineSymbol(symbols_text,main,symbols_textord,"\xE6","\\ae",true);defineSymbol(symbols_text,main,symbols_textord,"\u0153","\\oe",true);defineSymbol(symbols_text,main,symbols_textord,"\xF8","\\o",true);defineSymbol(symbols_text,main,symbols_textord,"\xC6","\\AE",true);defineSymbol(symbols_text,main,symbols_textord,"\u0152","\\OE",true);defineSymbol(symbols_text,main,symbols_textord,"\xD8","\\O",true);defineSymbol(symbols_text,main,symbols_accent,"\u02CA","\\'");// acute
defineSymbol(symbols_text,main,symbols_accent,"\u02CB","\\`");// grave
defineSymbol(symbols_text,main,symbols_accent,"\u02C6","\\^");// circumflex
defineSymbol(symbols_text,main,symbols_accent,"\u02DC","\\~");// tilde
defineSymbol(symbols_text,main,symbols_accent,"\u02C9","\\=");// macron
defineSymbol(symbols_text,main,symbols_accent,"\u02D8","\\u");// breve
defineSymbol(symbols_text,main,symbols_accent,"\u02D9","\\.");// dot above
defineSymbol(symbols_text,main,symbols_accent,"\u02DA","\\r");// ring above
defineSymbol(symbols_text,main,symbols_accent,"\u02C7","\\v");// caron
defineSymbol(symbols_text,main,symbols_accent,"\xA8",'\\"');// diaresis
defineSymbol(symbols_text,main,symbols_accent,"\u02DD","\\H");// double acute
defineSymbol(symbols_text,main,symbols_accent,"\u25EF","\\textcircled");// \bigcirc glyph
// These ligatures are detected and created in Parser.js's `formLigatures`.
var ligatures={"--":true,"---":true,"``":true,"''":true};defineSymbol(symbols_text,main,symbols_textord,"\u2013","--",true);defineSymbol(symbols_text,main,symbols_textord,"\u2013","\\textendash");defineSymbol(symbols_text,main,symbols_textord,"\u2014","---",true);defineSymbol(symbols_text,main,symbols_textord,"\u2014","\\textemdash");defineSymbol(symbols_text,main,symbols_textord,"\u2018","`",true);defineSymbol(symbols_text,main,symbols_textord,"\u2018","\\textquoteleft");defineSymbol(symbols_text,main,symbols_textord,"\u2019","'",true);defineSymbol(symbols_text,main,symbols_textord,"\u2019","\\textquoteright");defineSymbol(symbols_text,main,symbols_textord,"\u201C","``",true);defineSymbol(symbols_text,main,symbols_textord,"\u201C","\\textquotedblleft");defineSymbol(symbols_text,main,symbols_textord,"\u201D","''",true);defineSymbol(symbols_text,main,symbols_textord,"\u201D","\\textquotedblright");//  \degree from gensymb package
defineSymbol(symbols_math,main,symbols_textord,"\xB0","\\degree",true);defineSymbol(symbols_text,main,symbols_textord,"\xB0","\\degree");// \textdegree from inputenc package
defineSymbol(symbols_text,main,symbols_textord,"\xB0","\\textdegree",true);// TODO: In LaTeX, \pounds can generate a different character in text and math
// mode, but among our fonts, only Main-Regular defines this character "163".
defineSymbol(symbols_math,main,symbols_textord,"\xA3","\\pounds");defineSymbol(symbols_math,main,symbols_textord,"\xA3","\\mathsterling",true);defineSymbol(symbols_text,main,symbols_textord,"\xA3","\\pounds");defineSymbol(symbols_text,main,symbols_textord,"\xA3","\\textsterling",true);defineSymbol(symbols_math,ams,symbols_textord,"\u2720","\\maltese");defineSymbol(symbols_text,ams,symbols_textord,"\u2720","\\maltese");// There are lots of symbols which are the same, so we add them in afterwards.
// All of these are textords in math mode
var mathTextSymbols="0123456789/@.\"";for(var symbols_i=0;symbols_i<mathTextSymbols.length;symbols_i++){var symbols_ch=mathTextSymbols.charAt(symbols_i);defineSymbol(symbols_math,main,symbols_textord,symbols_ch,symbols_ch);}// All of these are textords in text mode
var textSymbols="0123456789!@*()-=+\";:?/.,";for(var src_symbols_i=0;src_symbols_i<textSymbols.length;src_symbols_i++){var _ch=textSymbols.charAt(src_symbols_i);defineSymbol(symbols_text,main,symbols_textord,_ch,_ch);}// All of these are textords in text mode, and mathords in math mode
var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var symbols_i2=0;symbols_i2<letters.length;symbols_i2++){var _ch2=letters.charAt(symbols_i2);defineSymbol(symbols_math,main,mathord,_ch2,_ch2);defineSymbol(symbols_text,main,symbols_textord,_ch2,_ch2);}// Blackboard bold and script letters in Unicode range
defineSymbol(symbols_math,ams,symbols_textord,"C","\u2102");// blackboard bold
defineSymbol(symbols_text,ams,symbols_textord,"C","\u2102");defineSymbol(symbols_math,ams,symbols_textord,"H","\u210D");defineSymbol(symbols_text,ams,symbols_textord,"H","\u210D");defineSymbol(symbols_math,ams,symbols_textord,"N","\u2115");defineSymbol(symbols_text,ams,symbols_textord,"N","\u2115");defineSymbol(symbols_math,ams,symbols_textord,"P","\u2119");defineSymbol(symbols_text,ams,symbols_textord,"P","\u2119");defineSymbol(symbols_math,ams,symbols_textord,"Q","\u211A");defineSymbol(symbols_text,ams,symbols_textord,"Q","\u211A");defineSymbol(symbols_math,ams,symbols_textord,"R","\u211D");defineSymbol(symbols_text,ams,symbols_textord,"R","\u211D");defineSymbol(symbols_math,ams,symbols_textord,"Z","\u2124");defineSymbol(symbols_text,ams,symbols_textord,"Z","\u2124");defineSymbol(symbols_math,main,mathord,"h","\u210E");// italic h, Planck constant
defineSymbol(symbols_text,main,mathord,"h","\u210E");// The next loop loads wide (surrogate pair) characters.
// We support some letters in the Unicode range U+1D400 to U+1D7FF,
// Mathematical Alphanumeric Symbols.
// Some editors do not deal well with wide characters. So don't write the
// string into this file. Instead, create the string from the surrogate pair.
var symbols_wideChar="";for(var symbols_i3=0;symbols_i3<letters.length;symbols_i3++){var _ch3=letters.charAt(symbols_i3);// The hex numbers in the next line are a surrogate pair.
// 0xD835 is the high surrogate for all letters in the range we support.
// 0xDC00 is the low surrogate for bold A.
symbols_wideChar=String.fromCharCode(0xD835,0xDC00+symbols_i3);// A-Z a-z bold
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDC34+symbols_i3);// A-Z a-z italic
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDC68+symbols_i3);// A-Z a-z bold italic
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDD04+symbols_i3);// A-Z a-z Fractur
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDDA0+symbols_i3);// A-Z a-z sans-serif
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDDD4+symbols_i3);// A-Z a-z sans bold
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDE08+symbols_i3);// A-Z a-z sans italic
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDE70+symbols_i3);// A-Z a-z monospace
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);if(symbols_i3<26){// KaTeX fonts have only capital letters for blackboard bold and script.
// See exception for k below.
symbols_wideChar=String.fromCharCode(0xD835,0xDD38+symbols_i3);// A-Z double struck
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDC9C+symbols_i3);// A-Z script
defineSymbol(symbols_math,main,mathord,_ch3,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch3,symbols_wideChar);}// TODO: Add bold script when it is supported by a KaTeX font.
}// "k" is the only double struck lower case letter in the KaTeX fonts.
symbols_wideChar=String.fromCharCode(0xD835,0xDD5C);// k double struck
defineSymbol(symbols_math,main,mathord,"k",symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,"k",symbols_wideChar);// Next, some wide character numerals
for(var symbols_i4=0;symbols_i4<10;symbols_i4++){var _ch4=symbols_i4.toString();symbols_wideChar=String.fromCharCode(0xD835,0xDFCE+symbols_i4);// 0-9 bold
defineSymbol(symbols_math,main,mathord,_ch4,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch4,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDFE2+symbols_i4);// 0-9 sans serif
defineSymbol(symbols_math,main,mathord,_ch4,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch4,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDFEC+symbols_i4);// 0-9 bold sans
defineSymbol(symbols_math,main,mathord,_ch4,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch4,symbols_wideChar);symbols_wideChar=String.fromCharCode(0xD835,0xDFF6+symbols_i4);// 0-9 monospace
defineSymbol(symbols_math,main,mathord,_ch4,symbols_wideChar);defineSymbol(symbols_text,main,symbols_textord,_ch4,symbols_wideChar);}// We add these Latin-1 letters as symbols for backwards-compatibility,
// but they are not actually in the font, nor are they supported by the
// Unicode accent mechanism, so they fall back to Times font and look ugly.
// TODO(edemaine): Fix this.
var extraLatin="\xC7\xD0\xDE\xE7\xFE";for(var _i5=0;_i5<extraLatin.length;_i5++){var _ch5=extraLatin.charAt(_i5);defineSymbol(symbols_math,main,mathord,_ch5,_ch5);defineSymbol(symbols_text,main,symbols_textord,_ch5,_ch5);}// CONCATENATED MODULE: ./src/wide-character.js
/**
 * This file provides support for Unicode range U+1D400 to U+1D7FF,
 * Mathematical Alphanumeric Symbols.
 *
 * Function wideCharacterFont takes a wide character as input and returns
 * the font information necessary to render it properly.
 */ /**
 * Data below is from https://www.unicode.org/charts/PDF/U1D400.pdf
 * That document sorts characters into groups by font type, say bold or italic.
 *
 * In the arrays below, each subarray consists three elements:
 *      * The CSS class of that group when in math mode.
 *      * The CSS class of that group when in text mode.
 *      * The font name, so that KaTeX can get font metrics.
 */var wideLatinLetterData=[["mathbf","textbf","Main-Bold"],// A-Z bold upright
["mathbf","textbf","Main-Bold"],// a-z bold upright
["mathnormal","textit","Math-Italic"],// A-Z italic
["mathnormal","textit","Math-Italic"],// a-z italic
["boldsymbol","boldsymbol","Main-BoldItalic"],// A-Z bold italic
["boldsymbol","boldsymbol","Main-BoldItalic"],// a-z bold italic
// Map fancy A-Z letters to script, not calligraphic.
// This aligns with unicode-math and math fonts (except Cambria Math).
["mathscr","textscr","Script-Regular"],// A-Z script
["","",""],// a-z script.  No font
["","",""],// A-Z bold script. No font
["","",""],// a-z bold script. No font
["mathfrak","textfrak","Fraktur-Regular"],// A-Z Fraktur
["mathfrak","textfrak","Fraktur-Regular"],// a-z Fraktur
["mathbb","textbb","AMS-Regular"],// A-Z double-struck
["mathbb","textbb","AMS-Regular"],// k double-struck
["","",""],// A-Z bold Fraktur No font metrics
["","",""],// a-z bold Fraktur.   No font.
["mathsf","textsf","SansSerif-Regular"],// A-Z sans-serif
["mathsf","textsf","SansSerif-Regular"],// a-z sans-serif
["mathboldsf","textboldsf","SansSerif-Bold"],// A-Z bold sans-serif
["mathboldsf","textboldsf","SansSerif-Bold"],// a-z bold sans-serif
["mathitsf","textitsf","SansSerif-Italic"],// A-Z italic sans-serif
["mathitsf","textitsf","SansSerif-Italic"],// a-z italic sans-serif
["","",""],// A-Z bold italic sans. No font
["","",""],// a-z bold italic sans. No font
["mathtt","texttt","Typewriter-Regular"],// A-Z monospace
["mathtt","texttt","Typewriter-Regular"]];var wideNumeralData=[["mathbf","textbf","Main-Bold"],// 0-9 bold
["","",""],// 0-9 double-struck. No KaTeX font.
["mathsf","textsf","SansSerif-Regular"],// 0-9 sans-serif
["mathboldsf","textboldsf","SansSerif-Bold"],// 0-9 bold sans-serif
["mathtt","texttt","Typewriter-Regular"]];var wide_character_wideCharacterFont=function wideCharacterFont(wideChar,mode){// IE doesn't support codePointAt(). So work with the surrogate pair.
var H=wideChar.charCodeAt(0);// high surrogate
var L=wideChar.charCodeAt(1);// low surrogate
var codePoint=(H-0xD800)*0x400+(L-0xDC00)+0x10000;var j=mode==="math"?0:1;// column index for CSS class.
if(0x1D400<=codePoint&&codePoint<0x1D6A4){// wideLatinLetterData contains exactly 26 chars on each row.
// So we can calculate the relevant row. No traverse necessary.
var i=Math.floor((codePoint-0x1D400)/26);return [wideLatinLetterData[i][2],wideLatinLetterData[i][j]];}else if(0x1D7CE<=codePoint&&codePoint<=0x1D7FF){// Numerals, ten per row.
var _i=Math.floor((codePoint-0x1D7CE)/10);return [wideNumeralData[_i][2],wideNumeralData[_i][j]];}else if(codePoint===0x1D6A5||codePoint===0x1D6A6){// dotless i or j
return [wideLatinLetterData[0][2],wideLatinLetterData[0][j]];}else if(0x1D6A6<codePoint&&codePoint<0x1D7CE){// Greek letters. Not supported, yet.
return ["",""];}else {// We don't support any wide characters outside 1D400–1D7FF.
throw new src_ParseError("Unsupported character: "+wideChar);}};// CONCATENATED MODULE: ./src/Options.js
/**
 * This file contains information about the options that the Parser carries
 * around with it while parsing. Data is held in an `Options` object, and when
 * recursing, a new `Options` object can be created with the `.with*` and
 * `.reset` functions.
 */var sizeStyleMap=[// Each element contains [textsize, scriptsize, scriptscriptsize].
// The size mappings are taken from TeX with \normalsize=10pt.
[1,1,1],// size1: [5, 5, 5]              \tiny
[2,1,1],// size2: [6, 5, 5]
[3,1,1],// size3: [7, 5, 5]              \scriptsize
[4,2,1],// size4: [8, 6, 5]              \footnotesize
[5,2,1],// size5: [9, 6, 5]              \small
[6,3,1],// size6: [10, 7, 5]             \normalsize
[7,4,2],// size7: [12, 8, 6]             \large
[8,6,3],// size8: [14.4, 10, 7]          \Large
[9,7,6],// size9: [17.28, 12, 10]        \LARGE
[10,8,7],// size10: [20.74, 14.4, 12]     \huge
[11,10,9]];var sizeMultipliers=[// fontMetrics.js:getGlobalMetrics also uses size indexes, so if
// you change size indexes, change that function.
0.5,0.6,0.7,0.8,0.9,1.0,1.2,1.44,1.728,2.074,2.488];var sizeAtStyle=function sizeAtStyle(size,style){return style.size<2?size:sizeStyleMap[size-1][style.size-1];};// In these types, "" (empty string) means "no change".
/**
 * This is the main options class. It contains the current style, size, color,
 * and font.
 *
 * Options objects should not be modified. To create a new Options with
 * different properties, call a `.having*` method.
 */var Options_Options=/*#__PURE__*/function(){// A font family applies to a group of fonts (i.e. SansSerif), while a font
// represents a specific font (i.e. SansSerif Bold).
// See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
/**
   * The base size index.
   */function Options(data){this.style=void 0;this.color=void 0;this.size=void 0;this.textSize=void 0;this.phantom=void 0;this.font=void 0;this.fontFamily=void 0;this.fontWeight=void 0;this.fontShape=void 0;this.sizeMultiplier=void 0;this.maxSize=void 0;this.minRuleThickness=void 0;this._fontMetrics=void 0;this.style=data.style;this.color=data.color;this.size=data.size||Options.BASESIZE;this.textSize=data.textSize||this.size;this.phantom=!!data.phantom;this.font=data.font||"";this.fontFamily=data.fontFamily||"";this.fontWeight=data.fontWeight||'';this.fontShape=data.fontShape||'';this.sizeMultiplier=sizeMultipliers[this.size-1];this.maxSize=data.maxSize;this.minRuleThickness=data.minRuleThickness;this._fontMetrics=undefined;}/**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */var _proto=Options.prototype;_proto.extend=function extend(extension){var data={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var key in extension){if(extension.hasOwnProperty(key)){data[key]=extension[key];}}return new Options(data);}/**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */;_proto.havingStyle=function havingStyle(style){if(this.style===style){return this;}else {return this.extend({style:style,size:sizeAtStyle(this.textSize,style)});}}/**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */;_proto.havingCrampedStyle=function havingCrampedStyle(){return this.havingStyle(this.style.cramp());}/**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */;_proto.havingSize=function havingSize(size){if(this.size===size&&this.textSize===size){return this;}else {return this.extend({style:this.style.text(),size:size,textSize:size,sizeMultiplier:sizeMultipliers[size-1]});}}/**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */;_proto.havingBaseStyle=function havingBaseStyle(style){style=style||this.style.text();var wantSize=sizeAtStyle(Options.BASESIZE,style);if(this.size===wantSize&&this.textSize===Options.BASESIZE&&this.style===style){return this;}else {return this.extend({style:style,size:wantSize});}}/**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */;_proto.havingBaseSizing=function havingBaseSizing(){var size;switch(this.style.id){case 4:case 5:size=3;// normalsize in scriptstyle
break;case 6:case 7:size=1;// normalsize in scriptscriptstyle
break;default:size=6;// normalsize in textstyle or displaystyle
}return this.extend({style:this.style.text(),size:size});}/**
   * Create a new options object with the given color.
   */;_proto.withColor=function withColor(color){return this.extend({color:color});}/**
   * Create a new options object with "phantom" set to true.
   */;_proto.withPhantom=function withPhantom(){return this.extend({phantom:true});}/**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */;_proto.withFont=function withFont(font){return this.extend({font:font});}/**
   * Create a new options objects with the given fontFamily.
   */;_proto.withTextFontFamily=function withTextFontFamily(fontFamily){return this.extend({fontFamily:fontFamily,font:""});}/**
   * Creates a new options object with the given font weight
   */;_proto.withTextFontWeight=function withTextFontWeight(fontWeight){return this.extend({fontWeight:fontWeight,font:""});}/**
   * Creates a new options object with the given font weight
   */;_proto.withTextFontShape=function withTextFontShape(fontShape){return this.extend({fontShape:fontShape,font:""});}/**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */;_proto.sizingClasses=function sizingClasses(oldOptions){if(oldOptions.size!==this.size){return ["sizing","reset-size"+oldOptions.size,"size"+this.size];}else {return [];}}/**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */;_proto.baseSizingClasses=function baseSizingClasses(){if(this.size!==Options.BASESIZE){return ["sizing","reset-size"+this.size,"size"+Options.BASESIZE];}else {return [];}}/**
   * Return the font metrics for this size.
   */;_proto.fontMetrics=function fontMetrics(){if(!this._fontMetrics){this._fontMetrics=getGlobalMetrics(this.size);}return this._fontMetrics;}/**
   * Gets the CSS color of the current options object
   */;_proto.getColor=function getColor(){if(this.phantom){return "transparent";}else {return this.color;}};return Options;}();Options_Options.BASESIZE=6;/* harmony default export */var src_Options=Options_Options;// CONCATENATED MODULE: ./src/units.js
/**
 * This file does conversion between units.  In particular, it provides
 * calculateSize to convert other units into ems.
 */ // This table gives the number of TeX pts in one of each *absolute* TeX unit.
// Thus, multiplying a length by this number converts the length from units
// into pts.  Dividing the result by ptPerEm gives the number of ems
// *assuming* a font size of ptPerEm (normal size, normal style).
var ptPerUnit={// https://en.wikibooks.org/wiki/LaTeX/Lengths and
// https://tex.stackexchange.com/a/8263
"pt":1,// TeX point
"mm":7227/2540,// millimeter
"cm":7227/254,// centimeter
"in":72.27,// inch
"bp":803/800,// big (PostScript) points
"pc":12,// pica
"dd":1238/1157,// didot
"cc":14856/1157,// cicero (12 didot)
"nd":685/642,// new didot
"nc":1370/107,// new cicero (12 new didot)
"sp":1/65536,// scaled point (TeX's internal smallest unit)
// https://tex.stackexchange.com/a/41371
"px":803/800// \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
};// Dictionary of relative units, for fast validity testing.
var relativeUnit={"ex":true,"em":true,"mu":true};/**
 * Determine whether the specified unit (either a string defining the unit
 * or a "size" parse node containing a unit field) is valid.
 */var validUnit=function validUnit(unit){if(typeof unit!=="string"){unit=unit.unit;}return unit in ptPerUnit||unit in relativeUnit||unit==="ex";};/*
 * Convert a "size" parse node (with numeric "number" and string "unit" fields,
 * as parsed by functions.js argType "size") into a CSS em value for the
 * current style/scale.  `options` gives the current options.
 */var units_calculateSize=function calculateSize(sizeValue,options){var scale;if(sizeValue.unit in ptPerUnit){// Absolute units
scale=ptPerUnit[sizeValue.unit]// Convert unit to pt
/options.fontMetrics().ptPerEm// Convert pt to CSS em
/options.sizeMultiplier;// Unscale to make absolute units
}else if(sizeValue.unit==="mu"){// `mu` units scale with scriptstyle/scriptscriptstyle.
scale=options.fontMetrics().cssEmPerMu;}else {// Other relative units always refer to the *textstyle* font
// in the current size.
var unitOptions;if(options.style.isTight()){// isTight() means current style is script/scriptscript.
unitOptions=options.havingStyle(options.style.text());}else {unitOptions=options;}// TODO: In TeX these units are relative to the quad of the current
// *text* font, e.g. cmr10. KaTeX instead uses values from the
// comparably-sized *Computer Modern symbol* font. At 10pt, these
// match. At 7pt and 5pt, they differ: cmr7=1.138894, cmsy7=1.170641;
// cmr5=1.361133, cmsy5=1.472241. Consider $\scriptsize a\kern1emb$.
// TeX \showlists shows a kern of 1.13889 * fontsize;
// KaTeX shows a kern of 1.171 * fontsize.
if(sizeValue.unit==="ex"){scale=unitOptions.fontMetrics().xHeight;}else if(sizeValue.unit==="em"){scale=unitOptions.fontMetrics().quad;}else {throw new src_ParseError("Invalid unit: '"+sizeValue.unit+"'");}if(unitOptions!==options){scale*=unitOptions.sizeMultiplier/options.sizeMultiplier;}}return Math.min(sizeValue.number*scale,options.maxSize);};// CONCATENATED MODULE: ./src/buildCommon.js
/* eslint no-console:0 */ /**
 * This module contains general functions that can be used for building
 * different kinds of domTree nodes in a consistent manner.
 */ /**
 * Looks up the given symbol in fontMetrics, after applying any symbol
 * replacements defined in symbol.js
 */var buildCommon_lookupSymbol=function lookupSymbol(value,// TODO(#963): Use a union type for this.
fontName,mode){// Replace the value with its replaced value from symbol.js
if(src_symbols[mode][value]&&src_symbols[mode][value].replace){value=src_symbols[mode][value].replace;}return {value:value,metrics:getCharacterMetrics(value,fontName,mode)};};/**
 * Makes a symbolNode after translation via the list of symbols in symbols.js.
 * Correctly pulls out metrics for the character, and optionally takes a list of
 * classes to be attached to the node.
 *
 * TODO: make argument order closer to makeSpan
 * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
 * should if present come first in `classes`.
 * TODO(#953): Make `options` mandatory and always pass it in.
 */var buildCommon_makeSymbol=function makeSymbol(value,fontName,mode,options,classes){var lookup=buildCommon_lookupSymbol(value,fontName,mode);var metrics=lookup.metrics;value=lookup.value;var symbolNode;if(metrics){var italic=metrics.italic;if(mode==="text"||options&&options.font==="mathit"){italic=0;}symbolNode=new domTree_SymbolNode(value,metrics.height,metrics.depth,italic,metrics.skew,metrics.width,classes);}else {// TODO(emily): Figure out a good way to only print this in development
typeof console!=="undefined"&&console.warn("No character metrics "+("for '"+value+"' in style '"+fontName+"' and mode '"+mode+"'"));symbolNode=new domTree_SymbolNode(value,0,0,0,0,0,classes);}if(options){symbolNode.maxFontSize=options.sizeMultiplier;if(options.style.isTight()){symbolNode.classes.push("mtight");}var color=options.getColor();if(color){symbolNode.style.color=color;}}return symbolNode;};/**
 * Makes a symbol in Main-Regular or AMS-Regular.
 * Used for rel, bin, open, close, inner, and punct.
 */var buildCommon_mathsym=function mathsym(value,mode,options,classes){if(classes===void 0){classes=[];}// Decide what font to render the symbol in by its entry in the symbols
// table.
// Have a special case for when the value = \ because the \ is used as a
// textord in unsupported command errors but cannot be parsed as a regular
// text ordinal and is therefore not present as a symbol in the symbols
// table for text, as well as a special case for boldsymbol because it
// can be used for bold + and -
if(options.font==="boldsymbol"&&buildCommon_lookupSymbol(value,"Main-Bold",mode).metrics){return buildCommon_makeSymbol(value,"Main-Bold",mode,options,classes.concat(["mathbf"]));}else if(value==="\\"||src_symbols[mode][value].font==="main"){return buildCommon_makeSymbol(value,"Main-Regular",mode,options,classes);}else {return buildCommon_makeSymbol(value,"AMS-Regular",mode,options,classes.concat(["amsrm"]));}};/**
 * Determines which of the two font names (Main-Bold and Math-BoldItalic) and
 * corresponding style tags (mathbf or boldsymbol) to use for font "boldsymbol",
 * depending on the symbol.  Use this function instead of fontMap for font
 * "boldsymbol".
 */var boldsymbol=function boldsymbol(value,mode,options,classes,type){if(type!=="textord"&&buildCommon_lookupSymbol(value,"Math-BoldItalic",mode).metrics){return {fontName:"Math-BoldItalic",fontClass:"boldsymbol"};}else {// Some glyphs do not exist in Math-BoldItalic so we need to use
// Main-Bold instead.
return {fontName:"Main-Bold",fontClass:"mathbf"};}};/**
 * Makes either a mathord or textord in the correct font and color.
 */var buildCommon_makeOrd=function makeOrd(group,options,type){var mode=group.mode;var text=group.text;var classes=["mord"];// Math mode or Old font (i.e. \rm)
var isFont=mode==="math"||mode==="text"&&options.font;var fontOrFamily=isFont?options.font:options.fontFamily;if(text.charCodeAt(0)===0xD835){// surrogate pairs get special treatment
var _wideCharacterFont=wide_character_wideCharacterFont(text,mode),wideFontName=_wideCharacterFont[0],wideFontClass=_wideCharacterFont[1];return buildCommon_makeSymbol(text,wideFontName,mode,options,classes.concat(wideFontClass));}else if(fontOrFamily){var fontName;var fontClasses;if(fontOrFamily==="boldsymbol"){var fontData=boldsymbol(text,mode,options,classes,type);fontName=fontData.fontName;fontClasses=[fontData.fontClass];}else if(isFont){fontName=fontMap[fontOrFamily].fontName;fontClasses=[fontOrFamily];}else {fontName=retrieveTextFontName(fontOrFamily,options.fontWeight,options.fontShape);fontClasses=[fontOrFamily,options.fontWeight,options.fontShape];}if(buildCommon_lookupSymbol(text,fontName,mode).metrics){return buildCommon_makeSymbol(text,fontName,mode,options,classes.concat(fontClasses));}else if(ligatures.hasOwnProperty(text)&&fontName.substr(0,10)==="Typewriter"){// Deconstruct ligatures in monospace fonts (\texttt, \tt).
var parts=[];for(var i=0;i<text.length;i++){parts.push(buildCommon_makeSymbol(text[i],fontName,mode,options,classes.concat(fontClasses)));}return buildCommon_makeFragment(parts);}}// Makes a symbol in the default font for mathords and textords.
if(type==="mathord"){return buildCommon_makeSymbol(text,"Math-Italic",mode,options,classes.concat(["mathnormal"]));}else if(type==="textord"){var font=src_symbols[mode][text]&&src_symbols[mode][text].font;if(font==="ams"){var _fontName=retrieveTextFontName("amsrm",options.fontWeight,options.fontShape);return buildCommon_makeSymbol(text,_fontName,mode,options,classes.concat("amsrm",options.fontWeight,options.fontShape));}else if(font==="main"||!font){var _fontName2=retrieveTextFontName("textrm",options.fontWeight,options.fontShape);return buildCommon_makeSymbol(text,_fontName2,mode,options,classes.concat(options.fontWeight,options.fontShape));}else {// fonts added by plugins
var _fontName3=retrieveTextFontName(font,options.fontWeight,options.fontShape);// We add font name as a css class
return buildCommon_makeSymbol(text,_fontName3,mode,options,classes.concat(_fontName3,options.fontWeight,options.fontShape));}}else {throw new Error("unexpected type: "+type+" in makeOrd");}};/**
 * Returns true if subsequent symbolNodes have the same classes, skew, maxFont,
 * and styles.
 */var buildCommon_canCombine=function canCombine(prev,next){if(createClass(prev.classes)!==createClass(next.classes)||prev.skew!==next.skew||prev.maxFontSize!==next.maxFontSize){return false;}for(var style in prev.style){if(prev.style.hasOwnProperty(style)&&prev.style[style]!==next.style[style]){return false;}}for(var _style in next.style){if(next.style.hasOwnProperty(_style)&&prev.style[_style]!==next.style[_style]){return false;}}return true;};/**
 * Combine consequetive domTree.symbolNodes into a single symbolNode.
 * Note: this function mutates the argument.
 */var buildCommon_tryCombineChars=function tryCombineChars(chars){for(var i=0;i<chars.length-1;i++){var prev=chars[i];var next=chars[i+1];if(prev instanceof domTree_SymbolNode&&next instanceof domTree_SymbolNode&&buildCommon_canCombine(prev,next)){prev.text+=next.text;prev.height=Math.max(prev.height,next.height);prev.depth=Math.max(prev.depth,next.depth);// Use the last character's italic correction since we use
// it to add padding to the right of the span created from
// the combined characters.
prev.italic=next.italic;chars.splice(i+1,1);i--;}}return chars;};/**
 * Calculate the height, depth, and maxFontSize of an element based on its
 * children.
 */var sizeElementFromChildren=function sizeElementFromChildren(elem){var height=0;var depth=0;var maxFontSize=0;for(var i=0;i<elem.children.length;i++){var child=elem.children[i];if(child.height>height){height=child.height;}if(child.depth>depth){depth=child.depth;}if(child.maxFontSize>maxFontSize){maxFontSize=child.maxFontSize;}}elem.height=height;elem.depth=depth;elem.maxFontSize=maxFontSize;};/**
 * Makes a span with the given list of classes, list of children, and options.
 *
 * TODO(#953): Ensure that `options` is always provided (currently some call
 * sites don't pass it) and make the type below mandatory.
 * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
 * should if present come first in `classes`.
 */var buildCommon_makeSpan=function makeSpan(classes,children,options,style){var span=new domTree_Span(classes,children,options,style);sizeElementFromChildren(span);return span;};// SVG one is simpler -- doesn't require height, depth, max-font setting.
// This is also a separate method for typesafety.
var buildCommon_makeSvgSpan=function makeSvgSpan(classes,children,options,style){return new domTree_Span(classes,children,options,style);};var makeLineSpan=function makeLineSpan(className,options,thickness){var line=buildCommon_makeSpan([className],[],options);line.height=Math.max(thickness||options.fontMetrics().defaultRuleThickness,options.minRuleThickness);line.style.borderBottomWidth=line.height+"em";line.maxFontSize=1.0;return line;};/**
 * Makes an anchor with the given href, list of classes, list of children,
 * and options.
 */var buildCommon_makeAnchor=function makeAnchor(href,classes,children,options){var anchor=new domTree_Anchor(href,classes,children,options);sizeElementFromChildren(anchor);return anchor;};/**
 * Makes a document fragment with the given list of children.
 */var buildCommon_makeFragment=function makeFragment(children){var fragment=new tree_DocumentFragment(children);sizeElementFromChildren(fragment);return fragment;};/**
 * Wraps group in a span if it's a document fragment, allowing to apply classes
 * and styles
 */var buildCommon_wrapFragment=function wrapFragment(group,options){if(group instanceof tree_DocumentFragment){return buildCommon_makeSpan([],[group],options);}return group;};// These are exact object types to catch typos in the names of the optional fields.
// Computes the updated `children` list and the overall depth.
//
// This helper function for makeVList makes it easier to enforce type safety by
// allowing early exits (returns) in the logic.
var getVListChildrenAndDepth=function getVListChildrenAndDepth(params){if(params.positionType==="individualShift"){var oldChildren=params.children;var children=[oldChildren[0]];// Add in kerns to the list of params.children to get each element to be
// shifted to the correct specified shift
var _depth=-oldChildren[0].shift-oldChildren[0].elem.depth;var currPos=_depth;for(var i=1;i<oldChildren.length;i++){var diff=-oldChildren[i].shift-currPos-oldChildren[i].elem.depth;var size=diff-(oldChildren[i-1].elem.height+oldChildren[i-1].elem.depth);currPos=currPos+diff;children.push({type:"kern",size:size});children.push(oldChildren[i]);}return {children:children,depth:_depth};}var depth;if(params.positionType==="top"){// We always start at the bottom, so calculate the bottom by adding up
// all the sizes
var bottom=params.positionData;for(var _i=0;_i<params.children.length;_i++){var child=params.children[_i];bottom-=child.type==="kern"?child.size:child.elem.height+child.elem.depth;}depth=bottom;}else if(params.positionType==="bottom"){depth=-params.positionData;}else {var firstChild=params.children[0];if(firstChild.type!=="elem"){throw new Error('First child must have type "elem".');}if(params.positionType==="shift"){depth=-firstChild.elem.depth-params.positionData;}else if(params.positionType==="firstBaseline"){depth=-firstChild.elem.depth;}else {throw new Error("Invalid positionType "+params.positionType+".");}}return {children:params.children,depth:depth};};/**
 * Makes a vertical list by stacking elements and kerns on top of each other.
 * Allows for many different ways of specifying the positioning method.
 *
 * See VListParam documentation above.
 */var buildCommon_makeVList=function makeVList(params,options){var _getVListChildrenAndD=getVListChildrenAndDepth(params),children=_getVListChildrenAndD.children,depth=_getVListChildrenAndD.depth;// Create a strut that is taller than any list item. The strut is added to
// each item, where it will determine the item's baseline. Since it has
// `overflow:hidden`, the strut's top edge will sit on the item's line box's
// top edge and the strut's bottom edge will sit on the item's baseline,
// with no additional line-height spacing. This allows the item baseline to
// be positioned precisely without worrying about font ascent and
// line-height.
var pstrutSize=0;for(var i=0;i<children.length;i++){var child=children[i];if(child.type==="elem"){var elem=child.elem;pstrutSize=Math.max(pstrutSize,elem.maxFontSize,elem.height);}}pstrutSize+=2;var pstrut=buildCommon_makeSpan(["pstrut"],[]);pstrut.style.height=pstrutSize+"em";// Create a new list of actual children at the correct offsets
var realChildren=[];var minPos=depth;var maxPos=depth;var currPos=depth;for(var _i2=0;_i2<children.length;_i2++){var _child=children[_i2];if(_child.type==="kern"){currPos+=_child.size;}else {var _elem=_child.elem;var classes=_child.wrapperClasses||[];var style=_child.wrapperStyle||{};var childWrap=buildCommon_makeSpan(classes,[pstrut,_elem],undefined,style);childWrap.style.top=-pstrutSize-currPos-_elem.depth+"em";if(_child.marginLeft){childWrap.style.marginLeft=_child.marginLeft;}if(_child.marginRight){childWrap.style.marginRight=_child.marginRight;}realChildren.push(childWrap);currPos+=_elem.height+_elem.depth;}minPos=Math.min(minPos,currPos);maxPos=Math.max(maxPos,currPos);}// The vlist contents go in a table-cell with `vertical-align:bottom`.
// This cell's bottom edge will determine the containing table's baseline
// without overly expanding the containing line-box.
var vlist=buildCommon_makeSpan(["vlist"],realChildren);vlist.style.height=maxPos+"em";// A second row is used if necessary to represent the vlist's depth.
var rows;if(minPos<0){// We will define depth in an empty span with display: table-cell.
// It should render with the height that we define. But Chrome, in
// contenteditable mode only, treats that span as if it contains some
// text content. And that min-height over-rides our desired height.
// So we put another empty span inside the depth strut span.
var emptySpan=buildCommon_makeSpan([],[]);var depthStrut=buildCommon_makeSpan(["vlist"],[emptySpan]);depthStrut.style.height=-minPos+"em";// Safari wants the first row to have inline content; otherwise it
// puts the bottom of the *second* row on the baseline.
var topStrut=buildCommon_makeSpan(["vlist-s"],[new domTree_SymbolNode("\u200B")]);rows=[buildCommon_makeSpan(["vlist-r"],[vlist,topStrut]),buildCommon_makeSpan(["vlist-r"],[depthStrut])];}else {rows=[buildCommon_makeSpan(["vlist-r"],[vlist])];}var vtable=buildCommon_makeSpan(["vlist-t"],rows);if(rows.length===2){vtable.classes.push("vlist-t2");}vtable.height=maxPos;vtable.depth=-minPos;return vtable;};// Glue is a concept from TeX which is a flexible space between elements in
// either a vertical or horizontal list. In KaTeX, at least for now, it's
// static space between elements in a horizontal layout.
var buildCommon_makeGlue=function makeGlue(measurement,options){// Make an empty span for the space
var rule=buildCommon_makeSpan(["mspace"],[],options);var size=units_calculateSize(measurement,options);rule.style.marginRight=size+"em";return rule;};// Takes font options, and returns the appropriate fontLookup name
var retrieveTextFontName=function retrieveTextFontName(fontFamily,fontWeight,fontShape){var baseFontName="";switch(fontFamily){case"amsrm":baseFontName="AMS";break;case"textrm":baseFontName="Main";break;case"textsf":baseFontName="SansSerif";break;case"texttt":baseFontName="Typewriter";break;default:baseFontName=fontFamily;// use fonts added by a plugin
}var fontStylesName;if(fontWeight==="textbf"&&fontShape==="textit"){fontStylesName="BoldItalic";}else if(fontWeight==="textbf"){fontStylesName="Bold";}else if(fontWeight==="textit"){fontStylesName="Italic";}else {fontStylesName="Regular";}return baseFontName+"-"+fontStylesName;};/**
 * Maps TeX font commands to objects containing:
 * - variant: string used for "mathvariant" attribute in buildMathML.js
 * - fontName: the "style" parameter to fontMetrics.getCharacterMetrics
 */ // A map between tex font commands an MathML mathvariant attribute values
var fontMap={// styles
"mathbf":{variant:"bold",fontName:"Main-Bold"},"mathrm":{variant:"normal",fontName:"Main-Regular"},"textit":{variant:"italic",fontName:"Main-Italic"},"mathit":{variant:"italic",fontName:"Main-Italic"},"mathnormal":{variant:"italic",fontName:"Math-Italic"},// "boldsymbol" is missing because they require the use of multiple fonts:
// Math-BoldItalic and Main-Bold.  This is handled by a special case in
// makeOrd which ends up calling boldsymbol.
// families
"mathbb":{variant:"double-struck",fontName:"AMS-Regular"},"mathcal":{variant:"script",fontName:"Caligraphic-Regular"},"mathfrak":{variant:"fraktur",fontName:"Fraktur-Regular"},"mathscr":{variant:"script",fontName:"Script-Regular"},"mathsf":{variant:"sans-serif",fontName:"SansSerif-Regular"},"mathtt":{variant:"monospace",fontName:"Typewriter-Regular"}};var svgData={//   path, width, height
vec:["vec",0.471,0.714],// values from the font glyph
oiintSize1:["oiintSize1",0.957,0.499],// oval to overlay the integrand
oiintSize2:["oiintSize2",1.472,0.659],oiiintSize1:["oiiintSize1",1.304,0.499],oiiintSize2:["oiiintSize2",1.98,0.659],leftParenInner:["leftParenInner",0.875,0.3],rightParenInner:["rightParenInner",0.875,0.3]};var buildCommon_staticSvg=function staticSvg(value,options){// Create a span with inline SVG for the element.
var _svgData$value=svgData[value],pathName=_svgData$value[0],width=_svgData$value[1],height=_svgData$value[2];var path=new domTree_PathNode(pathName);var svgNode=new SvgNode([path],{"width":width+"em","height":height+"em",// Override CSS rule `.katex svg { width: 100% }`
"style":"width:"+width+"em","viewBox":"0 0 "+1000*width+" "+1000*height,"preserveAspectRatio":"xMinYMin"});var span=buildCommon_makeSvgSpan(["overlay"],[svgNode],options);span.height=height;span.style.height=height+"em";span.style.width=width+"em";return span;};/* harmony default export */var buildCommon={fontMap:fontMap,makeSymbol:buildCommon_makeSymbol,mathsym:buildCommon_mathsym,makeSpan:buildCommon_makeSpan,makeSvgSpan:buildCommon_makeSvgSpan,makeLineSpan:makeLineSpan,makeAnchor:buildCommon_makeAnchor,makeFragment:buildCommon_makeFragment,wrapFragment:buildCommon_wrapFragment,makeVList:buildCommon_makeVList,makeOrd:buildCommon_makeOrd,makeGlue:buildCommon_makeGlue,staticSvg:buildCommon_staticSvg,svgData:svgData,tryCombineChars:buildCommon_tryCombineChars};// CONCATENATED MODULE: ./src/spacingData.js
/**
 * Describes spaces between different classes of atoms.
 */var thinspace={number:3,unit:"mu"};var mediumspace={number:4,unit:"mu"};var thickspace={number:5,unit:"mu"};// Making the type below exact with all optional fields doesn't work due to
// - https://github.com/facebook/flow/issues/4582
// - https://github.com/facebook/flow/issues/5688
// However, since *all* fields are optional, $Shape<> works as suggested in 5688
// above.
// Spacing relationships for display and text styles
var spacings={mord:{mop:thinspace,mbin:mediumspace,mrel:thickspace,minner:thinspace},mop:{mord:thinspace,mop:thinspace,mrel:thickspace,minner:thinspace},mbin:{mord:mediumspace,mop:mediumspace,mopen:mediumspace,minner:mediumspace},mrel:{mord:thickspace,mop:thickspace,mopen:thickspace,minner:thickspace},mopen:{},mclose:{mop:thinspace,mbin:mediumspace,mrel:thickspace,minner:thinspace},mpunct:{mord:thinspace,mop:thinspace,mrel:thickspace,mopen:thinspace,mclose:thinspace,mpunct:thinspace,minner:thinspace},minner:{mord:thinspace,mop:thinspace,mbin:mediumspace,mrel:thickspace,mopen:thinspace,mpunct:thinspace,minner:thinspace}};// Spacing relationships for script and scriptscript styles
var tightSpacings={mord:{mop:thinspace},mop:{mord:thinspace,mop:thinspace},mbin:{},mrel:{},mopen:{},mclose:{mop:thinspace},mpunct:{},minner:{mop:thinspace}};// CONCATENATED MODULE: ./src/defineFunction.js
/** Context provided to function handlers for error messages. */ // Note: reverse the order of the return type union will cause a flow error.
// See https://github.com/facebook/flow/issues/3663.
// More general version of `HtmlBuilder` for nodes (e.g. \sum, accent types)
// whose presence impacts super/subscripting. In this case, ParseNode<"supsub">
// delegates its HTML building to the HtmlBuilder corresponding to these nodes.
/**
 * Final function spec for use at parse time.
 * This is almost identical to `FunctionPropSpec`, except it
 * 1. includes the function handler, and
 * 2. requires all arguments except argTypes.
 * It is generated by `defineFunction()` below.
 */ /**
 * All registered functions.
 * `functions.js` just exports this same dictionary again and makes it public.
 * `Parser.js` requires this dictionary.
 */var _functions={};/**
 * All HTML builders. Should be only used in the `define*` and the `build*ML`
 * functions.
 */var _htmlGroupBuilders={};/**
 * All MathML builders. Should be only used in the `define*` and the `build*ML`
 * functions.
 */var _mathmlGroupBuilders={};function defineFunction(_ref){var type=_ref.type,names=_ref.names,props=_ref.props,handler=_ref.handler,htmlBuilder=_ref.htmlBuilder,mathmlBuilder=_ref.mathmlBuilder;// Set default values of functions
var data={type:type,numArgs:props.numArgs,argTypes:props.argTypes,greediness:props.greediness===undefined?1:props.greediness,allowedInText:!!props.allowedInText,allowedInMath:props.allowedInMath===undefined?true:props.allowedInMath,numOptionalArgs:props.numOptionalArgs||0,infix:!!props.infix,handler:handler};for(var i=0;i<names.length;++i){_functions[names[i]]=data;}if(type){if(htmlBuilder){_htmlGroupBuilders[type]=htmlBuilder;}if(mathmlBuilder){_mathmlGroupBuilders[type]=mathmlBuilder;}}}/**
 * Use this to register only the HTML and MathML builders for a function (e.g.
 * if the function's ParseNode is generated in Parser.js rather than via a
 * stand-alone handler provided to `defineFunction`).
 */function defineFunctionBuilders(_ref2){var type=_ref2.type,htmlBuilder=_ref2.htmlBuilder,mathmlBuilder=_ref2.mathmlBuilder;defineFunction({type:type,names:[],props:{numArgs:0},handler:function handler(){throw new Error('Should never be called.');},htmlBuilder:htmlBuilder,mathmlBuilder:mathmlBuilder});}// Since the corresponding buildHTML/buildMathML function expects a
// list of elements, we normalize for different kinds of arguments
var ordargument=function ordargument(arg){return arg.type==="ordgroup"?arg.body:[arg];};// CONCATENATED MODULE: ./src/buildHTML.js
/**
 * This file does the main work of building a domTree structure from a parse
 * tree. The entry point is the `buildHTML` function, which takes a parse tree.
 * Then, the buildExpression, buildGroup, and various groupBuilders functions
 * are called, to produce a final HTML tree.
 */var buildHTML_makeSpan=buildCommon.makeSpan;// Binary atoms (first class `mbin`) change into ordinary atoms (`mord`)
// depending on their surroundings. See TeXbook pg. 442-446, Rules 5 and 6,
// and the text before Rule 19.
var binLeftCanceller=["leftmost","mbin","mopen","mrel","mop","mpunct"];var binRightCanceller=["rightmost","mrel","mclose","mpunct"];var styleMap={"display":src_Style.DISPLAY,"text":src_Style.TEXT,"script":src_Style.SCRIPT,"scriptscript":src_Style.SCRIPTSCRIPT};var DomEnum={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"};/**
 * Take a list of nodes, build them in order, and return a list of the built
 * nodes. documentFragments are flattened into their contents, so the
 * returned list contains no fragments. `isRealGroup` is true if `expression`
 * is a real group (no atoms will be added on either side), as opposed to
 * a partial group (e.g. one created by \color). `surrounding` is an array
 * consisting type of nodes that will be added to the left and right.
 */var buildHTML_buildExpression=function buildExpression(expression,options,isRealGroup,surrounding){if(surrounding===void 0){surrounding=[null,null];}// Parse expressions into `groups`.
var groups=[];for(var i=0;i<expression.length;i++){var output=buildHTML_buildGroup(expression[i],options);if(output instanceof tree_DocumentFragment){var children=output.children;groups.push.apply(groups,children);}else {groups.push(output);}}// If `expression` is a partial group, let the parent handle spacings
// to avoid processing groups multiple times.
if(!isRealGroup){return groups;}var glueOptions=options;if(expression.length===1){var node=expression[0];if(node.type==="sizing"){glueOptions=options.havingSize(node.size);}else if(node.type==="styling"){glueOptions=options.havingStyle(styleMap[node.style]);}}// Dummy spans for determining spacings between surrounding atoms.
// If `expression` has no atoms on the left or right, class "leftmost"
// or "rightmost", respectively, is used to indicate it.
var dummyPrev=buildHTML_makeSpan([surrounding[0]||"leftmost"],[],options);var dummyNext=buildHTML_makeSpan([surrounding[1]||"rightmost"],[],options);// TODO: These code assumes that a node's math class is the first element
// of its `classes` array. A later cleanup should ensure this, for
// instance by changing the signature of `makeSpan`.
// Before determining what spaces to insert, perform bin cancellation.
// Binary operators change to ordinary symbols in some contexts.
var isRoot=isRealGroup==="root";traverseNonSpaceNodes(groups,function(node,prev){var prevType=prev.classes[0];var type=node.classes[0];if(prevType==="mbin"&&utils.contains(binRightCanceller,type)){prev.classes[0]="mord";}else if(type==="mbin"&&utils.contains(binLeftCanceller,prevType)){node.classes[0]="mord";}},{node:dummyPrev},dummyNext,isRoot);traverseNonSpaceNodes(groups,function(node,prev){var prevType=getTypeOfDomTree(prev);var type=getTypeOfDomTree(node);// 'mtight' indicates that the node is script or scriptscript style.
var space=prevType&&type?node.hasClass("mtight")?tightSpacings[prevType][type]:spacings[prevType][type]:null;if(space){// Insert glue (spacing) after the `prev`.
return buildCommon.makeGlue(space,glueOptions);}},{node:dummyPrev},dummyNext,isRoot);return groups;};// Depth-first traverse non-space `nodes`, calling `callback` with the current and
// previous node as arguments, optionally returning a node to insert after the
// previous node. `prev` is an object with the previous node and `insertAfter`
// function to insert after it. `next` is a node that will be added to the right.
// Used for bin cancellation and inserting spacings.
var traverseNonSpaceNodes=function traverseNonSpaceNodes(nodes,callback,prev,next,isRoot){if(next){// temporarily append the right node, if exists
nodes.push(next);}var i=0;for(;i<nodes.length;i++){var node=nodes[i];var partialGroup=buildHTML_checkPartialGroup(node);if(partialGroup){// Recursive DFS
// $FlowFixMe: make nodes a $ReadOnlyArray by returning a new array
traverseNonSpaceNodes(partialGroup.children,callback,prev,null,isRoot);continue;}// Ignore explicit spaces (e.g., \;, \,) when determining what implicit
// spacing should go between atoms of different classes
var nonspace=!node.hasClass("mspace");if(nonspace){var result=callback(node,prev.node);if(result){if(prev.insertAfter){prev.insertAfter(result);}else {// insert at front
nodes.unshift(result);i++;}}}if(nonspace){prev.node=node;}else if(isRoot&&node.hasClass("newline")){prev.node=buildHTML_makeSpan(["leftmost"]);// treat like beginning of line
}prev.insertAfter=function(index){return function(n){nodes.splice(index+1,0,n);i++;};}(i);}if(next){nodes.pop();}};// Check if given node is a partial group, i.e., does not affect spacing around.
var buildHTML_checkPartialGroup=function checkPartialGroup(node){if(node instanceof tree_DocumentFragment||node instanceof domTree_Anchor||node instanceof domTree_Span&&node.hasClass("enclosing")){return node;}return null;};// Return the outermost node of a domTree.
var getOutermostNode=function getOutermostNode(node,side){var partialGroup=buildHTML_checkPartialGroup(node);if(partialGroup){var children=partialGroup.children;if(children.length){if(side==="right"){return getOutermostNode(children[children.length-1],"right");}else if(side==="left"){return getOutermostNode(children[0],"left");}}}return node;};// Return math atom class (mclass) of a domTree.
// If `side` is given, it will get the type of the outermost node at given side.
var getTypeOfDomTree=function getTypeOfDomTree(node,side){if(!node){return null;}if(side){node=getOutermostNode(node,side);}// This makes a lot of assumptions as to where the type of atom
// appears.  We should do a better job of enforcing this.
return DomEnum[node.classes[0]]||null;};var makeNullDelimiter=function makeNullDelimiter(options,classes){var moreClasses=["nulldelimiter"].concat(options.baseSizingClasses());return buildHTML_makeSpan(classes.concat(moreClasses));};/**
 * buildGroup is the function that takes a group and calls the correct groupType
 * function for it. It also handles the interaction of size and style changes
 * between parents and children.
 */var buildHTML_buildGroup=function buildGroup(group,options,baseOptions){if(!group){return buildHTML_makeSpan();}if(_htmlGroupBuilders[group.type]){// Call the groupBuilders function
var groupNode=_htmlGroupBuilders[group.type](group,options);// If the size changed between the parent and the current group, account
// for that size difference.
if(baseOptions&&options.size!==baseOptions.size){groupNode=buildHTML_makeSpan(options.sizingClasses(baseOptions),[groupNode],options);var multiplier=options.sizeMultiplier/baseOptions.sizeMultiplier;groupNode.height*=multiplier;groupNode.depth*=multiplier;}return groupNode;}else {throw new src_ParseError("Got group of unknown type: '"+group.type+"'");}};/**
 * Combine an array of HTML DOM nodes (e.g., the output of `buildExpression`)
 * into an unbreakable HTML node of class .base, with proper struts to
 * guarantee correct vertical extent.  `buildHTML` calls this repeatedly to
 * make up the entire expression as a sequence of unbreakable units.
 */function buildHTMLUnbreakable(children,options){// Compute height and depth of this chunk.
var body=buildHTML_makeSpan(["base"],children,options);// Add strut, which ensures that the top of the HTML element falls at
// the height of the expression, and the bottom of the HTML element
// falls at the depth of the expression.
var strut=buildHTML_makeSpan(["strut"]);strut.style.height=body.height+body.depth+"em";strut.style.verticalAlign=-body.depth+"em";body.children.unshift(strut);return body;}/**
 * Take an entire parse tree, and build it into an appropriate set of HTML
 * nodes.
 */function buildHTML(tree,options){// Strip off outer tag wrapper for processing below.
var tag=null;if(tree.length===1&&tree[0].type==="tag"){tag=tree[0].tag;tree=tree[0].body;}// Build the expression contained in the tree
var expression=buildHTML_buildExpression(tree,options,"root");var children=[];// Create one base node for each chunk between potential line breaks.
// The TeXBook [p.173] says "A formula will be broken only after a
// relation symbol like $=$ or $<$ or $\rightarrow$, or after a binary
// operation symbol like $+$ or $-$ or $\times$, where the relation or
// binary operation is on the ``outer level'' of the formula (i.e., not
// enclosed in {...} and not part of an \over construction)."
var parts=[];for(var i=0;i<expression.length;i++){parts.push(expression[i]);if(expression[i].hasClass("mbin")||expression[i].hasClass("mrel")||expression[i].hasClass("allowbreak")){// Put any post-operator glue on same line as operator.
// Watch for \nobreak along the way, and stop at \newline.
var nobreak=false;while(i<expression.length-1&&expression[i+1].hasClass("mspace")&&!expression[i+1].hasClass("newline")){i++;parts.push(expression[i]);if(expression[i].hasClass("nobreak")){nobreak=true;}}// Don't allow break if \nobreak among the post-operator glue.
if(!nobreak){children.push(buildHTMLUnbreakable(parts,options));parts=[];}}else if(expression[i].hasClass("newline")){// Write the line except the newline
parts.pop();if(parts.length>0){children.push(buildHTMLUnbreakable(parts,options));parts=[];}// Put the newline at the top level
children.push(expression[i]);}}if(parts.length>0){children.push(buildHTMLUnbreakable(parts,options));}// Now, if there was a tag, build it too and append it as a final child.
var tagChild;if(tag){tagChild=buildHTMLUnbreakable(buildHTML_buildExpression(tag,options,true));tagChild.classes=["tag"];children.push(tagChild);}var htmlNode=buildHTML_makeSpan(["katex-html"],children);htmlNode.setAttribute("aria-hidden","true");// Adjust the strut of the tag to be the maximum height of all children
// (the height of the enclosing htmlNode) for proper vertical alignment.
if(tagChild){var strut=tagChild.children[0];strut.style.height=htmlNode.height+htmlNode.depth+"em";strut.style.verticalAlign=-htmlNode.depth+"em";}return htmlNode;}// CONCATENATED MODULE: ./src/mathMLTree.js
/**
 * These objects store data about MathML nodes. This is the MathML equivalent
 * of the types in domTree.js. Since MathML handles its own rendering, and
 * since we're mainly using MathML to improve accessibility, we don't manage
 * any of the styling state that the plain DOM nodes do.
 *
 * The `toNode` and `toMarkup` functions work simlarly to how they do in
 * domTree.js, creating namespaced DOM nodes and HTML text markup respectively.
 */function newDocumentFragment(children){return new tree_DocumentFragment(children);}/**
 * This node represents a general purpose MathML node of any type. The
 * constructor requires the type of node to create (for example, `"mo"` or
 * `"mspace"`, corresponding to `<mo>` and `<mspace>` tags).
 */var mathMLTree_MathNode=/*#__PURE__*/function(){function MathNode(type,children){this.type=void 0;this.attributes=void 0;this.children=void 0;this.type=type;this.attributes={};this.children=children||[];}/**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */var _proto=MathNode.prototype;_proto.setAttribute=function setAttribute(name,value){this.attributes[name]=value;}/**
   * Gets an attribute on a MathML node.
   */;_proto.getAttribute=function getAttribute(name){return this.attributes[name];}/**
   * Converts the math node into a MathML-namespaced DOM element.
   */;_proto.toNode=function toNode(){var node=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var attr in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,attr)){node.setAttribute(attr,this.attributes[attr]);}}for(var i=0;i<this.children.length;i++){node.appendChild(this.children[i].toNode());}return node;}/**
   * Converts the math node into an HTML markup string.
   */;_proto.toMarkup=function toMarkup(){var markup="<"+this.type;// Add the attributes
for(var attr in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,attr)){markup+=" "+attr+"=\"";markup+=utils.escape(this.attributes[attr]);markup+="\"";}}markup+=">";for(var i=0;i<this.children.length;i++){markup+=this.children[i].toMarkup();}markup+="</"+this.type+">";return markup;}/**
   * Converts the math node into a string, similar to innerText, but escaped.
   */;_proto.toText=function toText(){return this.children.map(function(child){return child.toText();}).join("");};return MathNode;}();/**
 * This node represents a piece of text.
 */var mathMLTree_TextNode=/*#__PURE__*/function(){function TextNode(text){this.text=void 0;this.text=text;}/**
   * Converts the text node into a DOM text node.
   */var _proto2=TextNode.prototype;_proto2.toNode=function toNode(){return document.createTextNode(this.text);}/**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */;_proto2.toMarkup=function toMarkup(){return utils.escape(this.toText());}/**
   * Converts the text node into a string
   * (representing the text iteself).
   */;_proto2.toText=function toText(){return this.text;};return TextNode;}();/**
 * This node represents a space, but may render as <mspace.../> or as text,
 * depending on the width.
 */var SpaceNode=/*#__PURE__*/function(){/**
   * Create a Space node with width given in CSS ems.
   */function SpaceNode(width){this.width=void 0;this.character=void 0;this.width=width;// See https://www.w3.org/TR/2000/WD-MathML2-20000328/chapter6.html
// for a table of space-like characters.  We use Unicode
// representations instead of &LongNames; as it's not clear how to
// make the latter via document.createTextNode.
if(width>=0.05555&&width<=0.05556){this.character="\u200A";// &VeryThinSpace;
}else if(width>=0.1666&&width<=0.1667){this.character="\u2009";// &ThinSpace;
}else if(width>=0.2222&&width<=0.2223){this.character="\u2005";// &MediumSpace;
}else if(width>=0.2777&&width<=0.2778){this.character="\u2005\u200A";// &ThickSpace;
}else if(width>=-0.05556&&width<=-0.05555){this.character="\u200A\u2063";// &NegativeVeryThinSpace;
}else if(width>=-0.1667&&width<=-0.1666){this.character="\u2009\u2063";// &NegativeThinSpace;
}else if(width>=-0.2223&&width<=-0.2222){this.character="\u205F\u2063";// &NegativeMediumSpace;
}else if(width>=-0.2778&&width<=-0.2777){this.character="\u2005\u2063";// &NegativeThickSpace;
}else {this.character=null;}}/**
   * Converts the math node into a MathML-namespaced DOM element.
   */var _proto3=SpaceNode.prototype;_proto3.toNode=function toNode(){if(this.character){return document.createTextNode(this.character);}else {var node=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");node.setAttribute("width",this.width+"em");return node;}}/**
   * Converts the math node into an HTML markup string.
   */;_proto3.toMarkup=function toMarkup(){if(this.character){return "<mtext>"+this.character+"</mtext>";}else {return "<mspace width=\""+this.width+"em\"/>";}}/**
   * Converts the math node into a string, similar to innerText.
   */;_proto3.toText=function toText(){if(this.character){return this.character;}else {return " ";}};return SpaceNode;}();/* harmony default export */var mathMLTree={MathNode:mathMLTree_MathNode,TextNode:mathMLTree_TextNode,SpaceNode:SpaceNode,newDocumentFragment:newDocumentFragment};// CONCATENATED MODULE: ./src/buildMathML.js
/**
 * This file converts a parse tree into a cooresponding MathML tree. The main
 * entry point is the `buildMathML` function, which takes a parse tree from the
 * parser.
 */ /**
 * Takes a symbol and converts it into a MathML text node after performing
 * optional replacement from symbols.js.
 */var buildMathML_makeText=function makeText(text,mode,options){if(src_symbols[mode][text]&&src_symbols[mode][text].replace&&text.charCodeAt(0)!==0xD835&&!(ligatures.hasOwnProperty(text)&&options&&(options.fontFamily&&options.fontFamily.substr(4,2)==="tt"||options.font&&options.font.substr(4,2)==="tt"))){text=src_symbols[mode][text].replace;}return new mathMLTree.TextNode(text);};/**
 * Wrap the given array of nodes in an <mrow> node if needed, i.e.,
 * unless the array has length 1.  Always returns a single node.
 */var buildMathML_makeRow=function makeRow(body){if(body.length===1){return body[0];}else {return new mathMLTree.MathNode("mrow",body);}};/**
 * Returns the math variant as a string or null if none is required.
 */var buildMathML_getVariant=function getVariant(group,options){// Handle \text... font specifiers as best we can.
// MathML has a limited list of allowable mathvariant specifiers; see
// https://www.w3.org/TR/MathML3/chapter3.html#presm.commatt
if(options.fontFamily==="texttt"){return "monospace";}else if(options.fontFamily==="textsf"){if(options.fontShape==="textit"&&options.fontWeight==="textbf"){return "sans-serif-bold-italic";}else if(options.fontShape==="textit"){return "sans-serif-italic";}else if(options.fontWeight==="textbf"){return "bold-sans-serif";}else {return "sans-serif";}}else if(options.fontShape==="textit"&&options.fontWeight==="textbf"){return "bold-italic";}else if(options.fontShape==="textit"){return "italic";}else if(options.fontWeight==="textbf"){return "bold";}var font=options.font;if(!font||font==="mathnormal"){return null;}var mode=group.mode;if(font==="mathit"){return "italic";}else if(font==="boldsymbol"){return group.type==="textord"?"bold":"bold-italic";}else if(font==="mathbf"){return "bold";}else if(font==="mathbb"){return "double-struck";}else if(font==="mathfrak"){return "fraktur";}else if(font==="mathscr"||font==="mathcal"){// MathML makes no distinction between script and caligrahpic
return "script";}else if(font==="mathsf"){return "sans-serif";}else if(font==="mathtt"){return "monospace";}var text=group.text;if(utils.contains(["\\imath","\\jmath"],text)){return null;}if(src_symbols[mode][text]&&src_symbols[mode][text].replace){text=src_symbols[mode][text].replace;}var fontName=buildCommon.fontMap[font].fontName;if(getCharacterMetrics(text,fontName,mode)){return buildCommon.fontMap[font].variant;}return null;};/**
 * Takes a list of nodes, builds them, and returns a list of the generated
 * MathML nodes.  Also combine consecutive <mtext> outputs into a single
 * <mtext> tag.
 */var buildMathML_buildExpression=function buildExpression(expression,options,isOrdgroup){if(expression.length===1){var group=buildMathML_buildGroup(expression[0],options);if(isOrdgroup&&group instanceof mathMLTree_MathNode&&group.type==="mo"){// When TeX writers want to suppress spacing on an operator,
// they often put the operator by itself inside braces.
group.setAttribute("lspace","0em");group.setAttribute("rspace","0em");}return [group];}var groups=[];var lastGroup;for(var i=0;i<expression.length;i++){var _group=buildMathML_buildGroup(expression[i],options);if(_group instanceof mathMLTree_MathNode&&lastGroup instanceof mathMLTree_MathNode){// Concatenate adjacent <mtext>s
if(_group.type==='mtext'&&lastGroup.type==='mtext'&&_group.getAttribute('mathvariant')===lastGroup.getAttribute('mathvariant')){var _lastGroup$children;(_lastGroup$children=lastGroup.children).push.apply(_lastGroup$children,_group.children);continue;// Concatenate adjacent <mn>s
}else if(_group.type==='mn'&&lastGroup.type==='mn'){var _lastGroup$children2;(_lastGroup$children2=lastGroup.children).push.apply(_lastGroup$children2,_group.children);continue;// Concatenate <mn>...</mn> followed by <mi>.</mi>
}else if(_group.type==='mi'&&_group.children.length===1&&lastGroup.type==='mn'){var child=_group.children[0];if(child instanceof mathMLTree_TextNode&&child.text==='.'){var _lastGroup$children3;(_lastGroup$children3=lastGroup.children).push.apply(_lastGroup$children3,_group.children);continue;}}else if(lastGroup.type==='mi'&&lastGroup.children.length===1){var lastChild=lastGroup.children[0];if(lastChild instanceof mathMLTree_TextNode&&lastChild.text==="\u0338"&&(_group.type==='mo'||_group.type==='mi'||_group.type==='mn')){var _child=_group.children[0];if(_child instanceof mathMLTree_TextNode&&_child.text.length>0){// Overlay with combining character long solidus
_child.text=_child.text.slice(0,1)+"\u0338"+_child.text.slice(1);groups.pop();}}}}groups.push(_group);lastGroup=_group;}return groups;};/**
 * Equivalent to buildExpression, but wraps the elements in an <mrow>
 * if there's more than one.  Returns a single node instead of an array.
 */var buildExpressionRow=function buildExpressionRow(expression,options,isOrdgroup){return buildMathML_makeRow(buildMathML_buildExpression(expression,options,isOrdgroup));};/**
 * Takes a group from the parser and calls the appropriate groupBuilders function
 * on it to produce a MathML node.
 */var buildMathML_buildGroup=function buildGroup(group,options){if(!group){return new mathMLTree.MathNode("mrow");}if(_mathmlGroupBuilders[group.type]){// Call the groupBuilders function
var result=_mathmlGroupBuilders[group.type](group,options);return result;}else {throw new src_ParseError("Got group of unknown type: '"+group.type+"'");}};/**
 * Takes a full parse tree and settings and builds a MathML representation of
 * it. In particular, we put the elements from building the parse tree into a
 * <semantics> tag so we can also include that TeX source as an annotation.
 *
 * Note that we actually return a domTree element with a `<math>` inside it so
 * we can do appropriate styling.
 */function buildMathML(tree,texExpression,options,isDisplayMode,forMathmlOnly){var expression=buildMathML_buildExpression(tree,options);// Wrap up the expression in an mrow so it is presented in the semantics
// tag correctly, unless it's a single <mrow> or <mtable>.
var wrapper;if(expression.length===1&&expression[0]instanceof mathMLTree_MathNode&&utils.contains(["mrow","mtable"],expression[0].type)){wrapper=expression[0];}else {wrapper=new mathMLTree.MathNode("mrow",expression);}// Build a TeX annotation of the source
var annotation=new mathMLTree.MathNode("annotation",[new mathMLTree.TextNode(texExpression)]);annotation.setAttribute("encoding","application/x-tex");var semantics=new mathMLTree.MathNode("semantics",[wrapper,annotation]);var math=new mathMLTree.MathNode("math",[semantics]);math.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML");if(isDisplayMode){math.setAttribute("display","block");}// You can't style <math> nodes, so we wrap the node in a span.
// NOTE: The span class is not typed to have <math> nodes as children, and
// we don't want to make the children type more generic since the children
// of span are expected to have more fields in `buildHtml` contexts.
var wrapperClass=forMathmlOnly?"katex":"katex-mathml";// $FlowFixMe
return buildCommon.makeSpan([wrapperClass],[math]);}// CONCATENATED MODULE: ./src/buildTree.js
var buildTree_optionsFromSettings=function optionsFromSettings(settings){return new src_Options({style:settings.displayMode?src_Style.DISPLAY:src_Style.TEXT,maxSize:settings.maxSize,minRuleThickness:settings.minRuleThickness});};var buildTree_displayWrap=function displayWrap(node,settings){if(settings.displayMode){var classes=["katex-display"];if(settings.leqno){classes.push("leqno");}if(settings.fleqn){classes.push("fleqn");}node=buildCommon.makeSpan(classes,[node]);}return node;};var buildTree_buildTree=function buildTree(tree,expression,settings){var options=buildTree_optionsFromSettings(settings);var katexNode;if(settings.output==="mathml"){return buildMathML(tree,expression,options,settings.displayMode,true);}else if(settings.output==="html"){var htmlNode=buildHTML(tree,options);katexNode=buildCommon.makeSpan(["katex"],[htmlNode]);}else {var mathMLNode=buildMathML(tree,expression,options,settings.displayMode,false);var _htmlNode=buildHTML(tree,options);katexNode=buildCommon.makeSpan(["katex"],[mathMLNode,_htmlNode]);}return buildTree_displayWrap(katexNode,settings);};var buildTree_buildHTMLTree=function buildHTMLTree(tree,expression,settings){var options=buildTree_optionsFromSettings(settings);var htmlNode=buildHTML(tree,options);var katexNode=buildCommon.makeSpan(["katex"],[htmlNode]);return buildTree_displayWrap(katexNode,settings);};/**
 * This file provides support to buildMathML.js and buildHTML.js
 * for stretchy wide elements rendered from SVG files
 * and other CSS trickery.
 */var stretchyCodePoint={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"\u2190",underleftarrow:"\u2190",xleftarrow:"\u2190",overrightarrow:"\u2192",underrightarrow:"\u2192",xrightarrow:"\u2192",underbrace:"\u23DF",overbrace:"\u23DE",overgroup:"\u23E0",undergroup:"\u23E1",overleftrightarrow:"\u2194",underleftrightarrow:"\u2194",xleftrightarrow:"\u2194",Overrightarrow:"\u21D2",xRightarrow:"\u21D2",overleftharpoon:"\u21BC",xleftharpoonup:"\u21BC",overrightharpoon:"\u21C0",xrightharpoonup:"\u21C0",xLeftarrow:"\u21D0",xLeftrightarrow:"\u21D4",xhookleftarrow:"\u21A9",xhookrightarrow:"\u21AA",xmapsto:"\u21A6",xrightharpoondown:"\u21C1",xleftharpoondown:"\u21BD",xrightleftharpoons:"\u21CC",xleftrightharpoons:"\u21CB",xtwoheadleftarrow:"\u219E",xtwoheadrightarrow:"\u21A0",xlongequal:"=",xtofrom:"\u21C4",xrightleftarrows:"\u21C4",xrightequilibrium:"\u21CC",// Not a perfect match.
xleftequilibrium:"\u21CB"// None better available.
};var stretchy_mathMLnode=function mathMLnode(label){var node=new mathMLTree.MathNode("mo",[new mathMLTree.TextNode(stretchyCodePoint[label.substr(1)])]);node.setAttribute("stretchy","true");return node;};// Many of the KaTeX SVG images have been adapted from glyphs in KaTeX fonts.
// Copyright (c) 2009-2010, Design Science, Inc. (<www.mathjax.org>)
// Copyright (c) 2014-2017 Khan Academy (<www.khanacademy.org>)
// Licensed under the SIL Open Font License, Version 1.1.
// See \nhttp://scripts.sil.org/OFL
// Very Long SVGs
//    Many of the KaTeX stretchy wide elements use a long SVG image and an
//    overflow: hidden tactic to achieve a stretchy image while avoiding
//    distortion of arrowheads or brace corners.
//    The SVG typically contains a very long (400 em) arrow.
//    The SVG is in a container span that has overflow: hidden, so the span
//    acts like a window that exposes only part of the  SVG.
//    The SVG always has a longer, thinner aspect ratio than the container span.
//    After the SVG fills 100% of the height of the container span,
//    there is a long arrow shaft left over. That left-over shaft is not shown.
//    Instead, it is sliced off because the span's CSS has overflow: hidden.
//    Thus, the reader sees an arrow that matches the subject matter width
//    without distortion.
//    Some functions, such as \cancel, need to vary their aspect ratio. These
//    functions do not get the overflow SVG treatment.
// Second Brush Stroke
//    Low resolution monitors struggle to display images in fine detail.
//    So browsers apply anti-aliasing. A long straight arrow shaft therefore
//    will sometimes appear as if it has a blurred edge.
//    To mitigate this, these SVG files contain a second "brush-stroke" on the
//    arrow shafts. That is, a second long thin rectangular SVG path has been
//    written directly on top of each arrow shaft. This reinforcement causes
//    some of the screen pixels to display as black instead of the anti-aliased
//    gray pixel that a  single path would generate. So we get arrow shafts
//    whose edges appear to be sharper.
// In the katexImagesData object just below, the dimensions all
// correspond to path geometry inside the relevant SVG.
// For example, \overrightarrow uses the same arrowhead as glyph U+2192
// from the KaTeX Main font. The scaling factor is 1000.
// That is, inside the font, that arrowhead is 522 units tall, which
// corresponds to 0.522 em inside the document.
var katexImagesData={//   path(s), minWidth, height, align
overrightarrow:[["rightarrow"],0.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],0.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],0.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],0.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],0.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],0.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],0.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],0.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],0.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],0.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],0.888,522,"xMaxYMin"],xlongequal:[["longequal"],0.888,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],0.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],0.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],0.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],0.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],0.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],0.888,522],overgroup:[["leftgroup","rightgroup"],0.888,342],undergroup:[["leftgroupunder","rightgroupunder"],0.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],// The next three arrows are from the mhchem package.
// In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
// document as \xrightarrow or \xrightleftharpoons. Those have
// min-length = 1.75em, so we set min-length on these next three to match.
xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]};var groupLength=function groupLength(arg){if(arg.type==="ordgroup"){return arg.body.length;}else {return 1;}};var stretchy_svgSpan=function svgSpan(group,options){// Create a span with inline SVG for the element.
function buildSvgSpan_(){var viewBoxWidth=400000;// default
var label=group.label.substr(1);if(utils.contains(["widehat","widecheck","widetilde","utilde"],label)){// Each type in the `if` statement corresponds to one of the ParseNode
// types below. This narrowing is required to access `grp.base`.
var grp=group;// There are four SVG images available for each function.
// Choose a taller image when there are more characters.
var numChars=groupLength(grp.base);var viewBoxHeight;var pathName;var _height;if(numChars>5){if(label==="widehat"||label==="widecheck"){viewBoxHeight=420;viewBoxWidth=2364;_height=0.42;pathName=label+"4";}else {viewBoxHeight=312;viewBoxWidth=2340;_height=0.34;pathName="tilde4";}}else {var imgIndex=[1,1,2,2,3,3][numChars];if(label==="widehat"||label==="widecheck"){viewBoxWidth=[0,1062,2364,2364,2364][imgIndex];viewBoxHeight=[0,239,300,360,420][imgIndex];_height=[0,0.24,0.3,0.3,0.36,0.42][imgIndex];pathName=label+imgIndex;}else {viewBoxWidth=[0,600,1033,2339,2340][imgIndex];viewBoxHeight=[0,260,286,306,312][imgIndex];_height=[0,0.26,0.286,0.3,0.306,0.34][imgIndex];pathName="tilde"+imgIndex;}}var path=new domTree_PathNode(pathName);var svgNode=new SvgNode([path],{"width":"100%","height":_height+"em","viewBox":"0 0 "+viewBoxWidth+" "+viewBoxHeight,"preserveAspectRatio":"none"});return {span:buildCommon.makeSvgSpan([],[svgNode],options),minWidth:0,height:_height};}else {var spans=[];var data=katexImagesData[label];var paths=data[0],_minWidth=data[1],_viewBoxHeight=data[2];var _height2=_viewBoxHeight/1000;var numSvgChildren=paths.length;var widthClasses;var aligns;if(numSvgChildren===1){// $FlowFixMe: All these cases must be of the 4-tuple type.
var align1=data[3];widthClasses=["hide-tail"];aligns=[align1];}else if(numSvgChildren===2){widthClasses=["halfarrow-left","halfarrow-right"];aligns=["xMinYMin","xMaxYMin"];}else if(numSvgChildren===3){widthClasses=["brace-left","brace-center","brace-right"];aligns=["xMinYMin","xMidYMin","xMaxYMin"];}else {throw new Error("Correct katexImagesData or update code here to support\n                    "+numSvgChildren+" children.");}for(var i=0;i<numSvgChildren;i++){var _path=new domTree_PathNode(paths[i]);var _svgNode=new SvgNode([_path],{"width":"400em","height":_height2+"em","viewBox":"0 0 "+viewBoxWidth+" "+_viewBoxHeight,"preserveAspectRatio":aligns[i]+" slice"});var _span=buildCommon.makeSvgSpan([widthClasses[i]],[_svgNode],options);if(numSvgChildren===1){return {span:_span,minWidth:_minWidth,height:_height2};}else {_span.style.height=_height2+"em";spans.push(_span);}}return {span:buildCommon.makeSpan(["stretchy"],spans,options),minWidth:_minWidth,height:_height2};}}// buildSvgSpan_()
var _buildSvgSpan_=buildSvgSpan_(),span=_buildSvgSpan_.span,minWidth=_buildSvgSpan_.minWidth,height=_buildSvgSpan_.height;// Note that we are returning span.depth = 0.
// Any adjustments relative to the baseline must be done in buildHTML.
span.height=height;span.style.height=height+"em";if(minWidth>0){span.style.minWidth=minWidth+"em";}return span;};var stretchy_encloseSpan=function encloseSpan(inner,label,pad,options){// Return an image span for \cancel, \bcancel, \xcancel, or \fbox
var img;var totalHeight=inner.height+inner.depth+2*pad;if(/fbox|color/.test(label)){img=buildCommon.makeSpan(["stretchy",label],[],options);if(label==="fbox"){var color=options.color&&options.getColor();if(color){img.style.borderColor=color;}}}else {// \cancel, \bcancel, or \xcancel
// Since \cancel's SVG is inline and it omits the viewBox attribute,
// its stroke-width will not vary with span area.
var lines=[];if(/^[bx]cancel$/.test(label)){lines.push(new LineNode({"x1":"0","y1":"0","x2":"100%","y2":"100%","stroke-width":"0.046em"}));}if(/^x?cancel$/.test(label)){lines.push(new LineNode({"x1":"0","y1":"100%","x2":"100%","y2":"0","stroke-width":"0.046em"}));}var svgNode=new SvgNode(lines,{"width":"100%","height":totalHeight+"em"});img=buildCommon.makeSvgSpan([],[svgNode],options);}img.height=totalHeight;img.style.height=totalHeight+"em";return img;};/* harmony default export */var stretchy={encloseSpan:stretchy_encloseSpan,mathMLnode:stretchy_mathMLnode,svgSpan:stretchy_svgSpan};// CONCATENATED MODULE: ./src/parseNode.js
/**
 * Asserts that the node is of the given type and returns it with stricter
 * typing. Throws if the node's type does not match.
 */function assertNodeType(node,type){if(!node||node.type!==type){throw new Error("Expected node of type "+type+", but got "+(node?"node of type "+node.type:String(node)));}return node;}/**
 * Returns the node more strictly typed iff it is of the given type. Otherwise,
 * returns null.
 */function assertSymbolNodeType(node){var typedNode=checkSymbolNodeType(node);if(!typedNode){throw new Error("Expected node of symbol group type, but got "+(node?"node of type "+node.type:String(node)));}return typedNode;}/**
 * Returns the node more strictly typed iff it is of the given type. Otherwise,
 * returns null.
 */function checkSymbolNodeType(node){if(node&&(node.type==="atom"||NON_ATOMS.hasOwnProperty(node.type))){// $FlowFixMe
return node;}return null;}// CONCATENATED MODULE: ./src/functions/accent.js
// NOTE: Unlike most `htmlBuilder`s, this one handles not only "accent", but
var accent_htmlBuilder=function htmlBuilder(grp,options){// Accents are handled in the TeXbook pg. 443, rule 12.
var base;var group;var supSubGroup;if(grp&&grp.type==="supsub"){// If our base is a character box, and we have superscripts and
// subscripts, the supsub will defer to us. In particular, we want
// to attach the superscripts and subscripts to the inner body (so
// that the position of the superscripts and subscripts won't be
// affected by the height of the accent). We accomplish this by
// sticking the base of the accent into the base of the supsub, and
// rendering that, while keeping track of where the accent is.
// The real accent group is the base of the supsub group
group=assertNodeType(grp.base,"accent");// The character box is the base of the accent group
base=group.base;// Stick the character box into the base of the supsub group
grp.base=base;// Rerender the supsub group with its new base, and store that
// result.
supSubGroup=assertSpan(buildHTML_buildGroup(grp,options));// reset original base
grp.base=group;}else {group=assertNodeType(grp,"accent");base=group.base;}// Build the base group
var body=buildHTML_buildGroup(base,options.havingCrampedStyle());// Does the accent need to shift for the skew of a character?
var mustShift=group.isShifty&&utils.isCharacterBox(base);// Calculate the skew of the accent. This is based on the line "If the
// nucleus is not a single character, let s = 0; otherwise set s to the
// kern amount for the nucleus followed by the \skewchar of its font."
// Note that our skew metrics are just the kern between each character
// and the skewchar.
var skew=0;if(mustShift){// If the base is a character box, then we want the skew of the
// innermost character. To do that, we find the innermost character:
var baseChar=utils.getBaseElem(base);// Then, we render its group to get the symbol inside it
var baseGroup=buildHTML_buildGroup(baseChar,options.havingCrampedStyle());// Finally, we pull the skew off of the symbol.
skew=assertSymbolDomNode(baseGroup).skew;// Note that we now throw away baseGroup, because the layers we
// removed with getBaseElem might contain things like \color which
// we can't get rid of.
// TODO(emily): Find a better way to get the skew
}// calculate the amount of space between the body and the accent
var clearance=Math.min(body.height,options.fontMetrics().xHeight);// Build the accent
var accentBody;if(!group.isStretchy){var accent;var width;if(group.label==="\\vec"){// Before version 0.9, \vec used the combining font glyph U+20D7.
// But browsers, especially Safari, are not consistent in how they
// render combining characters when not preceded by a character.
// So now we use an SVG.
// If Safari reforms, we should consider reverting to the glyph.
accent=buildCommon.staticSvg("vec",options);width=buildCommon.svgData.vec[1];}else {accent=buildCommon.makeOrd({mode:group.mode,text:group.label},options,"textord");accent=assertSymbolDomNode(accent);// Remove the italic correction of the accent, because it only serves to
// shift the accent over to a place we don't want.
accent.italic=0;width=accent.width;}accentBody=buildCommon.makeSpan(["accent-body"],[accent]);// "Full" accents expand the width of the resulting symbol to be
// at least the width of the accent, and overlap directly onto the
// character without any vertical offset.
var accentFull=group.label==="\\textcircled";if(accentFull){accentBody.classes.push('accent-full');clearance=body.height;}// Shift the accent over by the skew.
var left=skew;// CSS defines `.katex .accent .accent-body:not(.accent-full) { width: 0 }`
// so that the accent doesn't contribute to the bounding box.
// We need to shift the character by its width (effectively half
// its width) to compensate.
if(!accentFull){left-=width/2;}accentBody.style.left=left+"em";// \textcircled uses the \bigcirc glyph, so it needs some
// vertical adjustment to match LaTeX.
if(group.label==="\\textcircled"){accentBody.style.top=".2em";}accentBody=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:body},{type:"kern",size:-clearance},{type:"elem",elem:accentBody}]},options);}else {accentBody=stretchy.svgSpan(group,options);accentBody=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:body},{type:"elem",elem:accentBody,wrapperClasses:["svg-align"],wrapperStyle:skew>0?{width:"calc(100% - "+2*skew+"em)",marginLeft:2*skew+"em"}:undefined}]},options);}var accentWrap=buildCommon.makeSpan(["mord","accent"],[accentBody],options);if(supSubGroup){// Here, we replace the "base" child of the supsub with our newly
// generated accent.
supSubGroup.children[0]=accentWrap;// Since we don't rerun the height calculation after replacing the
// accent, we manually recalculate height.
supSubGroup.height=Math.max(accentWrap.height,supSubGroup.height);// Accents should always be ords, even when their innards are not.
supSubGroup.classes[0]="mord";return supSubGroup;}else {return accentWrap;}};var accent_mathmlBuilder=function mathmlBuilder(group,options){var accentNode=group.isStretchy?stretchy.mathMLnode(group.label):new mathMLTree.MathNode("mo",[buildMathML_makeText(group.label,group.mode)]);var node=new mathMLTree.MathNode("mover",[buildMathML_buildGroup(group.base,options),accentNode]);node.setAttribute("accent","true");return node;};var NON_STRETCHY_ACCENT_REGEX=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(function(accent){return "\\"+accent;}).join("|"));// Accents
defineFunction({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:function handler(context,args){var base=args[0];var isStretchy=!NON_STRETCHY_ACCENT_REGEX.test(context.funcName);var isShifty=!isStretchy||context.funcName==="\\widehat"||context.funcName==="\\widetilde"||context.funcName==="\\widecheck";return {type:"accent",mode:context.parser.mode,label:context.funcName,isStretchy:isStretchy,isShifty:isShifty,base:base};},htmlBuilder:accent_htmlBuilder,mathmlBuilder:accent_mathmlBuilder});// Text-mode accents
defineFunction({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:true,allowedInMath:false},handler:function handler(context,args){var base=args[0];return {type:"accent",mode:context.parser.mode,label:context.funcName,isStretchy:false,isShifty:true,base:base};},htmlBuilder:accent_htmlBuilder,mathmlBuilder:accent_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/accentunder.js
// Horizontal overlap functions
defineFunction({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var base=args[0];return {type:"accentUnder",mode:parser.mode,label:funcName,base:base};},htmlBuilder:function htmlBuilder(group,options){// Treat under accents much like underlines.
var innerGroup=buildHTML_buildGroup(group.base,options);var accentBody=stretchy.svgSpan(group,options);var kern=group.label==="\\utilde"?0.12:0;// Generate the vlist, with the appropriate kerns
var vlist=buildCommon.makeVList({positionType:"top",positionData:innerGroup.height,children:[{type:"elem",elem:accentBody,wrapperClasses:["svg-align"]},{type:"kern",size:kern},{type:"elem",elem:innerGroup}]},options);return buildCommon.makeSpan(["mord","accentunder"],[vlist],options);},mathmlBuilder:function mathmlBuilder(group,options){var accentNode=stretchy.mathMLnode(group.label);var node=new mathMLTree.MathNode("munder",[buildMathML_buildGroup(group.base,options),accentNode]);node.setAttribute("accentunder","true");return node;}});// CONCATENATED MODULE: ./src/functions/arrow.js
// Helper function
var arrow_paddedNode=function paddedNode(group){var node=new mathMLTree.MathNode("mpadded",group?[group]:[]);node.setAttribute("width","+0.6em");node.setAttribute("lspace","0.3em");return node;};// Stretchy arrows with an optional argument
defineFunction({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom",// The next 3 functions are here to support the mhchem extension.
// Direct use of these functions is discouraged and may break someday.
"\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium"],props:{numArgs:1,numOptionalArgs:1},handler:function handler(_ref,args,optArgs){var parser=_ref.parser,funcName=_ref.funcName;return {type:"xArrow",mode:parser.mode,label:funcName,body:args[0],below:optArgs[0]};},// Flow is unable to correctly infer the type of `group`, even though it's
// unamibiguously determined from the passed-in `type` above.
htmlBuilder:function htmlBuilder(group,options){var style=options.style;// Build the argument groups in the appropriate style.
// Ref: amsmath.dtx:   \hbox{$\scriptstyle\mkern#3mu{#6}\mkern#4mu$}%
// Some groups can return document fragments.  Handle those by wrapping
// them in a span.
var newOptions=options.havingStyle(style.sup());var upperGroup=buildCommon.wrapFragment(buildHTML_buildGroup(group.body,newOptions,options),options);upperGroup.classes.push("x-arrow-pad");var lowerGroup;if(group.below){// Build the lower group
newOptions=options.havingStyle(style.sub());lowerGroup=buildCommon.wrapFragment(buildHTML_buildGroup(group.below,newOptions,options),options);lowerGroup.classes.push("x-arrow-pad");}var arrowBody=stretchy.svgSpan(group,options);// Re shift: Note that stretchy.svgSpan returned arrowBody.depth = 0.
// The point we want on the math axis is at 0.5 * arrowBody.height.
var arrowShift=-options.fontMetrics().axisHeight+0.5*arrowBody.height;// 2 mu kern. Ref: amsmath.dtx: #7\if0#2\else\mkern#2mu\fi
var upperShift=-options.fontMetrics().axisHeight-0.5*arrowBody.height-0.111;// 0.111 em = 2 mu
if(upperGroup.depth>0.25||group.label==="\\xleftequilibrium"){upperShift-=upperGroup.depth;// shift up if depth encroaches
}// Generate the vlist
var vlist;if(lowerGroup){var lowerShift=-options.fontMetrics().axisHeight+lowerGroup.height+0.5*arrowBody.height+0.111;vlist=buildCommon.makeVList({positionType:"individualShift",children:[{type:"elem",elem:upperGroup,shift:upperShift},{type:"elem",elem:arrowBody,shift:arrowShift},{type:"elem",elem:lowerGroup,shift:lowerShift}]},options);}else {vlist=buildCommon.makeVList({positionType:"individualShift",children:[{type:"elem",elem:upperGroup,shift:upperShift},{type:"elem",elem:arrowBody,shift:arrowShift}]},options);}// $FlowFixMe: Replace this with passing "svg-align" into makeVList.
vlist.children[0].children[0].children[1].classes.push("svg-align");return buildCommon.makeSpan(["mrel","x-arrow"],[vlist],options);},mathmlBuilder:function mathmlBuilder(group,options){var arrowNode=stretchy.mathMLnode(group.label);var node;if(group.body){var upperNode=arrow_paddedNode(buildMathML_buildGroup(group.body,options));if(group.below){var lowerNode=arrow_paddedNode(buildMathML_buildGroup(group.below,options));node=new mathMLTree.MathNode("munderover",[arrowNode,lowerNode,upperNode]);}else {node=new mathMLTree.MathNode("mover",[arrowNode,upperNode]);}}else if(group.below){var _lowerNode=arrow_paddedNode(buildMathML_buildGroup(group.below,options));node=new mathMLTree.MathNode("munder",[arrowNode,_lowerNode]);}else {// This should never happen.
// Parser.js throws an error if there is no argument.
node=arrow_paddedNode();node=new mathMLTree.MathNode("mover",[arrowNode,node]);}return node;}});// CONCATENATED MODULE: ./src/functions/char.js
// \@char is an internal function that takes a grouped decimal argument like
// {123} and converts into symbol with code 123.  It is used by the *macro*
// \char defined in macros.js.
defineFunction({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser;var arg=assertNodeType(args[0],"ordgroup");var group=arg.body;var number="";for(var i=0;i<group.length;i++){var node=assertNodeType(group[i],"textord");number+=node.text;}var code=parseInt(number);if(isNaN(code)){throw new src_ParseError("\\@char has non-numeric argument "+number);}return {type:"textord",mode:parser.mode,text:String.fromCharCode(code)};}});// CONCATENATED MODULE: ./src/functions/color.js
var color_htmlBuilder=function htmlBuilder(group,options){var elements=buildHTML_buildExpression(group.body,options.withColor(group.color),false);// \color isn't supposed to affect the type of the elements it contains.
// To accomplish this, we wrap the results in a fragment, so the inner
// elements will be able to directly interact with their neighbors. For
// example, `\color{red}{2 +} 3` has the same spacing as `2 + 3`
return buildCommon.makeFragment(elements);};var color_mathmlBuilder=function mathmlBuilder(group,options){var inner=buildMathML_buildExpression(group.body,options.withColor(group.color));var node=new mathMLTree.MathNode("mstyle",inner);node.setAttribute("mathcolor",group.color);return node;};defineFunction({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:true,greediness:3,argTypes:["color","original"]},handler:function handler(_ref,args){var parser=_ref.parser;var color=assertNodeType(args[0],"color-token").color;var body=args[1];return {type:"color",mode:parser.mode,color:color,body:ordargument(body)};},htmlBuilder:color_htmlBuilder,mathmlBuilder:color_mathmlBuilder});defineFunction({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:true,greediness:3,argTypes:["color"]},handler:function handler(_ref2,args){var parser=_ref2.parser,breakOnTokenText=_ref2.breakOnTokenText;var color=assertNodeType(args[0],"color-token").color;// Set macro \current@color in current namespace to store the current
// color, mimicking the behavior of color.sty.
// This is currently used just to correctly color a \right
// that follows a \color command.
parser.gullet.macros.set("\\current@color",color);// Parse out the implicit body that should be colored.
var body=parser.parseExpression(true,breakOnTokenText);return {type:"color",mode:parser.mode,color:color,body:body};},htmlBuilder:color_htmlBuilder,mathmlBuilder:color_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/cr.js
// Row breaks within tabular environments, and line breaks at top level
// \\ is a macro mapping to either \cr or \newline.  Because they have the
// same signature, we implement them as one megafunction, with newRow
// indicating whether we're in the \cr case, and newLine indicating whether
// to break the line in the \newline case.
defineFunction({type:"cr",names:["\\cr","\\newline"],props:{numArgs:0,numOptionalArgs:1,argTypes:["size"],allowedInText:true},handler:function handler(_ref,args,optArgs){var parser=_ref.parser,funcName=_ref.funcName;var size=optArgs[0];var newRow=funcName==="\\cr";var newLine=false;if(!newRow){if(parser.settings.displayMode&&parser.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline "+"does nothing in display mode")){newLine=false;}else {newLine=true;}}return {type:"cr",mode:parser.mode,newLine:newLine,newRow:newRow,size:size&&assertNodeType(size,"size").value};},// The following builders are called only at the top level,
// not within tabular/array environments.
htmlBuilder:function htmlBuilder(group,options){if(group.newRow){throw new src_ParseError("\\cr valid only within a tabular/array environment");}var span=buildCommon.makeSpan(["mspace"],[],options);if(group.newLine){span.classes.push("newline");if(group.size){span.style.marginTop=units_calculateSize(group.size,options)+"em";}}return span;},mathmlBuilder:function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mspace");if(group.newLine){node.setAttribute("linebreak","newline");if(group.size){node.setAttribute("height",units_calculateSize(group.size,options)+"em");}}return node;}});// CONCATENATED MODULE: ./src/functions/def.js
var globalMap={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"};var def_checkControlSequence=function checkControlSequence(tok){var name=tok.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(name)){throw new src_ParseError("Expected a control sequence",tok);}return name;};var getRHS=function getRHS(parser){var tok=parser.gullet.popToken();if(tok.text==="="){// consume optional equals
tok=parser.gullet.popToken();if(tok.text===" "){// consume one optional space
tok=parser.gullet.popToken();}}return tok;};var letCommand=function letCommand(parser,name,tok,global){var macro=parser.gullet.macros.get(tok.text);if(macro==null){// don't expand it later even if a macro with the same name is defined
// e.g., \let\foo=\frac \def\frac{\relax} \frac12
tok.noexpand=true;macro={tokens:[tok],numArgs:0,// reproduce the same behavior in expansion
unexpandable:!parser.gullet.isExpandable(tok.text)};}parser.gullet.macros.set(name,macro,global);};// <assignment> -> <non-macro assignment>|<macro assignment>
// <non-macro assignment> -> <simple assignment>|\global<non-macro assignment>
// <macro assignment> -> <definition>|<prefix><macro assignment>
// <prefix> -> \global|\long|\outer
defineFunction({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:true},handler:function handler(_ref){var parser=_ref.parser,funcName=_ref.funcName;parser.consumeSpaces();var token=parser.fetch();if(globalMap[token.text]){// KaTeX doesn't have \par, so ignore \long
if(funcName==="\\global"||funcName==="\\\\globallong"){token.text=globalMap[token.text];}return assertNodeType(parser.parseFunction(),"internal");}throw new src_ParseError("Invalid token after macro prefix",token);}});// Basic support for macro definitions: \def, \gdef, \edef, \xdef
// <definition> -> <def><control sequence><definition text>
// <def> -> \def|\gdef|\edef|\xdef
// <definition text> -> <parameter text><left brace><balanced text><right brace>
defineFunction({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:true},handler:function handler(_ref2){var parser=_ref2.parser,funcName=_ref2.funcName;var arg=parser.gullet.consumeArgs(1)[0];if(arg.length!==1){throw new src_ParseError("\\gdef's first argument must be a macro name");}var name=arg[0].text;// Count argument specifiers, and check they are in the order #1 #2 ...
var numArgs=0;arg=parser.gullet.consumeArgs(1)[0];while(arg.length===1&&arg[0].text==="#"){arg=parser.gullet.consumeArgs(1)[0];if(arg.length!==1){throw new src_ParseError("Invalid argument number length \""+arg.length+"\"");}if(!/^[1-9]$/.test(arg[0].text)){throw new src_ParseError("Invalid argument number \""+arg[0].text+"\"");}numArgs++;if(parseInt(arg[0].text)!==numArgs){throw new src_ParseError("Argument number \""+arg[0].text+"\" out of order");}arg=parser.gullet.consumeArgs(1)[0];}if(funcName==="\\edef"||funcName==="\\xdef"){arg=parser.gullet.expandTokens(arg);arg.reverse();// to fit in with stack order
}// Final arg is the expansion of the macro
parser.gullet.macros.set(name,{tokens:arg,numArgs:numArgs},funcName===globalMap[funcName]);return {type:"internal",mode:parser.mode};}});// <simple assignment> -> <let assignment>
// <let assignment> -> \futurelet<control sequence><token><token>
//     | \let<control sequence><equals><one optional space><token>
// <equals> -> <optional spaces>|<optional spaces>=
defineFunction({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:true},handler:function handler(_ref3){var parser=_ref3.parser,funcName=_ref3.funcName;var name=def_checkControlSequence(parser.gullet.popToken());parser.gullet.consumeSpaces();var tok=getRHS(parser);letCommand(parser,name,tok,funcName==="\\\\globallet");return {type:"internal",mode:parser.mode};}});// ref: https://www.tug.org/TUGboat/tb09-3/tb22bechtolsheim.pdf
defineFunction({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:true},handler:function handler(_ref4){var parser=_ref4.parser,funcName=_ref4.funcName;var name=def_checkControlSequence(parser.gullet.popToken());var middle=parser.gullet.popToken();var tok=parser.gullet.popToken();letCommand(parser,name,tok,funcName==="\\\\globalfuture");parser.gullet.pushToken(tok);parser.gullet.pushToken(middle);return {type:"internal",mode:parser.mode};}});// CONCATENATED MODULE: ./src/delimiter.js
/**
 * This file deals with creating delimiters of various sizes. The TeXbook
 * discusses these routines on page 441-442, in the "Another subroutine sets box
 * x to a specified variable delimiter" paragraph.
 *
 * There are three main routines here. `makeSmallDelim` makes a delimiter in the
 * normal font, but in either text, script, or scriptscript style.
 * `makeLargeDelim` makes a delimiter in textstyle, but in one of the Size1,
 * Size2, Size3, or Size4 fonts. `makeStackedDelim` makes a delimiter out of
 * smaller pieces that are stacked on top of one another.
 *
 * The functions take a parameter `center`, which determines if the delimiter
 * should be centered around the axis.
 *
 * Then, there are three exposed functions. `sizedDelim` makes a delimiter in
 * one of the given sizes. This is used for things like `\bigl`.
 * `customSizedDelim` makes a delimiter with a given total height+depth. It is
 * called in places like `\sqrt`. `leftRightDelim` makes an appropriate
 * delimiter which surrounds an expression of a given height an depth. It is
 * used in `\left` and `\right`.
 */ /**
 * Get the metrics for a given symbol and font, after transformation (i.e.
 * after following replacement from symbols.js)
 */var delimiter_getMetrics=function getMetrics(symbol,font,mode){var replace=src_symbols.math[symbol]&&src_symbols.math[symbol].replace;var metrics=getCharacterMetrics(replace||symbol,font,mode);if(!metrics){throw new Error("Unsupported symbol "+symbol+" and font size "+font+".");}return metrics;};/**
 * Puts a delimiter span in a given style, and adds appropriate height, depth,
 * and maxFontSizes.
 */var delimiter_styleWrap=function styleWrap(delim,toStyle,options,classes){var newOptions=options.havingBaseStyle(toStyle);var span=buildCommon.makeSpan(classes.concat(newOptions.sizingClasses(options)),[delim],options);var delimSizeMultiplier=newOptions.sizeMultiplier/options.sizeMultiplier;span.height*=delimSizeMultiplier;span.depth*=delimSizeMultiplier;span.maxFontSize=newOptions.sizeMultiplier;return span;};var centerSpan=function centerSpan(span,options,style){var newOptions=options.havingBaseStyle(style);var shift=(1-options.sizeMultiplier/newOptions.sizeMultiplier)*options.fontMetrics().axisHeight;span.classes.push("delimcenter");span.style.top=shift+"em";span.height-=shift;span.depth+=shift;};/**
 * Makes a small delimiter. This is a delimiter that comes in the Main-Regular
 * font, but is restyled to either be in textstyle, scriptstyle, or
 * scriptscriptstyle.
 */var delimiter_makeSmallDelim=function makeSmallDelim(delim,style,center,options,mode,classes){var text=buildCommon.makeSymbol(delim,"Main-Regular",mode,options);var span=delimiter_styleWrap(text,style,options,classes);if(center){centerSpan(span,options,style);}return span;};/**
 * Builds a symbol in the given font size (note size is an integer)
 */var delimiter_mathrmSize=function mathrmSize(value,size,mode,options){return buildCommon.makeSymbol(value,"Size"+size+"-Regular",mode,options);};/**
 * Makes a large delimiter. This is a delimiter that comes in the Size1, Size2,
 * Size3, or Size4 fonts. It is always rendered in textstyle.
 */var delimiter_makeLargeDelim=function makeLargeDelim(delim,size,center,options,mode,classes){var inner=delimiter_mathrmSize(delim,size,mode,options);var span=delimiter_styleWrap(buildCommon.makeSpan(["delimsizing","size"+size],[inner],options),src_Style.TEXT,options,classes);if(center){centerSpan(span,options,src_Style.TEXT);}return span;};/**
 * Make an inner span with the given offset and in the given font. This is used
 * in `makeStackedDelim` to make the stacking pieces for the delimiter.
 */var delimiter_makeInner=function makeInner(symbol,font,mode){var sizeClass;// Apply the correct CSS class to choose the right font.
if(font==="Size1-Regular"){sizeClass="delim-size1";}else/* if (font === "Size4-Regular") */{sizeClass="delim-size4";}var inner=buildCommon.makeSpan(["delimsizinginner",sizeClass],[buildCommon.makeSpan([],[buildCommon.makeSymbol(symbol,font,mode)])]);// Since this will be passed into `makeVList` in the end, wrap the element
// in the appropriate tag that VList uses.
return {type:"elem",elem:inner};};// Helper for makeStackedDelim
var lap={type:"kern",size:-0.005};/**
 * Make a stacked delimiter out of a given delimiter, with the total height at
 * least `heightTotal`. This routine is mentioned on page 442 of the TeXbook.
 */var delimiter_makeStackedDelim=function makeStackedDelim(delim,heightTotal,center,options,mode,classes){// There are four parts, the top, an optional middle, a repeated part, and a
// bottom.
var top;var middle;var repeat;var bottom;top=repeat=bottom=delim;middle=null;// Also keep track of what font the delimiters are in
var font="Size1-Regular";// We set the parts and font based on the symbol. Note that we use
// '\u23d0' instead of '|' and '\u2016' instead of '\\|' for the
// repeats of the arrows
if(delim==="\\uparrow"){repeat=bottom="\u23D0";}else if(delim==="\\Uparrow"){repeat=bottom="\u2016";}else if(delim==="\\downarrow"){top=repeat="\u23D0";}else if(delim==="\\Downarrow"){top=repeat="\u2016";}else if(delim==="\\updownarrow"){top="\\uparrow";repeat="\u23D0";bottom="\\downarrow";}else if(delim==="\\Updownarrow"){top="\\Uparrow";repeat="\u2016";bottom="\\Downarrow";}else if(delim==="["||delim==="\\lbrack"){top="\u23A1";repeat="\u23A2";bottom="\u23A3";font="Size4-Regular";}else if(delim==="]"||delim==="\\rbrack"){top="\u23A4";repeat="\u23A5";bottom="\u23A6";font="Size4-Regular";}else if(delim==="\\lfloor"||delim==="\u230A"){repeat=top="\u23A2";bottom="\u23A3";font="Size4-Regular";}else if(delim==="\\lceil"||delim==="\u2308"){top="\u23A1";repeat=bottom="\u23A2";font="Size4-Regular";}else if(delim==="\\rfloor"||delim==="\u230B"){repeat=top="\u23A5";bottom="\u23A6";font="Size4-Regular";}else if(delim==="\\rceil"||delim==="\u2309"){top="\u23A4";repeat=bottom="\u23A5";font="Size4-Regular";}else if(delim==="("||delim==="\\lparen"){top="\u239B";repeat="\u239C";bottom="\u239D";font="Size4-Regular";}else if(delim===")"||delim==="\\rparen"){top="\u239E";repeat="\u239F";bottom="\u23A0";font="Size4-Regular";}else if(delim==="\\{"||delim==="\\lbrace"){top="\u23A7";middle="\u23A8";bottom="\u23A9";repeat="\u23AA";font="Size4-Regular";}else if(delim==="\\}"||delim==="\\rbrace"){top="\u23AB";middle="\u23AC";bottom="\u23AD";repeat="\u23AA";font="Size4-Regular";}else if(delim==="\\lgroup"||delim==="\u27EE"){top="\u23A7";bottom="\u23A9";repeat="\u23AA";font="Size4-Regular";}else if(delim==="\\rgroup"||delim==="\u27EF"){top="\u23AB";bottom="\u23AD";repeat="\u23AA";font="Size4-Regular";}else if(delim==="\\lmoustache"||delim==="\u23B0"){top="\u23A7";bottom="\u23AD";repeat="\u23AA";font="Size4-Regular";}else if(delim==="\\rmoustache"||delim==="\u23B1"){top="\u23AB";bottom="\u23A9";repeat="\u23AA";font="Size4-Regular";}// Get the metrics of the four sections
var topMetrics=delimiter_getMetrics(top,font,mode);var topHeightTotal=topMetrics.height+topMetrics.depth;var repeatMetrics=delimiter_getMetrics(repeat,font,mode);var repeatHeightTotal=repeatMetrics.height+repeatMetrics.depth;var bottomMetrics=delimiter_getMetrics(bottom,font,mode);var bottomHeightTotal=bottomMetrics.height+bottomMetrics.depth;var middleHeightTotal=0;var middleFactor=1;if(middle!==null){var middleMetrics=delimiter_getMetrics(middle,font,mode);middleHeightTotal=middleMetrics.height+middleMetrics.depth;middleFactor=2;// repeat symmetrically above and below middle
}// Calcuate the minimal height that the delimiter can have.
// It is at least the size of the top, bottom, and optional middle combined.
var minHeight=topHeightTotal+bottomHeightTotal+middleHeightTotal;// Compute the number of copies of the repeat symbol we will need
var repeatCount=Math.max(0,Math.ceil((heightTotal-minHeight)/(middleFactor*repeatHeightTotal)));// Compute the total height of the delimiter including all the symbols
var realHeightTotal=minHeight+repeatCount*middleFactor*repeatHeightTotal;// The center of the delimiter is placed at the center of the axis. Note
// that in this context, "center" means that the delimiter should be
// centered around the axis in the current style, while normally it is
// centered around the axis in textstyle.
var axisHeight=options.fontMetrics().axisHeight;if(center){axisHeight*=options.sizeMultiplier;}// Calculate the depth
var depth=realHeightTotal/2-axisHeight;// This function differs from the TeX procedure in one way.
// We shift each repeat element downwards by 0.005em, to prevent a gap
// due to browser floating point rounding error.
// Then, at the last element-to element joint, we add one extra repeat
// element to cover the gap created by the shifts.
// Find the shift needed to align the upper end of the extra element at a point
// 0.005em above the lower end of the top element.
var shiftOfExtraElement=(repeatCount+1)*0.005-repeatHeightTotal;// Now, we start building the pieces that will go into the vlist
// Keep a list of the inner pieces
var inners=[];// Add the bottom symbol
inners.push(delimiter_makeInner(bottom,font,mode));if(middle===null){// Add that many symbols
for(var i=0;i<repeatCount;i++){inners.push(lap);// overlap
inners.push(delimiter_makeInner(repeat,font,mode));}}else {// When there is a middle bit, we need the middle part and two repeated
// sections
for(var _i=0;_i<repeatCount;_i++){inners.push(lap);inners.push(delimiter_makeInner(repeat,font,mode));}// Insert one extra repeat element.
inners.push({type:"kern",size:shiftOfExtraElement});inners.push(delimiter_makeInner(repeat,font,mode));inners.push(lap);// Now insert the middle of the brace.
inners.push(delimiter_makeInner(middle,font,mode));for(var _i2=0;_i2<repeatCount;_i2++){inners.push(lap);inners.push(delimiter_makeInner(repeat,font,mode));}}// To cover the gap create by the overlaps, insert one more repeat element,
// at a position that juts 0.005 above the bottom of the top element.
if((repeat==="\u239C"||repeat==="\u239F")&&repeatCount===0){// Parentheses need a short repeat element in order to avoid an overrun.
// We'll make a 0.3em tall element from a SVG.
var overlap=buildCommon.svgData.leftParenInner[2]/2;inners.push({type:"kern",size:-overlap});var pathName=repeat==="\u239C"?"leftParenInner":"rightParenInner";var innerSpan=buildCommon.staticSvg(pathName,options);inners.push({type:"elem",elem:innerSpan});inners.push({type:"kern",size:-overlap});}else {inners.push({type:"kern",size:shiftOfExtraElement});inners.push(delimiter_makeInner(repeat,font,mode));inners.push(lap);}// Add the top symbol
inners.push(delimiter_makeInner(top,font,mode));// Finally, build the vlist
var newOptions=options.havingBaseStyle(src_Style.TEXT);var inner=buildCommon.makeVList({positionType:"bottom",positionData:depth,children:inners},newOptions);return delimiter_styleWrap(buildCommon.makeSpan(["delimsizing","mult"],[inner],newOptions),src_Style.TEXT,options,classes);};// All surds have 0.08em padding above the viniculum inside the SVG.
// That keeps browser span height rounding error from pinching the line.
var vbPad=80;// padding above the surd, measured inside the viewBox.
var emPad=0.08;// padding, in ems, measured in the document.
var delimiter_sqrtSvg=function sqrtSvg(sqrtName,height,viewBoxHeight,extraViniculum,options){var path=sqrtPath(sqrtName,extraViniculum,viewBoxHeight);var pathNode=new domTree_PathNode(sqrtName,path);var svg=new SvgNode([pathNode],{// Note: 1000:1 ratio of viewBox to document em width.
"width":"400em","height":height+"em","viewBox":"0 0 400000 "+viewBoxHeight,"preserveAspectRatio":"xMinYMin slice"});return buildCommon.makeSvgSpan(["hide-tail"],[svg],options);};/**
 * Make a sqrt image of the given height,
 */var makeSqrtImage=function makeSqrtImage(height,options){// Define a newOptions that removes the effect of size changes such as \Huge.
// We don't pick different a height surd for \Huge. For it, we scale up.
var newOptions=options.havingBaseSizing();// Pick the desired surd glyph from a sequence of surds.
var delim=traverseSequence("\\surd",height*newOptions.sizeMultiplier,stackLargeDelimiterSequence,newOptions);var sizeMultiplier=newOptions.sizeMultiplier;// default
// The standard sqrt SVGs each have a 0.04em thick viniculum.
// If Settings.minRuleThickness is larger than that, we add extraViniculum.
var extraViniculum=Math.max(0,options.minRuleThickness-options.fontMetrics().sqrtRuleThickness);// Create a span containing an SVG image of a sqrt symbol.
var span;var spanHeight=0;var texHeight=0;var viewBoxHeight=0;var advanceWidth;// We create viewBoxes with 80 units of "padding" above each surd.
// Then browser rounding error on the parent span height will not
// encroach on the ink of the viniculum. But that padding is not
// included in the TeX-like `height` used for calculation of
// vertical alignment. So texHeight = span.height < span.style.height.
if(delim.type==="small"){// Get an SVG that is derived from glyph U+221A in font KaTeX-Main.
// 1000 unit normal glyph height.
viewBoxHeight=1000+1000*extraViniculum+vbPad;if(height<1.0){sizeMultiplier=1.0;// mimic a \textfont radical
}else if(height<1.4){sizeMultiplier=0.7;// mimic a \scriptfont radical
}spanHeight=(1.0+extraViniculum+emPad)/sizeMultiplier;texHeight=(1.00+extraViniculum)/sizeMultiplier;span=delimiter_sqrtSvg("sqrtMain",spanHeight,viewBoxHeight,extraViniculum,options);span.style.minWidth="0.853em";advanceWidth=0.833/sizeMultiplier;// from the font.
}else if(delim.type==="large"){// These SVGs come from fonts: KaTeX_Size1, _Size2, etc.
viewBoxHeight=(1000+vbPad)*sizeToMaxHeight[delim.size];texHeight=(sizeToMaxHeight[delim.size]+extraViniculum)/sizeMultiplier;spanHeight=(sizeToMaxHeight[delim.size]+extraViniculum+emPad)/sizeMultiplier;span=delimiter_sqrtSvg("sqrtSize"+delim.size,spanHeight,viewBoxHeight,extraViniculum,options);span.style.minWidth="1.02em";advanceWidth=1.0/sizeMultiplier;// 1.0 from the font.
}else {// Tall sqrt. In TeX, this would be stacked using multiple glyphs.
// We'll use a single SVG to accomplish the same thing.
spanHeight=height+extraViniculum+emPad;texHeight=height+extraViniculum;viewBoxHeight=Math.floor(1000*height+extraViniculum)+vbPad;span=delimiter_sqrtSvg("sqrtTall",spanHeight,viewBoxHeight,extraViniculum,options);span.style.minWidth="0.742em";advanceWidth=1.056;}span.height=texHeight;span.style.height=spanHeight+"em";return {span:span,advanceWidth:advanceWidth,// Calculate the actual line width.
// This actually should depend on the chosen font -- e.g. \boldmath
// should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
// have thicker rules.
ruleWidth:(options.fontMetrics().sqrtRuleThickness+extraViniculum)*sizeMultiplier};};// There are three kinds of delimiters, delimiters that stack when they become
// too large
var stackLargeDelimiters=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\u230A","\u230B","\\lceil","\\rceil","\u2308","\u2309","\\surd"];// delimiters that always stack
var stackAlwaysDelimiters=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\u27EE","\u27EF","\\lmoustache","\\rmoustache","\u23B0","\u23B1"];// and delimiters that never stack
var stackNeverDelimiters=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"];// Metrics of the different sizes. Found by looking at TeX's output of
// $\bigl| // \Bigl| \biggl| \Biggl| \showlists$
// Used to create stacked delimiters of appropriate sizes in makeSizedDelim.
var sizeToMaxHeight=[0,1.2,1.8,2.4,3.0];/**
 * Used to create a delimiter of a specific size, where `size` is 1, 2, 3, or 4.
 */var delimiter_makeSizedDelim=function makeSizedDelim(delim,size,options,mode,classes){// < and > turn into \langle and \rangle in delimiters
if(delim==="<"||delim==="\\lt"||delim==="\u27E8"){delim="\\langle";}else if(delim===">"||delim==="\\gt"||delim==="\u27E9"){delim="\\rangle";}// Sized delimiters are never centered.
if(utils.contains(stackLargeDelimiters,delim)||utils.contains(stackNeverDelimiters,delim)){return delimiter_makeLargeDelim(delim,size,false,options,mode,classes);}else if(utils.contains(stackAlwaysDelimiters,delim)){return delimiter_makeStackedDelim(delim,sizeToMaxHeight[size],false,options,mode,classes);}else {throw new src_ParseError("Illegal delimiter: '"+delim+"'");}};/**
 * There are three different sequences of delimiter sizes that the delimiters
 * follow depending on the kind of delimiter. This is used when creating custom
 * sized delimiters to decide whether to create a small, large, or stacked
 * delimiter.
 *
 * In real TeX, these sequences aren't explicitly defined, but are instead
 * defined inside the font metrics. Since there are only three sequences that
 * are possible for the delimiters that TeX defines, it is easier to just encode
 * them explicitly here.
 */ // Delimiters that never stack try small delimiters and large delimiters only
var stackNeverDelimiterSequence=[{type:"small",style:src_Style.SCRIPTSCRIPT},{type:"small",style:src_Style.SCRIPT},{type:"small",style:src_Style.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}];// Delimiters that always stack try the small delimiters first, then stack
var stackAlwaysDelimiterSequence=[{type:"small",style:src_Style.SCRIPTSCRIPT},{type:"small",style:src_Style.SCRIPT},{type:"small",style:src_Style.TEXT},{type:"stack"}];// Delimiters that stack when large try the small and then large delimiters, and
// stack afterwards
var stackLargeDelimiterSequence=[{type:"small",style:src_Style.SCRIPTSCRIPT},{type:"small",style:src_Style.SCRIPT},{type:"small",style:src_Style.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}];/**
 * Get the font used in a delimiter based on what kind of delimiter it is.
 * TODO(#963) Use more specific font family return type once that is introduced.
 */var delimTypeToFont=function delimTypeToFont(type){if(type.type==="small"){return "Main-Regular";}else if(type.type==="large"){return "Size"+type.size+"-Regular";}else if(type.type==="stack"){return "Size4-Regular";}else {throw new Error("Add support for delim type '"+type.type+"' here.");}};/**
 * Traverse a sequence of types of delimiters to decide what kind of delimiter
 * should be used to create a delimiter of the given height+depth.
 */var traverseSequence=function traverseSequence(delim,height,sequence,options){// Here, we choose the index we should start at in the sequences. In smaller
// sizes (which correspond to larger numbers in style.size) we start earlier
// in the sequence. Thus, scriptscript starts at index 3-3=0, script starts
// at index 3-2=1, text starts at 3-1=2, and display starts at min(2,3-0)=2
var start=Math.min(2,3-options.style.size);for(var i=start;i<sequence.length;i++){if(sequence[i].type==="stack"){// This is always the last delimiter, so we just break the loop now.
break;}var metrics=delimiter_getMetrics(delim,delimTypeToFont(sequence[i]),"math");var heightDepth=metrics.height+metrics.depth;// Small delimiters are scaled down versions of the same font, so we
// account for the style change size.
if(sequence[i].type==="small"){var newOptions=options.havingBaseStyle(sequence[i].style);heightDepth*=newOptions.sizeMultiplier;}// Check if the delimiter at this size works for the given height.
if(heightDepth>height){return sequence[i];}}// If we reached the end of the sequence, return the last sequence element.
return sequence[sequence.length-1];};/**
 * Make a delimiter of a given height+depth, with optional centering. Here, we
 * traverse the sequences, and create a delimiter that the sequence tells us to.
 */var delimiter_makeCustomSizedDelim=function makeCustomSizedDelim(delim,height,center,options,mode,classes){if(delim==="<"||delim==="\\lt"||delim==="\u27E8"){delim="\\langle";}else if(delim===">"||delim==="\\gt"||delim==="\u27E9"){delim="\\rangle";}// Decide what sequence to use
var sequence;if(utils.contains(stackNeverDelimiters,delim)){sequence=stackNeverDelimiterSequence;}else if(utils.contains(stackLargeDelimiters,delim)){sequence=stackLargeDelimiterSequence;}else {sequence=stackAlwaysDelimiterSequence;}// Look through the sequence
var delimType=traverseSequence(delim,height,sequence,options);// Get the delimiter from font glyphs.
// Depending on the sequence element we decided on, call the
// appropriate function.
if(delimType.type==="small"){return delimiter_makeSmallDelim(delim,delimType.style,center,options,mode,classes);}else if(delimType.type==="large"){return delimiter_makeLargeDelim(delim,delimType.size,center,options,mode,classes);}else/* if (delimType.type === "stack") */{return delimiter_makeStackedDelim(delim,height,center,options,mode,classes);}};/**
 * Make a delimiter for use with `\left` and `\right`, given a height and depth
 * of an expression that the delimiters surround.
 */var makeLeftRightDelim=function makeLeftRightDelim(delim,height,depth,options,mode,classes){// We always center \left/\right delimiters, so the axis is always shifted
var axisHeight=options.fontMetrics().axisHeight*options.sizeMultiplier;// Taken from TeX source, tex.web, function make_left_right
var delimiterFactor=901;var delimiterExtend=5.0/options.fontMetrics().ptPerEm;var maxDistFromAxis=Math.max(height-axisHeight,depth+axisHeight);var totalHeight=Math.max(// In real TeX, calculations are done using integral values which are
// 65536 per pt, or 655360 per em. So, the division here truncates in
// TeX but doesn't here, producing different results. If we wanted to
// exactly match TeX's calculation, we could do
//   Math.floor(655360 * maxDistFromAxis / 500) *
//    delimiterFactor / 655360
// (To see the difference, compare
//    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
// in TeX and KaTeX)
maxDistFromAxis/500*delimiterFactor,2*maxDistFromAxis-delimiterExtend);// Finally, we defer to `makeCustomSizedDelim` with our calculated total
// height
return delimiter_makeCustomSizedDelim(delim,totalHeight,true,options,mode,classes);};/* harmony default export */var delimiter={sqrtImage:makeSqrtImage,sizedDelim:delimiter_makeSizedDelim,customSizedDelim:delimiter_makeCustomSizedDelim,leftRightDelim:makeLeftRightDelim};// CONCATENATED MODULE: ./src/functions/delimsizing.js
// Extra data needed for the delimiter handler down below
var delimiterSizes={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}};var delimiters=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\u230A","\u230B","\\lceil","\\rceil","\u2308","\u2309","<",">","\\langle","\u27E8","\\rangle","\u27E9","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\u27EE","\u27EF","\\lmoustache","\\rmoustache","\u23B0","\u23B1","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];// Delimiter functions
function checkDelimiter(delim,context){var symDelim=checkSymbolNodeType(delim);if(symDelim&&utils.contains(delimiters,symDelim.text)){return symDelim;}else if(symDelim){throw new src_ParseError("Invalid delimiter '"+symDelim.text+"' after '"+context.funcName+"'",delim);}else {throw new src_ParseError("Invalid delimiter type '"+delim.type+"'",delim);}}defineFunction({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1},handler:function handler(context,args){var delim=checkDelimiter(args[0],context);return {type:"delimsizing",mode:context.parser.mode,size:delimiterSizes[context.funcName].size,mclass:delimiterSizes[context.funcName].mclass,delim:delim.text};},htmlBuilder:function htmlBuilder(group,options){if(group.delim==="."){// Empty delimiters still count as elements, even though they don't
// show anything.
return buildCommon.makeSpan([group.mclass]);}// Use delimiter.sizedDelim to generate the delimiter.
return delimiter.sizedDelim(group.delim,group.size,options,group.mode,[group.mclass]);},mathmlBuilder:function mathmlBuilder(group){var children=[];if(group.delim!=="."){children.push(buildMathML_makeText(group.delim,group.mode));}var node=new mathMLTree.MathNode("mo",children);if(group.mclass==="mopen"||group.mclass==="mclose"){// Only some of the delimsizing functions act as fences, and they
// return "mopen" or "mclose" mclass.
node.setAttribute("fence","true");}else {// Explicitly disable fencing if it's not a fence, to override the
// defaults.
node.setAttribute("fence","false");}return node;}});function assertParsed(group){if(!group.body){throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");}}defineFunction({type:"leftright-right",names:["\\right"],props:{numArgs:1},handler:function handler(context,args){// \left case below triggers parsing of \right in
//   `const right = parser.parseFunction();`
// uses this return value.
var color=context.parser.gullet.macros.get("\\current@color");if(color&&typeof color!=="string"){throw new src_ParseError("\\current@color set to non-string in \\right");}return {type:"leftright-right",mode:context.parser.mode,delim:checkDelimiter(args[0],context).text,color:color// undefined if not set via \color
};}});defineFunction({type:"leftright",names:["\\left"],props:{numArgs:1},handler:function handler(context,args){var delim=checkDelimiter(args[0],context);var parser=context.parser;// Parse out the implicit body
++parser.leftrightDepth;// parseExpression stops before '\\right'
var body=parser.parseExpression(false);--parser.leftrightDepth;// Check the next token
parser.expect("\\right",false);var right=assertNodeType(parser.parseFunction(),"leftright-right");return {type:"leftright",mode:parser.mode,body:body,left:delim.text,right:right.delim,rightColor:right.color};},htmlBuilder:function htmlBuilder(group,options){assertParsed(group);// Build the inner expression
var inner=buildHTML_buildExpression(group.body,options,true,["mopen","mclose"]);var innerHeight=0;var innerDepth=0;var hadMiddle=false;// Calculate its height and depth
for(var i=0;i<inner.length;i++){// Property `isMiddle` not defined on `span`. See comment in
// "middle"'s htmlBuilder.
// $FlowFixMe
if(inner[i].isMiddle){hadMiddle=true;}else {innerHeight=Math.max(inner[i].height,innerHeight);innerDepth=Math.max(inner[i].depth,innerDepth);}}// The size of delimiters is the same, regardless of what style we are
// in. Thus, to correctly calculate the size of delimiter we need around
// a group, we scale down the inner size based on the size.
innerHeight*=options.sizeMultiplier;innerDepth*=options.sizeMultiplier;var leftDelim;if(group.left==="."){// Empty delimiters in \left and \right make null delimiter spaces.
leftDelim=makeNullDelimiter(options,["mopen"]);}else {// Otherwise, use leftRightDelim to generate the correct sized
// delimiter.
leftDelim=delimiter.leftRightDelim(group.left,innerHeight,innerDepth,options,group.mode,["mopen"]);}// Add it to the beginning of the expression
inner.unshift(leftDelim);// Handle middle delimiters
if(hadMiddle){for(var _i=1;_i<inner.length;_i++){var middleDelim=inner[_i];// Property `isMiddle` not defined on `span`. See comment in
// "middle"'s htmlBuilder.
// $FlowFixMe
var isMiddle=middleDelim.isMiddle;if(isMiddle){// Apply the options that were active when \middle was called
inner[_i]=delimiter.leftRightDelim(isMiddle.delim,innerHeight,innerDepth,isMiddle.options,group.mode,[]);}}}var rightDelim;// Same for the right delimiter, but using color specified by \color
if(group.right==="."){rightDelim=makeNullDelimiter(options,["mclose"]);}else {var colorOptions=group.rightColor?options.withColor(group.rightColor):options;rightDelim=delimiter.leftRightDelim(group.right,innerHeight,innerDepth,colorOptions,group.mode,["mclose"]);}// Add it to the end of the expression.
inner.push(rightDelim);return buildCommon.makeSpan(["minner"],inner,options);},mathmlBuilder:function mathmlBuilder(group,options){assertParsed(group);var inner=buildMathML_buildExpression(group.body,options);if(group.left!=="."){var leftNode=new mathMLTree.MathNode("mo",[buildMathML_makeText(group.left,group.mode)]);leftNode.setAttribute("fence","true");inner.unshift(leftNode);}if(group.right!=="."){var rightNode=new mathMLTree.MathNode("mo",[buildMathML_makeText(group.right,group.mode)]);rightNode.setAttribute("fence","true");if(group.rightColor){rightNode.setAttribute("mathcolor",group.rightColor);}inner.push(rightNode);}return buildMathML_makeRow(inner);}});defineFunction({type:"middle",names:["\\middle"],props:{numArgs:1},handler:function handler(context,args){var delim=checkDelimiter(args[0],context);if(!context.parser.leftrightDepth){throw new src_ParseError("\\middle without preceding \\left",delim);}return {type:"middle",mode:context.parser.mode,delim:delim.text};},htmlBuilder:function htmlBuilder(group,options){var middleDelim;if(group.delim==="."){middleDelim=makeNullDelimiter(options,[]);}else {middleDelim=delimiter.sizedDelim(group.delim,1,options,group.mode,[]);var isMiddle={delim:group.delim,options:options};// Property `isMiddle` not defined on `span`. It is only used in
// this file above.
// TODO: Fix this violation of the `span` type and possibly rename
// things since `isMiddle` sounds like a boolean, but is a struct.
// $FlowFixMe
middleDelim.isMiddle=isMiddle;}return middleDelim;},mathmlBuilder:function mathmlBuilder(group,options){// A Firefox \middle will strech a character vertically only if it
// is in the fence part of the operator dictionary at:
// https://www.w3.org/TR/MathML3/appendixc.html.
// So we need to avoid U+2223 and use plain "|" instead.
var textNode=group.delim==="\\vert"||group.delim==="|"?buildMathML_makeText("|","text"):buildMathML_makeText(group.delim,group.mode);var middleNode=new mathMLTree.MathNode("mo",[textNode]);middleNode.setAttribute("fence","true");// MathML gives 5/18em spacing to each <mo> element.
// \middle should get delimiter spacing instead.
middleNode.setAttribute("lspace","0.05em");middleNode.setAttribute("rspace","0.05em");return middleNode;}});// CONCATENATED MODULE: ./src/functions/enclose.js
var enclose_htmlBuilder=function htmlBuilder(group,options){// \cancel, \bcancel, \xcancel, \sout, \fbox, \colorbox, \fcolorbox
// Some groups can return document fragments.  Handle those by wrapping
// them in a span.
var inner=buildCommon.wrapFragment(buildHTML_buildGroup(group.body,options),options);var label=group.label.substr(1);var scale=options.sizeMultiplier;var img;var imgShift=0;// In the LaTeX cancel package, line geometry is slightly different
// depending on whether the subject is wider than it is tall, or vice versa.
// We don't know the width of a group, so as a proxy, we test if
// the subject is a single character. This captures most of the
// subjects that should get the "tall" treatment.
var isSingleChar=utils.isCharacterBox(group.body);if(label==="sout"){img=buildCommon.makeSpan(["stretchy","sout"]);img.height=options.fontMetrics().defaultRuleThickness/scale;imgShift=-0.5*options.fontMetrics().xHeight;}else {// Add horizontal padding
if(/cancel/.test(label)){if(!isSingleChar){inner.classes.push("cancel-pad");}}else {inner.classes.push("boxpad");}// Add vertical padding
var vertPad=0;var ruleThickness=0;// ref: cancel package: \advance\totalheight2\p@ % "+2"
if(/box/.test(label)){ruleThickness=Math.max(options.fontMetrics().fboxrule,// default
options.minRuleThickness// User override.
);vertPad=options.fontMetrics().fboxsep+(label==="colorbox"?0:ruleThickness);}else {vertPad=isSingleChar?0.2:0;}img=stretchy.encloseSpan(inner,label,vertPad,options);if(/fbox|boxed|fcolorbox/.test(label)){img.style.borderStyle="solid";img.style.borderWidth=ruleThickness+"em";}imgShift=inner.depth+vertPad;if(group.backgroundColor){img.style.backgroundColor=group.backgroundColor;if(group.borderColor){img.style.borderColor=group.borderColor;}}}var vlist;if(group.backgroundColor){vlist=buildCommon.makeVList({positionType:"individualShift",children:[// Put the color background behind inner;
{type:"elem",elem:img,shift:imgShift},{type:"elem",elem:inner,shift:0}]},options);}else {vlist=buildCommon.makeVList({positionType:"individualShift",children:[// Write the \cancel stroke on top of inner.
{type:"elem",elem:inner,shift:0},{type:"elem",elem:img,shift:imgShift,wrapperClasses:/cancel/.test(label)?["svg-align"]:[]}]},options);}if(/cancel/.test(label)){// The cancel package documentation says that cancel lines add their height
// to the expression, but tests show that isn't how it actually works.
vlist.height=inner.height;vlist.depth=inner.depth;}if(/cancel/.test(label)&&!isSingleChar){// cancel does not create horiz space for its line extension.
return buildCommon.makeSpan(["mord","cancel-lap"],[vlist],options);}else {return buildCommon.makeSpan(["mord"],[vlist],options);}};var enclose_mathmlBuilder=function mathmlBuilder(group,options){var fboxsep=0;var node=new mathMLTree.MathNode(group.label.indexOf("colorbox")>-1?"mpadded":"menclose",[buildMathML_buildGroup(group.body,options)]);switch(group.label){case"\\cancel":node.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":node.setAttribute("notation","downdiagonalstrike");break;case"\\sout":node.setAttribute("notation","horizontalstrike");break;case"\\fbox":node.setAttribute("notation","box");break;case"\\fcolorbox":case"\\colorbox":// <menclose> doesn't have a good notation option. So use <mpadded>
// instead. Set some attributes that come included with <menclose>.
fboxsep=options.fontMetrics().fboxsep*options.fontMetrics().ptPerEm;node.setAttribute("width","+"+2*fboxsep+"pt");node.setAttribute("height","+"+2*fboxsep+"pt");node.setAttribute("lspace",fboxsep+"pt");//
node.setAttribute("voffset",fboxsep+"pt");if(group.label==="\\fcolorbox"){var thk=Math.max(options.fontMetrics().fboxrule,// default
options.minRuleThickness// user override
);node.setAttribute("style","border: "+thk+"em solid "+String(group.borderColor));}break;case"\\xcancel":node.setAttribute("notation","updiagonalstrike downdiagonalstrike");break;}if(group.backgroundColor){node.setAttribute("mathbackground",group.backgroundColor);}return node;};defineFunction({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:true,greediness:3,argTypes:["color","text"]},handler:function handler(_ref,args,optArgs){var parser=_ref.parser,funcName=_ref.funcName;var color=assertNodeType(args[0],"color-token").color;var body=args[1];return {type:"enclose",mode:parser.mode,label:funcName,backgroundColor:color,body:body};},htmlBuilder:enclose_htmlBuilder,mathmlBuilder:enclose_mathmlBuilder});defineFunction({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:true,greediness:3,argTypes:["color","color","text"]},handler:function handler(_ref2,args,optArgs){var parser=_ref2.parser,funcName=_ref2.funcName;var borderColor=assertNodeType(args[0],"color-token").color;var backgroundColor=assertNodeType(args[1],"color-token").color;var body=args[2];return {type:"enclose",mode:parser.mode,label:funcName,backgroundColor:backgroundColor,borderColor:borderColor,body:body};},htmlBuilder:enclose_htmlBuilder,mathmlBuilder:enclose_mathmlBuilder});defineFunction({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:true},handler:function handler(_ref3,args){var parser=_ref3.parser;return {type:"enclose",mode:parser.mode,label:"\\fbox",body:args[0]};}});defineFunction({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout"],props:{numArgs:1},handler:function handler(_ref4,args,optArgs){var parser=_ref4.parser,funcName=_ref4.funcName;var body=args[0];return {type:"enclose",mode:parser.mode,label:funcName,body:body};},htmlBuilder:enclose_htmlBuilder,mathmlBuilder:enclose_mathmlBuilder});// CONCATENATED MODULE: ./src/defineEnvironment.js
/**
 * All registered environments.
 * `environments.js` exports this same dictionary again and makes it public.
 * `Parser.js` requires this dictionary via `environments.js`.
 */var _environments={};function defineEnvironment(_ref){var type=_ref.type,names=_ref.names,props=_ref.props,handler=_ref.handler,htmlBuilder=_ref.htmlBuilder,mathmlBuilder=_ref.mathmlBuilder;// Set default values of environments.
var data={type:type,numArgs:props.numArgs||0,greediness:1,allowedInText:false,numOptionalArgs:0,handler:handler};for(var i=0;i<names.length;++i){// TODO: The value type of _environments should be a type union of all
// possible `EnvSpec<>` possibilities instead of `EnvSpec<*>`, which is
// an existential type.
// $FlowFixMe
_environments[names[i]]=data;}if(htmlBuilder){_htmlGroupBuilders[type]=htmlBuilder;}if(mathmlBuilder){_mathmlGroupBuilders[type]=mathmlBuilder;}}// CONCATENATED MODULE: ./src/environments/array.js
function getHLines(parser){// Return an array. The array length = number of hlines.
// Each element in the array tells if the line is dashed.
var hlineInfo=[];parser.consumeSpaces();var nxt=parser.fetch().text;while(nxt==="\\hline"||nxt==="\\hdashline"){parser.consume();hlineInfo.push(nxt==="\\hdashline");parser.consumeSpaces();nxt=parser.fetch().text;}return hlineInfo;}/**
 * Parse the body of the environment, with rows delimited by \\ and
 * columns delimited by &, and create a nested list in row-major order
 * with one group per cell.  If given an optional argument style
 * ("text", "display", etc.), then each cell is cast into that style.
 */function parseArray(parser,_ref,style){var hskipBeforeAndAfter=_ref.hskipBeforeAndAfter,addJot=_ref.addJot,cols=_ref.cols,arraystretch=_ref.arraystretch,colSeparationType=_ref.colSeparationType;// Parse body of array with \\ temporarily mapped to \cr
parser.gullet.beginGroup();parser.gullet.macros.set("\\\\","\\cr");// Get current arraystretch if it's not set by the environment
if(!arraystretch){var stretch=parser.gullet.expandMacroAsText("\\arraystretch");if(stretch==null){// Default \arraystretch from lttab.dtx
arraystretch=1;}else {arraystretch=parseFloat(stretch);if(!arraystretch||arraystretch<0){throw new src_ParseError("Invalid \\arraystretch: "+stretch);}}}// Start group for first cell
parser.gullet.beginGroup();var row=[];var body=[row];var rowGaps=[];var hLinesBeforeRow=[];// Test for \hline at the top of the array.
hLinesBeforeRow.push(getHLines(parser));while(true){// eslint-disable-line no-constant-condition
// Parse each cell in its own group (namespace)
var cell=parser.parseExpression(false,"\\cr");parser.gullet.endGroup();parser.gullet.beginGroup();cell={type:"ordgroup",mode:parser.mode,body:cell};if(style){cell={type:"styling",mode:parser.mode,style:style,body:[cell]};}row.push(cell);var next=parser.fetch().text;if(next==="&"){parser.consume();}else if(next==="\\end"){// Arrays terminate newlines with `\crcr` which consumes a `\cr` if
// the last line is empty.
// NOTE: Currently, `cell` is the last item added into `row`.
if(row.length===1&&cell.type==="styling"&&cell.body[0].body.length===0){body.pop();}if(hLinesBeforeRow.length<body.length+1){hLinesBeforeRow.push([]);}break;}else if(next==="\\cr"){var cr=assertNodeType(parser.parseFunction(),"cr");rowGaps.push(cr.size);// check for \hline(s) following the row separator
hLinesBeforeRow.push(getHLines(parser));row=[];body.push(row);}else {throw new src_ParseError("Expected & or \\\\ or \\cr or \\end",parser.nextToken);}}// End cell group
parser.gullet.endGroup();// End array group defining \\
parser.gullet.endGroup();return {type:"array",mode:parser.mode,addJot:addJot,arraystretch:arraystretch,body:body,cols:cols,rowGaps:rowGaps,hskipBeforeAndAfter:hskipBeforeAndAfter,hLinesBeforeRow:hLinesBeforeRow,colSeparationType:colSeparationType};}// Decides on a style for cells in an array according to whether the given
// environment name starts with the letter 'd'.
function dCellStyle(envName){if(envName.substr(0,1)==="d"){return "display";}else {return "text";}}var array_htmlBuilder=function htmlBuilder(group,options){var r;var c;var nr=group.body.length;var hLinesBeforeRow=group.hLinesBeforeRow;var nc=0;var body=new Array(nr);var hlines=[];var ruleThickness=Math.max(// From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
options.fontMetrics().arrayRuleWidth,options.minRuleThickness// User override.
);// Horizontal spacing
var pt=1/options.fontMetrics().ptPerEm;var arraycolsep=5*pt;// default value, i.e. \arraycolsep in article.cls
if(group.colSeparationType&&group.colSeparationType==="small"){// We're in a {smallmatrix}. Default column space is \thickspace,
// i.e. 5/18em = 0.2778em, per amsmath.dtx for {smallmatrix}.
// But that needs adjustment because LaTeX applies \scriptstyle to the
// entire array, including the colspace, but this function applies
// \scriptstyle only inside each element.
var localMultiplier=options.havingStyle(src_Style.SCRIPT).sizeMultiplier;arraycolsep=0.2778*(localMultiplier/options.sizeMultiplier);}// Vertical spacing
var baselineskip=12*pt;// see size10.clo
// Default \jot from ltmath.dtx
// TODO(edemaine): allow overriding \jot via \setlength (#687)
var jot=3*pt;var arrayskip=group.arraystretch*baselineskip;var arstrutHeight=0.7*arrayskip;// \strutbox in ltfsstrc.dtx and
var arstrutDepth=0.3*arrayskip;// \@arstrutbox in lttab.dtx
var totalHeight=0;// Set a position for \hline(s) at the top of the array, if any.
function setHLinePos(hlinesInGap){for(var i=0;i<hlinesInGap.length;++i){if(i>0){totalHeight+=0.25;}hlines.push({pos:totalHeight,isDashed:hlinesInGap[i]});}}setHLinePos(hLinesBeforeRow[0]);for(r=0;r<group.body.length;++r){var inrow=group.body[r];var height=arstrutHeight;// \@array adds an \@arstrut
var depth=arstrutDepth;// to each tow (via the template)
if(nc<inrow.length){nc=inrow.length;}var outrow=new Array(inrow.length);for(c=0;c<inrow.length;++c){var elt=buildHTML_buildGroup(inrow[c],options);if(depth<elt.depth){depth=elt.depth;}if(height<elt.height){height=elt.height;}outrow[c]=elt;}var rowGap=group.rowGaps[r];var gap=0;if(rowGap){gap=units_calculateSize(rowGap,options);if(gap>0){// \@argarraycr
gap+=arstrutDepth;if(depth<gap){depth=gap;// \@xargarraycr
}gap=0;}}// In AMS multiline environments such as aligned and gathered, rows
// correspond to lines that have additional \jot added to the
// \baselineskip via \openup.
if(group.addJot){depth+=jot;}outrow.height=height;outrow.depth=depth;totalHeight+=height;outrow.pos=totalHeight;totalHeight+=depth+gap;// \@yargarraycr
body[r]=outrow;// Set a position for \hline(s), if any.
setHLinePos(hLinesBeforeRow[r+1]);}var offset=totalHeight/2+options.fontMetrics().axisHeight;var colDescriptions=group.cols||[];var cols=[];var colSep;var colDescrNum;for(c=0,colDescrNum=0;// Continue while either there are more columns or more column
// descriptions, so trailing separators don't get lost.
c<nc||colDescrNum<colDescriptions.length;++c,++colDescrNum){var colDescr=colDescriptions[colDescrNum]||{};var firstSeparator=true;while(colDescr.type==="separator"){// If there is more than one separator in a row, add a space
// between them.
if(!firstSeparator){colSep=buildCommon.makeSpan(["arraycolsep"],[]);colSep.style.width=options.fontMetrics().doubleRuleSep+"em";cols.push(colSep);}if(colDescr.separator==="|"||colDescr.separator===":"){var lineType=colDescr.separator==="|"?"solid":"dashed";var separator=buildCommon.makeSpan(["vertical-separator"],[],options);separator.style.height=totalHeight+"em";separator.style.borderRightWidth=ruleThickness+"em";separator.style.borderRightStyle=lineType;separator.style.margin="0 -"+ruleThickness/2+"em";separator.style.verticalAlign=-(totalHeight-offset)+"em";cols.push(separator);}else {throw new src_ParseError("Invalid separator type: "+colDescr.separator);}colDescrNum++;colDescr=colDescriptions[colDescrNum]||{};firstSeparator=false;}if(c>=nc){continue;}var sepwidth=void 0;if(c>0||group.hskipBeforeAndAfter){sepwidth=utils.deflt(colDescr.pregap,arraycolsep);if(sepwidth!==0){colSep=buildCommon.makeSpan(["arraycolsep"],[]);colSep.style.width=sepwidth+"em";cols.push(colSep);}}var col=[];for(r=0;r<nr;++r){var row=body[r];var elem=row[c];if(!elem){continue;}var shift=row.pos-offset;elem.depth=row.depth;elem.height=row.height;col.push({type:"elem",elem:elem,shift:shift});}col=buildCommon.makeVList({positionType:"individualShift",children:col},options);col=buildCommon.makeSpan(["col-align-"+(colDescr.align||"c")],[col]);cols.push(col);if(c<nc-1||group.hskipBeforeAndAfter){sepwidth=utils.deflt(colDescr.postgap,arraycolsep);if(sepwidth!==0){colSep=buildCommon.makeSpan(["arraycolsep"],[]);colSep.style.width=sepwidth+"em";cols.push(colSep);}}}body=buildCommon.makeSpan(["mtable"],cols);// Add \hline(s), if any.
if(hlines.length>0){var line=buildCommon.makeLineSpan("hline",options,ruleThickness);var dashes=buildCommon.makeLineSpan("hdashline",options,ruleThickness);var vListElems=[{type:"elem",elem:body,shift:0}];while(hlines.length>0){var hline=hlines.pop();var lineShift=hline.pos-offset;if(hline.isDashed){vListElems.push({type:"elem",elem:dashes,shift:lineShift});}else {vListElems.push({type:"elem",elem:line,shift:lineShift});}}body=buildCommon.makeVList({positionType:"individualShift",children:vListElems},options);}return buildCommon.makeSpan(["mord"],[body],options);};var alignMap={c:"center ",l:"left ",r:"right "};var array_mathmlBuilder=function mathmlBuilder(group,options){var table=new mathMLTree.MathNode("mtable",group.body.map(function(row){return new mathMLTree.MathNode("mtr",row.map(function(cell){return new mathMLTree.MathNode("mtd",[buildMathML_buildGroup(cell,options)]);}));}));// Set column alignment, row spacing, column spacing, and
// array lines by setting attributes on the table element.
// Set the row spacing. In MathML, we specify a gap distance.
// We do not use rowGap[] because MathML automatically increases
// cell height with the height/depth of the element content.
// LaTeX \arraystretch multiplies the row baseline-to-baseline distance.
// We simulate this by adding (arraystretch - 1)em to the gap. This
// does a reasonable job of adjusting arrays containing 1 em tall content.
// The 0.16 and 0.09 values are found emprically. They produce an array
// similar to LaTeX and in which content does not interfere with \hines.
var gap=group.arraystretch===0.5?0.1// {smallmatrix}, {subarray}
:0.16+group.arraystretch-1+(group.addJot?0.09:0);table.setAttribute("rowspacing",gap+"em");// MathML table lines go only between cells.
// To place a line on an edge we'll use <menclose>, if necessary.
var menclose="";var align="";if(group.cols&&group.cols.length>0){// Find column alignment, column spacing, and  vertical lines.
var cols=group.cols;var columnLines="";var prevTypeWasAlign=false;var iStart=0;var iEnd=cols.length;if(cols[0].type==="separator"){menclose+="top ";iStart=1;}if(cols[cols.length-1].type==="separator"){menclose+="bottom ";iEnd-=1;}for(var i=iStart;i<iEnd;i++){if(cols[i].type==="align"){align+=alignMap[cols[i].align];if(prevTypeWasAlign){columnLines+="none ";}prevTypeWasAlign=true;}else if(cols[i].type==="separator"){// MathML accepts only single lines between cells.
// So we read only the first of consecutive separators.
if(prevTypeWasAlign){columnLines+=cols[i].separator==="|"?"solid ":"dashed ";prevTypeWasAlign=false;}}}table.setAttribute("columnalign",align.trim());if(/[sd]/.test(columnLines)){table.setAttribute("columnlines",columnLines.trim());}}// Set column spacing.
if(group.colSeparationType==="align"){var _cols=group.cols||[];var spacing="";for(var _i=1;_i<_cols.length;_i++){spacing+=_i%2?"0em ":"1em ";}table.setAttribute("columnspacing",spacing.trim());}else if(group.colSeparationType==="alignat"){table.setAttribute("columnspacing","0em");}else if(group.colSeparationType==="small"){table.setAttribute("columnspacing","0.2778em");}else {table.setAttribute("columnspacing","1em");}// Address \hline and \hdashline
var rowLines="";var hlines=group.hLinesBeforeRow;menclose+=hlines[0].length>0?"left ":"";menclose+=hlines[hlines.length-1].length>0?"right ":"";for(var _i2=1;_i2<hlines.length-1;_i2++){rowLines+=hlines[_i2].length===0?"none "// MathML accepts only a single line between rows. Read one element.
:hlines[_i2][0]?"dashed ":"solid ";}if(/[sd]/.test(rowLines)){table.setAttribute("rowlines",rowLines.trim());}if(menclose!==""){table=new mathMLTree.MathNode("menclose",[table]);table.setAttribute("notation",menclose.trim());}if(group.arraystretch&&group.arraystretch<1){// A small array. Wrap in scriptstyle so row gap is not too large.
table=new mathMLTree.MathNode("mstyle",[table]);table.setAttribute("scriptlevel","1");}return table;};// Convenience function for aligned and alignedat environments.
var array_alignedHandler=function alignedHandler(context,args){var cols=[];var res=parseArray(context.parser,{cols:cols,addJot:true},"display");// Determining number of columns.
// 1. If the first argument is given, we use it as a number of columns,
//    and makes sure that each row doesn't exceed that number.
// 2. Otherwise, just count number of columns = maximum number
//    of cells in each row ("aligned" mode -- isAligned will be true).
//
// At the same time, prepend empty group {} at beginning of every second
// cell in each row (starting with second cell) so that operators become
// binary.  This behavior is implemented in amsmath's \start@aligned.
var numMaths;var numCols=0;var emptyGroup={type:"ordgroup",mode:context.mode,body:[]};if(args[0]&&args[0].type==="ordgroup"){var arg0="";for(var i=0;i<args[0].body.length;i++){var textord=assertNodeType(args[0].body[i],"textord");arg0+=textord.text;}numMaths=Number(arg0);numCols=numMaths*2;}var isAligned=!numCols;res.body.forEach(function(row){for(var _i3=1;_i3<row.length;_i3+=2){// Modify ordgroup node within styling node
var styling=assertNodeType(row[_i3],"styling");var ordgroup=assertNodeType(styling.body[0],"ordgroup");ordgroup.body.unshift(emptyGroup);}if(!isAligned){// Case 1
var curMaths=row.length/2;if(numMaths<curMaths){throw new src_ParseError("Too many math in a row: "+("expected "+numMaths+", but got "+curMaths),row[0]);}}else if(numCols<row.length){// Case 2
numCols=row.length;}});// Adjusting alignment.
// In aligned mode, we add one \qquad between columns;
// otherwise we add nothing.
for(var _i4=0;_i4<numCols;++_i4){var align="r";var pregap=0;if(_i4%2===1){align="l";}else if(_i4>0&&isAligned){// "aligned" mode.
pregap=1;// add one \quad
}cols[_i4]={type:"align",align:align,pregap:pregap,postgap:0};}res.colSeparationType=isAligned?"align":"alignat";return res;};// Arrays are part of LaTeX, defined in lttab.dtx so its documentation
// is part of the source2e.pdf file of LaTeX2e source documentation.
// {darray} is an {array} environment where cells are set in \displaystyle,
// as defined in nccmath.sty.
defineEnvironment({type:"array",names:["array","darray"],props:{numArgs:1},handler:function handler(context,args){// Since no types are specified above, the two possibilities are
// - The argument is wrapped in {} or [], in which case Parser's
//   parseGroup() returns an "ordgroup" wrapping some symbol node.
// - The argument is a bare symbol node.
var symNode=checkSymbolNodeType(args[0]);var colalign=symNode?[args[0]]:assertNodeType(args[0],"ordgroup").body;var cols=colalign.map(function(nde){var node=assertSymbolNodeType(nde);var ca=node.text;if("lcr".indexOf(ca)!==-1){return {type:"align",align:ca};}else if(ca==="|"){return {type:"separator",separator:"|"};}else if(ca===":"){return {type:"separator",separator:":"};}throw new src_ParseError("Unknown column alignment: "+ca,nde);});var res={cols:cols,hskipBeforeAndAfter:true// \@preamble in lttab.dtx
};return parseArray(context.parser,res,dCellStyle(context.envName));},htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});// The matrix environments of amsmath builds on the array environment
// of LaTeX, which is discussed above.
defineEnvironment({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],props:{numArgs:0},handler:function handler(context){var delimiters={"matrix":null,"pmatrix":["(",")"],"bmatrix":["[","]"],"Bmatrix":["\\{","\\}"],"vmatrix":["|","|"],"Vmatrix":["\\Vert","\\Vert"]}[context.envName];// \hskip -\arraycolsep in amsmath
var payload={hskipBeforeAndAfter:false};var res=parseArray(context.parser,payload,dCellStyle(context.envName));return delimiters?{type:"leftright",mode:context.mode,body:[res],left:delimiters[0],right:delimiters[1],rightColor:undefined// \right uninfluenced by \color in array
}:res;},htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});defineEnvironment({type:"array",names:["smallmatrix"],props:{numArgs:0},handler:function handler(context){var payload={arraystretch:0.5};var res=parseArray(context.parser,payload,"script");res.colSeparationType="small";return res;},htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});defineEnvironment({type:"array",names:["subarray"],props:{numArgs:1},handler:function handler(context,args){// Parsing of {subarray} is similar to {array}
var symNode=checkSymbolNodeType(args[0]);var colalign=symNode?[args[0]]:assertNodeType(args[0],"ordgroup").body;var cols=colalign.map(function(nde){var node=assertSymbolNodeType(nde);var ca=node.text;// {subarray} only recognizes "l" & "c"
if("lc".indexOf(ca)!==-1){return {type:"align",align:ca};}throw new src_ParseError("Unknown column alignment: "+ca,nde);});if(cols.length>1){throw new src_ParseError("{subarray} can contain only one column");}var res={cols:cols,hskipBeforeAndAfter:false,arraystretch:0.5};res=parseArray(context.parser,res,"script");if(res.body.length>0&&res.body[0].length>1){throw new src_ParseError("{subarray} can contain only one column");}return res;},htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});// A cases environment (in amsmath.sty) is almost equivalent to
// \def\arraystretch{1.2}%
// \left\{\begin{array}{@{}l@{\quad}l@{}} … \end{array}\right.
// {dcases} is a {cases} environment where cells are set in \displaystyle,
// as defined in mathtools.sty.
// {rcases} is another mathtools environment. It's brace is on the right side.
defineEnvironment({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler:function handler(context){var payload={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,// TODO(kevinb) get the current style.
// For now we use the metrics for TEXT style which is what we were
// doing before.  Before attempting to get the current style we
// should look at TeX's behavior especially for \over and matrices.
postgap:1.0/* 1em quad */},{type:"align",align:"l",pregap:0,postgap:0}]};var res=parseArray(context.parser,payload,dCellStyle(context.envName));return {type:"leftright",mode:context.mode,body:[res],left:context.envName.indexOf("r")>-1?".":"\\{",right:context.envName.indexOf("r")>-1?"\\}":".",rightColor:undefined};},htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});// An aligned environment is like the align* environment
// except it operates within math mode.
// Note that we assume \nomallineskiplimit to be zero,
// so that \strut@ is the same as \strut.
defineEnvironment({type:"array",names:["aligned"],props:{numArgs:0},handler:array_alignedHandler,htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});// A gathered environment is like an array environment with one centered
// column, but where rows are considered lines so get \jot line spacing
// and contents are set in \displaystyle.
defineEnvironment({type:"array",names:["gathered"],props:{numArgs:0},handler:function handler(context){var res={cols:[{type:"align",align:"c"}],addJot:true};return parseArray(context.parser,res,"display");},htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});// alignat environment is like an align environment, but one must explicitly
// specify maximum number of columns in each row, and can adjust spacing between
// each columns.
defineEnvironment({type:"array",names:["alignedat"],// One for numbered and for unnumbered;
// but, KaTeX doesn't supports math numbering yet,
// they make no difference for now.
props:{numArgs:1},handler:array_alignedHandler,htmlBuilder:array_htmlBuilder,mathmlBuilder:array_mathmlBuilder});// Catch \hline outside array environment
defineFunction({type:"text",// Doesn't matter what this is.
names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:true,allowedInMath:true},handler:function handler(context,args){throw new src_ParseError(context.funcName+" valid only within array environment");}});// CONCATENATED MODULE: ./src/environments.js
var environments=_environments;/* harmony default export */var src_environments=environments;// All environment definitions should be imported below
// CONCATENATED MODULE: ./src/functions/environment.js
// Environment delimiters. HTML/MathML rendering is defined in the corresponding
// defineEnvironment definitions.
// $FlowFixMe, "environment" handler returns an environment ParseNode
defineFunction({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var nameGroup=args[0];if(nameGroup.type!=="ordgroup"){throw new src_ParseError("Invalid environment name",nameGroup);}var envName="";for(var i=0;i<nameGroup.body.length;++i){envName+=assertNodeType(nameGroup.body[i],"textord").text;}if(funcName==="\\begin"){// begin...end is similar to left...right
if(!src_environments.hasOwnProperty(envName)){throw new src_ParseError("No such environment: "+envName,nameGroup);}// Build the environment object. Arguments and other information will
// be made available to the begin and end methods using properties.
var env=src_environments[envName];var _parser$parseArgument=parser.parseArguments("\\begin{"+envName+"}",env),_args=_parser$parseArgument.args,optArgs=_parser$parseArgument.optArgs;var context={mode:parser.mode,envName:envName,parser:parser};var result=env.handler(context,_args,optArgs);parser.expect("\\end",false);var endNameToken=parser.nextToken;var end=assertNodeType(parser.parseFunction(),"environment");if(end.name!==envName){throw new src_ParseError("Mismatch: \\begin{"+envName+"} matched by \\end{"+end.name+"}",endNameToken);}return result;}return {type:"environment",mode:parser.mode,name:envName,nameGroup:nameGroup};}});// CONCATENATED MODULE: ./src/functions/mclass.js
var mclass_makeSpan=buildCommon.makeSpan;function mclass_htmlBuilder(group,options){var elements=buildHTML_buildExpression(group.body,options,true);return mclass_makeSpan([group.mclass],elements,options);}function mclass_mathmlBuilder(group,options){var node;var inner=buildMathML_buildExpression(group.body,options);if(group.mclass==="minner"){return mathMLTree.newDocumentFragment(inner);}else if(group.mclass==="mord"){if(group.isCharacterBox){node=inner[0];node.type="mi";}else {node=new mathMLTree.MathNode("mi",inner);}}else {if(group.isCharacterBox){node=inner[0];node.type="mo";}else {node=new mathMLTree.MathNode("mo",inner);}// Set spacing based on what is the most likely adjacent atom type.
// See TeXbook p170.
if(group.mclass==="mbin"){node.attributes.lspace="0.22em";// medium space
node.attributes.rspace="0.22em";}else if(group.mclass==="mpunct"){node.attributes.lspace="0em";node.attributes.rspace="0.17em";// thinspace
}else if(group.mclass==="mopen"||group.mclass==="mclose"){node.attributes.lspace="0em";node.attributes.rspace="0em";}// MathML <mo> default space is 5/18 em, so <mrel> needs no action.
// Ref: https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo
}return node;}// Math class commands except \mathop
defineFunction({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var body=args[0];return {type:"mclass",mode:parser.mode,mclass:"m"+funcName.substr(5),// TODO(kevinb): don't prefix with 'm'
body:ordargument(body),isCharacterBox:utils.isCharacterBox(body)};},htmlBuilder:mclass_htmlBuilder,mathmlBuilder:mclass_mathmlBuilder});var binrelClass=function binrelClass(arg){// \binrel@ spacing varies with (bin|rel|ord) of the atom in the argument.
// (by rendering separately and with {}s before and after, and measuring
// the change in spacing).  We'll do roughly the same by detecting the
// atom type directly.
var atom=arg.type==="ordgroup"&&arg.body.length?arg.body[0]:arg;if(atom.type==="atom"&&(atom.family==="bin"||atom.family==="rel")){return "m"+atom.family;}else {return "mord";}};// \@binrel{x}{y} renders like y but as mbin/mrel/mord if x is mbin/mrel/mord.
// This is equivalent to \binrel@{x}\binrel@@{y} in AMSTeX.
defineFunction({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler:function handler(_ref2,args){var parser=_ref2.parser;return {type:"mclass",mode:parser.mode,mclass:binrelClass(args[0]),body:[args[1]],isCharacterBox:utils.isCharacterBox(args[1])};}});// Build a relation or stacked op by placing one symbol on top of another
defineFunction({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler:function handler(_ref3,args){var parser=_ref3.parser,funcName=_ref3.funcName;var baseArg=args[1];var shiftedArg=args[0];var mclass;if(funcName!=="\\stackrel"){// LaTeX applies \binrel spacing to \overset and \underset.
mclass=binrelClass(baseArg);}else {mclass="mrel";// for \stackrel
}var baseOp={type:"op",mode:baseArg.mode,limits:true,alwaysHandleSupSub:true,parentIsSupSub:false,symbol:false,suppressBaseShift:funcName!=="\\stackrel",body:ordargument(baseArg)};var supsub={type:"supsub",mode:shiftedArg.mode,base:baseOp,sup:funcName==="\\underset"?null:shiftedArg,sub:funcName==="\\underset"?shiftedArg:null};return {type:"mclass",mode:parser.mode,mclass:mclass,body:[supsub],isCharacterBox:utils.isCharacterBox(supsub)};},htmlBuilder:mclass_htmlBuilder,mathmlBuilder:mclass_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/font.js
// TODO(kevinb): implement \\sl and \\sc
var font_htmlBuilder=function htmlBuilder(group,options){var font=group.font;var newOptions=options.withFont(font);return buildHTML_buildGroup(group.body,newOptions);};var font_mathmlBuilder=function mathmlBuilder(group,options){var font=group.font;var newOptions=options.withFont(font);return buildMathML_buildGroup(group.body,newOptions);};var fontAliases={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};defineFunction({type:"font",names:[// styles, except \boldsymbol defined below
"\\mathrm","\\mathit","\\mathbf","\\mathnormal",// families
"\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt",// aliases, except \bm defined below
"\\Bbb","\\bold","\\frak"],props:{numArgs:1,greediness:2},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var body=args[0];var func=funcName;if(func in fontAliases){func=fontAliases[func];}return {type:"font",mode:parser.mode,font:func.slice(1),body:body};},htmlBuilder:font_htmlBuilder,mathmlBuilder:font_mathmlBuilder});defineFunction({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1,greediness:2},handler:function handler(_ref2,args){var parser=_ref2.parser;var body=args[0];var isCharacterBox=utils.isCharacterBox(body);// amsbsy.sty's \boldsymbol uses \binrel spacing to inherit the
// argument's bin|rel|ord status
return {type:"mclass",mode:parser.mode,mclass:binrelClass(body),body:[{type:"font",mode:parser.mode,font:"boldsymbol",body:body}],isCharacterBox:isCharacterBox};}});// Old font changing functions
defineFunction({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:true},handler:function handler(_ref3,args){var parser=_ref3.parser,funcName=_ref3.funcName,breakOnTokenText=_ref3.breakOnTokenText;var mode=parser.mode;var body=parser.parseExpression(true,breakOnTokenText);var style="math"+funcName.slice(1);return {type:"font",mode:mode,font:style,body:{type:"ordgroup",mode:parser.mode,body:body}};},htmlBuilder:font_htmlBuilder,mathmlBuilder:font_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/genfrac.js
var genfrac_adjustStyle=function adjustStyle(size,originalStyle){// Figure out what style this fraction should be in based on the
// function used
var style=originalStyle;if(size==="display"){// Get display style as a default.
// If incoming style is sub/sup, use style.text() to get correct size.
style=style.id>=src_Style.SCRIPT.id?style.text():src_Style.DISPLAY;}else if(size==="text"&&style.size===src_Style.DISPLAY.size){// We're in a \tfrac but incoming style is displaystyle, so:
style=src_Style.TEXT;}else if(size==="script"){style=src_Style.SCRIPT;}else if(size==="scriptscript"){style=src_Style.SCRIPTSCRIPT;}return style;};var genfrac_htmlBuilder=function htmlBuilder(group,options){// Fractions are handled in the TeXbook on pages 444-445, rules 15(a-e).
var style=genfrac_adjustStyle(group.size,options.style);var nstyle=style.fracNum();var dstyle=style.fracDen();var newOptions;newOptions=options.havingStyle(nstyle);var numerm=buildHTML_buildGroup(group.numer,newOptions,options);if(group.continued){// \cfrac inserts a \strut into the numerator.
// Get \strut dimensions from TeXbook page 353.
var hStrut=8.5/options.fontMetrics().ptPerEm;var dStrut=3.5/options.fontMetrics().ptPerEm;numerm.height=numerm.height<hStrut?hStrut:numerm.height;numerm.depth=numerm.depth<dStrut?dStrut:numerm.depth;}newOptions=options.havingStyle(dstyle);var denomm=buildHTML_buildGroup(group.denom,newOptions,options);var rule;var ruleWidth;var ruleSpacing;if(group.hasBarLine){if(group.barSize){ruleWidth=units_calculateSize(group.barSize,options);rule=buildCommon.makeLineSpan("frac-line",options,ruleWidth);}else {rule=buildCommon.makeLineSpan("frac-line",options);}ruleWidth=rule.height;ruleSpacing=rule.height;}else {rule=null;ruleWidth=0;ruleSpacing=options.fontMetrics().defaultRuleThickness;}// Rule 15b
var numShift;var clearance;var denomShift;if(style.size===src_Style.DISPLAY.size||group.size==="display"){numShift=options.fontMetrics().num1;if(ruleWidth>0){clearance=3*ruleSpacing;}else {clearance=7*ruleSpacing;}denomShift=options.fontMetrics().denom1;}else {if(ruleWidth>0){numShift=options.fontMetrics().num2;clearance=ruleSpacing;}else {numShift=options.fontMetrics().num3;clearance=3*ruleSpacing;}denomShift=options.fontMetrics().denom2;}var frac;if(!rule){// Rule 15c
var candidateClearance=numShift-numerm.depth-(denomm.height-denomShift);if(candidateClearance<clearance){numShift+=0.5*(clearance-candidateClearance);denomShift+=0.5*(clearance-candidateClearance);}frac=buildCommon.makeVList({positionType:"individualShift",children:[{type:"elem",elem:denomm,shift:denomShift},{type:"elem",elem:numerm,shift:-numShift}]},options);}else {// Rule 15d
var axisHeight=options.fontMetrics().axisHeight;if(numShift-numerm.depth-(axisHeight+0.5*ruleWidth)<clearance){numShift+=clearance-(numShift-numerm.depth-(axisHeight+0.5*ruleWidth));}if(axisHeight-0.5*ruleWidth-(denomm.height-denomShift)<clearance){denomShift+=clearance-(axisHeight-0.5*ruleWidth-(denomm.height-denomShift));}var midShift=-(axisHeight-0.5*ruleWidth);frac=buildCommon.makeVList({positionType:"individualShift",children:[{type:"elem",elem:denomm,shift:denomShift},{type:"elem",elem:rule,shift:midShift},{type:"elem",elem:numerm,shift:-numShift}]},options);}// Since we manually change the style sometimes (with \dfrac or \tfrac),
// account for the possible size change here.
newOptions=options.havingStyle(style);frac.height*=newOptions.sizeMultiplier/options.sizeMultiplier;frac.depth*=newOptions.sizeMultiplier/options.sizeMultiplier;// Rule 15e
var delimSize;if(style.size===src_Style.DISPLAY.size){delimSize=options.fontMetrics().delim1;}else {delimSize=options.fontMetrics().delim2;}var leftDelim;var rightDelim;if(group.leftDelim==null){leftDelim=makeNullDelimiter(options,["mopen"]);}else {leftDelim=delimiter.customSizedDelim(group.leftDelim,delimSize,true,options.havingStyle(style),group.mode,["mopen"]);}if(group.continued){rightDelim=buildCommon.makeSpan([]);// zero width for \cfrac
}else if(group.rightDelim==null){rightDelim=makeNullDelimiter(options,["mclose"]);}else {rightDelim=delimiter.customSizedDelim(group.rightDelim,delimSize,true,options.havingStyle(style),group.mode,["mclose"]);}return buildCommon.makeSpan(["mord"].concat(newOptions.sizingClasses(options)),[leftDelim,buildCommon.makeSpan(["mfrac"],[frac]),rightDelim],options);};var genfrac_mathmlBuilder=function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mfrac",[buildMathML_buildGroup(group.numer,options),buildMathML_buildGroup(group.denom,options)]);if(!group.hasBarLine){node.setAttribute("linethickness","0px");}else if(group.barSize){var ruleWidth=units_calculateSize(group.barSize,options);node.setAttribute("linethickness",ruleWidth+"em");}var style=genfrac_adjustStyle(group.size,options.style);if(style.size!==options.style.size){node=new mathMLTree.MathNode("mstyle",[node]);var isDisplay=style.size===src_Style.DISPLAY.size?"true":"false";node.setAttribute("displaystyle",isDisplay);node.setAttribute("scriptlevel","0");}if(group.leftDelim!=null||group.rightDelim!=null){var withDelims=[];if(group.leftDelim!=null){var leftOp=new mathMLTree.MathNode("mo",[new mathMLTree.TextNode(group.leftDelim.replace("\\",""))]);leftOp.setAttribute("fence","true");withDelims.push(leftOp);}withDelims.push(node);if(group.rightDelim!=null){var rightOp=new mathMLTree.MathNode("mo",[new mathMLTree.TextNode(group.rightDelim.replace("\\",""))]);rightOp.setAttribute("fence","true");withDelims.push(rightOp);}return buildMathML_makeRow(withDelims);}return node;};defineFunction({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac",// can’t be entered directly
"\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,greediness:2},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var numer=args[0];var denom=args[1];var hasBarLine;var leftDelim=null;var rightDelim=null;var size="auto";switch(funcName){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":hasBarLine=true;break;case"\\\\atopfrac":hasBarLine=false;break;case"\\dbinom":case"\\binom":case"\\tbinom":hasBarLine=false;leftDelim="(";rightDelim=")";break;case"\\\\bracefrac":hasBarLine=false;leftDelim="\\{";rightDelim="\\}";break;case"\\\\brackfrac":hasBarLine=false;leftDelim="[";rightDelim="]";break;default:throw new Error("Unrecognized genfrac command");}switch(funcName){case"\\cfrac":case"\\dfrac":case"\\dbinom":size="display";break;case"\\tfrac":case"\\tbinom":size="text";break;}return {type:"genfrac",mode:parser.mode,continued:funcName==="\\cfrac",numer:numer,denom:denom,hasBarLine:hasBarLine,leftDelim:leftDelim,rightDelim:rightDelim,size:size,barSize:null};},htmlBuilder:genfrac_htmlBuilder,mathmlBuilder:genfrac_mathmlBuilder});// Infix generalized fractions -- these are not rendered directly, but replaced
// immediately by one of the variants above.
defineFunction({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:true},handler:function handler(_ref2){var parser=_ref2.parser,funcName=_ref2.funcName,token=_ref2.token;var replaceWith;switch(funcName){case"\\over":replaceWith="\\frac";break;case"\\choose":replaceWith="\\binom";break;case"\\atop":replaceWith="\\\\atopfrac";break;case"\\brace":replaceWith="\\\\bracefrac";break;case"\\brack":replaceWith="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command");}return {type:"infix",mode:parser.mode,replaceWith:replaceWith,token:token};}});var stylArray=["display","text","script","scriptscript"];var delimFromValue=function delimFromValue(delimString){var delim=null;if(delimString.length>0){delim=delimString;delim=delim==="."?null:delim;}return delim;};defineFunction({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,greediness:6,argTypes:["math","math","size","text","math","math"]},handler:function handler(_ref3,args){var parser=_ref3.parser;var numer=args[4];var denom=args[5];// Look into the parse nodes to get the desired delimiters.
var leftDelim=args[0].type==="atom"&&args[0].family==="open"?delimFromValue(args[0].text):null;var rightDelim=args[1].type==="atom"&&args[1].family==="close"?delimFromValue(args[1].text):null;var barNode=assertNodeType(args[2],"size");var hasBarLine;var barSize=null;if(barNode.isBlank){// \genfrac acts differently than \above.
// \genfrac treats an empty size group as a signal to use a
// standard bar size. \above would see size = 0 and omit the bar.
hasBarLine=true;}else {barSize=barNode.value;hasBarLine=barSize.number>0;}// Find out if we want displaystyle, textstyle, etc.
var size="auto";var styl=args[3];if(styl.type==="ordgroup"){if(styl.body.length>0){var textOrd=assertNodeType(styl.body[0],"textord");size=stylArray[Number(textOrd.text)];}}else {styl=assertNodeType(styl,"textord");size=stylArray[Number(styl.text)];}return {type:"genfrac",mode:parser.mode,numer:numer,denom:denom,continued:false,hasBarLine:hasBarLine,barSize:barSize,leftDelim:leftDelim,rightDelim:rightDelim,size:size};},htmlBuilder:genfrac_htmlBuilder,mathmlBuilder:genfrac_mathmlBuilder});// \above is an infix fraction that also defines a fraction bar size.
defineFunction({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:true},handler:function handler(_ref4,args){var parser=_ref4.parser;_ref4.funcName;var token=_ref4.token;return {type:"infix",mode:parser.mode,replaceWith:"\\\\abovefrac",size:assertNodeType(args[0],"size").value,token:token};}});defineFunction({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:function handler(_ref5,args){var parser=_ref5.parser;_ref5.funcName;var numer=args[0];var barSize=assert(assertNodeType(args[1],"infix").size);var denom=args[2];var hasBarLine=barSize.number>0;return {type:"genfrac",mode:parser.mode,numer:numer,denom:denom,continued:false,hasBarLine:hasBarLine,barSize:barSize,leftDelim:null,rightDelim:null,size:"auto"};},htmlBuilder:genfrac_htmlBuilder,mathmlBuilder:genfrac_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/horizBrace.js
// NOTE: Unlike most `htmlBuilder`s, this one handles not only "horizBrace", but
var horizBrace_htmlBuilder=function htmlBuilder(grp,options){var style=options.style;// Pull out the `ParseNode<"horizBrace">` if `grp` is a "supsub" node.
var supSubGroup;var group;if(grp.type==="supsub"){// Ref: LaTeX source2e: }}}}\limits}
// i.e. LaTeX treats the brace similar to an op and passes it
// with \limits, so we need to assign supsub style.
supSubGroup=grp.sup?buildHTML_buildGroup(grp.sup,options.havingStyle(style.sup()),options):buildHTML_buildGroup(grp.sub,options.havingStyle(style.sub()),options);group=assertNodeType(grp.base,"horizBrace");}else {group=assertNodeType(grp,"horizBrace");}// Build the base group
var body=buildHTML_buildGroup(group.base,options.havingBaseStyle(src_Style.DISPLAY));// Create the stretchy element
var braceBody=stretchy.svgSpan(group,options);// Generate the vlist, with the appropriate kerns        ┏━━━━━━━━┓
// This first vlist contains the content and the brace:   equation
var vlist;if(group.isOver){vlist=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:body},{type:"kern",size:0.1},{type:"elem",elem:braceBody}]},options);// $FlowFixMe: Replace this with passing "svg-align" into makeVList.
vlist.children[0].children[0].children[1].classes.push("svg-align");}else {vlist=buildCommon.makeVList({positionType:"bottom",positionData:body.depth+0.1+braceBody.height,children:[{type:"elem",elem:braceBody},{type:"kern",size:0.1},{type:"elem",elem:body}]},options);// $FlowFixMe: Replace this with passing "svg-align" into makeVList.
vlist.children[0].children[0].children[0].classes.push("svg-align");}if(supSubGroup){// To write the supsub, wrap the first vlist in another vlist:
// They can't all go in the same vlist, because the note might be
// wider than the equation. We want the equation to control the
// brace width.
//      note          long note           long note
//   ┏━━━━━━━━┓   or    ┏━━━┓     not    ┏━━━━━━━━━┓
//    equation           eqn                 eqn
var vSpan=buildCommon.makeSpan(["mord",group.isOver?"mover":"munder"],[vlist],options);if(group.isOver){vlist=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:vSpan},{type:"kern",size:0.2},{type:"elem",elem:supSubGroup}]},options);}else {vlist=buildCommon.makeVList({positionType:"bottom",positionData:vSpan.depth+0.2+supSubGroup.height+supSubGroup.depth,children:[{type:"elem",elem:supSubGroup},{type:"kern",size:0.2},{type:"elem",elem:vSpan}]},options);}}return buildCommon.makeSpan(["mord",group.isOver?"mover":"munder"],[vlist],options);};var horizBrace_mathmlBuilder=function mathmlBuilder(group,options){var accentNode=stretchy.mathMLnode(group.label);return new mathMLTree.MathNode(group.isOver?"mover":"munder",[buildMathML_buildGroup(group.base,options),accentNode]);};// Horizontal stretchy braces
defineFunction({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;return {type:"horizBrace",mode:parser.mode,label:funcName,isOver:/^\\over/.test(funcName),base:args[0]};},htmlBuilder:horizBrace_htmlBuilder,mathmlBuilder:horizBrace_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/href.js
defineFunction({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser;var body=args[1];var href=assertNodeType(args[0],"url").url;if(!parser.settings.isTrusted({command:"\\href",url:href})){return parser.formatUnsupportedCmd("\\href");}return {type:"href",mode:parser.mode,href:href,body:ordargument(body)};},htmlBuilder:function htmlBuilder(group,options){var elements=buildHTML_buildExpression(group.body,options,false);return buildCommon.makeAnchor(group.href,[],elements,options);},mathmlBuilder:function mathmlBuilder(group,options){var math=buildExpressionRow(group.body,options);if(!(math instanceof mathMLTree_MathNode)){math=new mathMLTree_MathNode("mrow",[math]);}math.setAttribute("href",group.href);return math;}});defineFunction({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:true},handler:function handler(_ref2,args){var parser=_ref2.parser;var href=assertNodeType(args[0],"url").url;if(!parser.settings.isTrusted({command:"\\url",url:href})){return parser.formatUnsupportedCmd("\\url");}var chars=[];for(var i=0;i<href.length;i++){var c=href[i];if(c==="~"){c="\\textasciitilde";}chars.push({type:"textord",mode:"text",text:c});}var body={type:"text",mode:parser.mode,font:"\\texttt",body:chars};return {type:"href",mode:parser.mode,href:href,body:ordargument(body)};}});// CONCATENATED MODULE: ./src/functions/html.js
defineFunction({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;_ref.token;var value=assertNodeType(args[0],"raw").string;var body=args[1];if(parser.settings.strict){parser.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");}var trustContext;var attributes={};switch(funcName){case"\\htmlClass":attributes["class"]=value;trustContext={command:"\\htmlClass","class":value};break;case"\\htmlId":attributes.id=value;trustContext={command:"\\htmlId",id:value};break;case"\\htmlStyle":attributes.style=value;trustContext={command:"\\htmlStyle",style:value};break;case"\\htmlData":{var data=value.split(",");for(var i=0;i<data.length;i++){var keyVal=data[i].split("=");if(keyVal.length!==2){throw new src_ParseError("Error parsing key-value for \\htmlData");}attributes["data-"+keyVal[0].trim()]=keyVal[1].trim();}trustContext={command:"\\htmlData",attributes:attributes};break;}default:throw new Error("Unrecognized html command");}if(!parser.settings.isTrusted(trustContext)){return parser.formatUnsupportedCmd(funcName);}return {type:"html",mode:parser.mode,attributes:attributes,body:ordargument(body)};},htmlBuilder:function htmlBuilder(group,options){var elements=buildHTML_buildExpression(group.body,options,false);var classes=["enclosing"];if(group.attributes["class"]){classes.push.apply(classes,group.attributes["class"].trim().split(/\s+/));}var span=buildCommon.makeSpan(classes,elements,options);for(var attr in group.attributes){if(attr!=="class"&&group.attributes.hasOwnProperty(attr)){span.setAttribute(attr,group.attributes[attr]);}}return span;},mathmlBuilder:function mathmlBuilder(group,options){return buildExpressionRow(group.body,options);}});// CONCATENATED MODULE: ./src/functions/htmlmathml.js
defineFunction({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser;return {type:"htmlmathml",mode:parser.mode,html:ordargument(args[0]),mathml:ordargument(args[1])};},htmlBuilder:function htmlBuilder(group,options){var elements=buildHTML_buildExpression(group.html,options,false);return buildCommon.makeFragment(elements);},mathmlBuilder:function mathmlBuilder(group,options){return buildExpressionRow(group.mathml,options);}});// CONCATENATED MODULE: ./src/functions/includegraphics.js
var includegraphics_sizeData=function sizeData(str){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)){// str is a number with no unit specified.
// default unit is bp, per graphix package.
return {number:+str,unit:"bp"};}else {var match=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);if(!match){throw new src_ParseError("Invalid size: '"+str+"' in \\includegraphics");}var data={number:+(match[1]+match[2]),// sign + magnitude, cast to number
unit:match[3]};if(!validUnit(data)){throw new src_ParseError("Invalid unit: '"+data.unit+"' in \\includegraphics.");}return data;}};defineFunction({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:false},handler:function handler(_ref,args,optArgs){var parser=_ref.parser;var width={number:0,unit:"em"};var height={number:0.9,unit:"em"};// sorta character sized.
var totalheight={number:0,unit:"em"};var alt="";if(optArgs[0]){var attributeStr=assertNodeType(optArgs[0],"raw").string;// Parser.js does not parse key/value pairs. We get a string.
var attributes=attributeStr.split(",");for(var i=0;i<attributes.length;i++){var keyVal=attributes[i].split("=");if(keyVal.length===2){var str=keyVal[1].trim();switch(keyVal[0].trim()){case"alt":alt=str;break;case"width":width=includegraphics_sizeData(str);break;case"height":height=includegraphics_sizeData(str);break;case"totalheight":totalheight=includegraphics_sizeData(str);break;default:throw new src_ParseError("Invalid key: '"+keyVal[0]+"' in \\includegraphics.");}}}}var src=assertNodeType(args[0],"url").url;if(alt===""){// No alt given. Use the file name. Strip away the path.
alt=src;alt=alt.replace(/^.*[\\/]/,'');alt=alt.substring(0,alt.lastIndexOf('.'));}if(!parser.settings.isTrusted({command:"\\includegraphics",url:src})){return parser.formatUnsupportedCmd("\\includegraphics");}return {type:"includegraphics",mode:parser.mode,alt:alt,width:width,height:height,totalheight:totalheight,src:src};},htmlBuilder:function htmlBuilder(group,options){var height=units_calculateSize(group.height,options);var depth=0;if(group.totalheight.number>0){depth=units_calculateSize(group.totalheight,options)-height;depth=Number(depth.toFixed(2));}var width=0;if(group.width.number>0){width=units_calculateSize(group.width,options);}var style={height:height+depth+"em"};if(width>0){style.width=width+"em";}if(depth>0){style.verticalAlign=-depth+"em";}var node=new domTree_Img(group.src,group.alt,style);node.height=height;node.depth=depth;return node;},mathmlBuilder:function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mglyph",[]);node.setAttribute("alt",group.alt);var height=units_calculateSize(group.height,options);var depth=0;if(group.totalheight.number>0){depth=units_calculateSize(group.totalheight,options)-height;depth=depth.toFixed(2);node.setAttribute("valign","-"+depth+"em");}node.setAttribute("height",height+depth+"em");if(group.width.number>0){var width=units_calculateSize(group.width,options);node.setAttribute("width",width+"em");}node.setAttribute("src",group.src);return node;}});// CONCATENATED MODULE: ./src/functions/kern.js
// Horizontal spacing commands
// TODO: \hskip and \mskip should support plus and minus in lengths
defineFunction({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var size=assertNodeType(args[0],"size");if(parser.settings.strict){var mathFunction=funcName[1]==='m';// \mkern, \mskip
var muUnit=size.value.unit==='mu';if(mathFunction){if(!muUnit){parser.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+funcName+" supports only mu units, "+("not "+size.value.unit+" units"));}if(parser.mode!=="math"){parser.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+funcName+" works only in math mode");}}else {// !mathFunction
if(muUnit){parser.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+funcName+" doesn't support mu units");}}}return {type:"kern",mode:parser.mode,dimension:size.value};},htmlBuilder:function htmlBuilder(group,options){return buildCommon.makeGlue(group.dimension,options);},mathmlBuilder:function mathmlBuilder(group,options){var dimension=units_calculateSize(group.dimension,options);return new mathMLTree.SpaceNode(dimension);}});// CONCATENATED MODULE: ./src/functions/lap.js
// Horizontal overlap functions
defineFunction({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var body=args[0];return {type:"lap",mode:parser.mode,alignment:funcName.slice(5),body:body};},htmlBuilder:function htmlBuilder(group,options){// mathllap, mathrlap, mathclap
var inner;if(group.alignment==="clap"){// ref: https://www.math.lsu.edu/~aperlis/publications/mathclap/
inner=buildCommon.makeSpan([],[buildHTML_buildGroup(group.body,options)]);// wrap, since CSS will center a .clap > .inner > span
inner=buildCommon.makeSpan(["inner"],[inner],options);}else {inner=buildCommon.makeSpan(["inner"],[buildHTML_buildGroup(group.body,options)]);}var fix=buildCommon.makeSpan(["fix"],[]);var node=buildCommon.makeSpan([group.alignment],[inner,fix],options);// At this point, we have correctly set horizontal alignment of the
// two items involved in the lap.
// Next, use a strut to set the height of the HTML bounding box.
// Otherwise, a tall argument may be misplaced.
// This code resolved issue #1153
var strut=buildCommon.makeSpan(["strut"]);strut.style.height=node.height+node.depth+"em";strut.style.verticalAlign=-node.depth+"em";node.children.unshift(strut);// Next, prevent vertical misplacement when next to something tall.
// This code resolves issue #1234
node=buildCommon.makeSpan(["thinbox"],[node],options);return buildCommon.makeSpan(["mord","vbox"],[node],options);},mathmlBuilder:function mathmlBuilder(group,options){// mathllap, mathrlap, mathclap
var node=new mathMLTree.MathNode("mpadded",[buildMathML_buildGroup(group.body,options)]);if(group.alignment!=="rlap"){var offset=group.alignment==="llap"?"-1":"-0.5";node.setAttribute("lspace",offset+"width");}node.setAttribute("width","0px");return node;}});// CONCATENATED MODULE: ./src/functions/math.js
// Switching from text mode back to math mode
defineFunction({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:true,allowedInMath:false},handler:function handler(_ref,args){var funcName=_ref.funcName,parser=_ref.parser;var outerMode=parser.mode;parser.switchMode("math");var close=funcName==="\\("?"\\)":"$";var body=parser.parseExpression(false,close);parser.expect(close);parser.switchMode(outerMode);return {type:"styling",mode:parser.mode,style:"text",body:body};}});// Check for extra closing math delimiters
defineFunction({type:"text",// Doesn't matter what this is.
names:["\\)","\\]"],props:{numArgs:0,allowedInText:true,allowedInMath:false},handler:function handler(context,args){throw new src_ParseError("Mismatched "+context.funcName);}});// CONCATENATED MODULE: ./src/functions/mathchoice.js
var mathchoice_chooseMathStyle=function chooseMathStyle(group,options){switch(options.style.size){case src_Style.DISPLAY.size:return group.display;case src_Style.TEXT.size:return group.text;case src_Style.SCRIPT.size:return group.script;case src_Style.SCRIPTSCRIPT.size:return group.scriptscript;default:return group.text;}};defineFunction({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4},handler:function handler(_ref,args){var parser=_ref.parser;return {type:"mathchoice",mode:parser.mode,display:ordargument(args[0]),text:ordargument(args[1]),script:ordargument(args[2]),scriptscript:ordargument(args[3])};},htmlBuilder:function htmlBuilder(group,options){var body=mathchoice_chooseMathStyle(group,options);var elements=buildHTML_buildExpression(body,options,false);return buildCommon.makeFragment(elements);},mathmlBuilder:function mathmlBuilder(group,options){var body=mathchoice_chooseMathStyle(group,options);return buildExpressionRow(body,options);}});// CONCATENATED MODULE: ./src/functions/utils/assembleSupSub.js
// For an operator with limits, assemble the base, sup, and sub into a span.
var assembleSupSub_assembleSupSub=function assembleSupSub(base,supGroup,subGroup,options,style,slant,baseShift){base=buildCommon.makeSpan([],[base]);var sub;var sup;// We manually have to handle the superscripts and subscripts. This,
// aside from the kern calculations, is copied from supsub.
if(supGroup){var elem=buildHTML_buildGroup(supGroup,options.havingStyle(style.sup()),options);sup={elem:elem,kern:Math.max(options.fontMetrics().bigOpSpacing1,options.fontMetrics().bigOpSpacing3-elem.depth)};}if(subGroup){var _elem=buildHTML_buildGroup(subGroup,options.havingStyle(style.sub()),options);sub={elem:_elem,kern:Math.max(options.fontMetrics().bigOpSpacing2,options.fontMetrics().bigOpSpacing4-_elem.height)};}// Build the final group as a vlist of the possible subscript, base,
// and possible superscript.
var finalGroup;if(sup&&sub){var bottom=options.fontMetrics().bigOpSpacing5+sub.elem.height+sub.elem.depth+sub.kern+base.depth+baseShift;finalGroup=buildCommon.makeVList({positionType:"bottom",positionData:bottom,children:[{type:"kern",size:options.fontMetrics().bigOpSpacing5},{type:"elem",elem:sub.elem,marginLeft:-slant+"em"},{type:"kern",size:sub.kern},{type:"elem",elem:base},{type:"kern",size:sup.kern},{type:"elem",elem:sup.elem,marginLeft:slant+"em"},{type:"kern",size:options.fontMetrics().bigOpSpacing5}]},options);}else if(sub){var top=base.height-baseShift;// Shift the limits by the slant of the symbol. Note
// that we are supposed to shift the limits by 1/2 of the slant,
// but since we are centering the limits adding a full slant of
// margin will shift by 1/2 that.
finalGroup=buildCommon.makeVList({positionType:"top",positionData:top,children:[{type:"kern",size:options.fontMetrics().bigOpSpacing5},{type:"elem",elem:sub.elem,marginLeft:-slant+"em"},{type:"kern",size:sub.kern},{type:"elem",elem:base}]},options);}else if(sup){var _bottom=base.depth+baseShift;finalGroup=buildCommon.makeVList({positionType:"bottom",positionData:_bottom,children:[{type:"elem",elem:base},{type:"kern",size:sup.kern},{type:"elem",elem:sup.elem,marginLeft:slant+"em"},{type:"kern",size:options.fontMetrics().bigOpSpacing5}]},options);}else {// This case probably shouldn't occur (this would mean the
// supsub was sending us a group with no superscript or
// subscript) but be safe.
return base;}return buildCommon.makeSpan(["mop","op-limits"],[finalGroup],options);};// CONCATENATED MODULE: ./src/functions/op.js
// Limits, symbols
// Most operators have a large successor symbol, but these don't.
var noSuccessor=["\\smallint"];// NOTE: Unlike most `htmlBuilder`s, this one handles not only "op", but also
// "supsub" since some of them (like \int) can affect super/subscripting.
var op_htmlBuilder=function htmlBuilder(grp,options){// Operators are handled in the TeXbook pg. 443-444, rule 13(a).
var supGroup;var subGroup;var hasLimits=false;var group;if(grp.type==="supsub"){// If we have limits, supsub will pass us its group to handle. Pull
// out the superscript and subscript and set the group to the op in
// its base.
supGroup=grp.sup;subGroup=grp.sub;group=assertNodeType(grp.base,"op");hasLimits=true;}else {group=assertNodeType(grp,"op");}var style=options.style;var large=false;if(style.size===src_Style.DISPLAY.size&&group.symbol&&!utils.contains(noSuccessor,group.name)){// Most symbol operators get larger in displaystyle (rule 13)
large=true;}var base;if(group.symbol){// If this is a symbol, create the symbol.
var fontName=large?"Size2-Regular":"Size1-Regular";var stash="";if(group.name==="\\oiint"||group.name==="\\oiiint"){// No font glyphs yet, so use a glyph w/o the oval.
// TODO: When font glyphs are available, delete this code.
stash=group.name.substr(1);// $FlowFixMe
group.name=stash==="oiint"?"\\iint":"\\iiint";}base=buildCommon.makeSymbol(group.name,fontName,"math",options,["mop","op-symbol",large?"large-op":"small-op"]);if(stash.length>0){// We're in \oiint or \oiiint. Overlay the oval.
// TODO: When font glyphs are available, delete this code.
var italic=base.italic;var oval=buildCommon.staticSvg(stash+"Size"+(large?"2":"1"),options);base=buildCommon.makeVList({positionType:"individualShift",children:[{type:"elem",elem:base,shift:0},{type:"elem",elem:oval,shift:large?0.08:0}]},options);// $FlowFixMe
group.name="\\"+stash;base.classes.unshift("mop");// $FlowFixMe
base.italic=italic;}}else if(group.body){// If this is a list, compose that list.
var inner=buildHTML_buildExpression(group.body,options,true);if(inner.length===1&&inner[0]instanceof domTree_SymbolNode){base=inner[0];base.classes[0]="mop";// replace old mclass
}else {base=buildCommon.makeSpan(["mop"],buildCommon.tryCombineChars(inner),options);}}else {// Otherwise, this is a text operator. Build the text from the
// operator's name.
// TODO(emily): Add a space in the middle of some of these
// operators, like \limsup
var output=[];for(var i=1;i<group.name.length;i++){output.push(buildCommon.mathsym(group.name[i],group.mode,options));}base=buildCommon.makeSpan(["mop"],output,options);}// If content of op is a single symbol, shift it vertically.
var baseShift=0;var slant=0;if((base instanceof domTree_SymbolNode||group.name==="\\oiint"||group.name==="\\oiiint")&&!group.suppressBaseShift){// We suppress the shift of the base of \overset and \underset. Otherwise,
// shift the symbol so its center lies on the axis (rule 13). It
// appears that our fonts have the centers of the symbols already
// almost on the axis, so these numbers are very small. Note we
// don't actually apply this here, but instead it is used either in
// the vlist creation or separately when there are no limits.
baseShift=(base.height-base.depth)/2-options.fontMetrics().axisHeight;// The slant of the symbol is just its italic correction.
// $FlowFixMe
slant=base.italic;}if(hasLimits){return assembleSupSub_assembleSupSub(base,supGroup,subGroup,options,style,slant,baseShift);}else {if(baseShift){base.style.position="relative";base.style.top=baseShift+"em";}return base;}};var op_mathmlBuilder=function mathmlBuilder(group,options){var node;if(group.symbol){// This is a symbol. Just add the symbol.
node=new mathMLTree_MathNode("mo",[buildMathML_makeText(group.name,group.mode)]);if(utils.contains(noSuccessor,group.name)){node.setAttribute("largeop","false");}}else if(group.body){// This is an operator with children. Add them.
node=new mathMLTree_MathNode("mo",buildMathML_buildExpression(group.body,options));}else {// This is a text operator. Add all of the characters from the
// operator's name.
node=new mathMLTree_MathNode("mi",[new mathMLTree_TextNode(group.name.slice(1))]);// Append an <mo>&ApplyFunction;</mo>.
// ref: https://www.w3.org/TR/REC-MathML/chap3_2.html#sec3.2.4
var operator=new mathMLTree_MathNode("mo",[buildMathML_makeText("\u2061","text")]);if(group.parentIsSupSub){node=new mathMLTree_MathNode("mo",[node,operator]);}else {node=newDocumentFragment([node,operator]);}}return node;};var singleCharBigOps={"\u220F":"\\prod","\u2210":"\\coprod","\u2211":"\\sum","\u22C0":"\\bigwedge","\u22C1":"\\bigvee","\u22C2":"\\bigcap","\u22C3":"\\bigcup","\u2A00":"\\bigodot","\u2A01":"\\bigoplus","\u2A02":"\\bigotimes","\u2A04":"\\biguplus","\u2A06":"\\bigsqcup"};defineFunction({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","\u220F","\u2210","\u2211","\u22C0","\u22C1","\u22C2","\u22C3","\u2A00","\u2A01","\u2A02","\u2A04","\u2A06"],props:{numArgs:0},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var fName=funcName;if(fName.length===1){fName=singleCharBigOps[fName];}return {type:"op",mode:parser.mode,limits:true,parentIsSupSub:false,symbol:true,name:fName};},htmlBuilder:op_htmlBuilder,mathmlBuilder:op_mathmlBuilder});// Note: calling defineFunction with a type that's already been defined only
// works because the same htmlBuilder and mathmlBuilder are being used.
defineFunction({type:"op",names:["\\mathop"],props:{numArgs:1},handler:function handler(_ref2,args){var parser=_ref2.parser;var body=args[0];return {type:"op",mode:parser.mode,limits:false,parentIsSupSub:false,symbol:false,body:ordargument(body)};},htmlBuilder:op_htmlBuilder,mathmlBuilder:op_mathmlBuilder});// There are 2 flags for operators; whether they produce limits in
// displaystyle, and whether they are symbols and should grow in
// displaystyle. These four groups cover the four possible choices.
var singleCharIntegrals={"\u222B":"\\int","\u222C":"\\iint","\u222D":"\\iiint","\u222E":"\\oint","\u222F":"\\oiint","\u2230":"\\oiiint"};// No limits, not symbols
defineFunction({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler:function handler(_ref3){var parser=_ref3.parser,funcName=_ref3.funcName;return {type:"op",mode:parser.mode,limits:false,parentIsSupSub:false,symbol:false,name:funcName};},htmlBuilder:op_htmlBuilder,mathmlBuilder:op_mathmlBuilder});// Limits, not symbols
defineFunction({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler:function handler(_ref4){var parser=_ref4.parser,funcName=_ref4.funcName;return {type:"op",mode:parser.mode,limits:true,parentIsSupSub:false,symbol:false,name:funcName};},htmlBuilder:op_htmlBuilder,mathmlBuilder:op_mathmlBuilder});// No limits, symbols
defineFunction({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","\u222B","\u222C","\u222D","\u222E","\u222F","\u2230"],props:{numArgs:0},handler:function handler(_ref5){var parser=_ref5.parser,funcName=_ref5.funcName;var fName=funcName;if(fName.length===1){fName=singleCharIntegrals[fName];}return {type:"op",mode:parser.mode,limits:false,parentIsSupSub:false,symbol:true,name:fName};},htmlBuilder:op_htmlBuilder,mathmlBuilder:op_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/operatorname.js
// NOTE: Unlike most `htmlBuilder`s, this one handles not only
// "operatorname", but also  "supsub" since \operatorname* can
var operatorname_htmlBuilder=function htmlBuilder(grp,options){// Operators are handled in the TeXbook pg. 443-444, rule 13(a).
var supGroup;var subGroup;var hasLimits=false;var group;if(grp.type==="supsub"){// If we have limits, supsub will pass us its group to handle. Pull
// out the superscript and subscript and set the group to the op in
// its base.
supGroup=grp.sup;subGroup=grp.sub;group=assertNodeType(grp.base,"operatorname");hasLimits=true;}else {group=assertNodeType(grp,"operatorname");}var base;if(group.body.length>0){var body=group.body.map(function(child){// $FlowFixMe: Check if the node has a string `text` property.
var childText=child.text;if(typeof childText==="string"){return {type:"textord",mode:child.mode,text:childText};}else {return child;}});// Consolidate function names into symbol characters.
var expression=buildHTML_buildExpression(body,options.withFont("mathrm"),true);for(var i=0;i<expression.length;i++){var child=expression[i];if(child instanceof domTree_SymbolNode){// Per amsopn package,
// change minus to hyphen and \ast to asterisk
child.text=child.text.replace(/\u2212/,"-").replace(/\u2217/,"*");}}base=buildCommon.makeSpan(["mop"],expression,options);}else {base=buildCommon.makeSpan(["mop"],[],options);}if(hasLimits){return assembleSupSub_assembleSupSub(base,supGroup,subGroup,options,options.style,0,0);}else {return base;}};var operatorname_mathmlBuilder=function mathmlBuilder(group,options){// The steps taken here are similar to the html version.
var expression=buildMathML_buildExpression(group.body,options.withFont("mathrm"));// Is expression a string or has it something like a fraction?
var isAllString=true;// default
for(var i=0;i<expression.length;i++){var node=expression[i];if(node instanceof mathMLTree.SpaceNode);else if(node instanceof mathMLTree.MathNode){switch(node.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;// Do nothing yet.
case"mo":{var child=node.children[0];if(node.children.length===1&&child instanceof mathMLTree.TextNode){child.text=child.text.replace(/\u2212/,"-").replace(/\u2217/,"*");}else {isAllString=false;}break;}default:isAllString=false;}}else {isAllString=false;}}if(isAllString){// Write a single TextNode instead of multiple nested tags.
var word=expression.map(function(node){return node.toText();}).join("");expression=[new mathMLTree.TextNode(word)];}var identifier=new mathMLTree.MathNode("mi",expression);identifier.setAttribute("mathvariant","normal");// \u2061 is the same as &ApplyFunction;
// ref: https://www.w3schools.com/charsets/ref_html_entities_a.asp
var operator=new mathMLTree.MathNode("mo",[buildMathML_makeText("\u2061","text")]);if(group.parentIsSupSub){return new mathMLTree.MathNode("mo",[identifier,operator]);}else {return mathMLTree.newDocumentFragment([identifier,operator]);}};// \operatorname
// amsopn.dtx: \mathop{#1\kern\z@\operator@font#3}\newmcodes@
defineFunction({type:"operatorname",names:["\\operatorname","\\operatorname*"],props:{numArgs:1},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var body=args[0];return {type:"operatorname",mode:parser.mode,body:ordargument(body),alwaysHandleSupSub:funcName==="\\operatorname*",limits:false,parentIsSupSub:false};},htmlBuilder:operatorname_htmlBuilder,mathmlBuilder:operatorname_mathmlBuilder});// CONCATENATED MODULE: ./src/functions/ordgroup.js
defineFunctionBuilders({type:"ordgroup",htmlBuilder:function htmlBuilder(group,options){if(group.semisimple){return buildCommon.makeFragment(buildHTML_buildExpression(group.body,options,false));}return buildCommon.makeSpan(["mord"],buildHTML_buildExpression(group.body,options,true),options);},mathmlBuilder:function mathmlBuilder(group,options){return buildExpressionRow(group.body,options,true);}});// CONCATENATED MODULE: ./src/functions/overline.js
defineFunction({type:"overline",names:["\\overline"],props:{numArgs:1},handler:function handler(_ref,args){var parser=_ref.parser;var body=args[0];return {type:"overline",mode:parser.mode,body:body};},htmlBuilder:function htmlBuilder(group,options){// Overlines are handled in the TeXbook pg 443, Rule 9.
// Build the inner group in the cramped style.
var innerGroup=buildHTML_buildGroup(group.body,options.havingCrampedStyle());// Create the line above the body
var line=buildCommon.makeLineSpan("overline-line",options);// Generate the vlist, with the appropriate kerns
var defaultRuleThickness=options.fontMetrics().defaultRuleThickness;var vlist=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:innerGroup},{type:"kern",size:3*defaultRuleThickness},{type:"elem",elem:line},{type:"kern",size:defaultRuleThickness}]},options);return buildCommon.makeSpan(["mord","overline"],[vlist],options);},mathmlBuilder:function mathmlBuilder(group,options){var operator=new mathMLTree.MathNode("mo",[new mathMLTree.TextNode("\u203E")]);operator.setAttribute("stretchy","true");var node=new mathMLTree.MathNode("mover",[buildMathML_buildGroup(group.body,options),operator]);node.setAttribute("accent","true");return node;}});// CONCATENATED MODULE: ./src/functions/phantom.js
defineFunction({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser;var body=args[0];return {type:"phantom",mode:parser.mode,body:ordargument(body)};},htmlBuilder:function htmlBuilder(group,options){var elements=buildHTML_buildExpression(group.body,options.withPhantom(),false);// \phantom isn't supposed to affect the elements it contains.
// See "color" for more details.
return buildCommon.makeFragment(elements);},mathmlBuilder:function mathmlBuilder(group,options){var inner=buildMathML_buildExpression(group.body,options);return new mathMLTree.MathNode("mphantom",inner);}});defineFunction({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:true},handler:function handler(_ref2,args){var parser=_ref2.parser;var body=args[0];return {type:"hphantom",mode:parser.mode,body:body};},htmlBuilder:function htmlBuilder(group,options){var node=buildCommon.makeSpan([],[buildHTML_buildGroup(group.body,options.withPhantom())]);node.height=0;node.depth=0;if(node.children){for(var i=0;i<node.children.length;i++){node.children[i].height=0;node.children[i].depth=0;}}// See smash for comment re: use of makeVList
node=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:node}]},options);// For spacing, TeX treats \smash as a math group (same spacing as ord).
return buildCommon.makeSpan(["mord"],[node],options);},mathmlBuilder:function mathmlBuilder(group,options){var inner=buildMathML_buildExpression(ordargument(group.body),options);var phantom=new mathMLTree.MathNode("mphantom",inner);var node=new mathMLTree.MathNode("mpadded",[phantom]);node.setAttribute("height","0px");node.setAttribute("depth","0px");return node;}});defineFunction({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:true},handler:function handler(_ref3,args){var parser=_ref3.parser;var body=args[0];return {type:"vphantom",mode:parser.mode,body:body};},htmlBuilder:function htmlBuilder(group,options){var inner=buildCommon.makeSpan(["inner"],[buildHTML_buildGroup(group.body,options.withPhantom())]);var fix=buildCommon.makeSpan(["fix"],[]);return buildCommon.makeSpan(["mord","rlap"],[inner,fix],options);},mathmlBuilder:function mathmlBuilder(group,options){var inner=buildMathML_buildExpression(ordargument(group.body),options);var phantom=new mathMLTree.MathNode("mphantom",inner);var node=new mathMLTree.MathNode("mpadded",[phantom]);node.setAttribute("width","0px");return node;}});// CONCATENATED MODULE: ./src/functions/raisebox.js
// Box manipulation
defineFunction({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser;var amount=assertNodeType(args[0],"size").value;var body=args[1];return {type:"raisebox",mode:parser.mode,dy:amount,body:body};},htmlBuilder:function htmlBuilder(group,options){var body=buildHTML_buildGroup(group.body,options);var dy=units_calculateSize(group.dy,options);return buildCommon.makeVList({positionType:"shift",positionData:-dy,children:[{type:"elem",elem:body}]},options);},mathmlBuilder:function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mpadded",[buildMathML_buildGroup(group.body,options)]);var dy=group.dy.number+group.dy.unit;node.setAttribute("voffset",dy);return node;}});// CONCATENATED MODULE: ./src/functions/rule.js
defineFunction({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"]},handler:function handler(_ref,args,optArgs){var parser=_ref.parser;var shift=optArgs[0];var width=assertNodeType(args[0],"size");var height=assertNodeType(args[1],"size");return {type:"rule",mode:parser.mode,shift:shift&&assertNodeType(shift,"size").value,width:width.value,height:height.value};},htmlBuilder:function htmlBuilder(group,options){// Make an empty span for the rule
var rule=buildCommon.makeSpan(["mord","rule"],[],options);// Calculate the shift, width, and height of the rule, and account for units
var width=units_calculateSize(group.width,options);var height=units_calculateSize(group.height,options);var shift=group.shift?units_calculateSize(group.shift,options):0;// Style the rule to the right size
rule.style.borderRightWidth=width+"em";rule.style.borderTopWidth=height+"em";rule.style.bottom=shift+"em";// Record the height and width
rule.width=width;rule.height=height+shift;rule.depth=-shift;// Font size is the number large enough that the browser will
// reserve at least `absHeight` space above the baseline.
// The 1.125 factor was empirically determined
rule.maxFontSize=height*1.125*options.sizeMultiplier;return rule;},mathmlBuilder:function mathmlBuilder(group,options){var width=units_calculateSize(group.width,options);var height=units_calculateSize(group.height,options);var shift=group.shift?units_calculateSize(group.shift,options):0;var color=options.color&&options.getColor()||"black";var rule=new mathMLTree.MathNode("mspace");rule.setAttribute("mathbackground",color);rule.setAttribute("width",width+"em");rule.setAttribute("height",height+"em");var wrapper=new mathMLTree.MathNode("mpadded",[rule]);if(shift>=0){wrapper.setAttribute("height","+"+shift+"em");}else {wrapper.setAttribute("height",shift+"em");wrapper.setAttribute("depth","+"+-shift+"em");}wrapper.setAttribute("voffset",shift+"em");return wrapper;}});// CONCATENATED MODULE: ./src/functions/sizing.js
function sizingGroup(value,options,baseOptions){var inner=buildHTML_buildExpression(value,options,false);var multiplier=options.sizeMultiplier/baseOptions.sizeMultiplier;// Add size-resetting classes to the inner list and set maxFontSize
// manually. Handle nested size changes.
for(var i=0;i<inner.length;i++){var pos=inner[i].classes.indexOf("sizing");if(pos<0){Array.prototype.push.apply(inner[i].classes,options.sizingClasses(baseOptions));}else if(inner[i].classes[pos+1]==="reset-size"+options.size){// This is a nested size change: e.g., inner[i] is the "b" in
// `\Huge a \small b`. Override the old size (the `reset-` class)
// but not the new size.
inner[i].classes[pos+1]="reset-size"+baseOptions.size;}inner[i].height*=multiplier;inner[i].depth*=multiplier;}return buildCommon.makeFragment(inner);}var sizeFuncs=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"];var sizing_htmlBuilder=function htmlBuilder(group,options){// Handle sizing operators like \Huge. Real TeX doesn't actually allow
// these functions inside of math expressions, so we do some special
// handling.
var newOptions=options.havingSize(group.size);return sizingGroup(group.body,newOptions,options);};defineFunction({type:"sizing",names:sizeFuncs,props:{numArgs:0,allowedInText:true},handler:function handler(_ref,args){var breakOnTokenText=_ref.breakOnTokenText,funcName=_ref.funcName,parser=_ref.parser;var body=parser.parseExpression(false,breakOnTokenText);return {type:"sizing",mode:parser.mode,// Figure out what size to use based on the list of functions above
size:sizeFuncs.indexOf(funcName)+1,body:body};},htmlBuilder:sizing_htmlBuilder,mathmlBuilder:function mathmlBuilder(group,options){var newOptions=options.havingSize(group.size);var inner=buildMathML_buildExpression(group.body,newOptions);var node=new mathMLTree.MathNode("mstyle",inner);// TODO(emily): This doesn't produce the correct size for nested size
// changes, because we don't keep state of what style we're currently
// in, so we can't reset the size to normal before changing it.  Now
// that we're passing an options parameter we should be able to fix
// this.
node.setAttribute("mathsize",newOptions.sizeMultiplier+"em");return node;}});// CONCATENATED MODULE: ./src/functions/smash.js
// smash, with optional [tb], as in AMS
defineFunction({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:true},handler:function handler(_ref,args,optArgs){var parser=_ref.parser;var smashHeight=false;var smashDepth=false;var tbArg=optArgs[0]&&assertNodeType(optArgs[0],"ordgroup");if(tbArg){// Optional [tb] argument is engaged.
// ref: amsmath: \renewcommand{\smash}[1][tb]{%
//               def\mb@t{\ht}\def\mb@b{\dp}\def\mb@tb{\ht\z@\z@\dp}%
var letter="";for(var i=0;i<tbArg.body.length;++i){var node=tbArg.body[i];// $FlowFixMe: Not every node type has a `text` property.
letter=node.text;if(letter==="t"){smashHeight=true;}else if(letter==="b"){smashDepth=true;}else {smashHeight=false;smashDepth=false;break;}}}else {smashHeight=true;smashDepth=true;}var body=args[0];return {type:"smash",mode:parser.mode,body:body,smashHeight:smashHeight,smashDepth:smashDepth};},htmlBuilder:function htmlBuilder(group,options){var node=buildCommon.makeSpan([],[buildHTML_buildGroup(group.body,options)]);if(!group.smashHeight&&!group.smashDepth){return node;}if(group.smashHeight){node.height=0;// In order to influence makeVList, we have to reset the children.
if(node.children){for(var i=0;i<node.children.length;i++){node.children[i].height=0;}}}if(group.smashDepth){node.depth=0;if(node.children){for(var _i=0;_i<node.children.length;_i++){node.children[_i].depth=0;}}}// At this point, we've reset the TeX-like height and depth values.
// But the span still has an HTML line height.
// makeVList applies "display: table-cell", which prevents the browser
// from acting on that line height. So we'll call makeVList now.
var smashedNode=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:node}]},options);// For spacing, TeX treats \hphantom as a math group (same spacing as ord).
return buildCommon.makeSpan(["mord"],[smashedNode],options);},mathmlBuilder:function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mpadded",[buildMathML_buildGroup(group.body,options)]);if(group.smashHeight){node.setAttribute("height","0px");}if(group.smashDepth){node.setAttribute("depth","0px");}return node;}});// CONCATENATED MODULE: ./src/functions/sqrt.js
defineFunction({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler:function handler(_ref,args,optArgs){var parser=_ref.parser;var index=optArgs[0];var body=args[0];return {type:"sqrt",mode:parser.mode,body:body,index:index};},htmlBuilder:function htmlBuilder(group,options){// Square roots are handled in the TeXbook pg. 443, Rule 11.
// First, we do the same steps as in overline to build the inner group
// and line
var inner=buildHTML_buildGroup(group.body,options.havingCrampedStyle());if(inner.height===0){// Render a small surd.
inner.height=options.fontMetrics().xHeight;}// Some groups can return document fragments.  Handle those by wrapping
// them in a span.
inner=buildCommon.wrapFragment(inner,options);// Calculate the minimum size for the \surd delimiter
var metrics=options.fontMetrics();var theta=metrics.defaultRuleThickness;var phi=theta;if(options.style.id<src_Style.TEXT.id){phi=options.fontMetrics().xHeight;}// Calculate the clearance between the body and line
var lineClearance=theta+phi/4;var minDelimiterHeight=inner.height+inner.depth+lineClearance+theta;// Create a sqrt SVG of the required minimum size
var _delimiter$sqrtImage=delimiter.sqrtImage(minDelimiterHeight,options),img=_delimiter$sqrtImage.span,ruleWidth=_delimiter$sqrtImage.ruleWidth,advanceWidth=_delimiter$sqrtImage.advanceWidth;var delimDepth=img.height-ruleWidth;// Adjust the clearance based on the delimiter size
if(delimDepth>inner.height+inner.depth+lineClearance){lineClearance=(lineClearance+delimDepth-inner.height-inner.depth)/2;}// Shift the sqrt image
var imgShift=img.height-inner.height-lineClearance-ruleWidth;inner.style.paddingLeft=advanceWidth+"em";// Overlay the image and the argument.
var body=buildCommon.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:inner,wrapperClasses:["svg-align"]},{type:"kern",size:-(inner.height+imgShift)},{type:"elem",elem:img},{type:"kern",size:ruleWidth}]},options);if(!group.index){return buildCommon.makeSpan(["mord","sqrt"],[body],options);}else {// Handle the optional root index
// The index is always in scriptscript style
var newOptions=options.havingStyle(src_Style.SCRIPTSCRIPT);var rootm=buildHTML_buildGroup(group.index,newOptions,options);// The amount the index is shifted by. This is taken from the TeX
// source, in the definition of `\r@@t`.
var toShift=0.6*(body.height-body.depth);// Build a VList with the superscript shifted up correctly
var rootVList=buildCommon.makeVList({positionType:"shift",positionData:-toShift,children:[{type:"elem",elem:rootm}]},options);// Add a class surrounding it so we can add on the appropriate
// kerning
var rootVListWrap=buildCommon.makeSpan(["root"],[rootVList]);return buildCommon.makeSpan(["mord","sqrt"],[rootVListWrap,body],options);}},mathmlBuilder:function mathmlBuilder(group,options){var body=group.body,index=group.index;return index?new mathMLTree.MathNode("mroot",[buildMathML_buildGroup(body,options),buildMathML_buildGroup(index,options)]):new mathMLTree.MathNode("msqrt",[buildMathML_buildGroup(body,options)]);}});// CONCATENATED MODULE: ./src/functions/styling.js
var styling_styleMap={"display":src_Style.DISPLAY,"text":src_Style.TEXT,"script":src_Style.SCRIPT,"scriptscript":src_Style.SCRIPTSCRIPT};defineFunction({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:true},handler:function handler(_ref,args){var breakOnTokenText=_ref.breakOnTokenText,funcName=_ref.funcName,parser=_ref.parser;// parse out the implicit body
var body=parser.parseExpression(true,breakOnTokenText);// TODO: Refactor to avoid duplicating styleMap in multiple places (e.g.
// here and in buildHTML and de-dupe the enumeration of all the styles).
// $FlowFixMe: The names above exactly match the styles.
var style=funcName.slice(1,funcName.length-5);return {type:"styling",mode:parser.mode,// Figure out what style to use by pulling out the style from
// the function name
style:style,body:body};},htmlBuilder:function htmlBuilder(group,options){// Style changes are handled in the TeXbook on pg. 442, Rule 3.
var newStyle=styling_styleMap[group.style];var newOptions=options.havingStyle(newStyle).withFont('');return sizingGroup(group.body,newOptions,options);},mathmlBuilder:function mathmlBuilder(group,options){// Figure out what style we're changing to.
var newStyle=styling_styleMap[group.style];var newOptions=options.havingStyle(newStyle);var inner=buildMathML_buildExpression(group.body,newOptions);var node=new mathMLTree.MathNode("mstyle",inner);var styleAttributes={"display":["0","true"],"text":["0","false"],"script":["1","false"],"scriptscript":["2","false"]};var attr=styleAttributes[group.style];node.setAttribute("scriptlevel",attr[0]);node.setAttribute("displaystyle",attr[1]);return node;}});// CONCATENATED MODULE: ./src/functions/supsub.js
/**
 * Sometimes, groups perform special rules when they have superscripts or
 * subscripts attached to them. This function lets the `supsub` group know that
 * Sometimes, groups perform special rules when they have superscripts or
 * its inner element should handle the superscripts and subscripts instead of
 * handling them itself.
 */var supsub_htmlBuilderDelegate=function htmlBuilderDelegate(group,options){var base=group.base;if(!base){return null;}else if(base.type==="op"){// Operators handle supsubs differently when they have limits
// (e.g. `\displaystyle\sum_2^3`)
var delegate=base.limits&&(options.style.size===src_Style.DISPLAY.size||base.alwaysHandleSupSub);return delegate?op_htmlBuilder:null;}else if(base.type==="operatorname"){var _delegate=base.alwaysHandleSupSub&&(options.style.size===src_Style.DISPLAY.size||base.limits);return _delegate?operatorname_htmlBuilder:null;}else if(base.type==="accent"){return utils.isCharacterBox(base.base)?accent_htmlBuilder:null;}else if(base.type==="horizBrace"){var isSup=!group.sub;return isSup===base.isOver?horizBrace_htmlBuilder:null;}else {return null;}};// Super scripts and subscripts, whose precise placement can depend on other
// functions that precede them.
defineFunctionBuilders({type:"supsub",htmlBuilder:function htmlBuilder(group,options){// Superscript and subscripts are handled in the TeXbook on page
// 445-446, rules 18(a-f).
// Here is where we defer to the inner group if it should handle
// superscripts and subscripts itself.
var builderDelegate=supsub_htmlBuilderDelegate(group,options);if(builderDelegate){return builderDelegate(group,options);}var valueBase=group.base,valueSup=group.sup,valueSub=group.sub;var base=buildHTML_buildGroup(valueBase,options);var supm;var subm;var metrics=options.fontMetrics();// Rule 18a
var supShift=0;var subShift=0;var isCharacterBox=valueBase&&utils.isCharacterBox(valueBase);if(valueSup){var newOptions=options.havingStyle(options.style.sup());supm=buildHTML_buildGroup(valueSup,newOptions,options);if(!isCharacterBox){supShift=base.height-newOptions.fontMetrics().supDrop*newOptions.sizeMultiplier/options.sizeMultiplier;}}if(valueSub){var _newOptions=options.havingStyle(options.style.sub());subm=buildHTML_buildGroup(valueSub,_newOptions,options);if(!isCharacterBox){subShift=base.depth+_newOptions.fontMetrics().subDrop*_newOptions.sizeMultiplier/options.sizeMultiplier;}}// Rule 18c
var minSupShift;if(options.style===src_Style.DISPLAY){minSupShift=metrics.sup1;}else if(options.style.cramped){minSupShift=metrics.sup3;}else {minSupShift=metrics.sup2;}// scriptspace is a font-size-independent size, so scale it
// appropriately for use as the marginRight.
var multiplier=options.sizeMultiplier;var marginRight=0.5/metrics.ptPerEm/multiplier+"em";var marginLeft=null;if(subm){// Subscripts shouldn't be shifted by the base's italic correction.
// Account for that by shifting the subscript back the appropriate
// amount. Note we only do this when the base is a single symbol.
var isOiint=group.base&&group.base.type==="op"&&group.base.name&&(group.base.name==="\\oiint"||group.base.name==="\\oiiint");if(base instanceof domTree_SymbolNode||isOiint){// $FlowFixMe
marginLeft=-base.italic+"em";}}var supsub;if(supm&&subm){supShift=Math.max(supShift,minSupShift,supm.depth+0.25*metrics.xHeight);subShift=Math.max(subShift,metrics.sub2);var ruleWidth=metrics.defaultRuleThickness;// Rule 18e
var maxWidth=4*ruleWidth;if(supShift-supm.depth-(subm.height-subShift)<maxWidth){subShift=maxWidth-(supShift-supm.depth)+subm.height;var psi=0.8*metrics.xHeight-(supShift-supm.depth);if(psi>0){supShift+=psi;subShift-=psi;}}var vlistElem=[{type:"elem",elem:subm,shift:subShift,marginRight:marginRight,marginLeft:marginLeft},{type:"elem",elem:supm,shift:-supShift,marginRight:marginRight}];supsub=buildCommon.makeVList({positionType:"individualShift",children:vlistElem},options);}else if(subm){// Rule 18b
subShift=Math.max(subShift,metrics.sub1,subm.height-0.8*metrics.xHeight);var _vlistElem=[{type:"elem",elem:subm,marginLeft:marginLeft,marginRight:marginRight}];supsub=buildCommon.makeVList({positionType:"shift",positionData:subShift,children:_vlistElem},options);}else if(supm){// Rule 18c, d
supShift=Math.max(supShift,minSupShift,supm.depth+0.25*metrics.xHeight);supsub=buildCommon.makeVList({positionType:"shift",positionData:-supShift,children:[{type:"elem",elem:supm,marginRight:marginRight}]},options);}else {throw new Error("supsub must have either sup or sub.");}// Wrap the supsub vlist in a span.msupsub to reset text-align.
var mclass=getTypeOfDomTree(base,"right")||"mord";return buildCommon.makeSpan([mclass],[base,buildCommon.makeSpan(["msupsub"],[supsub])],options);},mathmlBuilder:function mathmlBuilder(group,options){// Is the inner group a relevant horizonal brace?
var isBrace=false;var isOver;var isSup;if(group.base&&group.base.type==="horizBrace"){isSup=!!group.sup;if(isSup===group.base.isOver){isBrace=true;isOver=group.base.isOver;}}if(group.base&&(group.base.type==="op"||group.base.type==="operatorname")){group.base.parentIsSupSub=true;}var children=[buildMathML_buildGroup(group.base,options)];if(group.sub){children.push(buildMathML_buildGroup(group.sub,options));}if(group.sup){children.push(buildMathML_buildGroup(group.sup,options));}var nodeType;if(isBrace){nodeType=isOver?"mover":"munder";}else if(!group.sub){var base=group.base;if(base&&base.type==="op"&&base.limits&&(options.style===src_Style.DISPLAY||base.alwaysHandleSupSub)){nodeType="mover";}else if(base&&base.type==="operatorname"&&base.alwaysHandleSupSub&&(base.limits||options.style===src_Style.DISPLAY)){nodeType="mover";}else {nodeType="msup";}}else if(!group.sup){var _base=group.base;if(_base&&_base.type==="op"&&_base.limits&&(options.style===src_Style.DISPLAY||_base.alwaysHandleSupSub)){nodeType="munder";}else if(_base&&_base.type==="operatorname"&&_base.alwaysHandleSupSub&&(_base.limits||options.style===src_Style.DISPLAY)){nodeType="munder";}else {nodeType="msub";}}else {var _base2=group.base;if(_base2&&_base2.type==="op"&&_base2.limits&&options.style===src_Style.DISPLAY){nodeType="munderover";}else if(_base2&&_base2.type==="operatorname"&&_base2.alwaysHandleSupSub&&(options.style===src_Style.DISPLAY||_base2.limits)){nodeType="munderover";}else {nodeType="msubsup";}}var node=new mathMLTree.MathNode(nodeType,children);return node;}});// CONCATENATED MODULE: ./src/functions/symbolsOp.js
// Operator ParseNodes created in Parser.js from symbol Groups in src/symbols.js.
defineFunctionBuilders({type:"atom",htmlBuilder:function htmlBuilder(group,options){return buildCommon.mathsym(group.text,group.mode,options,["m"+group.family]);},mathmlBuilder:function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mo",[buildMathML_makeText(group.text,group.mode)]);if(group.family==="bin"){var variant=buildMathML_getVariant(group,options);if(variant==="bold-italic"){node.setAttribute("mathvariant",variant);}}else if(group.family==="punct"){node.setAttribute("separator","true");}else if(group.family==="open"||group.family==="close"){// Delims built here should not stretch vertically.
// See delimsizing.js for stretchy delims.
node.setAttribute("stretchy","false");}return node;}});// CONCATENATED MODULE: ./src/functions/symbolsOrd.js
// "mathord" and "textord" ParseNodes created in Parser.js from symbol Groups in
var defaultVariant={"mi":"italic","mn":"normal","mtext":"normal"};defineFunctionBuilders({type:"mathord",htmlBuilder:function htmlBuilder(group,options){return buildCommon.makeOrd(group,options,"mathord");},mathmlBuilder:function mathmlBuilder(group,options){var node=new mathMLTree.MathNode("mi",[buildMathML_makeText(group.text,group.mode,options)]);var variant=buildMathML_getVariant(group,options)||"italic";if(variant!==defaultVariant[node.type]){node.setAttribute("mathvariant",variant);}return node;}});defineFunctionBuilders({type:"textord",htmlBuilder:function htmlBuilder(group,options){return buildCommon.makeOrd(group,options,"textord");},mathmlBuilder:function mathmlBuilder(group,options){var text=buildMathML_makeText(group.text,group.mode,options);var variant=buildMathML_getVariant(group,options)||"normal";var node;if(group.mode==='text'){node=new mathMLTree.MathNode("mtext",[text]);}else if(/[0-9]/.test(group.text)){// TODO(kevinb) merge adjacent <mn> nodes
// do it as a post processing step
node=new mathMLTree.MathNode("mn",[text]);}else if(group.text==="\\prime"){node=new mathMLTree.MathNode("mo",[text]);}else {node=new mathMLTree.MathNode("mi",[text]);}if(variant!==defaultVariant[node.type]){node.setAttribute("mathvariant",variant);}return node;}});// CONCATENATED MODULE: ./src/functions/symbolsSpacing.js
// A map of CSS-based spacing functions to their CSS class.
var cssSpace={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"};// A lookup table to determine whether a spacing function/symbol should be
// treated like a regular space character.  If a symbol or command is a key
// in this table, then it should be a regular space character.  Furthermore,
// the associated value may have a `className` specifying an extra CSS class
// to add to the created `span`.
var regularSpace={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};// ParseNode<"spacing"> created in Parser.js from the "spacing" symbol Groups in
// src/symbols.js.
defineFunctionBuilders({type:"spacing",htmlBuilder:function htmlBuilder(group,options){if(regularSpace.hasOwnProperty(group.text)){var className=regularSpace[group.text].className||"";// Spaces are generated by adding an actual space. Each of these
// things has an entry in the symbols table, so these will be turned
// into appropriate outputs.
if(group.mode==="text"){var ord=buildCommon.makeOrd(group,options,"textord");ord.classes.push(className);return ord;}else {return buildCommon.makeSpan(["mspace",className],[buildCommon.mathsym(group.text,group.mode,options)],options);}}else if(cssSpace.hasOwnProperty(group.text)){// Spaces based on just a CSS class.
return buildCommon.makeSpan(["mspace",cssSpace[group.text]],[],options);}else {throw new src_ParseError("Unknown type of space \""+group.text+"\"");}},mathmlBuilder:function mathmlBuilder(group,options){var node;if(regularSpace.hasOwnProperty(group.text)){node=new mathMLTree.MathNode("mtext",[new mathMLTree.TextNode("\xA0")]);}else if(cssSpace.hasOwnProperty(group.text)){// CSS-based MathML spaces (\nobreak, \allowbreak) are ignored
return new mathMLTree.MathNode("mspace");}else {throw new src_ParseError("Unknown type of space \""+group.text+"\"");}return node;}});// CONCATENATED MODULE: ./src/functions/tag.js
var tag_pad=function pad(){var padNode=new mathMLTree.MathNode("mtd",[]);padNode.setAttribute("width","50%");return padNode;};defineFunctionBuilders({type:"tag",mathmlBuilder:function mathmlBuilder(group,options){var table=new mathMLTree.MathNode("mtable",[new mathMLTree.MathNode("mtr",[tag_pad(),new mathMLTree.MathNode("mtd",[buildExpressionRow(group.body,options)]),tag_pad(),new mathMLTree.MathNode("mtd",[buildExpressionRow(group.tag,options)])])]);table.setAttribute("width","100%");return table;// TODO: Left-aligned tags.
// Currently, the group and options passed here do not contain
// enough info to set tag alignment. `leqno` is in Settings but it is
// not passed to Options. On the HTML side, leqno is
// set by a CSS class applied in buildTree.js. That would have worked
// in MathML if browsers supported <mlabeledtr>. Since they don't, we
// need to rewrite the way this function is called.
}});// CONCATENATED MODULE: ./src/functions/text.js
// Non-mathy text, possibly in a font
var textFontFamilies={"\\text":undefined,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"};var textFontWeights={"\\textbf":"textbf","\\textmd":"textmd"};var textFontShapes={"\\textit":"textit","\\textup":"textup"};var optionsWithFont=function optionsWithFont(group,options){var font=group.font;// Checks if the argument is a font family or a font style.
if(!font){return options;}else if(textFontFamilies[font]){return options.withTextFontFamily(textFontFamilies[font]);}else if(textFontWeights[font]){return options.withTextFontWeight(textFontWeights[font]);}else {return options.withTextFontShape(textFontShapes[font]);}};defineFunction({type:"text",names:[// Font families
"\\text","\\textrm","\\textsf","\\texttt","\\textnormal",// Font weights
"\\textbf","\\textmd",// Font Shapes
"\\textit","\\textup"],props:{numArgs:1,argTypes:["text"],greediness:2,allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser,funcName=_ref.funcName;var body=args[0];return {type:"text",mode:parser.mode,body:ordargument(body),font:funcName};},htmlBuilder:function htmlBuilder(group,options){var newOptions=optionsWithFont(group,options);var inner=buildHTML_buildExpression(group.body,newOptions,true);return buildCommon.makeSpan(["mord","text"],buildCommon.tryCombineChars(inner),newOptions);},mathmlBuilder:function mathmlBuilder(group,options){var newOptions=optionsWithFont(group,options);return buildExpressionRow(group.body,newOptions);}});// CONCATENATED MODULE: ./src/functions/underline.js
defineFunction({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:true},handler:function handler(_ref,args){var parser=_ref.parser;return {type:"underline",mode:parser.mode,body:args[0]};},htmlBuilder:function htmlBuilder(group,options){// Underlines are handled in the TeXbook pg 443, Rule 10.
// Build the inner group.
var innerGroup=buildHTML_buildGroup(group.body,options);// Create the line to go below the body
var line=buildCommon.makeLineSpan("underline-line",options);// Generate the vlist, with the appropriate kerns
var defaultRuleThickness=options.fontMetrics().defaultRuleThickness;var vlist=buildCommon.makeVList({positionType:"top",positionData:innerGroup.height,children:[{type:"kern",size:defaultRuleThickness},{type:"elem",elem:line},{type:"kern",size:3*defaultRuleThickness},{type:"elem",elem:innerGroup}]},options);return buildCommon.makeSpan(["mord","underline"],[vlist],options);},mathmlBuilder:function mathmlBuilder(group,options){var operator=new mathMLTree.MathNode("mo",[new mathMLTree.TextNode("\u203E")]);operator.setAttribute("stretchy","true");var node=new mathMLTree.MathNode("munder",[buildMathML_buildGroup(group.body,options),operator]);node.setAttribute("accentunder","true");return node;}});// CONCATENATED MODULE: ./src/functions/verb.js
defineFunction({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:true},handler:function handler(context,args,optArgs){// \verb and \verb* are dealt with directly in Parser.js.
// If we end up here, it's because of a failure to match the two delimiters
// in the regex in Lexer.js.  LaTeX raises the following error when \verb is
// terminated by end of line (or file).
throw new src_ParseError("\\verb ended by end of line instead of matching delimiter");},htmlBuilder:function htmlBuilder(group,options){var text=makeVerb(group);var body=[];// \verb enters text mode and therefore is sized like \textstyle
var newOptions=options.havingStyle(options.style.text());for(var i=0;i<text.length;i++){var c=text[i];if(c==='~'){c='\\textasciitilde';}body.push(buildCommon.makeSymbol(c,"Typewriter-Regular",group.mode,newOptions,["mord","texttt"]));}return buildCommon.makeSpan(["mord","text"].concat(newOptions.sizingClasses(options)),buildCommon.tryCombineChars(body),newOptions);},mathmlBuilder:function mathmlBuilder(group,options){var text=new mathMLTree.TextNode(makeVerb(group));var node=new mathMLTree.MathNode("mtext",[text]);node.setAttribute("mathvariant","monospace");return node;}});/**
 * Converts verb group into body string.
 *
 * \verb* replaces each space with an open box \u2423
 * \verb replaces each space with a no-break space \xA0
 */var makeVerb=function makeVerb(group){return group.body.replace(/ /g,group.star?"\u2423":'\xA0');};// CONCATENATED MODULE: ./src/functions.js
/** Include this to ensure that all functions are defined. */var functions=_functions;/* harmony default export */var src_functions=functions;// TODO(kevinb): have functions return an object and call defineFunction with
// that object in this file instead of relying on side-effects.
// CONCATENATED MODULE: ./src/Lexer.js
/**
 * The Lexer class handles tokenizing the input in various ways. Since our
 * parser expects us to be able to backtrack, the lexer allows lexing from any
 * given starting point.
 *
 * Its main exposed function is the `lex` function, which takes a position to
 * lex from and a type of token to lex. It defers to the appropriate `_innerLex`
 * function.
 *
 * The various `_innerLex` functions perform the actual lexing of different
 * kinds.
 */ /* The following tokenRegex
 * - matches typical whitespace (but not NBSP etc.) using its first group
 * - does not match any control character \x00-\x1f except whitespace
 * - does not match a bare backslash
 * - matches any ASCII character except those just mentioned
 * - does not match the BMP private use area \uE000-\uF8FF
 * - does not match bare surrogate code units
 * - matches any BMP character except for those just described
 * - matches any valid Unicode surrogate pair
 * - matches a backslash followed by one or more letters
 * - matches a backslash followed by any BMP character, including newline
 * Just because the Lexer matches something doesn't mean it's valid input:
 * If there is no matching function or symbol definition, the Parser will
 * still reject the input.
 */var spaceRegexString="[ \r\n\t]";var controlWordRegexString="\\\\[a-zA-Z@]+";var controlSymbolRegexString="\\\\[^\uD800-\uDFFF]";var controlWordWhitespaceRegexString=""+controlWordRegexString+spaceRegexString+"*";var controlWordWhitespaceRegex=new RegExp("^("+controlWordRegexString+")"+spaceRegexString+"*$");var combiningDiacriticalMarkString="[\u0300-\u036F]";var combiningDiacriticalMarksEndRegex=new RegExp(combiningDiacriticalMarkString+"+$");var tokenRegexString="("+spaceRegexString+"+)|"+// whitespace
"([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]"+(// single codepoint
combiningDiacriticalMarkString+"*")+// ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(// surrogate pair
combiningDiacriticalMarkString+"*")+// ...plus accents
"|\\\\verb\\*([^]).*?\\3"+// \verb*
"|\\\\verb([^*a-zA-Z]).*?\\4"+// \verb unstarred
"|\\\\operatorname\\*"+(// \operatorname*
"|"+controlWordWhitespaceRegexString)+(// \macroName + spaces
"|"+controlSymbolRegexString+")");// \\, \', etc.
/** Main Lexer class */var Lexer_Lexer=/*#__PURE__*/function(){// category codes, only supports comment characters (14) for now
function Lexer(input,settings){this.input=void 0;this.settings=void 0;this.tokenRegex=void 0;this.catcodes=void 0;// Separate accents from characters
this.input=input;this.settings=settings;this.tokenRegex=new RegExp(tokenRegexString,'g');this.catcodes={"%":14// comment character
};}var _proto=Lexer.prototype;_proto.setCatcode=function setCatcode(_char,code){this.catcodes[_char]=code;}/**
   * This function lexes a single token.
   */;_proto.lex=function lex(){var input=this.input;var pos=this.tokenRegex.lastIndex;if(pos===input.length){return new Token_Token("EOF",new SourceLocation(this,pos,pos));}var match=this.tokenRegex.exec(input);if(match===null||match.index!==pos){throw new src_ParseError("Unexpected character: '"+input[pos]+"'",new Token_Token(input[pos],new SourceLocation(this,pos,pos+1)));}var text=match[2]||" ";if(this.catcodes[text]===14){// comment character
var nlIndex=input.indexOf('\n',this.tokenRegex.lastIndex);if(nlIndex===-1){this.tokenRegex.lastIndex=input.length;// EOF
this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would "+"fail because of commenting the end of math mode (e.g. $)");}else {this.tokenRegex.lastIndex=nlIndex+1;}return this.lex();}// Trim any trailing whitespace from control word match
var controlMatch=text.match(controlWordWhitespaceRegex);if(controlMatch){text=controlMatch[1];}return new Token_Token(text,new SourceLocation(this,pos,this.tokenRegex.lastIndex));};return Lexer;}();// CONCATENATED MODULE: ./src/Namespace.js
/**
 * A `Namespace` refers to a space of nameable things like macros or lengths,
 * which can be `set` either globally or local to a nested group, using an
 * undo stack similar to how TeX implements this functionality.
 * Performance-wise, `get` and local `set` take constant time, while global
 * `set` takes time proportional to the depth of group nesting.
 */var Namespace_Namespace=/*#__PURE__*/function(){/**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */function Namespace(builtins,globalMacros){if(builtins===void 0){builtins={};}if(globalMacros===void 0){globalMacros={};}this.current=void 0;this.builtins=void 0;this.undefStack=void 0;this.current=globalMacros;this.builtins=builtins;this.undefStack=[];}/**
   * Start a new nested group, affecting future local `set`s.
   */var _proto=Namespace.prototype;_proto.beginGroup=function beginGroup(){this.undefStack.push({});}/**
   * End current nested group, restoring values before the group began.
   */;_proto.endGroup=function endGroup(){if(this.undefStack.length===0){throw new src_ParseError("Unbalanced namespace destruction: attempt "+"to pop global namespace; please report this as a bug");}var undefs=this.undefStack.pop();for(var undef in undefs){if(undefs.hasOwnProperty(undef)){if(undefs[undef]===undefined){delete this.current[undef];}else {this.current[undef]=undefs[undef];}}}}/**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */;_proto.has=function has(name){return this.current.hasOwnProperty(name)||this.builtins.hasOwnProperty(name);}/**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */;_proto.get=function get(name){if(this.current.hasOwnProperty(name)){return this.current[name];}else {return this.builtins[name];}}/**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   */;_proto.set=function set(name,value,global){if(global===void 0){global=false;}if(global){// Global set is equivalent to setting in all groups.  Simulate this
// by destroying any undos currently scheduled for this name,
// and adding an undo with the *new* value (in case it later gets
// locally reset within this environment).
for(var i=0;i<this.undefStack.length;i++){delete this.undefStack[i][name];}if(this.undefStack.length>0){this.undefStack[this.undefStack.length-1][name]=value;}}else {// Undo this set at end of this group (possibly to `undefined`),
// unless an undo is already in place, in which case that older
// value is the correct one.
var top=this.undefStack[this.undefStack.length-1];if(top&&!top.hasOwnProperty(name)){top[name]=this.current[name];}}this.current[name]=value;};return Namespace;}();// CONCATENATED MODULE: ./src/macros.js
/**
 * Predefined macros for KaTeX.
 * This can be used to define some commands in terms of others.
 */var builtinMacros={};/* harmony default export */var macros=builtinMacros;// This function might one day accept an additional argument and do more things.
function defineMacro(name,body){builtinMacros[name]=body;}//////////////////////////////////////////////////////////////////////
// macro tools
defineMacro("\\noexpand",function(context){// The expansion is the token itself; but that token is interpreted
// as if its meaning were ‘\relax’ if it is a control sequence that
// would ordinarily be expanded by TeX’s expansion rules.
var t=context.popToken();if(context.isExpandable(t.text)){t.noexpand=true;t.treatAsRelax=true;}return {tokens:[t],numArgs:0};});defineMacro("\\expandafter",function(context){// TeX first reads the token that comes immediately after \expandafter,
// without expanding it; let’s call this token t. Then TeX reads the
// token that comes after t (and possibly more tokens, if that token
// has an argument), replacing it by its expansion. Finally TeX puts
// t back in front of that expansion.
var t=context.popToken();context.expandOnce(true);// expand only an expandable token
return {tokens:[t],numArgs:0};});// LaTeX's \@firstoftwo{#1}{#2} expands to #1, skipping #2
// TeX source: \long\def\@firstoftwo#1#2{#1}
defineMacro("\\@firstoftwo",function(context){var args=context.consumeArgs(2);return {tokens:args[0],numArgs:0};});// LaTeX's \@secondoftwo{#1}{#2} expands to #2, skipping #1
// TeX source: \long\def\@secondoftwo#1#2{#2}
defineMacro("\\@secondoftwo",function(context){var args=context.consumeArgs(2);return {tokens:args[1],numArgs:0};});// LaTeX's \@ifnextchar{#1}{#2}{#3} looks ahead to the next (unexpanded)
// symbol that isn't a space, consuming any spaces but not consuming the
// first nonspace character.  If that nonspace character matches #1, then
// the macro expands to #2; otherwise, it expands to #3.
defineMacro("\\@ifnextchar",function(context){var args=context.consumeArgs(3);// symbol, if, else
context.consumeSpaces();var nextToken=context.future();if(args[0].length===1&&args[0][0].text===nextToken.text){return {tokens:args[1],numArgs:0};}else {return {tokens:args[2],numArgs:0};}});// LaTeX's \@ifstar{#1}{#2} looks ahead to the next (unexpanded) symbol.
// If it is `*`, then it consumes the symbol, and the macro expands to #1;
// otherwise, the macro expands to #2 (without consuming the symbol).
// TeX source: \def\@ifstar#1{\@ifnextchar *{\@firstoftwo{#1}}}
defineMacro("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");// LaTeX's \TextOrMath{#1}{#2} expands to #1 in text mode, #2 in math mode
defineMacro("\\TextOrMath",function(context){var args=context.consumeArgs(2);if(context.mode==='text'){return {tokens:args[0],numArgs:0};}else {return {tokens:args[1],numArgs:0};}});// Lookup table for parsing numbers in base 8 through 16
var digitToNumber={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"a":10,"A":10,"b":11,"B":11,"c":12,"C":12,"d":13,"D":13,"e":14,"E":14,"f":15,"F":15};// TeX \char makes a literal character (catcode 12) using the following forms:
// (see The TeXBook, p. 43)
//   \char123  -- decimal
//   \char'123 -- octal
//   \char"123 -- hex
//   \char`x   -- character that can be written (i.e. isn't active)
//   \char`\x  -- character that cannot be written (e.g. %)
// These all refer to characters from the font, so we turn them into special
// calls to a function \@char dealt with in the Parser.
defineMacro("\\char",function(context){var token=context.popToken();var base;var number='';if(token.text==="'"){base=8;token=context.popToken();}else if(token.text==='"'){base=16;token=context.popToken();}else if(token.text==="`"){token=context.popToken();if(token.text[0]==="\\"){number=token.text.charCodeAt(1);}else if(token.text==="EOF"){throw new src_ParseError("\\char` missing argument");}else {number=token.text.charCodeAt(0);}}else {base=10;}if(base){// Parse a number in the given base, starting with first `token`.
number=digitToNumber[token.text];if(number==null||number>=base){throw new src_ParseError("Invalid base-"+base+" digit "+token.text);}var digit;while((digit=digitToNumber[context.future().text])!=null&&digit<base){number*=base;number+=digit;context.popToken();}}return "\\@char{"+number+"}";});// \newcommand{\macro}[args]{definition}
// \renewcommand{\macro}[args]{definition}
// TODO: Optional arguments: \newcommand{\macro}[args][default]{definition}
var macros_newcommand=function newcommand(context,existsOK,nonexistsOK){var arg=context.consumeArgs(1)[0];if(arg.length!==1){throw new src_ParseError("\\newcommand's first argument must be a macro name");}var name=arg[0].text;var exists=context.isDefined(name);if(exists&&!existsOK){throw new src_ParseError("\\newcommand{"+name+"} attempting to redefine "+(name+"; use \\renewcommand"));}if(!exists&&!nonexistsOK){throw new src_ParseError("\\renewcommand{"+name+"} when command "+name+" "+"does not yet exist; use \\newcommand");}var numArgs=0;arg=context.consumeArgs(1)[0];if(arg.length===1&&arg[0].text==="["){var argText='';var token=context.expandNextToken();while(token.text!=="]"&&token.text!=="EOF"){// TODO: Should properly expand arg, e.g., ignore {}s
argText+=token.text;token=context.expandNextToken();}if(!argText.match(/^\s*[0-9]+\s*$/)){throw new src_ParseError("Invalid number of arguments: "+argText);}numArgs=parseInt(argText);arg=context.consumeArgs(1)[0];}// Final arg is the expansion of the macro
context.macros.set(name,{tokens:arg,numArgs:numArgs});return '';};defineMacro("\\newcommand",function(context){return macros_newcommand(context,false,true);});defineMacro("\\renewcommand",function(context){return macros_newcommand(context,true,false);});defineMacro("\\providecommand",function(context){return macros_newcommand(context,true,true);});// terminal (console) tools
defineMacro("\\message",function(context){var arg=context.consumeArgs(1)[0];// eslint-disable-next-line no-console
console.log(arg.reverse().map(function(token){return token.text;}).join(""));return '';});defineMacro("\\errmessage",function(context){var arg=context.consumeArgs(1)[0];// eslint-disable-next-line no-console
console.error(arg.reverse().map(function(token){return token.text;}).join(""));return '';});defineMacro("\\show",function(context){var tok=context.popToken();var name=tok.text;// eslint-disable-next-line no-console
console.log(tok,context.macros.get(name),src_functions[name],src_symbols.math[name],src_symbols.text[name]);return '';});//////////////////////////////////////////////////////////////////////
// Grouping
// \let\bgroup={ \let\egroup=}
defineMacro("\\bgroup","{");defineMacro("\\egroup","}");// Symbols from latex.ltx:
// \def\lq{`}
// \def\rq{'}
// \def \aa {\r a}
// \def \AA {\r A}
defineMacro("\\lq","`");defineMacro("\\rq","'");defineMacro("\\aa","\\r a");defineMacro("\\AA","\\r A");// Copyright (C) and registered (R) symbols. Use raw symbol in MathML.
// \DeclareTextCommandDefault{\textcopyright}{\textcircled{c}}
// \DeclareTextCommandDefault{\textregistered}{\textcircled{%
//      \check@mathfonts\fontsize\sf@size\z@\math@fontsfalse\selectfont R}}
// \DeclareRobustCommand{\copyright}{%
//    \ifmmode{\nfss@text{\textcopyright}}\else\textcopyright\fi}
defineMacro("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");defineMacro("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");defineMacro("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");// Characters omitted from Unicode range 1D400–1D7FF
defineMacro("\u212C","\\mathscr{B}");// script
defineMacro("\u2130","\\mathscr{E}");defineMacro("\u2131","\\mathscr{F}");defineMacro("\u210B","\\mathscr{H}");defineMacro("\u2110","\\mathscr{I}");defineMacro("\u2112","\\mathscr{L}");defineMacro("\u2133","\\mathscr{M}");defineMacro("\u211B","\\mathscr{R}");defineMacro("\u212D","\\mathfrak{C}");// Fraktur
defineMacro("\u210C","\\mathfrak{H}");defineMacro("\u2128","\\mathfrak{Z}");// Define \Bbbk with a macro that works in both HTML and MathML.
defineMacro("\\Bbbk","\\Bbb{k}");// Unicode middle dot
// The KaTeX fonts do not contain U+00B7. Instead, \cdotp displays
// the dot at U+22C5 and gives it punct spacing.
defineMacro("\xB7","\\cdotp");// \llap and \rlap render their contents in text mode
defineMacro("\\llap","\\mathllap{\\textrm{#1}}");defineMacro("\\rlap","\\mathrlap{\\textrm{#1}}");defineMacro("\\clap","\\mathclap{\\textrm{#1}}");// \not is defined by base/fontmath.ltx via
// \DeclareMathSymbol{\not}{\mathrel}{symbols}{"36}
// It's thus treated like a \mathrel, but defined by a symbol that has zero
// width but extends to the right.  We use \rlap to get that spacing.
// For MathML we write U+0338 here. buildMathML.js will then do the overlay.
defineMacro("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');// Negated symbols from base/fontmath.ltx:
// \def\neq{\not=} \let\ne=\neq
// \DeclareRobustCommand
//   \notin{\mathrel{\m@th\mathpalette\c@ncel\in}}
// \def\c@ncel#1#2{\m@th\ooalign{$\hfil#1\mkern1mu/\hfil$\crcr$#1#2$}}
defineMacro("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");defineMacro("\\ne","\\neq");defineMacro("\u2260","\\neq");defineMacro("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}"+"{\\mathrel{\\char`∉}}");defineMacro("\u2209","\\notin");// Unicode stacked relations
defineMacro("\u2258","\\html@mathml{"+"\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}"+"}{\\mathrel{\\char`\u2258}}");defineMacro("\u2259","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");defineMacro("\u225A","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");defineMacro("\u225B","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}"+"{\\mathrel{\\char`\u225B}}");defineMacro("\u225D","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}"+"{\\mathrel{\\char`\u225D}}");defineMacro("\u225E","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}"+"{\\mathrel{\\char`\u225E}}");defineMacro("\u225F","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");// Misc Unicode
defineMacro("\u27C2","\\perp");defineMacro("\u203C","\\mathclose{!\\mkern-0.8mu!}");defineMacro("\u220C","\\notni");defineMacro("\u231C","\\ulcorner");defineMacro("\u231D","\\urcorner");defineMacro("\u231E","\\llcorner");defineMacro("\u231F","\\lrcorner");defineMacro("\xA9","\\copyright");defineMacro("\xAE","\\textregistered");defineMacro("\uFE0F","\\textregistered");// The KaTeX fonts have corners at codepoints that don't match Unicode.
// For MathML purposes, use the Unicode code point.
defineMacro("\\ulcorner","\\html@mathml{\\@ulcorner}{\\mathop{\\char\"231c}}");defineMacro("\\urcorner","\\html@mathml{\\@urcorner}{\\mathop{\\char\"231d}}");defineMacro("\\llcorner","\\html@mathml{\\@llcorner}{\\mathop{\\char\"231e}}");defineMacro("\\lrcorner","\\html@mathml{\\@lrcorner}{\\mathop{\\char\"231f}}");//////////////////////////////////////////////////////////////////////
// LaTeX_2ε
// \vdots{\vbox{\baselineskip4\p@  \lineskiplimit\z@
// \kern6\p@\hbox{.}\hbox{.}\hbox{.}}}
// We'll call \varvdots, which gets a glyph from symbols.js.
// The zero-width rule gets us an equivalent to the vertical 6pt kern.
defineMacro("\\vdots","\\mathord{\\varvdots\\rule{0pt}{15pt}}");defineMacro("\u22EE","\\vdots");//////////////////////////////////////////////////////////////////////
// amsmath.sty
// http://mirrors.concertpass.com/tex-archive/macros/latex/required/amsmath/amsmath.pdf
// Italic Greek capital letters.  AMS defines these with \DeclareMathSymbol,
// but they are equivalent to \mathit{\Letter}.
defineMacro("\\varGamma","\\mathit{\\Gamma}");defineMacro("\\varDelta","\\mathit{\\Delta}");defineMacro("\\varTheta","\\mathit{\\Theta}");defineMacro("\\varLambda","\\mathit{\\Lambda}");defineMacro("\\varXi","\\mathit{\\Xi}");defineMacro("\\varPi","\\mathit{\\Pi}");defineMacro("\\varSigma","\\mathit{\\Sigma}");defineMacro("\\varUpsilon","\\mathit{\\Upsilon}");defineMacro("\\varPhi","\\mathit{\\Phi}");defineMacro("\\varPsi","\\mathit{\\Psi}");defineMacro("\\varOmega","\\mathit{\\Omega}");//\newcommand{\substack}[1]{\subarray{c}#1\endsubarray}
defineMacro("\\substack","\\begin{subarray}{c}#1\\end{subarray}");// \renewcommand{\colon}{\nobreak\mskip2mu\mathpunct{}\nonscript
// \mkern-\thinmuskip{:}\mskip6muplus1mu\relax}
defineMacro("\\colon","\\nobreak\\mskip2mu\\mathpunct{}"+"\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu");// \newcommand{\boxed}[1]{\fbox{\m@th$\displaystyle#1$}}
defineMacro("\\boxed","\\fbox{$\\displaystyle{#1}$}");// \def\iff{\DOTSB\;\Longleftrightarrow\;}
// \def\implies{\DOTSB\;\Longrightarrow\;}
// \def\impliedby{\DOTSB\;\Longleftarrow\;}
defineMacro("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");defineMacro("\\implies","\\DOTSB\\;\\Longrightarrow\\;");defineMacro("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");// AMSMath's automatic \dots, based on \mdots@@ macro.
var dotsByToken={',':'\\dotsc','\\not':'\\dotsb',// \keybin@ checks for the following:
'+':'\\dotsb','=':'\\dotsb','<':'\\dotsb','>':'\\dotsb','-':'\\dotsb','*':'\\dotsb',':':'\\dotsb',// Symbols whose definition starts with \DOTSB:
'\\DOTSB':'\\dotsb','\\coprod':'\\dotsb','\\bigvee':'\\dotsb','\\bigwedge':'\\dotsb','\\biguplus':'\\dotsb','\\bigcap':'\\dotsb','\\bigcup':'\\dotsb','\\prod':'\\dotsb','\\sum':'\\dotsb','\\bigotimes':'\\dotsb','\\bigoplus':'\\dotsb','\\bigodot':'\\dotsb','\\bigsqcup':'\\dotsb','\\And':'\\dotsb','\\longrightarrow':'\\dotsb','\\Longrightarrow':'\\dotsb','\\longleftarrow':'\\dotsb','\\Longleftarrow':'\\dotsb','\\longleftrightarrow':'\\dotsb','\\Longleftrightarrow':'\\dotsb','\\mapsto':'\\dotsb','\\longmapsto':'\\dotsb','\\hookrightarrow':'\\dotsb','\\doteq':'\\dotsb',// Symbols whose definition starts with \mathbin:
'\\mathbin':'\\dotsb',// Symbols whose definition starts with \mathrel:
'\\mathrel':'\\dotsb','\\relbar':'\\dotsb','\\Relbar':'\\dotsb','\\xrightarrow':'\\dotsb','\\xleftarrow':'\\dotsb',// Symbols whose definition starts with \DOTSI:
'\\DOTSI':'\\dotsi','\\int':'\\dotsi','\\oint':'\\dotsi','\\iint':'\\dotsi','\\iiint':'\\dotsi','\\iiiint':'\\dotsi','\\idotsint':'\\dotsi',// Symbols whose definition starts with \DOTSX:
'\\DOTSX':'\\dotsx'};defineMacro("\\dots",function(context){// TODO: If used in text mode, should expand to \textellipsis.
// However, in KaTeX, \textellipsis and \ldots behave the same
// (in text mode), and it's unlikely we'd see any of the math commands
// that affect the behavior of \dots when in text mode.  So fine for now
// (until we support \ifmmode ... \else ... \fi).
var thedots='\\dotso';var next=context.expandAfterFuture().text;if(next in dotsByToken){thedots=dotsByToken[next];}else if(next.substr(0,4)==='\\not'){thedots='\\dotsb';}else if(next in src_symbols.math){if(utils.contains(['bin','rel'],src_symbols.math[next].group)){thedots='\\dotsb';}}return thedots;});var spaceAfterDots={// \rightdelim@ checks for the following:
')':true,']':true,'\\rbrack':true,'\\}':true,'\\rbrace':true,'\\rangle':true,'\\rceil':true,'\\rfloor':true,'\\rgroup':true,'\\rmoustache':true,'\\right':true,'\\bigr':true,'\\biggr':true,'\\Bigr':true,'\\Biggr':true,// \extra@ also tests for the following:
'$':true,// \extrap@ checks for the following:
';':true,'.':true,',':true};defineMacro("\\dotso",function(context){var next=context.future().text;if(next in spaceAfterDots){return "\\ldots\\,";}else {return "\\ldots";}});defineMacro("\\dotsc",function(context){var next=context.future().text;// \dotsc uses \extra@ but not \extrap@, instead specially checking for
// ';' and '.', but doesn't check for ','.
if(next in spaceAfterDots&&next!==','){return "\\ldots\\,";}else {return "\\ldots";}});defineMacro("\\cdots",function(context){var next=context.future().text;if(next in spaceAfterDots){return "\\@cdots\\,";}else {return "\\@cdots";}});defineMacro("\\dotsb","\\cdots");defineMacro("\\dotsm","\\cdots");defineMacro("\\dotsi","\\!\\cdots");// amsmath doesn't actually define \dotsx, but \dots followed by a macro
// starting with \DOTSX implies \dotso, and then \extra@ detects this case
// and forces the added `\,`.
defineMacro("\\dotsx","\\ldots\\,");// \let\DOTSI\relax
// \let\DOTSB\relax
// \let\DOTSX\relax
defineMacro("\\DOTSI","\\relax");defineMacro("\\DOTSB","\\relax");defineMacro("\\DOTSX","\\relax");// Spacing, based on amsmath.sty's override of LaTeX defaults
// \DeclareRobustCommand{\tmspace}[3]{%
//   \ifmmode\mskip#1#2\else\kern#1#3\fi\relax}
defineMacro("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");// \renewcommand{\,}{\tmspace+\thinmuskip{.1667em}}
// TODO: math mode should use \thinmuskip
defineMacro("\\,","\\tmspace+{3mu}{.1667em}");// \let\thinspace\,
defineMacro("\\thinspace","\\,");// \def\>{\mskip\medmuskip}
// \renewcommand{\:}{\tmspace+\medmuskip{.2222em}}
// TODO: \> and math mode of \: should use \medmuskip = 4mu plus 2mu minus 4mu
defineMacro("\\>","\\mskip{4mu}");defineMacro("\\:","\\tmspace+{4mu}{.2222em}");// \let\medspace\:
defineMacro("\\medspace","\\:");// \renewcommand{\;}{\tmspace+\thickmuskip{.2777em}}
// TODO: math mode should use \thickmuskip = 5mu plus 5mu
defineMacro("\\;","\\tmspace+{5mu}{.2777em}");// \let\thickspace\;
defineMacro("\\thickspace","\\;");// \renewcommand{\!}{\tmspace-\thinmuskip{.1667em}}
// TODO: math mode should use \thinmuskip
defineMacro("\\!","\\tmspace-{3mu}{.1667em}");// \let\negthinspace\!
defineMacro("\\negthinspace","\\!");// \newcommand{\negmedspace}{\tmspace-\medmuskip{.2222em}}
// TODO: math mode should use \medmuskip
defineMacro("\\negmedspace","\\tmspace-{4mu}{.2222em}");// \newcommand{\negthickspace}{\tmspace-\thickmuskip{.2777em}}
// TODO: math mode should use \thickmuskip
defineMacro("\\negthickspace","\\tmspace-{5mu}{.277em}");// \def\enspace{\kern.5em }
defineMacro("\\enspace","\\kern.5em ");// \def\enskip{\hskip.5em\relax}
defineMacro("\\enskip","\\hskip.5em\\relax");// \def\quad{\hskip1em\relax}
defineMacro("\\quad","\\hskip1em\\relax");// \def\qquad{\hskip2em\relax}
defineMacro("\\qquad","\\hskip2em\\relax");// \tag@in@display form of \tag
defineMacro("\\tag","\\@ifstar\\tag@literal\\tag@paren");defineMacro("\\tag@paren","\\tag@literal{({#1})}");defineMacro("\\tag@literal",function(context){if(context.macros.get("\\df@tag")){throw new src_ParseError("Multiple \\tag");}return "\\gdef\\df@tag{\\text{#1}}";});// \renewcommand{\bmod}{\nonscript\mskip-\medmuskip\mkern5mu\mathbin
//   {\operator@font mod}\penalty900
//   \mkern5mu\nonscript\mskip-\medmuskip}
// \newcommand{\pod}[1]{\allowbreak
//   \if@display\mkern18mu\else\mkern8mu\fi(#1)}
// \renewcommand{\pmod}[1]{\pod{{\operator@font mod}\mkern6mu#1}}
// \newcommand{\mod}[1]{\allowbreak\if@display\mkern18mu
//   \else\mkern12mu\fi{\operator@font mod}\,\,#1}
// TODO: math mode should use \medmuskip = 4mu plus 2mu minus 4mu
defineMacro("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"+"\\mathbin{\\rm mod}"+"\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");defineMacro("\\pod","\\allowbreak"+"\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");defineMacro("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");defineMacro("\\mod","\\allowbreak"+"\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}"+"{\\rm mod}\\,\\,#1");// \pmb    --   A simulation of bold.
// The version in ambsy.sty works by typesetting three copies of the argument
// with small offsets. We use two copies. We omit the vertical offset because
// of rendering problems that makeVList encounters in Safari.
defineMacro("\\pmb","\\html@mathml{"+"\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}"+"{\\mathbf{#1}}");//////////////////////////////////////////////////////////////////////
// LaTeX source2e
// \\ defaults to \newline, but changes to \cr within array environment
defineMacro("\\\\","\\newline");// \def\TeX{T\kern-.1667em\lower.5ex\hbox{E}\kern-.125emX\@}
// TODO: Doesn't normally work in math mode because \@ fails.  KaTeX doesn't
// support \@ yet, so that's omitted, and we add \text so that the result
// doesn't look funny in math mode.
defineMacro("\\TeX","\\textrm{\\html@mathml{"+"T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX"+"}{TeX}}");// \DeclareRobustCommand{\LaTeX}{L\kern-.36em%
//         {\sbox\z@ T%
//          \vbox to\ht\z@{\hbox{\check@mathfonts
//                               \fontsize\sf@size\z@
//                               \math@fontsfalse\selectfont
//                               A}%
//                         \vss}%
//         }%
//         \kern-.15em%
//         \TeX}
// This code aligns the top of the A with the T (from the perspective of TeX's
// boxes, though visually the A appears to extend above slightly).
// We compute the corresponding \raisebox when A is rendered in \normalsize
// \scriptstyle, which has a scale factor of 0.7 (see Options.js).
var latexRaiseA=fontMetricsData['Main-Regular']["T".charCodeAt(0)][1]-0.7*fontMetricsData['Main-Regular']["A".charCodeAt(0)][1]+"em";defineMacro("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+latexRaiseA+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");// New KaTeX logo based on tweaking LaTeX logo
defineMacro("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+latexRaiseA+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");// \DeclareRobustCommand\hspace{\@ifstar\@hspacer\@hspace}
// \def\@hspace#1{\hskip  #1\relax}
// \def\@hspacer#1{\vrule \@width\z@\nobreak
//                 \hskip #1\hskip \z@skip}
defineMacro("\\hspace","\\@ifstar\\@hspacer\\@hspace");defineMacro("\\@hspace","\\hskip #1\\relax");defineMacro("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");//////////////////////////////////////////////////////////////////////
// mathtools.sty
//\providecommand\ordinarycolon{:}
defineMacro("\\ordinarycolon",":");//\def\vcentcolon{\mathrel{\mathop\ordinarycolon}}
//TODO(edemaine): Not yet centered. Fix via \raisebox or #726
defineMacro("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");// \providecommand*\dblcolon{\vcentcolon\mathrel{\mkern-.9mu}\vcentcolon}
defineMacro("\\dblcolon","\\html@mathml{"+"\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}"+"{\\mathop{\\char\"2237}}");// \providecommand*\coloneqq{\vcentcolon\mathrel{\mkern-1.2mu}=}
defineMacro("\\coloneqq","\\html@mathml{"+"\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}"+"{\\mathop{\\char\"2254}}");// ≔
// \providecommand*\Coloneqq{\dblcolon\mathrel{\mkern-1.2mu}=}
defineMacro("\\Coloneqq","\\html@mathml{"+"\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}"+"{\\mathop{\\char\"2237\\char\"3d}}");// \providecommand*\coloneq{\vcentcolon\mathrel{\mkern-1.2mu}\mathrel{-}}
defineMacro("\\coloneq","\\html@mathml{"+"\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}"+"{\\mathop{\\char\"3a\\char\"2212}}");// \providecommand*\Coloneq{\dblcolon\mathrel{\mkern-1.2mu}\mathrel{-}}
defineMacro("\\Coloneq","\\html@mathml{"+"\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}"+"{\\mathop{\\char\"2237\\char\"2212}}");// \providecommand*\eqqcolon{=\mathrel{\mkern-1.2mu}\vcentcolon}
defineMacro("\\eqqcolon","\\html@mathml{"+"\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}"+"{\\mathop{\\char\"2255}}");// ≕
// \providecommand*\Eqqcolon{=\mathrel{\mkern-1.2mu}\dblcolon}
defineMacro("\\Eqqcolon","\\html@mathml{"+"\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}"+"{\\mathop{\\char\"3d\\char\"2237}}");// \providecommand*\eqcolon{\mathrel{-}\mathrel{\mkern-1.2mu}\vcentcolon}
defineMacro("\\eqcolon","\\html@mathml{"+"\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}"+"{\\mathop{\\char\"2239}}");// \providecommand*\Eqcolon{\mathrel{-}\mathrel{\mkern-1.2mu}\dblcolon}
defineMacro("\\Eqcolon","\\html@mathml{"+"\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}"+"{\\mathop{\\char\"2212\\char\"2237}}");// \providecommand*\colonapprox{\vcentcolon\mathrel{\mkern-1.2mu}\approx}
defineMacro("\\colonapprox","\\html@mathml{"+"\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}"+"{\\mathop{\\char\"3a\\char\"2248}}");// \providecommand*\Colonapprox{\dblcolon\mathrel{\mkern-1.2mu}\approx}
defineMacro("\\Colonapprox","\\html@mathml{"+"\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}"+"{\\mathop{\\char\"2237\\char\"2248}}");// \providecommand*\colonsim{\vcentcolon\mathrel{\mkern-1.2mu}\sim}
defineMacro("\\colonsim","\\html@mathml{"+"\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}"+"{\\mathop{\\char\"3a\\char\"223c}}");// \providecommand*\Colonsim{\dblcolon\mathrel{\mkern-1.2mu}\sim}
defineMacro("\\Colonsim","\\html@mathml{"+"\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}"+"{\\mathop{\\char\"2237\\char\"223c}}");// Some Unicode characters are implemented with macros to mathtools functions.
defineMacro("\u2237","\\dblcolon");// ::
defineMacro("\u2239","\\eqcolon");// -:
defineMacro("\u2254","\\coloneqq");// :=
defineMacro("\u2255","\\eqqcolon");// =:
defineMacro("\u2A74","\\Coloneqq");// ::=
//////////////////////////////////////////////////////////////////////
// colonequals.sty
// Alternate names for mathtools's macros:
defineMacro("\\ratio","\\vcentcolon");defineMacro("\\coloncolon","\\dblcolon");defineMacro("\\colonequals","\\coloneqq");defineMacro("\\coloncolonequals","\\Coloneqq");defineMacro("\\equalscolon","\\eqqcolon");defineMacro("\\equalscoloncolon","\\Eqqcolon");defineMacro("\\colonminus","\\coloneq");defineMacro("\\coloncolonminus","\\Coloneq");defineMacro("\\minuscolon","\\eqcolon");defineMacro("\\minuscoloncolon","\\Eqcolon");// \colonapprox name is same in mathtools and colonequals.
defineMacro("\\coloncolonapprox","\\Colonapprox");// \colonsim name is same in mathtools and colonequals.
defineMacro("\\coloncolonsim","\\Colonsim");// Additional macros, implemented by analogy with mathtools definitions:
defineMacro("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");defineMacro("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");defineMacro("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");defineMacro("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");// Present in newtxmath, pxfonts and txfonts
defineMacro("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");defineMacro("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");defineMacro("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");//////////////////////////////////////////////////////////////////////
// MathML alternates for KaTeX glyphs in the Unicode private area
defineMacro("\\gvertneqq","\\html@mathml{\\@gvertneqq}{\u2269}");defineMacro("\\lvertneqq","\\html@mathml{\\@lvertneqq}{\u2268}");defineMacro("\\ngeqq","\\html@mathml{\\@ngeqq}{\u2271}");defineMacro("\\ngeqslant","\\html@mathml{\\@ngeqslant}{\u2271}");defineMacro("\\nleqq","\\html@mathml{\\@nleqq}{\u2270}");defineMacro("\\nleqslant","\\html@mathml{\\@nleqslant}{\u2270}");defineMacro("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");defineMacro("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");defineMacro("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{\u2288}");defineMacro("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{\u2289}");defineMacro("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");defineMacro("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");defineMacro("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");defineMacro("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");defineMacro("\\imath","\\html@mathml{\\@imath}{\u0131}");defineMacro("\\jmath","\\html@mathml{\\@jmath}{\u0237}");//////////////////////////////////////////////////////////////////////
// stmaryrd and semantic
// The stmaryrd and semantic packages render the next four items by calling a
// glyph. Those glyphs do not exist in the KaTeX fonts. Hence the macros.
defineMacro("\\llbracket","\\html@mathml{"+"\\mathopen{[\\mkern-3.2mu[}}"+"{\\mathopen{\\char`\u27E6}}");defineMacro("\\rrbracket","\\html@mathml{"+"\\mathclose{]\\mkern-3.2mu]}}"+"{\\mathclose{\\char`\u27E7}}");defineMacro("\u27E6","\\llbracket");// blackboard bold [
defineMacro("\u27E7","\\rrbracket");// blackboard bold ]
defineMacro("\\lBrace","\\html@mathml{"+"\\mathopen{\\{\\mkern-3.2mu[}}"+"{\\mathopen{\\char`\u2983}}");defineMacro("\\rBrace","\\html@mathml{"+"\\mathclose{]\\mkern-3.2mu\\}}}"+"{\\mathclose{\\char`\u2984}}");defineMacro("\u2983","\\lBrace");// blackboard bold {
defineMacro("\u2984","\\rBrace");// blackboard bold }
// TODO: Create variable sized versions of the last two items. I believe that
// will require new font glyphs.
// The stmaryrd function `\minuso` provides a "Plimsoll" symbol that
// superimposes the characters \circ and \mathminus. Used in chemistry.
defineMacro("\\minuso","\\mathbin{\\html@mathml{"+"{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}"+"{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}"+"{\\char`⦵}}");defineMacro("⦵","\\minuso");//////////////////////////////////////////////////////////////////////
// texvc.sty
// The texvc package contains macros available in mediawiki pages.
// We omit the functions deprecated at
// https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax
// We also omit texvc's \O, which conflicts with \text{\O}
defineMacro("\\darr","\\downarrow");defineMacro("\\dArr","\\Downarrow");defineMacro("\\Darr","\\Downarrow");defineMacro("\\lang","\\langle");defineMacro("\\rang","\\rangle");defineMacro("\\uarr","\\uparrow");defineMacro("\\uArr","\\Uparrow");defineMacro("\\Uarr","\\Uparrow");defineMacro("\\N","\\mathbb{N}");defineMacro("\\R","\\mathbb{R}");defineMacro("\\Z","\\mathbb{Z}");defineMacro("\\alef","\\aleph");defineMacro("\\alefsym","\\aleph");defineMacro("\\Alpha","\\mathrm{A}");defineMacro("\\Beta","\\mathrm{B}");defineMacro("\\bull","\\bullet");defineMacro("\\Chi","\\mathrm{X}");defineMacro("\\clubs","\\clubsuit");defineMacro("\\cnums","\\mathbb{C}");defineMacro("\\Complex","\\mathbb{C}");defineMacro("\\Dagger","\\ddagger");defineMacro("\\diamonds","\\diamondsuit");defineMacro("\\empty","\\emptyset");defineMacro("\\Epsilon","\\mathrm{E}");defineMacro("\\Eta","\\mathrm{H}");defineMacro("\\exist","\\exists");defineMacro("\\harr","\\leftrightarrow");defineMacro("\\hArr","\\Leftrightarrow");defineMacro("\\Harr","\\Leftrightarrow");defineMacro("\\hearts","\\heartsuit");defineMacro("\\image","\\Im");defineMacro("\\infin","\\infty");defineMacro("\\Iota","\\mathrm{I}");defineMacro("\\isin","\\in");defineMacro("\\Kappa","\\mathrm{K}");defineMacro("\\larr","\\leftarrow");defineMacro("\\lArr","\\Leftarrow");defineMacro("\\Larr","\\Leftarrow");defineMacro("\\lrarr","\\leftrightarrow");defineMacro("\\lrArr","\\Leftrightarrow");defineMacro("\\Lrarr","\\Leftrightarrow");defineMacro("\\Mu","\\mathrm{M}");defineMacro("\\natnums","\\mathbb{N}");defineMacro("\\Nu","\\mathrm{N}");defineMacro("\\Omicron","\\mathrm{O}");defineMacro("\\plusmn","\\pm");defineMacro("\\rarr","\\rightarrow");defineMacro("\\rArr","\\Rightarrow");defineMacro("\\Rarr","\\Rightarrow");defineMacro("\\real","\\Re");defineMacro("\\reals","\\mathbb{R}");defineMacro("\\Reals","\\mathbb{R}");defineMacro("\\Rho","\\mathrm{P}");defineMacro("\\sdot","\\cdot");defineMacro("\\sect","\\S");defineMacro("\\spades","\\spadesuit");defineMacro("\\sub","\\subset");defineMacro("\\sube","\\subseteq");defineMacro("\\supe","\\supseteq");defineMacro("\\Tau","\\mathrm{T}");defineMacro("\\thetasym","\\vartheta");// TODO: defineMacro("\\varcoppa", "\\\mbox{\\coppa}");
defineMacro("\\weierp","\\wp");defineMacro("\\Zeta","\\mathrm{Z}");//////////////////////////////////////////////////////////////////////
// statmath.sty
// https://ctan.math.illinois.edu/macros/latex/contrib/statmath/statmath.pdf
defineMacro("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");defineMacro("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");defineMacro("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");//////////////////////////////////////////////////////////////////////
// braket.sty
// http://ctan.math.washington.edu/tex-archive/macros/latex/contrib/braket/braket.pdf
defineMacro("\\bra","\\mathinner{\\langle{#1}|}");defineMacro("\\ket","\\mathinner{|{#1}\\rangle}");defineMacro("\\braket","\\mathinner{\\langle{#1}\\rangle}");defineMacro("\\Bra","\\left\\langle#1\\right|");defineMacro("\\Ket","\\left|#1\\right\\rangle");// Custom Khan Academy colors, should be moved to an optional package
defineMacro("\\blue","\\textcolor{##6495ed}{#1}");defineMacro("\\orange","\\textcolor{##ffa500}{#1}");defineMacro("\\pink","\\textcolor{##ff00af}{#1}");defineMacro("\\red","\\textcolor{##df0030}{#1}");defineMacro("\\green","\\textcolor{##28ae7b}{#1}");defineMacro("\\gray","\\textcolor{gray}{#1}");defineMacro("\\purple","\\textcolor{##9d38bd}{#1}");defineMacro("\\blueA","\\textcolor{##ccfaff}{#1}");defineMacro("\\blueB","\\textcolor{##80f6ff}{#1}");defineMacro("\\blueC","\\textcolor{##63d9ea}{#1}");defineMacro("\\blueD","\\textcolor{##11accd}{#1}");defineMacro("\\blueE","\\textcolor{##0c7f99}{#1}");defineMacro("\\tealA","\\textcolor{##94fff5}{#1}");defineMacro("\\tealB","\\textcolor{##26edd5}{#1}");defineMacro("\\tealC","\\textcolor{##01d1c1}{#1}");defineMacro("\\tealD","\\textcolor{##01a995}{#1}");defineMacro("\\tealE","\\textcolor{##208170}{#1}");defineMacro("\\greenA","\\textcolor{##b6ffb0}{#1}");defineMacro("\\greenB","\\textcolor{##8af281}{#1}");defineMacro("\\greenC","\\textcolor{##74cf70}{#1}");defineMacro("\\greenD","\\textcolor{##1fab54}{#1}");defineMacro("\\greenE","\\textcolor{##0d923f}{#1}");defineMacro("\\goldA","\\textcolor{##ffd0a9}{#1}");defineMacro("\\goldB","\\textcolor{##ffbb71}{#1}");defineMacro("\\goldC","\\textcolor{##ff9c39}{#1}");defineMacro("\\goldD","\\textcolor{##e07d10}{#1}");defineMacro("\\goldE","\\textcolor{##a75a05}{#1}");defineMacro("\\redA","\\textcolor{##fca9a9}{#1}");defineMacro("\\redB","\\textcolor{##ff8482}{#1}");defineMacro("\\redC","\\textcolor{##f9685d}{#1}");defineMacro("\\redD","\\textcolor{##e84d39}{#1}");defineMacro("\\redE","\\textcolor{##bc2612}{#1}");defineMacro("\\maroonA","\\textcolor{##ffbde0}{#1}");defineMacro("\\maroonB","\\textcolor{##ff92c6}{#1}");defineMacro("\\maroonC","\\textcolor{##ed5fa6}{#1}");defineMacro("\\maroonD","\\textcolor{##ca337c}{#1}");defineMacro("\\maroonE","\\textcolor{##9e034e}{#1}");defineMacro("\\purpleA","\\textcolor{##ddd7ff}{#1}");defineMacro("\\purpleB","\\textcolor{##c6b9fc}{#1}");defineMacro("\\purpleC","\\textcolor{##aa87ff}{#1}");defineMacro("\\purpleD","\\textcolor{##7854ab}{#1}");defineMacro("\\purpleE","\\textcolor{##543b78}{#1}");defineMacro("\\mintA","\\textcolor{##f5f9e8}{#1}");defineMacro("\\mintB","\\textcolor{##edf2df}{#1}");defineMacro("\\mintC","\\textcolor{##e0e5cc}{#1}");defineMacro("\\grayA","\\textcolor{##f6f7f7}{#1}");defineMacro("\\grayB","\\textcolor{##f0f1f2}{#1}");defineMacro("\\grayC","\\textcolor{##e3e5e6}{#1}");defineMacro("\\grayD","\\textcolor{##d6d8da}{#1}");defineMacro("\\grayE","\\textcolor{##babec2}{#1}");defineMacro("\\grayF","\\textcolor{##888d93}{#1}");defineMacro("\\grayG","\\textcolor{##626569}{#1}");defineMacro("\\grayH","\\textcolor{##3b3e40}{#1}");defineMacro("\\grayI","\\textcolor{##21242c}{#1}");defineMacro("\\kaBlue","\\textcolor{##314453}{#1}");defineMacro("\\kaGreen","\\textcolor{##71B307}{#1}");// CONCATENATED MODULE: ./src/MacroExpander.js
/**
 * This file contains the “gullet” where macros are expanded
 * until only non-macro tokens remain.
 */ // List of commands that act like macros but aren't defined as a macro,
// function, or symbol.  Used in `isDefined`.
var implicitCommands={"\\relax":true,// MacroExpander.js
"^":true,// Parser.js
"_":true,// Parser.js
"\\limits":true,// Parser.js
"\\nolimits":true// Parser.js
};var MacroExpander_MacroExpander=/*#__PURE__*/function(){function MacroExpander(input,settings,mode){this.settings=void 0;this.expansionCount=void 0;this.lexer=void 0;this.macros=void 0;this.stack=void 0;this.mode=void 0;this.settings=settings;this.expansionCount=0;this.feed(input);// Make new global namespace
this.macros=new Namespace_Namespace(macros,settings.macros);this.mode=mode;this.stack=[];// contains tokens in REVERSE order
}/**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */var _proto=MacroExpander.prototype;_proto.feed=function feed(input){this.lexer=new Lexer_Lexer(input,this.settings);}/**
   * Switches between "text" and "math" modes.
   */;_proto.switchMode=function switchMode(newMode){this.mode=newMode;}/**
   * Start a new group nesting within all namespaces.
   */;_proto.beginGroup=function beginGroup(){this.macros.beginGroup();}/**
   * End current group nesting within all namespaces.
   */;_proto.endGroup=function endGroup(){this.macros.endGroup();}/**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */;_proto.future=function future(){if(this.stack.length===0){this.pushToken(this.lexer.lex());}return this.stack[this.stack.length-1];}/**
   * Remove and return the next unexpanded token.
   */;_proto.popToken=function popToken(){this.future();// ensure non-empty stack
return this.stack.pop();}/**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */;_proto.pushToken=function pushToken(token){this.stack.push(token);}/**
   * Append an array of tokens to the token stack.
   */;_proto.pushTokens=function pushTokens(tokens){var _this$stack;(_this$stack=this.stack).push.apply(_this$stack,tokens);}/**
   * Consume all following space tokens, without expansion.
   */;_proto.consumeSpaces=function consumeSpaces(){for(;;){var token=this.future();if(token.text===" "){this.stack.pop();}else {break;}}}/**
   * Consume the specified number of arguments from the token stream,
   * and return the resulting array of arguments.
   */;_proto.consumeArgs=function consumeArgs(numArgs){var args=[];// obtain arguments, either single token or balanced {…} group
for(var i=0;i<numArgs;++i){this.consumeSpaces();// ignore spaces before each argument
var startOfArg=this.popToken();if(startOfArg.text==="{"){var arg=[];var depth=1;while(depth!==0){var tok=this.popToken();arg.push(tok);if(tok.text==="{"){++depth;}else if(tok.text==="}"){--depth;}else if(tok.text==="EOF"){throw new src_ParseError("End of input in macro argument",startOfArg);}}arg.pop();// remove last }
arg.reverse();// like above, to fit in with stack order
args[i]=arg;}else if(startOfArg.text==="EOF"){throw new src_ParseError("End of input expecting macro argument");}else {args[i]=[startOfArg];}}return args;}/**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order and will be returned as an array,
   * also in reverse order.
   *
   * If not, the next token will be returned without removing it
   * from the stack.  This case can be detected by a `Token` return value
   * instead of an `Array` return value.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty.
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * At the moment, macro expansion doesn't handle delimited macros,
   * i.e. things like those defined by \def\foo#1\end{…}.
   * See the TeX book page 202ff. for details on how those should behave.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */;_proto.expandOnce=function expandOnce(expandableOnly){var topToken=this.popToken();var name=topToken.text;var expansion=!topToken.noexpand?this._getExpansion(name):null;if(expansion==null||expandableOnly&&expansion.unexpandable){if(expandableOnly&&expansion==null&&name[0]==="\\"&&!this.isDefined(name)){throw new src_ParseError("Undefined control sequence: "+name);}this.pushToken(topToken);return topToken;}this.expansionCount++;if(this.expansionCount>this.settings.maxExpand){throw new src_ParseError("Too many expansions: infinite loop or "+"need to increase maxExpand setting");}var tokens=expansion.tokens;if(expansion.numArgs){var args=this.consumeArgs(expansion.numArgs);// paste arguments in place of the placeholders
tokens=tokens.slice();// make a shallow copy
for(var i=tokens.length-1;i>=0;--i){var tok=tokens[i];if(tok.text==="#"){if(i===0){throw new src_ParseError("Incomplete placeholder at end of macro body",tok);}tok=tokens[--i];// next token on stack
if(tok.text==="#"){// ## → #
tokens.splice(i+1,1);// drop first #
}else if(/^[1-9]$/.test(tok.text)){var _tokens;// replace the placeholder with the indicated argument
(_tokens=tokens).splice.apply(_tokens,[i,2].concat(args[+tok.text-1]));}else {throw new src_ParseError("Not a valid argument number",tok);}}}}// Concatenate expansion onto top of stack.
this.pushTokens(tokens);return tokens;}/**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */;_proto.expandAfterFuture=function expandAfterFuture(){this.expandOnce();return this.future();}/**
   * Recursively expand first token, then return first non-expandable token.
   */;_proto.expandNextToken=function expandNextToken(){for(;;){var expanded=this.expandOnce();// expandOnce returns Token if and only if it's fully expanded.
if(expanded instanceof Token_Token){// \relax stops the expansion, but shouldn't get returned (a
// null return value couldn't get implemented as a function).
// the token after \noexpand is interpreted as if its meaning
// were ‘\relax’
if(expanded.text==="\\relax"||expanded.treatAsRelax){this.stack.pop();}else {return this.stack.pop();// === expanded
}}}// Flow unable to figure out that this pathway is impossible.
// https://github.com/facebook/flow/issues/4808
throw new Error();// eslint-disable-line no-unreachable
}/**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */;_proto.expandMacro=function expandMacro(name){return this.macros.has(name)?this.expandTokens([new Token_Token(name)]):undefined;}/**
   * Fully expand the given token stream and return the resulting list of tokens
   */;_proto.expandTokens=function expandTokens(tokens){var output=[];var oldStackLength=this.stack.length;this.pushTokens(tokens);while(this.stack.length>oldStackLength){var expanded=this.expandOnce(true);// expand only expandable tokens
// expandOnce returns Token if and only if it's fully expanded.
if(expanded instanceof Token_Token){if(expanded.treatAsRelax){// the expansion of \noexpand is the token itself
expanded.noexpand=false;expanded.treatAsRelax=false;}output.push(this.stack.pop());}}return output;}/**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */;_proto.expandMacroAsText=function expandMacroAsText(name){var tokens=this.expandMacro(name);if(tokens){return tokens.map(function(token){return token.text;}).join("");}else {return tokens;}}/**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */;_proto._getExpansion=function _getExpansion(name){var definition=this.macros.get(name);if(definition==null){// mainly checking for undefined here
return definition;}var expansion=typeof definition==="function"?definition(this):definition;if(typeof expansion==="string"){var numArgs=0;if(expansion.indexOf("#")!==-1){var stripped=expansion.replace(/##/g,"");while(stripped.indexOf("#"+(numArgs+1))!==-1){++numArgs;}}var bodyLexer=new Lexer_Lexer(expansion,this.settings);var tokens=[];var tok=bodyLexer.lex();while(tok.text!=="EOF"){tokens.push(tok);tok=bodyLexer.lex();}tokens.reverse();// to fit in with stack using push and pop
var expanded={tokens:tokens,numArgs:numArgs};return expanded;}return expansion;}/**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */;_proto.isDefined=function isDefined(name){return this.macros.has(name)||src_functions.hasOwnProperty(name)||src_symbols.math.hasOwnProperty(name)||src_symbols.text.hasOwnProperty(name)||implicitCommands.hasOwnProperty(name);}/**
   * Determine whether a command is expandable.
   */;_proto.isExpandable=function isExpandable(name){var macro=this.macros.get(name);return macro!=null?typeof macro==="string"||typeof macro==="function"||!macro.unexpandable// TODO(ylem): #2085
:src_functions.hasOwnProperty(name)/* && !functions[name].primitive*/;};return MacroExpander;}();// CONCATENATED MODULE: ./src/Parser.js
/* eslint no-constant-condition:0 */ // Pre-evaluate both modules as unicodeSymbols require String.normalize()
var unicodeAccents={"́":{"text":"\\'","math":"\\acute"},"̀":{"text":"\\`","math":"\\grave"},"̈":{"text":"\\\"","math":"\\ddot"},"̃":{"text":"\\~","math":"\\tilde"},"̄":{"text":"\\=","math":"\\bar"},"̆":{"text":"\\u","math":"\\breve"},"̌":{"text":"\\v","math":"\\check"},"̂":{"text":"\\^","math":"\\hat"},"̇":{"text":"\\.","math":"\\dot"},"̊":{"text":"\\r","math":"\\mathring"},"̋":{"text":"\\H"}};var unicodeSymbols={"á":"á","à":"à","ä":"ä","ǟ":"ǟ","ã":"ã","ā":"ā","ă":"ă","ắ":"ắ","ằ":"ằ","ẵ":"ẵ","ǎ":"ǎ","â":"â","ấ":"ấ","ầ":"ầ","ẫ":"ẫ","ȧ":"ȧ","ǡ":"ǡ","å":"å","ǻ":"ǻ","ḃ":"ḃ","ć":"ć","č":"č","ĉ":"ĉ","ċ":"ċ","ď":"ď","ḋ":"ḋ","é":"é","è":"è","ë":"ë","ẽ":"ẽ","ē":"ē","ḗ":"ḗ","ḕ":"ḕ","ĕ":"ĕ","ě":"ě","ê":"ê","ế":"ế","ề":"ề","ễ":"ễ","ė":"ė","ḟ":"ḟ","ǵ":"ǵ","ḡ":"ḡ","ğ":"ğ","ǧ":"ǧ","ĝ":"ĝ","ġ":"ġ","ḧ":"ḧ","ȟ":"ȟ","ĥ":"ĥ","ḣ":"ḣ","í":"í","ì":"ì","ï":"ï","ḯ":"ḯ","ĩ":"ĩ","ī":"ī","ĭ":"ĭ","ǐ":"ǐ","î":"î","ǰ":"ǰ","ĵ":"ĵ","ḱ":"ḱ","ǩ":"ǩ","ĺ":"ĺ","ľ":"ľ","ḿ":"ḿ","ṁ":"ṁ","ń":"ń","ǹ":"ǹ","ñ":"ñ","ň":"ň","ṅ":"ṅ","ó":"ó","ò":"ò","ö":"ö","ȫ":"ȫ","õ":"õ","ṍ":"ṍ","ṏ":"ṏ","ȭ":"ȭ","ō":"ō","ṓ":"ṓ","ṑ":"ṑ","ŏ":"ŏ","ǒ":"ǒ","ô":"ô","ố":"ố","ồ":"ồ","ỗ":"ỗ","ȯ":"ȯ","ȱ":"ȱ","ő":"ő","ṕ":"ṕ","ṗ":"ṗ","ŕ":"ŕ","ř":"ř","ṙ":"ṙ","ś":"ś","ṥ":"ṥ","š":"š","ṧ":"ṧ","ŝ":"ŝ","ṡ":"ṡ","ẗ":"ẗ","ť":"ť","ṫ":"ṫ","ú":"ú","ù":"ù","ü":"ü","ǘ":"ǘ","ǜ":"ǜ","ǖ":"ǖ","ǚ":"ǚ","ũ":"ũ","ṹ":"ṹ","ū":"ū","ṻ":"ṻ","ŭ":"ŭ","ǔ":"ǔ","û":"û","ů":"ů","ű":"ű","ṽ":"ṽ","ẃ":"ẃ","ẁ":"ẁ","ẅ":"ẅ","ŵ":"ŵ","ẇ":"ẇ","ẘ":"ẘ","ẍ":"ẍ","ẋ":"ẋ","ý":"ý","ỳ":"ỳ","ÿ":"ÿ","ỹ":"ỹ","ȳ":"ȳ","ŷ":"ŷ","ẏ":"ẏ","ẙ":"ẙ","ź":"ź","ž":"ž","ẑ":"ẑ","ż":"ż","Á":"Á","À":"À","Ä":"Ä","Ǟ":"Ǟ","Ã":"Ã","Ā":"Ā","Ă":"Ă","Ắ":"Ắ","Ằ":"Ằ","Ẵ":"Ẵ","Ǎ":"Ǎ","Â":"Â","Ấ":"Ấ","Ầ":"Ầ","Ẫ":"Ẫ","Ȧ":"Ȧ","Ǡ":"Ǡ","Å":"Å","Ǻ":"Ǻ","Ḃ":"Ḃ","Ć":"Ć","Č":"Č","Ĉ":"Ĉ","Ċ":"Ċ","Ď":"Ď","Ḋ":"Ḋ","É":"É","È":"È","Ë":"Ë","Ẽ":"Ẽ","Ē":"Ē","Ḗ":"Ḗ","Ḕ":"Ḕ","Ĕ":"Ĕ","Ě":"Ě","Ê":"Ê","Ế":"Ế","Ề":"Ề","Ễ":"Ễ","Ė":"Ė","Ḟ":"Ḟ","Ǵ":"Ǵ","Ḡ":"Ḡ","Ğ":"Ğ","Ǧ":"Ǧ","Ĝ":"Ĝ","Ġ":"Ġ","Ḧ":"Ḧ","Ȟ":"Ȟ","Ĥ":"Ĥ","Ḣ":"Ḣ","Í":"Í","Ì":"Ì","Ï":"Ï","Ḯ":"Ḯ","Ĩ":"Ĩ","Ī":"Ī","Ĭ":"Ĭ","Ǐ":"Ǐ","Î":"Î","İ":"İ","Ĵ":"Ĵ","Ḱ":"Ḱ","Ǩ":"Ǩ","Ĺ":"Ĺ","Ľ":"Ľ","Ḿ":"Ḿ","Ṁ":"Ṁ","Ń":"Ń","Ǹ":"Ǹ","Ñ":"Ñ","Ň":"Ň","Ṅ":"Ṅ","Ó":"Ó","Ò":"Ò","Ö":"Ö","Ȫ":"Ȫ","Õ":"Õ","Ṍ":"Ṍ","Ṏ":"Ṏ","Ȭ":"Ȭ","Ō":"Ō","Ṓ":"Ṓ","Ṑ":"Ṑ","Ŏ":"Ŏ","Ǒ":"Ǒ","Ô":"Ô","Ố":"Ố","Ồ":"Ồ","Ỗ":"Ỗ","Ȯ":"Ȯ","Ȱ":"Ȱ","Ő":"Ő","Ṕ":"Ṕ","Ṗ":"Ṗ","Ŕ":"Ŕ","Ř":"Ř","Ṙ":"Ṙ","Ś":"Ś","Ṥ":"Ṥ","Š":"Š","Ṧ":"Ṧ","Ŝ":"Ŝ","Ṡ":"Ṡ","Ť":"Ť","Ṫ":"Ṫ","Ú":"Ú","Ù":"Ù","Ü":"Ü","Ǘ":"Ǘ","Ǜ":"Ǜ","Ǖ":"Ǖ","Ǚ":"Ǚ","Ũ":"Ũ","Ṹ":"Ṹ","Ū":"Ū","Ṻ":"Ṻ","Ŭ":"Ŭ","Ǔ":"Ǔ","Û":"Û","Ů":"Ů","Ű":"Ű","Ṽ":"Ṽ","Ẃ":"Ẃ","Ẁ":"Ẁ","Ẅ":"Ẅ","Ŵ":"Ŵ","Ẇ":"Ẇ","Ẍ":"Ẍ","Ẋ":"Ẋ","Ý":"Ý","Ỳ":"Ỳ","Ÿ":"Ÿ","Ỹ":"Ỹ","Ȳ":"Ȳ","Ŷ":"Ŷ","Ẏ":"Ẏ","Ź":"Ź","Ž":"Ž","Ẑ":"Ẑ","Ż":"Ż","ά":"ά","ὰ":"ὰ","ᾱ":"ᾱ","ᾰ":"ᾰ","έ":"έ","ὲ":"ὲ","ή":"ή","ὴ":"ὴ","ί":"ί","ὶ":"ὶ","ϊ":"ϊ","ΐ":"ΐ","ῒ":"ῒ","ῑ":"ῑ","ῐ":"ῐ","ό":"ό","ὸ":"ὸ","ύ":"ύ","ὺ":"ὺ","ϋ":"ϋ","ΰ":"ΰ","ῢ":"ῢ","ῡ":"ῡ","ῠ":"ῠ","ώ":"ώ","ὼ":"ὼ","Ύ":"Ύ","Ὺ":"Ὺ","Ϋ":"Ϋ","Ῡ":"Ῡ","Ῠ":"Ῠ","Ώ":"Ώ","Ὼ":"Ὼ"};/**
 * This file contains the parser used to parse out a TeX expression from the
 * input. Since TeX isn't context-free, standard parsers don't work particularly
 * well.
 *
 * The strategy of this parser is as such:
 *
 * The main functions (the `.parse...` ones) take a position in the current
 * parse string to parse tokens from. The lexer (found in Lexer.js, stored at
 * this.gullet.lexer) also supports pulling out tokens at arbitrary places. When
 * individual tokens are needed at a position, the lexer is called to pull out a
 * token, which is then used.
 *
 * The parser has a property called "mode" indicating the mode that
 * the parser is currently in. Currently it has to be one of "math" or
 * "text", which denotes whether the current environment is a math-y
 * one or a text-y one (e.g. inside \text). Currently, this serves to
 * limit the functions which can be used in text mode.
 *
 * The main functions then return an object which contains the useful data that
 * was parsed at its given point, and a new position at the end of the parsed
 * data. The main functions can call each other and continue the parsing by
 * using the returned position as a new starting point.
 *
 * There are also extra `.handle...` functions, which pull out some reused
 * functionality into self-contained functions.
 *
 * The functions return ParseNodes.
 */var Parser_Parser=/*#__PURE__*/function(){function Parser(input,settings){this.mode=void 0;this.gullet=void 0;this.settings=void 0;this.leftrightDepth=void 0;this.nextToken=void 0;// Start in math mode
this.mode="math";// Create a new macro expander (gullet) and (indirectly via that) also a
// new lexer (mouth) for this parser (stomach, in the language of TeX)
this.gullet=new MacroExpander_MacroExpander(input,settings,this.mode);// Store the settings for use in parsing
this.settings=settings;// Count leftright depth (for \middle errors)
this.leftrightDepth=0;}/**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */var _proto=Parser.prototype;_proto.expect=function expect(text,consume){if(consume===void 0){consume=true;}if(this.fetch().text!==text){throw new src_ParseError("Expected '"+text+"', got '"+this.fetch().text+"'",this.fetch());}if(consume){this.consume();}}/**
   * Discards the current lookahead token, considering it consumed.
   */;_proto.consume=function consume(){this.nextToken=null;}/**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */;_proto.fetch=function fetch(){if(this.nextToken==null){this.nextToken=this.gullet.expandNextToken();}return this.nextToken;}/**
   * Switches between "text" and "math" modes.
   */;_proto.switchMode=function switchMode(newMode){this.mode=newMode;this.gullet.switchMode(newMode);}/**
   * Main parsing function, which parses an entire input.
   */;_proto.parse=function parse(){if(!this.settings.globalGroup){// Create a group namespace for the math expression.
// (LaTeX creates a new group for every $...$, $$...$$, \[...\].)
this.gullet.beginGroup();}// Use old \color behavior (same as LaTeX's \textcolor) if requested.
// We do this within the group for the math expression, so it doesn't
// pollute settings.macros.
if(this.settings.colorIsTextColor){this.gullet.macros.set("\\color","\\textcolor");}// Try to parse the input
var parse=this.parseExpression(false);// If we succeeded, make sure there's an EOF at the end
this.expect("EOF");// End the group namespace for the expression
if(!this.settings.globalGroup){this.gullet.endGroup();}return parse;};_proto.parseExpression=function parseExpression(breakOnInfix,breakOnTokenText){var body=[];// Keep adding atoms to the body until we can't parse any more atoms (either
// we reached the end, a }, or a \right)
while(true){// Ignore spaces in math mode
if(this.mode==="math"){this.consumeSpaces();}var lex=this.fetch();if(Parser.endOfExpression.indexOf(lex.text)!==-1){break;}if(breakOnTokenText&&lex.text===breakOnTokenText){break;}if(breakOnInfix&&src_functions[lex.text]&&src_functions[lex.text].infix){break;}var atom=this.parseAtom(breakOnTokenText);if(!atom){break;}else if(atom.type==="internal"){continue;}body.push(atom);}if(this.mode==="text"){this.formLigatures(body);}return this.handleInfixNodes(body);}/**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */;_proto.handleInfixNodes=function handleInfixNodes(body){var overIndex=-1;var funcName;for(var i=0;i<body.length;i++){if(body[i].type==="infix"){if(overIndex!==-1){throw new src_ParseError("only one infix operator per group",body[i].token);}overIndex=i;funcName=body[i].replaceWith;}}if(overIndex!==-1&&funcName){var numerNode;var denomNode;var numerBody=body.slice(0,overIndex);var denomBody=body.slice(overIndex+1);if(numerBody.length===1&&numerBody[0].type==="ordgroup"){numerNode=numerBody[0];}else {numerNode={type:"ordgroup",mode:this.mode,body:numerBody};}if(denomBody.length===1&&denomBody[0].type==="ordgroup"){denomNode=denomBody[0];}else {denomNode={type:"ordgroup",mode:this.mode,body:denomBody};}var node;if(funcName==="\\\\abovefrac"){node=this.callFunction(funcName,[numerNode,body[overIndex],denomNode],[]);}else {node=this.callFunction(funcName,[numerNode,denomNode],[]);}return [node];}else {return body;}}// The greediness of a superscript or subscript
;/**
   * Handle a subscript or superscript with nice errors.
   */_proto.handleSupSubscript=function handleSupSubscript(name){var symbolToken=this.fetch();var symbol=symbolToken.text;this.consume();var group=this.parseGroup(name,false,Parser.SUPSUB_GREEDINESS,undefined,undefined,true);// ignore spaces before sup/subscript argument
if(!group){throw new src_ParseError("Expected group after '"+symbol+"'",symbolToken);}return group;}/**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */;_proto.formatUnsupportedCmd=function formatUnsupportedCmd(text){var textordArray=[];for(var i=0;i<text.length;i++){textordArray.push({type:"textord",mode:"text",text:text[i]});}var textNode={type:"text",mode:this.mode,body:textordArray};var colorNode={type:"color",mode:this.mode,color:this.settings.errorColor,body:[textNode]};return colorNode;}/**
   * Parses a group with optional super/subscripts.
   */;_proto.parseAtom=function parseAtom(breakOnTokenText){// The body of an atom is an implicit group, so that things like
// \left(x\right)^2 work correctly.
var base=this.parseGroup("atom",false,null,breakOnTokenText);// In text mode, we don't have superscripts or subscripts
if(this.mode==="text"){return base;}// Note that base may be empty (i.e. null) at this point.
var superscript;var subscript;while(true){// Guaranteed in math mode, so eat any spaces first.
this.consumeSpaces();// Lex the first token
var lex=this.fetch();if(lex.text==="\\limits"||lex.text==="\\nolimits"){// We got a limit control
if(base&&base.type==="op"){var limits=lex.text==="\\limits";base.limits=limits;base.alwaysHandleSupSub=true;}else if(base&&base.type==="operatorname"&&base.alwaysHandleSupSub){var _limits=lex.text==="\\limits";base.limits=_limits;}else {throw new src_ParseError("Limit controls must follow a math operator",lex);}this.consume();}else if(lex.text==="^"){// We got a superscript start
if(superscript){throw new src_ParseError("Double superscript",lex);}superscript=this.handleSupSubscript("superscript");}else if(lex.text==="_"){// We got a subscript start
if(subscript){throw new src_ParseError("Double subscript",lex);}subscript=this.handleSupSubscript("subscript");}else if(lex.text==="'"){// We got a prime
if(superscript){throw new src_ParseError("Double superscript",lex);}var prime={type:"textord",mode:this.mode,text:"\\prime"};// Many primes can be grouped together, so we handle this here
var primes=[prime];this.consume();// Keep lexing tokens until we get something that's not a prime
while(this.fetch().text==="'"){// For each one, add another prime to the list
primes.push(prime);this.consume();}// If there's a superscript following the primes, combine that
// superscript in with the primes.
if(this.fetch().text==="^"){primes.push(this.handleSupSubscript("superscript"));}// Put everything into an ordgroup as the superscript
superscript={type:"ordgroup",mode:this.mode,body:primes};}else {// If it wasn't ^, _, or ', stop parsing super/subscripts
break;}}// Base must be set if superscript or subscript are set per logic above,
// but need to check here for type check to pass.
if(superscript||subscript){// If we got either a superscript or subscript, create a supsub
return {type:"supsub",mode:this.mode,base:base,sup:superscript,sub:subscript};}else {// Otherwise return the original body
return base;}}/**
   * Parses an entire function, including its base and all of its arguments.
   */;_proto.parseFunction=function parseFunction(breakOnTokenText,name,// For error reporting.
greediness){var token=this.fetch();var func=token.text;var funcData=src_functions[func];if(!funcData){return null;}this.consume();// consume command token
if(greediness!=null&&funcData.greediness<=greediness){throw new src_ParseError("Got function '"+func+"' with no arguments"+(name?" as "+name:""),token);}else if(this.mode==="text"&&!funcData.allowedInText){throw new src_ParseError("Can't use function '"+func+"' in text mode",token);}else if(this.mode==="math"&&funcData.allowedInMath===false){throw new src_ParseError("Can't use function '"+func+"' in math mode",token);}var _this$parseArguments=this.parseArguments(func,funcData),args=_this$parseArguments.args,optArgs=_this$parseArguments.optArgs;return this.callFunction(func,args,optArgs,token,breakOnTokenText);}/**
   * Call a function handler with a suitable context and arguments.
   */;_proto.callFunction=function callFunction(name,args,optArgs,token,breakOnTokenText){var context={funcName:name,parser:this,token:token,breakOnTokenText:breakOnTokenText};var func=src_functions[name];if(func&&func.handler){return func.handler(context,args,optArgs);}else {throw new src_ParseError("No function handler for "+name);}}/**
   * Parses the arguments of a function or environment
   */;_proto.parseArguments=function parseArguments(func,// Should look like "\name" or "\begin{name}".
funcData){var totalArgs=funcData.numArgs+funcData.numOptionalArgs;if(totalArgs===0){return {args:[],optArgs:[]};}var baseGreediness=funcData.greediness;var args=[];var optArgs=[];for(var i=0;i<totalArgs;i++){var argType=funcData.argTypes&&funcData.argTypes[i];var isOptional=i<funcData.numOptionalArgs;// Ignore spaces between arguments.  As the TeXbook says:
// "After you have said ‘\def\row#1#2{...}’, you are allowed to
//  put spaces between the arguments (e.g., ‘\row x n’), because
//  TeX doesn’t use single spaces as undelimited arguments."
var consumeSpaces=i>0&&!isOptional||// Also consume leading spaces in math mode, as parseSymbol
// won't know what to do with them.  This can only happen with
// macros, e.g. \frac\foo\foo where \foo expands to a space symbol.
// In LaTeX, the \foo's get treated as (blank) arguments.
// In KaTeX, for now, both spaces will get consumed.
// TODO(edemaine)
i===0&&!isOptional&&this.mode==="math";var arg=this.parseGroupOfType("argument to '"+func+"'",argType,isOptional,baseGreediness,consumeSpaces);if(!arg){if(isOptional){optArgs.push(null);continue;}throw new src_ParseError("Expected group after '"+func+"'",this.fetch());}(isOptional?optArgs:args).push(arg);}return {args:args,optArgs:optArgs};}/**
   * Parses a group when the mode is changing.
   */;_proto.parseGroupOfType=function parseGroupOfType(name,type,optional,greediness,consumeSpaces){switch(type){case"color":if(consumeSpaces){this.consumeSpaces();}return this.parseColorGroup(optional);case"size":if(consumeSpaces){this.consumeSpaces();}return this.parseSizeGroup(optional);case"url":return this.parseUrlGroup(optional,consumeSpaces);case"math":case"text":return this.parseGroup(name,optional,greediness,undefined,type,consumeSpaces);case"hbox":{// hbox argument type wraps the argument in the equivalent of
// \hbox, which is like \text but switching to \textstyle size.
var group=this.parseGroup(name,optional,greediness,undefined,"text",consumeSpaces);if(!group){return group;}var styledGroup={type:"styling",mode:group.mode,body:[group],style:"text"// simulate \textstyle
};return styledGroup;}case"raw":{if(consumeSpaces){this.consumeSpaces();}if(optional&&this.fetch().text==="{"){return null;}var token=this.parseStringGroup("raw",optional,true);if(token){return {type:"raw",mode:"text",string:token.text};}else {throw new src_ParseError("Expected raw group",this.fetch());}}case"original":case null:case undefined:return this.parseGroup(name,optional,greediness,undefined,undefined,consumeSpaces);default:throw new src_ParseError("Unknown group type as "+name,this.fetch());}}/**
   * Discard any space tokens, fetching the next non-space token.
   */;_proto.consumeSpaces=function consumeSpaces(){while(this.fetch().text===" "){this.consume();}}/**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */;_proto.parseStringGroup=function parseStringGroup(modeName,// Used to describe the mode in error messages.
optional,raw){var groupBegin=optional?"[":"{";var groupEnd=optional?"]":"}";var beginToken=this.fetch();if(beginToken.text!==groupBegin){if(optional){return null;}else if(raw&&beginToken.text!=="EOF"&&/[^{}[\]]/.test(beginToken.text)){this.consume();return beginToken;}}var outerMode=this.mode;this.mode="text";this.expect(groupBegin);var str="";var firstToken=this.fetch();var nested=0;// allow nested braces in raw string group
var lastToken=firstToken;var nextToken;while((nextToken=this.fetch()).text!==groupEnd||raw&&nested>0){switch(nextToken.text){case"EOF":throw new src_ParseError("Unexpected end of input in "+modeName,firstToken.range(lastToken,str));case groupBegin:nested++;break;case groupEnd:nested--;break;}lastToken=nextToken;str+=lastToken.text;this.consume();}this.expect(groupEnd);this.mode=outerMode;return firstToken.range(lastToken,str);}/**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */;_proto.parseRegexGroup=function parseRegexGroup(regex,modeName){var outerMode=this.mode;this.mode="text";var firstToken=this.fetch();var lastToken=firstToken;var str="";var nextToken;while((nextToken=this.fetch()).text!=="EOF"&&regex.test(str+nextToken.text)){lastToken=nextToken;str+=lastToken.text;this.consume();}if(str===""){throw new src_ParseError("Invalid "+modeName+": '"+firstToken.text+"'",firstToken);}this.mode=outerMode;return firstToken.range(lastToken,str);}/**
   * Parses a color description.
   */;_proto.parseColorGroup=function parseColorGroup(optional){var res=this.parseStringGroup("color",optional);if(!res){return null;}var match=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);if(!match){throw new src_ParseError("Invalid color: '"+res.text+"'",res);}var color=match[0];if(/^[0-9a-f]{6}$/i.test(color)){// We allow a 6-digit HTML color spec without a leading "#".
// This follows the xcolor package's HTML color model.
// Predefined color names are all missed by this RegEx pattern.
color="#"+color;}return {type:"color-token",mode:this.mode,color:color};}/**
   * Parses a size specification, consisting of magnitude and unit.
   */;_proto.parseSizeGroup=function parseSizeGroup(optional){var res;var isBlank=false;if(!optional&&this.fetch().text!=="{"){res=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size");}else {res=this.parseStringGroup("size",optional);}if(!res){return null;}if(!optional&&res.text.length===0){// Because we've tested for what is !optional, this block won't
// affect \kern, \hspace, etc. It will capture the mandatory arguments
// to \genfrac and \above.
res.text="0pt";// Enable \above{}
isBlank=true;// This is here specifically for \genfrac
}var match=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);if(!match){throw new src_ParseError("Invalid size: '"+res.text+"'",res);}var data={number:+(match[1]+match[2]),// sign + magnitude, cast to number
unit:match[3]};if(!validUnit(data)){throw new src_ParseError("Invalid unit: '"+data.unit+"'",res);}return {type:"size",mode:this.mode,value:data,isBlank:isBlank};}/**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */;_proto.parseUrlGroup=function parseUrlGroup(optional,consumeSpaces){this.gullet.lexer.setCatcode("%",13);// active character
var res=this.parseStringGroup("url",optional,true);// get raw string
this.gullet.lexer.setCatcode("%",14);// comment character
if(!res){return null;}// hyperref package allows backslashes alone in href, but doesn't
// generate valid links in such cases; we interpret this as
// "undefined" behaviour, and keep them as-is. Some browser will
// replace backslashes with forward slashes.
var url=res.text.replace(/\\([#$%&~_^{}])/g,'$1');return {type:"url",mode:this.mode,url:url};}/**
   * If `optional` is false or absent, this parses an ordinary group,
   * which is either a single nucleus (like "x") or an expression
   * in braces (like "{x+y}") or an implicit group, a group that starts
   * at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   * If `optional` is true, it parses either a bracket-delimited expression
   * (like "[x+y]") or returns null to indicate the absence of a
   * bracket-enclosed group.
   * If `mode` is present, switches to that mode while parsing the group,
   * and switches back after.
   */;_proto.parseGroup=function parseGroup(name,// For error reporting.
optional,greediness,breakOnTokenText,mode,consumeSpaces){// Switch to specified mode
var outerMode=this.mode;if(mode){this.switchMode(mode);}// Consume spaces if requested, crucially *after* we switch modes,
// so that the next non-space token is parsed in the correct mode.
if(consumeSpaces){this.consumeSpaces();}// Get first token
var firstToken=this.fetch();var text=firstToken.text;var result;// Try to parse an open brace or \begingroup
if(optional?text==="[":text==="{"||text==="\\begingroup"){this.consume();var groupEnd=Parser.endOfGroup[text];// Start a new group namespace
this.gullet.beginGroup();// If we get a brace, parse an expression
var expression=this.parseExpression(false,groupEnd);var lastToken=this.fetch();// Check that we got a matching closing brace
this.expect(groupEnd);// End group namespace
this.gullet.endGroup();result={type:"ordgroup",mode:this.mode,loc:SourceLocation.range(firstToken,lastToken),body:expression,// A group formed by \begingroup...\endgroup is a semi-simple group
// which doesn't affect spacing in math mode, i.e., is transparent.
// https://tex.stackexchange.com/questions/1930/when-should-one-
// use-begingroup-instead-of-bgroup
semisimple:text==="\\begingroup"||undefined};}else if(optional){// Return nothing for an optional group
result=null;}else {// If there exists a function with this name, parse the function.
// Otherwise, just return a nucleus
result=this.parseFunction(breakOnTokenText,name,greediness)||this.parseSymbol();if(result==null&&text[0]==="\\"&&!implicitCommands.hasOwnProperty(text)){if(this.settings.throwOnError){throw new src_ParseError("Undefined control sequence: "+text,firstToken);}result=this.formatUnsupportedCmd(text);this.consume();}}// Switch mode back
if(mode){this.switchMode(outerMode);}return result;}/**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */;_proto.formLigatures=function formLigatures(group){var n=group.length-1;for(var i=0;i<n;++i){var a=group[i];// $FlowFixMe: Not every node type has a `text` property.
var v=a.text;if(v==="-"&&group[i+1].text==="-"){if(i+1<n&&group[i+2].text==="-"){group.splice(i,3,{type:"textord",mode:"text",loc:SourceLocation.range(a,group[i+2]),text:"---"});n-=2;}else {group.splice(i,2,{type:"textord",mode:"text",loc:SourceLocation.range(a,group[i+1]),text:"--"});n-=1;}}if((v==="'"||v==="`")&&group[i+1].text===v){group.splice(i,2,{type:"textord",mode:"text",loc:SourceLocation.range(a,group[i+1]),text:v+v});n-=1;}}}/**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */;_proto.parseSymbol=function parseSymbol(){var nucleus=this.fetch();var text=nucleus.text;if(/^\\verb[^a-zA-Z]/.test(text)){this.consume();var arg=text.slice(5);var star=arg.charAt(0)==="*";if(star){arg=arg.slice(1);}// Lexer's tokenRegex is constructed to always have matching
// first/last characters.
if(arg.length<2||arg.charAt(0)!==arg.slice(-1)){throw new src_ParseError("\\verb assertion failed --\n                    please report what input caused this bug");}arg=arg.slice(1,-1);// remove first and last char
return {type:"verb",mode:"text",body:arg,star:star};}// At this point, we should have a symbol, possibly with accents.
// First expand any accented base symbol according to unicodeSymbols.
if(unicodeSymbols.hasOwnProperty(text[0])&&!src_symbols[this.mode][text[0]]){// This behavior is not strict (XeTeX-compatible) in math mode.
if(this.settings.strict&&this.mode==="math"){this.settings.reportNonstrict("unicodeTextInMathMode","Accented Unicode text character \""+text[0]+"\" used in "+"math mode",nucleus);}text=unicodeSymbols[text[0]]+text.substr(1);}// Strip off any combining characters
var match=combiningDiacriticalMarksEndRegex.exec(text);if(match){text=text.substring(0,match.index);if(text==='i'){text="\u0131";// dotless i, in math and text mode
}else if(text==='j'){text="\u0237";// dotless j, in math and text mode
}}// Recognize base symbol
var symbol;if(src_symbols[this.mode][text]){if(this.settings.strict&&this.mode==='math'&&extraLatin.indexOf(text)>=0){this.settings.reportNonstrict("unicodeTextInMathMode","Latin-1/Unicode text character \""+text[0]+"\" used in "+"math mode",nucleus);}var group=src_symbols[this.mode][text].group;var loc=SourceLocation.range(nucleus);var s;if(ATOMS.hasOwnProperty(group)){// $FlowFixMe
var family=group;s={type:"atom",mode:this.mode,family:family,loc:loc,text:text};}else {// $FlowFixMe
s={type:group,mode:this.mode,loc:loc,text:text};}symbol=s;}else if(text.charCodeAt(0)>=0x80){// no symbol for e.g. ^
if(this.settings.strict){if(!supportedCodepoint(text.charCodeAt(0))){this.settings.reportNonstrict("unknownSymbol","Unrecognized Unicode character \""+text[0]+"\""+(" ("+text.charCodeAt(0)+")"),nucleus);}else if(this.mode==="math"){this.settings.reportNonstrict("unicodeTextInMathMode","Unicode text character \""+text[0]+"\" used in math mode",nucleus);}}// All nonmathematical Unicode characters are rendered as if they
// are in text mode (wrapped in \text) because that's what it
// takes to render them in LaTeX.  Setting `mode: this.mode` is
// another natural choice (the user requested math mode), but
// this makes it more difficult for getCharacterMetrics() to
// distinguish Unicode characters without metrics and those for
// which we want to simulate the letter M.
symbol={type:"textord",mode:"text",loc:SourceLocation.range(nucleus),text:text};}else {return null;// EOF, ^, _, {, }, etc.
}this.consume();// Transform combining characters into accents
if(match){for(var i=0;i<match[0].length;i++){var accent=match[0][i];if(!unicodeAccents[accent]){throw new src_ParseError("Unknown accent ' "+accent+"'",nucleus);}var command=unicodeAccents[accent][this.mode];if(!command){throw new src_ParseError("Accent "+accent+" unsupported in "+this.mode+" mode",nucleus);}symbol={type:"accent",mode:this.mode,loc:SourceLocation.range(nucleus),label:command,isStretchy:false,isShifty:true,base:symbol};}}return symbol;};return Parser;}();Parser_Parser.endOfExpression=["}","\\endgroup","\\end","\\right","&"];Parser_Parser.endOfGroup={"[":"]","{":"}","\\begingroup":"\\endgroup"/**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precendence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */};Parser_Parser.SUPSUB_GREEDINESS=1;// CONCATENATED MODULE: ./src/parseTree.js
/**
 * Provides a single function for parsing an expression using a Parser
 * TODO(emily): Remove this
 */ /**
 * Parses an expression using a Parser, then returns the parsed result.
 */var parseTree_parseTree=function parseTree(toParse,settings){if(!(typeof toParse==='string'||toParse instanceof String)){throw new TypeError('KaTeX can only parse string typed expression');}var parser=new Parser_Parser(toParse,settings);// Blank out any \df@tag to avoid spurious "Duplicate \tag" errors
delete parser.gullet.macros.current["\\df@tag"];var tree=parser.parse();// If the input used \tag, it will set the \df@tag macro to the tag.
// In this case, we separately parse the tag and wrap the tree.
if(parser.gullet.macros.get("\\df@tag")){if(!settings.displayMode){throw new src_ParseError("\\tag works only in display equations");}parser.gullet.feed("\\df@tag");tree=[{type:"tag",mode:"text",body:tree,tag:parser.parse()}];}return tree;};/* harmony default export */var src_parseTree=parseTree_parseTree;// CONCATENATED MODULE: ./katex.js
/* eslint no-console:0 */ /**
 * This is the main entry point for KaTeX. Here, we expose functions for
 * rendering expressions either to DOM nodes or to markup strings.
 *
 * We also expose the ParseError class to check if errors thrown from KaTeX are
 * errors in the expression, or errors in javascript handling.
 */ /**
 * Parse and build an expression, and place that expression in the DOM node
 * given.
 */var katex_render=function render(expression,baseNode,options){baseNode.textContent="";var node=katex_renderToDomTree(expression,options).toNode();baseNode.appendChild(node);};// KaTeX's styles don't work properly in quirks mode. Print out an error, and
// disable rendering.
if(typeof document!=="undefined"){if(document.compatMode!=="CSS1Compat"){typeof console!=="undefined"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your "+"website has a suitable doctype.");katex_render=function render(){throw new src_ParseError("KaTeX doesn't work in quirks mode.");};}}/**
 * Parse and build an expression, and return the markup for that.
 */var renderToString=function renderToString(expression,options){var markup=katex_renderToDomTree(expression,options).toMarkup();return markup;};/**
 * Parse an expression and return the parse tree.
 */var katex_generateParseTree=function generateParseTree(expression,options){var settings=new Settings_Settings(options);return src_parseTree(expression,settings);};/**
 * If the given error is a KaTeX ParseError and options.throwOnError is false,
 * renders the invalid LaTeX as a span with hover title giving the KaTeX
 * error message.  Otherwise, simply throws the error.
 */var katex_renderError=function renderError(error,expression,options){if(options.throwOnError||!(error instanceof src_ParseError)){throw error;}var node=buildCommon.makeSpan(["katex-error"],[new domTree_SymbolNode(expression)]);node.setAttribute("title",error.toString());node.setAttribute("style","color:"+options.errorColor);return node;};/**
 * Generates and returns the katex build tree. This is used for advanced
 * use cases (like rendering to custom output).
 */var katex_renderToDomTree=function renderToDomTree(expression,options){var settings=new Settings_Settings(options);try{var tree=src_parseTree(expression,settings);return buildTree_buildTree(tree,expression,settings);}catch(error){return katex_renderError(error,expression,settings);}};/**
 * Generates and returns the katex build tree, with just HTML (no MathML).
 * This is used for advanced use cases (like rendering to custom output).
 */var katex_renderToHTMLTree=function renderToHTMLTree(expression,options){var settings=new Settings_Settings(options);try{var tree=src_parseTree(expression,settings);return buildTree_buildHTMLTree(tree,expression,settings);}catch(error){return katex_renderError(error,expression,settings);}};/* harmony default export */var katex_0={/**
   * Current KaTeX version
   */version:"0.12.0",/**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */render:katex_render,/**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */renderToString:renderToString,/**
   * KaTeX error, usually during parsing.
   */ParseError:src_ParseError,/**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */__parse:katex_generateParseTree,/**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */__renderToDomTree:katex_renderToDomTree,/**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */__renderToHTMLTree:katex_renderToHTMLTree,/**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */__setFontMetrics:setFontMetrics,/**
   * adds a new symbol to builtin symbols table
   */__defineSymbol:defineSymbol,/**
   * adds a new macro to builtin macro list
   */__defineMacro:defineMacro,/**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */__domTree:{Span:domTree_Span,Anchor:domTree_Anchor,SymbolNode:domTree_SymbolNode,SvgNode:SvgNode,PathNode:domTree_PathNode,LineNode:LineNode}};// CONCATENATED MODULE: ./katex.webpack.js
/**
 * This is the webpack entry point for KaTeX. As ECMAScript, flow[1] and jest[2]
 * doesn't support CSS modules natively, a separate entry point is used and
 * it is not flowtyped.
 *
 * [1] https://gist.github.com/lambdahands/d19e0da96285b749f0ef
 * [2] https://facebook.github.io/jest/docs/en/webpack.html
 */ /* harmony default export */__webpack_exports__["default"]=katex_0;/***/}/******/])["default"]);});});

var browser = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory(exports, katex) ;
  })(commonjsGlobal, function (exports, require$$0) {

    function _interopDefaultLegacy(e) {
      return e && _typeof(e) === 'object' && 'default' in e ? e['default'] : e;
    }

    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

    function _extends$1() {
      _extends$1 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends$1.apply(this, arguments);
    }
    /*! markmap-common v0.1.4 | MIT License */


    var Hook = /*#__PURE__*/function () {
      function Hook() {
        _classCallCheck(this, Hook);

        this.listeners = [];
      }

      _createClass$1(Hook, [{
        key: "tap",
        value: function tap(fn) {
          var _this = this;

          this.listeners.push(fn);
          return function () {
            return _this.revoke(fn);
          };
        }
      }, {
        key: "revoke",
        value: function revoke(fn) {
          var i = this.listeners.indexOf(fn);
          if (i >= 0) this.listeners.splice(i, 1);
        }
      }, {
        key: "revokeAll",
        value: function revokeAll() {
          this.listeners.splice(0);
        }
      }, {
        key: "call",
        value: function call() {
          var _iterator = _createForOfIteratorHelper(this.listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var fn = _step.value;
              fn.apply(void 0, arguments);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return Hook;
    }();

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function escapeHtml$1(html) {
      return html.replace(/[&<"]/g, function (m) {
        return {
          '&': '&amp;',
          '<': '&lt;',
          '"': '&quot;'
        }[m];
      });
    }

    function escapeScript(content) {
      return content.replace(/<(\/script>)/g, '\\x3c$2');
    }

    function htmlOpen(tagName, attrs) {
      var attrStr = attrs ? Object.entries(attrs).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (value == null || value === false) return;
        key = " ".concat(escapeHtml$1(key));
        if (value === true) return key;
        return "".concat(key, "=\"").concat(escapeHtml$1(value), "\"");
      }).filter(Boolean).join('') : '';
      return "<".concat(tagName).concat(attrStr, ">");
    }

    function htmlClose(tagName) {
      return "</".concat(tagName, ">");
    }

    function wrapHtml(tagName, content, attrs) {
      if (content == null) return htmlOpen(tagName, attrs);
      return htmlOpen(tagName, attrs) + (content || '') + htmlClose(tagName);
    }

    function buildCode(fn, args) {
      var params = args.map(function (arg) {
        if (typeof arg === 'function') return arg.toString();
        return JSON.stringify(arg != null ? arg : null);
      }).join(',');
      return "(".concat(fn.toString(), ")(").concat(params, ")");
    }

    function persistJS(items, context) {
      return items.map(function (item) {
        if (item.type === 'script') return wrapHtml('script', '', item.data);

        if (item.type === 'iife') {
          var _item$data3 = item.data,
              fn = _item$data3.fn,
              getParams = _item$data3.getParams;
          return wrapHtml('script', escapeScript(buildCode(fn, (getParams == null ? void 0 : getParams(context)) || [])));
        }

        return '';
      });
    }

    function persistCSS(items) {
      return items.map(function (item) {
        if (item.type === 'stylesheet') {
          return wrapHtml('link', null, _extends({
            rel: 'stylesheet'
          }, item.data));
        }
        /* else if (item.type === 'style') */


        return wrapHtml('style', item.data);
      });
    }

    Math.random().toString(36).slice(2, 8);

    function wrapFunction(fn, _ref3) {
      var before = _ref3.before,
          after = _ref3.after;
      return function wrapped() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var ctx = {
          args: args
        };

        try {
          if (before) before(ctx);
        } catch (_unused) {// ignore
        }

        ctx.result = fn.apply(void 0, args);

        try {
          if (after) after(ctx);
        } catch (_unused2) {// ignore
        }

        return ctx.result;
      };
    }

    function memoize(fn) {
      var cache = {};
      return function memoized() {
        var key = "".concat(arguments.length <= 0 ? undefined : arguments[0]);
        var data = cache[key];

        if (!data) {
          data = {
            value: fn.apply(void 0, arguments)
          };
          cache[key] = data;
        }

        return data.value;
      };
    }

    function createElement(tagName, props, attrs) {
      var el = document.createElement(tagName);

      if (props) {
        Object.entries(props).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              key = _ref5[0],
              value = _ref5[1];

          el[key] = value;
        });
      }

      if (attrs) {
        Object.entries(attrs).forEach(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              key = _ref7[0],
              value = _ref7[1];

          el.setAttribute(key, value);
        });
      }

      return el;
    }

    var memoizedPreloadJS = memoize(function (url) {
      document.head.append(createElement('link', {
        rel: 'preload',
        as: 'script',
        href: url
      }));
    });

    function loadJSItem(item, context) {
      if (item.type === 'script') {
        return new Promise(function (resolve, reject) {
          var _item$data;

          document.head.append(createElement('script', _extends({}, item.data, {
            onload: resolve,
            onerror: reject
          }))); // Run inline script synchronously

          if (!((_item$data = item.data) != null && _item$data.src)) resolve();
        });
      }

      if (item.type === 'iife') {
        var _item$data4 = item.data,
            fn = _item$data4.fn,
            getParams = _item$data4.getParams;
        fn.apply(void 0, _toConsumableArray((getParams == null ? void 0 : getParams(context)) || []));
      }
    }

    function loadJS(_x, _x2) {
      return _loadJS.apply(this, arguments);
    }

    function _loadJS() {
      _loadJS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(items, context) {
        var needPreload, _iterator5, _step5, item;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                needPreload = items.filter(function (item) {
                  var _item$data2;

                  return item.type === 'script' && ((_item$data2 = item.data) == null ? void 0 : _item$data2.src);
                });
                if (needPreload.length > 1) needPreload.forEach(function (item) {
                  return memoizedPreloadJS(item.data.src);
                });
                context = _extends({
                  getMarkmap: function getMarkmap() {
                    return window.markmap;
                  }
                }, context);
                _iterator5 = _createForOfIteratorHelper(items);
                _context.prev = 4;

                _iterator5.s();

              case 6:
                if ((_step5 = _iterator5.n()).done) {
                  _context.next = 12;
                  break;
                }

                item = _step5.value;
                _context.next = 10;
                return loadJSItem(item, context);

              case 10:
                _context.next = 6;
                break;

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);

                _iterator5.e(_context.t0);

              case 17:
                _context.prev = 17;

                _iterator5.f();

                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 14, 17, 20]]);
      }));
      return _loadJS.apply(this, arguments);
    }

    var template = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n<!--CSS-->\n</head>\n<body>\n<svg id=\"mindmap\"></svg>\n<!--JS-->\n</body>\n</html>\n";
    var BASE_JS = ["https://cdn.jsdelivr.net/npm/d3@".concat("6.6.0"), "https://cdn.jsdelivr.net/npm/markmap-view@".concat("0.2.3")].map(function (src) {
      return {
        type: 'script',
        data: {
          src: src
        }
      };
    });

    function fillTemplate(data, assets, extra) {
      if (typeof extra === 'function') {
        extra = {
          getOptions: extra
        };
      }

      extra = _extends$1({
        baseJs: BASE_JS
      }, extra);
      var scripts = assets.scripts,
          styles = assets.styles;

      var cssList = _toConsumableArray(styles ? persistCSS(styles) : []);

      var context = {
        getMarkmap: function getMarkmap() {
          return window.markmap;
        },
        getOptions: extra.getOptions,
        data: data
      };
      var jsList = [].concat(_toConsumableArray(persistJS(extra.baseJs)), _toConsumableArray(persistJS([].concat(_toConsumableArray(scripts || []), [{
        type: 'iife',
        data: {
          fn: function fn(getMarkmap, getOptions, data) {
            var _getMarkmap = getMarkmap(),
                Markmap = _getMarkmap.Markmap;

            window.mm = Markmap.create('svg#mindmap', getOptions == null ? void 0 : getOptions(), data);
          },
          getParams: function getParams(_ref8) {
            var getMarkmap = _ref8.getMarkmap,
                getOptions = _ref8.getOptions,
                data = _ref8.data;
            return [getMarkmap, getOptions, data];
          }
        }
      }]), context)));
      var html = template.replace('<!--CSS-->', function () {
        return cssList.join('');
      }).replace('<!--JS-->', function () {
        return jsList.join('');
      });
      return html;
    } // List of valid entities
    //
    // Generate with ./support/entities.js script
    //

    /*eslint quotes:0*/


    var entities = {
      "Aacute": "\xC1",
      "aacute": "\xE1",
      "Abreve": "\u0102",
      "abreve": "\u0103",
      "ac": "\u223E",
      "acd": "\u223F",
      "acE": "\u223E\u0333",
      "Acirc": "\xC2",
      "acirc": "\xE2",
      "acute": "\xB4",
      "Acy": "\u0410",
      "acy": "\u0430",
      "AElig": "\xC6",
      "aelig": "\xE6",
      "af": "\u2061",
      "Afr": "\uD835\uDD04",
      "afr": "\uD835\uDD1E",
      "Agrave": "\xC0",
      "agrave": "\xE0",
      "alefsym": "\u2135",
      "aleph": "\u2135",
      "Alpha": "\u0391",
      "alpha": "\u03B1",
      "Amacr": "\u0100",
      "amacr": "\u0101",
      "amalg": "\u2A3F",
      "AMP": "&",
      "amp": "&",
      "And": "\u2A53",
      "and": "\u2227",
      "andand": "\u2A55",
      "andd": "\u2A5C",
      "andslope": "\u2A58",
      "andv": "\u2A5A",
      "ang": "\u2220",
      "ange": "\u29A4",
      "angle": "\u2220",
      "angmsd": "\u2221",
      "angmsdaa": "\u29A8",
      "angmsdab": "\u29A9",
      "angmsdac": "\u29AA",
      "angmsdad": "\u29AB",
      "angmsdae": "\u29AC",
      "angmsdaf": "\u29AD",
      "angmsdag": "\u29AE",
      "angmsdah": "\u29AF",
      "angrt": "\u221F",
      "angrtvb": "\u22BE",
      "angrtvbd": "\u299D",
      "angsph": "\u2222",
      "angst": "\xC5",
      "angzarr": "\u237C",
      "Aogon": "\u0104",
      "aogon": "\u0105",
      "Aopf": "\uD835\uDD38",
      "aopf": "\uD835\uDD52",
      "ap": "\u2248",
      "apacir": "\u2A6F",
      "apE": "\u2A70",
      "ape": "\u224A",
      "apid": "\u224B",
      "apos": "'",
      "ApplyFunction": "\u2061",
      "approx": "\u2248",
      "approxeq": "\u224A",
      "Aring": "\xC5",
      "aring": "\xE5",
      "Ascr": "\uD835\uDC9C",
      "ascr": "\uD835\uDCB6",
      "Assign": "\u2254",
      "ast": "*",
      "asymp": "\u2248",
      "asympeq": "\u224D",
      "Atilde": "\xC3",
      "atilde": "\xE3",
      "Auml": "\xC4",
      "auml": "\xE4",
      "awconint": "\u2233",
      "awint": "\u2A11",
      "backcong": "\u224C",
      "backepsilon": "\u03F6",
      "backprime": "\u2035",
      "backsim": "\u223D",
      "backsimeq": "\u22CD",
      "Backslash": "\u2216",
      "Barv": "\u2AE7",
      "barvee": "\u22BD",
      "Barwed": "\u2306",
      "barwed": "\u2305",
      "barwedge": "\u2305",
      "bbrk": "\u23B5",
      "bbrktbrk": "\u23B6",
      "bcong": "\u224C",
      "Bcy": "\u0411",
      "bcy": "\u0431",
      "bdquo": "\u201E",
      "becaus": "\u2235",
      "Because": "\u2235",
      "because": "\u2235",
      "bemptyv": "\u29B0",
      "bepsi": "\u03F6",
      "bernou": "\u212C",
      "Bernoullis": "\u212C",
      "Beta": "\u0392",
      "beta": "\u03B2",
      "beth": "\u2136",
      "between": "\u226C",
      "Bfr": "\uD835\uDD05",
      "bfr": "\uD835\uDD1F",
      "bigcap": "\u22C2",
      "bigcirc": "\u25EF",
      "bigcup": "\u22C3",
      "bigodot": "\u2A00",
      "bigoplus": "\u2A01",
      "bigotimes": "\u2A02",
      "bigsqcup": "\u2A06",
      "bigstar": "\u2605",
      "bigtriangledown": "\u25BD",
      "bigtriangleup": "\u25B3",
      "biguplus": "\u2A04",
      "bigvee": "\u22C1",
      "bigwedge": "\u22C0",
      "bkarow": "\u290D",
      "blacklozenge": "\u29EB",
      "blacksquare": "\u25AA",
      "blacktriangle": "\u25B4",
      "blacktriangledown": "\u25BE",
      "blacktriangleleft": "\u25C2",
      "blacktriangleright": "\u25B8",
      "blank": "\u2423",
      "blk12": "\u2592",
      "blk14": "\u2591",
      "blk34": "\u2593",
      "block": "\u2588",
      "bne": "=\u20E5",
      "bnequiv": "\u2261\u20E5",
      "bNot": "\u2AED",
      "bnot": "\u2310",
      "Bopf": "\uD835\uDD39",
      "bopf": "\uD835\uDD53",
      "bot": "\u22A5",
      "bottom": "\u22A5",
      "bowtie": "\u22C8",
      "boxbox": "\u29C9",
      "boxDL": "\u2557",
      "boxDl": "\u2556",
      "boxdL": "\u2555",
      "boxdl": "\u2510",
      "boxDR": "\u2554",
      "boxDr": "\u2553",
      "boxdR": "\u2552",
      "boxdr": "\u250C",
      "boxH": "\u2550",
      "boxh": "\u2500",
      "boxHD": "\u2566",
      "boxHd": "\u2564",
      "boxhD": "\u2565",
      "boxhd": "\u252C",
      "boxHU": "\u2569",
      "boxHu": "\u2567",
      "boxhU": "\u2568",
      "boxhu": "\u2534",
      "boxminus": "\u229F",
      "boxplus": "\u229E",
      "boxtimes": "\u22A0",
      "boxUL": "\u255D",
      "boxUl": "\u255C",
      "boxuL": "\u255B",
      "boxul": "\u2518",
      "boxUR": "\u255A",
      "boxUr": "\u2559",
      "boxuR": "\u2558",
      "boxur": "\u2514",
      "boxV": "\u2551",
      "boxv": "\u2502",
      "boxVH": "\u256C",
      "boxVh": "\u256B",
      "boxvH": "\u256A",
      "boxvh": "\u253C",
      "boxVL": "\u2563",
      "boxVl": "\u2562",
      "boxvL": "\u2561",
      "boxvl": "\u2524",
      "boxVR": "\u2560",
      "boxVr": "\u255F",
      "boxvR": "\u255E",
      "boxvr": "\u251C",
      "bprime": "\u2035",
      "Breve": "\u02D8",
      "breve": "\u02D8",
      "brvbar": "\xA6",
      "Bscr": "\u212C",
      "bscr": "\uD835\uDCB7",
      "bsemi": "\u204F",
      "bsim": "\u223D",
      "bsime": "\u22CD",
      "bsol": "\\",
      "bsolb": "\u29C5",
      "bsolhsub": "\u27C8",
      "bull": "\u2022",
      "bullet": "\u2022",
      "bump": "\u224E",
      "bumpE": "\u2AAE",
      "bumpe": "\u224F",
      "Bumpeq": "\u224E",
      "bumpeq": "\u224F",
      "Cacute": "\u0106",
      "cacute": "\u0107",
      "Cap": "\u22D2",
      "cap": "\u2229",
      "capand": "\u2A44",
      "capbrcup": "\u2A49",
      "capcap": "\u2A4B",
      "capcup": "\u2A47",
      "capdot": "\u2A40",
      "CapitalDifferentialD": "\u2145",
      "caps": "\u2229\uFE00",
      "caret": "\u2041",
      "caron": "\u02C7",
      "Cayleys": "\u212D",
      "ccaps": "\u2A4D",
      "Ccaron": "\u010C",
      "ccaron": "\u010D",
      "Ccedil": "\xC7",
      "ccedil": "\xE7",
      "Ccirc": "\u0108",
      "ccirc": "\u0109",
      "Cconint": "\u2230",
      "ccups": "\u2A4C",
      "ccupssm": "\u2A50",
      "Cdot": "\u010A",
      "cdot": "\u010B",
      "cedil": "\xB8",
      "Cedilla": "\xB8",
      "cemptyv": "\u29B2",
      "cent": "\xA2",
      "CenterDot": "\xB7",
      "centerdot": "\xB7",
      "Cfr": "\u212D",
      "cfr": "\uD835\uDD20",
      "CHcy": "\u0427",
      "chcy": "\u0447",
      "check": "\u2713",
      "checkmark": "\u2713",
      "Chi": "\u03A7",
      "chi": "\u03C7",
      "cir": "\u25CB",
      "circ": "\u02C6",
      "circeq": "\u2257",
      "circlearrowleft": "\u21BA",
      "circlearrowright": "\u21BB",
      "circledast": "\u229B",
      "circledcirc": "\u229A",
      "circleddash": "\u229D",
      "CircleDot": "\u2299",
      "circledR": "\xAE",
      "circledS": "\u24C8",
      "CircleMinus": "\u2296",
      "CirclePlus": "\u2295",
      "CircleTimes": "\u2297",
      "cirE": "\u29C3",
      "cire": "\u2257",
      "cirfnint": "\u2A10",
      "cirmid": "\u2AEF",
      "cirscir": "\u29C2",
      "ClockwiseContourIntegral": "\u2232",
      "CloseCurlyDoubleQuote": "\u201D",
      "CloseCurlyQuote": "\u2019",
      "clubs": "\u2663",
      "clubsuit": "\u2663",
      "Colon": "\u2237",
      "colon": ":",
      "Colone": "\u2A74",
      "colone": "\u2254",
      "coloneq": "\u2254",
      "comma": ",",
      "commat": "@",
      "comp": "\u2201",
      "compfn": "\u2218",
      "complement": "\u2201",
      "complexes": "\u2102",
      "cong": "\u2245",
      "congdot": "\u2A6D",
      "Congruent": "\u2261",
      "Conint": "\u222F",
      "conint": "\u222E",
      "ContourIntegral": "\u222E",
      "Copf": "\u2102",
      "copf": "\uD835\uDD54",
      "coprod": "\u2210",
      "Coproduct": "\u2210",
      "COPY": "\xA9",
      "copy": "\xA9",
      "copysr": "\u2117",
      "CounterClockwiseContourIntegral": "\u2233",
      "crarr": "\u21B5",
      "Cross": "\u2A2F",
      "cross": "\u2717",
      "Cscr": "\uD835\uDC9E",
      "cscr": "\uD835\uDCB8",
      "csub": "\u2ACF",
      "csube": "\u2AD1",
      "csup": "\u2AD0",
      "csupe": "\u2AD2",
      "ctdot": "\u22EF",
      "cudarrl": "\u2938",
      "cudarrr": "\u2935",
      "cuepr": "\u22DE",
      "cuesc": "\u22DF",
      "cularr": "\u21B6",
      "cularrp": "\u293D",
      "Cup": "\u22D3",
      "cup": "\u222A",
      "cupbrcap": "\u2A48",
      "CupCap": "\u224D",
      "cupcap": "\u2A46",
      "cupcup": "\u2A4A",
      "cupdot": "\u228D",
      "cupor": "\u2A45",
      "cups": "\u222A\uFE00",
      "curarr": "\u21B7",
      "curarrm": "\u293C",
      "curlyeqprec": "\u22DE",
      "curlyeqsucc": "\u22DF",
      "curlyvee": "\u22CE",
      "curlywedge": "\u22CF",
      "curren": "\xA4",
      "curvearrowleft": "\u21B6",
      "curvearrowright": "\u21B7",
      "cuvee": "\u22CE",
      "cuwed": "\u22CF",
      "cwconint": "\u2232",
      "cwint": "\u2231",
      "cylcty": "\u232D",
      "Dagger": "\u2021",
      "dagger": "\u2020",
      "daleth": "\u2138",
      "Darr": "\u21A1",
      "dArr": "\u21D3",
      "darr": "\u2193",
      "dash": "\u2010",
      "Dashv": "\u2AE4",
      "dashv": "\u22A3",
      "dbkarow": "\u290F",
      "dblac": "\u02DD",
      "Dcaron": "\u010E",
      "dcaron": "\u010F",
      "Dcy": "\u0414",
      "dcy": "\u0434",
      "DD": "\u2145",
      "dd": "\u2146",
      "ddagger": "\u2021",
      "ddarr": "\u21CA",
      "DDotrahd": "\u2911",
      "ddotseq": "\u2A77",
      "deg": "\xB0",
      "Del": "\u2207",
      "Delta": "\u0394",
      "delta": "\u03B4",
      "demptyv": "\u29B1",
      "dfisht": "\u297F",
      "Dfr": "\uD835\uDD07",
      "dfr": "\uD835\uDD21",
      "dHar": "\u2965",
      "dharl": "\u21C3",
      "dharr": "\u21C2",
      "DiacriticalAcute": "\xB4",
      "DiacriticalDot": "\u02D9",
      "DiacriticalDoubleAcute": "\u02DD",
      "DiacriticalGrave": "`",
      "DiacriticalTilde": "\u02DC",
      "diam": "\u22C4",
      "Diamond": "\u22C4",
      "diamond": "\u22C4",
      "diamondsuit": "\u2666",
      "diams": "\u2666",
      "die": "\xA8",
      "DifferentialD": "\u2146",
      "digamma": "\u03DD",
      "disin": "\u22F2",
      "div": "\xF7",
      "divide": "\xF7",
      "divideontimes": "\u22C7",
      "divonx": "\u22C7",
      "DJcy": "\u0402",
      "djcy": "\u0452",
      "dlcorn": "\u231E",
      "dlcrop": "\u230D",
      "dollar": "$",
      "Dopf": "\uD835\uDD3B",
      "dopf": "\uD835\uDD55",
      "Dot": "\xA8",
      "dot": "\u02D9",
      "DotDot": "\u20DC",
      "doteq": "\u2250",
      "doteqdot": "\u2251",
      "DotEqual": "\u2250",
      "dotminus": "\u2238",
      "dotplus": "\u2214",
      "dotsquare": "\u22A1",
      "doublebarwedge": "\u2306",
      "DoubleContourIntegral": "\u222F",
      "DoubleDot": "\xA8",
      "DoubleDownArrow": "\u21D3",
      "DoubleLeftArrow": "\u21D0",
      "DoubleLeftRightArrow": "\u21D4",
      "DoubleLeftTee": "\u2AE4",
      "DoubleLongLeftArrow": "\u27F8",
      "DoubleLongLeftRightArrow": "\u27FA",
      "DoubleLongRightArrow": "\u27F9",
      "DoubleRightArrow": "\u21D2",
      "DoubleRightTee": "\u22A8",
      "DoubleUpArrow": "\u21D1",
      "DoubleUpDownArrow": "\u21D5",
      "DoubleVerticalBar": "\u2225",
      "DownArrow": "\u2193",
      "Downarrow": "\u21D3",
      "downarrow": "\u2193",
      "DownArrowBar": "\u2913",
      "DownArrowUpArrow": "\u21F5",
      "DownBreve": "\u0311",
      "downdownarrows": "\u21CA",
      "downharpoonleft": "\u21C3",
      "downharpoonright": "\u21C2",
      "DownLeftRightVector": "\u2950",
      "DownLeftTeeVector": "\u295E",
      "DownLeftVector": "\u21BD",
      "DownLeftVectorBar": "\u2956",
      "DownRightTeeVector": "\u295F",
      "DownRightVector": "\u21C1",
      "DownRightVectorBar": "\u2957",
      "DownTee": "\u22A4",
      "DownTeeArrow": "\u21A7",
      "drbkarow": "\u2910",
      "drcorn": "\u231F",
      "drcrop": "\u230C",
      "Dscr": "\uD835\uDC9F",
      "dscr": "\uD835\uDCB9",
      "DScy": "\u0405",
      "dscy": "\u0455",
      "dsol": "\u29F6",
      "Dstrok": "\u0110",
      "dstrok": "\u0111",
      "dtdot": "\u22F1",
      "dtri": "\u25BF",
      "dtrif": "\u25BE",
      "duarr": "\u21F5",
      "duhar": "\u296F",
      "dwangle": "\u29A6",
      "DZcy": "\u040F",
      "dzcy": "\u045F",
      "dzigrarr": "\u27FF",
      "Eacute": "\xC9",
      "eacute": "\xE9",
      "easter": "\u2A6E",
      "Ecaron": "\u011A",
      "ecaron": "\u011B",
      "ecir": "\u2256",
      "Ecirc": "\xCA",
      "ecirc": "\xEA",
      "ecolon": "\u2255",
      "Ecy": "\u042D",
      "ecy": "\u044D",
      "eDDot": "\u2A77",
      "Edot": "\u0116",
      "eDot": "\u2251",
      "edot": "\u0117",
      "ee": "\u2147",
      "efDot": "\u2252",
      "Efr": "\uD835\uDD08",
      "efr": "\uD835\uDD22",
      "eg": "\u2A9A",
      "Egrave": "\xC8",
      "egrave": "\xE8",
      "egs": "\u2A96",
      "egsdot": "\u2A98",
      "el": "\u2A99",
      "Element": "\u2208",
      "elinters": "\u23E7",
      "ell": "\u2113",
      "els": "\u2A95",
      "elsdot": "\u2A97",
      "Emacr": "\u0112",
      "emacr": "\u0113",
      "empty": "\u2205",
      "emptyset": "\u2205",
      "EmptySmallSquare": "\u25FB",
      "emptyv": "\u2205",
      "EmptyVerySmallSquare": "\u25AB",
      "emsp": "\u2003",
      "emsp13": "\u2004",
      "emsp14": "\u2005",
      "ENG": "\u014A",
      "eng": "\u014B",
      "ensp": "\u2002",
      "Eogon": "\u0118",
      "eogon": "\u0119",
      "Eopf": "\uD835\uDD3C",
      "eopf": "\uD835\uDD56",
      "epar": "\u22D5",
      "eparsl": "\u29E3",
      "eplus": "\u2A71",
      "epsi": "\u03B5",
      "Epsilon": "\u0395",
      "epsilon": "\u03B5",
      "epsiv": "\u03F5",
      "eqcirc": "\u2256",
      "eqcolon": "\u2255",
      "eqsim": "\u2242",
      "eqslantgtr": "\u2A96",
      "eqslantless": "\u2A95",
      "Equal": "\u2A75",
      "equals": "=",
      "EqualTilde": "\u2242",
      "equest": "\u225F",
      "Equilibrium": "\u21CC",
      "equiv": "\u2261",
      "equivDD": "\u2A78",
      "eqvparsl": "\u29E5",
      "erarr": "\u2971",
      "erDot": "\u2253",
      "Escr": "\u2130",
      "escr": "\u212F",
      "esdot": "\u2250",
      "Esim": "\u2A73",
      "esim": "\u2242",
      "Eta": "\u0397",
      "eta": "\u03B7",
      "ETH": "\xD0",
      "eth": "\xF0",
      "Euml": "\xCB",
      "euml": "\xEB",
      "euro": "\u20AC",
      "excl": "!",
      "exist": "\u2203",
      "Exists": "\u2203",
      "expectation": "\u2130",
      "ExponentialE": "\u2147",
      "exponentiale": "\u2147",
      "fallingdotseq": "\u2252",
      "Fcy": "\u0424",
      "fcy": "\u0444",
      "female": "\u2640",
      "ffilig": "\uFB03",
      "fflig": "\uFB00",
      "ffllig": "\uFB04",
      "Ffr": "\uD835\uDD09",
      "ffr": "\uD835\uDD23",
      "filig": "\uFB01",
      "FilledSmallSquare": "\u25FC",
      "FilledVerySmallSquare": "\u25AA",
      "fjlig": "fj",
      "flat": "\u266D",
      "fllig": "\uFB02",
      "fltns": "\u25B1",
      "fnof": "\u0192",
      "Fopf": "\uD835\uDD3D",
      "fopf": "\uD835\uDD57",
      "ForAll": "\u2200",
      "forall": "\u2200",
      "fork": "\u22D4",
      "forkv": "\u2AD9",
      "Fouriertrf": "\u2131",
      "fpartint": "\u2A0D",
      "frac12": "\xBD",
      "frac13": "\u2153",
      "frac14": "\xBC",
      "frac15": "\u2155",
      "frac16": "\u2159",
      "frac18": "\u215B",
      "frac23": "\u2154",
      "frac25": "\u2156",
      "frac34": "\xBE",
      "frac35": "\u2157",
      "frac38": "\u215C",
      "frac45": "\u2158",
      "frac56": "\u215A",
      "frac58": "\u215D",
      "frac78": "\u215E",
      "frasl": "\u2044",
      "frown": "\u2322",
      "Fscr": "\u2131",
      "fscr": "\uD835\uDCBB",
      "gacute": "\u01F5",
      "Gamma": "\u0393",
      "gamma": "\u03B3",
      "Gammad": "\u03DC",
      "gammad": "\u03DD",
      "gap": "\u2A86",
      "Gbreve": "\u011E",
      "gbreve": "\u011F",
      "Gcedil": "\u0122",
      "Gcirc": "\u011C",
      "gcirc": "\u011D",
      "Gcy": "\u0413",
      "gcy": "\u0433",
      "Gdot": "\u0120",
      "gdot": "\u0121",
      "gE": "\u2267",
      "ge": "\u2265",
      "gEl": "\u2A8C",
      "gel": "\u22DB",
      "geq": "\u2265",
      "geqq": "\u2267",
      "geqslant": "\u2A7E",
      "ges": "\u2A7E",
      "gescc": "\u2AA9",
      "gesdot": "\u2A80",
      "gesdoto": "\u2A82",
      "gesdotol": "\u2A84",
      "gesl": "\u22DB\uFE00",
      "gesles": "\u2A94",
      "Gfr": "\uD835\uDD0A",
      "gfr": "\uD835\uDD24",
      "Gg": "\u22D9",
      "gg": "\u226B",
      "ggg": "\u22D9",
      "gimel": "\u2137",
      "GJcy": "\u0403",
      "gjcy": "\u0453",
      "gl": "\u2277",
      "gla": "\u2AA5",
      "glE": "\u2A92",
      "glj": "\u2AA4",
      "gnap": "\u2A8A",
      "gnapprox": "\u2A8A",
      "gnE": "\u2269",
      "gne": "\u2A88",
      "gneq": "\u2A88",
      "gneqq": "\u2269",
      "gnsim": "\u22E7",
      "Gopf": "\uD835\uDD3E",
      "gopf": "\uD835\uDD58",
      "grave": "`",
      "GreaterEqual": "\u2265",
      "GreaterEqualLess": "\u22DB",
      "GreaterFullEqual": "\u2267",
      "GreaterGreater": "\u2AA2",
      "GreaterLess": "\u2277",
      "GreaterSlantEqual": "\u2A7E",
      "GreaterTilde": "\u2273",
      "Gscr": "\uD835\uDCA2",
      "gscr": "\u210A",
      "gsim": "\u2273",
      "gsime": "\u2A8E",
      "gsiml": "\u2A90",
      "GT": ">",
      "Gt": "\u226B",
      "gt": ">",
      "gtcc": "\u2AA7",
      "gtcir": "\u2A7A",
      "gtdot": "\u22D7",
      "gtlPar": "\u2995",
      "gtquest": "\u2A7C",
      "gtrapprox": "\u2A86",
      "gtrarr": "\u2978",
      "gtrdot": "\u22D7",
      "gtreqless": "\u22DB",
      "gtreqqless": "\u2A8C",
      "gtrless": "\u2277",
      "gtrsim": "\u2273",
      "gvertneqq": "\u2269\uFE00",
      "gvnE": "\u2269\uFE00",
      "Hacek": "\u02C7",
      "hairsp": "\u200A",
      "half": "\xBD",
      "hamilt": "\u210B",
      "HARDcy": "\u042A",
      "hardcy": "\u044A",
      "hArr": "\u21D4",
      "harr": "\u2194",
      "harrcir": "\u2948",
      "harrw": "\u21AD",
      "Hat": "^",
      "hbar": "\u210F",
      "Hcirc": "\u0124",
      "hcirc": "\u0125",
      "hearts": "\u2665",
      "heartsuit": "\u2665",
      "hellip": "\u2026",
      "hercon": "\u22B9",
      "Hfr": "\u210C",
      "hfr": "\uD835\uDD25",
      "HilbertSpace": "\u210B",
      "hksearow": "\u2925",
      "hkswarow": "\u2926",
      "hoarr": "\u21FF",
      "homtht": "\u223B",
      "hookleftarrow": "\u21A9",
      "hookrightarrow": "\u21AA",
      "Hopf": "\u210D",
      "hopf": "\uD835\uDD59",
      "horbar": "\u2015",
      "HorizontalLine": "\u2500",
      "Hscr": "\u210B",
      "hscr": "\uD835\uDCBD",
      "hslash": "\u210F",
      "Hstrok": "\u0126",
      "hstrok": "\u0127",
      "HumpDownHump": "\u224E",
      "HumpEqual": "\u224F",
      "hybull": "\u2043",
      "hyphen": "\u2010",
      "Iacute": "\xCD",
      "iacute": "\xED",
      "ic": "\u2063",
      "Icirc": "\xCE",
      "icirc": "\xEE",
      "Icy": "\u0418",
      "icy": "\u0438",
      "Idot": "\u0130",
      "IEcy": "\u0415",
      "iecy": "\u0435",
      "iexcl": "\xA1",
      "iff": "\u21D4",
      "Ifr": "\u2111",
      "ifr": "\uD835\uDD26",
      "Igrave": "\xCC",
      "igrave": "\xEC",
      "ii": "\u2148",
      "iiiint": "\u2A0C",
      "iiint": "\u222D",
      "iinfin": "\u29DC",
      "iiota": "\u2129",
      "IJlig": "\u0132",
      "ijlig": "\u0133",
      "Im": "\u2111",
      "Imacr": "\u012A",
      "imacr": "\u012B",
      "image": "\u2111",
      "ImaginaryI": "\u2148",
      "imagline": "\u2110",
      "imagpart": "\u2111",
      "imath": "\u0131",
      "imof": "\u22B7",
      "imped": "\u01B5",
      "Implies": "\u21D2",
      "in": "\u2208",
      "incare": "\u2105",
      "infin": "\u221E",
      "infintie": "\u29DD",
      "inodot": "\u0131",
      "Int": "\u222C",
      "int": "\u222B",
      "intcal": "\u22BA",
      "integers": "\u2124",
      "Integral": "\u222B",
      "intercal": "\u22BA",
      "Intersection": "\u22C2",
      "intlarhk": "\u2A17",
      "intprod": "\u2A3C",
      "InvisibleComma": "\u2063",
      "InvisibleTimes": "\u2062",
      "IOcy": "\u0401",
      "iocy": "\u0451",
      "Iogon": "\u012E",
      "iogon": "\u012F",
      "Iopf": "\uD835\uDD40",
      "iopf": "\uD835\uDD5A",
      "Iota": "\u0399",
      "iota": "\u03B9",
      "iprod": "\u2A3C",
      "iquest": "\xBF",
      "Iscr": "\u2110",
      "iscr": "\uD835\uDCBE",
      "isin": "\u2208",
      "isindot": "\u22F5",
      "isinE": "\u22F9",
      "isins": "\u22F4",
      "isinsv": "\u22F3",
      "isinv": "\u2208",
      "it": "\u2062",
      "Itilde": "\u0128",
      "itilde": "\u0129",
      "Iukcy": "\u0406",
      "iukcy": "\u0456",
      "Iuml": "\xCF",
      "iuml": "\xEF",
      "Jcirc": "\u0134",
      "jcirc": "\u0135",
      "Jcy": "\u0419",
      "jcy": "\u0439",
      "Jfr": "\uD835\uDD0D",
      "jfr": "\uD835\uDD27",
      "jmath": "\u0237",
      "Jopf": "\uD835\uDD41",
      "jopf": "\uD835\uDD5B",
      "Jscr": "\uD835\uDCA5",
      "jscr": "\uD835\uDCBF",
      "Jsercy": "\u0408",
      "jsercy": "\u0458",
      "Jukcy": "\u0404",
      "jukcy": "\u0454",
      "Kappa": "\u039A",
      "kappa": "\u03BA",
      "kappav": "\u03F0",
      "Kcedil": "\u0136",
      "kcedil": "\u0137",
      "Kcy": "\u041A",
      "kcy": "\u043A",
      "Kfr": "\uD835\uDD0E",
      "kfr": "\uD835\uDD28",
      "kgreen": "\u0138",
      "KHcy": "\u0425",
      "khcy": "\u0445",
      "KJcy": "\u040C",
      "kjcy": "\u045C",
      "Kopf": "\uD835\uDD42",
      "kopf": "\uD835\uDD5C",
      "Kscr": "\uD835\uDCA6",
      "kscr": "\uD835\uDCC0",
      "lAarr": "\u21DA",
      "Lacute": "\u0139",
      "lacute": "\u013A",
      "laemptyv": "\u29B4",
      "lagran": "\u2112",
      "Lambda": "\u039B",
      "lambda": "\u03BB",
      "Lang": "\u27EA",
      "lang": "\u27E8",
      "langd": "\u2991",
      "langle": "\u27E8",
      "lap": "\u2A85",
      "Laplacetrf": "\u2112",
      "laquo": "\xAB",
      "Larr": "\u219E",
      "lArr": "\u21D0",
      "larr": "\u2190",
      "larrb": "\u21E4",
      "larrbfs": "\u291F",
      "larrfs": "\u291D",
      "larrhk": "\u21A9",
      "larrlp": "\u21AB",
      "larrpl": "\u2939",
      "larrsim": "\u2973",
      "larrtl": "\u21A2",
      "lat": "\u2AAB",
      "lAtail": "\u291B",
      "latail": "\u2919",
      "late": "\u2AAD",
      "lates": "\u2AAD\uFE00",
      "lBarr": "\u290E",
      "lbarr": "\u290C",
      "lbbrk": "\u2772",
      "lbrace": "{",
      "lbrack": "[",
      "lbrke": "\u298B",
      "lbrksld": "\u298F",
      "lbrkslu": "\u298D",
      "Lcaron": "\u013D",
      "lcaron": "\u013E",
      "Lcedil": "\u013B",
      "lcedil": "\u013C",
      "lceil": "\u2308",
      "lcub": "{",
      "Lcy": "\u041B",
      "lcy": "\u043B",
      "ldca": "\u2936",
      "ldquo": "\u201C",
      "ldquor": "\u201E",
      "ldrdhar": "\u2967",
      "ldrushar": "\u294B",
      "ldsh": "\u21B2",
      "lE": "\u2266",
      "le": "\u2264",
      "LeftAngleBracket": "\u27E8",
      "LeftArrow": "\u2190",
      "Leftarrow": "\u21D0",
      "leftarrow": "\u2190",
      "LeftArrowBar": "\u21E4",
      "LeftArrowRightArrow": "\u21C6",
      "leftarrowtail": "\u21A2",
      "LeftCeiling": "\u2308",
      "LeftDoubleBracket": "\u27E6",
      "LeftDownTeeVector": "\u2961",
      "LeftDownVector": "\u21C3",
      "LeftDownVectorBar": "\u2959",
      "LeftFloor": "\u230A",
      "leftharpoondown": "\u21BD",
      "leftharpoonup": "\u21BC",
      "leftleftarrows": "\u21C7",
      "LeftRightArrow": "\u2194",
      "Leftrightarrow": "\u21D4",
      "leftrightarrow": "\u2194",
      "leftrightarrows": "\u21C6",
      "leftrightharpoons": "\u21CB",
      "leftrightsquigarrow": "\u21AD",
      "LeftRightVector": "\u294E",
      "LeftTee": "\u22A3",
      "LeftTeeArrow": "\u21A4",
      "LeftTeeVector": "\u295A",
      "leftthreetimes": "\u22CB",
      "LeftTriangle": "\u22B2",
      "LeftTriangleBar": "\u29CF",
      "LeftTriangleEqual": "\u22B4",
      "LeftUpDownVector": "\u2951",
      "LeftUpTeeVector": "\u2960",
      "LeftUpVector": "\u21BF",
      "LeftUpVectorBar": "\u2958",
      "LeftVector": "\u21BC",
      "LeftVectorBar": "\u2952",
      "lEg": "\u2A8B",
      "leg": "\u22DA",
      "leq": "\u2264",
      "leqq": "\u2266",
      "leqslant": "\u2A7D",
      "les": "\u2A7D",
      "lescc": "\u2AA8",
      "lesdot": "\u2A7F",
      "lesdoto": "\u2A81",
      "lesdotor": "\u2A83",
      "lesg": "\u22DA\uFE00",
      "lesges": "\u2A93",
      "lessapprox": "\u2A85",
      "lessdot": "\u22D6",
      "lesseqgtr": "\u22DA",
      "lesseqqgtr": "\u2A8B",
      "LessEqualGreater": "\u22DA",
      "LessFullEqual": "\u2266",
      "LessGreater": "\u2276",
      "lessgtr": "\u2276",
      "LessLess": "\u2AA1",
      "lesssim": "\u2272",
      "LessSlantEqual": "\u2A7D",
      "LessTilde": "\u2272",
      "lfisht": "\u297C",
      "lfloor": "\u230A",
      "Lfr": "\uD835\uDD0F",
      "lfr": "\uD835\uDD29",
      "lg": "\u2276",
      "lgE": "\u2A91",
      "lHar": "\u2962",
      "lhard": "\u21BD",
      "lharu": "\u21BC",
      "lharul": "\u296A",
      "lhblk": "\u2584",
      "LJcy": "\u0409",
      "ljcy": "\u0459",
      "Ll": "\u22D8",
      "ll": "\u226A",
      "llarr": "\u21C7",
      "llcorner": "\u231E",
      "Lleftarrow": "\u21DA",
      "llhard": "\u296B",
      "lltri": "\u25FA",
      "Lmidot": "\u013F",
      "lmidot": "\u0140",
      "lmoust": "\u23B0",
      "lmoustache": "\u23B0",
      "lnap": "\u2A89",
      "lnapprox": "\u2A89",
      "lnE": "\u2268",
      "lne": "\u2A87",
      "lneq": "\u2A87",
      "lneqq": "\u2268",
      "lnsim": "\u22E6",
      "loang": "\u27EC",
      "loarr": "\u21FD",
      "lobrk": "\u27E6",
      "LongLeftArrow": "\u27F5",
      "Longleftarrow": "\u27F8",
      "longleftarrow": "\u27F5",
      "LongLeftRightArrow": "\u27F7",
      "Longleftrightarrow": "\u27FA",
      "longleftrightarrow": "\u27F7",
      "longmapsto": "\u27FC",
      "LongRightArrow": "\u27F6",
      "Longrightarrow": "\u27F9",
      "longrightarrow": "\u27F6",
      "looparrowleft": "\u21AB",
      "looparrowright": "\u21AC",
      "lopar": "\u2985",
      "Lopf": "\uD835\uDD43",
      "lopf": "\uD835\uDD5D",
      "loplus": "\u2A2D",
      "lotimes": "\u2A34",
      "lowast": "\u2217",
      "lowbar": "_",
      "LowerLeftArrow": "\u2199",
      "LowerRightArrow": "\u2198",
      "loz": "\u25CA",
      "lozenge": "\u25CA",
      "lozf": "\u29EB",
      "lpar": "(",
      "lparlt": "\u2993",
      "lrarr": "\u21C6",
      "lrcorner": "\u231F",
      "lrhar": "\u21CB",
      "lrhard": "\u296D",
      "lrm": "\u200E",
      "lrtri": "\u22BF",
      "lsaquo": "\u2039",
      "Lscr": "\u2112",
      "lscr": "\uD835\uDCC1",
      "Lsh": "\u21B0",
      "lsh": "\u21B0",
      "lsim": "\u2272",
      "lsime": "\u2A8D",
      "lsimg": "\u2A8F",
      "lsqb": "[",
      "lsquo": "\u2018",
      "lsquor": "\u201A",
      "Lstrok": "\u0141",
      "lstrok": "\u0142",
      "LT": "<",
      "Lt": "\u226A",
      "lt": "<",
      "ltcc": "\u2AA6",
      "ltcir": "\u2A79",
      "ltdot": "\u22D6",
      "lthree": "\u22CB",
      "ltimes": "\u22C9",
      "ltlarr": "\u2976",
      "ltquest": "\u2A7B",
      "ltri": "\u25C3",
      "ltrie": "\u22B4",
      "ltrif": "\u25C2",
      "ltrPar": "\u2996",
      "lurdshar": "\u294A",
      "luruhar": "\u2966",
      "lvertneqq": "\u2268\uFE00",
      "lvnE": "\u2268\uFE00",
      "macr": "\xAF",
      "male": "\u2642",
      "malt": "\u2720",
      "maltese": "\u2720",
      "Map": "\u2905",
      "map": "\u21A6",
      "mapsto": "\u21A6",
      "mapstodown": "\u21A7",
      "mapstoleft": "\u21A4",
      "mapstoup": "\u21A5",
      "marker": "\u25AE",
      "mcomma": "\u2A29",
      "Mcy": "\u041C",
      "mcy": "\u043C",
      "mdash": "\u2014",
      "mDDot": "\u223A",
      "measuredangle": "\u2221",
      "MediumSpace": "\u205F",
      "Mellintrf": "\u2133",
      "Mfr": "\uD835\uDD10",
      "mfr": "\uD835\uDD2A",
      "mho": "\u2127",
      "micro": "\xB5",
      "mid": "\u2223",
      "midast": "*",
      "midcir": "\u2AF0",
      "middot": "\xB7",
      "minus": "\u2212",
      "minusb": "\u229F",
      "minusd": "\u2238",
      "minusdu": "\u2A2A",
      "MinusPlus": "\u2213",
      "mlcp": "\u2ADB",
      "mldr": "\u2026",
      "mnplus": "\u2213",
      "models": "\u22A7",
      "Mopf": "\uD835\uDD44",
      "mopf": "\uD835\uDD5E",
      "mp": "\u2213",
      "Mscr": "\u2133",
      "mscr": "\uD835\uDCC2",
      "mstpos": "\u223E",
      "Mu": "\u039C",
      "mu": "\u03BC",
      "multimap": "\u22B8",
      "mumap": "\u22B8",
      "nabla": "\u2207",
      "Nacute": "\u0143",
      "nacute": "\u0144",
      "nang": "\u2220\u20D2",
      "nap": "\u2249",
      "napE": "\u2A70\u0338",
      "napid": "\u224B\u0338",
      "napos": "\u0149",
      "napprox": "\u2249",
      "natur": "\u266E",
      "natural": "\u266E",
      "naturals": "\u2115",
      "nbsp": "\xA0",
      "nbump": "\u224E\u0338",
      "nbumpe": "\u224F\u0338",
      "ncap": "\u2A43",
      "Ncaron": "\u0147",
      "ncaron": "\u0148",
      "Ncedil": "\u0145",
      "ncedil": "\u0146",
      "ncong": "\u2247",
      "ncongdot": "\u2A6D\u0338",
      "ncup": "\u2A42",
      "Ncy": "\u041D",
      "ncy": "\u043D",
      "ndash": "\u2013",
      "ne": "\u2260",
      "nearhk": "\u2924",
      "neArr": "\u21D7",
      "nearr": "\u2197",
      "nearrow": "\u2197",
      "nedot": "\u2250\u0338",
      "NegativeMediumSpace": "\u200B",
      "NegativeThickSpace": "\u200B",
      "NegativeThinSpace": "\u200B",
      "NegativeVeryThinSpace": "\u200B",
      "nequiv": "\u2262",
      "nesear": "\u2928",
      "nesim": "\u2242\u0338",
      "NestedGreaterGreater": "\u226B",
      "NestedLessLess": "\u226A",
      "NewLine": "\n",
      "nexist": "\u2204",
      "nexists": "\u2204",
      "Nfr": "\uD835\uDD11",
      "nfr": "\uD835\uDD2B",
      "ngE": "\u2267\u0338",
      "nge": "\u2271",
      "ngeq": "\u2271",
      "ngeqq": "\u2267\u0338",
      "ngeqslant": "\u2A7E\u0338",
      "nges": "\u2A7E\u0338",
      "nGg": "\u22D9\u0338",
      "ngsim": "\u2275",
      "nGt": "\u226B\u20D2",
      "ngt": "\u226F",
      "ngtr": "\u226F",
      "nGtv": "\u226B\u0338",
      "nhArr": "\u21CE",
      "nharr": "\u21AE",
      "nhpar": "\u2AF2",
      "ni": "\u220B",
      "nis": "\u22FC",
      "nisd": "\u22FA",
      "niv": "\u220B",
      "NJcy": "\u040A",
      "njcy": "\u045A",
      "nlArr": "\u21CD",
      "nlarr": "\u219A",
      "nldr": "\u2025",
      "nlE": "\u2266\u0338",
      "nle": "\u2270",
      "nLeftarrow": "\u21CD",
      "nleftarrow": "\u219A",
      "nLeftrightarrow": "\u21CE",
      "nleftrightarrow": "\u21AE",
      "nleq": "\u2270",
      "nleqq": "\u2266\u0338",
      "nleqslant": "\u2A7D\u0338",
      "nles": "\u2A7D\u0338",
      "nless": "\u226E",
      "nLl": "\u22D8\u0338",
      "nlsim": "\u2274",
      "nLt": "\u226A\u20D2",
      "nlt": "\u226E",
      "nltri": "\u22EA",
      "nltrie": "\u22EC",
      "nLtv": "\u226A\u0338",
      "nmid": "\u2224",
      "NoBreak": "\u2060",
      "NonBreakingSpace": "\xA0",
      "Nopf": "\u2115",
      "nopf": "\uD835\uDD5F",
      "Not": "\u2AEC",
      "not": "\xAC",
      "NotCongruent": "\u2262",
      "NotCupCap": "\u226D",
      "NotDoubleVerticalBar": "\u2226",
      "NotElement": "\u2209",
      "NotEqual": "\u2260",
      "NotEqualTilde": "\u2242\u0338",
      "NotExists": "\u2204",
      "NotGreater": "\u226F",
      "NotGreaterEqual": "\u2271",
      "NotGreaterFullEqual": "\u2267\u0338",
      "NotGreaterGreater": "\u226B\u0338",
      "NotGreaterLess": "\u2279",
      "NotGreaterSlantEqual": "\u2A7E\u0338",
      "NotGreaterTilde": "\u2275",
      "NotHumpDownHump": "\u224E\u0338",
      "NotHumpEqual": "\u224F\u0338",
      "notin": "\u2209",
      "notindot": "\u22F5\u0338",
      "notinE": "\u22F9\u0338",
      "notinva": "\u2209",
      "notinvb": "\u22F7",
      "notinvc": "\u22F6",
      "NotLeftTriangle": "\u22EA",
      "NotLeftTriangleBar": "\u29CF\u0338",
      "NotLeftTriangleEqual": "\u22EC",
      "NotLess": "\u226E",
      "NotLessEqual": "\u2270",
      "NotLessGreater": "\u2278",
      "NotLessLess": "\u226A\u0338",
      "NotLessSlantEqual": "\u2A7D\u0338",
      "NotLessTilde": "\u2274",
      "NotNestedGreaterGreater": "\u2AA2\u0338",
      "NotNestedLessLess": "\u2AA1\u0338",
      "notni": "\u220C",
      "notniva": "\u220C",
      "notnivb": "\u22FE",
      "notnivc": "\u22FD",
      "NotPrecedes": "\u2280",
      "NotPrecedesEqual": "\u2AAF\u0338",
      "NotPrecedesSlantEqual": "\u22E0",
      "NotReverseElement": "\u220C",
      "NotRightTriangle": "\u22EB",
      "NotRightTriangleBar": "\u29D0\u0338",
      "NotRightTriangleEqual": "\u22ED",
      "NotSquareSubset": "\u228F\u0338",
      "NotSquareSubsetEqual": "\u22E2",
      "NotSquareSuperset": "\u2290\u0338",
      "NotSquareSupersetEqual": "\u22E3",
      "NotSubset": "\u2282\u20D2",
      "NotSubsetEqual": "\u2288",
      "NotSucceeds": "\u2281",
      "NotSucceedsEqual": "\u2AB0\u0338",
      "NotSucceedsSlantEqual": "\u22E1",
      "NotSucceedsTilde": "\u227F\u0338",
      "NotSuperset": "\u2283\u20D2",
      "NotSupersetEqual": "\u2289",
      "NotTilde": "\u2241",
      "NotTildeEqual": "\u2244",
      "NotTildeFullEqual": "\u2247",
      "NotTildeTilde": "\u2249",
      "NotVerticalBar": "\u2224",
      "npar": "\u2226",
      "nparallel": "\u2226",
      "nparsl": "\u2AFD\u20E5",
      "npart": "\u2202\u0338",
      "npolint": "\u2A14",
      "npr": "\u2280",
      "nprcue": "\u22E0",
      "npre": "\u2AAF\u0338",
      "nprec": "\u2280",
      "npreceq": "\u2AAF\u0338",
      "nrArr": "\u21CF",
      "nrarr": "\u219B",
      "nrarrc": "\u2933\u0338",
      "nrarrw": "\u219D\u0338",
      "nRightarrow": "\u21CF",
      "nrightarrow": "\u219B",
      "nrtri": "\u22EB",
      "nrtrie": "\u22ED",
      "nsc": "\u2281",
      "nsccue": "\u22E1",
      "nsce": "\u2AB0\u0338",
      "Nscr": "\uD835\uDCA9",
      "nscr": "\uD835\uDCC3",
      "nshortmid": "\u2224",
      "nshortparallel": "\u2226",
      "nsim": "\u2241",
      "nsime": "\u2244",
      "nsimeq": "\u2244",
      "nsmid": "\u2224",
      "nspar": "\u2226",
      "nsqsube": "\u22E2",
      "nsqsupe": "\u22E3",
      "nsub": "\u2284",
      "nsubE": "\u2AC5\u0338",
      "nsube": "\u2288",
      "nsubset": "\u2282\u20D2",
      "nsubseteq": "\u2288",
      "nsubseteqq": "\u2AC5\u0338",
      "nsucc": "\u2281",
      "nsucceq": "\u2AB0\u0338",
      "nsup": "\u2285",
      "nsupE": "\u2AC6\u0338",
      "nsupe": "\u2289",
      "nsupset": "\u2283\u20D2",
      "nsupseteq": "\u2289",
      "nsupseteqq": "\u2AC6\u0338",
      "ntgl": "\u2279",
      "Ntilde": "\xD1",
      "ntilde": "\xF1",
      "ntlg": "\u2278",
      "ntriangleleft": "\u22EA",
      "ntrianglelefteq": "\u22EC",
      "ntriangleright": "\u22EB",
      "ntrianglerighteq": "\u22ED",
      "Nu": "\u039D",
      "nu": "\u03BD",
      "num": "#",
      "numero": "\u2116",
      "numsp": "\u2007",
      "nvap": "\u224D\u20D2",
      "nVDash": "\u22AF",
      "nVdash": "\u22AE",
      "nvDash": "\u22AD",
      "nvdash": "\u22AC",
      "nvge": "\u2265\u20D2",
      "nvgt": ">\u20D2",
      "nvHarr": "\u2904",
      "nvinfin": "\u29DE",
      "nvlArr": "\u2902",
      "nvle": "\u2264\u20D2",
      "nvlt": "<\u20D2",
      "nvltrie": "\u22B4\u20D2",
      "nvrArr": "\u2903",
      "nvrtrie": "\u22B5\u20D2",
      "nvsim": "\u223C\u20D2",
      "nwarhk": "\u2923",
      "nwArr": "\u21D6",
      "nwarr": "\u2196",
      "nwarrow": "\u2196",
      "nwnear": "\u2927",
      "Oacute": "\xD3",
      "oacute": "\xF3",
      "oast": "\u229B",
      "ocir": "\u229A",
      "Ocirc": "\xD4",
      "ocirc": "\xF4",
      "Ocy": "\u041E",
      "ocy": "\u043E",
      "odash": "\u229D",
      "Odblac": "\u0150",
      "odblac": "\u0151",
      "odiv": "\u2A38",
      "odot": "\u2299",
      "odsold": "\u29BC",
      "OElig": "\u0152",
      "oelig": "\u0153",
      "ofcir": "\u29BF",
      "Ofr": "\uD835\uDD12",
      "ofr": "\uD835\uDD2C",
      "ogon": "\u02DB",
      "Ograve": "\xD2",
      "ograve": "\xF2",
      "ogt": "\u29C1",
      "ohbar": "\u29B5",
      "ohm": "\u03A9",
      "oint": "\u222E",
      "olarr": "\u21BA",
      "olcir": "\u29BE",
      "olcross": "\u29BB",
      "oline": "\u203E",
      "olt": "\u29C0",
      "Omacr": "\u014C",
      "omacr": "\u014D",
      "Omega": "\u03A9",
      "omega": "\u03C9",
      "Omicron": "\u039F",
      "omicron": "\u03BF",
      "omid": "\u29B6",
      "ominus": "\u2296",
      "Oopf": "\uD835\uDD46",
      "oopf": "\uD835\uDD60",
      "opar": "\u29B7",
      "OpenCurlyDoubleQuote": "\u201C",
      "OpenCurlyQuote": "\u2018",
      "operp": "\u29B9",
      "oplus": "\u2295",
      "Or": "\u2A54",
      "or": "\u2228",
      "orarr": "\u21BB",
      "ord": "\u2A5D",
      "order": "\u2134",
      "orderof": "\u2134",
      "ordf": "\xAA",
      "ordm": "\xBA",
      "origof": "\u22B6",
      "oror": "\u2A56",
      "orslope": "\u2A57",
      "orv": "\u2A5B",
      "oS": "\u24C8",
      "Oscr": "\uD835\uDCAA",
      "oscr": "\u2134",
      "Oslash": "\xD8",
      "oslash": "\xF8",
      "osol": "\u2298",
      "Otilde": "\xD5",
      "otilde": "\xF5",
      "Otimes": "\u2A37",
      "otimes": "\u2297",
      "otimesas": "\u2A36",
      "Ouml": "\xD6",
      "ouml": "\xF6",
      "ovbar": "\u233D",
      "OverBar": "\u203E",
      "OverBrace": "\u23DE",
      "OverBracket": "\u23B4",
      "OverParenthesis": "\u23DC",
      "par": "\u2225",
      "para": "\xB6",
      "parallel": "\u2225",
      "parsim": "\u2AF3",
      "parsl": "\u2AFD",
      "part": "\u2202",
      "PartialD": "\u2202",
      "Pcy": "\u041F",
      "pcy": "\u043F",
      "percnt": "%",
      "period": ".",
      "permil": "\u2030",
      "perp": "\u22A5",
      "pertenk": "\u2031",
      "Pfr": "\uD835\uDD13",
      "pfr": "\uD835\uDD2D",
      "Phi": "\u03A6",
      "phi": "\u03C6",
      "phiv": "\u03D5",
      "phmmat": "\u2133",
      "phone": "\u260E",
      "Pi": "\u03A0",
      "pi": "\u03C0",
      "pitchfork": "\u22D4",
      "piv": "\u03D6",
      "planck": "\u210F",
      "planckh": "\u210E",
      "plankv": "\u210F",
      "plus": "+",
      "plusacir": "\u2A23",
      "plusb": "\u229E",
      "pluscir": "\u2A22",
      "plusdo": "\u2214",
      "plusdu": "\u2A25",
      "pluse": "\u2A72",
      "PlusMinus": "\xB1",
      "plusmn": "\xB1",
      "plussim": "\u2A26",
      "plustwo": "\u2A27",
      "pm": "\xB1",
      "Poincareplane": "\u210C",
      "pointint": "\u2A15",
      "Popf": "\u2119",
      "popf": "\uD835\uDD61",
      "pound": "\xA3",
      "Pr": "\u2ABB",
      "pr": "\u227A",
      "prap": "\u2AB7",
      "prcue": "\u227C",
      "prE": "\u2AB3",
      "pre": "\u2AAF",
      "prec": "\u227A",
      "precapprox": "\u2AB7",
      "preccurlyeq": "\u227C",
      "Precedes": "\u227A",
      "PrecedesEqual": "\u2AAF",
      "PrecedesSlantEqual": "\u227C",
      "PrecedesTilde": "\u227E",
      "preceq": "\u2AAF",
      "precnapprox": "\u2AB9",
      "precneqq": "\u2AB5",
      "precnsim": "\u22E8",
      "precsim": "\u227E",
      "Prime": "\u2033",
      "prime": "\u2032",
      "primes": "\u2119",
      "prnap": "\u2AB9",
      "prnE": "\u2AB5",
      "prnsim": "\u22E8",
      "prod": "\u220F",
      "Product": "\u220F",
      "profalar": "\u232E",
      "profline": "\u2312",
      "profsurf": "\u2313",
      "prop": "\u221D",
      "Proportion": "\u2237",
      "Proportional": "\u221D",
      "propto": "\u221D",
      "prsim": "\u227E",
      "prurel": "\u22B0",
      "Pscr": "\uD835\uDCAB",
      "pscr": "\uD835\uDCC5",
      "Psi": "\u03A8",
      "psi": "\u03C8",
      "puncsp": "\u2008",
      "Qfr": "\uD835\uDD14",
      "qfr": "\uD835\uDD2E",
      "qint": "\u2A0C",
      "Qopf": "\u211A",
      "qopf": "\uD835\uDD62",
      "qprime": "\u2057",
      "Qscr": "\uD835\uDCAC",
      "qscr": "\uD835\uDCC6",
      "quaternions": "\u210D",
      "quatint": "\u2A16",
      "quest": "?",
      "questeq": "\u225F",
      "QUOT": "\"",
      "quot": "\"",
      "rAarr": "\u21DB",
      "race": "\u223D\u0331",
      "Racute": "\u0154",
      "racute": "\u0155",
      "radic": "\u221A",
      "raemptyv": "\u29B3",
      "Rang": "\u27EB",
      "rang": "\u27E9",
      "rangd": "\u2992",
      "range": "\u29A5",
      "rangle": "\u27E9",
      "raquo": "\xBB",
      "Rarr": "\u21A0",
      "rArr": "\u21D2",
      "rarr": "\u2192",
      "rarrap": "\u2975",
      "rarrb": "\u21E5",
      "rarrbfs": "\u2920",
      "rarrc": "\u2933",
      "rarrfs": "\u291E",
      "rarrhk": "\u21AA",
      "rarrlp": "\u21AC",
      "rarrpl": "\u2945",
      "rarrsim": "\u2974",
      "Rarrtl": "\u2916",
      "rarrtl": "\u21A3",
      "rarrw": "\u219D",
      "rAtail": "\u291C",
      "ratail": "\u291A",
      "ratio": "\u2236",
      "rationals": "\u211A",
      "RBarr": "\u2910",
      "rBarr": "\u290F",
      "rbarr": "\u290D",
      "rbbrk": "\u2773",
      "rbrace": "}",
      "rbrack": "]",
      "rbrke": "\u298C",
      "rbrksld": "\u298E",
      "rbrkslu": "\u2990",
      "Rcaron": "\u0158",
      "rcaron": "\u0159",
      "Rcedil": "\u0156",
      "rcedil": "\u0157",
      "rceil": "\u2309",
      "rcub": "}",
      "Rcy": "\u0420",
      "rcy": "\u0440",
      "rdca": "\u2937",
      "rdldhar": "\u2969",
      "rdquo": "\u201D",
      "rdquor": "\u201D",
      "rdsh": "\u21B3",
      "Re": "\u211C",
      "real": "\u211C",
      "realine": "\u211B",
      "realpart": "\u211C",
      "reals": "\u211D",
      "rect": "\u25AD",
      "REG": "\xAE",
      "reg": "\xAE",
      "ReverseElement": "\u220B",
      "ReverseEquilibrium": "\u21CB",
      "ReverseUpEquilibrium": "\u296F",
      "rfisht": "\u297D",
      "rfloor": "\u230B",
      "Rfr": "\u211C",
      "rfr": "\uD835\uDD2F",
      "rHar": "\u2964",
      "rhard": "\u21C1",
      "rharu": "\u21C0",
      "rharul": "\u296C",
      "Rho": "\u03A1",
      "rho": "\u03C1",
      "rhov": "\u03F1",
      "RightAngleBracket": "\u27E9",
      "RightArrow": "\u2192",
      "Rightarrow": "\u21D2",
      "rightarrow": "\u2192",
      "RightArrowBar": "\u21E5",
      "RightArrowLeftArrow": "\u21C4",
      "rightarrowtail": "\u21A3",
      "RightCeiling": "\u2309",
      "RightDoubleBracket": "\u27E7",
      "RightDownTeeVector": "\u295D",
      "RightDownVector": "\u21C2",
      "RightDownVectorBar": "\u2955",
      "RightFloor": "\u230B",
      "rightharpoondown": "\u21C1",
      "rightharpoonup": "\u21C0",
      "rightleftarrows": "\u21C4",
      "rightleftharpoons": "\u21CC",
      "rightrightarrows": "\u21C9",
      "rightsquigarrow": "\u219D",
      "RightTee": "\u22A2",
      "RightTeeArrow": "\u21A6",
      "RightTeeVector": "\u295B",
      "rightthreetimes": "\u22CC",
      "RightTriangle": "\u22B3",
      "RightTriangleBar": "\u29D0",
      "RightTriangleEqual": "\u22B5",
      "RightUpDownVector": "\u294F",
      "RightUpTeeVector": "\u295C",
      "RightUpVector": "\u21BE",
      "RightUpVectorBar": "\u2954",
      "RightVector": "\u21C0",
      "RightVectorBar": "\u2953",
      "ring": "\u02DA",
      "risingdotseq": "\u2253",
      "rlarr": "\u21C4",
      "rlhar": "\u21CC",
      "rlm": "\u200F",
      "rmoust": "\u23B1",
      "rmoustache": "\u23B1",
      "rnmid": "\u2AEE",
      "roang": "\u27ED",
      "roarr": "\u21FE",
      "robrk": "\u27E7",
      "ropar": "\u2986",
      "Ropf": "\u211D",
      "ropf": "\uD835\uDD63",
      "roplus": "\u2A2E",
      "rotimes": "\u2A35",
      "RoundImplies": "\u2970",
      "rpar": ")",
      "rpargt": "\u2994",
      "rppolint": "\u2A12",
      "rrarr": "\u21C9",
      "Rrightarrow": "\u21DB",
      "rsaquo": "\u203A",
      "Rscr": "\u211B",
      "rscr": "\uD835\uDCC7",
      "Rsh": "\u21B1",
      "rsh": "\u21B1",
      "rsqb": "]",
      "rsquo": "\u2019",
      "rsquor": "\u2019",
      "rthree": "\u22CC",
      "rtimes": "\u22CA",
      "rtri": "\u25B9",
      "rtrie": "\u22B5",
      "rtrif": "\u25B8",
      "rtriltri": "\u29CE",
      "RuleDelayed": "\u29F4",
      "ruluhar": "\u2968",
      "rx": "\u211E",
      "Sacute": "\u015A",
      "sacute": "\u015B",
      "sbquo": "\u201A",
      "Sc": "\u2ABC",
      "sc": "\u227B",
      "scap": "\u2AB8",
      "Scaron": "\u0160",
      "scaron": "\u0161",
      "sccue": "\u227D",
      "scE": "\u2AB4",
      "sce": "\u2AB0",
      "Scedil": "\u015E",
      "scedil": "\u015F",
      "Scirc": "\u015C",
      "scirc": "\u015D",
      "scnap": "\u2ABA",
      "scnE": "\u2AB6",
      "scnsim": "\u22E9",
      "scpolint": "\u2A13",
      "scsim": "\u227F",
      "Scy": "\u0421",
      "scy": "\u0441",
      "sdot": "\u22C5",
      "sdotb": "\u22A1",
      "sdote": "\u2A66",
      "searhk": "\u2925",
      "seArr": "\u21D8",
      "searr": "\u2198",
      "searrow": "\u2198",
      "sect": "\xA7",
      "semi": ";",
      "seswar": "\u2929",
      "setminus": "\u2216",
      "setmn": "\u2216",
      "sext": "\u2736",
      "Sfr": "\uD835\uDD16",
      "sfr": "\uD835\uDD30",
      "sfrown": "\u2322",
      "sharp": "\u266F",
      "SHCHcy": "\u0429",
      "shchcy": "\u0449",
      "SHcy": "\u0428",
      "shcy": "\u0448",
      "ShortDownArrow": "\u2193",
      "ShortLeftArrow": "\u2190",
      "shortmid": "\u2223",
      "shortparallel": "\u2225",
      "ShortRightArrow": "\u2192",
      "ShortUpArrow": "\u2191",
      "shy": "\xAD",
      "Sigma": "\u03A3",
      "sigma": "\u03C3",
      "sigmaf": "\u03C2",
      "sigmav": "\u03C2",
      "sim": "\u223C",
      "simdot": "\u2A6A",
      "sime": "\u2243",
      "simeq": "\u2243",
      "simg": "\u2A9E",
      "simgE": "\u2AA0",
      "siml": "\u2A9D",
      "simlE": "\u2A9F",
      "simne": "\u2246",
      "simplus": "\u2A24",
      "simrarr": "\u2972",
      "slarr": "\u2190",
      "SmallCircle": "\u2218",
      "smallsetminus": "\u2216",
      "smashp": "\u2A33",
      "smeparsl": "\u29E4",
      "smid": "\u2223",
      "smile": "\u2323",
      "smt": "\u2AAA",
      "smte": "\u2AAC",
      "smtes": "\u2AAC\uFE00",
      "SOFTcy": "\u042C",
      "softcy": "\u044C",
      "sol": "/",
      "solb": "\u29C4",
      "solbar": "\u233F",
      "Sopf": "\uD835\uDD4A",
      "sopf": "\uD835\uDD64",
      "spades": "\u2660",
      "spadesuit": "\u2660",
      "spar": "\u2225",
      "sqcap": "\u2293",
      "sqcaps": "\u2293\uFE00",
      "sqcup": "\u2294",
      "sqcups": "\u2294\uFE00",
      "Sqrt": "\u221A",
      "sqsub": "\u228F",
      "sqsube": "\u2291",
      "sqsubset": "\u228F",
      "sqsubseteq": "\u2291",
      "sqsup": "\u2290",
      "sqsupe": "\u2292",
      "sqsupset": "\u2290",
      "sqsupseteq": "\u2292",
      "squ": "\u25A1",
      "Square": "\u25A1",
      "square": "\u25A1",
      "SquareIntersection": "\u2293",
      "SquareSubset": "\u228F",
      "SquareSubsetEqual": "\u2291",
      "SquareSuperset": "\u2290",
      "SquareSupersetEqual": "\u2292",
      "SquareUnion": "\u2294",
      "squarf": "\u25AA",
      "squf": "\u25AA",
      "srarr": "\u2192",
      "Sscr": "\uD835\uDCAE",
      "sscr": "\uD835\uDCC8",
      "ssetmn": "\u2216",
      "ssmile": "\u2323",
      "sstarf": "\u22C6",
      "Star": "\u22C6",
      "star": "\u2606",
      "starf": "\u2605",
      "straightepsilon": "\u03F5",
      "straightphi": "\u03D5",
      "strns": "\xAF",
      "Sub": "\u22D0",
      "sub": "\u2282",
      "subdot": "\u2ABD",
      "subE": "\u2AC5",
      "sube": "\u2286",
      "subedot": "\u2AC3",
      "submult": "\u2AC1",
      "subnE": "\u2ACB",
      "subne": "\u228A",
      "subplus": "\u2ABF",
      "subrarr": "\u2979",
      "Subset": "\u22D0",
      "subset": "\u2282",
      "subseteq": "\u2286",
      "subseteqq": "\u2AC5",
      "SubsetEqual": "\u2286",
      "subsetneq": "\u228A",
      "subsetneqq": "\u2ACB",
      "subsim": "\u2AC7",
      "subsub": "\u2AD5",
      "subsup": "\u2AD3",
      "succ": "\u227B",
      "succapprox": "\u2AB8",
      "succcurlyeq": "\u227D",
      "Succeeds": "\u227B",
      "SucceedsEqual": "\u2AB0",
      "SucceedsSlantEqual": "\u227D",
      "SucceedsTilde": "\u227F",
      "succeq": "\u2AB0",
      "succnapprox": "\u2ABA",
      "succneqq": "\u2AB6",
      "succnsim": "\u22E9",
      "succsim": "\u227F",
      "SuchThat": "\u220B",
      "Sum": "\u2211",
      "sum": "\u2211",
      "sung": "\u266A",
      "Sup": "\u22D1",
      "sup": "\u2283",
      "sup1": "\xB9",
      "sup2": "\xB2",
      "sup3": "\xB3",
      "supdot": "\u2ABE",
      "supdsub": "\u2AD8",
      "supE": "\u2AC6",
      "supe": "\u2287",
      "supedot": "\u2AC4",
      "Superset": "\u2283",
      "SupersetEqual": "\u2287",
      "suphsol": "\u27C9",
      "suphsub": "\u2AD7",
      "suplarr": "\u297B",
      "supmult": "\u2AC2",
      "supnE": "\u2ACC",
      "supne": "\u228B",
      "supplus": "\u2AC0",
      "Supset": "\u22D1",
      "supset": "\u2283",
      "supseteq": "\u2287",
      "supseteqq": "\u2AC6",
      "supsetneq": "\u228B",
      "supsetneqq": "\u2ACC",
      "supsim": "\u2AC8",
      "supsub": "\u2AD4",
      "supsup": "\u2AD6",
      "swarhk": "\u2926",
      "swArr": "\u21D9",
      "swarr": "\u2199",
      "swarrow": "\u2199",
      "swnwar": "\u292A",
      "szlig": "\xDF",
      "Tab": "\t",
      "target": "\u2316",
      "Tau": "\u03A4",
      "tau": "\u03C4",
      "tbrk": "\u23B4",
      "Tcaron": "\u0164",
      "tcaron": "\u0165",
      "Tcedil": "\u0162",
      "tcedil": "\u0163",
      "Tcy": "\u0422",
      "tcy": "\u0442",
      "tdot": "\u20DB",
      "telrec": "\u2315",
      "Tfr": "\uD835\uDD17",
      "tfr": "\uD835\uDD31",
      "there4": "\u2234",
      "Therefore": "\u2234",
      "therefore": "\u2234",
      "Theta": "\u0398",
      "theta": "\u03B8",
      "thetasym": "\u03D1",
      "thetav": "\u03D1",
      "thickapprox": "\u2248",
      "thicksim": "\u223C",
      "ThickSpace": "\u205F\u200A",
      "thinsp": "\u2009",
      "ThinSpace": "\u2009",
      "thkap": "\u2248",
      "thksim": "\u223C",
      "THORN": "\xDE",
      "thorn": "\xFE",
      "Tilde": "\u223C",
      "tilde": "\u02DC",
      "TildeEqual": "\u2243",
      "TildeFullEqual": "\u2245",
      "TildeTilde": "\u2248",
      "times": "\xD7",
      "timesb": "\u22A0",
      "timesbar": "\u2A31",
      "timesd": "\u2A30",
      "tint": "\u222D",
      "toea": "\u2928",
      "top": "\u22A4",
      "topbot": "\u2336",
      "topcir": "\u2AF1",
      "Topf": "\uD835\uDD4B",
      "topf": "\uD835\uDD65",
      "topfork": "\u2ADA",
      "tosa": "\u2929",
      "tprime": "\u2034",
      "TRADE": "\u2122",
      "trade": "\u2122",
      "triangle": "\u25B5",
      "triangledown": "\u25BF",
      "triangleleft": "\u25C3",
      "trianglelefteq": "\u22B4",
      "triangleq": "\u225C",
      "triangleright": "\u25B9",
      "trianglerighteq": "\u22B5",
      "tridot": "\u25EC",
      "trie": "\u225C",
      "triminus": "\u2A3A",
      "TripleDot": "\u20DB",
      "triplus": "\u2A39",
      "trisb": "\u29CD",
      "tritime": "\u2A3B",
      "trpezium": "\u23E2",
      "Tscr": "\uD835\uDCAF",
      "tscr": "\uD835\uDCC9",
      "TScy": "\u0426",
      "tscy": "\u0446",
      "TSHcy": "\u040B",
      "tshcy": "\u045B",
      "Tstrok": "\u0166",
      "tstrok": "\u0167",
      "twixt": "\u226C",
      "twoheadleftarrow": "\u219E",
      "twoheadrightarrow": "\u21A0",
      "Uacute": "\xDA",
      "uacute": "\xFA",
      "Uarr": "\u219F",
      "uArr": "\u21D1",
      "uarr": "\u2191",
      "Uarrocir": "\u2949",
      "Ubrcy": "\u040E",
      "ubrcy": "\u045E",
      "Ubreve": "\u016C",
      "ubreve": "\u016D",
      "Ucirc": "\xDB",
      "ucirc": "\xFB",
      "Ucy": "\u0423",
      "ucy": "\u0443",
      "udarr": "\u21C5",
      "Udblac": "\u0170",
      "udblac": "\u0171",
      "udhar": "\u296E",
      "ufisht": "\u297E",
      "Ufr": "\uD835\uDD18",
      "ufr": "\uD835\uDD32",
      "Ugrave": "\xD9",
      "ugrave": "\xF9",
      "uHar": "\u2963",
      "uharl": "\u21BF",
      "uharr": "\u21BE",
      "uhblk": "\u2580",
      "ulcorn": "\u231C",
      "ulcorner": "\u231C",
      "ulcrop": "\u230F",
      "ultri": "\u25F8",
      "Umacr": "\u016A",
      "umacr": "\u016B",
      "uml": "\xA8",
      "UnderBar": "_",
      "UnderBrace": "\u23DF",
      "UnderBracket": "\u23B5",
      "UnderParenthesis": "\u23DD",
      "Union": "\u22C3",
      "UnionPlus": "\u228E",
      "Uogon": "\u0172",
      "uogon": "\u0173",
      "Uopf": "\uD835\uDD4C",
      "uopf": "\uD835\uDD66",
      "UpArrow": "\u2191",
      "Uparrow": "\u21D1",
      "uparrow": "\u2191",
      "UpArrowBar": "\u2912",
      "UpArrowDownArrow": "\u21C5",
      "UpDownArrow": "\u2195",
      "Updownarrow": "\u21D5",
      "updownarrow": "\u2195",
      "UpEquilibrium": "\u296E",
      "upharpoonleft": "\u21BF",
      "upharpoonright": "\u21BE",
      "uplus": "\u228E",
      "UpperLeftArrow": "\u2196",
      "UpperRightArrow": "\u2197",
      "Upsi": "\u03D2",
      "upsi": "\u03C5",
      "upsih": "\u03D2",
      "Upsilon": "\u03A5",
      "upsilon": "\u03C5",
      "UpTee": "\u22A5",
      "UpTeeArrow": "\u21A5",
      "upuparrows": "\u21C8",
      "urcorn": "\u231D",
      "urcorner": "\u231D",
      "urcrop": "\u230E",
      "Uring": "\u016E",
      "uring": "\u016F",
      "urtri": "\u25F9",
      "Uscr": "\uD835\uDCB0",
      "uscr": "\uD835\uDCCA",
      "utdot": "\u22F0",
      "Utilde": "\u0168",
      "utilde": "\u0169",
      "utri": "\u25B5",
      "utrif": "\u25B4",
      "uuarr": "\u21C8",
      "Uuml": "\xDC",
      "uuml": "\xFC",
      "uwangle": "\u29A7",
      "vangrt": "\u299C",
      "varepsilon": "\u03F5",
      "varkappa": "\u03F0",
      "varnothing": "\u2205",
      "varphi": "\u03D5",
      "varpi": "\u03D6",
      "varpropto": "\u221D",
      "vArr": "\u21D5",
      "varr": "\u2195",
      "varrho": "\u03F1",
      "varsigma": "\u03C2",
      "varsubsetneq": "\u228A\uFE00",
      "varsubsetneqq": "\u2ACB\uFE00",
      "varsupsetneq": "\u228B\uFE00",
      "varsupsetneqq": "\u2ACC\uFE00",
      "vartheta": "\u03D1",
      "vartriangleleft": "\u22B2",
      "vartriangleright": "\u22B3",
      "Vbar": "\u2AEB",
      "vBar": "\u2AE8",
      "vBarv": "\u2AE9",
      "Vcy": "\u0412",
      "vcy": "\u0432",
      "VDash": "\u22AB",
      "Vdash": "\u22A9",
      "vDash": "\u22A8",
      "vdash": "\u22A2",
      "Vdashl": "\u2AE6",
      "Vee": "\u22C1",
      "vee": "\u2228",
      "veebar": "\u22BB",
      "veeeq": "\u225A",
      "vellip": "\u22EE",
      "Verbar": "\u2016",
      "verbar": "|",
      "Vert": "\u2016",
      "vert": "|",
      "VerticalBar": "\u2223",
      "VerticalLine": "|",
      "VerticalSeparator": "\u2758",
      "VerticalTilde": "\u2240",
      "VeryThinSpace": "\u200A",
      "Vfr": "\uD835\uDD19",
      "vfr": "\uD835\uDD33",
      "vltri": "\u22B2",
      "vnsub": "\u2282\u20D2",
      "vnsup": "\u2283\u20D2",
      "Vopf": "\uD835\uDD4D",
      "vopf": "\uD835\uDD67",
      "vprop": "\u221D",
      "vrtri": "\u22B3",
      "Vscr": "\uD835\uDCB1",
      "vscr": "\uD835\uDCCB",
      "vsubnE": "\u2ACB\uFE00",
      "vsubne": "\u228A\uFE00",
      "vsupnE": "\u2ACC\uFE00",
      "vsupne": "\u228B\uFE00",
      "Vvdash": "\u22AA",
      "vzigzag": "\u299A",
      "Wcirc": "\u0174",
      "wcirc": "\u0175",
      "wedbar": "\u2A5F",
      "Wedge": "\u22C0",
      "wedge": "\u2227",
      "wedgeq": "\u2259",
      "weierp": "\u2118",
      "Wfr": "\uD835\uDD1A",
      "wfr": "\uD835\uDD34",
      "Wopf": "\uD835\uDD4E",
      "wopf": "\uD835\uDD68",
      "wp": "\u2118",
      "wr": "\u2240",
      "wreath": "\u2240",
      "Wscr": "\uD835\uDCB2",
      "wscr": "\uD835\uDCCC",
      "xcap": "\u22C2",
      "xcirc": "\u25EF",
      "xcup": "\u22C3",
      "xdtri": "\u25BD",
      "Xfr": "\uD835\uDD1B",
      "xfr": "\uD835\uDD35",
      "xhArr": "\u27FA",
      "xharr": "\u27F7",
      "Xi": "\u039E",
      "xi": "\u03BE",
      "xlArr": "\u27F8",
      "xlarr": "\u27F5",
      "xmap": "\u27FC",
      "xnis": "\u22FB",
      "xodot": "\u2A00",
      "Xopf": "\uD835\uDD4F",
      "xopf": "\uD835\uDD69",
      "xoplus": "\u2A01",
      "xotime": "\u2A02",
      "xrArr": "\u27F9",
      "xrarr": "\u27F6",
      "Xscr": "\uD835\uDCB3",
      "xscr": "\uD835\uDCCD",
      "xsqcup": "\u2A06",
      "xuplus": "\u2A04",
      "xutri": "\u25B3",
      "xvee": "\u22C1",
      "xwedge": "\u22C0",
      "Yacute": "\xDD",
      "yacute": "\xFD",
      "YAcy": "\u042F",
      "yacy": "\u044F",
      "Ycirc": "\u0176",
      "ycirc": "\u0177",
      "Ycy": "\u042B",
      "ycy": "\u044B",
      "yen": "\xA5",
      "Yfr": "\uD835\uDD1C",
      "yfr": "\uD835\uDD36",
      "YIcy": "\u0407",
      "yicy": "\u0457",
      "Yopf": "\uD835\uDD50",
      "yopf": "\uD835\uDD6A",
      "Yscr": "\uD835\uDCB4",
      "yscr": "\uD835\uDCCE",
      "YUcy": "\u042E",
      "yucy": "\u044E",
      "Yuml": "\u0178",
      "yuml": "\xFF",
      "Zacute": "\u0179",
      "zacute": "\u017A",
      "Zcaron": "\u017D",
      "zcaron": "\u017E",
      "Zcy": "\u0417",
      "zcy": "\u0437",
      "Zdot": "\u017B",
      "zdot": "\u017C",
      "zeetrf": "\u2128",
      "ZeroWidthSpace": "\u200B",
      "Zeta": "\u0396",
      "zeta": "\u03B6",
      "Zfr": "\u2128",
      "zfr": "\uD835\uDD37",
      "ZHcy": "\u0416",
      "zhcy": "\u0436",
      "zigrarr": "\u21DD",
      "Zopf": "\u2124",
      "zopf": "\uD835\uDD6B",
      "Zscr": "\uD835\uDCB5",
      "zscr": "\uD835\uDCCF",
      "zwj": "\u200D",
      "zwnj": "\u200C"
    };
    var hasOwn = Object.prototype.hasOwnProperty;

    function has(object, key) {
      return object ? hasOwn.call(object, key) : false;
    }

    function decodeEntity(name) {
      if (has(entities, name)) {
        return entities[name];
      } else {
        return name;
      }
    }

    var hasOwn$1 = Object.prototype.hasOwnProperty;

    function has$1(object, key) {
      return object ? hasOwn$1.call(object, key) : false;
    } // Extend objects
    //


    function assign(obj
    /*from1, from2, from3, ...*/
    ) {
      var sources = [].slice.call(arguments, 1);
      sources.forEach(function (source) {
        if (!source) {
          return;
        }

        if (_typeof(source) !== 'object') {
          throw new TypeError(source + 'must be object');
        }

        Object.keys(source).forEach(function (key) {
          obj[key] = source[key];
        });
      });
      return obj;
    } ////////////////////////////////////////////////////////////////////////////////


    var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

    function unescapeMd(str) {
      if (str.indexOf('\\') < 0) {
        return str;
      }

      return str.replace(UNESCAPE_MD_RE, '$1');
    } ////////////////////////////////////////////////////////////////////////////////


    function isValidEntityCode(c) {
      /*eslint no-bitwise:0*/
      // broken sequence
      if (c >= 0xD800 && c <= 0xDFFF) {
        return false;
      } // never used


      if (c >= 0xFDD0 && c <= 0xFDEF) {
        return false;
      }

      if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) {
        return false;
      } // control codes


      if (c >= 0x00 && c <= 0x08) {
        return false;
      }

      if (c === 0x0B) {
        return false;
      }

      if (c >= 0x0E && c <= 0x1F) {
        return false;
      }

      if (c >= 0x7F && c <= 0x9F) {
        return false;
      } // out of range


      if (c > 0x10FFFF) {
        return false;
      }

      return true;
    }

    function fromCodePoint(c) {
      /*eslint no-bitwise:0*/
      if (c > 0xffff) {
        c -= 0x10000;
        var surrogate1 = 0xd800 + (c >> 10),
            surrogate2 = 0xdc00 + (c & 0x3ff);
        return String.fromCharCode(surrogate1, surrogate2);
      }

      return String.fromCharCode(c);
    }

    var NAMED_ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

    function replaceEntityPattern(match, name) {
      var code = 0;
      var decoded = decodeEntity(name);

      if (name !== decoded) {
        return decoded;
      } else if (name.charCodeAt(0) === 0x23
      /* # */
      && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

        if (isValidEntityCode(code)) {
          return fromCodePoint(code);
        }
      }

      return match;
    }

    function replaceEntities(str) {
      if (str.indexOf('&') < 0) {
        return str;
      }

      return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
    } ////////////////////////////////////////////////////////////////////////////////


    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;'
    };

    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }

    function escapeHtml(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }

      return str;
    }
    /**
     * Renderer rules cache
     */


    var rules = {};
    /**
     * Blockquotes
     */

    rules.blockquote_open = function ()
    /* tokens, idx, options, env */
    {
      return '<blockquote>\n';
    };

    rules.blockquote_close = function (tokens, idx
    /*, options, env */
    ) {
      return '</blockquote>' + getBreak(tokens, idx);
    };
    /**
     * Code
     */


    rules.code = function (tokens, idx
    /*, options, env */
    ) {
      if (tokens[idx].block) {
        return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
      }

      return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
    };
    /**
     * Fenced code blocks
     */


    rules.fence = function (tokens, idx, options, env, instance) {
      var token = tokens[idx];
      var langClass = '';
      var langPrefix = options.langPrefix;
      var langName = '',
          fences,
          fenceName;
      var highlighted;

      if (token.params) {
        //
        // ```foo bar
        //
        // Try custom renderer "foo" first. That will simplify overwrite
        // for diagrams, latex, and any other fenced block with custom look
        //
        fences = token.params.split(/\s+/g);
        fenceName = fences.join(' ');

        if (has$1(instance.rules.fence_custom, fences[0])) {
          return instance.rules.fence_custom[fences[0]](tokens, idx, options, env, instance);
        }

        langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
        langClass = ' class="' + langPrefix + langName + '"';
      }

      if (options.highlight) {
        highlighted = options.highlight.apply(options.highlight, [token.content].concat(fences)) || escapeHtml(token.content);
      } else {
        highlighted = escapeHtml(token.content);
      }

      return '<pre><code' + langClass + '>' + highlighted + '</code></pre>' + getBreak(tokens, idx);
    };

    rules.fence_custom = {};
    /**
     * Headings
     */

    rules.heading_open = function (tokens, idx
    /*, options, env */
    ) {
      return '<h' + tokens[idx].hLevel + '>';
    };

    rules.heading_close = function (tokens, idx
    /*, options, env */
    ) {
      return '</h' + tokens[idx].hLevel + '>\n';
    };
    /**
     * Horizontal rules
     */


    rules.hr = function (tokens, idx, options
    /*, env */
    ) {
      return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
    };
    /**
     * Bullets
     */


    rules.bullet_list_open = function ()
    /* tokens, idx, options, env */
    {
      return '<ul>\n';
    };

    rules.bullet_list_close = function (tokens, idx
    /*, options, env */
    ) {
      return '</ul>' + getBreak(tokens, idx);
    };
    /**
     * List items
     */


    rules.list_item_open = function ()
    /* tokens, idx, options, env */
    {
      return '<li>';
    };

    rules.list_item_close = function ()
    /* tokens, idx, options, env */
    {
      return '</li>\n';
    };
    /**
     * Ordered list items
     */


    rules.ordered_list_open = function (tokens, idx
    /*, options, env */
    ) {
      var token = tokens[idx];
      var order = token.order > 1 ? ' start="' + token.order + '"' : '';
      return '<ol' + order + '>\n';
    };

    rules.ordered_list_close = function (tokens, idx
    /*, options, env */
    ) {
      return '</ol>' + getBreak(tokens, idx);
    };
    /**
     * Paragraphs
     */


    rules.paragraph_open = function (tokens, idx
    /*, options, env */
    ) {
      return tokens[idx].tight ? '' : '<p>';
    };

    rules.paragraph_close = function (tokens, idx
    /*, options, env */
    ) {
      var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
      return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
    };
    /**
     * Links
     */


    rules.link_open = function (tokens, idx, options
    /* env */
    ) {
      var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : '';
      var target = options.linkTarget ? ' target="' + options.linkTarget + '"' : '';
      return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + '>';
    };

    rules.link_close = function ()
    /* tokens, idx, options, env */
    {
      return '</a>';
    };
    /**
     * Images
     */


    rules.image = function (tokens, idx, options
    /*, env */
    ) {
      var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
      var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : '';
      var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : '') + '"';
      var suffix = options.xhtmlOut ? ' /' : '';
      return '<img' + src + alt + title + suffix + '>';
    };
    /**
     * Tables
     */


    rules.table_open = function ()
    /* tokens, idx, options, env */
    {
      return '<table>\n';
    };

    rules.table_close = function ()
    /* tokens, idx, options, env */
    {
      return '</table>\n';
    };

    rules.thead_open = function ()
    /* tokens, idx, options, env */
    {
      return '<thead>\n';
    };

    rules.thead_close = function ()
    /* tokens, idx, options, env */
    {
      return '</thead>\n';
    };

    rules.tbody_open = function ()
    /* tokens, idx, options, env */
    {
      return '<tbody>\n';
    };

    rules.tbody_close = function ()
    /* tokens, idx, options, env */
    {
      return '</tbody>\n';
    };

    rules.tr_open = function ()
    /* tokens, idx, options, env */
    {
      return '<tr>';
    };

    rules.tr_close = function ()
    /* tokens, idx, options, env */
    {
      return '</tr>\n';
    };

    rules.th_open = function (tokens, idx
    /*, options, env */
    ) {
      var token = tokens[idx];
      return '<th' + (token.align ? ' style="text-align:' + token.align + '"' : '') + '>';
    };

    rules.th_close = function ()
    /* tokens, idx, options, env */
    {
      return '</th>';
    };

    rules.td_open = function (tokens, idx
    /*, options, env */
    ) {
      var token = tokens[idx];
      return '<td' + (token.align ? ' style="text-align:' + token.align + '"' : '') + '>';
    };

    rules.td_close = function ()
    /* tokens, idx, options, env */
    {
      return '</td>';
    };
    /**
     * Bold
     */


    rules.strong_open = function ()
    /* tokens, idx, options, env */
    {
      return '<strong>';
    };

    rules.strong_close = function ()
    /* tokens, idx, options, env */
    {
      return '</strong>';
    };
    /**
     * Italicize
     */


    rules.em_open = function ()
    /* tokens, idx, options, env */
    {
      return '<em>';
    };

    rules.em_close = function ()
    /* tokens, idx, options, env */
    {
      return '</em>';
    };
    /**
     * Strikethrough
     */


    rules.del_open = function ()
    /* tokens, idx, options, env */
    {
      return '<del>';
    };

    rules.del_close = function ()
    /* tokens, idx, options, env */
    {
      return '</del>';
    };
    /**
     * Insert
     */


    rules.ins_open = function ()
    /* tokens, idx, options, env */
    {
      return '<ins>';
    };

    rules.ins_close = function ()
    /* tokens, idx, options, env */
    {
      return '</ins>';
    };
    /**
     * Highlight
     */


    rules.mark_open = function ()
    /* tokens, idx, options, env */
    {
      return '<mark>';
    };

    rules.mark_close = function ()
    /* tokens, idx, options, env */
    {
      return '</mark>';
    };
    /**
     * Super- and sub-script
     */


    rules.sub = function (tokens, idx
    /*, options, env */
    ) {
      return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
    };

    rules.sup = function (tokens, idx
    /*, options, env */
    ) {
      return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
    };
    /**
     * Breaks
     */


    rules.hardbreak = function (tokens, idx, options
    /*, env */
    ) {
      return options.xhtmlOut ? '<br />\n' : '<br>\n';
    };

    rules.softbreak = function (tokens, idx, options
    /*, env */
    ) {
      return options.breaks ? options.xhtmlOut ? '<br />\n' : '<br>\n' : '\n';
    };
    /**
     * Text
     */


    rules.text = function (tokens, idx
    /*, options, env */
    ) {
      return escapeHtml(tokens[idx].content);
    };
    /**
     * Content
     */


    rules.htmlblock = function (tokens, idx
    /*, options, env */
    ) {
      return tokens[idx].content;
    };

    rules.htmltag = function (tokens, idx
    /*, options, env */
    ) {
      return tokens[idx].content;
    };
    /**
     * Abbreviations, initialism
     */


    rules.abbr_open = function (tokens, idx
    /*, options, env */
    ) {
      return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
    };

    rules.abbr_close = function ()
    /* tokens, idx, options, env */
    {
      return '</abbr>';
    };
    /**
     * Footnotes
     */


    rules.footnote_ref = function (tokens, idx) {
      var n = Number(tokens[idx].id + 1).toString();
      var id = 'fnref' + n;

      if (tokens[idx].subId > 0) {
        id += ':' + tokens[idx].subId;
      }

      return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
    };

    rules.footnote_block_open = function (tokens, idx, options) {
      var hr = options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
      return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
    };

    rules.footnote_block_close = function () {
      return '</ol>\n</section>\n';
    };

    rules.footnote_open = function (tokens, idx) {
      var id = Number(tokens[idx].id + 1).toString();
      return '<li id="fn' + id + '"  class="footnote-item">';
    };

    rules.footnote_close = function () {
      return '</li>\n';
    };

    rules.footnote_anchor = function (tokens, idx) {
      var n = Number(tokens[idx].id + 1).toString();
      var id = 'fnref' + n;

      if (tokens[idx].subId > 0) {
        id += ':' + tokens[idx].subId;
      }

      return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
    };
    /**
     * Definition lists
     */


    rules.dl_open = function () {
      return '<dl>\n';
    };

    rules.dt_open = function () {
      return '<dt>';
    };

    rules.dd_open = function () {
      return '<dd>';
    };

    rules.dl_close = function () {
      return '</dl>\n';
    };

    rules.dt_close = function () {
      return '</dt>\n';
    };

    rules.dd_close = function () {
      return '</dd>\n';
    };
    /**
     * Helper functions
     */


    function nextToken(tokens, idx) {
      if (++idx >= tokens.length - 2) {
        return idx;
      }

      if (tokens[idx].type === 'paragraph_open' && tokens[idx].tight && tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0 && tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight) {
        return nextToken(tokens, idx + 2);
      }

      return idx;
    }
    /**
     * Check to see if `\n` is needed before the next token.
     *
     * @param  {Array} `tokens`
     * @param  {Number} `idx`
     * @return {String} Empty string or newline
     * @api private
     */


    var getBreak = rules.getBreak = function getBreak(tokens, idx) {
      idx = nextToken(tokens, idx);

      if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
        return '';
      }

      return '\n';
    };
    /**
     * Renderer class. Renders HTML and exposes `rules` to allow
     * local modifications.
     */


    function Renderer() {
      this.rules = assign({}, rules); // exported helper, for custom rules only

      this.getBreak = rules.getBreak;
    }
    /**
     * Render a string of inline HTML with the given `tokens` and
     * `options`.
     *
     * @param  {Array} `tokens`
     * @param  {Object} `options`
     * @param  {Object} `env`
     * @return {String}
     * @api public
     */


    Renderer.prototype.renderInline = function (tokens, options, env) {
      var _rules = this.rules;
      var len = tokens.length,
          i = 0;
      var result = '';

      while (len--) {
        result += _rules[tokens[i].type](tokens, i++, options, env, this);
      }

      return result;
    };
    /**
     * Render a string of HTML with the given `tokens` and
     * `options`.
     *
     * @param  {Array} `tokens`
     * @param  {Object} `options`
     * @param  {Object} `env`
     * @return {String}
     * @api public
     */


    Renderer.prototype.render = function (tokens, options, env) {
      var _rules = this.rules;
      var len = tokens.length,
          i = -1;
      var result = '';

      while (++i < len) {
        if (tokens[i].type === 'inline') {
          result += this.renderInline(tokens[i].children, options, env);
        } else {
          result += _rules[tokens[i].type](tokens, i, options, env, this);
        }
      }

      return result;
    };
    /**
     * Ruler is a helper class for building responsibility chains from
     * parse rules. It allows:
     *
     *   - easy stack rules chains
     *   - getting main chain and named chains content (as arrays of functions)
     *
     * Helper methods, should not be used directly.
     * @api private
     */


    function Ruler() {
      // List of added rules. Each element is:
      //
      // { name: XXX,
      //   enabled: Boolean,
      //   fn: Function(),
      //   alt: [ name2, name3 ] }
      //
      this.__rules__ = []; // Cached rule chains.
      //
      // First level - chain name, '' for default.
      // Second level - digital anchor for fast filtering by charcodes.
      //

      this.__cache__ = null;
    }
    /**
     * Find the index of a rule by `name`.
     *
     * @param  {String} `name`
     * @return {Number} Index of the given `name`
     * @api private
     */


    Ruler.prototype.__find__ = function (name) {
      var len = this.__rules__.length;
      var i = -1;

      while (len--) {
        if (this.__rules__[++i].name === name) {
          return i;
        }
      }

      return -1;
    };
    /**
     * Build the rules lookup cache
     *
     * @api private
     */


    Ruler.prototype.__compile__ = function () {
      var self = this;
      var chains = ['']; // collect unique names

      self.__rules__.forEach(function (rule) {
        if (!rule.enabled) {
          return;
        }

        rule.alt.forEach(function (altName) {
          if (chains.indexOf(altName) < 0) {
            chains.push(altName);
          }
        });
      });

      self.__cache__ = {};
      chains.forEach(function (chain) {
        self.__cache__[chain] = [];

        self.__rules__.forEach(function (rule) {
          if (!rule.enabled) {
            return;
          }

          if (chain && rule.alt.indexOf(chain) < 0) {
            return;
          }

          self.__cache__[chain].push(rule.fn);
        });
      });
    };
    /**
     * Ruler public methods
     * ------------------------------------------------
     */

    /**
     * Replace rule function
     *
     * @param  {String} `name` Rule name
     * @param  {Function `fn`
     * @param  {Object} `options`
     * @api private
     */


    Ruler.prototype.at = function (name, fn, options) {
      var idx = this.__find__(name);

      var opt = options || {};

      if (idx === -1) {
        throw new Error('Parser rule not found: ' + name);
      }

      this.__rules__[idx].fn = fn;
      this.__rules__[idx].alt = opt.alt || [];
      this.__cache__ = null;
    };
    /**
     * Add a rule to the chain before given the `ruleName`.
     *
     * @param  {String}   `beforeName`
     * @param  {String}   `ruleName`
     * @param  {Function} `fn`
     * @param  {Object}   `options`
     * @api private
     */


    Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
      var idx = this.__find__(beforeName);

      var opt = options || {};

      if (idx === -1) {
        throw new Error('Parser rule not found: ' + beforeName);
      }

      this.__rules__.splice(idx, 0, {
        name: ruleName,
        enabled: true,
        fn: fn,
        alt: opt.alt || []
      });

      this.__cache__ = null;
    };
    /**
     * Add a rule to the chain after the given `ruleName`.
     *
     * @param  {String}   `afterName`
     * @param  {String}   `ruleName`
     * @param  {Function} `fn`
     * @param  {Object}   `options`
     * @api private
     */


    Ruler.prototype.after = function (afterName, ruleName, fn, options) {
      var idx = this.__find__(afterName);

      var opt = options || {};

      if (idx === -1) {
        throw new Error('Parser rule not found: ' + afterName);
      }

      this.__rules__.splice(idx + 1, 0, {
        name: ruleName,
        enabled: true,
        fn: fn,
        alt: opt.alt || []
      });

      this.__cache__ = null;
    };
    /**
     * Add a rule to the end of chain.
     *
     * @param  {String}   `ruleName`
     * @param  {Function} `fn`
     * @param  {Object}   `options`
     * @return {String}
     */


    Ruler.prototype.push = function (ruleName, fn, options) {
      var opt = options || {};

      this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn: fn,
        alt: opt.alt || []
      });

      this.__cache__ = null;
    };
    /**
     * Enable a rule or list of rules.
     *
     * @param  {String|Array} `list` Name or array of rule names to enable
     * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
     * @api private
     */


    Ruler.prototype.enable = function (list, strict) {
      list = !Array.isArray(list) ? [list] : list; // In strict mode disable all existing rules first

      if (strict) {
        this.__rules__.forEach(function (rule) {
          rule.enabled = false;
        });
      } // Search by name and enable


      list.forEach(function (name) {
        var idx = this.__find__(name);

        if (idx < 0) {
          throw new Error('Rules manager: invalid rule name ' + name);
        }

        this.__rules__[idx].enabled = true;
      }, this);
      this.__cache__ = null;
    };
    /**
     * Disable a rule or list of rules.
     *
     * @param  {String|Array} `list` Name or array of rule names to disable
     * @api private
     */


    Ruler.prototype.disable = function (list) {
      list = !Array.isArray(list) ? [list] : list; // Search by name and disable

      list.forEach(function (name) {
        var idx = this.__find__(name);

        if (idx < 0) {
          throw new Error('Rules manager: invalid rule name ' + name);
        }

        this.__rules__[idx].enabled = false;
      }, this);
      this.__cache__ = null;
    };
    /**
     * Get a rules list as an array of functions.
     *
     * @param  {String} `chainName`
     * @return {Object}
     * @api private
     */


    Ruler.prototype.getRules = function (chainName) {
      if (this.__cache__ === null) {
        this.__compile__();
      }

      return this.__cache__[chainName] || [];
    };

    function block(state) {
      if (state.inlineMode) {
        state.tokens.push({
          type: 'inline',
          content: state.src.replace(/\n/g, ' ').trim(),
          level: 0,
          lines: [0, 1],
          children: []
        });
      } else {
        state.block.parse(state.src, state.options, state.env, state.tokens);
      }
    } // Inline parser state


    function StateInline(src, parserInline, options, env, outTokens) {
      this.src = src;
      this.env = env;
      this.options = options;
      this.parser = parserInline;
      this.tokens = outTokens;
      this.pos = 0;
      this.posMax = this.src.length;
      this.level = 0;
      this.pending = '';
      this.pendingLevel = 0;
      this.cache = []; // Stores { start: end } pairs. Useful for backtrack
      // optimization of pairs parse (emphasis, strikes).
      // Link parser state vars

      this.isInLabel = false; // Set true when seek link label - we should disable
      // "paired" rules (emphasis, strikes) to not skip
      // tailing `]`

      this.linkLevel = 0; // Increment for each nesting link. Used to prevent
      // nesting in definitions

      this.linkContent = ''; // Temporary storage for link url

      this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
      // (backtrack optimization)
    } // Flush pending text
    //


    StateInline.prototype.pushPending = function () {
      this.tokens.push({
        type: 'text',
        content: this.pending,
        level: this.pendingLevel
      });
      this.pending = '';
    }; // Push new token to "stream".
    // If pending text exists - flush it as text token
    //


    StateInline.prototype.push = function (token) {
      if (this.pending) {
        this.pushPending();
      }

      this.tokens.push(token);
      this.pendingLevel = this.level;
    }; // Store value to cache.
    // !!! Implementation has parser-specific optimizations
    // !!! keys MUST be integer, >= 0; values MUST be integer, > 0
    //


    StateInline.prototype.cacheSet = function (key, val) {
      for (var i = this.cache.length; i <= key; i++) {
        this.cache.push(0);
      }

      this.cache[key] = val;
    }; // Get cache value
    //


    StateInline.prototype.cacheGet = function (key) {
      return key < this.cache.length ? this.cache[key] : 0;
    };
    /**
     * Parse link labels
     *
     * This function assumes that first character (`[`) already matches;
     * returns the end of the label.
     *
     * @param  {Object} state
     * @param  {Number} start
     * @api private
     */


    function parseLinkLabel(state, start) {
      var level,
          found,
          marker,
          labelEnd = -1,
          max = state.posMax,
          oldPos = state.pos,
          oldFlag = state.isInLabel;

      if (state.isInLabel) {
        return -1;
      }

      if (state.labelUnmatchedScopes) {
        state.labelUnmatchedScopes--;
        return -1;
      }

      state.pos = start + 1;
      state.isInLabel = true;
      level = 1;

      while (state.pos < max) {
        marker = state.src.charCodeAt(state.pos);

        if (marker === 0x5B
        /* [ */
        ) {
            level++;
          } else if (marker === 0x5D
        /* ] */
        ) {
            level--;

            if (level === 0) {
              found = true;
              break;
            }
          }

        state.parser.skipToken(state);
      }

      if (found) {
        labelEnd = state.pos;
        state.labelUnmatchedScopes = 0;
      } else {
        state.labelUnmatchedScopes = level - 1;
      } // restore old state


      state.pos = oldPos;
      state.isInLabel = oldFlag;
      return labelEnd;
    } // Parse abbreviation definitions, i.e. `*[abbr]: description`


    function parseAbbr(str, parserInline, options, env) {
      var state, labelEnd, pos, max, label, title;

      if (str.charCodeAt(0) !== 0x2A
      /* * */
      ) {
          return -1;
        }

      if (str.charCodeAt(1) !== 0x5B
      /* [ */
      ) {
          return -1;
        }

      if (str.indexOf(']:') === -1) {
        return -1;
      }

      state = new StateInline(str, parserInline, options, env, []);
      labelEnd = parseLinkLabel(state, 1);

      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A
      /* : */
      ) {
          return -1;
        }

      max = state.posMax; // abbr title is always one line, so looking for ending "\n" here

      for (pos = labelEnd + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x0A) {
          break;
        }
      }

      label = str.slice(2, labelEnd);
      title = str.slice(labelEnd + 2, pos).trim();

      if (title.length === 0) {
        return -1;
      }

      if (!env.abbreviations) {
        env.abbreviations = {};
      } // prepend ':' to avoid conflict with Object.prototype members


      if (typeof env.abbreviations[':' + label] === 'undefined') {
        env.abbreviations[':' + label] = title;
      }

      return pos;
    }

    function abbr(state) {
      var tokens = state.tokens,
          i,
          l,
          content,
          pos;

      if (state.inlineMode) {
        return;
      } // Parse inlines


      for (i = 1, l = tokens.length - 1; i < l; i++) {
        if (tokens[i - 1].type === 'paragraph_open' && tokens[i].type === 'inline' && tokens[i + 1].type === 'paragraph_close') {
          content = tokens[i].content;

          while (content.length) {
            pos = parseAbbr(content, state.inline, state.options, state.env);

            if (pos < 0) {
              break;
            }

            content = content.slice(pos).trim();
          }

          tokens[i].content = content;

          if (!content.length) {
            tokens[i - 1].tight = true;
            tokens[i + 1].tight = true;
          }
        }
      }
    }

    function normalizeLink(url) {
      var normalized = replaceEntities(url); // We shouldn't care about the result of malformed URIs,
      // and should not throw an exception.

      try {
        normalized = decodeURI(normalized);
      } catch (err) {}

      return encodeURI(normalized);
    }
    /**
     * Parse link destination
     *
     *   - on success it returns a string and updates state.pos;
     *   - on failure it returns null
     *
     * @param  {Object} state
     * @param  {Number} pos
     * @api private
     */


    function parseLinkDestination(state, pos) {
      var code,
          level,
          link,
          start = pos,
          max = state.posMax;

      if (state.src.charCodeAt(pos) === 0x3C
      /* < */
      ) {
          pos++;

          while (pos < max) {
            code = state.src.charCodeAt(pos);

            if (code === 0x0A
            /* \n */
            ) {
                return false;
              }

            if (code === 0x3E
            /* > */
            ) {
                link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));

                if (!state.parser.validateLink(link)) {
                  return false;
                }

                state.pos = pos + 1;
                state.linkContent = link;
                return true;
              }

            if (code === 0x5C
            /* \ */
            && pos + 1 < max) {
              pos += 2;
              continue;
            }

            pos++;
          } // no closing '>'


          return false;
        } // this should be ... } else { ... branch


      level = 0;

      while (pos < max) {
        code = state.src.charCodeAt(pos);

        if (code === 0x20) {
          break;
        } // ascii control chars


        if (code < 0x20 || code === 0x7F) {
          break;
        }

        if (code === 0x5C
        /* \ */
        && pos + 1 < max) {
          pos += 2;
          continue;
        }

        if (code === 0x28
        /* ( */
        ) {
            level++;

            if (level > 1) {
              break;
            }
          }

        if (code === 0x29
        /* ) */
        ) {
            level--;

            if (level < 0) {
              break;
            }
          }

        pos++;
      }

      if (start === pos) {
        return false;
      }

      link = unescapeMd(state.src.slice(start, pos));

      if (!state.parser.validateLink(link)) {
        return false;
      }

      state.linkContent = link;
      state.pos = pos;
      return true;
    }
    /**
     * Parse link title
     *
     *   - on success it returns a string and updates state.pos;
     *   - on failure it returns null
     *
     * @param  {Object} state
     * @param  {Number} pos
     * @api private
     */


    function parseLinkTitle(state, pos) {
      var code,
          start = pos,
          max = state.posMax,
          marker = state.src.charCodeAt(pos);

      if (marker !== 0x22
      /* " */
      && marker !== 0x27
      /* ' */
      && marker !== 0x28
      /* ( */
      ) {
          return false;
        }

      pos++; // if opening marker is "(", switch it to closing marker ")"

      if (marker === 0x28) {
        marker = 0x29;
      }

      while (pos < max) {
        code = state.src.charCodeAt(pos);

        if (code === marker) {
          state.pos = pos + 1;
          state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
          return true;
        }

        if (code === 0x5C
        /* \ */
        && pos + 1 < max) {
          pos += 2;
          continue;
        }

        pos++;
      }

      return false;
    }

    function normalizeReference(str) {
      // use .toUpperCase() instead of .toLowerCase()
      // here to avoid a conflict with Object.prototype
      // members (most notably, `__proto__`)
      return str.trim().replace(/\s+/g, ' ').toUpperCase();
    }

    function parseReference(str, parser, options, env) {
      var state, labelEnd, pos, max, code, start, href, title, label;

      if (str.charCodeAt(0) !== 0x5B
      /* [ */
      ) {
          return -1;
        }

      if (str.indexOf(']:') === -1) {
        return -1;
      }

      state = new StateInline(str, parser, options, env, []);
      labelEnd = parseLinkLabel(state, 0);

      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A
      /* : */
      ) {
          return -1;
        }

      max = state.posMax; // [label]:   destination   'title'
      //         ^^^ skip optional whitespace here

      for (pos = labelEnd + 2; pos < max; pos++) {
        code = state.src.charCodeAt(pos);

        if (code !== 0x20 && code !== 0x0A) {
          break;
        }
      } // [label]:   destination   'title'
      //            ^^^^^^^^^^^ parse this


      if (!parseLinkDestination(state, pos)) {
        return -1;
      }

      href = state.linkContent;
      pos = state.pos; // [label]:   destination   'title'
      //                       ^^^ skipping those spaces

      start = pos;

      for (pos = pos + 1; pos < max; pos++) {
        code = state.src.charCodeAt(pos);

        if (code !== 0x20 && code !== 0x0A) {
          break;
        }
      } // [label]:   destination   'title'
      //                          ^^^^^^^ parse this


      if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
        title = state.linkContent;
        pos = state.pos;
      } else {
        title = '';
        pos = start;
      } // ensure that the end of the line is empty


      while (pos < max && state.src.charCodeAt(pos) === 0x20
      /* space */
      ) {
        pos++;
      }

      if (pos < max && state.src.charCodeAt(pos) !== 0x0A) {
        return -1;
      }

      label = normalizeReference(str.slice(1, labelEnd));

      if (typeof env.references[label] === 'undefined') {
        env.references[label] = {
          title: title,
          href: href
        };
      }

      return pos;
    }

    function references(state) {
      var tokens = state.tokens,
          i,
          l,
          content,
          pos;
      state.env.references = state.env.references || {};

      if (state.inlineMode) {
        return;
      } // Scan definitions in paragraph inlines


      for (i = 1, l = tokens.length - 1; i < l; i++) {
        if (tokens[i].type === 'inline' && tokens[i - 1].type === 'paragraph_open' && tokens[i + 1].type === 'paragraph_close') {
          content = tokens[i].content;

          while (content.length) {
            pos = parseReference(content, state.inline, state.options, state.env);

            if (pos < 0) {
              break;
            }

            content = content.slice(pos).trim();
          }

          tokens[i].content = content;

          if (!content.length) {
            tokens[i - 1].tight = true;
            tokens[i + 1].tight = true;
          }
        }
      }
    }

    function inline(state) {
      var tokens = state.tokens,
          tok,
          i,
          l; // Parse inlines

      for (i = 0, l = tokens.length; i < l; i++) {
        tok = tokens[i];

        if (tok.type === 'inline') {
          state.inline.parse(tok.content, state.options, state.env, tok.children);
        }
      }
    }

    function footnote_block(state) {
      var i,
          l,
          j,
          t,
          lastParagraph,
          list,
          tokens,
          current,
          currentLabel,
          level = 0,
          insideRef = false,
          refTokens = {};

      if (!state.env.footnotes) {
        return;
      }

      state.tokens = state.tokens.filter(function (tok) {
        if (tok.type === 'footnote_reference_open') {
          insideRef = true;
          current = [];
          currentLabel = tok.label;
          return false;
        }

        if (tok.type === 'footnote_reference_close') {
          insideRef = false; // prepend ':' to avoid conflict with Object.prototype members

          refTokens[':' + currentLabel] = current;
          return false;
        }

        if (insideRef) {
          current.push(tok);
        }

        return !insideRef;
      });

      if (!state.env.footnotes.list) {
        return;
      }

      list = state.env.footnotes.list;
      state.tokens.push({
        type: 'footnote_block_open',
        level: level++
      });

      for (i = 0, l = list.length; i < l; i++) {
        state.tokens.push({
          type: 'footnote_open',
          id: i,
          level: level++
        });

        if (list[i].tokens) {
          tokens = [];
          tokens.push({
            type: 'paragraph_open',
            tight: false,
            level: level++
          });
          tokens.push({
            type: 'inline',
            content: '',
            level: level,
            children: list[i].tokens
          });
          tokens.push({
            type: 'paragraph_close',
            tight: false,
            level: --level
          });
        } else if (list[i].label) {
          tokens = refTokens[':' + list[i].label];
        }

        state.tokens = state.tokens.concat(tokens);

        if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
          lastParagraph = state.tokens.pop();
        } else {
          lastParagraph = null;
        }

        t = list[i].count > 0 ? list[i].count : 1;

        for (j = 0; j < t; j++) {
          state.tokens.push({
            type: 'footnote_anchor',
            id: i,
            subId: j,
            level: level
          });
        }

        if (lastParagraph) {
          state.tokens.push(lastParagraph);
        }

        state.tokens.push({
          type: 'footnote_close',
          level: --level
        });
      }

      state.tokens.push({
        type: 'footnote_block_close',
        level: --level
      });
    } // Enclose abbreviations in <abbr> tags
    //


    var PUNCT_CHARS = ' \n()[]\'".,!?-'; // from Google closure library
    // http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021

    function regEscape(s) {
      return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
    }

    function abbr2(state) {
      var i,
          j,
          l,
          tokens,
          token,
          text,
          nodes,
          pos,
          level,
          reg,
          m,
          regText,
          blockTokens = state.tokens;

      if (!state.env.abbreviations) {
        return;
      }

      if (!state.env.abbrRegExp) {
        regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])' + '(' + Object.keys(state.env.abbreviations).map(function (x) {
          return x.substr(1);
        }).sort(function (a, b) {
          return b.length - a.length;
        }).map(regEscape).join('|') + ')' + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
        state.env.abbrRegExp = new RegExp(regText, 'g');
      }

      reg = state.env.abbrRegExp;

      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== 'inline') {
          continue;
        }

        tokens = blockTokens[j].children; // We scan from the end, to keep position when new tags added.

        for (i = tokens.length - 1; i >= 0; i--) {
          token = tokens[i];

          if (token.type !== 'text') {
            continue;
          }

          pos = 0;
          text = token.content;
          reg.lastIndex = 0;
          level = token.level;
          nodes = [];

          while (m = reg.exec(text)) {
            if (reg.lastIndex > pos) {
              nodes.push({
                type: 'text',
                content: text.slice(pos, m.index + m[1].length),
                level: level
              });
            }

            nodes.push({
              type: 'abbr_open',
              title: state.env.abbreviations[':' + m[2]],
              level: level++
            });
            nodes.push({
              type: 'text',
              content: m[2],
              level: level
            });
            nodes.push({
              type: 'abbr_close',
              level: --level
            });
            pos = reg.lastIndex - m[3].length;
          }

          if (!nodes.length) {
            continue;
          }

          if (pos < text.length) {
            nodes.push({
              type: 'text',
              content: text.slice(pos),
              level: level
            });
          } // replace current node


          blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
        }
      }
    } // Simple typographical replacements
    //
    // TODO:
    // - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
    // - miltiplication 2 x 4 -> 2 × 4


    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
    var SCOPED_ABBR = {
      'c': '©',
      'r': '®',
      'p': '§',
      'tm': '™'
    };

    function replaceScopedAbbr(str) {
      if (str.indexOf('(') < 0) {
        return str;
      }

      return str.replace(SCOPED_ABBR_RE, function (match, name) {
        return SCOPED_ABBR[name.toLowerCase()];
      });
    }

    function replace(state) {
      var i, token, text, inlineTokens, blkIdx;

      if (!state.options.typographer) {
        return;
      }

      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== 'inline') {
          continue;
        }

        inlineTokens = state.tokens[blkIdx].children;

        for (i = inlineTokens.length - 1; i >= 0; i--) {
          token = inlineTokens[i];

          if (token.type === 'text') {
            text = token.content;
            text = replaceScopedAbbr(text);

            if (RARE_RE.test(text)) {
              text = text.replace(/\+-/g, '±') // .., ..., ....... -> …
              // but ?..... & !..... -> ?.. & !..
              .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..').replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',') // em-dash
              .replace(/(^|[^-])---([^-]|$)/mg, "$1\u2014$2") // en-dash
              .replace(/(^|\s)--(\s|$)/mg, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1\u2013$2");
            }

            token.content = text;
          }
        }
      }
    } // Convert straight quotation marks to typographic ones
    //


    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var PUNCT_RE = /[-\s()\[\]]/;
    var APOSTROPHE = '’'; // This function returns true if the character at `pos`
    // could be inside a word.

    function isLetter(str, pos) {
      if (pos < 0 || pos >= str.length) {
        return false;
      }

      return !PUNCT_RE.test(str[pos]);
    }

    function replaceAt(str, index, ch) {
      return str.substr(0, index) + ch + str.substr(index + 1);
    }

    function smartquotes(state) {
      /*eslint max-depth:0*/
      var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item, canOpen, canClose, j, isSingle, blkIdx, tokens, stack;

      if (!state.options.typographer) {
        return;
      }

      stack = [];

      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== 'inline') {
          continue;
        }

        tokens = state.tokens[blkIdx].children;
        stack.length = 0;

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];

          if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) {
            continue;
          }

          thisLevel = tokens[i].level;

          for (j = stack.length - 1; j >= 0; j--) {
            if (stack[j].level <= thisLevel) {
              break;
            }
          }

          stack.length = j + 1;
          text = token.content;
          pos = 0;
          max = text.length;
          /*eslint no-labels:0,block-scoped-var:0*/

          OUTER: while (pos < max) {
            QUOTE_RE.lastIndex = pos;
            t = QUOTE_RE.exec(text);

            if (!t) {
              break;
            }

            lastSpace = !isLetter(text, t.index - 1);
            pos = t.index + 1;
            isSingle = t[0] === "'";
            nextSpace = !isLetter(text, pos);

            if (!nextSpace && !lastSpace) {
              // middle of word
              if (isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }

              continue;
            }

            canOpen = !nextSpace;
            canClose = !lastSpace;

            if (canClose) {
              // this could be a closing quote, rewind the stack to get a match
              for (j = stack.length - 1; j >= 0; j--) {
                item = stack[j];

                if (stack[j].level < thisLevel) {
                  break;
                }

                if (item.single === isSingle && stack[j].level === thisLevel) {
                  item = stack[j];

                  if (isSingle) {
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
                    token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
                  } else {
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
                    token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
                  }

                  stack.length = j;
                  continue OUTER;
                }
              }
            }

            if (canOpen) {
              stack.push({
                token: i,
                pos: t.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }
          }
        }
      }
    }
    /**
     * Core parser `rules`
     */


    var _rules = [['block', block], ['abbr', abbr], ['references', references], ['inline', inline], ['footnote_tail', footnote_block], ['abbr2', abbr2], ['replacements', replace], ['smartquotes', smartquotes]];
    /**
     * Class for top level (`core`) parser rules
     *
     * @api private
     */

    function Core() {
      this.options = {};
      this.ruler = new Ruler();

      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
    }
    /**
     * Process rules with the given `state`
     *
     * @param  {Object} `state`
     * @api private
     */


    Core.prototype.process = function (state) {
      var i, l, rules;
      rules = this.ruler.getRules('');

      for (i = 0, l = rules.length; i < l; i++) {
        rules[i](state);
      }
    }; // Parser state class


    function StateBlock(src, parser, options, env, tokens) {
      var ch, s, start, pos, len, indent, indent_found;
      this.src = src; // Shortcuts to simplify nested calls

      this.parser = parser;
      this.options = options;
      this.env = env; //
      // Internal state vartiables
      //

      this.tokens = tokens;
      this.bMarks = []; // line begin offsets for fast jumps

      this.eMarks = []; // line end offsets for fast jumps

      this.tShift = []; // indent for each line
      // block parser variables

      this.blkIndent = 0; // required block content indent
      // (for example, if we are in list)

      this.line = 0; // line index in src

      this.lineMax = 0; // lines count

      this.tight = false; // loose/tight mode for lists

      this.parentType = 'root'; // if `list`, block parser stops on two newlines

      this.ddIndent = -1; // indent of the current dd block (-1 if there isn't any)

      this.level = 0; // renderer

      this.result = ''; // Create caches
      // Generate markers.

      s = this.src;
      indent = 0;
      indent_found = false;

      for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
        ch = s.charCodeAt(pos);

        if (!indent_found) {
          if (ch === 0x20
          /* space */
          ) {
              indent++;
              continue;
            } else {
            indent_found = true;
          }
        }

        if (ch === 0x0A || pos === len - 1) {
          if (ch !== 0x0A) {
            pos++;
          }

          this.bMarks.push(start);
          this.eMarks.push(pos);
          this.tShift.push(indent);
          indent_found = false;
          indent = 0;
          start = pos + 1;
        }
      } // Push fake entry to simplify cache bounds checks


      this.bMarks.push(s.length);
      this.eMarks.push(s.length);
      this.tShift.push(0);
      this.lineMax = this.bMarks.length - 1; // don't count last fake line
    }

    StateBlock.prototype.isEmpty = function isEmpty(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };

    StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
      for (var max = this.lineMax; from < max; from++) {
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
          break;
        }
      }

      return from;
    }; // Skip spaces from given position.


    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
      for (var max = this.src.length; pos < max; pos++) {
        if (this.src.charCodeAt(pos) !== 0x20
        /* space */
        ) {
            break;
          }
      }

      return pos;
    }; // Skip char codes from given position


    StateBlock.prototype.skipChars = function skipChars(pos, code) {
      for (var max = this.src.length; pos < max; pos++) {
        if (this.src.charCodeAt(pos) !== code) {
          break;
        }
      }

      return pos;
    }; // Skip char codes reverse from given position - 1


    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
      if (pos <= min) {
        return pos;
      }

      while (pos > min) {
        if (code !== this.src.charCodeAt(--pos)) {
          return pos + 1;
        }
      }

      return pos;
    }; // cut lines range from source.


    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
      var i,
          first,
          last,
          queue,
          shift,
          line = begin;

      if (begin >= end) {
        return '';
      } // Opt: don't use push queue for single line;


      if (line + 1 === end) {
        first = this.bMarks[line] + Math.min(this.tShift[line], indent);
        last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
        return this.src.slice(first, last);
      }

      queue = new Array(end - begin);

      for (i = 0; line < end; line++, i++) {
        shift = this.tShift[line];

        if (shift > indent) {
          shift = indent;
        }

        if (shift < 0) {
          shift = 0;
        }

        first = this.bMarks[line] + shift;

        if (line + 1 < end || keepLastLF) {
          // No need for bounds check because we have fake entry on tail.
          last = this.eMarks[line] + 1;
        } else {
          last = this.eMarks[line];
        }

        queue[i] = this.src.slice(first, last);
      }

      return queue.join('');
    }; // Code block (4 spaces padded)


    function code(state, startLine, endLine
    /*, silent*/
    ) {
      var nextLine, last;

      if (state.tShift[startLine] - state.blkIndent < 4) {
        return false;
      }

      last = nextLine = startLine + 1;

      while (nextLine < endLine) {
        if (state.isEmpty(nextLine)) {
          nextLine++;
          continue;
        }

        if (state.tShift[nextLine] - state.blkIndent >= 4) {
          nextLine++;
          last = nextLine;
          continue;
        }

        break;
      }

      state.line = nextLine;
      state.tokens.push({
        type: 'code',
        content: state.getLines(startLine, last, 4 + state.blkIndent, true),
        block: true,
        lines: [startLine, state.line],
        level: state.level
      });
      return true;
    } // fences (``` lang, ~~~ lang)


    function fences(state, startLine, endLine, silent) {
      var marker,
          len,
          params,
          nextLine,
          mem,
          haveEndMarker = false,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (pos + 3 > max) {
        return false;
      }

      marker = state.src.charCodeAt(pos);

      if (marker !== 0x7E
      /* ~ */
      && marker !== 0x60
      /* ` */
      ) {
          return false;
        } // scan marker length


      mem = pos;
      pos = state.skipChars(pos, marker);
      len = pos - mem;

      if (len < 3) {
        return false;
      }

      params = state.src.slice(pos, max).trim();

      if (params.indexOf('`') >= 0) {
        return false;
      } // Since start is found, we can report success here in validation mode


      if (silent) {
        return true;
      } // search end of block


      nextLine = startLine;

      for (;;) {
        nextLine++;

        if (nextLine >= endLine) {
          // unclosed block should be autoclosed by end of document.
          // also block seems to be autoclosed by end of parent
          break;
        }

        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos < max && state.tShift[nextLine] < state.blkIndent) {
          // non-empty line with negative indent should stop the list:
          // - ```
          //  test
          break;
        }

        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }

        if (state.tShift[nextLine] - state.blkIndent >= 4) {
          // closing fence should be indented less than 4 spaces
          continue;
        }

        pos = state.skipChars(pos, marker); // closing code fence must be at least as long as the opening one

        if (pos - mem < len) {
          continue;
        } // make sure tail has spaces only


        pos = state.skipSpaces(pos);

        if (pos < max) {
          continue;
        }

        haveEndMarker = true; // found!

        break;
      } // If a fence has heading spaces, they should be removed from its inner block


      len = state.tShift[startLine];
      state.line = nextLine + (haveEndMarker ? 1 : 0);
      state.tokens.push({
        type: 'fence',
        params: params,
        content: state.getLines(startLine + 1, nextLine, len, true),
        lines: [startLine, state.line],
        level: state.level
      });
      return true;
    } // Block quotes


    function blockquote(state, startLine, endLine, silent) {
      var nextLine,
          lastLineEmpty,
          oldTShift,
          oldBMarks,
          oldIndent,
          oldParentType,
          lines,
          terminatorRules,
          i,
          l,
          terminate,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (pos > max) {
        return false;
      } // check the block quote marker


      if (state.src.charCodeAt(pos++) !== 0x3E
      /* > */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      } // we know that it's going to be a valid blockquote,
      // so no point trying to find the end of it in silent mode


      if (silent) {
        return true;
      } // skip one optional space after '>'


      if (state.src.charCodeAt(pos) === 0x20) {
        pos++;
      }

      oldIndent = state.blkIndent;
      state.blkIndent = 0;
      oldBMarks = [state.bMarks[startLine]];
      state.bMarks[startLine] = pos; // check if we have an empty blockquote

      pos = pos < max ? state.skipSpaces(pos) : pos;
      lastLineEmpty = pos >= max;
      oldTShift = [state.tShift[startLine]];
      state.tShift[startLine] = pos - state.bMarks[startLine];
      terminatorRules = state.parser.ruler.getRules('blockquote'); // Search the end of the block
      //
      // Block ends with either:
      //  1. an empty line outside:
      //     ```
      //     > test
      //
      //     ```
      //  2. an empty line inside:
      //     ```
      //     >
      //     test
      //     ```
      //  3. another tag
      //     ```
      //     > test
      //      - - -
      //     ```

      for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos >= max) {
          // Case 1: line is not inside the blockquote, and this line is empty.
          break;
        }

        if (state.src.charCodeAt(pos++) === 0x3E
        /* > */
        ) {
            // This line is inside the blockquote.
            // skip one optional space after '>'
            if (state.src.charCodeAt(pos) === 0x20) {
              pos++;
            }

            oldBMarks.push(state.bMarks[nextLine]);
            state.bMarks[nextLine] = pos;
            pos = pos < max ? state.skipSpaces(pos) : pos;
            lastLineEmpty = pos >= max;
            oldTShift.push(state.tShift[nextLine]);
            state.tShift[nextLine] = pos - state.bMarks[nextLine];
            continue;
          } // Case 2: line is not inside the blockquote, and the last line was empty.


        if (lastLineEmpty) {
          break;
        } // Case 3: another tag found.


        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        }

        oldBMarks.push(state.bMarks[nextLine]);
        oldTShift.push(state.tShift[nextLine]); // A negative number means that this is a paragraph continuation;
        //
        // Any negative number will do the job here, but it's better for it
        // to be large enough to make any bugs obvious.

        state.tShift[nextLine] = -1337;
      }

      oldParentType = state.parentType;
      state.parentType = 'blockquote';
      state.tokens.push({
        type: 'blockquote_open',
        lines: lines = [startLine, 0],
        level: state.level++
      });
      state.parser.tokenize(state, startLine, nextLine);
      state.tokens.push({
        type: 'blockquote_close',
        level: --state.level
      });
      state.parentType = oldParentType;
      lines[1] = state.line; // Restore original tShift; this might not be necessary since the parser
      // has already been here, but just to make sure we can do that.

      for (i = 0; i < oldTShift.length; i++) {
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
      }

      state.blkIndent = oldIndent;
      return true;
    } // Horizontal rule


    function hr(state, startLine, endLine, silent) {
      var marker,
          cnt,
          ch,
          pos = state.bMarks[startLine],
          max = state.eMarks[startLine];
      pos += state.tShift[startLine];

      if (pos > max) {
        return false;
      }

      marker = state.src.charCodeAt(pos++); // Check hr marker

      if (marker !== 0x2A
      /* * */
      && marker !== 0x2D
      /* - */
      && marker !== 0x5F
      /* _ */
      ) {
          return false;
        } // markers can be mixed with spaces, but there should be at least 3 one


      cnt = 1;

      while (pos < max) {
        ch = state.src.charCodeAt(pos++);

        if (ch !== marker && ch !== 0x20
        /* space */
        ) {
            return false;
          }

        if (ch === marker) {
          cnt++;
        }
      }

      if (cnt < 3) {
        return false;
      }

      if (silent) {
        return true;
      }

      state.line = startLine + 1;
      state.tokens.push({
        type: 'hr',
        lines: [startLine, state.line],
        level: state.level
      });
      return true;
    } // Lists
    // Search `[-+*][\n ]`, returns next pos arter marker on success
    // or -1 on fail.


    function skipBulletListMarker(state, startLine) {
      var marker, pos, max;
      pos = state.bMarks[startLine] + state.tShift[startLine];
      max = state.eMarks[startLine];

      if (pos >= max) {
        return -1;
      }

      marker = state.src.charCodeAt(pos++); // Check bullet

      if (marker !== 0x2A
      /* * */
      && marker !== 0x2D
      /* - */
      && marker !== 0x2B
      /* + */
      ) {
          return -1;
        }

      if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
        // " 1.test " - is not a list item
        return -1;
      }

      return pos;
    } // Search `\d+[.)][\n ]`, returns next pos arter marker on success
    // or -1 on fail.


    function skipOrderedListMarker(state, startLine) {
      var ch,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (pos + 1 >= max) {
        return -1;
      }

      ch = state.src.charCodeAt(pos++);

      if (ch < 0x30
      /* 0 */
      || ch > 0x39
      /* 9 */
      ) {
          return -1;
        }

      for (;;) {
        // EOL -> fail
        if (pos >= max) {
          return -1;
        }

        ch = state.src.charCodeAt(pos++);

        if (ch >= 0x30
        /* 0 */
        && ch <= 0x39
        /* 9 */
        ) {
            continue;
          } // found valid marker


        if (ch === 0x29
        /* ) */
        || ch === 0x2e
        /* . */
        ) {
            break;
          }

        return -1;
      }

      if (pos < max && state.src.charCodeAt(pos) !== 0x20
      /* space */
      ) {
          // " 1.test " - is not a list item
          return -1;
        }

      return pos;
    }

    function markTightParagraphs(state, idx) {
      var i,
          l,
          level = state.level + 2;

      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
          state.tokens[i + 2].tight = true;
          state.tokens[i].tight = true;
          i += 2;
        }
      }
    }

    function list(state, startLine, endLine, silent) {
      var nextLine,
          indent,
          oldTShift,
          oldIndent,
          oldTight,
          oldParentType,
          start,
          posAfterMarker,
          max,
          indentAfterMarker,
          markerValue,
          markerCharCode,
          isOrdered,
          contentStart,
          listTokIdx,
          prevEmptyEnd,
          listLines,
          itemLines,
          tight = true,
          terminatorRules,
          i,
          l,
          terminate; // Detect list type and position after marker

      if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
        isOrdered = true;
      } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
        isOrdered = false;
      } else {
        return false;
      }

      if (state.level >= state.options.maxNesting) {
        return false;
      } // We should terminate list on style change. Remember first one to compare.


      markerCharCode = state.src.charCodeAt(posAfterMarker - 1); // For validation mode we can terminate immediately

      if (silent) {
        return true;
      } // Start list


      listTokIdx = state.tokens.length;

      if (isOrdered) {
        start = state.bMarks[startLine] + state.tShift[startLine];
        markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
        state.tokens.push({
          type: 'ordered_list_open',
          order: markerValue,
          lines: listLines = [startLine, 0],
          level: state.level++
        });
      } else {
        state.tokens.push({
          type: 'bullet_list_open',
          lines: listLines = [startLine, 0],
          level: state.level++
        });
      } //
      // Iterate list items
      //


      nextLine = startLine;
      prevEmptyEnd = false;
      terminatorRules = state.parser.ruler.getRules('list');

      while (nextLine < endLine) {
        contentStart = state.skipSpaces(posAfterMarker);
        max = state.eMarks[nextLine];

        if (contentStart >= max) {
          // trimming space in "-    \n  3" case, indent is 1 here
          indentAfterMarker = 1;
        } else {
          indentAfterMarker = contentStart - posAfterMarker;
        } // If we have more than 4 spaces, the indent is 1
        // (the rest is just indented code block)


        if (indentAfterMarker > 4) {
          indentAfterMarker = 1;
        } // If indent is less than 1, assume that it's one, example:
        //  "-\n  test"


        if (indentAfterMarker < 1) {
          indentAfterMarker = 1;
        } // "  -  test"
        //  ^^^^^ - calculating total length of this thing


        indent = posAfterMarker - state.bMarks[nextLine] + indentAfterMarker; // Run subparser & write tokens

        state.tokens.push({
          type: 'list_item_open',
          lines: itemLines = [startLine, 0],
          level: state.level++
        });
        oldIndent = state.blkIndent;
        oldTight = state.tight;
        oldTShift = state.tShift[startLine];
        oldParentType = state.parentType;
        state.tShift[startLine] = contentStart - state.bMarks[startLine];
        state.blkIndent = indent;
        state.tight = true;
        state.parentType = 'list';
        state.parser.tokenize(state, startLine, endLine, true); // If any of list item is tight, mark list as tight

        if (!state.tight || prevEmptyEnd) {
          tight = false;
        } // Item become loose if finish with empty line,
        // but we should filter last element, because it means list finish


        prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = oldIndent;
        state.tShift[startLine] = oldTShift;
        state.tight = oldTight;
        state.parentType = oldParentType;
        state.tokens.push({
          type: 'list_item_close',
          level: --state.level
        });
        nextLine = startLine = state.line;
        itemLines[1] = nextLine;
        contentStart = state.bMarks[startLine];

        if (nextLine >= endLine) {
          break;
        }

        if (state.isEmpty(nextLine)) {
          break;
        } //
        // Try to check if list is terminated or continued.
        //


        if (state.tShift[nextLine] < state.blkIndent) {
          break;
        } // fail if terminating block found


        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        } // fail if list has another type


        if (isOrdered) {
          posAfterMarker = skipOrderedListMarker(state, nextLine);

          if (posAfterMarker < 0) {
            break;
          }
        } else {
          posAfterMarker = skipBulletListMarker(state, nextLine);

          if (posAfterMarker < 0) {
            break;
          }
        }

        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
          break;
        }
      } // Finilize list


      state.tokens.push({
        type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
        level: --state.level
      });
      listLines[1] = nextLine;
      state.line = nextLine; // mark paragraphs tight if needed

      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }

      return true;
    } // Process footnote reference list


    function footnote(state, startLine, endLine, silent) {
      var oldBMark,
          oldTShift,
          oldParentType,
          pos,
          label,
          start = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine]; // line should be at least 5 chars - "[^x]:"

      if (start + 4 > max) {
        return false;
      }

      if (state.src.charCodeAt(start) !== 0x5B
      /* [ */
      ) {
          return false;
        }

      if (state.src.charCodeAt(start + 1) !== 0x5E
      /* ^ */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x20) {
          return false;
        }

        if (state.src.charCodeAt(pos) === 0x5D
        /* ] */
        ) {
            break;
          }
      }

      if (pos === start + 2) {
        return false;
      } // no empty footnote labels


      if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A
      /* : */
      ) {
          return false;
        }

      if (silent) {
        return true;
      }

      pos++;

      if (!state.env.footnotes) {
        state.env.footnotes = {};
      }

      if (!state.env.footnotes.refs) {
        state.env.footnotes.refs = {};
      }

      label = state.src.slice(start + 2, pos - 2);
      state.env.footnotes.refs[':' + label] = -1;
      state.tokens.push({
        type: 'footnote_reference_open',
        label: label,
        level: state.level++
      });
      oldBMark = state.bMarks[startLine];
      oldTShift = state.tShift[startLine];
      oldParentType = state.parentType;
      state.tShift[startLine] = state.skipSpaces(pos) - pos;
      state.bMarks[startLine] = pos;
      state.blkIndent += 4;
      state.parentType = 'footnote';

      if (state.tShift[startLine] < state.blkIndent) {
        state.tShift[startLine] += state.blkIndent;
        state.bMarks[startLine] -= state.blkIndent;
      }

      state.parser.tokenize(state, startLine, endLine, true);
      state.parentType = oldParentType;
      state.blkIndent -= 4;
      state.tShift[startLine] = oldTShift;
      state.bMarks[startLine] = oldBMark;
      state.tokens.push({
        type: 'footnote_reference_close',
        level: --state.level
      });
      return true;
    } // heading (#, ##, ...)


    function heading(state, startLine, endLine, silent) {
      var ch,
          level,
          tmp,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (pos >= max) {
        return false;
      }

      ch = state.src.charCodeAt(pos);

      if (ch !== 0x23
      /* # */
      || pos >= max) {
        return false;
      } // count heading level


      level = 1;
      ch = state.src.charCodeAt(++pos);

      while (ch === 0x23
      /* # */
      && pos < max && level <= 6) {
        level++;
        ch = state.src.charCodeAt(++pos);
      }

      if (level > 6 || pos < max && ch !== 0x20
      /* space */
      ) {
          return false;
        }

      if (silent) {
        return true;
      } // Let's cut tails like '    ###  ' from the end of string


      max = state.skipCharsBack(max, 0x20, pos); // space

      tmp = state.skipCharsBack(max, 0x23, pos); // #

      if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20
      /* space */
      ) {
          max = tmp;
        }

      state.line = startLine + 1;
      state.tokens.push({
        type: 'heading_open',
        hLevel: level,
        lines: [startLine, state.line],
        level: state.level
      }); // only if header is not empty

      if (pos < max) {
        state.tokens.push({
          type: 'inline',
          content: state.src.slice(pos, max).trim(),
          level: state.level + 1,
          lines: [startLine, state.line],
          children: []
        });
      }

      state.tokens.push({
        type: 'heading_close',
        hLevel: level,
        level: state.level
      });
      return true;
    } // lheading (---, ===)


    function lheading(state, startLine, endLine
    /*, silent*/
    ) {
      var marker,
          pos,
          max,
          next = startLine + 1;

      if (next >= endLine) {
        return false;
      }

      if (state.tShift[next] < state.blkIndent) {
        return false;
      } // Scan next line


      if (state.tShift[next] - state.blkIndent > 3) {
        return false;
      }

      pos = state.bMarks[next] + state.tShift[next];
      max = state.eMarks[next];

      if (pos >= max) {
        return false;
      }

      marker = state.src.charCodeAt(pos);

      if (marker !== 0x2D
      /* - */
      && marker !== 0x3D
      /* = */
      ) {
          return false;
        }

      pos = state.skipChars(pos, marker);
      pos = state.skipSpaces(pos);

      if (pos < max) {
        return false;
      }

      pos = state.bMarks[startLine] + state.tShift[startLine];
      state.line = next + 1;
      state.tokens.push({
        type: 'heading_open',
        hLevel: marker === 0x3D
        /* = */
        ? 1 : 2,
        lines: [startLine, state.line],
        level: state.level
      });
      state.tokens.push({
        type: 'inline',
        content: state.src.slice(pos, state.eMarks[startLine]).trim(),
        level: state.level + 1,
        lines: [startLine, state.line - 1],
        children: []
      });
      state.tokens.push({
        type: 'heading_close',
        hLevel: marker === 0x3D
        /* = */
        ? 1 : 2,
        level: state.level
      });
      return true;
    } // List of valid html blocks names, accorting to commonmark spec
    // http://jgm.github.io/CommonMark/spec.html#html-blocks


    var html_blocks = {};
    ['article', 'aside', 'button', 'blockquote', 'body', 'canvas', 'caption', 'col', 'colgroup', 'dd', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'iframe', 'li', 'map', 'object', 'ol', 'output', 'p', 'pre', 'progress', 'script', 'section', 'style', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'tr', 'thead', 'ul', 'video'].forEach(function (name) {
      html_blocks[name] = true;
    }); // HTML block

    var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
    var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

    function isLetter$1(ch) {
      /*eslint no-bitwise:0*/
      var lc = ch | 0x20; // to lower case

      return lc >= 0x61
      /* a */
      && lc <= 0x7a
      /* z */
      ;
    }

    function htmlblock(state, startLine, endLine, silent) {
      var ch,
          match,
          nextLine,
          pos = state.bMarks[startLine],
          max = state.eMarks[startLine],
          shift = state.tShift[startLine];
      pos += shift;

      if (!state.options.html) {
        return false;
      }

      if (shift > 3 || pos + 2 >= max) {
        return false;
      }

      if (state.src.charCodeAt(pos) !== 0x3C
      /* < */
      ) {
          return false;
        }

      ch = state.src.charCodeAt(pos + 1);

      if (ch === 0x21
      /* ! */
      || ch === 0x3F
      /* ? */
      ) {
          // Directive start / comment start / processing instruction start
          if (silent) {
            return true;
          }
        } else if (ch === 0x2F
      /* / */
      || isLetter$1(ch)) {
        // Probably start or end of tag
        if (ch === 0x2F
        /* \ */
        ) {
            // closing tag
            match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);

            if (!match) {
              return false;
            }
          } else {
          // opening tag
          match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);

          if (!match) {
            return false;
          }
        } // Make sure tag name is valid


        if (html_blocks[match[1].toLowerCase()] !== true) {
          return false;
        }

        if (silent) {
          return true;
        }
      } else {
        return false;
      } // If we are here - we detected HTML block.
      // Let's roll down till empty line (block end).


      nextLine = startLine + 1;

      while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
        nextLine++;
      }

      state.line = nextLine;
      state.tokens.push({
        type: 'htmlblock',
        level: state.level,
        lines: [startLine, state.line],
        content: state.getLines(startLine, nextLine, 0, true)
      });
      return true;
    } // GFM table, non-standard


    function getLine(state, line) {
      var pos = state.bMarks[line] + state.blkIndent,
          max = state.eMarks[line];
      return state.src.substr(pos, max - pos);
    }

    function table(state, startLine, endLine, silent) {
      var ch, lineText, pos, i, nextLine, rows, cell, aligns, t, tableLines, tbodyLines; // should have at least three lines

      if (startLine + 2 > endLine) {
        return false;
      }

      nextLine = startLine + 1;

      if (state.tShift[nextLine] < state.blkIndent) {
        return false;
      } // first character of the second line should be '|' or '-'


      pos = state.bMarks[nextLine] + state.tShift[nextLine];

      if (pos >= state.eMarks[nextLine]) {
        return false;
      }

      ch = state.src.charCodeAt(pos);

      if (ch !== 0x7C
      /* | */
      && ch !== 0x2D
      /* - */
      && ch !== 0x3A
      /* : */
      ) {
          return false;
        }

      lineText = getLine(state, startLine + 1);

      if (!/^[-:| ]+$/.test(lineText)) {
        return false;
      }

      rows = lineText.split('|');

      if (rows <= 2) {
        return false;
      }

      aligns = [];

      for (i = 0; i < rows.length; i++) {
        t = rows[i].trim();

        if (!t) {
          // allow empty columns before and after table, but not in between columns;
          // e.g. allow ` |---| `, disallow ` ---||--- `
          if (i === 0 || i === rows.length - 1) {
            continue;
          } else {
            return false;
          }
        }

        if (!/^:?-+:?$/.test(t)) {
          return false;
        }

        if (t.charCodeAt(t.length - 1) === 0x3A
        /* : */
        ) {
            aligns.push(t.charCodeAt(0) === 0x3A
            /* : */
            ? 'center' : 'right');
          } else if (t.charCodeAt(0) === 0x3A
        /* : */
        ) {
            aligns.push('left');
          } else {
          aligns.push('');
        }
      }

      lineText = getLine(state, startLine).trim();

      if (lineText.indexOf('|') === -1) {
        return false;
      }

      rows = lineText.replace(/^\||\|$/g, '').split('|');

      if (aligns.length !== rows.length) {
        return false;
      }

      if (silent) {
        return true;
      }

      state.tokens.push({
        type: 'table_open',
        lines: tableLines = [startLine, 0],
        level: state.level++
      });
      state.tokens.push({
        type: 'thead_open',
        lines: [startLine, startLine + 1],
        level: state.level++
      });
      state.tokens.push({
        type: 'tr_open',
        lines: [startLine, startLine + 1],
        level: state.level++
      });

      for (i = 0; i < rows.length; i++) {
        state.tokens.push({
          type: 'th_open',
          align: aligns[i],
          lines: [startLine, startLine + 1],
          level: state.level++
        });
        state.tokens.push({
          type: 'inline',
          content: rows[i].trim(),
          lines: [startLine, startLine + 1],
          level: state.level,
          children: []
        });
        state.tokens.push({
          type: 'th_close',
          level: --state.level
        });
      }

      state.tokens.push({
        type: 'tr_close',
        level: --state.level
      });
      state.tokens.push({
        type: 'thead_close',
        level: --state.level
      });
      state.tokens.push({
        type: 'tbody_open',
        lines: tbodyLines = [startLine + 2, 0],
        level: state.level++
      });

      for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
        if (state.tShift[nextLine] < state.blkIndent) {
          break;
        }

        lineText = getLine(state, nextLine).trim();

        if (lineText.indexOf('|') === -1) {
          break;
        }

        rows = lineText.replace(/^\||\|$/g, '').split('|');
        state.tokens.push({
          type: 'tr_open',
          level: state.level++
        });

        for (i = 0; i < rows.length; i++) {
          state.tokens.push({
            type: 'td_open',
            align: aligns[i],
            level: state.level++
          }); // 0x7c === '|'

          cell = rows[i].substring(rows[i].charCodeAt(0) === 0x7c ? 1 : 0, rows[i].charCodeAt(rows[i].length - 1) === 0x7c ? rows[i].length - 1 : rows[i].length).trim();
          state.tokens.push({
            type: 'inline',
            content: cell,
            level: state.level,
            children: []
          });
          state.tokens.push({
            type: 'td_close',
            level: --state.level
          });
        }

        state.tokens.push({
          type: 'tr_close',
          level: --state.level
        });
      }

      state.tokens.push({
        type: 'tbody_close',
        level: --state.level
      });
      state.tokens.push({
        type: 'table_close',
        level: --state.level
      });
      tableLines[1] = tbodyLines[1] = nextLine;
      state.line = nextLine;
      return true;
    } // Definition lists
    // Search `[:~][\n ]`, returns next pos after marker on success
    // or -1 on fail.


    function skipMarker(state, line) {
      var pos,
          marker,
          start = state.bMarks[line] + state.tShift[line],
          max = state.eMarks[line];

      if (start >= max) {
        return -1;
      } // Check bullet


      marker = state.src.charCodeAt(start++);

      if (marker !== 0x7E
      /* ~ */
      && marker !== 0x3A
      /* : */
      ) {
          return -1;
        }

      pos = state.skipSpaces(start); // require space after ":"

      if (start === pos) {
        return -1;
      } // no empty definitions, e.g. "  : "


      if (pos >= max) {
        return -1;
      }

      return pos;
    }

    function markTightParagraphs$1(state, idx) {
      var i,
          l,
          level = state.level + 2;

      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
          state.tokens[i + 2].tight = true;
          state.tokens[i].tight = true;
          i += 2;
        }
      }
    }

    function deflist(state, startLine, endLine, silent) {
      var contentStart, ddLine, dtLine, itemLines, listLines, listTokIdx, nextLine, oldIndent, oldDDIndent, oldParentType, oldTShift, oldTight, prevEmptyEnd, tight;

      if (silent) {
        // quirk: validation mode validates a dd block only, not a whole deflist
        if (state.ddIndent < 0) {
          return false;
        }

        return skipMarker(state, startLine) >= 0;
      }

      nextLine = startLine + 1;

      if (state.isEmpty(nextLine)) {
        if (++nextLine > endLine) {
          return false;
        }
      }

      if (state.tShift[nextLine] < state.blkIndent) {
        return false;
      }

      contentStart = skipMarker(state, nextLine);

      if (contentStart < 0) {
        return false;
      }

      if (state.level >= state.options.maxNesting) {
        return false;
      } // Start list


      listTokIdx = state.tokens.length;
      state.tokens.push({
        type: 'dl_open',
        lines: listLines = [startLine, 0],
        level: state.level++
      }); //
      // Iterate list items
      //

      dtLine = startLine;
      ddLine = nextLine; // One definition list can contain multiple DTs,
      // and one DT can be followed by multiple DDs.
      //
      // Thus, there is two loops here, and label is
      // needed to break out of the second one
      //

      /*eslint no-labels:0,block-scoped-var:0*/

      OUTER: for (;;) {
        tight = true;
        prevEmptyEnd = false;
        state.tokens.push({
          type: 'dt_open',
          lines: [dtLine, dtLine],
          level: state.level++
        });
        state.tokens.push({
          type: 'inline',
          content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
          level: state.level + 1,
          lines: [dtLine, dtLine],
          children: []
        });
        state.tokens.push({
          type: 'dt_close',
          level: --state.level
        });

        for (;;) {
          state.tokens.push({
            type: 'dd_open',
            lines: itemLines = [nextLine, 0],
            level: state.level++
          });
          oldTight = state.tight;
          oldDDIndent = state.ddIndent;
          oldIndent = state.blkIndent;
          oldTShift = state.tShift[ddLine];
          oldParentType = state.parentType;
          state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
          state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
          state.tight = true;
          state.parentType = 'deflist';
          state.parser.tokenize(state, ddLine, endLine, true); // If any of list item is tight, mark list as tight

          if (!state.tight || prevEmptyEnd) {
            tight = false;
          } // Item become loose if finish with empty line,
          // but we should filter last element, because it means list finish


          prevEmptyEnd = state.line - ddLine > 1 && state.isEmpty(state.line - 1);
          state.tShift[ddLine] = oldTShift;
          state.tight = oldTight;
          state.parentType = oldParentType;
          state.blkIndent = oldIndent;
          state.ddIndent = oldDDIndent;
          state.tokens.push({
            type: 'dd_close',
            level: --state.level
          });
          itemLines[1] = nextLine = state.line;

          if (nextLine >= endLine) {
            break OUTER;
          }

          if (state.tShift[nextLine] < state.blkIndent) {
            break OUTER;
          }

          contentStart = skipMarker(state, nextLine);

          if (contentStart < 0) {
            break;
          }

          ddLine = nextLine; // go to the next loop iteration:
          // insert DD tag and repeat checking
        }

        if (nextLine >= endLine) {
          break;
        }

        dtLine = nextLine;

        if (state.isEmpty(dtLine)) {
          break;
        }

        if (state.tShift[dtLine] < state.blkIndent) {
          break;
        }

        ddLine = dtLine + 1;

        if (ddLine >= endLine) {
          break;
        }

        if (state.isEmpty(ddLine)) {
          ddLine++;
        }

        if (ddLine >= endLine) {
          break;
        }

        if (state.tShift[ddLine] < state.blkIndent) {
          break;
        }

        contentStart = skipMarker(state, ddLine);

        if (contentStart < 0) {
          break;
        } // go to the next loop iteration:
        // insert DT and DD tags and repeat checking

      } // Finilize list


      state.tokens.push({
        type: 'dl_close',
        level: --state.level
      });
      listLines[1] = nextLine;
      state.line = nextLine; // mark paragraphs tight if needed

      if (tight) {
        markTightParagraphs$1(state, listTokIdx);
      }

      return true;
    } // Paragraph


    function paragraph(state, startLine
    /*, endLine*/
    ) {
      var endLine,
          content,
          terminate,
          i,
          l,
          nextLine = startLine + 1,
          terminatorRules;
      endLine = state.lineMax; // jump line-by-line until empty one or EOF

      if (nextLine < endLine && !state.isEmpty(nextLine)) {
        terminatorRules = state.parser.ruler.getRules('paragraph');

        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          // this would be a code block normally, but after paragraph
          // it's considered a lazy continuation regardless of what's there
          if (state.tShift[nextLine] - state.blkIndent > 3) {
            continue;
          } // Some tags can terminate paragraph without empty line.


          terminate = false;

          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }

          if (terminate) {
            break;
          }
        }
      }

      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine;

      if (content.length) {
        state.tokens.push({
          type: 'paragraph_open',
          tight: false,
          lines: [startLine, state.line],
          level: state.level
        });
        state.tokens.push({
          type: 'inline',
          content: content,
          level: state.level + 1,
          lines: [startLine, state.line],
          children: []
        });
        state.tokens.push({
          type: 'paragraph_close',
          tight: false,
          level: state.level
        });
      }

      return true;
    }
    /**
     * Parser rules
     */


    var _rules$1 = [['code', code], ['fences', fences, ['paragraph', 'blockquote', 'list']], ['blockquote', blockquote, ['paragraph', 'blockquote', 'list']], ['hr', hr, ['paragraph', 'blockquote', 'list']], ['list', list, ['paragraph', 'blockquote']], ['footnote', footnote, ['paragraph']], ['heading', heading, ['paragraph', 'blockquote']], ['lheading', lheading], ['htmlblock', htmlblock, ['paragraph', 'blockquote']], ['table', table, ['paragraph']], ['deflist', deflist, ['paragraph']], ['paragraph', paragraph]];
    /**
     * Block Parser class
     *
     * @api private
     */

    function ParserBlock() {
      this.ruler = new Ruler();

      for (var i = 0; i < _rules$1.length; i++) {
        this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
          alt: (_rules$1[i][2] || []).slice()
        });
      }
    }
    /**
     * Generate tokens for the given input range.
     *
     * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
     * @param  {Number} `startLine`
     * @param  {Number} `endLine`
     * @api private
     */


    ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
      var rules = this.ruler.getRules('');
      var len = rules.length;
      var line = startLine;
      var hasEmptyLines = false;
      var ok, i;

      while (line < endLine) {
        state.line = line = state.skipEmptyLines(line);

        if (line >= endLine) {
          break;
        } // Termination condition for nested calls.
        // Nested calls currently used for blockquotes & lists


        if (state.tShift[line] < state.blkIndent) {
          break;
        } // Try all possible rules.
        // On success, rule should:
        //
        // - update `state.line`
        // - update `state.tokens`
        // - return true


        for (i = 0; i < len; i++) {
          ok = rules[i](state, line, endLine, false);

          if (ok) {
            break;
          }
        } // set state.tight iff we had an empty line before current tag
        // i.e. latest empty line should not count


        state.tight = !hasEmptyLines; // paragraph might "eat" one newline after it in nested lists

        if (state.isEmpty(state.line - 1)) {
          hasEmptyLines = true;
        }

        line = state.line;

        if (line < endLine && state.isEmpty(line)) {
          hasEmptyLines = true;
          line++; // two empty lines should stop the parser in list mode

          if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) {
            break;
          }

          state.line = line;
        }
      }
    };

    var TABS_SCAN_RE = /[\n\t]/g;
    var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
    var SPACES_RE = /\u00a0/g;
    /**
     * Tokenize the given `str`.
     *
     * @param  {String} `str` Source string
     * @param  {Object} `options`
     * @param  {Object} `env`
     * @param  {Array} `outTokens`
     * @api private
     */

    ParserBlock.prototype.parse = function (str, options, env, outTokens) {
      var state,
          lineStart = 0,
          lastTabPos = 0;

      if (!str) {
        return [];
      } // Normalize spaces


      str = str.replace(SPACES_RE, ' '); // Normalize newlines

      str = str.replace(NEWLINES_RE, '\n'); // Replace tabs with proper number of spaces (1..4)

      if (str.indexOf('\t') >= 0) {
        str = str.replace(TABS_SCAN_RE, function (match, offset) {
          var result;

          if (str.charCodeAt(offset) === 0x0A) {
            lineStart = offset + 1;
            lastTabPos = 0;
            return match;
          }

          result = '    '.slice((offset - lineStart - lastTabPos) % 4);
          lastTabPos = offset - lineStart + 1;
          return result;
        });
      }

      state = new StateBlock(str, this, options, env, outTokens);
      this.tokenize(state, state.line, state.lineMax);
    }; // Skip text characters for text token, place those to pending buffer
    // and increment current pos
    // Rule to skip pure text
    // '{}$%@~+=:' reserved for extentions


    function isTerminatorChar(ch) {
      switch (ch) {
        case 0x0A
        /* \n */
        :
        case 0x5C
        /* \ */
        :
        case 0x60
        /* ` */
        :
        case 0x2A
        /* * */
        :
        case 0x5F
        /* _ */
        :
        case 0x5E
        /* ^ */
        :
        case 0x5B
        /* [ */
        :
        case 0x5D
        /* ] */
        :
        case 0x21
        /* ! */
        :
        case 0x26
        /* & */
        :
        case 0x3C
        /* < */
        :
        case 0x3E
        /* > */
        :
        case 0x7B
        /* { */
        :
        case 0x7D
        /* } */
        :
        case 0x24
        /* $ */
        :
        case 0x25
        /* % */
        :
        case 0x40
        /* @ */
        :
        case 0x7E
        /* ~ */
        :
        case 0x2B
        /* + */
        :
        case 0x3D
        /* = */
        :
        case 0x3A
        /* : */
        :
          return true;

        default:
          return false;
      }
    }

    function text(state, silent) {
      var pos = state.pos;

      while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
        pos++;
      }

      if (pos === state.pos) {
        return false;
      }

      if (!silent) {
        state.pending += state.src.slice(state.pos, pos);
      }

      state.pos = pos;
      return true;
    } // Proceess '\n'


    function newline(state, silent) {
      var pmax,
          max,
          pos = state.pos;

      if (state.src.charCodeAt(pos) !== 0x0A
      /* \n */
      ) {
          return false;
        }

      pmax = state.pending.length - 1;
      max = state.posMax; // '  \n' -> hardbreak
      // Lookup in pending chars is bad practice! Don't copy to other rules!
      // Pending string is stored in concat mode, indexed lookups will cause
      // convertion to flat mode.

      if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
            // Strip out all trailing spaces on this line.
            for (var i = pmax - 2; i >= 0; i--) {
              if (state.pending.charCodeAt(i) !== 0x20) {
                state.pending = state.pending.substring(0, i + 1);
                break;
              }
            }

            state.push({
              type: 'hardbreak',
              level: state.level
            });
          } else {
            state.pending = state.pending.slice(0, -1);
            state.push({
              type: 'softbreak',
              level: state.level
            });
          }
        } else {
          state.push({
            type: 'softbreak',
            level: state.level
          });
        }
      }

      pos++; // skip heading spaces for next line

      while (pos < max && state.src.charCodeAt(pos) === 0x20) {
        pos++;
      }

      state.pos = pos;
      return true;
    } // Proceess escaped chars and hardbreaks


    var ESCAPED = [];

    for (var i = 0; i < 256; i++) {
      ESCAPED.push(0);
    }

    '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });

    function escape(state, silent) {
      var ch,
          pos = state.pos,
          max = state.posMax;

      if (state.src.charCodeAt(pos) !== 0x5C
      /* \ */
      ) {
          return false;
        }

      pos++;

      if (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (ch < 256 && ESCAPED[ch] !== 0) {
          if (!silent) {
            state.pending += state.src[pos];
          }

          state.pos += 2;
          return true;
        }

        if (ch === 0x0A) {
          if (!silent) {
            state.push({
              type: 'hardbreak',
              level: state.level
            });
          }

          pos++; // skip leading whitespaces from next line

          while (pos < max && state.src.charCodeAt(pos) === 0x20) {
            pos++;
          }

          state.pos = pos;
          return true;
        }
      }

      if (!silent) {
        state.pending += '\\';
      }

      state.pos++;
      return true;
    } // Parse backticks


    function backticks(state, silent) {
      var start,
          max,
          marker,
          matchStart,
          matchEnd,
          pos = state.pos,
          ch = state.src.charCodeAt(pos);

      if (ch !== 0x60
      /* ` */
      ) {
          return false;
        }

      start = pos;
      pos++;
      max = state.posMax;

      while (pos < max && state.src.charCodeAt(pos) === 0x60
      /* ` */
      ) {
        pos++;
      }

      marker = state.src.slice(start, pos);
      matchStart = matchEnd = pos;

      while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
        matchEnd = matchStart + 1;

        while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60
        /* ` */
        ) {
          matchEnd++;
        }

        if (matchEnd - matchStart === marker.length) {
          if (!silent) {
            state.push({
              type: 'code',
              content: state.src.slice(pos, matchStart).replace(/[ \n]+/g, ' ').trim(),
              block: false,
              level: state.level
            });
          }

          state.pos = matchEnd;
          return true;
        }
      }

      if (!silent) {
        state.pending += marker;
      }

      state.pos += marker.length;
      return true;
    } // Process ~~deleted text~~


    function del(state, silent) {
      var found,
          pos,
          stack,
          max = state.posMax,
          start = state.pos,
          lastChar,
          nextChar;

      if (state.src.charCodeAt(start) !== 0x7E
      /* ~ */
      ) {
          return false;
        }

      if (silent) {
        return false;
      } // don't run any pairs in validation mode


      if (start + 4 >= max) {
        return false;
      }

      if (state.src.charCodeAt(start + 1) !== 0x7E
      /* ~ */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
      nextChar = state.src.charCodeAt(start + 2);

      if (lastChar === 0x7E
      /* ~ */
      ) {
          return false;
        }

      if (nextChar === 0x7E
      /* ~ */
      ) {
          return false;
        }

      if (nextChar === 0x20 || nextChar === 0x0A) {
        return false;
      }

      pos = start + 2;

      while (pos < max && state.src.charCodeAt(pos) === 0x7E
      /* ~ */
      ) {
        pos++;
      }

      if (pos > start + 3) {
        // sequence of 4+ markers taking as literal, same as in a emphasis
        state.pos += pos - start;

        if (!silent) {
          state.pending += state.src.slice(start, pos);
        }

        return true;
      }

      state.pos = start + 2;
      stack = 1;

      while (state.pos + 1 < max) {
        if (state.src.charCodeAt(state.pos) === 0x7E
        /* ~ */
        ) {
            if (state.src.charCodeAt(state.pos + 1) === 0x7E
            /* ~ */
            ) {
                lastChar = state.src.charCodeAt(state.pos - 1);
                nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;

                if (nextChar !== 0x7E
                /* ~ */
                && lastChar !== 0x7E
                /* ~ */
                ) {
                    if (lastChar !== 0x20 && lastChar !== 0x0A) {
                      // closing '~~'
                      stack--;
                    } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
                      // opening '~~'
                      stack++;
                    } // else {
                    //  // standalone ' ~~ ' indented with spaces
                    // }


                    if (stack <= 0) {
                      found = true;
                      break;
                    }
                  }
              }
          }

        state.parser.skipToken(state);
      }

      if (!found) {
        // parser failed to find ending tag, so it's not valid emphasis
        state.pos = start;
        return false;
      } // found!


      state.posMax = state.pos;
      state.pos = start + 2;

      if (!silent) {
        state.push({
          type: 'del_open',
          level: state.level++
        });
        state.parser.tokenize(state);
        state.push({
          type: 'del_close',
          level: --state.level
        });
      }

      state.pos = state.posMax + 2;
      state.posMax = max;
      return true;
    } // Process ++inserted text++


    function ins(state, silent) {
      var found,
          pos,
          stack,
          max = state.posMax,
          start = state.pos,
          lastChar,
          nextChar;

      if (state.src.charCodeAt(start) !== 0x2B
      /* + */
      ) {
          return false;
        }

      if (silent) {
        return false;
      } // don't run any pairs in validation mode


      if (start + 4 >= max) {
        return false;
      }

      if (state.src.charCodeAt(start + 1) !== 0x2B
      /* + */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
      nextChar = state.src.charCodeAt(start + 2);

      if (lastChar === 0x2B
      /* + */
      ) {
          return false;
        }

      if (nextChar === 0x2B
      /* + */
      ) {
          return false;
        }

      if (nextChar === 0x20 || nextChar === 0x0A) {
        return false;
      }

      pos = start + 2;

      while (pos < max && state.src.charCodeAt(pos) === 0x2B
      /* + */
      ) {
        pos++;
      }

      if (pos !== start + 2) {
        // sequence of 3+ markers taking as literal, same as in a emphasis
        state.pos += pos - start;

        if (!silent) {
          state.pending += state.src.slice(start, pos);
        }

        return true;
      }

      state.pos = start + 2;
      stack = 1;

      while (state.pos + 1 < max) {
        if (state.src.charCodeAt(state.pos) === 0x2B
        /* + */
        ) {
            if (state.src.charCodeAt(state.pos + 1) === 0x2B
            /* + */
            ) {
                lastChar = state.src.charCodeAt(state.pos - 1);
                nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;

                if (nextChar !== 0x2B
                /* + */
                && lastChar !== 0x2B
                /* + */
                ) {
                    if (lastChar !== 0x20 && lastChar !== 0x0A) {
                      // closing '++'
                      stack--;
                    } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
                      // opening '++'
                      stack++;
                    } // else {
                    //  // standalone ' ++ ' indented with spaces
                    // }


                    if (stack <= 0) {
                      found = true;
                      break;
                    }
                  }
              }
          }

        state.parser.skipToken(state);
      }

      if (!found) {
        // parser failed to find ending tag, so it's not valid emphasis
        state.pos = start;
        return false;
      } // found!


      state.posMax = state.pos;
      state.pos = start + 2;

      if (!silent) {
        state.push({
          type: 'ins_open',
          level: state.level++
        });
        state.parser.tokenize(state);
        state.push({
          type: 'ins_close',
          level: --state.level
        });
      }

      state.pos = state.posMax + 2;
      state.posMax = max;
      return true;
    } // Process ==highlighted text==


    function mark(state, silent) {
      var found,
          pos,
          stack,
          max = state.posMax,
          start = state.pos,
          lastChar,
          nextChar;

      if (state.src.charCodeAt(start) !== 0x3D
      /* = */
      ) {
          return false;
        }

      if (silent) {
        return false;
      } // don't run any pairs in validation mode


      if (start + 4 >= max) {
        return false;
      }

      if (state.src.charCodeAt(start + 1) !== 0x3D
      /* = */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
      nextChar = state.src.charCodeAt(start + 2);

      if (lastChar === 0x3D
      /* = */
      ) {
          return false;
        }

      if (nextChar === 0x3D
      /* = */
      ) {
          return false;
        }

      if (nextChar === 0x20 || nextChar === 0x0A) {
        return false;
      }

      pos = start + 2;

      while (pos < max && state.src.charCodeAt(pos) === 0x3D
      /* = */
      ) {
        pos++;
      }

      if (pos !== start + 2) {
        // sequence of 3+ markers taking as literal, same as in a emphasis
        state.pos += pos - start;

        if (!silent) {
          state.pending += state.src.slice(start, pos);
        }

        return true;
      }

      state.pos = start + 2;
      stack = 1;

      while (state.pos + 1 < max) {
        if (state.src.charCodeAt(state.pos) === 0x3D
        /* = */
        ) {
            if (state.src.charCodeAt(state.pos + 1) === 0x3D
            /* = */
            ) {
                lastChar = state.src.charCodeAt(state.pos - 1);
                nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;

                if (nextChar !== 0x3D
                /* = */
                && lastChar !== 0x3D
                /* = */
                ) {
                    if (lastChar !== 0x20 && lastChar !== 0x0A) {
                      // closing '=='
                      stack--;
                    } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
                      // opening '=='
                      stack++;
                    } // else {
                    //  // standalone ' == ' indented with spaces
                    // }


                    if (stack <= 0) {
                      found = true;
                      break;
                    }
                  }
              }
          }

        state.parser.skipToken(state);
      }

      if (!found) {
        // parser failed to find ending tag, so it's not valid emphasis
        state.pos = start;
        return false;
      } // found!


      state.posMax = state.pos;
      state.pos = start + 2;

      if (!silent) {
        state.push({
          type: 'mark_open',
          level: state.level++
        });
        state.parser.tokenize(state);
        state.push({
          type: 'mark_close',
          level: --state.level
        });
      }

      state.pos = state.posMax + 2;
      state.posMax = max;
      return true;
    } // Process *this* and _that_


    function isAlphaNum(code) {
      return code >= 0x30
      /* 0 */
      && code <= 0x39
      /* 9 */
      || code >= 0x41
      /* A */
      && code <= 0x5A
      /* Z */
      || code >= 0x61
      /* a */
      && code <= 0x7A
      /* z */
      ;
    } // parse sequence of emphasis markers,
    // "start" should point at a valid marker


    function scanDelims(state, start) {
      var pos = start,
          lastChar,
          nextChar,
          count,
          can_open = true,
          can_close = true,
          max = state.posMax,
          marker = state.src.charCodeAt(start);
      lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

      while (pos < max && state.src.charCodeAt(pos) === marker) {
        pos++;
      }

      if (pos >= max) {
        can_open = false;
      }

      count = pos - start;

      if (count >= 4) {
        // sequence of four or more unescaped markers can't start/end an emphasis
        can_open = can_close = false;
      } else {
        nextChar = pos < max ? state.src.charCodeAt(pos) : -1; // check whitespace conditions

        if (nextChar === 0x20 || nextChar === 0x0A) {
          can_open = false;
        }

        if (lastChar === 0x20 || lastChar === 0x0A) {
          can_close = false;
        }

        if (marker === 0x5F
        /* _ */
        ) {
            // check if we aren't inside the word
            if (isAlphaNum(lastChar)) {
              can_open = false;
            }

            if (isAlphaNum(nextChar)) {
              can_close = false;
            }
          }
      }

      return {
        can_open: can_open,
        can_close: can_close,
        delims: count
      };
    }

    function emphasis(state, silent) {
      var startCount,
          count,
          found,
          oldCount,
          newCount,
          stack,
          res,
          max = state.posMax,
          start = state.pos,
          marker = state.src.charCodeAt(start);

      if (marker !== 0x5F
      /* _ */
      && marker !== 0x2A
      /* * */
      ) {
          return false;
        }

      if (silent) {
        return false;
      } // don't run any pairs in validation mode


      res = scanDelims(state, start);
      startCount = res.delims;

      if (!res.can_open) {
        state.pos += startCount;

        if (!silent) {
          state.pending += state.src.slice(start, state.pos);
        }

        return true;
      }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      state.pos = start + startCount;
      stack = [startCount];

      while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === marker) {
          res = scanDelims(state, state.pos);
          count = res.delims;

          if (res.can_close) {
            oldCount = stack.pop();
            newCount = count;

            while (oldCount !== newCount) {
              if (newCount < oldCount) {
                stack.push(oldCount - newCount);
                break;
              } // assert(newCount > oldCount)


              newCount -= oldCount;

              if (stack.length === 0) {
                break;
              }

              state.pos += oldCount;
              oldCount = stack.pop();
            }

            if (stack.length === 0) {
              startCount = oldCount;
              found = true;
              break;
            }

            state.pos += count;
            continue;
          }

          if (res.can_open) {
            stack.push(count);
          }

          state.pos += count;
          continue;
        }

        state.parser.skipToken(state);
      }

      if (!found) {
        // parser failed to find ending tag, so it's not valid emphasis
        state.pos = start;
        return false;
      } // found!


      state.posMax = state.pos;
      state.pos = start + startCount;

      if (!silent) {
        if (startCount === 2 || startCount === 3) {
          state.push({
            type: 'strong_open',
            level: state.level++
          });
        }

        if (startCount === 1 || startCount === 3) {
          state.push({
            type: 'em_open',
            level: state.level++
          });
        }

        state.parser.tokenize(state);

        if (startCount === 1 || startCount === 3) {
          state.push({
            type: 'em_close',
            level: --state.level
          });
        }

        if (startCount === 2 || startCount === 3) {
          state.push({
            type: 'strong_close',
            level: --state.level
          });
        }
      }

      state.pos = state.posMax + startCount;
      state.posMax = max;
      return true;
    } // Process ~subscript~
    // same as UNESCAPE_MD_RE plus a space


    var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

    function sub(state, silent) {
      var found,
          content,
          max = state.posMax,
          start = state.pos;

      if (state.src.charCodeAt(start) !== 0x7E
      /* ~ */
      ) {
          return false;
        }

      if (silent) {
        return false;
      } // don't run any pairs in validation mode


      if (start + 2 >= max) {
        return false;
      }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      state.pos = start + 1;

      while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 0x7E
        /* ~ */
        ) {
            found = true;
            break;
          }

        state.parser.skipToken(state);
      }

      if (!found || start + 1 === state.pos) {
        state.pos = start;
        return false;
      }

      content = state.src.slice(start + 1, state.pos); // don't allow unescaped spaces/newlines inside

      if (content.match(/(^|[^\\])(\\\\)*\s/)) {
        state.pos = start;
        return false;
      } // found!


      state.posMax = state.pos;
      state.pos = start + 1;

      if (!silent) {
        state.push({
          type: 'sub',
          level: state.level,
          content: content.replace(UNESCAPE_RE, '$1')
        });
      }

      state.pos = state.posMax + 1;
      state.posMax = max;
      return true;
    } // Process ^superscript^
    // same as UNESCAPE_MD_RE plus a space


    var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

    function sup(state, silent) {
      var found,
          content,
          max = state.posMax,
          start = state.pos;

      if (state.src.charCodeAt(start) !== 0x5E
      /* ^ */
      ) {
          return false;
        }

      if (silent) {
        return false;
      } // don't run any pairs in validation mode


      if (start + 2 >= max) {
        return false;
      }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      state.pos = start + 1;

      while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 0x5E
        /* ^ */
        ) {
            found = true;
            break;
          }

        state.parser.skipToken(state);
      }

      if (!found || start + 1 === state.pos) {
        state.pos = start;
        return false;
      }

      content = state.src.slice(start + 1, state.pos); // don't allow unescaped spaces/newlines inside

      if (content.match(/(^|[^\\])(\\\\)*\s/)) {
        state.pos = start;
        return false;
      } // found!


      state.posMax = state.pos;
      state.pos = start + 1;

      if (!silent) {
        state.push({
          type: 'sup',
          level: state.level,
          content: content.replace(UNESCAPE_RE$1, '$1')
        });
      }

      state.pos = state.posMax + 1;
      state.posMax = max;
      return true;
    } // Process [links](<to> "stuff")


    function links(state, silent) {
      var labelStart,
          labelEnd,
          label,
          href,
          title,
          pos,
          ref,
          code,
          isImage = false,
          oldPos = state.pos,
          max = state.posMax,
          start = state.pos,
          marker = state.src.charCodeAt(start);

      if (marker === 0x21
      /* ! */
      ) {
          isImage = true;
          marker = state.src.charCodeAt(++start);
        }

      if (marker !== 0x5B
      /* [ */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      labelStart = start + 1;
      labelEnd = parseLinkLabel(state, start); // parser failed to find ']', so it's not a valid link

      if (labelEnd < 0) {
        return false;
      }

      pos = labelEnd + 1;

      if (pos < max && state.src.charCodeAt(pos) === 0x28
      /* ( */
      ) {
          //
          // Inline link
          //
          // [link](  <href>  "title"  )
          //        ^^ skipping these spaces
          pos++;

          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);

            if (code !== 0x20 && code !== 0x0A) {
              break;
            }
          }

          if (pos >= max) {
            return false;
          } // [link](  <href>  "title"  )
          //          ^^^^^^ parsing link destination


          start = pos;

          if (parseLinkDestination(state, pos)) {
            href = state.linkContent;
            pos = state.pos;
          } else {
            href = '';
          } // [link](  <href>  "title"  )
          //                ^^ skipping these spaces


          start = pos;

          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);

            if (code !== 0x20 && code !== 0x0A) {
              break;
            }
          } // [link](  <href>  "title"  )
          //                  ^^^^^^^ parsing link title


          if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
            title = state.linkContent;
            pos = state.pos; // [link](  <href>  "title"  )
            //                         ^^ skipping these spaces

            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);

              if (code !== 0x20 && code !== 0x0A) {
                break;
              }
            }
          } else {
            title = '';
          }

          if (pos >= max || state.src.charCodeAt(pos) !== 0x29
          /* ) */
          ) {
              state.pos = oldPos;
              return false;
            }

          pos++;
        } else {
        //
        // Link reference
        //
        // do not allow nested reference links
        if (state.linkLevel > 0) {
          return false;
        } // [foo]  [bar]
        //      ^^ optional whitespace (can include newlines)


        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);

          if (code !== 0x20 && code !== 0x0A) {
            break;
          }
        }

        if (pos < max && state.src.charCodeAt(pos) === 0x5B
        /* [ */
        ) {
            start = pos + 1;
            pos = parseLinkLabel(state, pos);

            if (pos >= 0) {
              label = state.src.slice(start, pos++);
            } else {
              pos = start - 1;
            }
          } // covers label === '' and label === undefined
        // (collapsed reference link and shortcut reference link respectively)


        if (!label) {
          if (typeof label === 'undefined') {
            pos = labelEnd + 1;
          }

          label = state.src.slice(labelStart, labelEnd);
        }

        ref = state.env.references[normalizeReference(label)];

        if (!ref) {
          state.pos = oldPos;
          return false;
        }

        href = ref.href;
        title = ref.title;
      } //
      // We found the end of the link, and know for a fact it's a valid link;
      // so all that's left to do is to call tokenizer.
      //


      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;

        if (isImage) {
          state.push({
            type: 'image',
            src: href,
            title: title,
            alt: state.src.substr(labelStart, labelEnd - labelStart),
            level: state.level
          });
        } else {
          state.push({
            type: 'link_open',
            href: href,
            title: title,
            level: state.level++
          });
          state.linkLevel++;
          state.parser.tokenize(state);
          state.linkLevel--;
          state.push({
            type: 'link_close',
            level: --state.level
          });
        }
      }

      state.pos = pos;
      state.posMax = max;
      return true;
    } // Process inline footnotes (^[...])


    function footnote_inline(state, silent) {
      var labelStart,
          labelEnd,
          footnoteId,
          oldLength,
          max = state.posMax,
          start = state.pos;

      if (start + 2 >= max) {
        return false;
      }

      if (state.src.charCodeAt(start) !== 0x5E
      /* ^ */
      ) {
          return false;
        }

      if (state.src.charCodeAt(start + 1) !== 0x5B
      /* [ */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      labelStart = start + 2;
      labelEnd = parseLinkLabel(state, start + 1); // parser failed to find ']', so it's not a valid note

      if (labelEnd < 0) {
        return false;
      } // We found the end of the link, and know for a fact it's a valid link;
      // so all that's left to do is to call tokenizer.
      //


      if (!silent) {
        if (!state.env.footnotes) {
          state.env.footnotes = {};
        }

        if (!state.env.footnotes.list) {
          state.env.footnotes.list = [];
        }

        footnoteId = state.env.footnotes.list.length;
        state.pos = labelStart;
        state.posMax = labelEnd;
        state.push({
          type: 'footnote_ref',
          id: footnoteId,
          level: state.level
        });
        state.linkLevel++;
        oldLength = state.tokens.length;
        state.parser.tokenize(state);
        state.env.footnotes.list[footnoteId] = {
          tokens: state.tokens.splice(oldLength)
        };
        state.linkLevel--;
      }

      state.pos = labelEnd + 1;
      state.posMax = max;
      return true;
    } // Process footnote references ([^...])


    function footnote_ref(state, silent) {
      var label,
          pos,
          footnoteId,
          footnoteSubId,
          max = state.posMax,
          start = state.pos; // should be at least 4 chars - "[^x]"

      if (start + 3 > max) {
        return false;
      }

      if (!state.env.footnotes || !state.env.footnotes.refs) {
        return false;
      }

      if (state.src.charCodeAt(start) !== 0x5B
      /* [ */
      ) {
          return false;
        }

      if (state.src.charCodeAt(start + 1) !== 0x5E
      /* ^ */
      ) {
          return false;
        }

      if (state.level >= state.options.maxNesting) {
        return false;
      }

      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x20) {
          return false;
        }

        if (state.src.charCodeAt(pos) === 0x0A) {
          return false;
        }

        if (state.src.charCodeAt(pos) === 0x5D
        /* ] */
        ) {
            break;
          }
      }

      if (pos === start + 2) {
        return false;
      } // no empty footnote labels


      if (pos >= max) {
        return false;
      }

      pos++;
      label = state.src.slice(start + 2, pos - 1);

      if (typeof state.env.footnotes.refs[':' + label] === 'undefined') {
        return false;
      }

      if (!silent) {
        if (!state.env.footnotes.list) {
          state.env.footnotes.list = [];
        }

        if (state.env.footnotes.refs[':' + label] < 0) {
          footnoteId = state.env.footnotes.list.length;
          state.env.footnotes.list[footnoteId] = {
            label: label,
            count: 0
          };
          state.env.footnotes.refs[':' + label] = footnoteId;
        } else {
          footnoteId = state.env.footnotes.refs[':' + label];
        }

        footnoteSubId = state.env.footnotes.list[footnoteId].count;
        state.env.footnotes.list[footnoteId].count++;
        state.push({
          type: 'footnote_ref',
          id: footnoteId,
          subId: footnoteSubId,
          level: state.level
        });
      }

      state.pos = pos;
      state.posMax = max;
      return true;
    } // List of valid url schemas, accorting to commonmark spec
    // http://jgm.github.io/CommonMark/spec.html#autolinks


    var url_schemas = ['coap', 'doi', 'javascript', 'aaa', 'aaas', 'about', 'acap', 'cap', 'cid', 'crid', 'data', 'dav', 'dict', 'dns', 'file', 'ftp', 'geo', 'go', 'gopher', 'h323', 'http', 'https', 'iax', 'icap', 'im', 'imap', 'info', 'ipp', 'iris', 'iris.beep', 'iris.xpc', 'iris.xpcs', 'iris.lwz', 'ldap', 'mailto', 'mid', 'msrp', 'msrps', 'mtqp', 'mupdate', 'news', 'nfs', 'ni', 'nih', 'nntp', 'opaquelocktoken', 'pop', 'pres', 'rtsp', 'service', 'session', 'shttp', 'sieve', 'sip', 'sips', 'sms', 'snmp', 'soap.beep', 'soap.beeps', 'tag', 'tel', 'telnet', 'tftp', 'thismessage', 'tn3270', 'tip', 'tv', 'urn', 'vemmi', 'ws', 'wss', 'xcon', 'xcon-userid', 'xmlrpc.beep', 'xmlrpc.beeps', 'xmpp', 'z39.50r', 'z39.50s', 'adiumxtra', 'afp', 'afs', 'aim', 'apt', 'attachment', 'aw', 'beshare', 'bitcoin', 'bolo', 'callto', 'chrome', 'chrome-extension', 'com-eventbrite-attendee', 'content', 'cvs', 'dlna-playsingle', 'dlna-playcontainer', 'dtn', 'dvb', 'ed2k', 'facetime', 'feed', 'finger', 'fish', 'gg', 'git', 'gizmoproject', 'gtalk', 'hcp', 'icon', 'ipn', 'irc', 'irc6', 'ircs', 'itms', 'jar', 'jms', 'keyparc', 'lastfm', 'ldaps', 'magnet', 'maps', 'market', 'message', 'mms', 'ms-help', 'msnim', 'mumble', 'mvn', 'notes', 'oid', 'palm', 'paparazzi', 'platform', 'proxy', 'psyc', 'query', 'res', 'resource', 'rmi', 'rsync', 'rtmp', 'secondlife', 'sftp', 'sgn', 'skype', 'smb', 'soldat', 'spotify', 'ssh', 'steam', 'svn', 'teamspeak', 'things', 'udp', 'unreal', 'ut2004', 'ventrilo', 'view-source', 'webcal', 'wtai', 'wyciwyg', 'xfire', 'xri', 'ymsgr']; // Process autolinks '<protocol:...>'

    /*eslint max-len:0*/

    var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
    var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;

    function autolink(state, silent) {
      var tail,
          linkMatch,
          emailMatch,
          url,
          fullUrl,
          pos = state.pos;

      if (state.src.charCodeAt(pos) !== 0x3C
      /* < */
      ) {
          return false;
        }

      tail = state.src.slice(pos);

      if (tail.indexOf('>') < 0) {
        return false;
      }

      linkMatch = tail.match(AUTOLINK_RE);

      if (linkMatch) {
        if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) {
          return false;
        }

        url = linkMatch[0].slice(1, -1);
        fullUrl = normalizeLink(url);

        if (!state.parser.validateLink(url)) {
          return false;
        }

        if (!silent) {
          state.push({
            type: 'link_open',
            href: fullUrl,
            level: state.level
          });
          state.push({
            type: 'text',
            content: url,
            level: state.level + 1
          });
          state.push({
            type: 'link_close',
            level: state.level
          });
        }

        state.pos += linkMatch[0].length;
        return true;
      }

      emailMatch = tail.match(EMAIL_RE);

      if (emailMatch) {
        url = emailMatch[0].slice(1, -1);
        fullUrl = normalizeLink('mailto:' + url);

        if (!state.parser.validateLink(fullUrl)) {
          return false;
        }

        if (!silent) {
          state.push({
            type: 'link_open',
            href: fullUrl,
            level: state.level
          });
          state.push({
            type: 'text',
            content: url,
            level: state.level + 1
          });
          state.push({
            type: 'link_close',
            level: state.level
          });
        }

        state.pos += emailMatch[0].length;
        return true;
      }

      return false;
    } // Regexps to match html elements


    function replace$1(regex, options) {
      regex = regex.source;
      options = options || '';
      return function self(name, val) {
        if (!name) {
          return new RegExp(regex, options);
        }

        val = val.source || val;
        regex = regex.replace(name, val);
        return self;
      };
    }

    var attr_name = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
    var unquoted = /[^"'=<>`\x00-\x20]+/;
    var single_quoted = /'[^']*'/;
    var double_quoted = /"[^"]*"/;
    /*eslint no-spaced-func:0*/

    var attr_value = replace$1(/(?:unquoted|single_quoted|double_quoted)/)('unquoted', unquoted)('single_quoted', single_quoted)('double_quoted', double_quoted)();
    var attribute = replace$1(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)('attr_name', attr_name)('attr_value', attr_value)();
    var open_tag = replace$1(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)('attribute', attribute)();
    var close_tag = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
    var comment = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
    var processing = /<[?].*?[?]>/;
    var declaration = /<![A-Z]+\s+[^>]*>/;
    var cdata = /<!\[CDATA\[[\s\S]*?\]\]>/;
    var HTML_TAG_RE = replace$1(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)('open_tag', open_tag)('close_tag', close_tag)('comment', comment)('processing', processing)('declaration', declaration)('cdata', cdata)(); // Process html tags

    function isLetter$2(ch) {
      /*eslint no-bitwise:0*/
      var lc = ch | 0x20; // to lower case

      return lc >= 0x61
      /* a */
      && lc <= 0x7a
      /* z */
      ;
    }

    function htmltag(state, silent) {
      var ch,
          match,
          max,
          pos = state.pos;

      if (!state.options.html) {
        return false;
      } // Check start


      max = state.posMax;

      if (state.src.charCodeAt(pos) !== 0x3C
      /* < */
      || pos + 2 >= max) {
        return false;
      } // Quick fail on second char


      ch = state.src.charCodeAt(pos + 1);

      if (ch !== 0x21
      /* ! */
      && ch !== 0x3F
      /* ? */
      && ch !== 0x2F
      /* / */
      && !isLetter$2(ch)) {
        return false;
      }

      match = state.src.slice(pos).match(HTML_TAG_RE);

      if (!match) {
        return false;
      }

      if (!silent) {
        state.push({
          type: 'htmltag',
          content: state.src.slice(pos, pos + match[0].length),
          level: state.level
        });
      }

      state.pos += match[0].length;
      return true;
    } // Process html entity - &#123;, &#xAF;, &quot;, ...


    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;

    function entity(state, silent) {
      var ch,
          code,
          match,
          pos = state.pos,
          max = state.posMax;

      if (state.src.charCodeAt(pos) !== 0x26
      /* & */
      ) {
          return false;
        }

      if (pos + 1 < max) {
        ch = state.src.charCodeAt(pos + 1);

        if (ch === 0x23
        /* # */
        ) {
            match = state.src.slice(pos).match(DIGITAL_RE);

            if (match) {
              if (!silent) {
                code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
                state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
              }

              state.pos += match[0].length;
              return true;
            }
          } else {
          match = state.src.slice(pos).match(NAMED_RE);

          if (match) {
            var decoded = decodeEntity(match[1]);

            if (match[1] !== decoded) {
              if (!silent) {
                state.pending += decoded;
              }

              state.pos += match[0].length;
              return true;
            }
          }
        }
      }

      if (!silent) {
        state.pending += '&';
      }

      state.pos++;
      return true;
    }
    /**
     * Inline Parser `rules`
     */


    var _rules$2 = [['text', text], ['newline', newline], ['escape', escape], ['backticks', backticks], ['del', del], ['ins', ins], ['mark', mark], ['emphasis', emphasis], ['sub', sub], ['sup', sup], ['links', links], ['footnote_inline', footnote_inline], ['footnote_ref', footnote_ref], ['autolink', autolink], ['htmltag', htmltag], ['entity', entity]];
    /**
     * Inline Parser class. Note that link validation is stricter
     * in Remarkable than what is specified by CommonMark. If you
     * want to change this you can use a custom validator.
     *
     * @api private
     */

    function ParserInline() {
      this.ruler = new Ruler();

      for (var i = 0; i < _rules$2.length; i++) {
        this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
      } // Can be overridden with a custom validator


      this.validateLink = validateLink;
    }
    /**
     * Skip a single token by running all rules in validation mode.
     * Returns `true` if any rule reports success.
     *
     * @param  {Object} `state`
     * @api privage
     */


    ParserInline.prototype.skipToken = function (state) {
      var rules = this.ruler.getRules('');
      var len = rules.length;
      var pos = state.pos;
      var i, cached_pos;

      if ((cached_pos = state.cacheGet(pos)) > 0) {
        state.pos = cached_pos;
        return;
      }

      for (i = 0; i < len; i++) {
        if (rules[i](state, true)) {
          state.cacheSet(pos, state.pos);
          return;
        }
      }

      state.pos++;
      state.cacheSet(pos, state.pos);
    };
    /**
     * Generate tokens for the given input range.
     *
     * @param  {Object} `state`
     * @api private
     */


    ParserInline.prototype.tokenize = function (state) {
      var rules = this.ruler.getRules('');
      var len = rules.length;
      var end = state.posMax;
      var ok, i;

      while (state.pos < end) {
        // Try all possible rules.
        // On success, the rule should:
        //
        // - update `state.pos`
        // - update `state.tokens`
        // - return true
        for (i = 0; i < len; i++) {
          ok = rules[i](state, false);

          if (ok) {
            break;
          }
        }

        if (ok) {
          if (state.pos >= end) {
            break;
          }

          continue;
        }

        state.pending += state.src[state.pos++];
      }

      if (state.pending) {
        state.pushPending();
      }
    };
    /**
     * Parse the given input string.
     *
     * @param  {String} `str`
     * @param  {Object} `options`
     * @param  {Object} `env`
     * @param  {Array} `outTokens`
     * @api private
     */


    ParserInline.prototype.parse = function (str, options, env, outTokens) {
      var state = new StateInline(str, this, options, env, outTokens);
      this.tokenize(state);
    };
    /**
     * Validate the given `url` by checking for bad protocols.
     *
     * @param  {String} `url`
     * @return {Boolean}
     */


    function validateLink(url) {
      var BAD_PROTOCOLS = ['vbscript', 'javascript', 'file', 'data'];
      var str = url.trim().toLowerCase(); // Care about digital entities "javascript&#x3A;alert(1)"

      str = replaceEntities(str);

      if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
        return false;
      }

      return true;
    } // Remarkable default options


    var defaultConfig = {
      options: {
        html: false,
        // Enable HTML tags in source
        xhtmlOut: false,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: 'language-',
        // CSS language prefix for fenced blocks
        linkTarget: '',
        // set target to open link in
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
        quotes: '“”‘’',
        // Highlighter function. Should return escaped HTML,
        // or '' if input not changed
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20 // Internal protection, recursion limit

      },
      components: {
        core: {
          rules: ['block', 'inline', 'references', 'replacements', 'smartquotes', 'references', 'abbr2', 'footnote_tail']
        },
        block: {
          rules: ['blockquote', 'code', 'fences', 'footnote', 'heading', 'hr', 'htmlblock', 'lheading', 'list', 'paragraph', 'table']
        },
        inline: {
          rules: ['autolink', 'backticks', 'del', 'emphasis', 'entity', 'escape', 'footnote_ref', 'htmltag', 'links', 'newline', 'text']
        }
      }
    }; // Remarkable default options

    var fullConfig = {
      options: {
        html: false,
        // Enable HTML tags in source
        xhtmlOut: false,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: 'language-',
        // CSS language prefix for fenced blocks
        linkTarget: '',
        // set target to open link in
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
        quotes: '“”‘’',
        // Highlighter function. Should return escaped HTML,
        // or '' if input not changed
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20 // Internal protection, recursion limit

      },
      components: {
        // Don't restrict core/block/inline rules
        core: {},
        block: {},
        inline: {}
      }
    }; // Commonmark default options

    var commonmarkConfig = {
      options: {
        html: true,
        // Enable HTML tags in source
        xhtmlOut: true,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: 'language-',
        // CSS language prefix for fenced blocks
        linkTarget: '',
        // set target to open link in
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
        quotes: '“”‘’',
        // Highlighter function. Should return escaped HTML,
        // or '' if input not changed
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20 // Internal protection, recursion limit

      },
      components: {
        core: {
          rules: ['block', 'inline', 'references', 'abbr2']
        },
        block: {
          rules: ['blockquote', 'code', 'fences', 'heading', 'hr', 'htmlblock', 'lheading', 'list', 'paragraph']
        },
        inline: {
          rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'htmltag', 'links', 'newline', 'text']
        }
      }
    };
    /**
     * Preset configs
     */

    var config = {
      'default': defaultConfig,
      'full': fullConfig,
      'commonmark': commonmarkConfig
    };
    /**
     * The `StateCore` class manages state.
     *
     * @param {Object} `instance` Remarkable instance
     * @param {String} `str` Markdown string
     * @param {Object} `env`
     */

    function StateCore(instance, str, env) {
      this.src = str;
      this.env = env;
      this.options = instance.options;
      this.tokens = [];
      this.inlineMode = false;
      this.inline = instance.inline;
      this.block = instance.block;
      this.renderer = instance.renderer;
      this.typographer = instance.typographer;
    }
    /**
     * The main `Remarkable` class. Create an instance of
     * `Remarkable` with a `preset` and/or `options`.
     *
     * @param {String} `preset` If no preset is given, `default` is used.
     * @param {Object} `options`
     */


    function Remarkable(preset, options) {
      if (typeof preset !== 'string') {
        options = preset;
        preset = 'default';
      }

      if (options && options.linkify != null) {
        console.warn('linkify option is removed. Use linkify plugin instead:\n\n' + 'import Remarkable from \'remarkable\';\n' + 'import linkify from \'remarkable/linkify\';\n' + 'new Remarkable().use(linkify)\n');
      }

      this.inline = new ParserInline();
      this.block = new ParserBlock();
      this.core = new Core();
      this.renderer = new Renderer();
      this.ruler = new Ruler();
      this.options = {};
      this.configure(config[preset]);
      this.set(options || {});
    }
    /**
     * Set options as an alternative to passing them
     * to the constructor.
     *
     * ```js
     * md.set({typographer: true});
     * ```
     * @param {Object} `options`
     * @api public
     */


    Remarkable.prototype.set = function (options) {
      assign(this.options, options);
    };
    /**
     * Batch loader for components rules states, and options
     *
     * @param  {Object} `presets`
     */


    Remarkable.prototype.configure = function (presets) {
      var self = this;

      if (!presets) {
        throw new Error('Wrong `remarkable` preset, check name/content');
      }

      if (presets.options) {
        self.set(presets.options);
      }

      if (presets.components) {
        Object.keys(presets.components).forEach(function (name) {
          if (presets.components[name].rules) {
            self[name].ruler.enable(presets.components[name].rules, true);
          }
        });
      }
    };
    /**
     * Use a plugin.
     *
     * ```js
     * var md = new Remarkable();
     *
     * md.use(plugin1)
     *   .use(plugin2, opts)
     *   .use(plugin3);
     * ```
     *
     * @param  {Function} `plugin`
     * @param  {Object} `options`
     * @return {Object} `Remarkable` for chaining
     */


    Remarkable.prototype.use = function (plugin, options) {
      plugin(this, options);
      return this;
    };
    /**
     * Parse the input `string` and return a tokens array.
     * Modifies `env` with definitions data.
     *
     * @param  {String} `string`
     * @param  {Object} `env`
     * @return {Array} Array of tokens
     */


    Remarkable.prototype.parse = function (str, env) {
      var state = new StateCore(this, str, env);
      this.core.process(state);
      return state.tokens;
    };
    /**
     * The main `.render()` method that does all the magic :)
     *
     * @param  {String} `string`
     * @param  {Object} `env`
     * @return {String} Rendered HTML.
     */


    Remarkable.prototype.render = function (str, env) {
      env = env || {};
      return this.renderer.render(this.parse(str, env), this.options, env);
    };
    /**
     * Parse the given content `string` as a single string.
     *
     * @param  {String} `string`
     * @param  {Object} `env`
     * @return {Array} Array of tokens
     */


    Remarkable.prototype.parseInline = function (str, env) {
      var state = new StateCore(this, str, env);
      state.inlineMode = true;
      this.core.process(state);
      return state.tokens;
    };
    /**
     * Render a single content `string`, without wrapping it
     * to paragraphs
     *
     * @param  {String} `str`
     * @param  {Object} `env`
     * @return {String}
     */


    Remarkable.prototype.renderInline = function (str, env) {
      env = env || {};
      return this.renderer.render(this.parseInline(str, env), this.options, env);
    };
    /**
     * Plugin for Remarkable Markdown processor which transforms $..$ and $$..$$ sequences into math HTML using the
     * Katex package.
     */


    var rkatex = function rkatex(md, options) {
      var dollar = '$';
      var opts = options || {};
      var delimiter = opts.delimiter || dollar;

      if (delimiter.length !== 1) {
        throw new Error('invalid delimiter');
      }

      var katex = require$$0__default;
      /**
       * Render the contents as KaTeX
       */

      var renderKatex = function renderKatex(source, displayMode) {
        return katex.renderToString(source, {
          displayMode: displayMode,
          throwOnError: false
        });
      };
      /**
       * Parse '$$' as a block. Based off of similar method in remarkable.
       */


      var parseBlockKatex = function parseBlockKatex(state, startLine, endLine) {
        var haveEndMarker = false;
        var pos = state.bMarks[startLine] + state.tShift[startLine];
        var max = state.eMarks[startLine];

        if (pos + 1 > max) {
          return false;
        }

        var marker = state.src.charAt(pos);

        if (marker !== delimiter) {
          return false;
        } // scan marker length


        var mem = pos;
        pos = state.skipChars(pos, marker);
        var len = pos - mem;

        if (len !== 2) {
          return false;
        } // search end of block


        var nextLine = startLine;

        for (;;) {
          ++nextLine;

          if (nextLine >= endLine) {
            break;
          }

          pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];

          if (pos < max && state.tShift[nextLine] < state.blkIndent) {
            break;
          }

          if (state.src.charAt(pos) !== delimiter) {
            continue;
          }

          if (state.tShift[nextLine] - state.blkIndent >= 4) {
            continue;
          }

          pos = state.skipChars(pos, marker);

          if (pos - mem < len) {
            continue;
          }

          pos = state.skipSpaces(pos);

          if (pos < max) {
            continue;
          }

          haveEndMarker = true;
          break;
        } // If a fence has heading spaces, they should be removed from its inner block


        len = state.tShift[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);
        var content = state.getLines(startLine + 1, nextLine, len, true).replace(/[ \n]+/g, ' ').trim();
        state.tokens.push({
          type: 'katex',
          params: null,
          content: content,
          lines: [startLine, state.line],
          level: state.level,
          block: true
        });
        return true;
      };
      /**
       * Look for '$' or '$$' spans in Markdown text. Based off of the 'fenced' parser in remarkable.
       */


      var parseInlineKatex = function parseInlineKatex(state, silent) {
        var start = state.pos;
        var max = state.posMax;
        var pos = start; // Unexpected starting character

        if (state.src.charAt(pos) !== delimiter) {
          return false;
        }

        ++pos;

        while (pos < max && state.src.charAt(pos) === delimiter) {
          ++pos;
        } // Capture the length of the starting delimiter -- closing one must match in size


        var marker = state.src.slice(start, pos);

        if (marker.length > 2) {
          return false;
        }

        var spanStart = pos;
        var escapedDepth = 0;

        while (pos < max) {
          var _char = state.src.charAt(pos);

          if (_char === '{') {
            escapedDepth += 1;
          } else if (_char === '}') {
            escapedDepth -= 1;

            if (escapedDepth < 0) {
              return false;
            }
          } else if (_char === delimiter && escapedDepth === 0) {
            var matchStart = pos;
            var matchEnd = pos + 1;

            while (matchEnd < max && state.src.charAt(matchEnd) === delimiter) {
              ++matchEnd;
            }

            if (matchEnd - matchStart === marker.length) {
              if (!silent) {
                var content = state.src.slice(spanStart, matchStart).replace(/[ \n]+/g, ' ').trim();
                state.push({
                  type: 'katex',
                  content: content,
                  block: marker.length > 1,
                  level: state.level
                });
              }

              state.pos = matchEnd;
              return true;
            }
          }

          pos += 1;
        }

        if (!silent) {
          state.pending += marker;
        }

        state.pos += marker.length;
        return true;
      };

      md.inline.ruler.push('katex', parseInlineKatex, options);
      md.block.ruler.push('katex', parseBlockKatex, options);

      md.renderer.rules.katex = function (tokens, idx) {
        return renderKatex(tokens[idx].content, tokens[idx].block);
      };

      md.renderer.rules.katex.delimiter = delimiter;
    };

    var remarkableKatex = rkatex;
    var loading$1;

    var autoload$1 = function autoload$1() {
      loading$1 = loading$1 || loadJS([{
        type: 'script',
        data: {
          src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js'
        }
      }]);
      return loading$1;
    };

    var name$1 = 'katex';

    function transform$1(transformHooks) {
      transformHooks.parser.tap(function (md, features) {
        md.use(remarkableKatex);

        var renderKatex = function renderKatex(source, displayMode) {
          var _window = window,
              katex = _window.katex;
          if (katex) return katex.renderToString(source, {
            displayMode: displayMode,
            throwOnError: false
          });
          autoload$1().then(function () {
            transformHooks.retransform.call();
          });
          return source;
        };

        md.renderer.rules.katex = function (tokens, idx) {
          var result = renderKatex(tokens[idx].content, tokens[idx].block);
          features[name$1] = true;
          return result;
        };
      });
      return {
        styles: [{
          type: 'stylesheet',
          data: {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'
          }
        }],
        scripts: [{
          type: 'iife',
          data: {
            fn: function fn(getMarkmap) {
              window.WebFontConfig = {
                custom: {
                  families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7', 'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script', 'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3', 'KaTeX_Size4', 'KaTeX_Typewriter']
                },
                active: function active() {
                  getMarkmap().refreshHook.call();
                }
              };
            },
            getParams: function getParams(_ref9) {
              var getMarkmap = _ref9.getMarkmap;
              return [getMarkmap];
            }
          }
        }, {
          type: 'script',
          data: {
            src: 'https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.js',
            defer: true
          }
        }]
      };
    }

    var katex = /*#__PURE__*/Object.freeze({
      __proto__: null,
      name: name$1,
      transform: transform$1
    });
    var loading;

    var autoload = function autoload() {
      loading = loading || loadJS([{
        type: 'script',
        data: {
          src: "https://cdn.jsdelivr.net/npm/prismjs@".concat("1.23.0", "/components/prism-core.min.js")
        }
      }, {
        type: 'script',
        data: {
          src: "https://cdn.jsdelivr.net/npm/prismjs@".concat("1.23.0", "/plugins/autoloader/prism-autoloader.min.js")
        }
      }]);
      return loading;
    };

    function loadLanguageAndRefresh(lang, transformHooks) {
      autoload().then(function () {
        window.Prism.plugins.autoloader.loadLanguages([lang], function () {
          transformHooks.retransform.call();
        });
      });
    }

    var name = 'prism';

    function transform(transformHooks) {
      transformHooks.parser.tap(function (md, features) {
        md.set({
          highlight: function highlight(str, lang) {
            var _Prism$languages;

            features[name] = true;
            var _window2 = window,
                Prism = _window2.Prism;
            var grammar = Prism == null ? void 0 : (_Prism$languages = Prism.languages) == null ? void 0 : _Prism$languages[lang];

            if (!grammar) {
              loadLanguageAndRefresh(lang, transformHooks);
              return '';
            }

            return Prism.highlight(str, grammar, lang);
          }
        });
      });
      return {
        styles: [{
          type: 'stylesheet',
          data: {
            href: "https://cdn.jsdelivr.net/npm/prismjs@".concat("1.23.0", "/themes/prism.css")
          }
        }]
      };
    }

    var prism = /*#__PURE__*/Object.freeze({
      __proto__: null,
      name: name,
      transform: transform
    });

    function createTransformHooks() {
      return {
        parser: new Hook(),
        htmltag: new Hook(),

        /**
         * Indicate that the last transformation is not complete for reasons like
         * lack of resources and is called when it is ready for a new transformation.
         */
        retransform: new Hook()
      };
    }

    var plugins = [katex, prism];

    function cleanNode(node) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (node.t === 'heading') {
        // drop all paragraphs
        node.c = node.c.filter(function (item) {
          return item.t !== 'paragraph';
        });
      } else if (node.t === 'list_item') {
        var _node$p; // keep first paragraph as content of list_item, drop others


        node.c = node.c.filter(function (item) {
          if (['paragraph', 'fence'].includes(item.t)) {
            if (!node.v) {
              node.v = item.v;
              node.p = _extends$1({}, node.p, item.p);
            }

            return false;
          }

          return true;
        });

        if (((_node$p = node.p) == null ? void 0 : _node$p.index) != null) {
          node.v = "".concat(node.p.index, ". ").concat(node.v);
        }
      } else if (node.t === 'ordered_list') {
        var _node$p$start, _node$p2;

        var index = (_node$p$start = (_node$p2 = node.p) == null ? void 0 : _node$p2.start) != null ? _node$p$start : 1;
        node.c.forEach(function (item) {
          if (item.t === 'list_item') {
            item.p = _extends$1({}, item.p, {
              index: index
            });
            index += 1;
          }
        });
      }

      if (node.c.length === 0) {
        delete node.c;
      } else {
        node.c.forEach(function (child) {
          return cleanNode(child, depth + 1);
        });

        if (node.c.length === 1 && !node.c[0].v) {
          node.c = node.c[0].c;
        }
      }

      node.d = depth;
    }

    var Transformer = /*#__PURE__*/function () {
      function Transformer() {
        var _this2 = this;

        var plugins$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : plugins;

        _classCallCheck(this, Transformer);

        this.plugins = void 0;
        this.hooks = void 0;
        this.md = void 0;
        this.assetsMap = void 0;
        this.plugins = plugins$1;
        this.hooks = createTransformHooks();
        var md = new Remarkable({
          html: true,
          breaks: true,
          maxNesting: Infinity
        });
        md.block.ruler.enable(['deflist']);
        md.renderer.rules.htmltag = wrapFunction(md.renderer.rules.htmltag, {
          after: function after(ctx) {
            _this2.hooks.htmltag.call(ctx);
          }
        });
        this.md = md;
        var assetsMap = {};

        var _iterator2 = _createForOfIteratorHelper(plugins$1),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _step2.value,
                _name = _step2$value.name,
                _transform = _step2$value.transform;
            assetsMap[_name] = _transform(this.hooks);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.assetsMap = assetsMap;
      }

      _createClass$1(Transformer, [{
        key: "buildTree",
        value: function buildTree(tokens) {
          var _this3 = this;

          var md = this.md; // TODO deal with <dl><dt>

          var root = {
            t: 'root',
            d: 0,
            v: '',
            c: [],
            p: {}
          };
          var stack = [root];
          var depth = 0;

          var _iterator3 = _createForOfIteratorHelper(tokens),
              _step3;

          try {
            var _loop = function _loop() {
              var token = _step3.value;
              var current = stack[stack.length - 1];

              if (token.type.endsWith('_open')) {
                var type = token.type.slice(0, -5);
                var payload = {};

                if (token.lines) {
                  payload.lines = token.lines;
                }

                if (type === 'heading') {
                  depth = token.hLevel;

                  while (((_current = current) == null ? void 0 : _current.d) >= depth) {
                    stack.pop();
                    current = stack[stack.length - 1];
                  }
                } else {
                  depth = Math.max(depth, ((_current2 = current) == null ? void 0 : _current2.d) || 0) + 1;

                  if (type === 'ordered_list') {
                    payload.start = token.order;
                  }
                }

                var item = {
                  t: type,
                  d: depth,
                  p: payload,
                  v: '',
                  c: []
                };
                current.c.push(item);
                stack.push(item);
              } else if (!current) {
                return "continue";
              } else if (token.type === "".concat(current.t, "_close")) {
                if (current.t === 'heading') {
                  depth = current.d;
                } else {
                  stack.pop();
                  depth = 0;
                }
              } else if (token.type === 'inline') {
                var revoke = _this3.hooks.htmltag.tap(function (ctx) {
                  var comment = ctx.result.match(/^<!--([\s\S]*?)-->$/);
                  var data = comment == null ? void 0 : comment[1].trim();

                  if (data === 'fold') {
                    current.p.f = true;
                    ctx.result = '';
                  }
                });

                var _text = md.renderer.render([token], md.options, {});

                revoke();
                current.v = "".concat(current.v || '').concat(_text);
              } else if (token.type === 'fence') {
                var result = md.renderer.render([token], md.options, {}); // Remarkable only adds className to `<code>` but not `<pre>`, copy it to make PrismJS style work.

                var matches = result.match(/<code( class="[^"]*")>/);
                if (matches) result = result.replace('<pre>', "<pre".concat(matches[1], ">"));
                current.c.push({
                  t: token.type,
                  d: depth + 1,
                  v: result,
                  c: []
                });
              } else ;
            };

            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _current;

              var _current2;

              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return root;
        }
      }, {
        key: "transform",
        value: function transform(content) {
          var _root$c;

          var features = {};
          this.hooks.parser.call(this.md, features);
          var tokens = this.md.parse(content || '', {});
          var root = this.buildTree(tokens);
          cleanNode(root);
          if (((_root$c = root.c) == null ? void 0 : _root$c.length) === 1) root = root.c[0];
          return {
            root: root,
            features: features
          };
        }
        /**
         * Get all assets from enabled plugins or filter them by plugin names as keys.
         */

      }, {
        key: "getAssets",
        value: function getAssets(keys) {
          var _this4 = this;

          var _keys;

          var styles = [];
          var scripts = [];
          (_keys = keys) != null ? _keys : keys = Object.keys(this.assetsMap);

          var _iterator4 = _createForOfIteratorHelper(keys.map(function (key) {
            return _this4.assetsMap[key];
          })),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var assets = _step4.value;

              if (assets) {
                if (assets.styles) styles.push.apply(styles, _toConsumableArray(assets.styles));
                if (assets.scripts) scripts.push.apply(scripts, _toConsumableArray(assets.scripts));
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return {
            styles: styles,
            scripts: scripts
          };
        }
        /**
         * Get used assets by features object returned by `transform`.
         */

      }, {
        key: "getUsedAssets",
        value: function getUsedAssets(features) {
          return this.getAssets(Object.keys(features).filter(function (key) {
            return features[key];
          }));
        }
      }]);

      return Transformer;
    }();

    exports.Transformer = Transformer;
    exports.builtInPlugins = plugins;
    exports.fillTemplate = fillTemplate;
  });
});

/** Used as the `TypeError` message for "Functions" methods. */

var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var lodash_debounce = debounce;

/* src/components/markmap.svelte generated by Svelte v3.35.0 */

function create_fragment(ctx) {
	let svg;

	return {
		c() {
			svg = svg_element("svg");
			this.h();
		},
		l(nodes) {
			svg = claim_element(nodes, "svg", { xmlns: true, class: true, style: true }, 1);
			children$1(svg).forEach(detach);
			this.h();
		},
		h() {
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "leading-none");
			attr(svg, "style", /*style*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			/*svg_binding*/ ctx[7](svg);
		},
		p(ctx, [dirty]) {
			if (dirty & /*style*/ 2) {
				attr(svg, "style", /*style*/ ctx[1]);
			}
		},
		i: noop$2,
		o: noop$2,
		d(detaching) {
			if (detaching) detach(svg);
			/*svg_binding*/ ctx[7](null);
		}
	};
}

const transformer = new browser.Transformer();
const { styles, scripts } = transformer.getAssets();

Promise.all([
	styles && loadCSS$1(styles),
	scripts && loadJS$1(scripts, { getMarkmap: () => markmap })
]);

function instance($$self, $$props, $$invalidate) {
	let { mm } = $$props;
	let { el = null } = $$props;
	let { content } = $$props;
	let { style = "" } = $$props;
	let { options = null } = $$props;
	let root;
	let shouldFit = true;

	const setCursor = cursor => {
		if (!mm) return;
		const active = findActiveNode(cursor);
		console.log("active", active);
		if (active) mm.ensureView(active, { bottom: 60 });
	};

	const setFit = fit => {
		shouldFit = fit;
	};

	const revokers = [
		refreshHook.tap(() => {
			update(content, true);
		}),
		transformer.hooks.retransform.tap(() => {
			update(content, true);
		})
	];

	const onReset = () => mm.fit();
	const onResize = lodash_debounce(onReset, 200);
	let cacheContent;

	function update(content, force) {
		if (!mm) return;

		if (content !== cacheContent || force) {
			({ root } = transformer.transform(content || ""));
			mm.setData(root);
			if (shouldFit) mm.fit();
			cacheContent = content;
		}
	}

	function findActiveNode(line) {
		function dfs(node) {
			const lines = node.p?.lines;

			if (lines && lines[0] <= line && line < lines[1]) {
				best = node;
			}

			node.c?.forEach(dfs);
		}

		let best;
		if (root) dfs(root);
		return best;
	}

	onMount(() => {
		$$invalidate(2, mm = Markmap.create(el, options));
		update(content);
		window.addEventListener("resize", onResize);
	});

	onDestroy(() => {
		revokers.forEach(revoke => {
			revoke();
		});

		mm?.destroy?.();
		$$invalidate(2, mm = null);

		{
			window.removeEventListener("resize", onResize);
		}
	});

	function svg_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$props => {
		if ("mm" in $$props) $$invalidate(2, mm = $$props.mm);
		if ("el" in $$props) $$invalidate(0, el = $$props.el);
		if ("content" in $$props) $$invalidate(3, content = $$props.content);
		if ("style" in $$props) $$invalidate(1, style = $$props.style);
		if ("options" in $$props) $$invalidate(4, options = $$props.options);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 8) {
			{
				try {
					update(content);
				} catch(err) {
					console.error(err);

					if (typeof gtag !== "undefined") {
						const { message, stack } = err || {};
						gtag("event", "exception", { description: message + "\n" + stack });
					}
				}
			}
		}

		if ($$self.$$.dirty & /*mm, options*/ 20) {
			if (mm && options) {
				mm.setOptions(options);
				mm.renderData();
			}
		}
	};

	return [el, style, mm, content, options, setCursor, setFit, svg_binding];
}

class Markmap_1 extends SvelteComponent {
	constructor(options) {
		super();

		init$1(this, options, instance, create_fragment, safe_not_equal, {
			mm: 2,
			el: 0,
			content: 3,
			style: 1,
			options: 4,
			setCursor: 5,
			setFit: 6
		});
	}

	get setCursor() {
		return this.$$.ctx[5];
	}

	get setFit() {
		return this.$$.ctx[6];
	}
}

export { cubicOut as $, hsl as A, nogamma as B, Color as C, now$1 as D, SCHEDULED as E, Transition as F, interrupt as G, path as H, timer as I, thisNumberValue as J, ordinal as K, initRange as L, Markmap_1 as M, initInterpolator as N, colors as O, rgbBasis as P, rgb as Q, Rgb as R, Selection$1 as S, Timer as T, constant$1 as U, array as V, x as W, y as X, cubicInOut as Y, cubicIn as Z, _brighter as _, arrayLastIndexOf as a, basis$1 as a0, basisClosed as a1, interpolateTransformCss as a2, interpolateTransformSvg as a3, interpolateZoom as a4, rgbBasisClosed as a5, implicit as a6, category10 as a7, matcher as a8, namespace as a9, namespaces as aa, selection as ab, selector as ac, selectorAll as ad, styleValue as ae, defaultView as af, pointRadial as ag, linkHorizontal as ah, linkVertical as ai, linkRadial as aj, timerFlush as ak, timeout as al, transition as am, zoom as an, transform as ao, identity as ap, browser as aq, lodash_debounce as ar, max as b, minIndex as c, creator as d, sourceEvent as e, array$1 as f, dispatch as g, dragDisable as h, noevent$1 as i, rgbConvert as j, define as k, loadJS as l, min$1 as m, nopropagation$1 as n, extend as o, pointer as p, _darker as q, root$1 as r, select as s, constant$2 as t, interpolateNumber as u, color as v, interpolateRgb as w, interpolateString as x, yesdrag as y, hue as z };
