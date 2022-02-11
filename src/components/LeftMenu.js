import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';


const LeftMenu = () => {
        return (
            <Container>
                <Card class="card text-white bg-dark mb-4" >
                <div class="card-header"> 
                <h3>GERMES</h3>
                </div>
                
                <div class="btn-group-vertical">
                <a href="/login" class="btn btn-dark active" aria-current="page">Новости</a>
                <a href="#" class="btn btn-dark">Мои подписки</a>
                <a href="#" class="btn btn-dark">Статистика</a>
                <a href="#" class="btn btn-dark">Финансы</a>
                <a href="#" class="btn btn-dark">Партнерка</a>
                <a href="#" class="btn btn-dark">Настройки</a>
                <a href="#" class="btn btn-dark">Купоны на скидку</a>
                <a href="#" class="btn btn-dark">Отзывы</a>
                <a href="#" class="btn btn-dark">Прокси</a>
                <a href="#" class="btn btn-dark">VDS</a>
                <a href="#" class="btn btn-dark">Очистка фото</a>
                <a href="#" class="btn btn-dark">Мануал</a>
                </div></Card>
            </Container>
        );
    
};

export default LeftMenu;