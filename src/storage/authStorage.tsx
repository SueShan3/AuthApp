import AsyncStorage from '@react-native-async-storage/async-storage';
import type { User } from '../models/User';

const REGISTERED_USERS_KEY = 'registeredUsers';
const LEGACY_REGISTERED_USER_KEY = 'registeredUser';
const USER_KEY = 'user';

// Save multiple registered users
export const saveRegisteredUsers = async (user: User[]) => {
  await AsyncStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(user));
};

// Retrieved all registered users
export const getRegisteredUsers = async () => {
  const data = await AsyncStorage.getItem(REGISTERED_USERS_KEY);

  if (data) {
    return JSON.parse(data) as User[];
  }

  // Migrate existing single registered user
  const legacyData = await AsyncStorage.getItem(LEGACY_REGISTERED_USER_KEY);

  if (legacyData) {
    const legacyUser = JSON.parse(legacyData) as User;
    const users = [legacyUser];

    await saveRegisteredUsers(users);
    await AsyncStorage.removeItem(LEGACY_REGISTERED_USER_KEY);

    return users;
  }
  return [];
};

// Save the currently logged-in user
export const saveUser = async (user: User) => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

// Retrieved the currently logged-in user
export const getUser = async () => {
  const data = await AsyncStorage.getItem(USER_KEY);
  return data ? (JSON.parse(data) as User) : null;
};

// Remove the active login session
export const removeUser = async () => {
  await AsyncStorage.removeItem(USER_KEY);
};
