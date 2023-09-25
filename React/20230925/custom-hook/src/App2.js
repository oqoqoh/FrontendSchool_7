import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import useScroll from './Hooks/useScroll';
import Loading from './components/Loading';

export default function App2() {
    const [imageList, setImageList] = useState([]);
    const [pageToFetch, setPageToFetch] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const isBottom = useScroll();

    useEffect(() => {
        if (isBottom) {
            setPageToFetch((prev) => prev + 1);
        }
    }, [isBottom]);

    const fetchImagesByPage = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);

            if (!response.ok) {
                throw new Error('네트워크의 문제가 발생했습니다.');
            }
            const data = await response.json();

            setImageList((prev) => [...prev, ...data]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchImagesByPage();
    }, [pageToFetch]);

    return (
        <>
            <ImageList imageList={imageList} />
            {isLoading && <Loading />}
        </>
    );
}
