import { toast } from 'react-toastify';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  ILoginUser,
  IUser,
  IUserContext,
  IUserRegister,
} from './@types';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const localStorageToken = localStorage.getItem('@CARDS');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(
    localStorageToken ? JSON.parse(localStorageToken) : null
  );

  const navigate = useNavigate();

  useEffect(() => {
    const userLoad = async () => {
      const token = localStorage.getItem('@TOKEN');
      const id = localStorage.getItem('@ID');
      if (token) {
        try {
          const response = await api.get(`users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);

          navigate('/shop');
        } catch (error) {
          localStorage.removeItem('@TOKEN');
        } finally {
          setLoading(false);
        }
      }
    };
    userLoad();
  }, []);

  const userRegister = async (data: IUserRegister) => {
    try {
      setLoading(true);
      const response = await api.post('users', data);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@ID', response.data.user.id);
      navigate('/shop');
      toast.success('Usuário registrado com sucesso!');
    } catch (error) {
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: ILoginUser) => {
    try {
      setLoading(true);
      const response = await api.post('login', data);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@ID', response.data.user.id);
      navigate('/shop');
      toast.success('Usuário logado com sucesso!');
    } catch (error) {
      navigate('/');
      toast.error('Não foi possível logar o usuário, tente novamente');
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@ID');
    navigate('/');
    toast.success('Usuário deslogado com sucesso!');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userLogout,
        userLogin,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
