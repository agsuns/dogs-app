import React from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('Login has changed: ' + login);
  }, [login]);

  const getUser = async (token) => {
    const { endpoint, options } = GET_USER(token);
    const fetchRes = await fetch(endpoint, options);
    const jsonRes = await fetchRes.json();

    setData(jsonRes);
    setLogin(true);
    console.log(jsonRes);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);

      const { endpoint, options } = TOKEN_POST({ username, password });
      const fetchRes = await fetch(endpoint, options);
      if (!fetchRes.ok) throw new Error(`Error: Usuário inválido`);

      const jsonRes = await fetchRes.json();

      localStorage.setItem('token', jsonRes.token);
      await getUser(jsonRes.token);
      setLogin(true);

      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = React.useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  // ao carregar a pagina, verificar apenas uma vez se existe um token de autenticação valido
  React.useEffect(() => {
    console.log("I'm extremely bi");
    console.log('auto login');
    const autoLogin = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token Invalido');

          await getUser(token);
        } catch (error) {
          setError(error);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    };

    if (login === false) {
      userLogout();
    }

    autoLogin();
  }, [login, userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
