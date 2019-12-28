import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-general-category-tag-display",
  templateUrl: "./general-category-tag-display.component.html",
  styleUrls: ["./general-category-tag-display.component.css"]
})
export class GeneralCategoryTagDisplayComponent implements OnInit {
  @Input() tagName: string;
  @Input() description: string;
  @Input() catTagId: string;

  constructor() {}

  ngOnInit() {}
}
