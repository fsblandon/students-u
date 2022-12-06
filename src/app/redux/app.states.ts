import { Student } from "../models/student.model";
import * as student from "../redux/student.reducer";
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  readonly student: Student[];
}
