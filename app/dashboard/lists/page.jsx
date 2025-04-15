import { getAllApplications } from "@/utils/fetcher";
import Link from "next/link";
import React from "react";

const CertificateListPage = async () => {
  const allApplications = await getAllApplications();
  return (
    <div>
      {allApplications.length > 0 &&
        allApplications.map((application) => (
          <div
            className="flex flex-col mt-5 items-center justify-center gap-2"
            key={application._id}
          >
            <Link href={`/fitness_exam_wf/${application?.uniqueValue}`}>
              {application.name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CertificateListPage;
