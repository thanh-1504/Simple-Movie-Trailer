import React from "react";
import HomePage from "./Pages/HomePage";
import Button from "./button/Button";
import Header from "./layout/Header";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <HomePage></HomePage>

      <section className="movie-desc ">
        {/* <div className="mt-8">
          <p className="mb-4 text-base font-bold text-white">Story Line</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            iusto explicabo aliquam vero aspernatur quidem earum quibusdam
            doloremque illum autem facilis sed fugiat delectus sint veniam
            repellendus, deserunt eveniet vitae!
          </p>
          <div className="cast">
            <p className="mt-6 mb-4 text-base font-bold text-white">Top Cast</p>
            <div className="flex gap-x-6">
              <div className="flex items-center">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />

                <p className="ml-2 text-sm text-white">Nick Prese</p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <section className="mt-8 movie-list">
        <p className="mb-4 text-xl font-bold text-white">
          Popular Movies for you
        </p>
        <div className="flex items-center gap-x-4 ">
          <div className="cursor-pointer movie-card ">
            <img
              className="rounded-xl w-[200px] h-[150px] hover:scale-[1.07] ease-linear duration-200"
              src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <p className="my-3 text-sm font-bold text-white">
              Spider Man: No Way Home 2
            </p>
            <div className="flex items-center">
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
              <span className="mx-2 text-xs font-bold text-white">4.6</span>
              <span className="text-xs text-gray-500">| Action - Movie</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 movie-footer">
        <div className="">
          <p className="mb-6 text-xl font-bold text-center text-white">
            Our platform is trusted by millions & features best updated movies
            all around the world.
          </p>
          <div className="flex items-center justify-center cursor-pointer gap-x-3">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Ebene 1"
              viewBox="0 0 1024 1024"
              id="facebook-logo-2019"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              ></path>
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              ></path>
            </svg>
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="youtube"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path
                  fill="#F44336"
                  d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                ></path>
                <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 16 16"
              id="twitter"
            >
              <path
                fill="#03A9F4"
                d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 28.87 28.87"
              id="instagram"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="-1.84"
                  x2="32.16"
                  y1="30.47"
                  y2="-3.03"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fed576"></stop>
                  <stop offset=".26" stop-color="#f47133"></stop>
                  <stop offset=".61" stop-color="#bc3081"></stop>
                  <stop offset="1" stop-color="#4c63d2"></stop>
                </linearGradient>
              </defs>
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <rect
                    width="28.87"
                    height="28.87"
                    fill="url(#a)"
                    rx="6.48"
                    ry="6.48"
                  ></rect>
                  <g data-name="<Group>">
                    <path
                      fill="#fff"
                      d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                      data-name="<Compound Path>"
                    ></path>
                    <path
                      fill="#fff"
                      d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                      data-name="<Compound Path>"
                    ></path>
                    <path
                      fill="#fff"
                      d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                      data-name="<Path>"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
