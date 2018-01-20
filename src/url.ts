export class Url {
	public QueryList?: { [key: string]: string } = {};
	private staticPath?: string | null;
	private staticQuery?: string | null;
	private staticHash?: string | null;
	// -------------------
	public constructor(url: string) {
		this.staticPath = url.split("#")[0].split("?")[0];
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
		return this.staticPath + query + (this.staticHash ? this.staticHash : "");
	}
}
// export namespace Url {
// 	//
// }
export default Url;
