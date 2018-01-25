/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var String;
(function (String) {
    function replaceAll(value, search, replacement) {
        return value.split(search).join(replacement);
    }
    String.replaceAll = replaceAll;
    function pathArray(path) {
        return path.split(".");
    }
    String.pathArray = pathArray;
    function stripNonNumber(value) {
        return value.replace(/[^0-9]/g, "");
    }
    String.stripNonNumber = stripNonNumber;
})(String = exports.String || (exports.String = {}));
exports.default = String;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Event;
(function (Event) {
    function once(target, type, listener) {
        const fn = (ev) => {
            target.removeEventListener(type, fn);
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.once = once;
    function bind(target, type, listener) {
        const fn = (ev) => {
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.bind = bind;
    // passive supported
    const passiveSupported = false;
    function passive() {
        return (passiveSupported ? { passive: true } : false);
    }
    Event.passive = passive;
    (function Initialize() {
        // detect if suport passive event
        try {
            const options = Object.defineProperty({}, "passive", {
                get: () => {
                    this.passiveSupported = true;
                },
            });
            window.addEventListener("test", null, options);
        }
        catch (err) {
            //
        }
    })();
})(Event = exports.Event || (exports.Event = {}));
exports.default = Event;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(0));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(1));
var UtilityCollection;
(function (UtilityCollection) {
    const name = "UtilityCollection";
})(UtilityCollection = exports.UtilityCollection || (exports.UtilityCollection = {}));
exports.default = UtilityCollection;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom;
(function (Dom) {
    function insertBefore(element, targetElement) {
        targetElement.parentElement.insertBefore(element, targetElement);
    }
    Dom.insertBefore = insertBefore;
    function insertAfter(element, targetElement) {
        const parent = targetElement.parentNode;
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
            const node = document.createElement("div");
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
        const attrs = element.attributes;
        const newAttr = {};
        for (let i = 0; i < attrs.length; i++) {
            newAttr[attrs[i].name] = attrs[i].value;
        }
        return newAttr;
    }
    Dom.getAttributes = getAttributes;
    // Loops e giros pelo dom --------------------------------------------
    function childElement(node, each) {
        let child = node.firstChild;
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
        const parent = node;
        let child = node.firstChild;
        while (child) {
            const eachReturn = each(child, parent);
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
        const parent = node;
        let child = node.firstChild;
        while (child) {
            if (child.nodeType === 1) {
                const eachReturn = each(child, parent);
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
        let retorno = true;
        let current = node.parentNode;
        do {
            retorno = each(current);
            current = current.parentNode;
        } while (retorno !== false && current !== null && current !== undefined && node.nodeName !== "BODY");
    }
    Dom.parentElementUp = parentElementUp;
    // dom --------------------------
    function attribute(element, each) {
        // TODO: this still need to be tested
        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
            each(attributes[i].name, attributes[i].value);
        }
    }
    Dom.attribute = attribute;
    function findNextSibling(target, validation) {
        let current = target.nextSibling;
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
        let current = target.previousSibling;
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
        const siblings = [];
        findPrevSibling(target, (node) => {
            siblings.push(node);
            return false;
        });
        findNextSibling(target, (node) => {
            siblings.push(node);
            return false;
        });
        return siblings;
    }
    Dom.findAllSiblings = findAllSiblings;
    function prependChild(parent, child) {
        const firstChild = parent.firstChild;
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
        let i1;
        let i2;
        let p1 = n1.parentNode;
        let p2 = n2.parentNode;
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
        for (let i = 0; i < p1.children.length; i++) {
            if (p1.children[i].isEqualNode(n1)) {
                i1 = i;
            }
        }
        for (let i = 0; i < p2.children.length; i++) {
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import moment from "moment";
const string_1 = __webpack_require__(0);
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
    const numberRegex = /\D/;
    function number(value) {
        return !numberRegex.test(value);
    }
    Is.number = number;
    // is Letter
    const letterRegex = /[a-zA-Z]/;
    function letter(value) {
        return letterRegex.test(value);
    }
    Is.letter = letter;
    // --------------------------------
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m;
    function email(value) {
        return emailRegex.test(value);
    }
    Is.email = email;
    // brazilian validations ----------------------------------------
    // phone
    const brazilianPhoneRegex = /^(?:(?:\+)[0-9]{2}\s?){0,1}(?:\()[0-9]{2}(?:\))\s?[0-9]{0,1}\s?[0-9]{4,}(?:-)[0-9]{4}$/m;
    function brazilianPhone(phone) {
        return brazilianPhoneRegex.test(phone);
    }
    Is.brazilianPhone = brazilianPhone;
    function ddmmyyyy(date) {
        throw new Error("need to be implemented");
        // return moment(date, "DD/MM/YYYY", true).isValid();
    }
    Is.ddmmyyyy = ddmmyyyy;
    function mmddyyyy(date) {
        throw new Error("need to be implemented");
        // return moment(date, "MM/DD/YYYY", true).isValid();
    }
    Is.mmddyyyy = mmddyyyy;
    // CPF
    function cpf(value) {
        value = string_1.default.stripNonNumber(value);
        let numeros;
        let digitos;
        let soma;
        let i;
        let resultado;
        let digitos_iguais;
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
        value = string_1.default.stripNonNumber(value);
        let tamanho;
        let numeros;
        let digitos;
        let soma;
        let pos;
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
        for (let i = tamanho; i >= 1; i--) {
            soma += +(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +(digitos.charAt(0))) {
            return false;
        }
        tamanho = tamanho + 1;
        numeros = value.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
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
exports.default = Is;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Reflection;
(function (Reflection) {
    function merge(base, source) {
        for (const i in source) {
            if (source.hasOwnProperty(i)) {
                base[i] = source[i];
            }
        }
    }
    Reflection.merge = merge;
})(Reflection = exports.Reflection || (exports.Reflection = {}));
exports.default = Reflection;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Url {
    // -------------------
    constructor(url) {
        this.QueryList = {};
        this.staticPath = url.split("#")[0].split("?")[0];
        this.staticQuery = url.indexOf("?") > -1 ? url.split("?")[1].split("#")[0] : null;
        this.staticHash = url.split("#")[1] || null;
        // queryList
        if (this.staticQuery != null) {
            const queryKeyValueList = this.staticQuery.split("&");
            queryKeyValueList.forEach((queryKeyValue) => {
                const keyValue = queryKeyValue.split("=");
                const key = keyValue[0];
                const value = keyValue[1];
                this.QueryList[key] = value;
            });
        }
    }
    setQuery(key, value) {
        this.QueryList[key] = value;
        return this;
    }
    setQueries(values) {
        for (const key in values) {
            if (typeof values[key] !== "function" && values[key] !== undefined) {
                this.QueryList[key] = values[key].toString();
            }
        }
        return this;
    }
    deleteQuery(key) {
        this.QueryList[key] = undefined;
        delete this.QueryList[key];
        return this;
    }
    getQuery(key) {
        return this.QueryList[key];
    }
    toString() {
        let queryLength = Object.keys(this.QueryList).length;
        let query = (Object.keys(this.QueryList).length > 0 ? "?" : "");
        for (const key in this.QueryList) {
            if (this.QueryList.hasOwnProperty(key)) {
                queryLength--;
                const value = this.QueryList[key];
                query = query + key + "=" + value;
                if (queryLength > 0) {
                    query = query + "&";
                }
            }
        }
        return this.staticPath + query + (this.staticHash ? this.staticHash : "");
    }
}
exports.Url = Url;
// export namespace Url {
// 	//
// }
exports.default = Url;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var List;
(function (List) {
    // remove item from list if exist
    function removeFromIndex(list, index) {
        list.splice(index, 1);
        return list;
    }
    List.removeFromIndex = removeFromIndex;
    function removeItem(list, item) {
        const index = list.indexOf(item);
        let newList;
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
        const index = list.indexOf(item);
        if (index < 0) {
            list.push(item);
        }
        return list;
    }
    List.setItem = setItem;
})(List = exports.List || (exports.List = {}));
exports.default = List;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __webpack_require__(1);
exports.DATA_SCROLLABLE = "data-scrollable";
exports.CLASS_FOCUS = "scroll--active";
var ScrollSwitch;
(function (ScrollSwitch) {
    let unfreezeDelay;
    class Scrollable {
        constructor(element) {
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
            const unfreezeEvent = (e) => {
                window.scrollTo(0, window.scrollY);
                this.unfreeze();
            };
            const freezeAllEvent = (e) => {
                freezeAllButId(null);
            };
            element.addEventListener("touchstart", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("mouseenter", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("pointermove", unfreezeEvent, event_1.Event.passive());
            element.addEventListener("mouseleave", freezeAllEvent, event_1.Event.passive());
        }
        getId() {
            return this.id;
        }
        unfreeze() {
            if (this.frozen && !this.unfreezing) {
                this.unfreezing = true;
                freezeAllButId(this.id);
                document.body.style.height = `${this.element.scrollHeight}px`;
                window.scroll(0, this.y);
                this.element.setAttribute("style", `position: absolute; top: 0; z-index: ${this.element.style.zIndex}; `);
                this.element.classList.add(exports.CLASS_FOCUS);
                document.body.style.height = "";
                this.y = 0;
                this.frozen = false;
                this.unfreezing = false;
                unfreezeDelay = undefined;
            }
        }
        freeze() {
            if (!this.frozen) {
                this.y = window.scrollY + 0;
                this.element.setAttribute("style", `position: fixed; top: -${this.y}px; z-index: ${this.element.style.zIndex}; `);
                this.element.classList.remove(exports.CLASS_FOCUS);
                this.frozen = true;
            }
        }
    }
    ScrollSwitch.Scrollable = Scrollable;
    const store = {};
    let lastId = 1;
    function newScrollableId() {
        lastId = lastId + 1;
        return lastId.toString();
    }
    function identifyElement(element) {
        if (element.parentElement !== document.body) {
            return null;
        }
        let id = element.getAttribute(exports.DATA_SCROLLABLE);
        const stored = (id !== undefined) ? (store[id] !== undefined) : false;
        if (stored) {
            return store[id];
        }
        else {
            const s = new Scrollable(element);
            id = s.getId();
            store[id] = s;
            return store[id];
        }
    }
    function freezeElement(element) {
        const scroll = identifyElement(element);
        if (scroll !== null) {
            scroll.freeze();
        }
    }
    ScrollSwitch.freezeElement = freezeElement;
    function freezeAllButId(id = null) {
        for (const i in store) {
            if (i !== id) {
                store[i].freeze();
            }
        }
    }
    ScrollSwitch.freezeAllButId = freezeAllButId;
    function freezeAllButElement(element) {
        const scroll = identifyElement(element);
        if (scroll !== null) {
            freezeAllButId(scroll.getId());
        }
    }
    ScrollSwitch.freezeAllButElement = freezeAllButElement;
    function unfreezeElement(element) {
        const scroll = identifyElement(element);
        if (scroll !== null) {
            scroll.unfreeze();
        }
    }
    ScrollSwitch.unfreezeElement = unfreezeElement;
})(ScrollSwitch = exports.ScrollSwitch || (exports.ScrollSwitch = {}));
exports.default = ScrollSwitch;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGE5ZWM3NDRkNGNkMjdjODQwMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nyb2xsLXN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REEsSUFBaUIsTUFBTSxDQVl0QjtBQVpELFdBQWlCLE1BQU07SUFDdEIsb0JBQTJCLEtBQWEsRUFBRSxNQUFjLEVBQUUsV0FBbUI7UUFDNUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFGZSxpQkFBVSxhQUV6QjtJQUNELG1CQUEwQixJQUFZO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENB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QUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQztRQUNSLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckQsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsQ0FBQztRQUNGLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsQ0FBQztRQUNGLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUs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Q3hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0YsQ0FBQztJQUxlLDBCQUFhLGdCQUs1QjtJQUNELHdCQUErQixLQUFvQixJQUFJO1FBQ3RELEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25CLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQU5lLDJCQUFjLGlCQU03QjtJQUNELDZCQUFvQyxPQUFvQjtRQUN2RCxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDRixDQUFDO0lBTGUsZ0NBQW1CLHNCQUtsQztJQUNELHlCQUFnQyxPQUFvQjtRQUNuRCxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25CLENBQUM7SUFDRixDQUFDO0lBTGUsNEJBQWUsa0JBSzlCO0FBQ0YsQ0FBQyxFQXRHZ0IsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFzRzVCO0FBQ0Qsa0JBQWUsWUFBWSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTllYzc0NGQ0Y2QyN2M4NDAzOCIsImV4cG9ydCBuYW1lc3BhY2UgU3RyaW5nIHtcclxuXHRleHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbCh2YWx1ZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgcmVwbGFjZW1lbnQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHZhbHVlLnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBwYXRoQXJyYXkocGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cdFx0cmV0dXJuIHBhdGguc3BsaXQoXCIuXCIpO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHN0cmlwTm9uTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0cmluZy50cyIsImV4cG9ydCBuYW1lc3BhY2UgRXZlbnQge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBvbmNlKHRhcmdldDogTm9kZSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCBmbiA9IChldjogYW55KSA9PiB7XHJcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHRcdFx0bGlzdGVuZXIoZXYpO1xyXG5cdFx0fTtcclxuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0OiBOb2RlLCB0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IGZuID0gKGV2OiBhbnkpID0+IHtcclxuXHRcdFx0bGlzdGVuZXIoZXYpO1xyXG5cdFx0fTtcclxuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHR9XHJcblx0Ly8gcGFzc2l2ZSBzdXBwb3J0ZWRcclxuXHRjb25zdCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHBhc3NpdmUoKTogYW55IHtcclxuXHRcdHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xyXG5cdH1cclxuXHQoZnVuY3Rpb24gSW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIGRldGVjdCBpZiBzdXBvcnQgcGFzc2l2ZSBldmVudFxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcclxuXHRcdFx0XHRnZXQ6ICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRpb25zKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHQvL1xyXG5cdFx0fVxyXG5cdH0pKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC50cyIsImV4cG9ydCAqIGZyb20gXCIuL2RvbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmVmbGVjdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91cmxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zY3JvbGwtc3dpdGNoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2V2ZW50XCI7XHJcbmV4cG9ydCBuYW1lc3BhY2UgVXRpbGl0eUNvbGxlY3Rpb24ge1xyXG5cdGNvbnN0IG5hbWU6IHN0cmluZyA9IFwiVXRpbGl0eUNvbGxlY3Rpb25cIjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBVdGlsaXR5Q29sbGVjdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCJleHBvcnQgbmFtZXNwYWNlIERvbSB7XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGluc2VydEJlZm9yZShlbGVtZW50OiBOb2RlLCB0YXJnZXRFbGVtZW50OiBOb2RlKTogdm9pZCB7XHJcblx0XHR0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoZWxlbWVudDogTm9kZSwgdGFyZ2V0RWxlbWVudDogTm9kZSk6IHZvaWQge1xyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0aWYgKHBhcmVudC5sYXN0Q2hpbGQgPT09IHRhcmdldEVsZW1lbnQpIHtcclxuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShlbGVtZW50LCB0YXJnZXRFbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50OiBOb2RlKTogdm9pZCB7XHJcblx0XHRpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb05vZGUoaHRtbDogc3RyaW5nIHwgRWxlbWVudCk6IE5vZGUge1xyXG5cdFx0aWYgKGh0bWwgaW5zdGFuY2VvZiBOb2RlKSB7XHJcblx0XHRcdHJldHVybiBodG1sO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgbm9kZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRub2RlLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdHJldHVybiBub2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbDogc3RyaW5nIHwgRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuXHRcdHJldHVybiBodG1sVG9Ob2RlKGh0bWwpIGFzIEhUTUxFbGVtZW50O1xyXG5cdH1cclxuXHQvLyBhdHJpYnV0ZXMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQgfCBOb2RlKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0ge1xyXG5cdFx0Y29uc3QgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcblx0XHRjb25zdCBuZXdBdHRyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXdBdHRyW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXR0cjtcclxuXHR9XHJcblxyXG5cdC8vIExvb3BzIGUgZ2lyb3MgcGVsbyBkb20gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRleHBvcnQgZnVuY3Rpb24gY2hpbGRFbGVtZW50KG5vZGU6IEVsZW1lbnQsIGVhY2g6IChub2RlOiBFbGVtZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcblx0XHRsZXQgY2hpbGQ6IE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHR3aGlsZSAoY2hpbGQpIHtcclxuXHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XHJcblx0XHRcdFx0ZWFjaChjaGlsZCBhcyBFbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gZWxlbWVudCBkb3duIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIG5vZGVEb3duKG5vZGU6IE5vZGUgfCBOb2RlLCBlYWNoOiAobm9kZTogTm9kZSB8IE5vZGUsIHBhcmVudD86IE5vZGUgfCBOb2RlKSA9PiB2b2lkIHwgYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKGVhY2gobm9kZSwgdW5kZWZpbmVkKSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5jaGlsZE5vZGVEb3duKG5vZGUsIGVhY2gpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTm9kZURvd24obm9kZTogTm9kZSwgZWFjaDogKG5vZGU6IE5vZGUsIHBhcmVudD86IE5vZGUpID0+IHZvaWQgfCBib29sZWFuKTogdm9pZCB7XHJcblx0XHRjb25zdCBwYXJlbnQ6IE5vZGUgPSBub2RlO1xyXG5cdFx0bGV0IGNoaWxkOiBOb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0d2hpbGUgKGNoaWxkKSB7XHJcblx0XHRcdGNvbnN0IGVhY2hSZXR1cm46IGJvb2xlYW4gfCB2b2lkID0gZWFjaChjaGlsZCwgcGFyZW50KTtcclxuXHRcdFx0aWYgKGVhY2hSZXR1cm4gIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0dGhpcy5jaGlsZE5vZGVEb3duKGNoaWxkLCBlYWNoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnREb3duKG5vZGU6IEVsZW1lbnQsIGVhY2g6IChub2RlOiBFbGVtZW50LCBwYXJlbnQ/OiBFbGVtZW50KSA9PiB2b2lkIHwgYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKGVhY2gobm9kZSwgdW5kZWZpbmVkKSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5jaGlsZEVsZW1lbnREb3duKG5vZGUsIGVhY2gpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNoaWxkRWxlbWVudERvd24obm9kZTogRWxlbWVudCwgZWFjaDogKG5vZGU6IEhUTUxFbGVtZW50LCBwYXJlbnQ/OiBIVE1MRWxlbWVudCkgPT4gdm9pZCB8IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGNvbnN0IHBhcmVudDogRWxlbWVudCA9IG5vZGU7XHJcblx0XHRsZXQgY2hpbGQ6IE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHR3aGlsZSAoY2hpbGQpIHtcclxuXHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XHJcblx0XHRcdFx0Y29uc3QgZWFjaFJldHVybjogYm9vbGVhbiB8IHZvaWQgPSBlYWNoKGNoaWxkIGFzIEhUTUxFbGVtZW50LCBwYXJlbnQgYXMgSFRNTEVsZW1lbnQpO1xyXG5cdFx0XHRcdGlmIChlYWNoUmV0dXJuICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jaGlsZEVsZW1lbnREb3duKGNoaWxkIGFzIEhUTUxFbGVtZW50LCBlYWNoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGVsZW1lbnQgdXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRleHBvcnQgZnVuY3Rpb24gZWxlbWVudFVwKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCwgZWFjaDogKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbiB8IHZvaWQpOiB2b2lkIHtcclxuXHRcdGlmIChlYWNoKG5vZGUpICE9PSBmYWxzZSkge1xyXG5cdFx0XHRwYXJlbnRFbGVtZW50VXAobm9kZSwgZWFjaCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gcGFyZW50RWxlbWVudFVwKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IE5vZGUsIGVhY2g6IChub2RlOiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgfCBOb2RlKSA9PiBib29sZWFuIHwgdm9pZCk6IHZvaWQge1xyXG5cdFx0bGV0IHJldG9ybm86IGJvb2xlYW4gfCB2b2lkID0gdHJ1ZTtcclxuXHRcdGxldCBjdXJyZW50OiBFbGVtZW50IHwgTm9kZSA9IChub2RlIGFzIE5vZGUpLnBhcmVudE5vZGU7XHJcblx0XHRkbyB7XHJcblx0XHRcdHJldG9ybm8gPSBlYWNoKGN1cnJlbnQpO1xyXG5cdFx0XHRjdXJyZW50ID0gKGN1cnJlbnQgYXMgTm9kZSkucGFyZW50Tm9kZTtcclxuXHRcdH0gd2hpbGUgKHJldG9ybm8gIT09IGZhbHNlICYmIGN1cnJlbnQgIT09IG51bGwgJiYgY3VycmVudCAhPT0gdW5kZWZpbmVkICYmIG5vZGUubm9kZU5hbWUgIT09IFwiQk9EWVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIGRvbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGUoZWxlbWVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50IHwgTm9kZSwgZWFjaDogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPOiB0aGlzIHN0aWxsIG5lZWQgdG8gYmUgdGVzdGVkXHJcblx0XHRjb25zdCBhdHRyaWJ1dGVzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGVhY2goYXR0cmlidXRlc1tpXS5uYW1lLCBhdHRyaWJ1dGVzW2ldLnZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaW5kTmV4dFNpYmxpbmcodGFyZ2V0OiBOb2RlIHwgTm9kZSwgdmFsaWRhdGlvbjogKG5vZGU6IE5vZGUgfCBOb2RlKSA9PiBib29sZWFuIHwgdm9pZCk6IE5vZGUgfCBOb2RlIHtcclxuXHRcdGxldCBjdXJyZW50OiBOb2RlIHwgTm9kZSA9IHRhcmdldC5uZXh0U2libGluZztcclxuXHRcdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGlmICh2YWxpZGF0aW9uKGN1cnJlbnQpID09PSB0cnVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcmV2U2libGluZyh0YXJnZXQ6IE5vZGUgfCBOb2RlLCB2YWxpZGF0aW9uOiAobm9kZTogTm9kZSB8IE5vZGUpID0+IGJvb2xlYW4gfCB2b2lkKTogTm9kZSB8IE5vZGUge1xyXG5cdFx0bGV0IGN1cnJlbnQ6IE5vZGUgfCBOb2RlID0gdGFyZ2V0LnByZXZpb3VzU2libGluZztcclxuXHRcdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGlmICh2YWxpZGF0aW9uKGN1cnJlbnQpID09PSB0cnVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNTaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsU2libGluZ3ModGFyZ2V0OiBOb2RlKTogTm9kZVtdIHtcclxuXHRcdGNvbnN0IHNpYmxpbmdzOiBOb2RlW10gPSBbXTtcclxuXHRcdGZpbmRQcmV2U2libGluZyh0YXJnZXQsIChub2RlKSA9PiB7XHJcblx0XHRcdHNpYmxpbmdzLnB1c2gobm9kZSk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0ZmluZE5leHRTaWJsaW5nKHRhcmdldCwgKG5vZGUpID0+IHtcclxuXHRcdFx0c2libGluZ3MucHVzaChub2RlKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc2libGluZ3M7XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gcHJlcGVuZENoaWxkKHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZmlyc3RDaGlsZDogTm9kZSA9IHBhcmVudC5maXJzdENoaWxkO1xyXG5cdFx0aWYgKGZpcnN0Q2hpbGQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZTxIVE1MRWxlbWVudD4oY2hpbGQsIGZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGQocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50KSB7XHJcblx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KG9sZEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBuZXdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cdFx0b2xkRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBzd2FwTm9kZXMobjE6IEhUTUxFbGVtZW50LCBuMjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGxldCBpMTogYW55O1xyXG5cdFx0bGV0IGkyOiBhbnk7XHJcblx0XHRsZXQgcDEgPSBuMS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0bGV0IHAyID0gbjIucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdGlmIChwMSA9PT0gdW5kZWZpbmVkIHx8IHAxID09PSBudWxsKSB7XHJcblx0XHRcdHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0cDEuYXBwZW5kQ2hpbGQobjEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHAyID09PSB1bmRlZmluZWQgfHwgcDIgPT09IG51bGwpIHtcclxuXHRcdFx0cDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRwMi5hcHBlbmRDaGlsZChuMik7XHJcblx0XHR9XHJcblx0XHRpZiAoIXAxIHx8ICFwMiB8fCBwMS5pc0VxdWFsTm9kZShuMikgfHwgcDIuaXNFcXVhbE5vZGUobjEpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwMS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAocDEuY2hpbGRyZW5baV0uaXNFcXVhbE5vZGUobjEpKSB7XHJcblx0XHRcdFx0aTEgPSBpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHAyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChwMi5jaGlsZHJlbltpXS5pc0VxdWFsTm9kZShuMikpIHtcclxuXHRcdFx0XHRpMiA9IGk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocDEuaXNFcXVhbE5vZGUocDIpICYmIGkxIDwgaTIpIHtcclxuXHRcdFx0aTIrKztcclxuXHRcdH1cclxuXHRcdHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcclxuXHRcdHAyLmluc2VydEJlZm9yZShuMSwgcDIuY2hpbGRyZW5baTJdKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERvbTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RvbS50cyIsIi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgU3RyaW5nIGZyb20gXCIuL3N0cmluZ1wiO1xyXG5cclxuLy8gY29uc29sZS5sb2coXCItLT4gb2tcIik7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIElzIHtcclxuXHRleHBvcnQgZnVuY3Rpb24gbW9iaWxlKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gaXMgbnVsbCBvciB1bmRlZmluZWRcclxuXHRleHBvcnQgZnVuY3Rpb24gbnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBpZCBlbXB0eVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBlbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gaXMgTnVtYmVyXHJcblx0Y29uc3QgbnVtYmVyUmVnZXg6IFJlZ0V4cCA9IC9cXEQvO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBudW1iZXIodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICFudW1iZXJSZWdleC50ZXN0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIGlzIExldHRlclxyXG5cdGNvbnN0IGxldHRlclJlZ2V4OiBSZWdFeHAgPSAvW2EtekEtWl0vO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGxldHRlclJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9tO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBlbWFpbCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gZW1haWxSZWdleC50ZXN0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIGJyYXppbGlhbiB2YWxpZGF0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gcGhvbmVcclxuXHRjb25zdCBicmF6aWxpYW5QaG9uZVJlZ2V4ID0gL14oPzooPzpcXCspWzAtOV17Mn1cXHM/KXswLDF9KD86XFwoKVswLTldezJ9KD86XFwpKVxccz9bMC05XXswLDF9XFxzP1swLTldezQsfSg/Oi0pWzAtOV17NH0kL207XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGJyYXppbGlhblBob25lKHBob25lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBicmF6aWxpYW5QaG9uZVJlZ2V4LnRlc3QocGhvbmUpO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gZGRtbXl5eXkoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJuZWVkIHRvIGJlIGltcGxlbWVudGVkXCIpO1xyXG5cdFx0Ly8gcmV0dXJuIG1vbWVudChkYXRlLCBcIkREL01NL1lZWVlcIiwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gbW1kZHl5eXkoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJuZWVkIHRvIGJlIGltcGxlbWVudGVkXCIpO1xyXG5cdFx0Ly8gcmV0dXJuIG1vbWVudChkYXRlLCBcIk1NL0REL1lZWVlcIiwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ1BGXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNwZih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR2YWx1ZSA9IFN0cmluZy5zdHJpcE5vbk51bWJlcih2YWx1ZSk7XHJcblx0XHRsZXQgbnVtZXJvczogc3RyaW5nO1xyXG5cdFx0bGV0IGRpZ2l0b3M6IGFueTtcclxuXHRcdGxldCBzb21hOiBudW1iZXI7XHJcblx0XHRsZXQgaTogYW55O1xyXG5cdFx0bGV0IHJlc3VsdGFkbzogYW55O1xyXG5cdFx0bGV0IGRpZ2l0b3NfaWd1YWlzOiBhbnk7XHJcblx0XHRkaWdpdG9zX2lndWFpcyA9IDE7XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoIDwgMTEpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRpZiAodmFsdWUuY2hhckF0KGkpICE9PSB2YWx1ZS5jaGFyQXQoaSArIDEpKSB7XHJcblx0XHRcdFx0ZGlnaXRvc19pZ3VhaXMgPSAwO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIWRpZ2l0b3NfaWd1YWlzKSB7XHJcblx0XHRcdG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgOSk7XHJcblx0XHRcdGRpZ2l0b3MgPSB2YWx1ZS5zdWJzdHJpbmcoOSk7XHJcblx0XHRcdHNvbWEgPSAwO1xyXG5cdFx0XHRmb3IgKGkgPSAxMDsgaSA+IDE7IGktLSkge1xyXG5cdFx0XHRcdHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCgxMCAtIGkpKSAqIGk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuXHRcdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgwKSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0bnVtZXJvcyA9IHZhbHVlLnN1YnN0cmluZygwLCAxMCk7XHJcblx0XHRcdHNvbWEgPSAwO1xyXG5cdFx0XHRmb3IgKGkgPSAxMTsgaSA+IDE7IGktLSkge1xyXG5cdFx0XHRcdHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCgxMSAtIGkpKSAqIGk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuXHRcdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgxKSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIENOUEpcclxuXHRmdW5jdGlvbiBjbnBqKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHZhbHVlID0gU3RyaW5nLnN0cmlwTm9uTnVtYmVyKHZhbHVlKTtcclxuXHJcblx0XHRsZXQgdGFtYW5obzogbnVtYmVyO1xyXG5cdFx0bGV0IG51bWVyb3M6IHN0cmluZztcclxuXHRcdGxldCBkaWdpdG9zOiBzdHJpbmc7XHJcblx0XHRsZXQgc29tYTogbnVtYmVyO1xyXG5cdFx0bGV0IHBvczogbnVtYmVyO1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcZF0rL2csIFwiXCIpO1xyXG5cdFx0aWYgKHZhbHVlID09PSBcIlwiKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCAhPT0gMTQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdFx0Ly8gRWxpbWluYSBDTlBKcyBpbnZhbGlkb3MgY29uaGVjaWRvc1xyXG5cdFx0aWYgKHZhbHVlID09PSBcIjAwMDAwMDAwMDAwMDAwXCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiMTExMTExMTExMTExMTFcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCIyMjIyMjIyMjIyMjIyMlwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjMzMzMzMzMzMzMzMzMzXCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiNDQ0NDQ0NDQ0NDQ0NDRcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCI1NTU1NTU1NTU1NTU1NVwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjY2NjY2NjY2NjY2NjY2XCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiNzc3Nzc3Nzc3Nzc3NzdcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCI4ODg4ODg4ODg4ODg4OFwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjk5OTk5OTk5OTk5OTk5XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyBWYWxpZGEgRFZzXHJcblx0XHR0YW1hbmhvID0gdmFsdWUubGVuZ3RoIC0gMjtcclxuXHRcdG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdGFtYW5obyk7XHJcblx0XHRkaWdpdG9zID0gdmFsdWUuc3Vic3RyaW5nKHRhbWFuaG8pO1xyXG5cdFx0c29tYSA9IDA7XHJcblx0XHRwb3MgPSB0YW1hbmhvIC0gNztcclxuXHRcdGZvciAobGV0IGkgPSB0YW1hbmhvOyBpID49IDE7IGktLSkge1xyXG5cdFx0XHRzb21hICs9ICsobnVtZXJvcy5jaGFyQXQodGFtYW5obyAtIGkpKSAqIHBvcy0tO1xyXG5cdFx0XHRpZiAocG9zIDwgMikge1xyXG5cdFx0XHRcdHBvcyA9IDk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGxldCByZXN1bHRhZG86IG51bWJlciA9IHNvbWEgJSAxMSA8IDIgPyAwIDogMTEgLSBzb21hICUgMTE7XHJcblx0XHRpZiAocmVzdWx0YWRvICE9PSArKGRpZ2l0b3MuY2hhckF0KDApKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGFtYW5obyA9IHRhbWFuaG8gKyAxO1xyXG5cdFx0bnVtZXJvcyA9IHZhbHVlLnN1YnN0cmluZygwLCB0YW1hbmhvKTtcclxuXHRcdHNvbWEgPSAwO1xyXG5cdFx0cG9zID0gdGFtYW5obyAtIDc7XHJcblx0XHRmb3IgKGxldCBpID0gdGFtYW5obzsgaSA+PSAxOyBpLS0pIHtcclxuXHRcdFx0c29tYSArPSArKG51bWVyb3MuY2hhckF0KHRhbWFuaG8gLSBpKSkgKiBwb3MtLTtcclxuXHRcdFx0aWYgKHBvcyA8IDIpIHtcclxuXHRcdFx0XHRwb3MgPSA5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXN1bHRhZG8gPSBzb21hICUgMTEgPCAyID8gMCA6IDExIC0gc29tYSAlIDExO1xyXG5cdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgxKSkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IElzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaXMudHMiLCJleHBvcnQgbmFtZXNwYWNlIFJlZmxlY3Rpb24ge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBtZXJnZShiYXNlOiBhbnksIHNvdXJjZTogYW55KTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IGkgaW4gc291cmNlKSB7XHJcblx0XHRcdGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHRcdFx0XHRiYXNlW2ldID0gc291cmNlW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlZmxlY3Rpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWZsZWN0aW9uLnRzIiwiZXhwb3J0IGNsYXNzIFVybCB7XHJcblx0cHVibGljIFF1ZXJ5TGlzdD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHRwcml2YXRlIHN0YXRpY1BhdGg/OiBzdHJpbmcgfCBudWxsO1xyXG5cdHByaXZhdGUgc3RhdGljUXVlcnk/OiBzdHJpbmcgfCBudWxsO1xyXG5cdHByaXZhdGUgc3RhdGljSGFzaD86IHN0cmluZyB8IG51bGw7XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xyXG5cdFx0dGhpcy5zdGF0aWNQYXRoID0gdXJsLnNwbGl0KFwiI1wiKVswXS5zcGxpdChcIj9cIilbMF07XHJcblx0XHR0aGlzLnN0YXRpY1F1ZXJ5ID0gdXJsLmluZGV4T2YoXCI/XCIpID4gLTEgPyB1cmwuc3BsaXQoXCI/XCIpWzFdLnNwbGl0KFwiI1wiKVswXSA6IG51bGw7XHJcblx0XHR0aGlzLnN0YXRpY0hhc2ggPSB1cmwuc3BsaXQoXCIjXCIpWzFdIHx8IG51bGw7XHJcblx0XHQvLyBxdWVyeUxpc3RcclxuXHRcdGlmICh0aGlzLnN0YXRpY1F1ZXJ5ICE9IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcXVlcnlLZXlWYWx1ZUxpc3Q6IHN0cmluZ1tdID0gdGhpcy5zdGF0aWNRdWVyeS5zcGxpdChcIiZcIik7XHJcblx0XHRcdHF1ZXJ5S2V5VmFsdWVMaXN0LmZvckVhY2goKHF1ZXJ5S2V5VmFsdWUpID0+IHtcclxuXHRcdFx0XHRjb25zdCBrZXlWYWx1ZTogc3RyaW5nW10gPSBxdWVyeUtleVZhbHVlLnNwbGl0KFwiPVwiKTtcclxuXHRcdFx0XHRjb25zdCBrZXk6IHN0cmluZyA9IGtleVZhbHVlWzBdO1xyXG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBrZXlWYWx1ZVsxXTtcclxuXHRcdFx0XHR0aGlzLlF1ZXJ5TGlzdFtrZXldID0gdmFsdWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgc2V0UXVlcnkoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBVcmwge1xyXG5cdFx0dGhpcy5RdWVyeUxpc3Rba2V5XSA9IHZhbHVlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXRRdWVyaWVzKHZhbHVlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSApOiBVcmwge1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdmFsdWVzW2tleV0gIT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dGhpcy5RdWVyeUxpc3Rba2V5XSA9IHZhbHVlc1trZXldLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVsZXRlUXVlcnkoa2V5OiBzdHJpbmcpOiBVcmwge1xyXG5cdFx0dGhpcy5RdWVyeUxpc3Rba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdGRlbGV0ZSB0aGlzLlF1ZXJ5TGlzdFtrZXldO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRRdWVyeShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5RdWVyeUxpc3Rba2V5XTtcclxuXHR9XHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcblx0XHRsZXQgcXVlcnlMZW5ndGg6IG51bWJlciA9IE9iamVjdC5rZXlzKHRoaXMuUXVlcnlMaXN0KS5sZW5ndGg7XHJcblx0XHRsZXQgcXVlcnk6IHN0cmluZyA9IChPYmplY3Qua2V5cyh0aGlzLlF1ZXJ5TGlzdCkubGVuZ3RoID4gMCA/IFwiP1wiIDogXCJcIik7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLlF1ZXJ5TGlzdCkge1xyXG5cdFx0XHRpZiAodGhpcy5RdWVyeUxpc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdHF1ZXJ5TGVuZ3RoLS07XHJcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLlF1ZXJ5TGlzdFtrZXldO1xyXG5cdFx0XHRcdHF1ZXJ5ID0gcXVlcnkgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG5cdFx0XHRcdGlmIChxdWVyeUxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHF1ZXJ5ID0gcXVlcnkgKyBcIiZcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnN0YXRpY1BhdGggKyBxdWVyeSArICh0aGlzLnN0YXRpY0hhc2ggPyB0aGlzLnN0YXRpY0hhc2ggOiBcIlwiKTtcclxuXHR9XHJcbn1cclxuLy8gZXhwb3J0IG5hbWVzcGFjZSBVcmwge1xyXG4vLyBcdC8vXHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgVXJsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXJsLnRzIiwiZXhwb3J0IG5hbWVzcGFjZSBMaXN0IHtcclxuXHQvLyByZW1vdmUgaXRlbSBmcm9tIGxpc3QgaWYgZXhpc3RcclxuXHRleHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUluZGV4PFQ+KGxpc3Q6IFRbXSwgaW5kZXg6IG51bWJlcik6IFRbXSB7XHJcblx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRyZXR1cm4gbGlzdDtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW08VD4obGlzdDogVFtdLCBpdGVtOiBUKTogVFtdIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0bGV0IG5ld0xpc3Q6IFRbXTtcclxuXHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdG5ld0xpc3QgPSByZW1vdmVGcm9tSW5kZXgobGlzdCwgaW5kZXgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmV3TGlzdCA9IGxpc3Q7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3TGlzdDtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW08VD4obGlzdDogVFtdLCBpdGVtOiBUKTogVFtdIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0aWYgKGluZGV4IDwgMCkge1xyXG5cdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGlzdDtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpc3QudHMiLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL2V2ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9TQ1JPTExBQkxFID0gXCJkYXRhLXNjcm9sbGFibGVcIjtcclxuZXhwb3J0IGNvbnN0IENMQVNTX0ZPQ1VTID0gXCJzY3JvbGwtLWFjdGl2ZVwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFNjcm9sbFN3aXRjaCB7XHJcblx0bGV0IHVuZnJlZXplRGVsYXk6IG51bWJlcjtcclxuXHRleHBvcnQgY2xhc3MgU2Nyb2xsYWJsZSB7XHJcblx0XHRwcml2YXRlIGlkOiBzdHJpbmc7XHJcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHRcdHByaXZhdGUgeTogbnVtYmVyID0gMDtcclxuXHRcdHByaXZhdGUgZnJvemVuOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRwcml2YXRlIHVuZnJlZXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0XHRcdGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfU0NST0xMQUJMRSkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRoaXMuaWQgPSBuZXdTY3JvbGxhYmxlSWQoKTtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKERBVEFfU0NST0xMQUJMRSwgdGhpcy5pZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pZCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9TQ1JPTExBQkxFKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyByZWdpc3RlciBldmVudFxyXG5cdFx0XHRjb25zdCB1bmZyZWV6ZUV2ZW50ID0gKGU6IEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHdpbmRvdy5zY3JvbGxZKTtcclxuXHRcdFx0XHR0aGlzLnVuZnJlZXplKCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IGZyZWV6ZUFsbEV2ZW50ID0gKGU6IEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZnJlZXplQWxsQnV0SWQobnVsbCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdW5mcmVlemVFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB1bmZyZWV6ZUV2ZW50LCBFdmVudC5wYXNzaXZlKCkpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB1bmZyZWV6ZUV2ZW50LCBFdmVudC5wYXNzaXZlKCkpO1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZyZWV6ZUFsbEV2ZW50LCBFdmVudC5wYXNzaXZlKCkpO1xyXG5cdFx0fVxyXG5cdFx0cHVibGljIGdldElkKCk6IHN0cmluZyB7XHJcblx0XHRcdHJldHVybiB0aGlzLmlkO1xyXG5cdFx0fVxyXG5cdFx0cHVibGljIHVuZnJlZXplKCkge1xyXG5cdFx0XHRpZiAodGhpcy5mcm96ZW4gJiYgIXRoaXMudW5mcmVlemluZykge1xyXG5cdFx0XHRcdHRoaXMudW5mcmVlemluZyA9IHRydWU7XHJcblx0XHRcdFx0ZnJlZXplQWxsQnV0SWQodGhpcy5pZCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsKDAsIHRoaXMueSk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgei1pbmRleDogJHt0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4fTsgYCk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfRk9DVVMpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuXHRcdFx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0XHRcdHRoaXMuZnJvemVuID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy51bmZyZWV6aW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dW5mcmVlemVEZWxheSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cHVibGljIGZyZWV6ZSgpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmZyb3plbikge1xyXG5cdFx0XHRcdHRoaXMueSA9IHdpbmRvdy5zY3JvbGxZICsgMDtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAtJHt0aGlzLnl9cHg7IHotaW5kZXg6ICR7dGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleH07IGApO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0ZPQ1VTKTtcclxuXHRcdFx0XHR0aGlzLmZyb3plbiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3Qgc3RvcmU6IHsgW2tleTogc3RyaW5nXTogU2Nyb2xsYWJsZSB9ID0ge307XHJcblx0bGV0IGxhc3RJZDogbnVtYmVyID0gMTtcclxuXHRmdW5jdGlvbiBuZXdTY3JvbGxhYmxlSWQoKTogc3RyaW5nIHtcclxuXHRcdGxhc3RJZCA9IGxhc3RJZCArIDE7XHJcblx0XHRyZXR1cm4gbGFzdElkLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGlkZW50aWZ5RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFNjcm9sbGFibGUge1xyXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHRcdGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfU0NST0xMQUJMRSk7XHJcblx0XHRjb25zdCBzdG9yZWQgPSAoaWQgIT09IHVuZGVmaW5lZCkgPyAoc3RvcmVbaWRdICE9PSB1bmRlZmluZWQpIDogZmFsc2U7XHJcblx0XHRpZiAoc3RvcmVkKSB7XHJcblx0XHRcdHJldHVybiBzdG9yZVtpZF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBzID0gbmV3IFNjcm9sbGFibGUoZWxlbWVudCk7XHJcblx0XHRcdGlkID0gcy5nZXRJZCgpO1xyXG5cdFx0XHRzdG9yZVtpZF0gPSBzO1xyXG5cdFx0XHRyZXR1cm4gc3RvcmVbaWRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gZnJlZXplRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc2Nyb2xsID0gaWRlbnRpZnlFbGVtZW50KGVsZW1lbnQpO1xyXG5cdFx0aWYgKHNjcm9sbCAhPT0gbnVsbCkge1xyXG5cdFx0XHRzY3JvbGwuZnJlZXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmcmVlemVBbGxCdXRJZChpZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcclxuXHRcdGZvciAoY29uc3QgaSBpbiBzdG9yZSkge1xyXG5cdFx0XHRpZiAoaSAhPT0gaWQpIHtcclxuXHRcdFx0XHRzdG9yZVtpXS5mcmVlemUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gZnJlZXplQWxsQnV0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc2Nyb2xsID0gaWRlbnRpZnlFbGVtZW50KGVsZW1lbnQpO1xyXG5cdFx0aWYgKHNjcm9sbCAhPT0gbnVsbCkge1xyXG5cdFx0XHRmcmVlemVBbGxCdXRJZChzY3JvbGwuZ2V0SWQoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiB1bmZyZWV6ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuXHRcdGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuXHRcdFx0c2Nyb2xsLnVuZnJlZXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFN3aXRjaDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njcm9sbC1zd2l0Y2gudHMiXSwic291cmNlUm9vdCI6IiJ9