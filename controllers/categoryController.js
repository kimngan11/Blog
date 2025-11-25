import db from '../config/db.js';

// GET all categories
export const getAllCategories = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categories ORDER BY name');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST create category
export const createCategory = async (req, res) => {
    const { name, slug } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO categories (name, slug) VALUES (?, ?)',
            [name, slug]
        );
        res.status(201).json({ id: result.insertId, name, slug });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};