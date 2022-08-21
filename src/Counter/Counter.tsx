import React from 'react';
import c from './Counter.module.css';
import {UniversalButton} from "./UniversalButton/UniversalButton";

export const Counter = () => {
    return (
        <div className={c.wrapper}>
            <div className={c.value_table}>
                <div className={c.value}>
                    0
                </div>
            </div>
            <div className={c.button_wrapper}>
                <UniversalButton/>
            </div>
        </div>
    );
};

