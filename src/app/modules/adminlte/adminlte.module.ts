import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlteComponent } from './adminlte.component';
import { ContentHeaderComponent } from 'src/app/components/content-header/content-header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MainSidebarComponent } from 'src/app/components/main-sidebar/main-sidebar.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { PreloaderComponent } from 'src/app/components/preloader/preloader.component';
import { RightSidebarComponent } from 'src/app/components/right-sidebar/right-sidebar.component';
import { AdminlteRoutingModule } from './adminlte-routing.module';

@NgModule({
  declarations: [
    AdminlteComponent,
    PreloaderComponent,
    NavbarComponent,
    MainSidebarComponent,
    ContentHeaderComponent,
    FooterComponent,
    RightSidebarComponent,
  ],
  imports: [CommonModule, AdminlteRoutingModule],
})
export class AdminlteModule {}
