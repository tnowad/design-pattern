import { StudentConcreteBuilder } from "./StudentConcreteBuilder";

const studentBuilder = new StudentConcreteBuilder();
studentBuilder.setId("1").setDateOfBirth("10/12/2003").setFirstName("Alex");

console.log(studentBuilder.build());
