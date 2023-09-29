import React from "react";
import Button from "../button/Button";

const MovieDetails = () => {
  return (
    <div className="relative z-50 top-[55px] bg-[#222222] h-auto ">
      <div className="movie_detail">
        <div className="flex  movie_info max-w-[1280px] px-[100px] py-6">
          <div>
            <div className="relative max-w-[300px]">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className=" w-[300px] h-[400px] object-cover"
              />
              <div className="absolute bottom-0 bg-black-rgba w-[300px] h-12">
                <Button
                  className={
                    "absolute left-[50%] translate-x-[-50%] border border-white h-[36px] w-[100px] top-[50%] translate-y-[-50%] "
                  }
                >
                  Trailer
                </Button>
              </div>
            </div>
          </div>
          <div className="ml-4 text-white">
            <h2 className="mb-4 text-3xl text-red-400">Nhiệm vụ bất khả khi</h2>
            <p className="mb-1 text-textColor">
              Trạng thái: <span className="text-white">Trailer</span>
            </p>
            <p className="mb-1 text-textColor">
              Đạo diễn: <span className="text-white">Mr Tèo</span>
            </p>
            <p>Năm sản xuất: 2023</p>
            <p>Thể loại: Hành động</p>
            <p>Diễn viên: Nsdadasda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
