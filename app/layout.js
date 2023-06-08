import "./globals.css";
import "react-quill/dist/quill.snow.css";

export const metadata = {
   title: "Prevent",
   description: "lorem ipsum",
};

export default function RootLayout({ children }) {
   // useHydrateAtoms([[dataJotai]]);
   // const [dataJotai2] = useAtom(dataJotai);

   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
