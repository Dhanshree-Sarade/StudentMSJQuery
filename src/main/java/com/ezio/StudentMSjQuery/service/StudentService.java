package com.ezio.StudentMSjQuery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ezio.StudentMSjQuery.entity.Student;
import com.ezio.StudentMSjQuery.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	public Student saveData(Student student) {
		return studentRepository.save(student);
	}
	
	public List<Student> getData() {
		return studentRepository.findAll();
	}
	
	public Student getDataById(Integer id) {
		return studentRepository.findById(id).orElse(null);
	}
	
	public Student editDetails(Student student) {
		Student existingStudent = studentRepository.findById(student.getId()).orElse(null);
		if (existingStudent!=null) {
			existingStudent.setName(student.getName());
			existingStudent.setEmail(student.getEmail());
			return studentRepository.save(existingStudent);
		}
		return null;
	}
	
	public String deleteDetails(Integer id) {
		studentRepository.deleteById(id);
		return "Record deleted successfully...";
	}
}
