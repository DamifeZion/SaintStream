import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Navbar from "../components/navbar/Navbar";
import HomeCard from "../components/HomeCard";
import FAQ from "../components/faq/FAQ";
import InputGroup from "../components/InputGroup";
import Footer from "../components/footer/Footer";

const Home = () => {
  useDocumentTitle("Saintstream");
  return (
    <div className="relative">
      <header className="relative bg-homeHeroBg bg-no-repeat bg-cover bg-center border-0 border-b-8 border-[--dark-gray] px-[--px]">
        <span className="absolute inset-0 bg-homeHeroGradient z-[1] w-full h-full" />

        <div className="relative z-50">
          <Navbar contCn={"backdrop-blur-none bg-transparent"} />

          <div className="flex relative flex-col items-center justify-center text-center font-inter px-[--px] overflow-hidden min-h-[350px] h-[70vh] max-h-[650px] 700:h-[60vh] 1000:h-[86.5vh] 1280:h-[82vh]">
            <h1
              id="template"
              className="text-[33px] font-black leading-snug 500:text-[31px] 1000:text-[45px] 1200:text-5xl"
            >
              Unlimited movies, TV shows, and more
            </h1>

            <h3 className="mt-4 text-center text-[17px] w-10/12  leading-snug 600:text-xl 1000:text-2xl 1280:mt-6">
              Watch anywhere. Watch anytime.
            </h3>

            <h4 className="mt-6 text-xl w-9/12 leading-snug 400:w-10/12 500:w-11/12 500:text-[17px] 500:leading-relaxed 700:w-10/12 1000:text-1xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>

            <div className="flex items-center justify-center mt-5 w-[80%] max-w-[630px] 500:mt-4 500:w-[88%] 800:w-[75%] 900:w-[68%] 1000:w-[65%] 1100:w-[61%] 1200:w-[56%] 1280:w-[52%]">
              <InputGroup />
            </div>
          </div>
        </div>
      </header>

      <section className="flex flex-col">
        <div
          id="template"
          className="flex flex-col items-center justify-center mt-12 px-[--px] 800:mt-20 900:mt-24 1000:mt-20"
        >
          <h5 className="text-xl text-[--green] uppercase font-medium text-center 500:font-bold 800:text-md 1280:text-[19px]">
            It is All for free
          </h5>

          <h1 className="mt-2 capitalize font-inter text-center text-[26px] font-medium 500:mt-4 500:text-4xl 500:font-bold 600:mt-5 600:font-extrabold 600:text-[40px] 800:text-[33px] 800:font-bold 800:mt-3 1000:mt-6 1100:text-5xl 1200:mt-5">
            All the TV you love
          </h1>

          <p className="mt-2 text-center leading-tight text-lg 500:mt-4 500:font-medium 500:leading-normal 600:mt-5 600:text-1xl 600:leading-snug 600:font-normal 800:text-lg 800:w-10/12 800:mt-3 1000:mt-4 1000:text-lg 1000:w-[75%] 1100:w-[63%] 1100:text-lg 1100:mt-8 1200:w-[57%] 1280:w-[62%]">
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, kids shows, and more on Saintstream.
          </p>
        </div>

        <div
          id="template"
          className="mt-16 grid grid-cols-2 gap-1 px-[--px] 1100:gap-6 1100:mt-14 500:gap-3 800:gap-6 800:px-[50px] 900:place-self-center 900:px-[70px] 900:w-[87%] 1000:w-[77%] 1100:px-[120px] 1100:w-[70%] 1200:grid-cols-4 1280:w-full"
        >
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>

        <div
          id="fAQ"
          className="flex flex-col border-t-8 border-[--dark-gray] mt-16 pt-16 600:mt-20 800:mt-28 1100:mt-28 1280:pt-20 w-full"
        >
          <div
            id="template"
            className="px-[20px] 600:px-[30px] 1000:px-[30px] 1280:w-10/12 1280:place-self-center"
          >
            <FAQ />
          </div>

          <div
            id="template"
            className="flex flex-col items-center  justify-center mt-12"
          >
            <h4 className="text-xl w-9/12 leading-snug text-center 400:w-10/12 500:text-[17px] 700:w-9/12 1000:text-1xl 1100:w-full">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>

            <div className="flex items-center justify-center mt-5 w-[80%] 500:w-[85%] 800:w-[73%] 900:w-[66%] 1000:w-[62%] 1100:w-[57%] 1100:mt-4 1200:w-[52%] 1280:w-[49%]">
              <InputGroup />
            </div>
          </div>
        </div>

        <div className=" mt-14 border-t-8 border-[--dark-gray] py-6">
          <footer id="template" className="px-[--px]">
            <Footer />
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Home;
