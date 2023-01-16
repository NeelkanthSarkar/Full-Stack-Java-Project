export default class Student{
     id:number;
     name:string;
     rollno:number;
     course:string;

    constructor(id:number,name:string,rollno:number,course:string)
    {
       this.id=id;
        this.name=name;
        this.rollno=rollno;
        this.course=course;
    }
    static getRandomNumber():number{

        return Math.ceil(Math.random()*1000);
    }


}