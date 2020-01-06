import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}

  title = "sjairplane";

  // tslint:disable-next-line: ban-types
  public showBookings: Boolean = true;

  async ngOnInit() {}
}
