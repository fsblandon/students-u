import { Action } from "@ngrx/store";
import { Student } from "../models/student.model";

export enum StudentActionTypes {
  ADDSTUDENT = '[Student] AddStudent',
  UPDATESTUDENT = '[Student] UpdateStudent',
  DELETESTUDENT = '[Student] DeleteStudent',
  GETSTUDENT = '[Student] GetStudent',
  LOAD = '[Student] Load'
};

export class AddStudent implements Action {
  readonly type = StudentActionTypes.ADDSTUDENT;

  constructor(public payload: Student){}
}

export class UpdateStudent implements Action {

  readonly type = StudentActionTypes.UPDATESTUDENT;

  constructor(public payload: Student){}
}

export class DeleteStudent implements Action {
  readonly type = StudentActionTypes.DELETESTUDENT;

  constructor(public payload: number){}
}

export class GetStudent implements Action {

  readonly type = StudentActionTypes.GETSTUDENT;

  constructor(public payload: number) {}
}

export class Load implements Action {
  readonly type = StudentActionTypes.LOAD;

  constructor(){}
}

export type ClassActions = AddStudent | UpdateStudent | DeleteStudent | GetStudent;
