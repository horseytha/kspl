const API_URL = 'http://localhost:5000/api';

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Authorization': token ? `Bearer ${token}` : '',
    };
};

export const api = {
    auth: {
        login: async (email, password) => {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) throw new Error('Login failed');
            return res.json();
        },
    },
    products: {
        getAll: async () => {
            const res = await fetch(`${API_URL}/products`);
            return res.json();
        },
        getById: async (id) => {
            const res = await fetch(`${API_URL}/products/${id}`);
            return res.json();
        },
        create: async (formData) => {
            const res = await fetch(`${API_URL}/products`, {
                method: 'POST',
                headers: getHeaders(),
                body: formData, // multipart/form-data
            });
            if (!res.ok) throw new Error('Failed to create product');
            return res.json();
        },
    },
};
