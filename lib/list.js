export var List;
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
})(List || (List = {}));
export default List;
//# sourceMappingURL=list.js.map