import React, {useState} from 'react';
import classes from "./App.module.css"
import Button from "./components/Button";
function App() {


    const [number,setNumber] = useState(0)
    const Plus = () => {
        return number===5?setNumber(5): setNumber(number+1)
    }
    const Reload = () => {
        return setNumber(0)
    }

    return (
        <div className={classes.appContainer}>
            <div className={classes.counter}><h1 className={classes.number}>{number}</h1>
                <div className={classes.buttons}>
                    <Button buttonName={'inc'} button={Plus}/>
                    <Button buttonName={'RESET'} button={Reload}/></div>
            </div>
        </div>
    );
}

export default App;
