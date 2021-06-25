import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
//Hash Angular Common
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
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
   AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [
    {
      provide : LocationStrategy , 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
