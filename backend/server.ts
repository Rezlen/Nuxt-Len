import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';
import { User } from './models/User';
import { Profile } from './models/Profile';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// DataSource configuration
const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'mydatabase',
  synchronize: true,
  entities: [User, Profile],
});

// Initialize the DataSource
AppDataSource.initialize().then(() => {
  console.log('Connected to the database');
}).catch(error => console.error('Database connection error: ', error));

// URL Validation Function
const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return true; // Undefined or null URLs are considered valid (i.e., optional fields)
  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;
  return urlPattern.test(url);
};

// Error Handling Middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
};

// Validators
const validateRegistrationData = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const errors: string[] = [];

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email format');
  }

  // Validate password
  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
};

const validateUpdateData = (req: Request, res: Response, next: NextFunction) => {
  const {
    businessName,
    businessCategory,
    businessCountry,
    businessCity,
    businessRevenue,
    numberOfEmployees,
    businessEstablishedYear,
    firstName,
    lastName,
    jobPosition,
    yearlySalary,
    age,
    country,
    city,
    businessTwitterUrl,
    businessGoogleUrl,
    businessFacebookUrl,
    businessLinkedinUrl,
    personalLinkedinUrl,
    personalGoogleUrl,
    personalFacebookUrl,
    personalTwitterUrl,
    whoWeAreWhatWeDo,
    whatWeProvide,
    whatWeAreLookingFor
  } = req.body;

  const errors: string[] = [];

  // Validate Business Profile fields
  if (businessName && typeof businessName !== 'string') errors.push('Business Name must be a string');
  if (businessCategory && typeof businessCategory !== 'string') errors.push('Business Category must be a string');
  if (businessCountry && typeof businessCountry !== 'string') errors.push('Business Country must be a string');
  if (businessCity && typeof businessCity !== 'string') errors.push('Business City must be a string');
  if (businessRevenue && (typeof businessRevenue !== 'number' || businessRevenue <= 0)) errors.push('Business Revenue must be a positive number');
  if (numberOfEmployees && (typeof numberOfEmployees !== 'number' || numberOfEmployees <= 0)) errors.push('Number of Employees must be a positive number');
  if (businessEstablishedYear && (typeof businessEstablishedYear !== 'number' || businessEstablishedYear < 1900 || businessEstablishedYear > new Date().getFullYear())) errors.push('Business Established Year must be a valid year');
  if (businessTwitterUrl && !isValidUrl(businessTwitterUrl)) errors.push('Invalid Business Twitter URL');
  if (businessGoogleUrl && !isValidUrl(businessGoogleUrl)) errors.push('Invalid Business Google URL');
  if (businessFacebookUrl && !isValidUrl(businessFacebookUrl)) errors.push('Invalid Business Facebook URL');
  if (businessLinkedinUrl && !isValidUrl(businessLinkedinUrl)) errors.push('Invalid Business LinkedIn URL');

  // Validate Personal Profile fields
  if (firstName && typeof firstName !== 'string') errors.push('First Name must be a string');
  if (lastName && typeof lastName !== 'string') errors.push('Last Name must be a string');
  if (jobPosition && typeof jobPosition !== 'string') errors.push('Job Position must be a string');
  if (yearlySalary && (typeof yearlySalary !== 'number' || yearlySalary < 0)) errors.push('Yearly Salary must be a positive number');
  if (age && (typeof age !== 'number' || age < 0)) errors.push('Age must be a positive number');
  if (country && typeof country !== 'string') errors.push('Country must be a string');
  if (city && typeof city !== 'string') errors.push('City must be a string');
  if (personalLinkedinUrl && !isValidUrl(personalLinkedinUrl)) errors.push('Invalid Personal LinkedIn URL');
  if (personalGoogleUrl && !isValidUrl(personalGoogleUrl)) errors.push('Invalid Personal Google URL');
  if (personalFacebookUrl && !isValidUrl(personalFacebookUrl)) errors.push('Invalid Personal Facebook URL');
  if (personalTwitterUrl && !isValidUrl(personalTwitterUrl)) errors.push('Invalid Personal Twitter URL');

  // Validate long text fields
  if (whoWeAreWhatWeDo && typeof whoWeAreWhatWeDo !== 'string') errors.push('Who We Are What We Do must be a string');
  if (whatWeProvide && typeof whatWeProvide !== 'string') errors.push('What We Provide must be a string');
  if (whatWeAreLookingFor && typeof whatWeAreLookingFor !== 'string') errors.push('What We Are Looking For must be a string');

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
};

// Routes
app.post('/api/signup', validateRegistrationData, async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User();
    user.email = email;
    user.password = hashedPassword;

    const profile = new Profile();
    profile.user = user;

    await AppDataSource.getRepository(User).save(user);
    await AppDataSource.getRepository(Profile).save(profile);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: (error as Error).message });
  }
});

app.put('/api/update-profile/:userId', validateUpdateData, async (req: Request, res: Response) => {
  const { userId } = req.params;
  const {
    businessName,
    businessCategory,
    businessCountry,
    businessCity,
    businessRevenue,
    numberOfEmployees,
    businessEstablishedYear,
    firstName,
    lastName,
    jobPosition,
    yearlySalary,
    age,
    country,
    city,
    businessTwitterUrl,
    businessGoogleUrl,
    businessFacebookUrl,
    businessLinkedinUrl,
    personalLinkedinUrl,
    personalGoogleUrl,
    personalFacebookUrl,
    personalTwitterUrl,
    whoWeAreWhatWeDo,
    whatWeProvide,
    whatWeAreLookingFor
  } = req.body;

  try {
    const userRepository = AppDataSource.getRepository(User);
    const profileRepository = AppDataSource.getRepository(Profile);

    const user = await userRepository.findOneBy({ id: Number(userId) });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const profile = await profileRepository.findOneBy({ user: user });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });

    profile.businessName = businessName;
    profile.businessCategory = businessCategory;
    profile.businessCountry = businessCountry;
    profile.businessCity = businessCity;
    profile.businessRevenue = businessRevenue;
    profile.numberOfEmployees = numberOfEmployees;
    profile.businessEstablishedYear = businessEstablishedYear;
    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.jobPosition = jobPosition;
    profile.yearlySalary = yearlySalary;
    profile.age = age;
    profile.country = country;
    profile.city = city;
    profile.businessTwitterUrl = businessTwitterUrl;
    profile.businessGoogleUrl = businessGoogleUrl;
    profile.businessFacebookUrl = businessFacebookUrl;
    profile.businessLinkedinUrl = businessLinkedinUrl;
    profile.personalLinkedinUrl = personalLinkedinUrl;
    profile.personalGoogleUrl = personalGoogleUrl;
    profile.personalFacebookUrl = personalFacebookUrl;
    profile.personalTwitterUrl = personalTwitterUrl;
    profile.whoWeAreWhatWeDo = whoWeAreWhatWeDo;
    profile.whatWeProvide = whatWeProvide;
    profile.whatWeAreLookingFor = whatWeAreLookingFor;

    await profileRepository.save(profile);

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: (error as Error).message });
  }
});

// Use Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
