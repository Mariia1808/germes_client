import React from 'react';
import { Card } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import "../css/css.js"

const ReviewItem = observer(() => {
        return (
        <Card> 
        <li>
            <div><span className="span1">
                <span className="span2">25.06.2021 7:02</span>
            </span></div>
            <div>
                <article className="bubble" id="art">
                    <div className="review_link">
                        <a href="https://vk.com/id150383372">
                        <div>
                            <img src="https://sun1-19.userapi.com/s/v1/ig2/XnfWa75APi72-v4MOkPUPztX6-nWYufRzgpQhXOMpqfC-h21HdVrxubvZ49NLN13Kyhi8ee63LA4pFZSYQp2SgNt.jpg?size=50x50&quality=95&crop=627,1031,933,933&ava=1" />
                        </div>
                        <div>Андрюха Минеев</div>
                        </a>
                    </div>
                <pre>Почти год работаю с этим замечательным ботом, теперь за довольно простые действия я зарабатываю очень хорошие деньги, всем советую! Никогда не вилковал руками, только в боте и наверное пока бк совсем не жестят на ручные и не уйду</pre>
                </article>
            </div>
        </li>
        </Card>
    );
    
});

export default ReviewItem;