import { useState } from "react";
import {
  LOGIN_URL,
  LOGOUT_URL,
  CHECK_TOKEN_URL,
  REGISTER_URL,
} from "../сonstants/auth-url";
import { RegisterData } from "../interfaces/register";
import { fetchPost } from "../api/FetchPost";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetchPost(LOGIN_URL, {
        email: username,
        password,
      });
      localStorage.setItem("token", response?.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    try {
      await fetchPost(LOGOUT_URL, {});
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      await fetchPost(CHECK_TOKEN_URL, { token });
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Token check failed:", error);
      setIsAuthenticated(false);
    }
  };

  const register = async (
    data: Omit<RegisterData, "confirmPassword" | "nickname">
  ) => {
    try {
      const response = await fetchPost(REGISTER_URL, data);
      console.log(response);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  return { isAuthenticated, login, logout, checkToken, register };
}
