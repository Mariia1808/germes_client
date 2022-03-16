import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../components/Header.js';
import "../css/css.js"
import { getUser } from '../http/userAPI.js';
import { Context } from '../index.js';

const PartnerShip = observer(() => {
    const {user} = useContext(Context)
    const [users, setUser] = useState([])
    const formData1 = new FormData()
    formData1.append("require","userdata")
    useEffect(() =>{
        getUser(formData1).then(data=>setUser(data))
    },[])
        return (   
                <div className="content_wall" id='rel'>
                    {user.setIsAuth(true)}
                    <div className="div-info" id='s'>Ваш промо-код: <span>{users.reference_code},</span>
                        &nbsp;переходов по ссылке: <span>{users.reference_count}</span>
                        <span id='e'><a href="#" id="rules_popup">КАК РАБОТАЕТ ПАРТНЁРСКАЯ ПРОГРАММА?</a></span>
                    </div>
                    <br />
                    <div>Линк для приглашения пользователя: </div>
                    <br />
                    <div>Установить разовую скидку для приглашённого пользователя в &nbsp;
                        <select id="p_discount" name="p_discount">
                        <option value="1">0</option>
                        <option value="0.95">5</option>
                        <option value="0.9">10</option>
                        <option value="0.85">15</option>
                        <option value="0.8">20</option>
                    </select>
                        процентов</div>
                    <br />
                    <div id='g'>У Вас пока нет приглашённых пользователей.</div>                
            </div>
        );
    
});

export default PartnerShip;