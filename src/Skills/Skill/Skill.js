import React from 'react';
import style from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={style.skillContainer}>
            <div className={style.futureSkillBox}>
                <div className={style.iconContainer} style={props.style}>
                    <i className={style.icon}></i>
                </div>
                <div className={style.information}>
                    <h5 className={style.skillName}>{props.skilName}</h5>
                    <p className={style.description}>{props.description}</p>
                </div>
            </div>
        </div>
    );
};
