package com.example.appointmentapi.controller;

import com.example.appointmentapi.entity.Appointment;
import com.example.appointmentapi.repository.AppointmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;

    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    // GET /appointments — list all
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // GET /appointments/search?doctor=name — custom JPQL, case-insensitive
    @GetMapping("/search")
    public ResponseEntity<List<Appointment>> searchByDoctor(@RequestParam("doctor") String doctorName) {
        List<Appointment> results = appointmentRepository.findByDoctorNameIgnoreCase(doctorName);
        return ResponseEntity.ok(results);
    }

    // POST /appointments — create a new appointment
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment saved = appointmentRepository.save(appointment);
        return ResponseEntity.status(201).body(saved);
    }
}
