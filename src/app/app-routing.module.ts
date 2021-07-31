import { ErrorViewComponent } from './views/error-view/error-view.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { CommentsViewComponent } from './views/comments-view/comments-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSerieViewComponent } from './views/add-serie-view/add-serie-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { SingleSerieViewComponent } from './views/single-serie-view/single-serie-view.component';

const routes: Routes = [
  { path: '', component: AuthViewComponent },
  { path: 'series', canActivate: [AuthGuardGuard], component: SeriesViewComponent },
  { path: 'serie/add', canActivate: [AuthGuardGuard], component: AddSerieViewComponent },
  { path: 'serie/edit/:id', canActivate: [AuthGuardGuard], component: EditSerieViewComponent },
  { path: 'serie/:id', canActivate: [AuthGuardGuard], component: SingleSerieViewComponent },
  { path: 'serie/comment/:id', canActivate: [AuthGuardGuard], component: CommentsViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
