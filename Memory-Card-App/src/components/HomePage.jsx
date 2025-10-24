import React from "react";
import pokeball from "../../public/pokeball.jpg";
import HomePageButton from "./HomePageButton";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${pokeball})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <HomePageButton></HomePageButton>
    </div>
  );
}

export default HomePage;
