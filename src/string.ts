export namespace String {
	export function replaceAll(value: string, search: string, replacement: string) {
		return value.split(search).join(replacement);
	}
	export function pathArray(path: string): string[] {
		return path.split(".");
	}

	export function stripNonNumber(value: string): string {
		return value.replace(/[^0-9]/g, "");
	}

}
export default String;
