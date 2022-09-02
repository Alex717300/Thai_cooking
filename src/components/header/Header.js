import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <h2>อร่อยมาก</h2>
            <h2>Соскучились по тайской кухне?</h2>
            <h2>Приготовьте блюда по нашим рецептам</h2>
            <h3>ингредиенты подобраны таким образом, что
                эти продукты легко найти во многих магазинах</h3>
        </div>
    );
};

export default Header;