import React from 'react';
import ListItem from '../LIstIten/ListItem';

export default function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map((item, idx) => (
                    <ListItem key={idx} item={item} />
                ))}
            </tbody>
        </table>
    );
}
