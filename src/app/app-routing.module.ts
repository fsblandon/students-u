import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { StudentComponent } from './components/student/student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  { path: 'create-student', component: NewStudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'update-student/:id', component: UpdateStudentComponent },
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
