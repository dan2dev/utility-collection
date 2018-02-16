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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return String; });
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
})(String || (String = {}));
/* harmony default export */ __webpack_exports__["b"] = (String);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
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
})(Event || (Event = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (Event);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityCollection", function() { return UtilityCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Is", function() { return __WEBPACK_IMPORTED_MODULE_1__is__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__string__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "String", function() { return __WEBPACK_IMPORTED_MODULE_2__string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reflection__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Reflection", function() { return __WEBPACK_IMPORTED_MODULE_3__reflection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return __WEBPACK_IMPORTED_MODULE_4__url__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_5__list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_switch__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DATA_SCROLLABLE", function() { return __WEBPACK_IMPORTED_MODULE_6__scroll_switch__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CLASS_FOCUS", function() { return __WEBPACK_IMPORTED_MODULE_6__scroll_switch__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollSwitch", function() { return __WEBPACK_IMPORTED_MODULE_6__scroll_switch__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["a"]; });








var UtilityCollection;
(function (UtilityCollection) {
    const name = "UtilityCollection";
})(UtilityCollection || (UtilityCollection = {}));
/* harmony default export */ __webpack_exports__["default"] = (UtilityCollection);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dom; });
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
})(Dom || (Dom = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (Dom);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Is; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(0);
// import moment from "moment";

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
        value = __WEBPACK_IMPORTED_MODULE_0__string__["b" /* default */].stripNonNumber(value);
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
        value = __WEBPACK_IMPORTED_MODULE_0__string__["b" /* default */].stripNonNumber(value);
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
})(Is || (Is = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (Is);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reflection; });
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
    function fill(target, source) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const element = source[key];
                target[key] = element;
            }
        }
        return target;
    }
    Reflection.fill = fill;
})(Reflection || (Reflection = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (Reflection);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Url;

// export namespace Url {
// 	//
// }
/* unused harmony default export */ var _unused_webpack_default_export = (Url);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
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
})(List || (List = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (List);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ScrollSwitch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(1);

const DATA_SCROLLABLE = "data-scrollable";
/* harmony export (immutable) */ __webpack_exports__["b"] = DATA_SCROLLABLE;

const CLASS_FOCUS = "scroll--active";
/* harmony export (immutable) */ __webpack_exports__["a"] = CLASS_FOCUS;

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
            if (this.element.getAttribute(DATA_SCROLLABLE) === undefined) {
                this.id = newScrollableId();
                this.element.setAttribute(DATA_SCROLLABLE, this.id);
            }
            else {
                this.id = this.element.getAttribute(DATA_SCROLLABLE);
            }
            // register event
            const unfreezeEvent = (e) => {
                window.scrollTo(0, window.scrollY);
                this.unfreeze();
            };
            const freezeAllEvent = (e) => {
                freezeAllButId(null);
            };
            element.addEventListener("touchstart", unfreezeEvent, __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */].passive());
            element.addEventListener("mouseenter", unfreezeEvent, __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */].passive());
            element.addEventListener("pointermove", unfreezeEvent, __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */].passive());
            element.addEventListener("mouseleave", freezeAllEvent, __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */].passive());
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
                this.element.classList.add(CLASS_FOCUS);
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
                this.element.classList.remove(CLASS_FOCUS);
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
        let id = element.getAttribute(DATA_SCROLLABLE);
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
})(ScrollSwitch || (ScrollSwitch = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (ScrollSwitch);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODIyOWRlM2UwODYyZmYyNjY4MDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nyb2xsLXN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdETSxJQUFXLE1BQU0sQ0FZdEI7QUFaRCxXQUFpQixNQUFNO0lBQ3RCLG9CQUEyQixLQUFhLEVBQUUsTUFBYyxFQUFFLFdBQW1CO1FBQzVFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRmUsaUJBQVUsYUFFekI7SUFDRCxtQkFBMEIsSUFBWTtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFD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LENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUM7UUFDUixDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNSLENBQUM7UUFDRixDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNSLENBQUM7UUFDRixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxFQUFFLEVBQUUsQ0FBQztRQUNOLENBQUM7UUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFD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LDRCQUFlLGtCQUs5QjtBQUNGLENBQUMsRUF0R2dCLFlBQVksS0FBWixZQUFZLFFBc0c1QjtBQUNELDBFQUFlLFlBQVksRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MjI5ZGUzZTA4NjJmZjI2NjgwOSIsImV4cG9ydCBuYW1lc3BhY2UgU3RyaW5nIHtcclxuXHRleHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbCh2YWx1ZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgcmVwbGFjZW1lbnQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHZhbHVlLnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBwYXRoQXJyYXkocGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cdFx0cmV0dXJuIHBhdGguc3BsaXQoXCIuXCIpO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHN0cmlwTm9uTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0cmluZy50cyIsImV4cG9ydCBuYW1lc3BhY2UgRXZlbnQge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBvbmNlKHRhcmdldDogTm9kZSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCBmbiA9IChldjogYW55KSA9PiB7XHJcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHRcdFx0bGlzdGVuZXIoZXYpO1xyXG5cdFx0fTtcclxuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0OiBOb2RlLCB0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IGZuID0gKGV2OiBhbnkpID0+IHtcclxuXHRcdFx0bGlzdGVuZXIoZXYpO1xyXG5cdFx0fTtcclxuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHR9XHJcblx0Ly8gcGFzc2l2ZSBzdXBwb3J0ZWRcclxuXHRjb25zdCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHBhc3NpdmUoKTogYW55IHtcclxuXHRcdHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xyXG5cdH1cclxuXHQoZnVuY3Rpb24gSW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIGRldGVjdCBpZiBzdXBvcnQgcGFzc2l2ZSBldmVudFxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcclxuXHRcdFx0XHRnZXQ6ICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRpb25zKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHQvL1xyXG5cdFx0fVxyXG5cdH0pKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC50cyIsImV4cG9ydCAqIGZyb20gXCIuL2RvbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmVmbGVjdGlvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91cmxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zY3JvbGwtc3dpdGNoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2V2ZW50XCI7XHJcbmV4cG9ydCBuYW1lc3BhY2UgVXRpbGl0eUNvbGxlY3Rpb24ge1xyXG5cdGNvbnN0IG5hbWU6IHN0cmluZyA9IFwiVXRpbGl0eUNvbGxlY3Rpb25cIjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBVdGlsaXR5Q29sbGVjdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCJleHBvcnQgbmFtZXNwYWNlIERvbSB7XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGluc2VydEJlZm9yZShlbGVtZW50OiBOb2RlLCB0YXJnZXRFbGVtZW50OiBOb2RlKTogdm9pZCB7XHJcblx0XHR0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoZWxlbWVudDogTm9kZSwgdGFyZ2V0RWxlbWVudDogTm9kZSk6IHZvaWQge1xyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0aWYgKHBhcmVudC5sYXN0Q2hpbGQgPT09IHRhcmdldEVsZW1lbnQpIHtcclxuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShlbGVtZW50LCB0YXJnZXRFbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50OiBOb2RlKTogdm9pZCB7XHJcblx0XHRpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb05vZGUoaHRtbDogc3RyaW5nIHwgRWxlbWVudCk6IE5vZGUge1xyXG5cdFx0aWYgKGh0bWwgaW5zdGFuY2VvZiBOb2RlKSB7XHJcblx0XHRcdHJldHVybiBodG1sO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgbm9kZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRub2RlLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdHJldHVybiBub2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbDogc3RyaW5nIHwgRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuXHRcdHJldHVybiBodG1sVG9Ob2RlKGh0bWwpIGFzIEhUTUxFbGVtZW50O1xyXG5cdH1cclxuXHQvLyBhdHJpYnV0ZXMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQgfCBOb2RlKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0ge1xyXG5cdFx0Y29uc3QgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcblx0XHRjb25zdCBuZXdBdHRyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXdBdHRyW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXR0cjtcclxuXHR9XHJcblxyXG5cdC8vIExvb3BzIGUgZ2lyb3MgcGVsbyBkb20gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRleHBvcnQgZnVuY3Rpb24gY2hpbGRFbGVtZW50KG5vZGU6IEVsZW1lbnQsIGVhY2g6IChub2RlOiBFbGVtZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcblx0XHRsZXQgY2hpbGQ6IE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHR3aGlsZSAoY2hpbGQpIHtcclxuXHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XHJcblx0XHRcdFx0ZWFjaChjaGlsZCBhcyBFbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gZWxlbWVudCBkb3duIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIG5vZGVEb3duKG5vZGU6IE5vZGUgfCBOb2RlLCBlYWNoOiAobm9kZTogTm9kZSB8IE5vZGUsIHBhcmVudD86IE5vZGUgfCBOb2RlKSA9PiB2b2lkIHwgYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKGVhY2gobm9kZSwgdW5kZWZpbmVkKSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5jaGlsZE5vZGVEb3duKG5vZGUsIGVhY2gpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTm9kZURvd24obm9kZTogTm9kZSwgZWFjaDogKG5vZGU6IE5vZGUsIHBhcmVudD86IE5vZGUpID0+IHZvaWQgfCBib29sZWFuKTogdm9pZCB7XHJcblx0XHRjb25zdCBwYXJlbnQ6IE5vZGUgPSBub2RlO1xyXG5cdFx0bGV0IGNoaWxkOiBOb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0d2hpbGUgKGNoaWxkKSB7XHJcblx0XHRcdGNvbnN0IGVhY2hSZXR1cm46IGJvb2xlYW4gfCB2b2lkID0gZWFjaChjaGlsZCwgcGFyZW50KTtcclxuXHRcdFx0aWYgKGVhY2hSZXR1cm4gIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0dGhpcy5jaGlsZE5vZGVEb3duKGNoaWxkLCBlYWNoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnREb3duKG5vZGU6IEVsZW1lbnQsIGVhY2g6IChub2RlOiBFbGVtZW50LCBwYXJlbnQ/OiBFbGVtZW50KSA9PiB2b2lkIHwgYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKGVhY2gobm9kZSwgdW5kZWZpbmVkKSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5jaGlsZEVsZW1lbnREb3duKG5vZGUsIGVhY2gpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNoaWxkRWxlbWVudERvd24obm9kZTogRWxlbWVudCwgZWFjaDogKG5vZGU6IEhUTUxFbGVtZW50LCBwYXJlbnQ/OiBIVE1MRWxlbWVudCkgPT4gdm9pZCB8IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGNvbnN0IHBhcmVudDogRWxlbWVudCA9IG5vZGU7XHJcblx0XHRsZXQgY2hpbGQ6IE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHR3aGlsZSAoY2hpbGQpIHtcclxuXHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XHJcblx0XHRcdFx0Y29uc3QgZWFjaFJldHVybjogYm9vbGVhbiB8IHZvaWQgPSBlYWNoKGNoaWxkIGFzIEhUTUxFbGVtZW50LCBwYXJlbnQgYXMgSFRNTEVsZW1lbnQpO1xyXG5cdFx0XHRcdGlmIChlYWNoUmV0dXJuICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jaGlsZEVsZW1lbnREb3duKGNoaWxkIGFzIEhUTUxFbGVtZW50LCBlYWNoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGVsZW1lbnQgdXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRleHBvcnQgZnVuY3Rpb24gZWxlbWVudFVwKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCwgZWFjaDogKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbiB8IHZvaWQpOiB2b2lkIHtcclxuXHRcdGlmIChlYWNoKG5vZGUpICE9PSBmYWxzZSkge1xyXG5cdFx0XHRwYXJlbnRFbGVtZW50VXAobm9kZSwgZWFjaCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gcGFyZW50RWxlbWVudFVwKG5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IE5vZGUsIGVhY2g6IChub2RlOiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgfCBOb2RlKSA9PiBib29sZWFuIHwgdm9pZCk6IHZvaWQge1xyXG5cdFx0bGV0IHJldG9ybm86IGJvb2xlYW4gfCB2b2lkID0gdHJ1ZTtcclxuXHRcdGxldCBjdXJyZW50OiBFbGVtZW50IHwgTm9kZSA9IChub2RlIGFzIE5vZGUpLnBhcmVudE5vZGU7XHJcblx0XHRkbyB7XHJcblx0XHRcdHJldG9ybm8gPSBlYWNoKGN1cnJlbnQpO1xyXG5cdFx0XHRjdXJyZW50ID0gKGN1cnJlbnQgYXMgTm9kZSkucGFyZW50Tm9kZTtcclxuXHRcdH0gd2hpbGUgKHJldG9ybm8gIT09IGZhbHNlICYmIGN1cnJlbnQgIT09IG51bGwgJiYgY3VycmVudCAhPT0gdW5kZWZpbmVkICYmIG5vZGUubm9kZU5hbWUgIT09IFwiQk9EWVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIGRvbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGUoZWxlbWVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50IHwgTm9kZSwgZWFjaDogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPOiB0aGlzIHN0aWxsIG5lZWQgdG8gYmUgdGVzdGVkXHJcblx0XHRjb25zdCBhdHRyaWJ1dGVzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGVhY2goYXR0cmlidXRlc1tpXS5uYW1lLCBhdHRyaWJ1dGVzW2ldLnZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaW5kTmV4dFNpYmxpbmcodGFyZ2V0OiBOb2RlIHwgTm9kZSwgdmFsaWRhdGlvbjogKG5vZGU6IE5vZGUgfCBOb2RlKSA9PiBib29sZWFuIHwgdm9pZCk6IE5vZGUgfCBOb2RlIHtcclxuXHRcdGxldCBjdXJyZW50OiBOb2RlIHwgTm9kZSA9IHRhcmdldC5uZXh0U2libGluZztcclxuXHRcdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGlmICh2YWxpZGF0aW9uKGN1cnJlbnQpID09PSB0cnVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcmV2U2libGluZyh0YXJnZXQ6IE5vZGUgfCBOb2RlLCB2YWxpZGF0aW9uOiAobm9kZTogTm9kZSB8IE5vZGUpID0+IGJvb2xlYW4gfCB2b2lkKTogTm9kZSB8IE5vZGUge1xyXG5cdFx0bGV0IGN1cnJlbnQ6IE5vZGUgfCBOb2RlID0gdGFyZ2V0LnByZXZpb3VzU2libGluZztcclxuXHRcdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdGlmICh2YWxpZGF0aW9uKGN1cnJlbnQpID09PSB0cnVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNTaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsU2libGluZ3ModGFyZ2V0OiBOb2RlKTogTm9kZVtdIHtcclxuXHRcdGNvbnN0IHNpYmxpbmdzOiBOb2RlW10gPSBbXTtcclxuXHRcdGZpbmRQcmV2U2libGluZyh0YXJnZXQsIChub2RlKSA9PiB7XHJcblx0XHRcdHNpYmxpbmdzLnB1c2gobm9kZSk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0ZmluZE5leHRTaWJsaW5nKHRhcmdldCwgKG5vZGUpID0+IHtcclxuXHRcdFx0c2libGluZ3MucHVzaChub2RlKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc2libGluZ3M7XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gcHJlcGVuZENoaWxkKHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZmlyc3RDaGlsZDogTm9kZSA9IHBhcmVudC5maXJzdENoaWxkO1xyXG5cdFx0aWYgKGZpcnN0Q2hpbGQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZTxIVE1MRWxlbWVudD4oY2hpbGQsIGZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGQocGFyZW50OiBIVE1MRWxlbWVudCwgY2hpbGQ6IEhUTUxFbGVtZW50KSB7XHJcblx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KG9sZEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBuZXdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cdFx0b2xkRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBzd2FwTm9kZXMobjE6IEhUTUxFbGVtZW50LCBuMjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGxldCBpMTogYW55O1xyXG5cdFx0bGV0IGkyOiBhbnk7XHJcblx0XHRsZXQgcDEgPSBuMS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0bGV0IHAyID0gbjIucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdGlmIChwMSA9PT0gdW5kZWZpbmVkIHx8IHAxID09PSBudWxsKSB7XHJcblx0XHRcdHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0cDEuYXBwZW5kQ2hpbGQobjEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHAyID09PSB1bmRlZmluZWQgfHwgcDIgPT09IG51bGwpIHtcclxuXHRcdFx0cDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRwMi5hcHBlbmRDaGlsZChuMik7XHJcblx0XHR9XHJcblx0XHRpZiAoIXAxIHx8ICFwMiB8fCBwMS5pc0VxdWFsTm9kZShuMikgfHwgcDIuaXNFcXVhbE5vZGUobjEpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwMS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAocDEuY2hpbGRyZW5baV0uaXNFcXVhbE5vZGUobjEpKSB7XHJcblx0XHRcdFx0aTEgPSBpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHAyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChwMi5jaGlsZHJlbltpXS5pc0VxdWFsTm9kZShuMikpIHtcclxuXHRcdFx0XHRpMiA9IGk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocDEuaXNFcXVhbE5vZGUocDIpICYmIGkxIDwgaTIpIHtcclxuXHRcdFx0aTIrKztcclxuXHRcdH1cclxuXHRcdHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcclxuXHRcdHAyLmluc2VydEJlZm9yZShuMSwgcDIuY2hpbGRyZW5baTJdKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERvbTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RvbS50cyIsIi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgU3RyaW5nIGZyb20gXCIuL3N0cmluZ1wiO1xyXG5cclxuLy8gY29uc29sZS5sb2coXCItLT4gb2tcIik7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIElzIHtcclxuXHRleHBvcnQgZnVuY3Rpb24gbW9iaWxlKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gaXMgbnVsbCBvciB1bmRlZmluZWRcclxuXHRleHBvcnQgZnVuY3Rpb24gbnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBpZCBlbXB0eVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBlbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gaXMgTnVtYmVyXHJcblx0Y29uc3QgbnVtYmVyUmVnZXg6IFJlZ0V4cCA9IC9cXEQvO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBudW1iZXIodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICFudW1iZXJSZWdleC50ZXN0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIGlzIExldHRlclxyXG5cdGNvbnN0IGxldHRlclJlZ2V4OiBSZWdFeHAgPSAvW2EtekEtWl0vO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGxldHRlclJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9tO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBlbWFpbCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gZW1haWxSZWdleC50ZXN0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIGJyYXppbGlhbiB2YWxpZGF0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gcGhvbmVcclxuXHRjb25zdCBicmF6aWxpYW5QaG9uZVJlZ2V4ID0gL14oPzooPzpcXCspWzAtOV17Mn1cXHM/KXswLDF9KD86XFwoKVswLTldezJ9KD86XFwpKVxccz9bMC05XXswLDF9XFxzP1swLTldezQsfSg/Oi0pWzAtOV17NH0kL207XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGJyYXppbGlhblBob25lKHBob25lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBicmF6aWxpYW5QaG9uZVJlZ2V4LnRlc3QocGhvbmUpO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gZGRtbXl5eXkoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdFx0Ly8gcmV0dXJuIG1vbWVudChkYXRlLCBcIkREL01NL1lZWVlcIiwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gbW1kZHl5eXkoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdFx0Ly8gcmV0dXJuIG1vbWVudChkYXRlLCBcIk1NL0REL1lZWVlcIiwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ1BGXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNwZih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR2YWx1ZSA9IFN0cmluZy5zdHJpcE5vbk51bWJlcih2YWx1ZSk7XHJcblx0XHRsZXQgbnVtZXJvczogc3RyaW5nO1xyXG5cdFx0bGV0IGRpZ2l0b3M6IGFueTtcclxuXHRcdGxldCBzb21hOiBudW1iZXI7XHJcblx0XHRsZXQgaTogYW55O1xyXG5cdFx0bGV0IHJlc3VsdGFkbzogYW55O1xyXG5cdFx0bGV0IGRpZ2l0b3NfaWd1YWlzOiBhbnk7XHJcblx0XHRkaWdpdG9zX2lndWFpcyA9IDE7XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoIDwgMTEpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRpZiAodmFsdWUuY2hhckF0KGkpICE9PSB2YWx1ZS5jaGFyQXQoaSArIDEpKSB7XHJcblx0XHRcdFx0ZGlnaXRvc19pZ3VhaXMgPSAwO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIWRpZ2l0b3NfaWd1YWlzKSB7XHJcblx0XHRcdG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgOSk7XHJcblx0XHRcdGRpZ2l0b3MgPSB2YWx1ZS5zdWJzdHJpbmcoOSk7XHJcblx0XHRcdHNvbWEgPSAwO1xyXG5cdFx0XHRmb3IgKGkgPSAxMDsgaSA+IDE7IGktLSkge1xyXG5cdFx0XHRcdHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCgxMCAtIGkpKSAqIGk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuXHRcdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgwKSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0bnVtZXJvcyA9IHZhbHVlLnN1YnN0cmluZygwLCAxMCk7XHJcblx0XHRcdHNvbWEgPSAwO1xyXG5cdFx0XHRmb3IgKGkgPSAxMTsgaSA+IDE7IGktLSkge1xyXG5cdFx0XHRcdHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCgxMSAtIGkpKSAqIGk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuXHRcdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgxKSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIENOUEpcclxuXHRmdW5jdGlvbiBjbnBqKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHZhbHVlID0gU3RyaW5nLnN0cmlwTm9uTnVtYmVyKHZhbHVlKTtcclxuXHJcblx0XHRsZXQgdGFtYW5obzogbnVtYmVyO1xyXG5cdFx0bGV0IG51bWVyb3M6IHN0cmluZztcclxuXHRcdGxldCBkaWdpdG9zOiBzdHJpbmc7XHJcblx0XHRsZXQgc29tYTogbnVtYmVyO1xyXG5cdFx0bGV0IHBvczogbnVtYmVyO1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcZF0rL2csIFwiXCIpO1xyXG5cdFx0aWYgKHZhbHVlID09PSBcIlwiKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCAhPT0gMTQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdFx0Ly8gRWxpbWluYSBDTlBKcyBpbnZhbGlkb3MgY29uaGVjaWRvc1xyXG5cdFx0aWYgKHZhbHVlID09PSBcIjAwMDAwMDAwMDAwMDAwXCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiMTExMTExMTExMTExMTFcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCIyMjIyMjIyMjIyMjIyMlwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjMzMzMzMzMzMzMzMzMzXCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiNDQ0NDQ0NDQ0NDQ0NDRcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCI1NTU1NTU1NTU1NTU1NVwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjY2NjY2NjY2NjY2NjY2XCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiNzc3Nzc3Nzc3Nzc3NzdcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCI4ODg4ODg4ODg4ODg4OFwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjk5OTk5OTk5OTk5OTk5XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyBWYWxpZGEgRFZzXHJcblx0XHR0YW1hbmhvID0gdmFsdWUubGVuZ3RoIC0gMjtcclxuXHRcdG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdGFtYW5obyk7XHJcblx0XHRkaWdpdG9zID0gdmFsdWUuc3Vic3RyaW5nKHRhbWFuaG8pO1xyXG5cdFx0c29tYSA9IDA7XHJcblx0XHRwb3MgPSB0YW1hbmhvIC0gNztcclxuXHRcdGZvciAobGV0IGkgPSB0YW1hbmhvOyBpID49IDE7IGktLSkge1xyXG5cdFx0XHRzb21hICs9ICsobnVtZXJvcy5jaGFyQXQodGFtYW5obyAtIGkpKSAqIHBvcy0tO1xyXG5cdFx0XHRpZiAocG9zIDwgMikge1xyXG5cdFx0XHRcdHBvcyA9IDk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGxldCByZXN1bHRhZG86IG51bWJlciA9IHNvbWEgJSAxMSA8IDIgPyAwIDogMTEgLSBzb21hICUgMTE7XHJcblx0XHRpZiAocmVzdWx0YWRvICE9PSArKGRpZ2l0b3MuY2hhckF0KDApKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGFtYW5obyA9IHRhbWFuaG8gKyAxO1xyXG5cdFx0bnVtZXJvcyA9IHZhbHVlLnN1YnN0cmluZygwLCB0YW1hbmhvKTtcclxuXHRcdHNvbWEgPSAwO1xyXG5cdFx0cG9zID0gdGFtYW5obyAtIDc7XHJcblx0XHRmb3IgKGxldCBpID0gdGFtYW5obzsgaSA+PSAxOyBpLS0pIHtcclxuXHRcdFx0c29tYSArPSArKG51bWVyb3MuY2hhckF0KHRhbWFuaG8gLSBpKSkgKiBwb3MtLTtcclxuXHRcdFx0aWYgKHBvcyA8IDIpIHtcclxuXHRcdFx0XHRwb3MgPSA5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXN1bHRhZG8gPSBzb21hICUgMTEgPCAyID8gMCA6IDExIC0gc29tYSAlIDExO1xyXG5cdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgxKSkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IElzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaXMudHMiLCJleHBvcnQgbmFtZXNwYWNlIFJlZmxlY3Rpb24ge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBtZXJnZShiYXNlOiBhbnksIHNvdXJjZTogYW55KTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IGkgaW4gc291cmNlKSB7XHJcblx0XHRcdGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHRcdFx0XHRiYXNlW2ldID0gc291cmNlW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaWxsPFQgZXh0ZW5kcyB7W2tleTogc3RyaW5nXTogYW55IH0+KHRhcmdldDogVCwgc291cmNlOiBhbnkpOiBUIHtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG5cdFx0XHRpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gc291cmNlW2tleV07XHJcblx0XHRcdFx0dGFyZ2V0W2tleV0gPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWZsZWN0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVmbGVjdGlvbi50cyIsImV4cG9ydCBjbGFzcyBVcmwge1xyXG5cdHB1YmxpYyBRdWVyeUxpc3Q/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblx0cHJpdmF0ZSBzdGF0aWNQYXRoPzogc3RyaW5nIHwgbnVsbDtcclxuXHRwcml2YXRlIHN0YXRpY1F1ZXJ5Pzogc3RyaW5nIHwgbnVsbDtcclxuXHRwcml2YXRlIHN0YXRpY0hhc2g/OiBzdHJpbmcgfCBudWxsO1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRwdWJsaWMgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuc3RhdGljUGF0aCA9IHVybC5zcGxpdChcIiNcIilbMF0uc3BsaXQoXCI/XCIpWzBdO1xyXG5cdFx0dGhpcy5zdGF0aWNRdWVyeSA9IHVybC5pbmRleE9mKFwiP1wiKSA+IC0xID8gdXJsLnNwbGl0KFwiP1wiKVsxXS5zcGxpdChcIiNcIilbMF0gOiBudWxsO1xyXG5cdFx0dGhpcy5zdGF0aWNIYXNoID0gdXJsLnNwbGl0KFwiI1wiKVsxXSB8fCBudWxsO1xyXG5cdFx0Ly8gcXVlcnlMaXN0XHJcblx0XHRpZiAodGhpcy5zdGF0aWNRdWVyeSAhPSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHF1ZXJ5S2V5VmFsdWVMaXN0OiBzdHJpbmdbXSA9IHRoaXMuc3RhdGljUXVlcnkuc3BsaXQoXCImXCIpO1xyXG5cdFx0XHRxdWVyeUtleVZhbHVlTGlzdC5mb3JFYWNoKChxdWVyeUtleVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qga2V5VmFsdWU6IHN0cmluZ1tdID0gcXVlcnlLZXlWYWx1ZS5zcGxpdChcIj1cIik7XHJcblx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSBrZXlWYWx1ZVswXTtcclxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nID0ga2V5VmFsdWVbMV07XHJcblx0XHRcdFx0dGhpcy5RdWVyeUxpc3Rba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHNldFF1ZXJ5KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogVXJsIHtcclxuXHRcdHRoaXMuUXVlcnlMaXN0W2tleV0gPSB2YWx1ZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0UXVlcmllcyh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gKTogVXJsIHtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHZhbHVlcykge1xyXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlc1trZXldICE9PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWVzW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRoaXMuUXVlcnlMaXN0W2tleV0gPSB2YWx1ZXNba2V5XS50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGRlbGV0ZVF1ZXJ5KGtleTogc3RyaW5nKTogVXJsIHtcclxuXHRcdHRoaXMuUXVlcnlMaXN0W2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHRkZWxldGUgdGhpcy5RdWVyeUxpc3Rba2V5XTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0UXVlcnkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuUXVlcnlMaXN0W2tleV07XHJcblx0fVxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG5cdFx0bGV0IHF1ZXJ5TGVuZ3RoOiBudW1iZXIgPSBPYmplY3Qua2V5cyh0aGlzLlF1ZXJ5TGlzdCkubGVuZ3RoO1xyXG5cdFx0bGV0IHF1ZXJ5OiBzdHJpbmcgPSAoT2JqZWN0LmtleXModGhpcy5RdWVyeUxpc3QpLmxlbmd0aCA+IDAgPyBcIj9cIiA6IFwiXCIpO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy5RdWVyeUxpc3QpIHtcclxuXHRcdFx0aWYgKHRoaXMuUXVlcnlMaXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRxdWVyeUxlbmd0aC0tO1xyXG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5RdWVyeUxpc3Rba2V5XTtcclxuXHRcdFx0XHRxdWVyeSA9IHF1ZXJ5ICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuXHRcdFx0XHRpZiAocXVlcnlMZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRxdWVyeSA9IHF1ZXJ5ICsgXCImXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5zdGF0aWNQYXRoICsgcXVlcnkgKyAodGhpcy5zdGF0aWNIYXNoID8gdGhpcy5zdGF0aWNIYXNoIDogXCJcIik7XHJcblx0fVxyXG59XHJcbi8vIGV4cG9ydCBuYW1lc3BhY2UgVXJsIHtcclxuLy8gXHQvL1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IFVybDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VybC50cyIsImV4cG9ydCBuYW1lc3BhY2UgTGlzdCB7XHJcblx0Ly8gcmVtb3ZlIGl0ZW0gZnJvbSBsaXN0IGlmIGV4aXN0XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21JbmRleDxUPihsaXN0OiBUW10sIGluZGV4OiBudW1iZXIpOiBUW10ge1xyXG5cdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtPFQ+KGxpc3Q6IFRbXSwgaXRlbTogVCk6IFRbXSB7XHJcblx0XHRjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtKTtcclxuXHRcdGxldCBuZXdMaXN0OiBUW107XHJcblx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRuZXdMaXN0ID0gcmVtb3ZlRnJvbUluZGV4KGxpc3QsIGluZGV4KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5ld0xpc3QgPSBsaXN0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ld0xpc3Q7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtPFQ+KGxpc3Q6IFRbXSwgaXRlbTogVCk6IFRbXSB7XHJcblx0XHRjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHtcclxuXHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXN0LnRzIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfU0NST0xMQUJMRSA9IFwiZGF0YS1zY3JvbGxhYmxlXCI7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19GT0NVUyA9IFwic2Nyb2xsLS1hY3RpdmVcIjtcclxuZXhwb3J0IG5hbWVzcGFjZSBTY3JvbGxTd2l0Y2gge1xyXG5cdGxldCB1bmZyZWV6ZURlbGF5OiBudW1iZXI7XHJcblx0ZXhwb3J0IGNsYXNzIFNjcm9sbGFibGUge1xyXG5cdFx0cHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblx0XHRwcml2YXRlIHk6IG51bWJlciA9IDA7XHJcblx0XHRwcml2YXRlIGZyb3plbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0cHJpdmF0ZSB1bmZyZWV6aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUpID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR0aGlzLmlkID0gbmV3U2Nyb2xsYWJsZUlkKCk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUsIHRoaXMuaWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaWQgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfU0NST0xMQUJMRSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gcmVnaXN0ZXIgZXZlbnRcclxuXHRcdFx0Y29uc3QgdW5mcmVlemVFdmVudCA9IChlOiBFdmVudCkgPT4ge1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3cuc2Nyb2xsWSk7XHJcblx0XHRcdFx0dGhpcy51bmZyZWV6ZSgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBmcmVlemVBbGxFdmVudCA9IChlOiBFdmVudCkgPT4ge1xyXG5cdFx0XHRcdGZyZWV6ZUFsbEJ1dElkKG51bGwpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHVuZnJlZXplRXZlbnQsIEV2ZW50LnBhc3NpdmUoKSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdW5mcmVlemVFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdW5mcmVlemVFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmcmVlemVBbGxFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdH1cclxuXHRcdHB1YmxpYyBnZXRJZCgpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pZDtcclxuXHRcdH1cclxuXHRcdHB1YmxpYyB1bmZyZWV6ZSgpIHtcclxuXHRcdFx0aWYgKHRoaXMuZnJvemVuICYmICF0aGlzLnVuZnJlZXppbmcpIHtcclxuXHRcdFx0XHR0aGlzLnVuZnJlZXppbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGZyZWV6ZUFsbEJ1dElkKHRoaXMuaWQpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbCgwLCB0aGlzLnkpO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHotaW5kZXg6ICR7dGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleH07IGApO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX0ZPQ1VTKTtcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcblx0XHRcdFx0dGhpcy55ID0gMDtcclxuXHRcdFx0XHR0aGlzLmZyb3plbiA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMudW5mcmVlemluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHVuZnJlZXplRGVsYXkgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHB1YmxpYyBmcmVlemUoKSB7XHJcblx0XHRcdGlmICghdGhpcy5mcm96ZW4pIHtcclxuXHRcdFx0XHR0aGlzLnkgPSB3aW5kb3cuc2Nyb2xsWSArIDA7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBwb3NpdGlvbjogZml4ZWQ7IHRvcDogLSR7dGhpcy55fXB4OyB6LWluZGV4OiAke3RoaXMuZWxlbWVudC5zdHlsZS56SW5kZXh9OyBgKTtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19GT0NVUyk7XHJcblx0XHRcdFx0dGhpcy5mcm96ZW4gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IHN0b3JlOiB7IFtrZXk6IHN0cmluZ106IFNjcm9sbGFibGUgfSA9IHt9O1xyXG5cdGxldCBsYXN0SWQ6IG51bWJlciA9IDE7XHJcblx0ZnVuY3Rpb24gbmV3U2Nyb2xsYWJsZUlkKCk6IHN0cmluZyB7XHJcblx0XHRsYXN0SWQgPSBsYXN0SWQgKyAxO1xyXG5cdFx0cmV0dXJuIGxhc3RJZC50b1N0cmluZygpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBpZGVudGlmeUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBTY3JvbGxhYmxlIHtcclxuXHRcdGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUpO1xyXG5cdFx0Y29uc3Qgc3RvcmVkID0gKGlkICE9PSB1bmRlZmluZWQpID8gKHN0b3JlW2lkXSAhPT0gdW5kZWZpbmVkKSA6IGZhbHNlO1xyXG5cdFx0aWYgKHN0b3JlZCkge1xyXG5cdFx0XHRyZXR1cm4gc3RvcmVbaWRdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgcyA9IG5ldyBTY3JvbGxhYmxlKGVsZW1lbnQpO1xyXG5cdFx0XHRpZCA9IHMuZ2V0SWQoKTtcclxuXHRcdFx0c3RvcmVbaWRdID0gcztcclxuXHRcdFx0cmV0dXJuIHN0b3JlW2lkXTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuXHRcdGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuXHRcdFx0c2Nyb2xsLmZyZWV6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gZnJlZXplQWxsQnV0SWQoaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IGkgaW4gc3RvcmUpIHtcclxuXHRcdFx0aWYgKGkgIT09IGlkKSB7XHJcblx0XHRcdFx0c3RvcmVbaV0uZnJlZXplKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZUFsbEJ1dEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuXHRcdGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuXHRcdFx0ZnJlZXplQWxsQnV0SWQoc2Nyb2xsLmdldElkKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gdW5mcmVlemVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcblx0XHRjb25zdCBzY3JvbGwgPSBpZGVudGlmeUVsZW1lbnQoZWxlbWVudCk7XHJcblx0XHRpZiAoc2Nyb2xsICE9PSBudWxsKSB7XHJcblx0XHRcdHNjcm9sbC51bmZyZWV6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTd2l0Y2g7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JvbGwtc3dpdGNoLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==