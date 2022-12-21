import { Component } from "@angular/core";
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";

interface Link {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "energo";

  links: Link[] = [
    { name: "Dashboard", url: "/", icon: "dashboard" },
    { name: "Account", url: "/", icon: "account_box" },
  ];
}
