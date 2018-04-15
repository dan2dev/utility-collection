export declare class Url {
    QueryList?: {
        [key: string]: string;
    };
    private staticPath?;
    private staticQuery?;
    private staticHash?;
    private origin?;
    private originPath;
    constructor(url: string);
    setQuery(key: string, value: string): Url;
    setQueries(values: {
        [key: string]: any;
    }): Url;
    deleteQuery(key: string): Url;
    getQuery(key: string): string;
    toString(): string;
    setOrigin(origin?: string, justLocal?: boolean): void;
}
export declare namespace Url {
    function splitOriginPath(value: string): {
        origin: string | null;
        path: string;
    };
    function absolute(relative: string, base: string): string;
}
export default Url;
