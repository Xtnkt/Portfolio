import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input className={style.firstInput} type={'text'}/>
                    <input className={style.secondInput} type={'text'}/>
                    <textarea className={style.textarea}/>
                </form>
                <input className={style.input} type="submit" value="Send"/>
            </div>
        </div>
    );
};
