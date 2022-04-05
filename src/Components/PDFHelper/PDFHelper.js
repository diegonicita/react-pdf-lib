import { PDFDocument, StandardFonts } from "pdf-lib";
import download from "downloadjs";

const loadPDF = async (endPoint, fSplit) => 
{
    const f = await fetch(endPoint);
    const existingPdfBytes = await f.arrayBuffer();
    console.log(existingPdfBytes);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const nombre = (page, texto, x, y, separation_x) => {
      page.setFont(helveticaFont);
      var chars = texto.toUpperCase().split("");
      chars.map((item, index) => {
        page.moveTo(x + index * separation_x, y);
        page.drawText(item, { size: 12 });
      });
    };

    const nacimiento = (page, texto, x, y, separation_x) => {
      page.setFont(helveticaFont);
      var numbers = texto.toUpperCase().split("-");
      numbers.map((item, index) => {
        page.moveTo(x + index * separation_x, y);
        page.drawText(item, { size: 12 });
      });
    };

    // Bacterilogia //
    nacimiento(firstPage, "32", 375, 690, 27);
    const splitCama = fSplit[0].split(" ");
    nacimiento(firstPage, splitCama[1], 500, 690, 27);
    const splitName = fSplit[1].split(" ");
    nombre(firstPage, splitName[0], 145, 665, 27);
    nombre(firstPage, splitName[1], 145, 652, 27);
    nacimiento(firstPage, fSplit[3], 145 + 27, 626, 23);
    nombre(firstPage, fSplit[2], 410, 626, 18);
    // Draw a string of text diagonally

    const data = await pdfDoc.save();    
    await setTimeout(() => {
      console.log(data.length);
      if (data.length > 0) {
        download(data, "bacteriologia.pdf", "application/pdf");
      }
    }, 1000);

}

export default loadPDF