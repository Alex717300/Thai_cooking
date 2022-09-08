import React from 'react';
import s from './Error.module.css'

const Error = () => {
    return (
        <div className={s.err}>
            <b>
                Страница не найдена!
            </b>
        </div>
    );
};

export default Error;