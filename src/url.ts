import { String } from "./string";
export class Url {
	public QueryList?: { [key: string]: string } = {};
	private staticPath?: string | null;
	private staticQuery?: string | null;
	private staticHash?: string | null;
	private origin?: string | null;
	private originPath: string | null = "/";
	// -------------------
	public constructor(url: string) {
		this.staticPath = url.split("#")[0].split("?")[0];
		const splited = Url.splitOriginPath(this.staticPath);
		this.staticPath = splited.path;
		this.origin = splited.origin;

		this.staticQuery = url.indexOf("?") > -1 ? url.split("?")[1].split("#")[0] : null;
		this.staticHash = url.split("#")[1] || null;
		// queryList
		if (this.staticQuery != null) {
			const queryKeyValueList: string[] = this.staticQuery.split("&");
			queryKeyValueList.forEach((queryKeyValue) => {
				const keyValue: string[] = queryKeyValue.split("=");
				const key: string = keyValue[0];
				const value: string = keyValue[1];
				this.QueryList[key] = value;
			});
		}
		// origin
	}

	public setQuery(key: string, value: string): Url {
		this.QueryList[key] = value;
		return this;
	}
	public setQueries(values: { [key: string]: any } ): Url {
		for (const key in values) {
			if (typeof values[key] !== "function" && values[key] !== undefined) {
				this.QueryList[key] = values[key].toString();
			}
		}
		return this;
	}
	public deleteQuery(key: string): Url {
		this.QueryList[key] = undefined;
		delete this.QueryList[key];
		return this;
	}
	public getQuery(key: string): string {
		return this.QueryList[key];
	}
	public toString(): string {
		let queryLength: number = Object.keys(this.QueryList).length;
		let query: string = (Object.keys(this.QueryList).length > 0 ? "?" : "");
		for (const key in this.QueryList) {
			if (this.QueryList.hasOwnProperty(key)) {
				queryLength--;
				const value = this.QueryList[key];
				query = query + key + "=" + value;
				if (queryLength > 0) {
					query = query + "&";
				}
			}
		}
		let newPath =  this.staticPath + query + (this.staticHash ? this.staticHash : "");
		newPath = Url.absolute(newPath, newPath[0] === "." ? this.originPath : "/");
		if (this.origin !== undefined && this.origin !== null) {
			const newUrl =  this.origin + newPath; // Url.absolute(newPath, this.origin);
			return newUrl;
		} else {
			return newPath;
		}
	}
	public setOrigin(origin?: string, justLocal: boolean = true) {
		const splited = Url.splitOriginPath(origin || window.location.origin + "/" + window.location.pathname);
		if (this.origin === undefined) {
			this.origin = splited.origin;
			this.originPath = splited.path || "/";
		} else
		if (this.origin === null || this.origin === undefined || justLocal === false) {
			this.origin = splited.origin;
			this.originPath = splited.path || "/";
		} else
		if ( justLocal ) {
			if (window.location.origin.replace("https", "http").toLowerCase() === this.origin.replace("https", "http").toLowerCase()) {
				this.origin = splited.origin;
			}
			this.originPath = splited.path || "/";
		} else {
			this.origin = splited.origin;
			this.originPath = splited.path || "/";
		}
	}

}
export namespace Url {
	export function splitOriginPath(value: string): { origin: string | null; path: string; } {
		const split: any = /(https?:\/\/[a-zA-Z0-9-\.]+(?::[0-9]*)?)(\/.*)?/g.exec(value);
		if (split !== null) {
			return {
				origin: split[1],
				path: split[2] || "/",
			};
		} else {
			return {
				origin: null,
				path: value || "/",
			};
		}
	}
	export function absolute(relative: string, base: string) {
		const stack: string[] = base.split("/");
		const parts = relative.split("/");
		stack.pop(); // remove current file name (or empty string)
					 // (omit if "base" is the current folder without trailing slash)
		for (let i = 0; i < parts.length; i++) {
			if (parts[i] === ".") {
				continue;
			}
			if (parts[i] === "..") {
				stack.pop();
			} else {
				stack.push(parts[i]);
			}
		}
		return String.replaceAll(stack.join("/"), "//", "/");
	}
}
export default Url;
