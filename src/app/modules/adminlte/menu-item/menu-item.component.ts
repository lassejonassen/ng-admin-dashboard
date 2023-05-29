import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: '[app-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @HostBinding('class.active-menuitem') 'active' = false;

  @Input() item: any;
  @Input() index: number;
  @Input() root: boolean;
  @Input() parentKey: string;

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  key: string;

  constructor(
    public app: MainComponent,
    public router: Router,
    private menuService: MenuService
  ) {
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(
      (key) => {
        if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
          this.active = false;
        }
      }
    );

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
  }

  ngOnDestroy(): void {}
  ngOnInit(): void {}

  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return true;
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key);

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    } else {
      // activate item
      this.active = true;
    }
    return true;
  }
}
