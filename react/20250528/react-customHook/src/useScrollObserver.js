import { useEffect, useRef, useState } from "react";

export function useScrollObserver() {
  const [isBottom, setIsBottom] = useState(false);
  const endLineRef = useRef(null);


  useEffect(() => {
    const endLine = document.createElement('div');
    endLine.style.height = '10px';
    document.body.append(endLine);
    endLineRef.current = endLine;

    const option = {
      root: null,
      rootMargin: '10px',
      threshold: 1
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        setIsBottom(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, option);

    observer.observe(endLine);

    return () => {
      observer.unobserve();
      
      if(endLineRef.current) {
        endLineRef.current.remove();
      }
    };

  }, []);

  return isBottom;
}