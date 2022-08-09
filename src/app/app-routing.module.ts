import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { SobremiComponent } from './sobremi/sobremi.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Educacion', component:EducacionComponent},
  {path:'Login', component:LoginComponent},
  {path:'Proyectos', component:ProyectosComponent},
  {path:'Skills', component:SkillsComponent},
  {path:'Sobremi', component:SobremiComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
