package com.kiii.jobappsbackend.model.dto;

import com.kiii.jobappsbackend.model.JobAd;
import com.kiii.jobappsbackend.model.JobApp;

public record CreateJobAppDTO(String applicantName, String description, Long jobAdId) {


    public static CreateJobAppDTO from(JobApp jobApp) {
        return new CreateJobAppDTO(
                jobApp.getApplicantName(),
                jobApp.getDescription(),
                jobApp.getJobAd().getId()
        );
    }

    public JobApp toDomainJobApp(JobAd jobAd) {
        return new JobApp(this.applicantName, this.description, jobAd);
    }
}
