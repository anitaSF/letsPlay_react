import { useEffect } from 'react';

// hook personalizado para manejar el evento de scroll y llamar a la función seeMore cuando el usuario llega al final de la página

const useInfiniteScroll = (seeMore) => {
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                seeMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [seeMore]);
};

export default useInfiniteScroll;