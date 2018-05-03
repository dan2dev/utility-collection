import { Is } from "./is";

export namespace Text {
  export function replaceAll(value: string, search: string, replacement: string) {
    return value.split(search).join(replacement);
  }
  export function pathArray(path: string): string[] {
    return path.split(".");
  }

  export function stripNonNumber(value: string): string {
    return value.replace(/[^0-9]/g, "");
  }
  // -----------------
  const accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  const accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  export function removeAccents(value: string) {
    if (Is.empty(value)) {
      return value;
    }
    const strAccents = value.split("");
    const strAccentsOut = new Array();
    const strAccentsLen = strAccents.length;

    for (let y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) !== -1) {
        strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
      } else {
        strAccentsOut[y] = strAccents[y];
      }
    }
    return strAccentsOut.join("");
  }
}
export default Text;
