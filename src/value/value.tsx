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
            <p>
                    {props.error ?
                    props.value :
                    'Enter values and press set'}
            </p>
        </div>
    );
};
