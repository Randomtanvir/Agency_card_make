import React from "react";

const Field = ({ engName = "", araName = "", value = "" }) => {
  return (
    <>
      <div className="flex justify-between">
        <span className="font-bold text-[14px] text-gray-900">{engName}:</span>
        <span className="font-bold text-right" dir="rtl">
          {araName}:
        </span>
      </div>
      <div className="text-center -mt-2">
        <span className="text-black text-[13px]">{value}</span>
      </div>
    </>
  );
};

export default Field;
