const HeroRight = () => {
  return (
    <div className="flex-1">
      <div className="bg-cta-purple mb-6 rounded-[10px] px-[66px] py-[18px] text-center shadow-[0_8px_0_0_rgba(0,0,0,0.14)]">
        <p className="text-[15px] leading-[26px] tracking-[0.27px]">
          <span className="font-bold">Try it free 7 days </span>then $20/mo.
          thereafter
        </p>
      </div>

      <form className="rounded-[10px] bg-white p-6">
        <input
          type="text"
          placeholder="First Name"
          className="placeholder-dark-blue"
        />
      </form>
    </div>
  );
};

export default HeroRight;
