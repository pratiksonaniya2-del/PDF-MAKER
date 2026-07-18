import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { getDocumentById } from "../services/documentService";

import EditorNavbar from "../components/editor/EditorNavbar";
import Paper from "../components/editor/Paper";
import TiptapEditor from "../components/editor/TiptapEditor";

function Editor() {
  const { id } = useParams();

  const paperRef = useRef(null);
  const [saveStatus, setSaveStatus] = useState("saved");
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
      <EditorNavbar
        document={document}
        saveStatus={saveStatus}
        paperRef={paperRef}
      />

      <div className="flex justify-center py-10">
        <Paper ref={paperRef}>
          <TiptapEditor document={document} />
        </Paper>
      </div>
    </div>
  );
}

export default Editor;
