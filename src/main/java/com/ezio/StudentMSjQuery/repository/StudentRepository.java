package com.ezio.StudentMSjQuery.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ezio.StudentMSjQuery.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
