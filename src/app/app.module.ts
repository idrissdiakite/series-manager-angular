import { CommentService } from './services/comment/comment.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { SerieService } from './services/serie/serie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { AddSerieViewComponent } from './views/add-serie-view/add-serie-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SingleSerieViewComponent } from './views/single-serie-view/single-serie-view.component';
import { TableComponent } from './components/table/table.component';
import { LineComponent } from './components/line/line.component';
import { CommentsViewComponent } from './views/comments-view/comments-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthViewComponent,
    SeriesViewComponent,
    EditSerieViewComponent,
    AddSerieViewComponent,
    ErrorViewComponent,
    SingleSerieViewComponent,
    TableComponent,
    LineComponent,
    CommentsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SerieService, AuthService, UserService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
