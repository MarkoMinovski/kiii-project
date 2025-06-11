package com.kiii.jobappsbackend.service.impl;

import com.kiii.jobappsbackend.model.JobAd;
import com.kiii.jobappsbackend.model.JobApp;
import com.kiii.jobappsbackend.repository.JobAppRepository;
import com.kiii.jobappsbackend.service.JobAdService;
import com.kiii.jobappsbackend.service.JobAppService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobAppServiceImpl implements JobAppService {
    private final JobAdService jobAdService;
    private final JobAppRepository jobAppRepository;

    public JobAppServiceImpl(JobAdService jobAdService, JobAppRepository jobAppRepository) {
        this.jobAdService = jobAdService;
        this.jobAppRepository = jobAppRepository;
    }

    @Override
    public Optional<JobApp> getById(Long id) {
        return this.jobAppRepository.findById(id);
    }

    @Override
    public List<JobApp> getAll() {
        return this.jobAppRepository.findAll();
    }

    @Override
    public Optional<JobApp> create(String applicantName, String description, Long adId) {
        Optional<JobAd> ad = this.jobAdService.getById(adId);

        return ad.map(jobAd -> this.jobAppRepository.save(new JobApp(applicantName, description, jobAd)));

    }

    @Override
    public Optional<JobApp> update(Long id, String applicantName, String description, Long adId) {
        Optional<JobAd> ad = this.jobAdService.getById(adId);
        Optional<JobApp> application = this.jobAppRepository.findById(id);

        if (application.isPresent()) {
            application.get().setApplicantName(applicantName);
            application.get().setDescription(description);
            ad.ifPresent(adVal -> application.get().setJobAd(adVal));
            return Optional.of(this.jobAppRepository.save(application.get()));
        }

        return Optional.empty();
    }

    @Override
    public void delete(Long id) {
        Optional<JobApp> application = this.jobAppRepository.findById(id);
        application.ifPresent(this.jobAppRepository::delete);
    }
}
