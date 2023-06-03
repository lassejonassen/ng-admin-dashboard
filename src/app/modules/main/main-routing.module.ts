import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/guards/auth.guard';
import { MainComponent } from './main.component';
import { SimpleComponent } from './pages/search/simple/simple.component';
import { EnhancedComponent } from './pages/search/enhanced/enhanced.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', component: MainComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pages/search/simple', component: SimpleComponent },
      { path: 'pages/search/enhanced', component: EnhancedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
