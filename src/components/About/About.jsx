import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between  gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/** ====== about img ======= */}
          <div className="relative 3-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src="/assets/images/about.png" alt="" className="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
              <img src="/assets/images/about-card.png" alt="" className="" />
            </div>
          </div>

          {/**======== about content ========== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              For 30 Years in row, U.S. news & World Report has recognized us as
              one of the best publics hospitals in the Nation and #1 in Texas.
            </p>
            <p className="text_para mt-[30px]">
              Our best is something we strive for each day, caring for out
              patinets-not looking back at what we accomplished but towards what
              we can do tomorrow. Providing the best.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
