// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Posts API
export const postsAPI = {
    // Get all posts with optional category filter and pagination
    getAll: async (category?: string, limit?: number, offset?: number) => {
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (limit) params.append('limit', limit.toString());
        if (offset) params.append('offset', offset.toString());

        const url = `${API_BASE_URL}/posts${params.toString() ? '?' + params.toString() : ''}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch posts');
        return response.json();
    },

    // Get single post by slug
    getBySlug: async (slug: string) => {
        const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        return response.json();
    },

    // Create new post
    create: async (postData: any) => {
        const response = await fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        if (!response.ok) throw new Error('Failed to create post');
        return response.json();
    },

    // Update post
    update: async (id: number, postData: any) => {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        if (!response.ok) throw new Error('Failed to update post');
        return response.json();
    },

    // Delete post
    delete: async (id: number) => {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete post');
        return response.json();
    },
};

// Categories API
export const categoriesAPI = {
    // Get all categories
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/categories`);
        if (!response.ok) throw new Error('Failed to fetch categories');
        return response.json();
    },

    // Create new category
    create: async (categoryData: any) => {
        const response = await fetch(`${API_BASE_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
        });
        if (!response.ok) throw new Error('Failed to create category');
        return response.json();
    },
};

// Users API
export const usersAPI = {
    // Subscribe email
    subscribe: async (email: string) => {
        const response = await fetch(`${API_BASE_URL}/users/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        if (!response.ok) throw new Error('Failed to subscribe');
        return response.json();
    },

    // Get all subscribers (admin only)
    getSubscribers: async () => {
        const response = await fetch(`${API_BASE_URL}/users/subscribers`);
        if (!response.ok) throw new Error('Failed to fetch subscribers');
        return response.json();
    },
};
