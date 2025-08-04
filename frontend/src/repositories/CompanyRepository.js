import AxiosInstance from "../axios/axios.js";


const CompanyRepository =  {
    findAll: async () => {
        return await AxiosInstance.get("/company/get");
    },

    find: async (id) => {
        return await AxiosInstance.get(`/company/${id}`);
    }
}


export default CompanyRepository;
