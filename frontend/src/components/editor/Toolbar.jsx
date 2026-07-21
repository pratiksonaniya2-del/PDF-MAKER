import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaUndo,
  FaRedo,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaHighlighter,
  FaLink,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

import { useState, useEffect } from "react";

function Toolbar({ editor }) {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const update = () => forceUpdate((n) => n + 1);

    editor.on("selectionUpdate", update);
    editor.on("transaction", update);

    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);
  if (!editor) return null;

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors";

  const active = "bg-indigo-600 border-indigo-600 text-white";

  return (
    <div className="sticky top-16 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-3">
        <button
          className={btn}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <FaUndo />
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <FaRedo />
        </button>

        <div className="mx-2 h-8 w-px bg-zinc-700" />

        <button
          className={`${btn} ${editor.isActive("bold") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </button>

        <button
          className={`${btn} ${editor.isActive("italic") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FaItalic />
        </button>

        <button
          className={`${btn} ${editor.isActive("underline") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline />
        </button>

        <div className="mx-2 h-8 w-px bg-zinc-700" />

        <button
          className={`${btn} ${
            editor.isActive("heading", { level: 1 }) ? active : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>

        <button
          className={`${btn} ${
            editor.isActive("heading", { level: 2 }) ? active : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>

        <button
          className={`${btn} ${
            editor.isActive("heading", { level: 3 }) ? active : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </button>

        <div className="mx-2 h-8 w-px bg-zinc-700" />

        <button
          className={`${btn} ${editor.isActive("bulletList") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <FaListUl />
        </button>

        <button
          className={`${btn} ${editor.isActive("orderedList") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <FaListOl />
        </button>

        <button
          className={`${btn} ${editor.isActive("blockquote") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <FaQuoteRight />
        </button>

        <div className="mx-2 h-8 w-px bg-zinc-700" />

        <button
          className={btn}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <FaAlignLeft />
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <FaAlignCenter />
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <FaAlignRight />
        </button>

        <div className="mx-2 h-8 w-px bg-zinc-700" />

        <button
          className={`${btn} ${editor.isActive("highlight") ? active : ""}`}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
        >
          <FaHighlighter />
        </button>

        <button
          className={btn}
          onClick={() => {
            const url = window.prompt("Enter URL");

            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
        >
          <FaLink />
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
