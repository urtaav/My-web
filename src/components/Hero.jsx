import hero from "../assets/Hero.png";
import facebook from "../assets/icon_facebook.png";
import twitter from "../assets/icon_x.png";
import instagram from "../assets/icon_instagram.png";
import linkedin from "../assets/icon_linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There,
              <br />
              I&apos;m Uriel <span className="text-cyan-500">Tapia</span>
            </h1>
            <p className="md:text-2xl text-xl- mb-4">
              I’m a passionate frontend developer
            </p>
            <p className="mb-4">
            With 5 years of experience in modern technologies such as Angular, PrimeNG, NGRX, React, CSS, HTML, and JavaScript, I love creating intuitive, functional, and visually appealing user interfaces.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1ce77brlnrAQlrisu_VPJme0zBNlPvrR2/view?usp=sharing"
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[60vh] h-80" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-2xl"> */}
        {/* <img src={facebook} alt="" className="w-20" /> */}
        {/* <img src={instagram} alt="" className="w-20" /> */}
        {/* <img src={twitter} alt="" className="w-20" /> */}
        {/* <img src={linkedin} alt="" className="w-20" /> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
