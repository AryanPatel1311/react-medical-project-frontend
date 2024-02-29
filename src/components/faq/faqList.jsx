import { faqs } from "../../assets/data/faqs";
import Faqitem from "./faqitem";

const faqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <Faqitem item={item} key={index} />
      ))}
    </ul>
  );
};

export default faqList;
