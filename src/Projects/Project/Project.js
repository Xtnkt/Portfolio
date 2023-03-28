import React from 'react';
import style from './Project.module.scss'

export const Project = (props) => {
    return (
        <div className={style.projectContainer}>
            <div className={style.futureProjectBox}>
                <div className={style.photo} style={props.style}>
                    <a className={style.button}>Смотреть</a>
                </div>
                <div className={style.information}>
                    <h5 className={style.projectName}>{props.projectName}</h5>
                    <p className={style.description}>{props.description}</p>
                </div>
            </div>
        </div>
    );
};
