// import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Onboarding } from "./components/Onboarding";
import { LiquidNav } from "./components/LiquidNav";

function App() {
  const [navigation, setNavigation] = useState("Comidas");
  return (
    <>
      <Onboarding />
      <div className="text-4xl flex flex-col gap-6 min-h-screen bg-blue-50  max-w-full ">
        <header className="flex flex-col gap-4 pt-4 items-center">
          <div className="flex flex-col gap-[0.4px]">
            <h1 className="text-center text-2xl">la carta de la</h1>
            <h2 className="text-3xl font-medium"> Cafetería Censal</h2>
          </div>
          <LiquidNav setNavigation={setNavigation} />
        </header>
        <main className="min-h-screen lg:max-w-3/4 flex flex-col lg:items-center lg:mx-auto">
          <AnimatePresence mode="wait">
            {navigation === "Comidas" && (
              <motion.div
                key="comidas"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "cubic-bezier(0.45, 0, 0.55, 1)",
                }}
                className="flex flex-col gap-6 p-4 pb-6"
              >
                <h3 className="text-lg text-center">2 páginas</h3>
                <img
                  src="/imgs/pagina-comidas-1.webp"
                  alt="Carta de comidas"
                  width={861}
                  height={1216}
                  className="rounded-2xl shadow-xl w-full max-w-full  h-auto block"
                />
                <img
                  src="/imgs/pagina-comidas-2.webp"
                  alt="Carta de comidas"
                  width={861}
                  height={1216}
                  className="rounded-2xl shadow-xl w-full max-w-full h-auto block"
                />
              </motion.div>
            )}

            {navigation === "Bebidas" && (
              <motion.div
                key="bebidas"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "cubic-bezier(0.45, 0, 0.55, 1)",
                }}
                className="flex flex-col pt-4 pb-6 gap-6"
              >
                <h3 className="text-lg text-center">2 páginas</h3>
                <div className=" overflow-x-auto no-scrollbar fade-right">
                  <div className="w-200 mx-4 shadow-xl rounded-xl overflow-hidden ">
                    <img
                      src="/imgs/hotel-fachada.webp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className=" overflow-x-auto no-scrollbar fade-right">
                  <div className="w-200 mx-4 shadow-xl rounded-xl overflow-hidden">
                    <img
                      src="/imgs/hotel-fachada.webp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

export default App;
