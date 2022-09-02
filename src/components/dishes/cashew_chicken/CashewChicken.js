import React from 'react';
import FlipPages from "../../flipPages/FlipPages";

function CashewChicken() {

    const posts = [
        {
            id: 1, number: 1, title: 'Курица с кешью', src: '/images/cashew_chicken1.jpg',
            body: 'Ингредиенты: куриная грудка - 300гр, кешью - 100гр, красный болгарский перец - 1шт, ' +
                'лук репчатый - 1 головка, чеснок - 2 зубчика, соевый соус - 5-6ст ложек, ' +
                'кукурузный крахмал - 3ст ложки, сахар или мед - 0,5ч ложки, вода, зеленый лук, ' +
                'растительное масло'
        },
        {
            id: 2, number: 2, title: 'Курица с кешью', src: '/images/cashew_chicken2.jpg',
            body: 'Мясо и овощи режутся крупно. Смешиваем кукурузный крахмал с водой и ложкой соевого соуса. Маринуем ' +
                'курицу с 2ст ложками этого соуса'
        },
        {
            id: 3, number: 3, title: 'Курица с кешью', src: '/images/cashew_chicken3.jpg',
            body: 'Обжариваем чеснок. Добавляем курицу. Жарим до коричневой корочки, накрываем крышкой и тушим с небольшим ' +
                'количеством воды до готовности'
        },
        {
            id: 4, number: 4, title: 'Курица с кешью', src: '/images/cashew_chicken4.jpg',
            body: 'Добавляем репчатый лук, соевый соус, сахар, орешки кешью и остатки соуса из кукурузного ' +
                'крахмала'
        },
        {
            id: 5, number: 5, title: 'Курица с кешью', src: '/images/cashew_chicken5.jpg',
            body: 'Посыпаем зеленым луком. По желанию можно добавить ложку виски или бренди'
        },
        {
            id: 6, number: 6, title: 'Курица с кешью', src: '/images/cashew_chicken6.jpg',
            body: '* * * * * * * * Приятного аппетита!!! * * * * * * * *'
        },
    ]

    return (
        <div>
            <FlipPages posts={posts}/>
        </div>

    );
}

export default CashewChicken;