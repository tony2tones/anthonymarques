import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { MainComponent } from './components/pages/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [{  path: 'home', component: LandingPageComponent },
{ path: '', redirectTo: '/home' , pathMatch:'full'},
{  path: 'main', component: MainComponent }];

@NgModule({
  declarations: [
    AppComponent, 
    LandingPageComponent,
    MainComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
