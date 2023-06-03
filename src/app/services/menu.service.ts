import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuSource = new Subject<string>();
  menuSource$ = this.menuSource.asObservable();

  private resetSource = new Subject();
  resetSource$ = this.resetSource.asObservable();

  private _mainSidebarMenuModel = new BehaviorSubject<MenuItem[]>([]);
  mainSidebarMenuModel$ = this._mainSidebarMenuModel.asObservable();

  constructor() {
    this.changeMainSidebarMenu();
  }

  private changeMainSidebarMenu(): void {
    const model: MenuItem[] = [
      {
        label: 'Dashboard',
        icon: 'fas fa-home nav-icon',
        href: '/dashboard',
        visible: true,
      },
      {
        label: 'Widgets',
        icon: 'fas fa-home nav-icon',
        href: '/pages/widgets',
        visible: true,
      },
      {
        label: 'Charts',
        icon: 'fas fa-home nav-icon',
        href: '/pages/charts',
        visible: true,
        items: [
          {
            label: 'ChartJS',
            icon: 'fas fa-home nav-icon',
            href: '/pages/charts/chartjs',
            visible: true,
          },
          {
            label: 'Flot',
            icon: 'fas fa-home nav-icon',
            href: '/pages/charts/flot',
            visible: true,
          },
          {
            label: 'Inline',
            icon: 'fas fa-home nav-icon',
            href: '/pages/charts/inline',
            visible: true,
          },
          {
            label: 'uPlot',
            icon: 'fas fa-home nav-icon',
            href: '/pages/charts/uplot',
            visible: true,
          },
        ],
      },
      {
        label: 'UI Elements',
        icon: 'fas fa-home nav-icon',
        href: '/pages/ui',
        visible: true,
        items: [
          {
            label: 'General',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/general',
            visible: true,
          },
          {
            label: 'Icons',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/icons',
            visible: true,
          },
          {
            label: 'Buttons',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/buttons',
            visible: true,
          },
          {
            label: 'Sliders',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/sliders',
            visible: true,
          },
          {
            label: 'Modals & Alerts',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/modals',
            visible: true,
          },
          {
            label: 'Navbar & Tabs',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/navbar',
            visible: true,
          },
          {
            label: 'Timeline',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/timeline',
            visible: true,
          },
          {
            label: 'Ribbons',
            icon: 'fas fa-home nav-icon',
            href: '/pages/ui/ribbons',
            visible: true,
          },
        ],
      },
      {
        label: 'Forms',
        icon: 'fas fa-home nav-icon',
        href: '/pages/forms',
        visible: true,
        items: [
          {
            label: 'General Elements',
            icon: 'fas fa-home nav-icon',
            href: '/pages/forms/general',
            visible: true,
          },
          {
            label: 'Advanced Elements',
            icon: 'fas fa-home nav-icon',
            href: '/pages/forms/advanced',
            visible: true,
          },
          {
            label: 'Editors',
            icon: 'fas fa-home nav-icon',
            href: '/pages/forms/editors',
            visible: true,
          },
          {
            label: 'Validation',
            icon: 'fas fa-home nav-icon',
            href: '/pages/forms/validation',
            visible: true,
          },
        ],
      },
      {
        label: 'Tables',
        icon: 'fas fa-home nav-icon',
        href: '/pages/tables',
        visible: true,
        items: [
          {
            label: 'Simple Tables',
            icon: 'fas fa-home nav-icon',
            href: '/pages/tables/simple',
            visible: true,
          },
          {
            label: 'DataTables',
            icon: 'fas fa-home nav-icon',
            href: '/pages/tables/data',
            visible: true,
          },
          {
            label: 'jsGrid',
            icon: 'fas fa-home nav-icon',
            href: '/pages/tables/jsgrid',
            visible: true,
          },
        ],
      },
      {
        label: 'Calendar',
        icon: 'fas fa-home nav-icon',
        href: '/pages/calendar',
        visible: true,
      },
      {
        label: 'Gallery',
        icon: 'fas fa-home nav-icon',
        href: '/pages/gallery',
        visible: true,
      },
      {
        label: 'Kanban Board',
        icon: 'fas fa-home nav-icon',
        href: '/pages/kanban',
        visible: true,
      },
      {
        label: 'Mailbox',
        icon: 'fas fa-home nav-icon',
        href: '/pages/mailbox',
        visible: true,
        items: [
          {
            label: 'Inbox',
            icon: 'fas fa-home nav-icon',
            href: '/pages/mailbox/inbox',
            visible: true,
          },
          {
            label: 'Compose',
            icon: 'fas fa-home nav-icon',
            href: '/pages/mailbox/compose',
            visible: true,
          },
          {
            label: 'Read',
            icon: 'fas fa-home nav-icon',
            href: '/pages/mailbox/read',
            visible: true,
          },
        ],
      },
      {
        label: 'Pages',
        icon: 'fas fa-home nav-icon',
        href: '/pages/examples',
        visible: true,
        items: [
          {
            label: 'Invoice',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/invoice',
            visible: true,
          },
          {
            label: 'Profile',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/profile',
            visible: true,
          },
          {
            label: 'E-commerce',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/e-commerce',
            visible: true,
          },
          {
            label: 'Projects',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/projects',
            visible: true,
          },
          {
            label: 'Project Add',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/project-add',
            visible: true,
          },
          {
            label: 'Project Edit',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/project-edit',
            visible: true,
          },
          {
            label: 'Project Detail',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/project-detail',
            visible: true,
          },
          {
            label: 'Contacts',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/contacts',
            visible: true,
          },
          {
            label: 'faq',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/faq',
            visible: true,
          },
          {
            label: 'Contact us',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/contact-us',
            visible: true,
          },
        ],
      },
      {
        label: 'Extras',
        icon: 'fas fa-home nav-icon',
        href: '/pages/examples',
        visible: true,
        items: [
          {
            label: 'Login & Register v1',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples',
            visible: true,
            items: [
              {
                label: 'Login v1',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/login',
                visible: true,
              },
              {
                label: 'Register v1',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/register',
                visible: true,
              },
              {
                label: 'Forgot password v1',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/forgot-password',
                visible: true,
              },
              {
                label: 'Recover password v1',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/recover-password',
                visible: true,
              },
            ],
          },
          {
            label: 'Login & Register v2',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples',
            visible: true,
            items: [
              {
                label: 'Login v2',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/login-v2',
                visible: true,
              },
              {
                label: 'Register v2',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/register-v2',
                visible: true,
              },
              {
                label: 'Forgot password v2',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/forgpt-password-v2',
                visible: true,
              },
              {
                label: 'Recover password v2',
                icon: 'fas fa-home nav-icon',
                href: '/pages/examples/recover-password-v2',
                visible: true,
              },
            ],
          },
          {
            label: 'Lockscreen',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/lockscreen',
            visible: true,
          },
          {
            label: 'Legacy User Menu',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/legacy-user-menu',
            visible: true,
          },
          {
            label: 'Language Menu',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/language-menu',
            visible: true,
          },
          {
            label: 'Error 404',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/404',
            visible: true,
          },
          {
            label: 'Error 500',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/500',
            visible: true,
          },
          {
            label: 'Pace',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/pace',
            visible: true,
          },
          {
            label: 'Blank',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/blank',
            visible: true,
          },
          {
            label: 'Starter',
            icon: 'fas fa-home nav-icon',
            href: '/pages/examples/starter',
            visible: true,
          },
        ],
      },
      {
        label: 'Search',
        icon: 'fas fa-home nav-icon',
        href: 'pages/search',
        visible: true,
        items: [
          {
            label: 'Simple search',
            icon: 'fas fa-home nav-icon',
            href: '/pages/search/simple',
            visible: true,
          },
          {
            label: 'Enhanced',
            icon: 'fas fa-home nav-icon',
            href: '/pages/search/enhanced',
            visible: true,
          },
        ],
      },
    ];
    this._mainSidebarMenuModel.next(model);
  }

  onMenuStateChange(key: string) {
    this.menuSource.next(key);
  }
}
