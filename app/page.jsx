"use client";
import Lilaslider from "./Components/Lilaslider";
import CourseSlider from "./Components/CourseSlider";
import CurrierBanner from "./Sections/CurrierBanner";
import Course from "./Sections/Course";
import Mediaarticle from "./Sections/Mediaarticle";
import ErrorBoundary from "@pages/_error";
import HeroSlider from "./Sections/Hero";

const Home = () => {
  return (
    <main className="bg-blue-200">
      <ErrorBoundary>
        <span id="home">
          <HeroSlider />
        </span>

        <span id="partner">
          <Lilaslider />
        </span>

        <span id="All-Course">
          <Course />
        </span>

        <span id="Hire-with-us">
          <CurrierBanner />
        </span>

        <span id="blog">
          <Mediaarticle />
        </span>
      </ErrorBoundary>
    </main>
  );
};
export default Home;
