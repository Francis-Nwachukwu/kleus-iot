import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link to={"/"} className="pb-1 border-b-2 border-eden">
        <motion.p whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
          You seem lost? Login
        </motion.p>
      </Link>
    </div>
  );
};

export default NotFound;
