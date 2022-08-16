import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'Studentlist',component:StudentComponent},
  {path:'person',component:PersonComponent},
  {path:'',redirectTo:'person',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
