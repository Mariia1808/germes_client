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
export const balance = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/finance/balances.php', datas, {withCredentials: true})
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
    const {data} = await axios.post('https://api-germes.ru/scripts/user/user_parms.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//отзывы
export const getReview = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/sundries/review.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//Прокси и vds
export const getProxy = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/sundries/pvd.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//Акции
export const getActs = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/sundries/acts.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//Разделение ключа на два
export const separateKey = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/apikeys/action_separate.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//список бк
export const getBk = async(datas) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/sundries/get_bk_list.php', datas, {withCredentials: true})
    console.log(data)
    return data
}
//таблицы для финансов
export const getFinanceTable = async(datas, num) => {
    const {data} = await axios.post('https://api-germes.ru/scripts/finance/operations.php', datas, {withCredentials: true})
    console.log(data.finance_tabs)
    if(num === "all")
    return data.finance_tabs["Все операции"]
    if(num === "add")
    return data.finance_tabs["Пополнения"]
    if(num === "qiwi")
    return data.finance_tabs["История QIWI"]
    if(num === "p")
    return data.finance_tabs["Партнерка"]
    if(num === "off")
    return data.finance_tabs["Списания"]
}
