package com.example.appointmentapi.repository;

import com.example.appointmentapi.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // Custom JPQL query — case-insensitive match on doctorName
    @Query("SELECT a FROM Appointment a WHERE LOWER(a.doctorName) = LOWER(:doctorName)")
    List<Appointment> findByDoctorNameIgnoreCase(@Param("doctorName") String doctorName);
}
