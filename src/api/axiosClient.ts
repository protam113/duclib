import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { apiHandle } from './api';

const getApiKey = () => process.env.NEXT_PUBLIC_API_KEY || '';
const apiKey = getApiKey();

// Function to create an Axios instance
const authApi = () => {
  return axios.create({
    baseURL: apiHandle,
    headers: {
      'api-key': `${apiKey}`,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 15000, // 15 seconds timeout
  });
};

// Function to handle API requests with improved logging and error handling
const handleAPI = async <T = any>(
  url: string,
  method: 'POST' | 'PATCH' | 'GET' | 'DELETE' = 'GET',
  data?: any
): Promise<T> => {
  console.log('⬆️ API REQUEST:', {
    url: `${apiHandle}${url}`,
    method,
    data: method !== 'GET' ? data : undefined,
    params: method === 'GET' ? data : undefined,
    timestamp: new Date().toISOString(),
  });

  try {
    const apiInstance = authApi();
    const config: AxiosRequestConfig = {
      url,
      method,
    };

    // Handle data appropriately based on request method
    if (method !== 'GET' && data) {
      config.data = data;
    } else if (method === 'GET' && data) {
      config.params = data;
    }

    const startTime = Date.now();
    const response: AxiosResponse = await apiInstance(config);
    const endTime = Date.now();

    // Log successful response
    console.log('✅ API RESPONSE SUCCESS:', {
      url: `${apiHandle}${url}`,
      method,
      status: response.status,
      statusText: response.statusText,
      responseTime: `${endTime - startTime}ms`,
      timestamp: new Date().toISOString(),
    });

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // Log detailed error information
    if (axiosError.response) {
      // The request was made and the server responded with an error status code
      console.error('❌ API ERROR:', {
        url: `${apiHandle}${url}`,
        method,
        status: axiosError.response.status,
        statusText: axiosError.response.statusText,
        data: axiosError.response.data,
        timestamp: new Date().toISOString(),
      });
    } else if (axiosError.request) {
      // The request was made but no response was received
      console.error('❌ API ERROR (NO RESPONSE):', {
        url: `${apiHandle}${url}`,
        method,
        message: axiosError.message,
        timestamp: new Date().toISOString(),
      });
    } else {
      // Something happened in setting up the request
      console.error('❌ API ERROR (SETUP):', {
        url: `${apiHandle}${url}`,
        method,
        message: axiosError.message,
        timestamp: new Date().toISOString(),
      });
    }

    // Re-throw the error for handling by the caller
    throw error;
  }
};

// Helper function for GET requests
const getAPI = async <T = any>(url: string, params?: any): Promise<T> => {
  return handleAPI<T>(url, 'GET', params);
};

// Helper function for POST requests
const postAPI = async <T = any>(url: string, data?: any): Promise<T> => {
  return handleAPI<T>(url, 'POST', data);
};

// Helper function for PATCH requests
const patchAPI = async <T = any>(url: string, data?: any): Promise<T> => {
  return handleAPI<T>(url, 'PATCH', data);
};

// Helper function for DELETE requests
const deleteAPI = async <T = any>(url: string, data?: any): Promise<T> => {
  return handleAPI<T>(url, 'DELETE', data);
};

export default handleAPI;
export { handleAPI, getAPI, postAPI, patchAPI, deleteAPI };
