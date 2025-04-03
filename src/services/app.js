import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const livroService = {
    create: async (livroData) => {
        try {
            const response = await api.post(
                import.meta.env.VITE_API_LIVROS_ENDPOINT,
                [livroData]
            );
            return response.data;
        } catch (error) {
            console.error("Erro no cadastro:", {
                status: error.response?.status,
                data: error.response?.data,
                endpoint: error.config?.url,
            });
            throw new Error(
                "Falha ao cadastrar livro. Verifique os dados e tente novamente."
            );
        }
    },

    getAll: async () => {
        try {
            const response = await api.get(import.meta.env.VITE_API_LIVROS_ENDPOINT);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar livros:", {
                status: error.response?.status,
                data: error.response?.data,
                endpoint: error.config?.url,
            })
            throw error;
        }
    },

    search: async (query) => {
        try {
            const response = await api.get(`${import.meta.env.VITE_API_LIVROS_ENDPOINT}/buscar?q=${query}`);
            return response.data;
        } catch (error) {
            console.error("Erro na busca:", {
                status: error.response?.status,
                data: error.response?.data,
                endpoint: error.config?.url,
            });
            throw error;
        }
    }
};
