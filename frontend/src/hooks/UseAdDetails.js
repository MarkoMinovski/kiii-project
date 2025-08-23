import {useEffect, useState} from "react";
import AdsRepository from "../repositories/AdsRepository.js"
import CompanyRepository from "../repositories/CompanyRepository.js"

const UseAdDetails = (id) => {
    const [state, setState] = useState({
        position: "",
        company: "",
        applications: [],
    })

    useEffect(() => {
        AdsRepository.find(id).then((adsReposResp) => {
            setState(prevState => ({...prevState, position: adsReposResp.data.position}));



            CompanyRepository.find(adsReposResp.data.company).then((CompReposResp) => {
                setState(prevState => ({...prevState, company: CompReposResp.data}))
            });

            AdsRepository.findByCompanyId(adsReposResp.data.company).then((adsResp) => {
                setState(prevState => ({...prevState, applications: adsResp.data}));
            })

            
        })
    }, [id])

    return state;
}

export default UseAdDetails;
