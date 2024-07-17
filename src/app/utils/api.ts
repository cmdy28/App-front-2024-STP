import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // la URL base del API de Laravel
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return await api.get<T>(url);
};

export const post = async <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
  return await api.post<T>(url, data);
};
// export const post = async <T>(url: string, data: any) => {
//   const response = await api.post<T>(url, JSON.stringify(data));
//   return response.data;
// };

// Puedes agregar más métodos como put, delete, etc., según tus necesidades