import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  
  public _fakeusername:string = "pineapple";
  public _fakemail:string = "johndoe@mymail.com";
  public _fakepassword:string = "123hello";

  public checkUser(){
    console.log(this.loginUserData);
  }

  constructor() { }
  ngOnInit() {}

}
