import React, { useState, useCallback } from 'react';
import {uuid} from "./helpers";
import Toast from "../components/toast/Toast";

const useToasts = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = ({type, message}) => {
        setToasts([...toasts, { type, message, id: uuid() }]);
    };

    const handleHide = id => {
        setToasts([...toasts.filter(t => t.id !== id)]);
    };

    const renderToasts = useCallback(() => (
        <>
            {
                toasts.map((item,index) =>  (
                            <Toast key={item.id}
                                currentIndex={index}
                                isVisible={toasts.filter((t) => t.id === item.id).length > 0}
                                mode={item.type} hideHandler={() => handleHide(item.id)} message={item.message}/>
                            ))
            }
        </>
    ), [handleHide, toasts]);

    return {addToast, renderToasts};
};

export default useToasts;
