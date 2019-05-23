if (!HTMLDocument.prototype.create && !HTMLElement.prototype.addChild) {
    HTMLDocument.prototype.create = function (name, attributes = {}) {
        let element = this.createElement(name);
        for (let attrName in attributes) {
            if (attrName === 'className') {
                element.className = attributes[attrName];
            } else if (attrName === 'classList') {
                for (let x of attributes.classList)
                    element.classList.add(x);
            } else if (attrName === 'text') {
                element.textContent = attributes.text;
            } else if (attrName === 'html') {
                element.innerHTML = attributes.html;
            } else if (attrName === 'data') {
                Object.assign(element.dataset, attributes.data);
            } else if (attrName === 'children') {
				attributes.children.forEach(x=>element.addChild(x.tagName,x));
            } else {
                element.setAttribute(attrName, attributes[attrName]);
            }
        }
        return element;
    };
    HTMLElement.prototype.addChild = function (name, attributes = {}) {
        let element = this.ownerDocument.create(name, attributes);
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