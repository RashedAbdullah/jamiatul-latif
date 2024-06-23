import { PDFDocument, rgb } from "pdf-lib";

export async function generateStudentResultPDF(studentData) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);

  const { name, rollNumber, subjects } = studentData;

  page.drawText(`name: ${name}`, {
    x: 50,
    y: 350,
    size: 20,
    color: rgb(0, 0, 0),
  });
  page.drawText(`Roll No: ${rollNumber}`, {
    x: 50,
    y: 320,
    size: 20,
    color: rgb(0, 0, 0),
  });

  let yPosition = 280;
  subjects.forEach((subject) => {
    page.drawText(`${subject.book}: ${subject.number}`, {
      x: 50,
      y: yPosition,
      size: 15,
      color: rgb(0, 0, 0),
    });
    yPosition -= 20;
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
