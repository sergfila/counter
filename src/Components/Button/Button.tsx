import React from 'react';
import s from './Button.module.css'

type PropsType = {
    title: string
    disabled: boolean
    onClick: () => void
}

export const Button = (props: PropsType) => {

    return (
        <>
            <button className={props.disabled ? `${s.button} ${s.disabled}` : s.button} onClick={props.onClick}
                    disabled={props.disabled}
            >{props.title}
            </button>
        </>
    )
}