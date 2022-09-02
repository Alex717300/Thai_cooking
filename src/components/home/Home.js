import React from 'react';
import s from './Home.module.css'
import DishesList1 from "../dishes/dishes_list/DishesList1";
import DishesList2 from "../dishes/dishes_list/DishesList2";
import Header from "../header/Header";

function Home  ()  {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className={s.home}>
                <div>
                    <DishesList1/>
                </div>
                <div>
                    <DishesList2/>
                </div>
            </div>

            <p className={s.footer}>* Иллюстративный материал заимствован из общедоступных ресурсов интернета,
                не содержащих указаний на авторов этих материалов и каких-либо
                ограничений для их заимствования</p>
        </div>
    );
}

export default Home;