import { atom, useAtom } from 'jotai';
import useSWR, { mutate } from 'swr';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export const currentPageAtom = atom(1);
export const baseIndexAtom = atom(1);
export const articlesPerPageAtom = atom(13);
export const dataArtikelAtom = atom(null);
export const errorAtom = atom(null);

const fetcher = (url) => {
   const token = Cookies.get('doctorToken');
   return fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());
};

export function useArticleData() {
   const [dataArtikel, setDataArtikel] = useAtom(dataArtikelAtom);
   const [error, setError] = useAtom(errorAtom);

   useSWR('https://capstone-project.duckdns.org:8080/doctor/articles', fetcher, {
      onSuccess: (data) => {
         setDataArtikel(data.data);
      },
      onError: (error) => {
         setError(error);
      },
   });

   const handleDelete = async (id) => {
      const token = Cookies.get('doctorToken');
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
               const response = await fetch(`https://capstone-project.duckdns.org:8080/doctor/articles/${id}`, {
                  method: 'DELETE',
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               });

               if (response.ok) {
                  mutate('https://capstone-project.duckdns.org:8080/doctor/articles');
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
