import React, { useState } from "react";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

interface Plans {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const Plan: React.FC<{ account: any; setAccount: any }> = ({
  account,
  setAccount,
}) => {
  const plans: Plans[] = [
    { title: "Arcade", monthlyPrice: 9, yearlyPrice: 6 },
    { title: "Advanced", monthlyPrice: 12, yearlyPrice: 9 },
    { title: "Pro", monthlyPrice: 15, yearlyPrice: 12 },
  ];

  const [isMonthly, setIsMonthly] = useState(account.isMonthly);
  const planHandler = (plan: string, price: number) => {
    setAccount({
      ...account,
      plan,
      price,
    });
  };

  const billingToggler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isChecked: Boolean;
    if (e.target.checked) {
      isChecked = true;
      setIsMonthly(false);
    } else {
      isChecked = false;
      setIsMonthly(true);
    }

    setAccount({
      ...account,
      isMonthly: isChecked ? false : true,
      plan: "",
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="plan-card-wrapper flex flex-col md:mb-10 md:flex-row">
        {plans.map(({ title, monthlyPrice, yearlyPrice }) => (
          <div
            key={title}
            className={`plan-card card flex items-center md:block border border-2 border-gray-400 hover:border-purple-800 rounded-lg md:w-1/3 p-2 md:py-5 md:px-4 mb-5 md:mr-3 cursor-pointer ${
              title === account.plan ? "active" : ""
            }`}
            onClick={() => {
              isMonthly
                ? planHandler(title, monthlyPrice)
                : planHandler(title, yearlyPrice);
            }}
          >
            <div className="icon mr-5 md:mr-0 md:mb-8">
              {title === "Arcade" && <img src={ArcadeIcon} alt="Arcade icon" />}
              {title === "Advanced" && (
                <img src={AdvancedIcon} alt="Advanced icon" />
              )}
              {title === "Pro" && <img src={ProIcon} alt="Pro icon" />}
            </div>
            <div>
              <p className="font-extrabold text-blue-900">{title}</p>
              <p>
                ${isMonthly ? monthlyPrice : yearlyPrice}
                /mo
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center bg-gray-100 p-3 mb-auto font-extrabold text-blue-900 text-xs">
        <div className="flex items-center">
          <span
            className={`text-xs  mr-3 ${
              isMonthly ? "font-extrabold text-blue-900" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isMonthly ? false : true}
              onChange={(e) => billingToggler(e)}
            />
            <div className="w-9 h-5 bg-blue-900 peer-focus:outline-none rounded-full peer dark:bg-blue-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
            <span
              className={`ml-3 text-xs ${
                isMonthly ? "text-gray-400" : "font-extrabold text-blue-900"
              }`}
            >
              Yearly
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Plan;
