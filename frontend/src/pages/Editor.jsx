import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { getDocumentById } from "../services/documentService";

import EditorNavbar from "../components/editor/EditorNavbar";
import Toolbar from "../components/editor/Toolbar";
import Paper from "../components/editor/Paper";
import TiptapEditor from "../components/editor/TiptapEditor";

function Editor() {
  const { id } = useParams();

  const paperRef = useRef(null);

  const [saveStatus, setSaveStatus] = useState("saved");
  const [editor, setEditor] = useState(null);

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

      {/* Toolbar */}
      <Toolbar editor={editor} />

      {/* Paper */}
      <div className="flex justify-center py-10">
        <Paper ref={paperRef}>
          <TiptapEditor
            document={document}
            onSaveStatusChange={setSaveStatus}
            onEditorReady={setEditor}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Editor;
