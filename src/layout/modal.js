import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const EminiModal = ({
  open,
  onClose,
  children,
  className,
  title = "Emini",
}) => {
  return (
    <Modal
      className="flex justify-center items-center"
      open={open}
      onClose={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`bg-white outline-none ${className} mx-auto w-[90%] md:w-[70%] lg:w-[45%] shadow-lg flex flex-col`}
      >
        <div className="flex justify-between items-center py-3 px-2 bg-lightBlue text-white text-[18px] max-md:text-[14px]">
          <p className="font-medium">{title}</p>
          <div onClick={onClose} className="cursor-pointer">
            <IoMdClose />
          </div>
        </div>
        <div className="px-2 pt-4 max-md:pt-2">{children}</div>
      </motion.div>
    </Modal>
  );
};

export default EminiModal;
