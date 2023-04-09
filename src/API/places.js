import { API_URL } from "utils/const";
import axios from "axios";

export const getPlaces = async () => {
    try {
        const url=`${API_URL}`;
        const { data,status } =await axios.get(url);
        console.log(data)
        console.log(status)
        return { data,status };
    } catch (error) {
        return error;
    }
};

export const addPlace=async ()=>{};