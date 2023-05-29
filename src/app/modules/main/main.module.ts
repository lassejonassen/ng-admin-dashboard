import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { SmallBoxComponent } from 'src/app/components/small-box/small-box.component';

@NgModule({
  declarations: [DashboardComponent, MainComponent, SmallBoxComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
