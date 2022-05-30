import React from "react";

const FormContainer = ({
    children,
    submitHandler
})=> (
    <form className='flex flex-col items-center justify-start' onSubmit={submitHandler}>{children}</form>
)

export default FormContainer;