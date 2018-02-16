export declare namespace Reflection {
    function merge(base: any, source: any): void;
    function fill<T extends {
        [key: string]: any;
    }>(target: T, source: any): T;
}
export default Reflection;
