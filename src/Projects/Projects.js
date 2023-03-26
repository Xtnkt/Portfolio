import React from 'react';
import style from './Projects.module.css'
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";


export const Projects = () => {
    return (
        <div className={style.portfoliosBlock}>
            <div className={style.portfoliosContainer}>
               <Title text={'Projects'}/>
                <div className={style.portfolios}>
                    <Project projectName={'projectName'} description={'description'}/>
                    <Project projectName={'projectName'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};

