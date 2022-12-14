import React from 'react';
import style from './Projects.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={style.portfoliosBlock}>
            <div className={style.portfoliosContainer}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.portfolios}>
                    <Project projectName={'projectName'} description={'description'}/>
                    <Project projectName={'projectName'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};

