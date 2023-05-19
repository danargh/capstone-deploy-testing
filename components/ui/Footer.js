const Footer = () => {
    return (
        <>
            <footer className="bg-green-500 text-white flex justify-center">
                <div className=" max-w-[1440px]  px-[106px]">
                    <div className="flex gap-[61px] justify-center font-bold py-7  text-2xl">
                        <div>About</div>
                        <div>Contact Us</div>
                        <div>Privacy Policy</div>
                        <div>Term and Condition</div>
                    </div>
                    <div className="flex gap-10 justify-center py-28">
                        <div>
                            <div className=" font-extrabold  text-2xl ">EXPLORE PROPERTIES</div>
                            <ul className="text-xl/[39px]    font-medium">
                                <li>Home</li>
                                <li>Artikel</li>
                                <li>Docter</li>

                            </ul>
                        </div>
                        <div>
                            <div className=" font-extrabold  text-2xl ">OVERVIEW</div>
                            <ul className="text-xl/[39px]    font-medium">
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Terms Of Use</li>
                                <li>Privacy Policy</li>


                            </ul>
                        </div>
                        <div className="w-[270px]">
                            <div className=" font-extrabold  text-2xl ">COMMUNITY</div>
                            <ul className="text-xl/[39px]    font-medium">
                                <li>Community central</li>
                                <li>Help</li>


                            </ul>
                        </div>
                        <div>
                            <div className=" font-extrabold  text-2xl ">PREVENT! APPS</div>
                            <p className="text-xl/[39px] font-medium">Download aplikasi Prevent di play sotre secara gratis.</p>
                        </div>
                    </div>
                    <div className="text-center py-10">
                        <p className=" text-[25px]">&copy; Copyright by PREVENT!</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer