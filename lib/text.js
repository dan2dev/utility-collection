export var Text;
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
        if (value === undefined || value === null || value === "" || value === " ") {
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
})(Text || (Text = {}));
export default Text;
//# sourceMappingURL=text.js.map