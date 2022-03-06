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
export const addFrozen = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/set_bk_freeze.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
export const deleteKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_remove.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
export const stopKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_stop.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
export const startKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_start.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
export const renewKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_extend.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
export const rates = async(datas) => {
    const {data} = await axios.get('https://api-germes.ru/scripts/apikeys/bk_rates.php?rate=' + datas, {withCredentials: true})
    console.log(data)
    return data
}
export const getUser = async(datas) => {
    const {data} = await axios.get('https://api-germes.ru/scripts/user/user_parms.php', {withCredentials: true})
    console.log(data)
    return data
}