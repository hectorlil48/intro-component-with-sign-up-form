const HeroRight = () => {
  return (
    <div className="flex-1">
      <div className="bg-cta-purple mb-6 rounded-[10px] px-[66px] py-[18px] text-center shadow-[0_8px_0_0_rgba(0,0,0,0.14)]">
        <p className="text-[15px] leading-[26px] tracking-[0.27px]">
          <span className="font-bold">Try it free 7 days </span>then $20/mo.
          thereafter
        </p>
      </div>

      <form className="flex flex-col gap-4 rounded-[10px] bg-white p-6">
        <input
          type="text"
          placeholder="First Name"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="password"
          placeholder="Password"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <button className="bg-btn-green rounded-[5px] py-[15px] text-[15px] leading-[26px] font-semibold tracking-[1px] uppercase shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.0909)]">
          Claim Your Free Trail
        </button>
      </form>
    </div>
  );
};

export default HeroRight;
