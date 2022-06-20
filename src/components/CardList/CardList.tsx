import { Good } from '../../types';
import CardItem from '../CardItem/CardItem';

import s from './CardList.module.scss';

const CardList = () => {
    const data: Good[] = require('../../data/goods.json');
    return (
        <ul className={s.cardList}>
            {data.map((el) => (
                <CardItem data={el} />
            ))}
        </ul>
    )
}

export default CardList;