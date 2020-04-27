"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if (!Array.prototype.max) {
  Array.prototype.max = function () {
    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
      return x;
    };
    var value = null;
    var object = null;

    var _iterator = _createForOfIteratorHelper(this),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var itemValue = fun(item);

        if (typeof itemValue === 'number' && !isNaN(itemValue) && (value == null || itemValue > value)) {
          value = itemValue;
          object = item;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return object;
  };
}

if (!Array.prototype.min) {
  Array.prototype.min = function () {
    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
      return x;
    };
    var value = null;
    var object = null;

    var _iterator2 = _createForOfIteratorHelper(this),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        var itemValue = fun(item);

        if (typeof itemValue === 'number' && !isNaN(itemValue) && (value == null || itemValue < value)) {
          value = itemValue;
          object = item;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return object;
  };
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function () {
    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
      return x;
    };
    return this.reduce(function (sum, item) {
      return sum + Number(fun(item));
    }, 0);
  };
}

if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var orders = args.map(function (x) {
      return typeof x == 'function' ? x : function (y) {
        return y[x];
      };
    });

    var compareFunction = function compareFunction(a, b) {
      var _iterator3 = _createForOfIteratorHelper(orders),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var order = _step3.value;
          var valueA = order(a);
          var valueB = order(b);
          if (valueA > valueB) return 1;else if (valueA < valueB) return -1;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return 0;
    };

    return this.sort(compareFunction);
  };
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function () {
    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
      return x;
    };
    var ret = new Map();

    var _iterator4 = _createForOfIteratorHelper(this),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var value = _step4.value;
        var key = fun(value);
        if (ret.has(key)) ret.get(key).push(value);else ret.set(key, [value]);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return ret;
  };
}

if (!Array.prototype.replaceContent) {
  Array.prototype.replaceContent = function (newContent) {
    this.splice(0, this.length);

    var _iterator5 = _createForOfIteratorHelper(newContent),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var item = _step5.value;
        this.push(item);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  };
}

if (!Array.prototype.removeItem) {
  Array.prototype.removeItem = function (item) {
    for (var i = 0; i < this.length;) {
      if (this[i] === item || Number.isNaN(this[i]) && Number.isNaN(item)) this.splice(i, 1);else i++;
    }
  };
}