import React from 'react';

export default function Resume({ aboutObj }) {
    return (
        <div style={{ border: '1px solid black', width: '50%' }}>
            <h2>{aboutObj.name} 자기소개서</h2>
            <h3>안녕하세요</h3>
            <p>취미 : {aboutObj.hobby}</p>
            <p>좋아하는 음식 : {aboutObj.food}</p>
            <p>
                좋아하는 색 : <span style={{ color: `${aboutObj.color}` }}>{aboutObj.color}</span>
            </p>
        </div>
    );
}
