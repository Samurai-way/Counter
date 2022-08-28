import React, {useEffect, useState} from 'react';
import w from './App.module.css'
import {UniversalButton} from "./button/UniversalButton";
import {Value} from "./value/value";


function App() {

    let [value, setValue]=useState(0)

    return (
        <div className={w.wrapper}>
            <div className={w.counter_wrapper}>
                <div className={w.counter}>
                    <div className={w.value}>
                        <Value value={value}/>
                    </div>
                   <div className={w.button_wrapper}>
                       <UniversalButton setValue={setValue}
                                        value={value}
                       />
                   </div>
                </div>
            </div>

        </div>
    );
}

export default App;
