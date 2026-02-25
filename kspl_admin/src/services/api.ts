const API_URL = import.meta.env.VITE_API_URL;

const getHeaders = (isMultipart = false) => {
    const token = localStorage.getItem('token');
    const headers: any = {
        'Authorization': token ? `Bearer ${token}` : '',
    };
    if (!isMultipart) {
        headers['Content-Type'] = 'application/json';
    }
    return headers;
};

export const api = {
    auth: {
        login: async (email: string, password: string) => {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Login failed');
            }
            return res.json();
        },
    },
    products: {
        getAll: async () => {
            const res = await fetch(`${API_URL}/products`);
            if (!res.ok) throw new Error('Failed to fetch products');
            return res.json();
        },
        create: async (formData: FormData) => {
            const res = await fetch(`${API_URL}/products`, {
                method: 'POST',
                headers: getHeaders(true),
                body: formData,
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Failed to create product');
            }
            return res.json();
        },
        delete: async (id: number) => {
            const res = await fetch(`${API_URL}/products/${id}`, {
                method: 'DELETE',
                headers: getHeaders(),
            });
            if (!res.ok) throw new Error('Failed to delete product');
            return res.json();
        },
    },
    categories: {
        getAll: async () => {
            const res = await fetch(`${API_URL}/categories`);
            if (!res.ok) throw new Error('Failed to fetch categories');
            return res.json();
        },
    },
    stats: {
        getOverview: async () => {
            // Mocking or fetching if endpoint exists
            const products = await api.products.getAll();
            return {
                totalProducts: products.length,
                totalQuotes: 12, // Placeholder
                totalUsers: 5,   // Placeholder
            };
        }
    }
};
