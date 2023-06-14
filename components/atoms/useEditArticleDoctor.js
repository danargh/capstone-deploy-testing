import { atom, useAtom } from 'jotai';

// Buat atom untuk setiap state
const titleAtom = atom('');
const categoryAtom = atom('');
const descriptionAtom = atom('');

export function useEditArticleDoctor() {
   const [title, setTitle] = useAtom(titleAtom);
   const [category, setCategory] = useAtom(categoryAtom);
   const [description, setDescription] = useAtom(descriptionAtom);

   return {
      title,
      setTitle,
      category,
      setCategory,
      description,
      setDescription,
   };
}
