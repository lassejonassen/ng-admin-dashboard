import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [DashboardComponent, MainComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
