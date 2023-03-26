import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    let description = 'Lorem Ipsum is simply dummy text of the Lorem has the industry\'s standard dummy text.'
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'Js'} description={description}/>
                    <Skill title={'CSS'} description={description}/>
                    <Skill title={'React'} description={description}/>
                </div>
            </div>
        </div>
    );
};

