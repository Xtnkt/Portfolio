import React from 'react';
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.projectContainer}>
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
