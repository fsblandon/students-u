import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './redux/student.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UpdateStudentComponent,
    NewStudentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      student: studentReducer
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
