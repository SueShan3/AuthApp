import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { User } from '../models/User';
import {
  getRegisteredUsers,
  getUser,
  removeUser,
  saveRegisteredUsers,
  saveUser,
} from '../storage/authStorage';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Restore saved user data when the app starts
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedRegisteredUsers = await getRegisteredUsers();
        const savedUser = await getUser();

        setRegisteredUsers(savedRegisteredUsers);
        setUser(savedUser);
      } catch (error) {
        console.log('Failed to load user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Register a new user
  const signup = async (name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();

    // Check whether the email is already registered
    const existingUser = registeredUsers.some(
      registeredUser => registeredUser.email === normalizedEmail,
    );

    if (existingUser) {
      throw new Error('This email is already registered.');
    }

    const newUser: User = {
      name: name.trim(),
      email: normalizedEmail,
      password,
    };

    // Add the new user to the existing registered users
    const updatedUsers = [...registeredUsers, newUser];

    await saveRegisteredUsers(updatedUsers);
    await saveUser(newUser);

    setRegisteredUsers(updatedUsers);
    setUser(newUser);
  };

  // Login with any registred account
  const login = async (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();

    const matchedUser = registeredUsers.find(
      registeredUser =>
        registeredUser.email === normalizedEmail &&
        registeredUser.password === password,
    );

    if (!matchedUser) {
      throw new Error('Incorrect email or password.');
    }

    await saveUser(matchedUser);
    setUser(matchedUser);
  };

  // Logout the current user
  const logout = async () => {
    await removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};
