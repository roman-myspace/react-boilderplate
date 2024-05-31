import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getParam = (key) => {
        return searchParams.get(key);
    };

    const setParam = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(key, value);
        setSearchParams(newParams);
    };

    const deleteParam = (key) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete(key);
        setSearchParams(newParams);
    };

    return { getParam, setParam, deleteParam };
};

export default useQueryParams;
