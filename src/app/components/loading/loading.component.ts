import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"]
})
export class LoadingComponent implements OnInit {
  @Input() isLoading: boolean;
  constructor() {}

  ngOnInit() {
  //  console.log(this.isLoading, "loading");
  }
}
