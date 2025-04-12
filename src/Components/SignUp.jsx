import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/UserProvider";
import "../App.css";

export const SignUp = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.username === form.username);
    if (userExists) {
      setMessage("Username already exists!");
    } else {
      const newUser = {
        id: users.length + 1,
        username: form.username,
        password: form.password,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));
      setUser(newUser);
      navigate("/"); // 🔁 Redirect to home
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" />
      <button onClick={handleSignUp}>Register</button>
      <p>{message}</p>
    </div>
  );
};

