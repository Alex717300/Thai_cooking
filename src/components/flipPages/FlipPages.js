import React, {useRef} from 'react';
import HTMLFlipBook from "react-pageflip";
import {Link} from "react-router-dom";
import s from './FlipPages.module.css';

const FlipPages = ({posts}) => {
    const book = useRef();


    return (
        <div className={s.myflipPg}>
            <button className={s.mybut}>
                <Link className={s.lnk} to='/home'>
                    ВСЕ РЕЦЕПТЫ
                </Link>
            </button>

            <div className={s.flipPg}>
                <HTMLFlipBook
                    showCover={false}
                    width={750}
                    height={780}
                    ref={book}
                >

                    {posts.map((post) => (
                        <div className={s.dflipPg} key={post.id}>
                            <h1>{post.title}</h1>

                            <img src={post.src}/>

                            <h3>{post.body}</h3>
                            <p>Страница {post.number}</p>
                        </div>
                    ))}

                </HTMLFlipBook>

                <button
                    className={s.mybut}
                    style={{marginLeft: '1%'}}
                    onClick={() =>
                        book.current.pageFlip().flipPrev()}>
                    ПРЕДЫДУЩАЯ СТРАНИЦА
                </button>

                <button
                    className={s.mybut}
                    style={{marginLeft: '63%'}}
                    onClick={() =>
                        book.current.pageFlip().flipNext()}>
                    СЛЕДУЮЩАЯ СТРАНИЦА
                </button>

            </div>
        </div>
    );
};

export default FlipPages;