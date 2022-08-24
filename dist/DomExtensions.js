"use strict";

var _fastCreator = require("fast-creator");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if (!HTMLDocument.prototype.create && !HTMLElement.prototype.addChild) {
  HTMLDocument.prototype.create = function (selector) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _fastCreator.create)(selector, attributes, this);
  };

  HTMLElement.prototype.addChild = function (selector) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = this.ownerDocument.create(selector, attributes);
    this.appendChild(element);
    return element;
  };

  if (window.ShadowRoot) {
    ShadowRoot.prototype.addChild = HTMLElement.prototype.addChild;
  }
}

if (!HTMLCollection.prototype.removeAll) {
  HTMLCollection.prototype.removeAll = function () {
    var copy = Array.prototype.slice.call(this);

    var _iterator = _createForOfIteratorHelper(copy),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        element.remove();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
}

if (!NodeList.prototype.removeAll) {
  NodeList.prototype.removeAll = function () {
    var copy = Array.prototype.slice.call(this);

    var _iterator2 = _createForOfIteratorHelper(copy),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;
        element.remove();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
}

HTMLElement.prototype.__defineGetter__('offsetTopFull', function () {
  if (this.offsetParent) return this.offsetParent.offsetTopFull + this.offsetTop;else return this.offsetTop;
});

HTMLElement.prototype.__defineGetter__('offsetLeftFull', function () {
  if (this.offsetParent) return this.offsetParent.offsetLeftFull + this.offsetLeft;else return this.offsetLeft;
});

if (!Node.prototype.findParent) {
  Node.prototype.findParent = function (fun) {
    var ret = fun(this);
    if (ret) return this;else if (this.parentNode && this.parentNode instanceof Element) return this.parentNode.findParent(fun);else return null;
  };
}

Node.prototype.__defineGetter__('allParentNodes', function () {
  var ret = [];
  var node = this;

  while (node.parentNode) {
    ret.push(node.parentNode);
    node = node.parentNode;
  }

  return ret;
});