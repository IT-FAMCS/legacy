import {
  LOGIN_URL,
  LOGOUT_URL,
  CHECK_TOKEN_URL,
  REGISTER_URL,
} from "../сonstants/auth-url";
import { RegisterData } from "../interfaces/register";
import { fetchPost } from "../api/FetchPost";

export default function useAuth() {
  const login = async (email: string, password: string) => {
    try {
      const response = await fetchPost(LOGIN_URL, {
        email,
        password,
      });
      if (response.token) {
        localStorage.setItem("token", response?.token);
      } // !!!добавть что если запрос фигня -- окрашивать форму в красный типа ошибка (добавлять это в компоненте логина)
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await fetchPost(LOGOUT_URL, {});
      localStorage.removeItem("token"); //!!! при логауте переводить на страницу логина
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const checkToken = async () => {
    //вызываем когда надо проверить, зашел ли пользователь или нет
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      await fetchPost(CHECK_TOKEN_URL, { token });
    } catch (error) {
      console.error("Token check failed:", error);
    }
  };

  const register = async (
    //при регистрации
    data: Omit<RegisterData, "confirmPassword"> //данные для сервера нужны без подтверждения пароля
  ) => {
    try {
      const response = await fetchPost(REGISTER_URL, data); // !!!добавть что если запрос фигня -- окрашивать форму в красный типа ошибка (добавлять это в компоненте регистрации)
      //!!!если вход удачный -- переходить на основную страницу
    } catch (error) {
      console.error("Registration failed:", error); //!!! тоже указывать ошибку в форме на странице
      throw error;
    }
  };

  return { login, logout, checkToken, register };
}
