import React from 'react';
import s from './DishesItem.module.css'
import {Link} from "react-router-dom";


const DishesItem = ({dishes}) => {


    return (
        <div>
            {dishes.map((dish) => (
                <div key={dish.id}>

                    <ul className={s.align}>
                        <li>
                            <figure className={s.book}>

                                /* -- Front --*/

                                <ul className={s.hardcover_front}>
                                    <li style={{background:dish.color}}>
                                        <div className={s.coverDesign}>
                                            <h1>{dish.name_thai}</h1>
                                        </div>
                                    </li>
                                    <li></li>
                                </ul>

                                /* -- Pages --*/

                                <ul className={s.page}>
                                    <li></li>
                                    <li>
                                        <div>
                                            <Link className={s.btn}
                                                  to={`${dish.link}`}>
                                                <h2>Читать</h2>
                                                <h2>рецепт</h2>
                                            </Link>
                                        </div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                /* -- Back --*/

                                <ul className={s.hardcover_back}>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <ul className={s.book_spine}>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <figcaption>
                                    <h1>{dish.name}</h1>
                                    <u>описание</u>
                                    <p>{dish.body}</p>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>))}
        </div>
    );
};

export default DishesItem;