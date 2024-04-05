# Note It Up
A simple and efficient web application for taking and managing notes. The app provides a user-friendly interface to create, edit, and delete notes, helping users organize their thoughts and tasks effectively.
### Features:
- Create Notes
- Access Notes
- Update Notes
- Delete Notes

<img width="1440" alt="Screenshot 2024-04-05 at 7 53 47 PM" src="https://github.com/akhiranandan/note-it-up/assets/75657830/978d214f-e203-4276-a61b-a18206acdc15">
<img width="1440" alt="Screenshot 2024-04-05 at 8 03 40 PM" src="https://github.com/akhiranandan/note-it-up/assets/75657830/7a6a093b-5504-4661-a4dd-121f4c477114">

# Notes stored in HTML format in the database.

<img width="1249" alt="Screenshot 2024-04-05 at 8 19 03 PM" src="https://github.com/akhiranandan/note-it-up/assets/75657830/563fcf21-1129-4de9-b313-a7362f8e4121">

# Code Setup
1. Clone the repository:

```
git clone https://github.com/akhiranandan/note-it-up.git
```

2. Navigate to the project directory:

```
cd note-it-up
```

3. Install dependencies:

```
npm install
```

4. Run the backend:

```
npm run dev
```

5. For running the frontend, navigate to the client folder in new terminal window.

```
cd client
```

6. Install the dependencies:

```
npm install
```

7. Start the server:

```
npm run dev
```

# Hosted URL of frontend
```
https://note-it-up-app.netlify.app/
```
# Code Structure
### Client Directory Structure
- src/: This directory contains the source code of the React application.
- components/: React components, such as navigation bars, buttons, and forms.
- App.js: The main component that acts as the entry point for the React application.
- index.js: The entry point file that renders the React app into the HTML document.

### Server Directory Structure
- models/: Defines Schema using tools like Mongoose for MongoDB databases.
- routes/: Express routes for handling CRUD operations on notes stored in a MongoDB database
- index.js: Entry point for the Express server, where server setup and middleware configuration occur.
