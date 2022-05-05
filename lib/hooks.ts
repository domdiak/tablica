import useSWR, { useSWRConfig, useSWRconfig } from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
    const { data, error } = useSWR("/me", fetcher);

    return {
        user: data,
        isLoading: !data && !error,
        isError: error,
    };
};

export const useCard = () => {
    const { data, error } = useSWR("/card", fetcher);
    return {
        cards: (data as any) || [],
        isLoading: !data && !error,
        isError: error,
    };
};

export const useCategory = () => {
    const { data, error } = useSWR("/category", fetcher);
    const { mutate } = useSWRConfig();

    return {
        categories: (data as any) || [],
        isLoading: !data && !error,
        isError: error,
    };
};
