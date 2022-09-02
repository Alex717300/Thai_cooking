import React from 'react';
import DishesItem from "./DishesItem";


function DishesList1() {

    const dishes = [
        {
            id: 1,
            color: '#2a90d4',
            name_thai: 'ผัดไทย',
            name: 'Пад тай',
            body: 'Пад тай - классическое блюдо тайской' +
                ' кухни из обжаренной рисовой вермишели с овощами и ароматным соусом',
            link: '/padthai',
        },
        {
            id: 2, color: '#000000', name_thai: 'ส้มตำ', name: 'Сом Там', body: 'Сом Там  -  пряный салат,' +
                ' безусловный фаворит тайской кухни, входит в меню мировых шедевров кулинарии', link: '/somtam',
        },
        {
            id: 3, color: '#8a2be2', name_thai: 'โรตี', name: 'Роти', body: 'Роти - тончайшие лепешки (блинчики) с ' +
                'хрустящей корочкой, с начинкой из яйца и банана', link: '/roti',
        },
        {
            id: 4, color: '#008000', name_thai: 'ทอดมันปลา', name: 'Тод ман пла', body: 'Тод ман пла  - пикантные ' +
                ' тайские рыбные котлетки', link: '/todman',
        },
    ]


    return (
        <div>
            <DishesItem dishes={dishes}/>
        </div>

    );
}

export default DishesList1;