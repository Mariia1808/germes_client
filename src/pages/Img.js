import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../index.js";

const Img = () => {
    const {user} = useContext(Context)
    return (
        <Container id="he">
            {user.setIsAuth(true)}
          <div class="content_wall" id="k">
            <div id="g1"><span id="g">Краткая иформация:&nbsp;</span>Цифровая фотография содержит в себе дополнительную информацию об устройстве, в какое время был сделан снимок, вплоть 
            до точных геоданных. Данные желательно полностью очистить, особенно если пользователь работает с букмекерскими конторами, которые в свою очередь сотрудничают с сервисами KYC.
            <br />Для более подробной информации кликните на значок "?" ниже.
            </div>                
        </div>
        <div class="content_wall">   
            <div class="column-2">
                <div class="tab_api_key">
                    <h6>Загрузить фото для обработки<img src="https://germes.bet/personal/assets/images//help_2.png" class="question_help" id="hint_1" hw="680" title="Кликните для получения справки" />
                    <span class="upload_note">(max 15Mb)</span></h6>
                </div>            
                <form action="" method="post" id="user_img" name="user_img" enctype="multipart/form-data">
                    <div class="form-group">
                        <input type="hidden" id="max_file_size" name="MAX_FILE_SIZE" value="15710000" /> 
                        <div>
                            <input type="text" class="file_input_textbox" name="data[user_image]" placeholder='Файл не выбран' />
                            <div class="file_input_div">
                                <input type="button" id="choose_file" value="Выбрать файл" class="file_input_button" />
                                <input type="file" name="user_image" class="file_input_hidden" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="upload" name="upload_img">Загрузить</button>
                            <span class="upload_msg_span"></span>
                        </div>
                    </div>
                </form>
            
                <form action="" method="post" id="user_process_img" name="user_process_img">
                    <div id="d">
                        <img src="" width="100%" />
                    </div>
                                                                                                              
                    <input type="hidden" name="orig_file_name" value="" />
                </form>      
            </div>   
            <div class="column-2">
                <div class="tab_api_key"><h6>Скачать обработанный файл</h6></div>
                <div class="tab_api_key"><h6 class="upload_msg"></h6></div>
            </div>
        </div>                           
        </Container>
    );

};

export default Img;