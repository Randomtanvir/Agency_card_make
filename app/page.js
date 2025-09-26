import { getAllApplications } from "@/utils/fetcher";
import MedicalExamCertificate from "./components/MedicalExamCertificate";

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = 3;

  const { applications } = await getAllApplications(page, limit);

  return (
    <div>
      {applications?.length > 0 &&
        applications?.map((application) => (
          <MedicalExamCertificate
            key={application._id}
            certificateData={application}
          />
        ))}
    </div>
  );
}
