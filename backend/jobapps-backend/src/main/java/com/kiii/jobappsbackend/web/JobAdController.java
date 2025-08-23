package com.kiii.jobappsbackend.web;

import com.kiii.jobappsbackend.model.JobAd;
import com.kiii.jobappsbackend.service.JobAdService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/ads")
public class JobAdController {

    private final JobAdService jobAdService;

    public JobAdController(JobAdService jobAdService) {
        this.jobAdService = jobAdService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobAd> getById(@PathVariable Long id) {
        return this.jobAdService.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<JobAd> getAll() {
        return this.jobAdService.getAll();
    }

    @GetMapping("/by-company")
    public List<JobAd> getAllByCompany(@RequestParam(required = true) Long companyId) {
        return this.jobAdService.getAllByCompany(companyId);
    }


}
