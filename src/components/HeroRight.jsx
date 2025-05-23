import { useState } from "react";
import errorIcon from "../assets/icon-error.svg";

const HeroRight = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const inputBaseStyles =
    "placeholder-dark-blue placeholder:text-sm text-sm text-dark-blue w-full rounded-[5px] py-[15px] pl-5 lg:pl-8 focus:outline-none";

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      firstName:
        firstName.trim() === ""
          ? "First Name cannot be empty"
          : firstName.length < 3
            ? "First Name must be at least 3 characters"
            : "",
      lastName:
        lastName.trim() === ""
          ? "Last Name cannot be empty"
          : lastName.length < 3
            ? "Last Name must be at least 3 characters"
            : "",
      email:
        email.trim() === ""
          ? "Email cannot be empty"
          : !emailRegex.test(email)
            ? "Looks like this is not a valid email"
            : "",
      password:
        password.trim() === ""
          ? "Password cannot be empty"
          : password.length < 6
            ? "Password must be at least 6 characters"
            : "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (!hasErrors) {
      console.log("Form submitted:", { firstName, lastName, email, password });

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setErrors({});
      setSuccessMessage("✅ Your form was submitted successfully!");
    } else {
      setSuccessMessage("");
    }
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
        className="flex flex-col gap-4 rounded-[10px] bg-white p-6 shadow-[0_8px_0_0_rgba(0,0,0,0.14)] lg:gap-5 lg:p-10"
      >
        <div className="relative">
          <label htmlFor="firstName" className="sr-only"></label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder={errors.firstName ? "" : "First Name"}
            onChange={(e) => {
              setFirstName(e.target.value);
              // Clear error as user types
              if (errors.firstName) {
                setErrors((prev) => ({ ...prev, firstName: "" }));
              }
            }}
            value={firstName}
            className={`${inputBaseStyles} transition-colors duration-300 ease-in-out ${errors.firstName ? "focus:border-firered border-2 border-red-500" : "border-border-grey focus:border-cta-purple border"}`}
          />
          {errors.firstName && (
            <img
              src={errorIcon}
              alt="Error"
              className="pointer-events-none absolute top-[35%] right-4 h-6 w-6 -translate-y-1/2"
            />
          )}
          {errors.firstName && (
            <p
              className="text-firered mt-[6px] text-right text-[11px] font-medium italic"
              role="alert"
            >
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="lastName" className="sr-only"></label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
              // Clear error as user types
              if (errors.lastName) {
                setErrors((prev) => ({ ...prev, lastName: "" }));
              }
            }}
            value={lastName}
            placeholder={errors.lastName ? "" : "Last Name"}
            className={`${inputBaseStyles} transition-colors duration-300 ease-in-out ${errors.lastName ? "focus:border-firered border-2 border-red-500" : "border-border-grey focus:border-cta-purple border"}`}
          />
          {errors.lastName && (
            <img
              src={errorIcon}
              alt="Error"
              className="pointer-events-none absolute top-[35%] right-4 h-6 w-6 -translate-y-1/2"
            />
          )}
          {errors.lastName && (
            <p className="text-firered mt-[6px] text-right text-[11px] font-medium italic">
              {errors.lastName}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="email" className="sr-only"></label>
          <input
            id="email"
            type="email"
            name="email"
            aria-label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              // Clear error as user types
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
            autoComplete="email"
            placeholder={errors.email ? "" : "Email Address"}
            className={`${inputBaseStyles} transition-colors duration-300 ease-in-out ${errors.email ? "focus:border-firered border-2 border-red-500" : "border-border-grey focus:border-cta-purple border"}`}
          />
          {errors.email && (
            <img
              src={errorIcon}
              alt="Error"
              className="pointer-events-none absolute top-[35%] right-4 h-6 w-6 -translate-y-1/2"
            />
          )}
          {errors.email && (
            <p className="text-firered mt-[6px] text-right text-[11px] font-medium italic">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="password" className="sr-only"></label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            aria-label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              // Clear error as user types
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: "" }));
              }
            }}
            value={password}
            placeholder={errors.password ? "" : "Password"}
            className={`${inputBaseStyles} transition-colors duration-300 ease-in-out ${errors.password ? "focus:border-firered border-2 border-red-500" : "border-border-grey focus:border-cta-purple border"}`}
          />
          {/* Toggle Button: Only show if there's no error */}
          {!errors.password && password !== "" && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-gray-600 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
          {errors.password && (
            <img
              src={errorIcon}
              alt="Error"
              className="pointer-events-none absolute top-[35%] right-4 h-6 w-6 -translate-y-1/2"
            />
          )}
          {errors.password && (
            <p className="text-firered mt-[6px] text-right text-[11px] font-medium italic">
              {errors.password}
            </p>
          )}
        </div>
        <button className="bg-btn-green hover:bg-btn-hover rounded-[5px] py-[15px] text-[15px] leading-[26px] font-semibold tracking-[1px] uppercase shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.0909)]">
          Claim Your Free Trial
        </button>
        <p className="text-light-purple -mt-2 px-[15px] text-center text-[11px] leading-[21px] font-medium lg:-mt-3">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-firered font-bold">Terms and Services</span>
        </p>
        {successMessage && (
          <p className="mt-2 text-center text-sm text-green-600">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default HeroRight;
