import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from './components/users/users.component';
import { UsersDetailComponent } from "./components/users-detail/users-detail.component";
import { PrenotationComponent } from "./components/prenotation/prenotation.component";
import { BackoffComponent } from './components/admin/backoff/backoff.component';

const routes: Routes = [
  { path: "backoff", component: BackoffComponent },
  { path: "prenotation", component: PrenotationComponent },
  { path: "app-users", component: UsersComponent },
  { path: "app-users/:id", component: UsersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
