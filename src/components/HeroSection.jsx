import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-16 text-white lg:max-w-[1200px] lg:flex-row lg:items-center lg:gap-16">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
