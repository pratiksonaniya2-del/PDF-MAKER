import { forwardRef } from "react";

const Paper = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      id="paper-export"
      className="w-[794px] min-h-[1123px] bg-white shadow-xl border border-gray-300 p-20"
    >
      {children}
    </div>
  );
});

export default Paper;