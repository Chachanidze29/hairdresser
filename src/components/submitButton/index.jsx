import React from "react";

const SubmitButton = ({
    value,
    isDisabled=false,
}) => (
    <button
        className='p-3 bg-white text-blue-900 font-bold rounded border-2 hover:bg-transparent hover:text-white hover:bg-blue-900 disabled:bg-gray-300 disabled:text-blue-400 disabled:cursor-not-'
        type='Submit' disabled={isDisabled}>{value}</button>
)

export default SubmitButton;