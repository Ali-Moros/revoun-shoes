import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex - justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          dir="rtl"
          className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg"
        >
          نحن نقدم لك{" "}
          <span className="text-dark-yellow inline-block mt-3 mr-2">
            منتجات
          </span>
          عالية
          <span className="text-dark-yellow inline-block mt-3 mr-2">
            الجودة
          </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          نحن نقدم لك مجموعة رائعة من الأحذية ذات الجودة العالية، التي صنعت من
          أفضل المواد وبأحدث التصاميم. سواء كنت تبحث عن أحذية شتوية أو رسمية أو
          بوتات, لدينا ما تحتاجه وأكثر. أحذيتنا تناسب جميع المناسبات والمواسم
          والأذواق. أحذيتنا تضمن لك الراحة والمرونة والثبات في كل خطوة تخطوها.
          أحذيتنا تعكس شخصيتك وأسلوبك بألوانها الزاهية وتفاصيلها الجذابة.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          ا تفوت هذه الفرصة الذهبية للحصول على أحذية ذات جودة عالية بأسعار
          معقولة. قم بتفقد منتجاتنا أو متجرنا القريب منك واختر الحذاء الذي
          يناسبك. سارع بالطلب قبل نفاد الكمية!
        </p>
        <div className="mt-11">
          <Button label="تفاصيل أكثر" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
