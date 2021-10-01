import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div
      layout
      className={`question`}
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      <div>{toggle ? children : ""}</div>
      <div className="faq-line" />
    </motion.div>
  );
};

export default Toggle;
