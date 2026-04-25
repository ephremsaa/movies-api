# Movie Review REST API

A simple, robust REST API for managing movie reviews built entirely with **Node.js Core Modules** (`http` and `fs`). This project strictly avoids Express and any other third-party dependencies, demonstrating a solid understanding of Node.js fundamentals, routing, and file system operations.

## 📁 Project Structure
```
/movie-api
  ├── server.js          # Entry point and route handling
  ├── movies.json        # Data storage
  ├── utils/
  │   └── helpers.js     # Helper functions for file reading/writing and HTTP utilities
  └── README.md          # Documentation
```

## 🚀 How to Run the Server

1. Make sure you have Node.js installed on your machine.
2. Open your terminal and navigate to the root directory of this project.
3. Start the server using node:
   ```bash
   node server.js
   ```
4. You should see the following output in your terminal:
   ```
   🚀 Server is running on http://localhost:3000
   📂 Data is stored in movies.json
   Ready to handle requests!
   ```

## 📡 API Endpoints

The API supports full CRUD operations. All requests and responses are in JSON format.
Base URL: `http://localhost:3000`

### 1️⃣ CREATE: Add a New Movie
- **Method:** `POST`
- **Endpoint:** `/movies`
- **Body:** JSON object with `title`, `director`, `year`, and `rating` (1-10).
- **Example Request (curl):**
  ```bash
  curl -X POST http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "rating": 9
  }'
  ```

### 2️⃣ READ ALL: Get All Movies
- **Method:** `GET`
- **Endpoint:** `/movies`
- **Example Request (curl):**
  ```bash
  curl -X GET http://localhost:3000/movies
  ```

### 3️⃣ READ ONE: Get Movie by ID
- **Method:** `GET`
- **Endpoint:** `/movies/:id` (Replace `:id` with actual ID)
- **Example Request (curl):**
  ```bash
  curl -X GET http://localhost:3000/movies/1
  ```

### 4️⃣ UPDATE: Update Movie Details
- **Method:** `PUT`
- **Endpoint:** `/movies/:id`
- **Body:** Partial or full JSON object of the fields to update.
- **Example Request (curl):**
  ```bash
  curl -X PUT http://localhost:3000/movies/1 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 10
  }'
  ```

### 5️⃣ DELETE: Remove a Movie
- **Method:** `DELETE`
- **Endpoint:** `/movies/:id`
- **Example Request (curl):**
  ```bash
  curl -X DELETE http://localhost:3000/movies/1
  ```

## 🧠 Features & Logic Implementations
- **Core Modules:** Purely uses `http` to start the server and parse URLs, and `fs.promises` for asynchronous file reading/writing.
- **Data Persistence:** Automatically stores and reads all data seamlessly from `movies.json`.
- **Validation:** Enforces strict validation on missing fields and limits rating between 1 and 10.
- **Error Handling:** Robust error management for invalid JSON requests, missing resources (404), and server crashes (500).
- **Extra Features:** Automatically assigns a unique `id` and a `createdAt` timestamp to every new entry. The `movies.json` file is also formatted to look neat and readable.

## 🚀 GitHub & Commits Strategy

To publish this assignment correctly and demonstrate good version control practices, follow these steps to initialize your Git repository and make 3 meaningful commits:

### Step 1: Initialize Git Repo
Run the following commands in your terminal at the root of the project:
```bash
# Initialize a new git repository
git init

# (Optional) Create a .gitignore file to exclude unnecessary files like node_modules if you ever add them
echo "node_modules/" > .gitignore
```

### Step 2: Make 3 Meaningful Commits
You want your commit history to tell a story of how you built the project.

**Commit 1: Initial server setup**
Add your initial server configuration and helper files.
```bash
git add server.js utils/helpers.js README.md
git commit -m "chore: initial server setup and core structure"
```

**Commit 2: Implement CRUD logic**
Add the data handling logic, reading, writing, and the core routing.
```bash
git add server.js utils/helpers.js movies.json
git commit -m "feat: implement full CRUD routing and JSON persistence"
```

**Commit 3: Add validation & improvements**
Finalize any error handling, timestamp generation, and formatting.
```bash
git add .
git commit -m "feat: add input validation, timestamps, and error handling"
```

### Step 3: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Follow the instructions to push your existing repository from the command line:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
