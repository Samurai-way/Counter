import React, {useEffect, useState} from 'react';
import w from './App.module.css'
import {UniversalButton} from "./button/UniversalButton";
import {Value} from "./value/value";
import {Button} from "./button/Button";


function App() {

    let [value, setValue]=useState(0)

    const onClick = ()=>{
        alert('ky')
    }

    return (
        <div className={w.wrapper}>
            <div className={w.counter_wrapper}>
                <div className={w.counter}>
                    <div className={w.value}>
                        <Value value={value}/>
                    </div>
                   <div className={w.button_wrapper}>
                       <UniversalButton name={'inc'} setValue={setValue}
                                        value={value}
                       />
                   </div>
                </div>
            </div>
            <div className={w.change_wrapper}>
                <div className={w.change_counter}>
                    ///
                </div>
                <div className={w.change_button_wrapper}>
                    <div className={w.change_button}>
                       <Button name={'save'}
                               value={value}
                               onClick={onClick}
                       />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
