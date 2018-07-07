export declare const DATA_SCROLLABLE = "data-scrollable";
export declare const CLASS_FOCUS = "scroll--active";
export declare namespace ScrollSwitch {
    class Scrollable {
        private id;
        private element;
        private y;
        private frozen;
        private unfreezing;
        constructor(element: HTMLElement);
        getId(): string | null;
        unfreeze(): void;
        freeze(): void;
    }
    function freezeElement(element: HTMLElement): void;
    function freezeAllButId(id?: string | null): void;
    function freezeAllButElement(element: HTMLElement): void;
    function unfreezeElement(element: HTMLElement): void;
}
export default ScrollSwitch;
