// This class is the parent constructor for all the members that inherit from it. Practical for refactoring. Module 10. 
class Member {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Member"
    }
}

module.exports = Member;