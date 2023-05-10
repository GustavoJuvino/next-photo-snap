import React from "react";

interface GradientProps {
  size: string;
}

const Gradient: React.FC<GradientProps> = ({ size }) => {
  return (
    <div className={`
        absolute
        w-[6px]
        left-0
        bg-gradient-to-t from-[#FEC393] via-[#BC7198] to-[#5A77FF]
        ${size === "sm" && "h-36"}
        ${size === "md" && "h-[280px]"}
        ${size === "xl" && "h-[19rem]"}
      `}
    />
  )
}

export default Gradient