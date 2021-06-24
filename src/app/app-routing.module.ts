import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'skill', component:SkillsComponent
  },
  {
    path:'project', component:ProjectComponent
  },
  {
    path:'acheviements', component:AcheivementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
