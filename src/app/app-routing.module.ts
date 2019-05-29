import { PhotosComponent } from "./components/photos/photos.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { UsersComponent } from "./components/users/users.component";
import { PostsComponent } from "./components/posts/posts.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users", component: UsersComponent },
  { path: "posts", component: PostsComponent },
  { path: "comments", component: CommentsComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "photos", component: PhotosComponent },
  // { path: "loading", component: LoadingComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
