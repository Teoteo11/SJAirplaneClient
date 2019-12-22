import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./modules";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  async getUsers(): Promise<User[]> {
    return this.httpClient
      .get<User[]>("http://localhost:3002/users")
      .toPromise();
  }

  async getUserById(id: string): Promise<User> {
    return this.httpClient
      .get<User>(`http://localhost:3002/users/${id}`)
      .toPromise();
  }
}
