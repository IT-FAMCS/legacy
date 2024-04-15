import * as React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username !== "correctUsername" || password !== "correctPassword") {
      setError(true);
    } else {
      alert("Ура!!!")
    }
  };

  return (
    <form onSubmit={loginSubmit} className={error ? 'error' : ''}>
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
