import React, { useState } from 'react';
import ImageItem from './ImageItem';

export default function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((image) => {
                return (
                    <li key={image.id}>
                        <ImageItem image={image} />
                    </li>
                );
            })}
        </ul>
    );
}
