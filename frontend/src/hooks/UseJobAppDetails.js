import {useEffect, useState} from "react";
import CompanyRepository from "../repositories/CompanyRepository.js"
import AppsRepository from "../repositories/AppsRepository.js"
import AdsRepository from "../repositories/AdsRepository.js"


const UseJobAppDetails = (id) => {
    const [state, setState] = useState({
        jobApp: null,
        jobAd: null,
        company: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {

                const jobAppResp = await AppsRepository.findOne(id);
                console.log("First layer return. Expected: jobApp JSON object");
                console.log(jobAppResp.data);

                setState((prevState) => ({ ...prevState, jobApp: jobAppResp.data }));


                const jobAdResp = await AdsRepository.findOne(jobAppResp.data.jobAd.id);
                console.log("Second layer return. Expected: jobAd JSON object");
                console.log(jobAdResp.data);

                setState((prevState) => ({ ...prevState, jobAd: jobAdResp.data }));


                const companyResp = await CompanyRepository.find(jobAdResp.data.company.id);

                console.log("Third layer return. Expected: company JSON object");
                console.log(companyResp.data);

                setState((prevState) => ({ ...prevState, company: companyResp.data }));
            } catch (error) {
                console.error("Error fetching job app details:", error);
            }
        };

        fetchData();
    }, [id]);

    return state;
}


export default UseJobAppDetails;
