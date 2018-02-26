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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Is; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(1);
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return String; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(0);

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
    // -----------------
    const accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    const accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    function removeAccents(value) {
        if (__WEBPACK_IMPORTED_MODULE_0__is__["a" /* Is */].empty(value)) {
            return value;
        }
        const strAccents = value.split("");
        const strAccentsOut = new Array();
        const strAccentsLen = strAccents.length;
        for (let y = 0; y < strAccentsLen; y++) {
            if (accents.indexOf(strAccents[y]) !== -1) {
                strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
            }
            else {
                strAccentsOut[y] = strAccents[y];
            }
        }
        return strAccentsOut.join("");
    }
    String.removeAccents = removeAccents;
})(String || (String = {}));
/* harmony default export */ __webpack_exports__["b"] = (String);


/***/ }),
/* 2 */
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
    function onceOutside(target, type, listener) {
        const fn = (ev) => {
            const inside = target.contains(ev.target);
            if (!inside) {
                listener(ev);
                document.removeEventListener(type, fn);
            }
        };
        document.addEventListener(type, fn);
    }
    Event.onceOutside = onceOutside;
    function bindOutside(target, type, listener) {
        const fn = (ev) => {
            const inside = target.contains(ev.target);
            if (!inside) {
                listener(ev);
            }
        };
        document.addEventListener(type, fn);
    }
    Event.bindOutside = bindOutside;
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityCollection", function() { return UtilityCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Is", function() { return __WEBPACK_IMPORTED_MODULE_1__is__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__string__ = __webpack_require__(1);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["a"]; });








var UtilityCollection;
(function (UtilityCollection) {
    const name = "UtilityCollection";
})(UtilityCollection || (UtilityCollection = {}));
/* harmony default export */ __webpack_exports__["default"] = (UtilityCollection);


