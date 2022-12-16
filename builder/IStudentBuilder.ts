import { Student } from "./Student";

export interface IStudentBuilder {
  setId(id: string): IStudentBuilder;
  setFirstName(firstName: string): IStudentBuilder;
  setLastName(lastName: string): IStudentBuilder;
  setDateOfBirth(dateOfBirth: string): IStudentBuilder;
  setCurrentClass(currentClass: string): IStudentBuilder;
  setPhone(phone: string): IStudentBuilder;
  build(): Student;
}
