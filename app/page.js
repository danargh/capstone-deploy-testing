import { button_variants } from "@/components/custom/custom";
export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         Homepage
         <button className={button_variants()}>Button</button>
         <button className={button_variants({ variant: 'danger' })}>Button<span>T</span></button>
         <button className={button_variants({ variant: 'success' })}>Button</button>
         <button className={button_variants({ variant: 'warning' })}>Button</button>
         {/* <button className={button_variants({ variant: 'warning', intent: 'secondary' })}>Button</button> */}
         <div className=" w-40">
            <button className={button_variants({ variant: 'warning', size: 'full' })}>Button</button>
         </div>
         <button className={button_variants({ variant: 'outline_primary' })}>Button</button>
         <button className={button_variants({ variant: 'outline_danger' })}>Button</button>
         <button className={button_variants({ variant: 'disable' })}>Button</button>


      </main>
   );
}
