# News-App Frontend Documentation

## Overview
The News-App frontend is built using React and provides a user interface for displaying news articles. It interacts with the backend API to fetch and manage news data.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Folder Structure
- `public/`: Contains the static files, including `index.html`.
- `src/`: Contains the React components and application logic.
  - `App.js`: Main application component.
  - `components/`: Contains reusable components like `NewsList.js`.
  - `context/`: Contains context providers for state management.
  - `index.js`: Entry point for the React application.

### Features
- Fetches news articles from the backend API.
- Displays a list of news articles with titles and content.
- Responsive design for better user experience.

### Contributing
Feel free to submit issues or pull requests to improve the application.

### License
This project is licensed under the MIT License.