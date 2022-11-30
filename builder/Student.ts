export class Student {
  private id: string;
  private firstName: string;
  private lastName: string;
  private dateOfBirth: string;
  private currentClass: string;
  private phone: string;
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    currentClass: string,
    phone: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.currentClass = currentClass;
    this.phone = phone;
  }
}
