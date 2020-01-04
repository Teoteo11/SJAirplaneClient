import { Component, OnInit } from "@angular/core";
import { User } from "../modules/index";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  constructor(private userService: UsersService) {}

  async ngOnInit() {
    this.usersList = await this.userService.getUsers();
  }
}
