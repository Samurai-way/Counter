import React from 'react';
import v from '../App.module.css';


type ValuePropsType = {
    value: number
    error: boolean
    setError: (error: boolean) => void
    max: number
    start:number
    items:string
}

const inline = {
    display: 'inline-block'
}

const none = {
    // display: 'none'
    color: 'white'
}

const value = {
    color: 'red'
}

export const Value = (props: ValuePropsType) => {

    const colorValue = props.max === props.value ? value : undefined

    return (
        <div className={v.value}>
              <div style={colorValue}>{ props.value }</div>
              {/*<div className={v.error}>{props.error}*/}
              {/*  Incorrect value*/}
              {/*</div>*/}
            <div className={v.items}>{props.items}</div>
        </div>

    );
};
