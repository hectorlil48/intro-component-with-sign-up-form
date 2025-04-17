import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-16 text-white md:flex-row">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
