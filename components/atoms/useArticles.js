import { atom, useAtom } from "jotai";
import useSWR, { mutate } from 'swr'


export const articlesAtom = atom(null);

const fetchArticles = async () => {

    const response = await fetch('http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/articles');
    return response.json();
}

export function useArticles() {
    const [articles, setArticles] = useAtom(articlesAtom);

    const { data: getArticles } = useSWR('articles', fetchArticles);
    setArticles(getArticles);
    return articles;
}
