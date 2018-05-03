export namespace Dom {
  export function insertBefore(element: Node, targetElement: Node): void {
    targetElement.parentElement!.insertBefore(element, targetElement);
  }
  export function insertAfter(element: Node, targetElement: Node): void {
    const parent = targetElement.parentNode;
    if (parent!.lastChild === targetElement) {
      parent!.appendChild(element);
    } else {
      parent!.insertBefore(element, targetElement.nextSibling);
    }
  }
  export function remove(element: Node): void {
    if (element.parentElement !== null) {
      element.parentElement.removeChild(element);
    }
  }
  export function htmlToNode(html: string | Element): Node | null {
    if (html instanceof Node) {
      return html;
    } else {
      const node: HTMLDivElement = document.createElement("div");
      node.innerHTML = html;
      return node.firstElementChild;
    }
  }

  export function htmlToElement(html: string | Element): HTMLElement {
    return htmlToNode(html) as HTMLElement;
  }
  // atributes  ---------------------------------------------
  export function getAttributes(element: Element | Node): { [key: string]: string; } {
    const attrs = (element as HTMLElement).attributes;
    const newAttr: { [key: string]: string; } = {};
    for (let i = 0; i < attrs.length; i++) {
      newAttr[attrs[i].name] = attrs[i].value;
    }
    return newAttr;
  }

  // Loops e giros pelo dom --------------------------------------------
  export function childElement(node: Element, each: (node: Element) => void): void {
    let child: Node | null = node.firstChild;
    while (child) {
      if (child.nodeType === 1) {
        each(child as Element);
      }
      child = child.nextSibling;
    }
  }

  // element down --------------------------
  export function nodeDown(node: Node | Node, each: (node: Node | Node, parent?: Node | Node) => void | boolean): void {
    if (each(node, undefined) !== false) {
      this.childNodeDown(node, each);
    }
  }

  export function childNodeDown(node: Node, each: (node: Node, parent?: Node) => void | boolean): void {
    const parent: Node = node;
    let child: Node | null = node.firstChild;
    while (child) {
      const eachReturn: boolean | void = each(child, parent);
      if (eachReturn !== false) {
        this.childNodeDown(child, each);
      }
      child = child.nextSibling;
    }
  }

  export function elementDown(node: Element, each: (node: Element, parent?: Element) => void | boolean): void {
    if (each(node, undefined) !== false) {
      this.childElementDown(node, each);
    }
  }

  export function childElementDown(node: Element, each: (node: HTMLElement, parent?: HTMLElement) => void | boolean): void {
    const parent: Element = node;
    let child: Node | null = node.firstChild;
    while (child) {
      if (child.nodeType === 1) {
        const eachReturn: boolean | void = each(child as HTMLElement, parent as HTMLElement);
        if (eachReturn !== false) {
          this.childElementDown(child as HTMLElement, each);
        }
      }
      child = child.nextSibling;
    }
  }

  // element up --------------------------
  export function elementUp(node: Element | HTMLElement, each: (node: Element | HTMLElement) => boolean | void): void {
    if (each(node) !== false) {
      parentElementUp(node, each);
    }
  }

  export function parentElementUp(node: Element | HTMLElement | Node, each: (node: Element | HTMLElement | Node | null) => boolean | void): void {
    let retorno: boolean | void = true;
    let current: Element | Node | null = (node as Node).parentNode;
    do {
      retorno = each(current);
      current = (current as Node).parentNode;
    } while (retorno !== false && current !== null && current !== undefined && node.nodeName !== "BODY");
  }

  // dom --------------------------
  export function attribute(element: Element | HTMLElement | Node, each: (key: string, value: string) => void): void {
    // TODO: this still need to be tested
    const attributes = (element as HTMLElement).attributes;
    for (let i = 0; i < attributes.length; i++) {
      each(attributes[i].name, attributes[i].value);
    }
  }

  export function findNextSibling(target: Node | Node, validation: (node: Node | Node) => boolean | void): Node | Node | null {
    let current: Node | Node | null = target.nextSibling;
    while (current !== null) {
      if (validation(current) === true) {
        return current;
      } else {
        current = current.nextSibling;
      }
    }
    return null;
  }

  export function findPrevSibling(target: Node | Node, validation: (node: Node | Node) => boolean | void): Node | Node | null {
    let current: Node | Node | null = target.previousSibling;
    while (current !== null) {
      if (validation(current) === true) {
        return current;
      } else {
        current = current.previousSibling;
      }
    }
    return null;
  }

  export function findAllSiblings(target: Node): Node[] {
    const siblings: Node[] = [];
    findPrevSibling(target, (node) => {
      siblings.push(node);
      return false;
    });
    findNextSibling(target, (node) => {
      siblings.push(node);
      return false;
    });
    return siblings;
  }

  export function prependChild(parent: HTMLElement, child: HTMLElement): void {
    const firstChild: Node | null = parent.firstChild;
    if (firstChild === undefined) {
      parent.appendChild(child);
    } else {
      parent.insertBefore<HTMLElement>(child, firstChild);
    }
  }
  export function appendChild(parent: HTMLElement, child: HTMLElement) {
    parent.appendChild(child);
  }

  export function replaceElement(oldElement: HTMLElement, newElement: HTMLElement): void {
    oldElement.parentElement!.replaceChild(newElement, oldElement);
  }

  export function swapNodes(n1: HTMLElement, n2: HTMLElement): void {
    let i1: any;
    let i2: any;
    let p1 = n1.parentNode as HTMLElement;
    let p2 = n2.parentNode as HTMLElement;
    if (p1 === undefined || p1 === null) {
      p1 = document.createElement("div");
      p1.appendChild(n1);
    }
    if (p2 === undefined || p2 === null) {
      p2 = document.createElement("div");
      p2.appendChild(n2);
    }
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) {
      return;
    }
    for (let i: number = 0; i < p1.children.length; i++) {
      if (p1.children[i].isEqualNode(n1)) {
        i1 = i;
      }
    }
    for (let i = 0; i < p2.children.length; i++) {
      if (p2.children[i].isEqualNode(n2)) {
        i2 = i;
      }
    }

    if (p1.isEqualNode(p2) && i1 < i2) {
      i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
  }

}
export default Dom;
