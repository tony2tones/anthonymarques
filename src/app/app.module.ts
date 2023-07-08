import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { MainComponent } from './components/pages/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NavHeaderComponent } from './components/navigation/navigation.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { SvgTailwindcssComponent } from './components/svg/svg-tailwindcss/svg-tailwindcss.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { WorkComponent } from './components/pages/work/work.component';

const routes: Routes = [{  path: 'home', component: LandingPageComponent },
{ path: '', redirectTo: '/home' , pathMatch:'full'},
{  path: 'main', component: MainComponent }];

@NgModule({
  declarations: [
    NavHeaderComponent,
    AppComponent, 
    LandingPageComponent,
    MainComponent,
    TechStackComponent,
    SvgTailwindcssComponent,
    ResumeComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