/***/ }),
/* 4 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTRjZGFlZjBlYTI2YzgyMzdhNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nyb2xsLXN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBLCtCQUErQjtBQUNEO0FBRTlCLHlCQUF5QjtBQUVuQixJQUFXLEVBQUUsQ0FrS2xCO0FBbEtELFdBQWlCLEVBQUU7SUFDbEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUM7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RSxDQUFDO1FBQ2pCLENBQUM7SUFDRixDQUFDO0lBTGUsMEJBQWEsZ0JBSzVCO0lBQ0Qsd0JBQStCLEtBQW9CLElBQUk7UUFDdEQsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDZCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0lBTmUsMkJBQWMsaUJBTTdCO0lBQ0QsNkJBQW9DLE9BQW9CO1FBQ3ZELE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNGLENBQUM7SUFMZSxnQ0FBbUIsc0JBS2xDO0lBQ0QseUJBQWdDLE9BQW9CO1FBQ25ELE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsQ0FBQztJQUNGLENBQUM7SUFMZSw0QkFBZSxrQkFLOUI7QUFDRixDQUFDLEVBdEdnQixZQUFZLEtBQVosWUFBWSxRQXNHNUI7QUFDRCwwRUFBZSxZQUFZLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTRjZGFlZjBlYTI2YzgyMzdhNzMiLCIvLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFN0cmluZyBmcm9tIFwiLi9zdHJpbmdcIjtcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwiLS0+IG9rXCIpO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBJcyB7XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIG1vYmlsZSgpOiBib29sZWFuIHtcclxuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIG51bGxPclVuZGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gaWQgZW1wdHlcclxuXHRleHBvcnQgZnVuY3Rpb24gZW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIGlzIE51bWJlclxyXG5cdGNvbnN0IG51bWJlclJlZ2V4OiBSZWdFeHAgPSAvXFxELztcclxuXHRleHBvcnQgZnVuY3Rpb24gbnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAhbnVtYmVyUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBpcyBMZXR0ZXJcclxuXHRjb25zdCBsZXR0ZXJSZWdleDogUmVnRXhwID0gL1thLXpBLVpdLztcclxuXHRleHBvcnQgZnVuY3Rpb24gbGV0dGVyKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBsZXR0ZXJSZWdleC50ZXN0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Y29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvbTtcclxuXHRleHBvcnQgZnVuY3Rpb24gZW1haWwodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGVtYWlsUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBicmF6aWxpYW4gdmFsaWRhdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIHBob25lXHJcblx0Y29uc3QgYnJhemlsaWFuUGhvbmVSZWdleCA9IC9eKD86KD86XFwrKVswLTldezJ9XFxzPyl7MCwxfSg/OlxcKClbMC05XXsyfSg/OlxcKSlcXHM/WzAtOV17MCwxfVxccz9bMC05XXs0LH0oPzotKVswLTldezR9JC9tO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBicmF6aWxpYW5QaG9uZShwaG9uZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gYnJhemlsaWFuUGhvbmVSZWdleC50ZXN0KHBob25lKTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGRkbW15eXl5KGRhdGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHRcdC8vIHJldHVybiBtb21lbnQoZGF0ZSwgXCJERC9NTS9ZWVlZXCIsIHRydWUpLmlzVmFsaWQoKTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIG1tZGR5eXl5KGRhdGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHRcdC8vIHJldHVybiBtb21lbnQoZGF0ZSwgXCJNTS9ERC9ZWVlZXCIsIHRydWUpLmlzVmFsaWQoKTtcclxuXHR9XHJcblxyXG5cdC8vIENQRlxyXG5cdGV4cG9ydCBmdW5jdGlvbiBjcGYodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0dmFsdWUgPSBTdHJpbmcuc3RyaXBOb25OdW1iZXIodmFsdWUpO1xyXG5cdFx0bGV0IG51bWVyb3M6IHN0cmluZztcclxuXHRcdGxldCBkaWdpdG9zOiBhbnk7XHJcblx0XHRsZXQgc29tYTogbnVtYmVyO1xyXG5cdFx0bGV0IGk6IGFueTtcclxuXHRcdGxldCByZXN1bHRhZG86IGFueTtcclxuXHRcdGxldCBkaWdpdG9zX2lndWFpczogYW55O1xyXG5cdFx0ZGlnaXRvc19pZ3VhaXMgPSAxO1xyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA8IDExKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGZvciAoaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGggLSAxOyBpKyspIHtcclxuXHRcdFx0aWYgKHZhbHVlLmNoYXJBdChpKSAhPT0gdmFsdWUuY2hhckF0KGkgKyAxKSkge1xyXG5cdFx0XHRcdGRpZ2l0b3NfaWd1YWlzID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFkaWdpdG9zX2lndWFpcykge1xyXG5cdFx0XHRudW1lcm9zID0gdmFsdWUuc3Vic3RyaW5nKDAsIDkpO1xyXG5cdFx0XHRkaWdpdG9zID0gdmFsdWUuc3Vic3RyaW5nKDkpO1xyXG5cdFx0XHRzb21hID0gMDtcclxuXHRcdFx0Zm9yIChpID0gMTA7IGkgPiAxOyBpLS0pIHtcclxuXHRcdFx0XHRzb21hICs9ICsobnVtZXJvcy5jaGFyQXQoMTAgLSBpKSkgKiBpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdGFkbyA9IHNvbWEgJSAxMSA8IDIgPyAwIDogMTEgLSBzb21hICUgMTE7XHJcblx0XHRcdGlmIChyZXN1bHRhZG8gIT09ICsoZGlnaXRvcy5jaGFyQXQoMCkpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgMTApO1xyXG5cdFx0XHRzb21hID0gMDtcclxuXHRcdFx0Zm9yIChpID0gMTE7IGkgPiAxOyBpLS0pIHtcclxuXHRcdFx0XHRzb21hICs9ICsobnVtZXJvcy5jaGFyQXQoMTEgLSBpKSkgKiBpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdGFkbyA9IHNvbWEgJSAxMSA8IDIgPyAwIDogMTEgLSBzb21hICUgMTE7XHJcblx0XHRcdGlmIChyZXN1bHRhZG8gIT09ICsoZGlnaXRvcy5jaGFyQXQoMSkpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBDTlBKXHJcblx0ZnVuY3Rpb24gY25waih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHR2YWx1ZSA9IFN0cmluZy5zdHJpcE5vbk51bWJlcih2YWx1ZSk7XHJcblxyXG5cdFx0bGV0IHRhbWFuaG86IG51bWJlcjtcclxuXHRcdGxldCBudW1lcm9zOiBzdHJpbmc7XHJcblx0XHRsZXQgZGlnaXRvczogc3RyaW5nO1xyXG5cdFx0bGV0IHNvbWE6IG51bWJlcjtcclxuXHRcdGxldCBwb3M6IG51bWJlcjtcclxuXHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXGRdKy9nLCBcIlwiKTtcclxuXHRcdGlmICh2YWx1ZSA9PT0gXCJcIikgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggIT09IDE0KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHRcdC8vIEVsaW1pbmEgQ05QSnMgaW52YWxpZG9zIGNvbmhlY2lkb3NcclxuXHRcdGlmICh2YWx1ZSA9PT0gXCIwMDAwMDAwMDAwMDAwMFwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjExMTExMTExMTExMTExXCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiMjIyMjIyMjIyMjIyMjJcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCIzMzMzMzMzMzMzMzMzM1wiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjQ0NDQ0NDQ0NDQ0NDQ0XCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiNTU1NTU1NTU1NTU1NTVcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCI2NjY2NjY2NjY2NjY2NlwiIHx8XHJcblx0XHRcdHZhbHVlID09PSBcIjc3Nzc3Nzc3Nzc3Nzc3XCIgfHxcclxuXHRcdFx0dmFsdWUgPT09IFwiODg4ODg4ODg4ODg4ODhcIiB8fFxyXG5cdFx0XHR2YWx1ZSA9PT0gXCI5OTk5OTk5OTk5OTk5OVwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0Ly8gVmFsaWRhIERWc1xyXG5cdFx0dGFtYW5obyA9IHZhbHVlLmxlbmd0aCAtIDI7XHJcblx0XHRudW1lcm9zID0gdmFsdWUuc3Vic3RyaW5nKDAsIHRhbWFuaG8pO1xyXG5cdFx0ZGlnaXRvcyA9IHZhbHVlLnN1YnN0cmluZyh0YW1hbmhvKTtcclxuXHRcdHNvbWEgPSAwO1xyXG5cdFx0cG9zID0gdGFtYW5obyAtIDc7XHJcblx0XHRmb3IgKGxldCBpID0gdGFtYW5obzsgaSA+PSAxOyBpLS0pIHtcclxuXHRcdFx0c29tYSArPSArKG51bWVyb3MuY2hhckF0KHRhbWFuaG8gLSBpKSkgKiBwb3MtLTtcclxuXHRcdFx0aWYgKHBvcyA8IDIpIHtcclxuXHRcdFx0XHRwb3MgPSA5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRsZXQgcmVzdWx0YWRvOiBudW1iZXIgPSBzb21hICUgMTEgPCAyID8gMCA6IDExIC0gc29tYSAlIDExO1xyXG5cdFx0aWYgKHJlc3VsdGFkbyAhPT0gKyhkaWdpdG9zLmNoYXJBdCgwKSkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRhbWFuaG8gPSB0YW1hbmhvICsgMTtcclxuXHRcdG51bWVyb3MgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdGFtYW5obyk7XHJcblx0XHRzb21hID0gMDtcclxuXHRcdHBvcyA9IHRhbWFuaG8gLSA3O1xyXG5cdFx0Zm9yIChsZXQgaSA9IHRhbWFuaG87IGkgPj0gMTsgaS0tKSB7XHJcblx0XHRcdHNvbWEgKz0gKyhudW1lcm9zLmNoYXJBdCh0YW1hbmhvIC0gaSkpICogcG9zLS07XHJcblx0XHRcdGlmIChwb3MgPCAyKSB7XHJcblx0XHRcdFx0cG9zID0gOTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmVzdWx0YWRvID0gc29tYSAlIDExIDwgMiA/IDAgOiAxMSAtIHNvbWEgJSAxMTtcclxuXHRcdGlmIChyZXN1bHRhZG8gIT09ICsoZGlnaXRvcy5jaGFyQXQoMSkpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lzLnRzIiwiaW1wb3J0IHsgSXMgfSBmcm9tIFwiLi9pc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBTdHJpbmcge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQWxsKHZhbHVlOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCByZXBsYWNlbWVudDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUuc3BsaXQoc2VhcmNoKS5qb2luKHJlcGxhY2VtZW50KTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHBhdGhBcnJheShwYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblx0XHRyZXR1cm4gcGF0aC5zcGxpdChcIi5cIik7XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gc3RyaXBOb25OdW1iZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xyXG5cdH1cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGNvbnN0IGFjY2VudHMgPSBcIsOAw4HDgsODw4TDhcOgw6HDosOjw6TDpcOSw5PDlMOVw5XDlsOYw7LDs8O0w7XDtsO4w4jDicOKw4vDqMOpw6rDq8Oww4fDp8OQw4zDjcOOw4/DrMOtw67Dr8OZw5rDm8Ocw7nDusO7w7zDkcOxxaDFocW4w7/DvcW9xb5cIjtcclxuXHRjb25zdCBhY2NlbnRzT3V0ID0gXCJBQUFBQUFhYWFhYWFPT09PT09Pb29vb29vRUVFRWVlZWVlQ2NESUlJSWlpaWlVVVVVdXV1dU5uU3NZeXlaelwiO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBY2NlbnRzKHZhbHVlOiBzdHJpbmcpIHtcclxuXHRcdGlmIChJcy5lbXB0eSh2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgc3RyQWNjZW50cyA9IHZhbHVlLnNwbGl0KFwiXCIpO1xyXG5cdFx0Y29uc3Qgc3RyQWNjZW50c091dCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0Y29uc3Qgc3RyQWNjZW50c0xlbiA9IHN0ckFjY2VudHMubGVuZ3RoO1xyXG5cclxuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgc3RyQWNjZW50c0xlbjsgeSsrKSB7XHJcblx0XHRcdGlmIChhY2NlbnRzLmluZGV4T2Yoc3RyQWNjZW50c1t5XSkgIT09IC0xKSB7XHJcblx0XHRcdFx0c3RyQWNjZW50c091dFt5XSA9IGFjY2VudHNPdXQuc3Vic3RyKGFjY2VudHMuaW5kZXhPZihzdHJBY2NlbnRzW3ldKSwgMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3RyQWNjZW50c091dFt5XSA9IHN0ckFjY2VudHNbeV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBzdHJBY2NlbnRzT3V0LmpvaW4oXCJcIik7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0cmluZy50cyIsImV4cG9ydCBuYW1lc3BhY2UgRXZlbnQge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBvbmNlKHRhcmdldDogTm9kZSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCBmbiA9IChldjogYW55KSA9PiB7XHJcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHRcdFx0bGlzdGVuZXIoZXYpO1xyXG5cdFx0fTtcclxuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIG9uY2VPdXRzaWRlKHRhcmdldDogTm9kZSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCBmbiA9IChldjogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IGluc2lkZSA9IHRhcmdldC5jb250YWlucyhldi50YXJnZXQpO1xyXG5cdFx0XHRpZiAoIWluc2lkZSkge1xyXG5cdFx0XHRcdGxpc3RlbmVyKGV2KTtcclxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gYmluZE91dHNpZGUodGFyZ2V0OiBOb2RlLCB0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IGZuID0gKGV2OiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3QgaW5zaWRlID0gdGFyZ2V0LmNvbnRhaW5zKGV2LnRhcmdldCk7XHJcblx0XHRcdGlmICghaW5zaWRlKSB7XHJcblx0XHRcdFx0bGlzdGVuZXIoZXYpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBiaW5kKHRhcmdldDogTm9kZSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCBmbiA9IChldjogYW55KSA9PiB7XHJcblx0XHRcdGxpc3RlbmVyKGV2KTtcclxuXHRcdH07XHJcblx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XHJcblx0fVxyXG5cdC8vIHBhc3NpdmUgc3VwcG9ydGVkXHJcblx0Y29uc3QgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBwYXNzaXZlKCk6IGFueSB7XHJcblx0XHRyZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcclxuXHR9XHJcblx0KGZ1bmN0aW9uIEluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBkZXRlY3QgaWYgc3Vwb3J0IHBhc3NpdmUgZXZlbnRcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XHJcblx0XHRcdFx0Z2V0OiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0aW9ucyk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0Ly9cclxuXHRcdH1cclxuXHR9KSgpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9kb21cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZmxlY3Rpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXJsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2Nyb2xsLXN3aXRjaFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ldmVudFwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFV0aWxpdHlDb2xsZWN0aW9uIHtcclxuXHRjb25zdCBuYW1lOiBzdHJpbmcgPSBcIlV0aWxpdHlDb2xsZWN0aW9uXCI7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXRpbGl0eUNvbGxlY3Rpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIiwiZXhwb3J0IG5hbWVzcGFjZSBEb20ge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBpbnNlcnRCZWZvcmUoZWxlbWVudDogTm9kZSwgdGFyZ2V0RWxlbWVudDogTm9kZSk6IHZvaWQge1xyXG5cdFx0dGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKGVsZW1lbnQ6IE5vZGUsIHRhcmdldEVsZW1lbnQ6IE5vZGUpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwYXJlbnQubGFzdENoaWxkID09PSB0YXJnZXRFbGVtZW50KSB7XHJcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGFyZ2V0RWxlbWVudC5uZXh0U2libGluZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiByZW1vdmUoZWxlbWVudDogTm9kZSk6IHZvaWQge1xyXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBodG1sVG9Ob2RlKGh0bWw6IHN0cmluZyB8IEVsZW1lbnQpOiBOb2RlIHtcclxuXHRcdGlmIChodG1sIGluc3RhbmNlb2YgTm9kZSkge1xyXG5cdFx0XHRyZXR1cm4gaHRtbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IG5vZGU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0bm9kZS5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRyZXR1cm4gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWw6IHN0cmluZyB8IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XHJcblx0XHRyZXR1cm4gaHRtbFRvTm9kZShodG1sKSBhcyBIVE1MRWxlbWVudDtcclxuXHR9XHJcblx0Ly8gYXRyaWJ1dGVzICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRleHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhlbGVtZW50OiBFbGVtZW50IHwgTm9kZSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9IHtcclxuXHRcdGNvbnN0IGF0dHJzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG5cdFx0Y29uc3QgbmV3QXR0cjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bmV3QXR0clthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ld0F0dHI7XHJcblx0fVxyXG5cclxuXHQvLyBMb29wcyBlIGdpcm9zIHBlbG8gZG9tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGNoaWxkRWxlbWVudChub2RlOiBFbGVtZW50LCBlYWNoOiAobm9kZTogRWxlbWVudCkgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0bGV0IGNoaWxkOiBOb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0d2hpbGUgKGNoaWxkKSB7XHJcblx0XHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xyXG5cdFx0XHRcdGVhY2goY2hpbGQgYXMgRWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGVsZW1lbnQgZG93biAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBub2RlRG93bihub2RlOiBOb2RlIHwgTm9kZSwgZWFjaDogKG5vZGU6IE5vZGUgfCBOb2RlLCBwYXJlbnQ/OiBOb2RlIHwgTm9kZSkgPT4gdm9pZCB8IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGlmIChlYWNoKG5vZGUsIHVuZGVmaW5lZCkgIT09IGZhbHNlKSB7XHJcblx0XHRcdHRoaXMuY2hpbGROb2RlRG93bihub2RlLCBlYWNoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBjaGlsZE5vZGVEb3duKG5vZGU6IE5vZGUsIGVhY2g6IChub2RlOiBOb2RlLCBwYXJlbnQ/OiBOb2RlKSA9PiB2b2lkIHwgYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0Y29uc3QgcGFyZW50OiBOb2RlID0gbm9kZTtcclxuXHRcdGxldCBjaGlsZDogTm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuXHRcdHdoaWxlIChjaGlsZCkge1xyXG5cdFx0XHRjb25zdCBlYWNoUmV0dXJuOiBib29sZWFuIHwgdm9pZCA9IGVhY2goY2hpbGQsIHBhcmVudCk7XHJcblx0XHRcdGlmIChlYWNoUmV0dXJuICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdHRoaXMuY2hpbGROb2RlRG93bihjaGlsZCwgZWFjaCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RG93bihub2RlOiBFbGVtZW50LCBlYWNoOiAobm9kZTogRWxlbWVudCwgcGFyZW50PzogRWxlbWVudCkgPT4gdm9pZCB8IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGlmIChlYWNoKG5vZGUsIHVuZGVmaW5lZCkgIT09IGZhbHNlKSB7XHJcblx0XHRcdHRoaXMuY2hpbGRFbGVtZW50RG93bihub2RlLCBlYWNoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBjaGlsZEVsZW1lbnREb3duKG5vZGU6IEVsZW1lbnQsIGVhY2g6IChub2RlOiBIVE1MRWxlbWVudCwgcGFyZW50PzogSFRNTEVsZW1lbnQpID0+IHZvaWQgfCBib29sZWFuKTogdm9pZCB7XHJcblx0XHRjb25zdCBwYXJlbnQ6IEVsZW1lbnQgPSBub2RlO1xyXG5cdFx0bGV0IGNoaWxkOiBOb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0d2hpbGUgKGNoaWxkKSB7XHJcblx0XHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xyXG5cdFx0XHRcdGNvbnN0IGVhY2hSZXR1cm46IGJvb2xlYW4gfCB2b2lkID0gZWFjaChjaGlsZCBhcyBIVE1MRWxlbWVudCwgcGFyZW50IGFzIEhUTUxFbGVtZW50KTtcclxuXHRcdFx0XHRpZiAoZWFjaFJldHVybiAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdHRoaXMuY2hpbGRFbGVtZW50RG93bihjaGlsZCBhcyBIVE1MRWxlbWVudCwgZWFjaCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBlbGVtZW50IHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRVcChub2RlOiBFbGVtZW50IHwgSFRNTEVsZW1lbnQsIGVhY2g6IChub2RlOiBFbGVtZW50IHwgSFRNTEVsZW1lbnQpID0+IGJvb2xlYW4gfCB2b2lkKTogdm9pZCB7XHJcblx0XHRpZiAoZWFjaChub2RlKSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0cGFyZW50RWxlbWVudFVwKG5vZGUsIGVhY2gpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHBhcmVudEVsZW1lbnRVcChub2RlOiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgfCBOb2RlLCBlYWNoOiAobm9kZTogRWxlbWVudCB8IEhUTUxFbGVtZW50IHwgTm9kZSkgPT4gYm9vbGVhbiB8IHZvaWQpOiB2b2lkIHtcclxuXHRcdGxldCByZXRvcm5vOiBib29sZWFuIHwgdm9pZCA9IHRydWU7XHJcblx0XHRsZXQgY3VycmVudDogRWxlbWVudCB8IE5vZGUgPSAobm9kZSBhcyBOb2RlKS5wYXJlbnROb2RlO1xyXG5cdFx0ZG8ge1xyXG5cdFx0XHRyZXRvcm5vID0gZWFjaChjdXJyZW50KTtcclxuXHRcdFx0Y3VycmVudCA9IChjdXJyZW50IGFzIE5vZGUpLnBhcmVudE5vZGU7XHJcblx0XHR9IHdoaWxlIChyZXRvcm5vICE9PSBmYWxzZSAmJiBjdXJyZW50ICE9PSBudWxsICYmIGN1cnJlbnQgIT09IHVuZGVmaW5lZCAmJiBub2RlLm5vZGVOYW1lICE9PSBcIkJPRFlcIik7XHJcblx0fVxyXG5cclxuXHQvLyBkb20gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRleHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlKGVsZW1lbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IE5vZGUsIGVhY2g6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0Ly8gVE9ETzogdGhpcyBzdGlsbCBuZWVkIHRvIGJlIHRlc3RlZFxyXG5cdFx0Y29uc3QgYXR0cmlidXRlcyA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRlYWNoKGF0dHJpYnV0ZXNbaV0ubmFtZSwgYXR0cmlidXRlc1tpXS52YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gZmluZE5leHRTaWJsaW5nKHRhcmdldDogTm9kZSB8IE5vZGUsIHZhbGlkYXRpb246IChub2RlOiBOb2RlIHwgTm9kZSkgPT4gYm9vbGVhbiB8IHZvaWQpOiBOb2RlIHwgTm9kZSB7XHJcblx0XHRsZXQgY3VycmVudDogTm9kZSB8IE5vZGUgPSB0YXJnZXQubmV4dFNpYmxpbmc7XHJcblx0XHR3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpZiAodmFsaWRhdGlvbihjdXJyZW50KSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaW5kUHJldlNpYmxpbmcodGFyZ2V0OiBOb2RlIHwgTm9kZSwgdmFsaWRhdGlvbjogKG5vZGU6IE5vZGUgfCBOb2RlKSA9PiBib29sZWFuIHwgdm9pZCk6IE5vZGUgfCBOb2RlIHtcclxuXHRcdGxldCBjdXJyZW50OiBOb2RlIHwgTm9kZSA9IHRhcmdldC5wcmV2aW91c1NpYmxpbmc7XHJcblx0XHR3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpZiAodmFsaWRhdGlvbihjdXJyZW50KSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzU2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gZmluZEFsbFNpYmxpbmdzKHRhcmdldDogTm9kZSk6IE5vZGVbXSB7XHJcblx0XHRjb25zdCBzaWJsaW5nczogTm9kZVtdID0gW107XHJcblx0XHRmaW5kUHJldlNpYmxpbmcodGFyZ2V0LCAobm9kZSkgPT4ge1xyXG5cdFx0XHRzaWJsaW5ncy5wdXNoKG5vZGUpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KTtcclxuXHRcdGZpbmROZXh0U2libGluZyh0YXJnZXQsIChub2RlKSA9PiB7XHJcblx0XHRcdHNpYmxpbmdzLnB1c2gobm9kZSk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNpYmxpbmdzO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRDaGlsZChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGZpcnN0Q2hpbGQ6IE5vZGUgPSBwYXJlbnQuZmlyc3RDaGlsZDtcclxuXHRcdGlmIChmaXJzdENoaWxkID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmU8SFRNTEVsZW1lbnQ+KGNoaWxkLCBmaXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBIVE1MRWxlbWVudCkge1xyXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRWxlbWVudChvbGRFbGVtZW50OiBIVE1MRWxlbWVudCwgbmV3RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdG9sZEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gc3dhcE5vZGVzKG4xOiBIVE1MRWxlbWVudCwgbjI6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgaTE6IGFueTtcclxuXHRcdGxldCBpMjogYW55O1xyXG5cdFx0bGV0IHAxID0gbjEucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdGxldCBwMiA9IG4yLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHRpZiAocDEgPT09IHVuZGVmaW5lZCB8fCBwMSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdHAxLmFwcGVuZENoaWxkKG4xKTtcclxuXHRcdH1cclxuXHRcdGlmIChwMiA9PT0gdW5kZWZpbmVkIHx8IHAyID09PSBudWxsKSB7XHJcblx0XHRcdHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0cDIuYXBwZW5kQ2hpbGQobjIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFwMSB8fCAhcDIgfHwgcDEuaXNFcXVhbE5vZGUobjIpIHx8IHAyLmlzRXF1YWxOb2RlKG4xKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcDEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHAxLmNoaWxkcmVuW2ldLmlzRXF1YWxOb2RlKG4xKSkge1xyXG5cdFx0XHRcdGkxID0gaTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwMi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAocDIuY2hpbGRyZW5baV0uaXNFcXVhbE5vZGUobjIpKSB7XHJcblx0XHRcdFx0aTIgPSBpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHAxLmlzRXF1YWxOb2RlKHAyKSAmJiBpMSA8IGkyKSB7XHJcblx0XHRcdGkyKys7XHJcblx0XHR9XHJcblx0XHRwMS5pbnNlcnRCZWZvcmUobjIsIHAxLmNoaWxkcmVuW2kxXSk7XHJcblx0XHRwMi5pbnNlcnRCZWZvcmUobjEsIHAyLmNoaWxkcmVuW2kyXSk7XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEb207XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20udHMiLCJleHBvcnQgbmFtZXNwYWNlIFJlZmxlY3Rpb24ge1xyXG5cdGV4cG9ydCBmdW5jdGlvbiBtZXJnZShiYXNlOiBhbnksIHNvdXJjZTogYW55KTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IGkgaW4gc291cmNlKSB7XHJcblx0XHRcdGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHRcdFx0XHRiYXNlW2ldID0gc291cmNlW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBmaWxsPFQgZXh0ZW5kcyB7W2tleTogc3RyaW5nXTogYW55IH0+KHRhcmdldDogVCwgc291cmNlOiBhbnkpOiBUIHtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG5cdFx0XHRpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gc291cmNlW2tleV07XHJcblx0XHRcdFx0dGFyZ2V0W2tleV0gPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWZsZWN0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVmbGVjdGlvbi50cyIsImV4cG9ydCBjbGFzcyBVcmwge1xyXG5cdHB1YmxpYyBRdWVyeUxpc3Q/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblx0cHJpdmF0ZSBzdGF0aWNQYXRoPzogc3RyaW5nIHwgbnVsbDtcclxuXHRwcml2YXRlIHN0YXRpY1F1ZXJ5Pzogc3RyaW5nIHwgbnVsbDtcclxuXHRwcml2YXRlIHN0YXRpY0hhc2g/OiBzdHJpbmcgfCBudWxsO1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRwdWJsaWMgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuc3RhdGljUGF0aCA9IHVybC5zcGxpdChcIiNcIilbMF0uc3BsaXQoXCI/XCIpWzBdO1xyXG5cdFx0dGhpcy5zdGF0aWNRdWVyeSA9IHVybC5pbmRleE9mKFwiP1wiKSA+IC0xID8gdXJsLnNwbGl0KFwiP1wiKVsxXS5zcGxpdChcIiNcIilbMF0gOiBudWxsO1xyXG5cdFx0dGhpcy5zdGF0aWNIYXNoID0gdXJsLnNwbGl0KFwiI1wiKVsxXSB8fCBudWxsO1xyXG5cdFx0Ly8gcXVlcnlMaXN0XHJcblx0XHRpZiAodGhpcy5zdGF0aWNRdWVyeSAhPSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHF1ZXJ5S2V5VmFsdWVMaXN0OiBzdHJpbmdbXSA9IHRoaXMuc3RhdGljUXVlcnkuc3BsaXQoXCImXCIpO1xyXG5cdFx0XHRxdWVyeUtleVZhbHVlTGlzdC5mb3JFYWNoKChxdWVyeUtleVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qga2V5VmFsdWU6IHN0cmluZ1tdID0gcXVlcnlLZXlWYWx1ZS5zcGxpdChcIj1cIik7XHJcblx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSBrZXlWYWx1ZVswXTtcclxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nID0ga2V5VmFsdWVbMV07XHJcblx0XHRcdFx0dGhpcy5RdWVyeUxpc3Rba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHNldFF1ZXJ5KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogVXJsIHtcclxuXHRcdHRoaXMuUXVlcnlMaXN0W2tleV0gPSB2YWx1ZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0UXVlcmllcyh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gKTogVXJsIHtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHZhbHVlcykge1xyXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlc1trZXldICE9PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWVzW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRoaXMuUXVlcnlMaXN0W2tleV0gPSB2YWx1ZXNba2V5XS50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGRlbGV0ZVF1ZXJ5KGtleTogc3RyaW5nKTogVXJsIHtcclxuXHRcdHRoaXMuUXVlcnlMaXN0W2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHRkZWxldGUgdGhpcy5RdWVyeUxpc3Rba2V5XTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0UXVlcnkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuUXVlcnlMaXN0W2tleV07XHJcblx0fVxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG5cdFx0bGV0IHF1ZXJ5TGVuZ3RoOiBudW1iZXIgPSBPYmplY3Qua2V5cyh0aGlzLlF1ZXJ5TGlzdCkubGVuZ3RoO1xyXG5cdFx0bGV0IHF1ZXJ5OiBzdHJpbmcgPSAoT2JqZWN0LmtleXModGhpcy5RdWVyeUxpc3QpLmxlbmd0aCA+IDAgPyBcIj9cIiA6IFwiXCIpO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy5RdWVyeUxpc3QpIHtcclxuXHRcdFx0aWYgKHRoaXMuUXVlcnlMaXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRxdWVyeUxlbmd0aC0tO1xyXG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5RdWVyeUxpc3Rba2V5XTtcclxuXHRcdFx0XHRxdWVyeSA9IHF1ZXJ5ICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuXHRcdFx0XHRpZiAocXVlcnlMZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRxdWVyeSA9IHF1ZXJ5ICsgXCImXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5zdGF0aWNQYXRoICsgcXVlcnkgKyAodGhpcy5zdGF0aWNIYXNoID8gdGhpcy5zdGF0aWNIYXNoIDogXCJcIik7XHJcblx0fVxyXG59XHJcbi8vIGV4cG9ydCBuYW1lc3BhY2UgVXJsIHtcclxuLy8gXHQvL1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IFVybDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VybC50cyIsImV4cG9ydCBuYW1lc3BhY2UgTGlzdCB7XHJcblx0Ly8gcmVtb3ZlIGl0ZW0gZnJvbSBsaXN0IGlmIGV4aXN0XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21JbmRleDxUPihsaXN0OiBUW10sIGluZGV4OiBudW1iZXIpOiBUW10ge1xyXG5cdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtPFQ+KGxpc3Q6IFRbXSwgaXRlbTogVCk6IFRbXSB7XHJcblx0XHRjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtKTtcclxuXHRcdGxldCBuZXdMaXN0OiBUW107XHJcblx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRuZXdMaXN0ID0gcmVtb3ZlRnJvbUluZGV4KGxpc3QsIGluZGV4KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5ld0xpc3QgPSBsaXN0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ld0xpc3Q7XHJcblx0fVxyXG5cdGV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtPFQ+KGxpc3Q6IFRbXSwgaXRlbTogVCk6IFRbXSB7XHJcblx0XHRjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHtcclxuXHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXN0LnRzIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfU0NST0xMQUJMRSA9IFwiZGF0YS1zY3JvbGxhYmxlXCI7XHJcbmV4cG9ydCBjb25zdCBDTEFTU19GT0NVUyA9IFwic2Nyb2xsLS1hY3RpdmVcIjtcclxuZXhwb3J0IG5hbWVzcGFjZSBTY3JvbGxTd2l0Y2gge1xyXG5cdGxldCB1bmZyZWV6ZURlbGF5OiBudW1iZXI7XHJcblx0ZXhwb3J0IGNsYXNzIFNjcm9sbGFibGUge1xyXG5cdFx0cHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblx0XHRwcml2YXRlIHk6IG51bWJlciA9IDA7XHJcblx0XHRwcml2YXRlIGZyb3plbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0cHJpdmF0ZSB1bmZyZWV6aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUpID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR0aGlzLmlkID0gbmV3U2Nyb2xsYWJsZUlkKCk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUsIHRoaXMuaWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaWQgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfU0NST0xMQUJMRSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gcmVnaXN0ZXIgZXZlbnRcclxuXHRcdFx0Y29uc3QgdW5mcmVlemVFdmVudCA9IChlOiBFdmVudCkgPT4ge1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3cuc2Nyb2xsWSk7XHJcblx0XHRcdFx0dGhpcy51bmZyZWV6ZSgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBmcmVlemVBbGxFdmVudCA9IChlOiBFdmVudCkgPT4ge1xyXG5cdFx0XHRcdGZyZWV6ZUFsbEJ1dElkKG51bGwpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHVuZnJlZXplRXZlbnQsIEV2ZW50LnBhc3NpdmUoKSk7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdW5mcmVlemVFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdW5mcmVlemVFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmcmVlemVBbGxFdmVudCwgRXZlbnQucGFzc2l2ZSgpKTtcclxuXHRcdH1cclxuXHRcdHB1YmxpYyBnZXRJZCgpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pZDtcclxuXHRcdH1cclxuXHRcdHB1YmxpYyB1bmZyZWV6ZSgpIHtcclxuXHRcdFx0aWYgKHRoaXMuZnJvemVuICYmICF0aGlzLnVuZnJlZXppbmcpIHtcclxuXHRcdFx0XHR0aGlzLnVuZnJlZXppbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGZyZWV6ZUFsbEJ1dElkKHRoaXMuaWQpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbCgwLCB0aGlzLnkpO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHotaW5kZXg6ICR7dGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleH07IGApO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX0ZPQ1VTKTtcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcblx0XHRcdFx0dGhpcy55ID0gMDtcclxuXHRcdFx0XHR0aGlzLmZyb3plbiA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMudW5mcmVlemluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHVuZnJlZXplRGVsYXkgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHB1YmxpYyBmcmVlemUoKSB7XHJcblx0XHRcdGlmICghdGhpcy5mcm96ZW4pIHtcclxuXHRcdFx0XHR0aGlzLnkgPSB3aW5kb3cuc2Nyb2xsWSArIDA7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBwb3NpdGlvbjogZml4ZWQ7IHRvcDogLSR7dGhpcy55fXB4OyB6LWluZGV4OiAke3RoaXMuZWxlbWVudC5zdHlsZS56SW5kZXh9OyBgKTtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19GT0NVUyk7XHJcblx0XHRcdFx0dGhpcy5mcm96ZW4gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IHN0b3JlOiB7IFtrZXk6IHN0cmluZ106IFNjcm9sbGFibGUgfSA9IHt9O1xyXG5cdGxldCBsYXN0SWQ6IG51bWJlciA9IDE7XHJcblx0ZnVuY3Rpb24gbmV3U2Nyb2xsYWJsZUlkKCk6IHN0cmluZyB7XHJcblx0XHRsYXN0SWQgPSBsYXN0SWQgKyAxO1xyXG5cdFx0cmV0dXJuIGxhc3RJZC50b1N0cmluZygpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBpZGVudGlmeUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBTY3JvbGxhYmxlIHtcclxuXHRcdGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1NDUk9MTEFCTEUpO1xyXG5cdFx0Y29uc3Qgc3RvcmVkID0gKGlkICE9PSB1bmRlZmluZWQpID8gKHN0b3JlW2lkXSAhPT0gdW5kZWZpbmVkKSA6IGZhbHNlO1xyXG5cdFx0aWYgKHN0b3JlZCkge1xyXG5cdFx0XHRyZXR1cm4gc3RvcmVbaWRdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgcyA9IG5ldyBTY3JvbGxhYmxlKGVsZW1lbnQpO1xyXG5cdFx0XHRpZCA9IHMuZ2V0SWQoKTtcclxuXHRcdFx0c3RvcmVbaWRdID0gcztcclxuXHRcdFx0cmV0dXJuIHN0b3JlW2lkXTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuXHRcdGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuXHRcdFx0c2Nyb2xsLmZyZWV6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gZnJlZXplQWxsQnV0SWQoaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogdm9pZCB7XHJcblx0XHRmb3IgKGNvbnN0IGkgaW4gc3RvcmUpIHtcclxuXHRcdFx0aWYgKGkgIT09IGlkKSB7XHJcblx0XHRcdFx0c3RvcmVbaV0uZnJlZXplKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZUFsbEJ1dEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHNjcm9sbCA9IGlkZW50aWZ5RWxlbWVudChlbGVtZW50KTtcclxuXHRcdGlmIChzY3JvbGwgIT09IG51bGwpIHtcclxuXHRcdFx0ZnJlZXplQWxsQnV0SWQoc2Nyb2xsLmdldElkKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgZnVuY3Rpb24gdW5mcmVlemVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcblx0XHRjb25zdCBzY3JvbGwgPSBpZGVudGlmeUVsZW1lbnQoZWxlbWVudCk7XHJcblx0XHRpZiAoc2Nyb2xsICE9PSBudWxsKSB7XHJcblx0XHRcdHNjcm9sbC51bmZyZWV6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTd2l0Y2g7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JvbGwtc3dpdGNoLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==