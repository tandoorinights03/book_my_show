# BookMyShow 

## Overview

This is a full-stack BookMyShow-like movie booking application that allows users to browse movies by language, select seats, and make fake payments. The project includes a frontend built with React.js, a backend powered by Node.js and Express.js, and a database using MongoDB.

---

## Features

- **User Authentication:** Login and Signup functionality using JWT authentication.
- **Movie Browsing:** Users can browse movies by language.
- **Seat Selection:** Dynamic seat availability and selection.
- **Fake Payment System:** Simulated payment process.
- **Booking Confirmation:** Displays booking ID upon successful booking.
- **Admin Panel (Optional):** Manage movies, seats, and bookings.
- **Analytics:** Displays pre-set reviews, likes, and ratings.

---

## Tech Stack

### **Frontend:**

- React.js (JavaScript)
- React Router (Navigation)
- CSS (Styling)
- Fetch API (HTTP Requests)

### **Backend:**

- Node.js (Runtime Environment)
- Express.js (Web Framework)
- MongoDB (Database)
- Mongoose (ODM for MongoDB)
- JWT (User Authentication)
- bcrypt.js (Password Hashing)

---

## Setup Instructions

### **2. Install Dependencies:**

#### **Frontend:**

```bash
cd frontend
npm install
```

#### **Backend:**

```bash
cd backend
npm install
```

### **3. Configure Environment Variables:**

Create a `.env` file in the backend directory and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookmyshow_clone
JWT_SECRET=your_jwt_secret
```

---

### **4. Start the Application:**

#### **Start Backend:**

```bash
cd backend
npm start
```

#### **Start Frontend:**

```bash
cd frontend
npm start
```

The frontend runs on `http://localhost:3000`, and the backend runs on `http://localhost:5000`.

---

## API Endpoints

### **Authentication**

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/auth/signup | User Registration |
| POST   | /api/auth/login  | User Login        |

### **Movies**

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | /api/movies             | Fetch all movies         |
| GET    | /api/movies?language=xx | Fetch movies by language |

### **Seat Booking**

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | /api/seats/\:movieId | Get seat availability |
| POST   | /api/seats/book      | Book selected seats   |

---

## Folder Structure

```
/bookmyshow-clone
 ├── frontend (React.js)
 │   ├── src
 │   │   ├── components
 │   │   │   ├── Home.js
 │   │   │   ├── Navbar.js
 │   │   │   ├── Movies.js
 │   │   │   ├── MovieList.js
 │   │   │   ├── SeatSelection.js
 │   │   │   ├── Login.js
 │   │   ├── App.js
 │   │   ├── index.js
 │   ├── public
 │   │   ├── assets (Movie images)
 │   ├── package.json
 │
 ├── backend (Node.js + Express.js)
 │   ├── models
 │   │   ├── User.js
 │   │   ├── Movie.js
 │   │   ├── Seat.js
 │   ├── routes
 │   │   ├── authRoutes.js
 │   │   ├── movieRoutes.js
 │   │   ├── seatRoutes.js
 │   ├── server.js
 │   ├── package.json
 │
 ├── README.md
```

---

## Future Enhancements

- **Admin Dashboard** for managing movies and bookings.
- **Payment Gateway Integration** for real transactions.
- **More UI Enhancements** for better user experience.

---

## Contributors

- Your Name (@tandoorinights03)

For any issues, feel free to raise a ticket in the repository. 🚀

