import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environment";

import { AppComponent } from "./app.component";
import { GeneralTagsComponent } from "./components/general-tags/general-tags.component";
import { AuthService } from "./services/auth.service";
import { LoginTestComponent } from "./components/login-test/login-test.component";

import { GeneralCategoryTagListComponent } from "./components/general-tags/general-category-tag-list/general-category-tag-list.component";
import { GeneralCategoryTagDisplayComponent } from "./components/general-tags/general-category-tag-display/general-category-tag-display.component";
import { TagsService } from './services/tags.service';
import { GeneralSubTagListComponent } from './components/general-tags/general-sub-tag-list/general-sub-tag-list.component';
import { GeneralSubTagDisplayComponent } from './components/general-tags/general-sub-tag-display/general-sub-tag-display.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    GeneralTagsComponent,
    LoginTestComponent,
    GeneralCategoryTagListComponent,
    GeneralCategoryTagDisplayComponent,
    GeneralSubTagListComponent,
    GeneralSubTagDisplayComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, TagsService]
})
export class AppModule {}
