package com.example.healthhub.Entity;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@Table(name = "patients")
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int age;
    private String gender;
    @Column(name = "medical_history")
    private String medicalHistory;  

}