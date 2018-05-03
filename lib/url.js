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
        var newPath = this.staticPath + query + (this.staticHash ? this.staticHash : "");
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
//# sourceMappingURL=url.js.map