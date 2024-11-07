import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getAnotacoes = () => api.get('anotacoes/');
export const getContas = () => api.get('contas/');
export const getFaturamento = () => api.get('faturamento/');
export const getDespesas = () => api.get('despesas/');
export const addAnotacao = (data) => api.post('anotacoes/', data);


export default api;
