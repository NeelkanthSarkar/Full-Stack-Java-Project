import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Student from './Student';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonServiceService {

  url:string = 'http://localhost:8080/student';
  constructor(private http:HttpClient) { }

//get all students
  getStudent():Observable<any>{

    return this.http.get<any>(this.url);
  }

//add a new student
  addStudent(student:Student):Observable<any>{
    return this.http.post<any>(this.url,student);
  }

//delete a student
  deleteStudent(id:number):Observable<any>{
   var extendedUrl:string = this.url+'/'+id;
   console.log('extended url = '+extendedUrl);
    return this.http.delete(extendedUrl);
  }

  //update a student
  updateAStudentDetails(st1:Student):Observable<any>{
    return this.http.put(this.url,st1);
  }
}
 