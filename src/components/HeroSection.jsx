import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-16 border-2 border-purple-600 text-white lg:max-w-[1000px] lg:flex-row lg:items-center">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
