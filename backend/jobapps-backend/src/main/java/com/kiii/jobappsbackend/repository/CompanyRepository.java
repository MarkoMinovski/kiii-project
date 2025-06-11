package com.kiii.jobappsbackend.repository;

import com.kiii.jobappsbackend.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> getCompaniesBySectorContaining(String sector);
}
