import {AfterViewInit, Component, ComponentFactoryResolver, ElementRef, QueryList, ViewChildren, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  template: `
    <app-dynamic-component class="example" id="example1"></app-dynamic-component>
    <app-dynamic-component class="example" id="example2"></app-dynamic-component>
  `,
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(DynamicComponent, {read: ElementRef}) children: QueryList<DynamicComponent>;

  constructor(private resolver: ComponentFactoryResolver, private elRef: ElementRef, private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {

    setTimeout(() => {

      // const nativeElements = this.elRef.nativeElement.querySelectorAll('.example');

      const factory = this.resolver.resolveComponentFactory(DynamicComponent);
      const componentRef0 = this.viewContainerRef.createComponent(factory);
      const first: any = this.children.first;
      componentRef0.instance.type = first.nativeElement.id;

      const componentRef1 = this.viewContainerRef.createComponent(factory);
      const last: any = this.children.last;
      componentRef1.instance.type = last.nativeElement.id;
    }, 1);
  }
}
