import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DynamicComponent} from './dynamic/dynamic.component';
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    DynamicComponent, AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [DynamicComponent, AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {
  }
}
