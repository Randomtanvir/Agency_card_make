import { getSingleApplication } from "@/utils/fetcher";
import React from "react";
import ApplicationForm from "../../_components/ApplicationForm";

const page = async ({ params }) => {
  const { id } = params;
  const application = await getSingleApplication(id);
  return (
    <>
      <h2 className="text-xl text-black font-bold text-center my-4">
        Edit Certificate
      </h2>
      <ApplicationForm application={application} />;
    </>
  );
};

export default page;
