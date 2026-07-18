import { useParams } from "react-router-dom";
import { getDocumentById } from "../services/documentService";

import EditorNavbar from "../components/editor/EditorNavbar";
import Toolbar from "../components/editor/Toolbar";
import Paper from "../components/editor/Paper";
import TiptapEditor from "../components/editor/TiptapEditor";
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
  <div className="min-h-screen bg-zinc-200 dark:bg-zinc-900">
    <EditorNavbar document={document} />

    <div className="flex justify-center py-10 overflow-y-auto">
      <Paper pageNumber={1}>
        <TiptapEditor document={document} />
      </Paper>
    </div>
  </div>
);
}

export default Editor;
