"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("Login Data:", formData);

    // Simulate login request
    setTimeout(() => {
      setLoading(false);

      // fake login check
      if (
        formData.email !== "test@example.com" ||
        formData.password !== "123456"
      ) {
        setError("Invalid credentials, please try again.");
      } else {
        alert("✅ Login Successful!");
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Left Side with SVG */}
        <div className="hidden md:flex items-center justify-center bg-blue-600 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-48 w-48 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c.5304 0 1.0391-.2107 1.4142-.5858C13.7893 10.0391 14 9.5304 14 9s-.2107-1.0391-.5858-1.4142C13.0391 7.2107 12.5304 7 12 7s-1.0391.2107-1.4142.5858C10.2107 7.9609 10 8.4696 10 9s.2107 1.0391.5858 1.4142C10.9609 10.7893 11.4696 11 12 11z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12v9m0 0H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="mb-6 text-center text-gray-500">
            Please login to your account
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:flex-row md:items-end"
          >
            {/* Email */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <div className="md:w-auto">
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow hover:bg-blue-700 disabled:opacity-50 md:mt-0"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          {/* Error Alert */}
          {error && (
            <div className="mt-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-600">
              ⚠️ {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
