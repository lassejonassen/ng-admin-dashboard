import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, combineLatest, takeUntil, delay } from 'rxjs';
import { MenuItem } from 'src/app/models/menu-item.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit, OnDestroy {
  model: MenuItem[];
  unsubscribeAll = new Subject();

  userFullname: string = 'Lasse Jonassen';

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    combineLatest([this.menuService.mainSidebarMenuModel$]).subscribe(
      ([menuModel]) => {
        this.model = menuModel;
      }
    );

    console.log(this.model);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(0);
    this.unsubscribeAll.complete();
  }
}
