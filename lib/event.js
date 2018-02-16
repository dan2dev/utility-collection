export var Event;
(function (Event) {
    function once(target, type, listener) {
        const fn = (ev) => {
            target.removeEventListener(type, fn);
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.once = once;
    function bind(target, type, listener) {
        const fn = (ev) => {
            listener(ev);
        };
        target.addEventListener(type, fn);
    }
    Event.bind = bind;
    // passive supported
    const passiveSupported = false;
    function passive() {
        return (passiveSupported ? { passive: true } : false);
    }
    Event.passive = passive;
    (function Initialize() {
        // detect if suport passive event
        try {
            const options = Object.defineProperty({}, "passive", {
                get: () => {
                    this.passiveSupported = true;
                },
            });
            window.addEventListener("test", null, options);
        }
        catch (err) {
            //
        }
    })();
})(Event || (Event = {}));
export default Event;
//# sourceMappingURL=event.js.map