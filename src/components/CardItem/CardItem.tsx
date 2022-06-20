import { useState } from "react";
import { Good } from "../../types";

import s from './CardItem.module.scss';

interface CardItemProps {
    data: Good
}

const CardItem = ({ data }: CardItemProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isHovered, setIsHoverd] = useState<boolean>(false);

    const declMice = (n: number, decl: string[]) => {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) { return decl[2]; }
        if (n1 > 1 && n1 < 5) { return decl[1]; }
        if (n1 === 1) { return decl[0]; }
        return decl[2];
    }

    const handleSelect = () => {
        setIsSelected(!isSelected);
    }

    const handleHover = () => {
        setIsHoverd(!isHovered);
    }

    return (
        <li
            onClick={handleSelect}
            className={
                [s.сardItem, isSelected && s.cardItemSelected, !data.inStock && s.cardItemDisabled]
                    .join(' ')
            }>
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={s.cardItem__info}>
                {isHovered && isSelected
                    ?
                    <span className={s.cardItem__dislike}>Котэ не одобряет?</span>
                    :
                    <span className={s.cardItem__package}>{data.package}</span>
                }
                <span className={s.cardItem__title}>{data.title}</span>

                <span className={s.cardItem__filling}>с {data.filling}</span>

                <span className={s.cardItem__qty}><b>{data.qty}</b> порций</span>

                {data.mice > 1 ?
                    <span className={s.cardItem__mice}>
                        <b>
                            {data.mice}
                        </b>&nbsp;
                        {declMice(data.mice, ['мышь', 'мыши', 'мышей'])} в подарок
                    </span>
                    :
                    <span className={s.cardItem__mice}>
                        {declMice(data.mice, ['мышь', 'мыши', 'мышей'])} в подарок
                    </span>
                }

                <div className={s.cardItem__weight}>
                    <span className={s.cardItem__mass}>{data.weight}</span>
                    <span className={s.cardItem__kg}>кг</span>
                </div>
            </div>

            {data.inStock && !isSelected &&
                <span className={s.CardItem__buy}>Чего сидишь? Порадуй котэ,&nbsp;
                    <a className={s.cardItem__link} href="/">купи.</a>
                </span>}

            {!data.inStock &&
                <span className={s.CardItem__out}>Печалька, c {data.filling} закончился.</span>}

            {isSelected && data.filling === 'фуа-гра' &&
                <span className={s.CardItem__buy}>Печень утки разварная с артишоками.</span>}

            {isSelected && data.filling === 'рыбой' &&
                <span className={s.CardItem__buy}>Головы щучьи с чесноком да свежайшая сёмгушка.</span>}

            {isSelected && data.filling === 'курой' &&
                <span className={s.CardItem__buy}>Филе из цыплят с трюфелями в бульоне.</span>}
        </li>
    )
}

export default CardItem;