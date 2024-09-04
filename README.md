# Service Registree

Service Registree is a full-stack web application designed to manage any service-related details efficiently. It allows users to create, read, update, and delete (CRUD) services, offering a seamless user experience for managing services in a centralized platform.

## Demo
https://github.com/user-attachments/assets/d61e271c-3dd3-4603-b662-896499c9ea5d

## Web View
![image](https://github.com/user-attachments/assets/3b4a006b-94e2-4ac5-bd0c-fa62ace10af5)

![image](https://github.com/user-attachments/assets/54c59a60-c9ee-41c2-ae48-a6a368959d6a)

## Mobile View
![image](https://github.com/user-attachments/assets/a78f5015-2322-4338-a4fc-2fc69a55f685)

![image](https://github.com/user-attachments/assets/6b2ad6fe-bbcd-4477-be46-5468212e4cbb)


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Project Overview

Service Registree is built to facilitate the management of various services. It allows users to perform CRUD operations on services, each of which includes a name, description, address, and contact information. The application is designed to be user-friendly with a responsive UI and secure back-end.

## Features
- **User Authentication**: Secure login for admins.
- **Service Management**: Add, update, delete, and view service details.
- **Responsive UI**: A modern and responsive interface built using Material-UI and Tailwind CSS.
- **Search Functionality**: Search for services quickly using the search bar.
- **Backend Integration**: API-based interaction with the backend for data management.
- **Validation**: Frontend validation for input fields to ensure data integrity.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: Component library for building responsive UI.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Router**: For routing and navigation.
- **Axios**: Promise-based HTTP client for making requests.

### Backend
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js.
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: Relational database for storing service data.

## Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **PostgreSQL**: Set up a PostgreSQL database.

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/para-commando/service-registree.git
    cd service-registree
    ```

2. **Install Frontend Dependencies**:
    ```bash
    cd FrontEnd
    npm install
    ```

3. **Install Backend Dependencies**:
    ```bash
    cd ../BackEnd
    npm install
    ```

## Configuration

### Backend

Create a `.env` file in the `BackEnd` directory with the following:
```bash
DB_HOST=your_database_host
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database
```

## Running the Application

### Start the Backend Server:

```bash
cd BackEnd
npm run start:dev
```

Start the Frontend Server:

```bash
cd FrontEnd
npm run dev
```

Open http://localhost:8080/login in your browser.

## Project Structure

```
service-registree
|
├── Backend
│   ├── dist
│   │   ├── app.controller.d.ts
│   │   ├── app.controller.js
│   │   ├── app.controller.js.map
│   │   ├── app.module.d.ts
│   │   ├── app.module.js
│   │   ├── app.module.js.map
│   │   ├── app.service.d.ts
│   │   ├── app.service.js
│   │   ├── app.service.js.map
│   │   ├── main.d.ts
│   │   ├── main.js
│   │   ├── main.js.map
│   │   ├── service
│   │   │   ├── service.controller.d.ts
│   │   │   ├── service.controller.js
│   │   │   ├── service.controller.js.map
│   │   │   ├── service.entity.d.ts
│   │   │   ├── service.entity.js
│   │   │   ├── service.entity.js.map
│   │   │   ├── service.module.d.ts
│   │   │   ├── service.module.js
│   │   │   ├── service.module.js.map
│   │   │   ├── service.service.d.ts
│   │   │   ├── service.service.js
│   │   │   └── service.service.js.map
│   │   └── tsconfig.build.tsbuildinfo
│   ├── nest-cli.json
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── main.ts
│   │   └── service
│   │       ├── service.controller.ts
│   │       ├── service.entity.ts
│   │       ├── service.module.ts
│   │       └── service.service.ts
│   ├── test
│   │   ├── app.e2e-spec.ts
│   │   └── jest-e2e.json
│   ├── tsconfig.build.json
│   └── tsconfig.json
├── FrontEnd
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   │   └── service.png
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── magnifier.png
│   │   │   ├── plus.png
│   │   │   ├── react.svg
│   │   │   └── service.png
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── router
│   │       ├── router.jsx
│   │       └── routes
│   │           ├── AuthScreen.jsx
│   │           ├── CreateService.jsx
│   │           ├── EditService.jsx
│   │           ├── ErrorScreen.jsx
│   │           ├── Index.jsx
│   │           ├── Root.jsx
│   │           └── Services.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## API Documentation

### Endpoints

**GET /services**: Fetch all services.

**POST /services**: Create a new service.

**GET /services/:id**: Get a specific service.

**PUT /services/:id**: Update a service.

**DELETE /services/:id**: Delete a service.

## Contributing

 - Fork the repository.

 - Create a new branch (git checkout -b feature/your-feature).

 - Make your changes.

 - Commit your changes (git commit -m 'Add new feature').

 - Push to the branch (git push origin feature/your-feature).

 - Open a pull request.

## License
This project is licensed under the MIT License
