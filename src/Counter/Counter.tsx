import React, {useState} from 'react';
import c from './Counter.module.css';
import {UniversalButton} from "./UniversalButton/UniversalButton";

export type AppPropsType = {
    value: number
    setValue: (value: number)=>void


}

export const Counter = (props: AppPropsType) => {


    return (
        <div className={c.wrapper}>
            <div className={c.value_table}>
                <div className={c.value}>
                    {props.value}
                </div>
            </div>
            <div className={c.button_wrapper}>
                <UniversalButton setValue={props.setValue}
                                 value={props.value}
                />
            </div>
        </div>
    );
};

