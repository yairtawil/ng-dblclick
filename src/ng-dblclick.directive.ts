import { Directive, EventEmitter, Output, Input, HostListener } from '@angular/core';
export const DEFAULT_DELAY = 200;

@Directive({
	selector: '[ngDblClick]'
})

export class NgDbclickDirective {
	@Output('on-click') onClick = new EventEmitter();
	@Output('on-dblclick') onDblClick = new EventEmitter();
	private _delay = DEFAULT_DELAY;

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
	onClickEvent($event: MouseEvent) {
		if (!this.down) {
			this.down = true;
			this.wait = setTimeout((() => {
				this.wait = null;
				this.onClick.emit($event);
				this.down = false;
			}), this.delay);
		} else {
			this.onDblClick.emit($event);
			if (this.wait) {
				clearTimeout(this.wait);
				this.wait = null;
				this.down = false;
			}
		}
	};

}
