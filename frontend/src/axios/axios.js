import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://backendk8s.local/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosInstance;
