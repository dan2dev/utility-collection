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
//# sourceMappingURL=scroll-switch.js.map