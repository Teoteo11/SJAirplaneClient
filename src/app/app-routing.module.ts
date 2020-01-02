import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersDetailComponent } from "./users-detail/users-detail.component";
import { PrenotationComponent } from "./prenotation/prenotation.component";
import { BackoffComponent } from "./backoff/backoff.component";

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
