export default function MobileApp() {
  return (
    <div className="flex justify-between items-center container mx-auto bg-primary-brand-color mb-10   rounded-lg text-white mt-10 bg-mobile-card ">
      <div className="flex flex-col gap-y-4 p-16">
        <h3 className=" font-bold text-3xl">Getir'i indir!</h3>
        <p className="font-semibold text-xl tracking-tighter">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br />
          getirelim.
        </p>
        <nav className="flex gap-x-3 mt-5">
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
      <picture className="pt-10 ">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"></img>
      </picture>
    </div>
  );
}
