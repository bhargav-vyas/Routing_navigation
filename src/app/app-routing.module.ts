import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResigterComponent } from './components/resigter/resigter.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'resistor',
    component: ResigterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
