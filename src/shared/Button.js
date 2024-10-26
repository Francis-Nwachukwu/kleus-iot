import { motion } from "framer-motion";

const CustomButton = ({
  onClick,
  type,
  children,
  state,
  className,
  animate,
}) => {
  const defaultClass =
    "whitespace-nowrap text-white text-[14px] max-md:text-[12px] bg-[#337ab7] hover:bg-opacity-90 px-3 py-1 rounded-sm flex gap-1 justify-center items-center";
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

export default CustomButton;
