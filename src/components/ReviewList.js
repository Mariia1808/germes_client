import React from "react";
import { observer } from "mobx-react-lite";
import "../css/css.js"
import ReviewItem from "./ReviewItem";


const ReviewList = observer(() => {
   
    return (
        <div className="list">
                <ReviewItem/>
        </div>
    )
});
            
export default ReviewList;