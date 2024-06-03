import * as React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login, isAuthenticated } = useAuth();

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(username, password);
      if (!isAuthenticated) {
        setError(true);
      }
      else{
        console.log("Ура!!!")
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form onSubmit={loginSubmit} className={`login-form ${error ? 'error' : ''}`}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        fullWidth
        margin="normal"
        className={error ? 'error' : ''}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
        className={error ? 'error' : ''}
      />
      <Button type="submit" variant="contained" color="primary">
        Войти
      </Button>
      {error && <p style={{ color: 'red' }}>Логин или пароль введены неверно</p>}
    </form>
  );
}

export default LoginPage;
