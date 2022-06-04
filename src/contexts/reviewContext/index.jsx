import {createContext} from "react";

const ReviewContext = createContext({
    reviews:null,
    setReviews:()=>{},
    getReviewsByBarberId:()=>{}
});

export default ReviewContext;