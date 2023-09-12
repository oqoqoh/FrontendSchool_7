import React, { useState } from 'react';
import Counter from './Counter';

export default function App2() {
    const productList = [
        {
            title: '개발자 무릎 담요',
            price: 17500,
            id: 101,
        },
        {
            title: 'Hack Your Life 개발자 노트북 파우치',
            price: 29000,
            id: 102,
        },
        {
            title: '우당탕탕 라이켓의 실험실 스티커북',
            price: 29000,
            id: 103,
        },
        {
            title: '버그를 Java라 버그잡는 개리씨 키링',
            price: 29000,
            id: 104,
        },
    ];
    const [products, setProducts] = useState(productList);

    const deleteProduct = (id) => {
        //const newList = products.filter((p) => p.id !== id);
        //setProducts(newList);

        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <>
            <ul>
                {products.map((item) => {
                    return (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <strong>{item.price}</strong>
                            <button onClick={() => deleteProduct(item.id)}>delete</button>
                        </li>
                    );
                })}
            </ul>
            <Counter />
        </>
    );
}
