import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header.js';
import "../css/css.js"
import { Context } from '../index.js';

const Sales = () => {
    const {user} = useContext(Context)
        return (
            <Container id="he">
                 {user.setIsAuth(true)}
                <div className="content_wall" id='rel'>
                        <form id="form_sales">
                        <div className="tab_api_key">
                            <h6>Активировать купон на скидку для покупки подписок</h6>
                        </div>
                        <span className="bk_note">Note: купон действителен в течение 90 дней с момента выдачи</span>            
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Дата добавления</th>
                                    <th>Скидка</th>
                                    <th>Описание</th>
                                    <th>Бот-ключ</th>
                                    <th>Статус купона</th>
                                </tr>
                            </thead>
                            <tbody>                
                        
                                <tr>
                                    <td colSpan="5">У Вас нет купонов на скидку</td>
                                </tr>
                            </tbody>
                        </table>
                        </form>                  
                </div>
            </Container>
        );
    
};

export default Sales;