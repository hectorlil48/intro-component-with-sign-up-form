import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-16 text-white sm:flex-row">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
