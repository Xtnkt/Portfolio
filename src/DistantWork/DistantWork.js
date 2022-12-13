import React from 'react';
import style from './DistantWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <h2 className={style.span}>I am considering options for distant work</h2>
                <button className={style.button}>Recruit me</button>
            </div>

        </div>
    );
};