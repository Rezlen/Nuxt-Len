-- I am creating the members database to start & test
-- . relational MySQL database with foreign key constraints to ensure referential integrity and avoid orphan records.- 
-- This situation typically arises when a record, file, or object is deleted, but the associated data remains in the system without a proper link to a parent entity.

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE BusinessProfiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    business_name VARCHAR(100),
    business_category VARCHAR(50),
    business_country VARCHAR(50),
    business_city VARCHAR(50),
    business_revenue_yearly VARCHAR(50),
    number_of_employees INT,
    business_established_year YEAR,
    business_logo_url VARCHAR(255),
    business_twitter_url VARCHAR(70),
    business_google_url VARCHAR(70),
    business_facebook_url VARCHAR(70),
    business_linkedin_url VARCHAR(70),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);


CREATE TABLE PersonalProfiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    job_position VARCHAR(50),
    yearly_salary VARCHAR(50),
    age INT,
    country VARCHAR(50),
    city VARCHAR(50),
    face_photo_url VARCHAR(255),
    personal_linkedin_url VARCHAR(70),
    personal_google_url VARCHAR(70),
    personal_facebook_url VARCHAR(70),
    personal_twitter_url VARCHAR(70),
    who_we_are TEXT,
    what_we_do TEXT,
    what_we_provide TEXT,
    what_we_are_looking_for TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
