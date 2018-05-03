export namespace List {
  // remove item from list if exist
  export function removeFromIndex<T>(list: T[], index: number): T[] {
    list.splice(index, 1);
    return list;
  }
  export function removeItem<T>(list: T[], item: T): T[] {
    const index = list.indexOf(item);
    let newList: T[];
    if (index > -1) {
      newList = removeFromIndex(list, index);
    } else {
      newList = list;
    }
    return newList;
  }
  export function setItem<T>(list: T[], item: T): T[] {
    const index = list.indexOf(item);
    if (index < 0) {
      list.push(item);
    }
    return list;
  }
  export function replaceItemWith<T>(baseList: T[], searchItem: any, newItem: any): T[];
  export function replaceItemWith<T>(baseList: T[], searchItem: any, newItems: any[]): T[];
  export function replaceItemWith<T>(baseList: T[], searchItem: any, newItems: any[] | any): T[] {
    let newItemsToInsert: any[];
    if (Array.isArray(newItems)) {
      newItemsToInsert =  newItems.slice(0);
    } else {
      newItemsToInsert = [newItems];
    }
    const output = baseList.slice(0);
    let args: any[];
    const replaceIndex = output.indexOf(searchItem);
    if (replaceIndex > -1) {
      args = [replaceIndex, 1];
      args = args.concat(newItemsToInsert);
    } else {
      args = [output.length, 0];
      args = args.concat(newItemsToInsert);
    }
    output.splice.apply(output, args);
    return output;
  }
}
export default List;
