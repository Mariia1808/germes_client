import React, { useContext } from 'react';
import { Container } from "react-bootstrap";
import { observer } from 'mobx-react-lite'; 
import "../css/css.js"
import Header from '../components/Header';
import ReviewList from '../components/ReviewList';
import { Context } from '../index.js';

const Reviews = observer(() => {

    const {user} = useContext(Context) 
   
        return (
        <Container id="he"> 
            {user.setIsAuth(true)}
           <div className="content_wall">
            <form id="reviews_vk_form">
            <div className="tab_api_key reviews_vk">
                <h6>Отзывы пользователей</h6>  
                <div className="head_tab">
                    <div className="show">
                        <label>Показывать</label>
                        <select id="record_on_page" name="record_on_page" className="inp_style_tab">              
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <span>записей на странице</span>
                    </div>
                </div>
                <ReviewList/>
            
            <div className="paging">
                <div className="pag">
                <button className="page_button" name="page_navigator[0]" disabled={true}>&lt; Пред</button>
                <b>&nbsp;1&nbsp;</b>
                <input type='button' className='page_button_small' value='2' name='page_navigator[2]'  />
                <input type='button' className='page_button_small' value='3' name='page_navigator[3]'  />
                <input type='button' className='page_button_small' value='4' name='page_navigator[4]'  />
                <input type='button' className='page_button_small' value='5' name='page_navigator[5]'  />
                </div>
                <button className="page_button"name="page_navigator[2]" >&nbsp;След &gt;</button>
            </div></div>
            <input type='hidden' value='1' name='current_page' />
            <br />
            <div className='page_info'>
                Страница 1 из 5. Записи от 1 до 10. Всего записей: 50.
            </div>
            </form>           
        </div>
        
        
        <input type="hidden" id="page_name" value="templ_panel_reviews" />
        </Container>
    );
    
});

export default Reviews;