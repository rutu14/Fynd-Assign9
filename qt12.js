/*Define an Employee class with id (number), name (string), role (string), department (string), projects (array of Projects). Define some Employee objects (suggest using sample data below). */
class Project{
    constructor( id, name, client){
        this.id = id;
        this.name = name;
        this.client = client;
    }
}

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' ); 

class Employee {
    constructor(empid, empname, role, department, projects){
        this.empid = empid;
        this.empname = empname;
        this.role = role;
        this.department = department;
        this.projects = projects;
    }
}
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager','IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] ); 
console.log( john );
console.log('--------------------');
console.log( jane );
console.log('--------------------');
console.log( mark );