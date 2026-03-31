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
          className={`relative text-xl py-2 px-4 bg-blue-200 rounded-4xl border-2 cursor-pointer shadow-md overflow-hidden text-gray-700 ${activeTab === tab ? "scale-[1.1]" : ""} transition-colors transition-transform duration-800 ease-in-out`}
        >
          <span className="relative z-10">{tab}</span>
          {activeTab === tab && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-blue-300 z-0 rounded-2xl"
              transition={{ type: "spring", bounce: 0.3, duration: 1.8 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
};
