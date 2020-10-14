// TODO: Write code to define and export the Employee class

//define Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`Your employee's name is ${this.name}`);

    }
    getId(){
        if(this.id <= 0){
            console.log(`${this.id} is not a valid ID!`);
        } else {
            console.log(`Your employee's ID is ${this.id}`);
        }


    }
    getEmail(){
        console.log(`Your employee's email is ${this.email}`);

    }
    getRole(){
        return Employee;
    }
};
module.exports = Employee;

