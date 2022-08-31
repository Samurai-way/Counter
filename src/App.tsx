import React, {ChangeEvent, useState} from 'react';
import w from './App.module.css'
import {UniversalButton} from "./button/UniversalButton";
import {Value} from "./value/value";
import {Button} from "./button/Button";


function App() {

    let [value, setValue] = useState(0)
    let [error, setError] = useState(true)
    let [save, setSave] = useState(0)

    const startValue = () => {
        localStorage.setItem('saveValue', JSON.stringify(save))
    }

    const onClick = () => {
        startValue()
    }

    const onChangeSaveHendler = (e: ChangeEvent<HTMLInputElement>) => {
        setSave(Number(e.target.value))
    }

    const onChangeStartHendler = () => {

    }

    // const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    //     // debugger
    //     const inp = e.currentTarget.value
    //
    //     if(inp) setError(!error)
    // }


    return (
        <div className={w.wrapper}>
            <div className={w.counter_wrapper}>
                <div className={w.counter}>
                    <div className={w.value}>
                        <Value value={value}
                               error={error}
                               setError={setError}
                        />
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
                    <div className={w.one_input}>
                        Max value :
                        <input value={save} onChange={onChangeSaveHendler} className={w.max_input} type={'number'}/>
                    </div>
                    <div className={w.two_input}>
                        Start value :
                        <input className={w.min_input} type={'number'}/>
                    </div>
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
