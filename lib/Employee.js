// TODO: Write code to define and export the Employee class

//define Employee class
class Employee {
    constructor(employeeName, employeeID, employeeEmail) {
        this.name = employeeName;
        this.id = employeeID;
        this.email = employeeEmail;
    }
    getName(){
        console.log(`Your employee's name is ${this.name}`);

    }
    getId(){
        if(this.id <= 0){
            console.log(`${this.id} is not a valid ID!`)
        }
        console.log(`Your employee's ID is ${this.id}`);

    }
    getEmail(){

        console.log(`Your employee's email is ${this.email}`);

    }
    getRole(){
        return Employee;
    }
}

