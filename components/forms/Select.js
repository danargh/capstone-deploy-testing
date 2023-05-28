import { input_variants } from "../custom/custom"

const Select = ({ options }) => {
    return (
        <>

            <select id="countries" className={input_variants({ variant: "contact_us" })}>

                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

        </>
    )
}

export default Select