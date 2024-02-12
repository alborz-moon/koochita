import { apiAgent } from "./axios";
import { getToken } from "./token";

export async function get(path, config) {
  const onSuccess = (response) => {
    return response.data?.data;
  };

  const onError = (error) => {
    return Promise.reject(error?.response, error?.message);
  };

  try {
    const response = await apiAgent.get(path, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function delete_(path, params, data) {
  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    return Promise.reject(error.response, error.message);
  };

  try {
    const response = await apiAgent.delete(path, { params, data });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function post(path, data, config) {
  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    return Promise.reject(error.response, error.message);
  };

  try {
    const response = await apiAgent.post(path, data, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function patch(
  path,
  data,
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
  params
) {
  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    return Promise.reject(error.response, error.message);
  };

  try {
    const response = await apiAgent.patch(path, data, { headers, params });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}
