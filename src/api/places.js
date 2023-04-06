/* eslint-disable import/no-unresolved */
import { API_URL } from "utils/const";
import axios from "axios";

export const getPlaces = async () => {
  try {
    const url = `${API_URL}/apps.places/`;
    const { data, status } = await axios.get(url);
    return [data, status];
  } catch (error) {
    const { data, status } = error.response;
    return [data, status];
  }
};

export const getPlace = async (id) => {
  try {
    const url = `${API_URL}/apps.places/${id}/`;
    const { data, status } = await axios.get(url);
    return { data, status };
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};

export const addPlace = async (place) => {
  try {
    const config = {     
      headers: { 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>' }
    }
    const url = `${API_URL}/apps.places/`;
    const { data, status } = await axios.post(url, place, config);
    return { data, status };
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};

export const deletePlace = async (id) => {
  try {
    const url = `${API_URL}/apps.places/${id}/`;
    const { data, status } = await axios.delete(url);
    return { data, status };
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};

export const getComments = async (id) => {
  try {
    const url = `https://6422283d86992901b2c2ff20.mockapi.io/api/places/${id}/comments`;
    const { data, status } = await axios.get(url);
    return [data, status];
  } catch (error) {
    const { data, status } = error.response;
    return [data, status];
  }
};
