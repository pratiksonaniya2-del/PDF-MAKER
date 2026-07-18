import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { createNewDocument } from "../../utils/documentTemplate";
import { createDocument } from "../../services/documentService";

function CreateCard() {
  const navigate = useNavigate();

  const handleCreate = () => {
    const document = createNewDocument();

    createDocument(document);

    navigate(`/editor/${document.id}`);
  };

  return (
    <button
      onClick={handleCreate}
      className="group w-full rounded-3xl border-2 border-dashed border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-10 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white transition-transform duration-300 group-hover:scale-110">
          <Plus size={30} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold dark:text-white">
            Create New PDF
          </h2>

          <p className="mt-2 text-gray-500">
            Start writing on a blank A4 page.
          </p>
        </div>
      </div>
    </button>
  );
}

export default CreateCard;