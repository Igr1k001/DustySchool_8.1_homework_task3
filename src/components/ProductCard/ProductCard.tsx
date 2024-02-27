import React from 'react';

import './ProductCard.css';
import { productCardBlockPriceCn, productCardCn, productCardInfoCn, productCardNewPriceCn, productCardOldPriceCn, productCardPhotoCn, productCardPriceCn, productCardPurchasesCn, productCardRatingCn, productCardTitleCn } from './ProductCard.classname';

export interface IProductCardProps {
    photo?: string;
    title: string;
    rating?: string;
    purchases?: string;
    price: string;
    discount?: string;
    newPrice?: string;
}

const defaultPhoto = 'https://storage.yandexcloud.net/themitri4-backet/default.jpg';
const defaultRating = 'Нет оценок';
const noPurchases = 'Не покупали';

export const ProductCard: React.FC<IProductCardProps> = ({ photo, title, rating, purchases, price, discount, newPrice }) => {

    return (
        <div className={productCardCn}>
            {discount && <p className='DiscountImg'>-25%</p>}
            <img className={productCardPhotoCn} src={photo ? photo : defaultPhoto}/>
            <h1 className={productCardTitleCn}>{title}</h1>
            <div className={productCardInfoCn}>
                <p className={productCardRatingCn}>{rating ? rating + ' ⭐' : defaultRating}</p>
                <p className={productCardPurchasesCn}>{purchases ? purchases : noPurchases}</p>
            </div>
            <div className={productCardBlockPriceCn}>
                {newPrice && <p className={productCardNewPriceCn}>{newPrice}</p>}
                <p className={newPrice ? productCardOldPriceCn : productCardPriceCn}>{price}</p>
            </div>
        </div>
    );
}