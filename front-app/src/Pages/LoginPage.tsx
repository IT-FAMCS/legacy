import * as React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = login(email, password);
  };

  return (
    <form
      onSubmit={loginSubmit}
      className={`login-form ${error ? "error" : ""}`}
    >
      <TextField
        label="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
        className={error ? "error" : ""}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
        className={error ? "error" : ""}
      />
      <Button type="submit" variant="contained" color="primary">
        Войти
      </Button>
      {error && (
        <p style={{ color: "red" }}>Логин или пароль введены неверно</p>
      )}
    </form>
  );
}

export default LoginPage;
