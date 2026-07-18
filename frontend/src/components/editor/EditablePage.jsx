function EditablePage() {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className="
        min-h-full
        w-full
        outline-none
        text-gray-900
        text-[16px]
        leading-8
        whitespace-pre-wrap
      "
      spellCheck={false}
    >
    </div>
  );
}

export default EditablePage;