import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PostAttiviComponent } from './Pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './Pages/post-inattivi/post-inattivi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post-attivi',
    component: PostAttiviComponent,
  },
  {
    path: 'post-inattivi',
    component: PostInattiviComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
