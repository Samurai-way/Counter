import React from 'react';
import v from '../App.module.css';

type ValuePropsType = {
    value: number
    error: boolean
    setError: (error: boolean) => void
    max: number
    start:number
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
    // console.log(props.disabled)
    const colorValue = props.max === props.value ? value : undefined
    // const noneBlock = props.max > 0 || props.start > 0 ? none : undefined
    // const inlineBlock = props.max > 0 || props.start > 0 ? inline : undefined


    return (
        <div className={v.value}>
              <div style={colorValue}>{props.value}</div>
              {/*<div className={v.error}>{props.error}*/}
              {/*  Incorrect value*/}
              {/*</div>*/}
        </div>

    );
};
