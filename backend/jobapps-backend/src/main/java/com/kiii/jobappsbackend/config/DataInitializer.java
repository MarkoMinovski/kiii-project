package com.kiii.jobappsbackend.config;

import com.kiii.jobappsbackend.service.CompanyService;
import com.kiii.jobappsbackend.service.JobAdService;
import com.kiii.jobappsbackend.service.JobAppService;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {
    private final CompanyService companyService;
    private final JobAdService jobAdService;
    private final JobAppService jobAppService;

    public DataInitializer(CompanyService companyService, JobAdService jobAdService, JobAppService jobAppService) {
        this.companyService = companyService;
        this.jobAdService = jobAdService;
        this.jobAppService = jobAppService;
    }

    @PostConstruct
    public void init() {
        if (this.companyService.getAll().isEmpty()) {
            this.companyService.create("Akademska Kniga", "Literature");
            this.companyService.create("ITSoftware DOOEL", "IT");
            this.companyService.create("Novomak", "Furniture");
        }

        if (this.jobAdService.getAll().isEmpty()) {
            this.jobAdService.create("Cashier", 1L);
            this.jobAdService.create("Software Engineer", 2L);
            this.jobAdService.create("Mechanical Engineer", 3L);
        }

        if (this.jobAppService.getAll().isEmpty()) {
            this.jobAppService.create("John Doe", "Lorem Ipsum Dolorem Sit", 1L);
            this.jobAppService.create("Jane Doe", "Lorem Ipsum Dolorem Sit", 1L);
            this.jobAppService.create("Steve Doe", "Lorem Ipsum Dolorem Sit", 2L);
        }

    }
}
