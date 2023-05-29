import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlteComponent } from './adminlte.component';
import { AdminlteRoutingModule } from './adminlte-routing.module';
import { PreloaderComponent } from './preloader/preloader.component';
import { FooterComponent } from './footer/footer.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AdminlteComponent,
    PreloaderComponent,
    NavbarComponent,
    MainSidebarComponent,
    ContentHeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    MenuItemComponent,
  ],
  imports: [CommonModule, AdminlteRoutingModule],
})
export class AdminlteModule {}
