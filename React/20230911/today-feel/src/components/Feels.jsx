import React from 'react';
import './style.css';

export default function Feels({ menus, getFeels }) {
    const buttonHandler = () => {
        getFeels(menus);
    };
    return (
        <li>
            <button className="btn-item" onClick={buttonHandler}>
                {menus}
            </button>
        </li>
    );
}
