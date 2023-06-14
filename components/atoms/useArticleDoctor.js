import { atom, useAtom } from 'jotai';
import useSWR, { mutate } from 'swr';
import Swal from 'sweetalert2';

export const currentPageAtom = atom(1);
export const baseIndexAtom = atom(1);
export const articlesPerPageAtom = atom(13);
export const dataArtikelAtom = atom(null);
export const errorAtom = atom(null);

const fetcher = (url) =>
   fetch(url, {
      headers: {
         Authorization: 'Bearer',
      },
   }).then((res) => res.json());

export function useArticleData() {
   const [dataArtikel, setDataArtikel] = useAtom(dataArtikelAtom);
   const [error, setError] = useAtom(errorAtom);

   useSWR('https://64872a94beba6297279025c6.mockapi.io/articles', fetcher, {
      onSuccess: (data) => {
         setDataArtikel(data);
      },
      onError: (error) => {
         setError(error);
      },
   });

   const handleDelete = async (id) => {
      Swal.fire({
         title: 'Apakah Anda yakin?',
         text: 'Apakah kamu yakin ingin menghapus artikel ini?',
         iconHtml: '<img src="https://www.rinelisa.com/wp-content/uploads/2023/06/alert-artikel.png">',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Ya!',
         cancelButtonText: 'Batal',
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const response = await fetch(`https://64872a94beba6297279025c6.mockapi.io/articles/${id}`, {
                  method: 'DELETE',
               });

               if (response.ok) {
                  mutate('https://64872a94beba6297279025c6.mockapi.io/articles');
                  Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');
               } else {
                  console.error('Gagal menghapus data:', response);
                  throw new Error('Gagal menghapus data');
               }
            } catch (error) {
               Swal.fire('Terjadi kesalahan', error.message, 'error');
            }
         }
      });
   };

   return { dataArtikel, error, handleDelete };
}
