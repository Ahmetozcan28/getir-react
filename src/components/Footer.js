export default function Footer() {
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto ">
        <div className="flex justify-between pt-10 pb-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className=" text-primary-brand-color text-xl">
                Getir'i indir!
              </h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
              </a>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-4">
              <h6 className=" text-primary-brand-color text-xl">
                Getir'i keşfet
              </h6>
              <a href="#">
                <p>Hakkımızda</p>
              </a>
              <a href="#">
                <p>Teknoloji Kariyerleri</p>
              </a>
              <a href="#">
                <p>İletişim</p>
              </a>
              <a href="#">
                <p>Sosyal Sorumluluk Projeleri</p>
              </a>
              <a href="#">
                <p> İletişim Sosyal Sorumluluk Projeleri </p>
              </a>{" "}
              <a href="#">
                <p> Basın Bültenleri </p>
              </a>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-4">
              <h6 className=" text-primary-brand-color text-xl">
                Yardıma mı ihtiyacın var?
              </h6>
              <a href="#">
                <p> Sıkça Sorulan Sorular</p>
              </a>
              <a href="#">
                <p>Gizlilik Politikası</p>
              </a>
              <a href="#">
                <p>Kullanım Koşulları</p>
              </a>
              <a href="#">
                <p>Çerez Politikası</p>
              </a>
              <a href="#">
                <p>İşlem Rehberi</p>
              </a>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-4">
              <h6 className=" text-primary-brand-color text-xl">
                İş Ortağımız Ol
              </h6>
              <a href="#">
                <p> Bayimiz Olun</p>
              </a>
              <a href="#">
                <p>Deponu Kirala</p>
              </a>
              <a href="#">
                <p>GetirYemek Restoranı Ol</p>
              </a>
              <a href="#">
                <p>GetirÇarşı İşletmesi Ol</p>
              </a>
              <a href="#">
                <p>Zincir Restoranlar</p>
              </a>
            </nav>
          </section>
          <section>
            <nav className="grid gap-y-4">
              <a href="#" className="p-4 shadow-md border border-b-gray-50 b rounded-lg">
                <figure className="w-20 h-24">
                  <img className="w-full h-full" src="https://cdn.getir.com/getirweb-images/common/etbis.png"></img>
                </figure>
              </a>
            </nav>
          </section>
        </div>
      </div>
    </div>
  );
}
