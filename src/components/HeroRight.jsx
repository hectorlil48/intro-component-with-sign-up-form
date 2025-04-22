const HeroRight = () => {
  return (
    <div className="flex-1">
      <div className="bg-cta-purple mb-6 rounded-[10px] px-[66px] py-[18px] text-center shadow-[0_8px_0_0_rgba(0,0,0,0.14)]">
        <p className="text-[15px] leading-[26px] tracking-[0.27px]">
          <span className="font-bold">Try it free 7 days </span>then $20/mo.
          thereafter
        </p>
      </div>

      <form className="flex flex-col gap-4 rounded-[10px] bg-white p-6 shadow-[0_8px_0_0_rgba(0,0,0,0.14)] lg:p-10">
        <input
          type="text"
          name="first name"
          placeholder="First Name"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="text"
          name="Last Name"
          placeholder="last name"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="email"
          name="Email"
          autoComplete="email"
          placeholder="Email Address"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="placeholder-dark-blue border-border-grey w-full rounded-[5px] border py-[15px] pl-5"
        />
        <button className="bg-btn-green hover:bg-btn-hover rounded-[5px] py-[15px] text-[15px] leading-[26px] font-semibold tracking-[1px] uppercase shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.0909)]">
          Claim Your Free Trail
        </button>
        <p className="text-light-purple -mt-2 px-[15px] text-center text-[11px] leading-[21px] font-medium">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-firered font-bold">Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

export default HeroRight;
