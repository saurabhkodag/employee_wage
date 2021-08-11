class employeewage{
    constructor(id,name,salary,gender,startdate){
        this.e_id=id;
        this.e_name=name;
        this.e_salary=salary;
        this.e_gender=gender;
        this.e_startdate=startdate;
    }
    setid(id){
        this.e_id=id;
    }
    setname(name){
        this.e_name=name;
    }
    
    setsalary(salary){
        this.e_salary=salary;
    }
    
    setgender(gender){
        this.e_gender=gender;
    }
    
    setstartdate(startdate){
        this.e_startdate=startdate;
    }
    showdetails(){
        console.log(`employee_id:${this.e_id}\nname:${this.e_name}\nsalary:${this.e_salary}\ngender:${this.e_gender}\nstartdate:${this.e_startdate}`);
    }
}
let obj1 =new employeewage(2,'ram',324,'male','20/01/199')
obj1.setstartdate('20/20/20');
obj1.showdetails();