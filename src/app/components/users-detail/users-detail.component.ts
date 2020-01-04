import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from "../../../interfaces";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: "app-users-detail",
  templateUrl: "./users-detail.component.html",
  styleUrls: ["./users-detail.component.css"]
})
export class UsersDetailComponent implements OnInit {
  public users: User = {
    _id: "",
    username: "",
    name: "",
    surname: "",
    tickets: []
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UsersService
  ) {}

  async ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.users = await this.userService.getUserById(id);
  }
}
