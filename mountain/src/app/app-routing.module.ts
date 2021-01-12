import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResortComponent } from './resort/resort.component';

const routes: Routes = [
  {path:'mountain/:id', component: ResortComponent},
  {path: '',   redirectTo: 'mountain/0', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
