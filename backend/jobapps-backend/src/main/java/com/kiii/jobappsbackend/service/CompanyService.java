package com.kiii.jobappsbackend.service;

import com.kiii.jobappsbackend.model.Company;

import java.util.List;
import java.util.Optional;

public interface CompanyService {
    public Optional<Company> getById(Long id);
    public List<Company> getCompaniesBySector(String sector);
    public List<Company> getAll();
    public Optional<Company> create(String name, String sector);
    public Optional<Company> update(Long id, String name, String sector);
    public void delete(Long id);
}

