
import React, { useEffect } from "react";

import { BsCashCoin } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { SiAmazonapigateway } from "react-icons/si";
import { GiExecutionerHood } from "react-icons/gi";
import { SiPowerbi } from "react-icons/si";
import { FaStairs } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import "../css/homePage/About.css";

import vt1 from "../assets/Vactors/work-progress-concept-illustration/5097611.jpg";
import img1 from "../assets/Images/handsome-bearded-businessman-rubbing-hands-having-deal.jpg";
import img2 from "../assets/Images/young-bearded-man-with-striped-shirt.jpg";
import img3 from "../assets/Images/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg";
import desktop from '../assets/Images/laptop.png';
import mobileport from '../assets/Images/mobile.png';
function AboutUs() {




  return (
    <section className="about_us">
      <div className="about_img  ">
       <div className="about_txt">
       <h2 className="  ps-5 ms-5 ">About us </h2>
          <span className="about_img_text tm1">Home <a href="#" className="abt">About US</a></span>
          <span className="about_img_text tm2"> <MdOutlineKeyboardArrowRight/></span>
          <span className="about_img_text  tm3"><a href="#" className="abt">About US</a></span>
      
       </div>
      </div>
      {/* --------------------core Ativities---------------------------- */}
      <div className="row  core_activities_sec padding_side pt-5">
        <div className="col-12 col-lg-5  pt-5 chart-container">
          <img
            src={desktop}
           height="auto"
          //  width="250px"
            className="desktop"
            alt=""
          />
          <img src={mobileport} width="80px" className="mobile" height="auto"  alt="" />
        </div>
        <div className="col-12 col-lg-7 pt-5 ps-4 ">
          <h2 className="about_txt2  ">Core Activities</h2>
          <h3 className="line"></h3>
          <h5 className="  txt_min pt-3">

            Arham Group is Founded in 2010 to become India’s best Equity Broking
            House and the Largest Distribution Network
          </h5>
          <p className="about_pera pt-3">
            ARHAM is a Share Broking Company offering a comprehensive range of
            financial services including institutional and retail brokerage,
            online trading, depository services, IPOs, and insurance.
          </p>
          <p className="about_pera">
            ARHAM Group, founded 15 years ago, focuses on diverse talent and
            client focus, leveraging extensive knowledge in the share market to
            become a powerful entity.
          </p>
          <button className="btn1">Discover More </button>
        </div>
      </div>

      {/* ----------------------------mission vision----------------------------------- */}

      <div className="row w-75 text-center  mx-auto  mission_vision ">

        {/* <h2 className="">Providing you A World of Financial Planning & Company Accounting Services</h2> */}

        <div className="col-12 col-md-6 pt-5">
          <div className="mb-5">
            <h3 className="about_txt2 ">Our Mission</h3>
            <h3 className="line mx-auto"></h3>
          </div>
          <div className="pic_overlay  ">
            <img
              className=" image2 "
              src="https://finacia.radiantthemes.com/wp-content/uploads/2018/09/about-us-version-one-expert-three.png"

              alt=""/>

            <div className="pic_hover"></div>
          </div>

          <div className="  mx-auto mt-5">

            <h5 className="txt_min">One-to-One Service</h5>

            <p className="about_pera">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              commodo libero finibus eleifend nibh.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 pt-5">
          <div className="mb-5">

            <h3 className="about_txt2  ">Our Vision</h3>

            <h3 className="line  mx-auto"></h3>
          </div>
          <div className="pic_overlay ">
            <img
              className="  image2 "
              src="https://finacia.radiantthemes.com/wp-content/uploads/2018/09/about-us-version-one-expert-two.png"

              alt=""/>

            <div className="pic_hover"></div>
          </div>

          <div className=" mx-auto mt-5">

            <h5 className="txt_min">Business Analytic Graph</h5>
            <p className="about_pera ">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              commodo libero finibus eleifend nibh.
            </p>
          </div>
        </div>
      </div>

      {/* -----------------------why choose arham section----neww----------------------------- */}

      {/* -----------------------why choose arham section--------------------------------- */}

      <div className=" text-center why_choose_arham   text-center  ">

        <div className="">
          <h2 className="about_txt2">Why Choose Arham? </h2>
          <h3 className="line mx-auto "></h3>
        </div>
        <p className=" about_pera pt-4">
          ALWAYS FIRST WITH INNOVATIVE TRADINGTECHNOLOGY, ANALYTICS,EDUCATIONAND
          CUSTOMERSERVICE SINCE 2010
        </p>

        <div className="row animation">
        <div className="d-flex flex-wrap col-6 m_top">
          {/* -------------------------------- */}
          <div className="about-item row col-12 text-start cover  item1  m_top">
            <div className="col-1 mt-2">

              <span className="about_icons">
                <BsCashCoin />
              </span>
            </div>

            <div className="col-10  ms-5 shadow rounded ">

              <h6>No HiddenCost</h6>
              <p className="about_pera">
                Our APIs come with absolutely no hidden cost.
              </p>
            </div>
          </div>
          {/* -------------------------------- */}

          <div className="about-item row col-12   text-start  cover m_top">
            <div className="col-1 mt-2">

              <span className="about_icons">
                <GiReceiveMoney />
              </span>
            </div>

            <div className="col-10 col-md-10 ms-5 shadow rounded">

              <h6>Own Strategies</h6>
              <p className="about_pera">
                Helpful for traders looking for programming their own strategies{" "}
              </p>
            </div>
          </div>
          {/* -------------------------------------- */}

          <div className="about-item row col-12  text-start cover m_top">
            <div className="col-1 mt-2">

              <span className="about_icons">
                <SiAmazonapigateway />
              </span>
            </div>

            <div className="col-10 col-md-10 ms-5 shadow rounded">

              <h6>Flexible APIs</h6>
              <p className="about_pera">
                Compatible with multiple languages suited best to your comfort
              </p>
            </div>
          </div>
          {/* ----------------------------------------- */}

          {/* <div className="about-item row col-12  text-start  cover mb-3 mt-2">
            <div className="col-1 mt-2">

              <span className="about_icons">
                <GiExecutionerHood />
              </span>
            </div>

            <div className="col-10 col-md-10 ms-5 shadow rounded">

              <h6>Instant Execution</h6>
              <p className="about_pera">
                Now get your orders executed with few lines of codes
              </p>
            </div>

          </div> */}
          {/* -------------------------------------------------- */}
          {/* <div className="about-item row col-12 text-start  cover mb-3 mt-2">
            <div className="col-1 mt-2">

              <span className="about_icons">
                <SiPowerbi />
              </span>
            </div>

            <div className="col-10 col-md-10  ms-5 shadow rounded">

              <h6>Powerful Trading Platforms</h6>
              <p className="about_pera">
                Our customizable trading account and trade from your desktop.
              </p>
            </div>

          </div> */}
          {/* ---------------------------------------------------------- */}
          {/* <div className="about-item row col-12   text-start cover mb-3 mt-2">
            <div className="col-1 mt-2">


              <span className="about_icons">
                <FaStairs />
              </span>
            </div>

            <div className="col-10 col-md-10  ms-5 shadow rounded">

              <h6>Fast Trade execution</h6>
              <p className="about_pera">
                Fastest trade execution across all segments
              </p>
            </div>

          </div> */}
          {/* ------------------------------------------------------- */}
        </div>
        <div className="col-6 animated-div">
          <div className="animation_main">
          <div className="ani_1 ani_all">
            <img src="https://demothemesflat.co/onatrixkit/wp-content/uploads/2022/12/img_why_Home01-PY22RVZ-1.jpg" alt="" />
          </div>

          <div className="ani_2 ani_all">
          <img src="https://demothemesflat.co/onatrixkit/wp-content/uploads/2022/12/Img-1-4.jpg" alt="" />
          </div>

        <div className="ani_3 ani_all">
          <img src="https://demothemesflat.co/onatrixkit/wp-content/uploads/2022/12/img_why_Home01-N5733US-1.jpg" alt="" />
        </div>

        <div className="ani_4 ani_all">
          <img src="https://demothemesflat.co/onatrixkit/wp-content/uploads/2022/12/img_why_Home01-7A2BNUT-1.jpg" alt="" />
        </div>
        
        <div className="ani_5 ani_all">
          <img src="https://demothemesflat.co/onatrixkit/wp-content/uploads/2022/12/img_why_Home01-WZV75AM-1.jpg" alt="" />
        </div>

        <div className="ani_6 ani_all">
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>

        <div className="ani_7 ani_div">
            <h1>10+</h1>
            <h6>Year's experience working</h6>
        </div>
          </div>
        </div>
        </div>


      </div>

      {/* ---------------------------misssion vision ---------------------------- */}
      {/* <div className="misssion_vision mt-5 pt-5 ">
          <h1 className="about_txt2 text-center pb-2 ">Mision Vision</h1>
          <div className="row">
            <div className="col-12 col-md-5 pt-5">
              <img src={vt1} height="auto" width="100%"  alt="" />
            </div>
            <div className="col-12 col-md-6 pt-5 mission_pera">
              <h4 className=" text-center pt-5">Our Vision</h4>
              <p className="px-2 about_pera">
                is to create and continue developing our dynamic and easy-to-use
                application for various platforms, such as mobile, desktop, and
                other devices across various platforms and OS systems such as
                iOS, Android, Windows, Exe and API. This would ensure that users
                across different regions, technological platforms, and devices
                would find using Arham Share’s online application and platform
                incredibly easy to use and enjoy its benefits without issues
                pertaining to operational smoothness, digital accessibility, and
                responsiveness that so many users across India have begun doing.
              </p>
            </div>
          </div>
        </div> */}

      {/* -------------------------meet our team ----------------------------- */}

      <div className=" container-fluid meet_our_team p_top ">

        <div>
          <h1 className="about_txt2 text-center ">Meet Our Team</h1>
          <h3 className="line mx-auto"></h3>
        </div>
        <div className="row pt-5 text-center padding_side">
          <div className="col-12 col-sm-6 col-lg-4   meet_team_hover">
            <div className="container_img mx-auto">
              <img

                src={img1}

                height="auto"
                width="100%"
                className="our_team_img pb-5 image  "
                alt="" />
              <div className="overlay ">
                <h4 className="text-4  h-txt-1">MR.NARESH MEHTA</h4>
                <h6 className="h-txt-2">Founder and Promoter</h6>
              </div>
            </div>
            <p className="about_pera ">
              Arham's anchor, with over three decades of experience in the
              Indian Securities Market, advocates for a financially prudent and
              accessible India, characterized by integrity and honesty.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4   meet_team_hover">
            <div className="container_img mx-auto">
              <img

                src={img2}

                height="auto"
                width="100%"
                className="our_team_img pb-5 image "
                alt=""
              />
              <div className="overlay">
                <h4 className="text-4  h-txt-1">MR. PRIYANK MEHTA</h4>
                <h6 className="h-txt-2">Promoter and Director</h6>
              </div>
            </div>
            <p className="about_pera  ">
              The promoter, with over 10 years of experience, specializes in
              security market operations and capital market compliance, leading
              the team in best practices and risk management.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4   rounded-5 meet_team_hover">
            <div className="container_img mx-auto rounded-5">
              <img

                src={img3}
                height="auto"
                width="100%"
                className="our_team_img pb-5 image "
                alt=""/>

              <div className="overlay">
                <h4 className="text-4  h-txt-1">MR. RUSHITMEHTA</h4>
                <h6 className="h-txt-2">Co-founder and Director</h6>
              </div>
            </div>
            <p className="about_pera ">
              A young co-founder at Arham Share, with expertise in security,
              wealth management, and personal finance, manages corporate
              communications, brand management, and business development for
              CCG, HNI, and FII.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
