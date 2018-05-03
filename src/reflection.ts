export namespace Reflection {
  export function merge(base: any, source: any): void {
    for (const i in source) {
      if (source.hasOwnProperty(i)) {
        base[i] = source[i];
      }
    }
  }
  export function fill<T extends { [key: string]: any }>(target: T, source: any): T {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const element = source[key];
        target[key] = element;
      }
    }
    return target;
  }
}
export default Reflection;
