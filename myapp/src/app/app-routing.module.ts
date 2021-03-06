import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: "app1",
    loadChildren: () => import('./../../projects/app1/src/lib/app1.module').then(m => m.App1Module)
  },
  {
    path: "app2",
    loadChildren: () => import('./../../projects/app2/src/lib/app2.module').then(m => m.App2Module)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
