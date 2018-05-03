// import moment from "moment";
import { Text } from "./text";

// console.log("--> ok");

export namespace Is {
  export function mobile(): boolean {
    if (window.innerWidth < 900) {
      return true;
    } else {
      return false;
    }
  }

  // is null or undefined
  export function nullOrUndefined(value: any): boolean {
    if (value === undefined || value === null) {
      return true;
    } else {
      return false;
    }
  }
  // id empty
  export function empty(value: any): boolean {
    if (value === undefined || value === null || value === "") {
      return true;
    } else {
      return false;
    }
  }
  // is Number
  const numberRegex: RegExp = /\D/;
  export function number(value: string): boolean {
    return !numberRegex.test(value);
  }

  // is Letter
  const letterRegex: RegExp = /[a-zA-Z]/;
  export function letter(value: string): boolean {
    return letterRegex.test(value);
  }

  // --------------------------------
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m;
  export function email(value: string): boolean {
    return emailRegex.test(value);
  }

  // brazilian validations ----------------------------------------
  // phone
  const brazilianPhoneRegex = /^(?:(?:\+)[0-9]{2}\s?){0,1}(?:\()[0-9]{2}(?:\))\s?[0-9]{0,1}\s?[0-9]{4,}(?:-)[0-9]{4}$/m;
  export function brazilianPhone(phone: string): boolean {
    return brazilianPhoneRegex.test(phone);
  }
  export function ddmmyyyy(date: string): boolean {
    throw new Error("Not implemented.");
    // return moment(date, "DD/MM/YYYY", true).isValid();
  }
  export function mmddyyyy(date: string): boolean {
    throw new Error("Not implemented.");
    // return moment(date, "MM/DD/YYYY", true).isValid();
  }

  // CPF
  export function cpf(value: string): boolean {
    value = Text.stripNonNumber(value);
    let numeros: string;
    let digitos: any;
    let soma: number;
    let i: any;
    let resultado: any;
    let digitos_iguais: any;
    digitos_iguais = 1;
    if (value.length < 11) {
      return false;
    }
    for (i = 0; i < value.length - 1; i++) {
      if (value.charAt(i) !== value.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }
    }
    if (!digitos_iguais) {
      numeros = value.substring(0, 9);
      digitos = value.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--) {
        soma += +(numeros.charAt(10 - i)) * i;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado !== +(digitos.charAt(0))) {
        return false;
      }
      numeros = value.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--) {
        soma += +(numeros.charAt(11 - i)) * i;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado !== +(digitos.charAt(1))) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
  // CNPJ
  function cnpj(value: string): boolean {
    value = Text.stripNonNumber(value);

    let tamanho: number;
    let numeros: string;
    let digitos: string;
    let soma: number;
    let pos: number;
    value = value.replace(/[^\d]+/g, "");
    if (value === "") { return false; }
    if (value.length !== 14) { return false; }

    // Elimina CNPJs invalidos conhecidos
    if (value === "00000000000000" ||
      value === "11111111111111" ||
      value === "22222222222222" ||
      value === "33333333333333" ||
      value === "44444444444444" ||
      value === "55555555555555" ||
      value === "66666666666666" ||
      value === "77777777777777" ||
      value === "88888888888888" ||
      value === "99999999999999") {
      return false;
    }

    // Valida DVs
    tamanho = value.length - 2;
    numeros = value.substring(0, tamanho);
    digitos = value.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += +(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    let resultado: number = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== +(digitos.charAt(0))) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = value.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += +(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== +(digitos.charAt(1))) {
      return false;
    }
    return true;
  }
}
export default Is;
