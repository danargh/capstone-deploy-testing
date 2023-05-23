import {
   button_variants,
   tex,
   text_variants_inter,
   text_variants_poppins,
} from "@/components/custom/custom";
export default function Home() {
   return (
      <main className="main flex min-h-screen flex-col items-center justify-between p-24 gap-5">
         Homepage
         <h2>Colors</h2>
         <button className={button_variants()}>Button</button>
         <button className={button_variants({ variant: "danger" })}>
            Button<span>T</span>
         </button>
         <button className={button_variants({ variant: "success", variant: "full" })}>
            Button
         </button>
         <button className={button_variants({ variant: "warning" })}>Button</button>
         {/* <button className={button_variants({ variant: 'warning', intent: 'secondary' })}>Button</button> */}
         <div className=" w-40">
            <button className={button_variants({ variant: "warning", size: "full" })}>
               Button
            </button>
         </div>
         <button className={button_variants({ variant: "outline_primary" })}>Button</button>
         <button className={button_variants({ variant: "outline_danger" })}>Button</button>
         <button className={button_variants({ variant: "disable" })}>Button</button>
         <h2>Typografi</h2>
         <p className={text_variants_inter({ variant: "inter_32_bold" })}>Inter-bold-32</p>
         <p className={text_variants_inter({ variant: "inter_24_bold" })}>Inter-bold-24</p>
         <p className={text_variants_inter({ variant: "inter_22_bold" })}>Inter-bold-22</p>
         <p className={text_variants_inter({ variant: "inter_20_bold" })}>Inter-bold-20</p>
         <p className={text_variants_inter({ variant: "inter_32_semiBold" })}>Inter-semiBold-32</p>
         <p className={text_variants_inter({ variant: "inter_24_semiBold" })}>Inter-semiBold-24</p>
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>Inter-reguler-32</p>
         <p className={text_variants_inter({ variant: "inter_24_reguler" })}>Inter-reguler-24</p>
         <p className={text_variants_inter({ variant: "inter_22_reguler" })}>Inter-reguler-22</p>
         <p className={text_variants_poppins({ variant: "poppins_bold", size: "xl" })}>
            Poppins a bold xl
         </p>
         <div className=" w-full">
         </div>
      </main>
   );
}
