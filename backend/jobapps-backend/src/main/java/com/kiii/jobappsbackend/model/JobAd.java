package com.kiii.jobappsbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class JobAd {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String position;
    @ManyToOne
    private Company company;

    public JobAd(String position, Company company) {
        this.position = position;
        this.company = company;
    }


}
