import axios from "axios";
import {$authHost, $host} from "./index";


export const login = async (datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/login/api_login.php',datas, {withCredentials: true})
    console.log(data)
    return data
}
export const keys = async (datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/apikeys.php', datas, {withCredentials: true}) 
    console.log(data)
    return data
}
export const bkHistory = async (bk_id) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/bk_hist.php',bk_id, {withCredentials: true}) 
    console.log(data)
    return data
}
export const balance = async() => {
    const {data} = await axios.get('https://api-germes.ru/scripts/finance/balances.php', {withCredentials: true})
    console.log(data)
    return data
}
export const changeName = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/set_bk_name.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
export const changeIP = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/set_bk_ip.php', datas, {withCredentials: true})
    console.log(data)
    return data
}