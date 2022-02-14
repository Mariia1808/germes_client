import React, { useState } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import {useFavicon, useTitle} from 'react-use'; 
import "../css/css.js"
import Header from '../components/Header';
import ReviewList from '../components/ReviewList';

const Reviews = observer(() => {

    
   
        return (
        <Container id="he"> 
           <Header/>
           <div class="content_wall">
            <form id="reviews_vk_form">
            <div class="tab_api_key reviews_vk">
                <h6>Отзывы пользователей</h6>  
                <div class="head_tab">
                    <div class="show">
                        <label>Показывать</label>
                        <select id="record_on_page" name="record_on_page" class="inp_style_tab">              
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <span>записей на странице</span>
                    </div>
                </div>
                <ReviewList/>
            
            <div class="paging">
                <div class="pag">
                <button class="page_button" name="page_navigator[0]" disabled>&lt; Пред</button>
                <b>&nbsp;1&nbsp;</b>
                <input type='submit' class='page_button_small' value='2' name='page_navigator[2]' class='small_button' />
                <input type='submit' class='page_button_small' value='3' name='page_navigator[3]' class='small_button' />
                <input type='submit' class='page_button_small' value='4' name='page_navigator[4]' class='small_button' />
                <input type='submit' class='page_button_small' value='5' name='page_navigator[5]' class='small_button' />
                </div>
                <button class="page_button"name="page_navigator[2]" >&nbsp;След &gt;</button>
            </div></div>
            <input type='hidden' value='1' name='current_page' />
            <br />
            <div class='page_info'>
                Страница 1 из 5. Записи от 1 до 10. Всего записей: 50.
            </div>
            </form>           
        </div>
        
        
        <input type="hidden" id="page_name" value="templ_panel_reviews" />
        </Container>
    );
    
});

export default Reviews;