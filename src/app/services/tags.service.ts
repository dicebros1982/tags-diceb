import { Injectable } from "@angular/core";
import {
  GeneralCategoryTag,
  GeneralCategoryTagId
} from "../models/general-category-tag.model";
import {
  GeneralSubTag,
  GeneralSubTagId
} from "../models/general-sub-tag.model";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TagsService {
  private generalCategoryTagsCollection: AngularFirestoreCollection<
    GeneralCategoryTag
  >;
  generalCategoryTags: Observable<GeneralCategoryTag[]>;
  private generalSubTagsCollection: AngularFirestoreCollection<GeneralSubTag>;
  generalSubTags: Observable<GeneralSubTag[]>;

  constructor(private db: AngularFirestore) {
    this.generalCategoryTagsCollection = db.collection<GeneralCategoryTag>(
      "categoryTags"
    );
  }

  getGeneralCategoryTags() {
    return this.generalCategoryTagsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as GeneralCategoryTag;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getGeneralSubTags(id: string) {
    this.generalSubTagsCollection = this.db.collection<GeneralSubTag>(
      "baseTags",
      ref => ref.where("parentTag", "==", id)
    );

    return this.generalSubTagsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as GeneralSubTag;
          const id = a.payload.doc.id;          
          return { id, ...data };
        })
      )
    );
  }
}
