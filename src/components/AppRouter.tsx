import { ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "../assets/data/NavLinks";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location}>
        {
          Object.values(NavLinks).map(
            (link, index) => (
              link.element && (
                <Route
                  key={`route_${index}`}
                  path={link.to}
                  element={
                    <MotionRouteWrapper
                      element={link.element}
                    />
                  }
                />
              )
            )
          )
        }
      </Routes>
    </AnimatePresence>
  );
};

const MotionRouteWrapper = ({ element }: { element: ReactNode }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {element}
    </motion.div>
  );
};

export default AppRouter;