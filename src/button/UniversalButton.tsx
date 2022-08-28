import React from 'react';
import {Button} from "./Button";
import b from './Buttons.module.css';

type UniversalButtonPropsType = {
    setValue: (value: number) => void
    value: number
    name: string
}

export const UniversalButton = (props: UniversalButtonPropsType) => {

    const inc = () => {
        props.setValue(props.value + 1)
    }
    const dec = () => {
        props.setValue(0)
    }

    return (
        <div className={b.wrapper}>
            <div className={b.inc}>
                <Button name={'inc'} value={props.value} onClick={inc}/>
            </div>
            <div className={b.dec}>
                <Button name={'dec'} value={props.value} onClick={dec}/>
            </div>
        </div>
    );
};
