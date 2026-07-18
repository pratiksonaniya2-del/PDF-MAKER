import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

window.html2canvas = html2canvas;
export async function exportPDF(title) {
  const editor = document.querySelector(".ProseMirror");

  if (!editor) return;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  await pdf.html(editor, {
    x: 40,
    y: 40,

    margin: [40, 40, 40, 40],

    autoPaging: "text",

    width: 515,

    windowWidth: editor.scrollWidth,

    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
    },
  });

  pdf.save(`${title || "document"}.pdf`);
}
