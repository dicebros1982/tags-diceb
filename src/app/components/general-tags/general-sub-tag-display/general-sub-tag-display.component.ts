import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-general-sub-tag-display",
  templateUrl: "./general-sub-tag-display.component.html",
  styleUrls: ["./general-sub-tag-display.component.css"]
})
export class GeneralSubTagDisplayComponent implements OnInit {
  @Input() tagName: string;
  constructor() {}

  ngOnInit() {}
}
