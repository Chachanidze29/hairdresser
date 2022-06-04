import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {StyledContainer, StyledContent} from "./Styles";

const Toast = ({
    isVisible,hideHandler,mode,message,currentIndex
})=> {
    let timer;

    useEffect(()=> {
        clearTimeout(timer);
        if(isVisible) {
            timer = setTimeout(()=>{
                hideHandler();
            },4000);
        }
        return ()=> clearTimeout(timer);
    },[]);

    return (
        isVisible ? (
            ReactDOM.createPortal(
                <StyledContainer position='top right' onClick={hideHandler} currentIndex={currentIndex}>
                    <StyledContent mode={mode}>{message}</StyledContent>
                </StyledContainer>
                ,document.getElementById('portal'))
        )
            :
            null
    )
}

export default Toast;