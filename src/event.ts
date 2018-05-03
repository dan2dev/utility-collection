export namespace Event {
  export function once(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void) {
    const fn = (ev: any) => {
      target.removeEventListener(type, fn);
      listener(ev);
    };
    target.addEventListener(type, fn);
  }
  export function onceOutside(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void) {
    const fn = (ev: any) => {
      const inside = target.contains(ev.target);
      if (!inside) {
        listener(ev);
        document.removeEventListener(type, fn);
      }
    };
    document.addEventListener(type, fn);
  }
  export function bindOutside(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void) {
    const fn = (ev: any) => {
      const inside = target.contains(ev.target);
      if (!inside) {
        listener(ev);
      }
    };
    document.addEventListener(type, fn);
  }
  export function bind(target: Node, type: string, listener: (event: EventListenerOrEventListenerObject) => void) {
    const fn = (ev: any) => {
      listener(ev);
    };
    target.addEventListener(type, fn);
  }
  // passive supported
  const passiveSupported = false;
  export function passive(): any {
    return (passiveSupported ? { passive: true } : false);
  }
  (function Initialize() {
    // detect if suport passive event
    try {
      const options = Object.defineProperty({}, "passive", {
        get: () => {
          this.passiveSupported = true;
        },
      });
      window.addEventListener("test", () => {
        return null;
      }, options);
    } catch (err) {
      //
    }
  })();
}
export default Event;
