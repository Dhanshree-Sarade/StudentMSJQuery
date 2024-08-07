package com.ezio.StudentMSjQuery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ezio.StudentMSjQuery.entity.Student;
import com.ezio.StudentMSjQuery.service.StudentService;

@Controller
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@GetMapping("/home")
	public String home() {
		return "Home";
	}
	
	@PostMapping("/addData")
	@ResponseBody
	public Student addData(@RequestBody Student student) {
		return studentService.saveData(student);
	}
	
	@GetMapping("/getData")
	@ResponseBody
	public List<Student> showData(){
		return studentService.getData();
	}
	
	@GetMapping("/getData/{id}")
	@ResponseBody
	public Student showDataById(@PathVariable Integer id) {
		return studentService.getDataById(id);
	}
	
	@PutMapping("/editData")
	@ResponseBody
	public Student editData(@RequestBody Student student) {
		return studentService.editDetails(student);
	}
	
	@DeleteMapping("/deleteData/{id}")
	@ResponseBody
	public String deleteData(@PathVariable Integer id) {
		return studentService.deleteDetails(id);
	}
}
