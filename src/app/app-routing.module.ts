import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { MainComponent } from './components/pages/main/main.component';

const routes: Routes = [{  path: 'home', component: LandingPageComponent },
{ path: '', redirectTo: '/home' , pathMatch:'full'},
{  path: 'main', component: MainComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
