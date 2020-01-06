import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _fakeusername:string = "pineapple";
  public _fakemail:string = "johndoe@mymail.com";
  public _fakepassword:string = "123hello";

  constructor() { }
  ngOnInit() {}

}
