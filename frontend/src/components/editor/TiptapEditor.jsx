import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useRef } from "react";
import { updateDocumentContent } from "../../services/documentService";

function TiptapEditor({ document }) {
  const saveTimeout = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing or paste your content here...",
      }),
    ],

    content: document?.content || "",

    editorProps: {
      attributes: {
        class: "outline-none min-h-full text-gray-900 leading-8 text-[16px]",
      },
    },

    onUpdate({ editor }) {
      if (!document) return;

      clearTimeout(saveTimeout.current);

      saveTimeout.current = setTimeout(() => {
        updateDocumentContent(document.id, editor.getHTML());
      }, 500);
    },
  });

  return <EditorContent editor={editor} />;
}

export default TiptapEditor;