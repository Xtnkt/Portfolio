import React from 'react';
import style from "./Footer.module.css";
import {Link} from "./Link/Link";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Karas Vladislav</h2>
                <div className={style.links}>
                    <Link />
                    <Link />
                    <Link />
                    <Link />
                </div>
                <span className={style.span}>©2022 All Right Reserved</span>
            </div>
        </div>
    );
};
