import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { createConnection } from 'typeorm';
import { User } from './models/User';
import { BusinessProfile } from './models/BusinessProfile';
import { PersonalProfile } from './models/PersonalProfile';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
createConnection().then(() => {
  console.log('Connected to the database');
}).catch(error => console.log('Database connection error: ', error));

// Routes
app.post('/api/signup', async (req, res) => {
  const { email, password, ...profileData } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User();
    user.email = email;
    user.password = hashedPassword;

    // Save user to database
    await user.save();

    // Save business profile
    const businessProfile = new BusinessProfile();
    Object.assign(businessProfile, profileData);
    businessProfile.user = user;
    await businessProfile.save();

    // Save personal profile
    const personalProfile = new PersonalProfile();
    Object.assign(personalProfile, profileData);
    personalProfile.user = user;
    await personalProfile.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
