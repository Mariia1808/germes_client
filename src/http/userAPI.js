import axios from "axios";
import {$authHost, $host} from "./index";


export const login = async (login, password) => {
    const {data} = await axios.get('https://api-germes.ru/scripts/login/api_login.php?login='+login+'&password='+password)
    console.log(data)
    return data
}
export const keys = async (status, rate, soft, date_key) => {
    const {data} = await axios.get('https://api-germes.ru/scripts/apikeys/apikeys.php', {withCredentials: true})
    console.log(data)
    return data
}