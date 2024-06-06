import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise';
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'LENpass',
    database: 'LEN1Database',
};
// Endpoint for user sign-up
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
        await connection.end();
        return res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
// Endpoint for user sign-in
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        await connection.end();
        const resultRows = rows;
        if (resultRows.length > 0) {
            return res.status(200).json({ message: 'User signed in successfully' });
        }
        else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (error) {
        console.error('Error signing in user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
