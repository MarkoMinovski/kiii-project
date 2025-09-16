package com.kiii.jobappsbackend.web;

import com.kiii.jobappsbackend.model.Company;
import com.kiii.jobappsbackend.service.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://jobapps-frontend.azurewebsites.net")
@RequestMapping("/api/company")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/get")
    public List<Company> getAll() {
        return this.companyService.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Company> getById(@PathVariable Long id) {
        return this.companyService.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

}
