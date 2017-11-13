import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
    <h1>{{type}}</h1>
  `,
})
export class DynamicComponent implements OnInit {

  type;

  constructor() {
  }

  ngOnInit() {
  }

}
