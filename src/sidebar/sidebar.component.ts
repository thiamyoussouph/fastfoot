import { Component, OnInit } from '@angular/core';
import {MenuItem,} from 'primeng/api';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {

    this.items = [
      {
        label: 'Vehicules',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list', routerLink: 'vehicules' },
          { label: 'Creer', icon: 'pi pi-fw pi-plus' }
        ]
      },
      {
        label: 'A venir...',
        items: []
      }
    ];
  }
}
