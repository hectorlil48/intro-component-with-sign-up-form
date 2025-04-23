import { useState } from "react";

const HeroRight = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex-1">
      <div className="bg-cta-purple mb-6 rounded-[10px] px-[66px] py-[18px] text-center shadow-[0_8px_0_0_rgba(0,0,0,0.14)] lg:py-[17px]">
        <p className="text-[15px] leading-[26px] tracking-[0.27px]">
          <span className="font-bold">Try it free 7 days </span>then $20/mo.
          thereafter
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-[10px] bg-white p-6 shadow-[0_8px_0_0_rgba(0,0,0,0.14)] lg:p-10"
      >
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="First Name"
          className="placeholder-dark-blue border-border-grey text-dark-blue w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="text"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          placeholder="Last name"
          className="placeholder-dark-blue border-border-grey focus:border-cta-purple text-dark-blue w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="email"
          placeholder="Email Address"
          className="placeholder-dark-blue border-border-grey text-dark-blue w-full rounded-[5px] border py-[15px] pl-5"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="placeholder-dark-blue border-border-grey text-dark-blue w-full rounded-[5px] border py-[15px] pl-5"
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
