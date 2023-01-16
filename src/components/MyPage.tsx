import React from 'react';
import Card from './Card';

import { StaticImageData } from 'next/image';

import imagem1 from '../assets/camisetas/Shirt.png'
import imagem2 from '../assets/camisetas/Shirt-1.png'
import { HomeContainer } from '@/styles/pages/home';



interface Data {
    title: string;
    description: string;
    image: StaticImageData;
    price: string;
    quantity: string;
}

const data: Data[] = [
    {
        title: "Título 1",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },
    {
        title: "Título 2",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },
    {
        title: "Título 3",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },
    {
        title: "Título 4",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },
    {
        title: "Título 5",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },
    {
        title: "Título 6",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },
    {
        title: "Título 7",
        description: "Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        image: imagem1,
        price: "R$100,00",
        quantity: "1"
    },


];

const MyPage: React.FC = () => {
    return (
        <HomeContainer>
            {data.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} image={item.image} price={item.price} quantity={item.quantity} />
            ))}
        </HomeContainer>
    )
}

export default MyPage;
