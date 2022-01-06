package com.springboot.curdapp.controller.model;

import com.springboot.curdapp.service.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepository extends CrudRepository<Student,Integer> {

}
