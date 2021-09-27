// These are the required modules/packages
const Member = require("./Member");
// This class adds Construct function and refactored code accordingly to module 10 
class Engineer extends Member {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    gitUsername() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;