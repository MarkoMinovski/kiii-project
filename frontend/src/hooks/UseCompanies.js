import {useCallback, useEffect, useState} from "react";
import CompanyRepository from "../repositories/CompanyRepository.js";

const initialState = {
    companies: [],
    loading: true,
}

const UseCompanies = () => {
    const [companies, setCompanies] = useState(initialState);

    const fetchCompanies = useCallback(() => {
        CompanyRepository.findAll().then((resp) => {
            setCompanies({
                companies: resp.data,
                loading: false,
            })
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        fetchCompanies();
    }, [fetchCompanies]);

    return {...companies};
}

export default UseCompanies;
