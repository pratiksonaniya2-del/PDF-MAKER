import { forwardRef } from "react";

const Paper = forwardRef(({ children }, ref) => {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div
        ref={ref}
        id="paper-export"
        className="
          w-full
          max-w-[850px]
          min-h-[1123px]
          bg-white
          rounded-lg
          shadow-2xl
          border border-zinc-300
          p-16
          overflow-hidden
        "
      >
        {children}
      </div>
    </div>
  );
});

Paper.displayName = "Paper";

export default Paper;