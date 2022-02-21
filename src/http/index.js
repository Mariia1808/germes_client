import axios from "axios";

const $host = axios.create({
    baseURL: 'https://api-germes.ru/'
})

const $authHost = axios.create({
    baseURL: 'https://api-germes.ru/'
})

export {
    $host,
    $authHost
}