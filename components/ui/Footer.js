import Image from "next/image";

const Footer = () => {
   return (
      <>
         <footer className="bg-web-green-300  text-white flex justify-center">
            <div className=" font-poppins text-[20px] max-w-[1440px]">
               <div className="font-poppins text-[24px] flex gap-[61px] justify-center font-bold py-7">
                  <div>About</div>
                  <div>Contact Us</div>
                  <div>Privacy Policy</div>
                  <div>Term and Condition</div>
               </div>
               <div className="flex gap-10 justify-center py-28">
                  <div>
                     <div className="text-[24px] font-[700] leading-normal">EXPLORE PROPERTIES</div>
                     <ul className="font-[600] leading-relaxed">
                        <li>Home</li>
                        <li>Artikel</li>
                        <li>Docter</li>
                     </ul>
                  </div>
                  <div>
                     <div className="text-[24px]  font-[700] leading-normal">OVERVIEW</div>
                     <ul className="font-[600] leading-relaxed">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                     </ul>
                  </div>
                  <div className="w-[270px]">
                     <div className="text-[24px]  font-[700] leading-normal">COMMUNITY</div>
                     <ul className="font-[600] leading-relaxed">
                        <li>Community central</li>
                        <li>Help</li>
                     </ul>
                  </div>
                  <div>
                     <div className="text-[24px]  font-[700] leading-normal">PREVENT! APPS</div>
                     <p className="font-[600] leading-relaxed">
                        Download aplikasi Prevent di play sotre secara gratis.
                     </p>
                     <div className="flex items-center gap-3 mt-3">
                        <Image
                           src="/assets/logo/logo-p-green.png"
                           alt="Logo"
                           width={90}
                           height={83}
                        />
                        <div className="flex flex-col gap-3">
                           <button>
                              <Image
                                 src="/assets/images/google-play.png"
                                 alt="Logo"
                                 width={120}
                                 height={48}
                              />
                           </button>
                           <button>
                              <Image
                                 src="/assets/images/app-store.png"
                                 alt="Logo"
                                 width={120}
                                 height={48}
                              />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="text-center py-10">
                  <p className="text-[25px]">&copy; Copyright by PREVENT!</p>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
