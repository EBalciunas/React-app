import axios from "axios";

type UserCredentials = {
  email: string;
  password: string;
};

export const loginUser = async (userData: UserCredentials) => {
  const response = await axios.post(`http://localhost:3003/login`, userData);
  return response;
};

type SigninUser = {
  name: string;
  email: string;
  password: string;
};

export const SigninUser = async (userData: SigninUser) => {
  try {
    const response = await axios.post(
      "http://localhost:3003/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    throw new Error("Failed to register user. Please try again later.");
  }
};
