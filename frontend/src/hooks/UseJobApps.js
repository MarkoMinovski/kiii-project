import {useCallback, useEffect, useState} from "react";
import AppsRepository from "../repositories/AppsRepository.js"

const initialState = {
    jobApps: [],
    loading: true,
}


const UseJobApps = () => {
    const [state, setState] = useState(initialState);

    const fetchApps = useCallback(() => {
        AppsRepository.findAll().then((res) => {
            setState(
                {
                    jobApps: res.data,
                    loading: false,
                }
            )
        })
    }, []);

    const onAdd = useCallback((data) => {
        AppsRepository.create(data).then(() => {
            console.log("Added successfully")
            fetchApps();
        })
    }, [fetchApps]);

    const onEdit = useCallback((id, data) => {
        AppsRepository.update(id, data).then(() => {
            console.log("Updated successfully")
            fetchApps();
        })
    }, [fetchApps]);

    const onDelete = useCallback((id) => {
        AppsRepository.delete(id).then(() => {
            console.log("Deleted successfully")
            fetchApps();
        })
    }, [fetchApps]);

    useEffect(() => {
        fetchApps();
    }, [fetchApps]);

    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};
}


export default UseJobApps;
