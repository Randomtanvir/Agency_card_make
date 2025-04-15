"use client";
import { useForm } from "react-hook-form";
export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      applicationType: "FOR VISA & RESIDENCY PURPOSE - RENEWAL",
      applicationNumber: "SCW14023524192",
      name: "MOHAMMAD MURSHEDUL ALAM",
      dateOfBirth: "1997-01-20",
      nationality: "BANGLADESH",
      gender: "MALE",
      passportNo: "EM0565236",
      civilNo: "130610975",
      sponsor: "(415) شيخ الفتاح حل خطاط",
      category: "SPONSOR RENEWAL - LABOUR & MUNICIPALITY HELTH CARD",
      ValidityoftheMedical: "2025-04-13",
      to: "2025-06-12",
      MedicalCenter: "SUNRISE MEDICAL CENTER LLC",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Application submitted successfully ✅");
      } else {
        alert("Failed to submit application ❌");
      }
    } catch (error) {
      return { message: error.message };
    }
  };

  const fields = [
    { name: "applicationType", label: "Application Type" },
    { name: "applicationNumber", label: "Application Number" },
    { name: "name", label: "Name" },
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
        Submit
      </button>
    </form>
  );
}
