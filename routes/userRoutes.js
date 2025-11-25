import express from 'express';
import { subscribe, getAllSubscribers } from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * /api/users/subscribe:
 *   post:
 *     summary: Subscribe an email
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       201:
 *         description: Subscribed successfully
 *       400:
 *         description: Invalid email address
 *       409:
 *         description: Email already subscribed
 */
router.post('/subscribe', subscribe);

/**
 * @swagger
 * /api/users/subscribers:
 *   get:
 *     summary: Get all subscribers (admin only)
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of all subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   email:
 *                     type: string
 *                   subscribed_at:
 *                     type: string
 *                     format: date-time
 */
router.get('/subscribers', getAllSubscribers);

export default router;