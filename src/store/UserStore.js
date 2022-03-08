import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = []
        this._keys = []

        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setKeys(keys){
        this._keys = keys
    }
    get keys(){
        return this._keys
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
   
}