import { getAllApplications } from "@/utils/fetcher";
import Link from "next/link";
import React from "react";
import CertificateCard from "./_components/CertificateCard";

const CertificateListPage = async () => {
  const allApplications = await getAllApplications();
  return (
    <div>
      {allApplications.length > 0 &&
        allApplications.map((application) => (
          <CertificateCard key={application._id} application={application} />
        ))}
    </div>
  );
};

export default CertificateListPage;
