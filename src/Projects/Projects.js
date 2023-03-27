import React from 'react';
import style from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/todoList.jpg'
import socialNetworkImage from '../assets/image/socialNetwork.jpg'

export const Projects = () => {
    const social = {
        backgroundImage: `url( ${socialNetworkImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.portfoliosBlock}>
            <div className={style.portfoliosContainer}>
                <Title text={'Projects'}/>
                <div className={style.portfolios}>
                    <Project projectName={'Web Design'}
                             style={social}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project projectName={'Web Development'}
                             style={todolist}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project projectName={'Web Design'}
                             style={social}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project projectName={'Web Development'}
                             style={todolist}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project projectName={'Web Design'}
                             style={social}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project projectName={'Web Development'}
                             style={todolist}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
};

