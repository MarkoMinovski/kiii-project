package com.kiii.jobappsbackend.service.impl;

import com.kiii.jobappsbackend.model.Company;
import com.kiii.jobappsbackend.repository.CompanyRepository;
import com.kiii.jobappsbackend.service.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;


    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public Optional<Company> getById(Long id) {
        return this.companyRepository.findById(id);
    }

    @Override
    public List<Company> getCompaniesBySector(String sector) {
        return this.companyRepository.getCompaniesBySectorContaining(sector);
    }

    @Override
    public List<Company> getAll() {
        return this.companyRepository.findAll();
    }

    @Override
    public Optional<Company> create(String name, String sector) {
        Company company = new Company(name, sector);
        return Optional.of(this.companyRepository.save(company));
    }

    @Override
    public Optional<Company> update(Long id, String name, String sector) {
        Optional<Company> company = this.companyRepository.findById(id);
        if (company.isPresent()) {
            company.get().setName(name);
            company.get().setSector(sector);
            return Optional.of(this.companyRepository.save(company.get()));
        }
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {
        Optional<Company> company = this.companyRepository.findById(id);
        company.ifPresent(this.companyRepository::delete);
    }
}
