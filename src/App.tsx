import React, {ChangeEvent, useState} from 'react';
import w from './App.module.css'
import {UniversalButton} from "./button/UniversalButton";
import {Value} from "./value/Value";
import {Button} from "./button/Button";

const maxValueStyle = {
    border: '2px solid red',
    backgroundColor: 'lightcoral'
}

const startValueStyle = {
    border: '2px solid red',
    backgroundColor: 'lightcoral'
}


function App() {

    let [value, setValue] = useState(0)
    let [error, setError] = useState(true)
    let [max, setMax] = useState(0)
    let [start, setStart]=useState(0)
    let [disabled, setDisabled]=useState(false)

    const startValue = () => {
        localStorage.setItem('saveValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
        let str = localStorage.getItem('saveValue')
        if(str){
            let newValue = JSON.parse(str)
            setValue(newValue)
        }

    }

    const onClick = () => {
        startValue()
    }


    const onChangeSaveHendler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.target.value))
        // console.log(e.target.value)

    }


    const onChangeStartHendler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.target.value))
    }



    const maxValueChange = max < 0 ? maxValueStyle : undefined
    const startValueChange = start < 0 ? startValueStyle : undefined

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
                                         disabled={disabled}
                                         max={max}
                        />
                    </div>
                </div>
            </div>
            <div className={w.change_wrapper}>
                <div className={w.change_counter}>
                    <div className={w.one_input}>
                        Max value :
                        <input
                               style={maxValueChange}
                               value={max} onChange={onChangeSaveHendler}
                               className={w.max_input}
                               type={'number'}
                        />
                    </div>
                    <div className={w.two_input}>
                        Start value :
                        <input
                               style={startValueChange}
                               value={start}
                               onChange={onChangeStartHendler}
                               className={w.min_input}
                               type={'number'}
                        />
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
