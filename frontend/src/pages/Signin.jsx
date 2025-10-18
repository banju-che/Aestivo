import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData.username, formData.password);
      setMessage('Login successful! Redirecting...');
      navigate(from, { replace: true })
    } catch (err) {
      setMessage('Login failed. Check your credentials.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {message && (
          <p className="mb-4 text-sm text-center text-red-500">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border p-3 rounded"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-brand-gold text-brand-dark py-3 rounded hover:bg-yellow-400 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
