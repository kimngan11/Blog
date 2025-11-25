import db from '../config/db.js';

// POST subscribe email
export const subscribe = async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
        await db.query(
            'INSERT INTO subscribers (email) VALUES (?)',
            [email]
        );
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Email already subscribed' });
        }
        res.status(500).json({ error: error.message });
    }
};

// GET all subscribers (admin only)
export const getAllSubscribers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM subscribers ORDER BY subscribed_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};