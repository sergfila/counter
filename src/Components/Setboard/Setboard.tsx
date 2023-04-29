import React from 'react';
import s from './Setboard.module.css'

type propsType = {
    title: string
}

export const Setboard = (props: propsType) => {

    return (
        <div className={s.wrapper}>
            <div>
                <span className={s.span}>{props.title}</span><input type='number' />
            </div>
        </div>
    )
}