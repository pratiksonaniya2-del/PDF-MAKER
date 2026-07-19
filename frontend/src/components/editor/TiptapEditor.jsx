import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import {TextStyle} from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

import { useEffect, useRef } from "react";
import { updateDocumentContent } from "../../services/documentService";

function TiptapEditor({ document, onSaveStatusChange, onEditorReady }) {
  const saveTimeout = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "Start typing or paste your content here...",
      }),

     

      Highlight,

      TextStyle,

      Color,

      

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: document?.content || "",

    editorProps: {
  attributes: {
    class:
      "prose prose-lg max-w-none min-h-full outline-none text-zinc-900 leading-8 focus:outline-none",
  },
},

    onUpdate({ editor }) {
      if (!document) return;

      onSaveStatusChange?.("saving");

      clearTimeout(saveTimeout.current);

      saveTimeout.current = setTimeout(() => {
        updateDocumentContent(document.id, editor.getHTML());

        onSaveStatusChange?.("saved");
      }, 500);
    },
  });

  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  return <EditorContent editor={editor} />;
}

export default TiptapEditor;
