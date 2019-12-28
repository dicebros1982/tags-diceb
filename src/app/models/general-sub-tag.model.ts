export interface GeneralSubTag {
  created: Date;
  name: string;
  description: string;
}

export interface GeneralSubTagId extends GeneralSubTag {
  id: string;
}
