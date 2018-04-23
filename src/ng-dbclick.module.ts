import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDbclickDirective } from './ng-dbclick.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgDbclickDirective],
	exports: [NgDbclickDirective]
})
export class NgDbclickModule { }
