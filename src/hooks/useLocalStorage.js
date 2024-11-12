import { useEffect, useState } from 'react';

const useLocalStorage = (storageKey, defaultValue) => {
    const [VAlue, setVAlue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
    );


    useEffect(() => {
    localStorage.setItem(storageKey,JSON.stringify(VAlue));
    }, [VAlue, storageKey])

    return [VAlue, setVAlue]
}

export default useLocalStorage