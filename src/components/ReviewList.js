import React, {useContext, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import {Context} from "../index";
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