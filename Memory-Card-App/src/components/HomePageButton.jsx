import PokeballButton from "./PokeballButton";

function HomePageButton() {
  return (
    <div className="relative z-20 mmax-h-full w-full max-w-md md:max-w-3xl lg:max-w-4xl border border-amber-600 flex flex-col justify-center items-center p-10 bg-white/10 rounded-full gap-2 transition-transform duration-300 hover:scale-105 hover:bg-white/20">
      <div className="flex justify-center items-center gap-4">
        <PokeballButton></PokeballButton>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-red-300">
          Test your memory
        </h2>
        <PokeballButton></PokeballButton>
      </div>

      <button className="border-2 border-dashed border-white p-2 rounded-full hover:cursor-pointer hover:text-white hover:border-red-600 transition-colors duration-300 text-red-600">
        Get Started
      </button>
    </div>
  );
}

export default HomePageButton;
