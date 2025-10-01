import { getAllApplications } from "@/utils/fetcher";
import MedicalExamCertificate from "./components/MedicalExamCertificate";
import LoginForm from "./components/LoginForm";

export default async function Home() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
