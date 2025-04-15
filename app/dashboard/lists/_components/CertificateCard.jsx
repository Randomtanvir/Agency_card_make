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
        router.refresh(); // Refresh data after deletion
      } catch (error) {
        console.error("Delete error:", error);
        alert("Error deleting item ❌");
      }
    }
  };
  return (
    <div
      className="flex flex-col mt-5 items-center justify-center gap-2"
      key={application._id}
    >
      <div className="p-3 border flex gap-2 items-center ">
        <Link href={`/fitness_exam_wf/${application?.uniqueValue}`}>
          {application.name}
        </Link>
        <button
          onClick={() => handleDelete(application?.uniqueValue)}
          className="bg-red-500 text-white text-sm px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
