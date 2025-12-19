"use client";
import React from "react";
import Field from "./Field";
import MedicalStatusCard from "./MedicalStatusCard";
import { formatDate } from "@/utils/dateFormate";

const ExpatriatesMedicalCertificate = ({ certificateData }) => {
  // Using props instead of state
  // const certificateData = props.certificateData || {
  //   applicationType: "FOR VISA & RESIDENCY PURPOSE - RENEWAL",
  //   applicationNumber: "SCW14023524192",
  //   name: "MOHAMMAD MURSHEDUL ALAM",
  //   dateOfBirth: "20-01-1997",
  //   nationality: "BANGLADESH",
  //   gender: "MALE",
  //   passportNo: "EM0565236",
  //   civilNo: "130610975",
  //   sponsor: "(415) شيخ الفتاح حل خطاط",
  //   category: "SPONSOR RENEWAL - LABOUR & MUNICIPALITY HELTH CARD",
  //   ValidityoftheMedical: "13-04-2025",
  //   to: "12-06-2025",
  //   MedicalCenter: "SUNRISE MEDICAL CENTER LLC",
  // };

  return (
    <>
      <div className="max-w-md mb-3 font-[Montserrat] md:border mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-white p-2 pt-10 relative">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-[12px]  text-black">Sultanate of Oman</p>
              <p className="text-[12px]  text-black">Ministry of Health</p>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 relative">
                <img
                  className="mt-6"
                  src="https://mfs.moh.gov.om-fitness.com/assets/uploads/logos/3.png"
                  alt="logo"
                  width={60}
                  height={60}
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                />
              </div>
            </div>

            <div className="text-right font-[Siwa-Regular]">
              <p
                className="text-[14px] font-[Siwa-Regular] font-semibold text-black"
                dir="rtl"
              >
                سلطنة عُمان
              </p>
              <p className="text-[14px] font-semibold text-black" dir="rtl">
                وزارة الصحة
              </p>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="mt-10 text-center">
            <h2
              className="text-[20px] text-black font-bold font-[Montserrat] mb-1"
              dir="rtl"
            >
              شهادة الفحص الطبي للوافدين
            </h2>
            <h2 className="text-[20px] mt-1 text-black font-bold">
              Expatriates Medical Exam Certificate
            </h2>
          </div>
        </div>

        {/* Teal Border */}
        <div className="h-1 mb-3 mt-6 bg-[#1ad1d1]"></div>

        {/* Certificate Content */}
        <div className="bg-white p-4 flex flex-col gap-3 space-y-3">
          {/* Application Type */}
          <div className="border border-black  rounded-lg p-3">
            <div className="flex justify-between">
              <span className="font-bold text-gray-900">Application Type:</span>
              <span className=" text-right" dir="rtl">
                نوع الطلب:
              </span>
            </div>
            <div className="text-center text-xs mt-1">
              <span className="text-black">
                {certificateData.applicationType}
              </span>
            </div>
            {/* Application Number */}
            <div className="flex justify-between">
              <span className="font-bold text-gray-900">
                Application Number:
              </span>
              <span className=" text-right" dir="rtl">
                رقم الطلب:
              </span>
            </div>
            <div className="text-center text-xs mt-1">
              <span className="text-black">
                {certificateData.applicationNumber}
              </span>
            </div>
          </div>
          {/* Personal Information */}
          <div className="border border-black  rounded-lg p-3">
            {/* Name */}
            <div className="flex justify-between">
              <span className="font-bold text-[15px] text-gray-900">Name:</span>
              <span className=" text-right" dir="rtl">
                الاسم:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {certificateData.name}
              </span>
            </div>

            {/* Date of Birth */}
            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Date Of Birth:
              </span>
              <span className=" text-right" dir="rtl">
                تاريخ الميلاد:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {formatDate(certificateData?.dateOfBirth)}
              </span>
            </div>

            {/* Nationality */}
            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Nationality:
              </span>
              <span className="text-right" dir="rtl">
                الجنسية:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {certificateData.nationality}
              </span>
            </div>

            {/* Gender */}
            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Gender:
              </span>
              <span className=" text-right" dir="rtl">
                الجنس:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {certificateData.gender}
              </span>
            </div>

            {/* Passport No. */}
            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Passport No.:
              </span>
              <span className=" text-right" dir="rtl">
                رقم جواز السفر:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {certificateData.passportNo}
              </span>
            </div>

            {/* Civil No. */}
            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Civil No.:
              </span>
              <span className="text-right" dir="rtl">
                الرقم المدني:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {certificateData.civilNo}
              </span>
            </div>

            {/* Sponsor */}

            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Sponsor:
              </span>
              <span className=" text-right" dir="rtl">
                اسم الكفيل:
              </span>
            </div>
            <div className="text-center -mt-2">
              <span className="text-black text-[13px]">
                {certificateData.sponsor}
              </span>
            </div>

            {/* Category */}

            <div className="flex justify-between mt-3">
              <span className="font-bold text-[15px] text-gray-900">
                Category:
              </span>
              <span className="text-right" dir="rtl">
                الفئة:
              </span>
            </div>
            <div className="text-center ">
              <span className="text-black text-[12px]">
                {certificateData?.category}
              </span>
            </div>
          </div>
          {/* Expired Information */}
          <div className="border border-black  rounded-lg p-3">
            <Field
              engName="Validity of the Medical"
              araName="صلاحية الفحص الطبي"
              value={formatDate(certificateData?.ValidityoftheMedical)}
            />
            <Field
              engName="To"
              araName="إلى"
              value={formatDate(certificateData?.to)}
            />
            <Field
              engName="Medical Center"
              araName="المركز الطبي"
              value={certificateData?.MedicalCenter}
            />
          </div>
          <div>
            <MedicalStatusCard
              name={certificateData?.name}
              arabicName={certificateData?.arabicName}
              isFit={certificateData?.isFit}
            />
          </div>
        </div>
      </div>
      <p className="text-black text-[10px] mb-3 font-bold">Signature/Stamp</p>
    </>
  );
};

export default ExpatriatesMedicalCertificate;
