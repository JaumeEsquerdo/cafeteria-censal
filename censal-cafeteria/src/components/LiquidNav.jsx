import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Comidas", "Bebidas"];

export const LiquidNav = ({ setNavigation }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <nav className="flex gap-4 p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            setNavigation(tab);
          }}
          className={`relative text-xl font-medium py-2 px-4 bg-neutral-100 rounded-4xl border-2 cursor-pointer shadow-md overflow-hidden ${activeTab === tab ? "text-black" : "text-gray-600 border-gray-400"}  active:scale-[0.7]  transition-all duration-800 ease-in-out`}
        >
          <span className="relative z-10">{tab}</span>
          {activeTab === tab && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 z-0 rounded-2xl bg-[#f2eeeb]"
              transition={{ type: "spring", bounce: 0.3, duration: 1.8 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
};
