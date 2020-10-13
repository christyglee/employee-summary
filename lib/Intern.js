// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(school){
        super(name, id, email);
        this.school = school;
    }

    getName(){
        console.log(`Your intern's name is ${this.name}`);

    }

    getId(){
        if(this.id <= 0){
            console.log(`${this.id} is not a valid ID!`);
        } else {
            console.log(`Your intern's ID is ${this.id}`);
        }

    }

    getEmail(){
        console.log(`Your intern's email is ${this.email}`);

    }

    getSchool(){
        console.log(`Your intern's school is ${this.email}`);
    }

    getRole(){
        // Overridden to return 'Intern'
    }
}