import React, {useState} from 'react';
import classes from "./App.module.css"
import Button from "./components/Button";

function App() {


    const [number, setNumber] = useState(0)
    const Plus = () => {
        const newValue = number+1
        number<5 && setNumber(newValue)
        console.log(newValue)
    }
    const Reload = () => {
        number===5&& setNumber(0)
    }

    const classesNumber = number===5?classes.counter + ' ' + classes.red:classes.counter

    return (
        <div className={classes.appContainer}>
            <div className={classesNumber}><h1 className={classes.number}>{number}</h1>
                <div className={classes.buttons}>
                    <Button buttonName={'inc'} disabled={number===5} button={Plus}/>
                    <Button buttonName={'RESET'} disabled={number<5} button={Reload}/>
                </div>
            </div>
        </div>
    );
}

export default App;
