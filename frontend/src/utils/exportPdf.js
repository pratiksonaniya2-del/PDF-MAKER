import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function exportPDF(title, content) {
  const pdfDoc = await PDFDocument.create();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const page = pdfDoc.addPage([595, 842]);

  const { height } = page.getSize();

  page.drawText(title, {
    x: 50,
    y: height - 50,
    size: 22,
    font,
    color: rgb(0, 0, 0),
  });

  page.drawText(content.replace(/<[^>]*>/g, ""), {
    x: 50,
    y: height - 90,
    size: 12,
    font,
    maxWidth: 500,
    lineHeight: 18,
  });

  const bytes = await pdfDoc.save();

  const blob = new Blob([bytes], {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = `${title || "document"}.pdf`;

  a.click();

  URL.revokeObjectURL(url);
}