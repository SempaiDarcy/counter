import React from 'react';

type ButtonPropsType = {
    buttonName:string,
    button:()=>void
    disabled:boolean
}

const Button = (props:ButtonPropsType) => {
    return (
        <div>
            <button onClick={props.button} disabled={props.disabled}>{props.buttonName}</button>
        </div>
    );
};

export default Button;