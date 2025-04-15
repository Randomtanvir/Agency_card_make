import { getAllApplications, getSingleApplication } from "@/utils/fetcher";
import MedicalExamCertificate from "./components/MedicalExamCertificate";

export default async function Home() {
  const allApplications = await getAllApplications();
  const Applications = await getSingleApplication(
    "certificatekeya1Yf8Km8ZwDKoiBGHNUdEL39HVtw_PWvkL8IwZpeFwejsIWCUIY3m2NcgXVb0v2tP"
  );

  return (
    <div>
      {allApplications.length > 0 &&
        allApplications.map((application) => (
          <MedicalExamCertificate
            key={application._id}
            certificateData={application}
          />
        ))}
    </div>
  );
}
