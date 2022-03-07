import axios from "axios";
import {$authHost, $host} from "./index";

//вход
export const login = async (datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/login/api_login.php',datas, {withCredentials: true})
    console.log(data)
    return data
}
//получение подписок
export const keys = async (datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/apikeys.php', datas, {withCredentials: true}) 
    console.log(data)
    return data
}
//история ключа
export const bkHistory = async (bk_id) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/bk_hist.php',bk_id, {withCredentials: true}) 
    console.log(data)
    return data
}
//получение баланса
export const balance = async() => {
    const {data} = await axios.get('https://api-germes.ru/scripts/finance/balances.php', {withCredentials: true})
    console.log(data)
    return data
}
//изменение имени ключа
export const changeName = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/set_bk_name.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//изменение IP ключа
export const changeIP = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/set_bk_ip.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//добавление заморозки
export const addFrozen = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/set_bk_freeze.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//удаление ключа
export const deleteKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_remove.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//остановка ключа
export const stopKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_stop.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//запуск ключа
export const startKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_start.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//продление ключа
export const renewKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_extend.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//список тарифов
export const rates = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/bk_rates.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//данные о пользователе
export const getUser = async(datas) => {
    const {data} = await axios.get('https://api-germes.ru/scripts/user/user_parms.php', {withCredentials: true})
    console.log(data)
    return data
}