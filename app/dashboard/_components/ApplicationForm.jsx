"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function ApplicationForm({ application }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      applicationType: "",
      applicationNumber: "",
      name: "",
      arabicName: "",
      dateOfBirth: "1997-01-20",
      nationality: "BANGLADESH",
      gender: "MALE",
      passportNo: "",
      civilNo: "",
      sponsor: "",
      category: "",
      ValidityoftheMedical: "2025-10-01",
      to: "2025-10-01",
      MedicalCenter: "",
    },
  });

  // If in edit mode — prefill form values
  useEffect(() => {
    if (application) {
      Object.keys(application).forEach((key) => {
        setValue(key, application[key]);
      });
    }
    if (application) {
      Object.keys(application).forEach((key) => {
        // If it's a date field — format to YYYY-MM-DD
        if (
          ["dateOfBirth", "ValidityoftheMedical", "to"].includes(key) &&
          application[key]
        ) {
          const formattedDate = new Date(application[key])
            .toISOString()
            .split("T")[0];
          setValue(key, formattedDate);
        } else {
          setValue(key, application[key]);
        }
      });
    }
  }, [application, setValue]);

  const onSubmit = async (data) => {
    try {
      const method = application ? "PATCH" : "POST";
      const url = application
        ? `/api/application/${application.uniqueValue}`
        : "/api/application";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        alert(
          application
            ? "Application updated successfully ✅"
            : "Application submitted successfully ✅"
        );
        router.push("/dashboard/lists");
      } else {
        alert("Failed to submit application ❌");
      }
    } catch (error) {
      alert("Something went wrong ❌");
      console.error(error);
    }
  };

  const fields = [
    { name: "applicationType", label: "Application Type" },
    { name: "applicationNumber", label: "Application Number" },
    { name: "name", label: "Name" },
    { name: "arabicName", label: "Arabic Name" },
    { name: "dateOfBirth", label: "Date of Birth", type: "date" },
    { name: "nationality", label: "Nationality" },
    { name: "gender", label: "Gender" },
    { name: "passportNo", label: "Passport No" },
    { name: "civilNo", label: "Civil No" },
    { name: "sponsor", label: "Sponsor" },
    { name: "category", label: "Category" },
    {
      name: "ValidityoftheMedical",
      label: "Validity of the Medical",
      type: "date",
    },
    { name: "to", label: "To", type: "date" },
    { name: "MedicalCenter", label: "Medical Center" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto p-6 bg-white shadow rounded-lg"
    >
      {fields.map(({ name, label, type = "text" }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name} className="mb-1 font-medium text-gray-700">
            {label}
          </label>
          <input
            id={name}
            type={type}
            {...register(name, { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors[name] && (
            <p className="text-sm text-red-500 mt-1">This field is required</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
      >
        {application ? "Update Application" : "Submit Application"}
      </button>
    </form>
  );
}
