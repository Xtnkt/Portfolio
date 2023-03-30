import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import jsImg from '../assets/image/todoList.jpg'

export const Skills = () => {
    const js = {
        backgroundImage: `url(${jsImg})`
    }
    const description = 'Lorem Ipsum is simply dummy text of the Lorem has the industry\'s standard dummy text.'

    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <div className={style.titleSkills}>
                    <Title text={'Skills'}/>
                </div>

                <div className={style.skills}>
                    <Skill skilName={'Js'}
                           style={js}
                           description={description}/>
                    <Skill style={js} skilName={'CSS'} description={description}/>
                    <Skill style={js} skilName={'React'} description={description}/>
                    <Skill style={js} skilName={'React'} description={description}/>
                    <Skill style={js} skilName={'React'} description={description}/>
                    <Skill style={js} skilName={'React'} description={description}/>
                </div>
            </div>
        </div>
    );
};

