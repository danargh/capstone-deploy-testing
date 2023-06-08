import "react-quill/dist/quill.snow.css";

export const metadata = {
   title: "Prevent - Admin",
   description: "Prevent Admin Area",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
