package com.springboot.curdapp.controller;

import com.springboot.curdapp.service.Student;
import com.springboot.curdapp.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudentController {

    @Autowired
    StudentServiceImpl studentService;

    @GetMapping("/student")
    public List<Student> showStudent()
    {
        return studentService.getAllStudents();
    }

    @GetMapping("/student/{studentId}")
    public Student showStudent(@PathVariable String studentId)
    {
        return studentService.getStudentById(Integer.parseInt(studentId));
    }

    @PostMapping("/student")
    public Student saveStudent(@RequestBody Student st)
    {
        return studentService.saveStudent(st);
    }

    @PutMapping("/student")
    public  Student updateStudent(@RequestBody Student st)
    {
        return studentService.updateStudent(st);
    }

    @DeleteMapping("/student/{studentId}")
    public void deleteStudent(@PathVariable String studentId)
    {
        System.out.println("Controller delete method called !");

       studentService.deleteStudent(studentId);
    }

    @PatchMapping("/student/{studentId}")
    public Student patchStudent(@RequestBody Student st,@PathVariable String studentId)
    {
        return studentService.patchStudent(st,studentId);
    }
}
