import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  click = 0;
  dblclick = 0;
  ngClick = 0;
  ngDblClick = 0;
  delay = 300;
  timer = 0;

  startTimer() {
    Observable.interval()
      .takeWhile((v) => v <= +this.delay / 10)
      .do((v) => this.timer = v * 10)
      .filter(v => v === +this.delay / 10)
      .do(() => this.timer = 0)
      .subscribe();
  }
}
