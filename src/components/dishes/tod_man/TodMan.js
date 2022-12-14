import React from 'react';
import FlipPages from "../../flipPages/FlipPages";


function TodMan() {

    const posts = [
        {
            id: 1, number: 1, title: 'Рыбные котлетки "Тод ман пла"', src: '/images/todman1.jpg',
            body: 'Ингредиенты: рыбный фарш - 300гр, небольшой пучок кинзы, чеснок - 2 зубчика, красный лук - 1 головка ' +
                'сухой чили - 2-3ч ложки, небольшой пучок базилика, соевый (рыбный) соус - 3ст ложки, мед -1,5ст ложки ' +
                'яйцо, растительное масло, черный молотый перец, половинка зеленого болгарского перца'
        },
        {
            id: 2, number: 2, title: 'Рыбные котлетки "Тод ман пла"', src: '/images/todman2.jpg',
            body: 'Мелко порубить или измельчить в блендере чеснок, красный лук, кинзу'
        },
        {
            id: 3, number: 3, title: 'Рыбные котлетки "Тод ман пла"', src: '/images/todman3.jpg',
            body: 'Добавить соевый (рыбный) соус в рыбный фарш и хорошо перемешать. Добавить мед'
        },
        {
            id: 4, number: 4, title: 'Рыбные котлетки "Тод ман пла"', src: '/images/todman4.jpg',
            body: 'Взбить яйцо и половину смеси добавить в фарш. Мелко порезать болгарский перец и вместе с измельченными ' +
                'травами смешать с фаршем. Всыпать сухой чили и хорошо перемешать'
        },
        {
            id: 5, number: 5, title: 'Рыбные котлетки "Тод ман пла"', src: '/images/todman5.jpg',
            body: 'Сформировать маленькие шарики и пожарить в большом количестве масла или запечь в духовке ' +
                'при 150 градусах'
        },
        {
            id: 6, number: 6, title: 'Рыбные котлетки "Тод ман пла"', src: '/images/todman6.jpg',
            body: ' * * * * * * * Приятного аппетита!!! * * * * * * * '
        }
    ]


    return (
        <div>
            <FlipPages posts={posts}/>
        </div>
    );
}

export default TodMan;