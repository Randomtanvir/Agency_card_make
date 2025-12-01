import Image from "next/image";

export default function MedicalStatusCard({ name, arabicName, isFit }) {
  return (
    <div className="max-w-md mx-auto border-[2px] border-[#EF4444] p-6 rounded-md text-center space-y-4">
      <div className="flex flex-col mt-8 mb-6 gap-4">
        <h2 className="text-black font-bold ">{arabicName}</h2>
        <h2 className="text-black font-bold ">{name}</h2>
        <div className="flex justify-between text-black font-bold">
          <h3>Medical Status</h3>
          <h3>الحالة الطبیة</h3>
        </div>
      </div>

      {/* Status Box */}
      <div className="border border-dashed border-[#7A7A7A] text-[#61CE70] text-xl py-2 ">
        {`${isFit || "FIT"} / لا ئق صحياً`}
      </div>

      {/* Certificate Stamp */}
      <div className="mt-4">
        <img
          width={200}
          height={200}
          src="/stamp.png"
          alt="Certificate Approved"
          className="mx-auto mt-8"
        />
      </div>
    </div>
  );
}
