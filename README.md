# Library Management System

## Overview

This repository contains the source code for a Library Management System, a web application with authentication and CRUD (Create, Read, Update, Delete) operations for managing books.

...

## Deployment

The Library Management System is deployed and accessible through the following links:

- **Live Link:** [Library Management System Live](https://library-system-six.vercel.app/)
- **GitHub Repository:** [Library Management System GitHub](https://github.com/GauravHedau/Library_system)

## Features

### Authentication

The system provides user authentication through signup and login functionalities. Users can create a new account with a username, email, and password. Subsequently, they can log in using their credentials.

#### Signup

**Endpoint: /api/v1/signup**  
**Method: POST**

Allows users to create a new account with the following information:
- Username
- Email
- Password
- Role

#### Login

**Endpoint: /api/v1/login**  
**Method: POST**

Authenticates users based on the provided credentials (Username/Email and Password).

### CRUD Operations for Books

#### Create Book

**Endpoint: /api/v1/createBook**  
**Method: POST**

Add a new book to the library with details such as book name, author, description, and creation date.

#### Get Books

**Endpoint: /api/v1/getBooks**  
**Method: GET**

Retrieve all books information from the database.

#### Update Book

**Endpoint: /api/v1/updateBook/:bookId**  
**Method: PUT**

Allow updating book information, including fields like book name, author, and creation date.

#### Delete Book

**Endpoint: /api/v1/deleteBook/:bookId**  
**Method: DELETE**

Remove a book from the library based on the provided book ID.

### Security

Passwords are securely stored using the bcrypt library, implementing appropriate hashing algorithms to enhance system security.

### Documentation

API Endpoints Documentation:

Each API endpoint is documented with clear and concise information. Includes:
- Endpoint URLs
- Request methods
- Request and response formats (JSON)
- Authentication requirements

### Testing

A set of test cases for each API endpoint ensures proper functionality. Testing can be performed using tools like Postman or any other API testing tool.
I used postman for testing purposes



## Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/GauravHedau/Library_system
    ```

2. **Install Dependencies:**

    ```bash
    cd Library_system
    npm install
    ```

3. **Start the Application:**

    ```bash
    npm start
    ```

4. **Access the API:**

    Open a web browser and go to http://localhost:4000 to access the API.

## Dependencies

- Node.js
- Express.js
- MongoDB
- React.js
- Other dependencies (listed in the package.json file)
