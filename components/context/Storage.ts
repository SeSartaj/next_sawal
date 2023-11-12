import { Jwt, Users } from "@/models/global";
import secureLocalStorage from "react-secure-storage";
// import jwtDecode from "jwt-decode";

// const secureLocalStorage = window.sessionStorage;
const jwtKey = "auth_token";
const userKey = "user";

const storeToken = (authToken: Jwt) => {
  try {
    secureLocalStorage.setItem(jwtKey, authToken);
  } catch (error) {
    console.log("Error storing the Auth Token", error);
  }
};

const fetchToken = () => {
  try {
    return secureLocalStorage.getItem(jwtKey);
  } catch (error) {
    console.log("Error getting the Auth Token", error);
  }
};

const getToken = () => {
  const token = fetchToken();
  return token ? token : null;
};

const removeToken = () => {
  try {
    secureLocalStorage.removeItem(jwtKey);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const storeUser = (user: Users) => {
  try {
    secureLocalStorage.setItem(userKey, user);
  } catch (error) {
    console.log("Error storing the Auth Token", error);
  }
};

const fetchUser = () => {
  try {
    return secureLocalStorage.getItem(userKey);
  } catch (error) {
    console.log("Error getting the Auth Token", error);
  }
};

const getUser = () => {
  const user = fetchUser();
  return user ? user : null;
};

const removeUser = () => {
  try {
    secureLocalStorage.removeItem(userKey);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const storageFunctions = {
  getToken,
  storeToken,
  removeToken,
  getUser,
  storeUser,
  removeUser,
};

export default storageFunctions;
