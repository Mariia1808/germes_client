import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "../css/css.js"
import ReviewItem from "./ReviewItem";
import { getReview } from "../http/userAPI.js";


const ReviewList = observer(() => {
    const [reviews, setReview] = useState([])
    const formData2 = new FormData()
    formData2.append("require","vkreview")
    useEffect(() =>{
        getReview(formData2).then(data=>setReview(data))
    },[])
    return (
        <div className="list">
            {reviews.map(review =>{
                return <ReviewItem review={review}/>
                })}
        </div>
    )
});
            
export default ReviewList;