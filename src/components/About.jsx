import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import Primeng from "../assets/primeng.webp";
import Docker from "../assets/docker.webp";
import NGRX from "../assets/ngrx.svg";
const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I&apos;m Uriel Tapia
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-vol-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Throughout the day, I participate in team meetings to review
                  progress, discuss technical challenges, and coordinate
                  efforts. I enjoy collaborating with other developers and
                  learning from them, as there is always something new I can
                  apply to my work. The work is primarily done using Angular,
                  where I leverage tools like PrimeNG to optimize component
                  design and NGRX to manage application state. I also spend time
                  fine-tuning details in CSS, HTML, and JavaScript, ensuring
                  everything runs smoothly and looks visually appealing.
                </p>
                {/* <img
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                /> */}
              </div>
              <div className="border border-cyan-600 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-sm shadow-cyan-300">
                <h3 className="text-2xl font-semibold text-cyan-800">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Primeng} alt="" className="w-10" />
                    <span className="font-semibold">PrimenNg</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    {/* <img src="https://angular.dev/" alt="" className="w-10" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 223 236"
                      width="32"
                      className="angular-logo"
                    >
                      <g clipPath="url(#a)">
                        <path
                          fill="url(#b)"
                          d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
                        ></path>
                        <path
                          fill="url(#c)"
                          d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
                        ></path>
                      </g>
                      <defs>
                        <linearGradient
                          id="b"
                          x1="49.009"
                          x2="225.829"
                          y1="213.75"
                          y2="129.722"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E40035"></stop>
                          <stop offset=".24" stopColor="#F60A48"></stop>
                          <stop offset=".352" stopColor="#F20755"></stop>
                          <stop offset=".494" stopColor="#DC087D"></stop>
                          <stop offset=".745" stopColor="#9717E7"></stop>
                          <stop offset="1" stopColor="#6C00F5"></stop>
                        </linearGradient>
                        <linearGradient
                          id="c"
                          x1="41.025"
                          x2="156.741"
                          y1="28.344"
                          y2="160.344"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF31D9"></stop>
                          <stop
                            offset="1"
                            stopColor="#FF5BE1"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h223v236H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-semibold">Angular</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={Docker} alt="" className="w-10" />
                    <span className="font-semibold">Docker</span>
                  </div>
                  <div className="border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-cyan-300">
                    <img src={NGRX} alt="" className="w-9" />
                    <span className="font-semibold">Ngrx</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              I’m a big football fan and a loyal supporter of FC Barcelona. I’m
              ready to take on new challenges and contribute my skills to
              develop projects that make an impact. 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
