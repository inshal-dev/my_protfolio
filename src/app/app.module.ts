import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ProjectComponent,
    HomeComponent,
    AcheivementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
