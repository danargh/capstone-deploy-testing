import { atom, useAtom } from "jotai";
import useSWR, { mutate } from 'swr'


export const articlesAtom = atom(null);

const fetchArticles = async () => {

    const response = await fetch('https://capstone-project.duckdns.org:8080/articles');
    return response.json();
}

export function useArticles() {
    const [articles, setArticles] = useAtom(articlesAtom);

    const { data: getArticles } = useSWR('articles', fetchArticles);
    setArticles(getArticles);
    return articles;
}
