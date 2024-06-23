import { generateStudentResultPDF } from "@/utils/get-result-pdf";
import { NextResponse } from "next/server";

const POST = async (req, res) => {
  console.log(req);

  try {
    const studentData = req.body;

    const pdfBytes = await generateStudentResultPDF(studentData);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=result.pdf");
    //   res?.status(200).send(pdfBytes);

    return new NextResponse("PDF has been created", {
      status: 200,
    });
  } catch (error) {
    //   res.status(500).json({ error: "Failed to generate PDF" });
    console.log(error.message);
  }
};
export { POST };
