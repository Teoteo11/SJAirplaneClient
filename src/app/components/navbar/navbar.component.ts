import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() adminswitcher = new EventEmitter<boolean>();

  setAdminMode(value:boolean){
    this.adminswitcher.emit(value);
  }

  constructor() {}
  ngOnInit() {}

}
