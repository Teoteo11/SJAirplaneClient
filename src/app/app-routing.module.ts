import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from './components/users/users.component';
import { UsersDetailComponent } from "./components/users-detail/users-detail.component";
import { PrenotationComponent } from "./components/prenotation/prenotation.component";
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: "login", component: DashboardComponent },
  { path: "prenotation", component: PrenotationComponent },
  { path: "app-users", component: UsersComponent },
  { path: "app-users/:id", component: UsersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
