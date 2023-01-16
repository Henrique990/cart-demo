import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/styles/pages/home';

import { StaticImageData } from 'next/image';


interface Props {
    title: string;
    description: string;
    image: string | StaticImageData;
    price: string;
    quantity: string;
}

const Card: React.FC<Props> = (props) => {
    const [quantity, setQuantity] = useState(parseInt(props.quantity));
    const [title, setTitle] = useState(props.title);
    const [fontSize, setFontSize] = useState(16);
    const [showInput, setShowInput] = useState(false);
    const [previousQuantity, setPreviousQuantity] = useState(parseInt(props.quantity));
    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreviousQuantity(quantity);
        setQuantity(parseInt(event.target.value));
        if (previousQuantity > quantity) {
            setTotalQuantity(totalQuantity - (previousQuantity - quantity));
        } else {
            setTotalQuantity(totalQuantity + (quantity - previousQuantity));
        }
    }

    const handleChangeFontSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(parseInt(event.target.value));
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setShowInput(false);
    }

    const handleClick = () => {
        setShowInput(!showInput);
    }

    return (
        <Product>
            <div>
                <Image src={props.image} alt={props.title} width={100} />
                <h1 style={{ fontSize: fontSize + 'px' }} onClick={handleClick}>
                    {title}
                </h1>
                {showInput && (
                    <>
                        <input type="text" value={title} onChange={handleChangeTitle} onBlur={handleBlur} />
                        <input type="range" min={10} max={40} value={fontSize} onChange={handleChangeFontSize} />

                    </>
                )}
                <p>
                    {props.price} <input type="number" value={quantity} onChange={handleChange} />
                </p>
                <p>{props.description}</p>
                <p>Soma total das quantidades: {quantity}</p>
                <button type="button">Add Cart</button>
                <a href="#">Learn More</a>
            </div>
        </Product>
    )
}

export default Card;