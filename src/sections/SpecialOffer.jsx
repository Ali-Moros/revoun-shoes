import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2
          dir="rtl"
          className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg"
        >
          خاصة{" "}
          <span className="text-dark-yellow inline-block mt-3 mr-2">عروض</span>
        </h2>
        <p dir="rtl" className="mt-4 lg:max-w-lg info-text">
          لفترة محدودة فقط، نقدم لك خصم 50% على جميع أنواع الأحذية في متجرنا.
          سواء كنت تحتاج إلى أحذية رياضية أو كاجوال أو رسمية، لدينا ما يناسبك من
          بين مئات العلامات التجارية والموديلات المختلفة. أحذيتنا مصنوعة من أجود
          المواد وبأفضل الأسعار في السوق.
        </p>
        <p dir="rtl" className="mt-6 lg:max-w-lg info-text">
          أحذيتنا تضمن لك الراحة والأناقة والثقة في كل خطوة تخطوها. أحذيتنا
          تناسب جميع الأعمار والأذواق والميزانيات.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="تسوق الآن" iconURL={arrowRight} />
          <Button
            label="إعرف أكثر"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
