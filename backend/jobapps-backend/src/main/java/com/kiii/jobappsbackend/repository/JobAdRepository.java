package com.kiii.jobappsbackend.repository;

import com.kiii.jobappsbackend.model.JobAd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobAdRepository extends JpaRepository<JobAd, Long> {
}
