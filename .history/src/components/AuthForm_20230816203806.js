import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";

const AuthForm = () => {
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
                Đăng Nhập
              </h1>
              <form action="" className="flex flex-col">
                <Input
                  className=" mb-4 max-w-[316px] py-[13px] px-2"
                  type="text"
                  placeholder="Email hoặc số điện thoại"
                ></Input>
                <Input
                  className=" mb-5  max-w-[316px] py-[13px] px-2"
                  type="password"
                  placeholder="Mật Khẩu"
                ></Input>

                <Button className="bg-red-600 rounded font-bold w-[316px] h-[50px] mb-4 ">
                  Đăng Nhập
                </Button>
                <p>
                  Bạn chưa có tài khoản ?
                  <span className="cursor-pointer">Đăng ký ngay</span>
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
