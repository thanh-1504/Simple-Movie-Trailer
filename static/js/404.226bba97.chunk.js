"use strict";(self.webpackChunkmovie_web=self.webpackChunkmovie_web||[]).push([[404],{7664:function(e,t,s){var a=s(2791),r=s(184);t.Z=function(e){var t=e.type,s=e.onClick,i=e.children,n=e.className;return(0,r.jsx)(a.Fragment,{children:(0,r.jsx)("button",{onClick:s,className:"bg-black text-white w-[140px] h-[46px] rounded-lg font-bold ".concat(n),type:t,children:i})})}},7950:function(e,t,s){var a=s(2791),r=s(7689),i=s(4887),n=s(3197),l=s(184);t.Z=function(e){var t=e.item,s=(0,r.s0)(),c=t.title,o=t.vote_average,d=t.poster_path,x=t.id,m=(0,i.ZP)(n.Ec.getMovieDetail("",x),n._i),h=m.data,u=(m.error,(null===h||void 0===h?void 0:h.genres)||[]);return(0,l.jsxs)("div",{onClick:function(){return s("/movieDetail/".concat(x))},className:"cursor-pointer select-none movie-card",children:[(0,l.jsx)("img",{className:"rounded-xl w-[200px] h-[150px] hover:scale-[1.07] ease-linear duration-200 object-contain mb-3",src:n.Ec.imgOriginal(d),alt:""}),(0,l.jsx)("p",{className:"mt-2 mb-1 text-sm font-bold text-white max-w-[200px] truncate  ",children:c}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",id:"star",children:(0,l.jsx)("path",{fill:"#f8b84e",d:"M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z",color:"#000",overflow:"visible",transform:"matrix(.04574 0 0 .04561 68.85 -40.34)"})}),(0,l.jsx)("span",{className:"mx-2 text-xs font-bold text-white",children:Math.floor(o)}),u.length>0?u.slice(0,2).map((function(e){return(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)("div",{className:"flex items-center justify-center mr-[0.8px]",children:[(0,l.jsx)("span",{className:"text-gray-500 h-[28px]",children:"|"}),(0,l.jsx)("span",{className:"mx-[3px] text-xs text-gray-500",children:e.name})]})})})):(0,l.jsx)("span",{className:"text-xs text-gray-500 ",children:"Updating"})]})]})}},9404:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var a=s(2791),r=s(7664),i=s(4887),n=s(3197),l=s(7689),c=s(8113),o=s(184),d=function(e){var t=e.children;return(0,o.jsxs)("div",{class:"relative z-10 modal_open","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[(0,o.jsx)("div",{class:"fixed inset-0 bg-black bg-opacity-75 transition-opacity"}),(0,o.jsx)("div",{class:"fixed inset-0 z-10 overflow-y-auto",children:(0,o.jsx)("div",{class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 modal_outside",children:(0,o.jsx)("div",{class:" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ",children:t})})})]})},x=s(9439);var m=function(){var e=(0,a.useState)(!1),t=(0,x.Z)(e,2),s=t[0],r=t[1];return{show:s,toggle:function(){r(!s)},setShow:r}},h=s(8340),u=s(7950),p=s(744),f=function(){var e=(0,i.ZP)(n.Ec.getMovieList("upcoming"),n._i),t=e.data;e.error;if(!t)return null;var s=(null===t||void 0===t?void 0:t.results)||[];return(0,o.jsxs)("div",{className:"mt-8 ml-[20px]",children:[(0,o.jsx)("h2",{className:"text-[#cf966a] text-3xl",children:"Coming Soon"}),(0,o.jsx)("p",{className:"text-gray-500 mt-[-1px]",children:"-------------------------------"}),(0,o.jsx)("div",{className:"flex flex-col",children:s.length>0&&s.slice(0,6).map((function(e){return(0,o.jsx)(v,{dataItem:e},e.id)}))})]})},v=function(e){var t=e.dataItem,s=(0,l.s0)(),a=t.title,r=t.poster_path,i=t.vote_average,c=t.release_date,d=t.id;return(0,o.jsxs)("div",{onClick:function(){return s("/".concat(d))},className:"flex mb-3 cursor-pointer",children:[(0,o.jsx)("div",{className:"w-[75px] h-[90px] mt-1 flex-shrink-0",children:(0,o.jsx)("img",{src:n.Ec.img500(r),alt:"",className:"object-cover w-full h-full hover:scale-[1.07] ease-linear duration-200"})}),(0,o.jsxs)("div",{className:"ml-2",children:[(0,o.jsx)("h3",{className:"mb-1 text-sm font-bold text-white",children:a}),(0,o.jsx)("p",{className:"mb-1 text-xs text-gray-300",children:new Date(c).getFullYear()}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("span",{className:"mr-[0.5px] text-white text-xs",children:i}),(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",id:"star",children:(0,o.jsx)("path",{fill:"#f8b84e",d:"M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z",color:"#000",overflow:"visible",transform:"matrix(.04574 0 0 .04561 68.85 -40.34)"})})]})]})]})},g=function(e){var t=e.type,s=e.dataItem,x=(0,l.UO)().movieID,h=m(),p=h.show,v=h.toggle,g=h.setShow,j=(0,i.ZP)(n.Ec.getMovieDetail(t,x),n._i),b=j.data;j.error;if(!b)return null;if("credits"===t){var N=b||[],y=N.crew,C=N.cast,k=s||[],_=k.poster_path,M=k.genres,Z=k.release_date,z=k.title,E=k.vote_average,V=y.filter((function(e){return"Director"===e.job}));return(0,o.jsxs)("div",{className:"movie_detail flex max-w-[1280px] max-h-[450px]",children:[(0,o.jsxs)("div",{className:"flex movie_info bg-[#222222] px-3 py-3 mt-5 w-[987px] ",children:[(0,o.jsx)("div",{className:"h-[400px]",children:(0,o.jsxs)("div",{className:" min-w-[300px]",children:[(0,o.jsx)("img",{src:n.Ec.imgWidth500(_),alt:"",className:" w-[300px] h-[400px] object-cover"}),(0,o.jsx)("div",{className:"relative top-[-48px] bottom-0 bg-black-rgba w-[300px] h-12 max-w-[300px]",children:(0,o.jsx)(r.Z,{onClick:function(){return v()},className:"absolute left-[50%] translate-x-[-50%] border border-white top-[50%] translate-y-[-50%] ",children:"Trailer"})})]})}),p&&(0,o.jsx)(d,{children:(0,o.jsx)(w,{})}),window.addEventListener("click",(function(e){e.target.matches(".modal_outside")&&g(!p)})),(0,o.jsxs)("div",{className:"ml-4 text-white",children:[(0,o.jsx)("h2",{className:"mb-4 text-3xl text-red-400 mr-2 min-w-[281px]",children:z}),(0,o.jsxs)("p",{className:"mb-1 text-sm text-textColor",children:["Status: ",(0,o.jsx)("span",{className:"ml-2 text-white",children:"Trailer"})]}),(0,o.jsxs)("p",{className:"mb-1 text-sm text-textColor",children:["Directors:",(0,o.jsx)("span",{className:"ml-2 text-white",children:V.map((function(e){return e.name}))})]}),(0,o.jsxs)("p",{className:"mb-1 text-sm text-textColor",children:["Publishing Year:",(0,o.jsx)("span",{className:"ml-2 text-white",children:new Date(Z).getFullYear()})]}),(0,o.jsxs)("p",{className:"mb-1 text-sm text-textColor",children:["Genre:",(0,o.jsx)("span",{className:"ml-2 text-white",children:M.map((function(e,t){return t===M.length-1?(0,o.jsx)("span",{children:"".concat(e.name)}):(0,o.jsx)("span",{children:"".concat(e.name,", ")})}))})]}),(0,o.jsxs)("p",{className:"mb-1 text-sm text-textColor ",children:["Casts:",(0,o.jsx)("span",{className:"ml-2 text-white ",children:C.slice(0,6).map((function(e,t){return 5===t?(0,o.jsx)("span",{children:"".concat(e.name)}):(0,o.jsx)("span",{className:"mr-[0.5px]",children:"".concat(e.name,",  ")})}))})]}),(0,o.jsxs)("p",{className:"flex items-center mb-1 text-sm text-textColor",children:["User Score:",(0,o.jsx)("span",{className:"ml-2 mr-1 text-white",children:Math.ceil(E)}),(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",id:"star",children:(0,o.jsx)("path",{fill:"#f8b84e",d:"M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z",color:"#000",overflow:"visible",transform:"matrix(.04574 0 0 .04561 68.85 -40.34)"})})]})]})]}),(0,o.jsx)(f,{})]})}if("video"===t){var F=b.results;return F?(0,o.jsx)(a.Fragment,{children:F.length>0&&F.slice(0,1).map((function(e){return(0,o.jsx)("iframe",{width:"840",height:"460",src:"https://www.youtube.com/embed/".concat(e.key),title:"Video Trailer Youtube",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},e.id)}))}):null}if("similar"===t){if(!b)return null;var S=b.results;return(0,o.jsxs)("section",{className:"mt-[140px]",children:[(0,o.jsx)("p",{className:"mb-4 text-xl font-bold text-white",children:"Similar Movies for you"}),(0,o.jsx)("div",{className:"flex items-center gap-x-4 max-w-[870px] ",children:S.length>0&&(0,o.jsx)(c.tq,{grabCursor:!0,spaceBetween:12,slidesPerView:"auto",children:S&&S.map((function(e){return(0,o.jsx)(c.o5,{className:"swiper-movie-list",children:(0,o.jsx)(u.Z,{item:e})},e.id)}))})})]})}if("desc"===t){var L=s.overview;return(0,o.jsxs)("div",{className:"bg-[#282828] max-w-[875px] mt-4 p-3  ",children:[(0,o.jsx)("p",{className:"text-white uppercase text=gray-500 text-sm mb-2",children:"Overview"}),(0,o.jsx)("p",{className:"text-[13px] leading-5 text-gray-400",children:L})]})}},w=function(){var e=(0,l.UO)().movieID,t=(0,i.ZP)(n.Ec.getMovieDetail("videos",e),n._i),s=t.data;t.error;if(!s)return null;var r=s.results;return r?(0,o.jsx)(a.Fragment,{children:r.length>0&&r.slice(0,1).map((function(e){return(0,o.jsx)("iframe",{width:"840",height:"460",src:n.Ec.getMovieYoutube(e.key),title:"Video Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},e.id)}))}):null},j=function(){var e=(0,l.UO)().movieID,t=(0,i.ZP)(n.Ec.getMovieDetail("",e),n._i),s=t.data;t.error;if(!s)return null;var a=s;return(0,o.jsxs)("div",{className:"h-auto",children:[(0,o.jsx)(h.Z,{}),(0,o.jsxs)("div",{className:"pl-[30px]",children:[(0,o.jsx)(g,{type:"credits",dataItem:a}),(0,o.jsx)(g,{type:"desc",dataItem:s}),(0,o.jsx)(g,{type:"similar"}),(0,o.jsx)(p.Z,{})]})]})}},3197:function(e,t,s){s.d(t,{Ec:function(){return i},_i:function(){return r}});var a="api_key=8b3c7ef30b0460b1ce585fb7c8f7c4c0",r=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},i={getMovieList:function(e){return"https://api.themoviedb.org/3/movie/".concat(e,"?").concat(a)},getMovieDetail:function(e,t){return""!==e?"https://api.themoviedb.org/3/movie/".concat(t,"/").concat(e,"?").concat(a):"https://api.themoviedb.org/3/movie/".concat(t,"?").concat(a)},getMovieVideo:function(e,t){return"https://api.themoviedb.org/3/movie/".concat(t,"/").concat(e,"?").concat(a)},getMovieYoutube:function(e){return"https://www.youtube.com/embed/".concat(e)},imgOriginal:function(e){return"https://image.tmdb.org/t/p/original".concat(e)},img500:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)},imgWidth500:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e,"?").concat(a)},imgNetFlix:function(){return"https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/5900db94-decb-4941-87d2-a54eaf165ecc/VN-vi-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"},imgPageUpdating:function(){return"https://th.bing.com/th/id/R.d444a087458127e634df23982c85ef5d?rik=lpQU07ymgdZ1Yg&riu=http%3a%2f%2fwww.acvorganization.com%2fwebsite-update.jpg&ehk=COkmI2azW18r%2fuvEb1PZxNk2fb7tS3ov66vQB0Ec%2bVo%3d&risl=&pid=ImgRaw&r=0"}}},744:function(e,t,s){s(2791);var a=s(184);t.Z=function(){return(0,a.jsx)("section",{className:"mt-16 movie-footer",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"mb-6 text-xl font-bold text-center text-white",children:"Our platform is trusted by millions & features best updated movies all around the world."}),(0,a.jsxs)("div",{className:"flex items-center justify-center cursor-pointer gap-x-3",children:[(0,a.jsxs)("svg",{className:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg","data-name":"Ebene 1",viewBox:"0 0 1024 1024",id:"facebook-logo-2019",children:[(0,a.jsx)("path",{fill:"#1877f2",d:"M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"}),(0,a.jsx)("path",{fill:"#fff",d:"M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"})]}),(0,a.jsx)("svg",{className:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",id:"youtube",children:(0,a.jsxs)("g",{fillRule:"evenodd",clipRule:"evenodd",children:[(0,a.jsx)("path",{fill:"#F44336",d:"M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"}),(0,a.jsx)("path",{fill:"#FAFAFA",d:"M6 11.5v-6l5 3z"})]})}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-8 h-8",viewBox:"0 0 16 16",id:"twitter",children:(0,a.jsx)("path",{fill:"#03A9F4",d:"M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"})}),(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-8 h-8",viewBox:"0 0 28.87 28.87",id:"instagram",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"a",x1:"-1.84",x2:"32.16",y1:"30.47",y2:"-3.03",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0",stopColor:"#fed576"}),(0,a.jsx)("stop",{offset:".26",stopColor:"#f47133"}),(0,a.jsx)("stop",{offset:".61",stopColor:"#bc3081"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4c63d2"})]})}),(0,a.jsx)("g",{"data-name":"Layer 2",children:(0,a.jsxs)("g",{"data-name":"Layer 1",children:[(0,a.jsx)("rect",{width:"28.87",height:"28.87",fill:"url(#a)",rx:"6.48",ry:"6.48"}),(0,a.jsxs)("g",{"data-name":"<Group>",children:[(0,a.jsx)("path",{fill:"#fff",d:"M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z","data-name":"<Compound Path>"}),(0,a.jsx)("path",{fill:"#fff",d:"M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z","data-name":"<Compound Path>"}),(0,a.jsx)("path",{fill:"#fff",d:"M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z","data-name":"<Path>"})]})]})})]})]})]})})}},8340:function(e,t,s){var a=s(2791),r=s(7689),i=s(1087),n=s(184);t.Z=function(){var e=(0,r.s0)(),t=JSON.parse(sessionStorage.getItem("formState"))||null,s=(0,a.useRef)();return(0,a.useEffect)((function(){window.addEventListener("mousewheel",(function(e){if(s.current){var t=e.deltaY;t>0&&s.current.classList.add("show_header--up"),t<0&&(s.current.classList.remove("show_header--up"),s.current.classList.add("show_header--down"))}}))}),[]),(0,n.jsx)(a.Fragment,{children:(0,n.jsxs)("div",{ref:s,className:"header flex font-bold items-center justify-center translate-y-[-2%] text-white sticky z-9999 w-full  h-[50px] bg-black pl-10 ",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.OL,{to:"/",className:"mr-6 cursor-pointer home",onClick:function(){return e("/")},children:"Home"}),(0,n.jsx)("div",{className:"bar",children:" "})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{onClick:function(){return e("/pageUpdating")},className:"mr-8 cursor-pointer movie_realease",children:"Movie Realease"}),(0,n.jsx)("div",{className:"bar"})]}),(0,n.jsxs)("div",{className:"flex items-center ml-auto mr-8 cursor-pointer",children:[(0,n.jsx)("div",{onClick:function(){return e("/log_in")}}),t?(0,n.jsx)("div",{children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",class:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})})}):(0,n.jsx)("div",{onClick:function(){return e("/log_in")},children:"Log In"})]})]})})}}}]);
//# sourceMappingURL=404.226bba97.chunk.js.map