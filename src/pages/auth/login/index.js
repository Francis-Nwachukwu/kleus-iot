import { useState } from "react";
import InputField from "shared/InputField";
import CustomButton from "shared/Button";
import ButtonAnimation from "shared/ButtonAmination";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Logo } from "assets/images";
// import { login } from "appstate/features/auth/authActions";

const Login = () => {
  const { isLoading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [viewPassword, setViewPassword] = useState(true);

  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(login({ email, password })).then((data) => {
    //   if (data?.payload?.status === 200) {
    //     navigate("/admin/users");
    //   }
    // });

    navigate("/admin/home/index");
  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-2/5 h-full max-md:hidden bg-white flex justify-center items-center p-4">
        <img src={Logo} alt="logo" />
      </div>
      <div className="w-3/5 max-md:w-full h-full flex flex-col justify-center items-center bg-[#2F4C67] max-md:bg-white">
        <div className="hidden max-md:flex justify-center items-center w-[150px] h-[150px]">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="h-fit w-3/5 max-lg:w-4/5 shadow-sm flex justify-center items-center">
          <div className="w-full flex flex-col p-16 max-md:p-10 max-sm:p-6 rounded-lg">
            <div className="mb-12">
              <p className="text-white max-md:text-[#2F4C67] text-center font-bold text-[40px] max-lg:text-[30px] max-md:text-[20px]">
                Welcome back!👋
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="mb-8 max-md:mb-4">
                <InputField
                  labelStyle="text-white max-md:text-[#2F4C67]"
                  name={"email"}
                  type={"email"}
                  label="Email"
                  required={true}
                  placeholder={"Enter your email"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="relative mb-8 max-md:mb-4">
                <InputField
                  labelStyle="text-white max-md:text-[#2F4C67]"
                  type={`${viewPassword ? "password" : "text"}`}
                  name="password"
                  label="Password"
                  placeholder={"Enter your password"}
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {!viewPassword ? (
                  <FaEyeSlash
                    onClick={() => setViewPassword(true)}
                    className="absolute bottom-3 right-4 cursor-pointer text-[16px]"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setViewPassword(false)}
                    className="absolute bottom-3 right-4 cursor-pointer text-[16px]"
                  />
                )}
              </div>
              <div className="w-full mb-2">
                <CustomButton
                  className={"!bg-redDevil !min-w-full"}
                  type="submit"
                >
                  {isLoading ? <ButtonAnimation /> : "Sign in"}
                </CustomButton>
              </div>
              <div className="flex justify-between items-center mb-8 max-md:mb-4">
                <div>
                  <p className="cursor-pointer text-textBlue text-[14px] max-md:text-[12px]">
                    Forgot Password?
                  </p>
                </div>
                <div>
                  <Link to={"/register"}>
                    <p className="underline cursor-pointer text-textBlue text-[14px] max-md:text-[12px]">
                      Register
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
