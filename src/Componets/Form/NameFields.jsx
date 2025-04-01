import React from "react";

const NameFields = ({ setFirstname, setLastname }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block mb-1">First Name</label>
        <input
          type="text"
          className="w-full h-[35px] rounded-md border border-[#9CA3AF] px-5 cursor-pointer text-base mt-1 hover:border-[#0A8270] focus:outline-none focus:border-[#0A8270]"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Last Name</label>
        <input
          type="text"
          className="w-full h-[35px] rounded-md border border-[#9CA3AF] px-5 cursor-pointer text-base mt-1 hover:border-[#0A8270] focus:outline-none focus:border-[#0A8270]"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NameFields;
