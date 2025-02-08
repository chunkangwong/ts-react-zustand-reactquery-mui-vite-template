import Skeleton from "@mui/material/Skeleton";
import { motion } from "motion/react";

interface MotionSkeletonProps {
  variant?: "text" | "logo";
}

export const MotionSkeleton = ({ variant = "text" }: MotionSkeletonProps) => {
  return (
    <motion.div
      key="skeleton"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      style={{
        width: "100%",
      }}
    >
      <Skeleton
        variant="text"
        sx={{
          fontSize: variant === "logo" ? "6rem" : undefined,
        }}
        width="100%"
      />
    </motion.div>
  );
};
