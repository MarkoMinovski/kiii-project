package com.kiii.jobappsbackend.web;


import com.kiii.jobappsbackend.model.JobApp;
import com.kiii.jobappsbackend.model.dto.CreateJobAppDTO;
import com.kiii.jobappsbackend.model.dto.UpdateJobAppDTO;
import com.kiii.jobappsbackend.service.JobAppService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://frontendk8s.local")
@RequestMapping("/api/job-apps")
public class JobAppController {

    private final JobAppService jobAppService;

    public JobAppController(JobAppService jobAppService) {
        this.jobAppService = jobAppService;
    }


    @GetMapping
    public List<JobApp> getAll() {
        return this.jobAppService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobApp> getById(@PathVariable Long id) {
        return this.jobAppService.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<CreateJobAppDTO> create(@RequestBody CreateJobAppDTO params) {
        var ret = this.jobAppService.create(params.applicantName(), params.description(), params.jobAdId());

        if (ret.isPresent()) {
            return ResponseEntity.ok(CreateJobAppDTO.from(ret.get()));
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<UpdateJobAppDTO> update(@RequestBody CreateJobAppDTO params, @PathVariable Long id) {
        Optional<JobApp> updateResult = this.jobAppService.update(
                id, params.applicantName(), params.description(), params.jobAdId());

        if (updateResult.isPresent()) {
            return ResponseEntity.ok(UpdateJobAppDTO.from(updateResult.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.jobAppService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
