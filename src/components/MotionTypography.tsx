import Typography, { TypographyProps } from "@mui/material/Typography";
import { motion } from "motion/react";

export const MotionTypography = (props: TypographyProps) => {
  return (
    <motion.div
      key="text"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography {...props}>{props.children}</Typography>
    </motion.div>
  );
};
