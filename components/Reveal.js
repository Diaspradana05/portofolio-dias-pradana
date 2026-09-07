"use client";

import { motion } from "framer-motion";

const MotionTag = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
  span: motion.span,
};

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 18,
  ...rest
}) {
  const Component = MotionTag[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: delay / 1000, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
