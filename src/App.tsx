import React, {ChangeEvent, useEffect, useState} from 'react';
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

const style = {
    color: 'red'
}

const MyComponent = React.memo(Button)

function App() {

    let [value, setValue] = useState<any>('')
    let [error, setError] = useState(true)
    let [max, setMax] = useState(0)
    let [start, setStart] = useState(0)
    let [disabled, setDisabled] = useState(false)
    let [items, setItems] = useState('Enter save and start')


    const startValue = () => {
        localStorage.setItem('saveValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
        let str = localStorage.getItem('saveValue')
        if (str) {
            let newValue = JSON.parse(str)
            setValue(newValue)
        }
    }


    const onClick = () => {
        // console.log('нажата')
        startValue()
        setItems('')
    }

    const onChangeMaxHendler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            setDisabled(true)
            setItems('Incorrect value!')
        } else if (Number(e.target.value) >= 0) {
            setDisabled(false)
            setItems('Enter save and start')
        }
        setMax(Number(e.target.value))

    }

    const onChangeStartHendler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            setDisabled(true)
            setItems('Incorrect value!')
        } else if (Number(e.target.value) >= 0) {
            setDisabled(false)
            setItems('Enter save and start')
        }
        setStart(Number(e.target.value))
    }

    const maxValueChange = max < 0 ? maxValueStyle : undefined
    const startValueChange = start < 0 ? startValueStyle : undefined

    return (
        <div className={w.wrapper}>
            <div className={w.counter_wrapper}>
                <div className={w.counter}>
                    <div className={w.value}>
                        <Value
                            value={value}
                            error={error}
                            setError={setError}
                            max={max}
                            start={start}
                            items={items}
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
                            value={max} onChange={onChangeMaxHendler}
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
                        <MyComponent name={'save'}
                                     value={value}
                                     onClick={onClick}
                                     disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
