import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadJsonServiceService } from '../read-json-service.service';
import Student from "../Student";


@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJsonComponent implements OnInit {

  
  studentObj:any;
  st = new Student(Student.getRandomNumber(),'Daniel Redcliff',25,'Magic'); 
  stname:string= '';
  stroll:string = '';
  stcourse:string = '';
  displayform:boolean = false;
  sid:string = '';
  sname:string = '';
  srollno:string = '';
  scourse:string = '';
  displayEditButton :boolean = true;

  constructor(private readservice:ReadJsonServiceService) { 
      
  }

  ngOnInit(): void {
  
    this.getAllStudents();
  }


  //diaplaying student form
  displayAddStudentForm()
  {
    this.displayform = true;
  }
  //closing student form
  closeStudentForm(){
    this.displayform = false;
  }


  //getting all students
  getAllStudents():void{
     this.readservice.getStudent().subscribe(result=>
      {this.studentObj=result;});
  }

  //edit a student 
  editStudent(n:HTMLInputElement,r:HTMLInputElement,c:HTMLInputElement){
    

   n.disabled = false;
   r.disabled = false;
   c.disabled = false;
    
   this.displayEditButton = false;

  }

  //save edited student 
  saveEditedStudent(id:string,name:string,roll:string,course:string)
  {
    var s = new Student(Number.parseInt(id),name,Number.parseInt(roll),course);
    console.log('New updated student details :');
    console.log(s);
     this.readservice.updateAStudentDetails(s).subscribe(result=>{
       console.log('the returned value of updated student : ');
       console.log(result);
     });
     this.displayEditButton = true;
     this.refreshPage();
  }

  //addding a new student
  addStudent(n:string,r:string,c:string):void{
    var st:Student = new Student(Student.getRandomNumber(),n,Number.parseInt(r),c);
    this.readservice.addStudent(st).subscribe(
      (result2)=>{
        console.log('new student added object  = ');
        console.log(result2);
      }
    );
        this.stname = '';
        this.stroll = '';
       this.stcourse = '';
       this.refreshPage();
    }

    //deleting a student
  deleteStudent(id:number):void{
    console.log('deleted method return value = ');
    this.readservice.deleteStudent(id).subscribe(
      data=>console.log(data));
      this.refreshPage();
  }

  //refresh the page
  refreshPage(){
    this.readservice.getStudent().subscribe(result=>{
      this.studentObj = result;
    });
  }
  

}
