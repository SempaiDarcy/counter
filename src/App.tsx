import React from 'react';
import { Route, Routes, Navigate} from "react-router-dom";
import s from './App.module.css'
import SimpleCounter from "./components/SimpleCounter";
function App() {


    return (
        <div>
                    <div className={s.container}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'my-apps/simple-counter'}/>}/>
                            <Route path='my-apps/simple-counter' element={<SimpleCounter/>}/>
                        </Routes>
                    </div>
        </div>
    );
}

export default App;
