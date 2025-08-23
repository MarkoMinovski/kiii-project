import {useCallback, useEffect, useState} from "react";
import AdsRepository from "../repositories/AdsRepository.js";

const initialState = {
    ads: [],
    loading: true,
}

const UseAds = () => {
    const [state, setState] = useState(initialState);

    const fetchAds = useCallback(() => {
        AdsRepository.findAll().then(axiosResp => {
            setState({
                ads: axiosResp.data,
                loading: false,
            });
        }).catch(err => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        fetchAds();
    }, [fetchAds]);

    return {...state};
}

export default UseAds;
