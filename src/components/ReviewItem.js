import React from 'react';
import { Card } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import "../css/css.js"


const ReviewItem = observer(({review}) => {
    
        return (
        <div> 
            <div><span className="span1">
                <span className="span2">{review.post_date}</span>
            </span></div>
            <div>
                <article className="bubble" id="art">
                    <div className="review_link">
                        <a href={review.link_vk}>
                        <div>
                            <img src={review.avatar}/>
                        </div>
                        <div>{review.user_name}</div>
                        </a>
                    </div>
                <pre>{review.review}</pre>
                </article>
            </div>
        </div>
    );
    
});

export default ReviewItem;