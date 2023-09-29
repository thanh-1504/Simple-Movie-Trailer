import React from "react";
import Button from "../button/Button";

const MovieDetails = () => {
  return (
    <div className="relative z-50 top-[55px]  h-auto ">
      <div className="movie_detail flex max-w-[1280px]">
        <div className="flex movie_info bg-[#222222] ml-40 px-3 py-3 mt-5 ">
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
            <p className="text-white mt-8">Nội dung phim</p>
            <p className="text-white">
              Nhịp Đập Trái Tim kể về một ma cà rồng bán người tên là Seon
              Woo-hyeol, người đã không thể trở thành con người vào một ngày nào
              đó trong vòng 100 năm, và một người phụ nữ Joo In-hae, người không
              có một chút lễ nghi nào của con người, bắt đầu sống bên nhau và
              tìm thấy hơi ấm thật sự.
            </p>
          </div>
          <div className="ml-4 text-white">
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
        <div className="mt-8 ml-[20px]">
          <h2 className="text-[#cf966a] text-3xl">Phim sắp chiếu</h2>
          <p className="text-gray-500 mt-[-1px]">
            -------------------------------
          </p>
          <div className="flex flex-col">
            <div className="flex">
              <div className="w-[75px] h-[90px] mt-1">
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">
                <h3 className="text-white font-bold text-sm">
                  Quân Tâm Khó Đoán
                </h3>
                <p className="text-gray-300 text-xs">2023</p>
                <div className="flex items-center">
                  <span className="mr-[0.5px] text-white text-xs">5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    id="star"
                  >
                    <path
                      fill="#f8b84e"
                      d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                      color="#000"
                      overflow="visible"
                      transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[75px] h-[90px] mt-1">
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">
                <h3 className="text-white font-bold text-sm">
                  Quân Tâm Khó Đoán
                </h3>
                <p className="text-gray-300 text-xs">2023</p>
                <div className="flex items-center">
                  <span className="mr-[0.5px] text-white text-xs">5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    id="star"
                  >
                    <path
                      fill="#f8b84e"
                      d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                      color="#000"
                      overflow="visible"
                      transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[75px] h-[90px] mt-1">
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">
                <h3 className="text-white font-bold text-sm">
                  Quân Tâm Khó Đoán
                </h3>
                <p className="text-gray-300 text-xs">2023</p>
                <div className="flex items-center">
                  <span className="mr-[0.5px] text-white text-xs">5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    id="star"
                  >
                    <path
                      fill="#f8b84e"
                      d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                      color="#000"
                      overflow="visible"
                      transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[75px] h-[90px] mt-1">
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">
                <h3 className="text-white font-bold text-sm">
                  Quân Tâm Khó Đoán
                </h3>
                <p className="text-gray-300 text-xs">2023</p>
                <div className="flex items-center">
                  <span className="mr-[0.5px] text-white text-xs">5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    id="star"
                  >
                    <path
                      fill="#f8b84e"
                      d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                      color="#000"
                      overflow="visible"
                      transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
