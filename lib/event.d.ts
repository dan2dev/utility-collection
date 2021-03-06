export declare namespace Event {
    function once(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void): void;
    function onceOutside(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void): void;
    function bindOutside(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void): void;
    function bind(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void): void;
    function passive(): any;
}
export default Event;
