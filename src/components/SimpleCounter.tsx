import React, {ChangeEvent, useEffect, useState} from 'react';
import Settings from "./Settings";
import Counter from "./Counter";

const SimpleCounter = () => {
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const onClickSave = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        setValue(maxValue>minValue ? minValue:value)
    }
    useEffect(() => {
        let valueStrMax = localStorage.getItem('maxValue')
        let valueStrMin = localStorage.getItem('minValue')
        valueStrMax !== null ? setMaxValue(JSON.parse(valueStrMax)) : setMaxValue(11)
        valueStrMin !== null ? setMinValue(JSON.parse(valueStrMin)) : setMinValue(10)
        setValue(valueStrMin !== null ? JSON.parse(valueStrMin) : minValue)
    }, [])

    const onClickInc = () => {
        minValue < maxValue && maxValue > value ? setValue(value + 1) : setValue(value)
    }
    const onClickReset = () => {
        setValue(minValue)
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let current = e.currentTarget.value

        Number(current) > 0 ? setMaxValue(+current) : setMaxValue(1)
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let current = e.currentTarget.value
        Number(current) >= 0 ? setMinValue(+current) : setMinValue(+current)
        // setValue(Number(current) < 0 ? 0 : +current)
    }


    return (
        <div>
           <Settings value={value}
                     maxValue={maxValue}
                     minValue={minValue}
                     onChangeMaxHandler={onChangeMaxHandler}
                     onChangeMinHandler={onChangeMinHandler}
                     onClickSave={onClickSave}/>
            <Counter value={value}
                     onClickInc={onClickInc}
                     maxValue={maxValue}
                     minValue={minValue}
                     onClickReset={onClickReset}/>
        </div>
    );
}

export default SimpleCounter;