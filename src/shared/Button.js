import { motion } from "framer-motion";

const Button = ({ onClick, type, children, state, className, animate }) => {
  const defaultClass =
    "h-[40px] whitespace-nowrap text-white text-[14px] max-md:text-[12px] bg-[#337ab7] hover:bg-opacity-90 px-4 py-2 rounded-md flex gap-2 justify-center items-center";
  return (
    <motion.button
      whileHover={animate && { scale: 1.1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      type={type}
      disabled={state}
      className={`${defaultClass} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
