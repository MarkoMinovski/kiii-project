import AxiosInstance from '../axios/axios.js';


const AdsRepository = {
    findAll: async () => {
        return await AxiosInstance.get('/ads');
    },

    find: async (id) => {
        return await AxiosInstance.get(`/ads/${id}`);
    },

    findByCompanyId: async (id) => {
        return await AxiosInstance.get(`/ads/by-company?companyId=${id}`);
    }
}

export default AdsRepository;
