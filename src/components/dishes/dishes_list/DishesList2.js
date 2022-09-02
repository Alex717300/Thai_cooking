import React from 'react';
import DishesItem from "./DishesItem";


function DishesList2() {

    const dishes = [
        {
            id: 1,
            color: '#f1c40f',
            name_thai: 'ข้าวผัด',
            name: 'Као Пад',
            body: 'Као пад  - жареный рис, блюдо очень вкусное,' +
                ' сытное и в меру острое (можно готовить без жгучего перца)',
            link: '/friedrice',
        },
        {
            id: 2,
            color: '#3cb371',
            name_thai: 'ลาบ้',
            name: 'Лааб',
            body: 'Лааб  - тайский салат, который отличается насыщенным,' +
                ' многогранным и ярким вкусом',
            link: '/laab',
        },
        {
            id: 3,
            color: '#ff8c00',
            name_thai: 'ไก่ผัดเม็ดมะม่วงหิมพาน',
            name: 'Курица с кешью',
            body: 'Курица с кешью - ' +
                'настоящая визитная карточка тайской кухни, в меру острое и довольно необычное блюдо',
            link: '/cashew_chicken',
        },
        {
            id: 4,
            color: '#0000cd',
            name_thai: 'กังออบวันเสน',
            name: 'Фунчоза - "Кунг Оп Вунсен"',
            body: 'Кунг Оп Вунсен  - ' +
                'оригинальная тайская лапша с креветками',
            link: '/kungop',
        }
    ]


    return (
        <div>
            <DishesItem dishes={dishes}/>
        </div>

    );
}

export default DishesList2;