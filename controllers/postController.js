import db from '../config/db.js';

// GET all posts (with pagination & filter)
export const getAllPosts = async (req, res) => {
    const { category, limit = 10, offset = 0 } = req.query;

    try {
        let query = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM posts p
      LEFT JOIN categories c ON p.category_id = c.id
    `;
        const params = [];

        if (category) {
            query += ' WHERE c.slug = ?';
            params.push(category);
        }

        query += ' ORDER BY p.created_at DESC LIMIT ? OFFSET ?';
        params.push(parseInt(limit), parseInt(offset));

        const [rows] = await db.query(query, params);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET single post by slug
export const getPostBySlug = async (req, res) => {
    const { slug } = req.params;

    try {
        const [rows] = await db.query(
            `SELECT p.*, c.name as category_name, c.slug as category_slug
       FROM posts p
       LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.slug = ?`,
            [slug]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST create new post
export const createPost = async (req, res) => {
    const { title, slug, description, content, image_url, category_id, reading_time } = req.body;

    try {
        const [result] = await db.query(
            `INSERT INTO posts (title, slug, description, content, image_url, category_id, reading_time)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [title, slug, description, content, image_url, category_id, reading_time]
        );

        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT update post
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, slug, description, content, image_url, category_id, reading_time } = req.body;

    try {
        await db.query(
            `UPDATE posts SET title=?, slug=?, description=?, content=?, image_url=?, 
       category_id=?, reading_time=? WHERE id=?`,
            [title, slug, description, content, image_url, category_id, reading_time, id]
        );

        res.json({ message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE post
export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query('DELETE FROM posts WHERE id = ?', [id]);
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};