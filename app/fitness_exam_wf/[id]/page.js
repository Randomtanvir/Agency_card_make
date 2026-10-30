import React from "react";
import MedicalExamCertificate from "@/app/components/MedicalExamCertificate";
import { getSingleApplication } from "@/utils/fetcher";

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const application = await getSingleApplication(params.id);

  return {
    title: application?.name || "Applicant",
  };
}

// ✅ Page Component
const SingleCertificatePage = async ({ searchParams }) => {
  const id = searchParams?.Key;

  const application = await getSingleApplication(encodeURIComponent(id));

  return <MedicalExamCertificate certificateData={application} />;
};

export default SingleCertificatePage;
