import { useParams } from "react-router-dom";
import { getDocumentById } from "../services/documentService";

import EditorNavbar from "../components/editor/EditorNavbar";
import Toolbar from "../components/editor/Toolbar";
import Paper from "../components/editor/Paper";

function Editor() {
  const { id } = useParams();

  const document = getDocumentById(id);

  if (!document) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Document not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-zinc-900">
      <EditorNavbar document={document} />

      <Toolbar />

      <main className="py-14">
        <Paper document={document} />
      </main>
    </div>
  );
}

export default Editor;