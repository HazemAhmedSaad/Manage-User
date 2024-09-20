import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { AddUserComponent } from './Components/add-user/add-user.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  {path: 'user', component: UserComponent},
  {path: "user/:id", component: AddUserComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];
