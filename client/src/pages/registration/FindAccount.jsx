import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/saintstream-logo.svg";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { IoIosArrowBack } from "react-icons/io";
import { goBack } from "../../utils/goBack";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const FindAccount = () => {
  useDocumentTitle("Find My Account");
  const navigate = useNavigate();
  const { getStorage } = useLocalStorage();

  const [userEmail, setUserEmail] = useState();

  //get email to reset from storage and if none return user
  useEffect(() => {
    const user = getStorage(import.meta.env.VITE_FORGOT_PASSWORD);
    if (!user) {
      return navigate("/forgot_password");
    }
    setUserEmail(user.email);
  });

  return (
    <div className="justify-center min-h-screen overflow-y-scroll pb-4 500:bg-[#08070A] 500:flex 500:flex-col 500:items-center">
      <div className="flex flex-col bg-[#0D0C0F] h-screen 500:h-fit 500:rounded-3xl 500:py-6 500:w-5/6 500:border 500:border-[--dark-gray] max-w-[480px]">
        <nav className="flex flex-col px-[--px] py-4 500:hidden ">
          <button onClick={goBack} className="text-3xl w-fit">
            <IoIosArrowBack />
          </button>
        </nav>

        <>
          <div className="flex items-center justify-center px-[--px] 500:justify-between">
            <NavLink
              to={"/"}
              className="mt-6 items-center justify-center 500:mt-0"
            >
              <img src={logo} alt="" className="w-[160px]" />
            </NavLink>

            <button
              onClick={goBack}
              className={`hidden 500:block font-semibold py-2 px-4 rounded-xl border border-[--dark-gray]`}
            >
              Close
            </button>
          </div>
          <small className="mt-1 text-sm text-[--lighter-gray] text-center 500:text-start px-[--px]">
            Find My account
          </small>
        </>

        <div className="my-6 px-[--px] flex flex-col gap-4 text-md">
          <h1 className="font-bold tracking-wide text-center text-1xl 400:text-[25px] 500:text-[28px]">
            Your reset link is on the way!
          </h1>

          <p className="mt-4">
            If there’s a Saintstream account for <b>"{userEmail}"</b>, we’ll
            send you a reset link to create a new password.
          </p>

          <p>
            Finally, if you don’t receive an email within 15 minutes, please
            check your spam folder and adjust your filtering by allowing emails
            from Saintstream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindAccount;
