import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

const API_ENDPOINTS = {
    LIVROS: import.meta.env.VITE_API_LIVROS_ENDPOINT
};

export const livroService = {
    create: async (livroData) => {
        try {
            const response = await api.post(API_ENDPOINTS.LIVROS, [livroData]);
            return response.data;
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error.response?.data || error.message);
            throw error;
        }
    },
};