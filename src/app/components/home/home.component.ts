import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet earum illum quo laborum sunt tempora animi. Dignissimos, aperiam architecto incidunt quas minima distinctio dolores deleniti cupiditate dolore laborum ipsa?
    </p>
    <app-clases></app-clases>
    <br><br>
    <p [appResaltado]="'orange'">
        Hola Mundo
    </p>
    <br><br>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  } 

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
  } 
}
