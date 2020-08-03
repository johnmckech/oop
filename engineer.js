var employee = require("./employee.js")

class engineer extends employee {
    constructor(nameParameter,idParameter,emailParameter,githubParameter)
    {
    super(nameParameter,idParameter,emailParameter)
        this.github=githubParameter
    }
}

var newEngineer = new engineer("john","over21","a@b.com","whatever.github.com")
console.log(newEngineer)
module.exports=engineer