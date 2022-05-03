
// editable them api 

import axios from "axios";

const base_url = "https://edtechproduct.herokuapp.com";


// const base_url = process.env.BACKEND_URL;




// if (typeof window !== 'undefined') {
    
// const ls = JSON.parse(localStorage.getItem("auth-edu-onboard"));
// axios.defaults.headers.common['Authorization'] = `Bearer ${ls.token}`;

//   }



// export const updateThemeContentRequest = async (sectionId, data) => {
//     try {
//         const res = await axios.put(`${base_url}/section/${sectionId}`, data);
//         return { api_error: false, api_data: res.data };
//     } catch (err) {
//         console.error('Error is in updateThemeContentRequest', err.response.data.error)
//         return { api_error: true, api_data: err.response.data.error };
//     }
// };
// export const fetchThemeContentRequest = async () => {
//     try {
//         const res = await axios.get(`${base_url}/section/`);
//         return { api_error: false, api_data: res.data };
//     } catch (err) {
//         console.error('Error is in fetchThemeContentRequest', err.response.data.error)
//         return { api_error: true, api_data: err.response.data.error };
//     }
// };


// get all themes  api 


export const fetchAllThemesRequest = async () => {
    try {
        const res = await axios.get(`${base_url}/theme/`);
        return { api_error: false, api_data: res.data };
    } catch (err) {
        console.error('Error is in fetchAllThemesRequest', err.response.data.error)
        return { api_error: true, api_data: err.response.data.error };
    }
}






