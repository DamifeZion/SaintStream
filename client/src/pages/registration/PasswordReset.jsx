import { useSelector } from "react-redux";
import logo from "../../assets/saintstream-logo.svg";
import { IoIosArrowBack, IoMdEyeOff, IoMdEye } from "react-icons/io";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { goBack } from "../../utils/goBack";
import { usePasswordReset } from "../../hooks/usePasswordReset";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import LoadingSmall from "../../components/loading/LoadingSmall";

const PasswordReset = () => {
  useDocumentTitle("Password Reset");
  const { id } = useParams();
  const navigate = useNavigate();
  const { hidePassword, hideConfirmPassword, isLoading } = useSelector(
    (state) => state.passwordResetSlice,
  );

  const {
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    handleSubmit,
  } = usePasswordReset(id);

  const { getStorage } = useLocalStorage();
  //Ensure that this page is only accesible from the forgot password referrer
  useEffect(() => {
    const isThereForgottenPasswordEmail = () => {
      const forgotPasswordEmail = getStorage(
        import.meta.env.VITE_FORGOT_PASSWORD,
      );

      if (!forgotPasswordEmail) {
        return navigate("/login");
      }
    };

    isThereForgottenPasswordEmail();
  }, [navigate, getStorage]);

  return (
    <div className="justify-center min-h-screen bg-[--black] 400:py-6 500:bg-[#08070A] 500:flex 500:flex-col 500:items-center">
      <div className="flex flex-col bg-[#0D0C0F] overflow-y-scroll h-screen 400:py-6 500:h-fit 500:rounded-3xl 500:py-6 500:w-5/6 500:border 500:border-[--dark-gray] max-w-[480px]">
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
          <small className="mt-1 text-sm text-[--lighter-gray] text-center 500:text-start px-[--px] mb-6">
            Reset your password
          </small>
        </>

        {isLoading && (
          <span
            id="loading-psuedo-element"
            className="absolute top-0 left-0 z-10 w-full h-full"
          />
        )}

        <form action="" className="flex flex-col px-[--px] justify-center mt-4">
          <>
            <label
              htmlFor="password"
              className="block text-xl font-bold mt-4 mb-2 text-[--white]"
            >
              Password
            </label>

            <div className="relative">
              <input
                onChange={handlePasswordChange}
                type={`${hidePassword ? "password" : "text"}`}
                required
                id="password"
                className={`py-4 pl-4 pr-12 block w-full rounded-md text-md bg-[#08070a] border border-[--dark-gray] placeholder:text-[--dark-gray] outline-none`}
                placeholder="Password"
              />

              <i
                onClick={handlePasswordToggle}
                className={`cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-[--dark-gray] ${
                  !hidePassword && "text-[--green]"
                }`}
              >
                {hidePassword ? <IoMdEyeOff /> : <IoMdEye />}
              </i>
            </div>
          </>

          <>
            <label
              htmlFor="confirm-password"
              className="block text-xl font-bold mt-4 mb-2 text-[--white]"
            >
              Password
            </label>

            <div className="relative">
              <input
                onChange={handleConfirmPasswordChange}
                type={`${hideConfirmPassword ? "password" : "text"}`}
                required
                id="confirm-password"
                className={`py-4 pl-4 pr-12 block w-full rounded-md text-md bg-[#08070a] border border-[--dark-gray] placeholder:text-[--dark-gray] outline-none`}
                placeholder="confirm Password"
              />

              <i
                onClick={handleConfirmPasswordToggle}
                className={`cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-[--dark-gray] ${
                  !hideConfirmPassword && "text-[--green]"
                }`}
              >
                {hideConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </i>
            </div>
          </>

          <button
            onClick={handleSubmit}
            id="submitBtn"
            type="submit"
            className={`relative mt-6 bg-[#ECF1F6] text-[#9CA4AB] font-semibold text-md rounded-md tracking-wider h-12 cursor-pointer`}
          >
            {isLoading ? (
              <span className="top-0 left-0 w-full h-full rounded-md bg-[#ECF1F6] flex items-center justify-center">
                <LoadingSmall />
              </span>
            ) : (
              "Continue"
            )}
          </button>

          <small className="mt-8 text-center text-[#a3a9af] font-medium">
            Need to log in? Visit the{" "}
            <NavLink to={"/login"} className={`font-bold text-[--white]`}>
              Login
            </NavLink>{" "}
            Page.
          </small>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
