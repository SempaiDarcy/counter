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
                <h1>{number}</h1>
                <Button buttonName={'inc'} button={Plus}/>
                <Button buttonName={'RESET'} button={Reload}/>
        </div>
    );
}

export default App;
