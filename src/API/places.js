import { API_URL } from "utils/const";
import axios from "axios";

export const getPlaces = async () => {
    try {
        const url=`${API_URL}/api/v1/place`;
        const { data,status } =await axios.get(url);
        return { data,status };
    } catch (error) {
        return error;
    }
};

export const addPlace=async () => {};