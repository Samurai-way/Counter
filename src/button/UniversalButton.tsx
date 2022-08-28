import React from 'react';
import {Button} from "./Buttons";


type UniversalButtonPropsType = {
    setValue: (value: number)=>void
    value: number
}

export const UniversalButton = (props: UniversalButtonPropsType) => {

    const inc = () =>{ props.setValue(props.value+1) }
    const dec = () =>{ props.setValue(0) }

    return (
        <div>
            <Button name={'inc'} value={props.value} onClick={inc}/>
            <Button name={'dec'} value={props.value} onClick={dec}/>
        </div>
    );
};
