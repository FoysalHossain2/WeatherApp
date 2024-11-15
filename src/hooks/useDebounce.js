import { useEffect, useRef } from 'react';

const useDebounce = (callback, delay) => {

    const timeoutIdtRef = useRef(null);

    useEffect(() => {
      return () => {
        if (timeoutIdtRef.current) {
            clearTimeout(timeoutIdtRef.current);
        }
      }
    }, []);


    const debouncedCallback = (...arg) => {
        if (timeoutIdtRef.current) {
            clearTimeout(timeoutIdtRef.current);
        }

        timeoutIdtRef.current = setTimeout(() => {
            callback(...arg)
        }, delay);
    }

    return debouncedCallback
    
}

export default useDebounce;