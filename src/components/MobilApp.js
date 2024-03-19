export default function MobileApp() {
  return (
    <div className="flex justify-between items-center md:container mx-auto bg-primary-brand-color md:mb-10   md:rounded-lg text-white md:mt-10 bg-mobile-card ">
      <div className="flex flex-col gap-y-4 md:p-16 p-8">
        <h3 className=" font-bold md:text-3xl text-2xl ">Getir'i indir!</h3>
        <p className="font-semibold md:text-xl tracking-tighter ">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br />
          getirelim.
        </p>
        <nav className="flex flex-col gap-y-3 md:flex-row md:gap-x-3 md:mt-5">
          <a href="#" className=" hover:scale-105 transition">
            <img className="" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
          </a>
          <a href="#" className=" hover:scale-105 transition">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
          </a>
          <a href="#" className=" hover:scale-105 transition">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
          </a>
        </nav>
      </div>
      <picture className="pt-10 hidden md:block">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"></img>
      </picture>
    </div>
  );
}
