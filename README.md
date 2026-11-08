# AuthApp – User Authentication App

A React Native mobile application developed using React Native CLI and TypeScript. This application demonstrates user authentication using React Context API, form validation, navigation, and local data persistence.

## 1. Implemented Features

### Authentication (React Context API)
- Implemented `AuthContext` to manage global authentication state.
- `signup()` – Registers new users.
- `login()` – Authenticates users using email and password.
- `logout()` – Logs out the currently authenticated user.
- `user` – Stores the currently logged-in user's information.

### Login Screen
- Email and password input fields.
- Email and password format validation.
- Incorrect credentials error handling.
- Navigation to the Signup screen.
- Password visibility toggle.

### Signup Screen
- Name, email, and password input fields.
- Required field validation.
- Email format validation.
- Minimum password length of 6 characters.
- Duplicate email prevention.
- Navigation to the Login screen.
- Password visibility toggle.

### Home Screen
- Displays the logged-in user's name and email.
- Logout button to end the current session.

### Authentication Persistence (AsyncStorage)
- Stores multiple registered user accounts.
- Saves the currently logged-in user's session.
- Restores the authentication session when reopening the application.
- Removes only the active session during logout while keeping registered accounts.

### Navigation
- React Navigation Native Stack.
- Login, Signup, and Home screens.
- Conditional navigation based on authentication state.
- Splash screen while restoring the saved session.

## 2. Technologies Used

- React Native CLI
- TypeScript
- React Context API
- React Navigation
- AsyncStorage
- Lucide React Native
- React Native SVG

## 3. Setup Instructions

### Prerequisites

- Windows 10/11
- Node.js
- npm
- Android Studio
- Android SDK
- Android emulator or physical Android device

### Step 1: Clone the Repository

```bash
git clone <GITHUB_REPOSITORY_URL>
```

### Step 2: Navigate to the Project Directory

```bash
cd AuthApp
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Application

Start your Android emulator or connect your Android device.

Execute:

```bash
npm run android
```

The React Native CLI will build and launch the application. Metro starts automatically when needed.