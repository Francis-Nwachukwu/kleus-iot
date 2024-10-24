import { useState } from "react";
import InputField from "shared/InputField";
import Button from "shared/Button";
import ButtonAnimation from "shared/ButtonAmination";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
// import { login } from "appstate/features/auth/authActions";

const Login = () => {
  const { isLoading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [viewPassword, setViewPassword] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(login({ email, password })).then((data) => {
    //   if (data?.payload?.status === 200) {
    //     navigate("/admin/users");
    //   }
    // });

    navigate("/admin/dashboard");
  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-2/5 h-full max-md:hidden bg-[#2F4C67] flex justify-center items-center p-4">
        <p>Emini Platform</p>
      </div>
      <div className="w-3/5 max-md:w-full h-fit flex justify-center">
        <div className="w-3/5 max-md:w-4/5 flex flex-col p-16 max-md:p-10 max-sm:p-6 border border-[#ccc] rounded-lg">
          <div className="mb-12">
            <p className="text-textBlue text-center font-bold text-[40px] max-lg:text-[30px] max-md:text-[20px]">
              Welcome back!👋
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-8 max-md:mb-4">
              <InputField
                name={"email"}
                type={"text"}
                label="Email"
                required={true}
                placeholder={"Enter your email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="relative mb-8 max-md:mb-4">
              <InputField
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
              <Button className={"!bg-redDevil !min-w-full"} type="submit">
                {isLoading ? <ButtonAnimation /> : "Sign in"}
              </Button>
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
  );
};

export default Login;
