"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})(Reflection = exports.Reflection || (exports.Reflection = {}));
exports.default = Reflection;
//# sourceMappingURL=reflection.js.map