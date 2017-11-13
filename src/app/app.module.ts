import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DynamicModule} from './dynamic/dynamic.module';


@NgModule({
  imports: [BrowserModule, DynamicModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {
  }
}
