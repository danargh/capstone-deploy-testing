import "react-quill/dist/quill.snow.css";
import SidebarAdmin from "@/components/ui/SidebarAdmin";

export const metadata = {
   title: "Prevent - Admin",
   description: "Prevent Admin Area",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <SidebarAdmin>{children}</SidebarAdmin>
         </body>
      </html>
   );
}
