import React from "react";

const QueryTypeField = () => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <span className="block">Query Type</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label className="h-[45px] w-full rounded-md border border-[#9CA3AF] flex items-center px-3 cursor-pointer hover:border-[#0A8270]">
          <input
            type="radio"
            name="queryType"
            className="w-4 h-5 mx-2 cursor-pointer"
            value={"General Enquiry"}
          />
          General Enquiry
        </label>

        <label className="h-[45px] w-full rounded-md border border-[#9CA3AF] flex items-center px-3 cursor-pointer hover:border-[#0A8270]">
          <input
            type="radio"
            name="queryType"
            className="w-4 h-5 mx-2 cursor-pointer"
            value={"Support Request"}
          />
          Support Request
        </label>
      </div>
    </div>
  );
};

export default QueryTypeField;
