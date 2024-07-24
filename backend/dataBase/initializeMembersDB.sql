-- I am creating the members database to start & test
-- . relational MySQL database with foreign key constraints to ensure referential integrity and avoid orphan records. 
-- This situation typically arises when a record, file, or object is deleted, but the associated data remains in the system without a proper link to a parent entity.

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    
    -- Business Profile Fields
    business_name VARCHAR(100),
    business_category VARCHAR(100),
    business_country VARCHAR(50),
    business_city VARCHAR(50),
    business_revenue_yearly INT CHECK (business_revenue_yearly <= 1000000000),  
    number_of_employees INT CHECK (number_of_employees <= 1000000), 
    business_established_year YEAR,
    business_logo_url VARCHAR(255),
    business_twitter_url VARCHAR(70),
    business_google_url VARCHAR(70),
    business_facebook_url VARCHAR(70),
    business_linkedin_url VARCHAR(70),
    
    -- Personal Profile Fields
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    job_position VARCHAR(50),
    yearly_salary INT CHECK (yearly_salary <= 10000000),
    age INT CHECK (age <= 100),
    country VARCHAR(50),
    city VARCHAR(50),
    face_photo_url VARCHAR(255),
    personal_linkedin_url VARCHAR(70),
    personal_google_url VARCHAR(70),
    personal_facebook_url VARCHAR(70),
    personal_twitter_url VARCHAR(70),
    
    -- Summary Fields
    who_we_are_what_we_do VARCHAR(10000),
    what_we_provide VARCHAR(10000),
    what_we_are_looking_for VARCHAR(10000),
    
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
