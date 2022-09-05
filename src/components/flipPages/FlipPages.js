import React, {useState, useEffect, useRef} from 'react';
import HTMLFlipBook from "react-pageflip";
import {Link} from "react-router-dom";
import s from './FlipPages.module.css';
import useWindowWide from "../../usewidth";

const FlipPages = ({posts}) => {
    const book = useRef();
    const [width, setWidth] = useState(375);
    const [height, setHeight] = useState(390);
    const [valueButtonPrev, setValueButtonPrev] = useState('');
    const [valueButtonNext, setValueButtonNext] = useState('');
    const widthScreen = useWindowWide();

    useEffect(() => {
        if (widthScreen < 600) {
            setWidth(300);
            setHeight(420);
            setValueButtonPrev('<<');
            setValueButtonNext('>>');
        } else {
            setWidth(750);
            setHeight(780);
            setValueButtonPrev('ПРЕДЫДУЩАЯ СТРАНИЦА');
            setValueButtonNext('СЛЕДУЮЩАЯ СТРАНИЦА');
        }
    }, [widthScreen]);

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
                    width={width}
                    height={height}
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
                    className={s.mybut1}
                    onClick={() =>
                        book.current.pageFlip().flipPrev()}>
                    {valueButtonPrev}
                </button>

                <button
                    className={s.mybut2}
                    onClick={() =>
                        book.current.pageFlip().flipNext()}>
                    {valueButtonNext}
                </button>

            </div>
        </div>
    );
};

export default FlipPages;