import React from "react";

const Summary: React.FC<{ account: any; setStep: any }> = ({
  account,
  setStep,
}) => {
  let addOnsTotal = 0;
  if (account.add_ons.length > 0) {
    for (let i = 0; i < account.add_ons.length; i++) {
      if (account.add_ons[i].isChecked) {
        addOnsTotal += account.add_ons[i].price;
      }
    }
  }
  const total = account.price + addOnsTotal;

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-5">
        <div className="flex flex-1 justify-between pb-5">
          <div>
            <p className="text-blue-900 font-bold">
              {account.plan} (
              {account.isMonthly ? (
                <span className="capitalize">Monthly</span>
              ) : (
                <span className="capitalize">Yearly</span>
              )}
              )
            </p>
            <p
              className="text-xs text-purple-900 font-medium underline cursor-pointer"
              onClick={() => setStep(2)}
            >
              Change
            </p>
          </div>
          <p className="text-blue-900 font-bold">${account.price}/mo</p>
        </div>
        <hr />
        <div className="text-xs text-gray-400 pt-5">
          {account.add_ons.map((addon: any) =>
            addon.isChecked ? (
              <div
                className="flex justify-between items-center my-2"
                key={addon.title}
              >
                <p>{addon.title}</p>
                <p className="text-blue-900 font-bold">+${addon.price}/mo</p>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <p className="text-xs text-gray-400  ">Total (per month)</p>
        <p className="text-purple-800 font-bold">${total}/mo</p>
      </div>
    </>
  );
};

export default Summary;
