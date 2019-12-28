export interface GeneralCategoryTag {
  created: Date;
  name: string;
  description: string;
  section: string;
}
export interface GeneralCategoryTagId extends GeneralCategoryTag {
  id: string;
}
