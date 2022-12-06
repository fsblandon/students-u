import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { AppState } from 'src/app/redux/app.states';
import * as studentsActions from "../../redux/student.actions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students$!: Observable<Student[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.students$ = this.store.pipe(select(data => data.student));

    console.log(this.store.dispatch(new studentsActions.Load()));

    console.log(this.students$);
  }

  deleteStudent(i: number){
    this.store.dispatch(new studentsActions.DeleteStudent(i));
    console.log(this.students$);
  }

  updateStudent(i: number, student: Student) {
    console.log(this.students$);
  }

  viewStudent(i: number){
    this.store.dispatch(new studentsActions.GetStudent(i));
  }

}
