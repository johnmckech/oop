class Employee {
    constructor(nameParameter,idParameter,emailParameter){
        this.name = nameParameter;
        this.id=idParameter;
        this.email=emailParameter
        
    }
}

var employeeNew = new Employee("John","Over421","a@b.com");
console.log(employeeNew);
module.exports=Employee;