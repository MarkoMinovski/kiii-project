package com.kiii.jobappsbackend.service;

import com.kiii.jobappsbackend.model.JobApp;

import java.util.List;
import java.util.Optional;

public interface JobAppService {
    public Optional<JobApp> getById(Long id);
    public List<JobApp> getAll();
    public Optional<JobApp> create(String applicantName, String description, Long adId);
    public Optional<JobApp> update(Long id, String applicantName, String description, Long adId);
    public void delete(Long id);
}
