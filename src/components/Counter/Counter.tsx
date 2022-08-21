import React from 'react';
import a from "../../App.module.css";
import {UniversalButton} from "./UniversalButton";

export type CounterPropsType = {
    value: number
    setValue: ( value: number )=>void
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={a.count_wrapper}>
        <div className={a.counter_small}>
            <div className={a.value}>{props.value}</div>
        </div>
            <UniversalButton/>
        </div>
    );
};

