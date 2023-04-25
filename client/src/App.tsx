import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Forms from "./components/Forms";
import "./App.css";

interface Account {
  name?: string;
  email?: string;
  phone?: string;
  isMonthly?: Boolean;
  plan?: string;
  price?: number;
  add_ons?: [];
  summary?: string;
}

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [account, setAccount] = useState<Account>({
    name: "",
    email: "",
    phone: "",
    isMonthly: true,
    plan: "Advanced",
    price: 12,
    add_ons: [],
    summary: "",
  });

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <main className="bg-blue-100 max-w-4xl md:rounded-2xl md:my-5 md:m-auto md:p-4 md:bg-white md:shadow ">
      <div className="md:flex ">
        <Sidebar step={step} isMobile={isMobile} />
        <Forms
          step={step}
          setStep={setStep}
          account={account}
          setAccount={setAccount}
        />
      </div>
    </main>
  );
};

export default App;
