import { Component, OnInit, Input } from "@angular/core";
import { TagsService } from "../../../services/tags.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-general-sub-tag-list",
  templateUrl: "./general-sub-tag-list.component.html",
  styleUrls: ["./general-sub-tag-list.component.css"]
})
export class GeneralSubTagListComponent implements OnInit {
  @Input() categoryId: string;
  data: Observable<any[]>;
  constructor(private tagService: TagsService) {}

  ngOnInit() {
    this.displayGeneralSubTags(this.categoryId);
  }

  displayGeneralSubTags(id: string) {
    this.data = this.tagService.getGeneralSubTags(id);
    console.log(this.data);
  }
}
