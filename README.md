# CollabWrite--Appwrite-HacktoberFest-Program-2024

## Project Overview

**CollabWrite** is a real-time collaborative document editor that allows multiple users to create, edit, and format text documents simultaneously. The platform is designed for remote teams and individuals who want a smooth and efficient way to work on documents together, without worrying about version conflicts.

## Features

- Real-time collaboration for multiple users
- Intuitive and user-friendly document editing
- Version history for each document
- User authentication and access control
- Save and load documents from a database
- Rich text formatting tools

## Inspiration

We were inspired by the challenges of remote work and the need for an open-source, real-time document editor that supports easy collaboration without worrying about conflicting changes. **CollabWrite** is built to provide a streamlined and intuitive experience for teams working across different locations.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** Appwrite (Database)
- **Real-time collaboration:** WebSockets
- **Authentication:** Appwrite Authentication
- **Storage:** Appwrite Storage for document files and version history

## Usage of Appwrite

**CollabWrite** leverages Appwrite in several ways:

- **Appwrite Database:** To store document metadata and content.
- **Appwrite Authentication:** To handle user registration, login, and session management.
- **Appwrite Realtime:** For enabling real-time collaboration between multiple users working on the same document.
- **Appwrite Storage:** To store and retrieve documents, along with maintaining version history for each file.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- Appwrite account (You can create a free account [here](https://appwrite.io))
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/collabwrite.git
   ```

2. Navigate to the `frontend` and `backend` directories to install dependencies:

   ```bash
   cd frontend
   npm install
   ```

   ```bash
   cd backend
   npm install
   ```

3. Set up your Appwrite project:

   - Create a new project in your Appwrite console.
   - Set up authentication, database, and storage in Appwrite.
   - Update the `.env` file in the backend with your Appwrite credentials and project details.

4. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

5. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

6. Open the application in your browser at `http://localhost:3000`.

### API Endpoints

- `GET /api/documents`: Fetch all documents.
- `POST /api/documents`: Create a new document.
- `PUT /api/documents/:id`: Update a document.
- `DELETE /api/documents/:id`: Delete a document.

## Project Structure

```bash
collabwrite/
│
├── backend/               # Backend logic
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── models/            # Database schemas
│   ├── server.js          # Entry point for backend server
│   └── .env.example       # Example environment variables
│
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point for frontend
│   └── public/
│
├── README.md              # Project documentation
└── .gitignore             # Files to ignore in Git
```


## Future Enhancements

- **Offline editing support**
- **Voice/Video integration for collaboration**
- **Code syntax highlighting for developers**

## Contributing

We welcome contributions! If you'd like to contribute to CollabWrite

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
