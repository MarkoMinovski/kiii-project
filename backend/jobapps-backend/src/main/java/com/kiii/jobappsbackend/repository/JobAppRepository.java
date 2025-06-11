package com.kiii.jobappsbackend.repository;

import com.kiii.jobappsbackend.model.JobApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobAppRepository extends JpaRepository<JobApp, Long> {
}
