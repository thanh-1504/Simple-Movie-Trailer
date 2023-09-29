import React from "react";
import Button from "../button/Button";

const MovieDetails = () => {
  return (
    <div className="relative z-50 top-[55px] bg-white h-auto ">
      <div className="movie_detail">
        <div className="flex items-center movie_info">
          <div>
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <div className="h-8">
              <Button>Trailer</Button>
            </div>
          </div>
          <div>
            <p>Nhiệm vụ bất khả khi</p>
            <p>Trạng thái: Trailer</p>
            <p>Đạo diễn: Mr Tèo</p>
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
