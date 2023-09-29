import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  emailOrPhoneNumber: yup.string(),
  // .required("Please enter a valid email or phone number"),
  // .min(6, "Password must contain at least 6 characters")
  // .max(50, "Password can only contain up to 12 characters"),
  password: yup
    .number()
    .required("Your password must contain between 4 and 20 characters.")
    .min(4)
    .max(20),
});
const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <div className="relative form_wrapper">
        <div className="form__wrapper-background">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/5900db94-decb-4941-87d2-a54eaf165ecc/VN-vi-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
        </div>
        <div className="form_body  bg-white absolute  z-10  top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <div className="form_content">
            <div className="p-[70px] form_content-wrapper ">
              <h1 className="text-[32px] font-medium text-[#fff] mb-5">
                Log In
              </h1>
              <form
                action=""
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  className=" mb-3 max-w-[316px] py-[13px] px-2"
                  type="text"
                  name="emailOrPhoneNumber"
                  {...register("emailOrPhoneNumber")}
                  placeholder="Email or Phone Number"
                ></Input>
                {errors?.emailOrPhoneNumber ? (
                  <div className="text-red-500 text-xs mb-1">
                    {errors?.emailOrPhoneNumber?.message}
                  </div>
                ) : null}
                <Input
                  name="password"
                  {...register("password")}
                  className=" mb-3  max-w-[316px] py-[13px] px-2"
                  type="password"
                  placeholder="Password"
                ></Input>
                {errors?.password && (
                  <div className="text-red-500 text-xs mb-2 ">
                    {errors.password.message}
                  </div>
                )}

                <Button className="bg-red-600 rounded font-bold w-[316px] h-[50px] mb-4 ">
                  Log In
                </Button>
                <p>
                  Do not have an account ?
                  <span className="ml-2 font-bold cursor-pointer">
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

export default AuthForm;
