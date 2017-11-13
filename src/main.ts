import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {DynamicLoader} from './app/loader';
import {AppComponent} from './app/app.component';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

platformBrowserDynamic().bootstrapModule(AppModule).then((injector: any) => {
  const dynamicLoader = new DynamicLoader(injector);
  dynamicLoader.loadComponent(AppComponent, document.getElementById('' + (~~(Math.random() * 4))));
});
