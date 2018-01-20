export namespace Reflection {
	export function merge(base: any, source: any): void {
		for (const i in source) {
			if (source.hasOwnProperty(i)) {
				base[i] = source[i];
			}
		}
	}
}
export default Reflection;
