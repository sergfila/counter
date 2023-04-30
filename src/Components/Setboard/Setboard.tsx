import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Setboard.module.css'

type propsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Setboard = (props: propsType) => {

    return (
        <div className={s.wrapper}>
            <span className={s.span}>{props.title}</span>
            <input className={props.value < 0 ? s.error : ''}
                   type='number'
                   value={props.value}
                   onChange={props.onChange}
            />
        </div>
    )
}