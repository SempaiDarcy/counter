import React, {ChangeEvent, useEffect, useState} from 'react';


const SimpleCounter = () => {
    const [value,setValue] = useState(0)
    const [maxValue,setMaxValue] = useState<number>(5)
    const [minValue,setMinValue] = useState<number>(0)
    const onClickSave = () => {
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
        localStorage.setItem('minValue',JSON.stringify(minValue))
    }
    useEffect(()=>{
        let valueStrMax = localStorage.getItem('maxValue')
        let valueStrMin = localStorage.getItem('minValue')
        valueStrMax!==null?setMaxValue(JSON.parse(valueStrMax)):setMaxValue(11)
        valueStrMin!==null?setMinValue(JSON.parse(valueStrMin)):setMinValue(10)
        setValue(valueStrMin!==null?JSON.parse(valueStrMin):minValue)
    },[])

    // useEffect(()=>{
    //     localStorage.setItem('maxValue',JSON.stringify(maxValue))
    //     localStorage.setItem('minValue',JSON.stringify(minValue))
    // },[maxValue,minValue])
    const onClickInc = () => {
        minValue < maxValue && maxValue >value ? setValue(value+1):setValue(value)
    }
    const onClickReset = () => {
        setValue(minValue)
    }
    const onChangeMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let current = e.currentTarget.value
        // setMaxValue(+current)
        Number(current)>0 ? setMaxValue(+current):setMaxValue(1)
    }
    const onChangeMinHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let current = e.currentTarget.value
        // setMinValue(+current)
        // setValue(+current)
        Number(current)>=0 ? setMinValue(+current):setMinValue(0)
        setValue(Number(current) < 0 ? 0 : +current)
    }


    return (
        <div>
            <div className='settings'>
                <div className='settings__input'>
                    <div><input type="number" value={maxValue} onChange={onChangeMaxHandler}/></div>
                    <div><input type="number" value={minValue} onChange={onChangeMinHandler}/></div>
                </div>
                <div>
                    <button onClick={onClickSave}>Save</button>
                </div>
            </div>
            <div className='counter'>
                <div>{value}</div><button onClick={onClickInc}>Inc</button>
                {maxValue<=minValue? <button disabled>Error</button>:<button onClick={onClickReset}>Reset</button>}
            </div>
        </div>
    );
}

export default SimpleCounter;