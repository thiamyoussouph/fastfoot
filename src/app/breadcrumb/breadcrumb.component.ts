import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  menuItems: MenuItem[];
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = {icon: 'pi pi-home', routerLink: '/'};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private title: Title) { }

  ngOnInit(): void {
      this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute));
      this.menuItems = this.createBreadcrumbs(this.activatedRoute);
  }
  
  private createBreadcrumbs(route: ActivatedRoute, routerLink: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
      const children: ActivatedRoute[] = route.children;
      
      if (children.length === 0) {
          this.title.setTitle(`Kai Fleet | Home`);
          return null;
      }
  
      for (const child of children) {
          const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

          if (routeURL !== '') {
              routerLink + `${routeURL}`;
          }
          else {
              this.title.setTitle(`Kai Fleet | Home`);
              return null;
          }
        
          const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
          this.title.setTitle(`Kai Fleet | ${label}`);
          if (label !== null || label !== undefined) {
              breadcrumbs.push({label: label, routerLink: routerLink});
          }
      }
      return breadcrumbs;
  }
}
