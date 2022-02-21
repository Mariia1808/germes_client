import axios from "axios";
import {$host} from "./index";


export const login = async (formData1) => {
    const {data} = await axios.post('https://api-germes.ru/login/api_login.php', formData1)
    console.log(data)
    return data
}