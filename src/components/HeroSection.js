import { GoRows } from "react-icons/go";
import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    TR: "+90",
    GB: "+44",
    US: "+1",
    FR: "+33",
    DE: "+49",
    IT: "+39",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-20">
      <Slider {...settings}>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 z-30  left-1/2 -translate-x-1/2 h-full ">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde kapında
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className=" text-center text-primary-brand-color font-semibold mb-4 ">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex gap-x-2 ">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className="flag-select"
            />
            <label className="flex-1 relative block">
              <input required  className="w-full  outline-none h-14 rounded border-2 text-sm border-gray-300 px-4 bg-white transition-colors pt-2 hover:border-primary-brand-color focus:border-primary-brand-color peer  " />
              <span className=" absolute top-0 left-0 h-full text-gray-500 text-sm px-4 flex items-center transition-all peer-focus:h-7 peer-focus:text-xs peer-focus:text-primary-brand-color cursor-pointer peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-brand-color">
                Telefon numarası
              </span>
            </label>
          </div>
          <button className="w-full transition bg-brand-yellow text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color text-sm font-semibold rounded-lg h-12 mt-4">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}
