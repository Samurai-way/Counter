import React from 'react';
import {Button} from "./Button";
import b from './Buttons.module.css';

type UniversalButtonPropsType = {
    setValue: (value: number) => void
    value: number
    name: string
    disabled?: boolean
    max: number
}

export const UniversalButton = (props: UniversalButtonPropsType) => {

    const inc = () => {
        props.setValue(props.value + 1)
    }
    const dec = () => {
        props.setValue(0)
    }

    const isValueEqual = props.max === props.value


    return (
        <div className={b.wrapper}>
            <div className={b.inc}>
                <Button disabled={props.disabled || isValueEqual} name={'inc'}
                        value={props.value}
                        onClick={inc}
                />
            </div>
            <div className={b.dec}>
                <Button name={'dec'}
                        value={props.value}
                        onClick={dec}
                />
            </div>
        </div>
    );
};
