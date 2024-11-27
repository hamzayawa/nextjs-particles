// utils/validation.ts
import { FormErrors } from '../types';

export const validateFirstname = (firstname: string): string => {
  if (firstname.trim() === '') {
    return 'First Name is required';
  }
  return '';
};

export const validateLastname = (lastname: string): string => {
  if (lastname.trim() === '') {
    return 'Last Name is required';
  }
  return '';
};

export const validateUsername = (username: string): string => {
  if (username.trim().length < 3) {
    return 'Username must be at least 3 characters';
  }
  return '';
};

export const validateEmail = (email: string): string => {
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePassword = (password: string): string => {
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  } else if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  } else if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  } else if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one special character';
  }
  return '';
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string => {
  if (password !== confirmPassword) {
    return 'Password and confirm password do not match';
  }
  return '';
};

export const validateForm = (
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string
): FormErrors => {
  return {
    firstname: validateFirstname(firstname),
    lastname: validateLastname(lastname),
    username: validateUsername(username),
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  };
};