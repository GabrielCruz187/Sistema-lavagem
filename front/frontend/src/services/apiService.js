import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Função para buscar anotações
export const getAnotacoes = () => axios.get(`${API_URL}/anotacoes/`);

// Função para adicionar uma nova anotação
export const addAnotacao = (data) => axios.post(`${API_URL}/anotacoes/`, data);

// Função para atualizar uma anotação
export const updateAnotacao = (id, data) => axios.put(`${API_URL}/anotacoes/${id}/`, data);

// Função para excluir uma anotação
export const deleteAnotacao = (id) => axios.delete(`${API_URL}/anotacoes/${id}/`);

// Funções para outras requisições, como contas, faturamento e despesas
export const getContas = () => axios.get(`${API_URL}/contas/`);
export const getFaturamento = () => axios.get(`${API_URL}/faturamento/`);
export const getDespesas = () => axios.get(`${API_URL}/despesas/`);
