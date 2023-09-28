import React from "react";
import FaqItem from "./FaqItem";
import { faqItemData } from "../../data/faqItemData";
import InputGroup from "../InputGroup";

const FAQ = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="capitalize text-center font-inter font-black text-3xl leading-snug 600:text-[33px] 1000:text-5xl">
        Frequently Asked Questions
      </h1>

      <main className="flex flex-col mt-6 gap-1 800:gap-[6px] 1000:mt-8">
        {faqItemData.map((data, index) => (
          <FaqItem key={index} data={data} />
        ))}
      </main>
    </div>
  );
};

export default FAQ;
