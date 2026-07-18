import PageNumber from "./PageNumber";
import TiptapEditor from "./TiptapEditor";

function Paper({ children, pageNumber }) {
  return (
    <div className="mb-10 flex flex-col items-center">
      <div
        className="
          w-[794px]
          min-h-[1123px]
          bg-white
          shadow-xl
          rounded-sm
          p-20
          border border-gray-300
        "
      >
        {children}
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Page {pageNumber}
      </p>
    </div>
  );
}

export default Paper;
