import { useState } from "react";

const TabSwitcher = () => {
  const [tab, setTab] = useState(0);

  const handleTabSwitch = (tab: number) => {
    setTab(tab);
  };

  return (
    <div className="flex md:space-x-4 space-x-2">
      <button
        onClick={() => handleTabSwitch(0)}
        className={`py-2 px-5 text-primary${
          tab === 0
            ? "ease-in-out duration-500 rounded-tl-lg bg-opacity-60 rounded-tr-lg bg-white"
            : ""
        }`}
      >
        RENT
      </button>
      <button
        onClick={() => handleTabSwitch(1)}
        className={`py-2 px-5 text-primary${
          tab === 1
            ? "ease-in-out duration-500 rounded-tl-lg bg-opacity-60 rounded-tr-lg bg-white"
            : ""
        }`}
      >
        BUY
      </button>
      <button
        onClick={() => handleTabSwitch(2)}
        className={`py-2 px-5 text-primary ${
          tab === 2
            ? "ease-in-out duration-500 rounded-tl-lg bg-opacity-60 rounded-tr-lg bg-white"
            : ""
        }`}
      >
        SELL
      </button>
    </div>
  );
};
export default TabSwitcher;
