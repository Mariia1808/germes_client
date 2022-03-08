import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Modal } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Attention from '../modals/Attention';
import "../css/css.js"
import { Context } from '../index.js';
import { balance, bkHistory, keys, rates } from '../http/userAPI';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AttentionSubscription from '../modals/AttentionSubscription';
import AttentionTable from '../modals/AttentionTable';
import ChangeName from '../modals/ChangeName';
import ChangeApi from '../modals/ChangeApi';
import StopKey from '../modals/StopKey';
import DeleteKey from '../modals/DeleteKey';
import FrozenKey from '../modals/FrozenKey';
import HistoryKey from '../modals/HistoryKey';
import RenewKey from '../modals/RenewKey';
import SeparateKey from '../modals/SeparateKey';
import moment from 'moment';
import DatePicker from 'react-date-picker';


const Panel = observer(() => {
    const {user} = useContext(Context)
    var result;
    const [ModalVk,setModalVk] = useState(true)
    const [ModalSub,setModalSub] = useState(false)
    const [ModalName,setModalName] = useState(false)
    const [ModalApi,setModalApi] = useState(false)
    const [ModalKey,setModalKey] = useState(false)
    const [ModalDelete,setModalDelete] = useState(false)
    const [ModalFrozen,setModalFrozen] = useState(false)
    const [ModalHistory,setModalHistory] = useState(false)
    const [ModalRenew,setModalRenew] = useState(false)
    const [ModalSeparate,setModalSeparate] = useState(false)
    const [ModalStop,setModalStop] = useState(false)

    const [headTable, setHeadTable] = useState("")
    const [api, setApi] = useState("")
    const [id, setId] = useState("")
    const [bkid, setBkid] = useState("")
    const [subscrip, setSubscrip] = useState([])
    const [kolvo, setKolvo] = useState(10)
    const [numberBut, setNumberBut] = useState("")
    const [key, setKey] = useState("")
    const [rate, setRate] = useState("")
    const [activ, setActive] = useState("")
    const [arrRate, setArrRate] = useState([])
    const [soft, setSoft] = useState("")
    let arr2;
    const [subscription, setSubscription] = useState([])
    const [balanse, setBalanse] = useState([])
    const [date_key, setDate] = useState(new Date());

    const formData1 = new FormData()
    formData1.append("rate_set","all")
    formData1.append("require","tariffs")

    const formData2 = new FormData()
    formData2.append("require","accounts")

    const formData3 = new FormData()
    formData3.append("require","apikeys")


    useEffect(() =>{
        keys(formData3).then(data=>setSubscription(data))
        balance(formData2).then(data => setBalanse(data))
        rates(formData1).then(data=>setArrRate(data))
    },[])

    const click = async () => {

            let data;
            const formData = new FormData()
            formData.append('status', key)
            formData.append('rate', rate)
            formData.append('soft', soft)
            if(date_key===null){
                formData.append('date_key','')
            }else if (moment(date_key[0]).format('DD.MM.YYYY') === moment(date_key[1]).format('DD.MM.YYYY')){
                formData.append('date_key', moment(date_key[0]).format('DD.MM.YYYY'))
            }else {
                formData.append('date_key', (moment(date_key[0]).format('DD.MM.YYYY')+'-'+moment(date_key[1]).format('DD.MM.YYYY')))
            }
            console.log(formData)
            data = await keys(formData);
            setSubscription(data)
            {(() => {
                switch (key) {
                case "T":
                    return setHeadTable("Все подписки")
                case "A":
                    return setHeadTable("Все активные подписки")
                case "S":
                    return setHeadTable("Активные ключи")
                case "Y":
                    return setHeadTable("Остановленные ключи")
                case "N":
                    return setHeadTable("Неактивные ключи")
                default:
                    return setHeadTable("Все активные подписки")
                }
            })()}
    }

    const Data = (marker) =>{
        let stringData = ""
        const minus = new Date(marker) - new Date().getTime()/1000
        if (minus<0)
        {
            return "не стартован"
        }
        else{
            const day = parseInt(minus/86400)
            const hour = parseInt((minus/86400 - day)*24)
            const minutes = parseInt(((minus/86400 - day)*24-hour)*60)
            
            return stringData = day +" дн. "+ hour + " ч. "+ minutes + " м."
        }
    }
    const Froz = (froze, numb)=>{
        if (froze===0){
            return 0
        }else{
            return numb
        }
    }
    const ModSub = (a, b) =>{
        setApi(a)
        setModalSub(true)
        setNumberBut(b)
    }
    const ModName = (a, b) =>{
        setApi(a)
        setId(b)
        setModalName(true)
    }
    const ModApi = (a, b) =>{
        setApi(a)
        setId(b)
        setModalApi(true)
    }
    const ModKey = (a) =>{
        setSubscrip(a)
        setModalKey(true)
    }

    const ModDelete = (a, b) =>{
        setApi(a)
        setId(b)
        setModalDelete(true)
    }
    const ModFrozen = (a, b) =>{
        setApi(a)
        setId(b)
        setModalFrozen(true)
    }
    const ModHistory = (a, b) =>{
        setApi(a)
        setBkid(b)
        setModalHistory(true)
    }
    const ModRenew = (a, b) =>{
        setApi(a)
        setId(b)
        setModalRenew(true)
    }
    const ModSeparate = (a) =>{
        setApi(a)
        setModalSeparate(true)
    }
    const ModStop = (a, b, c) =>{
        setApi(a)
        setId(b)
        setActive(c)
        setModalStop(true)
    }

    return (
        <Container id="he"> 
             {user.setIsAuth(true)}
            <AttentionSubscription show={ModalSub} api={api} keys={numberBut} onHide={()=> setModalSub(false)}/>
            <ChangeName show={ModalName} id={id} api={api} onHide={()=> setModalName(false)}/>
            <ChangeApi show={ModalApi} id={id} api={api} onHide={()=> setModalApi(false)}/>
            <AttentionTable show={ModalKey} subr={subscrip} onHide={()=> setModalKey(false)}/>
            <StopKey show={ModalStop} id={id} api={api} active={activ} onHide={()=> setModalStop(false)}/>
            <DeleteKey show={ModalDelete} id={id} api={api} onHide={()=> setModalDelete(false)}/>
            <FrozenKey show={ModalFrozen} id={id} api={api} onHide={()=> setModalFrozen(false)}/>
            {(() => {
                    switch (bkid>0) {
                    case true:
                        return <HistoryKey show={ModalHistory} api={api} bk_id={bkid} onHide={()=> setModalHistory(false)}/>
                    default:
                        return <></>
                    }
                })()}
            <RenewKey show={ModalRenew} api={api} balanse={balanse} rates={arrRate} id={id} onHide={()=> setModalRenew(false)}/>
            <SeparateKey show={ModalSeparate} api={api} onHide={()=> setModalSeparate(false)}/>
           {/* <Attention show={ModalVk} onHide={()=> setModalVk(false)}/> */}
           <div className="content_admin">
           <div className="content_wall" id="con2">
            <div className="tab_api_key">
             
           <h6 id="table_title">Активные вилки</h6>
                <form action="" method="post">
    				<label htmlFor="forks_bk1" className='bk1'>БК №1&nbsp;</label>
                <select name="forks_bk1" id="forks_bk1" className="bk_ddlb">
                <option value="0">ВСЕ</option>
    
                </select>
                    &nbsp;&nbsp;
                    <label htmlFor="forks_bk2" className='bk1'> БК №2&nbsp;</label>
                <select name="forks_bk2" id="forks_bk2" className="bk_ddlb">
                <option value="0">ВСЕ</option>
               
                </select>
    				<Button type="submit" name="show_forks_start" className="show_forks">показать</Button>
                    <Button type="submit" name="show_forks_stop" className="stop_forks" disabled={true}>стоп</Button>
                </form>
            </div>
        </div>
        
    	<div className="content_wall">
        <form action="" method="post" id="botkey_list_form">            
            <div className="tab_api_key">
                <h6>Фильтр</h6>
                <div className="filters">
                    <div className="filtr_item" id="blok_type_key">
                        <label htmlFor="type_key">Тарифный план</label>
                        
                    <select id="rate_id" name="rate_id" onChange={e => setRate(e.target.value)} className="inp_style_tab">
                    {arrRate.map(data=>{
                        return <option value={data.id}>{data.rate_name}</option>
                    })}
                    </select>
                    </div>
                    <div className="filtr_item" id="blok_scanner_key">
                        <label htmlFor="scanner_key">Тип сканера</label>
                        <select id="scanner_key" name="soft_type" onChange={e => setSoft(e.target.value)} className="inp_style_tab">
                            <option value="">Все</option>
                            <option value="1">Бот</option>
                            <option value="2">Ручной сканер</option>
                        </select>
                    </div>                    
                    <div className="filtr_item" id="blok_status_key">
                        <label htmlFor="status_key">Статус ключей</label>
                        <select id="status_key" onChange={e => setKey(e.target.value)} name="status_key" className="inp_style_tab">
                            <option value="T">Все подписки</option>
                            <option value="A" selected>Все активные подписки</option>
                            <option value="Y">Активные ключи</option>
                            <option value="S">Остановленные ключи</option>
                            <option value="N">Неактивные ключи</option>
                        </select>
                    </div>
                    <div className="filtr_item" id="blok_date_key">
                        <label htmlFor="date_key">Дата покупки</label>
                        <DatePicker onChange={setDate} value={date_key} selectRange={true}/>
                            &nbsp;&nbsp;<button type="button" onClick={() => click()} className="but"><i className="bi bi-check-lg" title="Применить"></i></button>
                            &nbsp;&nbsp;<button className="but"><i className="bi bi-x-lg" title="Очистить поиск"></i></button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        
        <div className="content_wall" id="tabs_key">
            <form>
            <div className="tab_api_key active">
                <h6>
                    {headTable}
                
                    (всего: <span className="all" id="total_count">{subscription.length}</span>)</h6>
                    
                <div className="head_tab">
                    <div className="show">
                        <label>Показывать</label>
                        <select id="record_on_page" name="record_on_page" onChange={e => setKolvo(e.target.value)} className="inp_style_tab">              
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>записей на странице</span>
                        <span id="ajax_msg" className="ajax_error"></span>
                    </div>
                    <div className="refresh" id="res" title="Перегрузить" >
                    <button className="but"><i className="bi bi-arrow-repeat"></i></button>
                    </div>
                </div>
                <span className="bk_note">
                    Note: для просмотра полной информации о Бот-ключе кликните на линк в колонке "Ключ".<br />
                    Для изменения IP ключа кликните на поле в колонке "IP", имени ключа - в колонке "Имя"
                </span>
                <table className="data_table">
                    <thead>
                        <tr>
                            <th>IP</th>
                            <th>Имя</th>
                            <th>Ключ</th>
                            <th>Пароль</th>
                            <th>Тип БК</th>
                            <th>Тариф</th>
                            <th>Осталось</th>
                            <th>Замор.</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                     <tbody>
                     {subscription.map(subscriptions=>
                     <tr>
                        <td><button type='button' className="buttable" onClick={() => ModApi(subscriptions.user_ip, subscriptions.id)}>{subscriptions.user_ip}</button></td>
                        <td><button type='button' className="buttable" onClick={() => ModName(subscriptions.user_ip, subscriptions.id)}>{subscriptions.bk_name}</button></td>
                        <td><button type='button' className="buttable" onClick={() => ModKey(subscriptions)}>{subscriptions.api_key}</button></td>
                        <td>{subscriptions.api_pass}</td>
                        <td>{subscriptions.api_key_type}</td>
                        <td>{subscriptions.rate_id}</td>
                        <td>
                            {
                                Data(subscriptions.date_end)
                            }
                        </td>
                        <td>{Froz(subscriptions.date_end, subscriptions.frozen_number)}</td>
                        
                            {(() => {
                                switch (subscriptions.date_end === 0) {
                                    case true:
                                        return <td><button type='button' onClick={() => ModHistory(subscriptions.user_ip, subscriptions.id)} title="Посмотреть историю ключа" className="but"><i className="bi bi-journals"></i></button>
                                        <button type='button' title="Удалить ключ" onClick={() => ModDelete(subscriptions.user_ip, subscriptions.id)} className="but"><i className="bi bi-plus-square-fill"></i></button></td>
                                       
                                    case false:
                                        return <td>
                                        <button type='button' title="Остановить ключ" onClick={() => ModStop(subscriptions.user_ip, subscriptions.id, subscriptions.activate)} className="but"><i className="bi bi-pause-btn"></i></button>
                                        <button type='button' title="Разделить ключ на два ключа" onClick={() => ModSeparate(subscriptions.user_ip)} className="but"><i className="bi bi-layout-split"></i></button>
                                        <button type='button' title="Продлить срок действия ключа" onClick={() => ModRenew(subscriptions.user_ip, subscriptions.id)} className="but"><i className="bi bi-gear"></i></button>
                                        <button type='button' title="Добавить дополнительную заморозку" onClick={() => ModFrozen(subscriptions.user_ip, subscriptions.id)} className="but"><i className="bi bi-plus-square-fill"></i></button>
                                        <button type='button' title="Посмотреть историю ключа" onClick={() => ModHistory(subscriptions.user_ip, subscriptions.id)} className="but"><i className="bi bi-journals"></i></button>
                                        </td>
                                    default:
                                        return <td>
                                        <button type='button' title="Продлить срок действия ключа" onClick={() => ModRenew(subscriptions.user_ip)} className="but"><i className="bi bi-gear"></i></button>
                                        <button type='button' title="Удалить ключ" onClick={() => ModDelete(subscriptions.user_ip)} className="but"><i className="bi bi-plus-square-fill"></i></button>
                                        <button type='button' title="Посмотреть историю ключа" onClick={() => ModHistory(subscriptions.user_ip, subscriptions.id)} className="but"><i className="bi bi-journals"></i></button>
                                        </td>
                                }
                            })()}
                        
                    </tr>
                      )}
                    </tbody>
                            
                </table>
            </div>
            <div className="paging">
<br /><div className='page_info'>
Страница 1 из 1. Записи от 1 до 0. Всего записей: {subscription.length}.
</div>
        
            </div>
            <input type="hidden" id="page_name" value="templ_panel_apikeys" />
            <input type="hidden" id="active_count" value="0" />
            <input type="hidden" id="curr_balance" value="" />
            <input type="hidden" id="curr_cashback" value="0" />
            <input type="hidden" id="bonus_percent" value="0.5" />
            </form> </div></div>
        </Container>
    );
    
});

export default Panel;
