import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingAnimation from "../cssAnimation/LoadingAnimation";
import { useNavigate } from "react-router-dom";

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
  terms: yup.bool().required("You must accept our terms"),
});
const HandleLayoutAuth = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors);
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        reset({ email: "", password: "" });
        console.log(isValid);
        if (isValid) navigate("/");
      }, 4000);
    });
  };
  const [type, setType] = useState(true);
  const terms = watch("terms");

  return (
    <div>
      <div className="relative form_wrapper">
        <div className="form__wrapper-background">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/5900db94-decb-4941-87d2-a54eaf165ecc/VN-vi-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
        </div>
        <div className="form_body    absolute  z-10  top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <div className="form_content">
            <div className="p-[70px] form_content-wrapper ">
              <h1 className="text-[32px] font-medium text-[#fff] mb-5">
                {type ? "Log In" : "Register"}
              </h1>
              <form
                action=""
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
                {errors?.password && (
                  <div className="max-w-[316px] mb-2 text-xs text-red-500 ">
                    {errors.password.message}
                  </div>
                )}
                <Button
                  type="submit"
                  className={`bg-red-600 rounded font-bold w-[316px] h-[50px] ${
                    type === false ? "mb-2" : "mb-4"
                  }`}
                >
                  {isSubmitting ? (
                    <LoadingAnimation></LoadingAnimation>
                  ) : (
                    `${type ? "Login" : "Register"}`
                  )}
                </Button>
                {type === false && (
                  <div className="flex mt-2 ">
                    <input
                      {...register("terms")}
                      id="terms"
                      className="mr-2"
                      type="checkbox"
                    />
                    <label htmlFor="terms">Do you accept our terms ?</label>
                  </div>
                )}
                {type === false && terms === false ? (
                  <div className="max-w-[316px] my-2 text-xs text-red-500">
                    You must accept our terms
                  </div>
                ) : null}
                <p>
                  {type ? (
                    <span>Do not have an account ?</span>
                  ) : (
                    <p className="inline-block mt-3">
                      You already have an account ?
                    </p>
                  )}
                  <span
                    onClick={() => setType(!type)}
                    className="ml-2 font-bold cursor-pointer"
                  >
                    {type ? "Register now" : "Login"}
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
const AuthForm = () => {
  return <HandleLayoutAuth></HandleLayoutAuth>;
};

export default AuthForm;
