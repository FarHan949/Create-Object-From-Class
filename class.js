
// Prototype inheritance in javascript is the linking of prototypes of a 
// parent object to a child object to share and utilize the properties of a 
// parent class using a child class. Prototypes are hidden objects that are 
// used to share the properties and methods of a parent class with child classes.


class TeamMember {
    name;
    location;
    tech;
    constructor(name, location) {
        this.name = name
        this.location = location
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your advice `);

    }
}



class Android extends TeamMember {
    designation = 'Android developer'
    team = 'Android team'
    location;
    constructor(name, location) {
        super(name, location)
    }
    supportSession(time) {
        console.log(`start the support session at ${time}`);

    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);

    }

}


class Web extends TeamMember {
    designation = 'Web developer'
    team = 'Web team'
    tech;
    constructor(name, location, tech) {
        super(name, location, tech)
        this.tech = tech

    }
    Developer(feature) {
        console.log(`start the support session at ${feature}`);

    }
    release(version) {
        console.log(`please create quiz for module ${version}`);

    }
}

const allu = new Android('allu', 'dhaka')
allu.supportSession('9:00')
allu.createQuiz(60)

const Andrew = new Web('Andrew Garfield', 'lose angeles', 't')

console.log(Andrew);
