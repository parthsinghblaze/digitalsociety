import { USERLOGIN, ISLOADING, LOGOUT, DELETE_MEMBER } from "./logintype";

export const userLogin = () => {
  return {
    type: USERLOGIN,
  };
};

export const loading = () => {
  return {
    type: ISLOADING,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const deleteMember = () => {
  return {
    type: DELETE_MEMBER,
  };
};
