export default function Radio() {
    return (
        <>
            <div className="flex items-center mb-4">
                <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500 "
                />
                <label
                    htmlFor="default-radio-1"
                    className="text-inter ml-3 text-sm font-bold text-neutral-900 "
                >
                    Default radio
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500 "
                />
                <label
                    htmlFor="default-radio-1"
                    className="text-inter ml-3 text-sm font-bold text-neutral-900 "
                >
                    Default radio
                </label>
            </div>


        </>
    )
}