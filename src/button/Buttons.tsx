import React from 'react';

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
            <button onClick={onClickButtonHundler}>{props.name}</button>
        </div>
    );
};
