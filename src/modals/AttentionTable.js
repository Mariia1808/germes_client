import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import SimpleDateTime  from 'react-simple-timestamp-to-date';

const AttentionTable = ({show, onHide, subr}) => {
    return (
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Container>
        <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
                ТЕХНИЧЕСКИЕ ДАННЫЕ БОТ-КЛЮЧА
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="ext_text">
            <table class="modal_table">
                <tr><td class="col_title">IP адрес:</td><td class="col_value">{subr.user_ip}</td></tr>
                <tr><td class="col_title">Бот-ключ:</td><td class="col_value">{subr.api_key}</td></tr>
                <tr><td class="col_title">Пароль:</td><td class="col_value">{subr.api_pass}</td></tr>
                <tr><td class="col_title">Имя ключа:</td><td class="col_value">{subr.bk_name}</td></tr>
                <tr><td class="col_title">Тип ключа:</td><td class="col_value">{subr.api_key_type}</td></tr>
                {(() => {
                    switch (subr.soft_type) {
                    case 1:
                        return <tr><td class="col_title">Тип сканера:</td><td class="col_value">Бот</td></tr>
                    case 2:
                        return <tr><td class="col_title">Тип сканера:</td><td class="col_value">Ручной-сканер</td></tr>
                    default:
                        return <></>
                    }
                })()}
                
                {(() => {
                    switch (subr.activate) {
                    case "У":
                        return <tr><td class="col_title">Статус:</td><td class="col_value">Активный</td></tr>
                    case 'N':
                        return <tr><td class="col_title">Статус:</td><td class="col_value">Неактивный</td></tr>
                    case 'S':
                        return <tr><td class="col_title">Статус:</td><td class="col_value">Оставлен</td></tr>
                    default:
                        return <></>
                    }
                })()}
                
                <tr><td class="col_title">Тарифный план:</td><td class="col_value">{subr.rate_id}</td></tr>
                <tr><td class="col_title">Дата создания:</td><td class="col_value"><SimpleDateTime dateSeparator="-" DateFormat="DD.MM.YYYY" showTime="0">{subr.date_create}</SimpleDateTime></td></tr>
                <tr><td class="col_title">Дата запуска:</td><td class="col_value"><SimpleDateTime dateSeparator="-" DateFormat="dmY" showTime="0">{subr.date_start}</SimpleDateTime></td></tr>
                <tr><td class="col_title">Дата окончания:</td><td class="col_value"><SimpleDateTime dateSeparator="-" DateFormat="dmY" showTime="0">{subr.date_end}</SimpleDateTime></td></tr>
                <tr><td class="col_title">Дополнительное время:</td><td class="col_value">{subr.extra_time}</td></tr>
                <tr><td class="col_title">Дата добавления доп. времени:</td><td class="col_value"><SimpleDateTime dateSeparator="-" DateFormat="dmY" showTime="0">{subr.extended_date}</SimpleDateTime></td></tr>
                <tr><td class="col_title">Осталось:</td><td class="col_value"></td></tr>
                <tr><td class="col_title">Количество заморозок:</td><td class="col_value">{subr.frozen_number}</td></tr>
                <tr><td class="col_title">Дата продления:</td><td class="col_value"><SimpleDateTime dateSeparator="-" DateFormat="dmY" showTime="0">{subr.extended_by}</SimpleDateTime></td></tr>
            </table>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <button className="btnclass">Закрыть</button>
        </Modal.Footer>  
        </Container></Modal>
    );
  }
  
export default AttentionTable;