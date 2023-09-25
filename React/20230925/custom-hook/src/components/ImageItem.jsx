import React from 'react';

export default function ImageItem({ image }) {
    return <img src={`${image.download_url}`} alt={image.author} style={{ width: 300, height: 300 }} />;
}
