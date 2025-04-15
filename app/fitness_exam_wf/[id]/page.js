import React from "react";
import MedicalExamCertificate from "@/app/components/MedicalExamCertificate";
import { getSingleApplication } from "@/utils/fetcher";

const SingleCertificatePage = async ({ params }) => {
  const application = await getSingleApplication(params.id);
  return <MedicalExamCertificate certificateData={application} />;
};

export default SingleCertificatePage;
