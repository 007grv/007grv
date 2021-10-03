import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { PageDetailsComponent } from './components/templates/page-details/page-details.component';
import { PageListComponent } from './components/templates/page-list/page-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'page-detail', component: PageDetailsComponent},
  { path: 'page-list', component: PageListComponent},
 
  { path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
