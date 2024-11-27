"use client";

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let formValid = true;

    // Validate form fields
    if (username.trim() === '') {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, username: '' }));
    }

    if (password.trim() === '') {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      formValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }

    if (formValid) {
      // Handle form submission, e.g., send data to the server for authentication
      console.log('Form submitted:', { username, password });
      router.push('/dashboard');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="or-text">
          <span></span>
          <span>
            <h2 className="primary">Login</h2>
          </span>
          <span></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>U</span>
              <span style={{ transitionDelay: '50ms' }}>s</span>
              <span style={{ transitionDelay: '100ms' }}>e</span>
              <span style={{ transitionDelay: '150ms' }}>r</span>
              <span style={{ transitionDelay: '200ms' }}>n</span>
              <span style={{ transitionDelay: '250ms' }}>a</span>
              <span style={{ transitionDelay: '300ms' }}>m</span>
              <span style={{ transitionDelay: '350ms' }}>e</span>
            </label>
            {errors.username && <span id="usernameFeedback" className="error">
              {errors.username}
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
              <span style={{ transitionDelay: '350ms' }}>d</span>
            </label>
            <button type="button" id="togglePassword" className="showhide" onClick={handleTogglePassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <span id="passwordFeedback" className="error">
              {errors.password}
            </span>}
          </div>
          <button className="button" id="loginButton" type="submit">
            Login
          </button>
        </form>
        <div className="or-text">
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <p>
          Don't have an account? <Link href="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage