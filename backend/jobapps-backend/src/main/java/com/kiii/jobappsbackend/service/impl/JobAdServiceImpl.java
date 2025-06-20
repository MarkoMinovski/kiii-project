package com.kiii.jobappsbackend.service.impl;

import com.kiii.jobappsbackend.model.Company;
import com.kiii.jobappsbackend.model.JobAd;
import com.kiii.jobappsbackend.repository.JobAdRepository;
import com.kiii.jobappsbackend.service.CompanyService;
import com.kiii.jobappsbackend.service.JobAdService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobAdServiceImpl implements JobAdService {
    private final JobAdRepository jobAdRepository;
    private final CompanyService companyService;

    public JobAdServiceImpl(JobAdRepository jobAdRepository, CompanyService companyService) {
        this.jobAdRepository = jobAdRepository;
        this.companyService = companyService;
    }

    @Override
    public Optional<JobAd> getById(Long id) {
        return this.jobAdRepository.findById(id);
    }

    @Override
    public List<JobAd> getAll() {
        return this.jobAdRepository.findAll();
    }

    @Override
    public Optional<JobAd> create(String position, Long companyId) {
        Optional<Company> company = this.companyService.getById(companyId);

        return company.map(value -> this.jobAdRepository.save(new JobAd(position, value)));

    }

    @Override
    public Optional<JobAd> update(Long id, String position, Long companyId) {
        Optional<JobAd> jobAd = this.jobAdRepository.findById(id);
        Optional<Company> company = this.companyService.getById(companyId);

        if (jobAd.isPresent()) {
            company.ifPresent(value -> jobAd.get().setCompany(value));
            jobAd.get().setPosition(position);
            return Optional.of(this.jobAdRepository.save(jobAd.get()));
        }

        return Optional.empty();
    }

    @Override
    public void delete(Long id) {
        Optional<JobAd> jobAd = this.jobAdRepository.findById(id);
        jobAd.ifPresent(this.jobAdRepository::delete);
    }

    @Override
    public List<JobAd> getAllByCompany(Long companyId) {
        Optional<Company> c = this.companyService.getById(companyId);

        if (c.isPresent()) {
            return this.jobAdRepository.findJobAdsByCompany(c.get());
        }

        return List.of();
    }
}
