export declare namespace List {
    function removeFromIndex<T>(list: T[], index: number): T[];
    function removeItem<T>(list: T[], item: T): T[];
    function setItem<T>(list: T[], item: T): T[];
    function replaceItemWith<T>(baseList: T[], searchItem: any, newItem: any): T[];
    function replaceItemWith<T>(baseList: T[], searchItem: any, newItems: any[]): T[];
}
export default List;
