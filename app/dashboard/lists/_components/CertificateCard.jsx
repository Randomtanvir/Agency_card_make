"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CertificateCard = ({ application }) => {
  const router = useRouter();

  const handleDelete = async (value) => {
    if (confirm("Are you sure you want to delete this item?")) {
      try {
        const res = await fetch(`/api/application/${value}`, {
          method: "DELETE",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to delete");
        }
        console.log("Deleted:", data);
        alert("Deleted successfully ✅");
        router.refresh();
      } catch (error) {
        console.error("Delete error:", error);
        alert("Error deleting item ❌");
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      key={application._id}
    >
      <div className="p-4 w-full max-w-xl border rounded-lg shadow flex justify-between items-center bg-white hover:shadow-lg transition">
        <div>
          <Link
            href={`/fitness_exam_wf/${application?.uniqueValue}`}
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            {application.name}
          </Link>
          <p className="text-sm text-gray-500">
            Application No: {application.applicationNumber}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              router.push(`/dashboard/edit/${application?.uniqueValue}`)
            }
            className="bg-yellow-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-yellow-600 transition"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(application?.uniqueValue)}
            className="bg-red-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
