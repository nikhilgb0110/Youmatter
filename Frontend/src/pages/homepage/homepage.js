import styles from "./homepage.module.css";
import { Logo } from "../../svgs/logoSVG";
import { useNavigate } from "react-router-dom";
import Image from "../../svgs/hero_img.png";
import ImagePh from "../../svgs/hero_img_ph.png";
import axios from "axios";
import { LuLogIn, LuLogOut } from "react-icons/lu";

import { useContext, useRef } from "react";
import LoginContext from "../../context/context";
import Articles from "../Articles/Articles";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { IoIosArrowRoundForward } from "react-icons/io";

function Homepage() {
  const navigate = useNavigate();
  const { logout, loggedIn } = useContext(LoginContext);

  const about = useRef(null);
  const articles = useRef(null);

  const aboutClick = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const articlesClick = () => {
    articles.current?.scrollIntoView({ behavior: "smooth" });
  };

  const logoutUser = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_LINK + "/logout",
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if (data?.msg === "loggedout") {
        logout();
      }
    } catch (error) {
      console.log("Err in logout");
    }
  };

  return (
    <div className={styles.homepageContainer}>
      <header>
        <div className={styles.logoContainer}>
          <Logo />
          <div className={styles.headerText}>
            <h4 className={styles.text}>YouMatter</h4>
            <h6 className={`${styles.text} text-xs`}>Every being matters</h6>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {loggedIn && (
            <button
              onClick={() => {
                navigate("/analysis");
              }}
            >
              Analyse
            </button>
          )}
          <button
            onClick={() => {
              if (!loggedIn) navigate("/login");
              else {
                logoutUser();
              }
            }}
          >
            {!loggedIn ? <LuLogIn /> : <LuLogOut />}
          </button>
        </div>
      </header>
      <main style={{ minHeight: "100vh" }}>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-3xl md:text-4xl">
                  <div
                    className=" group justify-center flex gap-1 cursor-pointer w-fit mx-auto text-green-200"
                    onClick={() => navigate("/message")}
                  >
                    {`Let's Chat `}
                    <IoIosArrowRoundForward className=" group-hover:translate-x-2 transition-all text-4xl md:5xl" />
                  </div>
                  <br />
                  <span className="text-5xl md:text-[6rem] font-semibold mt-1 leading-none">
                    <span className=" text-yellow-300">AI Powered</span> Mental
                    Health Chatbot
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={Image}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full hidden sm:block"
              draggable={false}
            />
            <img
              src={ImagePh}
              alt="hero"
              height={1200}
              width={700}
              className="mx-auto rounded-2xl object-cover h-full black sm:hidden"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </main>

      <section className={`mt-8 ${styles.statsBox}`}>
        <h1 className="text-center text-4xl mb-8">Do you know?</h1>
        <div className={styles.statsSection}>
          <div className="text-center flex flex-col justify-center gap-4">
            <p className="text-xl text-justify">
              <span className=" border-b-2 border-yellow-300">
                Mental health conditions are not uncommon.
              </span>{" "}
              Hundreds of millions suffer from them yearly, and many more do
              over their lifetimes. It’s estimated that 1 in 3 women and 1 in 5
              men will experience major depression in their lives. Other
              conditions, such as schizophrenia and bipolar disorder, are less
              common but still have a large impact on people’s lives.
            </p>
          </div>
        </div>
      </section>
      <section className="my-32" ref={articles}>
        <h1 className="text-center text-4xl mb-16">Editor's Pick</h1>
        <div className="xl:m-auto">
          <div className={styles.Articles}>
            <Articles
              title="Mental Health in the Workplace"
              description="We've collected the best, tips, stats, and inspiring quotes on how to grow professionally while managing your mental health."
              Image={
                "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid33077_asset_33076/bc369feafa88f58d0addfad648e3d361/Large_and_modern_office_interiors?fm=webp&fit=thumb&q=65&w=864&h=576"
              }
              link={"https://www.psycom.net/mental-health-work"}
            />
            <Articles
              title="How to Stop Negative Thoughts"
              description="Why your inner world has a natural tendency to go haywire and what to do about it."
              Image={
                "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid31389_asset_31385/44d168240cb76bbbc6ec828143505f51/Conflict_Concept?fm=webp&fit=thumb&q=65&w=864&h=576"
              }
              link={"https://www.psycom.net/negative-thinking"}
            />
            <Articles
              title="What Is Imposter Syndrome?"
              description={`For starters, it is a real thing. And, if youve ever said or thought the words, "I'm fooling everyone. I feel like a fraud," you already have some experience with it.`}
              Image={
                "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid33063_asset_33035/c6f05ce2b9f3f04fe328461176a4fc42/Deception_Concept_-_Disguise_Between_Shark_And_Goldfish?fm=webp&fit=thumb&q=65&w=864&h=576"
              }
              link={"https://www.psycom.net/imposter-syndrome"}
            />
            <Articles
              title="The Negativity Bias"
              description="What is the negativity bias? How can you overcome it?"
              Image={
                "https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid31958_asset_14576/87f8270d6f9b6abff590cc08c2d8c771/Seesaw_Scale_with_Emoticons_-_3D_Rendering?fm=webp&fit=thumb&q=65&w=864&h=576"
              }
              link={"https://www.psycom.net/negativity-bias"}
            />
          </div>
        </div>
      </section>
      <section
        ref={about}
        className={`flex flex-col items-center gap-2 mb-4 ${styles.aboutUs}`}
      >
        <h1 className={`text-4xl mb-4 ${styles.lato}`}>About Us</h1>
        <div className={`text-center text-xl ${styles.lato}`}>
          Welcome to our mental health chat assistant platform. We are here for
          you – a supportive community where our empathetic AI actively listens,
          offers encouragement, and provides valuable resources. Together, we
          prioritize your well-being, fostering open dialogue around mental
          health. You're not alone; we, as your dedicated companions, stand with
          you on your journey. Let's build a space where understanding and
          support thrive.
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="m-auto h-full" style={{ maxWidth: "1320px" }}>
          <div className="grid grid-cols-2 h-5/6">
            <div className="flex flex-col justify-center items-center gap-3 text-lg">
              <div>
              NIKHIL G B 4AL20AI026
              </div>
              <div  >
              CHIRAG G 4AL20AI010
              </div>
              <div>
              PRATHAM P 4AL20AI031
              </div>
              <div>
              PRATHIK N R 4AL20AI032
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 text-lg">
              <div onClick={aboutClick} className="cursor-pointer">
                About
              </div>
              <div
                onClick={() => {
                  navigate("/message");
                }}
                className="cursor-pointer"
              >
                Chat
              </div>
              <div
                onClick={() => {
                  navigate("/analysis");
                }}
                className="cursor-pointer"
              >
                Analysis
              </div>
              <a
                href="https://github.com/nikhilgb0110/Youmatter"
                className=" text-white"
              >
                <div>Github</div>
              </a>
            </div>
          </div>
          <div className="text-center">© 2024 | YouMatter</div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
