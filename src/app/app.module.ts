import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { PostsComponent } from "./components/posts/posts.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import {
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
} from "@angular/material";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { PhotosDetailsComponent } from "./components/photos-details/photos-details.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material";
import { LoadingComponent } from './components/loading/loading.component';
import { VirtualScollingComponent } from './components/virtual-scolling/virtual-scolling.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    PageNotFoundComponent,
    PhotosDetailsComponent,
    LoadingComponent,
    VirtualScollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
