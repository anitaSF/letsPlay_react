import { createContext, useEffect, useState } from "react";
import { fetchJWT, fetchResults } from '../Service/ApiResults';
import useInfiniteScroll from '../Hook/useInfiniteScroll';

export const resultsContext = createContext();

export const useResultsContext = () => {

    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    // Cargar resultados en loop infinito con el hook personalizado creado (useInfiniteScroll)
    const fetchMoreResults = async () => {
        setLoading(true);
        try {
            const newResults = await fetchResults(page, token);
            console.log('Fetched Results:', newResults); // Ver los nuevos resultados
            setResults((prevResults) => [...prevResults, ...newResults]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            setError('Error fetching more results.');
        } finally {
            setLoading(false);
        }
    };

    useInfiniteScroll(fetchMoreResults);

    useEffect(() => {
        const getToken = async () => {
            try {
                const fetchedToken = await fetchJWT();
                console.log('Fetched Token:', fetchedToken); // Ver el token obtenido
                setToken(fetchedToken);
            } catch (error) {
                setError('Error fetching token.');
            }
        };
        getToken();
    }, []);

    useEffect(() => {
        if (token) {
            fetchMoreResults();
        }
    }, [token]);


    return { results, loading, error };
};