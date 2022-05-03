import axios from "axios";

// const base_url = process.env.BACKEND_URL;
const base_url = "https://edtechproduct.herokuapp.com";




export const registerUserRequest = async (data) => {


    try {
        const res = await axios.post(`${base_url}/auth/signup`, data);
        return { api_error: false, api_data: res.data };
    } catch (err) {
        console.error('Error is in signup user api', err.response.data.error)
        return { api_error: true, api_data: err.response.data.message };
    }


};

export const loginUserRequest = async (data) => {


    try {
        const res = await axios.post(`${base_url}/auth/signin`, data);
        return { api_error: false, api_data: res.data };
    } catch (err) {
        console.error('Error is in signin user api', err.response.data.error)
        return { api_error: true, api_data: err.response.data.error };
    }


};