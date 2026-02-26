import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
    transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
