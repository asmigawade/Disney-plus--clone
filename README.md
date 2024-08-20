
# Disney Plus Clone

## Overview

The Disney Plus Clone is a React application that mimics the Disney Plus streaming service interface. The app features authentication through Firebase, a stylish UI created with Styled Components, and showcases a range of movies and TV shows similar to the Disney Plus platform.

## Features

- **User Authentication**: Sign up, log in, and log out using Firebase Authentication.
- **Styled Components**: A visually appealing user interface styled with Styled Components.
- **Content Display**: Browse through a list of movies and TV shows.
- **Responsive Design**: Works across different screen sizes and devices.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/disney-plus-clone.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd disney-plus-clone
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Configure Firebase**:
   - Create a Firebase project and set up authentication.
   - Add your Firebase configuration details to the `.env` file in the project root. For example:

     ```
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

5. **Start the development server**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Sign Up / Log In**:
   - Use the authentication form to sign up or log in with your email and password.

2. **Browse Content**:
   - Navigate through the available movies and TV shows, and click on items to view more details.

3. **Responsive Design**:
   - The app is designed to be responsive, so it should look good on both desktop and mobile devices.

## Components

- `App`: The main component that sets up routing and authentication context.
- `Header`: Displays the navigation and user authentication options.
- `Home`: Shows the main content, including movie and TV show listings.
- `Login`: Handles user login and registration.
- `MovieDetail`: Displays detailed information about a selected movie or show.

## Dependencies

- `react`: The core React library.
- `styled-components`: For component-level styling.
- `firebase`: For authentication and other Firebase services.

##Userflow
![image](https://github.com/user-attachments/assets/128e6dfa-2269-46f8-9cb6-eed28e3c8232)

![image](https://github.com/user-attachments/assets/48d89548-173f-4c67-a19e-654a5ebb71bf)

![image](https://github.com/user-attachments/assets/cb52ee61-6bb2-4b2a-adac-991de866d702)

![image](https://github.com/user-attachments/assets/79df522d-89cf-498b-8244-2d64a4944097)

![image](https://github.com/user-attachments/assets/1569be3a-3929-4514-a900-712df30da108)

