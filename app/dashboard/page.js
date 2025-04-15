import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-screen items-center">
      <Link
        className="text-sm bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
        href="/dashboard/add"
      >
        Add a Certificate
      </Link>
      <Link
        className="text-sm bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
        href="/dashboard/lists"
      >
        Certificate list
      </Link>
      <Link
        className="text-sm bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
        href="/qrcode-generate"
      >
        QRcodeGenerator
      </Link>
    </div>
  );
};

export default DashboardPage;
