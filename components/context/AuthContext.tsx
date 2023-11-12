"use client";

import { FC, createContext, useState, ReactNode } from "react";
import Takhnik from "@/services/api";
import { getErrorMessage } from "@/components/utils/ErrorMessage";
import { toast } from "react-toastify";
import { Jwt, Users } from "@/models/global";
import { useRouter } from "next/navigation";
import Storage from "./Storage";

interface AuthContextProps {
  user: Users | null;
  updateUser: (user: Users) => void;
  jwt: Jwt | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const storedUser = Storage.getUser();
  const storedToken = Storage.getToken();

  const [user, setUser] = useState<any>(storedUser || null);
  const [jwt, setJwt] = useState<any>(storedToken || null);

  const login = async (username: string, password: string) => {
    await Takhnik.auth
      .signin({ username, password })
      .then((res) => {
        Storage.storeToken(res.data);
        setJwt(res.data);

        Takhnik.users
          .retrieve(res.data.id)
          .then((res) => {
            Storage.storeUser(res.data);
            setUser(res.data);
            if (res.data.lang) {
              router.push(`/${res.data.lang}`);
            } else {
              router.push(`/`);
            }
          })
          .catch((error): void => {
            console.error(getErrorMessage(error));
            toast(getErrorMessage(error), {
              hideProgressBar: true,
              autoClose: 2000,
              type: "error",
            });
          });
      })
      .catch((error): void => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  };

  const logout = () => {
    Storage.removeToken();
    Storage.removeUser();
    setJwt(null);
    setUser(null);
  };

  const updateUser = (user: Users) => {
    Storage.removeUser();
    Storage.storeUser(user);
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, jwt, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
