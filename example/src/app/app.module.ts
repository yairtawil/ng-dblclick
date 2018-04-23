import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgDbclickModule } from 'ng-dblclick';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDbclickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
