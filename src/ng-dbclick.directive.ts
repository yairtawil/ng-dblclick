import { Directive, EventEmitter, Output, Input, HostListener } from '@angular/core';
export const DEFAULT_DURATION = 200;

@Directive({
	selector: '[ngDblClick]'
})

export class NgDbclickDirective {
	@Output() ngClick = new EventEmitter();
	@Output() ngDblclick = new EventEmitter();
	private _delay = DEFAULT_DURATION;

	@Input('ngDblClick')
	set delay(value) {
		if (!isNaN(value) && Boolean(value)) {
			this._delay = +value;
		}
	}

	get delay() {
		return this._delay;
	}

	down: boolean;
	wait: number;

	@HostListener('click', ['$event'])
	onClick($event: MouseEvent) {
		if (!this.down) {
			this.down = true;
			this.wait = setTimeout((() => {
				this.ngClick.emit($event);
				this.clear();
			}), this.delay);
		} else {
			this.ngDblclick.emit($event);
			this.clear();
		}
	};

	clear() {
		if (this.wait) {
			window.clearTimeout(this.wait);
			this.wait = null;
		}
		this.down = false;
	}

}
