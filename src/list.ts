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
}
export default List;
