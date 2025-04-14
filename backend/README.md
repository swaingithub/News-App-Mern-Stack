# News-App Backend

This is the backend part of the News-App project, which is built using Node.js and Express. The backend is responsible for handling API requests related to news articles, connecting to a MongoDB database, and managing the application's data.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point for the application. Initializes the Express app and sets up middleware.
  - **controllers/**: Contains the business logic for handling news-related operations.
    - **newsController.js**: Exports the `NewsController` class with methods for CRUD operations on news articles.
  - **models/**: Contains the Mongoose models for the application.
    - **newsModel.js**: Defines the schema for news articles.
  - **routes/**: Contains the route definitions for the application.
    - **newsRoutes.js**: Sets up the routes for news operations.
  - **config/**: Contains configuration files.
    - **db.js**: Handles the connection to the MongoDB database.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the backend directory**:
   ```
   cd News-App/backend
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Set up the database**:
   Ensure you have MongoDB installed and running. Update the database connection string in `src/config/db.js` if necessary.

5. **Run the application**:
   ```
   npm start
   ```

## API Endpoints

- `GET /api/news`: Retrieve all news articles.
- `GET /api/news/:id`: Retrieve a specific news article by ID.
- `POST /api/news`: Create a new news article.
- `PUT /api/news/:id`: Update an existing news article by ID.
- `DELETE /api/news/:id`: Delete a news article by ID.

## Technologies Used

- Node.js
- Express
- Mongoose
- MongoDB

## License

This project is licensed under the MIT License.