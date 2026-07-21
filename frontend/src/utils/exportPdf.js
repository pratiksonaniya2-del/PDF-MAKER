import html2pdf from "html2pdf.js";

export async function exportPDF(title) {
  const element = document.getElementById("paper-export");

  if (!element) return;

  const options = {
    margin: 5,

    filename: `${title || "document"}.pdf`,

    image: {
      type: "jpeg",
      quality: 1,
    },

    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0,
      backgroundColor: "#ffffff",
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },

    pagebreak: {
      mode: ["css", "legacy"],
      before: ".page-break",
      avoid: ["img", "pre", "blockquote"],
    },
  };

  await html2pdf().set(options).from(element).save();
}