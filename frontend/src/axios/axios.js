import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://jobapps-backend.azurewebsites.net/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosInstance;
