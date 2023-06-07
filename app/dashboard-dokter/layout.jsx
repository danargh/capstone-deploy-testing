import "react-quill/dist/quill.snow.css";
import NavbarDokter from "@/components/ui/NavbarDokter";
import DoctorNavbarLayout from "@/components/ui/DoctorNavbarLayout";

export const metadata = {
   title: "Prevent - Dokter",
   description: "Area dokter Prevent",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
         <NavbarDokter />
            <DoctorNavbarLayout>
               <div className="h-full">{children}</div>
            </DoctorNavbarLayout>
         </body>
      </html>
   );
}
