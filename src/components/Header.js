import { GoGlobe } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { ReactComponent as GetirYemekLogo } from "getir-svg/getir-yemek.svg";
import { ReactComponent as GetirBüyükLogo } from "getir-svg/getir-büyük.svg";
import { ReactComponent as Getir } from "getir-svg/getir.svg";
export default function Header() {
  return (
    <div className=" bg-brand-color z-50 sticky top-0 ">
      <div className="container mx-auto h-7 lg:h-11 flex items-center justify-between">
        <div className="flex">
          <a href="#" className="scale-[0.65] lg:scale-75">
            <Getir />
          </a>
          <a href="#" className=" opacity-70 scale-[0.65] lg:scale-75  ">
            <GetirYemekLogo />
          </a>
          <a href="#" className=" opacity-70 scale-[0.65] lg:scale-75">
            <GetirBüyükLogo />
          </a>
        </div>
        <nav className="flex lg:gap-x-8  gap-x-4 font-semibold text-xs lg:text-sm">
          <a
            href="#"
            className="flex items-center  text-white text-opacity-80 hover:text-opacity-100"
          >
            <GoGlobe size={20} className="mr-2 hidden md:block" />
            <span className="hidden lg:block">Türkçe (TR)</span>
          </a>
          <a
            href="#"
            className=" flex items-center text-white text-opacity-80 hover:text-opacity-100 "
          >
            <FaUser size={20} className="mr-2 hidden md:block" />
            <span className="hidden lg:block"> Giriş Yap</span>
          </a>
          <a
            href="#"
            className="flex items-center text-white text-opacity-80 hover:text-opacity-100 "
          >
            <FaUserPlus size={20} className="mr-2 hidden md:block" />
            <span className="hidden lg:block">Kayıt Ol</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
