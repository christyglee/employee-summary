// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(officeNumber){

        super(name, id, email);

        this.officeNumber = officeNumber;

    }

    getName(){
        console.log(`Your manager's name is ${this.name}`);

    }

    getId(){
        if(this.id <= 0){
            console.log(`${this.id} is not a valid ID!`);
        } else {
            console.log(`Your manager's ID is ${this.id}`);
        }
    }

    getEmail(){
        console.log(`Your manager's email is ${this.email}`);

    }

    getRole(){
        //Overridden to return 'Manager' - ???
    }
}