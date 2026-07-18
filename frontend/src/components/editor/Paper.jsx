import PageNumber from "./PageNumber";
import TiptapEditor from "./TiptapEditor";

function Paper({document}) {
  return (
    <div className="flex flex-col items-center">

      <div
        className="
          w-[794px]
          min-h-[1123px]
          bg-white
          shadow-xl
          rounded-sm
          p-20
        "
      >
        <TiptapEditor document={document}/>
      </div>

      <PageNumber page={1} />

    </div>
  );
}

export default Paper;