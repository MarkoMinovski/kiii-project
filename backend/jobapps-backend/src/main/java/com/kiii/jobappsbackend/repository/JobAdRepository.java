package com.kiii.jobappsbackend.repository;

import com.kiii.jobappsbackend.model.Company;
import com.kiii.jobappsbackend.model.JobAd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobAdRepository extends JpaRepository<JobAd, Long> {
    List<JobAd> findJobAdsByCompany(Company company);
}
