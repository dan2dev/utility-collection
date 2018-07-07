export declare namespace Dom {
    function joinClass(classNames: Array<string | undefined | null> | string): string;
    function insertBefore(element: Node, targetElement: Node): void;
    function insertAfter(element: Node, targetElement: Node): void;
    function remove(element: Node): void;
    function htmlToNode(html: string | Element): Node | null;
    function htmlToElement(html: string | Element): HTMLElement;
    function getAttributes(element: Element | Node): {
        [key: string]: string;
    };
    function childElement(node: Element, each: (node: Element) => void): void;
    function nodeDown(node: Node | Node, each: (node: Node | Node, parent?: Node | Node) => void | boolean): void;
    function childNodeDown(node: Node, each: (node: Node, parent?: Node) => void | boolean): void;
    function elementDown(node: Element, each: (node: Element, parent?: Element) => void | boolean): void;
    function childElementDown(node: Element, each: (node: HTMLElement, parent?: HTMLElement) => void | boolean): void;
    function elementUp(node: Element | HTMLElement, each: (node: Element | HTMLElement) => boolean | void): void;
    function parentElementUp(node: Element | HTMLElement | Node, each: (node: Element | HTMLElement | Node | null) => boolean | void): void;
    function attribute(element: Element | HTMLElement | Node, each: (key: string, value: string) => void): void;
    function findNextSibling(target: Node | Node, validation: (node: Node | Node) => boolean | void): Node | Node | null;
    function findPrevSibling(target: Node | Node, validation: (node: Node | Node) => boolean | void): Node | Node | null;
    function findAllSiblings(target: Node): Node[];
    function prependChild(parent: HTMLElement, child: HTMLElement): void;
    function appendChild(parent: HTMLElement, child: HTMLElement): void;
    function replaceElement(oldElement: HTMLElement, newElement: HTMLElement): void;
    function swapNodes(n1: HTMLElement, n2: HTMLElement): void;
}
export default Dom;
