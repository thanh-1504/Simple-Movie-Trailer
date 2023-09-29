import React from "react";

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
          <div className="form_content ">
            <h1>Đăng Nhập</h1>
            <form action="">
              <input type="text" placeholder="Email hoặc số điện thoại" />
              <input type="password" name="" id="" placeholder="Mật Khẩu" />
              <button>Đăng Nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
