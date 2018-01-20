import { Event } from "./event";

export const DATA_SCROLLABLE = "data-scrollable";
export const CLASS_FOCUS = "scroll--active";
export namespace ScrollSwitch {
	let unfreezeDelay: number;
	export class Scrollable {
		private id: string;
		private element: HTMLElement = null;
		private y: number = 0;
		private frozen: boolean = false;
		private unfreezing: boolean = false;
		constructor(element: HTMLElement) {
			this.element = element;
			if (this.element.getAttribute(DATA_SCROLLABLE) === undefined) {
				this.id = newScrollableId();
				this.element.setAttribute(DATA_SCROLLABLE, this.id);
			} else {
				this.id = this.element.getAttribute(DATA_SCROLLABLE);
			}
			// register event
			const unfreezeEvent = (e: Event) => {
				window.scrollTo(0, window.scrollY);
				this.unfreeze();
			};
			const freezeAllEvent = (e: Event) => {
				freezeAllButId(null);
			};
			element.addEventListener("touchstart", unfreezeEvent, Event.passive());
			element.addEventListener("mouseenter", unfreezeEvent, Event.passive());
			element.addEventListener("pointermove", unfreezeEvent, Event.passive());
			element.addEventListener("mouseleave", freezeAllEvent, Event.passive());
		}
		public getId(): string {
			return this.id;
		}
		public unfreeze() {
			if (this.frozen && !this.unfreezing) {
				this.unfreezing = true;
				freezeAllButId(this.id);
				document.body.style.height = `${this.element.scrollHeight}px`;
				window.scroll(0, this.y);
				this.element.setAttribute("style", `position: absolute; top: 0; z-index: ${this.element.style.zIndex}; `);
				this.element.classList.add(CLASS_FOCUS);
				document.body.style.height = "";
				this.y = 0;
				this.frozen = false;
				this.unfreezing = false;
				unfreezeDelay = undefined;
			}
		}
		public freeze() {
			if (!this.frozen) {
				this.y = window.scrollY + 0;
				this.element.setAttribute("style", `position: fixed; top: -${this.y}px; z-index: ${this.element.style.zIndex}; `);
				this.element.classList.remove(CLASS_FOCUS);
				this.frozen = true;
			}
		}
	}
	const store: { [key: string]: Scrollable } = {};
	let lastId: number = 1;
	function newScrollableId(): string {
		lastId = lastId + 1;
		return lastId.toString();
	}
	function identifyElement(element: HTMLElement): Scrollable {
		if (element.parentElement !== document.body) {
			return null;
		}
		let id = element.getAttribute(DATA_SCROLLABLE);
		const stored = (id !== undefined) ? (store[id] !== undefined) : false;
		if (stored) {
			return store[id];
		} else {
			const s = new Scrollable(element);
			id = s.getId();
			store[id] = s;
			return store[id];
		}
	}
	export function freezeElement(element: HTMLElement): void {
		const scroll = identifyElement(element);
		if (scroll !== null) {
			scroll.freeze();
		}
	}
	export function freezeAllButId(id: string | null = null): void {
		for (const i in store) {
			if (i !== id) {
				store[i].freeze();
			}
		}
	}
	export function freezeAllButElement(element: HTMLElement): void {
		const scroll = identifyElement(element);
		if (scroll !== null) {
			freezeAllButId(scroll.getId());
		}
	}
	export function unfreezeElement(element: HTMLElement): void {
		const scroll = identifyElement(element);
		if (scroll !== null) {
			scroll.unfreeze();
		}
	}
}
export default ScrollSwitch;
