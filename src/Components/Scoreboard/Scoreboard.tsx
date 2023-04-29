import React from 'react';
import s from './Scoreboard.module.css'

type propsType = {
    count: number
    maxCount: number
}

export const Scoreboard = (props: propsType) => {

    return (
        <div>
            <div className={s.wrapper}>
                <div className={props.count === props.maxCount ? `${s.table} ${s.max}` : s.table}>
                    {props.count}
                </div>
            </div>
        </div>
    )
}