package com.kiii.jobappsbackend.service;

import com.kiii.jobappsbackend.model.JobAd;

import java.util.List;
import java.util.Optional;

public interface JobAdService {
    public Optional<JobAd> getById(Long id);
    public List<JobAd> getAll();
    public Optional<JobAd> create(String position, Long companyId);
    public Optional<JobAd> update(Long id, String position, Long companyId);
    public void delete(Long id);
}
