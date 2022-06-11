import React from "react";

const Input = ({
    type,
    name,
    placeHolder,
    changeHandler,
    value,
    required=true,
    ...rest
})=> {
    return (
        <>
            <div className='flex w-1/2 flex-col relative' {...rest}>
                <input required={required} value={value} autoComplete='off' onChange={changeHandler}
                       className={`p-3 text-2xl rounded m-2 ml-0 outline-0 border-2 focus:border-blue-500 ${{...rest}}`} type={type} name={name}
                       placeholder={placeHolder}  />
            </div>
        </>
    )
}


export default   Input;