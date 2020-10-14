// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
    }

    getName(){
        console.log(`Your engineer's name is ${this.name}`);

    }

    getId(){
        if(this.id <= 0){
            console.log(`${this.id} is not a valid ID!`);
        } else {
            console.log(`Your engineer's ID is ${this.id}`);
        }
    }

    getEmail(){
        console.log(`Your engineer's email is ${this.email}`);

    }

    gitGithub() {
        console.log(`Your engineer's email is ${this.github}`);

    }

    getRole() {
        // Overridden to retur 'Engineer'
    }
    

}