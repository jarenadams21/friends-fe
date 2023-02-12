import React from "react";
import "react-bootstrap";
import AboutUs from "./About-Us";
import LogoCard from "./LogoCard";
import InfoCard from "./LogoCard";
import TeamMembers2 from "./TeamMembers2";
import WhyTAPCard from "./WhyTAPCard";

export default function WelcomePage() {
  return (
    <div>
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Friendships Made Easy.
            <span className="sm:block text-2xl"> Lasting connections in the palm of your hand. </span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="font-bold block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
              href="login"
            >
              Login
            </a>

            <a
              className="font-bold block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto no-underline"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t bg-gray-900 via-gray-850 from-gray-800">
    <WhyTAPCard/>
    </div>
    </section>
    <div style ={{padding: "50px" }} className="bg-gradient-to-t bg-gray-800 via-gray-700 from-gray-600">
    <AboutUs/>
    </div>
    <div style ={{padding: "10px"}} className="bg-gradient-to-t bg-gray-600 via-gray-400 from-gray-200">
    <TeamMembers2/>
    </div>
    </div>
  );
}
