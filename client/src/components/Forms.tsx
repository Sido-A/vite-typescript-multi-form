import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Addons from "./Addons";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

interface TitleAndSub {
  title: string;
  sub: string;
}

const Forms: React.FC<{
  step: number;
  setStep: any;
  account: any;
  setAccount: any;
}> = ({ step, setStep, account, setAccount }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isNameInput, setIsNameInput] = useState(true);
  const [isEmailInput, setIsEmailInput] = useState(true);
  const [isPhoneInput, setIsPhoneInput] = useState(true);

  const titleAndSubTitle: TitleAndSub[] = [
    {
      title: "Personal info",
      sub: "Please provide your name,email address, and phone number.",
    },
    {
      title: "Select your plan",
      sub: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Pick add-ons",
      sub: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finishing up",
      sub: "Double-check everything looks OK before confirming.",
    },
  ];

  console.log(account);

  const stepDecrement = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setStep(step - 1);
  };

  const stepIncrement = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (
      isValidEmail &&
      account.name !== "" &&
      account.email !== "" &&
      account.phone !== ""
    ) {
      setStep(step + 1);
      setIsValidEmail(true);
      setIsPhoneInput(true);
      setIsNameInput(true);
    } else if (account.name === "") {
      setIsNameInput(false);
    } else if (account.email === "") {
      setIsEmailInput(false);
    } else if (account.phone === "") {
      setIsPhoneInput(false);
    }
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") emailValidationHandler(e.target.value);

    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const emailValidationHandler = (email: string): Boolean => {
    setIsValidEmail(/\S+@\S+\.\S+/.test(email));
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <section className="absolute top-28 bg-white rounded-lg  px-10 pb-6 mx-8  md:static  md:flex md:flex-1 md:justify-center md:px-7 md:pb-0">
      <div className="flex flex-1 flex-col h-full">
        {step <= 4 && (
          <div className="my-4 md:my-7">
            <p className="text-3xl font-extrabold text-blue-900 mb-2 md:mb-3">
              {titleAndSubTitle[step - 1].title}
            </p>
            <small className="text-base text-gray-600">
              {titleAndSubTitle[step - 1].sub}
            </small>
          </div>
        )}
        <form className="flex flex-col flex-1">
          {step === 1 && (
            <PersonalInfo
              account={account}
              inputHandler={inputHandler}
              isValidEmail={isValidEmail}
              isNameInput={isNameInput}
              isEmailInput={isEmailInput}
              isPhoneInput={isPhoneInput}
            />
          )}
          {step === 2 && <Plan account={account} setAccount={setAccount} />}
          {step === 3 && <Addons account={account} setAccount={setAccount} />}
          {step === 4 && <Summary account={account} setStep={setStep} />}
          {step === 5 && <ThankYou />}

          {step < 5 && (
            <div
              className={`flex items-center ${
                step > 1 ? "justify-between" : "justify-end"
              } fixed bottom-0 bg-white w-full left-0 p-2 md:relative md:bg-transparent md:mb-5`}
            >
              {step > 1 && step < 5 && (
                <button
                  className="text-base text-blue-900 font-bold px-6 py-3 rounded-lg hover:cursor-pointer"
                  onClick={(e) => stepDecrement(e)}
                >
                  Go Back
                </button>
              )}
              {step < 4 && (
                <button
                  className="bg-blue-900 text-sm text-white px-6 py-3 rounded-lg hover:cursor-pointer"
                  onClick={(e) => stepIncrement(e)}
                >
                  Next Step
                </button>
              )}
              {step === 4 && (
                <button
                  className="bg-indigo-600 hover:opacity-40 text-sm text-white px-8 py-3 rounded-lg hover:cursor-pointer"
                  onClick={(e) => stepIncrement(e)}
                >
                  Confirm
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Forms;
