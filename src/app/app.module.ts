import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    MainSidebarComponent,
    ContentHeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
