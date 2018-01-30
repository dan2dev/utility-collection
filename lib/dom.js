"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dom;
(function (Dom) {
    function insertBefore(element, targetElement) {
        targetElement.parentElement.insertBefore(element, targetElement);
    }
    Dom.insertBefore = insertBefore;
    function insertAfter(element, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild === targetElement) {
            parent.appendChild(element);
        }
        else {
            parent.insertBefore(element, targetElement.nextSibling);
        }
    }
    Dom.insertAfter = insertAfter;
    function remove(element) {
        if (element.parentElement !== null) {
            element.parentElement.removeChild(element);
        }
    }
    Dom.remove = remove;
    function htmlToNode(html) {
        if (html instanceof Node) {
            return html;
        }
        else {
            var node = document.createElement("div");
            node.innerHTML = html;
            return node.firstElementChild;
        }
    }
    Dom.htmlToNode = htmlToNode;
    function htmlToElement(html) {
        return htmlToNode(html);
    }
    Dom.htmlToElement = htmlToElement;
    // atributes  ---------------------------------------------
    function getAttributes(element) {
        var attrs = element.attributes;
        var newAttr = {};
        for (var i = 0; i < attrs.length; i++) {
            newAttr[attrs[i].name] = attrs[i].value;
        }
        return newAttr;
    }
    Dom.getAttributes = getAttributes;
    // Loops e giros pelo dom --------------------------------------------
    function childElement(node, each) {
        var child = node.firstChild;
        while (child) {
            if (child.nodeType === 1) {
                each(child);
            }
            child = child.nextSibling;
        }
    }
    Dom.childElement = childElement;
    // element down --------------------------
    function nodeDown(node, each) {
        if (each(node, undefined) !== false) {
            this.childNodeDown(node, each);
        }
    }
    Dom.nodeDown = nodeDown;
    function childNodeDown(node, each) {
        var parent = node;
        var child = node.firstChild;
        while (child) {
            var eachReturn = each(child, parent);
            if (eachReturn !== false) {
                this.childNodeDown(child, each);
            }
            child = child.nextSibling;
        }
    }
    Dom.childNodeDown = childNodeDown;
    function elementDown(node, each) {
        if (each(node, undefined) !== false) {
            this.childElementDown(node, each);
        }
    }
    Dom.elementDown = elementDown;
    function childElementDown(node, each) {
        var parent = node;
        var child = node.firstChild;
        while (child) {
            if (child.nodeType === 1) {
                var eachReturn = each(child, parent);
                if (eachReturn !== false) {
                    this.childElementDown(child, each);
                }
            }
            child = child.nextSibling;
        }
    }
    Dom.childElementDown = childElementDown;
    // element up --------------------------
    function elementUp(node, each) {
        if (each(node) !== false) {
            parentElementUp(node, each);
        }
    }
    Dom.elementUp = elementUp;
    function parentElementUp(node, each) {
        var retorno = true;
        var current = node.parentNode;
        do {
            retorno = each(current);
            current = current.parentNode;
        } while (retorno !== false && current !== null && current !== undefined && node.nodeName !== "BODY");
    }
    Dom.parentElementUp = parentElementUp;
    // dom --------------------------
    function attribute(element, each) {
        // TODO: this still need to be tested
        var attributes = element.attributes;
        for (var i = 0; i < attributes.length; i++) {
            each(attributes[i].name, attributes[i].value);
        }
    }
    Dom.attribute = attribute;
    function findNextSibling(target, validation) {
        var current = target.nextSibling;
        while (current !== null) {
            if (validation(current) === true) {
                return current;
            }
            else {
                current = current.nextSibling;
            }
        }
        return null;
    }
    Dom.findNextSibling = findNextSibling;
    function findPrevSibling(target, validation) {
        var current = target.previousSibling;
        while (current !== null) {
            if (validation(current) === true) {
                return current;
            }
            else {
                current = current.previousSibling;
            }
        }
        return null;
    }
    Dom.findPrevSibling = findPrevSibling;
    function findAllSiblings(target) {
        var siblings = [];
        findPrevSibling(target, function (node) {
            siblings.push(node);
            return false;
        });
        findNextSibling(target, function (node) {
            siblings.push(node);
            return false;
        });
        return siblings;
    }
    Dom.findAllSiblings = findAllSiblings;
    function prependChild(parent, child) {
        var firstChild = parent.firstChild;
        if (firstChild === undefined) {
            parent.appendChild(child);
        }
        else {
            parent.insertBefore(child, firstChild);
        }
    }
    Dom.prependChild = prependChild;
    function appendChild(parent, child) {
        parent.appendChild(child);
    }
    Dom.appendChild = appendChild;
    function replaceElement(oldElement, newElement) {
        oldElement.parentElement.replaceChild(newElement, oldElement);
    }
    Dom.replaceElement = replaceElement;
    function swapNodes(n1, n2) {
        var i1;
        var i2;
        var p1 = n1.parentNode;
        var p2 = n2.parentNode;
        if (p1 === undefined || p1 === null) {
            p1 = document.createElement("div");
            p1.appendChild(n1);
        }
        if (p2 === undefined || p2 === null) {
            p2 = document.createElement("div");
            p2.appendChild(n2);
        }
        if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) {
            return;
        }
        for (var i = 0; i < p1.children.length; i++) {
            if (p1.children[i].isEqualNode(n1)) {
                i1 = i;
            }
        }
        for (var i = 0; i < p2.children.length; i++) {
            if (p2.children[i].isEqualNode(n2)) {
                i2 = i;
            }
        }
        if (p1.isEqualNode(p2) && i1 < i2) {
            i2++;
        }
        p1.insertBefore(n2, p1.children[i1]);
        p2.insertBefore(n1, p2.children[i2]);
    }
    Dom.swapNodes = swapNodes;
})(Dom = exports.Dom || (exports.Dom = {}));
exports.default = Dom;
//# sourceMappingURL=dom.js.map