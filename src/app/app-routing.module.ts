import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAvgComponent } from './find-avg/find-avg.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'findAvg',component:FindAvgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
