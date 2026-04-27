package com.example.appointmentapi;

import com.example.appointmentapi.entity.Appointment;
import com.example.appointmentapi.repository.AppointmentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class AppointmentApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppointmentApiApplication.class, args);
    }

    // Seed sample data on startup so Postman tests work immediately
    @Bean
    CommandLineRunner seedData(AppointmentRepository repo) {
        return args -> {
            repo.save(new Appointment("Alice Johnson",  "Dr. Smith",   LocalDateTime.of(2026, 5,  1, 9,  0),  "Routine checkup"));
            repo.save(new Appointment("Bob Williams",   "Dr. Smith",   LocalDateTime.of(2026, 5,  2, 10, 30), "Follow-up"));
            repo.save(new Appointment("Carol Davis",    "DR. SMITH",   LocalDateTime.of(2026, 5,  3, 11, 0),  "Blood test review"));
            repo.save(new Appointment("David Brown",    "Dr. Patel",   LocalDateTime.of(2026, 5,  4, 14, 0),  "Consultation"));
            repo.save(new Appointment("Eva Martinez",   "Dr. Patel",   LocalDateTime.of(2026, 5,  5, 15, 30), "X-ray review"));
            repo.save(new Appointment("Frank Wilson",   "dr. patel",   LocalDateTime.of(2026, 5,  6, 9,  15), "Prescription renewal"));
            repo.save(new Appointment("Grace Lee",      "Dr. Johnson", LocalDateTime.of(2026, 5,  7, 13, 0),  "Annual physical"));
        };
    }
}
