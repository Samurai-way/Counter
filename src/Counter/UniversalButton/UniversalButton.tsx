import React from 'react';
import u from "./Button.module.css";

export const UniversalButton = () => {
    return (
        <div className={u.wrapper}>
            <div>
                <button className={u.inc}>inc</button>
            </div>
            <div>
                <button className={u.dec}>dec</button>
            </div>
        </div>
    );
};

