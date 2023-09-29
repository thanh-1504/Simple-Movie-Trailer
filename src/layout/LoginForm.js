import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../button/Button";
import LoadingAnimation from "../cssAnimation/LoadingAnimation";
import { tmdb } from "../config";

const schema = yup.object({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("This field is required!")
    .max(50),
  password: yup
    .string()
    .required("This field is required!")
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be at most 20 characters"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Check if the login form is successful, then redirect to the home page.
  const onSubmit = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        reset({ email: "", password: "" });
        if (isValid) {
          JSON.stringify(sessionStorage.setItem("formState", true));
          navigate("/");
        }
      }, 4000);
    });
  };
  return (
    <div>
      <div className="relative form_wrapper">
        <div className="form__wrapper-background">
          <img src={tmdb.imgNetFlix()} alt="" />
        </div>
        <div className="form_body absolute  z-10  top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <div className="form_content">
            <div className="p-[70px] form_content-wrapper ">
              <h1 className="text-[32px] font-medium text-[#fff] mb-5">
                Log In
              </h1>
              <form
                // action=""
                className="flex flex-col select-none"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className=" mb-3 max-w-[316px] py-[13px] px-2 rounded-lg outline-none"
                  type="text"
                  name="email"
                  {...register("email")}
                  placeholder="Email"
                ></input>
                {errors?.email ? (
                  <div className="max-w-[316px] mb-1 text-xs text-red-500">
                    {errors.email.message}
                  </div>
                ) : null}
                <input
                  name="password"
                  {...register("password")}
                  className=" mb-3  max-w-[316px] py-[13px] px-2 rounded-lg outline-none"
                  type="password"
                  placeholder="Password"
                ></input>
                {errors?.password ? (
                  <div className="max-w-[316px] mb-1 text-xs text-red-500">
                    {errors.password.message}
                  </div>
                ) : null}
                <Button
                  type="submit"
                  className={`bg-red-600 rounded font-bold w-[316px] h-[50px] mb-2 
                 `}
                >
                  {isSubmitting ? (
                    <LoadingAnimation></LoadingAnimation>
                  ) : (
                    "Login"
                  )}
                </Button>
                <p className="text-white">
                  <span>Do not have an account ?</span>
                  <span
                    onClick={() => navigate("/register")}
                    className="ml-2 font-bold cursor-pointer"
                  >
                    Register now
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
