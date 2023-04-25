import ThankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className="my-5">
        <img src={ThankYouIcon} alt="Thank you icon" />
      </div>
      <p className="text-blue-900 font-bold text-3xl mb-5">Thank you!</p>
      <p className="text-center text-gray-400 font-medium">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a href="mailto:support@lorem.com">support@lorem.com</a>.
      </p>
    </div>
  );
};

export default ThankYou;
