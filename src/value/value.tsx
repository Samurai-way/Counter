import React from 'react';

type ValuePropsType = {
    value: number
}

export const Value = (props: ValuePropsType) => {
    return (
        <div>
            <p>{props.value}</p>
        </div>
    );
};
