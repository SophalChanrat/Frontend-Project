import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/UserProvider";
import "../App.css";

export const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (matchedUser) {
      setMessage(`Welcome, ${matchedUser.username}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      setUser(matchedUser);
      navigate("/"); // 🔁 Redirect to home
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};
