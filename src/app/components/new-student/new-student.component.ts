import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/models/student.model';
import { AppState } from 'src/app/redux/app.states';
import * as studentActions from "../../redux/student.actions";

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  StudentForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.StudentForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {

    return new FormGroup({
      idStudent: new FormControl('', Validators.required),
      nameStudent: new FormControl('', Validators.required),
      emailStudent: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(): void{
    //this.EmployeeForm.controls['tiprate'].setValue(this.EmployeeForm.controls['tiprate'].value);
    console.log(this.StudentForm);
    const result: Student = Object.assign({},this.StudentForm.value);
    console.log(result);

    this.store.dispatch(new studentActions.AddStudent(result));

    this.router.navigate(['']);
  }


}
