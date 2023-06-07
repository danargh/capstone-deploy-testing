import "react-quill/dist/quill.snow.css";
import SidebarDokter from "@/components/ui/SidebarDokter";
import DoctorNavbarLayout from "@/components/ui/DoctorNavbarLayout";

export const metadata = {
   title: "Prevent - Dokter",
   description: "Area dokter Prevent",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <div className="flex flex-row">
         <SidebarDokter />
            <DoctorNavbarLayout>
               <div className="h-full">{children}</div>
            </DoctorNavbarLayout>
            </div>
         </body>
      </html>
   );
}
