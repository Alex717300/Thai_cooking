import React from 'react';
import FlipPages from "../../flipPages/FlipPages";

function Laab() {

    const posts = [
        {
            id: 1, number: 1, title: 'Лааб', src: '/images/laab1.jpg',
            body: 'Ингредиенты: фарш куриный (свиной) - 200-300гр, сок 1 лайма (1/2 лимона), соевый соус - 3ст ложки, ' +
                'сахар 0,5ч ложки, чили молотый по вкусу, белый рис (крупа) -  2-3ст ложки, красный лук - 1 головка,' +
                'зеленый лук, кинза, мята свежая, салатные листья (для подачи) '
        },
        {
            id: 2, number: 2, title: 'Лааб', src: '/images/laab2.jpg',
            body: 'Смешиваем 2ст ложки сока лимона с фаршем, оставляем на время (минут 15-20)'
        },
        {
            id: 3, number: 3, title: 'Лааб', src: '/images/laab3.jpg',
            body: 'Обжариваем на сухой сковороде или в духовке рис до готовности (до коричневого цвета). ' +
                'Измельчаем его в крошку, можно в блендере, кофемолке или ступке'
        },
        {
            id: 4, number: 4, title: 'Лааб', src: '/images/laab4.jpg',
            body: 'Отжимаем фарш, воду,которая стекла с него разогреваем на сковороде, добавляем фарш. ' +
                'Готовим до готовности. Смешиваем с фаршем соевый соус, сок лимона, чили, сахар'
        },
        {
            id: 5, number: 5, title: 'Лааб', src: '/images/laab5.jpg',
            body: 'Добавляем красный лук, мяту, кинзу, зеленый лук, салатные листья и посыпаем измельченным рисом'
        },
        {
            id: 6, number: 6, title: 'Лааб', src: '/images/laab6.jpg',
            body: '* * * * * * * * Приятного аппетита!!! * * * * * * * *'
        }
    ]

    return (
        <div>
            <FlipPages posts={posts}/>
        </div>

    );
}

export default Laab;