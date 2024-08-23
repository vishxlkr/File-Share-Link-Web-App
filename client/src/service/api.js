import axios from 'axios';
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
export const uploadFile=async(data)=>{
try{
    const response=await axios.post(`${BACKEND_API_URL}/upload`,data);
    return response.data;
}catch(error){
    console.log("Error while calling the uploadFile method:"+error);
}
};