package com.springboot.curdapp.service;

import java.util.List;

public interface StudentService {

    public List<Student> getAllStudents();
    public Student getStudentById(int id);
    public Student saveStudent(Student st);
    public Student updateStudent(Student st);
    public void deleteStudent(String id);
    public Student patchStudent(Student st,String id);
}
