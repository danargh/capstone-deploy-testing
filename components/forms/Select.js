import { input_variants } from "../custom/custom"

const Select = () => {
    return (
        <>

            <select
                id="countries"
                className={input_variants({ variant: "contact_us" })}
            >
                <option defaultValue="">Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>

        </>
    )
}

export default Select