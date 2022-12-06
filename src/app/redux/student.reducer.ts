import { Student } from "../models/student.model";
import { ClassActions } from "./student.actions";
import * as studentActions from './student.actions';
import { InitialState } from "@ngrx/store/src/models";

export interface StudentState {
  student: Student | null;
}

const initialState: StudentState = {
  student: {id: 0, email: 'test@test.com', name: 'test'}
}

export function studentReducer(state: Student[] = [], action: studentActions.ClassActions) {
  switch (action.type) {
    case studentActions.StudentActionTypes.ADDSTUDENT: {
      return [...state, action.payload]
    }
    case studentActions.StudentActionTypes.UPDATESTUDENT: {
      let student = [...state, action.payload];
      return student.filter(s => s === action.payload);
    }
    case studentActions.StudentActionTypes.DELETESTUDENT: {
      state.splice(action.payload, 1);
      return state;
    }
    case studentActions.StudentActionTypes.GETSTUDENT: {
      state.filter(s => s.id === action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
}
