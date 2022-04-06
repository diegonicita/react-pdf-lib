import { PDFDocument, StandardFonts } from "pdf-lib";
import download from "downloadjs";

const BASE_END_POINT = "https://diego-test-server.herokuapp.com/";
//const BASE_END_POINT = "http://localhost:8000/";

const ep = [
{
  url : BASE_END_POINT + "bacterio",
  sala: {x: 375, y:690, s:8},
  cama: {x: 500, y:690, s:8},
  nombre: {x: 145, y: 665, s:27},
  apellido: {x: 145, y: 652, s:27},
  fn: {x: 172,y: 626, s: 23},
  dni: {x: 410, y: 626, s:18},
},
{
  url : BASE_END_POINT + "virologia",
  sala: {x: 375, y:690, s:8},
  cama: {x: 500, y:690, s:8},
  nombre: {x: 145, y: 663, s:27},
  apellido: {x: 145, y: 650, s:27},
  fn: {x: 150,y: 622, s: 23},
  dni: {x: 418, y: 622, s:17},
},
{
  url : BASE_END_POINT + "tbc",
  sala: {x: 375, y:693, s:8},
  cama: {x: 485, y:693, s:8},
  nombre: {x: 145, y: 666, s:27},
  apellido: {x: 145, y: 653, s:27},
  fn: {x: 150,y: 625, s: 25},
  dni: {x: 375, y: 625, s:25},
}
,
{
  url : BASE_END_POINT + "bioquimica",
  sala: {x: 375, y:707, s:8},
  cama: {x: 505, y:707, s:8},
  nombre: {x: 145, y: 681, s:27},
  apellido: {x: 145, y: 668, s:27},
  fn: {x: 150,y: 643, s: 25},
  dni: {x: 290, y: 643, s:26},
},
{
  url : BASE_END_POINT + "micologia",
  sala: {x: 375, y:685, s:8},
  cama: {x: 505, y:685, s:8},
  nombre: {x: 145, y: 660, s:27},
  apellido: {x: 145, y: 647, s:27},
  fn: {x: 153,y: 621, s: 28},
  dni: {x: 416, y: 621, s:17},
},
{
  url : BASE_END_POINT + "parasitologia",
  sala: {x: 375, y:689, s:8},
  cama: {x: 505, y:689, s:8},
  nombre: {x: 145, y: 663, s:27},
  apellido: {x: 145, y: 650, s:27},
  fn: {x: 165,y: 625, s: 28},
  dni: {x: 339, y: 625, s:31},
}
]

const insertarTexto = (page, texto, pos) => { 
  var chars = texto.toUpperCase().split("");
  chars.map((item, index) => {
    page.moveTo(pos.x + index * pos.s, pos.y);
    page.drawText(item, { size: 12 });
  });
};

const insertarTextoDividido = (page, texto, pos, charSplitter) => {  
  var numbers = texto.toUpperCase().split(charSplitter);
  numbers.map((item, index) => {
    page.moveTo(pos.x + index * pos.s, pos.y);
    page.drawText(item, { size: 12 });
  });
};

const loadPDF = async (studyId, fSplit) => 
{   
    const f = await fetch(ep[studyId].url);
    const existingPdfBytes = await f.arrayBuffer();
    console.log(existingPdfBytes);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0]; 
    firstPage.setFont(helveticaFont);  

    // Bacterilogia //
    insertarTexto(firstPage, "32", ep[studyId].sala);
    const splitCama = fSplit[0].split(" ");
    insertarTexto(firstPage, splitCama[1], ep[studyId].cama);
    const splitNameApellido = fSplit[1].split(" ");
    insertarTexto(firstPage, splitNameApellido[0], ep[studyId].nombre);
    insertarTexto(firstPage, splitNameApellido[1], ep[studyId].apellido);
    insertarTextoDividido(firstPage, fSplit[3], ep[studyId].fn, "-");
    insertarTexto(firstPage, fSplit[2], ep[studyId].dni);
    // Draw a string of text diagonally

    const data = await pdfDoc.save();    
    await setTimeout(() => {
      console.log(data.length);
      if (data.length > 0) {
        download(data, "download.pdf", "application/pdf");
      }
    }, 1000);

}

export default loadPDF