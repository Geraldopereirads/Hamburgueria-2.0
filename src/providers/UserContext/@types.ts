export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmarPassword: string;
  name: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (data: IUserRegister) => Promise<void>;
  userLogin: (data: ILoginUser) => Promise<void>;
  userLogout: () => void;
}
