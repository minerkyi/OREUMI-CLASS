import React, { useEffect, useState } from 'react'
import ImageList from './Components/ImageList';
import {useScrollObserver} from './useScrollObserver';
import Loading from './Components/Loading';

export default function InfinitImg() {

    const [imageList, setImageList] = useState([]);
    const [pageToFetch, setPageToFetch] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const isBottom = useScrollObserver();

    async function fetchImages() {
        try {
          setIsFetching(true);
          const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=5`);

          if (!response.ok) {
              throw new Error('네트워크 응답에 문제가 있습니다.');
          }

          const data = await response.json();

          setImageList((prev) => [...prev, ...data]);
          setIsFetching(false);
        } catch (error) {
          console.error(error);
          setIsFetching(false);
        }
    }

    useEffect(() => {
      fetchImages();
    }, [pageToFetch]);
    
    // 현재 스크롤이 바닥에 도달했는가, 도달했다면 url 변경
    useEffect(() => {
        if(isBottom && !isFetching) {
            setPageToFetch((prev) => prev + 1);
        }
    }, [isBottom]);

    return (
        <>
            <h1>picsum images~</h1>
            <div>
              <ImageList imageList={imageList} />
              {isFetching && <Loading />}
            </div>
        </>
    )
}