import React from 'react';

type CounterPropsType = {
    value:number
    onClickInc:()=>void
    maxValue:number
    minValue:number
    onClickReset:()=>void
}
const Counter = (props:CounterPropsType) => {
    return (
        <div>
            <div className='counter'>
                <div>{props.value}</div>
                {props.maxValue <= props.minValue || props.minValue<0 ? <button disabled>Error</button>
                    : <button onClick={props.onClickInc}>Inc</button>}
                {props.maxValue <= props.minValue || props.minValue<0 ? <button disabled>Error</button>
                    : <button onClick={props.onClickReset}>Reset</button>}
            </div>
        </div>
    );
};

export default Counter;