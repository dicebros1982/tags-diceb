import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TagsService } from "../../../services/tags.service";

@Component({
  selector: "app-general-category-tag-list",
  templateUrl: "./general-category-tag-list.component.html",
  styleUrls: ["./general-category-tag-list.component.css"]
})
export class GeneralCategoryTagListComponent implements OnInit {
  data: Observable<any[]>;
  constructor(private tagService: TagsService) {}
  site: "https://medium.com/@jahvi/css-only-accordion-grid-496137f6fc5a";
  ngOnInit() {
    this.displayGeneralCategoryTags();
  }

  displayGeneralCategoryTags() {
    this.data = this.tagService.getGeneralCategoryTags();
  }
}
