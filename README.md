# Evently Backend API

This is the backend API for Evently, a community-focused web platform for creating, managing, and attending small-scale events.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Seeding the Database](#seeding-the-database)
- [Testing with Postman](#testing-with-postman)

## Features

- User authentication with JWT
- Event creation and management
- RSVP system
- Comment system
- Role-based access control (user/admin)

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user

### Events

- `GET /api/events` - Get all public events
- `GET /api/events/:id` - Get a single event
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event
- `POST /api/events/:id/rsvp` - Request to join an event
- `PUT /api/events/:id/rsvp/:userId` - Approve or decline RSVP request
- `GET /api/events/user/:userId` - Get events created by a user
- `GET /api/events/attending/:userId` - Get events a user is attending

### Comments

- `POST /api/comments/:eventId` - Add a comment to an event
- `GET /api/comments/:eventId` - Get all comments for an event
- `DELETE /api/comments/:id` - Delete a comment

### Users

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/evently-backend.git
   cd evently-backend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

\`\`\`
PORT=5000
MONGO_URI=mongodb://localhost:27017/evently
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
\`\`\`

## Running the Server

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

The server will run on `http://localhost:5000`.

## Seeding the Database

To populate the database with sample data:

\`\`\`bash
npm run seed
\`\`\`

This will create sample users, events, and comments.

## Testing with Postman

1. Import the Postman collection from the `postman` directory.
2. Set up environment variables in Postman:
   - `BASE_URL`: `http://localhost:5000/api`
   - `TOKEN`: Leave empty (will be filled after login)

3. Register a user or login with a seeded user:
   - Email: `john@example.com`
   - Password: `password123`

4. The login response will include a token. Copy this token and set it as the `TOKEN` environment variable in Postman.

5. Now you can test all the endpoints. The collection is organized by resource (auth, events, comments, users).
