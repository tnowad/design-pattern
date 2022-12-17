import { IStudentBuilder } from "./IStudentBuilder";
import { Student } from "./Student";

export class StudentConcreteBuilder implements IStudentBuilder {
  private id!: string;
  private firstName!: string;
  private lastName!: string;
  private dateOfBirth!: string;
  private currentClass!: string;
  private phone!: string;

  setId(id: string): IStudentBuilder {
    this.id = id;
    return this;
  }
  setFirstName(firstName: string): IStudentBuilder {
    this.firstName = firstName;
    return this;
  }
  setLastName(lastName: string): IStudentBuilder {
    this.lastName = lastName;
    return this;
  }
  setDateOfBirth(dateOfBirth: string): IStudentBuilder {
    this.dateOfBirth = dateOfBirth;
    return this;
  }
  setCurrentClass(currentClass: string): IStudentBuilder {
    this.currentClass = currentClass;
    return this;
  }
  setPhone(phone: string): IStudentBuilder {
    this.phone = phone;
    return this;
  }
  build(): Student {
    return new Student(
      this.id,
      this.firstName,
      this.lastName,
      this.dateOfBirth,
      this.currentClass,
      this.phone
    );
  }
}
