import axios from "axios";
import {$authHost, $host} from "./index";


export const login = async (datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/login/api_login.php',datas, {withCredentials: true})
    console.log(data)
    return data
}
export const keys = async (status, rate, soft, date_key) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/apikeys.php',{status,rate,soft,date_key}, {withCredentials: true}) 
    console.log(data)
    return data
}
export const bkHistory = async (bk_id) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/bk_hist.php',bk_id, {withCredentials: true}) 
    console.log(data)
    return data
}