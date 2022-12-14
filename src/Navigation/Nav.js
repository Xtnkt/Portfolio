import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.navBlock}>
            <a className={style.navbar} href="">Main</a>
            <a className={style.navbar} href="">Skills</a>
            <a className={style.navbar} href="">Projects</a>
            <a className={style.navbar} href="">Сontact</a>
        </div>
    );
};

