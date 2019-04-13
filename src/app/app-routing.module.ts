import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './gaurds/auth-guard.service';
import {GuestGuard} from './gaurds/guest-guard.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  { path: 'login', component: LoginComponent,  canActivate: [GuestGuard] },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
