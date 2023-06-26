import { atom, useAtom } from 'jotai';
import { mutate } from 'swr';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const artikelAtom = atom('');
export const categoryAtom = atom('');
export const contentAtom = atom('');
export const thumbnailatom = atom('');

export function useAddArticleDoctor() {
   const router = useRouter();
   const [title, setTitle] = useAtom(artikelAtom);
   const [category, setCategory] = useAtom(categoryAtom);
   const [content, setContent] = useAtom(contentAtom);
   const [thumbnail, setThumbnail] = useAtom(thumbnailatom);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const token = Cookies.get('doctorToken');
      const data = new FormData();
      data.append('title', title);
      data.append('category', category);
      data.append('content', content);
      data.append('thumbnail', thumbnail);
      if (content.length < 250) {
         alert('Detail Artikel harus memiliki minimal 250 karakter!');
         return;
      }

      try {
         const response = await fetch('https://capstone-project.duckdns.org:8080/doctor/articles', {
            method: 'POST',
            headers: {
               Authorization: `Bearer ${token}`,
            },
            body: data,
         });

         if (!response.ok) {
            throw new Error('Error adding article');
         }

         const responseData = await response.json();
         console.log(responseData);

         mutate('https://capstone-project.duckdns.org:8080/doctor/articles');

         Swal.fire({
            title: 'Berhasil',
            text: 'Artikel berhasil ditambahkan',
            icon: 'success',
            confirmButtonText: 'OK',
         });
      } catch (error) {
         console.error(error);
         Swal.fire('Maaf Artikel Gagal Diunggah Ketuk dimana saja untuk menutup halaman ini.', 'error');
      }
      router.push('/dashboard-dokter/data-artikel');
   };
   //    const handleSubmit = async (e) => {
   //       e.preventDefault();

   //       const data = {
   //          title: title,
   //          category: category,
   //          description: description,
   //          thumbnail: thumbnail,
   //       };

   //       try {
   //          const response = await fetch('http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/doctor/articles', {
   //             method: 'POST',
   //             headers: {
   //                'Content-Type': 'application/json',
   //                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJkb2N0b3JfaWQiOjUsImV4cCI6MTY4NzAxNDA2OH0.6NwZMTwrvwXrCYWYJRj0FP44tozcUrXh7Oz1FJ35WFI', // Ini adalah token authorization yang Anda berikan
   //             },
   //             body: JSON.stringify(data),
   //          });

   //          if (!response.ok) {
   //             throw new Error('Error adding article');
   //          }

   //          const responseData = await response.json();
   //          console.log(responseData);

   //          mutate('http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/doctor/articles');

   //          Swal.fire({
   //             title: 'Berhasil',
   //             text: 'Artikel berhasil ditambahkan',
   //             icon: 'success',
   //             confirmButtonText: 'OK',
   //          });
   //       } catch (error) {
   //          console.error(error);
   //       }
   //    };

   return {
      title,
      setTitle,
      category,
      setCategory,
      content,
      setContent,
      thumbnail,
      setThumbnail,
      handleSubmit,
   };
}
