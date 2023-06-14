import { atom, useAtom } from 'jotai';
import { mutate } from 'swr';
import Swal from 'sweetalert2';
// Definisikan atom-atom yang dibutuhkan
export const artikelAtom = atom('');
export const categoryAtom = atom('');
export const descriptionAtom = atom('');

// Buat custom hook untuk mengakses dan mengubah nilai atom-atom tersebut
export function useAddArticleDoctor() {
   const [title, setTitle] = useAtom(artikelAtom);
   const [category, setCategory] = useAtom(categoryAtom);
   const [description, setDescription] = useAtom(descriptionAtom);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
         title: title,
         category: category,
         description: description,
      };

      try {
         const response = await fetch('https://64872a94beba6297279025c6.mockapi.io/articles', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         });

         if (!response.ok) {
            throw new Error('Error adding article');
         }

         const responseData = await response.json();
         console.log(responseData);

         // Lakukan mutate pada SWR
         mutate('https://64872a94beba6297279025c6.mockapi.io/articles');

         // Tampilkan SweetAlert
         Swal.fire({
            title: 'Berhasil',
            text: 'Yeyy Artikel Berhasil Ditambahkan',
            icon: 'success',
            confirmButtonText: 'OK',
         });
      } catch (error) {
         console.error(error);
      }
   };

   return {
      title,
      setTitle,
      category,
      setCategory,
      description,
      setDescription,
      handleSubmit,
   };
}
