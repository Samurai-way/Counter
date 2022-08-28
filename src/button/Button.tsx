import React from 'react';
import b from './Buttons.module.css'

type PropsType = {
    name: string
    onClick: ()=>void
    value: number
}


export const Button = (props: PropsType) => {

    const onClickButtonHundler =()=>{
        props.onClick()
    }

    return (
        <div>
            <button className={b.small}
                    onClick={onClickButtonHundler}>{props.name}</button>
        </div>
    );
};
