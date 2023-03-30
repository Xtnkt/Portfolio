import React from 'react';
import style from './DistantWork.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <Title text={'I am considering options for distant work'}/>
                <button className={style.button}>Recruit me</button>
            </div>
        </div>
    );
};