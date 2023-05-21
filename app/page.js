
import { button_variants, text_variants, input_variants } from "@/components/custom/custom";
import Input from "@/components/forms/Input";
import Input_file from "@/components/forms/Input_file";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
            Homepage
            <h2>Colors</h2>
            <button className={button_variants()}>Button</button>
            <button className={button_variants({ variant: "danger" })}>
                Button<span>T</span>
            </button>
            <button className={button_variants({ variant: "success" })}>Button</button>
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
            <p className={text_variants({ variant: "inter_32_bold" })}>Inter-bold-32</p>
            <p className={text_variants({ variant: "inter_24_bold" })}>Inter-bold-24</p>
            <p className={text_variants({ variant: "inter_22_bold" })}>Inter-bold-22</p>
            <p className={text_variants({ variant: "inter_20_bold" })}>Inter-bold-20</p>
            <p className={text_variants({ variant: "inter_32_semiBold" })}>Inter-semiBold-32</p>
            <p className={text_variants({ variant: "inter_24_semiBold" })}>Inter-semiBold-24</p>
            <p className={text_variants({ variant: "inter_32_reguler" })}>Inter-reguler-32</p>
            <p className={text_variants({ variant: "inter_24_reguler" })}>Inter-reguler-24</p>
            <p className={text_variants({ variant: "inter_22_reguler" })}>Inter-reguler-22</p>

            <p>Input</p>
            <Input className={input_variants()} type="text" placeholder="Masukan judul artikel" />
            <Input className={input_variants({ variant: "search" })} type="text" placeholder="Cari nama dokter (eq. Fauzan Hakim)" />
            <Input className={input_variants({ variant: "dokter_login" })} type="text" placeholder="Username" />
            <textarea className={input_variants({ variant: "textarea" })} placeholder="Comment" />
            <Input className={input_variants({ variant: "chat_text" })} type="text" />
            <textarea className={input_variants({ variant: "chat_textarea" })} placeholder="Comment" />


            <Input_file />

        </main>
    )
}
