import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-general-category-tag-display',
  templateUrl: './general-category-tag-display.component.html',
  styleUrls: ['./general-category-tag-display.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GeneralCategoryTagDisplayComponent implements OnInit {
  @Input() tagName: string;
  @Input() description: string;
  @Input() catTagId: string;

  constructor() {}

  ngOnInit() {}
}
