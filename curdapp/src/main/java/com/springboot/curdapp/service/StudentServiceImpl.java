package com.springboot.curdapp.service;
import com.springboot.curdapp.controller.model.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public List<Student> getAllStudents(){
        return (List<Student>) studentRepository.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public Student saveStudent(Student st) {
      return studentRepository.save(st);
    }

    @Override
    public Student updateStudent(Student st)
    {
        return studentRepository.save(st);
    }

    @Override
    public void deleteStudent(String id) {
        System.out.println("Delete method called !");
         studentRepository.deleteById(Integer.parseInt(id));
//         if(!studentRepository.existsById(Integer.parseInt(id)))
//         {
//             return "Delete Successful !!";
//         }
//         return "Something went wrong while deleting student..!!\nOperation Failed.";
    }

    public Student patchStudent(Student st,String id) {
        Student student = studentRepository.findById(Integer.parseInt(id)).get();
        if(st.getName()!=null)
            student.setName(st.getName());
        if(st.getRollno()!=0)
            student.setRollno(st.getRollno());
        if(st.getCourse()!=null)
            student.setCourse(st.getCourse());

        return studentRepository.save(student);
    }
}
