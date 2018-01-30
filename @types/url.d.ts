export declare class Url {
    QueryList?: {
        [key: string]: string;
    };
    private staticPath?;
    private staticQuery?;
    private staticHash?;
    constructor(url: string);
    setQuery(key: string, value: string): Url;
    setQueries(values: {
        [key: string]: any;
    }): Url;
    deleteQuery(key: string): Url;
    getQuery(key: string): string;
    toString(): string;
}
export default Url;
