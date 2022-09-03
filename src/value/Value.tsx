import React from 'react';
import v from '../App.module.css';

type ValuePropsType = {
    value: number
    error: boolean
    setError: (error: boolean) => void
}

export const Value = (props: ValuePropsType) => {


    return (
        <div className={v.value}>
            <p className={v.press}>
                {props.value}
                {props.error}
            </p>
        </div>
    );
};
