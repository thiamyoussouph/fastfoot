import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions :Array<any> = [
    {label: 'Home', icon: 'house', route: '/home'},
    {label: 'Products', icon: 'search', route: '/products'},
    {label: 'New Product', icon: 'safe', route: '/new-product'}
  ];
currentAction: any;
  SetCurentAction(action: any) {
    this.currentAction = action;
  }
}
