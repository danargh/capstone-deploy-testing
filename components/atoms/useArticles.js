import { atom, useAtom } from "jotai";
import useSWR, { mutate } from 'swr'


export const articlesAtom = atom(null);

const fetchArticles = async () => {
    const response = await fetch('https://64872a94beba6297279025c6.mockapi.io/tes-articles');
    return response.json();
}

export function useArticles() {
    const [articles, setArticles] = useAtom(articlesAtom);

    const { data: getArticles } = useSWR('articles', fetchArticles);
    setArticles(getArticles);
    console.log(articles);
    return articles;
}

