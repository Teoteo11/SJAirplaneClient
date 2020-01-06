import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}

  title = "sjairplane";

  @Input() public adminModeIsOn:boolean;
  public showBookings: Boolean = true;

  public setAdminMode(value){
    this.adminModeIsOn = value;
  }
  
  async ngOnInit() {
    this.adminModeIsOn = false;
  }
}
