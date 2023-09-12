import React from 'react';
import Feels from './Feels';
import './style.css';

export default function FeelsList({ getFeels }) {
    const menus = ['좋아요! 😃', '정말 좋아요! 🤭', '최고에요! 😄', '미쳤어요!! 🤪'];
    return (
        <section>
            <ul className="container-list">
                {menus.map((feel, idx) => (
                    <Feels key={idx} menus={feel} getFeels={getFeels} />
                ))}
            </ul>
        </section>
    );
}
