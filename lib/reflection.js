export var Reflection;
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
})(Reflection || (Reflection = {}));
export default Reflection;
//# sourceMappingURL=reflection.js.map