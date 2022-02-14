import {makeAutoObservable} from "mobx";

export default class FavoriteStore{
    constructor() {
        this._bots = [
            {id:1, name: "Test", opisanie: "Тестовый тариф на 1 день", price: 400, srok:"Срок действия 1 день", buk:"Доступны все букмекеры",ice:"Нет заморозок ключа"},
            
        ]
        this._hards = [
            {}
        ]
        
        makeAutoObservable(this)
    }
    setBot(bots){
        this._bots = bots
    }
    setHard(hards){
        this._hards = hards
    }
    get bots(){
        return this._bots
    } 
    get hards(){
        return this._hards
    }
}