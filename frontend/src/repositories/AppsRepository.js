import AxiosInstance from '../axios/axios.js';

const AppsRepository = {

    findAll: async () => {
        return await AxiosInstance.get('/job-apps');
    },

    findOne: async (id) => {
        return await AxiosInstance.get(`/job-apps/${id}`);
    },

    create: async (data) => {
        return await AxiosInstance.post(`/job-apps/add`, data);
    },

    update: async (id, data) => {
      return await AxiosInstance.post(`/job-apps/${id}`, data);
    },

    delete: async (id) => {
        return await AxiosInstance.delete(`/job-apps/${id}`);
    }
}

export default AppsRepository;
