import React from "react";
import Button from "../button/Button";

const MovieDetails = () => {
  return (
    <div className="relative z-50 top-[55px] bg-[#222222] h-auto ">
      <div className="movie_detail">
        <div className="flex detail  movie_info max-w-[1280px] px-[100px] py-6">
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
                    "absolute left-[50%] translate-x-[-50%] border border-white top-[50%] translate-y-[-50%] "
                  }
                >
                  Trailer
                </Button>
              </div>
            </div>
          </div>
          <div className="ml-4 text-white mt-20">
            <h2 className="mb-4 text-3xl text-red-400">Nhiệm vụ bất khả khi</h2>
            <p className="mb-1 text-sm text-textColor">
              Trạng thái: <span className="ml-2 text-white">Trailer</span>
            </p>
            <p className="mb-1 text-sm text-textColor">
              Đạo diễn: <span className="ml-2 text-white">Mr Tèo</span>
            </p>
            <p className="mb-1 text-sm text-textColor">
              Năm sản xuất: <span className="ml-2 text-white">Mr Tèo</span>{" "}
            </p>
            <p className="mb-1 text-sm text-textColor">
              Thể loại: <span className="ml-2 text-white">Mr Tèo</span>
            </p>
            <p className="mb-1 text-sm text-textColor">
              Diễn viên: <span className="ml-2 text-white">Mr Tèo</span>
            </p>
            <p className="mb-1 text-sm text-textColor">
              Đánh giá: <span className="ml-2 text-white">4 / 5</span>
            </p>
          </div>
        </div>
        <div className="coming">
          <h2>Phim sắp chiếu</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
