import React from 'react';
import style from './Portfolios.module.css'
import {Portfolio} from "./Portfolio/Portfolio";


export const Portfolios = () => {
    return (
        <div className={style.portfoliosBlock}>
            <div className={style.portfoliosContainer}>
                <h2 className={style.title}>Portfolio</h2>
                <div className={style.portfolios}>
                    <Portfolio projectName={'projectName'} description={'description'}/>
                    <Portfolio projectName={'projectName'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};

