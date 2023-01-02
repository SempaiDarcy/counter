import React, {ChangeEvent} from 'react';

type SettingsPropsType = {
    value:number
    maxValue:number
    minValue:number
    onChangeMaxHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    onChangeMinHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    onClickSave:()=>void
}
const Settings = (props:SettingsPropsType) => {

    return (
        <div className='settings'>
                <div className='settings__input'>
                    <div><input type="number" value={props.maxValue} onChange={props.onChangeMaxHandler}/></div>
                    <div><input type="number" value={props.minValue} onChange={props.onChangeMinHandler}/></div>
                </div>
                <div>
                    { props.maxValue <= props.minValue || props.minValue<0 ? <button disabled>Число должно быть больше 0!!!</button>
                        :<button onClick={props.onClickSave}>Save</button>}
                </div>
            </div>
    );
};

export default Settings;