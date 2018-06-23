(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
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
exports["default"] = Dom;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1I7U0FDRjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1I7U0FDRjtRQUVELElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLEVBQUUsRUFBRSxDQUFDO1NBQ047UUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFoQ2UsYUFBUyxZQWdDeEIsQ0FBQTtBQUVILENBQUMsRUExTWdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQTBNbkI7QUFDRCxxQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBEb20ge1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBpbnNlcnRCZWZvcmUoZWxlbWVudDogTm9kZSwgdGFyZ2V0RWxlbWVudDogTm9kZSk6IHZvaWQge1xyXG4gICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50IS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihlbGVtZW50OiBOb2RlLCB0YXJnZXRFbGVtZW50OiBOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50IS5sYXN0Q2hpbGQgPT09IHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50IS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudCEuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRhcmdldEVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQ6IE5vZGUpOiB2b2lkIHtcclxuICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gaHRtbFRvTm9kZShodG1sOiBzdHJpbmcgfCBFbGVtZW50KTogTm9kZSB8IG51bGwge1xyXG4gICAgaWYgKGh0bWwgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgbm9kZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBub2RlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHJldHVybiBub2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbDogc3RyaW5nIHwgRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiBodG1sVG9Ob2RlKGh0bWwpIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxuICAvLyBhdHJpYnV0ZXMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQgfCBOb2RlKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0ge1xyXG4gICAgY29uc3QgYXR0cnMgPSAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYXR0cmlidXRlcztcclxuICAgIGNvbnN0IG5ld0F0dHI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5ld0F0dHJbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdBdHRyO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9vcHMgZSBnaXJvcyBwZWxvIGRvbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjaGlsZEVsZW1lbnQobm9kZTogRWxlbWVudCwgZWFjaDogKG5vZGU6IEVsZW1lbnQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGxldCBjaGlsZDogTm9kZSB8IG51bGwgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcbiAgICB3aGlsZSAoY2hpbGQpIHtcclxuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgZWFjaChjaGlsZCBhcyBFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZWxlbWVudCBkb3duIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5vZGVEb3duKG5vZGU6IE5vZGUgfCBOb2RlLCBlYWNoOiAobm9kZTogTm9kZSB8IE5vZGUsIHBhcmVudD86IE5vZGUgfCBOb2RlKSA9PiB2b2lkIHwgYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGVhY2gobm9kZSwgdW5kZWZpbmVkKSAhPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5jaGlsZE5vZGVEb3duKG5vZGUsIGVhY2gpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTm9kZURvd24obm9kZTogTm9kZSwgZWFjaDogKG5vZGU6IE5vZGUsIHBhcmVudD86IE5vZGUpID0+IHZvaWQgfCBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnQ6IE5vZGUgPSBub2RlO1xyXG4gICAgbGV0IGNoaWxkOiBOb2RlIHwgbnVsbCA9IG5vZGUuZmlyc3RDaGlsZDtcclxuICAgIHdoaWxlIChjaGlsZCkge1xyXG4gICAgICBjb25zdCBlYWNoUmV0dXJuOiBib29sZWFuIHwgdm9pZCA9IGVhY2goY2hpbGQsIHBhcmVudCk7XHJcbiAgICAgIGlmIChlYWNoUmV0dXJuICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2RlRG93bihjaGlsZCwgZWFjaCk7XHJcbiAgICAgIH1cclxuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RG93bihub2RlOiBFbGVtZW50LCBlYWNoOiAobm9kZTogRWxlbWVudCwgcGFyZW50PzogRWxlbWVudCkgPT4gdm9pZCB8IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChlYWNoKG5vZGUsIHVuZGVmaW5lZCkgIT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuY2hpbGRFbGVtZW50RG93bihub2RlLCBlYWNoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjaGlsZEVsZW1lbnREb3duKG5vZGU6IEVsZW1lbnQsIGVhY2g6IChub2RlOiBIVE1MRWxlbWVudCwgcGFyZW50PzogSFRNTEVsZW1lbnQpID0+IHZvaWQgfCBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnQ6IEVsZW1lbnQgPSBub2RlO1xyXG4gICAgbGV0IGNoaWxkOiBOb2RlIHwgbnVsbCA9IG5vZGUuZmlyc3RDaGlsZDtcclxuICAgIHdoaWxlIChjaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICBjb25zdCBlYWNoUmV0dXJuOiBib29sZWFuIHwgdm9pZCA9IGVhY2goY2hpbGQgYXMgSFRNTEVsZW1lbnQsIHBhcmVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGVhY2hSZXR1cm4gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudERvd24oY2hpbGQgYXMgSFRNTEVsZW1lbnQsIGVhY2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZWxlbWVudCB1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBlbGVtZW50VXAobm9kZTogRWxlbWVudCB8IEhUTUxFbGVtZW50LCBlYWNoOiAobm9kZTogRWxlbWVudCB8IEhUTUxFbGVtZW50KSA9PiBib29sZWFuIHwgdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKGVhY2gobm9kZSkgIT09IGZhbHNlKSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnRVcChub2RlLCBlYWNoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBwYXJlbnRFbGVtZW50VXAobm9kZTogRWxlbWVudCB8IEhUTUxFbGVtZW50IHwgTm9kZSwgZWFjaDogKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IE5vZGUgfCBudWxsKSA9PiBib29sZWFuIHwgdm9pZCk6IHZvaWQge1xyXG4gICAgbGV0IHJldG9ybm86IGJvb2xlYW4gfCB2b2lkID0gdHJ1ZTtcclxuICAgIGxldCBjdXJyZW50OiBFbGVtZW50IHwgTm9kZSB8IG51bGwgPSAobm9kZSBhcyBOb2RlKS5wYXJlbnROb2RlO1xyXG4gICAgZG8ge1xyXG4gICAgICByZXRvcm5vID0gZWFjaChjdXJyZW50KTtcclxuICAgICAgY3VycmVudCA9IChjdXJyZW50IGFzIE5vZGUpLnBhcmVudE5vZGU7XHJcbiAgICB9IHdoaWxlIChyZXRvcm5vICE9PSBmYWxzZSAmJiBjdXJyZW50ICE9PSBudWxsICYmIGN1cnJlbnQgIT09IHVuZGVmaW5lZCAmJiBub2RlLm5vZGVOYW1lICE9PSBcIkJPRFlcIik7XHJcbiAgfVxyXG5cclxuICAvLyBkb20gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBleHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlKGVsZW1lbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IE5vZGUsIGVhY2g6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogdGhpcyBzdGlsbCBuZWVkIHRvIGJlIHRlc3RlZFxyXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5hdHRyaWJ1dGVzO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGVhY2goYXR0cmlidXRlc1tpXS5uYW1lLCBhdHRyaWJ1dGVzW2ldLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBmaW5kTmV4dFNpYmxpbmcodGFyZ2V0OiBOb2RlIHwgTm9kZSwgdmFsaWRhdGlvbjogKG5vZGU6IE5vZGUgfCBOb2RlKSA9PiBib29sZWFuIHwgdm9pZCk6IE5vZGUgfCBOb2RlIHwgbnVsbCB7XHJcbiAgICBsZXQgY3VycmVudDogTm9kZSB8IE5vZGUgfCBudWxsID0gdGFyZ2V0Lm5leHRTaWJsaW5nO1xyXG4gICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKHZhbGlkYXRpb24oY3VycmVudCkgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U2libGluZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gZmluZFByZXZTaWJsaW5nKHRhcmdldDogTm9kZSB8IE5vZGUsIHZhbGlkYXRpb246IChub2RlOiBOb2RlIHwgTm9kZSkgPT4gYm9vbGVhbiB8IHZvaWQpOiBOb2RlIHwgTm9kZSB8IG51bGwge1xyXG4gICAgbGV0IGN1cnJlbnQ6IE5vZGUgfCBOb2RlIHwgbnVsbCA9IHRhcmdldC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAodmFsaWRhdGlvbihjdXJyZW50KSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzU2libGluZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gZmluZEFsbFNpYmxpbmdzKHRhcmdldDogTm9kZSk6IE5vZGVbXSB7XHJcbiAgICBjb25zdCBzaWJsaW5nczogTm9kZVtdID0gW107XHJcbiAgICBmaW5kUHJldlNpYmxpbmcodGFyZ2V0LCAobm9kZSkgPT4ge1xyXG4gICAgICBzaWJsaW5ncy5wdXNoKG5vZGUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGZpbmROZXh0U2libGluZyh0YXJnZXQsIChub2RlKSA9PiB7XHJcbiAgICAgIHNpYmxpbmdzLnB1c2gobm9kZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRDaGlsZChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpcnN0Q2hpbGQ6IE5vZGUgfCBudWxsID0gcGFyZW50LmZpcnN0Q2hpbGQ7XHJcbiAgICBpZiAoZmlyc3RDaGlsZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlPEhUTUxFbGVtZW50PihjaGlsZCwgZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQob2xkRWxlbWVudDogSFRNTEVsZW1lbnQsIG5ld0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBvbGRFbGVtZW50LnBhcmVudEVsZW1lbnQhLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzd2FwTm9kZXMobjE6IEhUTUxFbGVtZW50LCBuMjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGxldCBpMTogYW55O1xyXG4gICAgbGV0IGkyOiBhbnk7XHJcbiAgICBsZXQgcDEgPSBuMS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbGV0IHAyID0gbjIucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmIChwMSA9PT0gdW5kZWZpbmVkIHx8IHAxID09PSBudWxsKSB7XHJcbiAgICAgIHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcDEuYXBwZW5kQ2hpbGQobjEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHAyID09PSB1bmRlZmluZWQgfHwgcDIgPT09IG51bGwpIHtcclxuICAgICAgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwMi5hcHBlbmRDaGlsZChuMik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXAxIHx8ICFwMiB8fCBwMS5pc0VxdWFsTm9kZShuMikgfHwgcDIuaXNFcXVhbE5vZGUobjEpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwMS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocDEuY2hpbGRyZW5baV0uaXNFcXVhbE5vZGUobjEpKSB7XHJcbiAgICAgICAgaTEgPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwMi5jaGlsZHJlbltpXS5pc0VxdWFsTm9kZShuMikpIHtcclxuICAgICAgICBpMiA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocDEuaXNFcXVhbE5vZGUocDIpICYmIGkxIDwgaTIpIHtcclxuICAgICAgaTIrKztcclxuICAgIH1cclxuICAgIHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcclxuICAgIHAyLmluc2VydEJlZm9yZShuMSwgcDIuY2hpbGRyZW5baTJdKTtcclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERvbTtcclxuIl19

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Event;
(function (Event) {
    function once(target, type, listener) {
        var fn = function (ev) {
            target.removeEventListener(type, fn);
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.once = once;
    function onceOutside(target, type, listener) {
        var fn = function (ev) {
            var inside = target.contains(ev.target);
            if (!inside) {
                listener(ev);
                document.removeEventListener(type, fn);
            }
        };
        document.addEventListener(type, fn);
    }
    Event.onceOutside = onceOutside;
    function bindOutside(target, type, listener) {
        var fn = function (ev) {
            var inside = target.contains(ev.target);
            if (!inside) {
                listener(ev);
            }
        };
        document.addEventListener(type, fn);
    }
    Event.bindOutside = bindOutside;
    function bind(target, type, listener) {
        var fn = function (ev) {
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.bind = bind;
    // passive supported
    var passiveSupported = false;
    function passive() {
        return (passiveSupported ? { passive: true } : false);
    }
    Event.passive = passive;
    (function Initialize() {
        var _this = this;
        // detect if suport passive event
        try {
            var options = Object.defineProperty({}, "passive", {
                get: function () {
                    _this.passiveSupported = true;
                }
            });
            window.addEventListener("test", function () {
                return null;
            }, options);
        }
        catch (err) {
            //
        }
    })();
})(Event = exports.Event || (exports.Event = {}));
exports["default"] = Event;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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ZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbmFtZXNwYWNlIEV2ZW50IHtcclxuICBleHBvcnQgZnVuY3Rpb24gb25jZSh0YXJnZXQ6IE5vZGUsIHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IChldmVudDogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgZm4gPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XHJcbiAgICAgIGxpc3RlbmVyKGV2KTtcclxuICAgIH07XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBvbmNlT3V0c2lkZSh0YXJnZXQ6IE5vZGUsIHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IChldmVudDogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgZm4gPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBpbnNpZGUgPSB0YXJnZXQuY29udGFpbnMoZXYudGFyZ2V0KTtcclxuICAgICAgaWYgKCFpbnNpZGUpIHtcclxuICAgICAgICBsaXN0ZW5lcihldik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJpbmRPdXRzaWRlKHRhcmdldDogTm9kZSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSA9PiB2b2lkKSB7XHJcbiAgICBjb25zdCBmbiA9IChldjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGluc2lkZSA9IHRhcmdldC5jb250YWlucyhldi50YXJnZXQpO1xyXG4gICAgICBpZiAoIWluc2lkZSkge1xyXG4gICAgICAgIGxpc3RlbmVyKGV2KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQ6IE5vZGUsIHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IChldmVudDogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgZm4gPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICBsaXN0ZW5lcihldik7XHJcbiAgICB9O1xyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xyXG4gIH1cclxuICAvLyBwYXNzaXZlIHN1cHBvcnRlZFxyXG4gIGNvbnN0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICBleHBvcnQgZnVuY3Rpb24gcGFzc2l2ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XHJcbiAgfVxyXG4gIChmdW5jdGlvbiBJbml0aWFsaXplKCkge1xyXG4gICAgLy8gZGV0ZWN0IGlmIHN1cG9ydCBwYXNzaXZlIGV2ZW50XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xyXG4gICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy9cclxuICAgIH1cclxuICB9KSgpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xyXG4iXX0=

},{}],3:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./dom"));
__export(require("./is"));
__export(require("./text"));
__export(require("./reflection"));
__export(require("./url"));
__export(require("./list"));
__export(require("./scroll-switch"));
__export(require("./event"));
var UtilityCollection;
(function (UtilityCollection) {
    var name = "UtilityCollection";
})(UtilityCollection = exports.UtilityCollection || (exports.UtilityCollection = {}));
exports["default"] = UtilityCollection;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkJBQXNCO0FBQ3RCLDBCQUFxQjtBQUNyQiw0QkFBdUI7QUFDdkIsa0NBQTZCO0FBQzdCLDJCQUFzQjtBQUN0Qiw0QkFBdUI7QUFDdkIscUNBQWdDO0FBQ2hDLDZCQUF3QjtBQUN4QixJQUFpQixpQkFBaUIsQ0FFakM7QUFGRCxXQUFpQixpQkFBaUI7SUFDaEMsSUFBTSxJQUFJLEdBQVcsbUJBQW1CLENBQUM7QUFDM0MsQ0FBQyxFQUZnQixpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUVqQztBQUNELHFCQUFlLGlCQUFpQixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9kb21cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yZWZsZWN0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VybFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Njcm9sbC1zd2l0Y2hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZXZlbnRcIjtcclxuZXhwb3J0IG5hbWVzcGFjZSBVdGlsaXR5Q29sbGVjdGlvbiB7XHJcbiAgY29uc3QgbmFtZTogc3RyaW5nID0gXCJVdGlsaXR5Q29sbGVjdGlvblwiO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxpdHlDb2xsZWN0aW9uO1xyXG4iXX0=

},{"./dom":1,"./event":2,"./is":4,"./list":5,"./reflection":6,"./scroll-switch":7,"./text":8,"./url":9}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
// import moment from "moment";
var text_1 = require("./text");
// console.log("--> ok");
var Is;
(function (Is) {
    function mobile() {
        if (window.innerWidth < 900) {
            return true;
        }
        else {
            return false;
        }
    }
    Is.mobile = mobile;
    // is null or undefined
    function nullOrUndefined(value) {
        if (value === undefined || value === null) {
            return true;
        }
        else {
            return false;
        }
    }
    Is.nullOrUndefined = nullOrUndefined;
    // id empty
    function empty(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        }
        else {
            return false;
        }
    }
    Is.empty = empty;
    // is Number
    var numberRegex = /\D/;
    function number(value) {
        return !numberRegex.test(value);
    }
    Is.number = number;
    // is Letter
    var letterRegex = /[a-zA-Z]/;
    function letter(value) {
        return letterRegex.test(value);
    }
    Is.letter = letter;
    // --------------------------------
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m;
    function email(value) {
        return emailRegex.test(value);
    }
    Is.email = email;
    // brazilian validations ----------------------------------------
    // phone
    var brazilianPhoneRegex = /^(?:(?:\+)[0-9]{2}\s?){0,1}(?:\()[0-9]{2}(?:\))\s?[0-9]{0,1}\s?[0-9]{4,}(?:-)[0-9]{4}$/m;
    function brazilianPhone(phone) {
        return brazilianPhoneRegex.test(phone);
    }
    Is.brazilianPhone = brazilianPhone;
    function ddmmyyyy(date) {
        throw new Error("Not implemented.");
        // return moment(date, "DD/MM/YYYY", true).isValid();
    }
    Is.ddmmyyyy = ddmmyyyy;
    function mmddyyyy(date) {
        throw new Error("Not implemented.");
        // return moment(date, "MM/DD/YYYY", true).isValid();
    }
    Is.mmddyyyy = mmddyyyy;
    // CPF
    function cpf(value) {
        value = text_1.Text.stripNonNumber(value);
        var numeros;
        var digitos;
        var soma;
        var i;
        var resultado;
        var digitos_iguais;
        digitos_iguais = 1;
        if (value.length < 11) {
            return false;
        }
        for (i = 0; i < value.length - 1; i++) {
            if (value.charAt(i) !== value.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        }
        if (!digitos_iguais) {
            numeros = value.substring(0, 9);
            digitos = value.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--) {
                soma += +(numeros.charAt(10 - i)) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== +(digitos.charAt(0))) {
                return false;
            }
            numeros = value.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--) {
                soma += +(numeros.charAt(11 - i)) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== +(digitos.charAt(1))) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    Is.cpf = cpf;
    // CNPJ
    function cnpj(value) {
        value = text_1.Text.stripNonNumber(value);
        var tamanho;
        var numeros;
        var digitos;
        var soma;
        var pos;
        value = value.replace(/[^\d]+/g, "");
        if (value === "") {
            return false;
        }
        if (value.length !== 14) {
            return false;
        }
        // Elimina CNPJs invalidos conhecidos
        if (value === "00000000000000" ||
            value === "11111111111111" ||
            value === "22222222222222" ||
            value === "33333333333333" ||
            value === "44444444444444" ||
            value === "55555555555555" ||
            value === "66666666666666" ||
            value === "77777777777777" ||
            value === "88888888888888" ||
            value === "99999999999999") {
            return false;
        }
        // Valida DVs
        tamanho = value.length - 2;
        numeros = value.substring(0, tamanho);
        digitos = value.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += +(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +(digitos.charAt(0))) {
            return false;
        }
        tamanho = tamanho + 1;
        numeros = value.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += +(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +(digitos.charAt(1))) {
            return false;
        }
        return true;
    }
})(Is = exports.Is || (exports.Is = {}));
exports["default"] = Is;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQy9DLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDWCxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtRQUNELFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMvQyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDLEVBbEtnQixFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFrS2xCO0FBQ0QscUJBQWUsRUFBRSxDQUFDIiwiZmlsZSI6ImlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi90ZXh0XCI7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIi0tPiBva1wiKTtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgSXMge1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBtb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5MDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBudWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGlkIGVtcHR5XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBpcyBOdW1iZXJcclxuICBjb25zdCBudW1iZXJSZWdleDogUmVnRXhwID0gL1xcRC87XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG51bWJlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIW51bWJlclJlZ2V4LnRlc3QodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gaXMgTGV0dGVyXHJcbiAgY29uc3QgbGV0dGVyUmVnZXg6IFJlZ0V4cCA9IC9bYS16QS1aXS87XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGxldHRlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbGV0dGVyUmVnZXgudGVzdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL207XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVtYWlsKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gYnJhemlsaWFuIHZhbGlkYXRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBwaG9uZVxyXG4gIGNvbnN0IGJyYXppbGlhblBob25lUmVnZXggPSAvXig/Oig/OlxcKylbMC05XXsyfVxccz8pezAsMX0oPzpcXCgpWzAtOV17Mn0oPzpcXCkpXFxzP1swLTldezAsMX1cXHM/WzAtOV17NCx9KD86LSlbMC05XXs0fSQvbTtcclxuICBleHBvcnQgZnVuY3Rpb24gYnJhemlsaWFuUGhvbmUocGhvbmU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGJyYXppbGlhblBob25lUmVnZXgudGVzdChwaG9uZSk7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBkZG1teXl5eShkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAvLyByZXR1cm4gbW9tZW50KGRhdGUsIFwiREQvTU0vWVlZWVwiLCB0cnVlKS5pc1ZhbGlkKCk7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBtbWRkeXl5eShkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAvLyByZXR1cm4gbW9tZW50KGRhdGUsIFwiTU0vREQvWVlZWVwiLCB0cnVlKS5pc1ZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICAvLyBDUEZcclxuICBleHBvcnQgZnVuY3Rpb24gY3BmKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHZhbHVlID0gVGV4dC5zdHJpcE5vbk51bWJlcih2YWx1ZSk7XHJcbiAgICBsZXQgbnVtZXJvczogc3RyaW5nO1xyXG4gICAgbGV0IGRpZ2l0b3M6IGFueTtcclxuICAgIGxldCBzb21hOiBudW1iZXI7XHJcbiAgICBsZXQgaTogYW55O1xyXG4gICAgbGV0IHJlc3VsdGFkbzogYW55O1xyXG4gICAgbGV0IGRpZ2l0b3NfaWd1YWlzOiBhbnk7XHJcbiAgICBkaWdpdG9zX2lndWFpcyA9IDE7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMTEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBpZiAodmFsdWUuY2hhckF0KGkpICE9PSB2YWx1ZS5jaGFyQXQoaSArIDEpKSB7XHJcbiAgICAgICAgZGlnaXRvc19pZ3VhaXMgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWRpZ2l0b3NfaWd1YWlzKSB7XHJcbiAgICAgIG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgOSk7XHJcbiAgICAgIGRpZ2l0b3MgPSB2YWx1ZS5zdWJzdHJpbmcoOSk7XHJcbiAgICAgIHNvbWEgPSAwO1xyXG4gICAgICBmb3IgKGkgPSAxMDsgaSA+IDE7IGktLSkge1xyXG4gICAgICAgIHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCgxMCAtIGkpKSAqIGk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuICAgICAgaWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgwKSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbnVtZXJvcyA9IHZhbHVlLnN1YnN0cmluZygwLCAxMCk7XHJcbiAgICAgIHNvbWEgPSAwO1xyXG4gICAgICBmb3IgKGkgPSAxMTsgaSA+IDE7IGktLSkge1xyXG4gICAgICAgIHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCgxMSAtIGkpKSAqIGk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuICAgICAgaWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgxKSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIENOUEpcclxuICBmdW5jdGlvbiBjbnBqKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHZhbHVlID0gVGV4dC5zdHJpcE5vbk51bWJlcih2YWx1ZSk7XHJcblxyXG4gICAgbGV0IHRhbWFuaG86IG51bWJlcjtcclxuICAgIGxldCBudW1lcm9zOiBzdHJpbmc7XHJcbiAgICBsZXQgZGlnaXRvczogc3RyaW5nO1xyXG4gICAgbGV0IHNvbWE6IG51bWJlcjtcclxuICAgIGxldCBwb3M6IG51bWJlcjtcclxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXGRdKy9nLCBcIlwiKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIikgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDE0KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgIC8vIEVsaW1pbmEgQ05QSnMgaW52YWxpZG9zIGNvbmhlY2lkb3NcclxuICAgIGlmICh2YWx1ZSA9PT0gXCIwMDAwMDAwMDAwMDAwMFwiIHx8XHJcbiAgICAgIHZhbHVlID09PSBcIjExMTExMTExMTExMTExXCIgfHxcclxuICAgICAgdmFsdWUgPT09IFwiMjIyMjIyMjIyMjIyMjJcIiB8fFxyXG4gICAgICB2YWx1ZSA9PT0gXCIzMzMzMzMzMzMzMzMzM1wiIHx8XHJcbiAgICAgIHZhbHVlID09PSBcIjQ0NDQ0NDQ0NDQ0NDQ0XCIgfHxcclxuICAgICAgdmFsdWUgPT09IFwiNTU1NTU1NTU1NTU1NTVcIiB8fFxyXG4gICAgICB2YWx1ZSA9PT0gXCI2NjY2NjY2NjY2NjY2NlwiIHx8XHJcbiAgICAgIHZhbHVlID09PSBcIjc3Nzc3Nzc3Nzc3Nzc3XCIgfHxcclxuICAgICAgdmFsdWUgPT09IFwiODg4ODg4ODg4ODg4ODhcIiB8fFxyXG4gICAgICB2YWx1ZSA9PT0gXCI5OTk5OTk5OTk5OTk5OVwiKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGEgRFZzXHJcbiAgICB0YW1hbmhvID0gdmFsdWUubGVuZ3RoIC0gMjtcclxuICAgIG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdGFtYW5obyk7XHJcbiAgICBkaWdpdG9zID0gdmFsdWUuc3Vic3RyaW5nKHRhbWFuaG8pO1xyXG4gICAgc29tYSA9IDA7XHJcbiAgICBwb3MgPSB0YW1hbmhvIC0gNztcclxuICAgIGZvciAobGV0IGkgPSB0YW1hbmhvOyBpID49IDE7IGktLSkge1xyXG4gICAgICBzb21hICs9ICsobnVtZXJvcy5jaGFyQXQodGFtYW5obyAtIGkpKSAqIHBvcy0tO1xyXG4gICAgICBpZiAocG9zIDwgMikge1xyXG4gICAgICAgIHBvcyA9IDk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCByZXN1bHRhZG86IG51bWJlciA9IHNvbWEgJSAxMSA8IDIgPyAwIDogMTEgLSBzb21hICUgMTE7XHJcbiAgICBpZiAocmVzdWx0YWRvICE9PSArKGRpZ2l0b3MuY2hhckF0KDApKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGFtYW5obyA9IHRhbWFuaG8gKyAxO1xyXG4gICAgbnVtZXJvcyA9IHZhbHVlLnN1YnN0cmluZygwLCB0YW1hbmhvKTtcclxuICAgIHNvbWEgPSAwO1xyXG4gICAgcG9zID0gdGFtYW5obyAtIDc7XHJcbiAgICBmb3IgKGxldCBpID0gdGFtYW5obzsgaSA+PSAxOyBpLS0pIHtcclxuICAgICAgc29tYSArPSArKG51bWVyb3MuY2hhckF0KHRhbWFuaG8gLSBpKSkgKiBwb3MtLTtcclxuICAgICAgaWYgKHBvcyA8IDIpIHtcclxuICAgICAgICBwb3MgPSA5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHRhZG8gPSBzb21hICUgMTEgPCAyID8gMCA6IDExIC0gc29tYSAlIDExO1xyXG4gICAgaWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgxKSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IElzO1xyXG4iXX0=

},{"./text":8}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var List;
(function (List) {
    // remove item from list if exist
    function removeFromIndex(list, index) {
        list.splice(index, 1);
        return list;
    }
    List.removeFromIndex = removeFromIndex;
    function removeItem(list, item) {
        var index = list.indexOf(item);
        var newList;
        if (index > -1) {
            newList = removeFromIndex(list, index);
        }
        else {
            newList = list;
        }
        return newList;
    }
    List.removeItem = removeItem;
    function setItem(list, item) {
        var index = list.indexOf(item);
        if (index < 0) {
            list.push(item);
        }
        return list;
    }
    List.setItem = setItem;
    function replaceItemWith(baseList, searchItem, newItems) {
        var newItemsToInsert;
        if (Array.isArray(newItems)) {
            newItemsToInsert = newItems.slice(0);
        }
        else {
            newItemsToInsert = [newItems];
        }
        var output = baseList.slice(0);
        var args;
        var replaceIndex = output.indexOf(searchItem);
        if (replaceIndex > -1) {
            args = [replaceIndex, 1];
            args = args.concat(newItemsToInsert);
        }
        else {
            args = [output.length, 0];
            args = args.concat(newItemsToInsert);
        }
        output.splice.apply(output, args);
        return output;
    }
    List.replaceItemWith = replaceItemWith;
})(List = exports.List || (exports.List = {}));
exports["default"] = List;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBaUIsSUFBSSxDQTZDcEI7QUE3Q0QsV0FBaUIsSUFBSTtJQUNuQixpQ0FBaUM7SUFDakMseUJBQW1DLElBQVMsRUFBRSxLQUFhO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUhlLG9CQUFlLGtCQUc5QixDQUFBO0lBQ0Qsb0JBQThCLElBQVMsRUFBRSxJQUFPO1FBQzlDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFZLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNoQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFUZSxlQUFVLGFBU3pCLENBQUE7SUFDRCxpQkFBMkIsSUFBUyxFQUFFLElBQU87UUFDM0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBTmUsWUFBTyxVQU10QixDQUFBO0lBR0QseUJBQW1DLFFBQWEsRUFBRSxVQUFlLEVBQUUsUUFBcUI7UUFDdEYsSUFBSSxnQkFBdUIsQ0FBQztRQUM1QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsZ0JBQWdCLEdBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsZ0JBQWdCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFXLENBQUM7UUFDaEIsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyQixJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFuQmUsb0JBQWUsa0JBbUI5QixDQUFBO0FBQ0gsQ0FBQyxFQTdDZ0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBNkNwQjtBQUNELHFCQUFlLElBQUksQ0FBQyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBMaXN0IHtcclxuICAvLyByZW1vdmUgaXRlbSBmcm9tIGxpc3QgaWYgZXhpc3RcclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUluZGV4PFQ+KGxpc3Q6IFRbXSwgaW5kZXg6IG51bWJlcik6IFRbXSB7XHJcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW08VD4obGlzdDogVFtdLCBpdGVtOiBUKTogVFtdIHtcclxuICAgIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgbGV0IG5ld0xpc3Q6IFRbXTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIG5ld0xpc3QgPSByZW1vdmVGcm9tSW5kZXgobGlzdCwgaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3TGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3TGlzdDtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW08VD4obGlzdDogVFtdLCBpdGVtOiBUKTogVFtdIHtcclxuICAgIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VJdGVtV2l0aDxUPihiYXNlTGlzdDogVFtdLCBzZWFyY2hJdGVtOiBhbnksIG5ld0l0ZW06IGFueSk6IFRbXTtcclxuICBleHBvcnQgZnVuY3Rpb24gcmVwbGFjZUl0ZW1XaXRoPFQ+KGJhc2VMaXN0OiBUW10sIHNlYXJjaEl0ZW06IGFueSwgbmV3SXRlbXM6IGFueVtdKTogVFtdO1xyXG4gIGV4cG9ydCBmdW5jdGlvbiByZXBsYWNlSXRlbVdpdGg8VD4oYmFzZUxpc3Q6IFRbXSwgc2VhcmNoSXRlbTogYW55LCBuZXdJdGVtczogYW55W10gfCBhbnkpOiBUW10ge1xyXG4gICAgbGV0IG5ld0l0ZW1zVG9JbnNlcnQ6IGFueVtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmV3SXRlbXMpKSB7XHJcbiAgICAgIG5ld0l0ZW1zVG9JbnNlcnQgPSAgbmV3SXRlbXMuc2xpY2UoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdJdGVtc1RvSW5zZXJ0ID0gW25ld0l0ZW1zXTtcclxuICAgIH1cclxuICAgIGNvbnN0IG91dHB1dCA9IGJhc2VMaXN0LnNsaWNlKDApO1xyXG4gICAgbGV0IGFyZ3M6IGFueVtdO1xyXG4gICAgY29uc3QgcmVwbGFjZUluZGV4ID0gb3V0cHV0LmluZGV4T2Yoc2VhcmNoSXRlbSk7XHJcbiAgICBpZiAocmVwbGFjZUluZGV4ID4gLTEpIHtcclxuICAgICAgYXJncyA9IFtyZXBsYWNlSW5kZXgsIDFdO1xyXG4gICAgICBhcmdzID0gYXJncy5jb25jYXQobmV3SXRlbXNUb0luc2VydCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcmdzID0gW291dHB1dC5sZW5ndGgsIDBdO1xyXG4gICAgICBhcmdzID0gYXJncy5jb25jYXQobmV3SXRlbXNUb0luc2VydCk7XHJcbiAgICB9XHJcbiAgICBvdXRwdXQuc3BsaWNlLmFwcGx5KG91dHB1dCwgYXJncyk7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iXX0=

},{}],6:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Reflection;
(function (Reflection) {
    function merge(base, source) {
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                base[i] = source[i];
            }
        }
    }
    Reflection.merge = merge;
    function fill(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var element = source[key];
                target[key] = element;
            }
        }
        return target;
    }
    Reflection.fill = fill;
})(Reflection = exports.Reflection || (exports.Reflection = {}));
exports["default"] = Reflection;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBaUIsVUFBVSxDQWlCMUI7QUFqQkQsV0FBaUIsVUFBVTtJQUN6QixlQUFzQixJQUFTLEVBQUUsTUFBVztRQUMxQyxLQUFLLElBQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUN0QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFOZSxnQkFBSyxRQU1wQixDQUFBO0lBQ0QsY0FBdUQsTUFBUyxFQUFFLE1BQVc7UUFDM0UsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFSZSxlQUFJLE9BUW5CLENBQUE7QUFDSCxDQUFDLEVBakJnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWlCMUI7QUFDRCxxQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoicmVmbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgUmVmbGVjdGlvbiB7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGJhc2U6IGFueSwgc291cmNlOiBhbnkpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgaSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgIGJhc2VbaV0gPSBzb3VyY2VbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGZpbGw8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogYW55IH0+KHRhcmdldDogVCwgc291cmNlOiBhbnkpOiBUIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gc291cmNlW2tleV07XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBlbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWZsZWN0aW9uO1xyXG4iXX0=

},{}],7:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var event_1 = require("./event");
exports.DATA_SCROLLABLE = "data-scrollable";
exports.CLASS_FOCUS = "scroll--active";
var ScrollSwitch;
(function (ScrollSwitch) {
    var unfreezeDelay;
    var Scrollable = /** @class */ (function () {
        function Scrollable(element) {
            var _this = this;
            this.element = null;
            this.y = 0;
            this.frozen = false;
            this.unfreezing = false;
            this.element = element;
            if (this.element.getAttribute(exports.DATA_SCROLLABLE) === undefined) {
                this.id = newScrollableId();
                this.element.setAttribute(exports.DATA_SCROLLABLE, this.id);
            }
            else {
                this.id = this.element.getAttribute(exports.DATA_SCROLLABLE);
            }
            // register event
            var unfreezeEvent = function (e) {
                window.scrollTo(0, window.scrollY);
                _this.unfreeze();
            };
            var freezeAllEvent = function (e) {
                freezeAllButId(null);
            };
            element.addEventListener("touchstart", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("mouseenter", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("pointermove", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("mouseleave", freezeAllEvent, event_1.Event.passive());
        }
        Scrollable.prototype.getId = function () {
            return this.id;
        };
        Scrollable.prototype.unfreeze = function () {
            if (this.frozen && !this.unfreezing) {
                this.unfreezing = true;
                freezeAllButId(this.id);
                document.body.style.height = this.element.scrollHeight + "px";
                window.scroll(0, this.y);
                this.element.setAttribute("style", "position: absolute; top: 0; z-index: " + this.element.style.zIndex + "; ");
                this.element.classList.add(exports.CLASS_FOCUS);
                document.body.style.height = "";
                this.y = 0;
                this.frozen = false;
                this.unfreezing = false;
                unfreezeDelay = undefined;
            }
        };
        Scrollable.prototype.freeze = function () {
            if (!this.frozen) {
                this.y = window.scrollY + 0;
                this.element.setAttribute("style", "position: fixed; top: -" + this.y + "px; z-index: " + this.element.style.zIndex + "; ");
                this.element.classList.remove(exports.CLASS_FOCUS);
                this.frozen = true;
            }
        };
        return Scrollable;
    }());
    ScrollSwitch.Scrollable = Scrollable;
    var store = {};
    var lastId = 1;
    function newScrollableId() {
        lastId = lastId + 1;
        return lastId.toString();
    }
    function identifyElement(element) {
        if (element.parentElement !== document.body) {
            return null;
        }
        var id = element.getAttribute(exports.DATA_SCROLLABLE);
        if (id === null) {
            return null;
        }
        var stored = (id !== undefined) ? (store[id] !== undefined) : false;
        if (stored) {
            return store[id];
        }
        else {
            var s = new Scrollable(element);
            id = s.getId();
            store[id] = s;
            return store[id];
        }
    }
    function freezeElement(element) {
        var scroll = identifyElement(element);
        if (scroll !== null) {
            scroll.freeze();
        }
    }
    ScrollSwitch.freezeElement = freezeElement;
    function freezeAllButId(id) {
        if (id === void 0) { id = null; }
        for (var i in store) {
            if (i !== id) {
                store[i].freeze();
            }
        }
    }
    ScrollSwitch.freezeAllButId = freezeAllButId;
    function freezeAllButElement(element) {
        var scroll = identifyElement(element);
        if (scroll !== null) {
            freezeAllButId(scroll.getId());
        }
    }
    ScrollSwitch.freezeAllButElement = freezeAllButElement;
    function unfreezeElement(element) {
        var scroll = identifyElement(element);
        if (scroll !== null) {
            scroll.unfreeze();
        }
    }
    ScrollSwitch.unfreezeElement = unfreezeElement;
})(ScrollSwitch = exports.ScrollSwitch || (exports.ScrollSwitch = {}));
exports["default"] = ScrollSwitch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO0lBTGUsZ0NBQW1CLHNCQUtsQyxDQUFBO0lBQ0QseUJBQWdDLE9BQW9CO1FBQ2xELElBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUxlLDRCQUFlLGtCQUs5QixDQUFBO0FBQ0gsQ0FBQyxFQXpHZ0IsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUF5RzVCO0FBQ0QscUJBQWUsWUFBWSxDQUFDIiwiZmlsZSI6InNjcm9sbC1zd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL2V2ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9TQ1JPTExBQkxFID0gXCJkYXRhLXNjcm9sbGFibGVcIjtcclxuZXhwb3J0IGNvbnN0IENMQVNTX0ZPQ1VTID0gXCJzY3JvbGwtLWFjdGl2ZVwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFNjcm9sbFN3aXRjaCB7XHJcbiAgbGV0IHVuZnJlZXplRGVsYXk6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBleHBvcnQgY2xhc3MgU2Nyb2xsYWJsZSB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmcm96ZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdW5mcmVlemluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9TQ1JPTExBQkxFKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ld1Njcm9sbGFibGVJZCgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoREFUQV9TQ1JPTExBQkxFLCB0aGlzLmlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50XHJcbiAgICAgIGNvbnN0IHVuZnJlZXplRXZlbnQgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93LnNjcm9sbFkpO1xyXG4gICAgICAgIHRoaXMudW5mcmVlemUoKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgZnJlZXplQWxsRXZlbnQgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBmcmVlemVBbGxCdXRJZChudWxsKTtcclxuICAgICAgfTtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB1bmZyZWV6ZUV2ZW50LCBFdmVudC5wYXNzaXZlKCkpO1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHVuZnJlZXplRXZlbnQsIEV2ZW50LnBhc3NpdmUoKSk7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHVuZnJlZXplRXZlbnQsIEV2ZW50LnBhc3NpdmUoKSk7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnJlZXplQWxsRXZlbnQsIEV2ZW50LnBhc3NpdmUoKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SWQoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVuZnJlZXplKCkge1xyXG4gICAgICBpZiAodGhpcy5mcm96ZW4gJiYgIXRoaXMudW5mcmVlemluZykge1xyXG4gICAgICAgIHRoaXMudW5mcmVlemluZyA9IHRydWU7XHJcbiAgICAgICAgZnJlZXplQWxsQnV0SWQodGhpcy5pZCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQhLnNjcm9sbEhlaWdodH1weGA7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB0aGlzLnkpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyB6LWluZGV4OiAke3RoaXMuZWxlbWVudCEuc3R5bGUuekluZGV4fTsgYCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50IS5jbGFzc0xpc3QuYWRkKENMQVNTX0ZPQ1VTKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5mcmVlemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHVuZnJlZXplRGVsYXkgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBmcmVlemUoKSB7XHJcbiAgICAgIGlmICghdGhpcy5mcm96ZW4pIHtcclxuICAgICAgICB0aGlzLnkgPSB3aW5kb3cuc2Nyb2xsWSArIDA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50IS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgcG9zaXRpb246IGZpeGVkOyB0b3A6IC0ke3RoaXMueX1weDsgei1pbmRleDogJHt0aGlzLmVsZW1lbnQhLnN0eWxlLnpJbmRleH07IGApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19GT0NVUyk7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHN0b3JlOiB7IFtrZXk6IHN0cmluZ106IFNjcm9sbGFibGUgfSA9IHt9O1xyXG4gIGxldCBsYXN0SWQ6IG51bWJlciA9IDE7XHJcbiAgZnVuY3Rpb24gbmV3U2Nyb2xsYWJsZUlkKCk6IHN0cmluZyB7XHJcbiAgICBsYXN0SWQgPSBsYXN0SWQgKyAxO1xyXG4gICAgcmV0dXJuIGxhc3RJZC50b1N0cmluZygpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBpZGVudGlmeUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBTY3JvbGxhYmxlIHwgbnVsbCB7XHJcbiAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9TQ1JPTExBQkxFKTtcclxuICAgIGlmIChpZCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZCA9IChpZCAhPT0gdW5kZWZpbmVkKSA/IChzdG9yZVtpZF0gIT09IHVuZGVmaW5lZCkgOiBmYWxzZTtcclxuICAgIGlmIChzdG9yZWQpIHtcclxuICAgICAgcmV0dXJuIHN0b3JlW2lkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHMgPSBuZXcgU2Nyb2xsYWJsZShlbGVtZW50KTtcclxuICAgICAgaWQgPSBzLmdldElkKCk7XHJcbiAgICAgIHN0b3JlW2lkIV0gPSBzO1xyXG4gICAgICByZXR1cm4gc3RvcmVbaWQhXTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuICAgIGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuICAgICAgc2Nyb2xsLmZyZWV6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZnJlZXplQWxsQnV0SWQoaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gc3RvcmUpIHtcclxuICAgICAgaWYgKGkgIT09IGlkKSB7XHJcbiAgICAgICAgc3RvcmVbaV0uZnJlZXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZUFsbEJ1dEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuICAgIGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuICAgICAgZnJlZXplQWxsQnV0SWQoc2Nyb2xsLmdldElkKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gdW5mcmVlemVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBzY3JvbGwgPSBpZGVudGlmeUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAoc2Nyb2xsICE9PSBudWxsKSB7XHJcbiAgICAgIHNjcm9sbC51bmZyZWV6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTd2l0Y2g7XHJcbiJdfQ==

},{"./event":2}],8:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var is_1 = require("./is");
var Text;
(function (Text) {
    function replaceAll(value, search, replacement) {
        return value.split(search).join(replacement);
    }
    Text.replaceAll = replaceAll;
    function pathArray(path) {
        return path.split(".");
    }
    Text.pathArray = pathArray;
    function stripNonNumber(value) {
        return value.replace(/[^0-9]/g, "");
    }
    Text.stripNonNumber = stripNonNumber;
    // -----------------
    var accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    function removeAccents(value) {
        if (is_1.Is.empty(value)) {
            return value;
        }
        var strAccents = value.split("");
        var strAccentsOut = new Array();
        var strAccentsLen = strAccents.length;
        for (var y = 0; y < strAccentsLen; y++) {
            if (accents.indexOf(strAccents[y]) !== -1) {
                strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
            }
            else {
                strAccentsOut[y] = strAccents[y];
            }
        }
        return strAccentsOut.join("");
    }
    Text.removeAccents = removeAccents;
})(Text = exports.Text || (exports.Text = {}));
exports["default"] = Text;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQTBCO0FBRTFCLElBQWlCLElBQUksQ0ErQnBCO0FBL0JELFdBQWlCLElBQUk7SUFDbkIsb0JBQTJCLEtBQWEsRUFBRSxNQUFjLEVBQUUsV0FBbUI7UUFDM0UsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRmUsZUFBVSxhQUV6QixDQUFBO0lBQ0QsbUJBQTBCLElBQVk7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFGZSxjQUFTLFlBRXhCLENBQUE7SUFFRCx3QkFBK0IsS0FBYTtRQUMxQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFGZSxtQkFBYyxpQkFFN0IsQ0FBQTtJQUNELG9CQUFvQjtJQUNwQixJQUFNLE9BQU8sR0FBRyxnRUFBZ0UsQ0FBQztJQUNqRixJQUFNLFVBQVUsR0FBRyxnRUFBZ0UsQ0FBQztJQUNwRix1QkFBOEIsS0FBYTtRQUN6QyxJQUFJLE9BQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRXhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEM7U0FDRjtRQUNELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBaEJlLGtCQUFhLGdCQWdCNUIsQ0FBQTtBQUNILENBQUMsRUEvQmdCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQStCcEI7QUFDRCxxQkFBZSxJQUFJLENBQUMiLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzIH0gZnJvbSBcIi4vaXNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVGV4dCB7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwodmFsdWU6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIHJlcGxhY2VtZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZS5zcGxpdChzZWFyY2gpLmpvaW4ocmVwbGFjZW1lbnQpO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcGF0aEFycmF5KHBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBwYXRoLnNwbGl0KFwiLlwiKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzdHJpcE5vbk51bWJlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XHJcbiAgfVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgYWNjZW50cyA9IFwiw4DDgcOCw4PDhMOFw6DDocOiw6PDpMOlw5LDk8OUw5XDlcOWw5jDssOzw7TDtcO2w7jDiMOJw4rDi8Oow6nDqsOrw7DDh8Onw5DDjMONw47Dj8Osw63DrsOvw5nDmsObw5zDucO6w7vDvMORw7HFoMWhxbjDv8O9xb3FvlwiO1xyXG4gIGNvbnN0IGFjY2VudHNPdXQgPSBcIkFBQUFBQWFhYWFhYU9PT09PT09vb29vb29FRUVFZWVlZWVDY0RJSUlJaWlpaVVVVVV1dXV1Tm5Tc1l5eVp6XCI7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjY2VudHModmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKElzLmVtcHR5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHJBY2NlbnRzID0gdmFsdWUuc3BsaXQoXCJcIik7XHJcbiAgICBjb25zdCBzdHJBY2NlbnRzT3V0ID0gbmV3IEFycmF5KCk7XHJcbiAgICBjb25zdCBzdHJBY2NlbnRzTGVuID0gc3RyQWNjZW50cy5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzdHJBY2NlbnRzTGVuOyB5KyspIHtcclxuICAgICAgaWYgKGFjY2VudHMuaW5kZXhPZihzdHJBY2NlbnRzW3ldKSAhPT0gLTEpIHtcclxuICAgICAgICBzdHJBY2NlbnRzT3V0W3ldID0gYWNjZW50c091dC5zdWJzdHIoYWNjZW50cy5pbmRleE9mKHN0ckFjY2VudHNbeV0pLCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJBY2NlbnRzT3V0W3ldID0gc3RyQWNjZW50c1t5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ckFjY2VudHNPdXQuam9pbihcIlwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIl19

},{"./is":4}],9:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var text_1 = require("./text");
var Url = /** @class */ (function () {
    // -------------------
    function Url(url) {
        var _this = this;
        this.QueryList = {};
        this.originPath = "/";
        this.staticPath = url.split("#")[0].split("?")[0];
        var splited = Url.splitOriginPath(this.staticPath);
        this.staticPath = splited.path;
        this.origin = splited.origin;
        this.staticQuery = url.indexOf("?") > -1 ? url.split("?")[1].split("#")[0] : null;
        this.staticHash = url.split("#")[1] || null;
        // queryList
        if (this.staticQuery != null) {
            var queryKeyValueList = this.staticQuery.split("&");
            queryKeyValueList.forEach(function (queryKeyValue) {
                var keyValue = queryKeyValue.split("=");
                var key = keyValue[0];
                var value = keyValue[1];
                _this.QueryList[key] = value;
            });
        }
        // origin
    }
    Url.prototype.setQuery = function (key, value) {
        this.QueryList[key] = value;
        return this;
    };
    Url.prototype.setQueries = function (values) {
        for (var key in values) {
            if (typeof values[key] !== "function" && values[key] !== undefined) {
                this.QueryList[key] = values[key].toString();
            }
        }
        return this;
    };
    Url.prototype.deleteQuery = function (key) {
        if (this.QueryList !== undefined) {
            this.QueryList[key] = undefined;
            delete this.QueryList[key];
        }
        return this;
    };
    Url.prototype.getQuery = function (key) {
        if (this.QueryList !== undefined) {
            return this.QueryList[key];
        }
    };
    Url.prototype.toString = function () {
        var queryLength = Object.keys(this.QueryList).length;
        var query = (Object.keys(this.QueryList).length > 0 ? "?" : "");
        for (var key in this.QueryList) {
            if (this.QueryList.hasOwnProperty(key)) {
                queryLength--;
                var value = this.QueryList[key];
                query = query + key + "=" + value;
                if (queryLength > 0) {
                    query = query + "&";
                }
            }
        }
        var newPath = this.staticPath + query + (this.staticHash ? "#" + this.staticHash : "");
        newPath = Url.absolute(newPath, newPath[0] === "." ? this.originPath : "/");
        if (this.origin !== undefined && this.origin !== null) {
            var newUrl = this.origin + newPath; // Url.absolute(newPath, this.origin);
            return newUrl;
        }
        else {
            return newPath;
        }
    };
    Url.prototype.setOrigin = function (origin, justLocal) {
        if (justLocal === void 0) { justLocal = true; }
        var splited = Url.splitOriginPath(origin || window.location.origin + "/" + window.location.pathname);
        if (this.origin === undefined) {
            this.origin = splited.origin;
            this.originPath = splited.path || "/";
        }
        else if (this.origin === null || this.origin === undefined || justLocal === false) {
            this.origin = splited.origin;
            this.originPath = splited.path || "/";
        }
        else if (justLocal) {
            if (window.location.origin.replace("https", "http").toLowerCase() === this.origin.replace("https", "http").toLowerCase()) {
                this.origin = splited.origin;
            }
            this.originPath = splited.path || "/";
        }
        else {
            this.origin = splited.origin;
            this.originPath = splited.path || "/";
        }
    };
    return Url;
}());
exports.Url = Url;
(function (Url) {
    function splitOriginPath(value) {
        var split = /(https?:\/\/[a-zA-Z0-9-\.]+(?::[0-9]*)?)(\/.*)?/g.exec(value);
        if (split !== null) {
            return {
                origin: split[1],
                path: split[2] || "/"
            };
        }
        else {
            return {
                origin: null,
                path: value || "/"
            };
        }
    }
    Url.splitOriginPath = splitOriginPath;
    function absolute(relative, base) {
        if (base === null) {
            base = "";
        }
        var stack = base.split("/");
        var parts = relative.split("/");
        stack.pop(); // remove current file name (or empty string)
        // (omit if "base" is the current folder without trailing slash)
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] === ".") {
                continue;
            }
            if (parts[i] === "..") {
                stack.pop();
            }
            else {
                stack.push(parts[i]);
            }
        }
        return text_1.Text.replaceAll(stack.join("/"), "//", "/");
    }
    Url.absolute = absolute;
})(Url = exports.Url || (exports.Url = {}));
exports.Url = Url;
exports["default"] = Url;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ3BCLFNBQVM7YUFDVjtZQUNELElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDckIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxXQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFuQmUsWUFBUSxXQW1CdkIsQ0FBQTtBQUNILENBQUMsRUFuQ2dCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQW1DbkI7QUFwSVksa0JBQUc7QUFxSWhCLHFCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiJ1cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0IH0gZnJvbSBcIi4vdGV4dFwiO1xyXG5leHBvcnQgY2xhc3MgVXJsIHtcclxuICBwdWJsaWMgUXVlcnlMaXN0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWNQYXRoPzogc3RyaW5nIHwgbnVsbDtcclxuICBwcml2YXRlIHN0YXRpY1F1ZXJ5Pzogc3RyaW5nIHwgbnVsbDtcclxuICBwcml2YXRlIHN0YXRpY0hhc2g/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHByaXZhdGUgb3JpZ2luPzogc3RyaW5nIHwgbnVsbDtcclxuICBwcml2YXRlIG9yaWdpblBhdGg6IHN0cmluZyB8IG51bGwgPSBcIi9cIjtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0YXRpY1BhdGggPSB1cmwuc3BsaXQoXCIjXCIpWzBdLnNwbGl0KFwiP1wiKVswXTtcclxuICAgIGNvbnN0IHNwbGl0ZWQgPSBVcmwuc3BsaXRPcmlnaW5QYXRoKHRoaXMuc3RhdGljUGF0aCk7XHJcbiAgICB0aGlzLnN0YXRpY1BhdGggPSBzcGxpdGVkLnBhdGg7XHJcbiAgICB0aGlzLm9yaWdpbiA9IHNwbGl0ZWQub3JpZ2luO1xyXG5cclxuICAgIHRoaXMuc3RhdGljUXVlcnkgPSB1cmwuaW5kZXhPZihcIj9cIikgPiAtMSA/IHVybC5zcGxpdChcIj9cIilbMV0uc3BsaXQoXCIjXCIpWzBdIDogbnVsbDtcclxuICAgIHRoaXMuc3RhdGljSGFzaCA9IHVybC5zcGxpdChcIiNcIilbMV0gfHwgbnVsbDtcclxuICAgIC8vIHF1ZXJ5TGlzdFxyXG4gICAgaWYgKHRoaXMuc3RhdGljUXVlcnkgIT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBxdWVyeUtleVZhbHVlTGlzdDogc3RyaW5nW10gPSB0aGlzLnN0YXRpY1F1ZXJ5LnNwbGl0KFwiJlwiKTtcclxuICAgICAgcXVlcnlLZXlWYWx1ZUxpc3QuZm9yRWFjaCgocXVlcnlLZXlWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleVZhbHVlOiBzdHJpbmdbXSA9IHF1ZXJ5S2V5VmFsdWUuc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0ga2V5VmFsdWVbMF07XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGtleVZhbHVlWzFdO1xyXG4gICAgICAgIHRoaXMuUXVlcnlMaXN0IVtrZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gb3JpZ2luXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UXVlcnkoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBVcmwge1xyXG4gICAgdGhpcy5RdWVyeUxpc3QhW2tleV0gPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0UXVlcmllcyh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBVcmwge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVzW2tleV0gIT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5RdWVyeUxpc3QhW2tleV0gPSB2YWx1ZXNba2V5XS50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcHVibGljIGRlbGV0ZVF1ZXJ5KGtleTogc3RyaW5nKTogVXJsIHtcclxuICAgIGlmICh0aGlzLlF1ZXJ5TGlzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuUXVlcnlMaXN0W2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLlF1ZXJ5TGlzdFtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRRdWVyeShrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5RdWVyeUxpc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5RdWVyeUxpc3Rba2V5XTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcXVlcnlMZW5ndGg6IG51bWJlciA9IE9iamVjdC5rZXlzKHRoaXMuUXVlcnlMaXN0KS5sZW5ndGg7XHJcbiAgICBsZXQgcXVlcnk6IHN0cmluZyA9IChPYmplY3Qua2V5cyh0aGlzLlF1ZXJ5TGlzdCkubGVuZ3RoID4gMCA/IFwiP1wiIDogXCJcIik7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLlF1ZXJ5TGlzdCkge1xyXG4gICAgICBpZiAodGhpcy5RdWVyeUxpc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHF1ZXJ5TGVuZ3RoLS07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLlF1ZXJ5TGlzdFtrZXldO1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgICAgIGlmIChxdWVyeUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyBcIiZcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQYXRoID0gdGhpcy5zdGF0aWNQYXRoICsgcXVlcnkgKyAodGhpcy5zdGF0aWNIYXNoID8gXCIjXCIgKyB0aGlzLnN0YXRpY0hhc2ggOiBcIlwiKTtcclxuICAgIG5ld1BhdGggPSBVcmwuYWJzb2x1dGUobmV3UGF0aCwgbmV3UGF0aFswXSA9PT0gXCIuXCIgPyB0aGlzLm9yaWdpblBhdGggOiBcIi9cIik7XHJcbiAgICBpZiAodGhpcy5vcmlnaW4gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9yaWdpbiAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBuZXdVcmwgPSB0aGlzLm9yaWdpbiArIG5ld1BhdGg7IC8vIFVybC5hYnNvbHV0ZShuZXdQYXRoLCB0aGlzLm9yaWdpbik7XHJcbiAgICAgIHJldHVybiBuZXdVcmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3UGF0aDtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHNldE9yaWdpbihvcmlnaW4/OiBzdHJpbmcsIGp1c3RMb2NhbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNwbGl0ZWQgPSBVcmwuc3BsaXRPcmlnaW5QYXRoKG9yaWdpbiB8fCB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvXCIgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgaWYgKHRoaXMub3JpZ2luID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcmlnaW4gPSBzcGxpdGVkLm9yaWdpbjtcclxuICAgICAgdGhpcy5vcmlnaW5QYXRoID0gc3BsaXRlZC5wYXRoIHx8IFwiL1wiO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIGlmICh0aGlzLm9yaWdpbiA9PT0gbnVsbCB8fCB0aGlzLm9yaWdpbiA9PT0gdW5kZWZpbmVkIHx8IGp1c3RMb2NhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IHNwbGl0ZWQub3JpZ2luO1xyXG4gICAgICAgIHRoaXMub3JpZ2luUGF0aCA9IHNwbGl0ZWQucGF0aCB8fCBcIi9cIjtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKGp1c3RMb2NhbCkge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZShcImh0dHBzXCIsIFwiaHR0cFwiKS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLm9yaWdpbi5yZXBsYWNlKFwiaHR0cHNcIiwgXCJodHRwXCIpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSBzcGxpdGVkLm9yaWdpbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMub3JpZ2luUGF0aCA9IHNwbGl0ZWQucGF0aCB8fCBcIi9cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vcmlnaW4gPSBzcGxpdGVkLm9yaWdpbjtcclxuICAgICAgICAgIHRoaXMub3JpZ2luUGF0aCA9IHNwbGl0ZWQucGF0aCB8fCBcIi9cIjtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgbmFtZXNwYWNlIFVybCB7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNwbGl0T3JpZ2luUGF0aCh2YWx1ZTogc3RyaW5nKTogeyBvcmlnaW46IHN0cmluZyB8IG51bGw7IHBhdGg6IHN0cmluZzsgfSB7XHJcbiAgICBjb25zdCBzcGxpdDogYW55ID0gLyhodHRwcz86XFwvXFwvW2EtekEtWjAtOS1cXC5dKyg/OjpbMC05XSopPykoXFwvLiopPy9nLmV4ZWModmFsdWUpO1xyXG4gICAgaWYgKHNwbGl0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JpZ2luOiBzcGxpdFsxXSxcclxuICAgICAgICBwYXRoOiBzcGxpdFsyXSB8fCBcIi9cIixcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JpZ2luOiBudWxsLFxyXG4gICAgICAgIHBhdGg6IHZhbHVlIHx8IFwiL1wiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gYWJzb2x1dGUocmVsYXRpdmU6IHN0cmluZywgYmFzZTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgaWYgKGJhc2UgPT09IG51bGwpIHtcclxuICAgICAgYmFzZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBiYXNlLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IHBhcnRzID0gcmVsYXRpdmUuc3BsaXQoXCIvXCIpO1xyXG4gICAgc3RhY2sucG9wKCk7IC8vIHJlbW92ZSBjdXJyZW50IGZpbGUgbmFtZSAob3IgZW1wdHkgc3RyaW5nKVxyXG4gICAgLy8gKG9taXQgaWYgXCJiYXNlXCIgaXMgdGhlIGN1cnJlbnQgZm9sZGVyIHdpdGhvdXQgdHJhaWxpbmcgc2xhc2gpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwYXJ0c1tpXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFydHNbaV0gPT09IFwiLi5cIikge1xyXG4gICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YWNrLnB1c2gocGFydHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dC5yZXBsYWNlQWxsKHN0YWNrLmpvaW4oXCIvXCIpLCBcIi8vXCIsIFwiL1wiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXJsO1xyXG4iXX0=

},{"./text":8}]},{},[3])