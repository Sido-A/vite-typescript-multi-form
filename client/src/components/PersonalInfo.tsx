const PersonalInfo: React.FC<{
  account: any;
  inputHandler: Function;
  isValidEmail: Boolean;
  isNameInput: Boolean;
  isEmailInput: Boolean;
  isPhoneInput: Boolean;
}> = ({
  account,
  inputHandler,
  isValidEmail,
  isNameInput,
  isEmailInput,
  isPhoneInput,
}) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-6">
        <label
          className="flex justify-between font-bold block mb-2 text-sm font-medium text-gray-900 "
          htmlFor="name"
        >
          <p>Name</p>
          {!isNameInput && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>
        <input
          className={`border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:cursor-pointer ${
            !isNameInput ? "border-red-500" : ""
          }`}
          placeholder="Full Name"
          required
          type="text"
          name="name"
          id="name"
          value={account.name}
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div className="mb-6">
        <label
          className="flex justify-between font-bold block mb-2 text-sm font-medium text-gray-900"
          htmlFor="email"
        >
          <p>Email Address</p>
          {!isEmailInput && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>
        <input
          className={`border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:cursor-pointer ${
            !isValidEmail ? "border-red-500" : ""
          }`}
          placeholder="name@flowbite.com"
          required
          type="text"
          name="email"
          id="email"
          value={account.email}
          onChange={(e) => inputHandler(e)}
        />
        {!isValidEmail && (
          <small className="text-red-500">Invalid email address</small>
        )}
      </div>
      <div className="">
        <label
          className="flex justify-between font-bold block mb-2 text-sm font-medium text-gray-900 "
          htmlFor="phone"
        >
          <p>Phone Number</p>
          {!isPhoneInput && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>
        <input
          className={`border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:cursor-pointer ${
            !isPhoneInput ? "border-red-500" : ""
          }`}
          placeholder="e.g. +1 234 567 890"
          required
          type="text"
          name="phone"
          id="phone"
          value={account.phone}
          onChange={(e) => inputHandler(e)}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
