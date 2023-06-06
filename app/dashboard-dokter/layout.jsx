import "react-quill/dist/quill.snow.css";
import NavbarDokter from "@/components/ui/NavbarDokter";

export const metadata = {
   title: "Prevent - Dokter",
   description: "Area dokter Prevent",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
               <NavbarDokter children={children} />
         </body>
      </html>
   );
}
  