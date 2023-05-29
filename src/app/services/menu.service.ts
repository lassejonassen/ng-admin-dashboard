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
        icon: '',
        href: '/',
        visible: true,
        items: [
          {
            label: 'Test',
            icon: '',
            href: '/',
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
