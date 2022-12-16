import { Student } from "./Student";

export interface StudentBuilder {
  setId(id: string): StudentBuilder;
  setFirstName(firstName: string): StudentBuilder;
  setLastName(lastName: string): StudentBuilder;
  setDateOfBirth(dateOfBirth: string): StudentBuilder;
  setCurrentClass(currentClass: string): StudentBuilder;
  setPhone(phone: string): StudentBuilder;
  build(): Student;
}
