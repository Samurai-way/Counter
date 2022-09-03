import React from 'react';
import b from './Buttons.module.css'

type PropsType = {
    name: string
    onClick: () => void
    value: number
    disabled?: boolean
}


export const Button = (props: PropsType) => {
    console.log('props.disabled', props.disabled)
    const onClickButtonHundler = () => {
        props.onClick()
    }



    return (
        <div>
            <button
                    disabled={props.disabled}
                    className={b.small}
                    onClick={onClickButtonHundler}>{props.name}</button>
        </div>
    );
};
