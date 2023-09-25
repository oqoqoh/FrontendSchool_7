import React, { useEffect, useState } from 'react';

export default function useScroll() {
    const [isBottom, setIsBottom] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            //clientHeight : 요소안의 높이
            //innerHeight : viewport 높이
            //scrollTop : target 요소가 화면 상단으로 부터 스크롤된 길이
            //offsetHeight : document 즉 컨텐츠의 총 눞이
            console.log(document.documentElement.offsetHeight);
            console.log(document.documentElement.scrollTop);
            console.log(window.innerHeight);

            setIsBottom(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight);
        });
    }, []);
    return isBottom;
}
