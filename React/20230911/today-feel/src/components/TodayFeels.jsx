import React from 'react';
import './style.css';

export default function TodayFeels({ todayFeeling }) {
    return (
        <section className="container">
            <strong>오늘 기분이 {todayFeeling ? todayFeeling : `...`}</strong>
        </section>
    );
}
