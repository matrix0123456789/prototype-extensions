import {create} from 'fast-creator';

if (!HTMLDocument.prototype.create && !HTMLElement.prototype.addChild) {
    HTMLDocument.prototype.create = function (selector, attributes = {}) {
        return create(selector, attributes, this);
    };
    HTMLElement.prototype.addChild = function (selector, attributes = {}) {
        let element = this.ownerDocument.create(selector, attributes);
        this.appendChild(element);
        return element;
    };
}
if (!HTMLCollection.prototype.removeAll) {
    HTMLCollection.prototype.removeAll = function () {
        let copy = Array.prototype.slice.call(this);
        for (let element of copy) {
            element.remove();
        }
    };
}

HTMLElement.prototype.__defineGetter__('offsetTopFull', function () {
    if (this.offsetParent)
        return this.offsetParent.offsetTopFull + this.offsetTop;
    else
        return this.offsetTop;
});
HTMLElement.prototype.__defineGetter__('offsetLeftFull', function () {
    if (this.offsetParent)
        return this.offsetParent.offsetLeftFull + this.offsetLeft;
    else
        return this.offsetLeft;
});
if (!Node.prototype.findParent) {
    Node.prototype.findParent = function (fun) {
        let ret = fun(this);
        if (ret)
            return this;
        else if (this.parentNode && this.parentNode instanceof Element)
            return this.parentNode.findParent(fun);
        else
            return null;
    };
}