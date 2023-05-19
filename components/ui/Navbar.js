const Navbar = () => {
    return (
        <>
            <nav className=" bg-green-500">
                <div className="max-w-[1440px] flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#home">
                        <h1>LOGO</h1>
                    </a>
                    <div>
                        <ul className="flex flex-row gap-[61px]  text-white font-bold">
                            <li><a href="">Home</a> </li>
                            <li><a href=""> Artikel</a></li>
                            <li >
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button" className="flex flex-row">Dokter<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y">
                                    <ul aria-labelledby="dropdownDefaultButton">
                                        <li>Detail Dokter</li>
                                        <li>Apakah Kamu Dokter?</li>
                                    </ul>
                                </div>
                            </li>
                            <li>Dokter Area</li>
                        </ul>
                    </div>
                    <div>
                        <p>T</p>
                    </div>
                </div>




            </nav>
        </>
    )
}

export default Navbar;