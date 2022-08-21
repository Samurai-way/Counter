import React from 'react';
import u from "./Button.module.css";

type UniversalButtonPropsType = {
    setValue: (value: number) => void
    value: number
}

export const UniversalButton = (props: UniversalButtonPropsType) => {

    const onClickButtonInc = () => {
        props.setValue(props.value + 1)
    }

    const onClickButtonDec = () => {
        props.setValue(0)
    }

    return (
        <div className={u.wrapper}>
            <div>
                <button onClick={onClickButtonInc} className={u.inc}>inc</button>
            </div>
            <div>
                <button onClick={onClickButtonDec} className={u.dec}>dec</button>
            </div>
            <div>
                <button>set</button>
            </div>
        </div>
    );
};

