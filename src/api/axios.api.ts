import axios, { AxiosRequestConfig } from "axios";

const APIAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "",
  });
  
  APIAxios.interceptors.request.use(
    async (config) => {
      const token = process.env.REACT_APP_TOKEN;
  
      try {
        if (token?.length) {
          config.headers = {
            "X-Primotexto-ApiKey": token,
          };
        }
        return config;
      } catch (err) {
        console.log("Error: ", err);
  
        return Promise.reject(err);
      }
    },
    (err) => Promise.reject(err)
  );

  export const APIRoutes = {
    CreateNewContact: (phoneNumber: string): AxiosRequestConfig => ({
        method: "POST",
        url: process.env.REACT_APP_API_URL,
        data: {
            identifier: phoneNumber,
        },
      }),
  }

  export default APIAxios;