import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo.svg"

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const OffCanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
   return (
      <>
         <div className={`offCanvas__info ${offCanvas ? "active" : ""}`}>
            <div className="offCanvas__close-icon menu-close">
               <button onClick={() => setOffCanvas(false)}><i className="far fa-window-close"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
               <Link href="/"><Image src={logo} alt="Logo" /></Link>
            </div>
            <div className="offCanvas__side-info mb-30">
               <div className="contact-list mb-30">
                  <h4>Office Address</h4>
                  <p> <br /> Hamilton Ontario</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Phone Number</h4>
                  <p>+1(365-356-3255)</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Email Address</h4>
                  <p>info@unifiedmastermovers.com</p>
               </div>
            </div>
            <div className="offCanvas__social-icon mt-30">
               <Link href="#"><i className="fab fa-facebook-f"></i></Link>
               <Link href="#"><i className="fab fa-twitter"></i></Link>
               <Link href="#"><i className="fab fa-google-plus-g"></i></Link>
               <Link href="#"><i className="fab fa-instagram"></i></Link>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offCanvas__overly ${offCanvas ? "active" : ""}`}></div>
      </>
   )
}

export default OffCanvas
