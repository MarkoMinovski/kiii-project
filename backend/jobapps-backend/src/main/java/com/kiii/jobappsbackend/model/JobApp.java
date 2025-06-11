package com.kiii.jobappsbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class JobApp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String applicantName;

    private String description;

    @ManyToOne
    private JobAd jobAd;

    public JobApp(String applicantName, String description, JobAd jobAd) {
        this.applicantName = applicantName;
        this.description = description;
        this.jobAd = jobAd;
    }
}
