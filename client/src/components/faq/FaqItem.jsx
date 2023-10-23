import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { faqSlice } from "../../features/slices/faq/faqSlice";
import { AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ data }) => {
  const dispatch = useDispatch();
  const { selectedIndex, showDropdown } = useSelector(
    (state) => state.faqSlice,
  );
  //check if the index in the slice is equal to the item index
  const selectedItem = selectedIndex === data.id;

  const showFaqDropdown = () => {
    dispatch(faqSlice.actions.reset());

    dispatch(faqSlice.actions.setSelectedIndex(data.id));
    dispatch(faqSlice.actions.setShowDropdown());
    // dispatch(faqSlice.actions.setSelectedIndex(null))
  };

  return (
    <section className="overflow-hidden">
      <div
        onClick={showFaqDropdown}
        className="flex items-center bg-[--dark-gray] hover:bg-[--dark-gray-light] transition-bg ease duration-150 rounded-sm cursor-pointer select-none h-fit py-5 px-6 text-xl font-medium 400:py-6 1000:text-2xl 1000:font-normal"
      >
        <h2 className={`${!data.title && "hidden"}`}>{data.title}</h2>

        <AiOutlinePlus
          strokeWidth={20}
          className={`${
            selectedItem && showDropdown && "rotate-45 "
          } transition-rotate duration-150 ease-linear ml-auto text-1xl 1000:text-4xl`}
        />
      </div>

      <div
        id="faqItemDrawer"
        className={` transition-all ease-linear duration-200 text-xl mt-1 px-6 bg-[--dark-gray] flex flex-col gap-4 ${
          selectedItem && showDropdown ? "h-auto py-4" : "h-0 py-0"
        }`}
      >
        <h4 className={`${!data.body1 && "hidden"}`}>{data.body1}</h4>
        <h4 className={`${!data.body2 && "hidden"} mt-4`}>{data.body2}</h4>
      </div>
    </section>
  );
};

export default FaqItem;
