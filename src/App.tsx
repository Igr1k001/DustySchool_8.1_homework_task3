import React from 'react';
import './App.css';

import { ProductCard } from './components/ProductCard/ProductCard';


const cards = [
    {
		photo: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-32.jpeg',
		title: 'Портативная Медицина',
		rating: '4.7',
		purchases: '123 купили',
		price: '1450 р'
    },
	{
		title: 'Стрепсилс',
		rating: '4.9',
		purchases: '620 купили',
		price: '300 р'
    },
	{
		photo: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-40.jpeg',
		title: 'Нурофен',
		price: '300 р'
    },
	{
		photo: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-31.jpeg',
		title: 'Аскорбинка',
		purchases: '5 купили',
		price: '30 р'
    },
	{
		photo: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-16.jpeg',
		title: 'Гемотоген',
		purchases: '301 купили',
		price: '50 р',
		discount: '20%',
		newPrice: '40 р'
    }
];

function App() {
    return (
		<div className="App">
			{cards.map(card => <ProductCard photo={card.photo} title={card.title} rating={card.rating} purchases={card.purchases} price={card.price} newPrice={card.newPrice} discount={card.discount}/>)}
		</div>
    );
}

export default App;


