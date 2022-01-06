package com.springboot.curdapp.service;

import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    private int id;
    private String name;
    private long rollno;
    private String course;

    public Student(int id, String name, long rollno, String course) {
        this.id = id;
        this.name = name;
        this.rollno = rollno;
        this.course = course;
    }

    public Student() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getRollno() {
        return rollno;
    }

    public void setRollno(long rollno) {
        this.rollno = rollno;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", rollno=" + rollno +
                ", course='" + course + '\'' +
                '}';
    }
}
