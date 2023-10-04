import { handleForgotPasswordChange } from "../../utils/forgotPasswordUtil/handleForgotPasswordChange";
import logo from "../../assets/saintstream-logo.svg";
import { colorBorderIfValue } from "../../utils/forgotPasswordUtil/colorBorderIfValue";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../utils/goBack";
import { ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  //handles input change utils
  colorBorderIfValue();
  useDocumentTitle("Forgot Password");
  const navigate = useNavigate();

  const { handleEmailChange } = handleForgotPasswordChange();

  const handleSubmit = () => {
    navigate("/find_account");
  };

  return (
    <div className="justify-center min-h-screen  overflow-y-scroll 500:bg-[#08070A] 500:flex 500:flex-col 500:items-center">
      <div className="flex flex-col bg-[#0D0C0F] h-screen 500:h-fit 500:rounded-3xl 500:py-14 500:w-5/6 500:border 500:border-[--dark-gray] max-w-[480px]">
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
          <small className="mt-3 place-self-center text-[--lighter-gray] text-center px-[--px] 400:w-10/12  500:mt-6">
            Enter the email address you use for Saintstream and we'll send you a
            password reset link.
          </small>
        </>

        <div id="alert">
          <ToastContainer />
        </div>

        <form action="" className="flex flex-col px-[--px] justify-center mt-6">
          <>
            <label
              htmlFor="email"
              className="block text-xl font-bold mb-2 text-[--white]"
            >
              Email
            </label>
            <input
              onChange={handleEmailChange}
              type="email"
              required
              id="email"
              className={`py-4 px-4 block w-full rounded-md text-md bg-[#08070a] border border-[--dark-gray] placeholder:text-[--dark-gray] outline-none`}
              placeholder="Enter Email"
            />
          </>

          <button
            id="submitBtn"
            type="submit"
            onClick={handleSubmit}
            className="mt-6 bg-[#ECF1F6] text-[#9CA4AB] font-semibold text-md rounded-md tracking-wider py-3 500:mt-10"
          >
            Send me a reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
