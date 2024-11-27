"use client";

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

const SignupPage = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let formValid = true;

    // Validate form fields
    if (firstname.trim() === '') {
      setErrors((prev) => ({ ...prev, firstname: 'First Name is required' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, firstname: '' }));
    }

    if (lastname.trim() === '') {
      setErrors((prev) => ({ ...prev, lastname: 'Last Name is required' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, lastname: '' }));
    }

    if (username.trim().length < 3) {
      setErrors((prev) => ({ ...prev, username: 'Username must be at least 3 characters' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, username: '' }));
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Password and confirm password do not match' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    }

    if (formValid) {
      // Handle form submission, e.g., send data to the server
      console.log('Form submitted:', { firstname, lastname, username, email, password });
      router.push('/login');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="register-container">
        <div className="or-text">
          <span></span>
          <span>
            <h2 className="primary">Signup</h2>
          </span>
          <span></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>F</span>
              <span style={{ transitionDelay: '50ms' }}>i</span>
              <span style={{ transitionDelay: '100ms' }}>r</span>
              <span style={{ transitionDelay: '150ms' }}>s</span>
              <span style={{ transitionDelay: '200ms' }}>t</span>
              <span style={{ transitionDelay: '250ms' }}>N</span>
              <span style={{ transitionDelay: '300ms' }}>a</span>
              <span style={{ transitionDelay: '350ms' }}>m</span>
              <span style={{ transitionDelay: '400ms' }}>e</span>
            </label>
            {errors.firstname && <span id="firstnameFeedback" className="error">
              {errors.firstname}
            </span>}
          </div>
          <div className="form-control">
            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>L</span>
              <span style={{ transitionDelay: '50ms' }}>a</span>
              <span style={{ transitionDelay: '100ms' }}>s</span>
              <span style={{ transitionDelay: '200ms' }}>t</span>
              <span style={{ transitionDelay: '250ms' }}>N</span>
              <span style={{ transitionDelay: '300ms' }}>a</span>
              <span style={{ transitionDelay: '350ms' }}>m</span>
              <span style={{ transitionDelay: '400ms' }}>e</span>
            </label>
            {errors.lastname && <span id="lastnameFeedback" className="error">
              {errors.lastname}
            </span>}
          </div>
          <div className="form-control">
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>U</span>
              <span style={{ transitionDelay: '50ms' }}>s</span>
              <span style={{ transitionDelay: '100ms' }}>e</span>
              <span style={{ transitionDelay: '150ms' }}>r</span>
              <span style={{ transitionDelay: '200ms' }}>N</span>
              <span style={{ transitionDelay: '250ms' }}>a</span>
              <span style={{ transitionDelay: '300ms' }}>m</span>
              <span style={{ transitionDelay: '350ms' }}>e</span>
            </label>
            {errors.username && <span id="usernameFeedback" className="error">
              {errors.username}
            </span>}
          </div>
          <div className="form-control">
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>E</span>
              <span style={{ transitionDelay: '50ms' }}>m</span>
              <span style={{ transitionDelay: '100ms' }}>a</span>
              <span style={{ transitionDelay: '150ms' }}>i</span>
              <span style={{ transitionDelay: '200ms' }}>l</span>
            </label>
            {errors.email && <span id="emailFeedback" className="error">
              {errors.email}
            </span>}
          </div>
          <div className="form-control">
            <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>P</span>
              <span style={{ transitionDelay: '50ms' }}>a</span>
              <span style={{ transitionDelay: '100ms' }}>s</span>
              <span style={{ transitionDelay: '150ms' }}>s</span>
              <span style={{ transitionDelay: '200ms' }}>w</span>
              <span style={{ transitionDelay: '250ms' }}>o</span>
              <span style={{ transitionDelay: '300ms' }}>r</span>
              <span style={{ transitionDelay: '400ms' }}>d</span>
            </label>
            <button type="button" id="togglePassword" className="showhide" onClick={handleTogglePassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <span id="passwordFeedback" className="error">
              {errors.password}
            </span>}
          </div>
          <div className="form-control">
            <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>C</span>
              <span style={{ transitionDelay: '50ms' }}>o</span>
              <span style={{ transitionDelay: '100ms' }}>n</span>
              <span style={{ transitionDelay: '150ms' }}>f</span>
              <span style={{ transitionDelay: '200ms' }}>i</span>
              <span style={{ transitionDelay: '250ms' }}>r</span>
              <span style={{ transitionDelay: '300ms' }}>m</span>
              <span style={{ transitionDelay: '350ms' }}>&nbsp;</span>
              <span style={{ transitionDelay: '400ms' }}>P</span>
              <span style={{ transitionDelay: '450ms' }}>a</span>
              <span style={{ transitionDelay: '500ms' }}>s</span>
              <span style={{ transitionDelay: '550ms' }}>s</span>
              <span style={{ transitionDelay: '600ms' }}>w</span>
              <span style={{ transitionDelay: '650ms' }}>o</span>
              <span style={{ transitionDelay: '700ms' }}>r</span>
              <span style={{ transitionDelay: '750ms' }}>d</span>
            </label>
            <button type="button" id="toggleConfirmPassword" className="showhide" onClick={handleToggleConfirmPassword}>
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
            {errors.confirmPassword && <span id="confirmPasswordFeedback" className="error">
              {errors.confirmPassword}
            </span>}
          </div>
          <button className="button" id="registerButton" type="submit">
            Signup
          </button>
        </form>
        <div className="or-text">
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <p>
          Have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;