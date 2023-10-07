import { useSelector } from "react-redux";
import logo from "../../assets/saintstream-logo.svg";
import { IoIosArrowBack, IoMdEyeOff, IoMdEye } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { goBack } from "../../utils/goBack";
import { useSignUp } from "../../hooks/useSignUp";
import ToastWrapper from "../../components/toast/ToastWrapper";

const SignUp = () => {
  useDocumentTitle("Sign Up");

  const {
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePolicyChange,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    handleSubmit,
  } = useSignUp();

  const { email, policy, hidePassword, hideConfirmPassword } = useSelector(
    (state) => state.signUpSlice
  );

  return (
    <div className="justify-center min-h-screen pb-4 500:bg-[#08070A] 500:flex 500:flex-col 500:items-center">
      <div className="flex flex-col bg-[#0D0C0F] overflow-y-scroll h-screen 500:h-fit 500:rounded-3xl 500:py-6 500:w-5/6 500:border 500:border-[--dark-gray] max-w-[480px]">
        <nav className="flex flex-col px-[--px] py-4 500:hidden ">
          <button onClick={goBack} className="text-3xl w-fit">
            <IoIosArrowBack />
          </button>
        </nav>

        <div id="alert">
          <ToastWrapper />
        </div>

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
            Resister to enjoy the features
          </small>
        </>

        <form action="" className="flex flex-col px-[--px] justify-center mt-6">
          <>
            <label
              htmlFor="username"
              className="block text-xl font-bold mb-2 text-[--white]"
            >
              Username
            </label>
            <input
              onChange={handleUsernameChange}
              type="text"
              required
              id="username"
              className={`py-4 px-4 block w-full rounded-md text-md bg-[#08070a] border border-[--dark-gray] placeholder:text-[--dark-gray] outline-none`}
              placeholder="Username"
            />
          </>

          <>
            <label
              htmlFor="email"
              className="block text-xl font-bold mt-4 mb-2 text-[--white]"
            >
              Email
            </label>
            <input
              onChange={handleEmailChange}
              type="email"
              required
              id="email"
              value={email}
              className={`py-4 px-4 block w-full rounded-md text-md bg-[#08070a] border border-[--dark-gray] placeholder:text-[--dark-gray] outline-none`}
              placeholder="Email"
            />
          </>

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
                className={`absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-[--dark-gray] ${
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
                className={`absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-[--dark-gray] ${
                  !hideConfirmPassword && "text-[--green]"
                }`}
              >
                {hideConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </i>
            </div>
          </>

          <div className="flex mt-6 text-md text-[--light-gray] items-center gap-3">
            <label
              htmlFor="policy"
              className={`${
                policy && "border-0 "
              } flex border rounded-full overflow-hidden relative w-5 h-5 400:w-6 400:h-6`}
            >
              <input
                id="policy"
                type="checkbox"
                required
                onChange={handlePolicyChange}
                className={`hidden`}
              />

              <span
                className={`${
                  policy ? "scale-100" : "scale-0"
                } transition-all duration-150 ease-linear bg-[--green] w-full h-full rounded-full`}
              />

              <i
                className={`${
                  policy ? "scale-100" : "scale-0"
                } z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[--white] text-sm 400:text-md`}
              >
                <BsCheckLg />
              </i>
            </label>

            <span className="text-sm 400:text-md">
              I agree to our
              <NavLink className={`font-semibold text-[--white]`}>
                {" "}
                Privacy Policy {""}
              </NavLink>
              and
              <NavLink className={`font-semibold text-[--white]`}>
                {" "}
                Terms & Conditions
              </NavLink>
            </span>
          </div>

          <button
            id="submitBtn"
            onClick={handleSubmit}
            type="submit"
            className="mt-6 bg-[#ECF1F6] text-[#9CA4AB] font-semibold text-md rounded-md tracking-wider py-3 "
          >
            Continue
          </button>

          <small className="mt-8 text-center text-[#a3a9af] font-medium">
            Already have an account?{" "}
            <NavLink to={"/login"} className={`font-bold text-[--white]`}>
              Login
            </NavLink>
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
