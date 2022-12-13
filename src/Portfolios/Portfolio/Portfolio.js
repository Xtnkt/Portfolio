import React from 'react';
import style from './Portfolio.module.css'

export const Portfolio = (props) => {
    return (
        <div className={style.portfolio}>
            <div className={style.photo}>
                <button className={style.button}>Look</button>
            </div>
            <div className={style.information}>
                <span className={style.projectName}>{props.projectName}</span>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
