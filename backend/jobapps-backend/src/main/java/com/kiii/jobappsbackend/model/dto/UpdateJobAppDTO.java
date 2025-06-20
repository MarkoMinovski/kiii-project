package com.kiii.jobappsbackend.model.dto;

import com.kiii.jobappsbackend.model.JobApp;

public record UpdateJobAppDTO(Long id, String applicantName, String description, Long jobAdId) {
    public static UpdateJobAppDTO from(JobApp jobApp) {
        return new UpdateJobAppDTO(
                jobApp.getId(),
                jobApp.getApplicantName(),
                jobApp.getDescription(),
                jobApp.getJobAd().getId()
        );
    }
}
