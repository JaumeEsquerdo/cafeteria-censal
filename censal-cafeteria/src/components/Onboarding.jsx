import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Onboarding = () => {
  const [isVisible, setIsVisible] = useState(() => {
    const hasSeen = sessionStorage.getItem("onboarding_seen");
    return !hasSeen; // Si NO lo ha visto, isVisible es true
  });

  useEffect(() => {
    // Mientras isVisible sea true, el scroll está bloqueado.
    // Al desmontarse o cambiar a false, se limpia automáticamente.
    document.documentElement.style.overflow = isVisible ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isVisible]);

  /* useEffect para temporizar y guardar el storage */
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("onboarding_seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Función para cerrar el onboarding manualmente al clicar
  const closeOnboarding = () => {
    setIsVisible(false);
    sessionStorage.setItem("onboarding_seen", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0, borderRadius: 0 }}
          exit={{ y: "100vh", borderRadius: 20 }}
          transition={{ duration: 1.4, ease: "cubic-bezier(0.45, 0, 0.55, 1)" }}
          onClick={closeOnboarding}
          onWheel={(e) => e.preventDefault()}
          className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-100 touch-none overscroll-none"
        >
          <img
            src="/logo-hotel-censal.svg"
            className="w-2/5 h-auto"
            width={200}
            height={100}
            fetchPriority="high"
            alt="Logo Café Censal"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
