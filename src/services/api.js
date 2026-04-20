import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Falha ao buscar usuários. Verifique sua conexão.');
  }
};

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data; // { token: "..." }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Usuário ou senha inválidos.');
    }
    throw new Error('Falha no login. Verifique sua conexão.');
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Falha ao carregar produtos. Verifique sua conexão.');
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${encodeURIComponent(category)}`);
    return response.data;
  } catch (error) {
    throw new Error('Falha ao filtrar produtos. Verifique sua conexão.');
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Falha ao carregar detalhes do produto. Verifique sua conexão.');
  }
};

export default api;