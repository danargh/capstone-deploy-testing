import { atom, useAtom } from 'jotai';

// Buat atom untuk setiap state
export const artikelAtom = atom('');
export const categoryAtom = atom('');
export const contentAtom = atom('');
export const thumbnailatom = atom('');

export function useEditArticleDoctor() {
   const [title, setTitle] = useAtom(artikelAtom);
   const [category, setCategory] = useAtom(categoryAtom);
   const [content, setContent] = useAtom(contentAtom);
   const [thumbnail, setThumbnail] = useAtom(thumbnailatom);

   return {
      title,
      setTitle,
      category,
      setCategory,
      content,
      setContent,
      thumbnail,
      setThumbnail,
   };
}
