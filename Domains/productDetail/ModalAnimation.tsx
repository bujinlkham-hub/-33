import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
export const ModalAnimation = ({ children }: any) => {
  return (
    <motion.div
      transition={{ duration: 0.5, type: "tween" }}
      initial={{ x: 500, opacity: 0, position: "absolute" }}
      animate={{
        x: 0,
        opacity: 1,
        position: "static",
      }}
      exit={{ x: -500, opacity: 0, position: "absolute" }}
      key="step2"
    >
      {children}
    </motion.div>
  );
};
